// =============================================================================
// equationsController.js — KaTeX-powered equation renderer
// Desktop (>768px) → modal | Mobile (≤768px) → expand-in-card
// =============================================================================

import { EQUATIONS } from '../data/equationsData.js';
import { createLazyTabSection } from './lazyRenderer.js';
import { isComplexEquation } from './deviceManager.js';

const DESKTOP_BREAKPOINT = 768;
const isDesktop = () => window.innerWidth > DESKTOP_BREAKPOINT;

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

// ── DIMENSION STRING → LATEX ──────────────────────────────────────────────────
// Converts plain-text dimension strings like "[M][L][T]⁻²" into a KaTeX-ready
// LaTeX string like "\mathrm{[M][L][T]^{-2}}". Handles superscripts, parenthetical
// notes (stripped after a double-space), and dimensionless strings.
function dimToLatex(raw) {
  if (!raw) return '';

  // Strip any parenthetical explanation after two spaces or " ("
  const clean = raw.replace(/\s{2,}.*$/, '').replace(/\s+\(.*$/, '').trim();

  if (/^dimensionless/i.test(clean)) return '\\text{dimensionless}';

  // Replace Unicode superscript characters with LaTeX exponents
  const superMap = {
    '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4',
    '⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-',
  };

  // Convert sequences like ⁻² → ^{-2}, ² → ^{2}, etc.
  let latex = clean.replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, match => {
    const exp = match.split('').map(c => superMap[c] || c).join('');
    return `^{${exp}}`;
  });

  // Wrap letters (dimension symbols) in \mathrm for upright roman style
  // Brackets, numbers, exponents and ^ { } are kept as-is
  latex = latex.replace(/[A-Za-zΘθ]+/g, m => `\\mathrm{${m}}`);

  return latex;
}

// ── SI UNIT STRING → LATEX ────────────────────────────────────────────────────
// Converts plain unit strings like "m/s²" or "N·m²/kg²" into LaTeX.
function unitToLatex(unit) {
  if (!unit) return '';
  if (/^dimensionless$/i.test(unit.trim())) return '\\text{dimensionless}';

  const superMap = {
    '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4',
    '⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-',
  };

  let s = unit
    // Unicode superscripts → LaTeX exponents
    .replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, match => {
      const exp = match.split('').map(c => superMap[c] || c).join('');
      return `^{${exp}}`;
    })
    // · → \cdot
    .replace(/·/g, '\\cdot ')
    // / → \text{/} (keep readable)
    .replace(/\//g, '/')
    // wrap letter sequences in \text for upright roman
    .replace(/[A-Za-zΩμΘ]+/g, m => `\\text{${m}}`);

  return s;
}

