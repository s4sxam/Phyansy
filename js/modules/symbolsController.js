// =============================================================================
// symbolsController.js — uses lazyRenderer engine
// Desktop (>768px) → modal | Mobile (≤768px) → expand-in-card
// =============================================================================

import { GREEK, MATH_SYMBOLS } from '../data/symbolsData.js';
import { createLazySection } from './lazyRenderer.js';
import { getCurrentLang, onLangChange, translateBatch } from './langController.js';

const DESKTOP_BREAKPOINT = 768;
const isDesktop = () => window.innerWidth > DESKTOP_BREAKPOINT;

// ── MODAL ─────────────────────────────────────────────────────────────────────

function initModal() {
  const overlay   = document.getElementById('sym-modal');
  const closeBtn  = document.getElementById('sym-modal-close');
  const lettersEl = document.getElementById('sym-modal-letters');
  const titleEl   = document.getElementById('sym-modal-title');
  const pronEl    = document.getElementById('sym-modal-pron');
  const bodyEl    = document.getElementById('sym-modal-body');

  if (!overlay) return null;

  function openModal(g) {
    lettersEl.textContent = `${g.upper} ${g.lower}`;
    titleEl.textContent   = g.name;
    pronEl.textContent    = g.pron;
    bodyEl.innerHTML      = `
      <div class="greek-detail">
        <div class="greek-detail-title">Physics uses</div>
        <ul>${g.ext.map(e => `<li>${e}</li>`).join('')}</ul>
      </div>`;

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

export function initSymbols() {
  const modal = initModal();

  // ── CARD TRANSLATION ON LANGUAGE CHANGE ─────────────────────────────────
  async function _translateGreekCards(lang) {
    const grid = document.getElementById('greek-grid');
    if (!grid) return;
    const cards = [...grid.querySelectorAll('[data-lazy-idx]')];
    if (cards.length === 0) return;

    if (lang === 'en') {
      cards.forEach(card => {
        const idx = Number(card.dataset.lazyIdx);
        const g   = GREEK[idx];
        if (!g) return;
        const nameEl    = card.querySelector('.greek-name');
        const pronEl    = card.querySelector('.greek-pron');
        const primaryEl = card.querySelector('.greek-use');
        if (nameEl)    nameEl.textContent    = g.name;
        if (pronEl)    pronEl.textContent    = g.pron;
        if (primaryEl) primaryEl.textContent = g.primary;
      });
      return;
    }

    const batchItems = cards.map(card => {
      const idx = Number(card.dataset.lazyIdx);
      const g   = GREEK[idx];
      if (!g) return null;
      return { id: String(idx), fields: { name: g.name, pron: g.pron, primary: g.primary } };
    }).filter(Boolean);

    cards.forEach(c => c.classList.add('translating'));
    try {
      const resultMap = await translateBatch(batchItems, lang);
      cards.forEach(card => {
        const result    = resultMap.get(String(card.dataset.lazyIdx));
        if (!result) return;
        const nameEl    = card.querySelector('.greek-name');
        const pronEl    = card.querySelector('.greek-pron');
        const primaryEl = card.querySelector('.greek-use');
        if (nameEl    && result.name)    nameEl.textContent    = result.name;
        if (pronEl    && result.pron)    pronEl.textContent    = result.pron;
        if (primaryEl && result.primary) primaryEl.textContent = result.primary;
      });
    } finally {
      cards.forEach(c => c.classList.remove('translating'));
    }
  }

  async function _translateMathCards(lang) {
    const mathGrid = document.getElementById('math-sym-grid');
    if (!mathGrid) return;
    const cards = [...mathGrid.querySelectorAll('.math-sym-card')];
    if (cards.length === 0) return;

    if (lang === 'en') {
      cards.forEach((card, i) => {
        const s = MATH_SYMBOLS[i];
        if (!s) return;
        const nameEl = card.querySelector('.math-sym-name');
        const useEl  = card.querySelector('.math-sym-use');
        if (nameEl) nameEl.textContent = s.name;
        if (useEl)  useEl.textContent  = s.use;
      });
      return;
    }

    const batchItems = cards.map((card, i) => {
      const s = MATH_SYMBOLS[i];
      if (!s) return null;
      return { id: `math_${i}`, fields: { name: s.name, use: s.use } };
    }).filter(Boolean);

    cards.forEach(c => c.classList.add('translating'));
    try {
      const resultMap = await translateBatch(batchItems, lang);
      cards.forEach((card, i) => {
        const result = resultMap.get(`math_${i}`);
        if (!result) return;
        const nameEl = card.querySelector('.math-sym-name');
        const useEl  = card.querySelector('.math-sym-use');
        if (nameEl && result.name) nameEl.textContent = result.name;
        if (useEl  && result.use)  useEl.textContent  = result.use;
      });
    } finally {
      cards.forEach(c => c.classList.remove('translating'));
    }
  }

  onLangChange(lang => {
    _translateGreekCards(lang);
    _translateMathCards(lang);
  });

  createLazySection({
    data:         GREEK,
    gridId:       'greek-grid',
    searchId:     'sym-search',
    searchFields: ['name', 'pron', 'primary'],

    renderCard: (g, globalIdx, i) => `
      <div class="glass-card greek-card stagger-item"
           style="animation-delay:${i * 30}ms"
           data-lazy-idx="${globalIdx}"
           role="button" aria-expanded="false" tabindex="0"
           aria-label="${g.name}: ${g.primary}">
        <div class="greek-letters">${g.upper} ${g.lower}</div>
        <div class="greek-name">${g.name}</div>
        <div class="greek-pron">${g.pron}</div>
        <div class="greek-use">${g.primary}</div>
        <div class="lazy-detail"></div>
      </div>`,

    renderDetail: (g) => `
      <div class="greek-detail">
        <div class="greek-detail-title">Physics uses</div>
        <ul>${g.ext.map(e => `<li>${e}</li>`).join('')}</ul>
      </div>`,

    onExpand: (card, g) => {
      // Desktop → modal, keep card collapsed
      if (isDesktop() && modal) {
        modal.openModal(g);
        requestAnimationFrame(() => {
          card.classList.remove('expanded');
          card.setAttribute('aria-expanded', 'false');
          card.dataset.lazyLoaded = '';
        });
        return;
      }
      // Mobile → expand-in-card (lazyRenderer handles it)
    },
  });

  // Math symbols — static list, no expand
  const mathGrid = document.getElementById('math-sym-grid');
  if (mathGrid) {
    mathGrid.innerHTML = MATH_SYMBOLS.map((s, i) => `
      <div class="glass-card math-sym-card stagger-item"
           style="animation-delay:${i * 30}ms" role="listitem">
        <div class="math-sym-glyph">${s.sym}</div>
        <div>
          <div class="math-sym-name">${s.name}</div>
          <div class="math-sym-use">${s.use}</div>
        </div>
      </div>`).join('');
  }

  // Sub-tab switching (Greek / Math)
  const subBtns  = document.querySelectorAll('.sym-sub-btn');
  const symGreek = document.getElementById('sym-greek');
  const symMath  = document.getElementById('sym-math');

  subBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      subBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      if (btn.dataset.sym === 'greek') {
        symGreek?.classList.remove('hidden');
        symMath?.classList.add('hidden');
      } else {
        symGreek?.classList.add('hidden');
        symMath?.classList.remove('hidden');
      }
    });
  });

  // Translate on initial load if lang != en
  const _symGrid = document.getElementById('greek-grid');
  if (_symGrid) {
    const _initLang = getCurrentLang();
    if (_initLang !== 'en') {
      _translateGreekCards(_initLang);
      _translateMathCards(_initLang);
    }
    let _symTimer = null;
    new MutationObserver(() => {
      const l = getCurrentLang();
      if (l === 'en') return;
      clearTimeout(_symTimer);
      _symTimer = setTimeout(() => _translateGreekCards(l), 100);
    }).observe(_symGrid, { childList: true });
  }
}
