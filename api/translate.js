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
// QUOTA STRATEGY (multi-model fallback):
//   When the primary model's quota is exhausted (429), we automatically fall
//   through to the next model in the chain — each has its own independent
//   quota pool on the free tier:
//
//     1. gemini-2.0-flash        ← fastest, best quality
//     2. gemini-1.5-flash        ← independent quota pool, still excellent
//     3. gemini-1.5-flash-8b    ← smallest, but handles physics text fine
//
//   If ALL three models are rate-limited, we return HTTP 429 to the client
//   with a Retry-After header so it can back off and show a friendly message.
//
// RATE LIMITING (server-side, per IP):
//   Free-tier Gemini allows 15 RPM total. We enforce 10 RPM per IP to leave
//   headroom for concurrent students. A sliding window Map tracks request
//   timestamps. This prevents a single user hammering the quota for everyone.
//
// CACHING NOTE:
//   Translation results are cached in each student's localStorage for 30 days,
//   so repeat requests are served locally without touching this proxy at all.
// =============================================================================

export const config = { runtime: 'nodejs' };

// ── Model fallback chain ──────────────────────────────────────────────────────
// Each model has its own independent free-tier quota pool.
// Order: best quality first, smallest last as final fallback.
const MODEL_CHAIN = [
  'gemini-2.0-flash',
  'gemini-1.5-flash',
  'gemini-1.5-flash-8b',
];

// ── Allowed language codes ────────────────────────────────────────────────────
const ALLOWED_LANGS = new Set([
  'es', 'zh', 'hi', 'ar', 'fr', 'bn', 'pt', 'ru', 'ja', 'de',
  'ta', 'te', 'mr',
]);

const LANG_NAMES = {
  es: 'Spanish',   zh: 'Simplified Chinese', hi: 'Hindi',      ar: 'Arabic',
  fr: 'French',    bn: 'Bengali',            pt: 'Portuguese', ru: 'Russian',
  ja: 'Japanese',  de: 'German',
  ta: 'Tamil',     te: 'Telugu',             mr: 'Marathi',
};

// Max size of the incoming JSON body (bytes). 32 KB is generous for a batch
// of physics explanations; anything larger is almost certainly abuse.
const MAX_BODY_BYTES = 32 * 1024;

// ── Per-IP rate limiting ──────────────────────────────────────────────────────
// Sliding window: max 10 requests per IP per 60-second window.
// Using a module-level Map — persists across warm Vercel function invocations.
// Vercel serverless functions can be warm for minutes; this is intentional.
const IP_WINDOW_MS  = 60 * 1000; // 1 minute window
const IP_MAX_REQ    = 10;         // max requests per IP per window

// Map<ip, number[]>  — stores timestamps of recent requests per IP
const _ipTimestamps = new Map();

// Prune stale IPs every ~50 requests to avoid unbounded Map growth
let _pruneCounter = 0;

function _isRateLimited(ip) {
  const now  = Date.now();
  const prev = _ipTimestamps.get(ip) ?? [];

  // Keep only timestamps within the current window
  const recent = prev.filter(t => now - t < IP_WINDOW_MS);

  if (recent.length >= IP_MAX_REQ) {
    // Don't record this request — it's rejected
    _ipTimestamps.set(ip, recent);
    return true;
  }

  recent.push(now);
  _ipTimestamps.set(ip, recent);

  // Periodic cleanup of stale IPs
  if (++_pruneCounter % 50 === 0) {
    for (const [k, ts] of _ipTimestamps) {
      if (ts.every(t => now - t >= IP_WINDOW_MS)) _ipTimestamps.delete(k);
    }
  }

  return false;
}