// ── MATHIFY ───────────────────────────────────────────────────────────────────
// Converts prose strings into KaTeX-renderable HTML.
// Existing \(...\) and \[...\] delimiters are passed through untouched.
// Only plain-prose spans are scanned for math patterns.
function mathify(text) {
  if (!text) return text;

  // Tokenize: split on existing LaTeX delimiters so we never double-process them
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
  // ── 1. Unicode fractions ──────────────────────────────────────────────────
  text = text
    .replace(/½/g, '\\(\\tfrac{1}{2}\\)')
    .replace(/¼/g, '\\(\\tfrac{1}{4}\\)')
    .replace(/¾/g, '\\(\\tfrac{3}{4}\\)')
    .replace(/⅓/g, '\\(\\tfrac{1}{3}\\)')
    .replace(/⅔/g, '\\(\\tfrac{2}{3}\\)');

  // ── 2. Raw LaTeX ^{} / _{} scanner ───────────────────────────────────────
  // Wraps tokens that contain explicit LaTeX sub/superscript braces: T_eff^{1/4}, c_{R1+R2}
  // For single-char subscripts like _n, requires a word boundary after (prevents
  // "m_n" from greedily eating the start of "m_nucleus").
  text = text.replace(
    /((?:[A-Za-z\u0391-\u03C9\u00C5\u210F\u2113\u221E\u2202\u2207\d]|\([^)]{1,60}\))(?:[_^]\{[^{}]{0,80}\}|[_^][A-Za-z\u0391-\u03C9\d](?![A-Za-z\d]))+)/g,
    (match) => `\\(${match}\\)`
  );

  // ── 2b. Identifier_subscript pattern ─────────────────────────────────────
  // Handles prose identifiers like m_nucleus, T_eff, u_k that have multi-char
  // subscripts written without braces. Converts to \(base_{\text{sub}}\).
  text = text.replace(
    /(?<![\\(])\b([A-Za-z]\w*)_([A-Za-z]\w+)\b/g,
    (_, base, sub) => `\\(${base}_{\\text{${sub}}}\\)`
  );

  // ── 3. Derivative notation: dv/dt, d²x/dt² ───────────────────────────────
  text = text.replace(
    /\b(d[²³]?[a-zA-Z\u03A8\u03C8\u03A6\u03C6\u03C1])\/(d(?:t[²³]?|[a-zA-Z][²³]?))\b/g,
    (_, num, den) => {
      const toExp = s => s.replace(/²/g, '^2').replace(/³/g, '^3');
      return `\\(\\frac{${toExp(num)}}{${toExp(den)}}\\)`;
    }
  );

  // ── 4. Integral symbol ∫ ──────────────────────────────────────────────────
  text = text.replace(
    /∫([^=\n.,;]{1,80}?)(?=\s*[=.,;]|\s*$)/g,
    (_, body) => `\\(\\int ${body.trim()}\\)`
  );

  // ── 5. Inline equations (runs BEFORE unicode superscript to avoid nesting) ─
  text = text.replace(
    /\b([A-Za-z\u0391-\u03C9][A-Za-z\u0391-\u03C9\d_]{0,8})\s*=\s*([^\s=\n][^=\n]{0,80}?)(?=[\s.,;)—–]|$)/g,
    (match, lhs, rhs) => {
      if (/^[a-z]{4,}$/i.test(lhs) && !/[_^]/.test(lhs)) return match; // plain word
      if (!/[+\-*/²³½¼∫√±×·\d^_{}\\\[\]()]/.test(rhs)) return match;   // no math chars
      if (match.includes('\\(')) return match;                            // already wrapped
      return `\\(${lhs} = ${rhs.trim()}\\)`;
    }
  );

  // ── 6. Unicode superscripts: mc², σT⁴, 4πR², R⁻¹ ────────────────────────
  // Grabs the full preceding word so "mc²" → \(mc^{2}\) not "m\(c^{2}\)"
  const supMap = {'²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁰':'0','⁻':'-','¹':'1'};
  text = text.replace(
    /([A-Za-z\u0391-\u03C9\u00C5\u210F\d]+)([²³⁴⁵⁶⁷⁸⁹⁻¹⁰]+)/g,
    (_, base, exps) => {
      const exp = exps.split('').map(c => supMap[c] || c).join('');
      return `\\(${base}^{${exp}}\\)`;
    }
  );

  // ── 7. Unicode subscripts: v₀, x₁ ───────────────────────────────────────
  text = text.replace(
    /([A-Za-z\u0391-\u03C9])([₀₁₂₃₄₅₆₇₈₉])/g,
    (_, b, s) => `\\(${b}_{${'0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(s)]}}\\)`
  );

  // ── 8. Square root √ ──────────────────────────────────────────────────────
  text = text.replace(
    /√(\([^)]+\)|[A-Za-z\d]+)/g,
    (_, a) => `\\(\\sqrt{${a.replace(/[()]/g, '')}}\\)`
  );

  // ── 9. Operators: · dot, ∝ proportional, ≈ approximately ─────────────────
  text = text.replace(/([A-Za-z\d])\u00B7([A-Za-z\d])/g, (_, a, b) => `\\(${a} \\cdot ${b}\\)`);
  text = text.replace(
    /([A-Za-z\u0391-\u03C9\d]+)\s*∝\s*([A-Za-z\u0391-\u03C9\d^²³⁴⁻]+)/g,
    (_, a, b) => `\\(${a} \\propto ${b}\\)`
  );
  text = text.replace(
    /([A-Za-z\d.]+)\s*≈\s*([A-Za-z\d./×⁻\-+^]+)/g,
    (_, a, b) => `\\(${a} \\approx ${b}\\)`
  );

  // ── 10. Fix accidental nesting: \( ... \( ... \) ... \) → \( ... ... \) ──
  // Caused when an inline-eq wraps a span that already has a wrapped sub-term.
  text = text.replace(
    /\\\(([^\\]*)\\\(([^\\]*)\\\)([^\\]*)\\\)/g,
    (_, pre, inner, post) => `\\(${pre}${inner}${post}\\)`
  );

  // ── 11. Collapse adjacent \)\s*\( ─────────────────────────────────────────
  text = text.replace(/\\\)\s*\\\(/g, ' ');

  return text;
}


