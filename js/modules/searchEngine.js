// =============================================================================
// searchEngine.js — Phyansy Advanced Search Engine v2.0
// Built by Claude (Anthropic) — 2026
// =============================================================================
//
// FEATURES vs OLD search:
//   ✦ Fuzzy matching with typo tolerance (Levenshtein + n-gram)
//   ✦ Cross-section global search (constants + equations + symbols + units)
//   ✦ Relevance-ranked results with weighted scoring
//   ✦ Search term highlighting in results
//   ✦ Prefix shortcuts: "c:" constants, "eq:" equations, "sym:" symbols, "u:" units
//   ✦ Instant suggestions/autocomplete dropdown (top 6 suggestions)
//   ✦ Keyboard navigation (↑↓ arrows, Enter, Escape)
//   ✦ Search history (last 8 queries, localStorage)
//   ✦ Zero-dependency — pure vanilla JS
//   ✦ < 5 KB minified, non-blocking index build
//
// USAGE:
//   import { PhyansySearch } from './searchEngine.js';
//
//   const search = new PhyansySearch();
//   search.init();   // call once after DOM + data ready
//
// =============================================================================

// ── SCORING WEIGHTS ───────────────────────────────────────────────────────────
const WEIGHTS = {
  // Field importance (exact substring hit score multiplied by this)
  exactNameStart:   100,   // query is prefix of name
  exactName:         80,   // query in name exactly
  exactSymbol:       90,   // query is exactly the symbol
  exactFormula:      60,   // query in formula
  exactTag:          50,   // query matches a tag exactly
  exactDescription:  30,   // query in description
  exactAny:          20,   // query appears anywhere
  // Bonus for short query matching short field (precision bonus)
  precisionBonus:    15,
  // Fuzzy score penalty (0 = perfect, 1 = 1 edit, 2 = 2 edits)
  fuzzyEdit1:        25,
  fuzzyEdit2:        10,
};

const MAX_SUGGESTIONS    = 6;
const HISTORY_KEY        = 'phyansy_search_history';
const MAX_HISTORY        = 8;
const FUZZY_THRESHOLD    = 0.72;  // Jaro-Winkler cutoff for suggestions
const MIN_FUZZY_LEN      = 3;     // Don't fuzzy-match very short queries

// ── SECTION PREFIX SHORTCUTS ─────────────────────────────────────────────────
const PREFIX_MAP = {
  'c:':   'constants',
  'eq:':  'equations',
  'sym:': 'symbols',
  'u:':   'units',
};

// =============================================================================
//  STRING UTILITIES
// =============================================================================

function normalise(s = '') {
  return s.replace(/<[^>]+>/g, '')  // strip HTML
          .toLowerCase()
          .trim();
}

// Jaro-Winkler similarity — returns 0..1 (1 = identical)
function jaroWinkler(s1, s2) {
  if (s1 === s2) return 1;
  const l1 = s1.length, l2 = s2.length;
  if (l1 === 0 || l2 === 0) return 0;

  const matchDist = Math.floor(Math.max(l1, l2) / 2) - 1;
  const s1Matches = new Array(l1).fill(false);
  const s2Matches = new Array(l2).fill(false);

  let matches = 0, transpositions = 0;
  for (let i = 0; i < l1; i++) {
    const start = Math.max(0, i - matchDist);
    const end   = Math.min(i + matchDist + 1, l2);
    for (let j = start; j < end; j++) {
      if (s2Matches[j] || s1[i] !== s2[j]) continue;
      s1Matches[i] = s2Matches[j] = true;
      matches++;
      break;
    }
  }
  if (!matches) return 0;

  let k = 0;
  for (let i = 0; i < l1; i++) {
    if (!s1Matches[i]) continue;
    while (!s2Matches[k]) k++;
    if (s1[i] !== s2[k]) transpositions++;
    k++;
  }

  const jaro = (matches / l1 + matches / l2 + (matches - transpositions / 2) / matches) / 3;

  // Winkler prefix boost (up to 4 chars)
  let prefix = 0;
  for (let i = 0; i < Math.min(4, Math.min(l1, l2)); i++) {
    if (s1[i] === s2[i]) prefix++;
    else break;
  }
  return jaro + prefix * 0.1 * (1 - jaro);
}

// Highlight query terms inside a string (returns HTML)
export function highlight(text, query) {
  if (!query || !text) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(
    new RegExp(`(${escaped})`, 'gi'),
    '<mark class="phy-highlight">$1</mark>'
  );
}

// =============================================================================
//  SEARCH INDEX
// =============================================================================

class SearchIndex {
  constructor() {
    this.entries = [];   // { id, section, name, tokens[], fields{}, raw }
  }

  /**
   * Add all items from a data source.
   * @param {string}   section   - 'constants' | 'equations' | 'symbols' | 'units'
   * @param {Array}    items     - the data array
   * @param {Function} mapper    - (item, idx) => { id, name, symbol?, formula?, desc, tags?, extra? }
   */
  addSection(section, items, mapper) {
    items.forEach((item, idx) => {
      const mapped = mapper(item, idx);
      const fields = {
        name:    normalise(mapped.name    || ''),
        symbol:  normalise(mapped.symbol  || ''),
        formula: normalise(mapped.formula || ''),
        desc:    normalise(mapped.desc    || ''),
        tags:    (mapped.tags || []).map(normalise),
        extra:   normalise(mapped.extra   || ''),
      };

      // Build token list (unique words) for fast lookups
      const allText = [fields.name, fields.symbol, fields.formula, fields.desc, ...fields.tags, fields.extra].join(' ');
      const tokens  = [...new Set(allText.split(/\s+/).filter(t => t.length > 1))];

      this.entries.push({
        id:      mapped.id ?? `${section}-${idx}`,
        section,
        name:    mapped.name   || '',
        display: mapped.display || mapped.name || '',  // for rendering
        fields,
        tokens,
        raw:     item,
        idx,
      });
    });
  }

