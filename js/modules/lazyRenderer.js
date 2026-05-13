// =============================================================================
// lazyRenderer.js — Universal Lazy Render Engine for Phyansy
// =============================================================================
// HOW IT WORKS:
//   Every card gets rendered with ONLY its summary fields on page load.
//   The "detail" section is left empty.
//   When a card is clicked, detail HTML is built ONCE and cached forever.
//   Search runs only on a pre-built lightweight index, never on long prose.
//   Debounce prevents re-renders on every keystroke.
//
// HOW TO USE (for any section):
//
//   import { createLazySection } from './lazyRenderer.js';
//
//   createLazySection({
//     data:          CONSTANTS,           // your data array
//     gridId:        'constants-grid',    // container element id
//     searchId:      'const-search',      // search input id (optional)
//     filtersId:     'const-filters',     // filter bar id (optional)
//     filterKey:     'category',          // which field to filter by
//
//     // Fields searched on EVERY keystroke — keep these SHORT fields only
//     searchFields:  ['name', 'symbol', 'category', 'description'],
//
//     // Renders the visible card shell — NO long prose here
//     renderCard: (item, index) => `
//       <div class="glass-card const-card" data-lazy-idx="${index}">
//         <div class="const-symbol">${item.symbol}</div>
//         <div class="const-name">${item.name}</div>
//         <div class="const-detail"></div>   <!-- always leave this empty -->
//       </div>
//     `,
//
//     // Renders detail content — only called when a card is actually opened
//     renderDetail: (item) => `
//       <p>${item.whatItSays}</p>
//       <p>${item.deepMeaning}</p>
//     `,
//
//     // CSS selector for the clickable toggle target inside a card
//     // Defaults to the card itself if omitted
//     toggleSelector: null,
//
//     // CSS selector for elements that should NOT trigger expand (e.g. copy buttons)
//     ignoreSelector: '.const-copy-btn',
//
//     // Callback fired after a card expands, receives (cardEl, item)
//     onExpand: null,
//   });
// =============================================================================

const DEBOUNCE_MS = 200;

// ── INTERNAL HELPERS ─────────────────────────────────────────────────────────

function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => requestAnimationFrame(() => fn(...args)), ms);
  };
}

function stripTags(str = '') {
  return str.replace(/<[^>]+>/g, '');
}

function buildSearchIndex(data, fields) {
  return data.map(item =>
    fields.map(f => stripTags(String(item[f] ?? ''))).join(' ').toLowerCase()
  );
}

// ── CORE ENGINE ──────────────────────────────────────────────────────────────

