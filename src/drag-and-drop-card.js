/*!
 * Drag & Drop Card (Proprietary)
 * Copyright (c) 2025 <SMARTI AS>
 * Use is governed by EULA.md. Third-party notices: THIRD_PARTY_NOTICES.md
 */


// — bundle-time imports so we don't rely on CDNs in HACS installs —
import interact from 'interactjs';
import jsyaml from 'js-yaml';

// expose for your existing code that checks window.interact/jsyaml
if (!window.interact) window.interact = interact;
if (!window.jsyaml) window.jsyaml = jsyaml;

// pretty console banner + version
const VERSION = __VERSION__;
console.info(
  `%c drag-and-drop-card %c v${VERSION} `,
  'color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px',
  'color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0'
);

// drag-and-drop-card.js
/* eslint-disable no-console */
const LOG = (m, ...a) => console.debug(`[drag-and-drop-card] ${m}`, ...a);
console.info('%c drag-and-drop-card loaded', 'color:#03a9f4;font-weight:700;');

const raf = () => new Promise((r) => requestAnimationFrame(() => r()));
const idle = () => new Promise((r) => (window.requestIdleCallback ? requestIdleCallback(() => r()) : setTimeout(r, 0)));

class DragAndDropCard extends HTMLElement {
  _updateTabsA11y_() {
  const bar = this.tabsBar; if (!bar) return;
  bar.setAttribute('role', 'tablist');
  const btns = bar.querySelectorAll('.ddc-tab');
  btns.forEach((btn, idx) => {
    const selected = btn.classList.contains('active');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(selected));
    btn.setAttribute('tabindex', selected ? '0' : '-1');
    btn.dataset.index = String(idx);
  });
  if (!this.__tabsKeyHandler) {
    this.__tabsKeyHandler = (e) => {
      const valid = ['ArrowLeft','ArrowRight','Home','End'];
      if (!valid.includes(e.key)) return;
      const list = Array.from(bar.querySelectorAll('.ddc-tab'));
      if (!list.length) return;
      e.preventDefault();
      const focusedIndex = list.findIndex(b => b === document.activeElement);
      const activeIndex = list.findIndex(b => b.classList.contains('active'));
      let idx = focusedIndex >= 0 ? focusedIndex : (activeIndex >= 0 ? activeIndex : 0);
      if (e.key === 'ArrowRight') idx = Math.min(list.length - 1, idx + 1);
      if (e.key === 'ArrowLeft')  idx = Math.max(0, idx - 1);
      if (e.key === 'Home')       idx = 0;
      if (e.key === 'End')        idx = list.length - 1;
      const target = list[idx];
      if (target) { try { target.focus({preventScroll:false}); } catch {}; target.click(); }
    };
    bar.addEventListener('keydown', this.__tabsKeyHandler);
  }
  if (!this.__tabsScrollHandler) {
    this.__tabsScrollHandler = () => this._updateTabOverflowShadows_?.();
    bar.addEventListener('scroll', this.__tabsScrollHandler, { passive: true });
  }
  this._updateTabOverflowShadows_?.();
}


// ---------------- Dashboard URL helpers ----------------
_getCurrentDashboardUrlPath_() {
  // e.g. "/", "/lovelace/0", "/myboard/0", "/lovelace-myboard/0"
  const path = (window.location.pathname || "/").replace(/^\/+/, "");
  const first = path.split("/")[0] || "lovelace";

  // Primary dashboard uses "/lovelace"
  if (first === "lovelace") return null;

  // Additional dashboards: first segment is the url_path (works for "/myboard" and "/lovelace-myboard")
  return first;
}

// ---------------- Storage-mode persistence (Visual Editor path) ----------------

// Ensure this card has a persistent id in its config (stored in Lovelace)
async _ensureCardIdSeededInStorage_() {
  if (this.config?.id) return this.config.id;

  const id = (crypto?.randomUUID ? crypto.randomUUID() : ("ddc_" + Math.random().toString(36).slice(2)));
  this.config = { ...this.config, id }; // in-memory immediately

  try {
    const url_path = this._getCurrentDashboardUrlPath_();
    const ll = await this.hass.callWS(url_path ? { type: "lovelace/config", url_path } : { type: "lovelace/config" });

    const hit = this._findThisCardPathRecursive_(ll, (c) =>
      c?.type === "custom:drag-and-drop-card" && (!c.id || c.id === id)
    );
    if (!hit) return id;

    const { viewIndex, cardIndex, parentPath } = hit;
    const view = ll.views[viewIndex];
    const curr = this._getCardByPath_(view, parentPath, cardIndex);
    const updated = { ...curr, id };
    this._setCardByPath_(view, parentPath, cardIndex, updated);

    // SAVE with url_path when present
    await this.hass.callWS(
      url_path
        ? { type: "lovelace/config/save", url_path, config: ll }
        : { type: "lovelace/config/save", config: ll }
    );
  } catch (_) {
    // YAML dashboards or permission issues: ignore; we still keep the in-memory id
  }
  return id;
}

// Persist this._config back into the stored card (Storage dashboards)
async _persistThisCardConfigToStorage_() {
  await this._ensureCardIdSeededInStorage_();

  // Build what we want to merge (like Visual Editor does at top-level)
  const partial = {
    type: "custom:drag-and-drop-card",
    id: this.config?.id,
    ...this._config,
  };

  const url_path = this._getCurrentDashboardUrlPath_();

  // LOAD
  const ll = await this.hass.callWS(url_path ? { type: "lovelace/config", url_path } : { type: "lovelace/config" });

  // FIND our card by type + id (supports nesting)
  const hit = this._findThisCardPathRecursive_(ll, (c) =>
    c?.type === "custom:drag-and-drop-card" && c?.id === this.config?.id
  );
  if (!hit) throw new Error("Card not found in Lovelace config");

  const { viewIndex, cardIndex, parentPath } = hit;
  const view = ll.views[viewIndex];

  // MERGE + WRITE
  const currentCard = this._getCardByPath_(view, parentPath, cardIndex);
  const merged = { ...currentCard, ...partial };
  this._setCardByPath_(view, parentPath, cardIndex, merged);

  // SAVE (respect url_path)
  await this.hass.callWS(
    url_path
      ? { type: "lovelace/config/save", url_path, config: ll }
      : { type: "lovelace/config/save", config: ll }
  );

  // Apply locally
  this.config = merged;
  this.requestUpdate?.();
}

// ---- Tree helpers (unchanged) ----
_findThisCardPathRecursive_(llConfig, predicate) {
  const views = llConfig?.views || [];
  for (let vi = 0; vi < views.length; vi++) {
    const hit = this._findInCardTree_(views[vi], predicate);
    if (hit) return { viewIndex: vi, ...hit };
  }
  return null;
}

_findInCardTree_(node, predicate, parentPath = []) {
  const cards = node?.cards || [];
  for (let ci = 0; ci < cards.length; ci++) {
    const c = cards[ci];
    if (predicate(c)) return { cardIndex: ci, parentPath };
    if (c?.cards?.length) {
      const sub = this._findInCardTree_(c, predicate, parentPath.concat(ci));
      if (sub) return sub;
    }
  }
  return null;
}

_getCardByPath_(view, parentPath, cardIndex) {
  let container = view;
  for (const idx of (parentPath || [])) container = container.cards[idx];
  return container.cards[cardIndex];
}

_setCardByPath_(view, parentPath, cardIndex, value) {
  let container = view;
  for (const idx of (parentPath || [])) container = container.cards[idx];
  container.cards[cardIndex] = value;
}


_ensureToolbarStyles_() {
  try {
    const has = this.shadowRoot.querySelector('#ddc-toolbar-styles');
    if (has) return;
    const s = document.createElement('style');
    s.id = 'ddc-toolbar-styles';
    s.textContent = `/* ===== Edit toolbar ===== */
  .ddc-toolbar{
    position: sticky; top:0; z-index: 50;
    display:grid; grid-template-columns: 1fr auto 1fr; align-items:center;
    gap: 12px; padding: 10px 14px;
    backdrop-filter: blur(8px);
    background: color-mix(in oklab, var(--card-background-color, rgba(0,0,0,.45)) 80%, transparent);
    border-bottom: 1px solid var(--divider-color, rgba(255,255,255,.08));
    box-shadow: 0 2px 10px rgba(0,0,0,.25);
  }
  .ddc-t-group{ display:flex; align-items:center; gap:8px; flex-wrap: wrap; }
  .ddc-toolbar > .ddc-t-group:first-child{ justify-self: start; }
  .ddc-toolbar > .ddc-t-group:nth-child(3){ justify-self: center; }
  .ddc-toolbar > .ddc-t-group:last-child{ justify-self: end; }

  .ddc-t-btn{
    display:inline-flex; align-items:center; gap:8px;
    height:34px; padding:0 12px; border-radius:10px;
    font: inherit; line-height: 1; cursor:pointer;
    background: var(--ha-card-background, rgba(255,255,255,.06));
    border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
    color: var(--primary-text-color, #e5e7eb);
    transition: transform .08s ease, background .15s ease, border-color .15s ease;
  }
  .ddc-t-btn:hover{ transform: translateY(-1px); background: rgba(255,255,255,.1); }
  .ddc-t-btn:active{ transform: translateY(0); }
  .ddc-t-btn ha-icon{ --mdc-icon-size:18px; }
  .ddc-t-btn .label{ white-space:nowrap; }

  .ddc-t-btn.primary{
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    border-color: color-mix(in oklab, var(--primary-color) 75%, #000);
  }
  .ddc-t-btn.danger{
    background: var(--error-color, #ef4444);
    color:#fff;
    border-color: color-mix(in oklab, var(--error-color) 75%, #000);
  }
  .ddc-t-btn.ghost{
    background: transparent;
    border-color: transparent;
    color: var(--secondary-text-color, #cbd5e1);
  }

  .ddc-t-sep{ width:1px; height:28px; background: var(--divider-color, rgba(255,255,255,.12)); }

  .ddc-t-status{
    display:inline-flex; align-items:center; gap:8px;
    padding:6px 12px; border-radius:999px;
    background: rgba(255,255,255,.06);
    border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
    font-size:.875rem;
  }
  .ddc-t-dot{ width:10px; height:10px; border-radius:50%; background:#22c55e; }
  .ddc-t-dot.dirty{ background:#f59e0b; animation: ddc-pulse 1.5s ease-in-out infinite; }
  .ddc-t-dot.error{ background:#ef4444; }
  @keyframes ddc-pulse{ 0%,100%{ transform:scale(1)} 50%{ transform:scale(1.4)} }

  /* Compact (icon-only) when narrow */
  .ddc-toolbar.compact .ddc-t-btn .label{ display:none; }
  /* Super-narrow: stack rows */
  @media (max-width: 840px){
    .ddc-toolbar{ grid-template-columns: 1fr; row-gap: 10px; }
    .ddc-toolbar .ddc-t-sep{ display:none; }
    .ddc-toolbar > .ddc-t-group{ justify-self: stretch; }
  }`;
    this.shadowRoot.appendChild(s);
  } catch (e) {
    console.warn('Toolbar style inject failed', e);
  }
}




  /* -------------------- Settings Dashboard styling -------------------- */


_ensureSettingsStyles_() {
  if (this.shadowRoot.querySelector('#ddc-settings-styles')) return;
  const style = document.createElement('style');
  style.id = 'ddc-settings-styles';
  style.textContent = `
  .dialog.modern { max-width: 1920px; width: min(92vw, 1080px); border-radius: 14px; overflow: hidden; }
  .dlg-head { display:flex; justify-content:space-between; align-items:center; padding:14px 18px; background:var(--primary-color); color:#fff; }
  .dlg-head h3 { margin:0; font-size:1.1rem; font-weight:700; }
  .icon-btn { border:0; background:transparent; color:inherit; cursor:pointer; display:grid; place-items:center; }
  .settings-body { display:grid; gap:16px; padding:16px; max-height:70vh; overflow:auto; grid-template-columns: 1fr; }
  @media (min-width: 720px){ .settings-body { grid-template-columns: 1fr 1fr; } }
  .card { background:var(--ha-card-background, #fff); border-radius:12px; box-shadow:0 1px 6px rgba(0,0,0,.08); padding:12px 14px; display:flex; flex-direction:column; gap:10px; }
  .card h4 { margin:0; font-size:1rem; font-weight:700; color:var(--primary-text-color); }
  .row { display:flex; align-items:center; gap:12px; }
  .row label { flex:1; font-size:.95rem; }
  .row input[type="text"], .row input[type="number"], .row input[type="password"], .row select { flex:1; padding:8px; border:1px solid var(--divider-color, rgba(0,0,0,.2)); border-radius:8px; background:var(--card-background-color, #fff); }
  .range-wrap { display:flex; align-items:center; gap:12px; }
  .range-wrap input[type="range"] { flex:1; }
  .range-wrap output { width:64px; text-align:right; color:var(--secondary-text-color); font-weight:600; }
  .chips { display:flex; gap:8px; flex-wrap:wrap; }
  .chip { border:1px solid var(--divider-color, rgba(0,0,0,.25)); padding:6px 10px; border-radius:999px; background:transparent; cursor:pointer; font-size:.9rem; }
  .chip[aria-pressed="true"] { background:var(--primary-color); color:#fff; border-color:transparent; }
  .preview { border:1px dashed var(--divider-color, rgba(0,0,0,.25)); border-radius:10px; padding:10px; }
  /* ---- Grid demo ---- */
  .grid-demo{
    --g: 100px;                               /* cell size injected via JS */
    --line-minor: rgba(255,255,255,.10);
    --line-major: rgba(255,255,255,.22);
    --bg-fade   : linear-gradient(180deg, transparent 0%, rgba(0,0,0,.04) 100%);

    position: relative;
    height: 180px;
    border-radius: 14px;
    border: 1px solid var(--divider-color, rgba(0,0,0,.18));
    overflow: hidden;
    background:
      /* subtle base */
      var(--bg-fade),
      /* major lines every 5 cells (thicker) - horizontal */
      repeating-linear-gradient(
        to bottom,
        var(--line-major) 0 2px,
        transparent 2px calc(var(--g) * 5)
      ),
      /* major lines every 5 cells (thicker) - vertical */
      repeating-linear-gradient(
        to right,
        var(--line-major) 0 2px,
        transparent 2px calc(var(--g) * 5)
      ),
      /* minor lines each cell - horizontal */
      repeating-linear-gradient(
        to bottom,
        var(--line-minor) 0 1px,
        transparent 1px var(--g)
      ),
      /* minor lines each cell - vertical */
      repeating-linear-gradient(
        to right,
        var(--line-minor) 0 1px,
        transparent 1px var(--g)
      );
    background-color: rgba(0,0,0,.02);
  }

  .grid-meta-badge{
    position: absolute; top: 8px; right: 8px;
    padding: 6px 10px;
    background: color-mix(in oklab, var(--ha-card-background, #111) 80%, transparent);
    border: 1px solid var(--divider-color, rgba(0,0,0,.24));
    border-radius: 999px;
    font-size: .86rem;
    letter-spacing:.2px;
    display:flex; align-items:center; gap:8px;
    backdrop-filter: blur(4px);
    pointer-events:none;
  }

    /* --- NEW nicer headers / captions / swatches / tooltips --- */

    .caption { margin:0 0 8px 0; color:var(--secondary-text-color); font-size:.9rem; }

    .swatches { display:flex; gap:8px; flex-wrap:wrap; }
    /* Make swatches more obvious as clickable targets by thickening their border */
    .swatch { width:28px; height:28px; border-radius:6px; border:2px solid rgba(0,0,0,.25); cursor:pointer; position:relative; }
    .swatch[aria-pressed="true"]::after { content:""; position:absolute; inset:-3px; border:2px solid var(--primary-color); border-radius:8px; }

    .inline-help { display:inline-flex; align-items:center; gap:6px; color:var(--secondary-text-color); font-size:.9rem; }
    .inline-help ha-icon { opacity:.8; }

    .input-file { display:flex; gap:10px; align-items:center; }
    .input-file input[type="file"] { display:none; }
    .input-file .file-btn { border:1px solid var(--divider-color,rgba(0,0,0,.25)); border-radius:8px; padding:8px 12px; cursor:pointer; background:var(--ha-card-background,#fff); }
    .thumb { width:64px; height:42px; border-radius:6px; background-size:cover; background-position:center; border:1px solid rgba(0,0,0,.12); }

    .divider { height:1px; background:var(--divider-color, rgba(0,0,0,.12)); margin:8px 0; opacity:.7; }

    .section-head { display:flex; align-items:center; gap:8px; margin:0 0 8px 0; padding-bottom:6px; border-bottom:1px solid var(--divider-color, rgba(0,0,0,.12)); }
    .section-head ha-icon { opacity:.9; }
    .setting { display:flex; flex-direction:column; gap:6px; margin:8px 0; }
    .setting .row { display:flex; align-items:center; gap:12px; }
    .setting .title { display:flex; align-items:center; gap:8px; min-width:220px; }
    .setting .title ha-icon { opacity:.9; }
    .setting .control { display:flex; align-items:center; gap:10px; flex:1; }
    .setting .hint { margin-left:32px; color:var(--secondary-text-color); font-size:.88rem; line-height:1.35; }
    .setting .suffix { opacity:.6; margin-left:4px; }
    .range-wrap { display:flex; align-items:center; gap:12px; flex:1; }
    .range-wrap output { width:64px; text-align:right; color:var(--secondary-text-color); font-weight:600; }

    /* --- Tabs manager UI --- */
    .tabs-card .tab-row { display:flex; align-items:center; gap:10px; padding:6px 0; border-bottom:1px solid var(--divider-color, rgba(0,0,0,.08)); }
    .tabs-card .tab-row:last-child { border-bottom:0; }
    .tabs-card .tab-name { flex:1; display:flex; align-items:center; gap:8px; }
    .tabs-card .tab-name input { flex:1; padding:6px 8px; border:1px solid var(--divider-color, rgba(0,0,0,.25)); border-radius:8px; background:var(--ha-card-background, #fff); }
    .tabs-card .tab-actions { display:flex; align-items:center; gap:8px; }
    .icon-btn.danger { color: var(--error-color, #b00020); }

    /* gradient swatches */
    .gradients { display:flex; gap:8px; flex-wrap:wrap; }
    .gradient { width:44px; height:28px; border-radius:8px; border:2px solid rgba(0,0,0,.25); cursor:pointer; position:relative; }
    .gradient[aria-pressed="true"]::after { content:""; position:absolute; inset:-3px; border:2px solid var(--primary-color); border-radius:10px; }

    /* Section hierarchy */
    .section-head {
      display:flex; align-items:center; gap:10px; margin:6px 0 6px;
    }
    .section-head ha-icon { opacity:.85; }
    .section-head h4 {
      margin:0;
      font-size:1.1rem;          /* larger than setting labels */
      font-weight:700;
      letter-spacing:.2px;
    }

    /* Setting rows */
    .setting { padding:10px 0; }
    .setting .row {
      display:flex; align-items:center; gap:14px;
    }
    .setting .title {
      flex:0 0 240px;            /* left column width */
      display:flex; align-items:center; gap:8px;
      font-weight:600;
    }
    .setting .title label, .setting .title span { font-size:.98rem; }
    .setting .control { flex:1; display:flex; align-items:center; gap:10px; }

    /* Hints and captions */
    .caption { margin:0 0 4px; color:var(--secondary-text-color); font-size:.92rem; }
    .hint    { margin:6px 0 0;  color:var(--secondary-text-color); font-size:.88rem; }

    /* Dividers */
    .divider {
      height:1px;
      background:linear-gradient(
        to right,
        transparent,
        var(--divider-color, rgba(0,0,0,.12)),
        transparent
      );
      margin:12px 0;
    }

    /* Inputs */
    /* Inputs and selects within the modern dialog now have a more prominent outline for better visibility. */
    .modern select,
    .modern input[type="text"],
    .modern input[type="number"],
    .modern input[type="password"] {
      padding:8px 10px;
      border:2px solid var(--divider-color,rgba(0,0,0,.25));
      border-radius:10px;
      background:var(--ha-card-background,#fff);
    }

    /* Style for the "Add tab" text field to make it stand out */
    #ddc-new-tab-name {
      flex:1;
      padding:8px 10px;
      border:2px solid var(--primary-color);
      border-radius:10px;
      background:var(--ha-card-background,#fff);
      font-weight:600;
    }

    /* Style the manual grid size input alongside the slider */
    .range-wrap input[type="number"] {
      width:80px;
      padding:6px 8px;
      border:1px solid var(--divider-color, rgba(0,0,0,.25));
      border-radius:8px;
      background:var(--card-background-color, #fff);
      text-align:center;
    }

    /* Harmonise the appearance of background configuration sections (image, particles, YouTube) */
    .setting[data-bg-section] .stack {
      display:flex;
      flex-direction:column;
      gap:10px;
    }
    .setting[data-bg-section] .stack input[type="text"],
    .setting[data-bg-section] .stack input[type="number"],
    .setting[data-bg-section] .stack select {
      width:100%;
      padding:8px 10px;
      border:2px solid var(--divider-color, rgba(0,0,0,.25));
      border-radius:10px;
      background:var(--ha-card-background,#fff);
    }

    /* Slider + output */
    .range-wrap { display:flex; align-items:center; gap:10px; width:100%; }
    .range-wrap input[type="range"] { flex:1; }
    .range-wrap output {
      min-width:64px; text-align:right; font-variant-numeric:tabular-nums;
      color:var(--secondary-text-color);
    }

    /* Chips row spacing */
    .chips { display:flex; gap:8px; flex-wrap:wrap; }

    /* ----- Hard category separators ----- */
    section.card {
      border-bottom: 2px solid var(--divider-strong, rgba(255,255,255,.15));
      margin-bottom: 20px;
      padding-bottom: 24px;
    }

    section.card:last-of-type {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    section.card:hover > .section-head h4 {
      color: var(--accent-color, var(--primary-color));
      transition: color .25s ease;
    }

    .section-head {
      background: linear-gradient(90deg, var(--accent-color, #2563eb) 0%, transparent 70%);
      padding: 4px 10px;
      border-radius: 6px;
    }
    .section-head h4 {
      color: #fff;
    }

    /* Tighten the empty space after Background image and between sections */
    section.card .setting:last-child { margin-bottom: 0; padding-bottom: 0; }
    section.card { margin-bottom: 16px; padding-bottom: 20px; }
    .section-head { margin-top: 4px; }

    /* Place Tabs section right after Appearance without big gaps */
    .tabs-card { margin-top: 8px; }

    /* File inputs: clearer Upload/Delete buttons */
    .input-file { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
    .file-btn, #ddc-clear-bg {
      height: 36px; padding: 0 14px; border-radius: 10px; font-weight: 700;
      border: 1px solid transparent; cursor: pointer;
    }
    .file-btn {
      background: var(--primary-color); color: var(--text-primary-color, #fff);
    }
    #ddc-clear-bg {
      background: var(--error-color, #ef4444); color:#fff;
    }
    #ddc-clear-bg:hover { filter: brightness(1.05); }
    .file-btn:hover { filter: brightness(1.05); }

    /* BG option controls */
    .bg-opts { display:grid; grid-template-columns: 220px 1fr; gap:10px 12px; margin-top:8px; }
    .bg-opts label { display:flex; align-items:center; gap:8px; font-weight:600; }
    .bg-opts select, .bg-opts input[type="range"] {
      width: 100%; padding:8px 10px; border:1px solid var(--divider-color,rgba(0,0,0,.25));
      border-radius:10px; background:var(--ha-card-background,#1e1e1e);
    }
    .bg-opts output { min-width:52px; text-align:right; color:var(--secondary-text-color); }

    /* Background image preview thumb */
    .thumb {
      width: 72px; height: 42px; border-radius: 8px;
      background-size: cover; background-position: center center;
      border: 1px solid var(--divider-color, rgba(0,0,0,.25));
    }

    /* ---- Render the background image via a pseudo element so opacity doesn't fade content ---- */
    .ddc-canvas { position: relative; z-index: 0; }
    .ddc-canvas::before{
      content:""; position:absolute; inset:0; z-index:0; pointer-events:none;
      background-image: var(--ddc-bg-image, none);
      background-repeat: var(--ddc-bg-repeat, no-repeat);
      background-size: var(--ddc-bg-size, cover);
      background-position: var(--ddc-bg-position, center center);
      background-attachment: var(--ddc-bg-attachment, scroll);
      opacity: var(--ddc-bg-opacity, 1);
    }
    .ddc-canvas > * { position: relative; z-index: 1; }

    /* Tabs manager polish */
    .tab-row {
      display:flex; align-items:center; gap:10px;
      margin-bottom:10px; padding:8px;
      border:1px solid var(--divider-color, rgba(255,255,255,.12));
      border-radius:8px; background:var(--ha-card-background, rgba(255,255,255,.04));
    }
    .tab-row:hover { background: var(--ha-card-background, rgba(255,255,255,.08)); }

    .tab-name { flex:1; display:flex; align-items:center; gap:8px; }
    .tab-name input {
      background: var(--ha-card-background, #1f1f1f);
      border:1px solid var(--divider-color, rgba(255,255,255,.12));
      color: var(--primary-text-color);
      padding:6px 8px; border-radius:6px;
    }

    .tab-icon-wrap { position:relative; display:flex; align-items:center; gap:6px; }
    .tab-icon-wrap ha-icon { opacity:.9; }

    .mode-chips {
      display:flex; gap:6px;
    }
    .mode-chips .chip {
      border-radius:10px; padding:4px 8px; font-weight:600;
      background: var(--ha-card-background, #222); border:1px solid var(--divider-color, rgba(255,255,255,.12));
    }
    .mode-chips .chip[aria-pressed="true"] {
      background: var(--primary-color); color: #fff; border-color: transparent;
    }

  .grid-meta-badge ha-icon{ opacity:.9; }
  .color-pair { display:flex; gap:8px; }
  .color-pair input[type="color"] { width:44px; height:36px; border:0; background:transparent; padding:0; }
  .footer { display:flex; justify-content:flex-end; gap:10px; padding:12px 16px; border-top:1px solid var(--divider-color, rgba(0,0,0,.12)); }
  .btn.primary { background:var(--primary-color); color:#fff; border:0; border-radius:8px; padding:8px 16px; font-weight:600; cursor:pointer; }
  .btn.secondary { background:transparent; border:1px solid var(--divider-color, rgba(0,0,0,.25)); border-radius:8px; padding:8px 16px; cursor:pointer; }
  `;
  this.shadowRoot.appendChild(style);
}

/* -------------------- HA chrome (header/sidebar) visibility -------------------- */
_setHeaderVisible_(show = true) {
  try {
    // 1) Hide the header containers across HA variants
    const headers = this._deepQueryAll?.(
      'app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar'
    ) || [];
    headers.forEach(el => {
      if (!el) return;
      if (el.dataset.ddcPrevDisplayHeader === undefined) {
        el.dataset.ddcPrevDisplayHeader = el.style.display || '';
        el.dataset.ddcPrevMinH = el.style.minHeight || '';
        el.dataset.ddcPrevH = el.style.height || '';
        el.dataset.ddcPrevVis = el.style.visibility || '';
      }
      if (show) {
        el.style.display = el.dataset.ddcPrevDisplayHeader || '';
        el.style.minHeight = el.dataset.ddcPrevMinH || '';
        el.style.height = el.dataset.ddcPrevH || '';
        el.style.visibility = el.dataset.ddcPrevVis || '';
        el.removeAttribute('hidden');
      } else {
        el.style.display = 'none';
        el.style.minHeight = '0';
        el.style.height = '0';
        el.style.visibility = 'hidden';
        el.setAttribute('hidden', '');
      }
    });

    // 2) Explicitly hide the action items (Search / Assist / Edit menu)
    //    Belt & suspenders: catch both slot-based and direct buttons/menus.
    const actionNodes = this._deepQueryAll?.(
      '[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'
    ) || [];
    actionNodes.forEach(el => {
      if (!el) return;
      if (el.dataset.ddcPrevDisplayAction === undefined) {
        el.dataset.ddcPrevDisplayAction = el.style.display || '';
        el.dataset.ddcPrevVisAction = el.style.visibility || '';
      }
      if (show) {
        el.style.display = el.dataset.ddcPrevDisplayAction || '';
        el.style.visibility = el.dataset.ddcPrevVisAction || '';
      } else {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
      }
    });

    // 3) Adjust CSS variables so layout doesn't reserve header space
    //    Include an extra var some themes use, and collapse content padding.
    const containers = [
      // common layout hosts that own the header height vars/padding
      ...(this._deepQueryAll?.('ha-app-layout') || []),
      ...(this._deepQueryAll?.('home-assistant-main') || []),
      document.documentElement,
      document.body
    ].filter(Boolean);

    containers.forEach(host => {
      if (!host) return;
      if (host.dataset.ddcPrevHdrVars === undefined) {
        host.dataset.ddcPrevHdrVars = JSON.stringify({
          mdc: host.style.getPropertyValue('--mdc-top-app-bar-height') || '',
          app: host.style.getPropertyValue('--app-header-height') || '',
          hdr: host.style.getPropertyValue('--header-height') || '',
          hah: host.style.getPropertyValue('--ha-header-height') || '',
          pad: (host.style && (host.style.paddingTop || '')) || ''
        });
      }
      if (show) {
        try {
          const prev = JSON.parse(host.dataset.ddcPrevHdrVars || '{}');
          host.style.setProperty('--mdc-top-app-bar-height', prev.mdc || '');
          host.style.setProperty('--app-header-height', prev.app || '');
          host.style.setProperty('--header-height', prev.hdr || '');
          host.style.setProperty('--ha-header-height', prev.hah || '');
          if (prev.pad !== undefined) host.style.paddingTop = prev.pad || '';
        } catch {}
      } else {
        host.style.setProperty('--mdc-top-app-bar-height', '0px');
        host.style.setProperty('--app-header-height', '0px');
        host.style.setProperty('--header-height', '0px');
        host.style.setProperty('--ha-header-height', '0px');
        // collapse any padding that might be applied because of header height
        try { host.style.paddingTop = '0px'; } catch {}
      }
    });

    // 4) Some builds keep content under a #contentContainer; collapse its padding too
    const contentContainers = this._deepQueryAll?.('#contentContainer') || [];
    contentContainers.forEach(cc => {
      if (!cc) return;
      if (cc.dataset.ddcPrevContentPadTop === undefined) {
        cc.dataset.ddcPrevContentPadTop = (cc.style && (cc.style.paddingTop || '')) || '';
      }
      cc.style.paddingTop = show ? (cc.dataset.ddcPrevContentPadTop || '') : '0px';
    });

  } catch {}
}

_setSidebarVisible_(show=true) {
  try {
    const sidebars = this._deepQueryAll?.('ha-sidebar') || [];
    sidebars.forEach(el => {
      if (!el) return;
      if (el.dataset.ddcPrevDisplaySidebar === undefined) {
        el.dataset.ddcPrevDisplaySidebar = el.style.display || '';
      }
      el.style.display = show ? el.dataset.ddcPrevDisplaySidebar || '' : 'none';
    });
    const drawers = this._deepQueryAll?.('ha-drawer') || [];
    drawers.forEach(el => {
      if (!el) return;
      if (el.dataset.ddcPrevDrawerWidth === undefined) {
        el.dataset.ddcPrevDrawerWidth = el.style.getPropertyValue('--mdc-drawer-width') || '';
      }
      if (show) {
        el.style.setProperty('--mdc-drawer-width', el.dataset.ddcPrevDrawerWidth || '');
      } else {
        el.style.setProperty('--mdc-drawer-width', '0px');
      }
      try { if (!show && typeof el.close === 'function') el.close(); } catch {}
    });
  } catch {}
}

_applyHaChromeVisibility_() {
  try {
    const showAll = !!this.editMode || this._isInHaEditorPreview?.();
    // header
    if (showAll || !this.hideHaHeader) this._setHeaderVisible_(true);
    else this._setHeaderVisible_(false);
    // sidebar
    if (showAll || !this.hideHaSidebar) this._setSidebarVisible_(true);
    else this._setSidebarVisible_(false);

  } catch {}
}




_applyBackgroundImageFromConfig() {
// iOS safety: skip applying huge data URLs that can crash WKWebView
try {
  const ua = navigator.userAgent || '';
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  if (isIOS && bg && typeof bg.src === 'string' && bg.src.startsWith('data:') && bg.src.length > 300000) {
    console.warn('[drag-and-drop-card] Skipping large inline background on iOS for stability.');
    return;
  }
} catch (_) {}
  const cfg = this._config || {};
  const bg = cfg.background_image || cfg.bg_image || null;
  const cont = this.cardContainer;
  if (!cont) return;

  if (bg && bg.src) {
    const url = String(bg.src).trim();
    const repeat = (bg.repeat === true || bg.repeat === 'repeat') ? 'repeat' : 'no-repeat';
    const opacity = Math.max(0, Math.min(1, Number(bg.opacity ?? 1)));
    const size = bg.size || 'cover';
    const position = bg.position || 'center center';
    const attachment = bg.attachment || 'scroll';
    const filter = bg.filter || 'none';

    cont.style.setProperty('--ddc-bg-image', url ? `url("${url.replace(/"/g, '\"')}")` : 'none');
    cont.style.setProperty('--ddc-bg-repeat', repeat);
    cont.style.setProperty('--ddc-bg-opacity', String(opacity));
    cont.style.setProperty('--ddc-bg-size', size);
    cont.style.setProperty('--ddc-bg-position', position);
    cont.style.setProperty('--ddc-bg-attachment', attachment);
    cont.style.setProperty('--ddc-bg-filter', filter);
    cont.classList.add('has-bg-image');
  } else {
    cont.style.removeProperty('--ddc-bg-image');
    cont.style.removeProperty('--ddc-bg-repeat');
    cont.style.removeProperty('--ddc-bg-opacity');
    cont.style.removeProperty('--ddc-bg-size');
    cont.style.removeProperty('--ddc-bg-position');
    cont.style.removeProperty('--ddc-bg-attachment');
    cont.style.removeProperty('--ddc-bg-filter');
    cont.classList.remove('has-bg-image');
  }
}

/* ========================================================================== */
/* Unified background driver (image | particles | youtube | none)             */
/* ========================================================================== */

_applyBackgroundFromConfig() {
  try {
    const mode = (this._config?.background_mode)
      || (this._config?.background_image?.src ? 'image' : 'none');

    // Always clear dynamic layers first
    this._destroyParticles_?.();
    this._destroyYouTube_?.();

    // Clear CSS image if we’re not in image mode
    if (mode !== 'image') {
      const cont = this.cardContainer;
      if (cont) {
        cont.style.removeProperty('--ddc-bg-image');
        cont.style.removeProperty('--ddc-bg-repeat');
        cont.style.removeProperty('--ddc-bg-opacity');
        cont.style.removeProperty('--ddc-bg-size');
        cont.style.removeProperty('--ddc-bg-position');
        cont.style.removeProperty('--ddc-bg-attachment');
        cont.style.removeProperty('--ddc-bg-filter');
        cont.classList.remove('has-bg-image');
      }
    }

    // Route to the correct backend
    if (mode === 'image') {
      this._applyBackgroundImageFromConfig?.();
      return;
    }

    if (mode === 'particles') {
      const cfg = this._config?.background_particles || {};
      this._attachParticlesBackground_(cfg);
      return;
    }

    if (mode === 'youtube') {
      const cfg = this._config?.background_youtube || {};
      this._attachYouTubeBackground_(cfg);
      return;
    }

    // mode === 'none'
    // nothing to do

  } catch (e) {
    console.warn('[drag-and-drop-card] _applyBackgroundFromConfig failed:', e);
  }
}

_ensureBgHost_() {
  const cont = this.cardContainer;
  if (!cont) return null;
  let host = cont.querySelector('#ddcBgHost');
  if (!host) {
    host = document.createElement('div');
    host.className = 'ddc-bg-host';
    host.id = 'ddcBgHost';
    host.setAttribute('aria-hidden','true');
    cont.prepend(host);
  } else {
    // clear any previous dynamic children
    host.innerHTML = '';
  }
  return host;
}

/* ---------- tiny loader with cache ---------- */
async _loadScriptOnce_(src) {
  if (!src) throw new Error('script src required');
  if (!this.__scriptCache) this.__scriptCache = new Map();
  if (this.__scriptCache.has(src)) return this.__scriptCache.get(src);

  const p = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => resolve(true);
    s.onerror = () => reject(new Error('failed to load ' + src));
    document.head.appendChild(s);
  });
  this.__scriptCache.set(src, p);
  return p;
}

/* ========================================================================== */
/* Particles.js                                                               */
/* ========================================================================== */

// Pick the right root for queries (Lit's renderRoot > shadowRoot > self)
_getRenderRoot_() {
  return this.renderRoot || this.shadowRoot || this;
}

// Temporarily make document.getElementById look into our shadow root
_withScopedDocument_(fn) {
  const root = this._getRenderRoot_();
  // If we’re not in shadow, nothing to scope
  if (!root || root === document || !root.querySelector) return fn();

  const d = document;
  const originalGetById = d.getElementById.bind(d);
  const originalQuerySelector = d.querySelector ? d.querySelector.bind(d) : null;

  d.getElementById = (id) => {
    try {
      const safe = (window.CSS && CSS.escape) ? CSS.escape(String(id)) : String(id);
      return root.querySelector('#' + safe) || originalGetById(id);
    } catch { return originalGetById(id); }
  };
  if (originalQuerySelector) {
    d.querySelector = (sel) => {
      try { return root.querySelector(sel) || originalQuerySelector(sel); }
      catch { return originalQuerySelector(sel); }
    };
  }
  try { return fn(); }
  finally {
    d.getElementById = originalGetById;
    if (originalQuerySelector) d.querySelector = originalQuerySelector;
  }
}



async _ensureParticles_() {
  if (window.particlesJS) return true;
  if (!this.__particlesLoadPromise) {
    const loadScript = (src) => new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = () => resolve(true);
      s.onerror = () => reject(new Error('Failed to load ' + src));
      document.head.appendChild(s);
    });
    this.__particlesLoadPromise = loadScript('/local/particles.min.js')
      .catch(() => loadScript('https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'))
      .then(() => !!window.particlesJS)
      .catch(() => false);
  }
  return this.__particlesLoadPromise;
}

_attachParticlesBackground_(cfg = {}) {
  const host = this._ensureBgHost_?.();
  if (!host) return;

  // Destroy any existing instance and ensure an empty mount each time
  try { this._destroyParticles_?.(); } catch {}
  host.innerHTML = '';
  const el = document.createElement('div');
  el.id = 'ddcParticles';
  el.className = 'particles-js';
  el.style.position = 'absolute';
  el.style.inset = '0';
  host.appendChild(el);

  const DEFAULTS = {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.4 },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.3, width: 1 },
      move: { enable: true, speed: 2, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
      modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  };

  const allowPointer = !!cfg.pointer_events;
  const conf = cfg.config || JSON.parse(JSON.stringify(DEFAULTS)); // clone defaults

  if (allowPointer) {
    conf.interactivity.events.onhover = { enable: true, mode: 'repulse' };
    conf.interactivity.events.onclick = { enable: true, mode: 'push' };
    host.style.pointerEvents = 'auto';
  } else {
    host.style.pointerEvents = 'none';
  }

  const apply = async () => {
    const ok = await this._ensureParticles_?.();
    if (!ok || !window.particlesJS) return;

    // Wait a frame to ensure <div id="ddcParticles"> is fully in the shadow DOM
    await (typeof requestAnimationFrame === 'function'
      ? new Promise(r => requestAnimationFrame(() => r()))
      : Promise.resolve());

    await (typeof requestAnimationFrame === 'function'
      ? new Promise(r => requestAnimationFrame(() => r()))
      : Promise.resolve());

    // If a config URL is provided, fetch it ourselves and call the synchronous init.
    // Using .load() breaks in Shadow DOM because it resolves later (outside our scoped document).
    // If a config URL is provided, fetch it ourselves and init synchronously.
    // Using .load() breaks in Shadow DOM because it resolves later (outside our scoped document).
    let finalConf = conf;
    if (cfg.config_url) {
      try {
        const res = await fetch(cfg.config_url, { cache: 'no-store' });
        finalConf = await res.json();
      } catch (err) {
        console.warn('[drag-and-drop-card] Failed to fetch particles config; falling back to defaults', err);
        finalConf = conf;
      }
    }


    // Scope getElementById to the shadow root just for the *synchronous* init call.
    this._withScopedDocument_(() => {
      if (!Array.isArray(window.pJSDom)) { try { window.pJSDom = []; } catch {} }
      window.particlesJS('ddcParticles', finalConf);
    });

    // Keep a handle for cleanup
    if (Array.isArray(window.pJSDom) && window.pJSDom.length) {
      this.__particlesInst = window.pJSDom[window.pJSDom.length - 1];
    }
  };

  apply();
  this.__particlesHost = host;
}


_destroyParticles_() {
  try {
    if (!Array.isArray(window.pJSDom)) {
      window.pJSDom = [];
    }
    if (window.pJSDom.length) {
      window.pJSDom.forEach(inst => {
        try { inst.pJS?.fn?.vendors?.destroy?.(); } catch {}
        try { inst.pJS?.fn?.vendors?.destroypJS?.(); } catch {}
      });
      window.pJSDom.length = 0;
    }
  } catch {}
  if (this.__particlesHost) this.__particlesHost.innerHTML = '';
  this.__particlesHost = null;
  this.__particlesInst = null;
}

/* ========================================================================== */
/* YouTube video background (muted, looping, “cover”)                         */
/* ========================================================================== */

_parseYouTubeId_(input) {
  if (!input) return null;
  const s = String(input).trim();
  const m =
    s.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/) ||
    s.match(/^([A-Za-z0-9_-]{11})$/);
  return m ? m[1] : null;
}

async _ensureYouTube_() {
  if (window.YT?.Player) return true;
  if (!this.__ytReadyPromise) {
    this.__ytReadyPromise = new Promise((resolve) => {
      const ready = () => resolve(true);
      if (window.YT?.Player) return ready();
      window.onYouTubeIframeAPIReady = ready;
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      s.async = true; s.onerror = () => resolve(false);
      document.head.appendChild(s);
    });
  }
  return this.__ytReadyPromise;
}

_attachYouTubeIframeDirect_(wrap, videoId, { start, end, mute = true, loop = true } = {}) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: mute ? '1' : '0',
    controls: '0',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    iv_load_policy: '3',
    loop: loop ? '1' : '0'
  });
  if (loop) params.set('playlist', videoId);
  if (Number.isFinite(start)) params.set('start', String(start));
  if (Number.isFinite(end))   params.set('end',   String(end));

  const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; fullscreen');
  iframe.setAttribute('allowfullscreen', 'true');
  iframe.style.position = 'absolute';
  iframe.style.inset = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  wrap.appendChild(iframe);
  this.__ytWrap = wrap;
  this._layoutYtBackground_?.();
}

_attachYouTubeBackground_(cfg = {}) {
  this.__ytSize = (cfg.size || 'cover');
  this.__ytPosition = (cfg.position || 'center');
  this.__ytOpacity = (cfg.opacity != null ? Math.max(0, Math.min(1, Number(cfg.opacity))) : 1);
  this.__ytAttachment = (cfg.attachment || 'scroll');
  // map position keywords to anchors
  const posStr = String(this.__ytPosition).toLowerCase();
  let ax = 0.5, ay = 0.5;
  if (posStr.includes('left')) ax = 0.0;
  else if (posStr.includes('right')) ax = 1.0;
  if (posStr.includes('top')) ay = 0.0;
  else if (posStr.includes('bottom')) ay = 1.0;
  if (posStr === 'center' || posStr === 'centre' || posStr === 'middle') { ax = 0.5; ay = 0.5; }
  this.__ytAx = ax; this.__ytAy = ay;

  const host = this._ensureBgHost_();
  if (!host) return;

  const videoId = this._parseYouTubeId_(cfg.video_id || cfg.url);
  if (!videoId) { console.warn('[drag-and-drop-card] No YouTube video id'); return; }

  // wrapper we can size/center for “cover”
  const wrap = document.createElement('div');
  wrap.className = 'yt-bg';
  // Honour the attachment setting: when "fixed" the video should stay put
  // relative to the viewport rather than scrolling with the card.  For
  // other values we fall back to absolute positioning within the card
  // container.  Positioning and sizing of the actual iframe will still
  // be handled in _layoutYtBackground_.
  if (this.__ytAttachment === 'fixed') {
    wrap.style.position = 'fixed';
    wrap.style.left = '0';
    wrap.style.top = '0';
    wrap.style.width = '100%';
    wrap.style.height = '100%';
  } else {
    wrap.style.position = 'absolute';
    wrap.style.inset = '0';
  }
  wrap.style.opacity = String(this.__ytOpacity);
  wrap.style.filter = 'none';
  wrap.style.pointerEvents = 'none';  // don’t swallow drags
  host.appendChild(wrap);

  const frame = document.createElement('div');
  frame.id = 'ddcYtFrame';
  frame.style.position = 'absolute';
  frame.style.left = '0';
  frame.style.top  = '0';
  frame.style.width = '100%';
  frame.style.height= '100%';
  wrap.appendChild(frame);

  const start = Number.isFinite(cfg.start) ? Number(cfg.start) : undefined;
  const end   = Number.isFinite(cfg.end)   ? Number(cfg.end)   : undefined;
  const mute  = cfg.mute !== false;  // default true
  const loop  = cfg.loop !== false;  // default true

  const init = async () => {
    const ok = await this._ensureYouTube_();
    if (!ok || !(window.YT && window.YT.Player)) {
      this._attachYouTubeIframeDirect_(wrap, videoId, { start, end, mute, loop });
      if (!this.__ytResizeObs) {
        this.__ytResizeObs = new ResizeObserver(() => this._layoutYtBackground_?.());
        try { this.__ytResizeObs.observe(this.cardContainer); } catch {}
        window.addEventListener('resize', this.__ytOnWinResize = () => this._layoutYtBackground_?.());
      }
      return;
    }


    // API path (keep your existing code)
      this.__ytPlayer = new window.YT.Player(frame, {
        width: '100%',
        height: '100%',
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          loop: loop ? 1 : 0,
          playlist: loop ? videoId : undefined,
          start: start,
          end: end
        },
      events: {
        onReady: (e) => {
          try {
            if (mute) e.target.mute();
            e.target.playVideo();
          } catch {}
          this._layoutYtBackground_?.();
        },
        onStateChange: (e) => {
          if (e.data === window.YT.PlayerState.ENDED && loop) {
            try {
              const s = Number.isFinite(start) ? start : 0;
              const now = (window.performance && performance.now) ? performance.now() : Date.now();
              if (!this.__ytLastLoopAt || (now - this.__ytLastLoopAt) > 1500) {
                this.__ytLastLoopAt = now;
                e.target.seekTo(s, true);
                e.target.playVideo();
              }
            } catch {}
          }
        }
      }
    });

    if (!this.__ytResizeObs) {
      this.__ytResizeObs = new ResizeObserver(() => this._layoutYtBackground_?.());
      try { this.__ytResizeObs.observe(this.cardContainer); } catch {}
      window.addEventListener('resize', this.__ytOnWinResize = () => this._layoutYtBackground_?.());
    }
  };

  init();

  this.__ytWrap = wrap;
}

_layoutYtBackground_() {  // Fit a 16:9 iframe according to selected size
  try {
    if (!this.__ytWrap) return;
    // In auto size mode the card container’s natural width may be
    // larger than the visible viewport.  When computing the video
    // background dimensions we should use the visible container (the
    // outer scale wrapper) rather than the full card canvas so the
    // video covers the same portion of the screen as in dynamic mode.
    // In other modes we continue to use the card container itself.
    // Prefer the scale wrapper if it exists (both dynamic and auto modes)
    let contEl = this.__scaleOuter || this.cardContainer;
    // First determine the natural (design) size of the card canvas.  These
    // values correspond to the unscaled width and height of the card.  If
    // these are unavailable we fall back to the measured dimensions.
    let natW = 0;
    let natH = 0;
    try {
      natW = parseFloat(this.cardContainer?.style?.width)  || this.cardContainer?.scrollWidth  || this.cardContainer?.offsetWidth  || 0;
      natH = parseFloat(this.cardContainer?.style?.height) || this.cardContainer?.scrollHeight || this.cardContainer?.offsetHeight || 0;
    } catch {}

    // Determine the visible canvas size.  In auto mode this is the size
    // of the scale wrapper (contEl), whereas in dynamic mode we want to
    // treat the canvas as if it had its natural size (so that the video
    // covers the full design area before scaling).  After computing the
    // natural size, the actual on‑screen size will be downscaled via the
    // CSS transform on the card container.
    let cw;
    let ch;
    try {
      const modeName = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
      if (modeName === 'auto') {
        const r = contEl.getBoundingClientRect();
        cw = r.width;
        // Compute scaled height based on the ratio of visible width to natural width.
        if (natW > 0) {
          const scale = Math.min(cw / natW, 1);
          ch = natH * scale;
        } else {
          ch = r.height;
        }
      } else {
        // dynamic mode: treat the canvas as having its natural size.  This
        // will be downscaled by the CSS transform applied to the
        // cardContainer.  Using the natural dimensions ensures the video
        // covers the same area as in auto mode when the design is larger
        // than the viewport.
        cw = natW || contEl.getBoundingClientRect().width;
        ch = natH || contEl.getBoundingClientRect().height;
      }
    } catch {
      // Fallback: use the scale wrapper’s measured dimensions
      const r = contEl.getBoundingClientRect();
      cw = r.width;
      ch = r.height;
    }
    const fixedAttach = (this.__ytAttachment === 'fixed');
    const vw = fixedAttach ? (window.innerWidth  || cw) : cw;
    const vh = fixedAttach ? (window.innerHeight || ch) : ch;

    if (!cw || !ch) return;

    const size = this.__ytSize || 'cover';
    const videoAR = 16/9;
    const contAR  = (fixedAttach ? (vw / vh) : (cw / ch));

    let w, h, left = 0, top = 0;

    if (size === '100% 100%' || size === 'fill' || size === 'stretch'){
      w = (fixedAttach ? vw : cw); h = (fixedAttach ? vh : ch); left = 0; top = 0;
    } else if (size === 'contain'){
      if (contAR > videoAR){
        h = (fixedAttach ? vh : ch); w = (fixedAttach ? vh : ch) * videoAR;
        top = 0; left = (cw - w)/2;
      } else {
        w = (fixedAttach ? vw : cw); h = (fixedAttach ? vw : cw) / videoAR;
        left = 0; top = (ch - h)/2;
      }
    } else { // default 'cover' or 'auto'
      if (contAR > videoAR){
        w = (fixedAttach ? vw : cw); h = (fixedAttach ? vw : cw) / videoAR;
        left = 0; top = (ch - h)/2;
      } else {
        h = (fixedAttach ? vh : ch); w = (fixedAttach ? vh : ch) * videoAR;
        top = 0; left = (cw - w)/2;
      }
    }

    this.__ytWrap.style.overflow = 'hidden';
    const ax = (this.__ytAx != null) ? this.__ytAx : 0.5;
    const ay = (this.__ytAy != null) ? this.__ytAy : 0.5;
    left = ((fixedAttach ? vw : cw) - w) * ax;
    top  = ((fixedAttach ? vh : ch) - h) * ay;
    const el = this.__ytWrap.querySelector('iframe') || this.__ytWrap;
    el.style.width  = `${w}px`;
    el.style.height = `${h}px`;
    el.style.left   = `${left}px`;
    el.style.top    = `${top}px`;
  } catch {}
    }

_destroyYouTube_() {
  try { this.__ytPlayer?.destroy?.(); } catch {}
  this.__ytPlayer = null;

  if (this.__ytResizeObs) {
    try { this.__ytResizeObs.disconnect(); } catch {}
    this.__ytResizeObs = null;
  }
  if (this.__ytOnWinResize) {
    window.removeEventListener('resize', this.__ytOnWinResize);
    this.__ytOnWinResize = null;
  }

  if (this.__ytWrap?.parentNode) this.__ytWrap.parentNode.removeChild(this.__ytWrap);
  this.__ytWrap = null;
}




/**
 * Evaluate an array of visibility conditions against the current hass state.
 * Returns true if the card should be shown. Conditions follow the same
 * structure as Home Assistant’s per‑card visibility settings. Only a subset
 * of condition types are supported: state, numeric_state, screen and user.
 * Unknown condition types are treated as passing.
 *
 * @param {Array} visList Array of condition objects
 * @returns {boolean} true if all conditions evaluate to true, otherwise false
 */
_evaluateVisibility_(visList) {
  try {
    const hass = this.hass || this._hass;
    // If no conditions defined, always visible
    if (!Array.isArray(visList) || visList.length === 0) return true;
    /**
     * Recursively evaluate a single condition or a group of conditions.  The
     * visibility editor supports nested groups (and/or) as well as leaf
     * conditions such as state, numeric_state, screen and user.  Unknown
     * condition types default to passing.
     *
     * @param {Object} cond A visibility condition or group
     * @returns {boolean} true if the condition/group passes
     */
    const evalCond = (cond) => {
      if (!cond || typeof cond !== 'object') return true;
      const type = cond.condition || cond.type || 'state';
      // Group: AND / OR
      if (type === 'and' || type === 'or') {
        const children = Array.isArray(cond.conditions) ? cond.conditions : [];
        // Empty group passes by default
        if (children.length === 0) return true;
        if (type === 'and') {
          return children.every((child) => evalCond(child));
        }
        // type === 'or'
        return children.some((child) => evalCond(child));
      }
      if (type === 'state') {
        const entity = cond.entity;
        if (!entity) return true;
        const stateObj = hass?.states?.[entity];
        if (!stateObj) return false;
        const st = String(stateObj.state ?? '');
        if (cond.state !== undefined) {
          const target = Array.isArray(cond.state) ? cond.state : [cond.state];
          return target.some((v) => String(v) === st);
        }
        if (cond.state_not !== undefined) {
          const target = Array.isArray(cond.state_not) ? cond.state_not : [cond.state_not];
          return !target.some((v) => String(v) === st);
        }
        // No state specified -> pass
        return true;
      }
      if (type === 'numeric_state') {
        const entity = cond.entity;
        if (!entity) return true;
        const stateObj = hass?.states?.[entity];
        if (!stateObj) return false;
        const val = parseFloat(stateObj.state);
        if (isNaN(val)) return false;
        if (cond.above !== undefined && !(val > Number(cond.above))) return false;
        if (cond.below !== undefined && !(val < Number(cond.below))) return false;
        return true;
      }
      if (type === 'screen') {
        const mq = cond.media_query || cond.query;
        if (!mq || typeof mq !== 'string') return true;
        try { return window.matchMedia(mq).matches; } catch { return true; }
      }
      if (type === 'user') {
        const users = Array.isArray(cond.users) ? cond.users : (cond.user ? [cond.user] : []);
        if (!users.length) return true;
        // In Home Assistant, hass.user?.id contains the current user ID
        const uid = hass?.user?.id || hass?.user?.id || null;
        if (!uid) return true;
        return users.includes(uid);
      }
      // Unknown types pass
      return true;
    };
    // Top-level list uses implicit AND semantics (all must pass)
    return visList.every((c) => evalCond(c));
  } catch (e) {
    console.warn('[ddc:visibility] evaluate error', e);
    return true;
  }
}

/**
 * Apply visibility conditions to all card wrappers. When not in edit mode,
 * wrappers with conditions that evaluate to false are hidden by setting
 * display: none; otherwise they are shown. Cards are always visible in
 * edit mode. Call this after setting hass or updating card configs.
 */
_applyVisibility_() {
  try {
    const wraps = this.cardContainer?.children || [];
    // Determine the currently active tab; normalize to an integer
    const currentTabId = this._normalizeTabId(this.activeTab);
    for (const wrap of wraps) {
      if (!wrap || !wrap.firstElementChild) continue;
      // Only apply visibility rules to wrappers belonging to the active tab.
      // Leave wrappers on other tabs untouched so that _applyActiveTab can
      // control their display property.
      const tabId = this._normalizeTabId(wrap.dataset.tabId);
      if (tabId !== currentTabId) {
        continue;
      }
      const cfg = this._extractCardConfig(wrap.firstElementChild) || {};
      const visList = cfg.visibility;
      const shouldShow = this.editMode ? true : this._evaluateVisibility_(visList);
      wrap.style.display = shouldShow ? '' : 'none';
    }
  } catch (e) {
    console.warn('[ddc:visibility] apply error', e);
  }
}


  async _onKeyDown_(e) {
  if (!this.editMode) return;
  if (this._isTypingTarget_(e.target)) return;

  const gs = Number(this.gridSize || 10);
  const step = e.altKey ? 1 : (e.shiftKey ? gs * 5 : gs);

  let dx = 0, dy = 0;
  switch (e.key) {
    case 'ArrowLeft':  dx = -step; break;
    case 'ArrowRight': dx =  step; break;
    case 'ArrowUp':    dy = -step; break;
    case 'ArrowDown':  dy =  step; break;
  }
  if (dx || dy) {
    e.preventDefault();
    this._moveSelectionBy_(dx, dy, { liveSnap: !e.altKey });
    return;
  }

  if (e.key === 'Delete' || e.key === 'Backspace') {
    const sel = this._selection && this._selection.size ? Array.from(this._selection) : [];
    if (!sel.length) return;
    e.preventDefault();
    sel.forEach(el => el.remove());
    this._clearSelection?.();
    this._resizeContainer?.();
    this._queueSave?.('delete-key');
    this._ensurePlaceholderIfEmpty?.();
    return;
  }

  if ((e.ctrlKey || e.metaKey) && (e.key === 'd' || e.key === 'D')) {
    e.preventDefault();
    await this._duplicateSelection_();
    return;
  }

  if ((e.ctrlKey || e.metaKey) && e.key === ']') {
    e.preventDefault();
    (this._selection && this._selection.forEach?.(w => this._adjustZ?.(w, +1)));
    this._queueSave?.('z-up');
    return;
  }
  if ((e.ctrlKey || e.metaKey) && e.key === '[') {
    e.preventDefault();
    (this._selection && this._selection.forEach?.(w => this._adjustZ?.(w, -1)));
    this._queueSave?.('z-down');
    return;
  }
}


  async _duplicateSelection_() {
  if (!this._selection || !this._selection.size) return;
  const sel = Array.from(this._selection);
  for (const t of sel) {
    try {
      const cfg = this._extractCardConfig?.(t.firstElementChild) || {};
      const dup = await this._createCard?.(cfg);
      const w2  = this._makeWrapper?.(dup);
      if (!dup || !w2) continue;

      w2.style.width  = t.style.width;
      w2.style.height = t.style.height;

      const step = Number(this.gridSize || 10);
      const x = (parseFloat(t.getAttribute('data-x')) || 0) + step;
      const y = (parseFloat(t.getAttribute('data-y')) || 0) + step;

      this._setCardPosition?.(w2, x, y);
      // Assign a new z-index that is at least 6 so that the duplicated card
      // always appears above the grid overlay.  Use the higher of the
      // current highest z-index plus one or the baseline of 6.
      const nextZVal = (this._highestZ?.() || 0) + 1;
      w2.style.zIndex = String(Math.max(nextZVal, 6));
        // Preserve the tab assignment from the original wrapper. Without this,
        // duplicates incorrectly end up in the currently active tab instead of
        // inheriting the source tab. See: https://github.com/owner/repo/issues/XYZ
        try {
          const tid = t.dataset?.tabId;
          if (tid) w2.dataset.tabId = tid;
        } catch {}

      this.cardContainer?.appendChild(w2);
        // When duplicating we need to wire up a tab selector for the new
        // wrapper so that the user can reassign it later. Passing the
        // inherited tab ensures the selector defaults correctly.
        try { this._addTabSelectorToChip?.(w2, w2.dataset.tabId); } catch {}
      try { this._rebuildOnce?.(w2.firstElementChild); } catch {}
      try { this._initCardInteract?.(w2); } catch {}
    } catch {}
  }
  try { this._resizeContainer?.(); } catch {}
  try { this._queueSave?.('duplicate'); } catch {}
}


  _moveSelectionBy_(dx, dy, { liveSnap = true } = {}) {
  if (!this._selection || !this._selection.size) return;
  const sel = Array.from(this._selection);

  const gs = Number(this.gridSize || 10);
  const fixed = this._isContainerFixed?.();
  const box = this._getContainerSize?.() || { w: Infinity, h: Infinity };

  const proposed = sel.map(el => {
    const rawX = parseFloat(el.getAttribute('data-x-raw')) || parseFloat(el.getAttribute('data-x')) || 0;
    const rawY = parseFloat(el.getAttribute('data-y-raw')) || parseFloat(el.getAttribute('data-y')) || 0;
    const w = parseFloat(el.style.width)  || el.getBoundingClientRect().width;
    const h = parseFloat(el.style.height) || el.getBoundingClientRect().height;

    let nx = rawX + dx;
    let ny = rawY + dy;

    if (fixed) {
      nx = Math.max(0, Math.min(nx, Math.max(0, box.w - w)));
      ny = Math.max(0, Math.min(ny, Math.max(0, box.h - h)));
    }

    const sx = liveSnap ? Math.round(nx / gs) * gs : nx;
    const sy = liveSnap ? Math.round(ny / gs) * gs : ny;

    return { el, rawX: nx, rawY: ny, snapX: sx, snapY: sy, w, h };
  });

  if (this.disableOverlap && typeof this._pushCardsOutOfTheWay === 'function') {
    try { this._pushCardsOutOfTheWay(proposed, dx, dy, liveSnap, gs); } catch {}
  }

  for (const p of proposed) {
    p.el.setAttribute('data-x-raw', String(p.rawX));
    p.el.setAttribute('data-y-raw', String(p.rawY));
    try { this._setCardPosition?.(p.el, p.snapX, p.snapY); } catch {}
  }
  try { this._resizeContainer?.(); } catch {}
  try { this._queueSave?.('nudge'); } catch {}
}




  /**
   * Synchronise the width of the tabs bar with the visible width of the card
   * container. When the auto-scaling logic shrinks the canvas, the tabs
   * should shrink too rather than spanning the entire host width. This
   * helper queries the scale wrapper (if present) or falls back to the
   * container itself to derive the actual visual width and applies it
   * directly to the tabs bar. For vertical (left) tabs we reset any
   * widths to allow the rail to size naturally.
   */



  _syncTabsWidth_() {
    try {
      // In auto size mode the tabs bar spans the viewport width and
      // should not be recalculated based on the card canvas.  Exit
      // early so we don't inadvertently clamp or expand the bar on
      // tab changes.
      const mode = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
      if (mode === 'auto') {
        return;
      }
      const bar = this.tabsBar;
      if (!bar) return;
      // For left-side tabs the width should not be clamped; reset and bail.
      if (this.tabsPosition === 'left') {
        bar.style.width = '';
        bar.style.maxWidth = '';
        return;
      }
      // Determine the element representing the visible card canvas. We use
      // the bounding box of the card container itself rather than the
      // outer scaling wrapper. The container has the transform applied to
      // it, so getBoundingClientRect() returns the actual visible width.
      const ref = this.cardContainer || this.__scaleOuter;
      if (!ref) return;
      let width = 0;
      try {
        const rect = ref.getBoundingClientRect();
        width = rect && rect.width ? rect.width : 0;
      } catch {}
      // Fallback: if the container hasn't been laid out yet, try the scale
      // wrapper. This can happen very early in the lifecycle.
      if (width <= 0 && this.__scaleOuter && this.__scaleOuter !== ref) {
        try {
          const rect2 = this.__scaleOuter.getBoundingClientRect();
          width = rect2 && rect2.width ? rect2.width : 0;
        } catch {}
      }
      if (width > 0) {
        bar.style.width = `${width}px`;
        bar.style.maxWidth = `${width}px`;
      }
    } catch {}
  }


  _isTypingTarget_(t) {
  if (!t || t === window || t === document) return false;
  const editable = t.closest?.('input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');
  if (!editable) return false;
  const tag = editable.tagName?.toLowerCase?.() || '';
  return tag === 'input' || tag === 'textarea' || editable.hasAttribute?.('contenteditable');
}


  // --- Live reflow + scale while dragging (dynamic mode) ---
  _scheduleReflowAndScale() {
    if (this.__reflowRAF) return;
    this.__reflowRAF = requestAnimationFrame(() => {
      this.__reflowRAF = null;
      try {
        const mode = (this.containerSizeMode || this.container_size_mode || 'dynamic').toLowerCase();
        if (mode === 'dynamic') {
          this._resizeContainer?.(); // recompute content extents so d.h grows live
        }
      } catch {}
      try { const __m = String((this.containerSizeMode||this.container_size_mode||'dynamic')).toLowerCase(); (__m==='auto'?this._applyAutoFillNoScale?.():this._applyAutoScale?.()); } catch {}
    });
  }

  __ddcBindPointerListeners() {
    if (this.__ddcPtrBound) return;
    this.__ddcPtrBound = true;
    // Use bound methods to allow removeEventListener later if needed
    this.__onDDCPointerDown = (ev) => {
      try {
        // Only react to primary button/touch
        if (ev.button !== undefined && ev.button !== 0) return;
        const path = ev.composedPath?.() || [];
        let hit = null;
        for (const n of path) {
          if (n && n.classList && n.classList.contains('card-wrapper')) { hit = n; break; }
        }
        if (!hit) return;
        this.__ddcDragging = true;
        if (this.__scaleOuter) {
          this.__prevOverflow = this.__scaleOuter.style.overflow;
          this.__scaleOuter.style.overflow = 'visible'; // avoid "ceiling" clipping
        }
        this._scheduleReflowAndScale?.();
      } catch {}
    };
    this.__onDDCPointerMove = (ev) => {
      try {
        if (!this.__ddcDragging) return;
        this._scheduleReflowAndScale?.();
      } catch {}
    };
    this.__onDDCPointerUp = (ev) => {
      try {
        if (!this.__ddcDragging) return;
        this.__ddcDragging = false;
        if (this.__scaleOuter) this.__scaleOuter.style.overflow = this.__prevOverflow || '';
        // Final settle
        try { const __m = String((this.containerSizeMode||this.container_size_mode||'dynamic')).toLowerCase(); (__m==='auto'?this._applyAutoFillNoScale?.():this._applyAutoScale?.()); } catch {}
      } catch {}
    };
    // Attach listeners
    try { this.addEventListener('pointerdown', this.__onDDCPointerDown, { passive: true }); } catch {}
    try { this.addEventListener('pointermove', this.__onDDCPointerMove, { passive: true }); } catch {}
    try { window.addEventListener('pointerup', this.__onDDCPointerUp, { passive: true }); } catch {}
    try { window.addEventListener('pointercancel', this.__onDDCPointerUp, { passive: true }); } catch {}
  }

_renderEditToolbar_() {
  // Remove any existing
  this.shadowRoot.querySelectorAll('.ddc-toolbar').forEach(n => n.remove());

  // 🔹 ensure styles exist
  this._ensureToolbarStyles_();  // <— ADD THIS LINE

  const bar = document.createElement('div');
  bar.className = 'ddc-toolbar';

  // --- Left: Build
  const gBuild = document.createElement('div'); gBuild.className = 'ddc-t-group';
  gBuild.append(
    this._mkBtn_('add_card', 'mdi:plus-box', 'Add card (A)', 'primary'),
    this._mkBtn_('snap_toggle', 'mdi:magnet', 'Toggle snap (G)'),
    this._mkBtn_('align_grid', 'mdi:grid', 'Align to grid')
  );

  // --- Middle: Status
  const gStatus = document.createElement('div'); gStatus.className = 'ddc-t-group';
  const pill = document.createElement('div'); pill.className = 'ddc-t-status';
  const dot  = document.createElement('div'); dot.className = 'ddc-t-dot' + (this.__dirty ? ' dirty' : '');
  const txt  = document.createElement('span');
  txt.textContent = this.__dirty ? 'Unsaved changes' : `Saved${this.__lastSavedAt ? ' · ' + this.__lastSavedAt : ''}`;
  pill.append(dot, txt);
  gStatus.appendChild(pill);

  // --- Right: System
  const gSys = document.createElement('div'); gSys.className = 'ddc-t-group';
  gSys.append(
    this._mkBtn_('reload',    'mdi:refresh',             'Reload (R)', 'ghost'),          // ← make subtle
    this._mkBtn_('open_hads', 'mdi:alpha-h-box-outline', 'Open HACS/HADS', 'ghost'),      // ← make subtle
    this._mkBtn_('apply',     'mdi:content-save',        'Apply / Save (S)', 'primary'),
    this._mkBtn_('exit_edit', 'mdi:logout-variant',      'Exit edit (Esc)', 'danger')
  );

  // Layout rows (wrap on narrow)
  const rowL = document.createElement('div'); rowL.className = 'ddc-t-group ddc-t-row'; rowL.append(gBuild);
  const rowM = document.createElement('div'); rowM.className = 'ddc-t-group ddc-t-row'; rowM.append(gStatus);
  const rowR = document.createElement('div'); rowR.className = 'ddc-t-group ddc-t-row'; rowR.append(gSys);

  bar.append(rowL, document.createElement('div')).lastChild.className = 'ddc-t-sep';
  bar.append(rowM, document.createElement('div')).lastChild.className = 'ddc-t-sep';
  bar.append(rowR);

  // Click handling (single delegate)
  bar.addEventListener('click', (e) => {
    const b = e.target.closest('[data-action]'); if (!b) return;
    this._onToolbarAction_(b.dataset.action, { button: b, bar, dot, txt });
  });

  // Attach to shadowRoot
  this.shadowRoot.appendChild(bar);

  // 🔹 Responsive: collapse labels when narrow
  try {
    if (this.__toolbarRO) this.__toolbarRO.disconnect();
    this.__toolbarRO = new ResizeObserver(entries => {
      for (const e of entries) {
        bar.classList.toggle('compact', e.contentRect.width < 980);
      }
    });
    this.__toolbarRO.observe(bar);
  } catch {}

  // Keys while editing (unchanged)
  this.__toolbarKeyHandler = (ev) => {
    if (!this.editMode && !this.isEditing) return;
    if (ev.key === 'a' || ev.key === 'A') return this._onToolbarAction_('add_card');
    if (ev.key === 's' || ev.key === 'S') return this._onToolbarAction_('apply');
    if (ev.key === 'r' || ev.key === 'R') return this._onToolbarAction_('reload');
    if (ev.key === 'g' || ev.key === 'G') return this._onToolbarAction_('snap_toggle');
    if (ev.key === 'Escape')             return this._onToolbarAction_('exit_edit');
  };
  window.addEventListener('keydown', this.__toolbarKeyHandler);
}


// Make it async so we can await inside
async _onToolbarAction_(action, ctx = {}) {


  
  switch (action) {
    
    case 'add_card':
      (this._openAddCardDialog_?.() || this._addNewCard_?.() || this._openEntityPicker_?.());
      break;

    case 'snap_toggle': {
      this.dragLiveSnap = !this.dragLiveSnap;
      this._initInteract?.();
      this._toast_?.(`Live snap ${this.dragLiveSnap ? 'ON' : 'OFF'}`);
      break;
    }

    case 'align_grid':
      this._alignAllToGrid_?.(this.gridSize);
      break;

    case 'reload':
      this._reloadLayout_?.();
      break;

    case 'open_hads':
      (this._openHACS_?.() ||
       window.open('/hacs', '_blank') ||
       window.open('/hacsfiles', '_blank'));
      break;

    case 'apply': {
      // No need for 'async' on done()
      const done = () => {
        this._setDirty_(false);
        if (ctx?.txt) ctx.txt.textContent = `Saved · ${this.__lastSavedAt}`;
        if (ctx?.dot) ctx.dot.classList.remove('dirty','error');
      };
      const fail = () => { if (ctx?.dot) ctx.dot.classList.add('error'); };

      try {
        if (this._saveLayoutNow_) {
          await this._saveLayoutNow_();
        } else if (this._persistThisCardConfigToStorage_) {
          await this._persistThisCardConfigToStorage_();
        } else {
          this._queueSave?.('toolbar-apply', true);
        }
        this.__lastSavedAt = new Date().toLocaleTimeString();
        done();
      } catch (e) {
        console.warn(e);
        fail();
      }
      break;
    }

    case 'exit_edit':
      (this._toggleEditMode?.(false) || this._exitEditMode_?.() || (this.isEditing = false));
      // Clean up hotkeys when leaving
      if (this.__toolbarKeyHandler) {
        window.removeEventListener('keydown', this.__toolbarKeyHandler);
        this.__toolbarKeyHandler = null;
      }
      // 🔹 Clean up the resize observer
      if (this.__toolbarRO) { try { this.__toolbarRO.disconnect(); } catch{} this.__toolbarRO = null; }

      // Optionally remove toolbar
      this.shadowRoot.querySelectorAll('.ddc-toolbar').forEach(n => n.remove());
      break;
  }
}

  _ensureScaleWrapper() {
  const c = this.cardContainer;
  if (!c) return;
  if (this.__scaleOuter && this.__scaleOuter.contains(c)) return;

  // Create a layout box that will reflect the *visual* size
  const outer = document.createElement('div');
  outer.className = 'ddc-scale-outer';
  Object.assign(outer.style, {
    position: 'relative',
    width: '100%',
    overflow: 'hidden'
  });

  // Insert wrapper around the current container
  if (c.parentNode) {
    c.parentNode.insertBefore(outer, c);
    outer.appendChild(c);
  }

  // Make the inner container absolutely positioned and transformable
  Object.assign(c.style, {
    position: 'absolute',
    top: '0',
    left: '0',
    transformOrigin: 'top left'
  });

  this.__scaleOuter = outer;
}


  __booting = false;  

  constructor() {
    super();
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this.__rebuiltCards = new WeakSet();
  }
  // === GRID SELECT PATCH START (fields) ===
  _gridCanvas = null;
  _gridCtx = null;
  _gridCols = 0;
  _gridRows = 0;
  _gridCellSize = 0;
  _gridDown = false;
  _gridStartCol = -1;
  _gridStartRow = -1;
  _gridHoverCol = -1;
  _gridHoverRow = -1;
  _gridCurrCol = -1;
  _gridCurrRow = -1;
  _gridDirty = false;
  _gridRAF = 0;
  _gridTile = null;
  __gridPrevEditMode = undefined;
  __gridRO = null;
  __gridPollT = null;
  // === GRID SELECT PATCH END (fields) ===


  
  // --- DDC patch: deep card_mod detection + one-time rebuild helper ---
  _hasCardModDeep(cfg) {
    try {
      if (!cfg || typeof cfg !== 'object') return false;
      if (cfg.card_mod || cfg.type === 'custom:mod-card') return true;
      if (cfg.card) return this._hasCardModDeep(cfg.card);
      if (Array.isArray(cfg.cards)) {
        for (const c of cfg.cards) { if (this._hasCardModDeep(c)) return true; }
      }
      return false;
    } catch { return false; }
  }
  _rebuildOnce(el) {
    try {
      if (!el) return;
      if (!this.__rebuiltCards) this.__rebuiltCards = new WeakSet();
      if (this.__rebuiltCards.has(el)) return;
      this.__rebuiltCards.add(el);
      // Fire rebuild from the child card so Lovelace/card-mod re-attaches without recreating DDC itself
      el.dispatchEvent(new Event('ll-rebuild', { bubbles: true, composed: true }));
    } catch {}
  }


  // Deep query across shadow roots
  _deepQueryAll(selector, root = document) {
    const results = [];
    const visit = (node) => {
      if (!node) return;
      if (node.querySelectorAll) {
        try {
          node.querySelectorAll(selector).forEach(el => results.push(el));
        } catch {}
      }
      // Recurse into shadow roots
      const treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, null);
      let el = node;
      while (el) {
        const sr = el.shadowRoot;
        if (sr) visit(sr);
        el = treeWalker.nextNode();
      }
    };
    visit(root);
    return results;
  }


  // Keep visible editors (HA sidebar or in-card modal) in sync with current storage_key
  _syncEditorsStorageKey() {
    try {
      const val = this.storageKey || '';
      // Update any open editor input fields for this card
      // We look for our known editor markup within the DOM and set the storage key input.
      const nodes = this._deepQueryAll('#storage_key');
      nodes.forEach((inp) => {
        try {
          if (inp && inp.tagName === 'INPUT') {
            if (inp.value !== val) {
              inp.value = val;
              // Fire input event so editor UIs update their internal state
              inp.dispatchEvent(new Event('input', { bubbles: true }));
              inp.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }
        } catch {}
      });
    } catch {}
  }

  // Inside class DragAndDropCard extends ...
  static _genKey() {
    const id =
      globalThis.crypto?.randomUUID?.() ||
      `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
    return `layout_${id}`;
  }

  // ---------------------------------------------------------------------------
  // Card picker metadata
  //
  // Home Assistant’s Lovelace card picker inspects certain static getters
  // on custom card classes to discover their type, title, description and
  // associated icon.  Without these, the editor may not display the card in
  // its “Add card” dialog.  By providing these properties, we ensure the
  // drag‑and‑drop card is discoverable and properly categorized.  Note that
  // the returned `type` includes the `custom:` prefix, matching the type
  // string used in YAML configuration.
  static get type() {
    // When registering with Home Assistant’s card picker via window.customCards,
    // the type should be the element tag itself (without the `custom:`
    // prefix).  Returning the tag here makes it consistent with the
    // registration below and prevents mismatches when the card is added
    // through the visual editor.
    return 'drag-and-drop-card';
  }
  static get title() {
    return 'Drag & Drop Card';
  }
  static get description() {
    return 'Flexible grid layout card with drag‑and‑drop editing.';
  }
  static get icon() {
    return 'mdi:cursor-move';
  }
  // Place the card into the `custom` group in the picker
  static get group() {
    return 'custom';
  }

  static getStubConfig(/* hass, entities, entitiesFallback */) {
    // Return default configuration for a new drag‑and‑drop card.  These values
    // initialize the card in “auto” mode with a 20px grid and no hero
    // background image.  The storage_key is generated once so each new
    // card has its own persistent layout key.
    return {
      type: 'custom:drag-and-drop-card',
      storage_key: this._genKey(),
      grid: 20,
      drag_live_snap: true,
      auto_save: true,
      auto_save_debounce: 800,
      container_size_mode: 'auto',
      container_background: 'linear-gradient(135deg, #1e3a8a, #0ea5e9)',
      card_background: 'linear-gradient(135deg, #111827, #1f2937)',
      debug: false,
      disable_overlap: false,
      auto_resize_cards: false,
      background_mode: 'none',
      animate_cards: true,
      container_preset_orientation: 'auto',
      edit_mode_pin: '',
      container_fixed_width: null,
      container_fixed_height: null,
      container_preset: 'fullhd',
      card_shadow: true,
      hide_HA_Header: false,
      hide_HA_Sidebar: false,
      screen_saver_enabled: true,
      screen_saver_delay: 1500000,
      tabs: [
        { id: 'home', label: 'Home', icon: 'mdi:home', label_mode: 'both' }
      ],
      default_tab: 'home'
    };
  }






  /* ------------------------- Mini config editor (HA) ------------------------- */
// Replace your existing static getConfigElement() with the version below.
// It uses HA-native inputs (ha-textfield, ha-select, ha-formfield + ha-checkbox)
// for consistent styling, clearer alignment, helper text, and a subtle animation
// for the Apply button when there are unapplied changes.

static getConfigElement() {
    // -------------------------------------------------------------------------
    // Simplified visual editor: only expose the storage key.
    // All other settings should be edited from the dashboard settings.  The
    // editor renders a single HA textfield and propagates changes via the
    // `config-changed` event.
    const editor = document.createElement('div');
    editor.style.display = 'grid';
    editor.style.gridTemplateColumns = '1fr';
    editor.style.rowGap = '12px';
    // Create storage key input field
    const text = document.createElement('ha-textfield');
    text.id = 'storage_key';
    text.label = 'Storage key';
    text.placeholder = 'Auto-generated if left blank';
    editor.appendChild(text);
    // Provide helper text below the input
    const helper = document.createElement('div');
    helper.style.fontSize = '0.85rem';
    helper.style.opacity = '0.7';
    helper.textContent = 'Unique key for saving layout positions. Leave blank to auto‑generate.';
    editor.appendChild(helper);
    // setConfig: populate input from incoming config
    editor.setConfig = (config = {}) => {
      editor._config = { type: config.type || 'custom:drag-and-drop-card', ...config };
      // Auto-generate a storage key if not provided
      if (!editor._config.storage_key) {
        editor._config.storage_key = `layout_${(crypto?.randomUUID?.() || Date.now().toString(36))}`;
      }
      text.value = editor._config.storage_key || '';
    };
    // getConfig: return updated configuration containing only the storage_key
    editor.getConfig = () => {
      const base = { ...(editor._config || {}) };
      base.type = 'custom:drag-and-drop-card';
      base.storage_key = text.value || '';
      return base;
    };
    // Dispatch config-changed event when the value changes
    text.addEventListener('input', () => {
      editor.dispatchEvent(new CustomEvent('config-changed', { detail: { config: editor.getConfig() } }));
    });
    return editor;

    // -------------------------------------------------------------------------
    // The original editor code is below but will never be executed.
    // -------------------------------------------------------------------------

  // ---- Utility helpers ----
  const updateButtons = () => {
    const dirty = isDirty();
    applyBtn.disabled = !dirty;
  };

  const fire = async () => {
    const newConfig = el.getConfig();
    el.dispatchEvent(new CustomEvent('config-changed', { detail: { config: newConfig } }));
    // Re-check button states after applying
    updateButtons();

    try {
      if (this.storageKey) {
        const optsToSave = this._exportableOptions ? this._exportableOptions() : newConfig;
        await this._saveOptionsToBackend(this.storageKey, optsToSave);
      }
    } catch {}


    // Persist immediately (storage dashboards first; fallback to YAML patch)
    try {
      await this._persistThisCardConfigToStorage_();
    } catch (e) {
      try {
        const opts = this._exportableOptions ? this._exportableOptions() : newConfig;
        await this._persistOptionsToYaml?.(opts, { patchAllInCurrentViewIfNoKey: true });
      } catch {}
    }

    try { this._applyBackgroundFromConfig?.(); } catch {}

  };

  const toggleSizeControls = () => {
    const mode = el.querySelector('#sizeMode')?.value ?? el.querySelector('#ddc-setting-sizeMode')?.value ?? 'dynamic';
    el.querySelector('#sizeCustom').style.display = mode === 'fixed_custom' ? 'inline-flex' : 'none';
    el.querySelector('#sizePresetWrap').style.display = mode === 'preset' ? 'inline-flex' : 'none';
  };

  // Keep reference to controls
  const applyBtn  = el.querySelector('#applyBtn');
  const revertBtn = el.querySelector('#revertBtn');

  // Make menus stable in HA dialog without blocking clicks
  ['#sizeMode','#sizePreset','#sizeOrientation'].forEach((sel) => {
    const s = el.querySelector(sel);
    if (!s) return;
    try { s.fixedMenuPosition = true; } catch {}
    s.addEventListener('closed', (e) => e.stopPropagation());
  });

  // --- Public API: set incoming values (preserve unknown keys)
  el.setConfig = (config = {}) => {
    el._config = { type: config.type || 'custom:drag-and-drop-card', ...config };

    // Auto-generate storage key once if not present
    if (!el._config.storage_key) {
      el._config.storage_key = `layout_${(crypto?.randomUUID?.() || Date.now().toString(36))}`;
      el.__autokeyPending = true;
    }

    // Populate inputs
    el.querySelector('#storage_key').value = el._config.storage_key || '';
    el.querySelector('#grid').value = el._config.grid ?? 10;
    el.querySelector('#liveSnap').checked = !!el._config.drag_live_snap;
    el.querySelector('#autoSave').checked = el._config.auto_save !== false;
    el.querySelector('#autoSaveDebounce').value = el._config.auto_save_debounce ?? 800;
    el.querySelector('#containerBg').value = el._config.container_background ?? 'transparent';
    el.querySelector('#cardBg').value = el._config.card_background ?? 'var(--ha-card-background, var(--card-background-color))';
    el.querySelector('#debug').checked = !!el._config.debug;
    el.querySelector('#noOverlap').checked = !!el._config.disable_overlap;
    el.querySelector('#autoResize').checked = !!el._config.auto_resize_cards;

    // Set the animate cards checkbox based on the incoming config. This
    // defaults to false when not specified. When true, cards will animate
    // into view on tab changes or refresh.
    el.querySelector('#animateCards').checked = !!el._config.animate_cards;


    const sizeModeEl = el.querySelector('#sizeMode') || el.querySelector('#ddc-setting-sizeMode');
    if (sizeModeEl) sizeModeEl.value = el._config.container_size_mode || 'dynamic';
    el.querySelector('#sizeW').value = el._config.container_fixed_width ?? '';
    el.querySelector('#sizeH').value = el._config.container_fixed_height ?? '';
    el.querySelector('#sizeOrientation').value = el._config.container_preset_orientation || 'auto';

    // Build size preset list once (grouped)
    const presetSelect = el.querySelector('#sizePreset');
    if (!presetSelect.__filled) {
      const groups = (this._sizePresets?.() || []).reduce((acc, p) => {
        (acc[p.group || 'other'] ||= []).push(p); return acc;
      }, {});
      presetSelect.innerHTML = '';
      for (const [group, items] of Object.entries(groups)) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = group.replace(/(^.|-.?)/g, s => s.toUpperCase());
        items.forEach(preset => {
          const item = document.createElement('mwc-list-item');
          item.value = preset.key;
          item.textContent = `${preset.label} (${preset.w}×${preset.h})`;
          optgroup.appendChild(item);
        });
        // Note: <optgroup> isn't supported inside mwc-menu; append flat items with prefix
        // so we create visual grouping by inserting disabled headers
        const header = document.createElement('mwc-list-item');
        header.setAttribute('disabled', '');
        header.textContent = `— ${optgroup.label} —`;
        presetSelect.appendChild(header);
        Array.from(optgroup.children).forEach(child => presetSelect.appendChild(child));
      }
      presetSelect.__filled = true;
    }
    if (el._config.container_preset) presetSelect.value = el._config.container_preset;

    toggleSizeControls();
    updateButtons();

    // If we just generated a key, immediately persist it so the dashboard saves it
    if (el.__autokeyPending) {
      el.__autokeyPending = false;
      fire();
    }
  };

  // --- Public API: collect values into config
  el.getConfig = () => {
    const base = { ...(el._config || {}) };
    base.storage_key = el.querySelector('#storage_key').value || '';
    base.grid = Number(el.querySelector('#grid').value || 10);
    base.drag_live_snap = !!el.querySelector('#liveSnap').checked;
    base.auto_save = !!el.querySelector('#autoSave').checked;
    base.auto_save_debounce = Number(el.querySelector('#autoSaveDebounce').value || 800);
    base.container_background = el.querySelector('#containerBg').value || 'transparent';
    base.card_background = el.querySelector('#cardBg').value || 'var(--ha-card-background, var(--card-background-color))';
    base.debug = !!el.querySelector('#debug').checked;
    base.disable_overlap = !!el.querySelector('#noOverlap').checked;
    base.auto_resize_cards = !!el.querySelector('#autoResize').checked;
    // === Background persistence ===
    try {
      const selBgMode        = el.querySelector('#ddc-bg-mode');
      const inpBgImg         = el.querySelector('#ddc-setting-bgImg');
      const selBgRepeat      = el.querySelector('#ddc-bg-repeat');
      const selBgSize        = el.querySelector('#ddc-bg-size');
      const selBgPosition    = el.querySelector('#ddc-bg-position');
      const selBgAttachment  = el.querySelector('#ddc-bg-attachment');
      const rngBgOpacity     = el.querySelector('#ddc-bg-opacity');
      const inpParticlesUrl  = el.querySelector('#ddc-particles-url');
      const chkParticlesPtr  = el.querySelector('#ddc-particles-pointer');
      const inpYtUrl         = el.querySelector('#ddc-youtube-url');
      const inpYtStart       = el.querySelector('#ddc-youtube-start');
      const inpYtEnd         = el.querySelector('#ddc-youtube-end');
      const chkYtMute        = el.querySelector('#ddc-youtube-mute');
      const chkYtLoop        = el.querySelector('#ddc-youtube-loop');
      const selYtSize        = el.querySelector('#ddc-youtube-size');
      const selYtPosition    = el.querySelector('#ddc-youtube-position');
      const selYtAttachment  = el.querySelector('#ddc-youtube-attachment');
      const rngYtOpacity     = el.querySelector('#ddc-youtube-opacity');

      const mode = selBgMode?.value || 'none';
      base.background_mode = mode;

      const clamp01 = (v) => Math.max(0, Math.min(1, v));
      const pctTo01 = (el) => {
        const v = parseFloat(el?.value || '100');
        if (!Number.isFinite(v)) return 1;
        return clamp01(v / 100);
      };

      // Build objects, omitting undefined keys
      const pick = (o) => Object.fromEntries(Object.entries(o).filter(([,v]) => v !== undefined && v !== null && v !== ''));

      // Image
      if (mode === 'image') {
        const srcVal = (inpBgImg?.value || '').trim();
        base.background_image = pick({
          src: srcVal || undefined,
          repeat: selBgRepeat?.value || 'no-repeat',
          size: selBgSize?.value || 'cover',
          position: selBgPosition?.value || 'center center',
          attachment: selBgAttachment?.value || 'scroll',
          opacity: pctTo01(rngBgOpacity),
        });
      }

      // Particles
      if (mode === 'particles') {
        base.background_particles = pick({
          config_url: (inpParticlesUrl?.value || '').trim() || undefined,
          pointer_events: !!chkParticlesPtr?.checked,
        });
      }

      // YouTube
      if (mode === 'youtube') {
        const n = (x) => {
          const v = parseInt((x?.value || '').trim(), 10);
          return Number.isFinite(v) ? v : undefined;
        };
        base.background_youtube = pick({
          url: (inpYtUrl?.value || '').trim() || undefined,
          start: n(inpYtStart),
          end: n(inpYtEnd),
          mute: !!chkYtMute?.checked,
          loop: !!chkYtLoop?.checked,
          size: selYtSize?.value || 'cover',
          position: selYtPosition?.value || 'center center',
          attachment: selYtAttachment?.value || 'scroll',
          opacity: pctTo01(rngYtOpacity),
        });
      }

      // When switching modes, avoid leaving stale large objects around
      if (mode !== 'image') delete base.background_image;
      if (mode !== 'particles') delete base.background_particles;
      if (mode !== 'youtube') delete base.background_youtube;
    } catch (e) { /* non-fatal */ }


    // Reflect the animate cards setting back into the configuration. When
    // true, cards will perform a fly‑in animation on tab switch. This key
    // persists in YAML so toggling the option will survive reloads.
    base.animate_cards = !!el.querySelector('#animateCards').checked;


    base.container_size_mode = el.querySelector('#sizeMode')?.value ?? el.querySelector('#ddc-setting-sizeMode')?.value ?? 'dynamic';
    base.container_fixed_width  = Number(el.querySelector('#sizeW').value || 0) || undefined;
    base.container_fixed_height = Number(el.querySelector('#sizeH').value || 0) || undefined;
    base.container_preset = el.querySelector('#sizePreset').value || undefined;
    base.container_preset_orientation = el.querySelector('#sizeOrientation').value || 'auto';

    return base;
  };

  // Change detection (don’t fire immediately on each keystroke)
  const isDirty = () => {
    const current = el.getConfig();
    const baseline = el._config || {};
    try {
      return JSON.stringify(current) !== JSON.stringify(baseline);
    } catch { return true; }
  };

  const on = (sel, ev = 'input') => el.querySelector(sel)?.addEventListener(ev, () => {
    if (sel === '#sizeMode') toggleSizeControls();
    updateButtons();
  });

  // Listeners
  on('#storage_key'); on('#grid');
  on('#liveSnap', 'change'); on('#autoSave', 'change'); on('#autoSaveDebounce');
  on('#containerBg'); on('#cardBg');
  on('#debug', 'change'); on('#noOverlap', 'change');
  on('#autoResize', 'change');
  on('#animateCards', 'change');
  on('#sizeMode', 'change'); on('#ddc-setting-sizeMode', 'change'); on('#sizeW'); on('#sizeH');
  on('#sizePreset', 'selected'); on('#sizeOrientation', 'selected');

  applyBtn?.addEventListener('click', () => {
    fire();
  });
  revertBtn?.addEventListener('click', () => el.setConfig(el._config));

  return el;
}




  
    /* ---------------------------- Size helpers ---------------------------- */
  // ---- size presets (CSS pixels) ----
static _sizePresets() {
  return [
    // Phones
    { key:'iphone-14-pro',      label:'iPhone 14 Pro',        w:393,  h:852,  group:'phone' },
    { key:'iphone-14-pro-max',  label:'iPhone 14 Pro Max',    w:430,  h:932,  group:'phone' },
    { key:'iphone-se-2',        label:'iPhone SE (2/3rd gen)',w:375,  h:667,  group:'phone' },
    { key:'pixel-7',            label:'Pixel 7',              w:412,  h:915,  group:'phone' },
    { key:'galaxy-s8',          label:'Galaxy S8',            w:360,  h:740,  group:'phone' },
    { key:'galaxy-s20-ultra',   label:'Galaxy S20 Ultra',     w:412,  h:915,  group:'phone' },

    // Tablets
    { key:'ipad-9-7',           label:'iPad 9.7"',            w:768,  h:1024, group:'tablet' },
    { key:'ipad-11-pro',        label:'iPad Pro 11"',         w:834,  h:1194, group:'tablet' },
    { key:'ipad-12-9-pro',      label:'iPad Pro 12.9"',       w:1024, h:1366, group:'tablet' },
    { key:'surface-go-3',       label:'Surface Go 3',         w:800,  h:1280, group:'tablet' },

    // Desktop / Displays
    { key:'hd',                 label:'HD',                   w:1366, h:768,  group:'desktop' },
    { key:'wxga-plus',          label:'WXGA+',                w:1440, h:900,  group:'desktop' },
    { key:'fhd',                label:'Full HD',              w:1920, h:1080, group:'desktop' },
    { key:'qhd',                label:'2K / QHD',             w:2560, h:1440, group:'desktop' },
    { key:'uhd-4k',             label:'4K UHD',               w:3840, h:2160, group:'desktop' },
  ];
}

_isContainerFixed() { return (this.containerSizeMode === 'fixed_custom' || this.containerSizeMode === 'preset' || this.containerSizeMode === 'fixed'); }

_resolveFixedSize() {
  if (this.containerSizeMode === 'fixed_custom') {
    const w = Math.max(100, Number(this.containerFixedWidth || 0));
    const h = Math.max(100, Number(this.containerFixedHeight || 0));
    return { w, h };
  }
  if (this.containerSizeMode === 'preset') {
    const p = DragAndDropCard._sizePresets().find(x => x.key === this.containerPreset) ||
              DragAndDropCard._sizePresets().find(x => x.key === 'fhd');
    if (!p) return { w: 1920, h: 1080 };
    let w = p.w, h = p.h;
    if (this.containerPresetOrient === 'portrait' && w > h) [w,h] = [h,w];
    if (this.containerPresetOrient === 'landscape' && h > w) [w,h] = [h,w];
    return { w, h };
  }
  return null;
}

_applyContainerSizingFromConfig(initial=false) {
  // set container size according to mode
  const c = this.cardContainer; if (!c) return;

  if (this._isContainerFixed()) {
    const { w, h } = this._resolveFixedSize();
    c.style.width  = `${w}px`;
    c.style.height = `${h}px`;
    // ensure overflow hidden (hard lock)
    c.style.overflow = 'hidden';
    if (!initial) this._dbgPush?.('size', 'Applied fixed size', { w, h, mode: this.containerSizeMode, preset:this.containerPreset, orient:this.containerPresetOrient });
    // pull any existing cards back inside
    this._clampAllCardsInside();
  } else {
    // dynamic — let _resizeContainer compute; clear inline to allow growth/shrink
    c.style.overflow = 'hidden';
    // keep width/height managed by _resizeContainer
    if (!initial) this._dbgPush?.('size', 'Applied dynamic size');
    this._resizeContainer();
  }
}

_getContainerSize() {
  const c = this.cardContainer; if (!c) return { w:0, h:0 };
  const w = parseFloat(getComputedStyle(c).width) || c.getBoundingClientRect().width;
  const h = parseFloat(getComputedStyle(c).height) || c.getBoundingClientRect().height;
  return { w, h };
}

_clampAllCardsInside() {
  if (!this._isContainerFixed()) return;
  const { w: cw, h: ch } = this._getContainerSize();
  const wraps = this.cardContainer.querySelectorAll('.card-wrapper');
  wraps.forEach(w => {
    const x = parseFloat(w.getAttribute('data-x')) || 0;
    const y = parseFloat(w.getAttribute('data-y')) || 0;
    const ww = parseFloat(w.style.width)  || w.getBoundingClientRect().width;
    const hh = parseFloat(w.style.height) || w.getBoundingClientRect().height;

    const nx = Math.max(0, Math.min(x, Math.max(0, cw - ww)));
    const ny = Math.max(0, Math.min(y, Math.max(0, ch - hh)));
    let nw = Math.min(ww, cw);
    let nh = Math.min(hh, ch);

    // if width/height exceed box, shrink then re-clamp pos
    if (nw !== ww || nh !== hh) {
      w.style.width  = `${nw}px`;
      w.style.height = `${nh}px`;
    }
    const nx2 = Math.max(0, Math.min(nx, Math.max(0, cw - nw)));
    const ny2 = Math.max(0, Math.min(ny, Math.max(0, ch - nh)));
    this._setCardPosition(w, nx2, ny2);
  });
}

_computeHaSidebarGutters_() {
  let left = 56; // default desktop gutter; HA collapsed is ~56–64px
  try {
    const ha = document.querySelector('home-assistant');
    const shadow = ha?.shadowRoot;
    const drawer = shadow?.querySelector('ha-drawer, app-drawer, ha-sidebar, .drawer, .menu');
    const rect = drawer?.getBoundingClientRect?.();
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // On mobile the nav overlays; treat gutter as 0
    if (vw <= 870) {
      left = 0;
    } else if (rect?.width) {
      left = Math.max(0, Math.min(256, Math.round(rect.width)));
    }
  } catch {}
  let right = 0; // adjust if you have a right dock; keep 0 otherwise
  try {
    // Example hook for themes with a right dock: measure & set right here.
  } catch {}
  try {
    this.style.setProperty('--ddc-left-gutter', `${left}px`);
    this.style.setProperty('--ddc-right-gutter', `${right}px`);
  } catch {}
}

_applyGridVars() {
  const sz = `${this.gridSize || 10}px`;
  // host (inherits down)
  this.style.setProperty('--ddc-grid-size', sz);
  // container (extra robust)
  this.cardContainer?.style.setProperty('--ddc-grid-size', sz);
}

  /* ---------------------------- debug helpers ---------------------------- */
  _dbgInit() {
    if (this.__dbgReady) return;
    this.__dbgReady = true;
    this._dbgBuffer = [];
    this._dbgMax = 400;
    try { window.DDC = this; } catch {}
  }
  _dbgPush(kind, msg, extra = null) {
    const line = { t: new Date().toISOString(), kind, msg, extra };
    this._dbgBuffer.push(line);
    if (this._dbgBuffer.length > this._dbgMax) this._dbgBuffer.shift();
    if (this.debug) console.debug(`%c[ddc:${kind}]%c ${msg}`, 'color:#03a9f4', 'color:unset', extra ?? '');
  }
  _dbgDump() { return [...this._dbgBuffer]; }
  _safe(s) { return String(s).replace(/[&<>"']/g, (c)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  /* --------------------------- Card lifecycle --------------------------- */
  setConfig(config = {}) {
    // Track old key so we only rebuild when storage_key actually changes
    // Auto‑assign a storage key if none provided
    // Keep previous to detect real key changes
    const prevKey = this.storageKey;
    // Use existing instance key if present

    this.config = { ...config };
    if (!this.config.storage_key || this.config.storage_key === "") {
      this.config.storage_key = this.constructor._genKey();
    }
    this.storageKey = this.config.storage_key;

    // STABLE storage_key: reuse instance key if none provided
    if (!config.storage_key) {
      if (this.storageKey) {
        config = { ...config, storage_key: this.storageKey };
      } else {
        this.storageKey = `layout_${(crypto?.randomUUID?.() || Date.now().toString(36))}`;
        config = { ...config, storage_key: this.storageKey };
      }
    }

    // Store & reflect
    this._config = config;
    this.storageKey = config.storage_key;
    this._syncEditorsStorageKey();


    // Store incoming config and update properties
    this.storageKey = config.storage_key || undefined;
    this._syncEditorsStorageKey();
    this.gridSize                 = Number(config.grid ?? 10);
    this.dragLiveSnap             = !!config.drag_live_snap;
    this.autoSave                 = config.auto_save !== false;
    this.autoSaveDebounce         = Number(config.auto_save_debounce ?? 800);
    this.editModePin =            (this.editModePin != null) ? this.editModePin: (config.edit_mode_pin ?? config.editModePin ?? '');
    this.containerBackground      = config.container_background ?? 'transparent';
    this.cardBackground           = config.card_background ?? 'var(--ha-card-background, var(--card-background-color))';

    // Whether to apply a drop shadow to card wrappers (defaults to false)
    this.cardShadowEnabled        = !!config.card_shadow;

    this.hideHaHeader            = !!(config.hide_HA_Header ?? config.hide_ha_header ?? false);
    this.hideHaSidebar           = !!(config.hide_HA_Sidebar ?? config.hide_ha_sidebar ?? false);
        this.debug                    = !!config.debug;
    this.editMode                 = false;
    this._backendOK               = false;
    this.disableOverlap           = !!config.disable_overlap;
    this.containerSizeMode        = config.container_size_mode || 'dynamic';
    this.autoResizeCards         = !!config.auto_resize_cards;

    // Whether to play a fly‑in animation when switching tabs or refreshing
    // Defaults to false when not specified.  When true, the card wrappers
    // animate into view the moment a tab becomes active or on initial load.
    this.animateCards             = !!config.animate_cards;

    // Screen saver options
    this.screenSaverEnabled = !!(config.screen_saver_enabled ?? false);
    // Delay stored in ms; default to 5 minutes if not provided
    const ssDelay = Number(config.screen_saver_delay);
    this.screenSaverDelay = Number.isFinite(ssDelay) && ssDelay > 0 ? ssDelay : (5 * 60000);

    if ((this.autoResizeCards || String((this.containerSizeMode||this.container_size_mode||'dynamic')).toLowerCase()==='auto')) this._startScaleWatch?.(); else this._stopScaleWatch?.();
    this._applyAutoScale?.();
    this.containerFixedWidth      = Number(config.container_fixed_width ?? 0) || null;
    this.containerFixedHeight     = Number(config.container_fixed_height ?? 0) || null;
    this.containerPreset          = config.container_preset || 'fullhd';
    this.containerPresetOrient    = config.container_preset_orientation || 'auto';
    this.heroImage = config?.hero_image || "https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png";
    // Tabs options
    this.tabs               = Array.isArray(config.tabs) ? config.tabs : [];
    this.tabsPosition       = (config.tabs_position === 'left') ? 'left' : 'top';
    this.defaultTab         = config.default_tab || (this.tabs[0]?.id ?? 'default');
    this.hideTabsWhenSingle = (config.hide_tabs_when_single !== false);
    this.activeTab          = this.defaultTab;
    try { const lastT = localStorage.getItem(`ddc_lasttab_${this.storageKey}`);
      if (lastT && this.tabs.some(t=>t.id===lastT)) this.activeTab = lastT; } catch {}
    if (this.rootEl) this.rootEl.classList.toggle('ddc-tabs-left-layout', this.tabsPosition === 'left');



    if (this.cardContainer) this._applyContainerSizingFromConfig(false);

    const keyChanged = prevKey !== this.storageKey;

      // IMPORTANT: do NOT autosave a layout snapshot while the key is changing/booting
    if (this.editMode && !this.__booting && !keyChanged) {
      try { if (!this._isInHaEditorPreview()) this._queueSave('config-change'); } catch {}
    }
    // Grid-related
    this._applyGridVars();

    
    try { this._applyBackgroundImageFromConfig?.(); } catch {}

    try { this._applyHaChromeVisibility_?.(); } catch {}
// Overlay fix for UI based cards
    this._ensureOverlayZFix();

    // Apply screensaver settings after config assignment
    try {
      this._updateScreensaverSettings?.();
    } catch {}

    // selection state
    this._selection = new Set();
    this.__groupDrag = null;

    // caches for speed
    this.__editorCache = new Map(); // type -> element
    this.__stubCache = new Map();

    this._dbgInit();
    this._dbgPush('init', 'Card configured', {
      storageKey_raw: config.storage_key,
      storageKey_slug: this.storageKey,
      autoSave: this.autoSave,
      grid: this.gridSize
    });

    this.style.setProperty('--ddc-bg', this.containerBackground);
    this.style.setProperty('--ddc-card-bg', this.cardBackground);

    // Apply initial card drop shadow if enabled
    if (this.cardShadowEnabled) {
      // Set a more prominent drop shadow by default
      this.style.setProperty('--ddc-card-shadow', '0 8px 24px rgba(0,0,0,.35)');
    }

    // preload libs
    if (!window.jsyaml) {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js';
      document.head.appendChild(s);
    }
    if (!window.interact) {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js';
      s.onload = () => this._initInteract();
      document.head.appendChild(s);
    }
    // preload helpers early to avoid lag on first pick
    this._helpersPromise = (typeof window.loadCardHelpers === 'function')
      ? window.loadCardHelpers().catch(()=>null)
      : Promise.resolve(null);

    if (!this._built) {
      this._built = true;
      this.shadowRoot.innerHTML = `
        <style>


.ddc-root{
  position:relative;
  /* JS will keep this in sync with your “Grid (px)” */
  --ddc-grid-size: 10px;
  /* Good contrast on light/dark themes */
  --ddc-grid-color: color-mix(in srgb, var(--primary-text-color) 22%, transparent);

  /* Container we query for width */
  container-type: inline-size;
  container-name: ddc-root;
}

/* ===== DDC Toolbar and tabs when auto sieze is off ===== */

/* Center toolbar & tabs to viewport when auto-resize is OFF in dynamic mode */
/* === Centered, nav-aware UI when auto-resize is OFF in dynamic mode === */
:host([ddc-fixed-ui]) .ddc-toolbar,
:host([ddc-fixed-ui]) .ddc-tabs {
  position: fixed;
  /* Keep clear of HA's left navigation bar; computed in JS, fallback 56px desktop / 0 mobile */
  left: calc(var(--ddc-left-gutter, 56px) + 50%);
  transform: translateX(-50%);
  width: var(--ddc-ui-width, auto);
  max-width: calc(100vw - var(--ddc-left-gutter, 56px) - var(--ddc-right-gutter, 0px));
  box-sizing: border-box;
  z-index: 1002; /* above canvas, below dialogs */
  pointer-events: auto;
}

/* Vertical placement */
:host([ddc-fixed-ui]) .ddc-toolbar { top: 0; }
:host([ddc-fixed-ui]) .ddc-tabs { top: var(--ddc-toolbar-height, 0px); }

/* Make tabs horizontally scrollable when narrow */
:host([ddc-fixed-ui]) .ddc-tabs {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  scrollbar-width: thin;
}

/* Keep inner list no-wrap; match your existing inner wrapper class if different */
:host([ddc-fixed-ui]) .ddc-tabs .scroll-wrap,
:host([ddc-fixed-ui]) .ddc-tabs .tabs-inner {
  display: inline-flex;
  white-space: nowrap;
}

/* Mobile: sticky works better inside HA's scroll containers */
@media (max-width: 768px) {
  :host([ddc-fixed-ui]) .ddc-tabs {
    position: sticky;
    left: auto;
    transform: none;
    width: 100%;
    max-width: 100vw;
    margin-left: 0;
  }
}
/* ===== DDC Toolbar and tabs when auto sieze is off END ===== */


/* ===== DDC Toolbar — Minimal Redesign (pills with accent tint) ===== */


/* scope to either version */
.ddc-toolbar.streamlined.v2,
.ddc-toolbar.streamlined.v3{
  --ddc-bg: color-mix(in oklab, var(--card-background-color, #0d0f12) 88%, transparent);
  --ddc-border: color-mix(in oklab, #fff 14%, transparent);
  --ddc-soft: color-mix(in oklab, #fff 7%, transparent);
  --ddc-shadow: 0 10px 30px rgba(0,0,0,.25), 0 2px 8px rgba(0,0,0,.22);

  /* section accent colors */
  --sec-primary: #3b82f6;
  --sec-clip:    #a855f7;
  --sec-share:   #4fb6ff;
  --sec-utils:   #10b981;
  --sec-status:  #ef4444;

  --btn-h: 36px;
  --btn-r: 12px;
  --btn-gap: 8px;

  /* animation vars */
  --ddc-ease: cubic-bezier(.2,.7,.2,1);
  --ddc-dur: 260ms;
  --open-h: 0px; /* JS sets this to scrollHeight */

  position: sticky; top: 0; z-index: 3;
  background: var(--ddc-bg);
  border-bottom: 1px solid var(--ddc-border);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  box-shadow: var(--ddc-shadow);
  padding: 12px 14px 10px;

  /* never exceed the root’s width */
  max-width: 100%;

  /* GRID (kept ready) */
  display: none;
  grid-template-columns: repeat(4, minmax(0,1fr)) auto; /* Status at the end */
  grid-template-areas:
    "primary clip share utils status"
    "layouts layouts layouts layouts status";
  column-gap: 18px;
  row-gap: 10px;
  align-items: start;

  /* Visibility is animated — NOT display */
  opacity: 0;
  transform: translateY(-6px);
  max-height: 0;              /* collapse when closed */
  overflow: hidden;             /* avoid scrollbars during anim */
  pointer-events: none;       /* inert when closed */
  visibility: hidden;         /* keep out of a11y focus when closed */

  transition:
    opacity var(--ddc-dur) var(--ddc-ease),
    transform var(--ddc-dur) var(--ddc-ease),
    max-height var(--ddc-dur) var(--ddc-ease),
    visibility 0s linear var(--ddc-dur); /* becomes hidden after fade-out */

  /* make this element respond to its own width, too */
  container-type: inline-size;
  container-name: ddc;
}

/* OPEN state (set by JS) */
.ddc-toolbar.streamlined.v2.is-open,
.ddc-toolbar.streamlined.v3.is-open{
  opacity: 1;
  transform: translateY(0);
  max-height: var(--open-h);  /* expand to measured height */
  pointer-events: auto;
  visibility: visible;
  transition:
    opacity var(--ddc-dur) var(--ddc-ease),
    transform var(--ddc-dur) var(--ddc-ease),
    max-height var(--ddc-dur) var(--ddc-ease),
    visibility 0s; /* visible immediately */
}

/* Always hide when closed, no matter what other rules say */
.ddc-toolbar.streamlined.v2:not(.is-open):not([data-force-open="1"]),
.ddc-toolbar.streamlined.v3:not(.is-open):not([data-force-open="1"]) {
  display: none !important;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    transition: none;
  }
}

/* map areas (HTML unchanged) */
.ddc-toolbar.streamlined.v2 .sec-primary{ grid-area: primary; }
.ddc-toolbar.streamlined.v2 .sec-clip   { grid-area: clip; }
.ddc-toolbar.streamlined.v2 .sec-share  { grid-area: share; }
.ddc-toolbar.streamlined.v2 .sec-utils  { grid-area: utils; }
.ddc-toolbar.streamlined.v2 .sec-status { grid-area: status; }
.ddc-toolbar.streamlined.v2 .sec-layouts{ grid-area: layouts; }
.ddc-toolbar.streamlined.v2 .ddc-spacer,
.ddc-toolbar.streamlined.v2 .ddc-vsep{ display:none; }

/* === ONE-PILL PER SECTION: header + buttons inside === */
.ddc-toolbar.streamlined.v2 .ddc-sec,
.ddc-toolbar.streamlined.v3 .ddc-sec{
  --pill-accent: #6b7280;            /* default; overridden per-section below */

  display: flex; flex-direction: column; gap: 10px; min-width: 0;
  padding: 12px 14px;
  border-radius: 16px;

  /* accent-tinted background & border */
  background:
    linear-gradient(180deg,
      color-mix(in oklab, var(--pill-accent) 12%, transparent),
      transparent),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 22%, transparent);
  border: 1px solid color-mix(in oklab, var(--pill-accent) 26%, transparent);
  box-shadow: inset 0 1px 2px rgba(255,255,255,.04);
}

/* per-section tint */
.ddc-toolbar.streamlined.v2 .sec-primary{ --pill-accent: var(--sec-primary); }
.ddc-toolbar.streamlined.v2 .sec-clip   { --pill-accent: var(--sec-clip); }
.ddc-toolbar.streamlined.v2 .sec-share  { --pill-accent: var(--sec-share); }
.ddc-toolbar.streamlined.v2 .sec-utils  { --pill-accent: var(--sec-utils); }
.ddc-toolbar.streamlined.v2 .sec-status { --pill-accent: var(--sec-status); }
.ddc-toolbar.streamlined.v2 .sec-layouts{ --pill-accent: var(--sec-clip); } /* layouts gets a gentle purple tint */

/* header inside the pill */
.ddc-toolbar.streamlined.v2 .ddc-sec-head{
  background: transparent; border: 0; padding: 0; border-radius: 0;
  color: var(--accent, #9aa0a6);
  display: inline-flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: .92rem; letter-spacing: .2px;
}
.ddc-toolbar.streamlined.v2 .sec-primary .ddc-sec-head{ --accent: var(--sec-primary); color: var(--sec-primary); }
.ddc-toolbar.streamlined.v2 .sec-clip    .ddc-sec-head{ --accent: var(--sec-clip);    color: var(--sec-clip); }
.ddc-toolbar.streamlined.v2 .sec-share   .ddc-sec-head{ --accent: var(--sec-share);   color: var(--sec-share); }
.ddc-toolbar.streamlined.v2 .sec-utils   .ddc-sec-head{ --accent: var(--sec-utils);   color: var(--sec-utils); }
.ddc-toolbar.streamlined.v2 .sec-status  .ddc-sec-head{ --accent: var(--sec-status);  color: var(--sec-status); }
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-sec-head{ --accent: var(--sec-clip);    color: var(--sec-clip); }

.ddc-toolbar.streamlined.v2 .ddc-sec-dot{
  width: 8px; height: 8px; border-radius: 50%; background: currentColor; opacity: .95;
}

/* row of actions inside the pill */
.ddc-toolbar.streamlined.v2 .ddc-row{ display: flex; flex-wrap: wrap; align-items: center; gap: var(--btn-gap); margin: 0; }

/* buttons (reset native look + style) */
.ddc-toolbar.streamlined.v2 .btn{
  appearance:none; -webkit-appearance:none;
  display:inline-flex; align-items:center; gap:8px;
  height:var(--btn-h); padding:8px 12px; border-radius:var(--btn-r);
  background: color-mix(in oklab, var(--primary-background-color, #0e1116) 14%, transparent);
  border:1px solid var(--ddc-border);
  color: var(--primary-text-color, #e5e7eb);
  cursor:pointer; font:inherit; white-space:nowrap;
  transition: transform .08s, background .16s, border-color .16s, box-shadow .16s;
  flex: 1 1 220px;           /* equal-ish width buttons and wrap nicely */
  min-width: 160px;
}
.ddc-toolbar.streamlined.v2 .btn ha-icon{ --mdc-icon-size:18px; width:18px; height:18px; display:inline-block; }
.ddc-toolbar.streamlined.v2 .btn:hover{ transform: translateY(-1px); background: color-mix(in oklab, var(--primary-background-color) 22%, transparent); }
.ddc-toolbar.streamlined.v2 .btn:active{ transform: translateY(0); }
.ddc-toolbar.streamlined.v2 .btn:focus-visible{ outline:none; box-shadow:0 0 0 2px color-mix(in oklab, #fff 15%, transparent); }
.ddc-toolbar.streamlined.v2 .btn.secondary{ background:transparent; }
.ddc-toolbar.streamlined.v2 .btn.info{
  background: color-mix(in oklab, var(--sec-share) 92%, transparent); color:#0b2537;
  border-color: color-mix(in oklab, var(--sec-share) 55%, transparent);
}
.ddc-toolbar.streamlined.v2 .btn.danger{
  background: color-mix(in oklab, #ff5d5d 92%, transparent); color:#2b0b0b;
  border-color: color-mix(in oklab, #ff5d5d 55%, transparent);
}

/* >>> Make "Add Card" extra prominent */
.ddc-toolbar.streamlined.v2 .btn.cta-add{
  --glow: color-mix(in oklab, var(--sec-primary) 65%, #fff 0%);
  height: 40px; padding: 10px 14px; border-radius: 14px;
  font-weight: 800; letter-spacing: .2px;
  background: linear-gradient(135deg, var(--sec-primary), color-mix(in oklab, var(--sec-primary) 60%, #fff 0%));
  color:#fff;
  border-color: color-mix(in oklab, var(--sec-primary) 55%, #000);
  box-shadow: 0 10px 24px rgba(59,130,246,.34), 0 0 0 2px color-mix(in oklab, var(--sec-primary) 22%, transparent) inset;
  flex-basis: 100%;  /* spans full row when wrapping */
}
.ddc-toolbar.streamlined.v2 .btn.cta-add::after{
  content:""; position:absolute; inset:-4px; border-radius:16px;
  border:2px solid color-mix(in oklab, var(--sec-primary) 45%, transparent);
  opacity:.6; pointer-events:none;
}

/* status: dot above text, HIGH-CONTRAST text */
.ddc-toolbar.streamlined.v2 .ddc-t-status{
  display:flex; flex-direction: column; align-items:center; justify-content:center;
  gap: 4px; text-align: center;
  min-width: 120px; height: auto; padding: 10px 12px; border-radius: 999px;
  background: color-mix(in oklab, var(--primary-background-color, #0b0d10) 28%, transparent);
  border: 1px solid color-mix(in oklab, #ffffff 28%, transparent);
  color: #f8fbff;  /* brighter default */
  font-size: .9rem; line-height: 1.25; font-weight: 700;
  text-shadow: 0 1px 1px rgba(0,0,0,.45);
}
.ddc-toolbar.streamlined.v2 .ddc-t-status .ddc-t-text{ color: #f8fbff; }
.ddc-toolbar.streamlined.v2 .ddc-t-dot{ width: 12px; height: 12px; border-radius:50%; background:#22c55e; }
.ddc-toolbar.streamlined.v2 .ddc-t-status.warn  .ddc-t-dot{ background:#f59e0b; }
.ddc-toolbar.streamlined.v2 .ddc-t-status.error .ddc-t-dot{ background:#ef4444; }
@keyframes ddc-pulse{ 0%,100%{ transform:scale(1)} 50%{ transform:scale(1.35)} }

/* store badge (optional) */
.ddc-toolbar.streamlined.v2 .store-badge{
  display:inline-flex; align-items:center; height:var(--btn-h);
  border:1px solid var(--ddc-border); border-radius:999px; padding:6px 10px; font-size:.85rem;
  background: color-mix(in oklab, #ffc107 22%, transparent); color:#1a1200;
  flex: 1 1 220px; min-width: 160px;
}

/* Layouts: inline switcher styling */
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-row.center{ display:flex; justify-content:center; gap:12px; flex-wrap: wrap; }
.ddc-toolbar.streamlined.v2 .sec-layouts .layout-host{ display:inline-flex; align-items:center; gap:10px; color:#cfd6de; }
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline{
  display:inline-flex; align-items:center; gap:10px; flex-wrap: wrap;
  padding:8px 10px; border-radius:12px;
  background: color-mix(in oklab, var(--primary-background-color, #0e1116) 14%, transparent);
  border: 1px solid color-mix(in oklab, #ffffff 14%, transparent);
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline .label{
  color:#cfd6de; font-size:.9rem; letter-spacing:.2px;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline button,
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline .btn{
  appearance:none; -webkit-appearance:none;
  display:inline-flex; align-items:center; gap:8px;
  height:32px; padding:6px 10px; border-radius:10px;
  background: color-mix(in oklab, var(--primary-background-color, #0e1116) 10%, transparent);
  border:1px solid color-mix(in oklab, #ffffff 12%, transparent);
  color: var(--primary-text-color, #e5e7eb);
  cursor:pointer; font:inherit; white-space:nowrap;
  transition: transform .08s, background .16s, border-color .16s, box-shadow .16s;
}

/* JS shim to override default hidden state purely for measuring/animating */
.ddc-toolbar.streamlined.v2[data-force-open="1"],
.ddc-toolbar.streamlined.v3[data-force-open="1"]{
  display: grid !important;
}

/* ===== STACK WHEN ROOT IS NARROW (uses .ddc-root width) ===== */
@container ddc-root (max-width: 900px){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    position: static !important;     /* turn off sticky */
    top: auto !important;
    inset: auto !important;
    z-index: auto !important;

    max-width: 100%;                  /* never exceed .ddc-root */
    margin: 8px 0 12px 0;             /* breathing room above card */
    box-shadow: 0 4px 12px rgba(0,0,0,.18); /* lighter shadow on mobile */
  }
}



  .ddc-toolbar.streamlined.v2 > .ddc-sec,
  .ddc-toolbar.streamlined.v3 > .ddc-sec{
    display: block;
    width: 100%;
    margin: 0 0 12px 0;
    grid-area: auto !important;  /* neutralize named areas */
  }

  .ddc-toolbar.streamlined.v2 .ddc-row,
  .ddc-toolbar.streamlined.v3 .ddc-row{
    display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; width: 100%;
  }

  .ddc-toolbar.streamlined.v2 .ddc-row > .btn,
  .ddc-toolbar.streamlined.v3 .ddc-row > .btn,
  .ddc-toolbar.streamlined.v2 .ddc-row > .store-badge,
  .ddc-toolbar.streamlined.v3 .ddc-row > .store-badge{
    flex: 1 1 calc(50% - 8px);
    min-width: 160px;
  }

  .ddc-toolbar.streamlined.v2 .ddc-row > .btn.cta-add,
  .ddc-toolbar.streamlined.v3 .ddc-row > .btn.cta-add{
    flex-basis: 100%;
  }

  .ddc-toolbar.streamlined.v2 .btn,
  .ddc-toolbar.streamlined.v3 .btn{ height: 44px; }
}

@container ddc-root (max-width: 560px){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    position: static !important;
    top: auto !important;
    inset: auto !important;
    z-index: auto !important;
    max-width: 100%;
  }
}

/* Fallback for environments without container queries */
@supports not (container-type: inline-size){
  @media (max-width: 900px){
    .ddc-toolbar.streamlined.v2,
    .ddc-toolbar.streamlined.v3{
      display: block;
      padding: 10px;
    }
    .ddc-toolbar.streamlined.v2 > .ddc-sec,
    .ddc-toolbar.streamlined.v3 > .ddc-sec{
      display: block; width: 100%; margin: 0 0 12px 0; grid-area: auto !important;
    }
    .ddc-toolbar.streamlined.v2 .ddc-row,
    .ddc-toolbar.streamlined.v3 .ddc-row{
      display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; width: 100%;
    }
    .ddc-toolbar.streamlined.v2 .ddc-row > .btn,
    .ddc-toolbar.streamlined.v3 .ddc-row > .btn,
    .ddc-toolbar.streamlined.v2 .ddc-row > .store-badge,
    .ddc-toolbar.streamlined.v3 .ddc-row > .store-badge{
      flex: 1 1 calc(50% - 8px); min-width: 160px;
    }
    @media (max-width: 560px){
      .ddc-toolbar.streamlined.v2 .ddc-row > .btn,
      .ddc-toolbar.streamlined.v3 .ddc-row > .btn,
      .ddc-toolbar.streamlined.v2 .ddc-row > .store-badge,
      .ddc-toolbar.streamlined.v3 .ddc-row > .store-badge{
        flex: 1 1 100%;
      }
    }
  }
}

/* Optional: make sure all children use border-box inside the toolbar */
.ddc-toolbar.streamlined.v2 * ,
.ddc-toolbar.streamlined.v3 * { box-sizing: border-box; }

/* === SIMPLE RESPONSIVE STACKING FOR MOBILE (NO CONTAINER Q) === */
/* ===== FORCE STACK ON NARROW — driven by .ddc-root width ============ */
/* At <= 900px root width: stack pills; inside each pill use 2-up buttons */
@container ddc-root (max-width: 900px){
  .ddc-toolbar.streamlined.v2.is-open:has(.btn[style*="inline-block"]),
  .ddc-toolbar.streamlined.v3.is-open:has(.btn[style*="inline-block"]),
  .ddc-toolbar.streamlined.v2[data-force-open="1"]:has(.btn[style*="inline-block"]),
  .ddc-toolbar.streamlined.v3[data-force-open="1"]:has(.btn[style*="inline-block"]),
  .ddc-toolbar.streamlined.v2.is-open:has(.store-badge[style*="inline-block"]),
  .ddc-toolbar.streamlined.v3.is-open:has(.store-badge[style*="inline-block"]),
  .ddc-toolbar.streamlined.v2[data-force-open="1"]:has(.store-badge[style*="inline-block"]),
  .ddc-toolbar.streamlined.v3[data-force-open="1"]:has(.store-badge[style*="inline-block"]) {
    display: block !important; /* only when open/measuring */
  }
}


  .ddc-toolbar.streamlined.v2:has(.btn[style*="inline-block"]) > .ddc-sec,
  .ddc-toolbar.streamlined.v3:has(.btn[style*="inline-block"]) > .ddc-sec,
  .ddc-toolbar.streamlined.v2:has(.store-badge[style*="inline-block"]) > .ddc-sec,
  .ddc-toolbar.streamlined.v3:has(.store-badge[style*="inline-block"]) > .ddc-sec{
    display:block !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 0 12px 0;
    grid-area: auto !important; /* neutralize named areas */
  }

  /* equal buttons: hard 2-up */
  .ddc-toolbar.streamlined.v2 .ddc-row,
  .ddc-toolbar.streamlined.v3  .ddc-row{
    --btn-min: 0px;
    grid-template-columns: repeat(2, 1fr);
  }

  /* bigger touch targets */
  .ddc-toolbar.streamlined.v2 .btn,
  .ddc-toolbar.streamlined.v3  .btn{ height: 44px; }
}

/* At <= 560px root width: buttons full-width (1 per row) */
@container ddc-root (max-width: 560px){
  .ddc-toolbar.streamlined.v2 .ddc-row,
  .ddc-toolbar.streamlined.v3  .ddc-row{
    grid-template-columns: 1fr;
  }
}

/* ===== DDC Toolbar — END ===== */





      /* ------- Rest of your styles remain unchanged ------- */

      .card-container{
        position: relative;
        transform-origin: top left;
        padding: 10px;
        border: 1px solid var(--divider-color);
        background: var(--ddc-bg, transparent);
        width: auto; height: auto; border-radius: 12px; overflow: hidden;
        isolation: isolate; z-index: 0; -webkit-touch-callout: none;
        user-select: none;
      }
      .card-container::before{
        content:'';
        position:absolute; inset:0;
        background-image:
          linear-gradient(var(--ddc-grid-color, rgba(120,120,120,.25)) 1px, transparent 1px),
          linear-gradient(90deg, var(--ddc-grid-color, rgba(120,120,120,.25)) 1px, transparent 1px);
        background-size: var(--ddc-grid-size) var(--ddc-grid-size);
        background-origin: content-box;
        background-clip: content-box;
        pointer-events:none;
        opacity:0;
        transition: opacity .15s;
        z-index:1;
      }
      .card-container.grid-on::before{ opacity:.28; }

      .card-container::after{
        content:'';
        position:absolute; inset:0;
        pointer-events:none;
        z-index:0;
        opacity: var(--ddc-bg-opacity, 1);
        background-image: var(--ddc-bg-image, none);
        background-repeat: var(--ddc-bg-repeat, no-repeat);
        background-size: var(--ddc-bg-size, cover);
        background-position: var(--ddc-bg-position, center center);
        background-attachment: var(--ddc-bg-attachment, scroll);
        filter: var(--ddc-bg-filter, none);
      }

      /* Dynamic background host (particles.js / YouTube) */
      .card-container .ddc-bg-host{
        position: absolute;
        inset: 0;
        z-index: 0;               /* under grid (::before, z=1) and cards (z=2) */
        overflow: hidden;
        pointer-events: none;     /* don’t block card drag/drop */
        opacity: var(--ddc-bg-opacity, 1);
      }

      .card-container .ddc-bg-host > *{
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      /* When an image background is active, we don’t need the dynamic host */
      .card-container.has-bg-image .ddc-bg-host{ display: none; }

      .card-wrapper{
        position:absolute;
        left: 0; top: 0;
        box-sizing: border-box;
        border:2px solid transparent;
        background:var(--ddc-card-bg, var(--card-background-color));
        cursor:grab;
        overflow:auto;
        border-radius:14px;
        /* Allow a custom drop shadow via --ddc-card-shadow. Fallback to the HA default if unset */
        box-shadow: var(--ddc-card-shadow, var(--ha-card-box-shadow,0 2px 12px rgba(0,0,0,.18)));
        will-change:transform,width,height,box-shadow; touch-action:auto;
        /*
         * Ensure cards are always layered above the interactive grid overlay.  The
         * selectable grid canvas uses a z-index of 5 (see .ddc-grid-canvas).  By
         * default the card wrappers were assigned a z-index of 2, causing
         * newly added cards to appear behind the overlay until enough cards
         * were added to raise the maximum z-index above 5.  Raising this
         * baseline to 6 ensures all cards start above the grid overlay and
         * remain interactive without requiring the user to add multiple cards.
         */
        z-index:6;
      }
      .card-wrapper.dragging{ cursor:grabbing; touch-action: none; }
      .card-wrapper.editing.selected{
        border-color:var(--primary-color,#03a9f4);
        box-shadow:0 0 0 2px var(--primary-color,#03a9f4)!important;
      }

      /* CARD WRAPPER FOR BSCKGORUND COLORS START */

      /* Make the inner card and its header fully transparent
        so the wrapper’s gradient is the only background shown. */
      .card-wrapper > * {
        /* Critical: do NOT give the card a background via this variable.
          Some headers read --ha-card-background when header-color is unset. */
        --ha-card-background: transparent !important;

        /* Many cards also set a background on the host element; neutralize it. */
        background: transparent !important;
      }

      /* Ensure <ha-card> itself doesn't repaint a body background */
      .card-wrapper ha-card {
        background: transparent !important;
      }

      /* Make header strips transparent regardless of how they are implemented */
      .card-wrapper ::part(header),
      .card-wrapper ::part(card-header),
      .card-wrapper .card-header {
        background: transparent !important;
        box-shadow: none !important;
        border-bottom: none !important;
      }

      /* CARD WRAPPER FOR BSCKGORUND COLORS END */

      /* ---- empty-state of the card ---- */
      .btn.cta-empty{
        position:relative;
        padding:12px 16px;
        font-weight:600;
        border-radius:14px;
        display:inline-flex !important;
        align-items:center;
        gap:8px;
        box-shadow:0 6px 18px rgba(3,169,244,.25);
      }
      .btn.cta-empty::after{
        content:"";
        position:absolute; inset:-4px;
        border-radius:16px;
        border:2px solid rgba(3,169,244,.35);
        animation: ddc-cta-pulse 1.8s ease-out infinite;
        pointer-events:none;
      }
      @keyframes ddc-cta-pulse{
        0%   { opacity:.85; transform:scale(.98); }
        70%  { opacity:0;   transform:scale(1.12); }
        100% { opacity:0;   transform:scale(1.18); }
      }

      /* pleasant buttons: info (light blue) & warning (orange) */
      .btn.info:hover{ filter: brightness(1.06); transform: translateY(-1px); box-shadow:0 4px 14px rgba(0,0,0,.18) }
      .btn.info:active{ transform: translateY(0) }
      .btn.warning:hover{ filter: brightness(1.07); transform: translateY(-1px); box-shadow:0 4px 14px rgba(0,0,0,.18) }
      .btn.warning:active{ transform: translateY(0) }

      /* ---- chip ---- */
      .chip{
        position:absolute;
        bottom:48px; left:50%; transform:translateX(-50%);
        display:flex; gap:6px; flex-wrap:wrap;
        opacity:0; transition:opacity .15s;
        z-index:30; pointer-events: none;
      }
      .card-wrapper.editing .chip{ opacity:1; pointer-events: auto; }
      .chip .mini{
        display:flex; align-items:center; justify-content:center;
        width:32px; height:32px;
        background:linear-gradient(135deg, rgba(24,25,27,.7) 0%, rgba(40,41,43,.9) 100%);
        color:#fff; border:1px solid rgba(255,255,255,.18); border-radius:8px; cursor:pointer;
        box-shadow:0 2px 4px rgba(0,0,0,.25);
        transition:background .15s, transform .1s, box-shadow .15s;
      }
      .chip .mini span{ display:none; }
      .chip .mini:hover{
        transform:translateY(-1px);
        background:linear-gradient(135deg, rgba(24,25,27,.85) 0%, rgba(40,41,43,1) 100%);
        box-shadow:0 3px 8px rgba(0,0,0,.4);
      }
      .chip .mini ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; }
      .chip .mini.danger{
        background:linear-gradient(135deg, rgba(236,72,72,.9) 0%, rgba(255,105,97,1) 100%);
        border-color:rgba(255,255,255,.22);
      }
      .chip .mini.danger:hover{
        background:linear-gradient(135deg, rgba(236,72,72,1) 0%, rgba(255,105,97,1) 100%);
      }
      .chip .mini.pill{ padding:0; }

      /* Edit highlight */
      .card-wrapper.editing{ border-color:var(--primary-color,#03a9f4); touch-action: none; overflow: hidden; }
      .card-wrapper.editing::after{
        content:""; position:absolute; inset:0; border:1px dashed var(--primary-color,#03a9f4);
        border-radius:12px; pointer-events:none; opacity:.35; z-index:5; box-sizing:border-box;
      }

      .shield{position:absolute; inset:0; z-index:10; background:transparent; pointer-events:none}
      .card-wrapper.editing .shield, .card-wrapper.dragging .shield{pointer-events:auto; cursor:grab}

      .resize-handle{
        display:none; position:absolute; bottom: 6px; right: 6px; width:40px; height:40px;
        background: #27BEF5 !important; color:#fff; border-top-left-radius:40px;
        cursor:se-resize; z-index:9999; box-shadow:0 3px 8px rgba(0,0,0,.28);
        display:flex; align-items:center; justify-content:center;
        transition:background .15s, transform .1s, box-shadow .15s;
        border-bottom-right-radius:5px;
      }
      .resize-handle:hover{ transform:scale(1.05); box-shadow:0 6px 16px rgba(0,0,0,.35); filter:brightness(1.05); }
      .card-wrapper.editing .resize-handle{ display:flex }
      .resize-handle ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; pointer-events:none; color: #fff !important; }

      /* Delete handle */
      .delete-handle{
        display:none; position:absolute; top:0; left:0; width:40px; height:40px;
        background: linear-gradient(135deg, rgba(236,72,72,.98) 0%, rgba(255,85,85,1) 100%) !important;
        color: #fff !important;
        box-shadow:0 3px 8px rgba(0,0,0,.28); cursor:pointer; align-items:center; justify-content:center;
        transition:background .15s, transform .1s, box-shadow .15s;
        border-bottom-right-radius:10px; z-index: 9999 !important;

      }
      .delete-handle:hover{ transform:scale(1.05); box-shadow:0 6px 16px rgba(0,0,0,.35); filter:brightness(1.05); }
      .card-wrapper.editing .delete-handle{ display:flex }
      .delete-handle ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; pointer-events:none; color: #fff !important;}

      /* modal */
      .modal{ position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:9000 }
      .dialog{
        width:min(1220px,96%); max-height:min(90vh, 900px); display:flex; flex-direction:column;
        background:var(--card-background-color); border-radius:20px; padding:0; border:1px solid var(--divider-color); overflow:visible;
      }
      .dlg-head{
        display:flex; align-items:center; gap:12px; padding:12px 16px; border-bottom:1px solid var(--divider-color);
        background:
          radial-gradient(1200px 120px at 20% -40px, rgba(3,169,244,.21), transparent 60%),
          radial-gradient(900px 110px at 80% -40px, rgba(0,150,136,.18), transparent 60%);
      }
      .dlg-head h3{ margin:0; font-size:1.1rem; letter-spacing:.2px }
      .dlg-foot{ display:flex; gap:10px; justify-content:flex-end; padding:12px; border-top:1px solid var(--divider-color); background:var(--primary-background-color) }
      .btn:disabled{ opacity:.6; cursor:not-allowed }

      .visually-hidden{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}

          /* picker layout */
          .layout{display:grid;height:min(84vh,820px);grid-template-columns:260px 1fr}
          #leftPane{
            border-right:1px solid var(--divider-color);
            overflow:auto;
            background:var(--primary-background-color);
            /*
             * Remove contain:content so that fixed-position menus from
             * custom card editors can correctly position themselves
             * relative to the viewport. CSS containment can interfere
             * with anchoring of overlays.
             */
            contain:none;
          }
          /*
           * Allow content like dropdown menus from custom card editors to
           * overflow the right pane without being clipped. Using overflow
           * visible instead of hidden prevents menus from being positioned
           * far away or requiring excessive scrolling when they open.
           */
          #rightPane{
            /* Allow the right-hand editor pane to scroll vertically when
             * content from custom card editors exceeds the available space.
             * We hide horizontal overflow to avoid layout shifts. */
            overflow-y:auto;
            overflow-x:hidden;
            background:var(--primary-background-color);
          }
          .rightGrid{
            display:grid;grid-template-columns:540px 1fr;grid-template-rows:auto auto 1fr;gap:12px;padding:12px;height:100%;box-sizing:border-box;position:relative;
          }
          .sec{
            border:1px solid var(--divider-color);
            border-radius:12px;
            background:var(--card-background-color);
            overflow:visible;
            position:relative;
            /* Remove content containment on sections to prevent the
             * creation of an artificial containing block which can
             * disrupt dropdown positioning. */
            contain:none;
          }
          .sec .hd{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--divider-color);font-weight:600;position: relative;z-index: 10}
          .sec .bd{padding:12px;overflow:visible}       
          .tabs{display:flex;gap:6px;margin-left:auto}
          .tab{
            font-size:.85rem;padding:6px 10px;border-radius:10px;border:1px solid var(--divider-color);
            background:var(--primary-background-color);color:var(--primary-text-color);cursor:pointer
          }
          .tab.active{background:var(--primary-color);color:#fff;border-color:var(--primary-color)}
          .cm-editor{height: 100%}
          /* --- FIX: YAML/Visual editor: ensure the entire content is visible --- */
          /*
           * The YAML editor previously had a fixed height which caused the
           * bottom of longer configurations to be clipped. Removing the fixed
           * height allows the section to flex based on available space within
           * the grid row. A min-height of zero lets it collapse when there
           * isn't much content, while overflow:auto enables scrolling when
           * content exceeds the visible area.
           */
          #yamlSec {
            min-height: 0;
            height: auto !important;
            overflow: auto;
          }
          #yamlSec .bd {
            /* allow the YAML editor to use the full available space instead of a fixed max height */
            overflow: auto;
            max-height: none;
            /* Fill the available grid row height (1fr) so that scrolling
             * happens inside this section rather than expanding the editor
             * beyond the modal boundary. A min-height of zero ensures the
             * section can shrink when little content is present. */
            height: 100%;
            min-height: 0;
          }
          /* --- make Visual editor area scrollable, like YAML --- */
          #optionsSec {
            min-height: 0;
            overflow: auto;
          }
          #optionsSec .bd {
            position: relative;
            overflow: auto;
            height: auto;
            max-height: none;
            min-height: 0;
          }
          #editorHost {
            display: block;
            min-height: 0;
          }

          #quickFillSec { 
            display: flex; 
            flex-direction: column; 
            min-height: 0; 
          }
          #quickFillSec .bd { 
            overflow: auto;          /* scroll inside the card */
            max-height: 320px;       /* keep it contained; tweak as you wish */
          }

          /* ha-code-editor / CodeMirror height: allow growth but set a sensible minimum
           * so that very short snippets don't collapse. Using min-height
           * instead of a fixed height allows the editor to expand when the
           * parent container grows. The !important flag ensures that the
           * component’s inline styles from HA won’t override this sizing.
           */
          ha-code-editor {
            display: block;
            min-height: 260px;
            height: auto !important;
          }
          .CodeMirror {
            min-height: 260px;
            height: auto !important;
          }

          /* host that wraps the editor should also allow scroll if content grows */
          #yamlHost { 
            overflow: visible; 
            height: auto;
          }

          /* CodeMirror */
          .CodeMirror{
            height:260px;border:1px solid var(--divider-color);border-radius:12px;
            background:var(--primary-background-color);color:var(--primary-text-color);
            z-index:6;
          }

          /* YAML editor safety / visibility */
          #yamlSec{ z-index:5; }
          #yamlHost, #yamlHost * { touch-action: auto; }
          ha-code-editor, ha-code-editor * { touch-action: auto; }
          ha-code-editor{ display:block; height:260px; z-index:6; }

          /* loading spinners */
          .spin-center{
            position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events: none; /* let clicks pass through to tabs and controls */
          }


          /* marquee selection rectangle */
          .marquee{
            position:absolute; border:1px dashed var(--primary-color);
            background: color-mix(in srgb, var(--primary-color) 10%, transparent);
            pointer-events:none; z-index:50;
          }

          /* placeholder tile */
          .ddc-placeholder-inner{
            position: relative;
            display:flex; align-items:center; justify-content:center;
            width:100%; height:100%;
            border-radius:16px;
            overflow: hidden;
            /* cool gradient derived from HA primary color */
            background:
              radial-gradient(120% 120% at 100% 0%,
                color-mix(in srgb, var(--primary-color) 18%, #000 0%) 0%,
                transparent 60%),
              linear-gradient(135deg,
                color-mix(in srgb, var(--primary-color) 70%, #000 0%) 0%,
                color-mix(in srgb, var(--primary-color) 35%, #000 0%) 100%);
          }

          /* subtle shine */
          .ddc-placeholder-inner::after{
            content:"";
            position:absolute; inset:0;
            background: radial-gradient(120% 90% at 0% 100%, rgba(255,255,255,.15), transparent 60%);
            pointer-events:none;
          }

          /* center stack */
          .ddc-hero{
            position:absolute; inset:0;
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            gap:16px; text-align:center; padding:24px;
            color:rgba(255,255,255,.98);
            text-shadow:0 1px 2px rgba(0,0,0,.35);
            user-select:none; pointer-events:none; /* click goes to shield below */
          }

          .ddc-hero img{
            width:128px; height:128px; object-fit:contain; opacity:.95; filter: drop-shadow(0 4px 14px rgba(0,0,0,.25));
          }

          .ddc-hero .ddc-title{
            font-weight:800; font-size:1.25rem; letter-spacing:.2px;
          }

          .ddc-hero .ddc-sub{
            font-weight:600; opacity:.95;
          }

          /* --- hold-to-edit ring (cursor progress) --- */
          .ddc-press-ring{
            position:fixed; z-index:100000; width:44px; height:44px; pointer-events:none;
            margin-left:-22px; margin-top:-22px;
            filter: drop-shadow(0 2px 6px rgba(0,0,0,.35));
          }
          .ddc-press-ring svg{width:44px;height:44px}
          .ddc-press-ring .pr-bg{stroke: rgba(255,255,255,.45); stroke-width:4; fill:none}
          .ddc-press-ring .pr-fg{stroke: var(--primary-color); stroke-width:4; fill:none; stroke-linecap:round}
          .ddc-press-ring .pr-dot{fill: var(--primary-color); opacity:.95}

          /* --- edit-mode ripple transition --- */
          .ddc-ripple-veil{
            position:absolute; inset:0; pointer-events:none; z-index:80; overflow:hidden;
            mix-blend-mode: screen;
          }
          .ddc-ripple-veil::before{
            content:""; position:absolute; left: var(--rip-x, 50%); top: var(--rip-y, 50%);
            width:0px; height:0px; transform: translate(-50%,-50%);
            border-radius:50%;
            background:
              radial-gradient(closest-side, rgba(3,169,244,.55), rgba(3,169,244,.25) 45%, rgba(0,0,0,0) 65%),
              radial-gradient(closest-side, rgba(0,150,136,.35), rgba(0,150,136,.15) 50%, rgba(0,0,0,0) 70%);
            filter: blur(12px);
            animation: ddc-ripple-grow 900ms ease-out forwards;
          }
          .ddc-ripple-veil::after{
            content:""; position:absolute; inset:-20%;
            background:
              repeating-linear-gradient(115deg, rgba(3,169,244,.09) 0 12px, rgba(0,0,0,0) 12px 24px);
            opacity:0;
            animation: ddc-ripple-scan 900ms ease-out forwards;
          }
          @keyframes ddc-ripple-grow{
            0%   { width:0; height:0; opacity:.9 }
            60%  { width:150vmax; height:150vmax; opacity:.9 }
            100% { width:170vmax; height:170vmax; opacity:0 }
          }
          @keyframes ddc-ripple-scan{
            0%   { transform:scale(.96) rotate(0deg); opacity:0 }
            40%  { opacity:.7 }
            100% { transform:scale(1.06) rotate(2deg); opacity:0 }
          }


/* ===== DDC TABS — Minimal Redesign (pills with accent tint) ===== */
    
/* ====================================================================
   CHROME-LIKE TABS • spaced + concave bottoms (sticky, CSS-only)
   ==================================================================== */

/*
 * Tabs bar: stick below the toolbar when edit mode is active.
 * The top offset uses a CSS custom property --ddc-toolbar-height set via
 * JavaScript when toggling edit mode.  This ensures that in both
 * dynamic and auto modes the tabs bar always sits directly beneath
 * the toolbar whenever it is visible.  When the toolbar is hidden,
 * --ddc-toolbar-height defaults to 0 so the tabs bar sticks to the
 * very top of the viewport.  We also include env(safe-area-inset-top)
 * to respect devices with notches/safe areas.
 */
.ddc-tabs {
  --bg: var(--card-background-color, #16181c);
  --fg: var(--primary-text-color, #e6e8ea);
  --accent: var(--primary-color, #6aa4ff);
  --hair: color-mix(in oklab, var(--fg) 16%, transparent);

  --h: 42px;
  --gap: 16px;
  --r-top: 14px;
  --padX: 18px;

  position: sticky;
  top: calc(max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px));
  z-index: 100;

  display: flex;
  align-items: flex-end;
  column-gap: var(--gap);
  padding: 0 12px;
  width: 100%;
  box-sizing: border-box;

  background: var(--bg);
  border-bottom: 2px solid color-mix(in oklab, var(--accent) 55%, transparent);

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  scrollbar-gutter: stable;

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 16px,
    #000 calc(100% - 16px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 16px,
    #000 calc(100% - 16px),
    transparent 100%
  );
}

.ddc-tabs::-webkit-scrollbar {
  height: 8px;
}
.ddc-tabs::-webkit-scrollbar-thumb {
  background: color-mix(in oklab, var(--fg) 30%, transparent);
  border-radius: 999px;
}
.ddc-tabs::-webkit-scrollbar-track {
  background: transparent;
}

/* ---------- TAB (Chrome-like shape) ---------- */
/* ====================================================================
   CHROME-LIKE TABS • centered + concave bottoms (sticky, CSS-only)
   ==================================================================== */
/* ====================================================================
   CHROME-LIKE TABS • centered • concave bottoms • light active
   Markup stays: <div class="ddc-tabs"> … .ddc-tab(.active) … </div>
   ==================================================================== */

/* ---------- BAR (sticky baseline) ---------- */
.ddc-tabs{
  /* Theme tokens (HA-aware) */
  --bg: var(--card-background-color, #16181c);
  --fg: var(--primary-text-color, #e6e8ea);
  --accent: var(--primary-color, #6aa4ff);
  --hair: color-mix(in oklab, var(--fg) 16%, transparent);

  /* Geometry knobs */
  --h: 42px;       /* tab height */
  --gap: 18px;     /* space between tabs */
  --r-top: 14px;   /* top radius */
  --cut: 22px;     /* concave cut depth at bottom corners (18–26 good) */
  --padX: 18px;    /* horizontal padding */

  position: sticky;
  top: calc(max(env(safe-area-inset-top,0px), 0px) + var(--ddc-toolbar-height, 0px));
  z-index: 100;

  display: flex;
  align-items: flex-end;
  justify-content: center;          /* center when there’s room */
  column-gap: var(--gap);
  padding: 0 12px;
  width: 100%;
  box-sizing: border-box;

  background: var(--bg);
  border-bottom: 2px solid color-mix(in oklab, var(--accent) 55%, transparent);

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  scrollbar-gutter: stable;

  /* discoverable overflow edges */
  -webkit-mask-image: linear-gradient(to right, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%);
}
.ddc-tabs::-webkit-scrollbar{ height: 8px; }
.ddc-tabs::-webkit-scrollbar-thumb{ background: color-mix(in oklab, var(--fg) 30%, transparent); border-radius: 999px; }
.ddc-tabs::-webkit-scrollbar-track{ background: transparent; }

/* ---------- TAB (concave corners painted; no masks required) ---------- */
.ddc-tab{
  -webkit-tap-highlight-color: transparent;
  position: relative;
  flex: 0 0 auto;
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: var(--h);
  min-width: clamp(120px, 18ch, 280px);
  padding: 0 var(--padX);
  scroll-snap-align: start;

  font: 600 13.5px/1 system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans";
  letter-spacing: .2px;
  color: color-mix(in oklab, var(--fg) 92%, transparent);
  cursor: pointer;
  user-select: none;

  /* Fill with “carved” concave bottom corners:
     we paint the BAR color into the corner arcs, which visually cuts inward */
  background:
    radial-gradient(120% 140% at 0 100%,     var(--bg) 0 calc(var(--cut)), transparent calc(var(--cut) + 1px)) left  bottom / var(--cut) calc(var(--cut) + 6px) no-repeat,
    radial-gradient(120% 140% at 100% 100%,  var(--bg) 0 calc(var(--cut)), transparent calc(var(--cut) + 1px)) right bottom / var(--cut) calc(var(--cut) + 6px) no-repeat,
    linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));

  /* Border drawn as inset so it follows the carve perfectly */
  box-shadow:
    0 0 0 1px var(--hair) inset,
    0 2px 8px rgba(0,0,0,.22);

  border: none;
  border-top-left-radius: var(--r-top);
  border-top-right-radius: var(--r-top);

  /* sit slightly above the baseline so the concave is visible */
  transform: translateY(4px);
  transition:
    transform .16s cubic-bezier(.2,.6,.2,1),
    box-shadow .18s ease,
    color .16s ease,
    background-color .18s ease,
    filter .18s ease;
}

/* icon + label */
.ddc-tab ha-icon{ --mdc-icon-size: 18px; opacity: .95; }
.ddc-tab .ddc-tab-label{ max-width: 100%; overflow: hidden; text-overflow: ellipsis; }

/* Hover: gentle raise and slightly clearer edge */
.ddc-tab:hover{
  transform: translateY(2px);
  box-shadow:
    0 0 0 1px color-mix(in oklab, var(--fg) 24%, transparent) inset,
    0 6px 12px rgba(0,0,0,.18);
}

/* Pressed */
.ddc-tab:active{ transform: translateY(4px) scale(.99); }

/* Focus ring */
.ddc-tab:focus-visible{
  outline: none;
  box-shadow:
    0 0 0 2px color-mix(in oklab, var(--accent) 60%, transparent),
    0 0 0 6px color-mix(in oklab, var(--fg) 18%, transparent),
    0 2px 8px rgba(0,0,0,.22);
}

/* ---------- ACTIVE (lighter background, connected to bar) ---------- */
.ddc-tab.active{
  z-index: 2;
  transform: translateY(0);
  color: var(--fg);

  /* lighter body like your reference */
  background:
    radial-gradient(120% 140% at 0 100%,     var(--bg) 0 calc(var(--cut)), transparent calc(var(--cut) + 1px)) left  bottom / var(--cut) calc(var(--cut) + 6px) no-repeat,
    radial-gradient(120% 140% at 100% 100%,  var(--bg) 0 calc(var(--cut)), transparent calc(var(--cut) + 1px)) right bottom / var(--cut) calc(var(--cut) + 6px) no-repeat,
    linear-gradient(180deg,
      color-mix(in oklab, #fff 20%, var(--bg) 80%),
      color-mix(in oklab, #fff 10%, var(--bg) 90%));
  box-shadow:
    0 0 0 1px color-mix(in oklab, var(--fg) 26%, transparent) inset,
    0 10px 16px rgba(0,0,0,.16),
    0 2px 0 0 var(--bg);   /* hide the blue baseline under the active tab */
}

/* Optional small accent tick under the active tab */
.ddc-tab::after{
  content:"";
  position:absolute; left: 24px; right: 24px; bottom: -2px;
  height: 2px; border-radius: 2px;
  background: color-mix(in oklab, var(--accent) 72%, transparent);
  opacity: 0; transition: opacity .18s ease;
}
.ddc-tab.active::after{ opacity: 1; }

/* Disabled */
.ddc-tab[disabled], .ddc-tab[aria-disabled="true"]{
  opacity:.55; cursor:not-allowed; filter: saturate(.75);
}

/* Dark-mode base (kept HA-aware) */
@media (prefers-color-scheme: dark){
  .ddc-tabs{
    --bg: var(--card-background-color, #0f1216);
    --fg: var(--primary-text-color, #e6e8ea);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  .ddc-tab{ transition: none !important; }
}

/* Fallback for older engines */
@supports not (scrollbar-gutter: stable){
  .ddc-tabs{ padding-inline-end: 16px; }
}





/* ===== DDC Tabs —END ==================== */


        /* Fly‑in animation for card wrappers. When the animate_cards
           configuration option is enabled, card wrappers will animate
           into view using this keyframe sequence. Cards translate
           upward while fading in to produce a quick, pleasant fly‑in. */
        @keyframes ddc-card-fly-in{
          0%   { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* Apply the fly‑in animation to visible cards. The animation
           duration and easing mirror other UI animations for cohesion. */
        .card-wrapper.ddc-fly-in{
          animation: ddc-card-fly-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
              

        
/* === GRID SELECT PATCH START (styles) === */
.ddc-grid-canvas {
  position: absolute;
  inset: 0;
  pointer-events: auto;     /* receives events only on empty space since it's behind cards */
  z-index: 5;               /* above visual grid, but behind draggable cards */
}
/* === GRID SELECT PATCH END (styles) === */
</style>
        <div class="ddc-root">
        
<div class="toolbar ddc-toolbar streamlined v2" role="toolbar" aria-label="Layout editor">

  <!-- Add & Save -->
  <section class="ddc-sec sec-primary" aria-label="Add & Save">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Add &amp; Save</span>
    </header>
    <div class="ddc-row">
      <button class="btn primary cta-add" id="addCardBtn" style="display:none" data-tooltip="Add card">
        <ha-icon icon="mdi:plus"></ha-icon><span class="label">Add Card</span>
      </button>
      <button class="btn secondary" id="applyLayoutBtn" style="display:none" data-tooltip="Save">
        <ha-icon icon="mdi:content-save"></ha-icon><span class="label">Save</span>
      </button>
    </div>
  </section>

  <!-- Clipboard -->
  <section class="ddc-sec sec-clip" aria-label="Clipboard">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Clipboard</span>
    </header>
    <div class="ddc-row">
      <button class="btn secondary" id="copyBtn" style="display:none" data-tooltip="Copy">
        <ha-icon icon="mdi:content-copy"></ha-icon><span class="label">Copy</span>
      </button>
      <button class="btn secondary" id="pasteBtn" style="display:none" data-tooltip="Paste">
        <ha-icon icon="mdi:content-paste"></ha-icon><span class="label">Paste</span>
      </button>
    </div>
  </section>

  <!-- Import & Share -->
  <section class="ddc-sec sec-share" aria-label="Import & Share">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Import &amp; Share</span>
    </header>
    <div class="ddc-row">
      <button class="btn secondary" id="importBtn" style="display:none" data-tooltip="Import YAML">
        <ha-icon icon="mdi:upload"></ha-icon><span class="label">Import</span>
      </button>
      <button class="btn secondary" id="exportBtn" style="display:none" data-tooltip="Export YAML">
        <ha-icon icon="mdi:download"></ha-icon><span class="label">Export</span>
      </button>
      <button class="btn info hads" id="exploreBtn" style="display:none" data-tooltip="Open HADS">
        <ha-icon icon="mdi:storefront-outline"></ha-icon><span class="label">Open HADS</span>
      </button>
      <button class="btn danger" id="exitEditBtn" style="display:none" data-tooltip="Exit edit mode">
        <ha-icon icon="mdi:exit-run"></ha-icon><span class="label">Exit Edit Mode</span>
      </button>
    </div>
  </section>
  

  <!-- Utilities -->
  <section class="ddc-sec sec-utils" aria-label="Utilities">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Utilities</span>
    </header>
    <div class="ddc-row">
      <button class="btn secondary" id="reloadBtn" style="display:none" data-tooltip="Reload">
        <ha-icon icon="mdi:refresh"></ha-icon><span class="label">Reload</span>
      </button>
      <button class="btn secondary" id="diagBtn" style="display:none" data-tooltip="Diagnostics">
        <ha-icon icon="mdi:play-circle-outline"></ha-icon><span class="label">Diagnostics</span>
      </button>
      <button class="btn secondary" id="settingsBtn" style="display:none" data-tooltip="Card Settings">
        <ha-icon icon="mdi:cog"></ha-icon><span class="label">Card Settings</span>
      </button>
    </div>
  </section>

  <!-- Status -->
  <section class="ddc-sec sec-status" aria-label="Status">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Status</span>
    </header>
    <div class="ddc-row">
      <span class="ddc-t-status ok" id="ddcStatus" style="display:none" aria-live="polite">
        <span class="ddc-t-dot" id="ddcDot" aria-hidden="true"></span>
        <span class="ddc-t-text" id="ddcStatusText">storage: backend · OK</span>
      </span>
      <span class="store-badge" id="storeBadge" title="Where layout is persisted" style="display:none">storage: backend · OK</span>
    </div>
  </section>

</div>


          <!-- Tabs & card container -->
          <div class="ddc-tabs" id="tabsBar" style="display:none"></div>
          <div class="card-container" id="cardContainer">
            <!-- host for particles.js / YouTube backgrounds -->
            <div class="ddc-bg-host" id="ddcBgHost" aria-hidden="true"></div>
          </div>



      `;
      this.cardContainer = this.shadowRoot.querySelector('#cardContainer');
      try { this._applyBackgroundFromConfig?.(); } catch {}

      // Reapply screensaver settings now that the card container exists. This ensures
      // the idle timer starts immediately and the overlay is appended correctly.
      try { this._updateScreensaverSettings?.(); } catch {}
      this.addButton     = this.shadowRoot.querySelector('#addCardBtn');
      this.reloadBtn     = this.shadowRoot.querySelector('#reloadBtn');
      this.diagBtn       = this.shadowRoot.querySelector('#diagBtn');
      this.exitEditBtn   = this.shadowRoot.querySelector('#exitEditBtn');
      this.storeBadge    = this.shadowRoot.querySelector('#storeBadge');
      this.exportBtn     = this.shadowRoot.querySelector('#exportBtn');
      this.importBtn     = this.shadowRoot.querySelector('#importBtn');
      this.exploreBtn    = this.shadowRoot.querySelector('#exploreBtn'); 
      this.applyLayoutBtn= this.shadowRoot.querySelector('#applyLayoutBtn');
      // Copy and Paste buttons (for edit mode)
      this.copyBtn      = this.shadowRoot.querySelector('#copyBtn');
      this.pasteBtn     = this.shadowRoot.querySelector('#pasteBtn');
      this.settingsBtn  = this.shadowRoot.querySelector('#settingsBtn');
      this.tabsBar      = this.shadowRoot.querySelector('#tabsBar');
      this.rootEl       = this.shadowRoot.querySelector('.ddc-root');
      try { this._renderTabs(); this._applyActiveTab(); } catch {}
     

      this._applyGridVars();
      
      this.addButton.addEventListener('click', () => {
        if (!this.editMode) this._toggleEditMode(true);
        this._openCardManager();
      });      
      this.reloadBtn.addEventListener('click', () => this._initialLoad(true));
      this.diagBtn.addEventListener('click', () => this._openDiagnostics());
      this.exitEditBtn.addEventListener('click', () => this._toggleEditMode(false));
      this.exportBtn.addEventListener('click', () => this._exportDesign());
      this.importBtn.addEventListener('click', () => this._importDesign());
      this.applyLayoutBtn.addEventListener('click', () => this._saveLayout(false));

      // Wire up copy/paste handlers. Only enabled in edit mode; see _toggleEditMode.
      if (this.copyBtn) this.copyBtn.addEventListener('click', () => this._copySelection());
      if (this.pasteBtn) this.pasteBtn.addEventListener('click', () => this._pasteClipboard());

      // Open the dashboard settings menu when settings button is clicked
      if (this.settingsBtn) this.settingsBtn.addEventListener('click', () => this._openDashboardSettings());
       // Ctrl/Cmd + S to Apply while in DDC edit mode
       window.addEventListener('keydown', (e) => {
         if (!this.editMode) return;
         if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
           e.preventDefault();
           this._saveLayout(false);
         }
    // Observe host size for auto scaling (legacy retention for compatibility)
    if (!this.__ddcResizeObs && this.autoResizeCards) {
      this.__ddcResizeObs = new ResizeObserver(() => this._applyAutoScale?.());
      try { this.__ddcResizeObs.observe(this); } catch {}
      try { this.__ddcResizeObs.observe(this.cardContainer); } catch {}
      try { if (this.parentElement) this.__ddcResizeObs.observe(this.parentElement); } catch {}
      try { if (this.offsetParent) this.__ddcResizeObs.observe(this.offsetParent); } catch {}
      window.addEventListener('resize', this.__ddcOnWinResize = () => this._applyAutoScale?.());
    }
    // initial scale (legacy)
    this._applyAutoScale?.();

       });

      this.exploreBtn.addEventListener('click', () =>
        window.open('https://hads.smarti.dev/', '_blank', 'noopener,noreferrer')
      );

      // apply container sizing early
      this._applyContainerSizingFromConfig(true);
      this._applyAutoScale?.();
      // Long-press on blank space (4s) to enter edit; Esc exits
      this._installLongPressToEnterEdit();
      this._startScaleWatch?.();

      window.addEventListener('keydown', (e)=>{ if (e.key === 'Escape' && this.editMode) this._toggleEditMode(false);
    // Observe host size for auto scaling
    // Observe host size only if auto-resize is enabled
    if (!this.__ddcResizeObs && this.autoResizeCards) {
      this.__ddcResizeObs = new ResizeObserver(() => this._applyAutoScale?.());
      try { this.__ddcResizeObs.observe(this); } catch {}
      try { this.__ddcResizeObs.observe(this.cardContainer); } catch {}
      window.addEventListener('resize', this.__ddcOnWinResize = () => this._applyAutoScale?.());
    }
    // initial scale
    this._applyAutoScale?.();
 });

      // selection interactions in container
      this._installSelectionMarquee();
      this.cardContainer.addEventListener('mousedown', (e) => {
        if (!this.editMode) return;
        if (e.target.closest('.card-wrapper')) return; // handled per-card
        if (!e.shiftKey && !e.ctrlKey && !e.metaKey) this._clearSelection();
      });
    }

    // Persist new option knobs into storage so next load matches the config.
    // Skip while in HA’s editor preview to avoid churn. Only queue save in edit mode (handled in _queueSave)
    try { if (!this._isInHaEditorPreview()) this._queueSave('config-change'); } catch {}

    this._updateStoreBadge();
    if (this.cardContainer) this._toggleEditMode(false);

    // Only rebuild from storage on first boot or when storage_key changes.
    // For normal config tweaks, just reflow with the new options.
   // Boot/rebuild logic
    this.__cfgReady = true;
    if (keyChanged && this.__booted) {
      this._initialLoad(true);
    } else if (!this.__booted && this.__probed) {
      this.__booted = true;
      this._initialLoad();
    } else {
      this._applyContainerSizingFromConfig(true);
      this._applyAutoScale?.();
      this._resizeContainer();
    }
  }

  
// === Initial autosize kick (view-mode safe) ===
_startInitialAutosize() {
  try {
    if (this.__autoInitStarted) return;
    this.__autoInitStarted = true;

    // Debounced apply to collapse bursty triggers
    let scheduled = false;
    const apply = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        try { this._applyAutoScale?.(); } catch {}
      });
    };

    // Kick a couple of frames to settle fonts/slots
    requestAnimationFrame(() => { apply(); requestAnimationFrame(apply); });
    setTimeout(apply, 0);
    try { document.fonts?.ready?.then(apply); } catch {}

    // Scope the MutationObserver: when auto-resize is OFF, avoid attribute churn
    const mode = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
    const inner = this.cardContainer || this.querySelector('#cardContainer');
    if (!inner) return;

    const optsWhenScaling = { childList: true, subtree: true, attributes: true, attributeFilter: ['style','class'] };
    const optsWhenStatic  = { childList: true, subtree: true }; // no attribute observation

    const observeAttrs = (this.autoResizeCards || mode === 'auto');
    const mo = new MutationObserver(() => apply());
    mo.observe(inner, observeAttrs ? optsWhenScaling : optsWhenStatic);
    this.__autoInitMO = mo;

    // Auto-stop after 2s to avoid long-running loops on heavy dashboards
    setTimeout(() => { try { mo.disconnect(); } catch {}; this.__autoInitMO = null; }, 2000);
  } catch {}
}


connectedCallback() {
    try { this._installGridObservers_(); this._updateGridButtonsVisibility(); } catch {}this._startInitialAutosize?.();
    try { this._applyHaChromeVisibility_?.(); 
// After any card drop, re-apply auto fill (no-scale) when in Auto mode
this.addEventListener('ddc:dragend', () => {
  const m = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
  if (m === 'auto') requestAnimationFrame(() => this._applyAutoFillNoScale?.());
});

    // Setup screen saver styles and timers
    try {
      this._ensureScreenSaverStyles?.();
      this._updateScreensaverSettings?.();
    } catch {}
} catch {
// After any card drop, re-apply auto fill (no-scale) when in Auto mode
this.addEventListener('ddc:dragend', () => {
  const m = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
  if (m === 'auto') requestAnimationFrame(() => this._applyAutoFillNoScale?.());
});

}
    if (!this.__keyHandlerBound) { this.__keyHandler = (e)=>this._onKeyDown_(e); window.addEventListener('keydown', this.__keyHandler); this.__keyHandlerBound = true; 
// After any card drop, re-apply auto fill (no-scale) when in Auto mode
this.addEventListener('ddc:dragend', () => {
  const m = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
  if (m === 'auto') requestAnimationFrame(() => this._applyAutoFillNoScale?.());
});

}
    if (!this.__boundExitEdit) {
      this.__boundExitEdit = () => this._toggleEditMode(false);
    
// After any card drop, re-apply auto fill (no-scale) when in Auto mode
this.addEventListener('ddc:dragend', () => {
  const m = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
  if (m === 'auto') requestAnimationFrame(() => this._applyAutoFillNoScale?.());
});

}
    window.addEventListener('pagehide', this.__boundExitEdit);
    window.addEventListener('beforeunload', this.__boundExitEdit);
  
    this.__onVis = () => { if (document.visibilityState === 'hidden') this._toggleEditMode(false); 
// After any card drop, re-apply auto fill (no-scale) when in Auto mode
this.addEventListener('ddc:dragend', () => {
  const m = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
  if (m === 'auto') requestAnimationFrame(() => this._applyAutoFillNoScale?.());
});

};
    document.addEventListener('visibilitychange', this.__onVis);
  
    // NEW: ensure we never boot in edit mode
    this._toggleEditMode(false);
  

// Ensure scale reapplies when the card becomes visible (e.g., after a tab switch)
if (!this.__visObs) {
  const io = new IntersectionObserver((entries) => {
    if (entries.some(e => e.isIntersecting)) {
      requestAnimationFrame(() => this._applyAutoScale && this._applyAutoScale()); 


      io.observe(this);
      this.__visObs = io;
    }
    });

// After any card drop, re-apply auto fill (no-scale) when in Auto mode
this.addEventListener('ddc:dragend', () => {
  const m = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
  if (m === 'auto') requestAnimationFrame(() => this._applyAutoFillNoScale?.());
});

}

// Also respond to window resizes
// Respond to window resizes ONLY when scaling is active
this.__ddcOnWinResize = this.__ddcOnWinResize || (() => {
  if (this.hasAttribute('ddc-fixed-ui')) {
    try { this._computeHaSidebarGutters_?.(); } catch {}
  }
  this._applyAutoScale?.();
});

// Only attach when scaling is active (auto-resize ON or mode === 'auto')
try {
  const mode = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
  if (this.autoResizeCards || mode === 'auto') {
    window.addEventListener('resize', this.__ddcOnWinResize);
  } else {
    window.removeEventListener('resize', this.__ddcOnWinResize);
  }
} catch {}

    try { this.__ddcBindPointerListeners?.(); 
// After any card drop, re-apply auto fill (no-scale) when in Auto mode
this.addEventListener('ddc:dragend', () => {
  const m = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
  if (m === 'auto') requestAnimationFrame(() => this._applyAutoFillNoScale?.());
});

} catch {
// After any card drop, re-apply auto fill (no-scale) when in Auto mode
this.addEventListener('ddc:dragend', () => {
  const m = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
  if (m === 'auto') requestAnimationFrame(() => this._applyAutoFillNoScale?.());
});

}

// After any card drop, re-apply auto fill (no-scale) when in Auto mode
this.addEventListener('ddc:dragend', () => {
  const m = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
  if (m === 'auto') requestAnimationFrame(() => this._applyAutoFillNoScale?.());
});

}
  
  disconnectedCallback() {
    try { this._uninstallGridObservers_(); } catch {}try { this._setHeaderVisible_?.(true); this._setSidebarVisible_?.(true); } catch {}
    try { this._applyHaChromeVisibility_?.(); } catch {}
    if (this.__keyHandlerBound && this.__keyHandler) { window.removeEventListener('keydown', this.__keyHandler); this.__keyHandlerBound = false; this.__keyHandler = null; }
    if (!this.__keyHandlerBound) { this.__keyHandler = (e)=>this._onKeyDown_(e); window.addEventListener('keydown', this.__keyHandler); this.__keyHandlerBound = true; }
    try { this._destroyParticles_?.(); } catch {}
    try { this._destroyYouTube_?.(); } catch {}
    window.removeEventListener('pagehide', this.__boundExitEdit);
    window.removeEventListener('beforeunload', this.__boundExitEdit);
    document.removeEventListener('visibilitychange', this.__onVis);

    // Clean up screensaver timers and listeners
    try {
      if (this._screensaverTimer) { clearTimeout(this._screensaverTimer); this._screensaverTimer = null; }
      if (this._clockInterval) { clearInterval(this._clockInterval); this._clockInterval = null; }
      if (this._screensaverActivityHandler) {
        const _evs = this._screensaverEvents || [];
        _evs.forEach(ev => {
          document.removeEventListener(ev, this._screensaverActivityHandler, true);
        });
      }
      // Remove overlay element if present
      if (this.screenSaverOverlay && this.screenSaverOverlay.parentNode) {
        this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay);
      }
    } catch {}

    // cleanup observers
    try { this.__ddcResizeObs?.disconnect(); } catch {}
    this.__ddcResizeObs = null;

    // stop scale watcher
    this._stopScaleWatch?.();

    // remove resize listener
    if (this.__ddcOnWinResize) {
      window.removeEventListener('resize', this.__ddcOnWinResize);
      this.__ddcOnWinResize = null;
    }

    // NEW: remove long-press listeners if installed
    if (this.__lpInstalled && this.__lpHandlers) {
      const cont = this.cardContainer;
      cont?.removeEventListener('mousedown', this.__lpHandlers.mouseDown);
      window.removeEventListener('mousemove', this.__lpHandlers.mouseMove);
      window.removeEventListener('mouseup', this.__lpHandlers.mouseUp);
      window.removeEventListener('contextmenu', this.__lpHandlers.contextMenu);
      cont?.removeEventListener('touchstart', this.__lpHandlers.touchStart);
      window.removeEventListener('touchmove', this.__lpHandlers.touchMove);
      window.removeEventListener('touchend', this.__lpHandlers.touchEnd);
      window.removeEventListener('touchcancel', this.__lpHandlers.touchCancel);
      this.__lpInstalled = false;
      this.__lpHandlers = null;
    }
  

try { this.__visObs && this.__visObs.disconnect(); } catch(e) {}
this.__visObs = null;
if (this.__ddcOnWinResize) {
  window.removeEventListener('resize', this.__ddcOnWinResize);
}

    try {
      if (this.__ddcPtrBound) {
        this.removeEventListener('pointerdown', this.__onDDCPointerDown);
        this.removeEventListener('pointermove', this.__onDDCPointerMove);
        window.removeEventListener('pointerup', this.__onDDCPointerUp);
        window.removeEventListener('pointercancel', this.__onDDCPointerUp);
        this.__ddcPtrBound = false;
      }
    } catch {}
}
  

  set hass(hass) {
    this._hass = hass;
    LOG('set hass');
    if (!this.__probed && hass) {
      this.__probed = true;
      this._probeBackend().then(() => { 
        this.__probed = true; 
        if (!this.__booted && this.__cfgReady) { 
          this.__booted = true; 
          this._initialLoad(true); 
        } 
      });
    }
    
    const wraps = this.cardContainer?.children || [];
    for (const wrap of wraps) {
      const c = wrap.firstElementChild;
      if (c && c.hass !== hass) {
        c.hass = hass;
        // Don't reprocess card_mod here - it will be handled by _processCardModOnce
      }
    }

    // After updating hass on all cards, re‑evaluate visibility so that state
    // conditions are applied when not editing. Visibility is not applied during
    // edit mode so that all cards remain visible while editing.
    try { this._applyVisibility_(); } catch {}
  }
  
  get hass() { return this._hass; }

  /* ------------------------ Initial load / rebuild ------------------------ */
  async _initialLoad(force = false) {
    // prevent multiple parallel boots
    if (this.__booting) return;
    this.__booting = true;

    try {
      // mark loading in progress to prevent autosave during rebuild
      this._loading = true;

      if (force && this.cardContainer) {
        this.cardContainer.innerHTML = '';
      }

      this._dbgPush('boot', 'Initial load start', { force });

      const __rebuildAfter = [];
      let saved = null;

      // Try backend first if available
      if (this._backendOK && this.storageKey) {
        try {
          saved = await this._loadLayoutFromBackend(this.storageKey);
        } catch (e) {
          this._dbgPush('boot', 'Backend load failed', { error: String(e) });
        }
      }

      // Fallback: localStorage (and migrate to backend if possible)
      if (!saved && this.storageKey) {
        let local = null;
        try {
          local = JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`) || 'null');
        } catch {}
        if (local) {
          this._dbgPush('boot', 'Found local snapshot', { bytes: JSON.stringify(local).length });

          if (this._backendOK) {
            try {
              await this._saveLayoutToBackend(this.storageKey, local);
              this._dbgPush('boot', 'Migrated local -> backend');
              saved = local;
            } catch (e) {
              this._dbgPush('boot', 'Migration failed, staying local', { error: String(e) });
              saved = local;
            }
          } else {
            saved = local;
          }
        }
      }

      // Fallback: embedded YAML config
      if (!saved && this._config?.cards?.length) {
        this._dbgPush('boot', 'Using embedded config');
        saved = { cards: this._config.cards };
      }

      // Snapshot of YAML before we overlay anything
      const yamlCfg = { ...(this._config || {}) };

      // 1) Apply persisted options as baseline
        if (saved?.options) {
  const { storage_key, ...optsNoKey } = saved.options;
  // Do not let stale snapshot backgrounds override YAML card config
  delete optsNoKey.background_mode;
  delete optsNoKey.background_image;
  delete optsNoKey.background_particles;
  delete optsNoKey.background_youtube;
  this._applyImportedOptions(optsNoKey, true);
} else if (typeof saved?.grid === 'number') {
        this._applyImportedOptions({ grid: saved.grid }, true);
      }

      // 2) Overlay explicit YAML options (take precedence)
      const overrideKeys = [
        'storage_key','grid','drag_live_snap','auto_save','auto_save_debounce',
        'container_background','card_background','card_shadow','debug','disable_overlap',
        'container_size_mode','container_fixed_width','container_fixed_height',
        'container_preset','container_preset_orientation','tabs','tabs_position','default_tab','hide_tabs_when_single', 'auto_resize_cards', 'background_mode', 'background_image', 'background_particles', 'background_youtube'];
      const cfgOpts = {};
      for (const k of overrideKeys) {
        if (yamlCfg[k] !== undefined) cfgOpts[k] = yamlCfg[k];
      }
      if (Object.keys(cfgOpts).length) {
        this._applyImportedOptions(cfgOpts, true);
      }

      // Build cards
      let builtAny = false;

      if (saved?.cards?.length) {
        for (const conf of saved.cards) {
          if (!conf?.card || (typeof conf.card === 'object' && Object.keys(conf.card).length === 0)) {
            // empty/placeholder
            const wrap = this._makePlaceholderAt(
              conf.position?.x || 0,
              conf.position?.y || 0,
              conf.size?.width  || 200,
              conf.size?.height || 200
            );
            this.cardContainer.appendChild(wrap);
            try { this._rebuildOnce(wrap.firstElementChild); } catch {}
            builtAny = true;
            continue;
          }

          const cardEl = await this._createCard(conf.card);
          const wrap = this._makeWrapper(cardEl);
          if (this.editMode) wrap.classList.add('editing');
          wrap.dataset.tabId = this._normalizeTabId(conf.tabId || conf.tab_id || this.defaultTab);

          this._setCardPosition(wrap, conf.position?.x || 0, conf.position?.y || 0);
          wrap.style.width  = `${conf.size?.width  ?? 14 * this.gridSize}px`;
          wrap.style.height = `${conf.size?.height ?? 10 * this.gridSize}px`;
          if (conf.z != null) wrap.style.zIndex = String(conf.z);

          this.cardContainer.appendChild(wrap);

          try { this._rebuildOnce(wrap.firstElementChild); } catch {}
          this._initCardInteract(wrap);
          builtAny = true;
        }

        this._resizeContainer();
        this._applyAutoScale?.();
        this._dbgPush('boot', 'Layout applied', { count: saved.cards.length });
      }

      if (!builtAny) {
        this._showEmptyPlaceholder();
        this._applyAutoScale?.();
        this._dbgPush('boot', 'No saved layout found; showing placeholder');
      }

      this._updateStoreBadge();
      this._syncEmptyStateUI();

      // Ensure card-mod runs once after first paint
      if (force) this._cardModProcessed = false;
      setTimeout(() => {
        this._processCardModOnce();
      }, 100);

      // Rebuild signals for nested cards
      try {
        __rebuildAfter.forEach((el) => {
          try {
            el.dispatchEvent(new Event('ll-rebuild', { bubbles: true, composed: true }));
          } catch {}
        });
      } catch {}
    } finally {
      this._loading = false;
      this.__booting = false;
      this.__dirty = false;
      this._updateApplyBtn?.();
      try { this._renderTabs(); this._applyActiveTab(); } catch {}
      // Reevaluate visibility after the layout has been built. Cards with
      // visibility conditions will hide themselves when not in edit mode.
      try { this._applyVisibility_(); } catch {}
      try {
        const host = this.cardContainer?.querySelector?.('#ddcBgHost');
        if (!host || !host.firstChild) this._applyBackgroundFromConfig?.();
      } catch {}
    }
  }


  
  /* ------------------------------ Tabs support ------------------------------ */
  _normalizeTabId(tabId) {
    const valid = Array.isArray(this.tabs) ? this.tabs.map(t => t.id) : [];
    if (!valid.length) return this.defaultTab || 'default';
    return (tabId && valid.includes(tabId)) ? tabId : (this.defaultTab || valid[0]);
  }
  _renderTabs() {
    const bar = this.tabsBar; if (!bar) return;
    const tabs = Array.isArray(this.tabs) ? this.tabs : [];
    if (!tabs.length || (tabs.length === 1 && this.hideTabsWhenSingle)) {
      bar.style.display = 'none';
      return;
    }
    bar.style.display = '';
    bar.className = 'ddc-tabs ' + (this.tabsPosition === 'left' ? 'ddc-tabs-left' : '');
    bar.innerHTML = '';

    // In auto size mode the tabs bar should always span the viewport width.
    // Reset any previously calculated width/maxWidth values (from dynamic mode
    // or earlier interactions) back to 100% so that when switching between
    // tabs with different card widths, the bar is guaranteed to stretch
    // across the entire viewport and allow full horizontal scrolling.  Without
    // this reset the bar may retain the width from the prior tab and clip
    // the newly selected tab’s content until the page is refreshed.
    try {
      const mode = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
      if (mode === 'auto') {
        bar.style.width = '100%';
        bar.style.maxWidth = '100%';
      }
    } catch {}
    for (const t of tabs) {
      const btn = document.createElement('button');
      btn.className = 'ddc-tab' + (t.id === this.activeTab ? ' active' : '');
      btn.dataset.tabId = t.id;
      btn.title = t.label || t.id;
      btn.innerHTML = `${t.icon ? `<ha-icon icon="${t.icon}"></ha-icon>` : ''}<span class="ddc-tab-label">${t.label ?? t.id}</span>`;
      btn.addEventListener('click', () => {
        if (this.activeTab !== t.id) {
          this.activeTab = t.id;
          try { localStorage.setItem(`ddc_lasttab_${this.storageKey}`, t.id); } catch {}
          this._applyActiveTab();
          this._renderTabs();
          // Reapply visibility for the newly active tab. Visibility must be
          // evaluated after switching tabs so cards with conditions are
          // properly hidden when the tab becomes active.
          try { this._applyVisibility_(); } catch {}
      try {
        const host = this.cardContainer?.querySelector?.('#ddcBgHost');
        if (!host || !host.firstChild) this._applyBackgroundFromConfig?.();
      } catch {}
        }
      });
      bar.appendChild(btn);
    }
    if (this.rootEl) this.rootEl.classList.toggle('ddc-tabs-left-layout', this.tabsPosition === 'left');
  
    try { this._updateTabsA11y_?.(); } catch {}

    // After rendering tabs, ensure the bar width matches the visible
    // card container width (scaled or unscaled). Without syncing the width,
    // the tabs could stretch to the full page width instead of aligning
    // with the drag-and-drop container.
    try { this._syncTabsWidth_?.(); } catch {}

    // On narrow viewports the tabs bar becomes horizontally scrollable.  When
    // switching to a tab that lies outside the current viewport, the scroll
    // position should update so that the newly active tab is brought into
    // view.  Without this the bar may snap back to an arbitrary midpoint,
    // particularly on mobile devices.  We only scroll when the content
    // actually overflows to avoid unnecessary jitter on wide screens.
    try {
      const activeBtn = bar.querySelector?.('.ddc-tab.active');
      if (activeBtn && bar.scrollWidth > bar.clientWidth) {
        // Use nearest scrolling so the element becomes visible but does not
        // forcibly center itself if there’s already sufficient whitespace.
        activeBtn.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
      }
    } catch {}
  }
  _applyActiveTab() {
    const current = this._normalizeTabId(this.activeTab);
    const wraps = this.cardContainer?.querySelectorAll?.('.card-wrapper') || [];
    wraps.forEach(w => {
      const tabId = w.dataset.tabId ? this._normalizeTabId(w.dataset.tabId) : this.defaultTab;
      if (!this.tabs || !this.tabs.length) {
        w.style.display = '';
        w.inert = false;
        w.classList.remove('ddc-hidden');
        return;
      }
      if (tabId === current) {
        w.style.display = '';
        w.inert = false;
        w.classList.remove('ddc-hidden');
      } else {
        w.style.display = 'none';
        w.inert = true;
        w.classList.add('ddc-hidden');
        w.classList.remove('ddc-selected');
      }
    });

    // After switching tabs, reapply sizing based on the current container mode.
    try {
      const __m = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
      if (__m === 'auto') {
        this._applyAutoFillNoScale?.();
      } else {
        this._applyAutoScale?.();
      }
    } catch {}

    try { this._clearSelection(); } catch {}
    // When card animations are enabled, animate visible cards after switching tabs
    try {
      if (this.animateCards) {
        this._animateCards?.();
      }
    } catch {}
  }

  /**
   * Animate all visible card wrappers. When the animateCards flag is true
   * this method is invoked after switching tabs or on initial load. It
   * iterates over each wrapper that is currently displayed and applies
   * a CSS class that triggers a short fly‑in animation. The class is
   * removed once the animation completes so subsequent tab switches can
   * retrigger the animation. Hidden wrappers (display: none) are skipped.
   */
_animateCards() {
  try {
    const wraps = this.cardContainer?.querySelectorAll?.('.card-wrapper') || [];
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    // 🎚️ Master controls
    const totalAnimationTime = 800;   // Total sequence time (ms)
    const animationIntensity = 0.8;    // 1 = default, 2 = more dramatic, 0.5 = subtle

    // Derived timing values
    const durationRatio = 0.3; // Portion of total time used for each card’s animation
    const duration = totalAnimationTime * durationRatio;
    const maxDelay = totalAnimationTime - duration;

    wraps.forEach((w) => {
      // Skip hidden cards
      const cs = window.getComputedStyle?.(w);
      const isHidden =
        (w.style.display === 'none') ||
        (cs && cs.display === 'none') ||
        w.classList.contains('ddc-hidden');
      if (isHidden) return;

      // Preserve any existing transform from layout
      const base = (cs && cs.transform && cs.transform !== 'none') ? cs.transform : '';

      // 🪄 Fly-in distance increases with intensity
      const offsetY = 100 * animationIntensity; // % of element height
      const fromT = `${base} translate3d(0, ${offsetY}%, 0)`;
      const toT   = `${base} translate3d(0, 0, 0)`;

      // 🎲 Random delay spread scales with intensity
      const delay = Math.random() * (maxDelay * Math.min(animationIntensity, 2)); // cap at 2× spread

      if (reduceMotion) {
        try {
          w.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: totalAnimationTime * 0.15,
            delay,
            easing: 'linear',
            fill: 'backwards'
          });
        } catch {
          w.style.opacity = '0';
          setTimeout(() => {
            w.style.transition = `opacity ${totalAnimationTime * 0.15}ms linear`;
            w.style.opacity = '1';
          }, delay);
        }
        return;
      }

      try {
        w.style.willChange = 'opacity, transform';

        const motionEase = 'cubic-bezier(0.4, 0, 0.2, 1)';
        const opacityEase = 'linear';

        // Opacity fade
        w.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          { duration, delay, easing: opacityEase, fill: 'backwards' }
        );

        // Transform upward flight
        w.animate(
          [{ transform: fromT }, { transform: toT }],
          { duration, delay, easing: motionEase, fill: 'backwards' }
        ).addEventListener?.('finish', () => {
          w.style.willChange = '';
        });
      } catch {
        // Fallback without Web Animations API
        w.style.opacity = '0';
        w.style.transform = fromT;
        w.style.willChange = 'opacity, transform';
        setTimeout(() => {
          w.style.transition = `opacity ${duration}ms linear, transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`;
          w.style.opacity = '1';
          w.style.transform = toT;
          setTimeout(() => {
            w.style.transition = '';
            w.style.willChange = '';
          }, duration + 60);
        }, delay);
      }
    });
  } catch (e) {
    console.warn('[ddc:animate] animation error', e);
  }
}







  _addTabSelectorToChip(wrapper, entryTabId = null) {
    if (!this.tabs || !this.tabs.length) return;
    const chip = wrapper.querySelector('.chip'); if (!chip) return;
    let sel = chip.querySelector('select.ddc-chip-tab');
    if (!sel) {
      sel = document.createElement('select');
      sel.className = 'ddc-chip-tab';
      sel.style.marginLeft = '6px';
      sel.title = 'Assign to tab';
      chip.appendChild(sel);
    }
    sel.innerHTML = '';
    for (const t of this.tabs) {
      const opt = document.createElement('option');
      opt.value = t.id; opt.textContent = t.label || t.id;
      sel.appendChild(opt);
    }
    const cur = this._normalizeTabId(entryTabId || wrapper.dataset.tabId || this.activeTab || this.defaultTab);
    sel.value = cur;
    wrapper.dataset.tabId = cur;
    sel.onchange = () => {
      wrapper.dataset.tabId = this._normalizeTabId(sel.value);
      this._applyActiveTab();
      // Reapply visibility so conditions evaluate in the new tab context.
      try { this._applyVisibility_(); } catch {}
      try {
        const host = this.cardContainer?.querySelector?.('#ddcBgHost');
        if (!host || !host.firstChild) this._applyBackgroundFromConfig?.();
      } catch {}
      try { this._queueSave('tab-change'); } catch {}
    };
  }
  
/* ------------------------------ Edit mode ------------------------------ */
_toggleEditMode(force = null) {
  try { this.__clearPressTimer?.(); } catch {}

  const entering = (force === null) ? !this.editMode : !!force;
  const wasOff   = !this.editMode && entering;
  // EDIT MODE PIN gate
  try {
    const cfgPin = (this.config && this.config.edit_mode_pin != null) ? String(this.config.edit_mode_pin) : '';
    const runtimePin = (this.editModePin != null) ? String(this.editModePin) : '';
    const pin = (runtimePin || cfgPin).trim();
    if (entering && !this.editMode && pin) {
      const entered = window.prompt('Enter PIN / password to open Edit Mode:');
      if (entered === null) return;
      if (String(entered).trim() !== pin) { this._toast?.('Incorrect PIN/password.'); return; }
    }

  } catch (e) {}


  // Find toolbar in a robust way (no early return)
  const host = this.renderRoot || this.shadowRoot || this;
  const toolbar = host?.querySelector?.('.ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3');

  // Helpers that are null-safe
  const setDisplay = (el, val) => { try { if (el) el.style.display = val; } catch {} };
  const on  = 'inline-block';
  const off = 'none';

  const showButtons = () => {
    setDisplay(this.addButton, on);
    setDisplay(this.reloadBtn, on);
    setDisplay(this.diagBtn, on);
    setDisplay(this.exitEditBtn, on);
    setDisplay(this.exportBtn, on);
    setDisplay(this.importBtn, on);
    setDisplay(this.exploreBtn, on);
    setDisplay(this.storeBadge, on);
    setDisplay(this.applyLayoutBtn, on);
    setDisplay(this.copyBtn, on);
    setDisplay(this.pasteBtn, on);
    setDisplay(this.settingsBtn, on);
  };

  const hideButtons = () => {
    setDisplay(this.addButton, off);
    setDisplay(this.reloadBtn, off);
    setDisplay(this.diagBtn, off);
    setDisplay(this.exitEditBtn, off);
    setDisplay(this.exportBtn, off);
    setDisplay(this.importBtn, off);
    setDisplay(this.exploreBtn, off);
    setDisplay(this.storeBadge, off);
    setDisplay(this.applyLayoutBtn, off);
    setDisplay(this.copyBtn, off);
    setDisplay(this.pasteBtn, off);
    setDisplay(this.settingsBtn, off);
  };

  // === Animate only if we actually found a toolbar ===
  if (toolbar) {
    const DUR = 260; // keep in sync with CSS --ddc-dur

    if (entering) {
      // Make sure it can be measured even if CSS says display:none !important
      toolbar.setAttribute('data-force-open', '1');
      // also hard-force as an ultimate fallback
      toolbar.style.display = 'grid';

      // Reveal buttons first so height is real
      showButtons();

      // Let layout settle, then measure & open
      requestAnimationFrame(() => {
        const h = toolbar.scrollHeight || 0;
        toolbar.style.setProperty('--open-h', h + 'px');
        toolbar.classList.add('is-open');
        // keep data-force-open; :has() + buttons will keep it visible
      });

    } else {
      // Ensure it’s visible while we animate out
      toolbar.setAttribute('data-force-open', '1');
      toolbar.style.display = 'grid';

      // Lock current height as start, then collapse next frame
      const h = toolbar.scrollHeight || 0;
      toolbar.style.setProperty('--open-h', h + 'px');

      requestAnimationFrame(() => {
        toolbar.classList.remove('is-open');
      });

      // After the CSS transition ends, actually hide buttons and release shim
      setTimeout(() => {
        hideButtons();
        toolbar.removeAttribute('data-force-open');
        // Let your existing CSS take over (display:none when not in edit)
      }, DUR);
    }
  } else {
    // No toolbar found; still flip mode & show/hide buttons so app logic continues
    entering ? showButtons() : hideButtons();
  }

  // === Your existing non-visual logic unchanged ===
  this.editMode = entering;
  this._syncEmptyStateUI?.();
  this.cardContainer?.classList.toggle('grid-on', this.editMode);

  // When entering or exiting edit mode, reset the screensaver timer to prevent
  // the screensaver from activating during edits and to hide it if currently active.
  try {
    if (typeof this._resetScreensaverTimer === 'function') {
      this._resetScreensaverTimer();
    }
  } catch {}

  const wraps = this.cardContainer?.querySelectorAll?.('.card-wrapper') || [];
  wraps.forEach((w) => {
    w.classList.toggle('editing', this.editMode);
    const handle = w.querySelector('.resize-handle');
    if (handle) handle.style.display = this.editMode ? 'flex' : 'none';
    if (!w.dataset.placeholder && window.interact) {
      window.interact(w).draggable(this.editMode).resizable(this.editMode);
    }
    w.style.touchAction = this.editMode ? 'none' : 'auto';
  });
  if (!this.editMode) this._clearSelection?.();

  if (!this.editMode) {
    this.cardContainer?.querySelectorAll('.card-wrapper.dragging')
      .forEach(w => w.classList.remove('dragging'));
  }

  if (wasOff) {
    const ox = this.__lastHoldX ?? null;
    const oy = this.__lastHoldY ?? null;
    this._playEditRipple?.(ox, oy);
  }

  try { this._applyHaChromeVisibility_?.(); } catch {}

  // === Update CSS variable for toolbar height on the root so the tabs bar
  // can offset itself when the toolbar is visible.  When entering edit
  // mode, measure the toolbar height and assign it to --ddc-toolbar-height
  // on the root element.  When leaving edit mode, reset the value to 0.
  try {
    const root = this.shadowRoot?.querySelector?.('.ddc-root') || this.renderRoot?.querySelector?.('.ddc-root') || null;
    if (root) {
      let h = 0;
      // If we are entering edit mode and have a toolbar element, read its
      // scrollHeight to include all buttons and margins.  If leaving edit
      // mode, h remains 0.
      if (entering && toolbar) {
        try { h = toolbar.scrollHeight || toolbar.offsetHeight || 0; } catch {}
      }
      root.style.setProperty('--ddc-toolbar-height', h + 'px');
      // When auto‑resize cards is disabled, push down the card container
      // by the height of the toolbar so the draggable area does not sit
      // underneath the toolbar.  Clear the margin when exiting edit mode.
      if (!this.autoResizeCards && this.cardContainer) {
        if (entering && toolbar) {
          this.cardContainer.style.marginTop = h + 'px';
        } else {
          this.cardContainer.style.marginTop = '';
        }
      }
    }
  } catch {}

  // === Ensure the drag area renders fully on edit-mode toggle ===
  // In dynamic mode with auto‑resize off, the container does not
  // recompute its dimensions until a card is moved.  This can result
  // in the drag-and-drop area appearing clipped when first entering
  // edit mode.  Explicitly trigger a resize after toggling edit mode
  // so that the container grows to fit its contents and the grid
  // overlay updates immediately.  Always guard against missing
  // functions.
  try {
    // Resize the container based on current card positions.  This
    // updates its width/height and refreshes the grid overlay.
    if (typeof this._resizeContainer === 'function') {
      this._resizeContainer();
    }
    // Reapply scaling to ensure the card container stays aligned
    // relative to the viewport and to recompute pointer scaling.
    if (typeof this._applyAutoScale === 'function') {
      this._applyAutoScale();
    }
  } catch {}
}

  _isInHaEditorPreview() {
    // Walk up through parents and shadow hosts to detect HA's edit/preview dialog
    let n = this;
    while (n) {
      const tag = (n.nodeType === 1 && n.localName) ? n.localName.toLowerCase() : '';
      if (tag === 'hui-card-editor' || tag === 'hui-dialog-edit-card' || tag === 'hui-card-preview') return true;
      if (tag === 'ha-dialog' || tag === 'mwc-dialog') return true; // general HA dialogs (edit card, more-info, etc.)
      const root = n.getRootNode && n.getRootNode();
      n = n.parentElement || (root && root.host) || null;
    }
    return false;
  }

  // Replace your _installLongPressToEnterEdit with this version:
  /* 2) Install long-press ONCE, keep handles so we can remove them later */
  // Replace your existing _installLongPressToEnterEdit() with this:
// Robust, pointer-events-based long-press to enter edit mode
_installLongPressToEnterEdit() {
  if (this.__lpInstalled) return;
  this.__lpInstalled = true;

  const cont = this.cardContainer;
  if (!cont) return;

  // Tunables
  const HOLD_MS  = 800;  // how long to hold
  const DRIFT_PX = 18;   // cancel if the pointer drifts more than this

  // ---- helpers ------------------------------------------------------------
  const isElem = (n) => !!n && typeof n === 'object' && n.nodeType === 1; // Element node
  const containsSafe = (root, node) => {
    try { return !!(root && node && typeof root.contains === 'function' && isElem(node) && root.contains(node)); }
    catch { return false; }
  };
  const within = (el) => containsSafe(this.cardContainer, el);

  const isOverCard = (ev) => {
    // 1) Fast path via target.closest
    const hit = ev.target?.closest?.('.card-wrapper');
    if (isElem(hit) && within(hit) && !hit.classList.contains('ddc-placeholder')) return true;

    // 2) Robust path via composedPath() (skip non-Elements like window/document)
    const path = typeof ev.composedPath === 'function' ? ev.composedPath() : [];
    for (const n of path) {
      if (!isElem(n)) continue;
      if (!within(n)) continue;
      if (n.classList?.contains('card-wrapper') && !n.classList.contains('ddc-placeholder')) return true;
    }
    return false;
  };  

  const makeRing = (x, y) => {
    const el = document.createElement('div');
    el.className = 'ddc-press-ring';
    document.body.appendChild(el); // ensure always visible
    Object.assign(el.style, {
      position: 'fixed', left: `${x}px`, top: `${y}px`,
      zIndex: '100000', width: '44px', height: '44px',
      pointerEvents: 'none', marginLeft: '-22px', marginTop: '-22px',
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,.35))'
    });
    el.innerHTML = `
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;
    const fg = el.querySelector('.pr-fg');
    const r = 18, circ = 2 * Math.PI * r;
    fg.style.strokeDasharray = `${circ}`;
    fg.style.strokeDashoffset = `${circ}`;
    requestAnimationFrame(() => {
      fg.style.transition = `stroke-dashoffset ${HOLD_MS}ms linear`;
      fg.style.strokeDashoffset = '0';
    });
    return {
      el,
      move(nx, ny) { el.style.left = `${nx}px`; el.style.top = `${ny}px`; },
      remove() { try { el.remove(); } catch {} }
    };
  };  


  
  // ---- state --------------------------------------------------------------
  let timer = null;
  let ring  = null;
  let startX = 0, startY = 0;
  let activePointerId = null;

  const clearTimer = () => { if (timer) clearTimeout(timer); timer = null; ring?.remove(); ring = null; };
  this.__clearPressTimer = clearTimer; // allow external cancel on mode changes


  
  // ---- handlers -----------------------------------------------------------
  const onPointerDown = (e) => {
    // Left mouse / primary touch only
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (this._isInHaEditorPreview()) return;

    // Only trigger on empty space *within this container*
    if (!within(e.target) || isOverCard(e)) return;

    activePointerId = e.pointerId;
    startX = e.clientX; startY = e.clientY;
    this.__lastHoldX = startX; this.__lastHoldY = startY;

    // visual progress ring
    ring = makeRing(startX, startY);

    timer = setTimeout(() => {
      clearTimer();
      const toState = !this.editMode;
      this._toggleEditMode(toState);
      this._toast?.(`Edit mode ${toState ? 'enabled' : 'disabled'}`);
    }, HOLD_MS);
  };

  const onPointerMove = (e) => {
    if (timer == null || e.pointerId !== activePointerId) return;
    ring?.move(e.clientX, e.clientY);
    if (Math.abs(e.clientX - startX) > DRIFT_PX || Math.abs(e.clientY - startY) > DRIFT_PX) {
      clearTimer();
    }
  };

  const onPointerUpOrCancel = (e) => {
    if (e.pointerId !== activePointerId) return;
    clearTimer();
    activePointerId = null;
  };

  const onContextMenu = (e) => {
    // prevent the OS context menu *only while* long-press is pending
    if (timer) { e.preventDefault(); e.stopPropagation(); return false; }
  };

  const onDblClick = (e) => {
    if (this._isInHaEditorPreview()) return;
    if (!within(e.target) || isOverCard(e)) return;
    const toState = !this.editMode;
    this._toggleEditMode(toState);
    this._toast?.(`Edit mode ${toState ? 'enabled' : 'disabled'}`);
  };

  // ---- wire up ------------------------------------------------------------
  cont.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerup', onPointerUpOrCancel, { passive: true });
  window.addEventListener('pointercancel', onPointerUpOrCancel, { passive: true });
  window.addEventListener('contextmenu', onContextMenu);

  cont.addEventListener('dblclick', onDblClick);

  // keep references for clean-up in disconnectedCallback
  this.__lpHandlers = { onPointerDown, onPointerMove, onPointerUpOrCancel, onContextMenu, onDblClick };
}


_isLayoutEmpty() {
  const c = this.cardContainer;
  if (!c) return true;
  return c.querySelectorAll('.card-wrapper:not(.ddc-placeholder)').length === 0;
}

_syncEmptyStateUI() {
  // Show Add button even outside edit mode when empty; style it as a CTA.
  const empty = this._isLayoutEmpty();
  if (this.addButton) {
    const show = this.editMode || empty;
    this.addButton.style.display = show ? 'inline-block' : 'none';
    this.addButton.classList.toggle('cta-empty', !this.editMode && empty);
  }

  // Keep other toolbar buttons hidden unless we’re in edit mode
  const toggle = (el) => el && (el.style.display = this.editMode ? 'inline-block' : 'none');
  toggle(this.reloadBtn);
  toggle(this.diagBtn);
  toggle(this.exitEditBtn);
  toggle(this.exportBtn);
  toggle(this.importBtn);
  toggle(this.exploreBtn);
  toggle(this.storeBadge);
  toggle(this.applyLayoutBtn);
  }

    _updateApplyBtn() {
    if (this.applyLayoutBtn) this.applyLayoutBtn.disabled = !this.__dirty;
  }
  _markDirty(reason='') {
    this.__dirty = true;
    this._updateApplyBtn();
    this._dbgPush?.('dirty', 'Marked dirty', { reason });
  }

  _playEditRipple(clientX=null, clientY=null) {
    const cont = this.cardContainer;
    if (!cont) return;
    const r = cont.getBoundingClientRect();
    const x = clientX == null ? (r.left + r.width/2) : clientX;
    const y = clientY == null ? (r.top  + r.height/2) : clientY;
    const localX = x - r.left;
    const localY = y - r.top;

    const veil = document.createElement('div');
    veil.className = 'ddc-ripple-veil';
    veil.style.setProperty('--rip-x', `${localX}px`);
    veil.style.setProperty('--rip-y', `${localY}px`);
    cont.appendChild(veil);
    setTimeout(()=> veil.remove(), 450);
  }

  /* ------------------------- Drag/Resize via Interact ------------------------- */
  _initInteract() {
    const wraps = this.cardContainer.querySelectorAll('.card-wrapper');
    wraps.forEach((w) => this._initCardInteract(w));
  }
  _initCardInteract(wrap) {
    if (!window.interact || wrap.dataset.placeholder) return;
    const gs = this.gridSize, live = !!this.dragLiveSnap;

    // DRAG (supports multi‑select move with optional live snap)
    const restrictMod = window.interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true
    });
    const mods = [restrictMod];

    // When dragLiveSnap is true, use Interact’s built‑in snap modifier so the pointer
    // (and therefore the element) is snapped to the grid before your handler runs.
    const autoscaled =
      (this.__pointerScaleX && Math.abs(this.__pointerScaleX - 1) > 1e-6) ||
      (this.__pointerScaleY && Math.abs(this.__pointerScaleY - 1) > 1e-6);

    if (this.dragLiveSnap && !autoscaled) {
      const gridSnap = window.interact.snappers.grid({ x: this.gridSize, y: this.gridSize });
      mods.push(window.interact.modifiers.snap({
        targets: [gridSnap],
        range: Infinity,
        offset: 'startCoords'
      }));
    }

    window.interact(wrap).draggable({
      enabled: this.editMode,
      inertia: false,
      modifiers: mods,
      listeners: {
        start: (ev) => {
          // ensure the clicked card is in the selection
          if (!this._selection.has(wrap)) {
            if (!ev?.shiftKey && !ev?.ctrlKey && !ev?.metaKey) this._clearSelection();
            this._toggleSelection(wrap, true);
          }
          const group = Array.from(this._selection);
          this.__groupDrag = {
            leader: wrap,
            members: group,
            startRaw: new Map(group.map(w => [w, {
              x: parseFloat(w.getAttribute('data-x-raw')) || parseFloat(w.getAttribute('data-x')) || 0,
              y: parseFloat(w.getAttribute('data-y-raw')) || parseFloat(w.getAttribute('data-y')) || 0,
              w: parseFloat(w.style.width)  || w.getBoundingClientRect().width,
              h: parseFloat(w.style.height) || w.getBoundingClientRect().height,
            }]))
          };

          // Capture original raw positions of all cards (non‑placeholders) so we can restore them
          this.__collisionOriginals = new Map();
          const allCardsStart = this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)');
          allCardsStart.forEach(c => {
            const rawX = parseFloat(c.getAttribute('data-x-raw')) || parseFloat(c.getAttribute('data-x')) || 0;
            const rawY = parseFloat(c.getAttribute('data-y-raw')) || parseFloat(c.getAttribute('data-y')) || 0;
            this.__collisionOriginals.set(c, { x: rawX, y: rawY });
          });

          group.forEach(w => {
            w.classList.add('dragging');
            if (w.getAttribute('data-x-raw') === null) {
              w.setAttribute('data-x-raw', w.getAttribute('data-x') || '0');
            }
            if (w.getAttribute('data-y-raw') === null) {
              w.setAttribute('data-y-raw', w.getAttribute('data-y') || '0');
            }
          });
        },

        move: (ev) => {
          if (!this.__groupDrag) return;
          const gs   = this.gridSize;
          const live = !!this.dragLiveSnap;
          const lead = this.__groupDrag.leader;
          const srL  = this.__groupDrag.startRaw.get(lead);

          // Compute new raw leader coordinates using pointer delta
          // Convert screen-pixel deltas to design-space deltas
          // Convert screen-pixel deltas → design space using current scale
          const sx = this.__pointerScaleX || 1;
          const sy = this.__pointerScaleY || 1;

          const curLeadX = (parseFloat(lead.getAttribute('data-x-raw')) || srL.x) + (ev.dx / sx);
          const curLeadY = (parseFloat(lead.getAttribute('data-y-raw')) || srL.y) + (ev.dy / sy);
          const dxLead   = curLeadX - srL.x;
          const dyLead   = curLeadY - srL.y;

          // Build proposed positions for all selected cards
          const proposed = this.__groupDrag.members.map(m => {
            const sr = this.__groupDrag.startRaw.get(m);
            const rawX  = sr.x + dxLead;
            const rawY  = sr.y + dyLead;
            const snapX = live ? Math.round(rawX / gs) * gs : rawX;
            const snapY = live ? Math.round(rawY / gs) * gs : rawY;
            return { el: m, rawX, rawY, snapX, snapY, w: sr.w, h: sr.h };
          });

          // If overlap protection is on, restore other cards and push them out of the way
          if (this.disableOverlap) {
            this._pushCardsOutOfTheWay(proposed, dxLead, dyLead, live, gs);
          }

          // Commit the move: update raw coordinates and apply snapped transform
          lead.setAttribute('data-x-raw', String(curLeadX));
          lead.setAttribute('data-y-raw', String(curLeadY));
          for (const pr of proposed) {
            pr.el.setAttribute('data-x-raw', String(pr.rawX));
            pr.el.setAttribute('data-y-raw', String(pr.rawY));
            this._setCardPosition(pr.el, pr.snapX, pr.snapY);
          }
          this._resizeContainer();
        },

        end: (ev) => {
          if (!this.__groupDrag) return;
          const gs = this.gridSize;

          // Gather final positions (unsnapped and snapped) for the dragged group
          const endRects = this.__groupDrag.members.map(m => {
            const rawX = parseFloat(m.getAttribute('data-x-raw')) || parseFloat(m.getAttribute('data-x')) || 0;
            const rawY = parseFloat(m.getAttribute('data-y-raw')) || parseFloat(m.getAttribute('data-y')) || 0;
            const snapX = Math.round(rawX / gs) * gs;
            const snapY = Math.round(rawY / gs) * gs;
            const w  = parseFloat(m.style.width)  || m.getBoundingClientRect().width;
            const h  = parseFloat(m.style.height) || m.getBoundingClientRect().height;
            return { el: m, rawX, rawY, snapX, snapY, w, h };
          });

          // On end, do a final restore/push to prevent leftover overlaps
          if (this.disableOverlap) {
            this._pushCardsOutOfTheWay(endRects, 0, 0, false, gs);
          }

          // Snap cards to the grid and update raw coordinates
          for (const pr of endRects) {
            this._setCardPosition(pr.el, pr.snapX, pr.snapY);
            pr.el.setAttribute('data-x-raw', String(pr.snapX));
            pr.el.setAttribute('data-y-raw', String(pr.snapY));
          }

          // Cleanup
          for (const m of this.__groupDrag.members) m.classList.remove('dragging');
          this._resizeContainer();
          if (this._isContainerFixed()) this._clampAllCardsInside();
          this._queueSave(this.__groupDrag.members.length > 1 ? 'group-drag-end' : 'drag-end');
          this.__groupDrag = null;
          this.__collisionOriginals = null;
        }
      }
    });



    // RESIZE — bottom-right handle only (single card)
    window.interact(wrap).resizable({
      enabled: this.editMode,
      edges: { right: '.resize-handle', bottom: '.resize-handle' },
      inertia:false,
      listeners:{
        move:(ev)=>{
          const gs   = this.gridSize;
          const live = !!this.dragLiveSnap;
          const curW = parseFloat(wrap.style.width)  || wrap.getBoundingClientRect().width;
          const curH = parseFloat(wrap.style.height) || wrap.getBoundingClientRect().height;
    
          const sx = this.__pointerScaleX || 1;
          const sy = this.__pointerScaleY || 1;
          let width  = ev.rect.width  / sx;
          let height = ev.rect.height / sy;
          const wTry = live ? Math.max(gs, Math.round(width / gs) * gs)  : width;
          const hTry = live ? Math.max(gs, Math.round(height / gs) * gs) : height;
                  
          const x = parseFloat(wrap.getAttribute('data-x')) || 0;
          const y = parseFloat(wrap.getAttribute('data-y')) || 0;
        
          // ⬇️ clamp size if container is fixed
          let nextW = wTry;
          let nextH = hTry;
          if (this._isContainerFixed()) {
            const { w: cw, h: ch } = this._getContainerSize();
            nextW = Math.min(wTry, Math.max(this.gridSize, cw - x));
            nextH = Math.min(hTry, Math.max(this.gridSize, ch - y));
          }
        
          const proposed = [ this._rectFor(wrap, x, y, nextW, nextH) ];
        
          if (this.disableOverlap && this._anyCollisionFor(proposed, new Set([wrap]))) {
            return;
          }
          wrap.style.width  = `${nextW}px`;
          wrap.style.height = `${nextH}px`;
          this._resizeContainer();
        },
        end:()=>{
          const gs = this.gridSize;
          const prevW = parseFloat(wrap.style.width)  || wrap.getBoundingClientRect().width;
          const prevH = parseFloat(wrap.style.height) || wrap.getBoundingClientRect().height;
        
          let wSnap = Math.max(gs, Math.round(prevW/gs)*gs);
          let hSnap = Math.max(gs, Math.round(prevH/gs)*gs);
        
          const x = parseFloat(wrap.getAttribute('data-x')) || 0;
          const y = parseFloat(wrap.getAttribute('data-y')) || 0;
        
          // ⬇️ clamp snapped size if container is fixed
          if (this._isContainerFixed()) {
            const { w: cw, h: ch } = this._getContainerSize();
            wSnap = Math.min(wSnap, Math.max(gs, cw - x));
            hSnap = Math.min(hSnap, Math.max(gs, ch - y));
          }
        
          const proposed = [ this._rectFor(wrap, x, y, wSnap, hSnap) ];
        
          if (this.disableOverlap && this._anyCollisionFor(proposed, new Set([wrap]))) {
            // keep pre-snap size (already applied)
          } else {
            wrap.style.width  = `${wSnap}px`;
            wrap.style.height = `${hSnap}px`;
          }
        
          this._resizeContainer();
          if (this._isContainerFixed()) this._clampAllCardsInside();   // optional safety
          this._queueSave('resize-end');
        }
      }
    });

    // selection with clicks
    wrap.addEventListener('mousedown', (e) => {
      if (!this.editMode) return;
      // Ignore clicks on controls: resize handle, delete handle, or chip actions
      if (e.target.closest('.resize-handle') || e.target.closest('.delete-handle') || e.target.closest('.chip')) return;
      if (e.shiftKey || e.ctrlKey || e.metaKey) {
        e.stopPropagation();
        this._toggleSelection(wrap); // toggle in multi
      } else {
        if (!this._selection.has(wrap)) {
          this._clearSelection();
          this._toggleSelection(wrap, true);
        }
      }
    });
  }

  /* ------------------------ Card creation & wrapper ------------------------ */
  async _createCard(cfg) {
    const helpers = (await this._helpersPromise) || await window.loadCardHelpers();
    const el = helpers.createCardElement(cfg);
    el.hass = this.hass;
    
    // Special handling for mod-card
    if (cfg.type === 'custom:mod-card') {
      // mod-card needs to be fully initialized before we can work with it
      await new Promise(resolve => setTimeout(resolve, 0));
      
      // Force mod-card to apply its styles
      if (el.setConfig && typeof el.setConfig === 'function') {
        try {
          // Re-apply config to ensure mod-card processes it
          el.setConfig(cfg);
        } catch {}
      }
    }
    
    return el;
  }

  _makeWrapper(cardEl) {
    const wrap = document.createElement('div');
    wrap.classList.add('card-wrapper');
    wrap.dataset.tabId = this._normalizeTabId(this.activeTab || this.defaultTab);
    if (this.editMode) wrap.classList.add('editing');
    if (!wrap.style.zIndex) {
      // Compute the next z-index and ensure it is at least 6.  Without
      // clamping, the first few cards could be assigned low z-indices
      // that place them behind the grid overlay.  See _highestZ() for
      // baseline initialization.
      const nextVal = this._highestZ() + 1;
      wrap.style.zIndex = String(Math.max(nextVal, 6));
    }

    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.innerHTML = `
      <button class="mini" data-act="edit" title="Edit" aria-label="Edit">
        <ha-icon icon="mdi:pencil"></ha-icon><span>Edit</span>
      </button>
      <button class="mini" data-act="duplicate" title="Duplicate" aria-label="Duplicate">
        <ha-icon icon="mdi:content-copy"></ha-icon><span>Duplicate</span>
      </button>
      <button class="mini pill" data-act="front" title="Bring forward" aria-label="Bring forward">
        <ha-icon icon="mdi:arrange-bring-forward"></ha-icon>
      </button>
      <button class="mini pill" data-act="back" title="Send backward" aria-label="Send backward">
        <ha-icon icon="mdi:arrange-send-backward"></ha-icon>
      </button>
      <button class="mini pill" data-act="front-most" title="Bring to front" aria-label="Bring to front">
        <ha-icon icon="mdi:arrange-bring-to-front"></ha-icon>
      </button>
      <button class="mini pill" data-act="back-most" title="Send to back" aria-label="Send to back">
        <ha-icon icon="mdi:arrange-send-to-back"></ha-icon>
      </button>
    `;

    // Create a dedicated delete handle that sits in the top‑left corner. This
    // replaces the delete button in the chip and mimics the resize handle in
    // style. Clicking it will remove the card (or multiple cards if a group
    // selection exists).
    const delHandle = document.createElement('div');
    delHandle.className = 'delete-handle';
    delHandle.innerHTML = `<ha-icon icon="mdi:close-thick"></ha-icon>`;
    delHandle.addEventListener('click', (e) => {
      e.stopPropagation();
      // When multiple cards are selected and the current wrapper is among them,
      // delete all selected cards. Otherwise delete just this wrapper.
      if (this._selection.size > 1 && this._selection.has(wrap)) {
        const toDel = Array.from(this._selection);
        toDel.forEach(w => w.remove());
        this._clearSelection();
        this._resizeContainer();
        this._queueSave('delete-multi');
        this._ensurePlaceholderIfEmpty?.();
      } else {
        wrap.remove();
        this._resizeContainer();
        this._queueSave('delete');
        this._ensurePlaceholderIfEmpty?.();
      }
    });

    // Tab selector UI
    try { this._addTabSelectorToChip(wrap, wrap.dataset.tabId); } catch {}

    chip.addEventListener('click', async (e) => {
      e.stopPropagation();
      const act = e.target?.closest('button')?.dataset?.act; if (!act) return;

      if (act === 'delete') {
        if (this._selection.size > 1 && this._selection.has(wrap)) {
          const toDel = Array.from(this._selection);
          toDel.forEach(w => w.remove());
          this._clearSelection();
          this._resizeContainer(); this._queueSave('delete-multi'); this._ensurePlaceholderIfEmpty();
        } else {
          wrap.remove(); this._resizeContainer(); this._queueSave('delete'); this._ensurePlaceholderIfEmpty();
        }
      } else if (act === 'duplicate' || act === 'copy') {
        const targets = (this._selection.size > 1 && this._selection.has(wrap)) ? Array.from(this._selection) : [wrap];
        for (const t of targets) {
          const cfg = this._extractCardConfig(t.firstElementChild) || {};
          const dup = await this._createCard(cfg);
          const w2 = this._makeWrapper(dup);
          w2.style.width  = t.style.width;
          w2.style.height = t.style.height;
          const x = (parseFloat(t.getAttribute('data-x')) || 0) + this.gridSize;
          const y = (parseFloat(t.getAttribute('data-y')) || 0) + this.gridSize;
          this._setCardPosition(w2, x, y);
          // Ensure a baseline z-index of 6 so duplicates are always above the grid
          // overlay.  Compute next z-index and clamp to at least 6.
          {
            const nextVal = this._highestZ() + 1;
            w2.style.zIndex = String(Math.max(nextVal, 6));
          }
          // Preserve the tab assignment from the original wrapper so that
          // duplicates appear in the correct tab rather than defaulting to
          // the currently active tab. See bug #3.
          try {
            const tid = t.dataset?.tabId;
            if (tid) w2.dataset.tabId = tid;
          } catch {}
          this.cardContainer.appendChild(w2);
          // Attach a tab selector to the duplicated wrapper so the user can
          // reassign it later; pass the current tab so the selector defaults
          // correctly.
          try { this._addTabSelectorToChip?.(w2, w2.dataset.tabId); } catch {}
          try { this._rebuildOnce(w2.firstElementChild); } catch {}
          this._initCardInteract(w2);
        }
        this._resizeContainer();
        this._queueSave('duplicate');
      } else if (act === 'front') {
        // Bring forward by one layer
        this._adjustZ(wrap, +1);
      } else if (act === 'back')  {
        // Send backward by one layer
        this._adjustZ(wrap, -1);
      } else if (act === 'front-most') {
        // Bring selected card(s) to the very front (highest z-index)
        const targets = (this._selection.size > 1 && this._selection.has(wrap)) ? Array.from(this._selection) : [wrap];
        // Sort targets by current z-index ascending so their relative order is maintained when moving to top
        targets.sort((a, b) => {
          const za = parseInt(a.style.zIndex || '1', 10);
          const zb = parseInt(b.style.zIndex || '1', 10);
          return za - zb;
        });
        let base = this._highestZ();
        for (const w of targets) {
          base += 1;
          w.style.zIndex = String(base);
        }
        this._queueSave('z-change');
      } else if (act === 'back-most') {
        // Send selected card(s) to the very back (lowest z-index)
        const targets = (this._selection.size > 1 && this._selection.has(wrap)) ? Array.from(this._selection) : [wrap];
        // Sort targets by current z-index descending so their relative order is maintained when moving to bottom
        targets.sort((a, b) => {
          const za = parseInt(a.style.zIndex || '1', 10);
          const zb = parseInt(b.style.zIndex || '1', 10);
          return zb - za;
        });
        // Determine the current minimum z-index among all cards
        let minZ = Infinity;
        this.cardContainer.querySelectorAll('.card-wrapper').forEach(w => {
          const z = parseInt(w.style.zIndex || '1', 10);
          if (z < minZ) minZ = z;
        });
        if (!isFinite(minZ)) minZ = 1;
        let baseMin = minZ;
        for (const w of targets) {
          baseMin -= 1;
          // Ensure cards never drop below 6 so they remain above the grid overlay.
          w.style.zIndex = String(Math.max(6, baseMin));
        }
        this._queueSave('z-change');
      } else if (act === 'edit') {
        const cfg = this._extractCardConfig(wrap.firstElementChild) || {};
        await this._openSmartPicker('edit', cfg, async (newCfg) => {
          const oldEl = wrap.firstElementChild;
          const newEl = await this._createCard(newCfg);

          // persist cfg on wrapper (and card-mod flag if you use it)
          try {
            wrap.dataset.cfg = JSON.stringify(newCfg);
            if (this._hasCardModDeep?.(newCfg)) wrap.dataset.needsCardMod = 'true';
            else delete wrap.dataset.needsCardMod;
          } catch {}

          // swap the element
          wrap.replaceChild(newEl, oldEl);

          // ensure connected before driving updates (important for Lit cards)
          await raf();
          try {
            newEl.hass = this.hass;
            newEl.requestUpdate?.();
            if (newEl.updateComplete) { try { await newEl.updateComplete; } catch {} }
          } catch {}

          try { this._rebuildOnce(newEl); } catch {}
          try { newEl.dispatchEvent(new Event('ll-rebuild', { bubbles: true, composed: true })); } catch {}

          this._resizeContainer?.();

          // SAVE -> THEN HARD RELOAD (avoid debounce race)
          try {
            clearTimeout(this._saveTimer);           // cancel debounced save
            await this._saveLayout(true);            // flush save now
          } catch (e) { console.warn('Save before reload failed', e); }

          window.location.reload();                  // force refresh so edited card appears
        });
      }
    });

    // ADD THE MISSING SHIELD ELEMENT
    const shield = document.createElement('div');
    shield.className = 'shield';

    // ADD THE MISSING HANDLE ELEMENT
    const handle = document.createElement('div');
    handle.classList.add('resize-handle');
    if (!this.editMode) handle.style.display = 'none';  // hide handle if not editing
    handle.title = 'Resize';
    handle.innerHTML = `<ha-icon icon="mdi:resize-bottom-right"></ha-icon>`;

    // cache the card config on the wrapper
    try {
      const cfg = cardEl._config || cardEl.config;
      if (cfg && typeof cfg === 'object' && Object.keys(cfg).length) {
        wrap.dataset.cfg = JSON.stringify(cfg);
        
        // Mark if this needs card_mod processing
        if (this._hasCardModDeep(cfg)) { wrap.dataset.needsCardMod = 'true'; }
      }
    } catch {}

    // include the delete handle before the resize handle so it appears beneath it in the DOM
    wrap.append(cardEl, shield, chip, delHandle, handle);
    // DDC patch: trigger one-time rebuild so nested card_mod attaches
    try { this._rebuildOnce(cardEl); } catch {}
    return wrap;
  }

  _makePlaceholderAt(x=0,y=0,w=400,h=400) {
    const wrap = document.createElement('div');
    wrap.classList.add('card-wrapper','ddc-placeholder');
    wrap.dataset.placeholder = '1';
    if (this.editMode) wrap.classList.add('editing');
    this._setCardPosition(wrap, x, y);
    wrap.style.width = `${w}px`;
    wrap.style.height = `${h}px`;
    wrap.style.zIndex = String(this._highestZ() + 1);
  
    const inner = document.createElement('div');
    inner.className = 'ddc-placeholder-inner';
    // purely decorative; nothing clickable
    inner.setAttribute('aria-hidden','true');

    // --- Hero UI (image + text) ---
    const hero = document.createElement('div');
    hero.className = 'ddc-hero';

    // Optional image: from config.hero_image (e.g. /local/dragdrop-hero.png)
    // If not provided, this block simply won’t render an <img>.
    const heroImgUrl = this.heroImage; // already set to default or config override
    if (heroImgUrl) {
      const img = document.createElement('img');
      img.src = heroImgUrl;
      img.alt = "";
      hero.appendChild(img);
    }

    // Title + subtitle
    const title = document.createElement('div');
    title.className = 'ddc-title';
    title.textContent = 'Drag & Drop Card';
    const sub = document.createElement('div');
    sub.className   = 'ddc-sub';
    sub.textContent = 'Hold me / double click me to enter Edit mode';

    hero.append(title, sub);
    inner.appendChild(hero);

    // Let users double-click anywhere on the placeholder to enter edit
    wrap.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this._toggleEditMode(true);
    });
  
    const shield = document.createElement('div');
    shield.className = 'shield';
  
    wrap.append(inner, shield);
    return wrap;
  }

    _processCardModOnce() {
    // Only run once per load
    if (this._cardModProcessed) return;
    this._cardModProcessed = true;
    
    const wraps = this.cardContainer?.querySelectorAll('[data-needs-card-mod="true"]') || [];
    
    wraps.forEach(wrap => {
      const card = wrap.firstElementChild;
      if (!card) return;
      
      const config = card._config || card.config;
      if (!config) return;
      
      // For mod-card specifically, we need to wait for it to be fully initialized
      if (config.type === 'custom:mod-card') {
        // mod-card needs its inner card to be ready
        setTimeout(() => {
          if (card.updateComplete) {
            card.updateComplete.then(() => {
              card.requestUpdate();
            });
          } else if (card.setConfig) {
            try {
              card.setConfig({...config});
            } catch {}
          }
        }, 100);
      } else if (config.card_mod && card.setConfig) {
        // Regular card_mod
        try {
          card.setConfig({...config});
        } catch {}
      }
    });
  }

  _showEmptyPlaceholder() {
    // Avoid creating multiple placeholders
    if (this.cardContainer.querySelector('.ddc-placeholder')) return;
    // Define placeholder dimensions.  These values mirror the original
    // implementation and can be adjusted if the default size changes.
    const phW = 200;
    const phH = 200;
    // Initially create the placeholder at (0,0) so that the resize logic can
    // compute an appropriate container size.  We will center it after the
    // container dimensions have been updated.
    const p = this._makePlaceholderAt(0, 0, phW, phH);
    this.cardContainer.appendChild(p);
    // Resize the container so its dimensions reflect the presence of the
    // placeholder.  Without this call the container width/height may be
    // reported as zero, preventing proper centering.
    this._resizeContainer();
    // Compute the center position for the placeholder relative to the
    // component’s bounding box rather than the card container.  The card
    // container grows and shrinks based on its contents, so its width may
    // match the placeholder width exactly, making (cw - phW)/2 equal to 0.
    // Instead, use the host element’s bounding rectangle to find the
    // available width/height and offset by the difference between the
    // container and host origins.  This centers the placeholder within
    // the entire drag‑and‑drop card, not just within the container.
    try {
      const rootRect = this.getBoundingClientRect?.();
      const contRect = this.cardContainer?.getBoundingClientRect?.();
      if (rootRect && contRect) {
        // Compute center coordinates in the host’s coordinate space
        const hostCenterX = (rootRect.width  - phW) / 2;
        const hostCenterY = (rootRect.height - phH) / 2;
        // Translate host coordinates into container coordinates
        let centerX = hostCenterX - (contRect.left - rootRect.left);
        let centerY = hostCenterY - (contRect.top  - rootRect.top);
        // Clamp to zero to avoid negative translations on very small hosts
        if (!Number.isFinite(centerX) || centerX < 0) centerX = 0;
        if (!Number.isFinite(centerY) || centerY < 0) centerY = 0;
        this._setCardPosition(p, centerX, centerY);
      }
    } catch {
      // Fallback: leave placeholder at (0,0) if any errors occur
    }
    // Update UI state (add button visibility, etc.)
    this._syncEmptyStateUI();
  }
  _hideEmptyPlaceholder() { this.cardContainer.querySelectorAll('.ddc-placeholder').forEach(n => n.remove()); }
  _ensurePlaceholderIfEmpty() {
    const realCards = this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)');
    if (realCards.length === 0) this._showEmptyPlaceholder();
        this._applyAutoScale?.();
    this._syncEmptyStateUI();
  }

  _adjustZ(wrap, delta) {
    const cur = parseInt(wrap.style.zIndex || '1', 10);
    let next = cur + delta;
    next = Math.max(1, Math.min(9999, next));
    wrap.style.zIndex = String(next);
    this._queueSave('z-change');
  }

  _highestZ() {
    // Default to a baseline of 5 so that newly created cards (which use
    // _highestZ() + 1) start at a z-index of at least 6.  Without this
    // baseline the first few cards would receive very low z-indices (1–4)
    // and appear behind the interactive grid overlay (z-index 5).  By
    // initializing max to 5 the first call returns 5, causing the first
    // wrapper to be assigned 6.  Subsequent wrappers will increment from
    // there, preserving relative ordering.
    let max = 5;
    this.cardContainer.querySelectorAll('.card-wrapper').forEach(w => {
      const z = parseInt(w.style.zIndex || '0', 10);
      if (z > max) max = z;
    });
    return max;
  }

  _setCardPosition(el, x, y) {
    const nx = Math.round(x);
    const ny = Math.round(y);
    el.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
    el.setAttribute('data-x', String(nx));
    el.setAttribute('data-y', String(ny));
    // Do NOT touch data-*-raw here; drag/resize 
  }
  

  // --- Auto-scale helpers (only active when auto_resize_cards === true) ---
  _computeDesignSize() {
    const c = this.cardContainer; if (!c) return { w: 1, h: 1 };
    // If fixed sizing is enabled, use those dimensions as design space
    if (this._isContainerFixed()) {
      const { w, h } = this._resolveFixedSize();
      return { w: Math.max(1, w), h: Math.max(1, h) };
    }
    // Otherwise compute from content extents similar to _resizeContainer
    let maxX = 0, maxY = 0;
    const cards = Array.from(c.querySelectorAll('.card-wrapper'));
    if (!cards.length) {
      const rect = c.getBoundingClientRect();
      return { w: Math.max(1, rect.width || 1), h: Math.max(1, rect.height || 1) };
    }
    for (const wEl of cards) {
      const x = parseFloat(wEl.getAttribute('data-x-raw') || wEl.getAttribute('data-x') || '0') || 0;
      const y = parseFloat(wEl.getAttribute('data-y-raw') || wEl.getAttribute('data-y') || '0') || 0;
      const w = parseFloat(wEl.style.width)  || wEl.getBoundingClientRect().width  || 0;
      const h = parseFloat(wEl.style.height) || wEl.getBoundingClientRect().height || 0;
      const right  = x + w;
      const bottom = y + h;
      if (right  > maxX) maxX = right;
      if (bottom > maxY) maxY = bottom;
    }
    // Round up to grid to avoid half pixels
    const gw = Math.max(1, this.gridSize || 10);
    maxX = Math.ceil(maxX / gw) * gw;
    maxY = Math.ceil(maxY / gw) * gw;
    return { w: Math.max(1, maxX), h: Math.max(1, maxY) };
  }


  /* -------------------- Live scale watcher (rAF fallback) -------------------- */
  _startScaleWatch() {
    if (!this.autoResizeCards) return;
    if (this.__scaleRAF) return;
    const tick = () => {
      if (!this.autoResizeCards) { this.__scaleRAF = null; return; }
      // Check host width; if changed, re-apply scaling
      const rect = this.getBoundingClientRect();
      const w = Math.max(1, rect.width || 0);
      if (w !== this.__lastScaleW) {
        this.__lastScaleW = w;
        const __m = String((this.containerSizeMode||this.container_size_mode||'dynamic')).toLowerCase(); (__m==='auto'?this._applyAutoFillNoScale?.():this._applyAutoScale?.());
      }
      this.__scaleRAF = requestAnimationFrame(tick);
    };
    this.__scaleRAF = requestAnimationFrame(tick);
  }

  _stopScaleWatch() {
    if (this.__scaleRAF) {
      try { cancelAnimationFrame(this.__scaleRAF); } catch {}
      this.__scaleRAF = null;
    }
  }
_applyAutoScale() {
  // 1) Early path: "auto" mode (no proportional scaling)
  let mode = 'dynamic';
  try {
    mode = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
    if (mode === 'auto') {
      this._applyAutoFillNoScale?.();
      this.removeAttribute('ddc-fixed-ui');
      this.style?.removeProperty?.('--ddc-ui-width');
      return;
    }
  } catch {}

  const c = this.cardContainer;
  if (!c) return;

  // 2) Only ensure scale wrapper when actually scaling
  try {
    if (this.autoResizeCards || mode === 'auto') {
      if (typeof this._ensureScaleWrapper === 'function') this._ensureScaleWrapper();
    }
  } catch {}

  // 3) Auto-resize OFF: lock to scale(1) but do not force a fixed UI.  In
  // dynamic mode, the toolbar and tabs should remain in the normal flow
  // (similar to auto mode) rather than being centered with a fixed width.
  if (!this.autoResizeCards) {
    const d = (typeof this._computeDesignSize === 'function')
      ? this._computeDesignSize()
      : { w: c.offsetWidth || 1, h: c.offsetHeight || 1 };

    if (mode === 'dynamic') {
      try { this._computeHaSidebarGutters_?.(); } catch {}
      // Remove any fixed UI attributes and widths so the toolbar and tabs
      // behave like they do in auto mode.  Without this the UI is centered
      // via CSS (:host[ddc-fixed-ui]) which causes inconsistent styling.
      this.removeAttribute('ddc-fixed-ui');
      this.style?.removeProperty?.('--ddc-ui-width');
    } else {
      this.removeAttribute('ddc-fixed-ui');
      this.style?.removeProperty?.('--ddc-ui-width');
    }

    // Avoid write→observer loops
    const wantW = `${d.w}px`;
    const wantH = `${d.h}px`;
    const sameW = c.style.width === wantW;
    const sameH = c.style.height === wantH;
    const sameT = c.style.transform === 'scale(1)';

    if (!(sameW && sameH && sameT)) {
      c.style.width = wantW;
      c.style.height = wantH;
      c.style.transform = 'scale(1)';
      c.style.transformOrigin = 'top left';
      c.style.position = 'absolute';
      c.style.top = '0';
      c.style.left = '0';

      this.__pointerScaleX = 1;
      this.__pointerScaleY = 1;

      if (this.__scaleOuter) {
        const pw =
          (this.parentElement && this.parentElement.getBoundingClientRect?.().width) ||
          (this.offsetParent && this.offsetParent.getBoundingClientRect?.().width) ||
          (this.getBoundingClientRect && this.getBoundingClientRect().width) ||
          this.offsetWidth || d.w;

        const wantOuterW = `${Math.max(1, pw)}px`;
        const wantOuterH = `${Math.max(1, d.h)}px`;
        if (this.__scaleOuter.style.width  !== wantOuterW) this.__scaleOuter.style.width  = wantOuterW;
        if (this.__scaleOuter.style.height !== wantOuterH) this.__scaleOuter.style.height = wantOuterH;
      }
    }

    try { this._syncTabsWidth_?.(); } catch {}
    return;
  }

  // 4) Auto-resize ON (dynamic scaling path)
  this.removeAttribute('ddc-fixed-ui');
  this.style?.removeProperty?.('--ddc-ui-width');

  const d = (typeof this._computeDesignSize === 'function')
    ? this._computeDesignSize()
    : { w: c.offsetWidth || 1, h: c.offsetHeight || 1 };

  const pw =
    (this.parentElement && this.parentElement.getBoundingClientRect?.().width) ||
    (this.offsetParent && this.offsetParent.getBoundingClientRect?.().width) ||
    (this.getBoundingClientRect && this.getBoundingClientRect().width) ||
    this.offsetWidth || d.w;

  const availableW = Math.max(1, pw);
  // Compute the scale factor relative to the design width.  Previously the
  // factor was clamped to ≤1, meaning the layout would only shrink but
  // never grow.  This resulted in the “auto‑resize cards” option having
  // no visible effect in dynamic mode when the design was narrower than
  // the viewport.  Remove the clamp so that smaller layouts can grow to
  // fill the available space.  If desired a maximum cap could be
  // introduced here; for now allow the layout to scale up as needed.
  const scale = availableW / Math.max(1, d.w);

  if (this.__scaleOuter) {
    this.__scaleOuter.style.width  = `${availableW}px`;
    this.__scaleOuter.style.height = `${Math.max(1, d.h * scale)}px`;
  }

  c.style.width = `${d.w}px`;
  c.style.height = `${d.h}px`;
  c.style.transform = `scale(${scale})`;
  c.style.transformOrigin = 'top left';
  c.style.position = 'absolute';
  c.style.top = '0';
  c.style.left = '0';

  // pointer → design scale
  this.__pointerScaleX = scale || 1;
  this.__pointerScaleY = scale || 1;

  try { this._syncTabsWidth_?.(); } catch {}
  try { this._layoutYtBackground_?.(); } catch {}
  // After applying a new scale, refresh the grid overlay dimensions so that
  // the selectable squares cover the scaled content area.  Without this
  // update the overlay may not extend across the resized canvas.
  try { this._requestGridButtonsUpdateSoon?.(); } catch {}
}


// AUTO (strict): behave like dynamic, but only "fill" when viewport > natural content; never scale.
_applyAutoFillNoScale() {
  if (this.__applyingAutoFill) return;
  this.__applyingAutoFill = true;
  try {
    // Ensure the card container is wrapped in a scale wrapper so that
    // horizontal scrolling is isolated to the wrapper. In dynamic mode
    // this wrapper is created by _ensureScaleWrapper(); replicate that
    // behavior here so toolbar and tabs remain outside of the scrolling
    // region but can still track horizontal movement.  If the wrapper
    // already exists, this call is a no-op.
    try { this._ensureScaleWrapper?.(); } catch {}
    const outer = this.__scaleOuter || this.shadowRoot?.querySelector?.('.ddc-scale-outer') || this;
    const inner = this.cardContainer || this.shadowRoot?.querySelector?.('#cardContainer');
    if (!outer || !inner) return;

    // Enable scrolling within the scale wrapper when the card
    // content exceeds the viewport.  We set overflow to "auto" to
    // produce a single scrollbar for both axes; however, we compute
    // the wrapper’s height such that vertical scrolling happens within
    // the wrapper rather than the page.  This ensures the toolbar and
    // tabs remain fixed while the user scrolls the canvas.
    // In auto mode we want horizontal scrolling within the outer wrapper
    // but vertical scrolling should happen at the page level (not within
    // the wrapper).  Mimic dynamic mode by hiding vertical overflow and
    // enabling horizontal overflow.  Setting overflow to hidden first
    // establishes the default, then overflowX is overridden below.
    outer.style.overflow = 'hidden';
    outer.style.overflowX = 'auto';
    outer.style.overflowY = 'hidden';
    outer.style.width = '100%';

    // If HA gives us a tiny height, expand to remaining viewport height (not to trigger loops).
    let vb = outer.getBoundingClientRect();
    let availW = Math.max(1, Math.round(vb.width  || 0));
    let availH = Math.max(1, Math.round(vb.height || 0));
    if (availH < 150) {
      const top = Math.max(0, Math.round(vb.top || 0));
      const viewportH = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 0);
      const remaining = Math.max(1, viewportH - top - 8);
      if (Math.abs(remaining - availH) > 4) {
        outer.style.height = remaining + 'px';
        // re-measure
        vb = outer.getBoundingClientRect();
        availW = Math.max(1, Math.round(vb.width  || 0));
        availH = Math.max(1, Math.round(vb.height || 0));
      }
    }

    // Compute natural content extents just like dynamic
    let maxX = 0, maxY = 0;
    const cards = Array.from(inner.querySelectorAll('.card-wrapper'));
    if (cards.length) {
      const cr = inner.getBoundingClientRect();
      for (const w of cards) {
        const r = w.getBoundingClientRect();
        const right  = r.left - cr.left + r.width;
        const bottom = r.top  - cr.top  + r.height;
        if (right  > maxX) maxX = right;
        if (bottom > maxY) maxY = bottom;
      }
    } else {
      maxX = inner.scrollWidth  || inner.offsetWidth  || availW;
      maxY = inner.scrollHeight || inner.offsetHeight || availH;
    }

    const gs = Number(this.gridSize || 1) || 1;
    const natW = Math.max(1, Math.round(Math.ceil(maxX/gs) * gs));
    const natH = Math.max(1, Math.round(Math.ceil(maxY/gs) * gs));

    // Strict rule:
    // - If viewport > natural size, expand inner to viewport (fills space).
    // - Else, inner stays at natural size (so user can scroll to reach overflow).
    const targetW = (availW > natW) ? availW : natW;
    const targetH = (availH > natH) ? availH : natH;

    // Apply: NO SCALE. Keep 1:1 pixels so positions are exact.
    inner.style.transform = 'none';
    inner.style.transformOrigin = 'left top';
    this.__pointerScaleX = 1;
    this.__pointerScaleY = 1;
    inner.style.width  = `${targetW}px`;
    inner.style.height = `${targetH}px`;
    // In strict auto mode, update the outer container height so that
    // vertical scrolling is isolated to the wrapper rather than the page.
    // We calculate the height available beneath the wrapper's top edge and
    // clamp the wrapper height to that value.  This prevents the wrapper
    // from growing taller than the viewport and avoids a secondary page
    // scrollbar.  When the natural content height exceeds this height,
    // overflow:auto on the wrapper will provide scrollbars.
    if (outer) {
      let topOffset = 0;
      try {
        const vb2 = outer.getBoundingClientRect();
        topOffset = Math.max(0, Math.round(vb2.top || 0));
      } catch {}
      const vpH = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 0);
      // Reserve space for the bottom margin and ensure at least 1px height
      const availViewH = Math.max(1, vpH - topOffset - 8);
      // Set the wrapper height to the natural target height.  This allows
      // the page to scroll vertically while the wrapper itself only
      // scrolls horizontally.  Using the natural content height prevents
      // clipping of cards and avoids nested vertical scrollbars.
      outer.style.height = `${targetH}px`;
    }
    inner.style.position = inner.style.position || 'absolute';
    inner.style.top = inner.style.top || '0';
    inner.style.left = inner.style.left || '0';

    // In auto mode, the tabs bar should span the viewport width (not the full card width).
    const tb = this.tabsBar;
    if (tb && this.tabsPosition !== 'left') {
      tb.style.width = '100%';
      tb.style.maxWidth = '100%';
    }
  } finally {
    // Recompute the background (e.g. YouTube video) sizing based on the
    // newly updated card dimensions.  Without this call the video
    // background may retain the size from a previous layout state and
    // appear cropped or misaligned in auto mode.
    try { this._layoutYtBackground_?.(); } catch {}

    // Ensure the grid overlay updates to reflect any changes in natural
    // size or viewport fills.  Without this call the overlay may not
    // redraw until the next interaction, leading to partially rendered
    // selection squares after adding a card in auto mode.
    try { this._requestGridButtonsUpdateSoon?.(); } catch {}
    requestAnimationFrame(() => { this.__applyingAutoFill = false; });
  }
}






  _resizeContainer() {
    const c = this.cardContainer; if (!c) return;
  
    // In fixed modes, do NOT auto-grow/shrink — the box is hard-locked.
    if (this._isContainerFixed()) return;
  
    // Dynamic mode: compute based on content
    const cards = Array.from(c.querySelectorAll('.card-wrapper'));
    let maxX = 0, maxY = 0;
    cards.forEach((card) => {
      const r  = card.getBoundingClientRect();
      const cr = c.getBoundingClientRect();
      const right  = r.left - cr.left + r.width;
      const bottom = r.top  - cr.top  + r.height;
      maxX = Math.max(maxX, right);
      maxY = Math.max(maxY, bottom);
    });
    c.style.width  = `${Math.ceil(maxX/this.gridSize)*this.gridSize || 100}px`;
    c.style.height = `${Math.ceil(maxY/this.gridSize)*this.gridSize || 100}px`;

    // Whenever the container size changes in dynamic mode, update the tabs bar
    // width so it remains aligned with the container. If the scale wrapper
    // recalculates later the call in _applyAutoScale will also update this.
    try { this._syncTabsWidth_?.(); } catch {}

    // When the container size changes (e.g. after adding a card or resizing),
    // the grid overlay may become stale.  Schedule an update so that the
    // selectable overlay stretches to the new dimensions.  Without this call
    // the overlay can remain clipped until the next edit toggle or page
    // refresh.
    try { this._requestGridButtonsUpdateSoon?.(); } catch {}
  }
  
  /**
  /**
   * Restore original positions for non-selected cards, then push out of the way.
   * This uses this.__collisionOriginals (captured on drag start) and avoids overlaps.
   * @param {Array} proposedRects – array of { el, rawX, rawY, snapX, snapY, w, h }
   * @param {number} dxLead – leader's delta X (to decide horizontal push direction)
   * @param {number} dyLead – leader's delta Y (to decide vertical push direction)
   * @param {boolean} liveSnap – true if we should snap positions visually
   * @param {number} gridSize – current grid size
   */
  _pushCardsOutOfTheWay(proposedRects, dxLead, dyLead, liveSnap, gridSize) {
    if (!this.__collisionOriginals) return;

    const selectedSet = new Set(proposedRects.map(pr => pr.el));
    const allCards = Array.from(this.cardContainer.querySelectorAll('.card-wrapper'))
      .filter(w => !w.dataset.placeholder);

    // Determine container bounds (for fixed modes)
    const isFixed = this._isContainerFixed();
    const { w: cw, h: ch } = this._getContainerSize();

    // Restore every non-selected card to its original raw position
    for (const w of allCards) {
      if (selectedSet.has(w)) continue;
      const orig = this.__collisionOriginals.get(w);
      if (orig) {
        w.setAttribute('data-x-raw', String(orig.x));
        w.setAttribute('data-y-raw', String(orig.y));
        const snX = liveSnap ? Math.round(orig.x / gridSize) * gridSize : orig.x;
        const snY = liveSnap ? Math.round(orig.y / gridSize) * gridSize : orig.y;
        this._setCardPosition(w, snX, snY);
      }
    }

    // Prepare lists for collision checks
    const selectedRects = proposedRects.map(pr => ({
      x: pr.snapX,
      y: pr.snapY,
      w: pr.w,
      h: pr.h,
    }));

    // Map to store the final pushed positions of non-selected cards
    const finalPos = new Map();

    // Store original widths and heights
    const cardSizes = new Map();
    for (const w of allCards) {
      const width  = parseFloat(w.style.width)  || w.getBoundingClientRect().width;
      const height = parseFloat(w.style.height) || w.getBoundingClientRect().height;
      cardSizes.set(w, { w: width, h: height });
    }

    // Decide primary push direction based on leader movement
    const signX = (dxLead > 0) ? 1 : (dxLead < 0 ? -1 : 0);
    const signY = (dyLead > 0) ? 1 : (dyLead < 0 ? -1 : 0);
    const horizontal = Math.abs(dxLead) >= Math.abs(dyLead);

    // For each non-selected card, compute its new position
    for (const other of allCards) {
      if (selectedSet.has(other)) continue;
      const orig = this.__collisionOriginals.get(other);
      if (!orig) continue;

      let { x: candidateX, y: candidateY } = orig;
      const { w: ow, h: oh } = cardSizes.get(other);

      // Determine if it overlaps with any selected rectangle
      let overlaps = false;
      for (const sr of selectedRects) {
        if (this._rectsOverlap({ x: sr.x, y: sr.y, w: sr.w, h: sr.h },
                              { x: candidateX, y: candidateY, w: ow, h: oh })) {
          overlaps = true;
          // Choose initial push direction
          if (horizontal && signX !== 0) {
            candidateX = signX > 0 ? sr.x + sr.w : sr.x - ow;
          } else if (!horizontal && signY !== 0) {
            candidateY = signY > 0 ? sr.y + sr.h : sr.y - oh;
          } else {
            // default horizontal push when no obvious direction
            candidateX = sr.x + sr.w;
          }
          break;
        }
      }

      // If overlapping, keep shifting until no collision
      if (overlaps) {
        let guard = 0;
        const dx = horizontal ? (signX !== 0 ? signX * gridSize : gridSize) : 0;
        const dy = !horizontal ? (signY !== 0 ? signY * gridSize : gridSize) : 0;
        while (guard < 100) {
          const candidateRect = { x: candidateX, y: candidateY, w: ow, h: oh };
          let collision = false;

          // Check against selected
          for (const sr of selectedRects) {
            if (this._rectsOverlap(candidateRect, sr)) {
              collision = true;
              break;
            }
          }
          // Check against cards already assigned new positions
          if (!collision) {
            for (const [, fp] of finalPos) {
              if (this._rectsOverlap(candidateRect, fp)) {
                collision = true;
                break;
              }
            }
          }
          // Check against container bounds (for fixed container)
          if (!collision && isFixed) {
            if (candidateX < 0 || candidateY < 0 ||
                candidateX + ow > cw || candidateY + oh > ch) {
              collision = true;
            }
          }

          if (!collision) break;
          // Move further along the chosen axis
          candidateX += dx;
          candidateY += dy;
          guard++;
        }

        // Finally, clamp to container boundaries for fixed containers
        if (isFixed) {
          candidateX = Math.max(0, Math.min(candidateX, Math.max(0, cw - ow)));
          candidateY = Math.max(0, Math.min(candidateY, Math.max(0, ch - oh)));
        }
      }

      finalPos.set(other, { x: candidateX, y: candidateY, w: ow, h: oh });
      selectedRects.push({ x: candidateX, y: candidateY, w: ow, h: oh });
    }

    // Apply final positions to non-selected cards
    for (const [card, pos] of finalPos) {
      card.setAttribute('data-x-raw', String(pos.x));
      card.setAttribute('data-y-raw', String(pos.y));
      const snX = liveSnap ? Math.round(pos.x / gridSize) * gridSize : pos.x;
      const snY = liveSnap ? Math.round(pos.y / gridSize) * gridSize : pos.y;
      this._setCardPosition(card, snX, snY);
    }
  }

  _rectFor(el, x = null, y = null, wpx = null, hpx = null) {
    const x0 = x ?? (parseFloat(el.getAttribute('data-x')) || 0);
    const y0 = y ?? (parseFloat(el.getAttribute('data-y')) || 0);
    const w  = wpx ?? (parseFloat(el.style.width)  || el.getBoundingClientRect().width  || 0);
    const h  = hpx ?? (parseFloat(el.style.height) || el.getBoundingClientRect().height || 0);
    return { x: x0, y: y0, w, h, el };
  }
  _rectsOverlap(a, b, eps = 0.5) {
    return !(a.x + a.w <= b.x + eps || b.x + b.w <= a.x + eps ||
             a.y + a.h <= b.y + eps || b.y + b.h <= a.y + eps);
  }
  _anyCollisionFor(proposedRects, ignoreSet) {
    const others = Array.from(this.cardContainer.querySelectorAll('.card-wrapper'))
      .filter(w => !ignoreSet.has(w) && !w.dataset.placeholder);
    if (!others.length) return false;
    const otherRects = others.map(w => this._rectFor(w));
    for (const pr of proposedRects) for (const or of otherRects) {
      if (this._rectsOverlap(pr, or)) return true;
    }
    return false;
  }
  _extractCardConfig(cardEl){
    if (!cardEl) return {};
    // attempt to read the card's own config
    const cfg = cardEl._config || cardEl.config;
    if (cfg && typeof cfg === 'object' && Object.keys(cfg).length) {
      return cfg;
    }
    // fallback: if the wrapper cached a config, use it
    try {
      // walk up to the wrapper; .closest may not exist on text nodes
      const wrap = cardEl.closest ? cardEl.closest('.card-wrapper') : null;
      const raw  = wrap?.dataset?.cfg;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch {}
    return {};
  }

  /* ------------------------------- Picker UI ------------------------------- */
  async _openCardManager() { await this._openSmartPicker('add'); }

  _catalog() {
    return [
      { id:'favorites', name:'Favorites', items:[] },
      { id:'recent',    name:'Recent',    items:[] },
      { id:'basics',    name:'Basics', items:[
        {type:'entities',          name:'Entities',          icon:'mdi:format-list-bulleted'},
        {type:'entity',            name:'Entity',            icon:'mdi:checkbox-blank-circle-outline'},
        {type:'tile',              name:'Tile',              icon:'mdi:view-grid-outline'},
        {type:'button',            name:'Button',            icon:'mdi:gesture-tap-button'},
        {type:'glance',            name:'Glance',            icon:'mdi:eye-outline'},
        {type:'markdown',          name:'Markdown',          icon:'mdi:language-markdown'},
        // NEW: allow adding an empty custom card that the user can edit manually
        {type:'custom_card',       name:'Custom Card',       icon:'mdi:puzzle-outline'},
      ]},

      { id:'sensors',   name:'Sensors', items:[
        {type:'sensor',            name:'Sensor',            icon:'mdi:antenna'},
        {type:'gauge',             name:'Gauge',             icon:'mdi:gauge'},
        {type:'history-graph',     name:'History graph',     icon:'mdi:chart-line'},
        {type:'statistics-graph',  name:'Statistics graph',  icon:'mdi:chart-bar'},
      ]},
      { id:'visual', name:'Visual', items:[
        {type:'picture-entity',    name:'Picture entity',    icon:'mdi:image-outline'},
        {type:'picture-glance',    name:'Picture glance',    icon:'mdi:image-multiple-outline'},
        {type:'weather-forecast',  name:'Weather',           icon:'mdi:weather-partly-cloudy'},
        {type:'map',               name:'Map',               icon:'mdi:map'},
        {type:'iframe',            name:'iFrame',            icon:'mdi:application'},
      ]},
      { id:'controls', name:'Controls', items:[
        {type:'light',             name:'Light',             icon:'mdi:lightbulb-outline'},
        {type:'thermostat',        name:'Thermostat',        icon:'mdi:thermostat'},
        {type:'media-control',     name:'Media control',     icon:'mdi:play-circle-outline'},
        {type:'alarm-panel',       name:'Alarm panel',       icon:'mdi:shield-home-outline'},
        {type:'area',              name:'Area',              icon:'mdi:map-marker'},
      ]},
    ];
  }

  /* ---- Find/create a config editor element for a given card type ---- */
  async _getEditorElementForType(type, cfg) {
    // Log the start of an editor lookup; this uses console.debug so it is visible
    try { console.info('[ddc:editor] Requesting editor element', { type, cfg }); } catch {}
    const helpers = (await this._helpersPromise) || await window.loadCardHelpers();
  
    // Warm the module before asking for the class only for built‑in HA cards.
    // Skip preloading for custom cards (including the "custom_card" placeholder) since they have no core modules.
    try {
      if (typeof type === 'string' && type && !type.startsWith('custom:') && type !== 'custom_card') {
        await this._ensureCardModuleLoaded(type, cfg);
      }
    } catch {}
  
    // Provide a bespoke visual editor for the built‑in Entity card.  The default
    // `hui-entity-card-editor` often fails to load or throws errors in certain
    // environments.  To avoid those problems, always supply our own simple
    // entity editor when the type is exactly 'entity'.  This editor exposes the
    // most common options (entity, name, icon, attribute, unit, state_color)
    // through Home Assistant form elements.  See `_getEntityCardEditor` below.
    if (typeof type === 'string' && type === 'entity') {
      try {
        return await this._getEntityCardEditor(cfg || {});
      } catch (err) {
        // fall through and attempt other editors if our custom one fails
        console.warn('[ddc:editor] Custom entity editor failed', err);
      }
    }
    // We will compute the card class on demand when needed. Avoid keeping a reference
    // to a potentially undefined variable across different scopes.
    const getCardClass = async () => {
      try {
        if (helpers.getCardElementClass) {
          // Use the helper if available
          return await helpers.getCardElementClass(type);
        }
        // Fallback: instantiate the card (using a stub) and return its constructor.
        let baseCfg;
        if (cfg && typeof cfg === 'object') {
          // Use the provided config if available to obtain the constructor
          baseCfg = { type, ...cfg };
        } else {
          let stubCfg;
          try { stubCfg = await this._getStubConfigForType(type); } catch {}
          baseCfg = stubCfg && typeof stubCfg === 'object' ? { ...stubCfg } : { type };
        }
        const inst = helpers.createCardElement(baseCfg);
        return inst?.constructor || null;
      } catch {
        return null;
      }
    };

  
    // 1) Static class-provided editor (preferred)
    try {
      const CardClass = await getCardClass();
      if (CardClass) {
        // First, attempt to use the classic getConfigElement
        if (typeof CardClass.getConfigElement === 'function') {
          const el = await CardClass.getConfigElement();
          if (el) {
            try { console.info('[ddc:editor] Found static class editor', { type }); } catch {}
            return el;
          }
        }
        // Next, attempt to use getConfigForm (introduced in 2022.3) to build a ha-form based editor
        if (typeof CardClass.getConfigForm === 'function') {
          try {
            const formInfo = await CardClass.getConfigForm();
            if (formInfo && formInfo.schema) {
              // Ensure ha-form is defined before creating it
              try { await customElements.whenDefined('ha-form'); } catch {}
              const formEl = document.createElement('ha-form');
              formEl.hass = this.hass;
              // Clone schema to avoid accidental mutations
              formEl.schema = Array.isArray(formInfo.schema) ? formInfo.schema.map((s) => ({ ...s })) : formInfo.schema;
              // Use provided computeLabel/computeHelper if available
              if (typeof formInfo.computeLabel === 'function') {
                formEl.computeLabel = formInfo.computeLabel.bind(CardClass);
              }
              if (typeof formInfo.computeHelper === 'function') {
                formEl.computeHelper = formInfo.computeHelper.bind(CardClass);
              }
              // Provide initial data (cfg) to the form. Spread to avoid mutation
              formEl.data = { ...cfg };
              // When the form value changes, fire a value-changed event compatible with our onChange handler
              formEl.addEventListener('value-changed', (ev) => {
                // event.detail.value contains the new config object
              });
              try { console.info('[ddc:editor] Generated form editor via getConfigForm', { type }); } catch {}
              return formEl;
            }
          } catch {}
        }
      }
    } catch {}

    // 2) Instance-provided editor. Only try this for custom cards. Most built‑in
    // cards either expose a static editor or register a `hui-<type>-card-editor`
    // tag; instantiating them with invalid or empty configs causes errors (e.g.
    // "Entities must be specified"). For custom cards, we derive a stub config
    // to satisfy basic validation and then ask the instance for its editor.
    // For custom cards and the custom placeholder, attempt instance-level editors. The 'entity' card is no longer
    // treated as a custom card here since HA may provide a built-in form via getConfigForm.
    if (typeof type === 'string' && (type.startsWith('custom:') || type === 'custom_card')) {
      try {
        let stubCfg = undefined;
        try { stubCfg = await this._getStubConfigForType(type); } catch {}
        const baseCfg = stubCfg && typeof stubCfg === 'object' ? { ...stubCfg } : { type };
        const inst = helpers.createCardElement(baseCfg);
        inst.hass = this.hass;
        if (typeof inst.getConfigElement === 'function') {
          const el = await inst.getConfigElement();
          if (el) {
            try { console.info('[ddc:editor] Found instance-level editor', { type }); } catch {}
            return el;
          }
        }
      } catch {}
    }


  
    // 3) Known/custom-tag editors (registry hint + common conventions) with retries
    const base = String(type).replace(/^custom:/, '');
    const reg = Array.isArray(window.customCards) ? window.customCards : [];
    const entry = reg.find(c =>
      c?.type === base || c?.type === type || c?.type === `custom:${base}`
    );

    
  

    const candidates = [];
    if (entry?.editor) candidates.push(entry.editor);            // from registry, if present
    candidates.push(`${base}-editor`, `${base}-config-editor`);  // common conventions

    // New: add the “hui-<type>-card-editor” convention used by core HA cards
    if (base && typeof base === 'string') {
      candidates.push(`hui-${base}-card-editor`);
    }

  
    for (const tag of candidates) {
      if (!tag || typeof tag !== 'string') continue;
      // Try multiple times: immediate and with increasing delays up to ~3s
      for (const delay of [0, 100, 300, 700, 1500, 3000]) {
        try {
          if (!customElements.get(tag)) {
            await Promise.race([
              customElements.whenDefined(tag),
              new Promise(r => setTimeout(r, delay))
            ]);
          }
          if (customElements.get(tag)) {
            try { console.info('[ddc:editor] Found editor by tag', { type, tag }); } catch {}
            return document.createElement(tag);
          }
        } catch {}
      }
    }
  
    // No UI editor available
    return null;
  }

  // This helps custom cards that register their editor tag after the element loads.
  async _ensureCardModuleLoaded(type, cfg) {
    try {
      const helpers = (await this._helpersPromise) || await window.loadCardHelpers();
      // Use stub configuration to warm the module by instantiating the card. This
      // triggers the dynamic import of the card and its editor without causing
      // validation errors (we'll ignore errors silently). After warmup, the
      // module should have registered its static methods and editor tags.
      // Use the provided cfg if present (for existing cards) to ensure valid keys,
      // otherwise fall back to a stub. Spreading cfg over type ensures the card
      // receives all its current properties, avoiding validation errors.
      let baseCfg;
      if (cfg && typeof cfg === 'object') {
        baseCfg = { type, ...cfg };
      } else {
        let stubCfg = undefined;
        try { stubCfg = await this._getStubConfigForType(type); } catch {}
        baseCfg = stubCfg && typeof stubCfg === 'object' ? { ...stubCfg } : { type };
      }
      const el = helpers.createCardElement(baseCfg);
      el.hass = this.hass;
      const tmp = document.createElement('div');
      tmp.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;';
      tmp.appendChild(el);
      document.body.appendChild(tmp);
      await new Promise(r => requestAnimationFrame(r));
      tmp.remove();
      try { console.info('[ddc:editor] Warmed card module', { type }); } catch {}
    } catch {
      // swallow errors – the module may still register
    }
  }
  
  _ensureOverlayZFix() {
    if (document.querySelector('style[data-ddc-overlay-fix]')) return;
    const s = document.createElement('style');
    s.setAttribute('data-ddc-overlay-fix', '');
    s.textContent = `
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `;
    document.head.appendChild(s);
  }
  

  _customCardsFromRegistry() {
    const reg = Array.isArray(window.customCards) ? window.customCards : [];
    return reg
      .map((cc) => ({
        type: cc?.type?.startsWith('custom:') ? cc.type : `custom:${cc?.type}`,
        name: cc?.name || cc?.type || 'Custom card',
        icon: 'mdi:puzzle-outline',
        description: cc?.description || '',
        editorTag: cc?.editor || null,  // <- keep if provided
      }))
      .filter((it) => typeof it.type === 'string' && it.type.startsWith('custom:'));
  }

  _schemaForType(type) {
    const S = (o) => o; const any = [];
    return ({
      'entities': S({ fields:[ {key:'entities', type:'entities', multi:true, domains:any, label:'Entities'} ]}),
      'entity':   S({ fields:[ {key:'entity', type:'entity', multi:false, domains:any, label:'Entity'} ]}),
      'sensor':   S({ fields:[ {key:'entity', type:'entity', multi:false, domains:['sensor'], label:'Sensor'}, {key:'name', type:'text', label:'Name (optional)'} ]}),
      'gauge':    S({ fields:[ {key:'entity', type:'entity', multi:false, domains:['sensor','number','input_number'], label:'Numeric entity'}, {key:'min', type:'number', label:'Min', step:'any'}, {key:'max', type:'number', label:'Max', step:'any'} ]}),
      'history-graph': S({ fields:[ {key:'entities', type:'entities', multi:true, domains:any, label:'Entities (multiselect)'}, {key:'hours_to_show', type:'number', label:'Hours to show', default:24} ]}),
      'statistics-graph': S({ fields:[ {key:'entities', type:'entities', multi:true, domains:['sensor','number','input_number'], label:'Entities (multiselect)'}, {key:'chart_type', type:'select', options:['line','bar'], label:'Chart type', default:'line'}, {key:'statistic', type:'select', options:['mean','min','max','sum'], label:'Statistic', default:'mean'} ]}),
      'glance':   S({ fields:[ {key:'entities', type:'entities', multi:true, domains:any, label:'Entities (multiselect)'} ]}),
      'picture-glance': S({ fields:[ {key:'entities', type:'entities', multi:true, domains:any, label:'Entities (multiselect)'}, {key:'image', type:'text', label:'Image URL (optional)'} ]}),
      'picture-entity': S({ fields:[ {key:'entity', type:'entity', multi:false, domains:any, label:'Entity'}, {key:'image', type:'text', label:'Image URL (optional)'} ]}),
      'weather-forecast': S({ fields:[ {key:'entity', type:'entity', multi:false, domains:['weather'], label:'Weather entity'} ]}),
      'map': S({ fields:[ {key:'entities', type:'entities', multi:true, domains:['device_tracker','person'], label:'Trackers / people (multiselect)'}, {key:'default_zoom', type:'number', label:'Default zoom', default:14} ]}),
      'media-control': S({ fields:[ {key:'entity', type:'entity', multi:false, domains:['media_player'], label:'Media player'} ]}),
      'light': S({ fields:[ {key:'entity', type:'entity', multi:false, domains:['light'], label:'Light'} ]}),
      'thermostat': S({ fields:[ {key:'entity', type:'entity', multi:false, domains:['climate'], label:'Climate'} ]}),
      'alarm-panel': S({ fields:[ {key:'entity', type:'entity', multi:false, domains:['alarm_control_panel'], label:'Alarm'} ]}),
      'markdown': S({ fields:[ {key:'content', type:'textarea', label:'Markdown'} ]}),
      'tile': S({ fields:[ {key:'entity', type:'entity', multi:false, domains:any, label:'Entity'} ]}),
      'button': S({ fields:[ {key:'entity', type:'entity', multi:false, domains:any, label:'Entity (optional)'} ]}),
      'iframe': S({ fields:[ {key:'url', type:'text', label:'URL'} ]}),
      'area': S({ fields:[ {key:'area', type:'text', label:'Area ID'} ]}),
    })[type] || { fields: [] };
  }

  /**
   * Build a simple visual editor for the built‑in Entity card.  The stock
   * `hui-entity-card-editor` is prone to errors when loaded outside of the
   * Lovelace editor, so we provide a lightweight form here instead.  The
   * returned element implements the `setConfig` API and emits a
   * `config-changed` event whenever the configuration is updated.  Only
   * common options are exposed; additional options can still be added in the
   * YAML editor.
   *
   * @param {Object} cfg The current card configuration.
   * @returns {Promise<HTMLElement>}
   */
  async _getEntityCardEditor(cfg = {}) {
    // Create a wrapper element for the editor UI.
    const wrapper = document.createElement('div');
    // Style the wrapper to mimic the look of other editors.
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '12px';
    wrapper.style.padding = '8px 0';
    // Allow dropdown menus (e.g. ha-select) to overflow this container
    // without being clipped.  Without this, the attribute dropdown may be
    // hidden behind the card content.
    wrapper.style.overflow = 'visible';

    // Local copy of the config that we will mutate.
    wrapper._cfg = { type: 'entity', ...(cfg || {}) };

    // Helper to dispatch a config-changed event whenever a value changes.
    const fireChange = () => {
      // Always build a plain object for the configuration.  Avoid accidental
      // retention of prototype strings or arrays by using object literal syntax.
      const clean = { type: 'entity' };
      // Copy defined keys only.  Include the optional theme in the clean config
      // so that the YAML shows the selected theme.
      ['entity', 'name', 'icon', 'attribute', 'unit', 'state_color', 'theme'].forEach((k) => {
        const v = wrapper._cfg[k];
        if (v !== undefined && v !== '' && v !== null) {
          clean[k] = v;
        }
      });
      wrapper.dispatchEvent(new CustomEvent('config-changed', { detail: { config: clean } }));
    };

    // Build the entity picker row
    const entRow = document.createElement('div');
    entRow.style.display = 'flex';
    entRow.style.flexDirection = 'column';
    entRow.style.gap = '4px';
    const entLabel = document.createElement('span');
    entLabel.textContent = 'Entity';
    entLabel.style.fontSize = '.8rem';
    entLabel.style.opacity = '0.8';
    // Always use the ha-entity-picker so users get a searchable dropdown once the element is defined
    let entInput = document.createElement('ha-entity-picker');
    // Provide a label consistent with HA editors
    entInput.setAttribute('label', 'Select entity');
    // Listen for changes from the picker.  When the user selects an entity,
    // update our internal config and fire the change event.
    entInput.addEventListener('value-changed', (ev) => {
      // Prevent the event from bubbling up into parent editors which may
      // incorrectly interpret it as a configuration object
      ev.stopPropagation();
      // Extract the selected entity.  Some implementations emit detail.value,
      // while others set ev.detail directly or expose the value on the target.
      const newVal = (ev.detail && (ev.detail.value ?? ev.detail)) ?? ev.target?.value;
      wrapper._cfg.entity = newVal || '';
      // Rebuild the attribute list for the new entity
      try { updateAttributeOptions(); } catch {}
      fireChange();
    });
    entRow.appendChild(entLabel);
    entRow.appendChild(entInput);
    wrapper.appendChild(entRow);

    // Placeholder for an attribute updater.  This function will be assigned
    // once the attribute field is created below.  Defining it here ensures
    // that it is in scope for the entity change handler above.
    let updateAttributeOptions = () => {};

    // Prepare a grid container for the remaining fields.
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '1fr 1fr';
    grid.style.columnGap = '12px';
    grid.style.rowGap = '12px';

    // Helper to create a field wrapper and append to grid
    const makeField = (labelText, inputEl) => {
      const r = document.createElement('div');
      r.style.display = 'flex';
      r.style.flexDirection = 'column';
      r.style.gap = '4px';
      const lab = document.createElement('span');
      lab.textContent = labelText;
      lab.style.fontSize = '.8rem';
      lab.style.opacity = '0.8';
      r.appendChild(lab);
      r.appendChild(inputEl);
      grid.appendChild(r);
    };

    // Name field
    let nameInput;
    if (customElements.get('ha-textfield')) {
      nameInput = document.createElement('ha-textfield');
      nameInput.setAttribute('label', 'Name');
      nameInput.addEventListener('input', () => {
        wrapper._cfg.name = nameInput.value || undefined;
        fireChange();
      });
    } else {
      nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.placeholder = 'Name';
      nameInput.addEventListener('input', () => {
        wrapper._cfg.name = nameInput.value || undefined;
        fireChange();
      });
      Object.assign(nameInput.style, {
        padding: '8px 10px',
        borderRadius: '8px',
        background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
        border: '1px solid var(--divider-color)',
        color: 'var(--primary-text-color, inherit)',
        width: '100%',
        boxSizing: 'border-box'
      });
    }
    makeField('Name', nameInput);

    // Icon field – provide a searchable icon picker if available.  Fallback to
    // ha-textfield or native input when the picker is unavailable.
    let iconInput;
    if (customElements.get('ha-icon-picker')) {
      iconInput = document.createElement('ha-icon-picker');
      iconInput.setAttribute('label', 'Icon');
      // When the user selects an icon from the picker, update config
      iconInput.addEventListener('value-changed', (ev) => {
        ev.stopPropagation();
        wrapper._cfg.icon = ev.detail?.value || undefined;
        fireChange();
      });
      // Ensure the icon picker overlay appears above surrounding content
      Object.assign(iconInput.style, { position: 'relative', zIndex: '1000' });
    } else if (customElements.get('ha-textfield')) {
      iconInput = document.createElement('ha-textfield');
      iconInput.setAttribute('label', 'Icon');
      iconInput.addEventListener('input', () => {
        wrapper._cfg.icon = iconInput.value || undefined;
        fireChange();
      });
    } else {
      iconInput = document.createElement('input');
      iconInput.type = 'text';
      iconInput.placeholder = 'mdi:icon';
      iconInput.addEventListener('input', () => {
        wrapper._cfg.icon = iconInput.value || undefined;
        fireChange();
      });
      Object.assign(iconInput.style, {
        padding: '8px 10px',
        borderRadius: '8px',
        background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
        border: '1px solid var(--divider-color)',
        color: 'var(--primary-text-color, inherit)',
        width: '100%',
        boxSizing: 'border-box'
      });
    }
    makeField('Icon', iconInput);

    // Attribute field – display a dropdown of attributes for the selected entity.
    let attrInput;
    // Helper to populate attributes based on the current entity selection
    updateAttributeOptions = () => {
      // Determine available attribute names for the selected entity
      let attrs = [];
      const eid = wrapper._cfg?.entity;
      const h = wrapper._hass;
      if (eid && h && h.states && h.states[eid] && h.states[eid].attributes) {
        try {
          attrs = Object.keys(h.states[eid].attributes || {}).filter((k) => k && typeof k === 'string');
          attrs.sort();
        } catch {}
      }
      const prev = attrInput && typeof attrInput.value !== 'undefined' ? attrInput.value : undefined;
      const tag = (attrInput?.tagName || '').toLowerCase();
      // Lookup table for friendlier attribute names.  If an attribute key
      // exists in this map, its value will be used for the option label; otherwise
      // the key will be transformed by replacing underscores with spaces and
      // capitalizing words.
      const FRIENDLY_ATTR_NAMES = {
        min_color_temp_kelvin: 'Minimum color temperature (Kelvin)',
        max_color_temp_kelvin: 'Maximum color temperature (Kelvin)',
        min_color_temp_mireds: 'Minimum color temperature (mireds)',
        max_color_temp_mireds: 'Maximum color temperature (mireds)',
        min_mireds: 'Minimum color temperature (mireds)',
        max_mireds: 'Maximum color temperature (mireds)',
        effect_list: 'Available effects',
        color_mode: 'Color mode',
        brightness: 'Brightness',
        hs_color: 'Hs color',
        rgb_color: 'Rgb color',
        xy_color: 'Xy color',
        entity_id: 'Entity ID',
        friendly_name: 'Friendly name',
        icon: 'Icon'
      };
      // Helper to compute a label from an attribute key
      const makeLabel = (key) => {
        if (FRIENDLY_ATTR_NAMES[key]) return FRIENDLY_ATTR_NAMES[key];
        return key
          .split('_')
          .map((part) => {
            if (!part) return part;
            // Preserve units like kelvin/mireds in parentheses
            if (part.toLowerCase() === 'kelvin') return 'Kelvin';
            if (part.toLowerCase() === 'mireds') return 'mireds';
            return part.charAt(0).toUpperCase() + part.slice(1);
          })
          .join(' ');
      };
      if (tag === 'ha-combo-box') {
        // Build array of objects for the combo box
        const items = attrs.map((name) => ({ value: name, label: makeLabel(name) }));
        // Always include an empty item as first entry to allow clearing the selection
        items.unshift({ value: '', label: '' });
        attrInput.items = items;
        // Restore previous selection if still valid
        if (prev && attrs.includes(prev)) {
          attrInput.value = prev;
        } else {
          attrInput.value = '';
        }
      } else if (tag === 'ha-select') {
        // Clear current items
        attrInput.innerHTML = '';
        // Add an empty option
        const emptyItem = document.createElement('mwc-list-item');
        emptyItem.setAttribute('value', '');
        emptyItem.textContent = '';
        attrInput.appendChild(emptyItem);
        for (const name of attrs) {
          const item = document.createElement('mwc-list-item');
          item.setAttribute('value', name);
          item.textContent = makeLabel(name);
          attrInput.appendChild(item);
        }
        // Restore previous selection if still valid
        if (prev && attrs.includes(prev)) {
          attrInput.value = prev;
        } else {
          attrInput.value = '';
        }
        attrInput.requestUpdate?.();
      } else if (tag === 'select') {
        attrInput.innerHTML = '';
        const emptyOpt = document.createElement('option');
        emptyOpt.value = '';
        emptyOpt.textContent = '';
        attrInput.appendChild(emptyOpt);
        for (const name of attrs) {
          const opt = document.createElement('option');
          opt.value = name;
          opt.textContent = makeLabel(name);
          attrInput.appendChild(opt);
        }
        if (prev && attrs.includes(prev)) {
          attrInput.value = prev;
        }
      }
    };

    // Create the attribute input. Prefer ha-combo-box (for searchable dropdown and correct overlay),
    // fall back to ha-select, then native select if neither is available.  We
    // mirror the semantics of the entity picker so the dropdown is rendered in a
    // global overlay and not clipped by the card.
    if (customElements.get('ha-combo-box')) {
      attrInput = document.createElement('ha-combo-box');
      attrInput.setAttribute('label', 'Attribute');
      // Provide item-label and item-value paths for our objects
      attrInput.setAttribute('item-label-path', 'label');
      attrInput.setAttribute('item-value-path', 'value');
      attrInput.setAttribute('allow-custom-value', 'false');
      attrInput.addEventListener('value-changed', (ev) => {
        // The value may be in ev.detail.value or directly in attrInput.value depending on the component implementation.
        ev.stopPropagation();
        const val = ev.detail?.value ?? attrInput.value;
        wrapper._cfg.attribute = val || undefined;
        fireChange();
      });
    } else if (customElements.get('ha-select')) {
      attrInput = document.createElement('ha-select');
      attrInput.setAttribute('label', 'Attribute');
      attrInput.addEventListener('selected', (ev) => {
        ev.stopPropagation();
        // Update config with selected attribute or undefined if empty
        wrapper._cfg.attribute = attrInput.value || undefined;
        fireChange();
      });
      // Ensure the dropdown menu appears above surrounding card content
      Object.assign(attrInput.style, { position: 'relative', zIndex: '1000' });
    } else {
      attrInput = document.createElement('select');
      // Always include an empty option; options will be populated by updateAttributeOptions
      const emptyOpt = document.createElement('option');
      emptyOpt.value = '';
      emptyOpt.textContent = '';
      attrInput.appendChild(emptyOpt);
      attrInput.addEventListener('change', (ev) => {
        ev.stopPropagation();
        wrapper._cfg.attribute = attrInput.value || undefined;
        fireChange();
      });
      // Apply HA-like styling to the native select fallback
      Object.assign(attrInput.style, {
        padding: '8px 10px',
        borderRadius: '8px',
        background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
        border: '1px solid var(--divider-color)',
        color: 'var(--primary-text-color, inherit)',
        width: '100%',
        boxSizing: 'border-box'
      });
      // Ensure the dropdown menu appears above surrounding card content
      Object.assign(attrInput.style, { position: 'relative', zIndex: '1000' });
    }
    // Populate attributes once element is ready (initially empty).  We'll call
    // updateAttributeOptions whenever the entity or hass changes.
    updateAttributeOptions();
    makeField('Attribute', attrInput);

    // Unit field
    let unitInput;
    if (customElements.get('ha-textfield')) {
      unitInput = document.createElement('ha-textfield');
      unitInput.setAttribute('label', 'Unit');
      unitInput.addEventListener('input', () => {
        wrapper._cfg.unit = unitInput.value || undefined;
        fireChange();
      });
    } else {
      unitInput = document.createElement('input');
      unitInput.type = 'text';
      unitInput.placeholder = 'Unit';
      unitInput.addEventListener('input', () => {
        wrapper._cfg.unit = unitInput.value || undefined;
        fireChange();
      });
      Object.assign(unitInput.style, {
        padding: '8px 10px',
        borderRadius: '8px',
        background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
        border: '1px solid var(--divider-color)',
        color: 'var(--primary-text-color, inherit)',
        width: '100%',
        boxSizing: 'border-box'
      });
    }
    makeField('Unit', unitInput);

    // Theme (optional) field - allow specifying a theme name from a dropdown
    let themeInput;
    // Use ha-select if available; otherwise fall back to a native select element.  The
    // ha-select component uses mwc-list-item children to represent options.  We
    // populate the options later when hass is set.
    if (customElements.get('ha-select')) {
      themeInput = document.createElement('ha-select');
      themeInput.setAttribute('label', 'Theme (optional)');
      // When the user picks an item, update config
      themeInput.addEventListener('selected', (ev) => {
        // Prevent propagation to avoid other handlers treating the value as config
        ev.stopPropagation();
        wrapper._cfg.theme = themeInput.value || undefined;
        fireChange();
      });
    } else {
      themeInput = document.createElement('select');
      // Always include an empty option so users can clear their selection.  We
      // recreate the option list when hass is set so we don't duplicate items.
      const emptyOpt = document.createElement('option');
      emptyOpt.value = '';
      emptyOpt.textContent = '';
      themeInput.appendChild(emptyOpt);
      themeInput.addEventListener('change', (ev) => {
        ev.stopPropagation();
        wrapper._cfg.theme = themeInput.value || undefined;
        fireChange();
      });
      // Apply HA-like styling to the native select fallback
      Object.assign(themeInput.style, {
        padding: '8px 10px',
        borderRadius: '8px',
        background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
        border: '1px solid var(--divider-color)',
        color: 'var(--primary-text-color, inherit)',
        width: '100%',
        boxSizing: 'border-box'
      });
    }
    makeField('Theme (optional)', themeInput);

    // State color toggle field
    let colorInput;
    if (customElements.get('ha-switch')) {
      colorInput = document.createElement('ha-switch');
      colorInput.addEventListener('change', () => {
        wrapper._cfg.state_color = !!colorInput.checked;
        fireChange();
      });
    } else {
      colorInput = document.createElement('input');
      colorInput.type = 'checkbox';
      colorInput.addEventListener('change', () => {
        wrapper._cfg.state_color = !!colorInput.checked;
        fireChange();
      });
    }
    // Build a field wrapper for state color and append to grid
    const colWrap = document.createElement('div');
    colWrap.style.display = 'flex';
    colWrap.style.alignItems = 'center';
    colWrap.style.gap = '8px';
    const colorLabel = document.createElement('span');
    colorLabel.textContent = 'Show state color';
    colorLabel.style.fontSize = '.8rem';
    colorLabel.style.opacity = '0.8';
    colWrap.appendChild(colorLabel);
    colWrap.appendChild(colorInput);
    grid.appendChild(colWrap);

    // Append grid to wrapper
    wrapper.appendChild(grid);

    // Provide a setConfig method to populate fields from an existing config
    wrapper.setConfig = (cfg2 = {}) => {
      wrapper._cfg = { type: 'entity', ...(cfg2 || {}) };
      const c = wrapper._cfg;
      // Update each field if available
      if (entInput) {
        if ('value' in entInput) entInput.value = c.entity || '';
        if (entInput.setAttribute) entInput.setAttribute('value', c.entity || '');
      }
      if (nameInput) {
        nameInput.value = c.name || '';
      }
      if (iconInput) {
        iconInput.value = c.icon || '';
      }
      if (attrInput) {
        try { updateAttributeOptions(); } catch {}
        // After repopulating options, restore the selected attribute if it exists
        attrInput.value = c.attribute || '';
      }
      if (unitInput) {
        unitInput.value = c.unit || '';
      }
      if (themeInput) {
        themeInput.value = c.theme || '';
      }
      if (colorInput) {
        if ('checked' in colorInput) colorInput.checked = !!c.state_color;
      }
    };

    // Define reactive hass property so that nested pickers receive hass
    Object.defineProperty(wrapper, 'hass', {
      get() {
        return this._hass;
      },
      set(v) {
        this._hass = v;
        // Pass hass to the entity picker so it can populate entities internally.  Assign
        // the property even if the custom element isn't yet defined; once the
        // element upgrades, it will use this value.  Additionally, if the
        // element hasn't been registered yet, schedule a second assignment when
        // it upgrades to ensure the suggestions list appears.
        if (entInput) {
          try { entInput.hass = v; } catch {}
          // If ha-entity-picker is not yet defined, wait for it to be ready and then
          // reassign the hass property.  This mirrors the logic used in the
          // visibility editor to ensure the picker upgrades correctly.
          if (!customElements.get('ha-entity-picker')) {
            customElements.whenDefined('ha-entity-picker').then(() => {
              try { entInput.hass = this._hass; entInput.requestUpdate?.(); } catch {}
            }).catch(() => {});
          }
        }
        // Pass hass to the icon picker so it can populate icons.  Assign even
        // if the custom element isn't defined yet; we'll reassign after upgrade.
        if (iconInput) {
          try { iconInput.hass = v; } catch {}
          if (!customElements.get('ha-icon-picker')) {
            customElements.whenDefined('ha-icon-picker').then(() => {
              try { iconInput.hass = this._hass; iconInput.requestUpdate?.(); } catch {}
            }).catch(() => {});
          }
        }
        // Populate the theme dropdown with available themes.  We support both
        // ha-select (using mwc-list-item children) and a native select element.  For
        // ha-select, use mwc-list-item; for native selects, use option elements.
        if (themeInput) {
          // Determine available theme names
          let themeNames = [];
          if (v && v.themes) {
            if (v.themes.themes) {
              themeNames = Object.keys(v.themes.themes);
            } else if (typeof v.themes === 'object') {
              themeNames = Object.keys(v.themes).filter((k) => k !== 'default_theme');
            }
          }
          // Save previous value to restore after repopulating
          const prevVal = themeInput.value;
          const tag = (themeInput.tagName || '').toLowerCase();
          if (tag === 'ha-select') {
            // Clear existing items
            themeInput.innerHTML = '';
            // Insert an empty item to allow clearing the selection
            const emptyItem = document.createElement('mwc-list-item');
            emptyItem.setAttribute('value', '');
            emptyItem.textContent = '';
            themeInput.appendChild(emptyItem);
            for (const name of themeNames) {
              const item = document.createElement('mwc-list-item');
              item.setAttribute('value', name);
              item.textContent = name;
              themeInput.appendChild(item);
            }
            // Restore previous selection if it still exists
            if (prevVal && themeNames.includes(prevVal)) {
              themeInput.value = prevVal;
            } else if (!prevVal) {
              themeInput.value = '';
            }
            // Request update in case the component uses LitElement
            themeInput.requestUpdate?.();
          } else if (tag === 'select') {
            // Clear existing options
            themeInput.innerHTML = '';
            const emptyOpt = document.createElement('option');
            emptyOpt.value = '';
            emptyOpt.textContent = '';
            themeInput.appendChild(emptyOpt);
            for (const name of themeNames) {
              const o = document.createElement('option');
              o.value = name;
              o.textContent = name;
              themeInput.appendChild(o);
            }
            if (prevVal && Array.from(themeInput.options).some(o => o.value === prevVal)) {
              themeInput.value = prevVal;
            }
          }
        }

        // Update attribute options when hass changes since the list of
        // attributes depends on the selected entity and the hass states.  This
        // ensures that if hass updates after the editor is created, the
        // attribute dropdown stays in sync with the current entity.
        try { updateAttributeOptions(); } catch {}
      }
    });

    // Populate initial configuration
    wrapper.setConfig(cfg || {});
    // Return the wrapped editor
    return wrapper;
  }

  _shapeBySchema(type, cfg = {}) {
    const sc = this._schemaForType(type) || { fields: [] };
    const out = { ...cfg, type };

    for (const f of sc.fields) {
      let v = out[f.key];

      if (f.type === 'entities') {
        const arr = Array.isArray(v) ? v : (v != null && v !== '' ? [v] : []);
        const clean = arr.filter(Boolean);
        if (clean.length) out[f.key] = clean;
        else delete out[f.key];
      }
      else if (f.type === 'entity') {
        if (Array.isArray(v)) v = v[0];
        if (v == null || v === '') delete out[f.key];
        else out[f.key] = String(v);
      }
      else if (f.type === 'number') {
        if (v == null || v === '') { delete out[f.key]; }
        else {
          const n = Number(v);
          if (Number.isFinite(n)) out[f.key] = n;
          else delete out[f.key];
        }
      }
      else if (f.type === 'select' || f.type === 'text' || f.type === 'textarea') {
        if (v == null || v === '') delete out[f.key];
        else out[f.key] = v;
      }
    }
    return out;
  }

  _statesList(domains) {
    const all = Object.keys(this.hass?.states || {});
    if (!domains || !domains.length) return all;

    if (!this.__domainIndex || this.__domainIndex._gen !== all.length) {
      const map = {};
      for (const id of all) {
        const d = id.split('.')[0];
        (map[d] ||= []).push(id);
      }
      this.__domainIndex = { _gen: all.length, map };
    }
    const out = [];
    for (const d of domains) if (this.__domainIndex.map[d]) out.push(...this.__domainIndex.map[d]);
    return out;
  }
  _isNumericEntity(eid) {
    const st = this.hass?.states?.[eid]; if (!st) return false;
    const v = Number(st.state); return Number.isFinite(v);
  }

  _getFaves(){ try { return new Set(JSON.parse(localStorage.getItem('ddc_faves')||'[]')); } catch { return new Set(); } }
  _setFaves(set){ try { localStorage.setItem('ddc_faves', JSON.stringify(Array.from(set))); } catch {} }
  _getRecent(){ try { return JSON.parse(localStorage.getItem('ddc_recent_types')||'[]'); } catch { return []; } }
  _pushRecent(type){ try { const r = this._getRecent().filter(t=>t!==type); r.unshift(type); if (r.length>10) r.length=10; localStorage.setItem('ddc_recent_types', JSON.stringify(r)); } catch{} }

  /* ----------------------------- YAML editor helpers ----------------------------- */
  async _ensureCodeMirror() {
    if (this.__cmReady) return;
    if (!document.querySelector('link[data-cm-core]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css';
      l.setAttribute('data-cm-core','');
      document.head.appendChild(l);
    }
    await new Promise((resolve) => {
      if (window.CodeMirror) return resolve();
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js';
      s.onload = resolve;
      document.head.appendChild(s);
    });
    await new Promise((resolve) => {
      if (window.CodeMirror?.mimeModes?.yaml) return resolve();
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js';
      s.onload = resolve;
      document.head.appendChild(s);
    });
    this.__cmReady = true;
  }

  async _mountYamlEditor(hostEl, initialCfg, onValidChange, onInvalidChange) {
    const dump = (o) => (window.jsyaml ? window.jsyaml.dump(o) : JSON.stringify(o, null, 2));
    const parse = (t) => (window.jsyaml ? window.jsyaml.load(t) : JSON.parse(t));
    hostEl.innerHTML = '';
    const initialText = dump(initialCfg);

    if (customElements.get('ha-code-editor')) {
      const ed = document.createElement('ha-code-editor');
      ed.mode = 'yaml';
      ed.hass = this.hass;
      ed.value = initialText;
      ed.style.display = 'block';
      ed.style.height = '260px';
      hostEl.appendChild(ed);

      let programmatic = false;
      ed.addEventListener('value-changed', (e) => {
        if (programmatic) return;
        const txt = e.detail?.value ?? ed.value ?? '';
        try { onValidChange(parse(txt)); }
        catch (err) { onInvalidChange?.(err); }
      });
      return {
        setValue: (cfg) => {
          const txt = dump(cfg);
          if ((ed.value ?? '') !== txt) { programmatic = true; ed.value = txt; programmatic = false; }
        }
      };
    }

    try {
      await this._ensureCodeMirror();
      const cm = window.CodeMirror(hostEl, {
        value: initialText,
        mode: 'yaml',
        lineNumbers: true,
        lineWrapping: true,
        indentUnit: 2,
        tabSize: 2
      });
      let programmatic = false;
      cm.on('change', () => {
        if (programmatic) return;
        const text = cm.getValue();
        try { onValidChange(parse(text)); }
        catch (e) { onInvalidChange?.(e); }
      });
      return {
        setValue: (cfg) => {
          const txt = dump(cfg);
          if (cm.getValue() !== txt) { programmatic = true; cm.setValue(txt); programmatic = false; }
        }
      };
    } catch {
      const ta = document.createElement('textarea');
      ta.style.width = '100%';
      ta.style.height = '260px';
      ta.value = initialText;
      ta.addEventListener('input', () => {
        try { onValidChange(parse(ta.value)); }
        catch (e) { onInvalidChange?.(e); }
      });
      hostEl.appendChild(ta);
      return { setValue: (cfg) => { const txt = dump(cfg); if (ta.value !== txt) ta.value = txt; } };
    }
  }

  /* ----------------------- Picker (fast, cached) ----------------------- */
  
    _createVirtualList({ container, items, rowHeight = 36, renderRow }) {
    container.style.position = 'relative';
    container.style.overflow = 'auto';
    const spacer = document.createElement('div');
    spacer.style.height = `${items.length * rowHeight}px`;
    container.innerHTML = '';
    container.appendChild(spacer);

    const mount = new Map(); // index -> element
    const render = () => {
      const scrollTop = container.scrollTop;
      const h = container.clientHeight;
      const first = Math.max(0, Math.floor(scrollTop / rowHeight) - 6);
      const last  = Math.min(items.length - 1, Math.ceil((scrollTop + h) / rowHeight) + 6);

      // remove out-of-window rows
      for (const [i, el] of mount) {
        if (i < first || i > last) { el.remove(); mount.delete(i); }
      }
      // add visible rows
      for (let i = first; i <= last; i++) {
        if (mount.has(i)) continue;
        const el = renderRow(items[i], i);
        el.style.position = 'absolute';
        el.style.left = '0';
        el.style.right = '0';
        el.style.top = `${i * rowHeight}px`;
        mount.set(i, el);
        container.appendChild(el);
      }
    };

    container.addEventListener('scroll', render, { passive: true });
    new ResizeObserver(render).observe(container);
    render();

    return {
      refresh(newItems) {
        if (newItems) {
          items = newItems;
          spacer.style.height = `${items.length * rowHeight}px`;
          for (const [, el] of mount) el.remove();
          mount.clear();
        }
        render();
      }
    };
  }
  
  async _openSmartPicker(mode='add', initialCfg=null, onCommit=null) {

    
    const close = () => modal.remove();
    const modal = document.createElement('div'); modal.className='modal';
    modal.innerHTML = `
      <div class="dialog" role="dialog" aria-modal="true">
        <div class="dlg-head">
          <h3>${mode==='edit'?'Edit card':'Add a card'}</h3>
          <div style="display:flex;gap:10px;flex:1">
            <input id="search" placeholder="Search cards (name or type)…" aria-label="search" style="flex:1;padding:10px 12px;border-radius:12px;border:1px solid var(--divider-color);background:var(--primary-background-color);color:var(--primary-text-color)">
          </div>
          <button class="btn secondary" id="cancelBtn"><ha-icon icon="mdi:close"></ha-icon><span style="margin-left:6px">Cancel</span></button>
          <button class="btn" id="addBtn" disabled>${mode==='edit'
            ? '<ha-icon icon="mdi:content-save"></ha-icon><span style="margin-left:6px">Update</span>'
            : '<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add</span>'}
          </button>
        </div>
        <div id="layoutGrid" class="layout">
          <div class="pane" id="leftPane"></div>
          <div class="pane" id="rightPane">
            <div class="rightGrid">
              <div class="sec" id="quickFillSec" style="grid-column:1;grid-row:1">
                <div class="hd">Quick fill <span style="opacity:.7;font-size:.85rem">card-aware</span></div>
                <div class="bd" id="quickFill"></div>
              </div>

              <div class="sec" style="grid-column:2;grid-row:1 / span 3;min-height:0;position:relative">
                <div class="hd">Preview</div>
                <div class="spin-center" id="previewSpin" hidden>
                  <ha-circular-progress indeterminate></ha-circular-progress>
                </div>
                <div class="bd" style="min-height:0"><div id="cardHost"></div></div>
              </div>

              <div class="sec" id="optionsSec" style="grid-column:1;grid-row:2;min-height:0;position:relative">
                <div class="hd">
                  <span>Card options (official editor)</span>
                  <div id="optTabs" class="tabs">
                    <button id="tabVisual" class="tab active" aria-selected="true">Visual</button>
                    <button id="tabYaml" class="tab">YAML</button>
                    <!-- DDC: Visibility tab allows configuring when the card should be shown -->
                    <button id="tabVis" class="tab">Visibility</button>
                  </div>
                </div>
                <div class="spin-center" id="editorSpin" hidden>
                  <ha-circular-progress indeterminate></ha-circular-progress>
                </div>
                <div class="bd" style="min-height:0">
                  <div id="editorHost"></div>
                  <div id="err" class="err" hidden style="color:var(--error-color);font-size:.9rem"></div>
                </div>
              </div>

              <div class="sec" id="yamlSec" style="grid-column:1;grid-row:3;min-height:0">
                <div class="hd">YAML editor</div>
                <div class="bd" style="min-height:0">
                  <div id="yamlHost"></div>
                  <div id="yamlErr" class="err" hidden style="color:var(--error-color);font-size:.9rem;margin-top:8px"></div>
                </div>
              </div>

              <!-- DDC: Visibility section shares the same grid row as YAML. It is hidden by default and shown when the Visibility tab is selected. -->
              <div class="sec" id="visSec" style="grid-column:1;grid-row:3;min-height:0;display:none">
                <div class="hd">Visibility</div>
                <div class="bd" style="min-height:0">
                  <div id="visHost"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dlg-foot">
          <span style="flex:1;opacity:.75;font-size:.85rem">Tip: use <ha-icon icon="mdi:star-outline"></ha-icon> to favorite cards you use often</span>
          <button class="btn secondary" id="footCancel"><ha-icon icon="mdi:close"></ha-icon><span style="margin-left:6px">Cancel</span></button>
          <button class="btn" id="footAdd" disabled>${mode==='edit'
            ? '<ha-icon icon="mdi:content-save"></ha-icon><span style="margin-left:6px">Update</span>'
            : '<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add</span>'}
          </button>
        </div>
      </div>`;
    this.shadowRoot.appendChild(modal);

    const left = modal.querySelector('#leftPane');
    const addTop = modal.querySelector('#addBtn');
    const addBottom = modal.querySelector('#footAdd');
    const cancelTop = modal.querySelector('#cancelBtn');
    const cancelBot = modal.querySelector('#footCancel');
    const search = modal.querySelector('#search');
    const cardHost = modal.querySelector('#cardHost');
    const editorHost = modal.querySelector('#editorHost');
    const editorSpin = modal.querySelector('#editorSpin');
    const quickFill = modal.querySelector('#quickFill');
    const yamlHost = modal.querySelector('#yamlHost');
    const yamlErr = modal.querySelector('#yamlErr');
    const yamlSec = modal.querySelector('#yamlSec');
    const tabVisual = modal.querySelector('#tabVisual');
    const tabYaml = modal.querySelector('#tabYaml');
    // Visibility tab and section references
    const tabVis = modal.querySelector('#tabVis');
    const visSec = modal.querySelector('#visSec');
    const visHost = modal.querySelector('#visHost');
    const err = modal.querySelector('#err');
    const previewSpin = modal.querySelector('#previewSpin');
    const enableCommit = (on) => { addTop.disabled = addBottom.disabled = !on; };
    const setError = (msg) => { if (!msg){ err.hidden=true; err.textContent=''; } else { err.hidden=false; err.textContent=msg; } };

    const faves = this._getFaves();
    const recent = this._getRecent();
    const catalog = this._catalog();
    const favSection = catalog.find(c=>c.id==='favorites');
    const recSection = catalog.find(c=>c.id==='recent');
    const allItems = catalog.flatMap(c => c.items || []);
    favSection.items = allItems.filter(i => faves.has(i.type));
    recSection.items = recent.map(t => allItems.find(i => i.type===t)).filter(Boolean);

    const customItems = this._customCardsFromRegistry();
    if (customItems.length) {
      catalog.push({
        id: 'custom',
        name: 'Custom (installed)',
        items: customItems,
      });
    }

    // ---------------------------------------------------------------------------
    // UI tweaks: hide quick fill area, add selected-card headline and fave toggle
    // Hide the quick fill section entirely so the editor can use the full height.
    const quickFillSecDiv = modal.querySelector('#quickFillSec');
    if (quickFillSecDiv) quickFillSecDiv.style.display = 'none';
    // Do not reposition the options and YAML sections. The original
    // grid-template-rows assigns a flexible row (1fr) to the YAML section,
    // allowing it to scroll instead of forcing the entire editor to grow.

    // Set up a header in the editor for showing the selected card and a star to
    // favorite the current card.  We create the elements once and update them
    // whenever a different card is selected.  Favorites are persisted using
    // existing _getFaves/_setFaves helpers.
    const optionsHd = modal.querySelector('#optionsSec .hd');
    // Local references for the header label and star button
    let selInfo;
    let favBtn;
    // Function to update the star icon state based on whether the current card
    // type is favorited.  Called whenever the favorites set or currentType changes.
    const updateFavStar = () => {
      if (!favBtn) return;
      const on = currentType && faves.has(currentType);
      const icon = favBtn.querySelector('ha-icon');
      if (icon) icon.setAttribute('icon', on ? 'mdi:star' : 'mdi:star-outline');
    };
    // Function to update the headline text and star icon.  Called from selectType.
    const updateHeader = (type) => {
      if (selInfo) {
        const item = allItems.find(i => i.type === type);
        const nm = item ? item.name : (type || '');
        selInfo.textContent = nm;
      }
      updateFavStar();
    };
    // Only initialize the header once.
    if (optionsHd && !optionsHd.querySelector('.sel-info')) {
      // Hide the existing static label if present
      const titleSpan = optionsHd.querySelector('span');
      if (titleSpan) {
        titleSpan.style.display = 'none';
      }
      // Create the dynamic selected-card label
      selInfo = document.createElement('span');
      selInfo.className = 'sel-info';
      // Flex so it grows to fill space before the star button
      selInfo.style.flex = '1';
      selInfo.style.fontWeight = 'bold';
      selInfo.style.paddingRight = '8px';
      optionsHd.insertBefore(selInfo, optionsHd.firstChild);
      // Create the favorite star button
      favBtn = document.createElement('button');
      favBtn.className = 'icon-btn';
      favBtn.setAttribute('title','Favorite');
      Object.assign(favBtn.style, {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '28px',
        height: '28px',
        borderRadius: '6px',
        border: '1px solid var(--divider-color)',
        background: 'var(--primary-background-color)',
        padding: '0',
        marginLeft: '4px',
        cursor: 'pointer'
      });
      favBtn.innerHTML = '<ha-icon icon="mdi:star-outline"></ha-icon>';
      optionsHd.appendChild(favBtn);
      // Clicking the star toggles favorite status for the current card.
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!currentType) return;
        if (faves.has(currentType)) {
          faves.delete(currentType);
        } else {
          faves.add(currentType);
        }
        this._setFaves(faves);
        updateFavStar();
        // Re-render the list so the favorites section reflects the new state
        renderLeft();
      });
    }
    // End of UI tweaks

    let __activeTab = 'visual';

    const showTab = (name) => {
      // Determine which of the three tabs is active
      const wantYaml = name === 'yaml';
      const wantVis  = name === 'vis';
      const wantVisual = !wantYaml && !wantVis;

      // Update tab button styling and ARIA attributes
      tabVisual.classList.toggle('active', wantVisual);
      tabVisual.setAttribute('aria-selected', String(wantVisual));
      tabYaml.classList.toggle('active', wantYaml);
      tabYaml.setAttribute('aria-selected', String(wantYaml));
      if (tabVis) {
        tabVis.classList.toggle('active', wantVis);
        tabVis.setAttribute('aria-selected', String(wantVis));
      }

      // Show/hide the appropriate editor sections. Visual uses editorHost;
      // YAML uses yamlSec; Visibility uses visSec. Only one is visible at a time.
      editorHost.parentElement.style.display = wantVisual ? '' : 'none';
      yamlSec.style.display   = wantYaml  ? '' : 'none';
      if (visSec) visSec.style.display = wantVis ? '' : 'none';

      if (wantYaml) {
        yamlSec.scrollIntoView({ behavior:'smooth', block:'start' });
      } else if (wantVis && visSec) {
        visSec.scrollIntoView({ behavior:'smooth', block:'start' });
      }

      __activeTab = wantYaml ? 'yaml' : (wantVis ? 'vis' : 'visual');
    };
    
    tabVisual.addEventListener('click', async () => {
      showTab('visual');
      // Mount a new editor the first time; reuse it afterward by updating config.
      // Because visualEditor is reset in selectType(), this will always mount a fresh editor for a new card type.
      if (!visualEditor) {
        await mountVisualEditor(currentConfig);
      } else {
        try { visualEditor.setConfig?.(currentConfig); } catch {}
      }
    });

    tabYaml.addEventListener('click', () => showTab('yaml'));

    // When the Visibility tab is clicked, switch to the visibility editor.
    if (tabVis) {
      tabVis.addEventListener('click', () => {
        showTab('vis');
        // Build or refresh the visibility UI whenever the tab is opened.
        try { buildVisUI(currentConfig); } catch {}
      });
    }
    
    // default: Visual
    showTab('visual');

    const filteredCatalog = () => {
      const q = search.value.trim().toLowerCase();
      return catalog
        .map(section => ({
          ...section,
          items: (section.items || []).filter(
            it => !q || it.name.toLowerCase().includes(q) || it.type.toLowerCase().includes(q)
          )
        }))
        .filter(sec => (sec.items && sec.items.length) || sec.id === 'favorites' || sec.id === 'recent');
    };

    const renderLeft = () => {
      const view = filteredCatalog();
      left.innerHTML = '';
      view.forEach(cat => {
        const div = document.createElement('div');
        div.style.padding = '12px';
        div.style.borderBottom = '1px solid var(--divider-color)';
        const h = document.createElement('h4'); h.textContent = cat.name; h.style.margin='0 0 10px 0'; h.style.fontSize='.92rem'; h.style.opacity='.85';
        div.appendChild(h);

        if (!cat.items.length && (cat.id==='favorites' || cat.id==='recent')) {
          const p = document.createElement('div'); p.style.opacity='.6'; p.style.fontSize='.85rem'; p.textContent = cat.id==='favorites' ? 'No favorites yet.' : 'No recent items yet.'; div.appendChild(p);
        } else {
          cat.items.forEach(item => {
            const b = document.createElement('button');
            b.innerHTML = `<span style="display:inline-flex;align-items:center;gap:8px">
              <ha-icon icon="${item.icon}"></ha-icon><span>${item.name}</span>
            </span>`;
            Object.assign(b.style,{display:'block',width:'100%',textAlign:'left',border:'none',background:'transparent',padding:'8px',borderRadius:'10px',cursor:'pointer'});
            b.addEventListener('click', async () => { highlight(b); await selectType(item.type); });
            div.appendChild(b);
          });
        }
        left.appendChild(div);
      });
    };

    const highlight = (btn) => {
      // Reset all buttons to default appearance
      left.querySelectorAll('button').forEach(b => {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = '';
      });
      // Highlight the selected button so it is obvious which one is active.
      if (btn) {
        btn.classList.add('active');
        // Soft highlight background and primary color text for contrast
        btn.style.background = 'rgba(3,169,244,.12)';
        btn.style.color = 'var(--primary-color)';
      }
    };

    let currentConfig = null;
    let currentType = null;
    let yamlEditorApi = null;
    let visualEditor = null;
    let editor = null;
    let pickSeq = 0; // stale-select guard
    let __previewTimer = null;
    let __lastPreviewCfgJSON = '';

    const buildQuickFill = (type, cfg) => {
      const sc = this._schemaForType(type);
      quickFill.innerHTML = '';
      if (!sc.fields.length) {
        quickFill.innerHTML = `<div style="opacity:.7;font-size:.9rem">No quick fill for this card — use the editors below.</div>`;
        return;
      }
      const all = Object.keys(this.hass?.states || {});
      const fieldWrap = document.createElement('div');

      const addEntityItem = (eid, arr, container, keyForMulti) => {
        const div = document.createElement('div');
        Object.assign(div.style,{padding:'8px 10px',border:'1px solid var(--divider-color)',borderRadius:'10px',cursor:'pointer',userSelect:'none',display:'flex',alignItems:'center',gap:'8px'});
        div.innerHTML = `<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${eid}</span>`;
        if (arr.includes(eid)) {
          div.style.background='rgba(3,169,244,.12)'; div.style.borderColor='var(--primary-color)';
          div.querySelector('ha-icon').setAttribute('icon','mdi:checkbox-marked');
        }
        div.addEventListener('click', async () => {
          const idx = arr.indexOf(eid);
          if (idx>=0) arr.splice(idx,1); else arr.push(eid);
          const on = arr.includes(eid);
          div.style.background = on ? 'rgba(3,169,244,.12)' : '';
          div.style.borderColor = on ? 'var(--primary-color)' : 'var(--divider-color)';
          div.querySelector('ha-icon').setAttribute('icon', on ? 'mdi:checkbox-marked' : 'mdi:checkbox-blank-outline');
          currentConfig = this._shapeBySchema(type, {...currentConfig, [keyForMulti]: [...arr]});
          mountPreview(currentConfig);
          yamlEditorApi?.setValue(currentConfig);
        });
        container.appendChild(div);
      };

      sc.fields.forEach(f => {
        const row = document.createElement('div'); Object.assign(row.style,{display:'flex',gap:'8px',alignItems:'center',marginBottom:'8px'});
        const label = document.createElement('label'); label.textContent = f.label || f.key; label.style.minWidth='130px';

        if (f.type === 'entities') {
          const wrap = document.createElement('div'); wrap.style.flex='1';
          const filter = document.createElement('input');
          Object.assign(filter, { placeholder:'Filter entities…' });
          Object.assign(filter.style, {
            width:'100%', padding:'8px 10px', borderRadius:'10px',
            border:'1px solid var(--divider-color)',
            background:'var(--card-background-color)', color:'var(--primary-text-color)'
          });
          const list = document.createElement('div');
          Object.assign(list.style, {
            maxHeight:'220px', overflow:'auto', marginTop:'8px',
            border:'1px solid var(--divider-color)', borderRadius:'10px', padding:'6px'
          });
          const pool = (f.domains && f.domains.length) ? this._statesList(f.domains) : all;
          const selected = Array.isArray(cfg[f.key]) ? [...cfg[f.key]] : (cfg[f.key] ? [cfg[f.key]] : []);

          // virtualized row renderer
          const renderRow = (eid) => {
            const div = document.createElement('div');
            Object.assign(div.style, {
              padding:'6px 10px', margin:'4px 0',
              border:'1px solid var(--divider-color)', borderRadius:'10px',
              cursor:'pointer', display:'flex', alignItems:'center', gap:'8px', background:''
            });
            const icon = document.createElement('ha-icon');
            icon.setAttribute('icon','mdi:checkbox-blank-outline');
            icon.style.setProperty('--mdc-icon-size','18px');
            const text = document.createElement('span');
            text.textContent = eid;
            text.style.whiteSpace = 'nowrap';
            text.style.overflow = 'hidden';
            text.style.textOverflow = 'ellipsis';
            div.append(icon, text);

            const paint = () => {
              const on = selected.includes(eid);
              div.style.background = on ? 'rgba(3,169,244,.12)' : '';
              div.style.borderColor = on ? 'var(--primary-color)' : 'var(--divider-color)';
              icon.setAttribute('icon', on ? 'mdi:checkbox-marked' : 'mdi:checkbox-blank-outline');
            };
            paint();

            div.addEventListener('click', () => {
              const idx = selected.indexOf(eid);
              if (idx >= 0) selected.splice(idx, 1); else selected.push(eid);
              currentConfig = this._shapeBySchema(type, {...currentConfig, [f.key]: [...selected]});
              mountPreview(currentConfig);
              yamlEditorApi?.setValue(currentConfig);
              paint();
            });

            return div;
          };

          let filtered = pool;
          this._createVirtualList({ container: list, items: filtered, rowHeight: 36, renderRow });

          filter.addEventListener('input', () => {
            const q = filter.value.trim().toLowerCase();
            filtered = pool.filter(eid => !q || eid.toLowerCase().includes(q));
            this._createVirtualList({ container: list, items: filtered, rowHeight: 36, renderRow });
          });

          wrap.append(filter, list);
          row.append(label, wrap);
          currentConfig = this._shapeBySchema(type, {...cfg, [f.key]: selected});
        }

        if (f.type === 'entity') {
          const dsWrap = document.createElement('div'); dsWrap.style.flex='1'; dsWrap.style.position='relative';
          const ds = document.createElement('input'); ds.setAttribute('list', 'ddc_entlist_'+f.key);
          Object.assign(ds.style,{width:'100%',padding:'8px 10px 8px 36px',borderRadius:'10px',border:'1px solid var(--divider-color)'});
          ds.placeholder = `Select ${f.label?.toLowerCase() || 'entity'}…`;
          const iconLead = document.createElement('ha-icon'); iconLead.setAttribute('icon','mdi:magnify');
          Object.assign(iconLead.style,{position:'absolute',left:'10px',top:'8px',width:'18px',height:'18px','--mdc-icon-size':'18px',opacity:'.7'});
          const dl = document.createElement('datalist'); dl.id = 'ddc_entlist_'+f.key;
          const pool = (f.domains && f.domains.length) ? this._statesList(f.domains) : Object.keys(this.hass?.states || {});
          dl.innerHTML = pool.map(e => `<option value="${e}">`).join('');
          ds.value = Array.isArray(cfg[f.key]) ? (cfg[f.key][0] || '') : (cfg[f.key] || '');
          ds.addEventListener('change', async () => {
            currentConfig = this._shapeBySchema(type, {...currentConfig, [f.key]: ds.value || undefined});
            mountPreview(currentConfig);
            yamlEditorApi?.setValue(currentConfig);
          });
          dsWrap.append(iconLead, ds, dl);
          row.append(label, dsWrap);
        }

        if (f.type === 'number') {
          const inpWrap = document.createElement('div'); inpWrap.style.flex='1'; inpWrap.style.position='relative';
          const inp = document.createElement('input'); inp.type='number'; if (f.step) inp.step=f.step;
          Object.assign(inp.style,{width:'100%',padding:'8px 10px 8px 36px',borderRadius:'10px',border:'1px solid var(--divider-color)'});
          const numIcon = document.createElement('ha-icon'); numIcon.setAttribute('icon','mdi:counter'); Object.assign(numIcon.style,{position:'absolute',left:'10px',top:'8px','--mdc-icon-size':'18px',width:'18px',height:'18px',opacity:'.7'});
          inp.value = cfg[f.key] ?? f.default ?? '';
          inp.addEventListener('input', async () => {
            const v = inp.value==='' ? undefined : Number(inp.value);
            currentConfig = this._shapeBySchema(type, {...currentConfig, [f.key]: isNaN(v)? undefined : v});
            mountPreview(currentConfig);
            yamlEditorApi?.setValue(currentConfig);
          });
          inpWrap.append(numIcon, inp);
          row.append(label, inpWrap);
        }

        if (f.type === 'select') {
          const selWrap = document.createElement('div'); selWrap.style.flex='1'; selWrap.style.position='relative';
          const sel = document.createElement('select'); Object.assign(sel.style,{width:'100%',padding:'8px 10px 8px 36px',borderRadius:'10px',border:'1px solid var(--divider-color)'});
          const selIcon = document.createElement('ha-icon'); selIcon.setAttribute('icon','mdi:format-list-bulleted'); Object.assign(selIcon.style,{position:'absolute',left:'10px',top:'8px','--mdc-icon-size':'18px',width:'18px',height:'18px',opacity:'.7'});
          (f.options||[]).forEach(o => { const opt = document.createElement('option'); opt.value = o; sel.appendChild(opt); });
          sel.value = cfg[f.key] ?? f.default ?? (f.options?.[0] || '');
          sel.addEventListener('change', async () => {
            currentConfig = this._shapeBySchema(type, {...currentConfig, [f.key]: sel.value});
            mountPreview(currentConfig);
            yamlEditorApi?.setValue(currentConfig);
          });
          selWrap.append(selIcon, sel);
          row.append(label, selWrap);
        }

        if (f.type === 'text') {
          const inpWrap = document.createElement('div'); inpWrap.style.flex='1'; inpWrap.style.position='relative';
          const inp = document.createElement('input'); inp.type='text';
          Object.assign(inp.style,{width:'100%',padding:'8px 10px 8px 36px',borderRadius:'10px',border:'1px solid var(--divider-color)'});
          const tIcon = document.createElement('ha-icon'); tIcon.setAttribute('icon','mdi:text'); Object.assign(tIcon.style,{position:'absolute',left:'10px',top:'8px','--mdc-icon-size':'18px',width:'18px',height:'18px',opacity:'.7'});
          inp.value = cfg[f.key] ?? '';
          inp.addEventListener('input', async () => {
            currentConfig = this._shapeBySchema(type, {...currentConfig, [f.key]: inp.value || undefined});
            mountPreview(currentConfig);
            yamlEditorApi?.setValue(currentConfig);
          });
          inpWrap.append(tIcon, inp);
          row.append(label, inpWrap);
        }

        if (f.type === 'textarea') {
          const ta = document.createElement('textarea');
          Object.assign(ta.style,{flex:'1',minHeight:'120px',padding:'8px 10px',borderRadius:'10px',border:'1px solid var(--divider-color)'});
          ta.value = cfg[f.key] ?? '';
          ta.addEventListener('input', async () => {
            currentConfig = this._shapeBySchema(type, {...currentConfig, [f.key]: ta.value || ''});
            mountPreview(currentConfig);
            yamlEditorApi?.setValue(currentConfig);
          });
          row.append(label, ta);
        }

        fieldWrap.appendChild(row);
      });

      quickFill.innerHTML = '';
      quickFill.appendChild(fieldWrap);
    };

    /**
     * Render the visibility editor UI. This editor allows the user to define
     * simple conditions that control when a card should be shown. Conditions
     * mirror the core Home Assistant visibility feature: each object in the
     * visibility array is evaluated and all conditions must pass for the card
     * to be visible. Only top‑level AND conditions are supported by this UI.
     *
     * Supported condition types:
     *  - state: entity and state string
     *  - numeric_state: entity with optional above/below thresholds
     *  - screen: media query string
     *  - user: comma separated user ids
     */
    // Maintain collapse/expand state for each visibility condition. A WeakMap
    // allows us to associate transient UI state with each condition object
    // without persisting it back into the config. The state survives
    // re-rendering because the same condition objects are reused in the visList.
    const visExpansionStates = new WeakMap();

    const buildVisUIOld = (cfg) => {
      if (!visHost) return;
      // Ensure visibility exists on the config. Clone to avoid mutating directly.
      let visList = Array.isArray(cfg?.visibility) ? cfg.visibility.map(c => ({ ...c })) : [];
      const reRender = () => buildVisUI(currentConfig);
      const updateConfig = () => {
        // Remove empty conditions
        visList = visList.filter((c) => c && typeof c === 'object' && c.condition);
        currentConfig = { ...currentConfig, visibility: visList };
        try { yamlEditorApi?.setValue(currentConfig); } catch {}
        try { visualEditor?.setConfig?.(currentConfig); } catch {}
        mountPreview(currentConfig);
      };
      const render = () => {
        visHost.innerHTML = '';
        // If no conditions are defined, show a friendly hint
        if (!visList || !visList.length) {
          const p = document.createElement('div');
          p.style.opacity = '.7';
          p.style.fontSize = '.9rem';
          p.style.marginBottom = '8px';
          p.textContent = 'No conditions defined – this card is always visible.';
          visHost.appendChild(p);
        }
        visList.forEach((cond, idx) => {
          // Container for each condition
          const row = document.createElement('div');
          Object.assign(row.style, { display:'flex', flexDirection:'column', gap:'6px', marginBottom:'12px', border:'1px solid var(--divider-color)', borderRadius:'8px', padding:'8px' });
          // Header with icon and type label
          const headerDiv = document.createElement('div');
          Object.assign(headerDiv.style, { display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'4px' });
          const leftWrap = document.createElement('div');
          leftWrap.style.display = 'flex';
          leftWrap.style.alignItems = 'center';
          leftWrap.style.gap = '6px';
          const icon = document.createElement('ha-icon');
          let iconName = 'mdi:filter';
          const type = cond.condition || 'state';
          if (type === 'numeric_state') iconName = 'mdi:numeric';
          else if (type === 'screen') iconName = 'mdi:monitor';
          else if (type === 'user') iconName = 'mdi:account';
          else if (type === 'state') iconName = 'mdi:state-machine';
          icon.setAttribute('icon', iconName);
          const labelSpan = document.createElement('span');
          labelSpan.style.fontWeight = 'bold';
          labelSpan.style.textTransform = 'capitalize';
          labelSpan.textContent = (type === 'numeric_state') ? 'Entity numeric state' : (type === 'state' ? 'Entity state' : (type === 'screen' ? 'Screen' : 'User'));
          leftWrap.appendChild(icon);
          leftWrap.appendChild(labelSpan);
          headerDiv.appendChild(leftWrap);
          // Menu: remove button
          const del = document.createElement('button');
          del.setAttribute('title','Remove condition');
          del.innerHTML = '<ha-icon icon="mdi:trash-can-outline"></ha-icon>';
          Object.assign(del.style, { border:'none', background:'transparent', cursor:'pointer', padding:'4px', display:'inline-flex', alignItems:'center' });
          // Ensure the delete button is positioned above other elements
          del.style.position = 'relative';
          del.style.zIndex = '1000';
          del.addEventListener('click', (ev) => {
            // Prevent the click from bubbling to parent elements (which may lock the editor)
            ev.preventDefault();
            ev.stopPropagation();
            // Remove the correct condition using indexOf on the current list. This
            // avoids relying on the stale idx value.
            const index = visList.indexOf(cond);
            if (index > -1) {
              visList.splice(index, 1);
            }
            currentConfig.visibility = visList;
            render();
            updateConfig();
          });
          headerDiv.appendChild(del);
          row.appendChild(headerDiv);
          // Type selector (for choosing the condition type)
          const typeRow = document.createElement('div');
          typeRow.style.display = 'flex';
          typeRow.style.gap = '8px';
          const typeLabel = document.createElement('label');
          typeLabel.textContent = 'Type';
          typeLabel.style.fontSize = '.85rem';
          typeLabel.style.marginRight = '4px';
          const typeSel = document.createElement('select');
          ['state','numeric_state','screen','user'].forEach((opt) => {
            const o = document.createElement('option');
            o.value = opt;
            o.textContent = opt.replace('_',' ');
            typeSel.appendChild(o);
          });
          typeSel.value = type;
          typeSel.addEventListener('change', () => {
            cond.condition = typeSel.value;
            delete cond.entity; delete cond.state; delete cond.state_not;
            delete cond.above; delete cond.below;
            delete cond.media_query; delete cond.users;
            render();
            updateConfig();
          });
          typeRow.appendChild(typeLabel);
          typeRow.appendChild(typeSel);
          row.appendChild(typeRow);
          // Fields container
          const fields = document.createElement('div');
          Object.assign(fields.style, { display:'flex', flexWrap:'wrap', gap:'8px', alignItems:'center' });
          const addField = (labelText, inputEl) => {
            const fieldWrap = document.createElement('div');
            fieldWrap.style.display = 'flex';
            fieldWrap.style.flexDirection = 'column';
            fieldWrap.style.gap = '4px';
            fieldWrap.style.minWidth = '150px';
            const lbl = document.createElement('span');
            lbl.textContent = labelText;
            lbl.style.fontSize = '.75rem';
            fieldWrap.appendChild(lbl);
            fieldWrap.appendChild(inputEl);
            fields.appendChild(fieldWrap);
          };
          // Render condition-specific fields
          const renderFields = () => {
            fields.innerHTML = '';
            if (cond.condition === 'state') {
              // Entity picker
              let entPicker;
              if (customElements.get('ha-entity-picker')) {
                entPicker = document.createElement('ha-entity-picker');
                entPicker.hass = this.hass;
                entPicker.setAttribute('label','Select entity');
                // Ensure the clear icon is visible to allow clearing the selected entity
                entPicker.removeAttribute('hide-clear-icon');
                entPicker.value = cond.entity || '';
                entPicker.addEventListener('value-changed', (ev) => {
                  // Update the selected entity.  Stop propagation so parent
                  // controls (like delete) do not mis-handle the event.
                  ev.stopPropagation();
                  cond.entity = ev.detail.value || '';
                  updateConfig();
                });
              } else {
                entPicker = document.createElement('input');
                entPicker.value = cond.entity || '';
                entPicker.addEventListener('input', () => {
                  cond.entity = entPicker.value.trim();
                  updateConfig();
                });
                // Apply Home Assistant-like styling to the entity input fallback
                Object.assign(entPicker.style, {
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                  border: '1px solid var(--divider-color)',
                  color: 'var(--primary-text-color, inherit)',
                  width: '100%',
                  boxSizing: 'border-box'
                });
              }
              addField('Entity', entPicker);
              // Equals / Not equals selector – use ha-select when available for native styling
              let opSel;
              if (customElements.get('ha-select')) {
                opSel = document.createElement('ha-select');
                // Build options using mwc-list-item
                const optEq = document.createElement('mwc-list-item');
                optEq.setAttribute('value', 'state');
                optEq.textContent = 'State is equal to';
                const optNeq = document.createElement('mwc-list-item');
                optNeq.setAttribute('value', 'state_not');
                optNeq.textContent = 'State is not equal to';
                opSel.appendChild(optEq);
                opSel.appendChild(optNeq);
                opSel.value = cond.state_not != null ? 'state_not' : 'state';
                // Listen for selected event to update config
                opSel.addEventListener('selected', (ev) => {
                  // Prevent bubbling to avoid the editor being marked dirty incorrectly
                  ev.stopPropagation();
                  const v = cond.state_not != null ? cond.state_not : cond.state;
                  if (opSel.value === 'state_not') {
                    cond.state_not = v;
                    delete cond.state;
                  } else {
                    cond.state = v;
                    delete cond.state_not;
                  }
                  updateConfig();
                });
              } else {
                // Fallback to native select
                opSel = document.createElement('select');
                opSel.innerHTML = '<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>';
                opSel.value = cond.state_not != null ? 'state_not' : 'state';
                // Apply HA-like styling
                Object.assign(opSel.style, {
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                  border: '1px solid var(--divider-color)',
                  color: 'var(--primary-text-color, inherit)',
                  width: '100%',
                  boxSizing: 'border-box'
                });
                opSel.addEventListener('change', (ev) => {
                  ev.stopPropagation();
                  const v = cond.state_not != null ? cond.state_not : cond.state;
                  if (opSel.value === 'state_not') {
                    cond.state_not = v;
                    delete cond.state;
                  } else {
                    cond.state = v;
                    delete cond.state_not;
                  }
                  updateConfig();
                });
              }
              addField('Match type', opSel);
              // State value input – use ha-textfield when available for proper styling
              let stInput;
              if (customElements.get('ha-textfield')) {
                stInput = document.createElement('ha-textfield');
                stInput.value = (cond.state_not != null ? cond.state_not : cond.state) || '';
                stInput.setAttribute('label', '');
                stInput.addEventListener('input', (ev) => {
                  // Update the state value immediately. Stop propagation so the
                  // card editor does not misinterpret the input as a click
                  // outside the field.  Ensure only one of state/state_not
                  // exists at a time.
                  ev.stopPropagation();
                  const key = opSel.value;
                  cond[key] = stInput.value;
                  const other = key === 'state' ? 'state_not' : 'state';
                  delete cond[other];
                  updateConfig();
                });
              } else {
                stInput = document.createElement('input');
                stInput.value = (cond.state_not != null ? cond.state_not : cond.state) || '';
                // Apply HA-like styling
                Object.assign(stInput.style, {
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                  border: '1px solid var(--divider-color)',
                  color: 'var(--primary-text-color, inherit)',
                  width: '100%',
                  boxSizing: 'border-box'
                });
                stInput.addEventListener('input', (ev) => {
                  // Mirror numeric state behaviour: update immediately on each
                  // keystroke and stop propagation so parent controls remain
                  // responsive.  Ensure only one of state/state_not exists.
                  ev.stopPropagation();
                  const key = opSel.value;
                  cond[key] = stInput.value;
                  const other = key === 'state' ? 'state_not' : 'state';
                  delete cond[other];
                  updateConfig();
                });
              }
              addField('State', stInput);
            } else if (cond.condition === 'numeric_state') {
              let entPicker;
              if (customElements.get('ha-entity-picker')) {
                entPicker = document.createElement('ha-entity-picker');
                entPicker.hass = this.hass;
              entPicker.setAttribute('label','Select entity');
              entPicker.removeAttribute('hide-clear-icon');
                entPicker.value = cond.entity || '';
              entPicker.addEventListener('value-changed', (ev) => {
                  ev.stopPropagation();
                  cond.entity = ev.detail.value || '';
                  updateConfig();
                });
              } else {
                entPicker = document.createElement('input');
                entPicker.value = cond.entity || '';
                entPicker.addEventListener('input', () => {
                  cond.entity = entPicker.value.trim();
                  updateConfig();
                });
                // Apply Home Assistant-like styling to the entity input fallback
                Object.assign(entPicker.style, {
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                  border: '1px solid var(--divider-color)',
                  color: 'var(--primary-text-color, inherit)',
                  width: '100%',
                  boxSizing: 'border-box'
                });
              }
              addField('Entity', entPicker);
              // Above threshold – use ha-textfield (type number) when available
              let aboveField;
              if (customElements.get('ha-textfield')) {
                aboveField = document.createElement('ha-textfield');
                aboveField.setAttribute('type', 'number');
                aboveField.value = cond.above != null ? cond.above : '';
                aboveField.addEventListener('input', (ev) => {
                  ev.stopPropagation();
                  const v = aboveField.value;
                  if (v === '' || isNaN(Number(v))) delete cond.above;
                  else cond.above = Number(v);
                  updateConfig();
                });
              } else {
                aboveField = document.createElement('input');
                aboveField.type = 'number';
                aboveField.value = cond.above != null ? cond.above : '';
                Object.assign(aboveField.style, {
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                  border: '1px solid var(--divider-color)',
                  color: 'var(--primary-text-color, inherit)',
                  width: '100%',
                  boxSizing: 'border-box'
                });
                aboveField.addEventListener('input', () => {
                  const v = aboveField.value;
                  if (v === '' || isNaN(Number(v))) delete cond.above;
                  else cond.above = Number(v);
                  updateConfig();
                });
              }
              addField('Above', aboveField);
              // Below threshold – use ha-textfield when available
              let belowField;
              if (customElements.get('ha-textfield')) {
                belowField = document.createElement('ha-textfield');
                belowField.setAttribute('type', 'number');
                belowField.value = cond.below != null ? cond.below : '';
                belowField.addEventListener('input', (ev) => {
                  ev.stopPropagation();
                  const v = belowField.value;
                  if (v === '' || isNaN(Number(v))) delete cond.below;
                  else cond.below = Number(v);
                  updateConfig();
                });
              } else {
                belowField = document.createElement('input');
                belowField.type = 'number';
                belowField.value = cond.below != null ? cond.below : '';
                Object.assign(belowField.style, {
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                  border: '1px solid var(--divider-color)',
                  color: 'var(--primary-text-color, inherit)',
                  width: '100%',
                  boxSizing: 'border-box'
                });
                belowField.addEventListener('input', () => {
                  const v = belowField.value;
                  if (v === '' || isNaN(Number(v))) delete cond.below;
                  else cond.below = Number(v);
                  updateConfig();
                });
              }
              addField('Below', belowField);
            } else if (cond.condition === 'screen') {
              // Predefined options for screen sizes
              const screenSel = document.createElement('select');
              const presets = [
                { label:'Custom', value:'' },
                { label:'Mobile (max-width: 599px)', value:'(max-width: 599px)' },
                { label:'Tablet (600px - 991px)', value:'(min-width: 600px) and (max-width: 991px)' },
                { label:'Desktop (min-width: 992px)', value:'(min-width: 992px)' }
              ];
              presets.forEach(p => {
                const o = document.createElement('option');
                o.value = p.value;
                o.textContent = p.label;
                screenSel.appendChild(o);
              });
              screenSel.value = presets.find(p => p.value === (cond.media_query || ''))?.value ?? '';
              screenSel.addEventListener('change', () => {
                cond.media_query = screenSel.value;
                updateConfig();
              });
              addField('Screen size', screenSel);
              // If custom selected, show text input for custom media query
              if (screenSel.value === '') {
                const customInp = document.createElement('input');
                customInp.placeholder = 'e.g. (min-width: 1280px)';
                customInp.value = cond.media_query || '';
                customInp.addEventListener('input', () => {
                  cond.media_query = customInp.value;
                  updateConfig();
                });
                addField('Custom query', customInp);
              }
            } else if (cond.condition === 'user') {
              let userPicker;
              if (customElements.get('ha-user-picker')) {
                userPicker = document.createElement('ha-user-picker');
                userPicker.hass = this.hass;
                userPicker.value = Array.isArray(cond.users) ? cond.users : [];
                userPicker.addEventListener('value-changed', (ev) => {
                  cond.users = Array.isArray(ev.detail.value) ? ev.detail.value : [ev.detail.value];
                  updateConfig();
                });
              } else {
                userPicker = document.createElement('input');
                userPicker.value = Array.isArray(cond.users) ? cond.users.join(',') : '';
                userPicker.addEventListener('input', () => {
                  cond.users = userPicker.value.split(',').map(s => s.trim()).filter(Boolean);
                  updateConfig();
                });
              }
              addField('Users', userPicker);
            }
          };
          renderFields();
          row.appendChild(fields);
          visHost.appendChild(row);
        });
        // Add condition button
        const addBtn = document.createElement('button');
        addBtn.className = 'btn';
        addBtn.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>';
        Object.assign(addBtn.style, { marginTop:'8px' });
        addBtn.addEventListener('click', () => {
          visList.push({ condition:'state', entity:'', state:'' });
          currentConfig.visibility = visList;
          render();
          updateConfig();
        });
        visHost.appendChild(addBtn);
      };
      // Initialize
      render();
    };

    /**
     * Enhanced visibility editor UI supporting nested AND/OR groups and a
     * selection menu when adding new conditions. This implementation renders
     * conditions recursively and stores expansion state in the shared
     * visExpansionStates WeakMap. It does not modify the existing
     * buildVisUIOld implementation but overrides usage by defining a new
     * buildVisUI constant. Calls throughout the card manager will use this
     * enhanced editor.
     */
    const buildVisUI = (cfg) => {
      if (!visHost) return;
      // Use the actual visibility array (do not clone) so updates persist.
      let visList = Array.isArray(cfg?.visibility) ? cfg.visibility : [];
      // Cache for asynchronous user list fetches.  We only fetch once per
      // buildVisUI invocation to avoid redundant requests.
      let __cachedUserList = null;
      const fetchUsers = async () => {
        // Return cached list if already fetched
        if (__cachedUserList) return __cachedUserList;
        try {
          // Attempt to use WebSocket API to list users (requires admin privileges)
          if (this.hass && typeof this.hass.callWS === 'function') {
            try {
              const resp = await this.hass.callWS({ type: 'config/auth/list' });
              if (Array.isArray(resp)) {
                __cachedUserList = resp;
                return resp;
              }
            } catch {}
          }
          // Fallback to REST API (may require auth)
          if (this.hass && typeof this.hass.callApi === 'function') {
            try {
              const resp = await this.hass.callApi('get', 'users');
              if (Array.isArray(resp)) {
                __cachedUserList = resp;
                return resp;
              }
            } catch {}
          }
          // Attempt to extract users from hass object when API is unavailable.
          const fallbackLists = [];
          // Some HA versions expose authorized users or user registry on hass
          // Try various common properties to discover user info
          if (this.hass && this.hass.users && Array.isArray(this.hass.users)) {
            fallbackLists.push(...this.hass.users);
          }
          if (this.hass && this.hass.userData && Array.isArray(this.hass.userData.users)) {
            fallbackLists.push(...this.hass.userData.users);
          }
          if (this.hass && this.hass.authorizedUsers && Array.isArray(this.hass.authorizedUsers)) {
            fallbackLists.push(...this.hass.authorizedUsers);
          }
          // Remove duplicates based on id
          if (fallbackLists.length) {
            const map = new Map();
            fallbackLists.forEach((u) => {
              const uid = u.id || u.user_id || u.uid || u.name || '';
              if (!map.has(uid)) map.set(uid, u);
            });
            const arr = Array.from(map.values());
            __cachedUserList = arr;
            return arr;
          }
        } catch {}
        // If nothing is found, return empty array
        __cachedUserList = [];
        return [];
      };

      const updateConfig = () => {
        // Clean up any null/undefined conditions
        visList = visList.filter((c) => c && typeof c === 'object' && c.condition);
        currentConfig.visibility = visList;
        try { yamlEditorApi?.setValue(currentConfig); } catch {}
        try { visualEditor?.setConfig?.(currentConfig); } catch {}
        mountPreview(currentConfig);
      };
      const render = () => {
        visHost.innerHTML = '';
        // Instruction message
        const instr = document.createElement('div');
        instr.style.opacity = '.75';
        instr.style.fontSize = '.85rem';
        instr.style.marginBottom = '12px';
        instr.textContent = 'The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.';
        visHost.appendChild(instr);
        // Recursive render for lists
        const renderList = (list, container) => {
          list.forEach((cond, idx) => {
            renderCondition(cond, list, idx, container);
          });
          // Add button for this list
          const addWrap = document.createElement('div');
          addWrap.style.marginTop = '8px';
          const btn = document.createElement('button');
          btn.className = 'btn';
          btn.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>';
          // Apply pill-like styling similar to the official editor
          Object.assign(btn.style, {
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            border: 'none',
            borderRadius: '20px',
            background: 'var(--primary-color)',
            color: 'var(--text-primary-color, #fff)',
            cursor: 'pointer',
            fontWeight: '500',
          });
          btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            // Toggle menu
            const existing = addWrap.querySelector('.add-menu');
            if (existing) {
              existing.remove();
              return;
            }
            const menu = document.createElement('div');
            menu.className = 'add-menu';
            Object.assign(menu.style, {
              position: 'relative',
              marginTop: '4px',
              border: '1px solid var(--divider-color)',
              borderRadius: '8px',
              background: 'var(--card-background-color, var(--secondary-background-color))',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            });
            const options = [
              { type: 'numeric_state', label: 'Entity numeric state', icon: 'mdi:numeric' },
              { type: 'state', label: 'Entity state', icon: 'mdi:state-machine' },
              { type: 'screen', label: 'Screen', icon: 'mdi:monitor' },
              { type: 'user', label: 'User', icon: 'mdi:account' },
              { type: 'and', label: 'And', icon: 'mdi:logic-and' },
              { type: 'or', label: 'Or', icon: 'mdi:logic-or' }
            ];
            options.forEach((opt) => {
              const item = document.createElement('div');
              item.style.display = 'flex';
              item.style.alignItems = 'center';
              item.style.gap = '8px';
              item.style.padding = '6px 12px';
              item.style.cursor = 'pointer';
              item.addEventListener('mouseenter', () => item.style.background = 'var(--hover-color, #444)');
              item.addEventListener('mouseleave', () => item.style.background = '');
              item.addEventListener('click', () => {
                menu.remove();
                let newCond;
                if (opt.type === 'and' || opt.type === 'or') {
                  newCond = { condition: opt.type, conditions: [] };
                } else if (opt.type === 'state') {
                  newCond = { condition: 'state', entity: '', state: '' };
                } else if (opt.type === 'numeric_state') {
                  newCond = { condition: 'numeric_state', entity: '' };
                } else if (opt.type === 'screen') {
                  newCond = { condition: 'screen', media_query: '' };
                } else if (opt.type === 'user') {
                  newCond = { condition: 'user', users: [] };
                }
                list.push(newCond);
                visExpansionStates.set(newCond, true);
                updateConfig();
                render();
              });
              const ic = document.createElement('ha-icon');
              ic.setAttribute('icon', opt.icon);
              item.appendChild(ic);
              const la = document.createElement('span');
              la.textContent = opt.label;
              item.appendChild(la);
              menu.appendChild(item);
            });
            addWrap.appendChild(menu);
          });
          addWrap.appendChild(btn);
          container.appendChild(addWrap);
        };
        const renderCondition = (cond, parentList, idx, container) => {
          const type = cond.condition || 'state';
          let expanded = visExpansionStates.get(cond);
          if (expanded === undefined) expanded = visList.length === 1;
          const row = document.createElement('div');
          // Style the condition container to more closely resemble Home Assistant’s editor cards.
          Object.assign(row.style, {
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid var(--divider-color)',
            borderLeft: '3px solid var(--primary-color)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '20px',
            background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
            boxShadow: 'var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))'
          });
          // Header
          const header = document.createElement('div');
          header.style.display = 'flex';
          header.style.alignItems = 'center';
          header.style.justifyContent = 'space-between';
          header.style.marginBottom = '8px';
          // Subtle bottom border to separate header from fields
          header.style.borderBottom = '1px solid var(--divider-color)';
          header.style.paddingBottom = '4px';
          // Ensure the header sits above any overlay elements (e.g. selects)
          header.style.position = 'relative';
          const left = document.createElement('div');
          left.style.display = 'flex';
          left.style.alignItems = 'center';
          left.style.gap = '6px';
          const toggle = document.createElement('button');
          toggle.innerHTML = `<ha-icon icon="${expanded ? 'mdi:chevron-down' : 'mdi:chevron-right'}"></ha-icon>`;
          Object.assign(toggle.style, {
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            padding: '4px',
            display: 'inline-flex',
            alignItems: 'center'
          });
          toggle.addEventListener('click', (ev) => {
            ev.stopPropagation();
            visExpansionStates.set(cond, !expanded);
            render();
          });
          left.appendChild(toggle);
          // Icon
          const ic = document.createElement('ha-icon');
          let iconName = 'mdi:filter';
          if (type === 'numeric_state') iconName = 'mdi:numeric';
          else if (type === 'screen') iconName = 'mdi:monitor';
          else if (type === 'user') iconName = 'mdi:account';
          else if (type === 'state') iconName = 'mdi:state-machine';
          else if (type === 'and') iconName = 'mdi:logic-and';
          else if (type === 'or') iconName = 'mdi:logic-or';
          ic.setAttribute('icon', iconName);
          left.appendChild(ic);
          const lab = document.createElement('span');
          lab.style.fontWeight = '600';
          lab.style.fontSize = '0.95rem';
          lab.style.textTransform = 'capitalize';
          lab.textContent = (type === 'numeric_state')
            ? 'Entity numeric state'
            : (type === 'state'
                ? 'Entity state'
                : (type === 'screen'
                    ? 'Screen'
                    : (type === 'user'
                        ? 'User'
                        : (type === 'and' ? 'And' : 'Or'))));
          left.appendChild(lab);
          header.appendChild(left);
          // Remove button
          const rm = document.createElement('button');
          rm.setAttribute('title', 'Remove condition');
          rm.innerHTML = '<ha-icon icon="mdi:trash-can-outline"></ha-icon>';
          Object.assign(rm.style, {
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            padding: '4px',
            display: 'inline-flex',
            alignItems: 'center'
          });
          // Ensure the remove button stays clickable above other elements
          rm.style.position = 'relative';
          rm.style.zIndex = '1000';
          rm.addEventListener('click', (ev) => {
            // Prevent default and stop propagation so the click does not get swallowed
            ev.preventDefault();
            ev.stopPropagation();
            // Locate this condition in its parent list and remove it. Using
            // indexOf ensures we remove the correct object even if indices
            // shift due to other operations.
            const index = parentList.indexOf(cond);
            if (index > -1) {
              parentList.splice(index, 1);
            }
            updateConfig();
            render();
          });
          header.appendChild(rm);
          row.appendChild(header);
          // Leaf
          if (type !== 'and' && type !== 'or') {
            if (expanded) {
              // Omit the type selector row for leaf conditions. Users choose the
              // condition type when adding a condition. To change types, remove
              // the condition and add a new one.  This streamlines the UI to
              // more closely match the native Home Assistant appearance.
              // Fields container
              const fields = document.createElement('div');
              // Arrange input fields in a single column to more closely match the
              // native Home Assistant editor.  Each field will stack below the
              // previous one.  Use a consistent vertical gap for breathing room.
              Object.assign(fields.style, {
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                alignItems: 'stretch'
              });
              const addField = (lbl, inputEl) => {
                const wrap = document.createElement('div');
                wrap.style.display = 'flex';
                wrap.style.flexDirection = 'column';
                wrap.style.gap = '4px';
                const l = document.createElement('span');
                l.textContent = lbl;
                l.style.fontSize = '.75rem';
                wrap.appendChild(l);
                wrap.appendChild(inputEl);
                fields.appendChild(wrap);
                // Apply dark styling to plain input/select elements for a cohesive look
                const tn = (inputEl.tagName || '').toLowerCase();
                if (tn === 'input' || tn === 'select') {
                  Object.assign(inputEl.style, {
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                    border: '1px solid var(--divider-color)',
                    color: 'var(--primary-text-color, inherit)',
                    width: '100%',
                    boxSizing: 'border-box'
                  });
                }
              };
              if (cond.condition === 'state') {
                // Always attempt to use ha-entity-picker for a consistent user experience.
                let ent = document.createElement('ha-entity-picker');
                // Provide initial value and hass as soon as possible.
                ent.value = cond.entity || '';
                // In some cases the custom element may not yet be defined. When it
                // upgrades, assign hass and register event listeners. Until then,
                // these assignments are harmless no-ops.
                ent.hass = this.hass;
                ent.setAttribute('label', 'Select entity');
                // Listen for changes when the element is ready.  The event
                // listener will still fire once upgraded.
                ent.addEventListener('value-changed', (ev) => {
                  // Update the selected entity.  Do not stop propagation here
                  // so that other click handlers (like remove) continue to work
                  // properly.  This mirrors the behaviour of numeric state.
                  cond.entity = ev.detail.value || '';
                  updateConfig();
                });
                // If the element is not yet defined, re-render once it is.
                if (!customElements.get('ha-entity-picker')) {
                  customElements.whenDefined('ha-entity-picker').then(() => {
                    // Re-render this condition to upgrade from a plain element to
                    // the actual picker UI. Preserve expansion state.
                    render();
                  }).catch(() => {});
                }
                addField('Entity', ent);
                // Equals / Not equals selector – use ha-select if available for native styling
                let op;
                if (customElements.get('ha-select')) {
                  op = document.createElement('ha-select');
                  const optEq = document.createElement('mwc-list-item');
                  optEq.setAttribute('value', 'state');
                  optEq.textContent = 'State is equal to';
                  const optNeq = document.createElement('mwc-list-item');
                  optNeq.setAttribute('value', 'state_not');
                  optNeq.textContent = 'State is not equal to';
                  op.appendChild(optEq);
                  op.appendChild(optNeq);
                  op.value = cond.state_not != null ? 'state_not' : 'state';
                  op.addEventListener('selected', (ev) => {
                    ev.stopPropagation();
                    const v = cond.state_not != null ? cond.state_not : cond.state;
                    if (op.value === 'state_not') {
                      cond.state_not = v;
                      delete cond.state;
                    } else {
                      cond.state = v;
                      delete cond.state_not;
                    }
                    updateConfig();
                  });
                } else {
                  op = document.createElement('select');
                  op.innerHTML = '<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>';
                  op.value = cond.state_not != null ? 'state_not' : 'state';
                  op.addEventListener('change', (ev) => {
                    ev.stopPropagation();
                    const v = cond.state_not != null ? cond.state_not : cond.state;
                    if (op.value === 'state_not') {
                      cond.state_not = v;
                      delete cond.state;
                    } else {
                      cond.state = v;
                      delete cond.state_not;
                    }
                    updateConfig();
                  });
                  // Apply HA-like styling to the fallback select
                  Object.assign(op.style, {
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                    border: '1px solid var(--divider-color)',
                    color: 'var(--primary-text-color, inherit)',
                    width: '100%',
                    boxSizing: 'border-box'
                  });
                }
                addField('Match type', op);
                // State value input – use ha-textfield when available
                let st;
                if (customElements.get('ha-textfield')) {
                st = document.createElement('ha-textfield');
                  st.value = (cond.state_not != null ? cond.state_not : cond.state) || '';
                  st.setAttribute('label', '');
                st.addEventListener('input', (ev) => {
                    // Mirror numeric state behaviour: update on each keystroke
                    // and stop propagation so parent controls remain responsive.
                    // Ensure only one of state/state_not exists.
                    ev.stopPropagation();
                    const key = op.value;
                    cond[key] = st.value;
                    const other = key === 'state' ? 'state_not' : 'state';
                    delete cond[other];
                    updateConfig();
                  });
                } else {
                st = document.createElement('input');
                  st.value = (cond.state_not != null ? cond.state_not : cond.state) || '';
                  // Apply HA-like styling to the fallback input
                  Object.assign(st.style, {
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                    border: '1px solid var(--divider-color)',
                    color: 'var(--primary-text-color, inherit)',
                    width: '100%',
                    boxSizing: 'border-box'
                  });
                  st.addEventListener('input', (ev) => {
                    // Mirror numeric state behaviour: update immediately on
                    // input and stop propagation so the event does not bubble.
                    // Ensure only one of state/state_not exists at a time.
                    ev.stopPropagation();
                    const key = op.value;
                    cond[key] = st.value;
                    const other = key === 'state' ? 'state_not' : 'state';
                    delete cond[other];
                    updateConfig();
                  });
                }
                addField('State', st);
              } else if (cond.condition === 'numeric_state') {
                // Always attempt to use ha-entity-picker for numeric state conditions.
                let ent = document.createElement('ha-entity-picker');
                // Provide initial value and hass property.
                ent.value = cond.entity || '';
                ent.hass = this.hass;
                ent.setAttribute('label', 'Select entity');
                // Show clear icon so the user can remove the selected entity
                ent.removeAttribute('hide-clear-icon');
                ent.addEventListener('value-changed', (ev) => {
                  cond.entity = ev.detail.value || '';
                  updateConfig();
                });
                // If the custom element is not yet defined, re-render when it upgrades.
                if (!customElements.get('ha-entity-picker')) {
                  customElements.whenDefined('ha-entity-picker').then(() => {
                    render();
                  }).catch(() => {});
                }
                addField('Entity', ent);
                // Above threshold – use ha-textfield when available
                let above;
                if (customElements.get('ha-textfield')) {
                  above = document.createElement('ha-textfield');
                  above.setAttribute('type', 'number');
                  above.value = cond.above != null ? cond.above : '';
                above.addEventListener('input', (ev) => {
                    ev.stopPropagation();
                    const v = above.value;
                    if (v === '' || isNaN(Number(v))) delete cond.above;
                    else cond.above = Number(v);
                    updateConfig();
                  });
                } else {
                  above = document.createElement('input');
                  above.type = 'number';
                  above.value = cond.above != null ? cond.above : '';
                  // Apply HA-like styling to the fallback numeric input
                  Object.assign(above.style, {
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                    border: '1px solid var(--divider-color)',
                    color: 'var(--primary-text-color, inherit)',
                    width: '100%',
                    boxSizing: 'border-box'
                  });
                  above.addEventListener('input', () => {
                    const v = above.value;
                    if (v === '' || isNaN(Number(v))) delete cond.above;
                    else cond.above = Number(v);
                    updateConfig();
                  });
                }
                addField('Above', above);
                // Below threshold – use ha-textfield when available
                let below;
                if (customElements.get('ha-textfield')) {
                  below = document.createElement('ha-textfield');
                  below.setAttribute('type', 'number');
                  below.value = cond.below != null ? cond.below : '';
                below.addEventListener('input', (ev) => {
                    ev.stopPropagation();
                    const v = below.value;
                    if (v === '' || isNaN(Number(v))) delete cond.below;
                    else cond.below = Number(v);
                    updateConfig();
                  });
                } else {
                  below = document.createElement('input');
                  below.type = 'number';
                  below.value = cond.below != null ? cond.below : '';
                  // Apply HA-like styling to the fallback numeric input
                  Object.assign(below.style, {
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))',
                    border: '1px solid var(--divider-color)',
                    color: 'var(--primary-text-color, inherit)',
                    width: '100%',
                    boxSizing: 'border-box'
                  });
                  below.addEventListener('input', () => {
                    const v = below.value;
                    if (v === '' || isNaN(Number(v))) delete cond.below;
                    else cond.below = Number(v);
                    updateConfig();
                  });
                }
                addField('Below', below);
              } else if (cond.condition === 'screen') {
                const opts = [
                  { label: 'Mobile', query: '(max-width: 599px)' },
                  { label: 'Tablet (min: 768px)', query: '(min-width: 768px)' },
                  { label: 'Desktop (min: 1024px)', query: '(min-width: 1024px)' },
                  { label: 'Wide (min: 1280px)', query: '(min-width: 1280px)' }
                ];
                if (!Array.isArray(cond.media_query_list)) cond.media_query_list = [];
                const box = document.createElement('div');
                box.style.display = 'flex';
                box.style.flexDirection = 'column';
                box.style.gap = '4px';
                opts.forEach((opt) => {
                  const rowcb = document.createElement('label');
                  rowcb.style.display = 'flex';
                  rowcb.style.alignItems = 'center';
                  rowcb.style.gap = '6px';
                  const cb = document.createElement('input');
                  cb.type = 'checkbox';
                  cb.checked = cond.media_query_list.includes(opt.query);
                  cb.addEventListener('change', () => {
                    if (cb.checked) {
                      cond.media_query_list.push(opt.query);
                    } else {
                      cond.media_query_list = cond.media_query_list.filter((q) => q !== opt.query);
                    }
                    cond.media_query = cond.media_query_list.join(',');
                    updateConfig();
                  });
                  const sp = document.createElement('span');
                  sp.textContent = opt.label;
                  rowcb.appendChild(cb);
                  rowcb.appendChild(sp);
                  box.appendChild(rowcb);
                });
                addField('Screen sizes', box);
              } else if (cond.condition === 'user') {
                let up;
                if (customElements.get('ha-user-picker')) {
                  // Use the built‑in user picker when available
                  up = document.createElement('ha-user-picker');
                  up.hass = this.hass;
                  up.setAttribute('label', 'Select user');
                  up.value = Array.isArray(cond.users) ? cond.users : [];
                  up.addEventListener('value-changed', (ev) => {
                    const val = ev.detail.value;
                    cond.users = Array.isArray(val) ? val : [val];
                    updateConfig();
                  });
                } else {
                  // Fallback: create a container that will be filled asynchronously
                  up = document.createElement('div');
                  up.style.display = 'flex';
                  up.style.flexDirection = 'column';
                  up.style.gap = '4px';
                    // Show a loading indicator while fetching
                  const loading = document.createElement('span');
                  loading.style.opacity = '0.7';
                  loading.style.fontSize = '.85rem';
                  loading.textContent = 'Loading users…';
                  up.appendChild(loading);
                  // Preserve current selection
                  const selUsers = Array.isArray(cond.users) ? cond.users : [];
                  fetchUsers().then((uList) => {
                    up.innerHTML = '';
                    if (Array.isArray(uList) && uList.length) {
                      // Build checkbox list for each user
                      uList.forEach((u) => {
                        const uid = u.id || u.user_id || u.uid || u.name || '';
                        const uname = u.name || uid;
                        const lbl = document.createElement('label');
                        lbl.style.display = 'flex';
                        lbl.style.alignItems = 'center';
                        lbl.style.gap = '6px';
                        lbl.style.padding = '4px 0';
                        const cb = document.createElement('input');
                        cb.type = 'checkbox';
                        cb.checked = selUsers.includes(uid) || selUsers.includes(uname);
                        cb.addEventListener('change', () => {
                          let arr = Array.isArray(cond.users) ? cond.users.slice() : [];
                          if (cb.checked) {
                            if (!arr.includes(uid)) arr.push(uid);
                          } else {
                            arr = arr.filter((x) => x !== uid && x !== uname);
                          }
                          cond.users = arr;
                          updateConfig();
                        });
                        const sp = document.createElement('span');
                        sp.textContent = uname;
                        lbl.appendChild(cb);
                        lbl.appendChild(sp);
                        up.appendChild(lbl);
                      });
                    } else {
                      // Still fallback to simple input if no users found via API
                      const inp = document.createElement('input');
                      inp.value = Array.isArray(cond.users) ? cond.users.join(',') : '';
                      // Style the manual users input for consistency
                      Object.assign(inp.style, {
                        padding: '6px 10px',
                        borderRadius: '6px',
                        border: '1px solid var(--divider-color)',
                        background: 'var(--card-background-color, var(--secondary-background-color))',
                        color: 'var(--primary-text-color, inherit)'
                      });
                      const commit = () => {
                        cond.users = inp.value.split(',').map((s) => s.trim()).filter(Boolean);
                        updateConfig();
                      };
                      inp.addEventListener('change', commit);
                      inp.addEventListener('blur', commit);
                      up.appendChild(inp);
                    }
                  });
                }
                addField('Users', up);
              }
              row.appendChild(fields);
            }
          } else {
            // Group
            if (expanded) {
              if (!Array.isArray(cond.conditions)) cond.conditions = [];
              const childContainer = document.createElement('div');
              childContainer.style.marginLeft = '16px';
              renderList(cond.conditions, childContainer);
              row.appendChild(childContainer);
            }
          }
          container.appendChild(row);
        };
        // Render top level
        renderList(visList, visHost);
      };
      render();
    };

    const mountPreview = (cfg) => {
      if ((cfg?.type || '') === 'custom_card') {
        __lastPreviewCfgJSON = JSON.stringify(cfg || {});
        cardHost.innerHTML = '<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>';
        previewSpin.hidden = true;
        return;
      }
      const cfgJSON = JSON.stringify(cfg || {});
      if (cfgJSON === __lastPreviewCfgJSON) return; // same config, skip
      __lastPreviewCfgJSON = cfgJSON;
      if (__previewTimer) clearTimeout(__previewTimer);
      __previewTimer = setTimeout(async () => {
        const seq = ++pickSeq;
        previewSpin.hidden = false;
        cardHost.innerHTML = '';
        await raf();
        try {
          const helpers = (await this._helpersPromise) || await window.loadCardHelpers();
          if (seq !== pickSeq) return;
          const temp = helpers.createCardElement(cfg); temp.hass = this.hass;
          if (seq !== pickSeq) return;
          cardHost.appendChild(temp);
        } catch {}
        finally { if (seq === pickSeq) previewSpin.hidden = true; }
      }, 150); // 150–250ms is a sweet spot
    };

      const mountVisualEditor = async (cfg) => {
        const seq = ++pickSeq;
        editorSpin.hidden = false;
        editorHost.innerHTML = '';
        await idle();

        const wantType = cfg.type || currentType;

        editor = await this._getEditorElementForType(wantType, cfg);


        // 🚫 Visual editor not supported for the placeholder entry
        if (wantType === 'custom_card') {
          // Show a friendly note and switch to YAML
          const p = document.createElement('div');
          p.style.opacity = '.7';
          p.style.fontSize = '.9rem';
          p.textContent = 'Custom card placeholder: use the YAML editor to paste the card type and options.';
          editorHost.appendChild(p);

          visualEditor = null;
          if (__activeTab !== 'yaml') showTab('yaml');
          enableCommit(true);
          editorSpin.hidden = true;
          return false;
        }

      if (!editor) {
        // No UI editor → show YAML (unless user explicitly selected Visual)
        const p = document.createElement('div');
        p.style.opacity = '.7'; p.style.fontSize = '.9rem';
        p.textContent = 'This card does not support a visual editor. Please use the YAML tab to configure it.';
        if (seq === pickSeq) {
          editorHost.appendChild(p);
          editorSpin.hidden = true;
        }
        visualEditor = null;
        enableCommit(true);
        if (__activeTab !== 'visual') showTab('yaml');
        return false;
}
    
      try {
        editor.hass = this.hass;
        if (!editor.isConnected) editorHost.appendChild(editor);

        // small yield before setConfig to help late-attaching internals
        await Promise.resolve();
        try { editor.setConfig(cfg); } catch (e) { /* YAML still works */ }

        // Try official getStubConfig once (may load modules) to improve defaults
        try {
          const helpers = (await this._helpersPromise) || await window.loadCardHelpers();
          const CardClass = helpers.getCardElementClass ? await helpers.getCardElementClass(cfg.type || currentType) : null;
          if (CardClass?.getStubConfig) {
            const all = Object.keys(this.hass?.states || {});
            const byDomain = (d)=>all.filter((e)=>e.startsWith(d+'.'));
            const better = await CardClass.getStubConfig(this.hass, all, byDomain);
            if (better) cfg = this._shapeBySchema(cfg.type || currentType, { ...better });
          }
        } catch {}

        // small yield before setConfig to help late-attaching internals
        await Promise.resolve();
        try { editor.setConfig(cfg); } catch (e) { /* YAML still works */ }
    
        // Remove old listeners if any
        if (visualEditor && this.__onEditorChange) {
          visualEditor.removeEventListener('config-changed', this.__onEditorChange);
          visualEditor.removeEventListener('value-changed', this.__onEditorChange);
        }
    
        const onChange = async (e) => {
          const next = e.detail?.config ?? e.detail?.value; // some editors fire value-changed
          if (!next) return;
          const nextType = next.type || currentType;
          currentType = nextType;
          currentConfig = this._shapeBySchema(nextType, next);
    
          setError('');
          enableCommit(true);
          buildQuickFill(currentType, currentConfig);
          mountPreview(currentConfig);
          yamlEditorApi?.setValue(currentConfig);
        };
    
        this.__onEditorChange = onChange;
        editor.addEventListener('config-changed', onChange);
        editor.addEventListener('value-changed', onChange);
    
        visualEditor = editor;
    
        // If a UI exists and the user hasn’t explicitly chosen YAML → show Visual
        if (__activeTab !== 'yaml') showTab('visual');
    
        enableCommit(true);
        return true;
      } finally {
        if (seq === pickSeq) editorSpin.hidden = true;
      }
    };
    

    const mountYaml = async (cfg) => {
      yamlEditorApi = await this._mountYamlEditor(
        yamlHost,
        cfg,
        async (parsed) => {
          try {
            const nextType = parsed?.type || currentType;
            const shaped = this._shapeBySchema(nextType, parsed || {});
            const typeChanged = nextType !== currentType;
    
            currentType = nextType;
            currentConfig = shaped;
    
            yamlErr.hidden = true; yamlErr.textContent = '';
            enableCommit(true);
    
            if (typeChanged) {
              buildQuickFill(currentType, currentConfig);
              // Only update Visual if it’s already mounted
              if (visualEditor) {
                try { visualEditor.setConfig?.(currentConfig); } catch {}
                if (__activeTab !== 'yaml') showTab('visual');
              }
              // When the card type changes via YAML, rebuild the visibility UI
              try { buildVisUI(currentConfig); } catch {}
            } else {
              try { visualEditor?.setConfig?.(currentConfig); } catch {}
              mountPreview(currentConfig);
              // Update the visibility UI when YAML modifies non-type properties
              try { buildVisUI(currentConfig); } catch {}
            }

          } catch (e) {
            yamlErr.hidden = false;
            yamlErr.textContent = `Invalid config: ${String(e?.message || e)}`;
            enableCommit(false);
          }
        },
        (e) => {
          yamlErr.hidden = false;
          yamlErr.textContent = `Invalid YAML: ${String(e?.message || e)}`;
          enableCommit(false);
        }
      );
    };
    

    const getStub = async (type) => {
      if (this.__stubCache.has(type)) return { ...this.__stubCache.get(type) };
      // Fast local stub first (no heavy module loads)
      let cfg = await this._getStubConfigForType(type);
      this.__stubCache.set(type, { ...cfg });
      return { ...cfg };
    };

    const selectType = async (type) => {
      yamlErr.hidden = true; yamlErr.textContent = '';
      setError('');
      currentType = type;
      // Update the selected-card headline and favorite star when a new card is chosen
      try {
        if (typeof updateHeader === 'function') updateHeader(type);
      } catch {
        // ignore if updateHeader is undefined or throws
      }
    
      const cfg = (mode==='edit' && initialCfg && initialCfg.type===type)
        ? { ...initialCfg }
        : await getStub(type);
    
      currentConfig = this._shapeBySchema(type, cfg);

      // Reset any previously mounted visual editor so the correct one loads for this card
      visualEditor = null;

      buildQuickFill(type, currentConfig);
      await mountYaml(currentConfig);
      await raf();
      mountPreview(currentConfig); // debounced version

      // Rebuild the visibility UI for the selected type/config. This ensures the
      // visibility editor reflects any conditions stored in the config when a
      // different card type is selected.
      try { buildVisUI(currentConfig); } catch {}

      // Do not reuse an old editor; mount the visual editor by default when adding a new card.
      // Attempt to mount the visual editor for the selected type. If the card does
      // not support a visual editor, mountVisualEditor will handle showing a
      // message and fallback to YAML internally.
      try {
        // Try mounting visual editor for the current configuration. If the
        // returned value is false, the card lacks a visual editor.
        const visReady = await mountVisualEditor(currentConfig);
        showTab(visReady ? 'visual' : 'yaml');
      } catch {
        // On error, fall back to YAML
        showTab('yaml');
      }
      enableCommit(true);

    };
    const commit = async () => {
      if (!currentConfig) return;
      const finalCfg = this._shapeBySchema(currentType, currentConfig);
      if (mode === 'edit' && typeof onCommit === 'function') {
        await onCommit(finalCfg);
      } else {
        await this._addPickedCardToLayout(finalCfg);
        this._pushRecent((finalCfg||{}).type);
      }
      close();
    };

    cancelTop.addEventListener('click', close);
    cancelBot.addEventListener('click', close);
    addTop.addEventListener('click', commit);
    addBottom.addEventListener('click', commit);
    modal.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); if (e.key === 'Enter' && !addTop.disabled) commit(); });

    let __searchTimer = null;
    search.addEventListener('input', () => {
      if (__searchTimer) clearTimeout(__searchTimer);
      __searchTimer = setTimeout(renderLeft, 120);
    });


    renderLeft();
    // --- Ensure something is selected so YAML/preview mount immediately ---
    const pickDefaultType = () => {
      // Prefer recent if present; otherwise fall back to 'entities'
      const r = this._getRecent?.() || [];
      const firstRecent = r.find(Boolean);
      return firstRecent || 'entities';
    };

    await selectType(pickDefaultType());
    enableCommit(true);

    // default selection
    if (mode === 'edit' && initialCfg) {
      await selectType(initialCfg.type || 'entities');
      enableCommit(true);
    }
  }

  /* ------------------------- Stubs / helpers (cards) ------------------------- */
async _getStubConfigForType(type) {
    const helpers = (await this._helpersPromise) || await window.loadCardHelpers();
    let CardClass = null;

    // Provide a blank stub when the user selects the "Custom Card" entry.
    // A blank type lets the YAML editor drive the configuration entirely.
    if (type === 'custom_card') return null;

    try { if (helpers.getCardElementClass) CardClass = await helpers.getCardElementClass(type); } catch {}
    const all = Object.keys(this.hass?.states || {});
    const byDomain = (d)=>all.filter((e)=>e.startsWith(d+'.'));
    let base = { type };
    if (CardClass?.getStubConfig) {
      try {
        const stub = await CardClass.getStubConfig(this.hass, all, byDomain);
        if (type !== 'entity') {
          // keep old behavior for all non-entity cards
          return stub;
        }
        // For 'entity': merge the stub but DO NOT return yet — let defaults fill .entity if missing
        if (stub && typeof stub === 'object') base = { ...base, ...stub };
      } catch {}
    }
    const first = all[0];
    const firstSensor = byDomain('sensor')[0] || first;

    if (['entity','sensor','button','gauge','tile','light','thermostat','media-control','alarm-panel','picture-entity','weather-forecast','map'].includes(type)) {
      // Provide sensible defaults for cards that require an `entity` field.
      const defaultEntity = ({
        'sensor': firstSensor,
        'gauge':  (byDomain('sensor').find(this._isNumericEntity.bind(this)) || firstSensor),
        'media-control': byDomain('media_player')[0] || first,
        'light': byDomain('light')[0] || first,
        'thermostat': byDomain('climate')[0] || first,
        'alarm-panel': byDomain('alarm_control_panel')[0] || first,
        'weather-forecast': byDomain('weather')[0] || first,
        'map': byDomain('device_tracker')[0] || byDomain('person')[0] || first,
      })[type] || firstSensor || first;
      if (['entity','sensor','button','gauge','tile','light','thermostat','media-control','alarm-panel','picture-entity'].includes(type)) {
        base.entity = defaultEntity;
      } else if (type === 'weather-forecast') {
        base.entity = defaultEntity;
        base.show_current = true;
        base.show_forecast = true;
        base.forecast_type = 'daily';
      } else if (type === 'map') {
        base.entities = [defaultEntity].filter(Boolean);
        base.theme_mode = 'auto';
      }
    }
    if (['entities','glance','picture-glance','history-graph','statistics-graph'].includes(type)) {
      const pick = (domains) => (domains?.length ? all.filter(e => domains.includes(e.split('.')[0])) : all).slice(0,3);
      if (type === 'statistics-graph') base.entities = pick(['sensor','number','input_number']);
      else base.entities = pick();
    }
    if (type === 'markdown') {
      // Provide a minimal content so the card does not error
      base.content = 'Markdown card';
    }
    if (type === 'sensor') {
      base.graph = 'line';
    }
    if (type === 'button') {
      base.show_name = true;
      base.show_icon = true;
    }
    if (type === 'tile') {
      base.features_position = 'bottom';
      base.vertical = false;
    }
    if (type === 'picture-glance') {
      base.title = base.title || 'Glance';
      // Provide placeholder image if none available
      base.image = base.image || 'https://demo.home-assistant.io/stub_config/kitchen.png';
    }
    if (type === 'picture-entity') {
      base.image = base.image || 'https://demo.home-assistant.io/stub_config/bedroom.png';
    }
    if (type === 'iframe') {
      base.url = base.url || 'https://www.home-assistant.io';
      base.aspect_ratio = base.aspect_ratio || '50%';
    }
    if (type === 'history-graph') {
      // Entities already set; nothing extra
    }
    if (type === 'statistics-graph') {
      // Entities already set; nothing extra
    }
    if (type === 'alarm-panel') {
      base.states = base.states || ['arm_home','arm_away'];
    }
    if (type === 'area') {
      // pick first area from hass.areas if available; else use the first area name from states (area). This is a guess.
      try {
        const areas = (this.hass && this.hass.areas) ? Object.values(this.hass.areas) : [];
        if (areas.length) {
          base.area = areas[0].area_id || areas[0].name || areas[0].id;
        } else {
          // fallback: pick the domain of the first entity as area name
          base.area = first ? first.split('.')[0] : 'default_area';
        }
        // Add optional defaults similar to built-in card example
        base.display_type = 'picture';
        base.alert_classes = base.alert_classes || ['moisture','motion'];
        base.sensor_classes = base.sensor_classes || ['temperature','humidity'];
        base.features_position = 'bottom';
      } catch {}
    }
    // Note: area card and other complex cards are not given defaults here
    return base;
  }

  _getNextAvailablePosition() {
    const wraps = Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'));
    const occupied = new Set();
    const gs = this.gridSize;
    wraps.forEach((w) => {
      const x = (parseFloat(w.getAttribute('data-x')) || 0);
      const y = (parseFloat(w.getAttribute('data-y')) || 0);
      const width  = parseFloat(getComputedStyle(w).width)  || 100;
      const height = parseFloat(getComputedStyle(w).height) || 100;
      const xStart = Math.floor(x/gs), yStart = Math.floor(y/gs);
      const xEnd   = Math.floor((x+width)/gs), yEnd = Math.floor((y+height)/gs);
      for (let xi=xStart; xi<xEnd; xi++) for (let yi=yStart; yi<yEnd; yi++) occupied.add(`${xi}-${yi}`);
    });
    let xi=0, yi=0;
    while (occupied.has(`${xi}-${yi}`)) { xi+=6; if (xi>60) { xi=0; yi+=6; } }
    return { x: xi*gs, y: yi*gs };
  }

  async _addPickedCardToLayout(cardConfig) {
    this._hideEmptyPlaceholder();
    const cardEl = await this._createCard(cardConfig);
    const wrap = this._makeWrapper(cardEl);
    const next = this._getNextAvailablePosition();
    this._setCardPosition(wrap, next.x, next.y);
    wrap.style.width  = `${14*this.gridSize}px`;
    wrap.style.height = `${10*this.gridSize}px`;
    // Assign a z-index for the new card that is at least 6.  Without
    // clamping the first few cards could be placed behind the grid overlay.
    {
      const nextVal = this._highestZ() + 1;
      wrap.style.zIndex = String(Math.max(nextVal, 6));
    }
    this.cardContainer.appendChild(wrap);
    
  try { this._rebuildOnce(wrap.firstElementChild); } catch {}
    this._initCardInteract(wrap);
    this._resizeContainer();
    this._queueSave('add');
    this._toast('Card added to layout.');
    this._syncEmptyStateUI();

    // After inserting a new card, reevaluate visibility so any conditions
    // attached to the new card are applied immediately (if not in edit mode).
    try { this._applyVisibility_(); } catch {}
  }

  /* ------------------------------ Selection utils ------------------------------ */
  _toggleSelection(wrap, force=null) {
    const on = force==null ? !this._selection.has(wrap) : !!force;
    if (on) this._selection.add(wrap); else this._selection.delete(wrap);
    wrap.classList.toggle('selected', on);
  }
  _clearSelection() {
    for (const w of this._selection) w.classList.remove('selected');
    this._selection.clear();
  }

  /**
   * Copy the currently selected cards into a global clipboard. When invoked,
   * this will capture the configuration and layout of each selected card and
   * store it on the window object so that it may be pasted into the same
   * dashboard or a completely different drag-and-drop card instance. The
   * relative arrangement of cards is preserved based on the top‑leftmost
   * card in the selection.
   */
  _copySelection() {
    try {
      // Determine selected wrappers. If nothing is selected, bail early.
      const wrappers = this._selection ? Array.from(this._selection) : [];
      if (!wrappers.length) {
        this._toast?.('Nothing selected to copy.');
        return;
      }
      // Compute the minimum x/y across the selection to preserve relative offsets
      let minX = Infinity, minY = Infinity;
      const items = [];
      for (const w of wrappers) {
        // skip placeholders
        if (w.dataset.placeholder) continue;
        const x = parseFloat(w.getAttribute('data-x')) || 0;
        const y = parseFloat(w.getAttribute('data-y')) || 0;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
      }
      for (const w of wrappers) {
        if (w.dataset.placeholder) continue;
        const cfg = this._extractCardConfig(w.firstElementChild) || {};
        const x = parseFloat(w.getAttribute('data-x')) || 0;
        const y = parseFloat(w.getAttribute('data-y')) || 0;
        const width  = w.style.width  || `${w.getBoundingClientRect().width}px`;
        const height = w.style.height || `${w.getBoundingClientRect().height}px`;
        items.push({ cfg, dx: x - minX, dy: y - minY, width, height });
      }
      // Save to global clipboard. Use a namespaced key to avoid collisions.
      window.__DDC_CLIPBOARD__ = { items };
      this._toast?.(`Copied ${items.length} card${items.length === 1 ? '' : 's'}.`);
    } catch (err) {
      console.warn('[drag-and-drop-card] Copy failed', err);
      this._toast?.('Copy failed.');
    }
  }

  /**
   * Paste cards from the global clipboard into this drag‑and‑drop card. The
   * pasted cards will retain their relative arrangement and sizing, and will
   * be placed into the currently active tab. If no valid clipboard data is
   * present, the user will be notified. Cards are offset from the top‑left
   * corner by one grid unit and shifted repeatedly until no collision with
   * existing cards is detected.
   */
  async _pasteClipboard() {
    try {
      const clip = window.__DDC_CLIPBOARD__;
      if (!clip || !Array.isArray(clip.items) || !clip.items.length) {
        this._toast?.('Clipboard is empty.');
        return;
      }
      const items = clip.items;
      // Determine a collision‑free base position. We attempt to place the
      // group starting at one grid unit from the origin and slide further
      // down/right until no overlap occurs.
      let shift = 1;
      let proposedRects;
      do {
        const baseX = this.gridSize * shift;
        const baseY = this.gridSize * shift;
        proposedRects = items.map((it) => {
          const w = parseFloat(it.width) || 0;
          const h = parseFloat(it.height) || 0;
          return { x: baseX + (it.dx || 0), y: baseY + (it.dy || 0), w, h };
        });
        shift += 1;
        // Break if no collision; ignore nothing (empty set) so all existing cards count
      } while (this._anyCollisionFor(proposedRects, new Set()));
      // Use the final baseX/baseY from the previous iteration
      const baseX = this.gridSize * (shift - 1);
      const baseY = this.gridSize * (shift - 1);
      // Create each card, apply sizing and position, and attach to the DOM
      for (const it of items) {
        const cfg = it.cfg || {};
        const cardEl = await this._createCard(cfg);
        const wrap = this._makeWrapper(cardEl);
        // Sizing
        wrap.style.width  = it.width;
        wrap.style.height = it.height;
        // Positioning: maintain relative dx/dy within group
        const x = baseX + (it.dx || 0);
        const y = baseY + (it.dy || 0);
        this._setCardPosition(wrap, x, y);
        // Bring to front.  Ensure the new card's z-index is at least 6 so
        // pasted cards never end up behind the grid overlay.  Compute
        // highest z-index among existing cards and clamp to our baseline.
        {
          const nextVal = this._highestZ() + 1;
          wrap.style.zIndex = String(Math.max(nextVal, 6));
        }
        // Assign to current tab
        try {
          const tid = this._normalizeTabId(this.activeTab || this.defaultTab);
          if (tid) wrap.dataset.tabId = tid;
        } catch {}
        // Append and initialize
        this.cardContainer.appendChild(wrap);
        // Do not attach a tab selector when pasting. Pasted cards are assigned
        // to the current tab automatically and the user does not need to
        // reassign them immediately.
        try { this._rebuildOnce(wrap.firstElementChild); } catch {}
        this._initCardInteract(wrap);
      }
      // Ensure the container grows and the active tab filter is applied
      this._resizeContainer();
      this._applyActiveTab();
      // Persist the change
      this._queueSave?.('paste');
      this._toast?.(`Pasted ${items.length} card${items.length === 1 ? '' : 's'}.`);
    } catch (err) {
      console.warn('[drag-and-drop-card] Paste failed', err);
      this._toast?.('Paste failed.');
    }
  }

  _installSelectionMarquee() {
    const cont = this.cardContainer;
    let startX=0, startY=0, marquee=null, active=false;

    const toLocal = (ev) => {
      const r = cont.getBoundingClientRect();
      const x = ('touches' in ev && ev.touches[0]) ? ev.touches[0].clientX : ev.clientX;
      const y = ('touches' in ev && ev.touches[0]) ? ev.touches[0].clientY : ev.clientY;
      const sx = this.__pointerScaleX || 1;
      const sy = this.__pointerScaleY || 1;
      return { x: (x - r.left) / sx, y: (y - r.top) / sy };
    };

    const updateSel = (x,y) => {
      const minX = Math.min(x, startX), maxX = Math.max(x, startX);
      const minY = Math.min(y, startY), maxY = Math.max(y, startY);
      marquee.style.left = `${minX}px`;
      marquee.style.top = `${minY}px`;
      marquee.style.width = `${maxX-minX}px`;
      marquee.style.height= `${maxY-minY}px`;

      const rRect = marquee.getBoundingClientRect();
      const wraps = cont.querySelectorAll('.card-wrapper:not(.ddc-placeholder)');
      this._clearSelection();
      wraps.forEach(w => {
        const wr = w.getBoundingClientRect();
        const overlap = !(wr.right < rRect.left || wr.left > rRect.right || wr.bottom < rRect.top || wr.top > rRect.bottom);
        if (overlap) this._toggleSelection(w, true);
      });
    };

    const down = (e) => {
      if (!this.editMode) return;
      if (e.target.closest('.card-wrapper')) return;
      active = true;
      const p = toLocal(e);
      startX = p.x; startY = p.y;
      marquee = document.createElement('div');
      marquee.className = 'marquee';
      marquee.style.left = `${startX}px`;
      marquee.style.top  = `${startY}px`;
      cont.appendChild(marquee);
      e.preventDefault();
    };
    const move = (e) => { if (!active || !marquee) return; updateSel(toLocal(e).x, toLocal(e).y); };
    const up = () => { if (!active) return; active = false; if (marquee) marquee.remove(); marquee = null; };

    cont.addEventListener('mousedown', down);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    cont.addEventListener('touchstart', (e)=>{ if (!this.editMode) return; if (e.target.closest('.card-wrapper')) return; down(e); }, {passive:false});
    window.addEventListener('touchmove', (e)=>{ move(e); }, {passive:true});
    window.addEventListener('touchend', up);
    window.addEventListener('touchcancel', up);
  }

  /* ------------------------------ Diagnostics ------------------------------ */
  async _openDiagnostics() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    const sk = this.storageKey || '(none)';
    const usingHost = this._backendOK && !!this.storageKey;

    const logsToHtml = (rows) => rows.slice(-200).map(r =>
      `<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
        <span style="opacity:.6">${r.t}</span>
        <b style="margin-left:6px;color:#03a9f4">[${r.kind}]</b>
        <span style="margin-left:6px">${this._safe(r.msg)}</span>
        ${r.extra ? `<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(r.extra, null, 2))}</pre>` : ''}
      </div>`
    ).join('');

    modal.innerHTML = `
      <div class="dialog" style="max-width:1100px;width:min(1100px,95%);height:min(90vh,860px)">
        <div class="dlg-head">
          <h3>Drag & Drop — Diagnostics</h3>
          <button class="btn secondary" id="closeDiag"><ha-icon icon="mdi:close"></ha-icon><span style="margin-left:6px">Close</span></button>
        </div>
        <div style="display:block;overflow:auto;padding:12px">
          <div class="section" style="border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color);margin-bottom:10px">
            <div class="hd" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--divider-color);font-weight:600">Status</div>
            <div class="bd" style="padding:12px">
              <div style="display:grid;grid-template-columns:220px 1fr;gap:6px;align-items:center">
                <div>Storage key (raw → slug)</div><div><code>${this._safe(this._config?.storage_key || '')}</code> → <code>${this._safe(sk)}</code></div>
                <div>Backend reachable</div><div><b>${this._backendOK ? 'YES' : 'NO'}</b></div>
                <div>Persist target</div><div><b>${usingHost ? 'Host (backend)' : 'Browser (localStorage)'}</b></div>
                <div>Auto-save</div><div>${this.autoSave ? `ON (${this.autoSaveDebounce} ms)` : 'OFF'}</div>
                <div>Cards mounted</div><div>${this.cardContainer?.querySelectorAll('.card-wrapper:not(.ddc-placeholder)').length || 0}</div>
              </div>
              <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn" id="testRoundtrip"><ha-icon icon="mdi:sync"></ha-icon><span style="margin-left:6px">Test backend round-trip</span></button>
                <button class="btn secondary" id="exportJson"><ha-icon icon="mdi:download"></ha-icon><span style="margin-left:6px">Export JSON</span></button>
                <button class="btn secondary" id="importJson"><ha-icon icon="mdi:upload"></ha-icon><span style="margin-left:6px">Import JSON</span></button>
                <button class="btn" id="forceSave"><ha-icon icon="mdi:content-save"></ha-icon><span style="margin-left:6px">Force save now</span></button>
                <button class="btn secondary" id="refreshKeys"><ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh backend keys</span></button>
              </div>
            </div>
          </div>
          <div class="section" style="border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color)">
            <div class="hd" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--divider-color);font-weight:600">Logs (latest)</div>
            <div class="bd" id="logArea" style="padding:12px;max-height:420px;overflow:auto">${logsToHtml(this._dbgDump())}</div>
          </div>
        </div>
      </div>`;

    const close = () => modal.remove();
    modal.querySelector('#closeDiag').addEventListener('click', close);
    this.shadowRoot.appendChild(modal);

    const refreshLogs = () => {
      const logArea = modal.querySelector('#logArea');
      const logsToHtmlLocal = (rows) => rows.slice(-200).map(r =>
        `<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${r.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${r.kind}]</b>
          <span style="margin-left:6px">${this._safe(r.msg)}</span>
          ${r.extra ? `<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(r.extra, null, 2))}</pre>` : ''}
        </div>`
      ).join('');
      logArea.innerHTML = logsToHtmlLocal(this._dbgDump());
      logArea.scrollTop = logArea.scrollHeight;
    };

    modal.querySelector('#refreshKeys').addEventListener('click', async () => {
      try { this._dbgPush('probe', 'Manual refresh'); await this._probeBackend(); }
      finally { refreshLogs(); }
    });

    modal.querySelector('#forceSave').addEventListener('click', async () => {
      await this._saveLayout(false);
      refreshLogs();
    });

    modal.querySelector('#exportJson').addEventListener('click', () => {
      const wraps = Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'));
      const saved = wraps.map((w)=>{
        const x = parseFloat(w.getAttribute('data-x')) || 0;
        const y = parseFloat(w.getAttribute('data-y')) || 0;
        const width  = parseFloat(w.style.width)  || w.getBoundingClientRect().width;
        const height = parseFloat(w.style.height) || w.getBoundingClientRect().height;
        const z = parseInt(w.style.zIndex || '1', 10);
        const cardCfg = this._extractCardConfig(w.firstElementChild);
        const tabId = w.dataset.tabId || this.defaultTab;
        return { card: cardCfg, position:{x,y}, size:{width,height}, z, tabId };
      });
        const payload = {
            version: 2,
            options: this._exportableOptions(),
            cards: saved
        };
      const blob = new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `ddc_${this.storageKey || 'layout'}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    });

    modal.querySelector('#importJson').addEventListener('click', async () => {
      const inp = document.createElement('input');
      inp.type = 'file'; inp.accept = 'application/json';
      inp.onchange = async () => {
        const file = inp.files?.[0]; if (!file) return;
        const txt = await file.text();
        try {
          const json = JSON.parse(txt);
          this._dbgPush('import', 'Loaded file', { bytes: txt.length });
          this.cardContainer.innerHTML = '';
          if (json.cards?.length) {
            for (const conf of json.cards) {
              if (!conf?.card || (typeof conf.card === 'object' && Object.keys(conf.card).length === 0)) {
                const p = this._makePlaceholderAt(conf.position?.x||0, conf.position?.y||0, conf.size?.width||200, conf.size?.height||200);
                this.cardContainer.appendChild(p);
              } else {
                const el = await this._createCard(conf.card);
                const wrap = this._makeWrapper(el);
                this._setCardPosition(wrap, conf.position?.x||0, conf.position?.y||0);
            wrap.dataset.tabId = this._normalizeTabId(conf.tabId || conf.tab_id || this.defaultTab);
            this._setCardPosition(wrap, conf.position?.x||0, conf.position?.y||0);
                wrap.style.width = `${conf.size?.width||140}px`;
                wrap.style.height= `${conf.size?.height||100}px`;
                this.cardContainer.appendChild(wrap);
                
          try { this._rebuildOnce(wrap.firstElementChild); } catch {}
          this._initCardInteract(wrap);
              }
            }
          } else {
            this._showEmptyPlaceholder();
        this._applyAutoScale?.();
          }
          this._resizeContainer();
          await this._saveLayout(false);
        } catch (e) {
          this._dbgPush('import', 'Parse failed', { error: String(e) });
        }
        const ev = new Event('ddc-logrefresh'); window.dispatchEvent(ev);
      };
      inp.click();
    });

    modal.querySelector('#testRoundtrip').addEventListener('click', async () => {
      if (!this._backendOK) {
        this._dbgPush('test', 'Backend not reachable, aborting');
        return refreshLogs();
      }
      const key = (this.storageKey || 'ddc_test') + '_selftest';
      const payload = { t: Date.now(), msg: 'roundtrip' };
      try {
        await this._saveLayoutToBackend(key, payload);
        const back = await this._loadLayoutFromBackend(key);
        this._dbgPush('test', 'Round-trip result', { wrote: payload, read: back });
      } catch (e) {
        this._dbgPush('test', 'Round-trip failed', { error: String(e) });
      }
      refreshLogs();
    });

    refreshLogs();
  }


  /* ------------------------ Dashboard Settings ------------------------ */
  /**
   * Opens a settings dialog allowing the user to configure dashboard‑wide
   * options such as grid size, auto resize, animations and HA chrome
   * visibility. The menu is designed to be simple and intuitive. Changes
   * are applied when the user clicks Save.
   */
  _openDashboardSettings() {
    // Build modal container
    const modal = document.createElement('div');
    modal.className = 'modal';
    // Use the existing .dialog styles for consistent centering and sizing. Limit
    // the maximum width so the settings sheet doesn't overwhelm the screen.
    this._ensureSettingsStyles_();


    
    
modal.innerHTML = `
<div class="dialog modern" role="dialog" aria-modal="true">
  <div class="dlg-head">
    <h3>Dashboard Settings</h3>
    <button class="icon-btn" id="ddc-settings-close" title="Close" aria-label="Close dialog">
      <ha-icon icon="mdi:close"></ha-icon>
    </button>
  </div>

  <div class="settings-body">

    <!-- Layout -->
    <section class="card" aria-labelledby="layout-head">
      <div class="section-head">
        <ha-icon icon="mdi:view-grid-plus-outline" aria-hidden="true"></ha-icon>
        <h4 id="layout-head">Layout</h4>
      </div>
      <p class="caption">Control grid density, canvas sizing, and card behavior.</p>

      <!-- GRID SIZE -->
      <div class="setting" role="group" aria-labelledby="lbl-grid-size">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:grid" aria-hidden="true"></ha-icon>
            <label id="lbl-grid-size" for="ddc-setting-gridSize">Grid size</label>
          </div>
          <div class="control">
            <div class="range-wrap">
              <input type="range" id="ddc-setting-gridSize" min="1" max="400" step="1" />
              <output id="ddc-grid-out" for="ddc-setting-gridSize">100 px</output>
              <!-- Added number input for manual entry of grid size -->
              <input type="number" id="ddc-setting-gridSizeInput" min="1" max="400" step="1" class="grid-input" />
            </div>
          </div>
        </div>
        <div class="hint">Cards snap every <b>N</b> pixels. Lower values give a denser grid for finer placement.</div>
      </div>

      <!-- GRID PREVIEW -->
      <div class="preview">
        <div class="grid-demo" id="ddc-grid-demo">
          <div class="grid-meta-badge" id="ddc-grid-meta"></div>
        </div>
      </div>

      <!-- QUICK CANVAS SIZES -->
      <div class="setting" role="group" aria-labelledby="lbl-quick-sizes">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:move-resize" aria-hidden="true"></ha-icon>
            <span id="lbl-quick-sizes">Quick canvas sizes</span>
          </div>
          <div class="control chips" role="group" aria-label="Quick sizes">
            <button class="chip" data-w="1280" data-h="720">Tablet (1280×720)</button>
            <button class="chip" data-w="1920" data-h="1080" aria-pressed="true">Desktop (1920×1080)</button>
            <button class="chip" data-w="2560" data-h="1440">WQHD (2560×1440)</button>
          </div>
        </div>
        <div class="hint">Applies a fixed custom canvas size instantly. Switch back to Dynamic or Preset below if needed.</div>
      </div>

      <!-- AUTO RESIZE -->
      <div class="setting" role="group" aria-labelledby="lbl-auto-resize">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:resize" aria-hidden="true"></ha-icon>
            <label id="lbl-auto-resize" for="ddc-setting-autoResize">Auto resize cards</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-autoResize"></ha-switch>
          </div>
        </div>
        <div class="hint">Scale the layout with the viewport. Off = fixed canvas size.</div>
      </div>

      <!-- LIVE SNAP -->
      <div class="setting" role="group" aria-labelledby="lbl-live-snap">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:drag-variant" aria-hidden="true"></ha-icon>
            <label id="lbl-live-snap" for="ddc-setting-dragSnap">Live snap while dragging</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-dragSnap"></ha-switch>
          </div>
        </div>
        <div class="hint">While dragging, cards snap to the nearest grid lines in real time.</div>
      </div>

      <!-- OVERLAP -->
      <div class="setting" role="group" aria-labelledby="lbl-prevent-overlap">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:animation" aria-hidden="true"></ha-icon>
            <label id="lbl-prevent-overlap" for="ddc-setting-disableOverlap">Prevent overlap</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-disableOverlap"></ha-switch>
          </div>
        </div>
        <div class="hint">Blocks placements that would overlap another card.</div>
      </div>

      <div class="divider" role="separator" aria-hidden="true"></div>

      <!-- SIZE MODE -->
      <div class="setting" role="group" aria-labelledby="lbl-size-mode">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:move-resize" aria-hidden="true"></ha-icon>
            <label id="lbl-size-mode" for="ddc-setting-sizeMode">Container size mode</label>
          </div>
          <div class="control">
            <select id="ddc-setting-sizeMode">
              <option value="dynamic">Dynamic</option>
              <option value="preset">Preset</option>
              <option value="auto">Auto</option>
              <option value="fixed_custom">Fixed (custom)</option>
            </select>
          </div>
        </div>
        <div class="hint">Dynamic fits the available space (reflows grid). Auto scales the whole grid to fit, preserving positions. Preset uses common screen sizes. Fixed lets you specify width &amp; height.</div>
      </div>

      <!-- SIZE EXTRAS (injected) -->
      <div id="ddc-setting-sizeExtras" class="setting" aria-live="polite"></div>

      <!-- ORIENTATION -->
      <div class="setting" role="group" aria-labelledby="lbl-orientation">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:phone-rotate-landscape" aria-hidden="true"></ha-icon>
            <label id="lbl-orientation" for="ddc-setting-orient">Orientation</label>
          </div>
          <div class="control">
            <select id="ddc-setting-orient">
              <option value="auto">Auto</option>
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
            </select>
          </div>
        </div>
        <div class="hint">For presets and fixed sizes, choose a preferred orientation. Auto adapts to the screen.</div>
      </div>

      <div class="divider" role="separator" aria-hidden="true"></div>

      <!-- AUTOSAVE -->
      <div class="setting" role="group" aria-labelledby="lbl-autosave">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:content-save" aria-hidden="true"></ha-icon>
            <label id="lbl-autosave" for="ddc-setting-autoSave">Auto save</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-autoSave"></ha-switch>
          </div>
        </div>
        <div class="hint">Automatically persist layout changes after you drag or edit.</div>
      </div>

      <!-- AUTOSAVE DELAY -->
      <div class="setting" role="group" aria-labelledby="lbl-autosave-delay">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:timer-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-autosave-delay" for="ddc-setting-autoSaveDebounce">Auto save delay (ms)</label>
          </div>
          <div class="control">
            <input type="number" id="ddc-setting-autoSaveDebounce" min="100" max="10000" step="50" />
          </div>
        </div>
        <div class="hint">Wait time after the last change before saving. Lower = more frequent saves.</div>
      </div>

      <!-- EDIT MODE PIN/PASSWORD -->
      <div class="setting" role="group" aria-labelledby="lbl-edit-pin">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:lock-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-edit-pin" for="ddc-setting-editPin">Edit mode PIN / password</label>
          </div>
          <div class="control">
            <input type="password" id="ddc-setting-editPin" placeholder="Leave blank to disable" />
          </div>
        </div>
        <div class="hint">If set, this code is required to enter Edit Mode.</div>
      </div>
    </section>

    <!-- Appearance -->
    <section class="card" aria-labelledby="appearance-head">
      <div class="section-head">
        <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
        <h4 id="appearance-head">Appearance</h4>
      </div>
      <p class="caption">Choose backgrounds and colors. Use theme vars like <code>var(--ha-card-background)</code>.</p>

      <!-- CONTAINER BG -->
      <div class="setting" role="group" aria-labelledby="lbl-container-bg">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
            <label id="lbl-container-bg" for="ddc-setting-containerBg">Container background</label>
          </div>
          <div class="control">
            <div class="stack">
              <div class="color-pair">
                <input type="color" id="ddc-color-containerBg" />
                <input type="text" id="ddc-setting-containerBg" placeholder="transparent · #123456 · var(--ha-card-background)" />
              </div>
              <div class="swatches" id="ddc-swatches-containerBg"></div>
              <div class="gradients" id="ddc-gradients-containerBg"></div>
            </div>
          </div>
        </div>
        <div class="hint">Accepts plain colors or theme variables.</div>
      </div>

      <!-- CARD BG -->
      <div class="setting" role="group" aria-labelledby="lbl-card-bg">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
            <label id="lbl-card-bg" for="ddc-setting-cardBg">Card background</label>
          </div>
          <div class="control">
            <div class="stack">
              <div class="color-pair">
                <input type="color" id="ddc-color-cardBg" />
                <input type="text" id="ddc-setting-cardBg" placeholder="#121212 · var(--ha-card-background)" />
              </div>
              <div class="swatches" id="ddc-swatches-cardBg"></div>
              <div class="gradients" id="ddc-gradients-cardBg"></div>
            </div>
          </div>
        </div>
        <div class="hint">Affects the background of each draggable card container.</div>
      </div>

      <!-- CARD SHADOW -->
      <div class="setting" role="group" aria-labelledby="lbl-card-shadow">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:shadow" aria-hidden="true"></ha-icon>
            <label id="lbl-card-shadow" for="ddc-setting-cardShadow">Card drop shadow</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-cardShadow"></ha-switch>
          </div>
        </div>
        <div class="hint">Toggle a drop shadow on card containers.</div>
      </div>

      <div class="divider" role="separator" aria-hidden="true"></div>

      <!-- BACKGROUND MODE -->
      <div class="setting" role="group" aria-labelledby="lbl-bg-mode">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:layers-triple" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-mode" for="ddc-bg-mode">Background type</label>
          </div>
          <div class="control">
            <select id="ddc-bg-mode">
              <option value="none">None</option>
              <option value="image">Image</option>
              <option value="particles">Animated (particles.js)</option>
              <option value="youtube">YouTube video</option>
            </select>
          </div>
        </div>
        <div class="hint">Choose what renders behind your cards.</div>
      </div>

      <!-- BACKGROUND: IMAGE -->
      <div class="setting" data-bg-section="image" role="group" aria-labelledby="lbl-bg-image">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:image-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-image" for="ddc-setting-bgImg">Background image</label>
          </div>
          <div class="control">
            <div class="stack">
              <div class="input-file">
                <label class="file-btn" for="ddc-file-bg">Upload image</label>
                <input id="ddc-file-bg" type="file" accept="image/*" />
                <div class="thumb" id="ddc-bg-thumb"></div>
                <button type="button" class="btn secondary" id="ddc-clear-bg">Delete</button>
              </div>

              <div class="row">
                <label for="ddc-setting-bgImg">or URL</label>
                <input type="text" id="ddc-setting-bgImg" placeholder="https://… or /local/…" />
              </div>

              <div class="bg-opts">
                <label for="ddc-bg-repeat"><ha-icon icon="mdi:repeat"></ha-icon> Repeat</label>
                <select id="ddc-bg-repeat">
                  <option value="no-repeat">No repeat</option>
                  <option value="repeat">Repeat</option>
                  <option value="repeat-x">Repeat X</option>
                  <option value="repeat-y">Repeat Y</option>
                </select>

                <label for="ddc-bg-size"><ha-icon icon="mdi:arrow-expand-all"></ha-icon> Size</label>
                <select id="ddc-bg-size">
                  <option value="cover">Cover</option>
                  <option value="contain">Contain</option>
                  <option value="auto">Auto</option>
                  <option value="100% 100%">Fill (stretch)</option>
                </select>

                <label for="ddc-bg-position"><ha-icon icon="mdi:crosshairs-gps"></ha-icon> Position</label>
                <select id="ddc-bg-position">
                  <option value="center center">Center</option>
                  <option value="top center">Top</option>
                  <option value="bottom center">Bottom</option>
                  <option value="left center">Left</option>
                  <option value="right center">Right</option>
                  <option value="top left">Top left</option>
                  <option value="top right">Top right</option>
                  <option value="bottom left">Bottom left</option>
                  <option value="bottom right">Bottom right</option>
                </select>

                <label for="ddc-bg-attachment"><ha-icon icon="mdi:pin"></ha-icon> Attachment</label>
                <select id="ddc-bg-attachment">
                  <option value="scroll">Scroll</option>
                  <option value="fixed">Fixed</option>
                </select>

                <label for="ddc-bg-opacity"><ha-icon icon="mdi:opacity"></ha-icon> Opacity</label>
                <div class="range-wrap">
                  <input type="range" id="ddc-bg-opacity" min="0" max="100" step="1" />
                  <output id="ddc-bg-opacity-out">100%</output>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hint">Uploads are saved inline as data-URLs. For large files, host under <code>/local/</code> and paste the URL.</div>
      </div>

      <!-- BACKGROUND: PARTICLES -->
      <div class="setting" data-bg-section="particles" role="group" aria-labelledby="lbl-bg-particles" hidden>
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:blur" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-particles" for="ddc-particles-url">Particles.js</label>
          </div>
          <div class="control">
            <div class="stack">
              <label for="ddc-particles-url">Config JSON URL (optional)</label>
              <input type="text" id="ddc-particles-url" placeholder="/local/particles.json or https://…" />
              <div class="hint">If empty, a sensible default is used. For HACS, prefer hosting the library + JSON under <code>/config/www</code> (served as <code>/local/…</code>).</div>

              <label class="row" for="ddc-particles-pointer" style="gap:8px">
                <ha-switch id="ddc-particles-pointer"></ha-switch>
                <span>Enable pointer interactivity (hover/click)</span>
              </label>
              <div class="hint">Leave off if you want guaranteed unobstructed dragging.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- BACKGROUND: YOUTUBE -->
      <div class="setting" data-bg-section="youtube" role="group" aria-labelledby="lbl-bg-youtube" hidden>
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:youtube" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-youtube" for="ddc-youtube-url">YouTube background</label>
          </div>
          <div class="control">
            <div class="stack">
              <label for="ddc-youtube-url">YouTube URL or video ID</label>
              <input type="text" id="ddc-youtube-url" placeholder="https://youtu.be/… or dQw4w9WgXcQ" />

              <div class="row" style="gap:12px">
                <label for="ddc-youtube-start" class="grow">
                  <span>Start (s)</span>
                  <input type="number" id="ddc-youtube-start" min="0" step="1" />
                </label>
                <label for="ddc-youtube-end" class="grow">
                  <span>End (s)</span>
                  <input type="number" id="ddc-youtube-end" min="1" step="1" />
                </label>
              </div>

              <div class="row" style="gap:18px; align-items:center">
                <label for="ddc-youtube-mute" class="row" style="gap:8px">
                  <ha-switch id="ddc-youtube-mute" checked></ha-switch>
                  <span>Mute</span>
                </label>
                <label for="ddc-youtube-loop" class="row" style="gap:8px">
                  <ha-switch id="ddc-youtube-loop" checked></ha-switch>
                  <span>Loop</span>
                </label>
              </div>

              <div class="row" style="gap:12px">
                <label for="ddc-youtube-size" class="grow">
                  <ha-icon icon="mdi:arrow-expand-all" aria-hidden="true"></ha-icon>
                  <span>Size</span>
                  <select id="ddc-youtube-size">
                    <option value="cover">Cover</option>
                    <option value="contain">Contain</option>
                    <option value="auto">Auto</option>
                    <option value="100% 100%">Fill (stretch)</option>
                  </select>
                </label>

                <label for="ddc-youtube-position" class="grow">
                  <ha-icon icon="mdi:crosshairs-gps" aria-hidden="true"></ha-icon>
                  <span>Position</span>
                  <select id="ddc-youtube-position">
                    <option value="top left">Top left</option>
                    <option value="top">Top</option>
                    <option value="top right">Top right</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="bottom left">Bottom left</option>
                    <option value="bottom">Bottom</option>
                    <option value="bottom right">Bottom right</option>
                  </select>
                </label>

                <label for="ddc-youtube-attachment" class="grow">
                  <ha-icon icon="mdi:image-lock" aria-hidden="true"></ha-icon>
                  <span>Attachment</span>
                  <select id="ddc-youtube-attachment">
                    <option value="scroll">Scroll</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </label>
              </div>

              <label for="ddc-youtube-opacity">
                <ha-icon icon="mdi:opacity" aria-hidden="true"></ha-icon> Opacity
              </label>
              <div class="range-wrap">
                <input type="range" id="ddc-youtube-opacity" min="0" max="100" step="1" value="100" />
                <output id="ddc-youtube-opacity-out">100%</output>
              </div>

              <div class="hint">Video plays muted, fills the canvas (“cover”), sits under the grid and cards, and ignores pointer events so dragging remains smooth.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Behaviour -->
    <section class="card" aria-labelledby="behaviour-head">
      <div class="section-head">
        <ha-icon icon="mdi:tune" aria-hidden="true"></ha-icon>
        <h4 id="behaviour-head">Behaviour</h4>
      </div>
      <p class="caption">Animation, logging, and Home Assistant chrome visibility.</p>

      <!-- ANIMATE -->
      <div class="setting" role="group" aria-labelledby="lbl-animate">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:play-box" aria-hidden="true"></ha-icon>
            <label id="lbl-animate" for="ddc-setting-animate">Animate cards</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-animate"></ha-switch>
          </div>
        </div>
        <div class="hint">Smooth transitions when moving and resizing cards.</div>
      </div>

      <!-- DEBUG -->
      <div class="setting" role="group" aria-labelledby="lbl-debug">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:bug-play-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-debug" for="ddc-setting-debug">Enable debug logging</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-debug"></ha-switch>
          </div>
        </div>
        <div class="hint">Extra console logs for troubleshooting layout issues.</div>
      </div>

      <!-- HIDE HEADER -->
      <div class="setting" role="group" aria-labelledby="lbl-hide-hdr">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:page-layout-header" aria-hidden="true"></ha-icon>
            <label id="lbl-hide-hdr" for="ddc-setting-hideHdr">Hide HA Header</label>
            <!-- Removed thumbs up/down icon -->
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-hideHdr"></ha-switch>
          </div>
        </div>
        <div class="hint">Removes the top app bar (Search / Assist / Edit). It auto-shows in Edit mode.</div>
      </div>

      <!-- HIDE SIDEBAR -->
      <div class="setting" role="group" aria-labelledby="lbl-hide-sbar">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:page-layout-sidebar-left" aria-hidden="true"></ha-icon>
            <label id="lbl-hide-sbar" for="ddc-setting-hideSbar">Hide HA Sidebar</label>
            <!-- Removed thumbs up/down icon -->
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-hideSbar"></ha-switch>
          </div>
        </div>
        <div class="hint">Hides the left navigation drawer to maximize canvas space.</div>
      </div>
    </section>

    <!-- Screen Saver -->
    <section class="card" aria-labelledby="screensaver-head">
      <div class="section-head">
        <ha-icon icon="mdi:clock-outline" aria-hidden="true"></ha-icon>
        <h4 id="screensaver-head">Screen saver</h4>
      </div>
      <p class="caption">Show a digital clock after inactivity.</p>

      <!-- Enable -->
      <div class="setting" role="group" aria-labelledby="lbl-ss-enable">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:power" aria-hidden="true"></ha-icon>
            <label id="lbl-ss-enable" for="ddc-setting-screenSaverEnabled">Enable screen saver</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-screenSaverEnabled"></ha-switch>
          </div>
        </div>
        <div class="hint">Activate a screen saver overlay with time and date.</div>
      </div>

      <!-- Delay -->
      <div class="setting" role="group" aria-labelledby="lbl-ss-delay">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:timer-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-ss-delay" for="ddc-setting-screenSaverDelay">Activation delay</label>
          </div>
          <div class="control">
            <div class="range-wrap">
              <input type="number" id="ddc-setting-screenSaverDelay" min="1" max="60" step="1" />
              <span class="unit">min</span>
            </div>
          </div>
        </div>
        <div class="hint">Delay (in minutes) before the screen saver activates.</div>
      </div>
    </section>

    <!-- Tabs -->
    <section class="card tabs-card" aria-labelledby="tabs-head">
      <div class="section-head">
        <ha-icon icon="mdi:tab" aria-hidden="true"></ha-icon>
        <h4 id="tabs-head">Tabs</h4>
      </div>
      <p class="caption">Create, rename, delete, and choose the default tab. Cards use <code>tabId</code> to decide where they appear.</p>

      <!-- Current tabs list -->
      <div id="ddc-tabs-list" class="setting" aria-live="polite"></div>

      <!-- Add new tab -->
      <div class="setting" role="group" aria-labelledby="lbl-add-tab">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:tab-plus" aria-hidden="true"></ha-icon>
            <label id="lbl-add-tab" for="ddc-new-tab-name">Add tab</label>
          </div>
          <div class="control">
            <div class="row">
              <input type="text" id="ddc-new-tab-name" placeholder="e.g. Lights" class="grow" />
              <button class="btn primary" id="ddc-add-tab-btn">Add</button>
            </div>
          </div>
        </div>
        <div class="hint">Tab IDs must be unique. The label defaults to the ID if left empty.</div>
      </div>
    </section>

  </div>

  <div class="footer">
    <button class="btn secondary" id="ddc-settings-cancel">Cancel</button>
    <button class="btn primary" id="ddc-settings-save">Save</button>
  </div>
</div>

`;

    // Only allow one modal at a time across the card. If any modal exists in
    // the shadow root (including other DDC modals), remove it before
    // opening the settings. This prevents overlapping dialog layers.
    const existingModal = this.shadowRoot.querySelector('.modal');
    if (existingModal) {
      try { existingModal.remove(); } catch {}
      // clear any stored references
      if (this.__settingsModal === existingModal) this.__settingsModal = null;
    }

    // If a previous settings modal specifically exists, remove it as well
    if (this.__settingsModal) {
      try { this.__settingsModal.remove(); } catch {}
      this.__settingsModal = null;
    }
    // Append to our own shadow root so built-in .modal styles apply and centering works
    this.__settingsModal = modal;
    this.shadowRoot.appendChild(modal);

    // Prepopulate current settings
    const chkAuto    = modal.querySelector('#ddc-setting-autoResize');
    const inpGrid    = modal.querySelector('#ddc-setting-gridSize');

    const chkAnim    = modal.querySelector('#ddc-setting-animate');
    const chkHdr     = modal.querySelector('#ddc-setting-hideHdr');
    const chkBar     = modal.querySelector('#ddc-setting-hideSbar');
    const chkSnap    = modal.querySelector('#ddc-setting-dragSnap');
    const chkASave   = modal.querySelector('#ddc-setting-autoSave');
    const inpDeb     = modal.querySelector('#ddc-setting-autoSaveDebounce');
    const selSize    = modal.querySelector('#ddc-setting-sizeMode');
    const selOrient  = modal.querySelector('#ddc-setting-orient');
    const chkOverlap = modal.querySelector('#ddc-setting-disableOverlap');
    const inpEditPin = modal.querySelector('#ddc-setting-editPin');
    const inpCBg     = modal.querySelector('#ddc-setting-containerBg');
    const inpCardBg  = modal.querySelector('#ddc-setting-cardBg');
    const chkShadow  = modal.querySelector('#ddc-setting-cardShadow');
    const inpBgImg   = modal.querySelector('#ddc-setting-bgImg');
    const selBgRepeat     = modal.querySelector('#ddc-bg-repeat');
    const selBgSize       = modal.querySelector('#ddc-bg-size');
    const selBgPosition   = modal.querySelector('#ddc-bg-position');
    const selBgAttachment = modal.querySelector('#ddc-bg-attachment');
    const rngBgOpacity    = modal.querySelector('#ddc-bg-opacity');
    const outBgOpacity    = modal.querySelector('#ddc-bg-opacity-out');
    const chkDebug   = modal.querySelector('#ddc-setting-debug');

    // Screen saver controls
    const chkScreenSaver   = modal.querySelector('#ddc-setting-screenSaverEnabled');
    const rngScreenDelay   = modal.querySelector('#ddc-setting-screenSaverDelay');
    const outScreenDelay   = modal.querySelector('#ddc-screenSaverDelayOut');

    const selBgMode           = modal.querySelector('#ddc-bg-mode');
    const secImg              = modal.querySelector('[data-bg-section="image"]');
    const secParticles        = modal.querySelector('[data-bg-section="particles"]');
    const secYoutube          = modal.querySelector('[data-bg-section="youtube"]');
    const inpParticlesUrl     = modal.querySelector('#ddc-particles-url');
    const chkParticlesPointer = modal.querySelector('#ddc-particles-pointer');
    const inpYtUrl            = modal.querySelector('#ddc-youtube-url');
    const inpYtStart          = modal.querySelector('#ddc-youtube-start');
    const inpYtEnd            = modal.querySelector('#ddc-youtube-end');
    const chkYtMute           = modal.querySelector('#ddc-youtube-mute');
    const chkYtLoop           = modal.querySelector('#ddc-youtube-loop');
    const selYtSize           = modal.querySelector('#ddc-youtube-size');
    const selYtPosition       = modal.querySelector('#ddc-youtube-position');
    const selYtAttachment     = modal.querySelector('#ddc-youtube-attachment');
    const rngYtOpacity       = modal.querySelector('#ddc-youtube-opacity');
    const outYtOpacity       = modal.querySelector('#ddc-youtube-opacity-out');

    // hero image and tabs position are intentionally omitted from the settings UI

    const bgCfg = (this._config?.background_image) || {};

    const bgMode = (this._config?.background_mode)
      || (this._config?.background_image?.src ? 'image' : 'none');
    if (selBgMode) selBgMode.value = String(bgMode);

    const pCfg = this._config?.background_particles || {};
    if (inpParticlesUrl)     inpParticlesUrl.value = pCfg.config_url || '';
    if (chkParticlesPointer) chkParticlesPointer.checked = !!pCfg.pointer_events;

    const yCfg = this._config?.background_youtube || {};
    const ytStr = yCfg.url || yCfg.video_id || '';
    if (inpYtUrl)   inpYtUrl.value = ytStr;
    if (inpYtStart) inpYtStart.value = (yCfg.start ?? '');
    if (inpYtEnd)   inpYtEnd.value   = (yCfg.end   ?? '');
    if (chkYtMute)  chkYtMute.checked = (yCfg.mute !== false);
    if (chkYtLoop)  chkYtLoop.checked = (yCfg.loop !== false);
    if (selYtSize) selYtSize.value = String(yCfg.size || 'cover');
    if (selYtPosition) selYtPosition.value = String(yCfg.position || 'center');
    if (selYtAttachment) selYtAttachment.value = String(yCfg.attachment || 'scroll');
    if (rngYtOpacity) {
      const ypct = Math.round((yCfg.opacity != null ? yCfg.opacity : 1) * 100);
      rngYtOpacity.value = String(ypct);
      if (outYtOpacity) outYtOpacity.textContent = ypct + '%';
      rngYtOpacity.addEventListener('input', () => {
        const v = Math.max(0, Math.min(100, parseInt(rngYtOpacity.value || '100', 10)));
        if (outYtOpacity) outYtOpacity.textContent = v + '%';
      });
    }


    // show/hide sections based on mode
    const showBgSections = () => {
      const m = selBgMode?.value || 'none';
      if (secImg)       secImg.style.display       = (m === 'image')     ? '' : 'none';
      if (secParticles) secParticles.style.display = (m === 'particles') ? '' : 'none';
      if (secYoutube)   secYoutube.style.display   = (m === 'youtube')   ? '' : 'none';
    };
    selBgMode?.addEventListener('change', showBgSections);
    showBgSections();
    // Hide auto-resize setting when the container size mode is not dynamic
    const secAutoResize = modal.querySelector('[aria-labelledby="lbl-auto-resize"]');
    const updateAutoResizeVisibility = () => {
      const mode = selSize?.value || 'dynamic';
      if (secAutoResize) secAutoResize.style.display = (mode === 'dynamic') ? '' : 'none';
    };
    updateAutoResizeVisibility();
    selSize?.addEventListener('change', updateAutoResizeVisibility);

    if (chkAuto)    chkAuto.checked    = !!this.autoResizeCards;
    if (inpGrid)    inpGrid.value      = String(this.gridSize || 100);
    if (chkAnim)    chkAnim.checked    = !!this.animateCards;
    if (chkHdr)     chkHdr.checked     = !!this.hideHaHeader;
    if (chkBar)     chkBar.checked     = !!this.hideHaSidebar;
    if (chkSnap)    chkSnap.checked    = !!this.dragLiveSnap;
    if (chkASave)   chkASave.checked   = !!this.autoSave;
    if (inpDeb)     inpDeb.value       = String(this.autoSaveDebounce ?? 800);
    if (selSize)    selSize.value      = String(this.containerSizeMode || 'dynamic');
    if (selOrient)  selOrient.value    = String(this.containerPresetOrient || 'auto');
    if (chkOverlap) chkOverlap.checked = !!this.disableOverlap;
    if (inpCBg)     inpCBg.value       = String(this.containerBackground || '');
    if (inpCardBg)  inpCardBg.value    = String(this.cardBackground || '');
    if (inpBgImg)   {
      const bgObj = (this._config?.background_image ?? this._config?.bg_image) || {};
      inpBgImg.value = bgObj.src ? String(bgObj.src) : '';
    }
    if (chkDebug)   chkDebug.checked   = !!this.debug;
    // Initialize the drop shadow toggle
    if (chkShadow)  chkShadow.checked  = !!this.cardShadowEnabled;
    if (selBgRepeat)     selBgRepeat.value     = String(bgCfg.repeat     || 'no-repeat');
    if (selBgSize)       selBgSize.value       = String(bgCfg.size       || 'cover');
    if (selBgPosition)   selBgPosition.value   = String(bgCfg.position   || 'center center');
    if (selBgAttachment) selBgAttachment.value = String(bgCfg.attachment || 'scroll');
    if (rngBgOpacity) {
      const pct = Math.round((bgCfg.opacity != null ? bgCfg.opacity : 1) * 100);
      rngBgOpacity.value = String(pct);
      if (outBgOpacity) outBgOpacity.textContent = `${pct}%`;
      rngBgOpacity.addEventListener('input', () => {
        const v = Math.max(0, Math.min(100, parseInt(rngBgOpacity.value || '100', 10)));
        outBgOpacity.textContent = `${v}%`;
        // Live preview without waiting for Save
        this.style.setProperty('--ddc-bg-opacity', String(v/100));
      });
    }

    // Live update drop shadow when the toggle is changed
    if (chkShadow) {
      chkShadow.addEventListener('change', () => {
        try {
          if (chkShadow.checked) {
            // Use a more prominent drop shadow on toggle
            this.style.setProperty('--ddc-card-shadow', '0 8px 24px rgba(0,0,0,.35)');
          } else {
            this.style.removeProperty('--ddc-card-shadow');
          }
        } catch {}
      });
    }

    // ===== Screen saver UI =====
    // Prepopulate current value and bind live changes
    if (chkScreenSaver) {
      chkScreenSaver.checked = !!this.screenSaverEnabled;
      chkScreenSaver.addEventListener('change', () => {
        this.screenSaverEnabled = chkScreenSaver.checked;
        if (typeof this._updateScreensaverSettings === 'function') this._updateScreensaverSettings();
      });
    }
    if (rngScreenDelay) {
      // determine minutes from current delay (ms)
      const ms = this.screenSaverDelay != null ? Number(this.screenSaverDelay) : (5 * 60000);
      let mins = Math.round(ms / 60000);
      if (!Number.isFinite(mins) || mins < 1) mins = 5;
      if (mins > 60) mins = 60;
      rngScreenDelay.value = String(mins);
      if (outScreenDelay) outScreenDelay.textContent = `${mins} min`;
      rngScreenDelay.addEventListener('input', () => {
        const v = parseInt(rngScreenDelay.value || '1', 10);
        const m = Math.max(1, Math.min(60, isNaN(v) ? 1 : v));
        if (outScreenDelay) outScreenDelay.textContent = `${m} min`;
        this.screenSaverDelay = m * 60000;
        if (typeof this._updateScreensaverSettings === 'function') this._updateScreensaverSettings();
      });
    }


    // ===== UI polish hooks =====
  
    // Prepopulate Edit PIN — UI value always wins over YAML
    // Prepopulate Edit PIN — UI value wins for display too
    try {
      if (inpEditPin) {
        const yamlPin = (this.config && this.config.edit_mode_pin != null) ? String(this.config.edit_mode_pin) : '';
        const uiPin   = (this.editModePin != null) ? String(this.editModePin) : '';
        inpEditPin.value = uiPin || yamlPin || '';
        inpEditPin.disabled = false;   // ensure editable
        inpEditPin.readOnly = false;   // ensure editable
      }
    } catch {}

    const gridSlider = modal.querySelector('#ddc-setting-gridSize');
    const gridOut    = modal.querySelector('#ddc-grid-out');
    const gridDemo   = modal.querySelector('#ddc-grid-demo');
    const gridMeta   = modal.querySelector('#ddc-grid-meta');
    // Reference to the manual grid size input (number field)
    const gridInput  = modal.querySelector('#ddc-setting-gridSizeInput');

    const renderMeta = () => {
      if (!gridDemo || !gridMeta) return;
      const rect = gridDemo.getBoundingClientRect();
      const cell = Math.max(1, parseInt(gridSlider.value || '100', 10));
      const cols = Math.max(1, Math.floor(rect.width  / cell));
      const rows = Math.max(1, Math.floor(rect.height / cell));
      gridMeta.innerHTML = `
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${cell}px · ${cols}×${rows}</span>
      `;
    };

    const syncGrid = () => {
      const v = Math.max(1, parseInt(gridSlider.value || '100', 10));
      if (gridOut)  gridOut.textContent = `${v} px`;
      if (gridDemo) gridDemo.style.setProperty('--g', `${v}px`);
      renderMeta();
    };

    // Init + live update on input
    if (gridSlider) {
      if (!gridSlider.value) gridSlider.value = String(this.gridSize || 100);
      gridSlider.addEventListener('input', () => {
        // Keep the numeric input in sync with the slider
        if (gridInput) gridInput.value = gridSlider.value;
        syncGrid();
      });
      // Prepopulate the corresponding number input
      if (gridInput) gridInput.value = gridSlider.value;
      syncGrid();
    }

    // Listen to manual grid number changes
    if (gridInput) {
      gridInput.addEventListener('input', () => {
        const v = Math.max(1, Math.min(400, parseInt(gridInput.value || '100', 10)));
        gridSlider.value = String(v);
        syncGrid();
      });
    }

    // Recompute rows×cols when the demo box changes size (responsive dialog)
    if (gridDemo) {
      const ro = new ResizeObserver(() => renderMeta());
      ro.observe(gridDemo);
      // remember to clean up when the modal closes
      this.__ddcGridRO?.disconnect?.();
      this.__ddcGridRO = ro;
    }

    // Quick size chips
    modal.querySelectorAll('.chip').forEach(ch => {
      ch.addEventListener('click', () => {
        modal.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed','false'));
        ch.setAttribute('aria-pressed','true');
        const w = parseInt(ch.dataset.w, 10);
        const h = parseInt(ch.dataset.h, 10);
        const sizeSel = modal.querySelector('#ddc-setting-sizeMode');
        sizeSel.value = 'fixed_custom';
      (typeof selSize !== 'undefined' && selSize)?.dispatchEvent?.(new Event('change'));
        setTimeout(() => {
          modal.querySelector('#ddc-setting-custW')?.setAttribute('value', String(w));
          modal.querySelector('#ddc-setting-custW')?.dispatchEvent?.(new Event('change'));
          const inpW = modal.querySelector('#ddc-setting-custW'); if (inpW) inpW.value = String(w);
          const inpH = modal.querySelector('#ddc-setting-custH'); if (inpH) inpH.value = String(h);
        }, 0);
      });
    });

    // Swatches (theme-friendly set; tweak as you like)
    const SWATCHES = [
      '#ffffff','#f5f7fa','#ebeff5','#121212','#1f2937','#334155',
      '#ff6b6b','#fcbf49','#ffe66d','#4ecdc4','#1a535c','#6b5b95',
      '#f6f5f5','#00aaff','#ff00ff','#00ff00',
      'var(--card-background-color)','var(--ha-card-background)','transparent',
      /* Semi‑transparent glass‑like presets */
      'rgba(255,255,255,0.4)', 'rgba(0,0,0,0.3)', 'rgba(0,128,255,0.3)',
      'rgba(255,0,128,0.3)', 'rgba(255,255,0,0.3)', 'rgba(0,255,128,0.3)'
    ];
    const buildSwatches = (containerSel, targetInputSel, targetPickerSel) => {
      const wrap = modal.querySelector(containerSel);
      const target = modal.querySelector(targetInputSel);
      const picker = modal.querySelector(targetPickerSel);
      if (!wrap || !target) return;
      wrap.innerHTML = '';
      SWATCHES.forEach((val, i) => {
        const s = document.createElement('button');
        s.type = 'button';
        s.className = 'swatch';
        s.title = val;
        s.style.background = val.startsWith('var(') ? getComputedStyle(this).getPropertyValue(val.slice(4,-1)).trim() || '#fff' : val;
        s.setAttribute('aria-pressed','false');
        s.addEventListener('click', () => {
          wrap.querySelectorAll('.swatch').forEach(x => x.setAttribute('aria-pressed','false'));
          s.setAttribute('aria-pressed','true');
          target.value = val;
          if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(val) && picker) picker.value = val;
          // Trigger input event so live preview updates for container/card background
          try { target.dispatchEvent(new Event('input', { bubbles: true, composed: true })); } catch {}
        });
        wrap.appendChild(s);
        // preselect current value if matches
        if (String(target.value).trim() === val) s.setAttribute('aria-pressed','true');
      });
    };
    buildSwatches('#ddc-swatches-containerBg', '#ddc-setting-containerBg', '#ddc-color-containerBg');
    buildSwatches('#ddc-swatches-cardBg', '#ddc-setting-cardBg', '#ddc-color-cardBg');

    // Color pickers keep in sync with text inputs
    [['#ddc-color-containerBg','#ddc-setting-containerBg'], ['#ddc-color-cardBg','#ddc-setting-cardBg']]
      .forEach(([pickSel, textSel]) => {
        const pick = modal.querySelector(pickSel), text = modal.querySelector(textSel);
        if (!pick || !text) return;
        const hex = (String(text.value||'').match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];
        if (hex) pick.value = hex;
        pick.addEventListener('input', () => { text.value = pick.value; });
        text.addEventListener('change', () => {
          const h = (String(text.value||'').match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];
          if (h) pick.value = h;
        });
      });

    const fileInput = modal.querySelector('#ddc-file-bg');
    const urlInput  = modal.querySelector('#ddc-setting-bgImg');
    const thumb     = modal.querySelector('#ddc-bg-thumb');
    const updateThumb = (src) => { if (thumb) thumb.style.backgroundImage = src ? `url(${src})` : 'none'; };

    if (urlInput?.value) updateThumb(urlInput.value);

    fileInput?.addEventListener('change', async () => {
      const file = fileInput.files?.[0]; if (!file) return;
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const objectUrl = URL.createObjectURL(file);
// Live preview using an object URL (avoids huge base64 in memory/config)
updateThumb(objectUrl);
this.style.setProperty('--ddc-bg-image', `url("${objectUrl}")`);
// Do not persist base64 by default; keep input empty unless small and non-iOS
if (urlInput) urlInput.value = '';
(async () => {
  if (!isIOS) {
    try {
      const img = new Image();
      img.src = objectUrl;
      await img.decode();
      const scale = Math.min(1920 / img.naturalWidth, 1080 / img.naturalHeight, 1);
      const w = Math.round(img.naturalWidth * scale);
      const h = Math.round(img.naturalHeight * scale);
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d', { alpha: false });
      ctx.drawImage(img, 0, 0, w, h);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
      if (dataUrl && dataUrl.length < 300000) {
        // only store if reasonably small
        if (urlInput) urlInput.value = dataUrl;
      }
    } catch (e) {
      // ignore compression errors; preview still works
    }
  }
})();
});

    modal.querySelector('#ddc-clear-bg')?.addEventListener('click', () => {
      if (urlInput) urlInput.value = '';
      updateThumb('');
      // clear config & live preview
      const { background_image, ...rest } = this._config || {};
      this._config = rest;
      this.style.setProperty('--ddc-bg-image', 'none');
      this._applyBackgroundFromConfig?.();
      this._persistThisCardConfigToStorage_?.();
    });

    // Close quality improvements
    modal.addEventListener('click', (evt) => { if (evt.target === modal) { evt.stopPropagation(); closeModal(); } });
    const onKey = (e) => { if (e.key === 'Escape') { e.stopPropagation(); closeModal(); } };
    document.addEventListener('keydown', onKey, { once: true });
    setTimeout(() => modal.querySelector('#ddc-setting-gridSize')?.focus(), 0);


    // Build extra inputs for container size mode (custom dimensions or preset list)
    try {
      const extrasDiv = modal.querySelector('#ddc-setting-sizeExtras');
      const updateSizeExtras = () => {
        if (!extrasDiv) return;
        extrasDiv.innerHTML = '';
        const modeVal = selSize?.value || 'dynamic';
        if (modeVal === 'fixed_custom') {
          // Custom width and height inputs
          const wrapW = document.createElement('label');
          wrapW.style.display = 'flex';
          wrapW.style.flexDirection = 'column';
          wrapW.style.fontSize = '.95rem';
          wrapW.style.marginBottom = '10px';
          const spanW = document.createElement('span');
          spanW.textContent = 'Custom width (px)';
          spanW.style.marginBottom = '4px';
          const inpW = document.createElement('input');
          inpW.type = 'number';
          inpW.id = 'ddc-setting-custW';
          inpW.min = '100';
          inpW.max = '10000';
          inpW.step = '10';
          inpW.style.padding = '6px';
          inpW.style.border = '1px solid var(--divider-color,rgba(0,0,0,.3))';
          inpW.style.borderRadius = '6px';
          inpW.value = String(this.containerFixedWidth ?? 800);
          wrapW.appendChild(spanW);
          wrapW.appendChild(inpW);
          const wrapH = document.createElement('label');
          wrapH.style.display = 'flex';
          wrapH.style.flexDirection = 'column';
          wrapH.style.fontSize = '.95rem';
          wrapH.style.marginBottom = '10px';
          const spanH = document.createElement('span');
          spanH.textContent = 'Custom height (px)';
          spanH.style.marginBottom = '4px';
          const inpH = document.createElement('input');
          inpH.type = 'number';
          inpH.id = 'ddc-setting-custH';
          inpH.min = '100';
          inpH.max = '10000';
          inpH.step = '10';
          inpH.style.padding = '6px';
          inpH.style.border = '1px solid var(--divider-color,rgba(0,0,0,.3))';
          inpH.style.borderRadius = '6px';
          inpH.value = String(this.containerFixedHeight ?? 600);
          wrapH.appendChild(spanH);
          wrapH.appendChild(inpH);
          extrasDiv.appendChild(wrapW);
          extrasDiv.appendChild(wrapH);
        } else if (modeVal === 'preset') {
          // Preset list select
          const wrap = document.createElement('label');
          wrap.style.display = 'flex';
          wrap.style.flexDirection = 'column';
          wrap.style.fontSize = '.95rem';
          wrap.style.marginBottom = '10px';
          const span = document.createElement('span');
          span.textContent = 'Preset size';
          span.style.marginBottom = '4px';
          const select = document.createElement('select');
          select.id = 'ddc-setting-preset';
          select.style.padding = '6px';
          select.style.border = '1px solid var(--divider-color,rgba(0,0,0,.3))';
          select.style.borderRadius = '6px';
          // Populate options from size presets
          const presets = (typeof DragAndDropCard !== 'undefined' && DragAndDropCard._sizePresets) ? DragAndDropCard._sizePresets() : [];
          presets.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.key;
            opt.textContent = `${p.label || p.key} (${p.w}×${p.h})`;
            select.appendChild(opt);
          });
          // Preselect current preset if available
          select.value = String(this.containerPreset || 'fhd');
          wrap.appendChild(span);
          wrap.appendChild(select);
          extrasDiv.appendChild(wrap);
        }
      };
      // initial call
      updateSizeExtras();
      // update when size mode changes
      selSize?.addEventListener('change', updateSizeExtras);
    } catch (err) {
      console.warn('[drag-and-drop-card] Failed to build container size extras', err);
    }

    // ===== TABS MANAGER (with icon + label mode) =====

    // read current tabs; preserve existing shape and unknown fields
    const readTabs = () => {
      const raw = this._config?.options?.tabs ?? this._config?.tabs ?? [];
      return raw.map((t) => {
        if (typeof t === 'string') return { id: t, label: t, icon: '', label_mode: 'both', __raw: { id: t, label: t } };
        return {
          id: t.id ?? t.key ?? t.label ?? 'tab',
          label: t.label ?? t.id ?? 'Tab',
          icon: t.icon ?? '',
          label_mode: t.label_mode ?? 'both', // 'icon' | 'text' | 'both' (optional)
          __raw: t                               // keep full object to avoid dropping fields
        };
      });
    };

    // write back without dropping unknown fields (merge)
    const writeTabs = async (tabs, defaultId) => {
      const out = tabs.map((t) => ({
        ...t.__raw,
        id: t.id,
        label: t.label,
        icon: t.icon || '',
        label_mode: t.label_mode || 'both'
      }));

      if (this._config?.options) {
        this._config.options = { ...(this._config.options || {}), tabs: out, default_tab: defaultId ?? (this._config.options?.default_tab) };
      } else {
        this._config.tabs = out;
        if (defaultId) this._config.default_tab = defaultId;
      }
      try { await this._persistThisCardConfigToStorage_(); } catch (e) { console.warn('[drag-and-drop-card] Could not persist tabs', e); }
      this.requestUpdate?.();
    };

    const defaultTabId = () =>
      (this._config?.options?.default_tab) || this._config?.default_tab || (readTabs()[0]?.id);

    const tabsListEl = modal.querySelector('#ddc-tabs-list');

    const renderTabs = () => {
      const tabs = readTabs();
      const def = defaultTabId();
      tabsListEl.innerHTML = '';

      if (!tabs.length) {
        const empty = document.createElement('div');
        empty.className = 'hint';
        empty.textContent = 'No tabs yet. Add one below.';
        tabsListEl.appendChild(empty);
        return;
      }

      tabs.forEach((t, idx) => {
        const row = document.createElement('div');
        row.className = 'tab-row';

        // default selector
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'ddc-default-tab';
        radio.value = t.id;
        radio.checked = (t.id === def);
        radio.title = 'Set as default tab';
        radio.addEventListener('change', async () => { await writeTabs(tabs, t.id); });

        // icon + label editors
        const nameWrap = document.createElement('div');
        nameWrap.className = 'tab-name';

        // live icon preview
        const preview = document.createElement('ha-icon');
        preview.setAttribute('icon', t.icon || 'mdi:tab');

        // icon input
        const iconInput = document.createElement('input');
        iconInput.value = t.icon || '';
        iconInput.placeholder = 'mdi:home';
        iconInput.title = 'Tab icon (mdi:...)';
        iconInput.style.width = '160px';
        iconInput.addEventListener('change', async () => {
          t.icon = iconInput.value.trim();
          preview.setAttribute('icon', t.icon || 'mdi:tab');
          tabs[idx] = t;
          await writeTabs(tabs, def);
        });

        // label input
        const nameInput = document.createElement('input');
        nameInput.value = t.label;
        nameInput.placeholder = 'Tab name';
        nameInput.style.flex = '1';
        nameInput.addEventListener('change', async () => {
          t.label = nameInput.value.trim() || t.id;
          tabs[idx] = t;
          await writeTabs(tabs, def);
        });

        const iconWrap = document.createElement('div');
        iconWrap.className = 'tab-icon-wrap';
        iconWrap.appendChild(preview);
        iconWrap.appendChild(iconInput);

        nameWrap.appendChild(iconWrap);
        nameWrap.appendChild(nameInput);

        // label mode chips (icon / text / both)
        const modes = document.createElement('div');
        modes.className = 'mode-chips';
        const mkMode = (val, text) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'chip';
          b.textContent = text;
          b.setAttribute('aria-pressed', String((t.label_mode || 'both') === val));
          b.addEventListener('click', async () => {
            modes.querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed','false'));
            b.setAttribute('aria-pressed','true');
            t.label_mode = val;              // store preference
            tabs[idx] = t;
            await writeTabs(tabs, def);
          });
          return b;
        };
        modes.appendChild(mkMode('icon', 'Icon'));
        modes.appendChild(mkMode('text', 'Text'));
        modes.appendChild(mkMode('both', 'Both'));

        // actions (delete)
        const actions = document.createElement('div');
        actions.className = 'tab-actions';
        const delBtn = document.createElement('button');
        delBtn.className = 'icon-btn danger';
        delBtn.innerHTML = '<ha-icon icon="mdi:trash-can-outline"></ha-icon>';
        delBtn.title = 'Delete tab';
        delBtn.addEventListener('click', async () => {
          const nextTabs = readTabs().filter(x => x.id !== t.id);
          let nextDefault = def;
          if (t.id === def) nextDefault = nextTabs[0]?.id;
          await writeTabs(nextTabs, nextDefault);
          try { this._reassignCardsToTab_?.(t.id, nextDefault); } catch {}
          renderTabs();
        });

        actions.appendChild(modes);
        actions.appendChild(delBtn);

        row.appendChild(radio);
        row.appendChild(nameWrap);
        row.appendChild(actions);
        tabsListEl.appendChild(row);
      });
    };
    renderTabs();

    // Add tab
    modal.querySelector('#ddc-add-tab-btn')?.addEventListener('click', async () => {
      const inp = modal.querySelector('#ddc-new-tab-name');
      const raw = (inp?.value || '').trim();
      if (!raw) return;
      const tabs = readTabs();
      // unique id
      let id = raw.replace(/\s+/g, '-').toLowerCase();
      let i = 2;
      while (tabs.some(t => t.id === id)) id = `${id}-${i++}`;
      tabs.push({ id, label: raw, icon: '', label_mode: 'both', __raw: { id, label: raw } });
      await writeTabs(tabs, defaultTabId());
      inp.value = '';
      renderTabs();
    });


    // ===== BACKGROUND IMAGE: DELETE BUTTON =====
    const clearBtn = modal.querySelector('#ddc-clear-bg');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        const urlInput  = modal.querySelector('#ddc-setting-bgImg');
        const thumb     = modal.querySelector('#ddc-bg-thumb');
        if (urlInput) urlInput.value = '';
        if (thumb) thumb.style.backgroundImage = 'none';
        // clear from config immediately
        try {
          if (this._config?.background_image) {
            const { background_image, ...rest } = this._config;
            this._config = rest;
          }
          this._applyBackgroundImageFromConfig?.();
          this._persistThisCardConfigToStorage_?.();
        } catch (e) {
          console.warn('[drag-and-drop-card] Failed to clear background image', e);
        }
      });
    }

    // ===== GRADIENT PRESETS for Container Background =====
    const GRADIENTS = [
      'linear-gradient(135deg, #1e3a8a, #0ea5e9)',
      'linear-gradient(135deg, #111827, #1f2937)',
      'linear-gradient(135deg, #0f766e, #22c55e)',
      'linear-gradient(135deg, #7c3aed, #06b6d4)',
      'linear-gradient(135deg, #f97316, #f43f5e)',
      'linear-gradient(135deg, #eab308, #22d3ee)',
      'radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)',
      'radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)',
    ];
    const buildGradients = (containerSel, targetInputSel) => {
      const wrap = modal.querySelector(containerSel);
      const target = modal.querySelector(targetInputSel);
      if (!wrap || !target) return;
      wrap.innerHTML = '';
      GRADIENTS.forEach(g => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'gradient';
        b.style.background = g;
        b.setAttribute('aria-pressed','false');
        b.title = g;
        b.addEventListener('click', () => {
          wrap.querySelectorAll('.gradient').forEach(x => x.setAttribute('aria-pressed','false'));
          b.setAttribute('aria-pressed','true');
          target.value = g;                          // write into the same input your save handler already reads
          // Live apply for preview:
          try {
            const isCard = String(targetInputSel || '').toLowerCase().includes('cardbg');
            if (isCard) {
              this.cardBackground = g;
              this.style.setProperty('--ddc-card-bg', g);
            } else {
              this.containerBackground = g;
              this.style.setProperty('--ddc-bg', g);
            }
          } catch {}
        });
        wrap.appendChild(b);
        if (String(target.value).trim() === g) b.setAttribute('aria-pressed','true');
      });
    };
    buildGradients('#ddc-gradients-containerBg', '#ddc-setting-containerBg');
    buildGradients('#ddc-gradients-cardBg',      '#ddc-setting-cardBg');

    // Live preview when manually editing background text inputs
    if (inpCBg) {
      inpCBg.addEventListener('input', () => {
        const val = (inpCBg.value || '').trim();
        try {
          this.containerBackground = val;
          this.style.setProperty('--ddc-bg', val);
        } catch {}
      });
    }
    if (inpCardBg) {
      inpCardBg.addEventListener('input', () => {
        const val = (inpCardBg.value || '').trim();
        try {
          this.cardBackground = val;
          this.style.setProperty('--ddc-card-bg', val);
        } catch {}
      });
    }


    // Remove modal helper
    const closeModal = () => {
      try { this.__ddcGridRO?.disconnect?.(); this.__ddcGridRO = null; } catch{}
      try { modal.remove(); } catch {}
      if (this.__settingsModal === modal) this.__settingsModal = null;
    };
    // Close handlers
    modal.querySelector('#ddc-settings-close')?.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); });
    modal.querySelector('#ddc-settings-cancel')?.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); });
    // Save handler
    modal.querySelector('#ddc-settings-save')?.addEventListener('click', (e) => {
      e.stopPropagation();
      // Read values
      const newSize      = selSize?.value || 'dynamic';
      // Auto-resize is only honored when the container size mode is dynamic
      const newAuto      = (newSize === 'dynamic') && !!chkAuto?.checked;
      const newGrid      = parseInt(inpGrid?.value || '0', 10);
      const newAnim      = !!chkAnim?.checked;
      const newHideHdr   = !!chkHdr?.checked;
      const newHideBar   = !!chkBar?.checked;
      const newSnap      = !!chkSnap?.checked;
      const newASave     = !!chkASave?.checked;
      const newDeb       = parseInt(inpDeb?.value || '0', 10);
      const newOrient    = selOrient?.value || 'auto';
      const newOverlap   = !!chkOverlap?.checked;
      const newCBg       = (inpCBg?.value || '').trim();
      const newCardBg    = (inpCardBg?.value || '').trim();
      const newBgImg     = (inpBgImg?.value || '').trim();
      const newDebug     = !!chkDebug?.checked;
      const newEditPin  = (inpEditPin?.value || '').trim();
      const newBgMode = selBgMode?.value || 'none';
      const newParticlesUrl = (inpParticlesUrl?.value || '').trim();
      const newParticlesPtr = !!chkParticlesPointer?.checked;
      const newYtUrl   = (inpYtUrl?.value || '').trim();
      const newYtStart = parseInt(inpYtStart?.value || '', 10);
      const newYtEnd   = parseInt(inpYtEnd?.value   || '', 10);
      const newYtMute  = !!chkYtMute?.checked;
      const newYtLoop  = !!chkYtLoop?.checked;
      const newYtSize  = (selYtSize?.value || 'cover');
      const newYtPosition = (selYtPosition?.value || 'center');
      const newYtOpacity  = rngYtOpacity ? Math.max(0, Math.min(100, parseInt(rngYtOpacity.value || '100', 10))) / 100 : 1;
      const newYtAttachment = (selYtAttachment?.value || 'scroll');

      // Card shadow toggle
      const newShadow = !!chkShadow?.checked;

      // Screen saver values
      const newScreenSaverEnabled   = !!chkScreenSaver?.checked;
      const newScreenSaverDelayMin  = parseInt(rngScreenDelay?.value || '1', 10);
      const newScreenSaverDelayMs   = (Number.isFinite(newScreenSaverDelayMin) ? newScreenSaverDelayMin : 1) * 60000;

      // hero and tabs position not exposed to user
      try {
        // Auto resize cards
        this.autoResizeCards = newAuto;

        // If turning OFF: disconnect observers & listeners
        if (!this.autoResizeCards && this.__ddcResizeObs) {
          try { this.__ddcResizeObs.disconnect(); } catch {}
          this.__ddcResizeObs = null;
          if (this.__ddcOnWinResize) {
            window.removeEventListener('resize', this.__ddcOnWinResize);
            this.__ddcOnWinResize = null;
          }
        }

        // If turning ON: attach observers & listeners (idempotent)
        if (this.autoResizeCards && !this.__ddcResizeObs) {
          this.__ddcResizeObs = new ResizeObserver(() => this._applyAutoScale?.());
          try { this.__ddcResizeObs.observe(this); } catch {}
          try { this.__ddcResizeObs.observe(this.cardContainer); } catch {}
          window.addEventListener('resize', this.__ddcOnWinResize = () => this._applyAutoScale?.());
        }

        // Start/stop any rAF scale watcher depending on mode
        if (
          this.autoResizeCards ||
          String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase() === 'auto'
        ) {
          this._startScaleWatch?.();
        } else {
          this._stopScaleWatch?.();
        }

        // Recompute once to settle layout immediately
        this._applyAutoScale?.();

        // Grid size
        if (!isNaN(newGrid) && newGrid > 0 && newGrid !== this.gridSize) {
          this.gridSize = newGrid;
          this._applyGridVars?.();
          this._resizeContainer?.();
        }
        // Apply card drop shadow
        this.cardShadowEnabled = newShadow;
        if (this.cardShadowEnabled) {
          // Use a more prominent drop shadow when enabled
          this.style.setProperty('--ddc-card-shadow', '0 8px 24px rgba(0,0,0,.35)');
        } else {
          this.style.removeProperty('--ddc-card-shadow');
        }
        // Edit mode PIN
        this.editModePin = newEditPin;
        // make sure the persisted config also carries it
        this._config = { ...(this._config || {}), edit_mode_pin: newEditPin };
        // Drag live snap
        const snapChanged = newSnap !== this.dragLiveSnap;
        this.dragLiveSnap = newSnap;
        if (snapChanged) {
          // Re-init interact on all cards so the snap modifiers take effect
          this._initInteract?.();
        }
        // Auto save
        this.autoSave = newASave;
        // Auto save debounce
        if (!isNaN(newDeb) && newDeb > 0) this.autoSaveDebounce = newDeb;
        // Container size mode
        const sizeChanged = newSize !== this.containerSizeMode;
        this.containerSizeMode = newSize;
        // Container orientation
        const orientChanged = newOrient !== this.containerPresetOrient;
        this.containerPresetOrient = newOrient;
        if (sizeChanged || orientChanged) {
          // When size or orientation changes, recalc container
          this._resizeContainer?.();
        }

        // Apply fixed custom or preset dimensions
        if (newSize === 'fixed_custom') {
          // Read custom width & height from inputs and apply immediately
          const wVal = parseInt(modal.querySelector('#ddc-setting-custW')?.value || '0', 10);
          const hVal = parseInt(modal.querySelector('#ddc-setting-custH')?.value || '0', 10);
          if (!isNaN(wVal) && wVal > 0) this.containerFixedWidth  = wVal;
          if (!isNaN(hVal) && hVal > 0) this.containerFixedHeight = hVal;
          // Recompute container size after updating custom dims
          this._resizeContainer?.();
        } else if (newSize === 'preset') {
          const presetVal = modal.querySelector('#ddc-setting-preset')?.value;
          if (presetVal) this.containerPreset = presetVal;
          // Recompute container size after updating preset
          this._resizeContainer?.();
        }
        // Disable overlap
        this.disableOverlap = newOverlap;
        // Container background
        if (newCBg) {
          this.containerBackground = newCBg;
          this.style.setProperty('--ddc-bg', this.containerBackground);
        }
        // Card background
        if (newCardBg) {
          this.cardBackground = newCardBg;
          this.style.setProperty('--ddc-card-bg', this.cardBackground);
        }
        // Background image (only src)
        // Background image (only src) — immutable update (avoids "read-only" error)
        if (newBgImg) {
          const prevBg = (this._config && this._config.background_image) || {};
          this._config = { ...this._config, background_image: { ...prevBg, src: newBgImg } };
        } else {
          const { background_image, ...rest } = this._config || {};
          this._config = rest;
        }
        // Debug
        this.debug = newDebug;
        // Animate cards
        this.animateCards = newAnim;
        // Hide HA chrome
        this.hideHaHeader  = newHideHdr;
        this.hideHaSidebar = newHideBar;
        this._applyHaChromeVisibility_?.();

        // Apply background image (if changed)
        // ---- Background image (immutable update) ----
        const prevBg = (this._config && this._config.background_image) || {};
        const rep    = selBgRepeat?.value     || 'no-repeat';
        const sz     = selBgSize?.value       || 'cover';
        const pos    = selBgPosition?.value   || 'center center';
        const att    = selBgAttachment?.value || 'scroll';
        const op     = rngBgOpacity ? Math.max(0, Math.min(100, parseInt(rngBgOpacity.value || '100', 10))) / 100 : 1;

        // ---- Background mode + dynamic configs ----
        this._config = this._config || {};
        this._config.background_mode = newBgMode;

        // keep image settings only if mode is 'image' or you’ve set a src
        if (newBgMode !== 'image' && !newBgImg) {
          const { background_image, ...rest } = this._config || {};
          this._config = rest;
        }

        // particles
        if (newBgMode === 'particles') {
          this._config.background_particles = {
            config_url: newParticlesUrl || undefined,
            pointer_events: newParticlesPtr || undefined,
          };
        } else {
          const { background_particles, ...rest } = this._config || {};
          this._config = rest;
        }

        // youtube
        if (newBgMode === 'youtube') {
          this._config.background_youtube = {
            url: newYtUrl || undefined,
            start: Number.isFinite(newYtStart) ? newYtStart : undefined,
            end:   Number.isFinite(newYtEnd)   ? newYtEnd   : undefined,
            mute:  newYtMute !== true ? newYtMute : undefined,  // defaults true
            loop:  newYtLoop !== true ? newYtLoop : undefined   // defaults true
          ,
            size:  newYtSize && newYtSize != 'cover' ? newYtSize : undefined,
            position: newYtPosition || undefined,
            attachment: (newYtAttachment && newYtAttachment !== 'scroll') ? newYtAttachment : undefined,
            opacity: (newYtOpacity != null && newYtOpacity !== 1) ? newYtOpacity : undefined
          };
        } else {
          const { background_youtube, ...rest } = this._config || {};
          this._config = rest;
        }

        // Screen saver settings
        this.screenSaverEnabled = newScreenSaverEnabled;
        this.screenSaverDelay   = newScreenSaverDelayMs;
        this._updateScreensaverSettings?.();


        if (newBgImg) {
          this._config = {
            ...this._config,
            background_image: { ...prevBg, src: newBgImg, repeat: rep, size: sz, position: pos, attachment: att, opacity: op }
          };
        } else if (prevBg.src) {
          this._config = {
            ...this._config,
            background_image: { ...prevBg, repeat: rep, size: sz, position: pos, attachment: att, opacity: op }
          };
        } else {
          const { background_image, ...rest } = this._config || {};
          this._config = rest;
        }

        // Apply immediately (preview)
        this._applyBackgroundFromConfig?.();

        // Update underlying config so changes persist in YAML/storage
        try {
          if (!this._config) this._config = {};
          this._config.grid                    = this.gridSize;
          this._config.auto_resize_cards       = !!this.autoResizeCards;
          this._config.drag_live_snap          = !!this.dragLiveSnap;
          this._config.auto_save               = !!this.autoSave;
          this._config.auto_save_debounce      = this.autoSaveDebounce;
          this._config.container_size_mode     = this.containerSizeMode;
          this._config.container_preset_orientation = this.containerPresetOrient;
          this._config.container_fixed_width   = this.containerFixedWidth;
          this._config.container_fixed_height  = this.containerFixedHeight;
          this._config.container_preset        = this.containerPreset;
          this._config.disable_overlap         = !!this.disableOverlap;
          this._config.container_background    = this.containerBackground;
          this._config.card_background         = this.cardBackground;
          // Persist card shadow setting
          this._config.card_shadow            = !!this.cardShadowEnabled;
          this._config.debug                   = !!this.debug;
          this._config.animate_cards           = !!this.animateCards;
          this._config.hide_HA_Header          = !!this.hideHaHeader;
          this._config.hide_HA_Sidebar         = !!this.hideHaSidebar;
          // Screen saver config
          this._config.screen_saver_enabled    = !!this.screenSaverEnabled;
          this._config.screen_saver_delay      = this.screenSaverDelay;
          // Background image src is already updated in this._config.background_image above
        } catch (cfgErr) {
          console.warn('[drag-and-drop-card] Failed to update config', cfgErr);
        }
        // Persist changes
        // Persist changes exactly like the Visual Editor (Storage dashboards)
        this._persistThisCardConfigToStorage_()
          .catch((e) => {
            console.warn('[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)', e);
            // Optional: toast for the user:
            // this._showToast_?.('Could not save to dashboard storage. Is this a YAML dashboard?');
          });
      } catch (err) {
        console.warn('[drag-and-drop-card] Failed to apply settings', err);
      }
      closeModal();
    });
  }

  
  /* ----------------------------- Export / Import Design ----------------------------- */


  // Put these inside the class

  /** Only the exportable knobs the user set in the UI */
  /** Only the exportable knobs the user set in the UI */
  _exportableOptions() {
    const cfg = this._config || {};

    // Normalize background objects to only defined keys (keeps the export tidy)
    const pick = (obj, keys) =>
      Object.fromEntries(keys.map(k => [k, obj?.[k]]).filter(([,v]) => v !== undefined));

    // Resolve/guess active background mode for completeness
    const bgMode =
      cfg.background_mode
      || (cfg.background_image?.src ? 'image'
          : cfg.background_youtube ? 'youtube'
          : cfg.background_particles ? 'particles'
          : 'none');

    const opt = {
      // Core
      storage_key: this.storageKey || undefined,
      grid: this.gridSize,
      drag_live_snap: !!this.dragLiveSnap,
      auto_save: !!this.autoSave,
      auto_save_debounce: this.autoSaveDebounce,
      disable_overlap: !!this.disableOverlap,
      debug: !!this.debug,
      edit_mode_pin: (this.editModePin || undefined),

      // Size & layout
      container_size_mode: this.containerSizeMode,
      container_preset_orientation: this.containerPresetOrient,
      container_fixed_width: this.containerFixedWidth ?? undefined,
      container_fixed_height: this.containerFixedHeight ?? undefined,
      container_preset: this.containerPreset,
      auto_resize_cards: !!this.autoResizeCards,

      // Appearance
      container_background: this.containerBackground,
      card_background: this.cardBackground,
      card_shadow: !!this.cardShadowEnabled,
      animate_cards: !!this.animateCards,

      // HA chrome visibility
      hide_HA_Header: !!this.hideHaHeader,
      hide_HA_Sidebar: !!this.hideHaSidebar,

      // Tabs (from the modal section)
      tabs: this.tabs,
      tabs_position: this.tabsPosition,
      default_tab: this.defaultTab,
      hide_tabs_when_single: !!this.hideTabsWhenSingle,

      // Background (image | particles | youtube | none)
      background_mode: bgMode,
      background_image: cfg.background_image
        ? pick(cfg.background_image, ['src','repeat','size','position','attachment','opacity'])
        : undefined,
      background_particles: cfg.background_particles
        ? pick(cfg.background_particles, ['config_url','pointer_events'])
        : undefined,
      background_youtube: cfg.background_youtube
        ? pick(cfg.background_youtube, [
            'url','start','end','mute','loop','size','position','attachment','opacity'
          ])
        : undefined,

      // Screen saver
      screen_saver_enabled: !!this.screenSaverEnabled,
      screen_saver_delay: this.screenSaverDelay,
    };

    // strip undefined to keep files tidy
    Object.keys(opt).forEach(k => opt[k] === undefined && delete opt[k]);
    return opt;
  }


  /** Apply options WITHOUT triggering a full rebuild */
  _applyImportedOptions(opts = {}, recalc = true) {
    if (opts && Object.prototype.hasOwnProperty.call(opts, 'storage_key')) {
    // If storage_key changed, push it into HA editor immediately
     if (this._isInHaEditorPreview()) {
       try {
         const updatedCfg = { type: 'custom:drag-and-drop-card', ...(this._config || {}) };
         this.dispatchEvent(new CustomEvent('config-changed', {
           detail: { config: updatedCfg },
           bubbles: true,
           composed: true,
         }));
       } catch {}
     }
    }

    // keep the original config around, but merge options into live props
    this._config = { ...(this._config || {}), ...opts };

    if ('storage_key' in opts)        this.storageKey = opts.storage_key || undefined;
    this._syncEditorsStorageKey();
    if ('grid' in opts)               this.gridSize = Number(opts.grid) || 10;
    if ('drag_live_snap' in opts)     this.dragLiveSnap = !!opts.drag_live_snap;
    if ('auto_save' in opts)          this.autoSave = !!opts.auto_save;
    if ('auto_save_debounce' in opts) this.autoSaveDebounce = Number(opts.auto_save_debounce) || 800;
    if ('container_background' in opts) this.containerBackground = opts.container_background ?? 'transparent';
    if ('card_background' in opts)      this.cardBackground = opts.card_background ?? 'var(--ha-card-background, var(--card-background-color))';
    if ('card_shadow' in opts)          this.cardShadowEnabled = !!opts.card_shadow;
    if ('debug' in opts)              this.debug = !!opts.debug;
    if ('disable_overlap' in opts)    this.disableOverlap = !!opts.disable_overlap;

    if ('container_size_mode' in opts)        this.containerSizeMode = opts.container_size_mode || 'dynamic';
    if ('container_fixed_width' in opts)      this.containerFixedWidth  = Number(opts.container_fixed_width)  || null;
    if ('container_fixed_height' in opts)     this.containerFixedHeight = Number(opts.container_fixed_height) || null;
    if ('container_preset' in opts)           this.containerPreset = opts.container_preset || 'fhd';
    if ('container_preset_orientation' in opts) this.containerPresetOrient = opts.container_preset_orientation || 'auto';
    
    if ('auto_resize_cards' in opts) {
      this.autoResizeCards = !!opts.auto_resize_cards;
      if ((this.autoResizeCards || String((this.containerSizeMode||this.container_size_mode||'dynamic')).toLowerCase()==='auto')) this._startScaleWatch?.(); else this._stopScaleWatch?.();
      this._applyAutoScale?.();
    }

    // Screen saver: apply imported values
    if ('screen_saver_enabled' in opts) {
      this.screenSaverEnabled = !!opts.screen_saver_enabled;
    }
    if ('screen_saver_delay' in opts) {
      const ms = Number(opts.screen_saver_delay);
      this.screenSaverDelay = Number.isFinite(ms) && ms > 0 ? ms : this.screenSaverDelay;
    }
    if ('screen_saver_enabled' in opts || 'screen_saver_delay' in opts) {
      if (typeof this._updateScreensaverSettings === 'function') this._updateScreensaverSettings();
    }



    // reflect to CSS
    this.style.setProperty('--ddc-bg', this.containerBackground);
    this.style.setProperty('--ddc-card-bg', this.cardBackground);

    // Apply card shadow based on imported options
    if (this.cardShadowEnabled) {
      // Apply a stronger drop shadow when the option is enabled
      this.style.setProperty('--ddc-card-shadow', '0 8px 24px rgba(0,0,0,.35)');
    } else {
      this.style.removeProperty('--ddc-card-shadow');
    }
    this._applyGridVars();

    if (recalc) {
      this._applyContainerSizingFromConfig(true);
      this._applyAutoScale?.();
      this._resizeContainer();
      this._updateStoreBadge?.();
      this._applyAutoScale?.();

    }
  }

  _exportDesign() {
    const wraps = Array.from(
      this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)')
    );
    const saved = wraps.map((w) => { // DDC tabs
        
      const x = parseFloat(w.getAttribute('data-x')) || 0;
      const y = parseFloat(w.getAttribute('data-y')) || 0;
      const width  = parseFloat(w.style.width)  || w.getBoundingClientRect().width;
      const height = parseFloat(w.style.height) || w.getBoundingClientRect().height;
      const z = parseInt(w.style.zIndex || '1', 10);
      const cardCfg = this._extractCardConfig(w.firstElementChild);
      const tabId = w.dataset.tabId || this.defaultTab;
        return { card: cardCfg, position:{x,y}, size:{width,height}, z, tabId };
    });

    const payload = {
      version: 2,
      options: this._exportableOptions(),
      cards: saved
    };

    // NEW: preserve card_mod (if present) as part of options so it exports with the design
    if (this._config && this._config.card_mod) {
      payload.options = payload.options || {};
      payload.options.card_mod = this._config.card_mod;
    }

    const name = `DragAndDrop_Design_${this.storageKey || 'layout'}.json`;
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type:'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    URL.revokeObjectURL(a.href);
    this._toast('Design exported.');
  }  
  
_importDesign() {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = 'application/json';

  // ---- tweak these if you like ----
  const HARD_REPLACE = true;                 // fully overwrite existing options
  const ADOPT_IMPORTED_STORAGE_KEY = false;  // keep current storage_key by default
  const KNOWN_OPT_KEYS = [
    // Core + behavior
    'grid','drag_live_snap','auto_save','auto_save_debounce',
    'debug','disable_overlap','card_mod','storage_key',
    'animate_cards','auto_resize_cards',

    // Visuals
    'container_background','card_background',

    // Size / layout
    'container_size_mode','container_fixed_width','container_fixed_height',
    'container_preset','container_preset_orientation',

    // Tabs
    'tabs','tabs_position','default_tab','hide_tabs_when_single',

    // HA chrome
    'hide_HA_Header','hide_HA_Sidebar',

    // Background modes
    'background_mode','background_image','background_particles','background_youtube',

    // Screen saver
    'screen_saver_enabled','screen_saver_delay',
  ];
  // ----------------------------------

  inp.onchange = async () => {
    const file = inp.files?.[0]; if (!file) return;
    const txt = await file.text();

    try {
      const json = JSON.parse(txt);
      const prevStorageKey = this.storageKey || this._config?.storage_key || null;

      // -------- BACK-COMPAT: synthesize tabs if missing in older exports --------
      const hasOptionsTabs = !!(json.options && Array.isArray(json.options.tabs));
      const hasCardTabIds  = Array.isArray(json.cards) && json.cards.some(c => c?.tabId || c?.tab_id);

      // Build a compatible tabs list:
      // 1) If options.tabs exist, use them.
      // 2) Else if cards have tabIds, synthesize from distinct ids.
      // 3) Else create a single default tab.
      let compatTabs = [];
      if (hasOptionsTabs) {
        compatTabs = json.options.tabs;
      } else if (hasCardTabIds) {
        const uniq = Array.from(new Set(json.cards.map(c => c?.tabId || c?.tab_id).filter(Boolean)));
        compatTabs = uniq.map(id => ({ id, label: id }));
      } else {
        compatTabs = [{ id: 'default', label: 'Layout' }];
      }

      const compatTabsPosition = (json.options?.tabs_position === 'left')
        ? 'left'
        : (this.tabsPosition || 'top');

      const compatDefaultTab =
        json.options?.default_tab
        || (compatTabs[0]?.id || 'default');

      const compatHideSingle =
        (json.options?.hide_tabs_when_single !== undefined)
          ? !!json.options.hide_tabs_when_single
          : true;
      // -------------------------------------------------------------------------

      // ---- APPLY OPTIONS (with hard-replace or merge) ----
      if (json.options) {
        const imported = { ...json.options };
        if (!ADOPT_IMPORTED_STORAGE_KEY) delete imported.storage_key;

        if (HARD_REPLACE) {
          const cfg = this._config || { type: 'custom:drag-and-drop-card' };

          // 1) remove stale option keys that aren't in the import
          for (const k of KNOWN_OPT_KEYS) {
            if (k === 'storage_key' && !ADOPT_IMPORTED_STORAGE_KEY) continue;
            if (!(k in imported) && k in cfg) delete cfg[k];
          }

          // 2) clear any previously-applied DOM styles that could linger
          try {
            if (this.cardContainer) {
              this.cardContainer.style.background = '';
              this.cardContainer.style.width = '';
              this.cardContainer.style.height = '';
            }
            this.style?.removeProperty?.('--ddc-container-bg');
            this.style?.removeProperty?.('--ddc-card-bg');
          } catch {}

          // 3) apply imported options
          this._config = { ...cfg, ...imported };
          if (!('card_mod' in imported)) delete this._config.card_mod;

          // Reflect a few toggles to instance fields used elsewhere
          if ('animate_cards' in imported) this.animateCards = !!imported.animate_cards;
          if ('auto_resize_cards' in imported) this.autoResizeCards = !!imported.auto_resize_cards;

          // Apply HA header/sidebar visibility immediately
          if ('hide_HA_Header' in imported || 'hide_HA_Sidebar' in imported) {
            try { this._applyHaChromeVisibility_?.(); } catch {}
          }

          // Apply background mode/payload immediately
          if (
            'background_mode' in imported ||
            'background_image' in imported ||
            'background_particles' in imported ||
            'background_youtube' in imported
          ) {
            try { this._applyBackgroundFromConfig?.(); } catch {}
          }


          if (ADOPT_IMPORTED_STORAGE_KEY && imported.storage_key) {
            this.storageKey = imported.storage_key;
          }

          if (this._opts) {
            this._opts = { ...this._opts, ...imported };
            for (const k of KNOWN_OPT_KEYS) {
              if (!(k in imported)) delete this._opts[k];
            }
          }

          this._applyOptionsToDom?.(this._config);
          this.requestUpdate?.();
        } else {
          this._applyImportedOptions(imported, true);
          if (imported.card_mod !== undefined) {
            this._config = this._config || {};
            this._config.card_mod = imported.card_mod;
            this.requestUpdate?.();
          }
        }
      } else if (typeof json.grid === 'number') {
        // v1 fallback
        const imported = { grid: json.grid };
        HARD_REPLACE
          ? (this._config = { ...(this._config||{}), ...imported })
          : this._applyImportedOptions(imported, true);
        this.requestUpdate?.();
      }

      // Ensure instance tab options exist even for old files (after options applied)
      if (!Array.isArray(this.tabs) || !this.tabs.length) this.tabs = compatTabs;
      if (!this.tabsPosition) this.tabsPosition = compatTabsPosition;
      if (!this.defaultTab) this.defaultTab = compatDefaultTab;
      if (this.hideTabsWhenSingle === undefined) this.hideTabsWhenSingle = compatHideSingle;
      this.rootEl?.classList?.toggle?.('ddc-tabs-left-layout', this.tabsPosition === 'left');

      // ---- PERSIST IMPORTED OPTIONS TO YAML (replace semantics) ----
      try {
        const targetKey = this._config?.storage_key || this.storageKey || null;

        // Start from what the file had (v2) or v1 fallback
        const importedOptions = json.options
          ?? (typeof json.grid === 'number' ? { grid: json.grid } : {});

        // Ensure tabs keys are present (either from file or from current instance state)
        const persistOptions = {
          ...importedOptions,
          tabs: importedOptions.tabs ?? this.tabs ?? [],
          tabs_position: importedOptions.tabs_position ?? this.tabsPosition ?? 'top',
          default_tab: importedOptions.default_tab
            ?? this.defaultTab
            ?? ((importedOptions.tabs?.[0]?.id) || (this.tabs?.[0]?.id) || 'default'),
          hide_tabs_when_single:
            importedOptions.hide_tabs_when_single ?? (this.hideTabsWhenSingle ?? true),
        };

        // Unless you want to adopt the incoming storage_key, drop it
        if (!ADOPT_IMPORTED_STORAGE_KEY) delete persistOptions.storage_key;

        if (!targetKey) {
          console.warn('[ddc:import] No storage_key on this card; aborting YAML persist.');
        } else {
          const result = await this._persistOptionsToYaml?.(persistOptions, {
            forceTargetKey: String(targetKey),
            noDownload: true,
            replace: true,
            wipeUnknownKeys: true,
          });
          const yamlOk = !!(result && result.yamlSaved);
          console.debug?.('[ddc:import] YAML persist result:', yamlOk);
        }

        // SAFETY NET: push tabs into the live card config (so the UI editor/YAML reflects it immediately)
        try {
          const cfg = { type: 'custom:drag-and-drop-card', ...(this._config || {}) };
          cfg.tabs = persistOptions.tabs;
          cfg.tabs_position = persistOptions.tabs_position;
          cfg.default_tab = persistOptions.default_tab;
          cfg.hide_tabs_when_single = !!persistOptions.hide_tabs_when_single;

          this.dispatchEvent(new CustomEvent('config-changed', {
            detail: { config: cfg },
            bubbles: true,
            composed: true,
          }));
        } catch {}
      } catch (e) {
        console.warn('[ddc:import] YAML persist failed:', e);
      }

      // ---- BUILD CARDS ----
      this.cardContainer.innerHTML = '';
      if (Array.isArray(json.cards) && json.cards.length) {
        for (const conf of json.cards) {
          const x = conf.position?.x || 0;
          const y = conf.position?.y || 0;
          const w = conf.size?.width  || 140;
          const h = conf.size?.height || 100;
          const z = conf.z;
          const tabId = this._normalizeTabId(conf.tabId || conf.tab_id || this.defaultTab);

          if (!conf?.card || (typeof conf.card === 'object' && !Object.keys(conf.card).length)) {
            // placeholder still respects tab
            const p = this._makePlaceholderAt(x, y, w, h);
            p.dataset.tabId = tabId;
            this.cardContainer.appendChild(p);
            continue;
          }

          const el = await this._createCard(conf.card);
          const wrap = this._makeWrapper(el);
          wrap.dataset.tabId = tabId;
          this._setCardPosition(wrap, x, y);
          wrap.style.width  = `${w}px`;
          wrap.style.height = `${h}px`;
          if (z != null) wrap.style.zIndex = String(z);
          this.cardContainer.appendChild(wrap);

          try { this._rebuildOnce(wrap.firstElementChild); } catch {}
          this._initCardInteract(wrap);
        }
      } else {
        this._showEmptyPlaceholder();
        this._applyAutoScale?.();
      }

      // apply container sizing/appearance and refresh tabs UI now that cards exist
      this._applyOptionsToDom?.(this._config);
      this._resizeContainer();
      try {
        this.rootEl?.classList?.toggle?.('ddc-tabs-left-layout', this.tabsPosition === 'left');
        this._renderTabs?.();
        this._applyActiveTab?.();
      } catch {}

      // ---- SAVE LAYOUT ----
      try {
        if (this._saveTimer) clearTimeout(this._saveTimer);
        await this._saveLayout(true);  // NOTE: ensure _saveLayout returns {…, tabId} per card
        this._toast?.('Design imported & saved. Reloading...');
        window.location.reload();
      } catch (e) {
        console.warn('[ddc:import] saveLayout failed', e);
        this._markDirty?.('import');
        this._toast?.('Design imported — click Apply to save.');
      }
    } catch (e) {
      console.error('Import failed', e);
      this._toast?.('Import failed — invalid file.');
    }
  };

  inp.click();
}


  
  // ===== DDC: Lovelace persistence helpers (import options -> stored YAML) =====
  _getLovelace() {
    // Walk up from this element through shadow roots
    let hop = 0, host = this;
    while (host && hop++ < 20) {
      const root = host.getRootNode?.();
      const rHost = root?.host;
      if (rHost?.tagName === 'HUI-ROOT') return rHost.lovelace;
      host = rHost || host.parentElement;
    }
    // Breadth-first fallback
    const seen = new Set(), q = [document];
    while (q.length) {
      const n = q.shift();
      if (!n || seen.has(n)) continue;
      seen.add(n);
      if (n.host?.tagName === 'HUI-ROOT') return n.host.lovelace;
      if (n.tagName === 'HUI-ROOT') return n.lovelace;
      if (n.shadowRoot) q.push(n.shadowRoot);
      if (n.children) for (const c of n.children) q.push(c);
    }
    return undefined;
  }

  _scanDdcCards(cfg) {
    const hits = []; // { view:number, path:string[], card:object }
    const push = (view, path, obj) => {
      if (obj?.type === 'custom:drag-and-drop-card') hits.push({ view, path: [...path], card: obj });
    };
    const visit = (node, viewIdx, path) => {
      if (!node) return;
      if (Array.isArray(node)) { node.forEach((n, i) => visit(n, viewIdx, path.concat(i))); return; }
      if (typeof node !== 'object') return;

      if ('type' in node) push(viewIdx, path, node);

      for (const [k, v] of Object.entries(node)) {
        if (k === 'views' && Array.isArray(v)) v.forEach((vv, i) => visit(vv, i, ['views', i]));
        else if (Array.isArray(v)) visit(v, viewIdx, path.concat(k));
        else if (v && typeof v === 'object') visit(v, viewIdx, path.concat(k));
      }
    };
    visit(cfg, -1, []);
    return hits;
  }

  async _persistOptionsToYaml(opts, { prevKey = null, patchAllInCurrentViewIfNoKey = false } = {}) {
    try {
      const ll = this._getLovelace();
      if (!ll) { console.debug('[ddc:import] persist: no lovelace root'); return false; }
      if (typeof ll.saveConfig !== 'function') { console.debug('[ddc:import] persist: dashboard not in Storage mode'); return false; }

      // Deep clone to avoid mutating live config
      const cfg = JSON.parse(JSON.stringify(ll.config));
      const hits = this._scanDdcCards(cfg);
      const curView = ll.current_view ?? 0;

      console.debug('[ddc:import] persist: found DDC cards', hits.map(h => ({ view: h.view, path: h.path.join('.'), storage_key: h.card.storage_key || null })));

      const newKey = opts?.storage_key ?? null;
      const keys = [];
      if (prevKey) keys.push(prevKey);
      if (newKey) keys.push(newKey);
      if (this.storageKey) keys.push(this.storageKey);
      if (this._config?.storage_key) keys.push(this._config.storage_key);

      // Prefer exact key matches (either previous or new)
      let targets = hits.filter(h => h.card.storage_key && keys.includes(h.card.storage_key));

      // If no exact match: if only one DDC in current view, target it
       if (!targets.length) {
        const inCur = hits.filter(h => h.view === curView);
         if (inCur.length === 1) targets = inCur;   // safe only if exactly one
         // else: no target → abort instead of touching multiple cards
       }

      // As a last resort, if there is only one DDC overall, patch it
      if (!targets.length && hits.length === 1) targets = hits;

      if (!targets.length) {
        console.debug('[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.', { prevKey, newKey, storageKey: this.storageKey });
        return false;
      }

       // Build a patch for options ONLY — never stamp a global storage_key into multiple cards
       const basePatch = { type: 'custom:drag-and-drop-card', ...opts };
       // Remove any incoming storage_key so it doesn't overwrite per-card keys accidentally
       if ('storage_key' in basePatch) delete basePatch.storage_key;
       if ('storageKey' in basePatch)  delete basePatch.storageKey;
 
       for (const t of targets) {
         // Resolve the YAML object to patch
         let ref = cfg;
         for (const seg of t.path) ref = ref[seg];
 
         // Remember the card’s existing key (support legacy camelCase & nested)
         const existingKey =
           ref?.storage_key ?? ref?.storageKey ?? ref?.options?.storage_key ?? ref?.options?.storageKey ?? null;
 
         // Decide if this specific card is being renamed (only when prevKey→newKey and it matches)
         const shouldRename = !!(prevKey && newKey && existingKey === prevKey && newKey !== prevKey);
 
         // Apply options WITHOUT a key
         Object.assign(ref, basePatch);
 
         // Restore / set the right key per-card
         if (shouldRename) {
           ref.storage_key = String(newKey);
         } else if (existingKey) {
           ref.storage_key = String(existingKey);
         }
         // Clean up legacy field
         if ('storageKey' in ref) delete ref.storageKey;
       }

      console.debug('[ddc:import] persist → saving', { patched: targets.length, keysTried: keys, patch });
      await ll.saveConfig(cfg);
      return true;
    } catch (e) {
      console.warn('[ddc:import] persist error', e);
      return false;
    }
  }
/* ----------------------------- Save / load ----------------------------- */
  _queueSave(reason='auto') {
    // Always mark dirty so Apply becomes enabled
    this._markDirty(reason);
    // only queue save when autosave is enabled, not loading, and in edit mode
    if (!this.autoSave) return;
    // skip saving while the layout is still loading
    if (this._loading) return;
    // respect the user expectation that saving should only happen in edit mode
    if (!this.editMode) return;
    this._dbgPush('autosave', 'Queued', { reason, debounce: this.autoSaveDebounce });
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => this._saveLayout(true), this.autoSaveDebounce);
  }

  async _saveLayout(silent = true) {
    const wraps = Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'));
    const saved = wraps.map((w)=>{
      const x = parseFloat(w.getAttribute('data-x')) || 0;
      const y = parseFloat(w.getAttribute('data-y')) || 0;
      const width  = parseFloat(w.style.width)  || w.getBoundingClientRect().width;
      const height = parseFloat(w.style.height) || w.getBoundingClientRect().height;
      const z = parseInt(w.style.zIndex || '1', 10);
      const cardCfg = this._extractCardConfig(w.firstElementChild);
      const tabId = w.dataset.tabId || this.defaultTab;
        return { card: cardCfg, position:{x,y}, size:{width,height}, z, tabId };
    });
    const payload = {
       version: 2,
       options: this._exportableOptions(),
       cards: saved
     };

    try { localStorage.setItem(`ddc_local_${this.storageKey || 'default'}`, JSON.stringify(payload)); } catch {}

    if (!this.storageKey) { if (!silent) this._toast('Saved locally (no storage_key set).');
      this.__dirty = false; this._updateApplyBtn();
      return; }

    try {
      await this._saveLayoutToBackend(this.storageKey, payload);
      if (!silent) this._toast('Layout saved.');
      this.__dirty = false; this._updateApplyBtn();
    } catch (e) {
      console.error('Backend save failed', e);
      this._dbgPush('save', 'Backend save failed', { error: String(e) });
      if (!silent) this._toast('Backend save failed — kept local copy.');
    }
  }

  async _probeBackend() {
    this._backendOK = false;
    const t0 = performance.now();
    try {
      this._dbgPush('probe', 'GET /api/dragdrop_storage (list keys)');
      const r = await this.hass.callApi('get', 'dragdrop_storage');
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('probe', `OK (${ms} ms)`, r);
      this._backendOK = !!r;
    } catch (e) {
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('probe', `FAILED (${ms} ms)`, { error: String(e) });
      this._backendOK = false;
    }
    this._updateStoreBadge();
  }

  async _loadLayoutFromBackend(key) {
    const url = `dragdrop_storage/${encodeURIComponent(key)}`;
    const t0 = performance.now();
    try {
      this._dbgPush('load', `GET /api/${url}`);
      const data = await this.hass.callApi('get', url);
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('load', `OK (${ms} ms)`, { bytes: JSON.stringify(data||'').length });
      return data;
    } catch (e) {
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('load', `FAILED (${ms} ms)`, { error: String(e) });
      return null;
    }
  }

  async _saveLayoutToBackend(key, data) {
    const url = `dragdrop_storage/${encodeURIComponent(key)}`;
    const size = JSON.stringify(data).length;
    const t0 = performance.now();
    try {
      this._dbgPush('save', `POST /api/${url}`, { bytes: size });
      const res = await this.hass.callApi('post', url, data);
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('save', `OK (${ms} ms)`, res);
      return res;
    } catch (e) {
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('save', `FAILED (${ms} ms)`, { error: String(e), bytes: size });
      throw e;
    }
  }
  async _saveOptionsToBackend(key, newOptions) {
    try {
      const cur = await this._loadLayoutFromBackend(key);
      const merged = {
        version: 2,
        ...(cur || {}),
        options: newOptions || this._exportableOptions?.() || {}
      };
      // Preserve cards array if present
      if (cur && Array.isArray(cur.cards)) merged.cards = cur.cards;
      await this._saveLayoutToBackend(key, merged);
      return true;
    } catch (e) {
      console.warn('[ddc] saveOptionsToBackend failed', e);
      return false;
    }
  }


  _updateStoreBadge() {
    const el = this.storeBadge; if (!el) return;
    const usingHost = this._backendOK && !!this.storageKey;
    el.textContent = usingHost ? 'storage: backend - OK' : 'storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration';
    el.style.background = usingHost ? 'rgba(76,175,80,.15)' : 'rgba(255,193,7,.15)';
    el.style.borderColor = usingHost ? 'rgba(76,175,80,.45)' : 'rgba(255,193,7,.45)';
  }

  /* ----------------------------- Utilities ----------------------------- */

  /* =========================== Screen saver =========================== */

  /**
   * Ensure styles for the screen saver overlay are injected once into
   * the component's shadow root. This creates a dark overlay with a
   * centered digital clock and date. The overlay is hidden until
   * activated.
   */
  _ensureScreenSaverStyles() {
    if (this.shadowRoot?.querySelector('#ddc-screensaver-styles')) return;
    try {
      const style = document.createElement('style');
      style.id = 'ddc-screensaver-styles';
      style.textContent = `
        .screensaver-overlay {
          /* Cover the entire viewport, not just the card container */
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.92);
          color: #fff;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s ease-in;
          z-index: 100000; /* extremely high to overlay everything */
        }
        .screensaver-overlay.active {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.3s ease-out;
        }
        /* Wrapper to center content nicely in the viewport */
        .screensaver-overlay .screensaver-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .screensaver-overlay .screensaver-clock {
          font-size: 5rem;
          font-family: monospace;
          letter-spacing: 0.1em;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-align: center;
          text-shadow: 0 0 10px rgba(255,255,255,0.8);
        }
        .screensaver-overlay .screensaver-date {
          font-size: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 400;
          margin-top: 0.8rem;
          text-align: center;
          opacity: 0.9;
        }

        /* Calendar styles */
        .screensaver-overlay .screensaver-calendar {
          margin-top: 1.5rem;
          width: 100%;
          max-width: 600px;
          color: #fff;
        }
        .screensaver-overlay .screensaver-calendar .calendar-header {
          font-size: 2.2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 0.7rem;
          padding-bottom: 0.3rem;
          border-bottom: 2px solid rgba(255,255,255,0.2);
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.3rem;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div {
          text-align: center;
          padding: 0.35rem 0;
          font-size: 1.0rem;
          border-radius: 4px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.header {
          font-weight: 600;
          opacity: 0.8;
          text-transform: uppercase;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.today {
          background: rgba(255, 255, 255, 0.3);
          font-weight: 700;
          color: #000;
          border-radius: 6px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.other-month {
          opacity: 0.4;
        }

        .screensaver-overlay .screensaver-calendar .calendar-grid div.weekend {
          /* Slightly accent weekends */
          color: #ffb074;
        }
      `;
      this.shadowRoot.appendChild(style);
    } catch (e) {
      console.warn('[drag-and-drop-card] Failed to inject screensaver styles', e);
    }
  }

  /**
   * Ensure global styles for the screen saver overlay are injected into the
   * document <head>. These styles are necessary when the screensaver
   * overlay is attached to document.body to ensure proper layout and
   * positioning outside of any transformed containers. Styles are only
   * injected once per page.
   */
  _ensureScreenSaverGlobalStyles() {
    if (document.head.querySelector('#ddc-screensaver-global-styles')) return;
    try {
      const style = document.createElement('style');
      style.id = 'ddc-screensaver-global-styles';
      style.textContent = `
        .screensaver-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.92);
          color: #fff;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s ease-in;
          z-index: 100000;
        }
        .screensaver-overlay.active {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.3s ease-out;
        }
        .screensaver-overlay .screensaver-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .screensaver-overlay .screensaver-clock {
          font-size: 5rem;
          font-family: monospace;
          letter-spacing: 0.1em;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-align: center;
          text-shadow: 0 0 10px rgba(255,255,255,0.8);
        }
        .screensaver-overlay .screensaver-date {
          font-size: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 400;
          margin-top: 0.8rem;
          text-align: center;
          opacity: 0.9;
        }
        .screensaver-overlay .screensaver-calendar {
          margin-top: 1.5rem;
          width: 100%;
          max-width: 600px;
          color: #fff;
        }
        .screensaver-overlay .screensaver-calendar .calendar-header {
          font-size: 2.2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 0.7rem;
          padding-bottom: 0.3rem;
          border-bottom: 2px solid rgba(255,255,255,0.2);
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.3rem;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div {
          text-align: center;
          padding: 0.35rem 0;
          font-size: 1.0rem;
          border-radius: 4px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.header {
          font-weight: 600;
          opacity: 0.8;
          text-transform: uppercase;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.today {
          background: rgba(255, 255, 255, 0.3);
          font-weight: 700;
          color: #000;
          border-radius: 6px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.other-month {
          opacity: 0.4;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.weekend {
          color: #ffb074;
        }
      `;
      document.head.appendChild(style);
    } catch (e) {
      console.warn('[drag-and-drop-card] Failed to inject global screensaver styles', e);
    }
  }

  /**
   * Create the screensaver overlay element if it does not already
   * exist. The overlay is appended to the card container and kept
   * hidden until activated.
   */
  _ensureScreenSaverOverlay() {
    // Always ensure global screensaver styles are present when overlay is attached to document.body
    this._ensureScreenSaverGlobalStyles();

    // Determine a unique id for this overlay to avoid collisions if multiple cards exist.
    if (!this._screenSaverOverlayId) {
      const baseId = this.config?.id || `ddc_${Math.random().toString(36).slice(2)}`;
      this._screenSaverOverlayId = `ddc-screensaver-overlay-${baseId}`;
    }
    const desiredId = this._screenSaverOverlayId;

    // If overlay already exists and is attached to document.body, nothing to do
    if (this.screenSaverOverlay && this.screenSaverOverlay.parentNode === document.body) {
      return;
    }

    // If an overlay exists but was removed from the DOM (e.g. during rebuild), reattach it to document.body
    if (this.screenSaverOverlay && !this.screenSaverOverlay.parentNode) {
      document.body.appendChild(this.screenSaverOverlay);
      return;
    }

    // Otherwise create a fresh overlay
    const overlay = document.createElement('div');
    overlay.className = 'screensaver-overlay';
    overlay.id = desiredId;
    overlay.innerHTML = `
      <div class="screensaver-content" id="${desiredId}-content">
        <div class="screensaver-clock" id="${desiredId}-clock"></div>
        <div class="screensaver-date" id="${desiredId}-date"></div>
        <div class="screensaver-calendar" id="${desiredId}-calendar"></div>
      </div>
    `;
    // exit screensaver on click/touch/key
    overlay.addEventListener('click', () => this._deactivateScreenSaver());
    overlay.addEventListener('keydown', () => this._deactivateScreenSaver());
    this.screenSaverOverlay = overlay;
    document.body.appendChild(overlay);
  }

  /**
   * Attach listeners for user activity that should reset the idle
   * timer. Listeners are added only once and removed in
   * disconnectedCallback().
   */
  _attachScreensaverListeners() {
    if (this._screensaverActivityHandler) return;
    const handler = () => this._resetScreensaverTimer();
    this._screensaverActivityHandler = handler;
    // Include a broader set of events to detect any user activity (mouse, pointer, scroll, touch)
    this._screensaverEvents = [
      'mousemove',
      'mousedown',
      'click',
      'keydown',
      'wheel',
      'scroll',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'pointerdown',
      'pointermove',
      'pointerup',
      'pointercancel'
    ];
    // Attach listeners to the document so any user activity inside or outside the card
    // resets the timer. Use capture phase to ensure early invocation.
    this._screensaverEvents.forEach(ev => {
      document.addEventListener(ev, handler, true);
    });
  }

  /**
   * Reset the screensaver idle timer. If the screensaver is
   * currently active it will be deactivated. A new timeout is
   * scheduled using the current delay. If the screensaver is
   * disabled, no timer will be scheduled.
   */
  _resetScreensaverTimer() {
    // Always clear any existing timer
    if (this._screensaverTimer) {
      clearTimeout(this._screensaverTimer);
      this._screensaverTimer = null;
    }
    // Evaluate whether the screensaver should be used in the current context
    if (!this._shouldUseScreensaver()) {
      // If a screensaver is currently active but conditions no longer allow it, hide it
      if (this.screensaverActive) {
        this._deactivateScreenSaver();
      }
      return;
    }
    // Hide screensaver if active before scheduling a new one
    if (this.screensaverActive) {
      this._deactivateScreenSaver();
    }
    const delay = Number(this.screenSaverDelay) || (5 * 60000);
    this._screensaverTimer = setTimeout(() => {
      this._activateScreenSaver();
    }, delay);
  }

  /**
   * Activate the screensaver overlay. Creates the overlay if
   * necessary, updates the time immediately, and starts a clock
   * update interval. Sets the overlay to active so CSS transitions
   * apply.
   */
  _activateScreenSaver() {
    // Only activate when conditions allow the screensaver (enabled, not editing, not in HA editor, and attached)
    if (!this._shouldUseScreensaver()) return;
    this._ensureScreenSaverOverlay();
    if (!this.screenSaverOverlay) return;
    this.screensaverActive = true;
    this.screenSaverOverlay.classList.add('active');
    // Hide the tabs bar while screensaver is active
    try {
      if (this.tabsBar) {
        // Save current display property to restore later
        this.__savedTabsDisplay = this.tabsBar.style.display;
        this.tabsBar.style.display = 'none';
      }
    } catch {}
    // update immediately
    this._updateScreenSaverClock();
    // update every second
    if (this._clockInterval) clearInterval(this._clockInterval);
    this._clockInterval = setInterval(() => this._updateScreenSaverClock(), 1000);
  }

  /**
   * Deactivate the screensaver overlay, clear clock interval and
   * schedule a new idle timer if appropriate.
   */
  _deactivateScreenSaver() {
    if (!this.screensaverActive) return;
    this.screensaverActive = false;
    if (this.screenSaverOverlay) this.screenSaverOverlay.classList.remove('active');
    if (this._clockInterval) {
      clearInterval(this._clockInterval);
      this._clockInterval = null;
    }
    // Restore tabs bar when screensaver deactivates
    try {
      if (this.tabsBar) {
        if (this.__savedTabsDisplay != null) {
          this.tabsBar.style.display = this.__savedTabsDisplay;
        } else {
          this.tabsBar.style.display = '';
        }
      }
    } catch {}
    // When user interacts, restart the timer to count idle time again
    this._resetScreensaverTimer();
  }

  /**
   * Update the clock and date displayed on the screensaver overlay.
   * Uses the user's locale for formatting time and date.
   */
  _updateScreenSaverClock() {
    const overlay = this.screenSaverOverlay;
    const clockEl = overlay?.querySelector('.screensaver-clock');
    const dateEl  = overlay?.querySelector('.screensaver-date');
    const now = new Date();
    if (clockEl) {
      clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    if (dateEl) {
      dateEl.textContent = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    // Update calendar as well
    try {
      this._updateScreenSaverCalendar();
    } catch {}
  }

  /**
   * Update the monthly calendar displayed on the screensaver overlay. Builds
   * a grid for the current month with weekday headers, filling leading and
   * trailing cells from the previous and next months. Highlights today.
   */
  _updateScreenSaverCalendar() {
    const calEl = this.screenSaverOverlay?.querySelector('.screensaver-calendar');
    if (!calEl) return;
    const now = new Date();
    const locale = undefined; // use default locale
    const year = now.getFullYear();
    const month = now.getMonth();
    // Month name
    const monthName = now.toLocaleDateString(locale, { month: 'long' });
    // Day names (Sunday first per Date API)
    const dayNames = [];
    // Use a known week starting on Sunday (1970-01-04 is a Sunday) to generate localised day names
    for (let i = 0; i < 7; i++) {
      const d = new Date(1970, 0, 4 + i);
      dayNames.push(d.toLocaleDateString(locale, { weekday: 'short' }));
    }
    // Determine first day of current month (0=Sunday)
    const firstDay = new Date(year, month, 1).getDay();
    // Number of days in current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // Number of days in previous month
    const prevMonthDays = new Date(year, month, 0).getDate();
    // Build weeks array of 42 cells (6 weeks * 7 days)
    const cells = [];
    // Leading days from previous month
    for (let i = 0; i < firstDay; i++) {
      cells.push({ day: prevMonthDays - (firstDay - 1) + i, other: true });
    }
    // Days of current month
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = d === now.getDate();
      cells.push({ day: d, today: isToday, other: false });
    }
    // Trailing days from next month
    while (cells.length < 42) {
      const nextDay = cells.length - firstDay - daysInMonth + 1;
      cells.push({ day: nextDay, other: true });
    }
    // Build HTML
    let html = '';
    // Header
    html += `<div class="calendar-header">${monthName} ${year}</div>`;
    // Grid container
    html += '<div class="calendar-grid">';
    // Day names header
    for (let i = 0; i < 7; i++) {
      html += `<div class="header">${dayNames[i]}</div>`;
    }
    // Day cells
    cells.forEach((cell, idx) => {
      const classes = [];
      if (cell.other) classes.push('other-month');
      if (cell.today) classes.push('today');
      // Highlight weekends
      const weekDayIndex = idx % 7;
      if (weekDayIndex === 0 || weekDayIndex === 6) classes.push('weekend');
      html += `<div class="${classes.join(' ')}">${cell.day}</div>`;
    });
    html += '</div>';
    calEl.innerHTML = html;
  }

  /**
   * Apply current screensaver settings. When enabled, attach
   * listeners and schedule or reset the idle timer. When disabled,
   * clear timers and hide the overlay.
   */
  _updateScreensaverSettings() {
    // ensure overlay exists if enabling
    if (this.screenSaverEnabled) {
      this._ensureScreenSaverOverlay();
      this._attachScreensaverListeners();
      // immediately reset timer
      this._resetScreensaverTimer();
    } else {
      // disable: remove timer and hide overlay
      if (this._screensaverTimer) {
        clearTimeout(this._screensaverTimer);
        this._screensaverTimer = null;
      }
      if (this.screensaverActive) {
        this._deactivateScreenSaver();
      }
    }
  }

  /**
   * Determine if the screensaver should be used based on current state.
   * It must be enabled, the card must not be in edit mode, not inside
   * the Home Assistant editor preview, and still be attached to the DOM.
   * @returns {boolean}
   */
  _shouldUseScreensaver() {
    try {
      // screenSaverEnabled controls the overall feature
      if (!this.screenSaverEnabled) return false;
      // Do not show while editing in drag-and-drop card
      if (this.editMode) return false;
      // Do not show while in HA editor preview
      if (typeof this._isInHaEditorPreview === 'function' && this._isInHaEditorPreview()) return false;
      // Only show when the card is currently in the DOM (on its dashboard page)
      if (!this.isConnected) return false;
    } catch {
      return false;
    }
    return true;
  }
  _toast(message) {
    const ev = new Event('hass-notification');
    ev.detail = { message };
    window.dispatchEvent(ev);
  }
  _huiRoot() {
    try {
      const ha   = document.querySelector('home-assistant');
      const main = ha?.shadowRoot?.querySelector('home-assistant-main');
      const drawer = main?.shadowRoot?.querySelector('ha-drawer') || main;
      const ppr = drawer?.shadowRoot?.querySelector('partial-panel-resolver') || drawer;
      const panel = ppr?.shadowRoot?.querySelector('ha-panel-lovelace') || drawer?.shadowRoot?.querySelector('ha-panel-lovelace');
      return panel?.shadowRoot?.querySelector('hui-root') || null;
    } catch { return null; }
  }
  getCardSize(){ return 3; }
}

if (!customElements.get('drag-and-drop-card')) {

  Object.assign(DragAndDropCard.prototype, {
    /* === GRID SELECT PATCH START (hooks & builder) === */
    _updateGridButtonsVisibility() {
      const inEdit = !!this.editMode;
      const grid = Number(this._config?.grid ?? this._options?.grid ?? 10);
      // Show the selectable overlay when the grid size is reasonably large.  The
      // original threshold of 20px resulted in the overlay never activating
      // for most default configurations (typically 10px).  Lower the threshold
      // so that any grid size above 10px will enable the drag‑select overlay.
      const bigEnough = grid >= 10;
      const cont = this.cardContainer;
      // When not in edit mode or the grid is too small, destroy the overlay
      // and fall back to the traditional dotted grid lines (grid-on class).
      if (!inEdit || !bigEnough) {
        this._destroyGridCanvas();
        // restore underlying grid lines only when editing
        if (cont) cont.classList.toggle('grid-on', inEdit);
        return;
      }
      // In edit mode with a sufficiently large grid, build or update the
      // selection overlay.  Hide the underlying CSS grid lines to avoid
      // misaligned double grids.
      this._buildOrUpdateGridCanvas();
      if (cont) cont.classList.remove('grid-on');
    },

    _requestGridButtonsUpdateSoon() {
      clearTimeout(this._gridLayoutT);
      this._gridLayoutT = setTimeout(() => this._updateGridButtonsVisibility(), 50);
    },

    _buildOrUpdateGridCanvas() {
      const container = this.cardContainer;
      if (!container || !container.isConnected) return;

      const gridSize = Number(this._config?.grid ?? this._options?.grid ?? 10);
      this._gridCellSize = gridSize;

      if (!this._gridCanvas) {
        const c = document.createElement('canvas');
        c.className = 'ddc-grid-canvas';
        // behind cards: insert as first child
        container.insertBefore(c, container.firstChild || null);
        this._gridCanvas = c;
        this._gridCtx = c.getContext('2d');

        c.addEventListener('pointerdown', (ev)=>this._onGridPointerDown(ev), { passive: true });
        c.addEventListener('pointermove', (ev)=>this._onGridPointerMove(ev), { passive: true });
        c.addEventListener('pointerup',   (ev)=>this._onGridPointerUp(ev),   { passive: true });
        c.addEventListener('pointercancel', (ev)=>this._onGridPointerCancel(ev), { passive: true });
        c.addEventListener('lostpointercapture', (ev)=>this._onGridPointerCancel(ev), { passive: true });
      }

      // size canvas to container (retina-aware).  When the card
      // container is scaled (auto-resize in dynamic mode), its
      // boundingClientRect returns the *visual* size (already
      // multiplied by the scale factor).  If we use that width
      // directly as the canvas size, the canvas will be scaled a
      // second time by the container’s transform.  This results in the
      // selectable overlay being too large and misaligned.  Instead,
      // compute the unscaled width/height by dividing by the current
      // container scale.  The canvas is then sized to the unscaled
      // dimensions; after the parent’s transform applies, the canvas
      // expands to the correct visual size.
      const rect = container.getBoundingClientRect();
      const { sx, sy } = this._getContainerScale_();
      // guard against invalid scale values (e.g., 0 or NaN)
      const invSX = sx && isFinite(sx) ? (1 / sx) : 1;
      const invSY = sy && isFinite(sy) ? (1 / sy) : 1;
      const unscaledW = rect.width  * invSX;
      const unscaledH = rect.height * invSY;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      // Assign the canvas buffer dimensions using the unscaled size
      this._gridCanvas.width  = Math.max(1, Math.round(unscaledW * dpr));
      this._gridCanvas.height = Math.max(1, Math.round(unscaledH * dpr));
      // Set the CSS size to the unscaled dimensions so that after
      // scaling the canvas fills the visual space exactly
      this._gridCanvas.style.width  = unscaledW + 'px';
      this._gridCanvas.style.height = unscaledH + 'px';

      // Compute the number of columns/rows based on the unscaled width.
      // Dividing by the grid size in design units ensures that the
      // overlay grid matches the underlying design grid regardless of
      // scaling.  Use Math.ceil here so that partial cells at the
      // right/bottom edges are included, preventing gaps when the
      // canvas size is not an exact multiple of the grid size.
      this._gridCols = Math.max(1, Math.ceil(unscaledW  / gridSize));
      this._gridRows = Math.max(1, Math.ceil(unscaledH / gridSize));

      // glass tile for full cell
      this._buildGridTile_(gridSize, dpr);
      this._markGridDirty();
    },

    _destroyGridCanvas() {
      cancelAnimationFrame(this._gridRAF);
      this._gridRAF = 0;
      if (this._gridCanvas?.parentElement) this._gridCanvas.parentElement.removeChild(this._gridCanvas);
      this._gridCanvas = null;
      this._gridCtx = null;
      this._gridTile = null;
      this._gridDown = false;
      this._gridHoverCol = this._gridHoverRow = -1;
    },
    /* === GRID SELECT PATCH END (hooks & builder) === */

    /* === GRID SELECT PATCH START (rendering) === */
    // Draw the full grid cell (no inner padding/gap) so visuals match actual grid cells
    _buildGridTile_(gridSize, dpr) {

      gridSize = gridSize / 2;
      
      const r = Math.min(10, gridSize * 0.25);
      const tw = Math.max(1, Math.round(gridSize * dpr));
      const th = tw;

      const off = document.createElement('canvas');
      off.width = tw;
      off.height = th;
      const ctx = off.getContext('2d');
      ctx.scale(dpr, dpr);

      const x = 0, y = 0, w = gridSize, h = gridSize;
      ctx.clearRect(0, 0, tw, th);
      ctx.beginPath();
      const rr = Math.min(r, w/2, h/2);
      ctx.moveTo(x+rr, y);
      ctx.arcTo(x+w, y, x+w, y+h, rr);
      ctx.arcTo(x+w, y+h, x, y+h, rr);
      ctx.arcTo(x, y+h, x, y, rr);
      ctx.arcTo(x, y, x+w, y, rr);
      ctx.closePath();

      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      this._gridTile = off;
    },

    _markGridDirty() {
      if (this._gridDirty) return;
      this._gridDirty = true;
      this._gridRAF = requestAnimationFrame(() => {
        this._gridDirty = false;
        this._renderGridCanvas_();
      });
    },

    _renderGridCanvas_() {
      const c = this._gridCanvas; if (!c) return;
      const ctx = this._gridCtx;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const grid = this._gridCellSize || 10;
      const scale = this._canvasScale || 1;  

      ctx.clearRect(0, 0, c.width, c.height);

      if (this._gridTile) {
        const pat = ctx.createPattern(this._gridTile, 'repeat');
        // Offset the pattern by the container's padding so the rendered
        // squares align perfectly with the underlying CSS grid lines.
        // Draw the grid pattern starting at the canvas origin (0,0).
        // The selectable cells use the same grid origin (0,0) relative to
        // the canvas, so aligning the pattern origin with the canvas
        // origin ensures that the visual grid exactly matches the
        // interactive grid.  No translation is needed; simply fill the
        // entire canvas with the repeating pattern.
        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.fillStyle = pat;
        ctx.fillRect(0, 0, c.width / dpr, c.height / dpr);
        ctx.restore();
      }

      // Hover cell – full cell bounds.  Use a more visible accent color
      // so that hovered cells stand out clearly on the grid.  Increase
      // both fill and stroke opacity for better contrast.
      if (this._gridHoverCol >= 0 && this._gridHoverRow >= 0) {
        ctx.save();
        ctx.scale(dpr, dpr);
        // Hover cell – full cell bounds.  Increase the fill and stroke
        // opacity so the hovered cell stands out clearly against the
        // grid pattern.  A more saturated accent color makes the
        // interactive area obvious.
        ctx.fillStyle = 'rgba(0, 160, 255, 0.30)';
        ctx.strokeStyle = 'rgba(0, 160, 255, 0.60)';
        ctx.lineWidth = 1;

        const x = this._gridHoverCol * grid;
        const y = this._gridHoverRow * grid;
        const w = grid;
        const h = grid;

        this._roundRect_(ctx, x, y, w, h, Math.min(10, grid * 0.25));
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      // Selection rectangle – full grid cells, no insets
      if (this._gridDown && this._gridStartCol >= 0 && this._gridStartRow >= 0 &&
          this._gridCurrCol  >= 0 && this._gridCurrRow  >= 0) {

        const minCol = Math.min(this._gridStartCol, this._gridCurrCol);
        const maxCol = Math.max(this._gridStartCol, this._gridCurrCol);
        const minRow = Math.min(this._gridStartRow, this._gridCurrRow);
        const maxRow = Math.max(this._gridStartRow, this._gridCurrRow);

        const x = minCol * grid * scale;
        const y = minRow * grid * scale;
        const w = (maxCol - minCol + 1) * grid * scale;
        const h = (maxRow - minRow + 1) * grid * scale;

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.fillStyle = 'rgba(0, 160, 255, 0.22)';
        ctx.strokeStyle = 'rgba(0, 160, 255, 0.45)';
        ctx.lineWidth = 2;
        this._roundRect_(ctx, x, y, w, h, Math.min(12, grid * 0.3));
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    },

    _roundRect_(ctx, x, y, w, h, r) {
      const rr = Math.min(r, w/2, h/2);
      ctx.beginPath();
      ctx.moveTo(x+rr, y);
      ctx.arcTo(x+w, y, x+w, y+h, rr);
      ctx.arcTo(x+w, y+h, x, y+h, rr);
      ctx.arcTo(x, y+h, x, y, rr);
      ctx.arcTo(x, y, x+w, y, rr);
      ctx.closePath();
    },
    /* === GRID SELECT PATCH END (rendering) === */

    /* === GRID SELECT PATCH START (interaction) === */
    _emptySpaceAt_(clientX, clientY) {
      const el = document.elementFromPoint(clientX, clientY);
      return !el || !el.closest || !el.closest('.card-wrapper, .resize-handle, .ddc-chip, .shield');
    },

    _locToCell_(clientX, clientY) {
      const c = this._gridCanvas;
      if (!c) return { col: -1, row: -1 };
      const rect = c.getBoundingClientRect();
      const { sx, sy } = this._getContainerScale_();
      const x = (clientX - rect.left) / (sx || 1);
      const y = (clientY - rect.top)  / (sy || 1);
      const grid = this._gridCellSize || 10;
      const col = Math.min(this._gridCols - 1, Math.max(0, Math.floor(x / grid)));
      const row = Math.min(this._gridRows - 1, Math.max(0, Math.floor(y / grid)));
      return { col, row };
    },

    _onGridPointerDown(ev) {
      if (!this._emptySpaceAt_(ev.clientX, ev.clientY)) return;
      const { col, row } = this._locToCell_(ev.clientX, ev.clientY);
      this._gridDown = true;
      this._gridStartCol = col;
      this._gridStartRow = row;
      this._gridCurrCol = col;
      this._gridCurrRow = row;
      this._markGridDirty();
      ev.currentTarget.setPointerCapture?.(ev.pointerId);
    },

    _onGridPointerMove(ev) {
      const { col: hcol, row: hrow } = this._locToCell_(ev.clientX, ev.clientY);
      if (hcol !== this._gridHoverCol || hrow !== this._gridHoverRow) {
        this._gridHoverCol = hcol;
        this._gridHoverRow = hrow;
        this._markGridDirty();
      }
      if (!this._gridDown) return;
      const { col, row } = this._locToCell_(ev.clientX, ev.clientY);
      if (col !== this._gridCurrCol || row !== this._gridCurrRow) {
        this._gridCurrCol = col;
        this._gridCurrRow = row;
        this._markGridDirty();
      }
    },

    async _onGridPointerUp(_ev) {
      if (!this._gridDown) return;
      this._gridDown = false;

      const minCol = Math.min(this._gridStartCol, this._gridCurrCol);
      const maxCol = Math.max(this._gridStartCol, this._gridCurrCol);
      const minRow = Math.min(this._gridStartRow, this._gridCurrRow);
      const maxRow = Math.max(this._gridStartRow, this._gridCurrRow);
      const cellsCount = (maxCol - minCol + 1) * (maxRow - minRow + 1);

      if (cellsCount < 2) { this._markGridDirty(); return; }

      const grid = this._gridCellSize || 10;
      const x = minCol * grid;
      const y = minRow * grid;
      const w = (maxCol - minCol + 1) * grid;
      const h = (maxRow - minRow + 1) * grid;

      this._markGridDirty();
      this._promptNewCardForRect_({ x, y, w, h });
    },

    _onGridPointerCancel() {
      this._gridDown = false;
      this._markGridDirty();
    },
    /* === GRID SELECT PATCH END (interaction) === */

    /* === GRID SELECT PATCH START (lifecycle wiring) === */
    _installGridObservers_() {
      try {
        if (this.__gridRO) this.__gridRO.disconnect();
        this.__gridRO = new ResizeObserver(() => this._requestGridButtonsUpdateSoon());
        if (this.cardContainer) this.__gridRO.observe(this.cardContainer);
      } catch {}
      clearInterval(this.__gridPollT);
      this.__gridPrevEditMode = undefined;
      this.__gridPollT = setInterval(() => {
        const now = !!this.editMode;
        if (now !== this.__gridPrevEditMode) {
          this.__gridPrevEditMode = now;
          this._updateGridButtonsVisibility();
        }
      }, 300);
    },

    _uninstallGridObservers_() {
      try { this.__gridRO?.disconnect?.(); } catch {}
      this.__gridRO = null;
      clearInterval(this.__gridPollT);
      this.__gridPollT = null;
    },
    /* === GRID SELECT PATCH END (lifecycle wiring) === */

    /* === GRID SELECT PATCH START (helpers) === */
    // Map a canvas-space rect (x,y,w,h) into the container/card coordinate space
    _gridRectToCardRect_({ x, y, w, h }) {
      const container = this.cardContainer;
      const canvas = this._gridCanvas;
      if (!container || !canvas) return { x, y, w, h };

      // In dynamic modes the selection coordinates (x,y,w,h) are
      // expressed in unscaled design units (grid cell multiples).  When
      // the container is scaled via a CSS transform, we must *not*
      // divide by the scale factor here: the design units already
      // correspond to the unscaled layout.  Instead simply add the
      // container’s padding, border and scroll offsets.  This differs
      // from the original implementation which divided by the scale to
      // compensate for a canvas sized to the scaled dimensions.
      const cs = getComputedStyle(container);
      const padL = parseFloat(cs.paddingLeft)  || 0;
      const padT = parseFloat(cs.paddingTop)   || 0;
      const bordL = parseFloat(cs.borderLeftWidth) || 0;
      const bordT = parseFloat(cs.borderTopWidth)  || 0;

      const scrollX = container.scrollLeft || 0;
      const scrollY = container.scrollTop  || 0;

      const cx = x + padL + bordL + scrollX;
      const cy = y + padT + bordT + scrollY;
      const cw = w;
      const ch = h;

      return { x: cx, y: cy, w: cw, h: ch };
    },

    // Get container's transform scale (matrix or matrix3d). Defaults to 1 if none.
    _getContainerScale_() {
      const el = this.cardContainer;
      if (!el) return { sx: 1, sy: 1 };
      const t = getComputedStyle(el).transform;
      if (!t || t === 'none') return { sx: 1, sy: 1 };

      const m2d = t.match(/matrix\(([^)]+)\)/);
      if (m2d) {
        const [a,, , d] = m2d[1].split(',').map(v => parseFloat(v.trim()));
        return { sx: (isFinite(a) && a) ? a : 1, sy: (isFinite(d) && d) ? d : 1 };
      }
      const m3d = t.match(/matrix3d\(([^)]+)\)/);
      if (m3d) {
        const p = m3d[1].split(',').map(v => parseFloat(v.trim()));
        return { sx: (isFinite(p[0]) && p[0]) ? p[0] : 1, sy: (isFinite(p[5]) && p[5]) ? p[5] : 1 };
      }
      return { sx: 1, sy: 1 };
    },

    // Convert a canvas-space rect (x,y,w,h) to container's absolute-position CSS pixels
    _canvasRectToContainerRect_({ x, y, w, h }) {
      const container = this.cardContainer;
      const canvas = this._gridCanvas;
      if (!container || !canvas) return { x, y, w, h };

      const contCS = getComputedStyle(container);
      const padL = parseFloat(contCS.paddingLeft)  || 0;
      const padT = parseFloat(contCS.paddingTop)   || 0;
      const bL   = parseFloat(contCS.borderLeftWidth) || 0;
      const bT   = parseFloat(contCS.borderTopWidth)  || 0;
      const { sx, sy } = this._getContainerScale_();

      const canvRect = canvas.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();

      const viewportX = canvRect.left + x;
      const viewportY = canvRect.top  + y;

      let dx = viewportX - contRect.left;
      let dy = viewportY - contRect.top;

      // border-box → padding-box (also subtract borders)
      dx -= (padL + bL);
      dy -= (padT + bT);



      const invSX = sx ? 1 / sx : 1;
      const invSY = sy ? 1 / sy : 1;

      const outX = dx * invSX;
      const outY = dy * invSY;
      const outW = (w * invSX);
      const outH = (h * invSY);

      return { x: outX, y: outY, w: outW, h: outH };
    },
    /* === GRID SELECT PATCH END (helpers) === */

    /* === GRID SELECT PATCH START (add card bridge) === */
    // Store the selection rect and let the normal picker flow run.
    // The shim below will place the card at this rect instead of the default spot.
    async _promptNewCardForRect_({ x, y, w, h }) {
      try {
        const g = this._gridCellSize || Number(this._config?.grid ?? this._options?.grid ?? 10);
        const snap = v => Math.round(v / g) * g;
        const sx = snap(x), sy = snap(y), sw = Math.max(g, snap(w)), sh = Math.max(g, snap(h));

        // Map the snapped canvas-space rect into the card container coordinate space.
        // When the layout is scaled (auto-resize in dynamic mode), the
        // container may be transformed and scrolled, so we use the
        // grid-to-card mapping which compensates for padding, borders, scroll
        // and scale.  In strict auto size mode the container is resized
        // instead of transformed, so we fall back to the canvas→container
        // mapping that accounts for differences between the canvas and
        // container bounding boxes.  If neither helper exists we use the
        // snapped values directly.
        let mapped;
        try {
          const mode = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
          if (mode === 'auto' && typeof this._canvasRectToContainerRect_ === 'function') {
            mapped = this._canvasRectToContainerRect_({ x: sx, y: sy, w: sw, h: sh });
          } else if (typeof this._gridRectToCardRect_ === 'function') {
            mapped = this._gridRectToCardRect_({ x: sx, y: sy, w: sw, h: sh });
          } else {
            mapped = { x: sx, y: sy, w: sw, h: sh };
          }
        } catch {
          mapped = { x: sx, y: sy, w: sw, h: sh };
        }

        const finalRect = {
          x: Math.round(mapped.x),
          y: Math.round(mapped.y),
          w: Math.round(mapped.w),
          h: Math.round(mapped.h),
        };

        this.__pendingAddRect = finalRect;
        await this._openSmartPicker('add', null, null);
      } catch (e) {
        console.warn('[ddc] _promptNewCardForRect_ failed', e);
      }
    }
    /* === GRID SELECT PATCH END (add card bridge) === */
  });

  // --- BEGIN: selection-rect placement shim ---
  if (!DragAndDropCard.prototype.__addPickedPatched) {
    const __origAddPicked = DragAndDropCard.prototype._addPickedCardToLayout;

    DragAndDropCard.prototype._addPickedCardToLayout = async function (cardConfig) {
      // If a selection rect is pending, place the new card exactly there.
      if (this && this.__pendingAddRect) {
        const { x, y, w, h } = this.__pendingAddRect;
        this.__pendingAddRect = null; // consume it

        try { this._hideEmptyPlaceholder?.(); } catch {}

        const cardEl = await this._createCard(cardConfig);
        const wrap = this._makeWrapper(cardEl);

        // When placing a new card from a selection rect, apply a slight
        // negative offset so that the card appears 10px up and left from
        // the drawn rectangle.  Without this the card will align exactly
        // with the rectangle bounds, but users requested a small offset.
        const offX = 11;
        const offY = 11;
        const posX = Math.round(x) - offX;
        const posY = Math.round(y) - offY;
        this._setCardPosition(wrap, posX, posY);
        wrap.style.width  = `${Math.round(w)}px`;
        wrap.style.height = `${Math.round(h)}px`;
        // Assign a z-index for the new card based on the highest existing
        // z-index.  Ensure the result is at least 6 so new cards always
        // appear above the grid overlay.
        {
          const nextVal = this._highestZ() + 1;
          wrap.style.zIndex = String(Math.max(nextVal, 6));
        }
        wrap.dataset.tabId = this._normalizeTabId(this.activeTab || this.defaultTab);

        this.cardContainer.appendChild(wrap);

        try { this._rebuildOnce?.(wrap.firstElementChild); } catch {}
        try { this._initCardInteract?.(wrap); } catch {}
        try { this._resizeContainer?.(); } catch {}
        try { this._queueSave?.('add'); } catch {}
        try { this._toast?.('Card added to selection.'); } catch {}
        try { this._syncEmptyStateUI?.(); } catch {}
        try { this._applyVisibility_?.(); } catch {}

        // When auto-resize is active (dynamic mode) or strict auto mode,
        // adding a card changes the design dimensions.  Immediately
        // recompute the scale and refresh the grid overlay.  Without
        // this, the canvas and drop area remain sized to the old
        // dimensions until a manual refresh or tab switch.
        requestAnimationFrame(() => {
          try {
            const mode = String((this.containerSizeMode || this.container_size_mode || 'dynamic')).toLowerCase();
            if (mode === 'auto') {
              this._applyAutoFillNoScale?.();
            } else if (this.autoResizeCards) {
              this._applyAutoScale?.();
            }
            this._requestGridButtonsUpdateSoon?.();
          } catch {}
        });

        return; // handled by shim
      }

      // Fallback to the original behavior (no selection rect)
      return await __origAddPicked.call(this, cardConfig);
    };

    DragAndDropCard.prototype.__addPickedPatched = true;
  }
  // --- END: selection-rect placement shim ---

  customElements.define('drag-and-drop-card', DragAndDropCard);

  /*
   * Register this card with Home Assistant’s card picker.  The HA dashboard
   * editor discovers custom cards by reading a global `window.customCards`
   * array.  Each entry in that array is an object describing a custom
   * card.  Without registering here, the drag‑and‑drop card will not
   * appear in the “Custom” section of the card picker and users must
   * manually add it via YAML.  To fix that, we push a descriptor into
   * `window.customCards` if one isn’t already present.  See the Home
   * Assistant developer docs for the expected fields.
   */
  try {
    // Ensure the registry exists
    if (!Array.isArray(window.customCards)) {
      window.customCards = [];
    }
    // Avoid duplicate registrations (multiple script loads)
    const exists = window.customCards.some((c) => c && typeof c.type === 'string' && c.type.toLowerCase() === 'custom:drag-and-drop-card');
    if (!exists) {
      window.customCards.push({
        // Use the tag name here (no `custom:` prefix) as required by the HA
        // card picker.  See the example in the developer docs【20940309320886†L345-L347】.
        type: 'drag-and-drop-card',
        name: 'Drag & Drop Card',
        description: 'Flexible grid layout card with drag‑and‑drop editing.',
        // Do not enable the preview; the card’s dynamic nature means
        // generating a static preview isn’t meaningful.  Setting this to
        // false matches the behaviour of the original implementation.
        preview: false,
        // Icon shown in the card picker (optional)
        icon: 'mdi:cursor-move'
      });
    }
  } catch (e) {
    console.warn('[drag-and-drop-card] Failed to register card in customCards', e);
  }
}



/* ==========================================================================
   Integrated card-mod compatibility enhancements
   - Ensures card-mod styles apply to nested cards inside drag-and-drop-card
   - No extra resource needed; executed as part of this script
   - Uses a guarded (WeakSet) ll-rebuild dispatch on newly added card elements
   ========================================================================== */
(() => {
  const SEEN = new WeakSet();

  const isLikelyCard = (el) => {
    try {
      if (!(el instanceof Element)) return false;
      const n = el.localName || "";
      if (!n) return false;
      if (n === "ha-card") return true;
      if (n.endsWith("-card")) return true; // hui-*, custom:*, mushroom-*, etc.
      return false;
    } catch { return false; }
  };

  const rebuildOnce = (el) => {
    try {
      if (!el || SEEN.has(el)) return;
      SEEN.add(el);
      el.dispatchEvent(new Event('ll-rebuild', { bubbles: true, composed: true }));
    } catch {}
  };

  const deepScan = (root) => {
    try {
      if (!root) return;
      if (root instanceof Element && isLikelyCard(root)) rebuildOnce(root);
      const all = (root instanceof ShadowRoot ? root : root).querySelectorAll?.("*");
      if (!all) return;
      for (const el of all) {
        if (isLikelyCard(el)) rebuildOnce(el);
        const sr = el.shadowRoot;
        if (sr) { try { deepScan(sr); } catch {} }
      }
    } catch {}
  };

  const installOnInstance = (host) => {
    try {
      if (!host || host.__ddcCardModIntegrated) return;
      host.__ddcCardModIntegrated = true;
      const root = host.shadowRoot || host;

      // Initial scan (covers already rendered children)
      deepScan(root);

      // Observe newly added content within the card
      const mo = new MutationObserver((muts) => {
        for (const m of muts) {
          if (!m.addedNodes || !m.addedNodes.length) continue;
          for (const n of m.addedNodes) {
            if (n instanceof Element || n instanceof ShadowRoot) {
              deepScan(n);
            }
          }
        }
      });
      mo.observe(root, { childList: true, subtree: true });
      host.__ddcCardModIntegratedObserver = mo;

      // Follow-up scans for lazy renders
      setTimeout(() => { try { deepScan(root); } catch {} }, 250);
      setTimeout(() => { try { deepScan(root); } catch {} }, 1000);
    } catch {}
  };

  const hookExisting = () => {
    try {
      document.querySelectorAll("drag-and-drop-card").forEach(installOnInstance);
    } catch {}
  };

  if (window.customElements && window.customElements.whenDefined) {
    window.customElements.whenDefined("drag-and-drop-card").then(() => {
      // Install on existing instances
      hookExisting();
      // Patch prototype to auto-install on future instances
      const ctor = window.customElements.get("drag-and-drop-card");
      if (ctor && ctor.prototype) {
        const origConnected = ctor.prototype.connectedCallback;
        ctor.prototype.connectedCallback = function() {
          try { origConnected && origConnected.call(this); } finally {
            installOnInstance(this);
          }
        };
      }
      // As a fallback, watch the DOM for new instances
      const docObserver = new MutationObserver(() => hookExisting());
      docObserver.observe(document.documentElement, { childList: true, subtree: true });
    });
  } else {
    // Very old environment: periodic best-effort scan
    const iv = setInterval(hookExisting, 1000);
    setTimeout(() => clearInterval(iv), 10000);
  }
})();

/* ==== DDC AUGMENTATION v6: backup on persist + inline toolbar switcher + load-by-key + edit-mode visibility ==== */
(function(){
  const tag = 'drag-and-drop-card';
  const Cls = customElements.get(tag);
  if (!Cls) { console.warn('[ddc:augment] Could not find custom element', tag); return; }

  function _getLovelace() {
    try {
      let hop = 0, host = this;
      while (host && hop++ < 20) {
        const root = host.getRootNode?.();
        const rHost = root?.host;
        if (rHost?.tagName === 'HUI-ROOT') return rHost.lovelace;
        host = rHost || host.parentElement;
      }
      const seen = new Set(), q = [document];
      while (q.length) {
        const n = q.shift();
        if (!n || seen.has(n)) continue;
        seen.add(n);
        if (n.host?.tagName === 'HUI-ROOT') return n.host.lovelace;
        if (n.tagName === 'HUI-ROOT') return n.lovelace;
        if (n.shadowRoot) q.push(n.shadowRoot);
        if (n.children) for (const c of n.children) q.push(c);
      }
    } catch(e) {}
    return undefined;
  }
  function _scanDdcCards(cfg) {
    const hits = [];
    const push = (view, path, obj) => { if (obj?.type === 'custom:drag-and-drop-card') hits.push({ view, path: [...path], card: obj }); };
    const visit = (node, viewIdx, path) => {
      if (!node) return;
      if (Array.isArray(node)) { node.forEach((n, i) => visit(n, viewIdx, path.concat(i))); return; }
      if (typeof node !== 'object') return;
      if ('type' in node) push(viewIdx, path, node);
      for (const [k, v] of Object.entries(node)) {
        if (k === 'views' && Array.isArray(v)) v.forEach((vv, i) => visit(vv, i, ['views', i]));
        else if (Array.isArray(v)) visit(v, viewIdx, path.concat(k));
        else if (v && typeof v === 'object') visit(v, viewIdx, path.concat(k));
      }
    };
    visit(cfg, -1, []);
    return hits;
  }
  function _makeYamlBackup(llConfig, targets, patch) {
    const when = new Date().toISOString().replace(/[:.]/g,'-');
    const items = targets.map(t => {
      let ref = llConfig;
      for (const seg of t.path) ref = ref[seg];
      return { view: t.view, path: t.path, storage_key: (ref && ref.storage_key) || null, before: ref, patch };
    });
    const backup = { kind: 'ddc-import-backup', created_at: when, count: items.length, items };
    try {
      const key = `ddc.backup.${when}`;
      localStorage.setItem(key, JSON.stringify(backup));
      const all = Object.keys(localStorage).filter(k => k.startsWith('ddc.backup.')).sort().reverse();
      for (const k of all.slice(10)) localStorage.removeItem(k);
    } catch(e){}
    return { name: `ddc_backup_${when}.json`, data: backup };
  }
  function _offerBackupDownload(name, obj) {
    try {
      const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url; a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
    } catch(e){ console.warn('[ddc:backup] download failed', e); }
  }
  function _recordRecentKey(key) {
    if (!key) return;
    try {
      const K = 'ddc.recent.keys';
      const arr = JSON.parse(localStorage.getItem(K) || '[]');
      if (!arr.includes(key)) arr.unshift(key);
      localStorage.setItem(K, JSON.stringify(arr.slice(0, 20)));
    } catch {}
  }
  function _getRecentKeys() {
    try { return JSON.parse(localStorage.getItem('ddc.recent.keys') || '[]'); } catch { return []; }
  }
  function _collectBackupKeys() {
    const keys = new Set();
    try {
      const names = Object.keys(localStorage).filter(k => k.startsWith('ddc.backup.')).sort().reverse();
      for (const name of names) {
        try {
          const obj = JSON.parse(localStorage.getItem(name) || 'null');
          if (obj && obj.items) {
            for (const it of obj.items) {
              const sk = it?.before?.storage_key || it?.patch?.storage_key;
              if (sk) keys.add(sk);
            }
          }
        } catch {}
      }
    } catch {}
    return Array.from(keys);
  }
async function _persistOptionsToYaml(opts, {
  forceTargetKey = null,   // when set, import ONLY into card with this key
  onlyThisCard   = false,  // reserved; current impl always enforces single-card import
  prevKey,
  noDownload
} = {}) {
  const ll = this._getLovelace?.() || _getLovelace.call(this);
  if (!ll) { console.debug('[ddc:import] persist: no lovelace root'); return false; }
  if (typeof ll.saveConfig !== 'function') { console.debug('[ddc:import] persist: dashboard not in Storage mode'); return false; }

  // Determine the EXACT key we will import into (the clicked card)
  const norm = (s) => (typeof s === 'string' ? s.trim() : null);
  const myKey =
    norm(forceTargetKey) ||
    norm(this?._config?.storage_key) ||
    norm(this?.storageKey) ||
    norm(prevKey);

  if (!myKey) {
    console.warn('[ddc:import] persist: missing target storage_key on this card; aborting');
    return false;
  }

  // Clone config and scan
  const cfg  = JSON.parse(JSON.stringify(ll.config));
  const hits = (this._scanDdcCards || _scanDdcCards)(cfg);

  console.debug('[ddc:import] persist: found DDC cards',
    hits.map(h => ({
      view: h.view,
      path: h.path.join('.'),
      storage_key: (h.card && (h.card.storage_key || h.card.storageKey)) || null
    }))
  );

  // Select exactly one target by key (no “patch-all-in-view” fallback)
  let targets = hits.filter(h => {
    const sk =
      norm(h.card?.storage_key) ??
      norm(h.card?.storageKey) ??
      norm(h.card?.options?.storage_key) ??
      norm(h.card?.options?.storageKey);
    return sk === myKey;
  });

  if (targets.length !== 1) {
    console.warn('[ddc:import] persist: expected exactly one target with key, got', targets.length, { myKey });
    return false;
  }

  // Build patch WITHOUT storage_key so we don't overwrite per-card keys
  const patch = { type: 'custom:drag-and-drop-card', ...(opts || {}) };
  if ('storage_key' in patch)  delete patch.storage_key;
  if ('storageKey'  in patch)  delete patch.storageKey;
  if (patch?.options) {
    if ('storage_key' in patch.options) delete patch.options.storage_key;
    if ('storageKey'  in patch.options) delete patch.options.storageKey;
  }
     // IMPORTANT: do NOT put the actual layout into Lovelace YAML
   const cardsForStorage = Array.isArray(patch.cards) ? patch.cards : null;
   delete patch.cards;

  // Optional: backup (keeps your previous behavior if helpers exist)
  try {
    const backup = _makeYamlBackup?.(ll.config, targets, patch);
    if (backup) {
      console.debug('[ddc:import] backup created', { file: backup.name, items: backup.data?.count });
      if (!noDownload && typeof _offerBackupDownload === 'function') _offerBackupDownload(backup.name, backup.data);
    }
  } catch (e) {
    console.debug('[ddc:import] backup skipped/error:', e?.message || e);
  }

  // Apply to the single matched ref
  const t = targets[0];
  let ref = cfg;
  for (const seg of t.path) ref = ref[seg];

  const existingKey =
    norm(ref?.storage_key) ??
    norm(ref?.storageKey) ?? null;

  Object.assign(ref, patch);

  // Preserve the original key on this card
  if (existingKey) {
    ref.storage_key = existingKey;
  } else {
    ref.storage_key = myKey;
  }
  if ('storageKey' in ref) delete ref.storageKey;

  console.debug('[ddc:import] persist → saving', {
    patched: 1,
    into_key: ref.storage_key,
    ignored_file_key: norm(opts?.storage_key) || norm(opts?.storageKey) || null
  });

  await ll.saveConfig(cfg);
  // Let the caller know if there were cards to save elsewhere
  return { yamlSaved: true, cardsForStorage };
}

  async function _fetchBackendKeys() {
    const parseKeys = (data) => {
      if (!data) return [];
      if (Array.isArray(data)) return data;
      if (Array.isArray(data?.keys)) return data.keys;
      if (Array.isArray(data?.dashboards)) return data.dashboards;
      if (Array.isArray(data?.entries)) return data.entries.map(e => e.key || e.id || e.name).filter(Boolean);
      if (Array.isArray(data?.items)) return data.items.map(e => e.key || e.id || e.name).filter(Boolean);
      if (typeof data === 'object') {
        for (const v of Object.values(data)) {
          if (Array.isArray(v) && v.every(x => typeof x === 'string')) return v;
        }
      }
      return [];
    };
    try {
      if (this?.hass?.callApi) {
        const r = await this.hass.callApi('get', 'dragdrop_storage');
        const k = parseKeys(r);
        if (k.length) return k;
      }
    } catch(e) { console.debug('[ddc:switcher] hass.callApi dragdrop_storage failed', e); }
    const urls = ['/api/dragdrop_storage', '/api/dragdrop_storage/keys', '/api/dragdrop_storage/list', '/api/dragdrop_storage?all=1'];
    for (const url of urls) {
      try {
        const resp = await fetch(url, { cache: 'no-store' });
        const json = await resp.json();
        const k = parseKeys(json);
        if (k.length) return k;
      } catch(e) {}
    }
    return [];
  }
  async function _fetchLayoutByKey(key) {
    const parseDesign = (data) => {
      if (!data) return null;
      if (data.options || data.cards) return data;
      if (typeof data.design === 'object') return data.design;
      if (typeof data.payload === 'object') return data.payload;
      try { if (typeof data === 'string') return JSON.parse(data); } catch {}
      return null;
    };
    const tryCall = async (method, path, params) => {
      try {
        if (this?.hass?.callApi) {
          const r = await this.hass.callApi(method, path, params);
          const d = parseDesign(r);
          if (d) return d;
        }
      } catch(e) {}
      return null;
    };
    const tryFetch = async (url) => {
      try {
        const resp = await fetch(url, { cache: 'no-store' });
        const ct = resp.headers.get('content-type') || '';
        if (ct.includes('application/json') || ct.includes('text/plain')) {
          const j = await resp.json().catch(()=>null) || await resp.text().catch(()=>null);
          const d = parseDesign(j);
          if (d) return d;
        }
      } catch(e) {}
      return null;
    };
    const enc = encodeURIComponent(key);
    return await (tryCall('get', `dragdrop_storage/${enc}`)
      || tryFetch(`/api/dragdrop_storage/${enc}`)
      || tryFetch(`/api/dragdrop_storage?key=${enc}`)
      || tryCall('post', 'dragdrop_storage/get', { key })
      || null);
  }
  async function _applyDesignObject(json, { source='switcher', newKey=null } = {}) {
    if (!json || typeof json !== 'object') throw new Error('Invalid design payload');
    const prevKey = this.storageKey || this._config?.storage_key || null;
    try { this._dbgInit?.(); this._dbgPush?.('import', 'Begin import (programmatic)', { source, newKey }); } catch {}
    if (json.options) {
      const { storage_key, ...optsNoKey } = json.options;
      this._applyImportedOptions?.(optsNoKey, true);
    } else if (typeof json.grid === 'number') {
      this._applyImportedOptions?.({ grid: json.grid }, true);
    }
    const key = newKey || json?.options?.storage_key || prevKey;
    if (key) {
      this.storageKey = key;
      this._config = { ...(this._config || {}), storage_key: key };
      try { this._syncEditorsStorageKey?.(); } catch {}
    }
    try {
      const toPersist = json.options ?? (typeof json.grid === 'number' ? { grid: json.grid } : {});
      await (this._persistOptionsToYaml?.call(this, { ...toPersist, storage_key: key }, { prevKey, noDownload: (source==='switcher') }));
    } catch(e) { console.warn('[ddc:apply] persist failed', e); }
    try {
      this.cardContainer.innerHTML = '';
      if (Array.isArray(json.cards) && json.cards.length) {
        for (const conf of json.cards) {
          if (!conf?.card || (typeof conf.card === 'object' && Object.keys(conf.card).length === 0)) {
            const p = this._makePlaceholderAt?.(conf.position?.x||0, conf.position?.y||0, conf.size?.width||200, conf.size?.height||200);
            if (p) this.cardContainer.appendChild(p);
          } else {
            const el = await this._createCard(conf.card);
            const wrap = this._makeWrapper(el);
            this._setCardPosition?.(wrap, conf.position?.x||0, conf.position?.y||0);
            wrap.style.width  = `${conf.size?.width||140}px`;
            wrap.style.height = `${conf.size?.height||100}px`;
            if (conf.z != null) wrap.style.zIndex = String(conf.z);
            this.cardContainer.appendChild(wrap);
            try { this._rebuildOnce?.(wrap.firstElementChild); } catch {}
            this._initCardInteract?.(wrap);
          }
        }
      } else {
        this._showEmptyPlaceholder?.();
      }
      this._resizeContainer?.();
      this._markDirty?.('import');
      this._toast?.(source==='switcher' ? `Loaded layout "${key}"` : 'Design imported');
    } catch(e) {
      console.error('[ddc:apply] rebuild failed', e);
      this._toast?.('Import failed during rebuild.');
    }
  }
  function _updateSwitcherVisibility() {
    try {
      const host = this.shadowRoot || this.renderRoot || this;
      const el = host.querySelector('.ddc-switcher-inline');
      if (!el) return;
      const ll = this._getLovelace?.() || _getLovelace.call(this);
      let edit = false;
      try {
        const hui = (host.getRootNode && host.getRootNode())?.host;
        edit = !!(ll && (ll.editMode === true || (hui && hui.editMode === true)));
      } catch {}
      el.style.display = edit ? 'inline-flex' : 'none';
    } catch {}
  }
  function _ensureInlineSwitcher() {
    try {
      if (this._ddcSwitcherInstalled) return;
      const host = this.shadowRoot || this.renderRoot || this;
      const toolbar = host.querySelector('.toolbar');
      if (!toolbar) return;
      const wrap = document.createElement('div');
      wrap.className = 'ddc-switcher-inline';
      Object.assign(wrap.style, { display: 'inline-flex', gap: '6px', alignItems: 'center', marginLeft: 'auto' });
      const label = document.createElement('span');
      label.textContent = 'Layout:';
      label.style.fontSize = '12px';
      label.style.opacity = '0.8';
      const select = document.createElement('select');
      Object.assign(select.style, {
        fontSize: '12px', padding: '4px 6px', borderRadius: '8px',
        border: '1px solid var(--divider-color, #999)',
        background: 'var(--card-background-color, #fff)'
      });
      select.title = 'Select stored layout (storage_key)';
      select.id = 'ddcKeySelect';
      const btn = document.createElement('button');
      btn.className = 'btn secondary';
      btn.type = 'button';
      btn.style.padding = '6px 10px';
      btn.innerHTML = '<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>';
      wrap.appendChild(label);
      wrap.appendChild(select);
      wrap.appendChild(btn);
      toolbar.appendChild(wrap);
      this._ddcSwitcherInstalled = true;
      const fill = async () => {
        const current = this.storageKey || (this._config && this._config.storage_key) || '';
        const serverKeys = await _fetchBackendKeys.call(this);
        const backupKeys = _collectBackupKeys();
        const recentKeys = _getRecentKeys();
        const toUnique = (arr) => Array.from(new Set(arr.filter(Boolean)));
        const server = toUnique(serverKeys);
        const backups = toUnique(backupKeys);
        const recent = toUnique(recentKeys);
        select.innerHTML = '';
        if (current && !server.includes(current) && !backups.includes(current) && !recent.includes(current)) {
          const opt = document.createElement('option');
          opt.value = current;
          opt.textContent = `${current} (current)`;
          opt.selected = true; // ensure the dropdown shows the actual current value
          select.appendChild(opt);
        }
        const makeGroup = (label, list) => {
          if (!list.length) return;
          const og = document.createElement('optgroup'); og.label = label;
          list.forEach(k => {
            const o = document.createElement('option'); o.value = k; o.textContent = k; if (k===current) o.selected = true;
            og.appendChild(o);
          });
          select.appendChild(og);
        };
        makeGroup('Server', server);
        makeGroup('Backups', backups);
        makeGroup('Recent', recent);
        if (!select.children.length) {
          const none = document.createElement('option'); none.value=''; none.textContent='— none —'; none.selected = true;
          select.appendChild(none);
        }
        _updateSwitcherVisibility.call(this);
      };
      fill();
      btn.addEventListener('click', fill);
      
      select.addEventListener('change', async (e) => {
        const newKey = String(e.target.value || '');
        if (!newKey) return;
        if (this._ddcLoadingFromKey) return;
        this._ddcLoadingFromKey = true;

        try {
          const design = await _fetchLayoutByKey.call(this, newKey);
          if (!design) {
            this._toast?.(`No layout found for "${newKey}"`);
            return;
          }

          // Apply the newly selected design to the canvas
          await _applyDesignObject.call(this, design, { source: 'switcher', newKey });
          this._resizeContainer?.();
          this._toast?.(`Loaded layout "${newKey}"`);

          // ---- PERSIST THE SELECTED KEY *TO THE CARD OPTIONS* ----
          // IMPORTANT: persist against the *old* key so the YAML updater finds this card
          const oldKey = String(this._config?.storage_key || this.storageKey || '');

          let persistOk = false;
          try {
            const persistOpts = oldKey
              ? { forceTargetKey: oldKey, noDownload: true }
              : { noDownload: true };

            // NOTE: in YAML mode this can resolve to false (no exception)
            persistOk = await this._persistOptionsToYaml({ storage_key: newKey }, persistOpts);
          } catch (err) {
            console.warn('[ddc:switcher] failed to persist storage_key to YAML', err);
            this._toast?.('Failed to persist selected layout. Keeping current.');
            return; // bail so we don't reload into the wrong key
          }

          // Always update in-memory state so the UI reflects the selection now
          this.storageKey = newKey;
          if (this._config) this._config.storage_key = newKey;

          // If persistence didn’t actually happen (e.g., YAML mode), stop here—don’t reload
          if (!persistOk) {
            console.warn('[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.');
            // Optional: remember across reloads if you want
            // localStorage.setItem('ddc:lastKey', newKey);
            return;
          }

          // ---- FLUSH SAVE UNDER THE *NEW* KEY, THEN HARD-RELOAD ----
          try {
            if (this._saveTimer) clearTimeout(this._saveTimer);
            await this._saveLayout(true); // writes under this.storageKey (now newKey)
          } catch (e2) {
            console.warn('[ddc:switcher] saveLayout failed', e2);
            this._markDirty?.('switcher');
            this._toast?.('Layout loaded — click Apply to save.');
            return;
          }

          // Only reload if persist succeeded (storage/dashboard mode)
          window.location.reload();

          // Finally, reload so the selected layout is what loads on startup
          window.location.reload();

        } catch (err) {
          console.warn('[ddc:switcher] load/apply failed', err);
          this._toast?.('Failed to load layout.');
        } finally {
          this._ddcLoadingFromKey = false;
        }
      });
      this._ddcVisTimer && clearInterval(this._ddcVisTimer);
      this._ddcVisTimer = setInterval(() => _updateSwitcherVisibility.call(this), 800);
      _updateSwitcherVisibility.call(this);
    } catch(e) {
      console.warn('[ddc:switcher] inline install failed', e);
    }
  }
  if (!Cls.prototype._getLovelace) Cls.prototype._getLovelace = _getLovelace;
  if (!Cls.prototype._scanDdcCards) Cls.prototype._scanDdcCards = _scanDdcCards;
  Cls.prototype._persistOptionsToYaml = _persistOptionsToYaml;
  if (!Cls.prototype._applyDesignObject) Cls.prototype._applyDesignObject = _applyDesignObject;
  try {
    const desc = Object.getOwnPropertyDescriptor(Cls.prototype, 'hass');
    if (desc && (desc.set || desc.get)) {
      const origSet = desc.set;
      Object.defineProperty(Cls.prototype, 'hass', {
        configurable: true, enumerable: true,
        set(v) { if (origSet) origSet.call(this, v); try { _ensureInlineSwitcher.call(this); } catch(e){} },
        get: desc.get || function(){ return this._hass; }
      });
    } else if (typeof Cls.prototype.setHass === 'function') {
      const orig = Cls.prototype.setHass;
      Cls.prototype.setHass = function(v){ if (orig) orig.call(this, v); try { _ensureInlineSwitcher.call(this); } catch(e){} }
    } else {
      const origUpdate = Cls.prototype.updated || Cls.prototype.firstUpdated;
      Cls.prototype.updated = function(...args){ if (origUpdate) origUpdate.apply(this, args); try { _ensureInlineSwitcher.call(this); } catch(e){} }
    }
  } catch(e){ console.warn('[ddc:switcher] wrap hass setter failed', e); }
})();
/* ==== /DDC AUGMENTATION v6 ==== */