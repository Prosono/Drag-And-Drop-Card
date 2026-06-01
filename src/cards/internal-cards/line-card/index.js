/*
 * Internal line card and editor.
 *
 * The line card renders animated connector-style lines that can react to Home Assistant entity state.
 * Its editor exposes direction, arrow, color, animation, and state matching controls.
 */

import { DDC_LINE_CARD_EDITOR_TAG } from '../element-tags.js';
import {
  __ddcLineEscapeAttr__,
  __ddcLineEscapeHtml__,
  __ddcLineIsActive__,
  __ddcLineNormalizeNumber__,
} from '../shared-helpers.js';

export class DdcLineCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = null;
    this._hass = null;
    this._shellReady = false;
  }
   static getStubConfig() {
    return {
      type: 'custom:ddc-line-card',
      title: '',
      entity: '',
      active_states: 'on,home,open,playing,charging,active,>0',
      direction: 'horizontal',
      arrows: 'end',
      flow_direction: 'auto',
      line_style: 'solid',
      thickness: 10,
      animate_mode: 'active',
      animation_speed: 1.8,
      active_color: 'var(--primary-color, #ff9800)',
      inactive_color: 'rgba(148, 163, 184, 0.42)',
      glow: true,
      rounded: true
    };
  }
   static async getConfigElement() {
    return document.createElement(DDC_LINE_CARD_EDITOR_TAG);
  }
   async getConfigElement() {
    return document.createElement(DDC_LINE_CARD_EDITOR_TAG);
  }
   setConfig(config) {
    this._config = {
      ...DdcLineCard.getStubConfig(),
      ...(config || {})
    };
    this._renderCard_();
  }
   set hass(hass) {
    this._hass = hass;
    this._renderCard_();
  }
   get hass() {
    return this._hass;
  }
   connectedCallback() {
    if (this._config) this._renderCard_();
  }
   getCardSize() {
    return 1;
  }
   _ensureShell_() {
    if (this._shellReady || !this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
      <style>
        :host{
          display:block;
          width:100%;
          height:100%;
          min-height:100%;
          color:var(--primary-text-color);
        }
        ha-card{
          display:block;
          width:100%;
          height:100%;
          min-height:100%;
          background:transparent;
          box-shadow:none;
          border-radius:inherit;
          overflow:visible;
        }
        .shell{
          position:relative;
          width:100%;
          height:100%;
          min-height:100%;
          padding:6px;
          box-sizing:border-box;
          --ddc-line-active: var(--primary-color, #ff9800);
          --ddc-line-inactive: rgba(148, 163, 184, 0.42);
          --ddc-line-thickness: 10;
          --ddc-line-speed: 1.8s;
        }
        .line-title{
          position:absolute;
          top:8px;
          left:10px;
          z-index:2;
          max-width:calc(100% - 20px);
          padding:6px 10px;
          border-radius:999px;
          background:rgba(15, 23, 42, 0.58);
          backdrop-filter:blur(8px);
          border:1px solid rgba(255,255,255,.08);
          color:rgba(248, 250, 252, 0.96);
          font-size:.76rem;
          font-weight:700;
          letter-spacing:.04em;
          text-transform:uppercase;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }
        .canvas{
          position:relative;
          width:100%;
          height:100%;
          min-height:100%;
        }
        svg{
          width:100%;
          height:100%;
          display:block;
          overflow:visible;
        }
        .track,
        .line,
        .flow{
          fill:none;
          vector-effect:non-scaling-stroke;
          stroke-width:var(--ddc-line-thickness);
        }
        .track{
          stroke:var(--ddc-line-inactive);
          opacity:.35;
        }
        .line{
          stroke:var(--ddc-line-color, var(--ddc-line-inactive));
          filter:none;
        }
        .shell.is-glow .line{
          filter:drop-shadow(0 0 10px color-mix(in srgb, var(--ddc-line-color, var(--ddc-line-inactive)) 42%, transparent));
        }
        .flow{
          stroke:rgba(255,255,255,.92);
          stroke-linecap:round;
          opacity:0;
        }
        .shell.is-animating .flow{
          opacity:.86;
          animation:ddc-line-flow var(--ddc-line-speed) linear infinite;
        }
        .shell.is-animating .flow.reverse{
          animation-direction:reverse;
        }
        .endpoint{
          fill:var(--ddc-line-color, var(--ddc-line-inactive));
          opacity:.96;
        }
        .shell:not(.show-start-dot) .endpoint.start,
        .shell:not(.show-end-dot) .endpoint.end{
          display:none;
        }
        .shell.is-idle .endpoint{
          opacity:.68;
        }
        @keyframes ddc-line-flow{
          from { stroke-dashoffset: var(--ddc-line-flow-cycle, 54); }
          to { stroke-dashoffset: 0; }
        }
      </style>
      <ha-card>
        <div class="shell">
          <div class="line-title" hidden></div>
          <div class="canvas"></div>
        </div>
      </ha-card>`;
    this._shellEl = this.shadowRoot.querySelector('.shell');
    this._titleEl = this.shadowRoot.querySelector('.line-title');
    this._canvasEl = this.shadowRoot.querySelector('.canvas');
    this._shellReady = true;
  }
   _resolveDirection_() {
    const requested = String(this._config?.direction || 'horizontal').toLowerCase();
    if (requested !== 'auto') return requested;
    const rect = this.getBoundingClientRect();
    return rect.width >= rect.height ? 'horizontal' : 'vertical';
  }
   _buildPath_(direction) {
    const m = 10;
    switch (direction) {
      case 'vertical':
        return { path: `M 50 ${m} L 50 ${100 - m}`, start: [50, m], end: [50, 100 - m] };
      case 'diagonal-up':
        return { path: `M ${m} ${100 - m} L ${100 - m} ${m}`, start: [m, 100 - m], end: [100 - m, m] };
      case 'diagonal-down':
        return { path: `M ${m} ${m} L ${100 - m} ${100 - m}`, start: [m, m], end: [100 - m, 100 - m] };
      case 'elbow-right-down':
        return { path: `M ${m} ${m + 2} L 68 ${m + 2} L 68 ${100 - m} L ${100 - m} ${100 - m}`, start: [m, m + 2], end: [100 - m, 100 - m] };
      case 'elbow-right-up':
        return { path: `M ${m} ${100 - m} L 68 ${100 - m} L 68 ${m} L ${100 - m} ${m}`, start: [m, 100 - m], end: [100 - m, m] };
      case 'elbow-left-down':
        return { path: `M ${100 - m} ${m} L 32 ${m} L 32 ${100 - m} L ${m} ${100 - m}`, start: [100 - m, m], end: [m, 100 - m] };
      case 'elbow-left-up':
        return { path: `M ${100 - m} ${100 - m} L 32 ${100 - m} L 32 ${m} L ${m} ${m}`, start: [100 - m, 100 - m], end: [m, m] };
      case 'horizontal':
      default:
        return { path: `M ${m} 50 L ${100 - m} 50`, start: [m, 50], end: [100 - m, 50] };
    }
  }
   _getLineStyle_(style, thickness, rounded) {
    const normalized = String(style || 'solid').toLowerCase();
    const cap = rounded || normalized === 'dotted' ? 'round' : 'square';
    const join = rounded ? 'round' : 'miter';
    let dasharray = '';
    if (normalized === 'dashed') {
      dasharray = `${Math.max(8, thickness * 1.65)} ${Math.max(6, thickness * 1.05)}`;
    } else if (normalized === 'dotted') {
      dasharray = `0 ${Math.max(8, thickness * 1.35)}`;
    }
    return { cap, join, dasharray };
  }
   _renderCard_() {
    if (!this._config) return;
    this._ensureShell_();
    if (!this._shellEl || !this._canvasEl) return;
     const cfg = this._config || {};
    const entityId = String(cfg.entity || '').trim();
    const entity = entityId ? this._hass?.states?.[entityId] : null;
    const stateValue = entity?.state ?? '';
    const active = entityId ? __ddcLineIsActive__(stateValue, cfg.active_states) : true;
    const thickness = __ddcLineNormalizeNumber__(cfg.thickness, 10, 2, 28);
    const activeColor = String(cfg.active_color || 'var(--primary-color, #ff9800)');
    const inactiveColor = String(cfg.inactive_color || 'rgba(148, 163, 184, 0.42)');
    const animateMode = String(cfg.animate_mode || 'active').toLowerCase();
    const shouldAnimate = animateMode === 'always' || (animateMode === 'active' && active);
    const speed = `${__ddcLineNormalizeNumber__(cfg.animation_speed, 1.8, 0.4, 8).toFixed(2)}s`;
    const direction = this._resolveDirection_();
    const arrows = String(cfg.arrows || 'end').toLowerCase();
    const flowDirection = String(cfg.flow_direction || 'auto').toLowerCase();
    const numericState = Number(stateValue);
    const resolvedFlowDirection = flowDirection === 'auto'
      ? ((Number.isFinite(numericState) && numericState < 0) ? 'reverse' : 'forward')
      : (flowDirection === 'reverse' ? 'reverse' : 'forward');
    const rounded = cfg.rounded !== false;
    const showStartArrow = arrows === 'start' || arrows === 'both';
    const showEndArrow = arrows === 'end' || arrows === 'both';
    const currentColor = active ? activeColor : inactiveColor;
    const { path, start, end } = this._buildPath_(direction);
    const { cap, join, dasharray } = this._getLineStyle_(cfg.line_style, thickness, rounded);
    const flowDashLength = Math.max(18, thickness * 2.4);
    const flowGapLength = Math.max(10, thickness * 1.35);
    const flowDash = `${flowDashLength} ${flowGapLength}`;
    const title = String(cfg.title || '').trim();
    const markerStart = showStartArrow ? 'url(#ddc-line-arrow-start)' : 'none';
    const markerEnd = showEndArrow ? 'url(#ddc-line-arrow-end)' : 'none';
     this._shellEl.style.setProperty('--ddc-line-active', activeColor);
    this._shellEl.style.setProperty('--ddc-line-inactive', inactiveColor);
    this._shellEl.style.setProperty('--ddc-line-color', currentColor);
    this._shellEl.style.setProperty('--ddc-line-thickness', `${thickness}`);
    this._shellEl.style.setProperty('--ddc-line-speed', speed);
    this._shellEl.style.setProperty('--ddc-line-flow-cycle', `${flowDashLength + flowGapLength}`);
    this._shellEl.classList.toggle('is-active', active);
    this._shellEl.classList.toggle('is-idle', !active);
    this._shellEl.classList.toggle('is-animating', shouldAnimate);
    this._shellEl.classList.toggle('is-glow', cfg.glow !== false);
    this._shellEl.classList.toggle('show-start-dot', !showStartArrow);
    this._shellEl.classList.toggle('show-end-dot', !showEndArrow);
     this._titleEl.hidden = !title;
    this._titleEl.textContent = title;
     this._canvasEl.innerHTML = `
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="presentation" aria-hidden="true">
        <defs>
          <marker id="ddc-line-arrow-end" markerWidth="12" markerHeight="12" refX="10.4" refY="6" orient="auto" markerUnits="strokeWidth">
            <path d="M 0 0 L 12 6 L 0 12 z" fill="${__ddcLineEscapeAttr__(currentColor)}"></path>
          </marker>
          <marker id="ddc-line-arrow-start" markerWidth="12" markerHeight="12" refX="1.6" refY="6" orient="auto-start-reverse" markerUnits="strokeWidth">
            <path d="M 12 0 L 0 6 L 12 12 z" fill="${__ddcLineEscapeAttr__(currentColor)}"></path>
          </marker>
        </defs>
        <path
          class="track"
          d="${path}"
          stroke-linecap="${cap}"
          stroke-linejoin="${join}"
          ${dasharray ? `stroke-dasharray="${dasharray}"` : ''}
        ></path>
        <path
          class="line"
          d="${path}"
          marker-start="${markerStart}"
          marker-end="${markerEnd}"
          stroke-linecap="${cap}"
          stroke-linejoin="${join}"
          ${dasharray ? `stroke-dasharray="${dasharray}"` : ''}
        ></path>
        <path
          class="flow ${resolvedFlowDirection === 'reverse' ? 'reverse' : 'forward'}"
          d="${path}"
          marker-start="${showStartArrow && resolvedFlowDirection === 'reverse' ? markerStart : 'none'}"
          marker-end="${showEndArrow && resolvedFlowDirection !== 'reverse' ? markerEnd : 'none'}"
          stroke-dasharray="${flowDash}"
          stroke-linecap="${cap}"
          stroke-linejoin="${join}"
        ></path>
        <circle class="endpoint start" cx="${start[0]}" cy="${start[1]}" r="${Math.max(2.8, Math.min(7.5, thickness * 0.52))}"></circle>
        <circle class="endpoint end" cx="${end[0]}" cy="${end[1]}" r="${Math.max(2.8, Math.min(7.5, thickness * 0.52))}"></circle>
      </svg>`;
  }
}
export class DdcLineCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = DdcLineCard.getStubConfig();
    this._emitTimer = null;
    this._configSig = '';
  }
   setConfig(config) {
    const next = {
      ...DdcLineCard.getStubConfig(),
      ...(config || {})
    };
    const sig = JSON.stringify(next);
    if (sig === this._configSig) return;
    this._configSig = sig;
    this._config = next;
    this._renderEditor_();
  }
   set hass(hass) {
    this._hass = hass;
    if (!this.shadowRoot.childElementCount) this._renderEditor_();
  }
   _queueEmit_() {
    clearTimeout(this._emitTimer);
    this._emitTimer = setTimeout(() => {
      this.dispatchEvent(new CustomEvent('config-changed', {
        detail: { config: { ...this._config } }
      }));
    }, 120);
  }
   _bindText_(selector, key) {
    const input = this.shadowRoot.querySelector(selector);
    if (!input) return;
    input.addEventListener('input', () => {
      this._config[key] = input.value;
      this._queueEmit_();
    });
  }
   _bindSelect_(selector, key) {
    const input = this.shadowRoot.querySelector(selector);
    if (!input) return;
    input.addEventListener('change', () => {
      this._config[key] = input.value;
      this._queueEmit_();
    });
  }
   _bindNumber_(selector, key) {
    const input = this.shadowRoot.querySelector(selector);
    if (!input) return;
    const commit = () => {
      const val = input.value === '' ? '' : Number(input.value);
      this._config[key] = Number.isFinite(val) ? val : this._config[key];
      this._queueEmit_();
    };
    input.addEventListener('change', commit);
    input.addEventListener('blur', commit);
  }
   _bindCheckbox_(selector, key) {
    const input = this.shadowRoot.querySelector(selector);
    if (!input) return;
    input.addEventListener('change', () => {
      this._config[key] = !!input.checked;
      this._queueEmit_();
    });
  }
   _renderEditor_() {
    const cfg = this._config || DdcLineCard.getStubConfig();
    const entityOptions = Object.keys(this._hass?.states || {})
      .sort((a, b) => a.localeCompare(b))
      .map((entityId) => `<option value="${__ddcLineEscapeAttr__(entityId)}"></option>`)
      .join('');
     this.shadowRoot.innerHTML = `
      <style>
        :host{
          display:block;
          color:var(--primary-text-color);
        }
        .editor{
          display:grid;
          gap:14px;
        }
        .intro{
          display:grid;
          gap:8px;
          padding:14px 16px;
          border-radius:16px;
          background:rgba(255,255,255,.025);
          border:1px solid rgba(255,255,255,.08);
          line-height:1.5;
          color:var(--secondary-text-color, #94a3b8);
        }
        .intro strong{
          color:var(--primary-text-color);
        }
        .grid{
          display:grid;
          gap:14px;
          grid-template-columns:repeat(2, minmax(0, 1fr));
        }
        .field{
          display:grid;
          gap:8px;
          min-width:0;
        }
        .field.full{
          grid-column:1 / -1;
        }
        label{
          display:grid;
          gap:6px;
          font-size:.9rem;
          font-weight:650;
        }
        .hint{
          font-size:.78rem;
          color:var(--secondary-text-color, #94a3b8);
          font-weight:500;
          line-height:1.45;
        }
        input[type="text"], input[type="number"], select{
          width:100%;
          box-sizing:border-box;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.1);
          background:rgba(4,9,18,.82);
          color:var(--primary-text-color);
          padding:12px 14px;
          outline:none;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
          font:inherit;
        }
        input[type="text"]:focus,
        input[type="number"]:focus,
        select:focus{
          border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
          box-shadow:
            0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
            inset 0 1px 0 rgba(255,255,255,.04);
        }
        .toggles{
          display:flex;
          align-items:center;
          gap:12px;
          flex-wrap:wrap;
        }
        .switch{
          display:inline-flex;
          align-items:center;
          gap:10px;
          min-height:48px;
          padding:0 14px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.03);
        }
        @media (max-width: 760px){
          .grid{
            grid-template-columns:1fr;
          }
          .field.full{
            grid-column:auto;
          }
        }
      </style>
      <div class="editor">
        <div class="intro">
          <strong>Connect cards with a live line</strong>
          <span>Use this as a transparent overlay card between other cards. You can animate the line, switch arrows, and tie the active style to a Home Assistant entity state.</span>
        </div>
         <datalist id="ddc-line-entities">${entityOptions}</datalist>
         <div class="grid">
          <label class="field">
            <span>Title</span>
            <input id="title" type="text" value="${__ddcLineEscapeAttr__(cfg.title || '')}" placeholder="Optional label">
          </label>
           <label class="field">
            <span>Entity</span>
            <input id="entity" type="text" list="ddc-line-entities" value="${__ddcLineEscapeAttr__(cfg.entity || '')}" placeholder="sensor.energy_flow">
            <span class="hint">Used to decide active state and auto flow direction.</span>
          </label>
           <label class="field full">
            <span>Active states</span>
            <input id="active_states" type="text" value="${__ddcLineEscapeAttr__(cfg.active_states || '')}" placeholder="on,home,open,>0">
            <span class="hint">Comma-separated. Supports exact states and numeric rules like <code>&gt;0</code>, <code>&lt;=10</code>.</span>
          </label>
           <label class="field">
            <span>Direction</span>
            <select id="direction">
              ${this._option_('horizontal', 'Horizontal', cfg.direction)}
              ${this._option_('vertical', 'Vertical', cfg.direction)}
              ${this._option_('diagonal-down', 'Diagonal down', cfg.direction)}
              ${this._option_('diagonal-up', 'Diagonal up', cfg.direction)}
              ${this._option_('elbow-right-down', 'Elbow right down', cfg.direction)}
              ${this._option_('elbow-right-up', 'Elbow right up', cfg.direction)}
              ${this._option_('elbow-left-down', 'Elbow left down', cfg.direction)}
              ${this._option_('elbow-left-up', 'Elbow left up', cfg.direction)}
              ${this._option_('auto', 'Auto (width/height)', cfg.direction)}
            </select>
          </label>
           <label class="field">
            <span>Arrows</span>
            <select id="arrows">
              ${this._option_('none', 'No arrows', cfg.arrows)}
              ${this._option_('start', 'Arrow at start', cfg.arrows)}
              ${this._option_('end', 'Arrow at end', cfg.arrows)}
              ${this._option_('both', 'Arrow at both ends', cfg.arrows)}
            </select>
          </label>
           <label class="field">
            <span>Flow direction</span>
            <select id="flow_direction">
              ${this._option_('auto', 'Auto from entity value', cfg.flow_direction)}
              ${this._option_('forward', 'Forward', cfg.flow_direction)}
              ${this._option_('reverse', 'Reverse', cfg.flow_direction)}
            </select>
          </label>
           <label class="field">
            <span>Line style</span>
            <select id="line_style">
              ${this._option_('solid', 'Solid', cfg.line_style)}
              ${this._option_('dashed', 'Dashed', cfg.line_style)}
              ${this._option_('dotted', 'Dotted', cfg.line_style)}
            </select>
          </label>
           <label class="field">
            <span>Animate</span>
            <select id="animate_mode">
              ${this._option_('active', 'Only when active', cfg.animate_mode)}
              ${this._option_('always', 'Always', cfg.animate_mode)}
              ${this._option_('never', 'Never', cfg.animate_mode)}
            </select>
          </label>
           <label class="field">
            <span>Thickness</span>
            <input id="thickness" type="number" min="2" max="28" step="1" value="${__ddcLineEscapeAttr__(cfg.thickness ?? 10)}">
          </label>
           <label class="field">
            <span>Animation speed (s)</span>
            <input id="animation_speed" type="number" min="0.4" max="8" step="0.1" value="${__ddcLineEscapeAttr__(cfg.animation_speed ?? 1.8)}">
          </label>
           <label class="field">
            <span>Active color</span>
            <input id="active_color" type="text" value="${__ddcLineEscapeAttr__(cfg.active_color || '')}" placeholder="var(--primary-color)">
          </label>
           <label class="field">
            <span>Inactive color</span>
            <input id="inactive_color" type="text" value="${__ddcLineEscapeAttr__(cfg.inactive_color || '')}" placeholder="rgba(148,163,184,.42)">
          </label>
           <div class="field full">
            <span>Toggles</span>
            <div class="toggles">
              <label class="switch">
                <input id="glow" type="checkbox" ${cfg.glow !== false ? 'checked' : ''}>
                <span>Glow</span>
              </label>
              <label class="switch">
                <input id="rounded" type="checkbox" ${cfg.rounded !== false ? 'checked' : ''}>
                <span>Rounded corners / caps</span>
              </label>
            </div>
          </div>
        </div>
      </div>`;
     this._bindText_('#title', 'title');
    this._bindText_('#entity', 'entity');
    this._bindText_('#active_states', 'active_states');
    this._bindText_('#active_color', 'active_color');
    this._bindText_('#inactive_color', 'inactive_color');
    this._bindSelect_('#direction', 'direction');
    this._bindSelect_('#arrows', 'arrows');
    this._bindSelect_('#flow_direction', 'flow_direction');
    this._bindSelect_('#line_style', 'line_style');
    this._bindSelect_('#animate_mode', 'animate_mode');
    this._bindNumber_('#thickness', 'thickness');
    this._bindNumber_('#animation_speed', 'animation_speed');
    this._bindCheckbox_('#glow', 'glow');
    this._bindCheckbox_('#rounded', 'rounded');
  }
   _option_(value, label, current) {
    return `<option value="${__ddcLineEscapeAttr__(value)}" ${String(current || '') === value ? 'selected' : ''}>${__ddcLineEscapeHtml__(label)}</option>`;
  }
}
