// =============================================================================
// script.js — Phyansy Root Module (Phase 2 — Visual Identity)
// Made by Tanay (s4sxam)
// =============================================================================

import { initPageController }    from './js/modules/pageController.js';
import { initSettingsController } from './js/modules/settingsController.js';
import { initLangController }    from './js/modules/langController.js';
import { initThemeController, toggleTheme } from './js/modules/themeController.js';
import { initBgRenderer }        from './js/modules/bgRenderer.js';
import { initFavicon }           from './js/modules/faviconController.js';
import { initCookieController }  from './js/modules/cookieController.js';
import { initSearch }            from './js/modules/searchInit.js';

// ── GLOBAL DRAG GUARD ────────────────────────────────────────────────────────
window._quantraIsDragging = false;

(function initGlobalDragTracking() {
  let startX = 0, startY = 0;
  document.addEventListener('mousedown', (e) => {
    startX = e.clientX; startY = e.clientY;
    window._quantraIsDragging = false;
  });
  document.addEventListener('mousemove', (e) => {
    if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5)
      window._quantraIsDragging = true;
  });
  document.addEventListener('mouseup', () => {
    setTimeout(() => { window._quantraIsDragging = false; }, 50);
  });
})();

// ── MOBILE DETECTION ─────────────────────────────────────────────────────────
function isRealMobileDevice() {
  const ua = navigator.userAgent || '';
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
    && window.matchMedia('(pointer: coarse)').matches
    && window.innerWidth < 1024;
}

// ── THEME TOGGLE WIRING ──────────────────────────────────────────────────────
function wireThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    toggleTheme();
  });
}

// ── INJECT SECTION ICONS ─────────────────────────────────────────────────────
function injectSectionIcons() {
  const icons = {
    'sec-constants':  { svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`, label: 'Constants' },
    'sec-equations':  { svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/><path d="M9 3v18" opacity="0.4"/></svg>`, label: 'Equations' },
    'sec-symbols':    { svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10"/><path d="M2 12C2 6.48 6.48 2 12 2"/><path d="M8 12s1-2 4-2 4 2 4 2-1 2-4 2-4-2-4-2z"/></svg>`, label: 'Symbols' },
    'sec-units':      { svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>`, label: 'Units' },
    'sec-calculator': { svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="12" x2="8" y2="12"/><circle cx="8" cy="12" r="0.5" fill="currentColor"/><circle cx="12" cy="12" r="0.5" fill="currentColor"/><circle cx="16" cy="12" r="0.5" fill="currentColor"/><circle cx="8" cy="17" r="0.5" fill="currentColor"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/><line x1="14" y1="15" x2="18" y2="19"/><line x1="18" y1="15" x2="14" y2="19"/></svg>`, label: 'Calculator' },
  };

  Object.entries(icons).forEach(([secId, { svg, label }]) => {
    const sec = document.getElementById(secId);
    if (!sec) return;
    const header = sec.querySelector('.section-header');
    const title  = sec.querySelector('.section-title');
    if (!header || !title) return;

    // Inject icon div before title text
    const iconEl = document.createElement('div');
    iconEl.className = 'section-icon';
    iconEl.setAttribute('aria-hidden', 'true');
    iconEl.innerHTML = svg;
    header.insertBefore(iconEl, title);
  });
}

// ── BOOT ─────────────────────────────────────────────────────────────────────
(function boot() {
  // Phase 2: Apply theme immediately before anything else paints
  initThemeController();
  initFavicon();

  initSettingsController();
  initLangController();
  initCookieController();

  const mobileLanding = document.getElementById('mobile-landing');
  const mainApp       = document.getElementById('main-app');
  const continueBtn   = document.getElementById('mobile-continue-btn');

  const launch = () => {
    initBgRenderer();
    wireThemeToggle();
    injectSectionIcons();
    initPageController();
    initSearch();   // ← Advanced search engine (global + fuzzy)
  };

  if (isRealMobileDevice() && mobileLanding) {
    mobileLanding.classList.remove('hidden');
    if (mainApp) mainApp.style.display = 'none';
    continueBtn.addEventListener('click', () => {
      mobileLanding.classList.add('hidden');
      if (mainApp) mainApp.style.display = '';
      launch();
    });
  } else {
    if (mobileLanding) mobileLanding.classList.add('hidden');
    launch();
  }
})();