// =============================================================================
// searchInit.js — Bootstraps PhyansySearch after all data modules load
// =============================================================================
// This module is the glue layer between the search engine and the app's data.
// It imports all data sources, builds the search index, then calls init().
//
// Import and call initSearch() once from script.js after boot().
// =============================================================================

import { PhyansySearch }  from './searchEngine.js';
import { CONSTANTS }       from '../data/constantsData.js';
import { EQUATIONS }       from '../data/equationsData.js';
import { GREEK, MATH_SYMBOLS }  from '../data/symbolsData.js';
import { SI_UNITS, DERIVED_UNITS, NON_SI_UNITS, PREFIXES } from '../data/unitsData.js';

let _searchInstance = null;

export function getSearch() {
  return _searchInstance;
}

export function initSearch() {
  // Create the singleton engine
  const engine = new PhyansySearch();

  // Init UI first (injects the DOM elements)
  engine.init();

  // Build the index asynchronously so it doesn't block first paint
  // We use a microtask to defer index construction until after the first render
  Promise.resolve().then(() => {
    try {
      // UNITS: flatten all unit arrays into one for the index
      const allUnits = [
        ...(SI_UNITS      || []),
        ...(DERIVED_UNITS || []),
        ...(NON_SI_UNITS  || []),
        ...(PREFIXES      || []),
      ];

      engine.buildIndex(CONSTANTS, EQUATIONS, GREEK, MATH_SYMBOLS, allUnits);
      console.info('[PhyansySearch] Index built —', engine.index.entries.length, 'entries');
    } catch (err) {
      console.warn('[PhyansySearch] Index build failed:', err);
      // Engine still works for the dropdown UI; search just won't find anything
    }
  });

  _searchInstance = engine;
  return engine;
}
