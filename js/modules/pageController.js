// =============================================================================
// pageController.js — Tab Switching + Lazy Init (Zperiod pattern)
// =============================================================================

import { initConstants }   from './constantsController.js';
import { initEquations }   from './equationsController.js';
import { initSymbols }     from './symbolsController.js';
import { initUnits }       from './unitsController.js';
import { initCalculator }  from './calculatorController.js';
import { initFunFacts }    from './funFactsController.js';

const INIT_MAP = {
  constants:  initConstants,
  equations:  initEquations,
  symbols:    initSymbols,
  units:      initUnits,
  calculator: initCalculator,
  funfacts:   initFunFacts,
};

const initialized  = {};
const scrollMemory = {};
let   activeTab    = null;

function switchTab(name) {
  // Save scroll position of the tab we're leaving
  if (activeTab && activeTab !== name) {
    scrollMemory[activeTab] = window.scrollY;
  }

  activeTab = name;

  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    const isActive = btn.dataset.tab === name;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Swap sections — suppress animation during the switch to avoid jank
  document.querySelectorAll('.section').forEach((sec) => {
    const isActive = sec.id === `sec-${name}`;
    if (isActive) {
      sec.style.animationDuration = '0s';   // instant show, no fade
      sec.classList.add('active');
      // Re-enable animation for future renders (e.g. card stagger) after paint
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { sec.style.animationDuration = ''; });
      });
    } else {
      sec.classList.remove('active');
    }
  });

  // Lazy init (first visit only)
  if (!initialized[name] && INIT_MAP[name]) {
    INIT_MAP[name]();
    initialized[name] = true;
  }

  // Restore scroll — defer one frame so the section is painted first
  const savedScroll = scrollMemory[name] ?? 0;
  requestAnimationFrame(() => {
    window.scrollTo({ top: savedScroll, behavior: 'instant' });
  });
}

export function initPageController() {
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Boot the first tab (constants)
  switchTab('constants');
}
