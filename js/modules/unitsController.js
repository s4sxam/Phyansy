// =============================================================================
// unitsController.js — Units & Measurement Section
// =============================================================================

import { SI_UNITS, DERIVED_UNITS, NON_SI_UNITS, PREFIXES } from '../data/unitsData.js';
import { getCurrentLang, onLangChange, translateBatch } from './langController.js';

// ── COPY HELPER ───────────────────────────────────────────────────────────────
function copyText(text) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const el = document.createElement('textarea');
  el.value = text;
  el.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function showCopyFeedback(btn) {
  btn.classList.add('copied');
  btn.textContent = '✓';
  setTimeout(() => {
    btn.classList.remove('copied');
    btn.textContent = btn.dataset.sym || btn.textContent;
  }, 1200);
}

// ── TABLE BUILDER ─────────────────────────────────────────────────────────────
function buildTable(tableId, rows, cols) {
  const table = document.getElementById(tableId);
  if (!table) return;

  table.innerHTML = `
    <thead>
      <tr>${cols.map((c) => `<th>${c.label}</th>`).join('')}</tr>
    </thead>
    <tbody>
      ${rows.map((row, i) => `
        <tr class="stagger-item" style="animation-delay:${i * 30}ms"
            data-row-idx="${i}" data-table-id="${tableId}">
          ${cols.map((c) => {
            const val = row[c.key] ?? '';
            if (c.key === 'sym') {
              return `<td>
                <button
                  class="unit-sym-btn"
                  data-sym="${val}"
                  title="Copy ${val}"
                  aria-label="Copy symbol ${val}"
                >${val}</button>
              </td>`;
            }
            if (c.key === 'dim') {
              return `<td data-col="${c.key}"><span class="unit-dim">${val}</span></td>`;
            }
            return `<td data-col="${c.key}">${val}</td>`;
          }).join('')}
        </tr>
      `).join('')}
    </tbody>
  `;

  // Wire copy buttons
  table.querySelectorAll('.unit-sym-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (window._quantraIsDragging) return;
      copyText(btn.dataset.sym);
      showCopyFeedback(btn);
    });
  });
}

// ── PREFIX SCALE ──────────────────────────────────────────────────────────────
let _allPrefixes = [];

function renderPrefixes(list) {
  const el = document.getElementById('prefix-scale');
  if (!el) return;

  if (list.length === 0) {
    el.innerHTML = `<div class="units-no-result">No prefixes match.</div>`;
    return;
  }

  el.innerHTML = list.map((p, i) => `
    <div
      class="glass-card prefix-card stagger-item"
      style="animation-delay:${i * 20}ms"
      role="listitem"
      aria-label="${p.name} (${p.sym}): ${p.exp}"
    >
      <div class="prefix-exp">${p.exp}</div>
      <div class="prefix-info">
        <div class="prefix-name">
          ${p.name}
          <span class="prefix-sym">(${p.sym})</span>
        </div>
        <div class="prefix-example">${p.example}</div>
      </div>
    </div>
  `).join('');
}

function buildPrefixSearch() {
  const input = document.getElementById('prefix-search');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      renderPrefixes(_allPrefixes);
      return;
    }
    const filtered = _allPrefixes.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.sym.toLowerCase().includes(q) ||
        p.exp.includes(q)
    );
    renderPrefixes(filtered);
  });
}