function section(icon, label, content, mod) {
  return `<div class="eq-section${mod ? ' eq-section--' + mod : ''}">
    <div class="eq-section-label"><span class="eq-section-icon">${icon}</span>${label}</div>
    <div class="eq-section-body">${content}</div>
  </div>`;
}

function buildDetailHTML(eq) {
  const relatedHtml = Array.isArray(eq.relatedEquations) && eq.relatedEquations.length
    ? section(ICONS.related, 'Related Equations',
        `<div class="eq-related-chips">${eq.relatedEquations.map(r => `<span class="eq-related-chip">${r}</span>`).join('')}</div>`)
    : '';

  const metaItems = [];
  if (eq.dimensions) {
    const dimLatex = dimToLatex(eq.dimensions);
    // Keep the note (parenthetical explanation after double-space) as plain text
    const noteMatch = eq.dimensions.match(/\s{2,}(.*)$/);
    const note = noteMatch ? `<span class="eq-meta-dim-note">${noteMatch[1]}</span>` : '';
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
    ? `<div class="eq-all-tags">${eq.tags.map(t => `<span class="eq-tag">${t}</span>`).join('')}</div>`
    : '';

  const sections = [
    eq.whatItSays    && section(ICONS.whatItSays,    'What It Says',        mathify(eq.whatItSays)),
    eq.example       && section(ICONS.example,       'Example',              `<div class="eq-example-box">${mathify(eq.example)}</div>`, 'example'),
    eq.derivation    && section(ICONS.derivation,    'Derivation',           `<div class="eq-derivation-box">${mathify(eq.derivation)}</div>`, 'derivation'),
    eq.deepMeaning   && section(ICONS.deepMeaning,   'Deep Meaning',         mathify(eq.deepMeaning), 'deep'),
    eq.integralForm  && section(ICONS.math,          'Mathematical Form',    `<div class="eq-katex-block">\\[${eq.integralForm}\\]</div>`, 'math'),
    eq.whoDiscovered && section(ICONS.history,       'History',              mathify(eq.whoDiscovered), 'history'),
    eq.whyItMatters  && section(ICONS.whyItMatters,  'Why It Matters',       mathify(eq.whyItMatters), 'importance'),
    eq.misconception && section(ICONS.misconception, 'Common Misconception', mathify(eq.misconception), 'misconception'),
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
    overlay.classList.remove('mobile-complex-eq');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('show')) closeModal();
  });

  return { openModal, overlay };
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
      const desktop = isDesktop();
      const complex = isComplexEquation(eq);

      // Desktop → always modal (unchanged behaviour)
      // Mobile + complex equation → modal with mobile-complex-eq unlock class
      // Mobile + simple equation → expand-in-card (unchanged behaviour)
      if (modal && (desktop || complex)) {
        if (!desktop && complex) {
          modal.overlay.classList.add('mobile-complex-eq');
        }
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

      // Mobile + simple equation → expand-in-card
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
