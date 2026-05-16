// =============================================================================
// api/translate.js — Vercel Serverless Proxy for Gemini Translation
// Made for Phyansy / Quantra
//
// WHY THIS FILE EXISTS:
//   Gemini API keys with HTTP-referrer restrictions cannot be called directly
//   from a browser — every student's browser is "not in the allowlist" and
//   gets a 403. Exposing the key in client JS also lets anyone steal it.
//
//   This proxy runs on Vercel's servers (same origin as the site → no CORS),
//   reads the key from an environment variable (never sent to the browser),
//   forwards the translation request to Gemini, and returns the result.
//
// SETUP (one-time, ~2 minutes):
//   1. Deploy this project to Vercel (free tier is fine).
//   2. In Vercel dashboard → Project → Settings → Environment Variables:
//      Add  GEMINI_API_KEY = <your key from aistudio.google.com>
//   3. In Google Cloud Console → Credentials → your API key:
//      REMOVE all HTTP referrer restrictions (they're useless server-side).
//      Optionally restrict by IP (Vercel IPs) or leave unrestricted.
//   4. Redeploy. Translation will work for every student on every browser.
//
// RATE LIMITING:
//   Gemini Flash free tier allows 15 RPM / 1,000,000 TPD.
//   For a physics reference site that's plenty — translation results are
//   cached in each student's localStorage for 30 days, so repeat requests
//   are served locally without touching this proxy at all.
// =============================================================================

export const config = { runtime: 'nodejs20.x' };

// Allowed language codes — reject unknown codes early so we never forward
// garbage to Gemini.
const ALLOWED_LANGS = new Set([
  'es', 'zh', 'hi', 'ar', 'fr', 'bn', 'pt', 'ru', 'ja', 'de',
  'ta', 'te', 'mr',
]);

// Max size of the incoming JSON body (bytes). 32 KB is generous for a batch
// of physics explanations; anything larger is almost certainly abuse.
const MAX_BODY_BYTES = 32 * 1024;

export default async function handler(req, res) {
  // ── CORS headers ────────────────────────────────────────────────────────────
  // Allow the browser to call this from the same Vercel domain. If you use a
  // custom domain, add it here too.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // ── Environment guard ────────────────────────────────────────────────────────
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[translate] GEMINI_API_KEY environment variable is not set');
    res.status(500).json({ error: 'Translation service is not configured.' });
    return;
  }

  // ── Body size guard ──────────────────────────────────────────────────────────
  const contentLength = parseInt(req.headers['content-length'] || '0', 10);
  if (contentLength > MAX_BODY_BYTES) {
    res.status(413).json({ error: 'Request body too large' });
    return;
  }

  // ── Parse body ───────────────────────────────────────────────────────────────
  let body;
  try {
    // Vercel provides req.body already parsed when Content-Type is application/json
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    res.status(400).json({ error: 'Invalid JSON body' });
    return;
  }

  const { fields, lang, equationName } = body || {};

  // ── Input validation ─────────────────────────────────────────────────────────
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) {
    res.status(400).json({ error: 'Missing or invalid "fields" parameter' });
    return;
  }
  if (!lang || typeof lang !== 'string' || !ALLOWED_LANGS.has(lang)) {
    res.status(400).json({ error: 'Missing or unsupported "lang" parameter' });
    return;
  }
  if (Object.keys(fields).length === 0) {
    res.status(200).json({});
    return;
  }

  // ── Build Gemini request (identical structure to the old client-side call) ───
  const LANG_NAMES = {
    es: 'Spanish',   zh: 'Simplified Chinese', hi: 'Hindi',    ar: 'Arabic',
    fr: 'French',    bn: 'Bengali',            pt: 'Portuguese', ru: 'Russian',
    ja: 'Japanese',  de: 'German',
    ta: 'Tamil',     te: 'Telugu',             mr: 'Marathi',
  };

  const targetLang = LANG_NAMES[lang] || lang;
  const eqName     = typeof equationName === 'string' ? equationName.slice(0, 200) : '';

  const fieldList = Object.entries(fields)
    .map(([field, text]) => `--- FIELD: ${field} ---\n${text}`)
    .join('\n\n');

  const systemPrompt =
    `You are a precise physics education translator. Translate physics explanations into ${targetLang} for students.

STRICT RULES:
1. Translate ONLY the natural-language prose.
2. LaTeX inside \\( \\) or \\[ \\] must be copied EXACTLY as-is. Never modify LaTeX.
3. Equation names stay in English.
4. Variable symbols (F, m, a, v, E, p, T, etc.) stay in English/Latin.
5. SI unit names (Newton, Joule, Tesla, Pascal, etc.) stay in English.
6. Physicist names (Newton, Einstein, Planck, Faraday, etc.) stay in English.
7. Physics branch names stay in English.
8. Numbers and operators are never changed.
9. Preserve paragraph structure.
10. Return ONLY valid JSON. No preamble, no markdown fences.

OUTPUT: {"field1": "translated text", "field2": "translated text"}

Equation context: "${eqName}"`;

  const geminiEndpoint =
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  let geminiRes;
  try {
    geminiRes = await fetch(geminiEndpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: [{
          parts: [{
            text: `${fieldList}\n\nTranslate into ${targetLang}. Return only JSON.`,
          }],
        }],
        generationConfig: {
          responseMimeType: 'application/json',
          maxOutputTokens:  8192,
        },
      }),
    });
  } catch (networkErr) {
    console.error('[translate] Network error reaching Gemini:', networkErr);
    res.status(502).json({ error: 'Could not reach translation service' });
    return;
  }

  if (!geminiRes.ok) {
    const errText = await geminiRes.text().catch(() => '');
    console.error('[translate] Gemini API error', geminiRes.status, errText);
    res.status(502).json({ error: `Gemini API error: ${geminiRes.status}` });
    return;
  }

  let data;
  try {
    data = await geminiRes.json();
  } catch {
    res.status(502).json({ error: 'Invalid response from translation service' });
    return;
  }

  // ── Extract and validate the JSON translation result ─────────────────────────
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  const clean   = rawText
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```\s*$/i, '')
    .trim();

  if (!clean) {
    console.warn('[translate] Empty response from Gemini');
    res.status(200).json({});
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(clean);
  } catch (parseErr) {
    console.warn('[translate] Gemini returned non-JSON:', clean.slice(0, 200));
    res.status(200).json({});
    return;
  }

  // Only return fields that were requested and are non-empty strings
  const safeResult = {};
  Object.keys(fields).forEach(field => {
    if (parsed[field] && typeof parsed[field] === 'string') {
      safeResult[field] = parsed[field];
    }
  });

  res.status(200).json(safeResult);
}