export function createLazySection(config) {
  const {
    data,
    gridId,
    searchId       = null,
    filtersId      = null,
    filterKey      = null,
    searchFields   = [],
    renderCard,
    renderDetail,
    toggleSelector = null,
    ignoreSelector = null,
    onExpand       = null,
  } = config;

  if (!data || !gridId || !renderCard || !renderDetail) {
    console.error('[lazyRenderer] Missing required config fields.');
    return;
  }

  // Build search index ONCE — only from short summary fields
  const searchIndex = buildSearchIndex(data, searchFields);

  let activeFilter = 'All';
  let searchQuery  = '';

  // ── RENDER ──────────────────────────────────────────────────────────────────
  function render() {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const q = searchQuery.toLowerCase().trim();

    const indices = [];
    data.forEach((item, i) => {
      const matchFilter = !filterKey || activeFilter === 'All' || item[filterKey] === activeFilter;
      const matchSearch = !q || searchIndex[i].includes(q);
      if (matchFilter && matchSearch) indices.push(i);
    });

    if (indices.length === 0) {
      grid.innerHTML = '<p style="color:var(--text-muted);padding:20px 4px">No results found.</p>';
      return;
    }

    // Render ONLY the summary shell — detail div is empty
    grid.innerHTML = indices.map((globalIdx, i) => {
      const html = renderCard(data[globalIdx], globalIdx, i);
      // Inject data-lazy-idx if renderCard didn't include it
      return html.includes('data-lazy-idx')
        ? html
        : html.replace(/^(<\w+)/, `$1 data-lazy-idx="${globalIdx}"`);
    }).join('');

    // FIX 1 — Batch-render KaTeX on all visible card faces at once
    if (window.renderMathInElement) {
      renderMathInElement(grid, {
        delimiters: [
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false,
      });
    }

    // Wire expand + lazy detail injection
    grid.querySelectorAll('[data-lazy-idx]').forEach(card => {
      const toggle = () => {
        const willExpand = !card.classList.contains('expanded');

        // ── CLOSE OTHER EXPANDED CARDS (with scroll-anchor fix) ─────────────
        if (willExpand) {
          // 1. Snapshot card's position BEFORE any layout change
          const cardRectBefore = card.getBoundingClientRect();

          // 2. Collapse all other open cards
          grid.querySelectorAll('[data-lazy-idx].expanded').forEach(other => {
            if (other !== card) {
              other.classList.remove('expanded');
              other.setAttribute('aria-expanded', 'false');
            }
          });

          // 3. Compensate for layout shift: keep clicked card at same visual position
          const cardRectAfter = card.getBoundingClientRect();
          const shift = cardRectAfter.top - cardRectBefore.top;
          if (shift !== 0) {
            window.scrollBy({ top: shift, behavior: 'instant' });
          }
        }

        // ── LAZY INJECTION: runs exactly once per card ──────────────────────
        if (willExpand && !card.dataset.lazyLoaded) {
          const idx      = Number(card.dataset.lazyIdx);
          const detailEl = card.querySelector('.const-detail, .eq-detail, .lazy-detail');
          if (detailEl) {
            detailEl.innerHTML = renderDetail(data[idx], idx);
          }
          card.dataset.lazyLoaded = 'true';
          if (onExpand) onExpand(card, data[idx]);
        }

        card.classList.toggle('expanded', willExpand);
        card.setAttribute('aria-expanded', String(willExpand));
      };

      const target = toggleSelector ? card.querySelector(toggleSelector) : card;
      if (!target) return;

      target.addEventListener('click', e => {
        if (ignoreSelector && e.target.closest(ignoreSelector)) return;
        toggle();
      });

      target.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (ignoreSelector && e.target.closest(ignoreSelector)) return;
          toggle();
        }
      });
    });
  }

  const debouncedRender = debounce(render, DEBOUNCE_MS);

  // ── FILTER BAR ───────────────────────────────────────────────────────────────
  if (filtersId && filterKey) {
    const filtersEl = document.getElementById(filtersId);
    if (filtersEl) {
      const categories = ['All', ...new Set(data.map(item => item[filterKey]).filter(Boolean))];
      filtersEl.innerHTML = categories.map(cat =>
        `<button class="filter-btn${cat === 'All' ? ' active' : ''}" data-cat="${cat}">${cat}</button>`
      ).join('');

      filtersEl.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.cat;
        render(); // filter clicks render immediately, no debounce needed
      });
    }
  }

  // ── SEARCH INPUT ─────────────────────────────────────────────────────────────
  if (searchId) {
    const searchEl = document.getElementById(searchId);
    if (searchEl) {
      searchEl.addEventListener('input', e => {
        searchQuery = e.target.value;
        debouncedRender();
      });
    }
  }

  // Initial render
  render();

  // Return render fn so caller can trigger a re-render if needed
  return { render };
}


// =============================================================================
// createLazyTabSection — for branched/tabbed sections like Equations
// =============================================================================
// HOW TO USE:
//
//   import { createLazyTabSection } from './lazyRenderer.js';
//
//   createLazyTabSection({
//     data:        EQUATIONS,           // { BranchName: [...items] }
//     tabsId:      'eq-branch-tabs',    // tab bar element id
//     gridId:      'eq-grid',           // grid container id
//     tabBtnClass: 'eq-branch-btn',     // CSS class for tab buttons
//
//     renderCard:   (item, branchName, idx) => `...`,
//     renderDetail: (item) => `...`,
//
//     ignoreSelector: null,
//   });
// =============================================================================

