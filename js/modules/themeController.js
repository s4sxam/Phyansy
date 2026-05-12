// =============================================================================
// themeController.js — Dark Mode + Theme Persistence
// Phase 2: Visual Identity
// =============================================================================

const STORAGE_KEY = 'quantra_theme';

export function getTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  } catch { return 'light'; }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* ignore */ }
}

export function toggleTheme() {
  const current = getTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  return next;
}

export function initThemeController() {
  // Apply saved theme immediately (before paint)
  const saved = getTheme();
  applyTheme(saved);
}
