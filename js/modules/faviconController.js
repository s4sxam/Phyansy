// =============================================================================
// faviconController.js — Dynamic SVG Favicon
// Phase 2: Visual Identity
// =============================================================================

export function initFavicon() {
  // Create SVG favicon inline — no external file needed
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <defs>
      <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#667eea"/>
        <stop offset="100%" stop-color="#764ba2"/>
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="15" fill="url(#fg)" opacity="0.15"/>
    <circle cx="16" cy="16" r="3.5" fill="url(#fg)"/>
    <line x1="16" y1="2"  x2="16" y2="8"  stroke="url(#fg)" stroke-width="2" stroke-linecap="round"/>
    <line x1="16" y1="24" x2="16" y2="30" stroke="url(#fg)" stroke-width="2" stroke-linecap="round"/>
    <line x1="2"  y1="16" x2="8"  y2="16" stroke="url(#fg)" stroke-width="2" stroke-linecap="round"/>
    <line x1="24" y1="16" x2="30" y2="16" stroke="url(#fg)" stroke-width="2" stroke-linecap="round"/>
    <line x1="5.5"  y1="5.5"  x2="9.5"  y2="9.5"  stroke="url(#fg)" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="22.5" y1="22.5" x2="26.5" y2="26.5" stroke="url(#fg)" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="5.5"  y1="26.5" x2="9.5"  y2="22.5" stroke="url(#fg)" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="22.5" y1="9.5"  x2="26.5" y2="5.5"  stroke="url(#fg)" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`;

  const encoded = 'data:image/svg+xml,' + encodeURIComponent(svg);

  // Replace or create favicon link
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = 'image/svg+xml';
  link.href = encoded;
}
