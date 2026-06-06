// =============================================================================
// bgRenderer.js — Animated Physics Background (field lines + drifting particles)
// Phase 2: Visual Identity
// Uses only Canvas 2D — zero dependencies
// =============================================================================

// BUG-08 FIX: removed top-level PARTICLE_COUNT constant — it was evaluated at
// module parse time, permanently freezing the count at whatever the viewport
// was when the script first loaded (e.g. before orientation change, DevTools open).
// Count is now computed inside initParticles() so it always reflects current width.
const FIELD_LINE_COUNT = 6;

let canvas, ctx, W, H, raf;
let particles = [];
let phase = 0;

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

function isDark() {
  return document.documentElement.getAttribute('data-theme') === 'dark';
}

function initParticles() {
  const PARTICLE_COUNT = window.innerWidth < 768 ? 12 : 28; // BUG-08 FIX: read at call-time
  particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: 1.5 + Math.random() * 2.5,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.18,
    alpha: 0.15 + Math.random() * 0.35,
    pulse: Math.random() * Math.PI * 2,
  }));
}

function drawFieldLines() {
  const dark = isDark();
  const lineColor = dark ? 'rgba(102,126,234,' : 'rgba(102,126,234,';
  const baseAlpha = dark ? 0.13 : 0.07;

  for (let i = 0; i < FIELD_LINE_COUNT; i++) {
    const xStart = (W / (FIELD_LINE_COUNT + 1)) * (i + 1);
    const freq = 0.0018 + i * 0.0004;
    const amp  = 28 + i * 8;
    const phaseOffset = (i / FIELD_LINE_COUNT) * Math.PI * 2;

    ctx.beginPath();
    ctx.moveTo(xStart + Math.sin(phase * freq + phaseOffset) * amp, 0);

    for (let y = 0; y <= H; y += 4) {
      const x = xStart + Math.sin((y * 0.012) + phase * freq + phaseOffset) * amp;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = lineColor + baseAlpha + ')';
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }
}

function drawParticles() {
  const dark = isDark();
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.pulse += 0.018;

    // Wrap edges
    if (p.x < -10) p.x = W + 10;
    if (p.x > W + 10) p.x = -10;
    if (p.y < -10) p.y = H + 10;
    if (p.y > H + 10) p.y = -10;

    const pulse = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);

    if (dark) {
      grad.addColorStop(0, `rgba(160,140,255,${pulse})`);
      grad.addColorStop(1, 'rgba(160,140,255,0)');
    } else {
      grad.addColorStop(0, `rgba(102,126,234,${pulse})`);
      grad.addColorStop(1, 'rgba(102,126,234,0)');
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  });
}

function drawSineWave() {
  const dark = isDark();
  const alpha = dark ? 0.07 : 0.045;
  const y0 = H * 0.72;
  const amp = 18;
  const freq = 0.008;

  ctx.beginPath();
  for (let x = 0; x <= W; x += 2) {
    const y = y0 + Math.sin(x * freq + phase * 0.004) * amp;
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.strokeStyle = dark
    ? `rgba(118,75,162,${alpha})`
    : `rgba(102,126,234,${alpha})`;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Second wave offset
  ctx.beginPath();
  for (let x = 0; x <= W; x += 2) {
    const y = y0 - 40 + Math.sin(x * freq * 0.7 + phase * 0.003 + 1.8) * amp * 0.7;
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.strokeStyle = dark
    ? `rgba(102,126,234,${alpha * 0.7})`
    : `rgba(118,75,162,${alpha * 0.6})`;
  ctx.lineWidth = 1;
  ctx.stroke();
}

function frame() {
  ctx.clearRect(0, 0, W, H);
  phase++;
  drawFieldLines();
  drawSineWave();
  drawParticles();
  raf = requestAnimationFrame(frame);
}

export function initBgRenderer() {
  // Respect user preference for reduced motion (accessibility + battery)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  canvas = document.createElement('canvas');
  canvas.className = 'physics-bg-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(canvas, document.body.firstChild);

  ctx = canvas.getContext('2d');
  resize();
  initParticles();

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  frame();
}

export function pauseBgRenderer() {
  if (raf) { cancelAnimationFrame(raf); raf = null; }
}

export function resumeBgRenderer() {
  if (!raf) frame();
}
