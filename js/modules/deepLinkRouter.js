// =============================================================================
// deepLinkRouter.js — SEO Deep Linking for Phyansy
//
// Handles URL patterns:
//   /equations/half-life          → opens Half-Life equation modal
//   /constants/speed-of-light     → opens Speed of Light constant modal
//   /symbols/alpha                → opens Alpha symbol modal
//   /equations                    → scrolls to equations section
//   /constants                    → scrolls to constants section
//
// Also:
//   - Updates <title>, <meta description>, <canonical> per item
//   - Pushes history state when user opens a modal (for back-button support)
//   - Restores clean URL when modal is closed
// =============================================================================

const BASE_URL = 'https://phyansy.vercel.app';

// ── SLUG HELPERS ──────────────────────────────────────────────────────────────

export function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function slugMatches(name, slug) {
  return toSlug(name) === slug;
}

// ── META TAG UPDATER ──────────────────────────────────────────────────────────

const _defaultTitle = document.title;
const _defaultDesc  = document.querySelector('meta[name="description"]')?.content || '';
const _defaultCanon = document.querySelector('link[rel="canonical"]')?.href || BASE_URL + '/';

function setMeta({ title, description, canonical, ogTitle, ogDesc }) {
  document.title = title;
  _setMeta('name', 'description', description);
  _setMeta('property', 'og:title', ogTitle || title);
  _setMeta('property', 'og:description', ogDesc || description);
  _setMeta('property', 'og:url', canonical);
  _setMeta('name', 'twitter:title', ogTitle || title);
  _setMeta('name', 'twitter:description', ogDesc || description);
  const canonEl = document.querySelector('link[rel="canonical"]');
  if (canonEl) canonEl.href = canonical;
}

function _setMeta(attrName, attrValue, content) {
  const el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (el) el.setAttribute('content', content);
}

export function resetMeta() {
  setMeta({
    title:       _defaultTitle,
    description: _defaultDesc,
    canonical:   _defaultCanon,
  });
  window.history.replaceState({ phyansy: 'home' }, '', '/');
}

// ── META BUILDERS ─────────────────────────────────────────────────────────────

function metaForEquation(eq) {
  const slug = toSlug(eq.name);
  const canonical = `${BASE_URL}/equations/${slug}`;
  const title = `${eq.name} — Physics Equation | Phyansy`;
  const description = eq.desc
    ? `${eq.desc} Formula: ${eq.formula}. Includes derivation, variables, units, and real-world applications.`
    : `${eq.name}: ${eq.formula}. Full derivation, explanation, and variables on Phyansy.`;
  return { title, description, canonical,
    ogTitle: `${eq.name}: ${eq.formula}`,
    ogDesc: description };
}

function metaForConstant(c) {
  const slug = toSlug(c.name);
  const canonical = `${BASE_URL}/constants/${slug}`;
  const title = `${c.name} (${c.symbol}) — Physical Constant | Phyansy`;
  const description = c.description
    ? `${c.name}: ${c.value} ${c.unit}. ${c.description}`
    : `${c.name} value: ${c.value} ${c.unit}. CODATA 2022 standard value with full explanation.`;
  return { title, description, canonical,
    ogTitle: `${c.name}: ${c.value} ${c.unit}`,
    ogDesc: description };
}

function metaForSymbol(s) {
  const slug = toSlug(s.name);
  const canonical = `${BASE_URL}/symbols/${slug}`;
  const letters = [s.upper, s.lower].filter(Boolean).join(' / ');
  const title = `${s.name} (${letters}) — Physics Symbol | Phyansy`;
  const description = s.description || `${s.name} symbol in physics: ${letters}. Usage, pronunciation, and context.`;
  return { title, description, canonical };
}

// ── PUSH STATE WHEN MODAL OPENS ───────────────────────────────────────────────

