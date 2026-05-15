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
// FIX #01 — onExpand can return `true` to signal it has taken full ownership
//   of the expand action (e.g. opening a modal on mobile). When it does, the
//   in-card expanded class + detail injection are suppressed, preventing the
//   double-UI bug where both the bottom-sheet AND in-card expand fired at once.
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

  const searchIndex = buildSearchIndex(data, searchFields);

  let activeFilter = 'All';
  let searchQuery  = '';

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

    grid.innerHTML = indices.map((globalIdx, i) => {
      const html = renderCard(data[globalIdx], globalIdx, i);
      return html.includes('data-lazy-idx')
        ? html
        : html.replace(/^(<\w+)/, `$1 data-lazy-idx="${globalIdx}"`);
    }).join('');

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

        if (willExpand) {
          const cardRectBefore = card.getBoundingClientRect();

          grid.querySelectorAll('[data-lazy-idx].expanded').forEach(other => {
            if (other !== card) {
              other.classList.remove('expanded');
              other.setAttribute('aria-expanded', 'false');
            }
          });

          const cardRectAfter = card.getBoundingClientRect();
          const shift = cardRectAfter.top - cardRectBefore.top;
          if (shift !== 0) {
            window.scrollBy({ top: shift, behavior: 'instant' });
          }
        }

        // FIX #01 — Fire onExpand first; if it returns true, it owns this
        // interaction entirely (e.g. opening a modal). Skip in-card expand.
        if (willExpand && onExpand) {
          const handled = onExpand(card, data[Number(card.dataset.lazyIdx)]);
          if (handled === true) return; // modal took over — do nothing further
        }

        if (willExpand && !card.dataset.lazyLoaded) {
          const idx      = Number(card.dataset.lazyIdx);
          const detailEl = card.querySelector('.const-detail, .eq-detail, .lazy-detail');
          if (detailEl) {
            detailEl.innerHTML = renderDetail(data[idx], idx);
          }
          card.dataset.lazyLoaded = 'true';
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
        render();
      });
    }
  }

  if (searchId) {
    const searchEl = document.getElementById(searchId);
    if (searchEl) {
      searchEl.addEventListener('input', e => {
        searchQuery = e.target.value;
        debouncedRender();
      });
    }
  }

  render();
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
//
//     // onExpand can return `true` to take full ownership (suppresses in-card expand)
//     onExpand: (cardEl, item) => { ... return true; },
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

        if (willExpand) {
          const cardRectBefore = card.getBoundingClientRect();

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

          const cardRectAfter = card.getBoundingClientRect();
          const shift = cardRectAfter.top - cardRectBefore.top;
          if (shift !== 0) {
            window.scrollBy({ top: shift, behavior: 'instant' });
          }
        }

        // FIX #01 — Fire onExpand BEFORE in-card logic.
        // If onExpand returns true, it has taken full ownership (e.g. modal
        // opened on mobile). Skip in-card expand entirely to prevent double-UI.
        if (willExpand && onExpand) {
          const handled = onExpand(card, items[Number(card.dataset.lazyIdx)]);
          if (handled === true) return; // suppressed — modal owns this interaction
        }

        // ── LAZY INJECTION: runs exactly once per card ──────────────────────
        if (willExpand && !card.dataset.lazyLoaded) {
          const idx      = Number(card.dataset.lazyIdx);
          const detailEl = card.querySelector('.eq-detail, .lazy-detail');
          if (detailEl) {
            detailEl.innerHTML = renderDetail(items[idx], idx);
          }
          card.dataset.lazyLoaded = 'true';
          if (window.renderMathInElement) {
            renderMathInElement(card, {
              delimiters: [
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true },
              ],
              throwOnError: false,
            });
          }
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
