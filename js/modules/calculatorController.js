// =============================================================================
// calculatorController.js — Physics Calculator Section (Phase 2)
// =============================================================================

import { CALC_EQS } from '../data/calculatorData.js';
import { showToast } from './toastController.js';

let currentEq = CALC_EQS[0];
let solveFor = currentEq.vars[0].id;

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

  const interval = setInterval(() => {
    step++;
    const progress = step / steps;
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = targetNum * eased;
    el.textContent = formatNum(current);
    if (step >= steps) {
      clearInterval(interval);
      el.textContent = targetStr; // Snap to exact value
    }
  }, stepMs);
}

function updateSolveForUI() {
  const container = document.getElementById('calc-var-checks');
  if (!container) return;

  container.innerHTML = currentEq.vars
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
      return `
        <div class="calc-input-group" id="input-group-${v.id}">
          <label for="calc-input-${v.id}">
            <span style="font-family:'JetBrains Mono',monospace;color:#5a4fc0;font-weight:600">${v.sym}</span>
            — ${v.label} ${disabled ? '<span style="color:var(--text-muted);font-weight:400">(solving for this)</span>' : `(${v.unit})`}
          </label>
          <input
            class="calc-num-input"
            id="calc-input-${v.id}"
            type="number"
            placeholder="${disabled ? 'Result will appear here' : `Enter ${v.label.toLowerCase()} in ${v.unit}`}"
            ${disabled ? 'disabled' : ''}
            step="any"
            aria-label="${v.label}"
          >
        </div>
      `;
    })
    .join('');
}

function updateEquationDisplay() {
  const el = document.getElementById('calc-eq-display');
  if (el) el.textContent = currentEq.formula;
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
        vals[v.id] = num;
      }
    }
  });

  if (!valid) {
    showToast('Please fill in all fields with valid numbers');
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
  solveFor  = eq.vars[0].id;
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
