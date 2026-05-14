// =============================================================================
// equationsController.js — KaTeX-powered equation renderer
// Desktop (>768px) → modal | Mobile (≤768px) → expand-in-card
// =============================================================================

import { EQUATIONS } from '../data/equationsData.js';
import { createLazyTabSection } from './lazyRenderer.js';

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

// =============================================================================
// dimToLatex
// Converts plain-text dimension strings to KaTeX-ready LaTeX.
//
// Input examples:
//   "[L][T]⁻¹"                 → \mathsf{L}\,\mathsf{T}^{-1}
//   "[M][L]²[T]⁻²"             → \mathsf{M}\,\mathsf{L}^{2}\,\mathsf{T}^{-2}
//   "dimensionless"             → \text{dimensionless}
//   "[L]  (note here)"          → { latex: "...", note: "note here" }
// =============================================================================
function dimToLatex(raw) {
  if (!raw) return null;

  // Strip trailing parenthetical note: anything after 2+ spaces before "("
  const noteMatch = raw.match(/^(.*?)\s{2,}\((.+)\)\s*$/s);
  const core = noteMatch ? noteMatch[1].trim() : raw.trim();
  const note = noteMatch ? noteMatch[2].trim() : null;

  // Dimensionless variants
  const lower = core.toLowerCase().replace(/[\[\]]/g, '');
  if (lower === 'dimensionless' || lower.startsWith('dimensionless')) {
    return { latex: '\\text{dimensionless}', note };
  }

  // Unicode superscript → digit/minus map
  const supMap = {
    '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4',
    '⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9',
    '⁻':'-',
  };

  function parseExponent(str) {
    return [...str].map(ch => supMap[ch] ?? ch).join('');
  }

  // Match [SYMBOL] optionally followed by unicode exponent chain
  const tokenRe = /\[([A-Za-zΘθΩ]+(?:\/[A-Za-z]+)?)\]((?:[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+)?)/g;

  let latex = '';
  let lastIndex = 0;
  let match;

  while ((match = tokenRe.exec(core)) !== null) {
    const between = core.slice(lastIndex, match.index).trim();
    if (between) latex += `\\,\\text{${between}}`;

    const sym = match[1];
    const expRaw = match[2] || '';

    if (expRaw) {
      const exp = parseExponent(expRaw);
      latex += `\\mathsf{${sym}}^{${exp}}\\,`;
    } else {
      latex += `\\mathsf{${sym}}\\,`;
    }
    lastIndex = tokenRe.lastIndex;
  }

  const trailing = core.slice(lastIndex).trim();
  if (trailing) latex += `\\,\\text{${trailing}}`;

  latex = latex.replace(/\\,\s*$/, '');

  return { latex: latex || `\\text{${core}}`, note };
}

// =============================================================================
// siUnitToLatex
// Converts plain SI unit string to KaTeX \mathrm notation.
//
// "m/s²"    → \mathrm{m}\,\mathrm{s}^{-2}
// "kg·m/s"  → \mathrm{kg}\,\mathrm{m}\,\mathrm{s}^{-1}
// "N"       → \mathrm{N}
// "J/K"     → \mathrm{J}\,\mathrm{K}^{-1}
// =============================================================================
function siUnitToLatex(unit) {
  if (!unit || unit === '—' || unit === '-') return '\\text{—}';

  const supMap = { '²':'2','³':'3','⁴':'4','¹':'1','⁻':'-','⁰':'0' };

  // Normalize unicode superscripts to ^N notation
  let s = unit.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g, m => {
    const digits = [...m].map(ch => supMap[ch] ?? ch).join('');
    return `^${digits}`;
  });

  // Split on "/" for numerator/denominator
  const slashIdx = s.indexOf('/');
  const numeratorStr   = slashIdx >= 0 ? s.slice(0, slashIdx) : s;
  const denominatorStr = slashIdx >= 0 ? s.slice(slashIdx + 1) : null;

  // Tokenize a group string into LaTeX pieces
  function tokenize(str) {
    return str
      .split(/[·\u00B7\s]+/)
      .filter(Boolean)
      .map(tok => {
        // e.g. "m^2", "kg", "s^-1", "rad^-1"
        const em = tok.match(/^([A-Za-zΩμ°%]+)\^(-?\d+)$/);
        if (em) return `\\mathrm{${em[1]}}^{${em[2]}}`;
        return `\\mathrm{${tok}}`;
      });
  }

  const numTokens = tokenize(numeratorStr);

  if (!denominatorStr) {
    return numTokens.join('\\,');
  }

  // Denominator: negate each exponent (or append ^{-1} for plain symbols)
  const denTokens = tokenize(denominatorStr).map(tok => {
    // Already has exponent like ^{2} → flip to ^{-2}
    const em = tok.match(/^(\\mathrm\{[^}]+\})\^\{(-?\d+)\}$/);
    if (em) {
      const exp = parseInt(em[2], 10);
      return `${em[1]}^{${-exp}}`;
    }
    // Plain symbol → append ^{-1}
    return `${tok}^{-1}`;
  });

  return [...numTokens, ...denTokens].join('\\,');
}

