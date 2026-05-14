// =============================================================================
// deviceManager.js — Device detection & equation complexity scoring
// Single source of truth. Import isDesktop / isComplexEquation from here.
// =============================================================================

const MOBILE_BREAKPOINT = 768;

/** True when the viewport is wider than the mobile breakpoint. */
export const isDesktop = () => window.innerWidth > MOBILE_BREAKPOINT;

/** True when the viewport is a coarse-pointer touch device (phone/tablet). */
export const isTouchDevice = () =>
  window.matchMedia('(pointer: coarse)').matches;

/**
 * Scores an equation's visual complexity.
 * Returns true when the rendered math is likely to overflow a narrow card.
 *
 * Heuristics (each adds to a score; threshold = 2):
 *  +3  has integralForm (display-mode KaTeX — always wide)
 *  +2  formulaLatex longer than 35 chars
 *  +1  formulaLatex longer than 20 chars
 *  +2  formula contains \frac, \sum, \int, \prod, \oint (multi-line constructs)
 *  +1  formula contains \sqrt, \vec, \hat, \partial, \nabla
 *  +2  vars count > 5 (lots of rows → tall + risk of wide subscripts)
 */
export function isComplexEquation(eq) {
  if (!eq) return false;

  let score = 0;

  if (eq.integralForm) score += 3;

  const latex = eq.formulaLatex || eq.formula || '';
  if (latex.length > 35) score += 2;
  else if (latex.length > 20) score += 1;

  if (/\\frac|\\sum|\\int|\\prod|\\oint/.test(latex)) score += 2;
  if (/\\sqrt|\\vec|\\hat|\\partial|\\nabla/.test(latex)) score += 1;

  if (Array.isArray(eq.vars) && eq.vars.length > 5) score += 2;

  return score >= 2;
}
