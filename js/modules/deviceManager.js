// =============================================================================
// deviceManager.js — Equation complexity scoring for Phyansy
// Only export what's needed. isDesktop() stays local in each controller.
// =============================================================================

/**
 * Returns true when the equation's rendered KaTeX is likely to overflow
 * a narrow mobile card, warranting a modal instead of expand-in-card.
 *
 * Scoring (threshold = 3):
 *  +3  formula > 50 chars (very long)
 *  +2  formula > 35 chars (moderately long)
 *  +1  formula > 22 chars (slightly long)
 *  +3  contains \partial, \nabla, \oint, \prod, \sum  (multi-line constructs)
 *  +2  contains \int (integral)
 *  +2  contains nested \frac...\frac
 *  +1  mixes \vec and \frac
 */
export function isComplexEquation(eq) {
  if (!eq) return false;

  const latex = eq.formulaLatex || eq.formula || '';
  let score = 0;

  if (latex.length > 50)      score += 3;
  else if (latex.length > 35) score += 2;
  else if (latex.length > 22) score += 1;

  if (/\\partial|\\nabla|\\oint|\\prod|\\sum/.test(latex)) score += 3;
  if (/\\int[^e]/.test(latex))                             score += 2;
  if (/\\frac[^}]*\\frac/.test(latex))                    score += 2;
  if (/\\vec[^}]*\\frac|\\frac[^}]*\\vec/.test(latex))   score += 1;

  return score >= 3;
}
