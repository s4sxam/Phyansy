// =============================================================================
// equationsController.js — KaTeX-powered equation renderer
// Desktop (>768px) → modal | Mobile (≤768px) → modal (bottom-sheet)
//
// FIXES APPLIED (May 2026):
//   #01 — Double UI: mobile now opens ONLY modal, in-card expand suppressed
//   #03 — iOS scroll lock: position:fixed body trick for Safari
//   #05 — Drag handle zone enlarged from 48px → 64px; pill handle bigger
//   #14 — Related equation chips are now tappable (scroll-to + open)
//   #16 — Stagger animation delay capped: 20ms×i (≤200ms) on mobile
// =============================================================================

import { EQUATIONS } from '../data/equationsData.js';
import { createLazyTabSection } from './lazyRenderer.js';
import {
  getCurrentLang, onLangChange,
  translateContent, translateBatch, translateVars, TRANSLATABLE_FIELDS, t,
} from './langController.js';

const ICONS = {
  whatItSays:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  example:       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  derivation:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
  deepMeaning:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  math:          `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  history:       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  whyItMatters:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>`,
  misconception: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  related:       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
};

const DESKTOP_BREAKPOINT = 768;
const isDesktop = () => window.innerWidth > DESKTOP_BREAKPOINT;

// ── DIMENSION STRING → LATEX ──────────────────────────────────────────────────
function dimToLatex(raw) {
  if (!raw) return '';
  const clean = raw.replace(/\s{2,}.*$/, '').replace(/\s+\(.*$/, '').trim();
  if (/^dimensionless/i.test(clean)) return '\\text{dimensionless}';
  const superMap = {
    '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4',
    '⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-',
  };
  let latex = clean.replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, match => {
    const exp = match.split('').map(c => superMap[c] || c).join('');
    return `^{${exp}}`;
  });
  latex = latex.replace(/[A-Za-zΘθ]+/g, m => `\\mathrm{${m}}`);
  return latex;
}

// ── SI UNIT STRING → LATEX ────────────────────────────────────────────────────
function unitToLatex(unit) {
  if (!unit) return '';
  if (/^dimensionless$/i.test(unit.trim())) return '\\text{dimensionless}';
  const superMap = {
    '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4',
    '⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-',
  };
  let s = unit
    .replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, match => {
      const exp = match.split('').map(c => superMap[c] || c).join('');
      return `^{${exp}}`;
    })
    .replace(/·/g, '\\cdot ')
    .replace(/\//g, '/')
    .replace(/[A-Za-zΩμΘ]+/g, m => `\\text{${m}}`);
  return s;
}

