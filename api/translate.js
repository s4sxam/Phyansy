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
// MODEL CASCADE (why we have multiple models + correct names):
//   Free-tier Gemini has per-model RPM AND daily quotas. When many students
//   hit the site at once, we cascade through models with separate quota pools.
//
//   Each model is tried on the v1beta endpoint. If v1beta returns 404 for a
//   model, we automatically retry it on the v1 endpoint (stable GA models
//   live there). This future-proofs the cascade as Google migrates models.
//
//   Current cascade (verified live, May 2026):
//     1. gemini-2.0-flash          v1beta  — fastest, primary
//     2. gemini-2.0-flash-lite     v1beta  — lighter, own quota pool
//     3. gemini-2.5-flash-preview-04-17  v1beta — latest preview, own pool
//     4. gemini-2.0-flash          v1      — same model, separate GA quota
//
//   DEAD models (404 on v1beta — never use):
//     ✗ gemini-1.5-flash           — removed from v1beta
//     ✗ gemini-1.5-flash-latest    — removed from v1beta
//     ✗ gemini-2.5-flash-preview-05-20 — wrong name (404 confirmed in prod)
//
// RATE LIMITING:
//   Gemini Flash free tier: 15 RPM / 1,000,000 TPD per model per key.
//   Translation results are cached in each student's localStorage for 30 days,
//   so repeat requests are served locally without hitting this proxy at all.
//
// QUOTA EXHAUSTION STRATEGY:
//   When retryAfter is long (> SHORT_RETRY_THRESHOLD), we do NOT block the
//   Vercel function waiting. We immediately cascade to the next model.
//   Only if ALL models fail do we return 503 with the best retryAfter hint,
//   letting the client handle the wait and auto-retry silently in background.
// =============================================================================

export const config = { runtime: 'nodejs' };

// ── Model cascade ─────────────────────────────────────────────────────────────
// Each entry: { model, apiVersion }
// apiVersion 'v1beta' is tried first. If a model 404s on v1beta, we do NOT
// retry on v1 automatically — v1 and v1beta have different model availability.
// Instead, each entry explicitly declares its version.
const MODEL_CASCADE = [
  { model: 'gemini-2.0-flash',               apiVersion: 'v1beta' },
  { model: 'gemini-2.0-flash-lite',          apiVersion: 'v1beta' },
  { model: 'gemini-2.5-flash-preview-04-17', apiVersion: 'v1beta' },
  { model: 'gemini-2.0-flash',               apiVersion: 'v1'     }, // GA endpoint, own quota
];

// On 429, only wait and retry the same model if retryAfter is this short.
// If it's longer, we skip immediately to the next model — no point blocking
// a Vercel function for 38+ seconds when another quota pool is free.
const SHORT_RETRY_MS = 6_000;

// Allowed language codes
const ALLOWED_LANGS = new Set([
  'es', 'zh', 'hi', 'ar', 'fr', 'bn', 'pt', 'ru', 'ja', 'de',
  'ta', 'te', 'mr',
]);

// Max body size: 32 KB is generous for a batch of physics explanations.
const MAX_BODY_BYTES = 32 * 1024;

// Language display names for the translation prompt
const LANG_NAMES = {
  es: 'Spanish',   zh: 'Simplified Chinese', hi: 'Hindi',     ar: 'Arabic',
  fr: 'French',    bn: 'Bengali',            pt: 'Portuguese', ru: 'Russian',
  ja: 'Japanese',  de: 'German',
  ta: 'Tamil',     te: 'Telugu',             mr: 'Marathi',
};

// ── Helper: call one Gemini model ─────────────────────────────────────────────
// Returns: { ok: true, data } | { ok: false, status, retryAfter?, skip }
// skip=true means this model is permanently broken (404) — never try again
async function callGeminiModel({ model, apiVersion }, apiKey, systemPrompt, userText) {
  const endpoint =
    `https://generativelanguage.googleapis.com/${apiVersion}/models/${model}:generateContent?key=${apiKey}`;

  let res;
  try {
    res = await fetch(endpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents:          [{ parts: [{ text: userText }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          maxOutputTokens:  8192,
        },
      }),
    });
  } catch (networkErr) {
    console.error(`[translate] Network error (${model}/${apiVersion}):`, networkErr.message);
    return { ok: false, status: 502 };
  }

  if (res.ok) {
    try {
      return { ok: true, data: await res.json() };
    } catch {
      return { ok: false, status: 502 };
    }
  }

  const errText = await res.text().catch(() => '');

  // 404 = model not found on this API version — permanent, skip it
  if (res.status === 404) {
    console.warn(`[translate] ${model} error 404: not found on ${apiVersion} — skipping permanently`);
    return { ok: false, status: 404, skip: true };
  }

  // 429 = quota exhausted — extract retryAfter from response
  let retryAfter = null;
  if (res.status === 429) {
    // Google embeds retryDelay in the error details array: { retryDelay: "38s" }
    try {
      const errJson = JSON.parse(errText);
      const details = errJson?.error?.details ?? [];
      const retryInfo = details.find(d =>
        d['@type']?.includes('RetryInfo') || d.retryDelay !== undefined
      );
      if (retryInfo?.retryDelay) {
        const raw = String(retryInfo.retryDelay); // "38s" or "PT38S"
        const secs = parseInt(raw.replace(/\D/g, ''), 10);
        if (!isNaN(secs) && secs > 0) retryAfter = secs * 1000;
      }
    } catch {}

    // Fallback: Retry-After HTTP header
    if (!retryAfter) {
      const h = res.headers.get('Retry-After');
      if (h) {
        const secs = parseInt(h, 10);
        if (!isNaN(secs) && secs > 0) retryAfter = secs * 1000;
      }
    }

    console.warn(
      `[translate] ${model} quota exhausted (429),`,
      retryAfter ? `retryAfter=${retryAfter / 1000}s` : 'retryAfter=unknown'
    );
  } else {
    console.warn(`[translate] ${model} error ${res.status}:`, errText.slice(0, 200));
  }

  return { ok: false, status: res.status, retryAfter };
}

