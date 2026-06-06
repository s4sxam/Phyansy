// =============================================================================
// langController.js — Phyansy i18n System
// Made by Tanay (s4sxam)
//
// ARCHITECTURE:
//   • Static UI strings  — nav, section headers, modal labels (instant, from files)
//   • Content strings    — supplied via i18n locale files per language
//   • Physics terms stay in English always — universal language of physics
//   • RTL full layout support (Arabic)
//   • CJK typography adjustments (Chinese, Japanese)
//
// IMPORTANT: formulas, variable symbols, SI units — NEVER translated.
// =============================================================================

import { UI_STRINGS, RTL_LANGS, CJK_LANGS, INDIC_LANGS } from '../data/locales/ui-strings.js';

const LANG_KEY = 'phyansy_lang';

let _currentLang   = 'en';
const _subscribers = [];

function _read(key, fallback = null) {
  try { const v = localStorage.getItem(key); return v !== null ? v : fallback; }
  catch { return fallback; }
}
function _write(key, value) {
  try { localStorage.setItem(key, value); } catch {}
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
const _loadedIndicFonts = new Set();
function _loadIndicFont(lang) {
  if (_loadedIndicFonts.has(lang)) return;
  _loadedIndicFonts.add(lang);

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
