// =============================================================================
// unitsController.js — Units & Measurement Section
// =============================================================================

import { SI_UNITS, DERIVED_UNITS, NON_SI_UNITS, PREFIXES } from '../data/unitsData.js';
import { getCurrentLang, onLangChange } from './langController.js';

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

// ── INIT ─────────────────────────────────────────────────────────────────────

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

  // Language changes: units tables always show English content from data files.
  // Translated content will come from i18n locale files when provided.
  onLangChange(() => {});
}
