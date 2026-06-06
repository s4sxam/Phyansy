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
import { initLangPicker }        from './js/modules/langPickerController.js'; // BUG-03 FIX

// ── GLOBAL DRAG GUARD ────────────────────────────────────────────────────────
window._phyansyIsDragging = false;

(function initGlobalDragTracking() {
  let startX = 0, startY = 0;
  document.addEventListener('mousedown', (e) => {
    startX = e.clientX; startY = e.clientY;
    window._phyansyIsDragging = false;
  });
  document.addEventListener('mousemove', (e) => {
    if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5)
      window._phyansyIsDragging = true;
  });
  document.addEventListener('mouseup', () => {
    setTimeout(() => { window._phyansyIsDragging = false; }, 50);
  });
})();

// ── THEME TOGGLE WIRING ──────────────────────────────────────────────────────
function wireThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    toggleTheme();
  });
}

// ── FOOTER PRIVACY/ABOUT BUTTON — event listener instead of inline onclick ──
function wireFooterBtn() {
  const btn = document.getElementById('privacy-about-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (typeof openAboutModal === 'function') {
      openAboutModal('privacy');
    }
  });
  // Visible focus style for keyboard navigation
  btn.addEventListener('focus', () => { btn.style.outline = '2px solid #667eea'; btn.style.outlineOffset = '2px'; });
  btn.addEventListener('blur',  () => { btn.style.outline = ''; btn.style.outlineOffset = ''; });
}

// ── INJECT SECTION ICONS ─────────────────────────────────────────────────────
function injectSectionIcons() {
  const icons = {
    'sec-constants':  { svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`, label: 'Constants' },
    'sec-equations':  { svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/><path d="M9 3v18" opacity="0.4"/></svg>`, label: 'Equations' },
    'sec-symbols':    { svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10"/><path d="M2 12C2 6.48 6.48 2 12 2"/><path d="M8 12s1-2 4-2 4 2 4 2-1 2-4 2-4-2-4-2z"/></svg>`, label: 'Symbols' },
    'sec-units':      { svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>`, label: 'Units' },
    'sec-calculator': { svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><circle cx="8" cy="12" r="0.5" fill="currentColor"/><circle cx="12" cy="12" r="0.5" fill="currentColor"/><circle cx="16" cy="12" r="0.5" fill="currentColor"/><circle cx="8" cy="17" r="0.5" fill="currentColor"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/><line x1="14" y1="15" x2="18" y2="19"/><line x1="18" y1="15" x2="14" y2="19"/></svg>`, label: 'Calculator' },
  };

  Object.entries(icons).forEach(([secId, { svg, label }]) => {
    const sec = document.getElementById(secId);
    if (!sec) return;
    const header = sec.querySelector('.section-header');
    const title  = sec.querySelector('.section-title');
    if (!header || !title) return;

    const iconEl = document.createElement('div');
    iconEl.className = 'section-icon';
    iconEl.setAttribute('aria-hidden', 'true');
    iconEl.innerHTML = svg;
    header.insertBefore(iconEl, title);
  });
}

// ── MOBILE LANDING — show welcome, never gate/block ──────────────────────────
function handleMobileLanding() {
  const mobileLanding = document.getElementById('mobile-landing');
  const mainApp       = document.getElementById('main-app');
  const continueBtn   = document.getElementById('mobile-continue-btn');

  const ua = navigator.userAgent || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
    && window.matchMedia('(pointer: coarse)').matches
    && window.innerWidth < 1024;

  if (isMobile && mobileLanding) {
    // Show the welcome card but keep main-app accessible immediately
    mobileLanding.classList.remove('hidden');
    // Focus the continue button for accessibility
    continueBtn && continueBtn.focus();

    const dismiss = () => {
      mobileLanding.classList.add('hidden');
      if (mainApp) mainApp.removeAttribute('style');
      // Return focus to first nav item
      const firstTab = document.querySelector('.tab-btn');
      if (firstTab) firstTab.focus();
    };

    if (continueBtn) continueBtn.addEventListener('click', dismiss);
    // Also dismiss on Escape key
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') { dismiss(); document.removeEventListener('keydown', escHandler); }
    });
  } else {
    if (mobileLanding) mobileLanding.classList.add('hidden');
  }
}

// ── BOOT ─────────────────────────────────────────────────────────────────────
(function boot() {
  // Apply theme immediately before anything else paints
  initThemeController();
  initFavicon();

  initSettingsController();
  initLangController();
  initLangPicker(); // BUG-03 FIX: was never called — language picker never appeared
  initCookieController();

  // BUG-06 FIX: wireFooterBtn() moved to AFTER initCookieController() so that
  // window.openAboutModal (registered by cookieController) is always defined
  // before the footer button click handler can ever fire.
  wireFooterBtn();

  // Handle mobile landing without blocking the app
  handleMobileLanding();

  // Init background — respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    initBgRenderer();
  }

  wireThemeToggle();
  injectSectionIcons();
  initPageController();
  initSearch();
})();
