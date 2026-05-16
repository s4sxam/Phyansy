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

import { UI_STRINGS, RTL_LANGS, CJK_LANGS } from '../data/locales/ui-strings.js';

const LANG_KEY      = 'quantra_lang';
const CACHE_KEY_PFX = 'phyansy_trans_';
const CACHE_VERSION = 'v1';

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
  html.setAttribute('lang', lang);
  _applyStaticStrings(lang);
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

export async function translateContent(obj, fields, lang) {
  if (lang === 'en') return Object.fromEntries(fields.map(f => [f, obj[f]]));

  const result = {};
  const toTranslate = {};

  fields.forEach(field => {
    if (!obj[field]) return;
    const cacheKey = `${lang}:${_hash(obj[field])}`;
    if (_sessionCache.has(cacheKey)) {
      result[field] = _sessionCache.get(cacheKey);
    } else {
      const stored = _readTranslationCache(cacheKey);
      if (stored !== null) {
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
};

// ─── Gemini Flash (free tier) ─────────────────────────────────────────────────
// Get your key at: https://aistudio.google.com → "Get API key" (free, no CC needed)
// DO NOT commit this key to a public repo — move it to an env variable or a
// thin serverless proxy (e.g. Cloudflare Worker) before going to production.
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
const GEMINI_ENDPOINT =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${AIzaSyB5M-Cr9QS25JfyZhHW_jbWA7RK7EE9cgg}`;
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
          maxOutputTokens: 2000,
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
