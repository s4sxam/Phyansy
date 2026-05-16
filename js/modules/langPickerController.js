// =============================================================================
// langPickerController.js — Language picker UI for Phyansy
// Made by Tanay (s4sxam)
//
// Renders a globe button in the nav bar.
// Opens a language picker panel (not a modal — a dropdown/panel anchored to nav).
// On selection: calls setLang(), notifies all subscribers, closes panel.
// =============================================================================

import { setLang, getCurrentLang, t } from './langController.js';
import { LANG_META } from '../data/locales/ui-strings.js';

// ── INJECT HTML ───────────────────────────────────────────────────────────────

function buildPickerHTML() {
  return `
<div id="lang-picker-panel" class="lang-picker-panel" role="dialog" aria-modal="true" aria-label="Choose language">
  <div class="lang-picker-inner">
    <div class="lang-picker-header">
      <span class="lang-picker-title" data-i18n="lang_picker_title">Choose Language</span>
      <button class="lang-picker-close" id="lang-picker-close" aria-label="Close language picker">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="lang-picker-note" data-i18n="lang_note">
      Formulas, symbols, and variable names remain in English — the universal language of physics. Explanations are translated.
    </div>
    <div class="lang-picker-grid" role="listbox" aria-label="Language options">
      ${LANG_META.map(({ code, native, flag, label }) => `
        <button
          class="lang-option ${code === getCurrentLang() ? 'active' : ''}"
          data-lang="${code}"
          role="option"
          aria-selected="${code === getCurrentLang()}"
          title="${label}">
          <span class="lang-option-flag" aria-hidden="true">${flag}</span>
          <span class="lang-option-native">${native}</span>
          ${code === 'en' ? '<span class="lang-option-badge">Default</span>' : ''}
        </button>`).join('')}
    </div>
    <div class="lang-picker-footer">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      <span data-i18n="lang_ai_powered">Explanations translated by AI</span>
    </div>
  </div>
</div>
<div id="lang-picker-backdrop" class="lang-picker-backdrop"></div>`;
}

// ── MAIN INIT ─────────────────────────────────────────────────────────────────

export function initLangPicker() {
  // Build and inject globe button into nav
  const nav = document.querySelector('nav');
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (!nav || !themeBtn) return;

  const globeBtn = document.createElement('button');
  globeBtn.className = 'lang-globe-btn';
  globeBtn.id = 'lang-globe-btn';
  globeBtn.setAttribute('aria-label', 'Choose language');
  globeBtn.setAttribute('title', 'Choose language');
  globeBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
    <span class="lang-globe-code" id="lang-globe-code">${getCurrentLang().toUpperCase()}</span>`;

  // Insert globe button just before the theme toggle
  nav.insertBefore(globeBtn, themeBtn);

  // Inject picker panel and backdrop into body
  const wrapper = document.createElement('div');
  wrapper.innerHTML = buildPickerHTML();
  document.body.appendChild(wrapper.children[0]); // panel
  document.body.appendChild(wrapper.children[0]); // backdrop

  const panel    = document.getElementById('lang-picker-panel');
  const backdrop = document.getElementById('lang-picker-backdrop');
  const closeBtn = document.getElementById('lang-picker-close');

  // ── OPEN / CLOSE ─────────────────────────────────────────────────────────────

  function openPicker() {
    panel.classList.add('open');
    backdrop.classList.add('open');
    globeBtn.classList.add('active');
    panel.querySelector('.lang-option.active')?.focus();
  }

  function closePicker() {
    panel.classList.remove('open');
    backdrop.classList.remove('open');
    globeBtn.classList.remove('active');
    globeBtn.focus();
  }

  globeBtn.addEventListener('click', () => {
    panel.classList.contains('open') ? closePicker() : openPicker();
  });

  closeBtn.addEventListener('click', closePicker);
  backdrop.addEventListener('click', closePicker);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.classList.contains('open')) closePicker();
  });

  // ── LANGUAGE SELECTION ────────────────────────────────────────────────────────

  panel.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', async () => {
      const lang = btn.dataset.lang;
      if (lang === getCurrentLang()) { closePicker(); return; }

      // Update active state in picker immediately
      panel.querySelectorAll('.lang-option').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
        b.setAttribute('aria-selected', String(b.dataset.lang === lang));
      });

      // Update globe code label
      const codeEl = document.getElementById('lang-globe-code');
      if (codeEl) codeEl.textContent = lang.toUpperCase();

      // Apply language (this triggers all subscribers including controllers)
      await setLang(lang);

      closePicker();
    });
  });

  // ── KEYBOARD NAVIGATION ────────────────────────────────────────────────────
  panel.addEventListener('keydown', e => {
    const options = [...panel.querySelectorAll('.lang-option')];
    const current = document.activeElement;
    const idx = options.indexOf(current);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      options[(idx + 1) % options.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      options[(idx - 1 + options.length) % options.length]?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (current.classList.contains('lang-option')) {
        e.preventDefault();
        current.click();
      }
    }
  });
}
