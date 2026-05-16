// =============================================================================
// langController.js — Phyansy i18n System (Phase 2 — Multi-language)
// Made by Tanay (s4sxam)
//
// ARCHITECTURE:
//   • Static UI strings  — nav, section headers, modal labels (instant, no AI)
//   • AI-translated text — whatItSays, deepMeaning, whyItMatters, etc. (on-demand)
//   • Physics terms stay in English always — universal language of physics
//   • RTL full layout support (Arabic)
//   • CJK typography adjustments (Chinese, Japanese)
//   • Two-tier cache: session memory (Map) + localStorage (30-day expiry)
//
// IMPORTANT: formulas, variable symbols, SI units — NEVER translated.
// =============================================================================

import { UI_STRINGS, RTL_LANGS, CJK_LANGS, INDIC_LANGS } from '../data/locales/ui-strings.js';

const LANG_KEY      = 'quantra_lang';
const CACHE_KEY_PFX = 'phyansy_trans_';
// v2: bumped from v1 because the old maxOutputTokens:2000 limit caused Gemini
// to truncate mid-JSON, which wrote empty/partial results into v1 cache keys.
// Those poisoned entries would silently serve English forever even after deploy.
// v2 keys are a clean slate — old v1 keys are ignored and naturally expire.
const CACHE_VERSION = 'v2';

let _currentLang   = 'en';
const _subscribers = [];
const _sessionCache = new Map();

function _read(key, fallback = null) {
  try { const v = localStorage.getItem(key); return v !== null ? v : fallback; }
  catch { return fallback; }
}
function _write(key, value) {
  try { localStorage.setItem(key, value); } catch {}
}
function _remove(key) {
  try { localStorage.removeItem(key); } catch {}
}
function _hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) ^ str.charCodeAt(i);
  return (h >>> 0).toString(36);
}

export function getCurrentLang() { return _currentLang; }
export function isRTL(lang = _currentLang) { return RTL_LANGS.has(lang); }
export function isCJK(lang = _currentLang) { return CJK_LANGS.has(lang); }
export function isIndic(lang = _currentLang) { return INDIC_LANGS.has(lang); }
export function onLangChange(cb) { _subscribers.push(cb); }

export function t(key, lang = _currentLang) {
  return (UI_STRINGS[lang] && UI_STRINGS[lang][key])
    ?? UI_STRINGS['en'][key]
    ?? key;
}

export function initLangController() {
  const saved = _read(LANG_KEY, 'en');
  _currentLang = saved;
  _applyLangToDOM(_currentLang);
}

export async function setLang(lang) {
  if (lang === _currentLang) return;
  _currentLang = lang;
  _write(LANG_KEY, lang);
  _applyLangToDOM(lang);
  _notifySubscribers();
}

function _applyLangToDOM(lang) {
  const html = document.documentElement;
  if (RTL_LANGS.has(lang)) {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('data-dir', 'rtl');
  } else {
    html.setAttribute('dir', 'ltr');
    html.removeAttribute('data-dir');
  }
  if (CJK_LANGS.has(lang)) {
    html.setAttribute('data-cjk', 'true');
  } else {
    html.removeAttribute('data-cjk');
  }
  // Indic scripts (Hindi, Bengali, Tamil, Telugu, Marathi) need Noto Sans loaded.
  // We lazy-load only the font subset needed for the chosen script — not all at once.
  // Each subset is < 60KB woff2. We set data-indic so lang.css can apply the stack.
  if (INDIC_LANGS.has(lang)) {
    html.setAttribute('data-indic', lang);
    _loadIndicFont(lang);
  } else {
    html.removeAttribute('data-indic');
  }
  html.setAttribute('lang', lang);
  _applyStaticStrings(lang);
}

