// =============================================================================
// toastController.js — Global toast notification utility
// =============================================================================

let toastTimer = null;

export function showToast(msg, duration = 2000) {
  const t = document.getElementById('toast');
  if (!t) return;

  // Clear any existing timer
  if (toastTimer) clearTimeout(toastTimer);

  t.textContent = msg;
  t.classList.add('show');

  toastTimer = setTimeout(() => {
    t.classList.remove('show');
    toastTimer = null;
  }, duration);
}
