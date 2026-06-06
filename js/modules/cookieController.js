// =============================================================================
// cookieController.js — Cookie Consent + About/Privacy Modal
// Phyansy — Made by Tanay (s4sxam)
// =============================================================================

const COOKIE_KEY = 'phyansy_cookie_consent';
const COOKIE_PREFS_KEY = 'phyansy_cookie_prefs';

// ── DEFAULT PREFERENCES ─────────────────────────────────────────────────────
const DEFAULT_PREFS = {
  necessary: true,   // always on
  analytics: false,
  preferences: true,
};

// ── READ / WRITE ─────────────────────────────────────────────────────────────
function getConsent() {
  try { return localStorage.getItem(COOKIE_KEY); } catch { return null; }
}

function setConsent(value) {
  try { localStorage.setItem(COOKIE_KEY, value); } catch {}
}

function getPrefs() {
  try {
    const raw = localStorage.getItem(COOKIE_PREFS_KEY);
    return raw ? { ...DEFAULT_PREFS, ...JSON.parse(raw) } : { ...DEFAULT_PREFS };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

function savePrefs(prefs) {
  try { localStorage.setItem(COOKIE_PREFS_KEY, JSON.stringify(prefs)); } catch {}
}

// ── INJECT HTML ──────────────────────────────────────────────────────────────
function injectCookieBanner() {
  const html = `
  <div id="cookie-banner" role="region" aria-label="Cookie consent">
    <div class="cookie-inner">
      <div class="cookie-top">
        <div class="cookie-icon" aria-hidden="true">🍪</div>
        <div class="cookie-text-block">
          <div class="cookie-title">We use cookies</div>
          <div class="cookie-desc">
            Phyansy uses cookies to remember your theme, language preferences, and improve your experience.
            We don't sell your data — ever.
          </div>
        </div>
      </div>

      <!-- Customize panel -->
      <div class="cookie-customize-panel" id="cookie-customize-panel">
        <div class="cookie-pref-row">
          <div>
            <div class="cookie-pref-label">Necessary</div>
            <div class="cookie-pref-sub">Required for the site to function. Cannot be disabled.</div>
          </div>
          <label class="cookie-toggle">
            <input type="checkbox" checked disabled>
            <span class="cookie-toggle-slider"></span>
          </label>
        </div>
        <div class="cookie-pref-row">
          <div>
            <div class="cookie-pref-label">Preferences</div>
            <div class="cookie-pref-sub">Remembers your theme and settings across visits.</div>
          </div>
          <label class="cookie-toggle">
            <input type="checkbox" id="pref-toggle-preferences">
            <span class="cookie-toggle-slider"></span>
          </label>
        </div>
        <div class="cookie-pref-row">
          <div>
            <div class="cookie-pref-label">Analytics</div>
            <div class="cookie-pref-sub">Anonymous usage data to help improve Phyansy.</div>
          </div>
          <label class="cookie-toggle">
            <input type="checkbox" id="pref-toggle-analytics">
            <span class="cookie-toggle-slider"></span>
          </label>
        </div>
        <button class="cookie-save-prefs-btn" id="cookie-save-prefs">Save my preferences</button>
      </div>

      <div class="cookie-divider"></div>
      <div class="cookie-bottom">
        <div class="cookie-policy-link">
          By clicking Accept, you agree to our use of cookies.
          <br>
          <button onclick="openAboutModal('privacy')" class="cookie-policy-link" style="display:inline; cursor:pointer; font-weight:500;">
            Read About &amp; Privacy Policy
          </button>
        </div>
        <div class="cookie-actions">
          <button class="cookie-btn cookie-btn-reject" id="cookie-reject">Reject</button>
          <button class="cookie-btn cookie-btn-customize" id="cookie-customize">Customize</button>
          <button class="cookie-btn cookie-btn-accept" id="cookie-accept">Accept All</button>
        </div>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
}

function injectAboutModal() {
  const year = new Date().getFullYear();
  const html = `
  <div id="about-modal" role="dialog" aria-modal="true" aria-labelledby="about-modal-title">
    <div class="about-backdrop" id="about-backdrop"></div>
    <div class="about-sheet">
      <div class="about-handle" aria-hidden="true"></div>
      <div class="about-header">
        <div class="about-header-left">
          <div class="about-header-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
            </svg>
          </div>
          <div>
            <div class="about-header-title" id="about-modal-title">Phyansy — About &amp; Legal</div>
            <div class="about-header-sub">Privacy Policy · Terms · Cookie Policy</div>
          </div>
        </div>
        <button class="about-close-btn" id="about-modal-close" aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <div class="about-tabs" role="tablist">
        <button class="about-tab-btn active" data-tab="about" role="tab" aria-selected="true">About</button>
        <button class="about-tab-btn" data-tab="faq" role="tab" aria-selected="false">FAQ</button>
        <button class="about-tab-btn" data-tab="privacy" role="tab" aria-selected="false">Privacy Policy</button>
        <button class="about-tab-btn" data-tab="cookies" role="tab" aria-selected="false">Cookie Policy</button>
        <button class="about-tab-btn" data-tab="terms" role="tab" aria-selected="false">Terms of Use</button>
      </div>

      <div class="about-body">

        <!-- ABOUT TAB -->
        <div class="about-tab-panel active" id="panel-about">
          <div class="about-section-title">What is Phyansy?</div>
          <p class="about-p">
            <strong>Phyansy</strong> is a free, open-source interactive physics reference tool built for students and enthusiasts. It provides instant access to physical constants, key equations, Greek symbols, measurement units, and an equation-based calculator — all in one clean, fast interface.
          </p>
          <div class="about-highlight">
            "Physics is not a set of facts to memorize. It is a language to understand the universe."
            <br><span style="margin-top:6px;display:block;font-size:12px;opacity:0.7;">— The spirit behind Phyansy</span>
          </div>

          <div class="about-section-title">Features</div>
          <div class="about-badge-row">
            <span class="about-badge">⚛ Physical Constants</span>
            <span class="about-badge">∑ Key Equations</span>
            <span class="about-badge">α Symbols Reference</span>
            <span class="about-badge">📐 Units &amp; Measurement</span>
            <span class="about-badge">🧮 Physics Calculator</span>
            <span class="about-badge">🌙 Dark Mode</span>
            <span class="about-badge">📱 Mobile Ready</span>
          </div>

          <div class="about-section-title">About the Creator</div>
          <p class="about-p">
            Phyansy is designed and built by <strong>Tanay</strong> (<a class="about-link" href="https://github.com/s4sxam" target="_blank" rel="noopener">s4sxam</a>), a student developer from West Bengal, India. It is an independent, open-source project built with care.
          </p>
          <p class="about-p">
            Source code is available on <a class="about-link" href="https://github.com/s4sxam" target="_blank" rel="noopener">GitHub</a>. Contributions, feedback, and bug reports are welcome.
          </p>

          <div class="about-section-title">Tech Stack</div>
          <div class="about-badge-row">
            <span class="about-badge">HTML5</span>
            <span class="about-badge">CSS3</span>
            <span class="about-badge">Vanilla JS</span>
            <span class="about-badge">KaTeX</span>
            <span class="about-badge">Vite</span>
          </div>

          <div class="about-section-title">Version</div>
          <p class="about-p">Phyansy Phase 2 — actively maintained.</p>
        </div>

        <!-- FAQ TAB -->
        <div class="about-tab-panel" id="panel-faq">
          <div class="about-section-title">Frequently Asked Questions</div>

          <div class="about-faq-item">
            <div class="about-faq-q">What is Phyansy?</div>
            <p class="about-p">Phyansy is a free, open-source physics reference web app. It gives students and researchers instant access to 295 physics equations with full derivations, 79 physical constants, 51 symbols, SI units, and a built-in calculator — all beautifully rendered with KaTeX math typesetting, with no sign-up required.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">Is Phyansy completely free?</div>
            <p class="about-p">Yes — 100% free. No account, no ads, no paywalls, no premium tier. Every feature is available to everyone.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">What physics topics and equations are covered?</div>
            <p class="about-p">Phyansy covers 295 equations across 13 domains: Classical Mechanics, Electromagnetism, Thermodynamics, Quantum Mechanics, Relativity, Optics, Waves &amp; Oscillations, Nuclear &amp; Particle Physics, Astrophysics &amp; Cosmology, Fluid Mechanics, Solid State Physics, Particle Physics &amp; QFT, and Mathematical Physics.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">Do equations include derivations and explanations?</div>
            <p class="about-p">Yes. Every equation card includes: a step-by-step derivation, a plain-English explanation, the deep physical meaning, historical attribution, real-world significance, common misconceptions, dimensional analysis, and SI units for every variable.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">Where do the physical constant values come from?</div>
            <p class="about-p">All 79 constants are sourced from <a class="about-link" href="https://codata.org/recommendations/2018-codata-recommended-values/" target="_blank" rel="noopener">CODATA 2018 recommended values</a> — the internationally accepted standard used by NIST and the scientific community.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">What languages does Phyansy support?</div>
            <p class="about-p">Phyansy supports 14 languages: English, Hindi, Bengali, Tamil, Telugu, Marathi, Arabic, Spanish, French, Portuguese, Russian, Japanese, Chinese (Simplified), and German. Physics formulas stay in English — the universal language of physics — while descriptions are translated.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">Does Phyansy work on mobile?</div>
            <p class="about-p">Yes. Phyansy is fully responsive and works on phones, tablets, and desktops. Dark mode and light mode are supported, auto-detected from your system preference and togglable manually.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">How does the search work?</div>
            <p class="about-p">Phyansy has a custom-built fuzzy search engine that indexes all equations, constants, symbols, and units simultaneously. It finds results even with typos. Press <kbd style="font-family:inherit;background:var(--bg-card,#1e1e2e);padding:1px 5px;border-radius:4px;font-size:12px;border:1px solid var(--border,#333);">/</kbd> anywhere on the page to focus the search bar instantly.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">Does Phyansy collect my data?</div>
            <p class="about-p">No. Phyansy is a client-side tool with no backend server. It stores only your theme preference and cookie consent in your browser's localStorage — data that never leaves your device. See the Privacy Policy tab for full details.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">Is Phyansy open source? Can I contribute?</div>
            <p class="about-p">Yes. The source code is on <a class="about-link" href="https://github.com/s4sxam/Phyansy" target="_blank" rel="noopener">GitHub</a>. Contributions are welcome — you can add equations, fix errors, improve translations, or report bugs via GitHub issues.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">Who built Phyansy?</div>
            <p class="about-p">Phyansy was designed and built by <strong>Tanay Guha</strong> (<a class="about-link" href="https://github.com/s4sxam" target="_blank" rel="noopener">@s4sxam</a>), a student developer from West Bengal, India — built independently as a free resource for physics students everywhere.</p>
          </div>

          <div class="about-faq-item">
            <div class="about-faq-q">Can I use Phyansy as a physics calculator?</div>
            <p class="about-p">Yes. Phyansy includes a built-in physics calculator for common computations — you can look up an equation and compute directly without leaving the app.</p>
          </div>
        </div>

        <!-- PRIVACY TAB -->
        <div class="about-tab-panel" id="panel-privacy">
          <div class="about-section-title">Overview</div>
          <p class="about-p">
            Phyansy is committed to your privacy. This policy explains what data we handle, why, and how. The short version: <strong>we collect almost nothing, and we never sell your data.</strong>
          </p>
          <div class="about-highlight">
            Phyansy is a client-side tool. It does not have a backend server, accounts, or user databases. Almost all processing happens entirely in your browser.
          </div>

          <div class="about-section-title">What data is stored?</div>
          <p class="about-p">
            Phyansy stores the following <strong>only in your browser's localStorage</strong>:
          </p>
          <p class="about-p">
            • <strong>Theme preference</strong> (light/dark) — so the app looks right on your next visit.<br>
            • <strong>Cookie consent record</strong> — to avoid showing you the consent banner repeatedly.<br>
            • <strong>Cookie preferences</strong> — your granular toggle choices.
          </p>
          <p class="about-p">
            This data never leaves your device. It is not transmitted to any server.
          </p>

          <div class="about-section-title">Third-party services</div>
          <p class="about-p">
            Phyansy loads the following resources from third-party CDNs:
          </p>
          <p class="about-p">
            • <strong>Google Fonts</strong> — for typography (Inter, JetBrains Mono). Google may log your IP when the font is requested.<br>
            • <strong>KaTeX (jsDelivr)</strong> — for math rendering. jsDelivr may collect aggregate traffic data.
          </p>
          <p class="about-p">
            These are standard CDN requests. We have no control over their policies. Refer to <a class="about-link" href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's Privacy Policy</a> and <a class="about-link" href="https://www.jsdelivr.com/privacy-policy-jsdelivr-net" target="_blank" rel="noopener">jsDelivr's Privacy Policy</a> for their data practices.
          </p>

          <div class="about-section-title">Analytics</div>
          <p class="about-p">
            Phyansy does not use analytics by default. If you opted into analytics cookies, only anonymous, aggregated usage patterns may be recorded to help improve the tool — no personal data, no tracking.
          </p>

          <div class="about-section-title">Your rights</div>
          <p class="about-p">
            Since all data is stored locally in your own browser, you have full control. You can clear it anytime via your browser's storage settings. You can also reject or customize cookies at any time.
          </p>

          <div class="about-section-title">Contact</div>
          <p class="about-p">
            For any privacy questions, contact Tanay via <a class="about-link" href="https://github.com/s4sxam" target="_blank" rel="noopener">GitHub</a>.
          </p>
        </div>

        <!-- COOKIES TAB -->
        <div class="about-tab-panel" id="panel-cookies">
          <div class="about-section-title">What are cookies?</div>
          <p class="about-p">
            Cookies and similar browser storage (like localStorage) are small pieces of data stored in your browser. They help websites remember information between visits.
          </p>

          <div class="about-section-title">Cookies Phyansy uses</div>

          <div class="about-highlight">
            <strong>Necessary (always active)</strong><br>
            <span style="font-size:12px;">Key: <code>quantra_theme</code>, <code>phyansy_cookie_consent</code>, <code>phyansy_cookie_prefs</code></span><br>
            Stores your dark/light theme choice and your consent decision. Without these, the site would forget your preferences on every visit and keep showing you the consent banner.
          </div>

          <div class="about-highlight">
            <strong>Preferences (optional, default: on)</strong><br>
            Stores additional UI preferences you set. Enables a consistent, personalised experience across sessions.
          </div>

          <div class="about-highlight">
            <strong>Analytics (optional, default: off)</strong><br>
            If enabled, anonymous, aggregated data about which sections you use may be recorded locally to guide future improvements. No personal data. No external service.
          </div>

          <div class="about-section-title">Managing cookies</div>
          <p class="about-p">
            You can change your preferences at any time. Clear your browser's localStorage or site data to reset all stored values. You can also use your browser's privacy controls to block storage entirely — the site will still function, but your theme and settings won't persist.
          </p>
        </div>

        <!-- TERMS TAB -->
        <div class="about-tab-panel" id="panel-terms">
          <div class="about-section-title">Terms of Use</div>
          <p class="about-p">
            By using Phyansy, you agree to these terms. If you do not agree, please stop using the site.
          </p>

          <div class="about-section-title">License &amp; Use</div>
          <p class="about-p">
            Phyansy is an open-source project. The source code is licensed under the terms in the project's LICENSE file on GitHub. You may use the tool freely for personal, educational, and non-commercial purposes.
          </p>
          <p class="about-p">
            You may not copy or redistribute this tool under a different brand or claim it as your own without attribution to the original creator.
          </p>

          <div class="about-section-title">Content Accuracy</div>
          <p class="about-p">
            Phyansy provides physics constants, equations, and units for reference and educational purposes. While every effort is made to ensure accuracy, <strong>Tanay and contributors make no warranty</strong> as to the completeness or accuracy of the content. Do not rely on this tool for critical scientific or engineering decisions without independent verification.
          </p>

          <div class="about-section-title">No Warranty</div>
          <p class="about-p">
            Phyansy is provided <strong>"as is"</strong>, without warranty of any kind. The creator is not liable for any damages or losses arising from the use of this tool.
          </p>

          <div class="about-section-title">Changes</div>
          <p class="about-p">
            These terms may be updated at any time. Continued use of Phyansy after changes constitutes acceptance of the revised terms. The latest version is always reflected here.
          </p>

          <div class="about-section-title">Governing Law</div>
          <p class="about-p">
            These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of courts in West Bengal, India.
          </p>

          <div class="about-divider"></div>
          <p class="about-p" style="font-size:12px; color: var(--text-muted);">
            Last updated: ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

      </div>

      <div class="about-footer">
        <div class="about-footer-copy">
          Copyright &copy; ${year} <strong>Tanay</strong> (s4sxam). All rights reserved.
        </div>
        <div class="about-footer-version">Phyansy Phase 2</div>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
}

// ── BANNER LOGIC ─────────────────────────────────────────────────────────────
function showBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  // Small delay so page renders first
  requestAnimationFrame(() => {
    setTimeout(() => banner.classList.add('visible'), 600);
  });
}

function hideBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  banner.classList.remove('visible');
  setTimeout(() => banner.remove(), 500);
}