export function createLazyTabSection(config) {
  const {
    data,
    tabsId,
    gridId,
    tabBtnClass    = 'tab-btn',
    renderCard,
    renderDetail,
    ignoreSelector = null,
    onExpand       = null,
    filtersId      = null,
    filterKey      = null,
    searchId       = null,
    searchFields   = ['name', 'formula', 'desc'],
  } = config;

  if (!data || !tabsId || !gridId || !renderCard || !renderDetail) {
    console.error('[lazyRenderer] Missing required config fields for tab section.');
    return;
  }

  const branches    = Object.keys(data);
  let activeBranch  = branches[0];
  let activeFilter  = 'All';
  let searchQuery   = '';

  // Build per-branch search indices once — includes tags array flattened in
  const searchIndices = {};
  branches.forEach(branch => {
    searchIndices[branch] = (data[branch] || []).map(item => {
      const fieldText = searchFields
        .map(f => stripTags(String(item[f] ?? '')))
        .join(' ');
      const tagsText = Array.isArray(item.tags) ? item.tags.join(' ') : '';
      return (fieldText + ' ' + tagsText).toLowerCase();
    });
  });

  function render(branch) {
    const grid  = document.getElementById(gridId);
    if (!grid) return;

    const branchItems = data[branch] || [];
    const index       = searchIndices[branch] || [];
    const q           = searchQuery.toLowerCase().trim();

    // Apply difficulty filter and search query together
    const items = branchItems.filter((item, i) => {
      const matchFilter = !filterKey || activeFilter === 'All' || item[filterKey] === activeFilter;
      const matchSearch = !q || (index[i] && index[i].includes(q));
      return matchFilter && matchSearch;
    });

    if (items.length === 0) {
      const msg = q
        ? `No results for "<strong>${q}</strong>" in this branch.`
        : 'No equations at this level in this branch.';
      grid.innerHTML = `<p style="color:var(--text-muted);padding:20px 4px">${msg}</p>`;
      return;
    }

    grid.innerHTML = items.map((item, i) => {
      const html = renderCard(item, branch, i);
      return html.includes('data-lazy-idx')
        ? html
        : html.replace(/^(<\w+)/, `$1 data-lazy-branch="${branch}" data-lazy-idx="${i}"`);
    }).join('');

    // FIX 1 — Batch-render KaTeX on all visible card faces at once
    if (window.renderMathInElement) {
      renderMathInElement(grid, {
        delimiters: [
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false,
      });
    }

    grid.querySelectorAll('[data-lazy-idx]').forEach(card => {
      const toggle = () => {
        const willExpand = !card.classList.contains('expanded');

        // ── CLOSE OTHER EXPANDED CARDS (with scroll-anchor fix) ─────────────
        if (willExpand) {
          // 1. Snapshot card's position BEFORE any layout change
          const cardRectBefore = card.getBoundingClientRect();

          // 2. Collapse all other open cards
          grid.querySelectorAll('[data-lazy-idx].expanded').forEach(other => {
            if (other !== card) {
              other.classList.remove('expanded');
              other.setAttribute('aria-expanded', 'false');
              const lbl = other.querySelector('.eq-expand-label');
              if (lbl) lbl.textContent = 'Details';
              const chv = other.querySelector('.eq-chevron');
              if (chv) chv.style.transform = '';
            }
          });

          // 3. Compensate for layout shift: keep clicked card at same visual position
          const cardRectAfter = card.getBoundingClientRect();
          const shift = cardRectAfter.top - cardRectBefore.top;
          if (shift !== 0) {
            window.scrollBy({ top: shift, behavior: 'instant' });
          }
        }

        // LAZY INJECTION: runs exactly once per card
        if (willExpand && !card.dataset.lazyLoaded) {
          const idx      = Number(card.dataset.lazyIdx);
          const detailEl = card.querySelector('.eq-detail, .lazy-detail');
          if (detailEl) {
            detailEl.innerHTML = renderDetail(items[idx], idx);
          }
          card.dataset.lazyLoaded = 'true';
          if (onExpand) onExpand(card, items[idx]);
        }

        card.classList.toggle('expanded', willExpand);
        card.setAttribute('aria-expanded', String(willExpand));
      };

      card.addEventListener('click', e => {
        if (ignoreSelector && e.target.closest(ignoreSelector)) return;
        toggle();
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  // Build tab bar
  const tabsEl = document.getElementById(tabsId);
  if (tabsEl) {
    tabsEl.innerHTML = branches.map((b, i) =>
      `<button class="${tabBtnClass}${i === 0 ? ' active' : ''}"
               data-branch="${b}"
               role="tab"
               aria-selected="${i === 0}">${b}</button>`
    ).join('');

    tabsEl.addEventListener('click', e => {
      const btn = e.target.closest(`.${tabBtnClass}`);
      if (!btn) return;
      tabsEl.querySelectorAll(`.${tabBtnClass}`).forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeBranch = btn.dataset.branch;
      render(activeBranch);
    });
  }

  // Build optional difficulty filter bar
  if (filtersId && filterKey) {
    const filtersEl = document.getElementById(filtersId);
    if (filtersEl) {
      // Collect all unique values across all branches in the defined order
      const ordered = ['All', 'GCSE', 'A-Level', 'Undergraduate', 'Graduate'];
      const allValues = new Set(
        Object.values(data).flat().map(item => item[filterKey]).filter(Boolean)
      );
      const categories = ordered.filter(v => v === 'All' || allValues.has(v));

      filtersEl.innerHTML = categories.map(cat =>
        `<button class="filter-btn${cat === 'All' ? ' active' : ''}" data-cat="${cat}">${cat}</button>`
      ).join('');

      filtersEl.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.cat;
        render(activeBranch);
      });
    }
  }

  // Wire search input
  if (searchId) {
    const searchEl = document.getElementById(searchId);
    if (searchEl) {
      const debouncedRender = debounce(() => render(activeBranch), DEBOUNCE_MS);
      searchEl.addEventListener('input', e => {
        searchQuery = e.target.value;
        debouncedRender();
      });
    }
  }

  render(activeBranch);
  return { render };
}