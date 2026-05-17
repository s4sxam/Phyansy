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
// MODEL CASCADE (why we have multiple models):
//   Free-tier Gemini has per-model RPM quotas. When many students hit the
//   site at once, the primary model can return 429 (Too Many Requests).
//   We cascade through models with separate quota pools so at least one
//   succeeds. Models deprecated/removed from v1beta are never used.
//
//   Current cascade order (all confirmed live on v1beta as of 2025-05):
//     1. gemini-2.0-flash          — fastest, primary
//     2. gemini-2.0-flash-lite     — lighter, separate quota pool
//     3. gemini-2.5-flash-preview-05-20 — latest, separate quota pool
//
//   NOTE: gemini-1.5-flash was REMOVED from v1beta and will 404 — never use it.
//
// RATE LIMITING:
//   Gemini Flash free tier allows 15 RPM / 1,000,000 TPD per model.
//   Translation results are cached in each student's localStorage for 30 days,
//   so repeat requests are served locally without hitting this proxy at all.
// =============================================================================

export const config = { runtime: 'nodejs' };

// ── Model cascade ─────────────────────────────────────────────────────────────
// Order matters: fastest/cheapest first. Each entry has its own quota pool on
// Google's side, so a 429 on model[0] does NOT mean model[1] is also exhausted.
//
// NEVER add gemini-1.5-flash or gemini-1.5-pro — they are removed from v1beta
// and will always return 404, wasting the student's time.
const MODEL_CASCADE = [
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-2.5-flash-preview-05-20',
];

// How long to wait before retrying the SAME model on a 429 (ms).
// We only do one same-model retry if the server gives us a retryAfter hint
// and it's short (≤ 8 s). Otherwise we immediately fall to the next model.
const MAX_SAME_MODEL_RETRY_MS = 8_000;

// Allowed language codes — reject unknown codes early so we never forward
// garbage to Gemini.
const ALLOWED_LANGS = new Set([
  'es', 'zh', 'hi', 'ar', 'fr', 'bn', 'pt', 'ru', 'ja', 'de',
  'ta', 'te', 'mr',
]);

// Max size of the incoming JSON body (bytes). 32 KB is generous for a batch
// of physics explanations; anything larger is almost certainly abuse.
const MAX_BODY_BYTES = 32 * 1024;

// Language display names for the translation prompt
const LANG_NAMES = {
  es: 'Spanish',   zh: 'Simplified Chinese', hi: 'Hindi',     ar: 'Arabic',
  fr: 'French',    bn: 'Bengali',            pt: 'Portuguese', ru: 'Russian',
  ja: 'Japanese',  de: 'German',
  ta: 'Tamil',     te: 'Telugu',             mr: 'Marathi',
};

// ── Helper: call one Gemini model ─────────────────────────────────────────────
// Returns: { ok: true, data } | { ok: false, status, retryAfter? }
async function callGeminiModel(modelName, apiKey, systemPrompt, userText) {
  const endpoint =
    `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  let res;
  try {
    res = await fetch(endpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: [{ parts: [{ text: userText }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          maxOutputTokens:  8192,
        },
      }),
    });
  } catch (networkErr) {
    console.error(`[translate] Network error reaching Gemini (${modelName}):`, networkErr.message);
    return { ok: false, status: 502 };
  }

  if (res.ok) {
    try {
      const data = await res.json();
      return { ok: true, data };
    } catch {
      return { ok: false, status: 502 };
    }
  }

  // Not OK — parse the error body to get retryAfter on 429
  const errText = await res.text().catch(() => '');
  console.warn(`[translate] ${modelName} error ${res.status}:`, errText.slice(0, 300));

  let retryAfter = null;
  if (res.status === 429) {
    // Google returns retryDelay like "33s" in the error JSON
    try {
      const errJson = JSON.parse(errText);
      const delay = errJson?.error?.details?.find(d => d['@type']?.includes('RetryInfo'))?.retryDelay;
      if (delay) {
        // retryDelay is "33s" or "PT33S" — extract the number
        const secs = parseInt(delay.replace(/\D/g, ''), 10);
        if (!isNaN(secs)) retryAfter = secs * 1000; // convert to ms
      }
    } catch {}

    // Also check the Retry-After header (some Gemini variants send it)
    const headerRetry = res.headers.get('Retry-After');
    if (headerRetry && !retryAfter) {
      const secs = parseInt(headerRetry, 10);
      if (!isNaN(secs)) retryAfter = secs * 1000;
    }

    console.warn(`[translate] ${modelName} quota exhausted (429), retryAfter=${retryAfter ? retryAfter / 1000 + 's' : 'unknown'}`);
  }

  return { ok: false, status: res.status, retryAfter };
}

// ── Helper: sleep ─────────────────────────────────────────────────────────────
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// ── Helper: extract and parse translated JSON from Gemini response ─────────────
function extractTranslation(data, requestedFields) {
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  const clean = rawText
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```\s*$/i, '')
    .trim();

  if (!clean) return null;

  let parsed;
  try {
    parsed = JSON.parse(clean);
  } catch {
    console.warn('[translate] Gemini returned non-JSON:', clean.slice(0, 200));
    return null;
  }

  // Only return fields that were requested and are non-empty strings
  const safeResult = {};
  Object.keys(requestedFields).forEach(field => {
    if (parsed[field] && typeof parsed[field] === 'string') {
      safeResult[field] = parsed[field];
    }
  });

  return safeResult;
}