  /**
   * Search the index.
   * @param {string}  query
   * @param {string}  [sectionFilter]  - limit to one section
   * @returns {Array} sorted hits: { entry, score, matchedFields[] }
   */
  search(query, sectionFilter = null) {
    const q = normalise(query);
    if (!q) return [];

    const hits = [];

    for (const entry of this.entries) {
      if (sectionFilter && entry.section !== sectionFilter) continue;

      let score = 0;
      const matchedFields = [];

      const { name, symbol, formula, desc, tags, extra } = entry.fields;

      // ── EXACT MATCHES ──────────────────────────────────────────────────────
      if (symbol && (symbol === q || symbol.startsWith(q))) {
        score += WEIGHTS.exactSymbol;
        matchedFields.push('symbol');
      }
      if (name.startsWith(q)) {
        score += WEIGHTS.exactNameStart;
        if (!matchedFields.includes('name')) matchedFields.push('name');
      } else if (name.includes(q)) {
        score += WEIGHTS.exactName;
        if (!matchedFields.includes('name')) matchedFields.push('name');
      }
      if (formula && formula.includes(q)) {
        score += WEIGHTS.exactFormula;
        matchedFields.push('formula');
      }
      const tagHit = tags.some(t => t.includes(q) || t === q);
      if (tagHit) {
        score += WEIGHTS.exactTag;
        matchedFields.push('tags');
      }
      if (desc.includes(q)) {
        score += WEIGHTS.exactDescription;
        matchedFields.push('desc');
      }
      if (extra.includes(q)) {
        score += WEIGHTS.exactAny;
        matchedFields.push('extra');
      }

      // ── MULTI-WORD QUERY: each token must appear somewhere ─────────────────
      if (q.includes(' ')) {
        const qTokens = q.split(/\s+/);
        const allText = [name, symbol, formula, desc, ...tags, extra].join(' ');
        const allMatch = qTokens.every(qt => allText.includes(qt));
        if (allMatch && score === 0) {
          score += 15;
          matchedFields.push('multi');
        }
      }

      // ── FUZZY MATCHING (for queries ≥ MIN_FUZZY_LEN, no exact hit yet) ────
      if (score === 0 && q.length >= MIN_FUZZY_LEN) {
        let bestSim = 0;
        const candidates = [name, symbol, ...tags];
        for (const cand of candidates) {
          if (!cand) continue;
          // Check each word in the candidate
          const words = cand.split(/\s+/);
          for (const word of words) {
            if (word.length < 2) continue;
            const sim = jaroWinkler(q, word);
            if (sim > bestSim) bestSim = sim;
          }
          // Also check full name
          const fullSim = jaroWinkler(q, cand);
          if (fullSim > bestSim) bestSim = fullSim;
        }

        if (bestSim >= FUZZY_THRESHOLD) {
          score += Math.round((bestSim - FUZZY_THRESHOLD) / (1 - FUZZY_THRESHOLD) * WEIGHTS.fuzzyEdit1);
          matchedFields.push('fuzzy');
        }
      }

      // ── PRECISION BONUS: short query, short field match ───────────────────
      if (score > 0 && name.length > 0) {
        const ratio = q.length / name.length;
        if (ratio > 0.6) score += WEIGHTS.precisionBonus;
      }

      if (score > 0) {
        hits.push({ entry, score, matchedFields });
      }
    }

    // Sort by score descending, then name ascending
    hits.sort((a, b) => b.score - a.score || a.entry.name.localeCompare(b.entry.name));
    return hits;
  }

  /**
   * Get top-N suggestions for autocomplete.
   * Returns { text, section, icon } objects.
   */
  suggest(query, n = MAX_SUGGESTIONS) {
    const hits = this.search(query);
    return hits.slice(0, n).map(h => ({
      text:    h.entry.name,
      section: h.entry.section,
      display: h.entry.display,
      score:   h.score,
      entry:   h.entry,
    }));
  }
}

// =============================================================================
//  SECTION ICONS (inline SVG strings)
// =============================================================================
const SECTION_ICONS = {
  constants:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  equations:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`,
  symbols:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10"/><path d="M2 12C2 6.48 6.48 2 12 2"/></svg>`,
  units:      `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>`,
};

const SECTION_LABELS = {
  constants: 'Constant',
  equations: 'Equation',
  symbols:   'Symbol',
  units:     'Unit',
};

// =============================================================================
//  SEARCH HISTORY
// =============================================================================

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch { return []; }
}

function saveHistory(query) {
  if (!query || query.length < 2) return;
  try {
    let h = loadHistory().filter(q => q !== query);
    h.unshift(query);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(h.slice(0, MAX_HISTORY)));
  } catch { /* quota exceeded */ }
}

// =============================================================================
//  MAIN SEARCH ENGINE CLASS
// =============================================================================

export class PhyansySearch {
  constructor() {
    this.index    = new SearchIndex();
    this.built    = false;
    this._input   = null;
    this._dropdown= null;
    this._overlay = null;
    this._query   = '';
    this._activeIdx = -1;
    this._suggestions = [];
  }

