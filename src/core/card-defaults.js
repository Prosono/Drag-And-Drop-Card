/*
 * Shared default factories and token helpers used by both the main dashboard card and internal cards.
 *
 * Keep this module dependency-light so card pickers, editors, and renderers can reuse defaults
 * without pulling in dashboard lifecycle code.
 */

export function __ddcHtmlDefaultConfig__() {
  return {
    type: 'custom:ddc-html-card',
    title: 'HTML / Web card',
    html: `<div class="ddc-html-sample">
  <span class="ddc-html-sample-kicker">Drag & Drop Card</span>
  <h2>Custom HTML</h2>
  <p>Build a small live surface with your own markup, styles and script.</p>
  <div class="ddc-html-sample-state" data-ddc-html-state>Waiting for Home Assistant data...</div>
</div>`,
    css: `.ddc-html-sample {
  display: grid;
  gap: 12px;
  align-content: start;
  min-height: 100%;
}

.ddc-html-sample-kicker {
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--primary-color, #ff9800) 14%, transparent);
  color: var(--primary-color, #ff9800);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.ddc-html-sample h2 {
  margin: 0;
  font-size: 1.35rem;
  line-height: 1.05;
}

.ddc-html-sample p {
  margin: 0;
  color: var(--secondary-text-color, #94a3b8);
  line-height: 1.5;
}

.ddc-html-sample-state {
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(127,127,127,.06);
  font-weight: 700;
}`,
    js: `const stateEl = root.querySelector('[data-ddc-html-state]');

return {
  update({ states }) {
    if (!stateEl) return;
    const first = Object.keys(states || {})[0];
    stateEl.textContent = first
      ? first + ' = ' + ((states[first] && states[first].state) || 'unknown')
      : 'No live entity yet';
  }
};`,
    rerun_on_hass_update: false
  };
}

export function __ddcLineSplitTokens__(value) {
  return String(value || '')
    .split(',')
    .map((token) => token.trim())
    .filter(Boolean);
}
