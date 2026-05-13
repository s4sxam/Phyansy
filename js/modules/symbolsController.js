// =============================================================================
// symbolsController.js — uses lazyRenderer engine
// Desktop (>768px) → modal | Mobile (≤768px) → expand-in-card
// =============================================================================

import { GREEK, MATH_SYMBOLS } from '../data/symbolsData.js';
import { createLazySection } from './lazyRenderer.js';

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
}
