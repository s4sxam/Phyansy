// =============================================================================
// calculatorController.js — Physics Calculator Section (Phase 2)
// =============================================================================

import { CALC_EQS } from '../data/calculatorData.js';
import { showToast } from './toastController.js';

let currentEq = CALC_EQS[0];
let solveFor = currentEq.vars[0].id;
let _countUpInterval = null; // FIX 8

function formatNum(n) {
  if (!isFinite(n)) return 'Error';
  if (n === 0) return '0';
  if (Math.abs(n) < 0.001 || Math.abs(n) > 1e6) return n.toExponential(4);
  return parseFloat(n.toPrecision(6)).toString();
}

// ── COUNT-UP ANIMATION ───────────────────────────────────────────────────────
function animateCountUp(el, targetStr) {
  const targetNum = parseFloat(targetStr);
  // Only animate plain finite numbers; pass through sci-notation/Error strings
  if (isNaN(targetNum) || targetStr.includes('e') || targetStr === 'Error') {
    el.textContent = targetStr;
    return;
  }

  const duration = 480; // ms
  const steps    = 28;
  const stepMs   = duration / steps;
  let step = 0;

  if (_countUpInterval) clearInterval(_countUpInterval); // FIX 8
  _countUpInterval = setInterval(() => {
    step++;
    const progress = step / steps;
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = targetNum * eased;
    el.textContent = formatNum(current);
    if (step >= steps) {
      clearInterval(_countUpInterval); // FIX 8
      _countUpInterval = null; // FIX 8
      el.textContent = targetStr; // Snap to exact value
    }
  }, stepMs);
}

function updateSolveForUI() {
  const container = document.getElementById('calc-var-checks');
  if (!container) return;

  // FIX 3+4 — filter out constant vars from solve-for options
  container.innerHTML = currentEq.vars
    .filter(v => !v.constant)
    .map(
      (v) => `
      <label class="calc-var-check">
        <input type="radio" name="calc-solve-for" value="${v.id}" ${v.id === solveFor ? 'checked' : ''}>
        <span class="calc-var-sym">${v.sym}</span>
        <span>${v.label} (${v.unit})</span>
      </label>
    `
    )
    .join('');

  container.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      solveFor = radio.value;
      updateInputsUI();
      hideResult();
    });
  });
}

function updateInputsUI() {
  const container = document.getElementById('calc-inputs');
  if (!container) return;

  container.innerHTML = currentEq.vars
    .map((v) => {
      const disabled = v.id === solveFor;
      const isConst  = !!v.constant; // FIX 3+4
      const lockIcon = isConst
        ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
        : '';
      const note = isConst
        ? `<div class="calc-const-note">🔒 This is a fundamental constant — its value is fixed.</div>`
        : (v.default !== undefined
            ? `<div class="calc-const-note">Default is Earth's surface gravity. You may change this.</div>` // FIX 5
            : '');
      return `
        <div class="calc-input-group" id="input-group-${v.id}">
          <label for="calc-input-${v.id}">
            <span class="calc-var-sym">${v.sym}</span><!-- FIX 42 -->
            — ${v.label} ${disabled && !isConst ? '<span class="calc-solving-hint">(solving for this)</span>' : `(${v.unit})`}
            ${lockIcon}
          </label>
          <input
            class="calc-num-input"
            id="calc-input-${v.id}"
            type="number"
            placeholder="${isConst ? String(v.value) : (disabled ? 'Result will appear here' : `Enter ${v.label.toLowerCase()} in ${v.unit}`)}"
            value="${isConst ? String(v.value) : (v.default !== undefined && !disabled ? String(v.default) : '')}"
            ${disabled || isConst ? 'disabled' : ''}
            ${isConst ? 'readonly title="This is a fundamental constant — its value is fixed."' : ''}
            step="any"
            aria-label="${v.label}"
          >
          ${note}
        </div>
      `; // FIX 3+4+5
    })
    .join('');
}

function updateEquationDisplay() {
  const el = document.getElementById('calc-eq-display');
  if (!el) return;
  if (currentEq.formulaLatex && window.renderMathInElement) {
    el.innerHTML = '\\(' + currentEq.formulaLatex + '\\)'; // FIX 9
    renderMathInElement(el, {
      delimiters: [{ left: '\\(', right: '\\)', display: false }],
      throwOnError: false,
    });
      // Protect KaTeX from Google Translate
      el.querySelectorAll('.katex').forEach(k => k.classList.add('notranslate'));
  } else {
    el.textContent = currentEq.formula;
  }
}