// ── Main handler ──────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // ── CORS headers ─────────────────────────────────────────────────────────────
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

  // ── Environment guard ─────────────────────────────────────────────────────────
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[translate] GEMINI_API_KEY environment variable is not set');
    res.status(500).json({ error: 'Translation service is not configured.' });
    return;
  }

  // ── Body size guard ───────────────────────────────────────────────────────────
  const contentLength = parseInt(req.headers['content-length'] || '0', 10);
  if (contentLength > MAX_BODY_BYTES) {
    res.status(413).json({ error: 'Request body too large' });
    return;
  }

  // ── Parse body ────────────────────────────────────────────────────────────────
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    res.status(400).json({ error: 'Invalid JSON body' });
    return;
  }

  const { fields, lang, equationName } = body || {};

  // ── Input validation ──────────────────────────────────────────────────────────
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

  // ── Build prompt (identical structure to what worked before) ──────────────────
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

  const userText = `${fieldList}\n\nTranslate into ${targetLang}. Return only JSON.`;

  // ── Model cascade with retry logic ────────────────────────────────────────────
  // Strategy:
  //   For each model in CASCADE:
  //     1. Try the model.
  //     2. On 429: if retryAfter is short (≤ MAX_SAME_MODEL_RETRY_MS), wait and
  //        retry ONCE on the same model. Otherwise skip to the next model.
  //     3. On 404: skip immediately (model removed from API).
  //     4. On success: return the result.
  //   If ALL models fail: return 503 with Retry-After so the client backs off.

  let lastRetryAfterSec = 60; // fallback hint to client if everything fails

  for (let i = 0; i < MODEL_CASCADE.length; i++) {
    const modelName = MODEL_CASCADE[i];
    console.log(`[translate] Trying model: ${modelName}, lang: ${lang}`);

    let result = await callGeminiModel(modelName, apiKey, systemPrompt, userText);

    // Same-model retry on 429 if the wait is short enough
    if (!result.ok && result.status === 429 && result.retryAfter && result.retryAfter <= MAX_SAME_MODEL_RETRY_MS) {
      console.log(`[translate] ${modelName}: waiting ${result.retryAfter}ms then retrying same model`);
      await sleep(result.retryAfter);
      result = await callGeminiModel(modelName, apiKey, systemPrompt, userText);
    }

    if (result.ok) {
      const translation = extractTranslation(result.data, fields);

      if (translation === null || Object.keys(translation).length === 0) {
        // Gemini responded but gave us nothing useful — try next model
        console.warn(`[translate] ${modelName} returned empty/unparseable result, trying next model`);
        continue;
      }

      // ✅ Success
      console.log(`[translate] ${modelName} succeeded for lang: ${lang}`);
      res.status(200).json(translation);
      return;
    }

    // 404 = model removed from API — skip silently (already logged in callGeminiModel)
    // 429 = quota still exhausted after retry — move to next model
    // 5xx = upstream error — move to next model
    if (result.retryAfter) {
      // Track the longest retryAfter seen for the client hint
      lastRetryAfterSec = Math.max(lastRetryAfterSec, Math.ceil(result.retryAfter / 1000));
    }
  }

  // ── All models failed ─────────────────────────────────────────────────────────
  // Return 503 (Service Unavailable) with a Retry-After header.
  // The client reads this header and waits before trying again, rather than
  // hammering the endpoint and making the quota problem worse.
  console.error(`[translate] All models exhausted for lang: ${lang}. Returning 503.`);
  res.setHeader('Retry-After', String(lastRetryAfterSec));
  res.status(503).json({
    error: 'Translation service temporarily unavailable. Please try again shortly.',
    retryAfter: lastRetryAfterSec,
  });
}
