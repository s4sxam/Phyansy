// =============================================================================
// symbolsController.js — uses lazyRenderer engine
// =============================================================================

import { GREEK, MATH_SYMBOLS } from '../data/symbolsData.js';
import { createLazySection } from './lazyRenderer.js';

export function initSymbols() {

  // Greek — expandable cards via click (lazyRenderer handles expand/collapse)
  // Detail is injected into .lazy-detail on first click, not via CSS :hover
  createLazySection({
    data:         GREEK,
    gridId:       'greek-grid',
    searchId:     'sym-search',          // Fix #1: wire the search input
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

    // Fix #2: detail rendered by JS on click — not by CSS :hover
    // .greek-detail replaces .greek-tooltip so CSS hover rule no longer applies
    renderDetail: (g) => `
      <div class="greek-detail">
        <div class="greek-detail-title">Physics uses</div>
        <ul>${g.ext.map(e => `<li>${e}</li>`).join('')}</ul>
      </div>
    `,
  });

  // Math symbols — simple static list, no expand needed
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