// ── ABOUT MODAL LOGIC ────────────────────────────────────────────────────────
window.openAboutModal = function(tab = 'about') {
  const modal = document.getElementById('about-modal');
  if (!modal) return;

  // Switch to requested tab
  switchAboutTab(tab);

  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
};

function closeAboutModal() {
  const modal = document.getElementById('about-modal');
  if (!modal) return;
  modal.classList.remove('visible');
  document.body.style.overflow = '';
}

function switchAboutTab(tabId) {
  document.querySelectorAll('.about-tab-btn').forEach(btn => {
    const active = btn.dataset.tab === tabId;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active);
  });
  document.querySelectorAll('.about-tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `panel-${tabId}`);
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
export function initCookieController() {
  injectCookieBanner();
  injectAboutModal();

  const consent = getConsent();
  if (!consent) {
    showBanner();
  }

  // Populate customize toggles with saved prefs
  const prefs = getPrefs();
  const prefToggle = document.getElementById('pref-toggle-preferences');
  const analyticsToggle = document.getElementById('pref-toggle-analytics');
  if (prefToggle) prefToggle.checked = prefs.preferences;
  if (analyticsToggle) analyticsToggle.checked = prefs.analytics;

  // Accept all
  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    setConsent('accepted');
    savePrefs({ necessary: true, preferences: true, analytics: true });
    hideBanner();
  });

  // Reject all (necessary only)
  document.getElementById('cookie-reject')?.addEventListener('click', () => {
    setConsent('rejected');
    savePrefs({ necessary: true, preferences: false, analytics: false });
    hideBanner();
  });

  // Customize toggle
  document.getElementById('cookie-customize')?.addEventListener('click', () => {
    const panel = document.getElementById('cookie-customize-panel');
    if (!panel) return;
    panel.classList.toggle('open');
    const btn = document.getElementById('cookie-customize');
    if (btn) btn.textContent = panel.classList.contains('open') ? 'Hide' : 'Customize';
  });

  // Save prefs
  document.getElementById('cookie-save-prefs')?.addEventListener('click', () => {
    const prefs = {
      necessary: true,
      preferences: document.getElementById('pref-toggle-preferences')?.checked ?? true,
      analytics: document.getElementById('pref-toggle-analytics')?.checked ?? false,
    };
    savePrefs(prefs);
    setConsent('customized');
    hideBanner();
  });

  // About modal tab switching
  document.querySelectorAll('.about-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchAboutTab(btn.dataset.tab));
  });

  // Close modal
  document.getElementById('about-modal-close')?.addEventListener('click', closeAboutModal);
  document.getElementById('about-backdrop')?.addEventListener('click', closeAboutModal);

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAboutModal();
  });
}