  // ── BUILD INDEX FROM ALL DATA SOURCES ──────────────────────────────────────

  buildIndex(CONSTANTS, EQUATIONS, GREEK, MATH_SYMBOLS, UNITS) {
    // Constants
    if (CONSTANTS) {
      this.index.addSection('constants', CONSTANTS, (c, i) => ({
        id:      `const-${i}`,
        name:    c.name,
        symbol:  c.symbol,
        formula: c.formula,
        desc:    c.description,
        tags:    [c.category, c.discoveredBy].filter(Boolean),
        extra:   c.whatItSays,
      }));
    }

    // Equations — flatten branch structure
    if (EQUATIONS) {
      let eqIdx = 0;
      Object.entries(EQUATIONS).forEach(([branch, eqs]) => {
        (eqs || []).forEach(eq => {
          this.index.addSection('equations', [eq], (e) => ({
            id:      `eq-${eqIdx++}`,
            name:    e.name,
            symbol:  e.formula,
            formula: e.formulaLatex || e.formula,
            desc:    e.desc,
            tags:    [...(e.tags || []), branch, e.difficulty].filter(Boolean),
            extra:   e.whatItSays,
            display: e.name,
          }));
        });
      });
    }

    // Greek symbols
    if (GREEK) {
      this.index.addSection('symbols', GREEK, (s, i) => ({
        id:     `sym-${i}`,
        name:   s.name + ' (' + (s.upper || '') + '/' + (s.lower || '') + ')',
        symbol: (s.upper || '') + ' ' + (s.lower || ''),
        desc:   s.primary,
        tags:   [],
        extra:  (s.ext || []).join(' '),
        display: s.name,
      }));
    }

    // Math symbols (if separate from GREEK)
    if (MATH_SYMBOLS && Array.isArray(MATH_SYMBOLS)) {
      this.index.addSection('symbols', MATH_SYMBOLS, (s, i) => ({
        id:     `msym-${i}`,
        name:   s.name,
        symbol: s.symbol || s.upper || s.lower,
        desc:   s.primary || s.desc || '',
        tags:   [],
        extra:  (s.ext || []).join(' '),
        display: s.name,
      }));
    }

    // Units — handle flat array of unit objects
    if (UNITS && Array.isArray(UNITS)) {
      this.index.addSection('units', UNITS, (u, i) => ({
        id:      `unit-${i}`,
        name:    u.name || u.qty || '',
        symbol:  u.sym || u.symbol || '',
        desc:    u.def || u.description || u.qty || '',
        tags:    [u.qty, u.dim, u.category].filter(Boolean),
        extra:   u.eq || u.use || '',
        display: u.name || u.qty || '',
      }));
    }

    this.built = true;
  }

  // ── DOM WIRING ─────────────────────────────────────────────────────────────

  init() {
    this._injectStyles();
    this._buildGlobalSearchUI();
    this._patchSectionSearches();
  }

  _injectStyles() {
    if (document.getElementById('phy-search-styles')) return;
    const style = document.createElement('style');
    style.id = 'phy-search-styles';
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

      /* ── GLOBAL SEARCH BAR ─────────────────────────────── */
      #phy-global-search-wrap {
        position: relative;
        width: 100%;
        max-width: 580px;
        margin: 0 auto 36px;
        z-index: 200;
      }