// =============================================================================
// renderDerivation
// Parses derivation plain text and wraps recognisable inline math in \(...\).
// Splits on sentence boundaries and renders each step on its own line.
// =============================================================================
function renderDerivation(text) {
  if (!text) return '';

  // Replace math-like symbols before wrapping
  function latexify(expr) {
    return expr
      .replace(/½/g, '\\tfrac{1}{2}')
      .replace(/×/g, '\\times')
      .replace(/·/g, '\\cdot')
      .replace(/−/g, '-')
      .replace(/∫/g, '\\int')
      .replace(/²/g, '^{2}')
      .replace(/³/g, '^{3}')
      .replace(/√\(([^)]+)\)/g, '\\sqrt{$1}')
      .trim();
  }

  // Sentence splitter — split on ". " where next word starts with uppercase
  const sentences = text.split(/(?<=[.:])\s+(?=[A-Z])/);

  return sentences.map(sentence => {
    // Detect math-looking content
    const hasMath = /[=∫½×÷²³]/.test(sentence) ||
                    /\b[a-zA-Z]\s*=\s*[^\s]/.test(sentence);

    if (!hasMath) {
      return `<span class="deriv-step">${sentence}</span>`;
    }

    // Wrap inline math candidates: sequences around = with variables/numbers
    // Strategy: find "EXPR = EXPR" patterns and wrap the whole token
    const mathTokenRe = /([a-zA-Z²³_^{}\\]+\s*=\s*[^,.;:()]+?(?=[,.:;()\n]|$)|[∫½√][^\s,.;:]+(?:\s*[+\-][^\s,.;:]+)*)/g;

    const fragments = [];
    let result = sentence.replace(mathTokenRe, m => {
      const latex = latexify(m);
      const idx = fragments.length;
      fragments.push(`\\(${latex}\\)`);
      return `__F${idx}__`;
    });

    fragments.forEach((frag, i) => {
      result = result.replace(`__F${i}__`, frag);
    });

    return `<span class="deriv-step">${result}</span>`;
  }).join('\n');
}

// =============================================================================
// section helper
// =============================================================================
function section(icon, label, content, mod) {
  return `<div class="eq-section${mod ? ' eq-section--' + mod : ''}">
    <div class="eq-section-label"><span class="eq-section-icon">${icon}</span>${label}</div>
    <div class="eq-section-body">${content}</div>
  </div>`;
}