// ── MATHIFY ───────────────────────────────────────────────────────────────────
function mathify(text) {
  if (!text) return text;
  const TOKEN_RE = /(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
  const parts = [];
  let last = 0, m;
  while ((m = TOKEN_RE.exec(text)) !== null) {
    if (m.index > last) parts.push({ type: 'prose', text: text.slice(last, m.index) });
    parts.push({ type: 'latex', text: m[0] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ type: 'prose', text: text.slice(last) });
  return parts.map(p => p.type === 'latex' ? p.text : processProse(p.text)).join('');
}

function processProse(text) {
  text = text
    .replace(/½/g, '\\(\\tfrac{1}{2}\\)')
    .replace(/¼/g, '\\(\\tfrac{1}{4}\\)')
    .replace(/¾/g, '\\(\\tfrac{3}{4}\\)')
    .replace(/⅓/g, '\\(\\tfrac{1}{3}\\)')
    .replace(/⅔/g, '\\(\\tfrac{2}{3}\\)');

  text = text.replace(
    /((?:[A-Za-z\u0391-\u03C9\u00C5\u210F\u2113\u221E\u2202\u2207\d]|\([^)]{1,60}\))(?:[_^]\{[^{}]{0,80}\}|[_^][A-Za-z\u0391-\u03C9\d](?![A-Za-z\d]))+)/g,
    (match) => `\\(${match}\\)`
  );

  text = text.replace(
    /(?<![\\(])\b([A-Za-z]\w*)_([A-Za-z]\w+)\b/g,
    (_, base, sub) => `\\(${base}_{\\text{${sub}}}\\)`
  );

  text = text.replace(
    /\b(d[²³]?[a-zA-Z\u03A8\u03C8\u03A6\u03C6\u03C1])\/(d(?:t[²³]?|[a-zA-Z][²³]?))\b/g,
    (_, num, den) => {
      const toExp = s => s.replace(/²/g, '^2').replace(/³/g, '^3');
      return `\\(\\frac{${toExp(num)}}{${toExp(den)}}\\)`;
    }
  );

  text = text.replace(
    /∫([^=\n.,;]{1,80}?)(?=\s*[=.,;]|\s*$)/g,
    (_, body) => `\\(\\int ${body.trim()}\\)`
  );

  text = text.replace(
    /\b([A-Za-z\u0391-\u03C9][A-Za-z\u0391-\u03C9\d_]{0,8})\s*=\s*([^\s=\n][^=\n]{0,80}?)(?=[\s.,;)—–]|$)/g,
    (match, lhs, rhs) => {
      if (/^[a-z]{4,}$/i.test(lhs) && !/[_^]/.test(lhs)) return match;
      if (!/[+\-*/²³½¼∫√±×·\d^_{}\\\[\]()]/.test(rhs)) return match;
      if (match.includes('\\(')) return match;
      return `\\(${lhs} = ${rhs.trim()}\\)`;
    }
  );

  const supMap = {'²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁰':'0','⁻':'-','¹':'1'};
  text = text.replace(
    /([A-Za-z\u0391-\u03C9\u00C5\u210F\d]+)([²³⁴⁵⁶⁷⁸⁹⁻¹⁰]+)/g,
    (_, base, exps) => {
      const exp = exps.split('').map(c => supMap[c] || c).join('');
      return `\\(${base}^{${exp}}\\)`;
    }
  );

  text = text.replace(
    /([A-Za-z\u0391-\u03C9])([₀₁₂₃₄₅₆₇₈₉])/g,
    (_, b, s) => `\\(${b}_{${'0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(s)]}}\\)`
  );

  text = text.replace(
    /√(\([^)]+\)|[A-Za-z\d]+)/g,
    (_, a) => `\\(\\sqrt{${a.replace(/[()]/g, '')}}\\)`
  );

  text = text.replace(/([A-Za-z\d])\u00B7([A-Za-z\d])/g, (_, a, b) => `\\(${a} \\cdot ${b}\\)`);
  text = text.replace(
    /([A-Za-z\u0391-\u03C9\d]+)\s*∝\s*([A-Za-z\u0391-\u03C9\d^²³⁴⁻]+)/g,
    (_, a, b) => `\\(${a} \\propto ${b}\\)`
  );
  text = text.replace(
    /([A-Za-z\d.]+)\s*≈\s*([A-Za-z\d./×⁻\-+^]+)/g,
    (_, a, b) => `\\(${a} \\approx ${b}\\)`
  );

  text = text.replace(
    /\\\(([^\\]*)\\\(([^\\]*)\\\)([^\\]*)\\\)/g,
    (_, pre, inner, post) => `\\(${pre}${inner}${post}\\)`
  );
  text = text.replace(/\\\)\s*\\\(/g, ' ');

  return text;
}


function section(icon, label, content, mod) {
  return `<div class="eq-section${mod ? ' eq-section--' + mod : ''}">
    <div class="eq-section-label"><span class="eq-section-icon">${icon}</span>${label}</div>
    <div class="eq-section-body">${content}</div>
  </div>`;
}