// ── Gemini single-model call ──────────────────────────────────────────────────
// Returns: { ok: true, data: {...} }
//        | { ok: false, status: 429, retryAfter: N }   ← quota exhausted
//        | { ok: false, status: N,   message: '...' }  ← other error
async function _callGemini(model, apiKey, systemPrompt, userText) {
  const endpoint =
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

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
    console.error(`[translate] Network error (${model}):`, networkErr.message);
    return { ok: false, status: 502, message: 'Network error reaching Gemini' };
  }

  if (res.status === 429) {
    // Parse Retry-After from Gemini's error body if available
    let retryAfter = 60; // conservative default
    try {
      const errJson = await res.json();
      // Gemini embeds retryDelay like "47s" in details[].retryDelay
      const details = errJson?.error?.details ?? [];
      const retryInfo = details.find(d => d['@type']?.includes('RetryInfo'));
      if (retryInfo?.retryDelay) {
        const seconds = parseInt(retryInfo.retryDelay, 10);
        if (!isNaN(seconds)) retryAfter = seconds;
      }
    } catch {}
    console.warn(`[translate] ${model} quota exhausted (429), retryAfter=${retryAfter}s`);
    return { ok: false, status: 429, retryAfter };
  }

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    console.error(`[translate] Gemini ${model} error ${res.status}:`, errText.slice(0, 300));
    return { ok: false, status: res.status, message: `Gemini API error: ${res.status}` };
  }

  let data;
  try {
    data = await res.json();
  } catch {
    return { ok: false, status: 502, message: 'Invalid JSON from Gemini' };
  }

  return { ok: true, data };
}

// ── Main handler ──────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // CORS headers
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

  // ── Environment guard ──────────────────────────────────────────────────────
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[translate] GEMINI_API_KEY environment variable is not set');
    res.status(500).json({ error: 'Translation service is not configured.' });
    return;
  }

  // ── Per-IP rate limit ──────────────────────────────────────────────────────
  // Vercel sets x-forwarded-for; fall back to req.socket.remoteAddress
  const clientIP =
    (req.headers['x-forwarded-for'] ?? '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  if (_isRateLimited(clientIP)) {
    console.warn(`[translate] Rate limit hit for IP: ${clientIP}`);
    res.setHeader('Retry-After', '60');
    res.status(429).json({
      error: 'Too many translation requests. Please wait a moment.',
      retryAfter: 60,
    });
    return;
  }

  // ── Body size guard ────────────────────────────────────────────────────────
  const contentLength = parseInt(req.headers['content-length'] || '0', 10);
  if (contentLength > MAX_BODY_BYTES) {
    res.status(413).json({ error: 'Request body too large' });
    return;
  }

  // ── Parse body ─────────────────────────────────────────────────────────────
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    res.status(400).json({ error: 'Invalid JSON body' });
    return;
  }

  const { fields, lang, equationName } = body || {};

  // ── Input validation ───────────────────────────────────────────────────────
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

  // ── Build prompts ──────────────────────────────────────────────────────────
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

  // ── Model fallback loop ────────────────────────────────────────────────────
  // Try each model in order. On 429 (quota), move to the next model.
  // On any other error, stop immediately.
  let lastRetryAfter = 60;
  let result = null;

  for (const model of MODEL_CHAIN) {
    console.log(`[translate] Trying model: ${model}, lang: ${lang}`);
    const attempt = await _callGemini(model, apiKey, systemPrompt, userText);

    if (attempt.ok) {
      result = attempt.data;
      console.log(`[translate] Success with model: ${model}`);
      break;
    }

    if (attempt.status === 429) {
      // Quota exhausted on this model — try next in chain
      lastRetryAfter = attempt.retryAfter ?? lastRetryAfter;
      continue;
    }

    // Non-quota error (5xx, 4xx other than 429) — don't try other models
    // Return 502 to indicate upstream failure (not a client error)
    res.status(502).json({ error: attempt.message || 'Translation service error' });
    return;
  }

  if (!result) {
    // All models exhausted their quota
    console.warn('[translate] All models quota-exhausted. Returning 429 to client.');
    res.setHeader('Retry-After', String(lastRetryAfter));
    res.status(429).json({
      error: 'Translation service is temporarily busy due to high demand. Please try again in a minute.',
      retryAfter: lastRetryAfter,
    });
    return;
  }

  // ── Extract and validate the JSON translation result ───────────────────────
  const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
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