// ── Lazy Indic font loader ────────────────────────────────────────────────────
// Loads the Google Fonts Noto Sans subset for the given Indic script.
// Called at most once per script per session (Set tracks loaded scripts).
// Font requests are tiny woff2 subsets (40–80KB) — no perceptible delay.
const _loadedIndicFonts = new Set();
function _loadIndicFont(lang) {
  if (_loadedIndicFonts.has(lang)) return;
  _loadedIndicFonts.add(lang);

  // Google Fonts API query for each Indic script subset
  const fontMap = {
    hi: 'Noto+Sans:ital,wght@0,400;0,500;0,700&subset=devanagari',
    mr: 'Noto+Sans:ital,wght@0,400;0,500;0,700&subset=devanagari',
    bn: 'Noto+Sans+Bengali:wght@400;500;700',
    ta: 'Noto+Sans+Tamil:wght@400;500;700',
    te: 'Noto+Sans+Telugu:wght@400;500;700',
  };
  const query = fontMap[lang];
  if (!query) return;

  const link = document.createElement('link');
  link.rel  = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${query}&display=swap`;
  document.head.appendChild(link);
}

function _applyStaticStrings(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const str = t(key, lang);
    if (str) el.textContent = str;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const str = t(key, lang);
    if (str) el.setAttribute('placeholder', str);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const str = t(key, lang);
    if (str) el.setAttribute('aria-label', str);
  });
}

function _notifySubscribers() {
  _subscribers.forEach(cb => { try { cb(_currentLang); } catch(e) {} });
}

export const TRANSLATABLE_FIELDS = [
  'whatItSays', 'simpleExample', 'deepMeaning', 'whyItMatters',
  'example', 'derivation', 'whoDiscovered', 'misconception', 'desc',
];

// ── translateVars ─────────────────────────────────────────────────────────────
// Translates the .d (description) field of equation variable rows.
// Keeps the .s (symbol) field always in English — it's always a Latin/Greek letter.
//
// vars:  array of { s: 'F', d: 'Force in Newtons' }
// lang:  target language code
// Returns: array of { s, d } with translated d values
// ─────────────────────────────────────────────────────────────────────────────
export async function translateVars(vars, lang) {
  if (lang === 'en' || !vars || vars.length === 0) return vars;

  // Build a flat object: { VAR_0: 'Force in Newtons', VAR_1: 'Mass in kg', ... }
  const toTranslate = {};
  const cached      = {};

  vars.forEach((v, i) => {
    if (!v.d) return;
    const cacheKey = `${lang}:${_hash(v.d)}`;
    const stored   = _sessionCache.get(cacheKey) ?? _readTranslationCache(cacheKey);
    if (stored !== null) {
      cached[i] = stored;
      if (!_sessionCache.has(cacheKey)) _sessionCache.set(cacheKey, stored);
    } else {
      toTranslate[`VAR_${i}`] = v.d;
    }
  });

  let apiResult = {};
  if (Object.keys(toTranslate).length > 0) {
    apiResult = await _callTranslationAPI(toTranslate, lang, '');
    // Write results to cache
    Object.entries(apiResult).forEach(([key, text]) => {
      const i         = parseInt(key.replace('VAR_', ''), 10);
      const cacheKey  = `${lang}:${_hash(vars[i].d)}`;
      _sessionCache.set(cacheKey, text);
      _writeTranslationCache(cacheKey, text);
    });
  }

  return vars.map((v, i) => ({
    s: v.s, // symbol always stays in English
    d: cached[i] ?? (apiResult[`VAR_${i}`] || v.d),
  }));
}

export async function translateContent(obj, fields, lang) {
  if (lang === 'en') return Object.fromEntries(fields.map(f => [f, obj[f]]));

  const result = {};
  const toTranslate = {};

  fields.forEach(field => {
    if (!obj[field]) return;
    const cacheKey = `${lang}:${_hash(obj[field])}`;
    const sessionHit = _sessionCache.get(cacheKey);
    if (sessionHit) {
      // Only trust session cache if it holds a real non-empty string
      result[field] = sessionHit;
    } else {
      const stored = _readTranslationCache(cacheKey);
      if (stored) {
        // Only trust localStorage cache if it holds a real non-empty string
        result[field] = stored;
        _sessionCache.set(cacheKey, stored);
      } else {
        toTranslate[field] = obj[field];
      }
    }
  });

  if (Object.keys(toTranslate).length > 0) {
    const translated = await _callTranslationAPI(toTranslate, lang, obj.name || '');
    Object.entries(translated).forEach(([field, text]) => {
      if (!text) return;
      result[field] = text;
      const cacheKey = `${lang}:${_hash(toTranslate[field])}`;
      _sessionCache.set(cacheKey, text);
      _writeTranslationCache(cacheKey, text);
    });
  }

  fields.forEach(field => {
    if (obj[field] && !result[field]) result[field] = obj[field];
  });

  return result;
}

// =============================================================================
// translateBatch — translate card-level fields for many items in ONE API call.
//
// items: array of { id, fields: { fieldName: 'english text', ... } }
// lang:  target language code
//
// Returns: Map<id, { fieldName: 'translated text', ... }>
//
// Architecture:
//   • Check session + localStorage cache for each (id, field) pair first.
//   • Collect only the uncached strings and send them as one batched payload.
//   • The payload key is `ITEM_{id}__{field}` so Gemini returns a flat JSON
//     that we can unpack back into per-item results.
//   • Results written back to both caches exactly like translateContent.
// =============================================================================
export async function translateBatch(items, lang) {
  if (lang === 'en' || !items || items.length === 0) {
    const out = new Map();
    items.forEach(({ id, fields }) => out.set(id, { ...fields }));
    return out;
  }

  const resultMap = new Map();
  items.forEach(({ id }) => resultMap.set(id, {}));

  // ── 1. Resolve cache hits, collect misses ──────────────────────────────────
  const toTranslate = {}; // flat key → original text
  const keyMeta     = {}; // flat key → { id, field, cacheKey }

  items.forEach(({ id, fields }) => {
    Object.entries(fields).forEach(([field, text]) => {
      if (!text) return;
      const cacheKey = `${lang}:${_hash(text)}`;
      const sessionHit = _sessionCache.get(cacheKey);
      if (sessionHit) {
        resultMap.get(id)[field] = sessionHit;
      } else {
        const stored = _readTranslationCache(cacheKey);
        if (stored) {
          resultMap.get(id)[field] = stored;
          _sessionCache.set(cacheKey, stored);
        } else {
          const flatKey = `ITEM_${id.replace(/[^A-Za-z0-9]/g, '_')}__${field}`;
          toTranslate[flatKey] = text;
          keyMeta[flatKey]     = { id, field, cacheKey };
        }
      }
    });
  });

  // ── 2. Single API call for all misses ─────────────────────────────────────
  if (Object.keys(toTranslate).length > 0) {
    const translated = await _callTranslationAPI(toTranslate, lang, '');
    Object.entries(translated).forEach(([flatKey, text]) => {
      if (!text || !keyMeta[flatKey]) return;
      const { id, field, cacheKey } = keyMeta[flatKey];
      resultMap.get(id)[field] = text;
      _sessionCache.set(cacheKey, text);
      _writeTranslationCache(cacheKey, text);
    });
  }

  // ── 3. Fill untranslated fields with English fallback ─────────────────────
  items.forEach(({ id, fields }) => {
    Object.entries(fields).forEach(([field, text]) => {
      if (text && !resultMap.get(id)[field]) resultMap.get(id)[field] = text;
    });
  });

  return resultMap;
}

function _cacheStorageKey(cacheKey) {
  return `${CACHE_KEY_PFX}${CACHE_VERSION}_${cacheKey}`;
}

function _readTranslationCache(cacheKey) {
  try {
    const raw = localStorage.getItem(_cacheStorageKey(cacheKey));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > 30 * 24 * 3600 * 1000) {
      _remove(_cacheStorageKey(cacheKey));
      return null;
    }
    return parsed.text;
  } catch { return null; }
}

function _writeTranslationCache(cacheKey, text) {
  try {
    localStorage.setItem(_cacheStorageKey(cacheKey), JSON.stringify({ text, ts: Date.now() }));
  } catch { _pruneTranslationCache(); }
}

function _pruneTranslationCache() {
  try {
    const keys = Object.keys(localStorage)
      .filter(k => k.startsWith(CACHE_KEY_PFX))
      .map(k => { try { return { k, ts: JSON.parse(localStorage.getItem(k)).ts }; } catch { return { k, ts: 0 }; } })
      .sort((a, b) => a.ts - b.ts);
    keys.slice(0, Math.max(1, Math.floor(keys.length * 0.2))).forEach(({ k }) => localStorage.removeItem(k));
  } catch {}
}

const LANG_NAMES = {
  es: 'Spanish', zh: 'Simplified Chinese', hi: 'Hindi', ar: 'Arabic',
  fr: 'French',  bn: 'Bengali', pt: 'Portuguese', ru: 'Russian',
  ja: 'Japanese', de: 'German',
  ta: 'Tamil', te: 'Telugu', mr: 'Marathi',
};

// ─── Gemini Flash (free tier) ─────────────────────────────────────────────────
// Get your key at: https://aistudio.google.com → "Get API key" (free, no CC needed)
// DO NOT commit this key to a public repo — move it to an env variable or a
// thin serverless proxy (e.g. Cloudflare Worker) before going to production.
const GEMINI_API_KEY = 'AIzaSyB5M-Cr9QS25JfyZhHW_jbWA7RK7EE9cgg';
const GEMINI_ENDPOINT =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
// ─────────────────────────────────────────────────────────────────────────────

async function _callTranslationAPI(fieldsToTranslate, lang, equationName) {
  const targetLang = LANG_NAMES[lang] || lang;
  const fieldList = Object.entries(fieldsToTranslate)
    .map(([field, text]) => `--- FIELD: ${field} ---\n${text}`)
    .join('\n\n');

  const systemPrompt = `You are a precise physics education translator. Translate physics explanations into ${targetLang} for students.

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

Equation context: "${equationName}"`;

  try {
    const response = await fetch(GEMINI_ENDPOINT, {
      method: 'POST',
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
          // 8192 tokens: a full equation modal has up to 8 prose fields,
          // each up to ~300 words. 2000 was catastrophically low — it caused
          // Gemini to truncate mid-JSON, making JSON.parse throw and silently
          // falling back to English on every modal open. 8192 is safe headroom.
          maxOutputTokens: 8192,
        },
      }),
    });

    if (!response.ok) {
      const errBody = await response.text().catch(() => '');
      console.warn('[Phyansy translate] Gemini API error', response.status, errBody);
      return {};
    }

    const data = await response.json();
    // Gemini structure: candidates[0].content.parts[0].text
    // responseMimeType: 'application/json' guarantees clean JSON — no markdown fences.
    // Light trim guard kept for edge-case whitespace.
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    const clean   = rawText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();
    if (!clean) {
      console.warn('[Phyansy translate] Empty response from Gemini');
      return {};
    }

    const parsed = JSON.parse(clean);

    const safeResult = {};
    Object.keys(fieldsToTranslate).forEach(field => {
      if (parsed[field] && typeof parsed[field] === 'string') safeResult[field] = parsed[field];
    });
    return safeResult;
  } catch (err) {
    console.warn('[Phyansy translate] Failed:', err);
    return {};
  }
}

export function emitTranslating(el) {
  if (el) el.dispatchEvent(new CustomEvent('phyansy:translating', { bubbles: true }));
}
export function emitTranslated(el) {
  if (el) el.dispatchEvent(new CustomEvent('phyansy:translated', { bubbles: true }));
}