function buildDetailHTML(eq, translatedVars) {
  // FIX #14 — Related chips are now tappable: add data-eq-name and cursor:pointer
  const relatedHtml = Array.isArray(eq.relatedEquations) && eq.relatedEquations.length
    ? section(ICONS.related, t('modal_related'),
        `<div class="eq-related-chips">${eq.relatedEquations.map(r =>
          `<span class="eq-related-chip" data-eq-name="${r}" role="button" tabindex="0" title="Open ${r}">${r}</span>`
        ).join('')}</div>`)
    : '';

  const metaItems = [];
  if (eq.dimensions) {
    const dimLatex = dimToLatex(eq.dimensions);
    const noteMatch = eq.dimensions.match(/\s{2,}(.*)$/);
    // FIX #11 — dim note: show condensed on mobile via CSS class, not hidden
    const note = noteMatch
      ? `<span class="eq-meta-dim-note">${noteMatch[1]}</span>`
      : '';
    metaItems.push(`
    <div class="eq-meta-item">
      <span class="eq-meta-key">Dimensions</span>
      <span class="eq-meta-val eq-meta-dim">\\(${dimLatex}\\)${note}</span>
    </div>`);
  }
  if (eq.SI_units) metaItems.push(`
    <div class="eq-meta-item eq-meta-item--si">
      <span class="eq-meta-key">SI Units</span>
      <div class="eq-si-table">
        ${Object.entries(eq.SI_units).map(([k, v]) => `
          <div class="eq-si-row">
            <span class="eq-si-sym">\\(${k.replace(/[_^{}\\]/g, m => '\\' + m)}\\)</span>
            <span class="eq-si-arrow">→</span>
            <span class="eq-si-unit">\\(${unitToLatex(v)}\\)</span>
          </div>`).join('')}
      </div>
    </div>`);
  const metaHtml = metaItems.length ? `<div class="eq-meta-row">${metaItems.join('')}</div>` : '';

  const allTagsHtml = Array.isArray(eq.tags) && eq.tags.length
    ? `<div class="eq-all-tags">${eq.tags.map(tag => `<span class="eq-tag">${tag}</span>`).join('')}</div>`
    : '';

  // Use translated vars if provided, otherwise fall back to original eq.vars
  const displayVars = translatedVars || eq.vars;

  const sections = [
    eq.whatItSays    && section(ICONS.whatItSays,    t('modal_what_it_says'),   mathify(eq.whatItSays)),
    eq.example       && section(ICONS.example,       t('modal_example'),        `<div class="eq-example-box">${mathify(eq.example)}</div>`, 'example'),
    eq.derivation    && section(ICONS.derivation,    t('modal_derivation'),     `<div class="eq-derivation-box">${mathify(eq.derivation)}</div>`, 'derivation'),
    eq.deepMeaning   && section(ICONS.deepMeaning,   t('modal_deep_meaning'),   mathify(eq.deepMeaning), 'deep'),
    eq.integralForm  && section(ICONS.math,          t('modal_math_form'),      `<div class="eq-katex-block">\\[${eq.integralForm}\\]</div>`, 'math'),
    eq.whoDiscovered && section(ICONS.history,       t('modal_history'),        mathify(eq.whoDiscovered), 'history'),
    eq.whyItMatters  && section(ICONS.whyItMatters,  t('modal_why_it_matters'), mathify(eq.whyItMatters), 'importance'),
    eq.misconception && section(ICONS.misconception, t('modal_misconception'),  mathify(eq.misconception), 'misconception'),
    relatedHtml,
  ].filter(Boolean).join('');

  return `
    <div class="eq-detail-inner">
      <div class="eq-vars">
        <div class="eq-vars-title">${t('modal_variables')}</div>
        ${displayVars.map(v => `
          <div class="var-row">
            <span class="var-sym">\\(${v.s}\\)</span>
            <span class="var-desc">${v.d}</span>
          </div>`).join('')}
      </div>
      ${metaHtml}
      ${sections}
      ${allTagsHtml}
    </div>`;
}

// ── MODAL ─────────────────────────────────────────────────────────────────────