export function pushEquationState(eq) {
  const slug = toSlug(eq.name);
  const url  = `/equations/${slug}`;
  const meta = metaForEquation(eq);
  setMeta(meta);
  window.history.pushState({ phyansy: 'equation', slug }, '', url);
}

export function pushConstantState(c) {
  const slug = toSlug(c.name);
  const url  = `/constants/${slug}`;
  const meta = metaForConstant(c);
  setMeta(meta);
  window.history.pushState({ phyansy: 'constant', slug }, '', url);
}

export function pushSymbolState(s) {
  const slug = toSlug(s.name);
  const url  = `/symbols/${slug}`;
  const meta = metaForSymbol(s);
  setMeta(meta);
  window.history.pushState({ phyansy: 'symbol', slug }, '', url);
}

export function pushSectionState(section) {
  // section: 'equations' | 'constants' | 'symbols' | 'units' | 'calculator'
  const url = `/${section}`;
  window.history.pushState({ phyansy: 'section', section }, '', url);
  document.title = `Phyansy — ${section.charAt(0).toUpperCase() + section.slice(1)}`;
  const canonEl = document.querySelector('link[rel="canonical"]');
  if (canonEl) canonEl.href = BASE_URL + url;
}

// ── INITIAL ROUTE HANDLER ─────────────────────────────────────────────────────
// Called once on page load. Reads the URL path, waits for data to be ready,
// then opens the right modal / scrolls to the right section.

export async function handleInitialRoute() {
  const path = window.location.pathname; // e.g. "/equations/half-life"
  if (path === '/' || path === '') return;

  const parts = path.replace(/^\//, '').split('/');
  const section = parts[0];  // "equations" | "constants" | "symbols" | "units"
  const slug    = parts[1];  // "half-life" | undefined

  // Scroll to section regardless
  _scrollToSection(section);

  if (!slug) return; // just a section URL like /equations

  // Wait for data + controllers to be registered on window
  await _waitForControllers(section);

  if (section === 'equations') {
    _openEquationBySlug(slug);
  } else if (section === 'constants') {
    _openConstantBySlug(slug);
  } else if (section === 'symbols') {
    _openSymbolBySlug(slug);
  }
}

// ── POPSTATE (back button) ────────────────────────────────────────────────────

window.addEventListener('popstate', (e) => {
  const state = e.state;
  if (!state || !state.phyansy) {
    resetMeta();
    return;
  }
  if (state.phyansy === 'home') {
    resetMeta();
  }
  // If navigating back to a section page, restore its meta
  if (state.phyansy === 'section') {
    pushSectionState(state.section);
  }
  // Note: modals handle their own close on back — no re-open needed here
  // since the user is explicitly going back.
});

// ── INTERNAL HELPERS ──────────────────────────────────────────────────────────

function _scrollToSection(section) {
  const sectionMap = {
    equations:  'sec-equations',
    constants:  'sec-constants',
    symbols:    'sec-symbols',
    units:      'sec-units',
    calculator: 'sec-calculator',
  };
  const id = sectionMap[section];
  if (!id) return;
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function _waitForControllers(section, maxWait = 5000) {
  return new Promise((resolve) => {
    const keys = {
      equations: '_phyansy_openEquationModal',
      constants: '_phyansy_openConstantModal',
      symbols:   '_phyansy_openSymbolModal',
    };
    const key = keys[section];
    if (!key || window[key]) return resolve();
    const start = Date.now();
    const interval = setInterval(() => {
      if (window[key] || Date.now() - start > maxWait) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}

function _openEquationBySlug(slug) {
  const opener = window._phyansy_openEquationModal;
  if (!opener) return;
  opener(slug);
}

function _openConstantBySlug(slug) {
  const opener = window._phyansy_openConstantModal;
  if (!opener) return;
  opener(slug);
}

function _openSymbolBySlug(slug) {
  const opener = window._phyansy_openSymbolModal;
  if (!opener) return;
  opener(slug);
}
