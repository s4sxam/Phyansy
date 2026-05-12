// =============================================================================
// constantsController.js — uses lazyRenderer engine
// =============================================================================

import { CONSTANTS } from '../data/constantsData.js';
import { createLazySection } from './lazyRenderer.js';
import { showToast } from './toastController.js';

const ICONS = {
  whatItSays: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  example:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  deep:       `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  matters:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
};

export function initConstants() {
  createLazySection({
    data:         CONSTANTS,
    gridId:       'constants-grid',
    searchId:     'const-search',
    filtersId:    'const-filters',
    filterKey:    'category',
    searchFields: ['name', 'symbol', 'category', 'description'],
    ignoreSelector: '.const-copy-btn',

    renderCard: (c, globalIdx, i) => `
      <div class="glass-card const-card stagger-item"
           style="animation-delay:${Math.min(i * 30, 400)}ms"
           data-lazy-idx="${globalIdx}"
           role="button" aria-expanded="false" tabindex="0">

        <div class="const-card-top">
          <div class="const-symbol">${c.symbol}</div>
          <span class="const-badge" data-cat="${c.category}">${c.category}</span>
          <svg class="const-expand-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>

        <div class="const-name">${c.name}</div>
        <div class="const-value">${c.value} <span style="color:var(--text-muted)">${c.unit}</span></div>
        <div class="const-desc">${c.description}</div>

        <button class="const-copy-btn" aria-label="Copy ${c.name}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copy exact
        </button>

        <div class="const-detail"></div>
      </div>`,

    renderDetail: (c) => {
      const rows = [
        c.exact        ? `<div class="detail-row"><div class="detail-label">Exact Value</div><div class="detail-val" style="font-family:'JetBrains Mono',monospace;font-size:12.5px">${c.exact}</div></div>` : '',
        c.discoveredBy ? `<div class="detail-row"><div class="detail-label">Discovered By</div><div class="detail-val">${c.discoveredBy}</div></div>` : '',
        c.formula      ? `<div class="detail-row"><div class="detail-label">Key Formula</div><div class="detail-val" style="font-family:'JetBrains Mono',monospace">${c.formula}</div></div>` : '',
      ].join('');

      const blocks = [
        c.whatItSays    ? { label: 'What It Says',   icon: ICONS.whatItSays, text: c.whatItSays }    : null,
        c.simpleExample ? { label: 'Simple Example', icon: ICONS.example,    text: c.simpleExample } : null,
        c.deepMeaning   ? { label: 'Deep Meaning',   icon: ICONS.deep,       text: c.deepMeaning }   : null,
        c.whyItMatters  ? { label: 'Why It Matters', icon: ICONS.matters,    text: c.whyItMatters }  : null,
      ].filter(Boolean).map(b => `
        <div class="detail-block">
          <div class="detail-block-label">${b.icon}${b.label}</div>
          <div class="detail-block-text">${b.text}</div>
        </div>
      `).join('');

      return rows + blocks;
    },

    onExpand: (card) => {
      const copyBtn = card.querySelector('.const-copy-btn');
      if (!copyBtn || copyBtn.dataset.wired) return;
      copyBtn.dataset.wired = 'true';
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx      = Number(card.dataset.lazyIdx);
        const exactVal = CONSTANTS[idx].exact || CONSTANTS[idx].value;
        const stripped = exactVal.replace(/<[^>]+>/g, '').replace(' (exact)', '');
        navigator.clipboard.writeText(stripped).catch(() => {});
        showToast('Copied exact value!');
      });
    },
  });
}