function initModal() {
  const overlay   = document.getElementById('eq-modal');
  const closeBtn  = document.getElementById('eq-modal-close');
  const titleEl   = document.getElementById('eq-modal-title');
  const badgesEl  = document.getElementById('eq-modal-badges');
  const formulaEl = document.getElementById('eq-modal-formula');
  const bodyEl    = document.getElementById('eq-modal-body');

  if (!overlay) return null;

  const box = overlay.querySelector('.phys-modal-box');
  let dragStartY   = 0;
  let dragDeltaY   = 0;
  let isDragging   = false;
  let isFullscreen = false;
  const DISMISS_THRESHOLD    = 120; // px down → close
  const FULLSCREEN_THRESHOLD = 80;  // px up  → fullscreen

  // ── FIX #03 — iOS Safari scroll lock ────────────────────────────────────────
  // Standard `body { overflow: hidden }` does NOT stop scroll on iOS Safari.
  // The correct fix: save scrollY, lock body with position:fixed, restore on close.
  let _savedScrollY = 0;

  function lockBodyScroll() {
    _savedScrollY = window.scrollY;
    document.body.style.position   = 'fixed';
    document.body.style.top        = `-${_savedScrollY}px`;
    document.body.style.width      = '100%';
    document.body.style.overflowY  = 'scroll'; // keep scrollbar width stable on desktop
  }

  function unlockBodyScroll() {
    document.body.style.position  = '';
    document.body.style.top       = '';
    document.body.style.width     = '';
    document.body.style.overflowY = '';
    // Restore exact scroll position silently
    window.scrollTo({ top: _savedScrollY, behavior: 'instant' });
  }

  function _renderAndKatex(eq, translatedVars) {
    bodyEl.innerHTML = buildDetailHTML(eq, translatedVars);
    if (window.renderMathInElement) {
      renderMathInElement(overlay, {
        delimiters: [
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false,
      });
    }
    // FIX #14 — Wire related chips
    bodyEl.querySelectorAll('.eq-related-chip[data-eq-name]').forEach(chip => {
      chip.addEventListener('click', () => _openRelatedEquation(chip.dataset.eqName));
      chip.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          _openRelatedEquation(chip.dataset.eqName);
        }
      });
    });
  }

  async function openModal(eq) {
    titleEl.textContent = eq.name;

    const diffSlug = eq.difficulty ? eq.difficulty.toLowerCase().replace(/[^a-z]/g, '') : '';
    badgesEl.innerHTML = [
      eq.year       ? `<span class="eq-year-badge">${eq.year}</span>` : '',
      eq.difficulty ? `<span class="eq-difficulty-badge eq-diff-${diffSlug}">${eq.difficulty}</span>` : '',
    ].join('');

    formulaEl.innerHTML = `\\(${eq.formulaLatex || eq.formula}\\)`;

    // Render English content immediately — never leave blank
    _renderAndKatex(eq);

    overlay.classList.add('show');
    lockBodyScroll(); // FIX #03

    // Reset sheet state on every open
    isFullscreen = false;
    box.style.transform    = '';
    box.style.opacity      = '';
    box.style.maxHeight    = '';
    box.style.borderRadius = '';
    box.scrollTop = 0;
    closeBtn.focus();

    // ── AI Translation (non-English only) ────────────────────────────────────
    const lang = getCurrentLang();
    if (lang !== 'en') {
      // Show shimmer while translating
      bodyEl.classList.add('translating');

      try {
        // Translate prose fields and variable descriptions in parallel
        const [translated, translatedVarsResult] = await Promise.all([
          translateContent(eq, TRANSLATABLE_FIELDS, lang),
          translateVars(eq.vars, lang),
        ]);

        // Merge translated fields back into a shallow copy — never mutate original data
        const translatedEq = { ...eq, ...translated };
        _renderAndKatex(translatedEq, translatedVarsResult);

        // Append "AI translated" badge
        const badge = document.createElement('div');
        badge.className = 'lang-translated-badge';
        badge.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><span>${t('lang_ai_powered')}</span>`;
        bodyEl.appendChild(badge);

      } catch {
        // Translation failed — silently keep English content (already rendered)
        const errMsg = document.createElement('div');
        errMsg.className = 'lang-trans-error';
        errMsg.textContent = t('lang_translation_fail');
        bodyEl.appendChild(errMsg);
      } finally {
        bodyEl.classList.remove('translating');
      }
    }
  }

  function closeModal() {
    overlay.classList.remove('show');
    unlockBodyScroll(); // FIX #03
    if (box) {
      box.style.transform = '';
      box.style.opacity   = '';
    }
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('show')) closeModal();
  });

  // ── FIX #05 — Drag-to-dismiss: zone enlarged from 48px → 64px ───────────────
  function onDragStart(e) {
    const touch  = e.touches ? e.touches[0] : e;
    const boxTop = box.getBoundingClientRect().top;
    // FIX: was 48px, now 64px — matches visual handle + comfortable thumb zone
    if (touch.clientY - boxTop > 64) return;
    if (box.scrollTop > 0) return;
    isDragging = true;
    dragStartY = touch.clientY;
    dragDeltaY = 0;
    box.style.transition = 'none';
  }

  function onDragMove(e) {
    if (!isDragging) return;
    const touch = e.touches ? e.touches[0] : e;
    dragDeltaY = touch.clientY - dragStartY;
    e.preventDefault();

    if (dragDeltaY > 0) {
      if (isFullscreen) return;
      const progress = Math.min(dragDeltaY / DISMISS_THRESHOLD, 1);
      box.style.transform = `translateY(${dragDeltaY}px)`;
      box.style.opacity   = String(1 - progress * 0.4);
    } else {
      const resistance = dragDeltaY * 0.25;
      box.style.transform = `translateY(${resistance}px)`;
      box.style.opacity   = '1';
    }
  }

  function setFullscreen(on) {
    isFullscreen = on;
    box.style.transition = 'max-height 0.3s cubic-bezier(0.32,0.72,0,1), border-radius 0.3s';
    if (on) {
      box.style.maxHeight    = '100vh';
      box.style.borderRadius = '0';
    } else {
      box.style.maxHeight    = '92vh';
      box.style.borderRadius = '20px 20px 0 0';
    }
    setTimeout(() => { box.style.transition = ''; }, 320);
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    box.style.transition = '';

    if (dragDeltaY >= DISMISS_THRESHOLD && !isFullscreen) {
      box.style.transform = `translateY(100%)`;
      box.style.opacity   = '0';
      setTimeout(closeModal, 220);
    } else if (dragDeltaY <= -FULLSCREEN_THRESHOLD && !isFullscreen) {
      box.style.transform = '';
      box.style.opacity   = '';
      setFullscreen(true);
    } else if (dragDeltaY >= FULLSCREEN_THRESHOLD && isFullscreen) {
      box.style.transform = '';
      box.style.opacity   = '';
      setFullscreen(false);
    } else {
      box.style.transform = '';
      box.style.opacity   = '';
    }
  }

  if (box) {
    box.addEventListener('touchstart', onDragStart, { passive: true });
    box.addEventListener('touchmove',  onDragMove,  { passive: false });
    box.addEventListener('touchend',   onDragEnd);
  }

  return { openModal, closeModal };
}

// ── FIX #14 — Related equation helper: find eq by name and open it ────────────
// Walks all branches, finds the matching equation, opens its modal.
let _modalRef = null; // set after initModal

function _openRelatedEquation(name) {
  if (!_modalRef || !name) return;
  const needle = name.trim().toLowerCase();
  for (const branch of Object.values(EQUATIONS)) {
    for (const eq of branch) {
      if (eq.name.trim().toLowerCase() === needle) {
        _modalRef.openModal(eq);
        return;
      }
    }
  }
  // Equation not found — silently ignore (graceful degradation)
}

// ── MAIN INIT ─────────────────────────────────────────────────────────────────

export function initEquations() {
  const modal = initModal();
  _modalRef = modal; // FIX #14 — expose ref for related-chip navigation

  // FIX #16 — Stagger animation delay: cap at 200ms on mobile, 300ms on desktop
  const isMobile  = !isDesktop();
  const stepMs    = isMobile ? 20 : 40;  // 20ms steps on mobile, 40ms on desktop
  const maxDelay  = isMobile ? 200 : 300; // hard cap so late cards aren't sluggish

  // ── CARD TRANSLATION ON LANGUAGE CHANGE ────────────────────────────────────
  // Batch-translates name + desc for all visible cards in one API call,
  // then patches the DOM in-place — no flicker, no re-render.
  async function _translateVisibleCards(lang) {
    const grid = document.getElementById('eq-grid');
    if (!grid) return;
    const cards = [...grid.querySelectorAll('[data-lazy-idx]')];
    if (cards.length === 0) return;

    if (lang === 'en') {
      cards.forEach(card => {
        const branch = card.dataset.lazyBranch;
        const idx    = Number(card.dataset.lazyIdx);
        const eq     = (EQUATIONS[branch] || [])[idx];
        if (!eq) return;
        const nameEl = card.querySelector('.eq-name');
        const descEl = card.querySelector('.eq-desc');
        if (nameEl) nameEl.textContent = eq.name;
        if (descEl) descEl.textContent = eq.desc;
      });
      return;
    }

    const batchItems = cards.map(card => {
      const branch = card.dataset.lazyBranch;
      const idx    = Number(card.dataset.lazyIdx);
      const eq     = (EQUATIONS[branch] || [])[idx];
      if (!eq) return null;
      return { id: `${branch}::${idx}`, fields: { name: eq.name, desc: eq.desc } };
    }).filter(Boolean);

    cards.forEach(c => c.classList.add('translating'));
    try {
      const resultMap = await translateBatch(batchItems, lang);
      cards.forEach(card => {
        const id     = `${card.dataset.lazyBranch}::${card.dataset.lazyIdx}`;
        const result = resultMap.get(id);
        if (!result) return;
        const nameEl = card.querySelector('.eq-name');
        const descEl = card.querySelector('.eq-desc');
        if (nameEl && result.name) nameEl.textContent = result.name;
        if (descEl && result.desc) descEl.textContent = result.desc;
      });
    } finally {
      cards.forEach(c => c.classList.remove('translating'));
    }
  }

  // Subscribe: re-translate cards whenever language changes
  onLangChange(lang => { _translateVisibleCards(lang); });

  createLazyTabSection({
    data:         EQUATIONS,
    tabsId:       'eq-branch-tabs',
    gridId:       'eq-grid',
    tabBtnClass:  'eq-branch-btn',
    filtersId:    'eq-difficulty-filters',
    filterKey:    'difficulty',
    searchId:     'eq-search',
    searchFields: ['name', 'formula', 'desc'],

    renderCard: (eq, branch, i) => {
      const tagsHtml = Array.isArray(eq.tags) && eq.tags.length
        ? `<div class="eq-tags">${eq.tags.slice(0, 3).map(t => `<span class="eq-tag">${t}</span>`).join('')}</div>`
        : '';
      const diffSlug = eq.difficulty ? eq.difficulty.toLowerCase().replace(/[^a-z]/g, '') : '';
      // FIX #16 — capped animation delay
      const delay = Math.min(i * stepMs, maxDelay);
      return `
        <div class="glass-card eq-card stagger-item"
             style="animation-delay:${delay}ms"
             data-lazy-branch="${branch}"
             data-lazy-idx="${i}"
             role="button" aria-expanded="false" tabindex="0"
             aria-label="Equation: ${eq.name}">
          <div class="eq-card-header">
            <div class="eq-name">${eq.name}</div>
            <div class="eq-card-badges">
              ${eq.year       ? `<span class="eq-year-badge">${eq.year}</span>` : ''}
              ${eq.difficulty ? `<span class="eq-difficulty-badge eq-diff-${diffSlug}">${eq.difficulty}</span>` : ''}
            </div>
          </div>
          <div class="eq-formula-display" aria-label="Formula: ${eq.formula}">\\(${eq.formulaLatex || eq.formula}\\)</div>
          <div class="eq-desc">${eq.desc}</div>
          ${tagsHtml}
          <div class="eq-expand-hint" aria-hidden="true">
            <svg class="eq-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            <span class="eq-expand-label">Details</span>
          </div>
          <div class="eq-detail" role="region" aria-label="Details for ${eq.name}"></div>
        </div>`;
    },

    renderDetail: (eq) => buildDetailHTML(eq),

    // FIX #01 — On mobile: open ONLY the modal, do NOT let lazyRenderer expand
    // the card in-place (both firing simultaneously was the double-UI bug).
    // We signal "handled" by returning `true`; lazyRenderer checks this flag
    // to skip its own expand logic when onExpand takes over.
    //
    // On desktop: same modal behaviour, but card also gets expanded class
    // for keyboard/screen-reader affordance (existing behaviour, no change).
    onExpand: (cardEl, eq) => {
      if (modal) {
        modal.openModal(eq);
      }
      // Return true so lazyRenderer knows onExpand handled it on mobile
      return !isDesktop();
    },
  });

  // Re-translate cards after tab switches / filter changes cause a re-render.
  // MutationObserver watches the grid for new childList mutations.
  const _eqGrid = document.getElementById('eq-grid');
  if (_eqGrid) {
    const _initLang = getCurrentLang();
    if (_initLang !== 'en') _translateVisibleCards(_initLang);

    let _rerenderTimer = null;
    new MutationObserver(() => {
      const l = getCurrentLang();
      if (l === 'en') return;
      clearTimeout(_rerenderTimer);
      _rerenderTimer = setTimeout(() => _translateVisibleCards(l), 100);
    }).observe(_eqGrid, { childList: true });
  }
}