// ── Helper: sleep ─────────────────────────────────────────────────────────────
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── Helper: extract and validate JSON translation from Gemini response ─────────
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
    console.warn('[translate] Non-JSON response from Gemini:', clean.slice(0, 200));
    return null;
  }

  const safeResult = {};
  Object.keys(requestedFields).forEach(field => {
    if (parsed[field] && typeof parsed[field] === 'string') {
      safeResult[field] = parsed[field];
    }
  });

  return Object.keys(safeResult).length > 0 ? safeResult : null;
}

// ── Main handler ──────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // ── CORS ──────────────────────────────────────────────────────────────────────
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }
  if (req.method !== 'POST')    { res.status(405).json({ error: 'Method not allowed' }); return; }

  // ── Environment guard ─────────────────────────────────────────────────────────
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[translate] GEMINI_API_KEY not set');
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

  // ── Build prompt ──────────────────────────────────────────────────────────────
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

  // ── Model cascade ─────────────────────────────────────────────────────────────
  //
  // Rules:
  //   • 404 → skip immediately (model dead on this API version)
  //   • 429, retryAfter SHORT (≤ SHORT_RETRY_MS) → wait + retry once, then cascade
  //   • 429, retryAfter LONG  (> SHORT_RETRY_MS) → skip immediately to next model
  //     (38s+ wait inside a Vercel function = timeout risk + wastes everyone's time)
  //   • Success + empty result → skip (Gemini hallucinated, try next)
  //   • Success + valid JSON   → return 200 ✅
  //   • All models failed      → 503 + Retry-After header

  let bestRetryAfterSec = 60; // hint to client when all models fail

  for (const entry of MODEL_CASCADE) {
    const { model, apiVersion } = entry;
    console.log(`[translate] Trying model: ${model} (${apiVersion}), lang: ${lang}`);

    let result = await callGeminiModel(entry, apiKey, systemPrompt, userText);

    // 404 = permanently broken on this endpoint — never retry
    if (result.status === 404) continue;

    // 429 with a SHORT retryAfter → wait and try this same model once more
    if (
      !result.ok &&
      result.status === 429 &&
      result.retryAfter &&
      result.retryAfter <= SHORT_RETRY_MS
    ) {
      console.log(`[translate] ${model}: short wait ${result.retryAfter}ms, retrying...`);
      await sleep(result.retryAfter);
      result = await callGeminiModel(entry, apiKey, systemPrompt, userText);
    }

    // Track the best retryAfter hint for the eventual 503 (if needed)
    if (!result.ok && result.retryAfter) {
      bestRetryAfterSec = Math.max(bestRetryAfterSec, Math.ceil(result.retryAfter / 1000));
    }

    if (!result.ok) continue; // 429 long-wait, 5xx, network — cascade to next model

    // Model responded — validate the translation
    const translation = extractTranslation(result.data, fields);
    if (!translation) {
      console.warn(`[translate] ${model} gave empty/unparseable result — trying next`);
      continue;
    }

    // ✅ Success
    console.log(`[translate] ${model} (${apiVersion}) succeeded for lang: ${lang}`);
    res.status(200).json(translation);
    return;
  }

  // ── All models failed ─────────────────────────────────────────────────────────
  // 503 + Retry-After: client will show English content immediately and
  // silently retry in the background after the hint delay.
  console.error(`[translate] All ${MODEL_CASCADE.length} model slots exhausted for lang: ${lang}. Returning 503.`);
  res.setHeader('Retry-After', String(bestRetryAfterSec));
  res.status(503).json({
    error:      'Translation service temporarily unavailable due to quota. Please try again shortly.',
    retryAfter: bestRetryAfterSec,
  });
}
