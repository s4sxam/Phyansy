// =============================================================================
// langController.js — i18n system (Zperiod pattern, Phase 2 ready)
// =============================================================================

const STORAGE_KEY = 'quantra_lang';
let currentLang = 'en';
const subscribers = [];

// Lazy-loaded locale cache
const localeCache = {};

export function getCurrentLang() {
  return currentLang;
}

export function onLangChange(cb) {
  subscribers.push(cb);
}

function notifySubscribers() {
  subscribers.forEach((cb) => cb(currentLang));
}

async function loadLocale(lang) {
  if (lang === 'en') return null; // English is baked in
  if (localeCache[lang]) return localeCache[lang];

  try {
    const mod = await import(`../data/locales/${lang}.js`);
    localeCache[lang] = mod.default || mod;
    return localeCache[lang];
  } catch {
    console.warn(`[Phyansy] Locale not found: ${lang}, falling back to en`);
    return null;
  }
}

export async function setLang(lang) {
  if (lang === currentLang) return;
  await loadLocale(lang);
  currentLang = lang;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  notifySubscribers();
}

export function initLangController() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) currentLang = saved;
  } catch { /* ignore */ }
}
