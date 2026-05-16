// =============================================================================
// constantsController.js
// Desktop (>768px) → modal | Mobile (≤768px) → modal (bottom-sheet)
//
// FIXES APPLIED (May 2026):
//   #20 — Mobile now opens bottom-sheet modal (ported from equations):
//           • iOS scroll lock via position:fixed body trick (was overflow:hidden)
//           • Drag-to-dismiss with fullscreen snap gesture
//           • In-card expand fully suppressed on mobile (return true → lazyRenderer)
//           • Sticky close button and safe-area padding inherited from modal.css
// =============================================================================

import { CONSTANTS } from '../data/constantsData.js';
import { createLazySection } from './lazyRenderer.js';
import { showToast } from './toastController.js';
import {
  getCurrentLang, onLangChange,
  translateContent, translateBatch, TRANSLATABLE_FIELDS, t,
} from './langController.js';

const ICONS = {
  whatItSays: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  example:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  deep:       `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  matters:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
};

const DESKTOP_BREAKPOINT = 768;
const isDesktop = () => window.innerWidth > DESKTOP_BREAKPOINT;

// ── SHARED DETAIL BUILDER ─────────────────────────────────────────────────────

function buildDetailHTML(c) {
  const rows = [
    c.exact        ? `<div class="detail-row"><div class="detail-label">Exact Value</div><div class="detail-val" style="font-family:'JetBrains Mono',monospace;font-size:12.5px">${c.exact}</div></div>` : '',
    c.discoveredBy ? `<div class="detail-row"><div class="detail-label">Discovered By</div><div class="detail-val">${c.discoveredBy}</div></div>` : '',
    c.formula      ? `<div class="detail-row"><div class="detail-label">Key Formula</div><div class="detail-val" style="font-family:'JetBrains Mono',monospace">${c.formula}</div></div>` : '',
  ].filter(Boolean).join('');

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

  const divider = (rows && blocks) ? '<div class="const-modal-divider"></div>' : '';
  return rows + divider + blocks;
}

// ── MODAL (desktop + mobile bottom-sheet) ────────────────────────────────────

function initModal() {
  const overlay  = document.getElementById('const-modal');
  const closeBtn = document.getElementById('const-modal-close');
  const symbolEl = document.getElementById('const-modal-symbol');
  const badgeEl  = document.getElementById('const-modal-badge');
  const nameEl   = document.getElementById('const-modal-title');
  const valueEl  = document.getElementById('const-modal-value');
  const bodyEl   = document.getElementById('const-modal-body');
  const copyBtn  = document.getElementById('const-modal-copy');

  if (!overlay) return null;

  const box = overlay.querySelector('.phys-modal-box');

  // ── FIX #20 — iOS Safari scroll lock (ported from equationsController) ──────
  // `body { overflow: hidden }` does NOT prevent background scroll on iOS Safari.
  // The correct fix: save scrollY, lock body with position:fixed, restore on close.
  let _savedScrollY = 0;

  function lockBodyScroll() {
    _savedScrollY = window.scrollY;
    document.body.style.position  = 'fixed';
    document.body.style.top       = `-${_savedScrollY}px`;
    document.body.style.width     = '100%';
    document.body.style.overflowY = 'scroll'; // prevents layout shift from scrollbar disappearing
  }

  function unlockBodyScroll() {
    document.body.style.position  = '';
    document.body.style.top       = '';
    document.body.style.width     = '';
    document.body.style.overflowY = '';
    window.scrollTo({ top: _savedScrollY, behavior: 'instant' });
  }

  // ── FIX #20 — Drag-to-dismiss (ported from equationsController) ─────────────
  let dragStartY   = 0;
  let dragDeltaY   = 0;
  let isDragging   = false;
  let isFullscreen = false;
  const DISMISS_THRESHOLD    = 120; // px downward → close
  const FULLSCREEN_THRESHOLD = 80;  // px upward  → fullscreen snap

  function setFullscreen(on) {
    isFullscreen = on;
    box.style.transition = 'max-height 0.3s cubic-bezier(0.32,0.72,0,1), border-radius 0.3s';
    if (on) {
      box.style.maxHeight    = '100vh';
      box.style.borderRadius = '0';
    } else {
      box.style.maxHeight    = '92vh';
      box.style.borderRadius = '20px 20px 0 0';
    }
    setTimeout(() => { box.style.transition = ''; }, 320);
  }

  function onDragStart(e) {
    const touch  = e.touches ? e.touches[0] : e;
    const boxTop = box.getBoundingClientRect().top;
    if (touch.clientY - boxTop > 64) return; // only the top 64px drag zone
    if (box.scrollTop > 0) return;            // don't steal scroll from content
    isDragging = true;
    dragStartY = touch.clientY;
    dragDeltaY = 0;
    box.style.transition = 'none';
  }

  function onDragMove(e) {
    if (!isDragging) return;
    const touch = e.touches ? e.touches[0] : e;
    dragDeltaY = touch.clientY - dragStartY;
    e.preventDefault();

    if (dragDeltaY > 0) {
      if (isFullscreen) return;
      const progress = Math.min(dragDeltaY / DISMISS_THRESHOLD, 1);
      box.style.transform = `translateY(${dragDeltaY}px)`;
      box.style.opacity   = String(1 - progress * 0.4);
    } else {
      // Upward drag — rubber-band resistance
      const resistance = dragDeltaY * 0.25;
      box.style.transform = `translateY(${resistance}px)`;
      box.style.opacity   = '1';
    }
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    box.style.transition = '';

    if (dragDeltaY >= DISMISS_THRESHOLD && !isFullscreen) {
      // Fling down → close
      box.style.transform = 'translateY(100%)';
      box.style.opacity   = '0';
      setTimeout(closeModal, 220);
    } else if (dragDeltaY <= -FULLSCREEN_THRESHOLD && !isFullscreen) {
      // Fling up → fullscreen snap
      box.style.transform = '';
      box.style.opacity   = '';
      setFullscreen(true);
    } else if (dragDeltaY >= FULLSCREEN_THRESHOLD && isFullscreen) {
      // Fling down from fullscreen → restore sheet
      box.style.transform = '';
      box.style.opacity   = '';
      setFullscreen(false);
    } else {
      // Incomplete drag → snap back
      box.style.transform = '';
      box.style.opacity   = '';
    }
  }

  if (box) {
    box.addEventListener('touchstart', onDragStart, { passive: true });
    box.addEventListener('touchmove',  onDragMove,  { passive: false });
    box.addEventListener('touchend',   onDragEnd);
  }

  // ── OPEN / CLOSE ─────────────────────────────────────────────────────────────

  function _renderConstBody(c) {
    bodyEl.innerHTML = buildDetailHTML(c);
    if (window.renderMathInElement) {
      renderMathInElement(bodyEl, {
        delimiters: [
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false,
      });
    }
  }

  async function openModal(c) {
    symbolEl.textContent = c.symbol;
    nameEl.textContent   = c.name;
    badgeEl.textContent  = c.category;
    badgeEl.dataset.cat  = c.category;
    valueEl.innerHTML    = `${c.value} <span style="color:var(--text-muted)">${c.unit}</span>`;

    // Render English immediately — never blank
    _renderConstBody(c);

    copyBtn.onclick = () => {
      const exactVal = c.exact || c.value;
      const stripped = exactVal.replace(/<[^>]+>/g, '').replace(' (exact)', '');
      navigator.clipboard.writeText(stripped).catch(() => {});
      showToast(t('toast_copied'));
    };

    overlay.classList.add('show');
    lockBodyScroll(); // FIX #20

    isFullscreen = false;
    box.style.transform    = '';
    box.style.opacity      = '';
    box.style.maxHeight    = '';
    box.style.borderRadius = '';
    box.scrollTop = 0;
    closeBtn.focus();

    // ── AI Translation (non-English only) ────────────────────────────────────
    const lang = getCurrentLang();
    if (lang !== 'en') {
      bodyEl.classList.add('translating');
      try {
        const constFields = ['whatItSays', 'simpleExample', 'deepMeaning', 'whyItMatters'];
        const translated  = await translateContent(c, constFields, lang);
        _renderConstBody({ ...c, ...translated });

        const badge = document.createElement('div');
        badge.className = 'lang-translated-badge';
        badge.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><span>${t('lang_ai_powered')}</span>`;
        bodyEl.appendChild(badge);
      } catch {
        const errMsg = document.createElement('div');
        errMsg.className = 'lang-trans-error';
        errMsg.textContent = t('lang_translation_fail');
        bodyEl.appendChild(errMsg);
      } finally {
        bodyEl.classList.remove('translating');
      }
    }
  }

  function closeModal() {
    overlay.classList.remove('show');
    unlockBodyScroll(); // FIX #20
    if (box) {
      box.style.transform = '';
      box.style.opacity   = '';
    }
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('show')) closeModal();
  });

  return { openModal };
}