function hideResult() {
  const r = document.getElementById('calc-result');
  if (r) r.classList.remove('show');
}

function showResult(val, unit, explain) {
  const r = document.getElementById('calc-result');
  if (!r) return;

  // Reset animation by forcing reflow
  r.classList.remove('show');
  void r.offsetWidth;

  const valEl = document.getElementById('calc-result-val');
  const unitEl = document.getElementById('calc-result-unit');
  const explainEl = document.getElementById('calc-result-explain');

  // Show panel first, then animate content
  r.classList.add('show');

  // Count-up on the number
  animateCountUp(valEl, val);
  unitEl.textContent = unit;
  explainEl.textContent = explain;
}

function calculate() {
  const vals = {};
  let valid = true;
  const errors = []; // BUG-07 FIX: collect all errors, show one combined toast

  currentEq.vars.forEach((v) => {
    if (v.id === solveFor) return;
    const input = document.getElementById(`calc-input-${v.id}`);
    if (!input) return;

    input.style.borderColor = '';
    const raw = input.value.trim();

    if (raw === '' || isNaN(Number(raw))) {
      input.style.borderColor = 'rgba(239,68,68,0.7)';
      valid = false;
    } else {
      const num = Number(raw);
      // Edge case: Infinity / -Infinity
      if (!isFinite(num)) {
        input.style.borderColor = 'rgba(239,68,68,0.7)';
        valid = false;
      } else {
        // FIX 2 — constraint checking
        if (v.constraints) {
          if (v.constraints.min !== undefined && num < v.constraints.min) {
            input.style.borderColor = 'rgba(239,68,68,0.7)';
            errors.push(`${v.label} cannot be negative or zero`); // BUG-07 FIX
            valid = false;
          }
          if (v.constraints.nonzero && num === 0) {
            input.style.borderColor = 'rgba(239,68,68,0.7)';
            errors.push(`${v.label} cannot be zero`); // BUG-07 FIX
            valid = false;
          }
        }
        if (valid) vals[v.id] = num; // BUG-01 FIX: only store value when still valid
      }
    }
    // FIX 3+4 — inject constant value
    if (v.constant && v.value !== undefined) {
      vals[v.id] = v.value;
    }
  });

  if (!valid) {
    // BUG-07 FIX: show specific constraint errors joined, or generic message
    showToast(errors.length > 0 ? errors.join(' · ') : 'Please fill in all fields with valid numbers');
    return;
  }

  const solver = currentEq.solve[solveFor];
  if (!solver) return;

  let result;
  try {
    result = solver(vals);
  } catch {
    showToast('Calculation error — check your inputs');
    return;
  }

  if (isNaN(result)) {
    showToast('Result is undefined — check your inputs (e.g. negative energy is not physical)'); // FIX 6
    return;
  }
  if (!isFinite(result)) {
    showToast('Cannot divide by zero — check your inputs');
    return;
  }

  const solveVar = currentEq.vars.find((v) => v.id === solveFor);
  const unit     = solveVar ? solveVar.unit : '';
  const explain  = currentEq.explain[solveFor] || '';

  showResult(formatNum(result), unit, explain);
}

function loadEquation(eq) {
  currentEq = eq;
  // FIX 3+4 — default to first non-constant var
  const firstSolvable = eq.vars.find(v => !v.constant);
  solveFor  = firstSolvable ? firstSolvable.id : eq.vars[0].id;
  updateEquationDisplay();
  updateSolveForUI();
  updateInputsUI();
  hideResult();
}

export function initCalculator() {
  const select = document.getElementById('calc-eq-select');
  if (!select) return;

  select.innerHTML = CALC_EQS.map(
    (eq, i) => `<option value="${i}">${eq.name}</option>`
  ).join('');

  select.addEventListener('change', () => {
    loadEquation(CALC_EQS[Number(select.value)]);
  });

  document.getElementById('calc-go-btn').addEventListener('click', calculate);

  // Allow Enter key in inputs
  document.getElementById('calc-inputs').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') calculate();
  });

  loadEquation(currentEq);
}
