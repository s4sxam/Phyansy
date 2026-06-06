// =============================================================================
// settingsController.js — localStorage-backed settings (Zperiod pattern)
// =============================================================================

const KEYS = {
  lang:       'phyansy_lang',
  theme:      'phyansy_theme',       // reserved for Phase 2 dark mode
  animPaused: 'phyansy_anim_paused',
};

function get(key, fallback = null) {
  try {
    const v = localStorage.getItem(key);
    return v !== null ? v : fallback;
  } catch {
    return fallback;
  }
}

function set(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

export function getSavedAnimationState() {
  return get(KEYS.animPaused, 'false') === 'true';
}

export function initSettingsController() {
  const animPaused = getSavedAnimationState();
  window._phyansyAnimPaused = animPaused;

  return {
    lang:       get(KEYS.lang, 'en'),
    theme:      get(KEYS.theme, 'light'),
    animPaused,
    setLang:  (v) => set(KEYS.lang, v),
    setTheme: (v) => set(KEYS.theme, v),
    setAnimPaused: (v) => {
      window._phyansyAnimPaused = v;
      set(KEYS.animPaused, String(v));
    },
  };
}
