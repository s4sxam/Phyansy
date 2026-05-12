// =============================================================================
// pageController.js — Tab Switching + Lazy Init (Zperiod pattern)
// =============================================================================

import { initConstants }   from './constantsController.js';
import { initEquations }   from './equationsController.js';
import { initSymbols }     from './symbolsController.js';
import { initUnits }       from './unitsController.js';
import { initCalculator }  from './calculatorController.js';

const INIT_MAP = {
  constants:  initConstants,
  equations:  initEquations,
  symbols:    initSymbols,
  units:      initUnits,
  calculator: initCalculator,
};

const initialized = {};

function switchTab(name) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    const isActive = btn.dataset.tab === name;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Update sections
  document.querySelectorAll('.section').forEach((sec) => {
    sec.classList.toggle('active', sec.id === `sec-${name}`);
  });

  // Lazy init
  if (!initialized[name] && INIT_MAP[name]) {
    INIT_MAP[name]();
    initialized[name] = true;
  }
}

export function initPageController() {
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Boot the first tab (constants)
  switchTab('constants');
}