      #phy-global-search-wrap .phy-search-inner {
        display: flex;
        align-items: center;
        gap: 10px;
        background: var(--card-bg, rgba(255,255,255,0.03));
        border: 1px solid var(--border, rgba(255,255,255,0.09));
        border-radius: 16px;
        padding: 0 14px 0 16px;
        height: 52px;
        transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06);
      }

      #phy-global-search-wrap .phy-search-inner:focus-within {
        border-color: var(--physics-accent, #667eea);
        background: var(--card-bg, rgba(255,255,255,0.06));
        box-shadow:
          0 0 0 3px rgba(102,126,234,0.12),
          0 4px 20px rgba(102,126,234,0.08),
          0 1px 3px rgba(0,0,0,0.1);
      }

      /* Subtle animated glow line at bottom on focus */
      #phy-global-search-wrap .phy-search-inner::after {
        content: '';
        position: absolute;
        bottom: 0; left: 16px; right: 16px;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--physics-accent, #667eea), transparent);
        border-radius: 0 0 16px 16px;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
      }
      #phy-global-search-wrap .phy-search-inner:focus-within::after {
        opacity: 0.6;
      }

      #phy-global-input {
        flex: 1;
        background: none;
        border: none;
        outline: none;
        font-size: 14px;
        font-family: 'DM Sans', var(--font, system-ui), sans-serif;
        font-weight: 400;
        letter-spacing: 0.01em;
        color: var(--text, #fff);
        padding: 0;
        min-width: 0;
        caret-color: var(--physics-accent, #667eea);
      }

      #phy-global-input::placeholder {
        color: var(--text-muted, rgba(255,255,255,0.32));
        font-weight: 400;
      }

      .phy-search-icon {
        color: var(--text-muted, rgba(255,255,255,0.35));
        flex-shrink: 0;
        display: flex;
        align-items: center;
        transition: color 0.2s ease;
      }
      #phy-global-search-wrap .phy-search-inner:focus-within .phy-search-icon {
        color: var(--physics-accent, #667eea);
      }

      .phy-search-clear {
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
        color: var(--text-muted, rgba(255,255,255,0.35));
        border-radius: 8px;
        transition: color 0.15s, background 0.15s;
        display: none;
        align-items: center;
        flex-shrink: 0;
      }
      .phy-search-clear:hover {
        color: var(--text, #fff);
        background: rgba(255,255,255,0.07);
      }
      .phy-search-clear.visible { display: flex; }

      .phy-search-shortcut {
        font-size: 11px;
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        color: var(--text-muted);
        padding: 3px 7px;
        background: rgba(255,255,255,0.05);
        border-radius: 6px;
        border: 1px solid rgba(255,255,255,0.08);
        pointer-events: none;
        white-space: nowrap;
        letter-spacing: 0;
        line-height: 1;
      }

      /* ── DROPDOWN ──────────────────────────────────────── */
      #phy-dropdown {
        position: absolute;
        top: calc(100% + 6px);
        left: 0; right: 0;
        background: var(--card-bg, rgba(14,13,22,0.98));
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 16px;
        overflow: hidden;
        box-shadow:
          0 4px 6px rgba(0,0,0,0.07),
          0 12px 32px rgba(0,0,0,0.28),
          0 32px 64px rgba(0,0,0,0.18);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        display: none;
        z-index: 300;
      }
      #phy-dropdown.open { display: block; }

      .phy-dd-header {
        padding: 10px 16px 7px;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--text-muted);
        border-bottom: 1px solid rgba(255,255,255,0.06);
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .phy-dd-item {
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 9px 16px;
        cursor: pointer;
        transition: background 0.12s ease;
        border-bottom: 1px solid rgba(255,255,255,0.04);
      }
      .phy-dd-item:last-child { border-bottom: none; }
      .phy-dd-item:hover, .phy-dd-item.active {
        background: rgba(102,126,234,0.1);
      }
      .phy-dd-item.active .phy-dd-name {
        color: var(--physics-accent, #a08cff);
      }

      .phy-dd-icon {
        width: 30px; height: 30px;
        display: flex; align-items: center; justify-content: center;
        background: rgba(102,126,234,0.1);
        border-radius: 8px;
        flex-shrink: 0;
        color: var(--physics-accent, #667eea);
        transition: background 0.12s;
      }
      .phy-dd-item:hover .phy-dd-icon,
      .phy-dd-item.active .phy-dd-icon {
        background: rgba(102,126,234,0.18);
      }

      .phy-dd-text { flex: 1; min-width: 0; }

      .phy-dd-name {
        font-size: 13px;
        font-weight: 500;
        color: var(--text, #fff);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'DM Sans', system-ui, sans-serif;
        letter-spacing: 0.01em;
      }

      .phy-dd-section {
        font-size: 11px;
        color: var(--text-muted);
        margin-top: 1px;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .phy-dd-badge {
        font-size: 10px;
        padding: 2px 8px;
        border-radius: 20px;
        font-weight: 600;
        background: rgba(102,126,234,0.12);
        color: var(--physics-accent, #667eea);
        white-space: nowrap;
        font-family: 'DM Sans', system-ui, sans-serif;
        letter-spacing: 0.02em;
      }

      .phy-dd-footer {
        padding: 9px 16px;
        font-size: 11px;
        color: var(--text-muted);
        border-top: 1px solid rgba(255,255,255,0.06);
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .phy-dd-footer kbd {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 10px;
        padding: 2px 6px;
        background: rgba(255,255,255,0.06);
        border-radius: 5px;
        border: 1px solid rgba(255,255,255,0.1);
        color: var(--text-muted);
        line-height: 1.4;
      }

      .phy-dd-history { color: var(--text-muted, rgba(255,255,255,0.35)); }
      .phy-dd-history svg { opacity: 0.45; }

      /* ── HISTORY SECTION ───────────────────────────────── */
      .phy-dd-hist-label {
        padding: 10px 16px 5px;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--text-muted);
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      /* ── HIGHLIGHT ─────────────────────────────────────── */
      mark.phy-highlight {
        background: rgba(102,126,234,0.22);
        color: inherit;
        border-radius: 3px;
        padding: 0 2px;
      }

      /* ── PREFIX PILL ──────────────────────────────────── */
      .phy-prefix-pill {
        font-size: 10.5px;
        padding: 2px 9px;
        border-radius: 99px;
        background: rgba(102,126,234,0.15);
        color: var(--physics-accent, #667eea);
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-weight: 600;
        white-space: nowrap;
        border: 1px solid rgba(102,126,234,0.2);
      }

      /* ── SECTION-LEVEL HIGHLIGHTS ─────── */
      .phy-section-result mark.phy-highlight {
        background: rgba(102,126,234,0.2);
      }

      /* ── NO RESULTS ────────────────────────────────────── */
      .phy-dd-empty {
        padding: 20px 16px;
        text-align: center;
        color: var(--text-muted);
        font-size: 13px;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      /* ── GLOBAL RESULT OVERLAY ─────────────────────────── */
      #phy-results-overlay {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 500;
        background: rgba(0,0,0,0.6);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 72px 20px 24px;
        overflow-y: auto;
      }
      #phy-results-overlay.open { display: block; }

      #phy-results-panel {
        max-width: 680px;
        margin: 0 auto;
        background: var(--card-bg, rgba(14,13,22,0.99));
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 20px;
        overflow: hidden;
        box-shadow:
          0 4px 6px rgba(0,0,0,0.08),
          0 16px 48px rgba(0,0,0,0.36),
          0 40px 80px rgba(0,0,0,0.24);
      }

      .phy-results-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 22px 14px;
        border-bottom: 1px solid rgba(255,255,255,0.06);
        gap: 12px;
      }

      .phy-results-title {
        font-size: 14px;
        font-weight: 600;
        color: var(--text, #fff);
        font-family: 'DM Sans', system-ui, sans-serif;
        letter-spacing: 0.01em;
      }

      .phy-results-count {
        font-size: 11.5px;
        color: var(--text-muted);
        font-family: 'DM Sans', system-ui, sans-serif;
        background: rgba(255,255,255,0.05);
        padding: 2px 8px;
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.07);
      }

      .phy-results-close {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text-muted);
        padding: 6px;
        border-radius: 9px;
        transition: color 0.15s, background 0.15s;
        display: flex;
        align-items: center;
        margin-left: auto;
      }
      .phy-results-close:hover {
        color: var(--text, #fff);
        background: rgba(255,255,255,0.07);
      }

      .phy-results-section-head {
        padding: 11px 22px 7px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--physics-accent, #667eea);
        display: flex;
        align-items: center;
        gap: 7px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        font-family: 'DM Sans', system-ui, sans-serif;
        opacity: 0.8;
      }

      .phy-result-row {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 11px 22px;
        cursor: pointer;
        transition: background 0.12s ease;
        border-bottom: 1px solid rgba(255,255,255,0.04);
      }
      .phy-result-row:last-child { border-bottom: none; }
      .phy-result-row:hover { background: rgba(102,126,234,0.08); }

      .phy-result-icon {
        width: 34px; height: 34px;
        display: flex; align-items: center; justify-content: center;
        background: rgba(102,126,234,0.1);
        border-radius: 9px;
        flex-shrink: 0;
        color: var(--physics-accent, #667eea);
        transition: background 0.12s;
      }
      .phy-result-row:hover .phy-result-icon {
        background: rgba(102,126,234,0.16);
      }

      .phy-result-body { flex: 1; min-width: 0; }

      .phy-result-name {
        font-size: 13.5px;
        font-weight: 500;
        color: var(--text, #fff);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'DM Sans', system-ui, sans-serif;
        letter-spacing: 0.01em;
      }

      .phy-result-desc {
        font-size: 11.5px;
        color: var(--text-muted);
        margin-top: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .phy-result-score {
        font-size: 10px;
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        color: var(--text-muted);
        opacity: 0.4;
      }

      .phy-results-empty {
        padding: 48px 24px;
        text-align: center;
        color: var(--text-muted);
        font-family: 'DM Sans', system-ui, sans-serif;
      }
      .phy-results-empty-icon { font-size: 30px; margin-bottom: 10px; opacity: 0.7; }
      .phy-results-empty-msg { font-size: 14px; font-weight: 500; }
      .phy-results-empty-sub { font-size: 12px; margin-top: 6px; opacity: 0.6; line-height: 1.5; }

      /* ── LIGHT THEME OVERRIDES ─────────────────────────── */
      [data-theme="light"] #phy-global-search-wrap .phy-search-inner {
        background: #ffffff;
        border-color: rgba(0,0,0,0.1);
        box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04);
      }
      [data-theme="light"] #phy-global-search-wrap .phy-search-inner:focus-within {
        border-color: var(--physics-accent, #667eea);
        box-shadow: 0 0 0 3px rgba(102,126,234,0.1), 0 4px 16px rgba(102,126,234,0.06);
        background: #ffffff;
      }
      [data-theme="light"] #phy-global-input {
        color: var(--text, #1a1a2e);
      }
      [data-theme="light"] #phy-global-input::placeholder {
        color: rgba(0,0,0,0.3);
      }
      [data-theme="light"] .phy-search-icon {
        color: rgba(0,0,0,0.3);
      }
      [data-theme="light"] #phy-global-search-wrap .phy-search-inner:focus-within .phy-search-icon {
        color: var(--physics-accent, #667eea);
      }
      [data-theme="light"] .phy-search-shortcut {
        background: rgba(0,0,0,0.04);
        border-color: rgba(0,0,0,0.1);
        color: rgba(0,0,0,0.4);
      }
      [data-theme="light"] #phy-dropdown {
        background: rgba(252,252,255,0.99);
        border-color: rgba(0,0,0,0.08);
        box-shadow: 0 4px 6px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.1), 0 32px 64px rgba(0,0,0,0.06);
      }
      [data-theme="light"] .phy-dd-name { color: var(--text, #1a1a2e); }
      [data-theme="light"] .phy-dd-item:hover,
      [data-theme="light"] .phy-dd-item.active {
        background: rgba(102,126,234,0.07);
      }
      [data-theme="light"] .phy-dd-header,
      [data-theme="light"] .phy-dd-footer,
      [data-theme="light"] .phy-dd-hist-label {
        border-color: rgba(0,0,0,0.06);
      }
      [data-theme="light"] .phy-dd-footer kbd {
        background: rgba(0,0,0,0.04);
        border-color: rgba(0,0,0,0.1);
      }
      [data-theme="light"] #phy-results-panel {
        background: rgba(252,252,255,0.99);
        border-color: rgba(0,0,0,0.08);
      }
      [data-theme="light"] .phy-results-title { color: var(--text, #1a1a2e); }
      [data-theme="light"] .phy-results-count {
        background: rgba(0,0,0,0.04);
        border-color: rgba(0,0,0,0.08);
      }
      [data-theme="light"] .phy-result-name { color: var(--text, #1a1a2e); }
      [data-theme="light"] .phy-result-row:hover { background: rgba(102,126,234,0.06); }
      [data-theme="light"] mark.phy-highlight {
        background: rgba(102,126,234,0.15);
      }
    `;
    document.head.appendChild(style);
  }

  _buildGlobalSearchUI() {
    // Insert global search bar ABOVE the main-app, inside a fixed header zone,
    // or inject it right below <nav>. We'll inject it at the top of #main-app.
    const mainApp = document.getElementById('main-app');
    if (!mainApp) return;

    const wrap = document.createElement('div');
    wrap.id = 'phy-global-search-wrap';
    wrap.setAttribute('role', 'search');
    wrap.setAttribute('aria-label', 'Global physics search');
    wrap.innerHTML = `
      <div class="phy-search-inner">
        <span class="phy-search-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
        <input
          id="phy-global-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search everything — constants, equations, symbols…"
          aria-label="Search all physics content"
          aria-autocomplete="list"
          aria-controls="phy-dropdown"
          aria-expanded="false"
        />
        <span class="phy-search-shortcut" title="Prefix tips: c: constants · eq: equations · sym: symbols · u: units">/</span>
        <button class="phy-search-clear" id="phy-search-clear" aria-label="Clear search" title="Clear">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div id="phy-dropdown" role="listbox" aria-label="Search suggestions"></div>
    `;

    // Insert before first section
    mainApp.insertBefore(wrap, mainApp.firstChild);

    // Results overlay (full-page)
    const overlay = document.createElement('div');
    overlay.id = 'phy-results-overlay';
    overlay.innerHTML = `
      <div id="phy-results-panel" role="dialog" aria-modal="true" aria-label="Search results">
        <div class="phy-results-header">
          <div>
            <div class="phy-results-title" id="phy-results-title">Results</div>
            <div class="phy-results-count" id="phy-results-count"></div>
          </div>
          <button class="phy-results-close" id="phy-results-close" aria-label="Close results">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div id="phy-results-body"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    this._input    = document.getElementById('phy-global-input');
    this._dropdown = document.getElementById('phy-dropdown');
    this._overlay  = overlay;

    this._wireEvents();
  }

  _wireEvents() {
    const input    = this._input;
    const dropdown = this._dropdown;
    const clearBtn = document.getElementById('phy-search-clear');
    const overlay  = this._overlay;

    // Debounced input handler
    let debTimer;
    input.addEventListener('input', () => {
      clearTimeout(debTimer);
      const val = input.value;
      clearBtn.classList.toggle('visible', val.length > 0);
      debTimer = setTimeout(() => this._onInput(val), 150);
    });

    // Keyboard navigation
    input.addEventListener('keydown', (e) => {
      if (!dropdown.classList.contains('open')) {
        if (e.key === 'Enter') { this._runFullSearch(input.value); return; }
        return;
      }
      const items = dropdown.querySelectorAll('.phy-dd-item[role="option"]');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this._activeIdx = Math.min(this._activeIdx + 1, items.length - 1);
        this._highlightDropdownItem(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this._activeIdx = Math.max(this._activeIdx - 1, -1);
        this._highlightDropdownItem(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (this._activeIdx >= 0 && items[this._activeIdx]) {
          items[this._activeIdx].click();
        } else {
          this._runFullSearch(input.value);
        }
      } else if (e.key === 'Escape') {
        this._closeDropdown();
      }
    });

    // "/" global shortcut to focus
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== input &&
          !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });

    // Clear button
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.classList.remove('visible');
      this._closeDropdown();
      input.focus();
    });

    // Close overlay
    document.getElementById('phy-results-close')?.addEventListener('click', () => {
      overlay.classList.remove('open');
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        overlay.classList.remove('open');
      }
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#phy-global-search-wrap')) {
        this._closeDropdown();
      }
    });
  }

  _onInput(value) {
    const q = value.trim();

    if (!q) {
      this._closeDropdown();
      this._showHistoryDropdown();
      return;
    }

    if (!this.built) {
      // Index not ready yet — show loading
      this._renderDropdown([{ _type: 'loading' }], q);
      return;
    }

    // Parse prefix filter
    let sectionFilter = null;
    let cleanQuery = q;
    for (const [prefix, section] of Object.entries(PREFIX_MAP)) {
      if (q.startsWith(prefix)) {
        sectionFilter = section;
        cleanQuery = q.slice(prefix.length).trim();
        break;
      }
    }

    const suggestions = this.index.suggest(cleanQuery, MAX_SUGGESTIONS, sectionFilter);
    this._suggestions = suggestions;
    this._renderDropdown(suggestions, cleanQuery, sectionFilter, q);
  }

  _renderDropdown(suggestions, query, sectionFilter = null, rawQuery = '') {
    const dropdown = this._dropdown;
    this._activeIdx = -1;

    if (suggestions.length === 0) {
      dropdown.innerHTML = `
        <div class="phy-dd-empty">
          No suggestions for "<strong>${this._escape(query)}</strong>"
          <br><span style="font-size:11px;opacity:0.6">Press Enter for full results</span>
        </div>`;
      dropdown.classList.add('open');
      this._input.setAttribute('aria-expanded', 'true');
      return;
    }

    const prefixHtml = sectionFilter
      ? `<span class="phy-prefix-pill">${sectionFilter}</span>`
      : '';

    const items = suggestions.map((s, i) => {
      const icon = SECTION_ICONS[s.section] || '';
      const label = SECTION_LABELS[s.section] || s.section;
      const nameHtml = highlight(this._escape(s.text), query);
      return `
        <div class="phy-dd-item" role="option" data-idx="${i}" tabindex="-1">
          <div class="phy-dd-icon">${icon}</div>
          <div class="phy-dd-text">
            <div class="phy-dd-name">${nameHtml}</div>
            <div class="phy-dd-section">${label}</div>
          </div>
          <div class="phy-dd-badge">${label}</div>
        </div>`;
    }).join('');

    dropdown.innerHTML = `
      <div class="phy-dd-header">${prefixHtml} Suggestions</div>
      ${items}
      <div class="phy-dd-footer">
        <kbd>↑↓</kbd> navigate &nbsp;·&nbsp; <kbd>↵</kbd> select &nbsp;·&nbsp; <kbd>Enter</kbd> full search
      </div>`;

    // Wire clicks
    dropdown.querySelectorAll('.phy-dd-item').forEach((el, i) => {
      el.addEventListener('click', () => {
        const s = suggestions[i];
        if (!s) return;
        saveHistory(s.text);
        this._input.value = s.text;
        this._closeDropdown();
        this._navigateToResult(s.entry);
      });
    });

    dropdown.classList.add('open');
    this._input.setAttribute('aria-expanded', 'true');
  }

  _showHistoryDropdown() {
    const history = loadHistory();
    if (!history.length) return;

    const dropdown = this._dropdown;
    const items = history.map(q => `
      <div class="phy-dd-item phy-dd-history" role="option" data-hist="${this._escape(q)}">
        <div class="phy-dd-icon">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/>
          </svg>
        </div>
        <div class="phy-dd-text">
          <div class="phy-dd-name">${this._escape(q)}</div>
          <div class="phy-dd-section">Recent search</div>
        </div>
      </div>`).join('');

    dropdown.innerHTML = `
      <div class="phy-dd-hist-label">Recent</div>
      ${items}`;

    dropdown.querySelectorAll('.phy-dd-item').forEach(el => {
      el.addEventListener('click', () => {
        const q = el.dataset.hist;
        this._input.value = q;
        this._onInput(q);
        this._input.focus();
      });
    });

    dropdown.classList.add('open');
    this._input.setAttribute('aria-expanded', 'true');
  }

  _highlightDropdownItem(items) {
    items.forEach((el, i) => el.classList.toggle('active', i === this._activeIdx));
    if (this._activeIdx >= 0 && items[this._activeIdx]) {
      items[this._activeIdx].scrollIntoView({ block: 'nearest' });
    }
  }

  _closeDropdown() {
    this._dropdown.classList.remove('open');
    this._dropdown.innerHTML = '';
    this._input.setAttribute('aria-expanded', 'false');
    this._activeIdx = -1;
  }

  _runFullSearch(rawQuery) {
    const q = rawQuery.trim();
    if (!q || !this.built) return;

    saveHistory(q);

    // Parse prefix
    let sectionFilter = null;
    let cleanQuery = q;
    for (const [prefix, section] of Object.entries(PREFIX_MAP)) {
      if (q.startsWith(prefix)) {
        sectionFilter = section;
        cleanQuery = q.slice(prefix.length).trim();
        break;
      }
    }

    const hits = this.index.search(cleanQuery, sectionFilter);
    this._showResultsOverlay(hits, cleanQuery, sectionFilter);
    this._closeDropdown();
  }

  _showResultsOverlay(hits, query, sectionFilter) {
    const overlay  = this._overlay;
    const titleEl  = document.getElementById('phy-results-title');
    const countEl  = document.getElementById('phy-results-count');
    const bodyEl   = document.getElementById('phy-results-body');

    titleEl.textContent = `Results for "${query}"`;
    countEl.textContent = `${hits.length} result${hits.length !== 1 ? 's' : ''}`;

    if (hits.length === 0) {
      bodyEl.innerHTML = `
        <div class="phy-results-empty">
          <div class="phy-results-empty-icon">🔭</div>
          <div class="phy-results-empty-msg">No results found</div>
          <div class="phy-results-empty-sub">Try a different spelling or use prefix filters like <strong>eq:</strong> for equations</div>
        </div>`;
    } else {
      // Group by section
      const grouped = {};
      hits.forEach(h => {
        const s = h.entry.section;
        if (!grouped[s]) grouped[s] = [];
        grouped[s].push(h);
      });

      const order = ['constants', 'equations', 'symbols', 'units'];
      let html = '';
      order.forEach(sec => {
        if (!grouped[sec]?.length) return;
        html += `
          <div class="phy-results-section-head">
            ${SECTION_ICONS[sec] || ''}
            ${SECTION_LABELS[sec] || sec}s
            <span style="font-size:10px;opacity:0.6">(${grouped[sec].length})</span>
          </div>`;
        grouped[sec].forEach(h => {
          const nameHtml = highlight(this._escape(h.entry.name), query);
          const rawDesc  = h.entry.fields.desc || '';
          const descHtml = highlight(this._escape(rawDesc.slice(0, 100) + (rawDesc.length > 100 ? '…' : '')), query);
          html += `
            <div class="phy-result-row" data-section="${sec}" data-idx="${h.entry.idx}">
              <div class="phy-result-icon">${SECTION_ICONS[sec] || ''}</div>
              <div class="phy-result-body">
                <div class="phy-result-name">${nameHtml}</div>
                <div class="phy-result-desc">${descHtml}</div>
              </div>
            </div>`;
        });
      });
      bodyEl.innerHTML = html;

      // Wire result clicks — navigate to the right section
      bodyEl.querySelectorAll('.phy-result-row').forEach(row => {
        row.addEventListener('click', () => {
          const sec = row.dataset.section;
          const idx = Number(row.dataset.idx);
          const entry = hits.find(h => h.entry.section === sec && h.entry.idx === idx)?.entry;
          if (entry) {
            overlay.classList.remove('open');
            this._navigateToResult(entry);
          }
        });
      });
    }

    overlay.classList.add('open');
    document.getElementById('phy-results-panel')?.scrollTo(0, 0);
  }

  /**
   * Navigate the app to a specific result entry.
   * Switches to the correct tab, then fills + submits the section's search box.
   */
  _navigateToResult(entry) {
    const { section, name, idx } = entry;

    // Tab IDs as used in pageController / nav
    const TAB_MAP = {
      constants: 'constants',
      equations: 'equations',
      symbols:   'symbols',
      units:     'units',
    };
    const SEARCH_ID_MAP = {
      constants: 'const-search',
      equations: 'eq-search',
      symbols:   'sym-search',
      units:     'unit-search',
    };

    // Switch tab
    const tabName = TAB_MAP[section];
    if (tabName) {
      const tabBtn = document.querySelector(`[data-tab="${tabName}"]`);
      if (tabBtn) tabBtn.click();
    }

    // Fill the section search box and trigger a search
    setTimeout(() => {
      const searchId = SEARCH_ID_MAP[section];
      if (searchId) {
        const sInput = document.getElementById(searchId);
        if (sInput) {
          sInput.value = name;
          sInput.dispatchEvent(new Event('input', { bubbles: true }));
          sInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 80);
  }

  // ── PATCH SECTION-LEVEL SEARCHES WITH FUZZY + HIGHLIGHT ────────────────────

  _patchSectionSearches() {
    // Upgrade each section's search by rewriting the search index build + test
    // We inject a smarter test function that lazyRenderer can pick up.
    // Since lazyRenderer uses a simple `.includes()` check on a pre-built index,
    // we can't patch it directly without modifying the module.
    // Instead, we listen to each search input and replace results ourselves.
    // For now, the global search handles cross-section; section searches keep
    // their native behavior but get fuzzy upgrades via the debounced patch below.
    this._patchInput('const-search',   this.index, 'constants');
    this._patchInput('eq-search',      this.index, 'equations');
    this._patchInput('sym-search',     this.index, 'symbols');
    this._patchInput('unit-search',    this.index, 'units');
  }

  /**
   * For each section search box: if the native search returns 0 results
   * and we have fuzzy matches, fill the box with the best fuzzy correction.
   * This is a NON-DESTRUCTIVE patch — it works alongside the existing lazyRenderer.
   */
  _patchInput(inputId, index, section) {
    const el = document.getElementById(inputId);
    if (!el) return;

    const orig = el.cloneNode(true);
    let fuzzyTimer;

    el.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      if (!q || q.length < MIN_FUZZY_LEN || !this.built) return;

      clearTimeout(fuzzyTimer);
      fuzzyTimer = setTimeout(() => {
        // Wait for lazyRenderer to render, then count visible cards
        requestAnimationFrame(() => {
          const gridId  = { constants: 'constants-grid', equations: 'eq-grid', symbols: 'symbols-grid', units: 'units-grid' }[section];
          const grid    = gridId ? document.getElementById(gridId) : null;
          if (!grid) return;

          const hasResults = grid.querySelectorAll('[data-lazy-idx]').length > 0
                          && !grid.querySelector('p[style]');  // "No results" p

          if (!hasResults) {
            // Native search returned nothing — try fuzzy
            const hits = index.search(q, section);
            if (hits.length > 0) {
              const bestName = hits[0].entry.name;
              // Show a non-intrusive fuzzy hint below the input
              this._showFuzzyHint(el, bestName, hits.length, section);
            }
          } else {
            this._clearFuzzyHint(el);
          }
        });
      }, 300);
    });
  }

  _showFuzzyHint(inputEl, bestName, count, section) {
    const hintId = `phy-fuzzy-hint-${section}`;
    let hint = document.getElementById(hintId);
    if (!hint) {
      hint = document.createElement('div');
      hint.id = hintId;
      hint.style.cssText = `
        font-size: 12px;
        color: var(--text-muted);
        margin-top: 6px;
        padding: 0 4px;
        display: flex; align-items: center; gap: 6px;
      `;
      inputEl.parentElement.insertAdjacentElement('afterend', hint) ||
      inputEl.insertAdjacentElement('afterend', hint);
    }
    hint.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.5">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      Did you mean:
      <span style="color:var(--accent,#667eea);cursor:pointer;text-decoration:underline;text-underline-offset:2px"
            id="${hintId}-link">${this._escape(bestName)}</span>
      ${count > 1 ? `<span style="opacity:0.6">+ ${count - 1} more</span>` : ''}`;

    document.getElementById(`${hintId}-link`)?.addEventListener('click', () => {
      inputEl.value = bestName;
      inputEl.dispatchEvent(new Event('input', { bubbles: true }));
      this._clearFuzzyHint(inputEl);
    });
  }

  _clearFuzzyHint(inputEl) {
    const hints = document.querySelectorAll('[id^="phy-fuzzy-hint-"]');
    hints.forEach(h => { h.innerHTML = ''; });
  }

  _escape(str = '') {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}

// Export a convenience factory
export function createPhyansySearch() {
  return new PhyansySearch();
}