// ── MAIN INIT ─────────────────────────────────────────────────────────────────

export function initConstants() {
  const modal = initModal();

  // ── CARD TRANSLATION ON LANGUAGE CHANGE ────────────────────────────────────
  async function _translateVisibleCards(lang) {
    const grid = document.getElementById('constants-grid');
    if (!grid) return;
    const cards = [...grid.querySelectorAll('[data-lazy-idx]')];
    if (cards.length === 0) return;

    if (lang === 'en') {
      cards.forEach(card => {
        const idx = Number(card.dataset.lazyIdx);
        const c   = CONSTANTS[idx];
        if (!c) return;
        const nameEl = card.querySelector('.const-name');
        const descEl = card.querySelector('.const-desc');
        if (nameEl) nameEl.textContent = c.name;
        if (descEl) descEl.textContent = c.description;
      });
      return;
    }

    const batchItems = cards.map(card => {
      const idx = Number(card.dataset.lazyIdx);
      const c   = CONSTANTS[idx];
      if (!c) return null;
      return { id: String(idx), fields: { name: c.name, desc: c.description } };
    }).filter(Boolean);

    cards.forEach(c => c.classList.add('translating'));
    try {
      const resultMap = await translateBatch(batchItems, lang);
      cards.forEach(card => {
        const result = resultMap.get(String(card.dataset.lazyIdx));
        if (!result) return;
        const nameEl = card.querySelector('.const-name');
        const descEl = card.querySelector('.const-desc');
        if (nameEl && result.name) nameEl.textContent = result.name;
        if (descEl && result.desc) descEl.textContent = result.desc;
      });
    } finally {
      cards.forEach(c => c.classList.remove('translating'));
    }
  }

  onLangChange(lang => { _translateVisibleCards(lang); });

  createLazySection({
    data:           CONSTANTS,
    gridId:         'constants-grid',
    searchId:       'const-search',
    filtersId:      'const-filters',
    filterKey:      'category',
    searchFields:   ['name', 'symbol', 'category', 'description'],
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

    renderDetail: (c) => buildDetailHTML(c),

    onExpand: (card) => {
      const idx = Number(card.dataset.lazyIdx);
      const c   = CONSTANTS[idx];

      // Wire copy button once (works in both modes)
      const copyBtn = card.querySelector('.const-copy-btn');
      if (copyBtn && !copyBtn.dataset.wired) {
        copyBtn.dataset.wired = 'true';
        copyBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const exactVal = c.exact || c.value;
          const stripped = exactVal.replace(/<[^>]+>/g, '').replace(' (exact)', '');
          navigator.clipboard.writeText(stripped).catch(() => {});
          showToast('Copied exact value!');
        });
      }

      // FIX #20 — All screen sizes → modal (bottom-sheet on mobile, centred on desktop).
      // On desktop: card is collapsed via requestAnimationFrame so it doesn't
      //   linger in expanded state behind the modal (existing behaviour preserved).
      // On mobile: returning true signals lazyRenderer to skip its own in-card
      //   expand logic entirely — the same `return true` contract used by
      //   equationsController (see lazyRenderer.js line ~125).
      if (modal) {
        modal.openModal(c);
        if (isDesktop()) {
          requestAnimationFrame(() => {
            card.classList.remove('expanded');
            card.setAttribute('aria-expanded', 'false');
            card.dataset.lazyLoaded = '';
          });
        }
        return !isDesktop(); // true on mobile → lazyRenderer skips in-card expand
      }
    },
  });

  const _cGrid = document.getElementById('constants-grid');
  if (_cGrid) {
    const _initLang = getCurrentLang();
    if (_initLang !== 'en') _translateVisibleCards(_initLang);

    let _rerenderTimer = null;
    new MutationObserver(() => {
      const l = getCurrentLang();
      if (l === 'en') return;
      clearTimeout(_rerenderTimer);
      _rerenderTimer = setTimeout(() => _translateVisibleCards(l), 100);
    }).observe(_cGrid, { childList: true });
  }
}