// =============================================================================
// buildDetailHTML
// =============================================================================
function buildDetailHTML(eq) {
  const relatedHtml = Array.isArray(eq.relatedEquations) && eq.relatedEquations.length
    ? section(ICONS.related, 'Related Equations',
        `<div class="eq-related-chips">${eq.relatedEquations.map(r => `<span class="eq-related-chip">${r}</span>`).join('')}</div>`)
    : '';

  // ── DIMENSIONS ────────────────────────────────────────────────────────────
  const metaItems = [];

  if (eq.dimensions) {
    const dim = dimToLatex(eq.dimensions);
    if (dim) {
      metaItems.push(`
        <div class="eq-meta-item eq-meta-item--dim">
          <span class="eq-meta-key">Dimensions</span>
          <span class="eq-meta-val eq-meta-dim">\\(${dim.latex}\\)</span>
          ${dim.note ? `<span class="eq-meta-note">${dim.note}</span>` : ''}
        </div>`);
    }
  }

  // ── SI UNITS ──────────────────────────────────────────────────────────────
  if (eq.SI_units) {
    metaItems.push(`
      <div class="eq-meta-item eq-meta-item--si">
        <span class="eq-meta-key">SI Units</span>
        <div class="eq-si-table">
          ${Object.entries(eq.SI_units).map(([k, v]) => `
            <div class="eq-si-row">
              <span class="eq-si-sym">\\(${k}\\)</span>
              <span class="eq-si-arrow">→</span>
              <span class="eq-si-unit">\\(${siUnitToLatex(v)}\\)</span>
            </div>`).join('')}
        </div>
      </div>`);
  }

  const metaHtml = metaItems.length ? `<div class="eq-meta-row">${metaItems.join('')}</div>` : '';

  // ── TAGS ──────────────────────────────────────────────────────────────────
  const allTagsHtml = Array.isArray(eq.tags) && eq.tags.length
    ? `<div class="eq-all-tags">${eq.tags.map(t => `<span class="eq-tag">${t}</span>`).join('')}</div>`
    : '';

  // ── DERIVATION ────────────────────────────────────────────────────────────
  const derivationContent = eq.derivation
    ? `<div class="eq-derivation-box">${renderDerivation(eq.derivation)}</div>`
    : null;

  // ── SECTIONS ──────────────────────────────────────────────────────────────
  const sections = [
    eq.whatItSays     && section(ICONS.whatItSays,    'What It Says',         eq.whatItSays),
    eq.example        && section(ICONS.example,       'Example',              `<div class="eq-example-box">${eq.example}</div>`, 'example'),
    derivationContent && section(ICONS.derivation,    'Derivation',           derivationContent, 'derivation'),
    eq.deepMeaning    && section(ICONS.deepMeaning,   'Deep Meaning',         eq.deepMeaning, 'deep'),
    eq.integralForm   && section(ICONS.math,          'Mathematical Form',    `<div class="eq-katex-block">\\[${eq.integralForm}\\]</div>`, 'math'),
    eq.whoDiscovered  && section(ICONS.history,       'History',              eq.whoDiscovered, 'history'),
    eq.whyItMatters   && section(ICONS.whyItMatters,  'Why It Matters',       eq.whyItMatters, 'importance'),
    eq.misconception  && section(ICONS.misconception, 'Common Misconception', eq.misconception, 'misconception'),
    relatedHtml,
  ].filter(Boolean).join('');

  return `
    <div class="eq-detail-inner">
      <div class="eq-vars">
        <div class="eq-vars-title">Variables</div>
        ${eq.vars.map(v => `
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

  function openModal(eq) {
    titleEl.textContent = eq.name;

    const diffSlug = eq.difficulty ? eq.difficulty.toLowerCase().replace(/[^a-z]/g, '') : '';
    badgesEl.innerHTML = [
      eq.year       ? `<span class="eq-year-badge">${eq.year}</span>` : '',
      eq.difficulty ? `<span class="eq-difficulty-badge eq-diff-${diffSlug}">${eq.difficulty}</span>` : '',
    ].join('');

    formulaEl.innerHTML = `\\(${eq.formulaLatex || eq.formula}\\)`;
    bodyEl.innerHTML    = buildDetailHTML(eq);

    if (window.renderMathInElement) {
      renderMathInElement(overlay, {
        delimiters: [
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false,
      });
    }

    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('show')) closeModal();
  });

  return { openModal };
}

// ── MAIN INIT ─────────────────────────────────────────────────────────────────

export function initEquations() {
  const modal = initModal();

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
      return `
        <div class="glass-card eq-card stagger-item"
             style="animation-delay:${i * 40}ms"
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

    onExpand: (cardEl, eq) => {
      // Desktop → modal, keep card collapsed
      if (isDesktop() && modal) {
        modal.openModal(eq);
        requestAnimationFrame(() => {
          cardEl.classList.remove('expanded');
          cardEl.setAttribute('aria-expanded', 'false');
          cardEl.dataset.lazyLoaded = '';
          const lbl = cardEl.querySelector('.eq-expand-label');
          if (lbl) lbl.textContent = 'Details';
          const chv = cardEl.querySelector('.eq-chevron');
          if (chv) chv.style.transform = '';
        });
        return;
      }

      // Mobile → expand-in-card
      if (window.renderMathInElement) {
        renderMathInElement(cardEl, {
          delimiters: [
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true },
          ],
          throwOnError: false,
        });
      }
      const label = cardEl.querySelector('.eq-expand-label');
      if (label) label.textContent = 'Collapse';
      const chevron = cardEl.querySelector('.eq-chevron');
      if (chevron) chevron.style.transform = 'rotate(180deg)';
    },
  });
}