// ── UNIT SEARCH (tables) ─────────────────────────────────────────────────────
function buildUnitSearch() {
  const input = document.getElementById('unit-search');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const rows = document.querySelectorAll('#si-table tbody tr, #derived-table tbody tr, #non-si-table tbody tr');
    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      row.style.display = !q || text.includes(q) ? '' : 'none';
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
// ── TABLE TRANSLATION ────────────────────────────────────────────────────────
const _tableDataMap = {}; // tableId → data array
const _tableCols    = {}; // tableId → translatable column keys

async function _translateTable(tableId, lang) {
  const table    = document.getElementById(tableId);
  if (!table) return;
  const rows     = [...table.querySelectorAll('tbody tr[data-row-idx]')];
  if (rows.length === 0) return;
  const data     = _tableDataMap[tableId] || [];
  const transCols = _tableCols[tableId]    || [];

  if (lang === 'en') {
    rows.forEach(tr => {
      const idx = Number(tr.dataset.rowIdx);
      const row = data[idx];
      if (!row) return;
      const tds = tr.querySelectorAll('td[data-col]');
      tds.forEach(td => {
        const col = td.dataset.col;
        if (transCols.includes(col) && row[col]) td.textContent = row[col];
      });
    });
    return;
  }

  const batchItems = rows.map(tr => {
    const idx = Number(tr.dataset.rowIdx);
    const row = data[idx];
    if (!row) return null;
    const fields = {};
    transCols.forEach(col => { if (row[col]) fields[col] = row[col]; });
    return { id: `${tableId}::${idx}`, fields };
  }).filter(Boolean);

  rows.forEach(tr => tr.classList.add('translating'));
  try {
    const resultMap = await translateBatch(batchItems, lang);
    rows.forEach(tr => {
      const result = resultMap.get(`${tableId}::${tr.dataset.rowIdx}`);
      if (!result) return;
      const tds = tr.querySelectorAll('td[data-col]');
      tds.forEach(td => {
        const col = td.dataset.col;
        if (result[col]) td.textContent = result[col];
      });
    });
  } finally {
    rows.forEach(tr => tr.classList.remove('translating'));
  }
}

async function _translateAllTables(lang) {
  await Promise.all([
    _translateTable('si-table',      lang),
    _translateTable('derived-table', lang),
    _translateTable('non-si-table',  lang),
  ]);
}

export function initUnits() {
  buildTable('si-table', SI_UNITS, [
    { label: 'Quantity',   key: 'qty' },
    { label: 'Symbol',     key: 'sym' },
    { label: 'Name',       key: 'name' },
    { label: 'Dimension',  key: 'dim' },
    { label: 'Definition', key: 'def' },
    { label: 'Equations',  key: 'eq'  },
    { label: 'Used In',    key: 'use' },
  ]);

  buildTable('derived-table', DERIVED_UNITS, [
    { label: 'Quantity',      key: 'qty' },
    { label: 'Symbol',        key: 'sym' },
    { label: 'Name',          key: 'name' },
    { label: 'Dimension',     key: 'dim' },
    { label: 'In Base Units', key: 'eq'  },
    { label: 'Definition',    key: 'def' },
    { label: 'Used In',       key: 'use' },
  ]);

  buildTable('non-si-table', NON_SI_UNITS, [
    { label: 'Quantity',   key: 'qty' },
    { label: 'Symbol',     key: 'sym' },
    { label: 'Name',       key: 'name' },
    { label: 'Equivalent', key: 'eq'  },
    { label: 'Definition', key: 'def' },
    { label: 'Used In',    key: 'use' },
  ]);

  _allPrefixes = PREFIXES;
  renderPrefixes(_allPrefixes);
  buildPrefixSearch();
  buildUnitSearch();

  // Register data + translatable columns for each table
  const _transCols = ['qty', 'name', 'def', 'use'];
  _tableDataMap['si-table']      = SI_UNITS;
  _tableDataMap['derived-table'] = DERIVED_UNITS;
  _tableDataMap['non-si-table']  = NON_SI_UNITS;
  _tableCols['si-table']         = _transCols;
  _tableCols['derived-table']    = _transCols;
  _tableCols['non-si-table']     = _transCols;

  // Translate on initial load if lang != en
  const _initLang = getCurrentLang();
  if (_initLang !== 'en') _translateAllTables(_initLang);

  // Subscribe to future language changes
  onLangChange(lang => _translateAllTables(lang));
}
