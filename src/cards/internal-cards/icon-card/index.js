/*
 * Internal icon card and editor.
 *
 * The icon card renders a responsive Home Assistant icon with optional state-driven color, opacity,
 * rotation, and pulse behavior.
 */

import { DDC_ICON_CARD_EDITOR_TAG } from '../element-tags.js';
import {
  __ddcLineIsActive__,
  __ddcLineNormalizeNumber__,
  __ddcTableEscapeAttr__,
  __ddcTableEscapeHtml__,
} from '../shared-helpers.js';

function __ddcIconNormalizeSizeMode__(value = 'manual') {
  const normalized = String(value || 'manual').trim().toLowerCase().replace(/_/g, '-');
  if (['fit', 'fill', 'auto', 'responsive', 'card', 'card-fit'].includes(normalized)) return 'fit';
  return 'manual';
}
 function __ddcIconNormalizeConfig__(config = {}) {
  const fallback = DdcIconCard.getStubConfig();
  return {
    ...fallback,
    ...(config || {}),
    icon: String(config?.icon || fallback.icon),
    entity: String(config?.entity || ''),
    size: __ddcLineNormalizeNumber__(config?.size, fallback.size, 20, 320),
    size_mode: __ddcIconNormalizeSizeMode__(
      config?.size_mode
      ?? config?.sizeMode
      ?? (config?.fit_to_card ? 'fit' : fallback.size_mode)
    ),
    color: String(config?.color || fallback.color),
    active_color: String(config?.active_color || fallback.active_color),
    state_based_color: config?.state_based_color !== false,
    glow: config?.glow !== false,
    rotate: __ddcLineNormalizeNumber__(config?.rotate, fallback.rotate, -3600, 3600),
    pulse_when_active: config?.pulse_when_active !== false,
    opacity_based_on_state: !!config?.opacity_based_on_state,
    active_opacity: __ddcLineNormalizeNumber__(config?.active_opacity, fallback.active_opacity, 0, 1),
    inactive_opacity: __ddcLineNormalizeNumber__(config?.inactive_opacity, fallback.inactive_opacity, 0, 1),
    active_states: String(config?.active_states || fallback.active_states),
    click_action: String(config?.click_action || fallback.click_action).toLowerCase()
  };
}
 function __ddcIconVisualState__(cfg = {}, hass = null) {
  const entityId = String(cfg.entity || '').trim();
  const entity = entityId ? hass?.states?.[entityId] : null;
  const entityIcon = String(entity?.attributes?.icon || '').trim();
  const icon = String(cfg.icon || entityIcon || 'mdi:flash').trim() || 'mdi:flash';
  const hasEntity = !!entityId;
  const isActive = hasEntity ? __ddcLineIsActive__(entity?.state ?? '', cfg.active_states) : false;
  const useStateColor = cfg.state_based_color !== false && hasEntity;
  const currentColor = useStateColor ? (isActive ? cfg.active_color : cfg.color) : cfg.color;
  const opacity = cfg.opacity_based_on_state && hasEntity
    ? (isActive ? cfg.active_opacity : cfg.inactive_opacity)
    : cfg.active_opacity;
  const clickAction = String(cfg.click_action || 'none').toLowerCase();
  const clickable = hasEntity && clickAction !== 'none';
  return {
    icon,
    entityId,
    hasEntity,
    isActive,
    currentColor: String(currentColor || cfg.color || 'var(--primary-color, #ff9800)'),
    opacity: __ddcLineNormalizeNumber__(opacity, 1, 0, 1),
    clickable,
    shouldPulse: !!cfg.pulse_when_active && hasEntity && isActive
  };
}


export class DdcIconCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = DdcIconCard.getStubConfig();
    this._hass = null;
    this._shellReady = false;
    this._boundActivate = this._handleActivate_.bind(this);
    this._boundKeydown = this._handleKeydown_.bind(this);
  }
   static getStubConfig() {
    return {
      type: 'custom:ddc-icon-card',
      icon: 'mdi:flash',
      entity: '',
      size: 96,
      size_mode: 'manual',
      color: 'var(--primary-color, #ff9800)',
      active_color: '#22c55e',
      state_based_color: true,
      glow: true,
      rotate: 0,
      pulse_when_active: true,
      opacity_based_on_state: false,
      active_opacity: 1,
      inactive_opacity: 0.28,
      active_states: 'on,home,open,playing,charging,active,>0',
      click_action: 'none'
    };
  }
   static async getConfigElement() {
    return document.createElement(DDC_ICON_CARD_EDITOR_TAG);
  }
   async getConfigElement() {
    return document.createElement(DDC_ICON_CARD_EDITOR_TAG);
  }
   setConfig(config) {
    this._config = __ddcIconNormalizeConfig__(config);
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
   disconnectedCallback() {
    this._hitAreaEl?.removeEventListener?.('click', this._boundActivate);
    this._hitAreaEl?.removeEventListener?.('keydown', this._boundKeydown);
  }
   getCardSize() {
    return 2;
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
          display:grid;
          place-items:center;
          width:100%;
          height:100%;
          min-height:100%;
          padding:10px;
          box-sizing:border-box;
          container-type:size;
          isolation:isolate;
          --ddc-icon-size:96px;
          --ddc-icon-available:max(20px, min(calc(100cqw - 20px), calc(100cqh - 20px)));
          --ddc-icon-box-size:min(var(--ddc-icon-size), var(--ddc-icon-available));
          --ddc-icon-color:var(--primary-color, #ff9800);
          --ddc-icon-opacity:1;
          --ddc-icon-rotate:0deg;
        }
        .shell.is-fit{
          --ddc-icon-box-size:var(--ddc-icon-available);
        }
        .hit-area{
          display:grid;
          place-items:center;
          width:100%;
          height:100%;
          min-height:100%;
          border-radius:inherit;
          outline:none;
          cursor:default;
        }
        .hit-area.is-clickable{
          cursor:pointer;
        }
        .hit-area:focus-visible{
          box-shadow:0 0 0 3px color-mix(in oklab, var(--ddc-icon-color) 28%, transparent);
        }
        .icon-wrap{
          position:relative;
          width:var(--ddc-icon-box-size);
          height:var(--ddc-icon-box-size);
          display:grid;
          place-items:center;
          max-width:100%;
          max-height:100%;
        }
        .icon-wrap ha-icon{
          --mdc-icon-size:100%;
          width:100%;
          height:100%;
          color:var(--ddc-icon-color);
          opacity:var(--ddc-icon-opacity);
          transform:rotate(var(--ddc-icon-rotate));
          transform-origin:center;
          filter:drop-shadow(0 0 0 transparent);
          transition:
            color .18s ease,
            opacity .18s ease,
            transform .18s ease,
            filter .18s ease;
        }
        .shell.is-glow .icon-wrap ha-icon{
          filter:drop-shadow(0 0 12px color-mix(in srgb, var(--ddc-icon-color) 38%, transparent));
        }
        .shell.is-pulsing .icon-wrap ha-icon{
          animation:ddc-icon-pulse 1.65s ease-in-out infinite;
        }
        .shell.is-clickable .hit-area:hover ha-icon,
        .shell.is-clickable .hit-area:focus-visible ha-icon{
          opacity:min(1, calc(var(--ddc-icon-opacity) + 0.08));
        }
        @supports not (width: 1cqw){
          .shell{
            --ddc-icon-box-size:min(var(--ddc-icon-size), 100%);
          }
          .shell.is-fit{
            --ddc-icon-box-size:100%;
          }
        }
        @media (prefers-reduced-motion: reduce){
          .icon-wrap ha-icon{
            transition:none;
          }
          .shell.is-pulsing .icon-wrap ha-icon{
            animation:none;
          }
        }
        @keyframes ddc-icon-pulse{
          0%, 100%{
            transform:rotate(var(--ddc-icon-rotate)) scale(1);
          }
          45%{
            transform:rotate(var(--ddc-icon-rotate)) scale(1.08);
          }
          60%{
            transform:rotate(var(--ddc-icon-rotate)) scale(1.03);
          }
        }
      </style>
      <ha-card>
        <div class="shell">
          <div class="hit-area" tabindex="-1" aria-label="Icon card">
            <div class="icon-wrap">
              <ha-icon icon="mdi:flash"></ha-icon>
            </div>
          </div>
        </div>
      </ha-card>`;
    this._shellEl = this.shadowRoot.querySelector('.shell');
    this._hitAreaEl = this.shadowRoot.querySelector('.hit-area');
    this._iconEl = this.shadowRoot.querySelector('ha-icon');
    this._hitAreaEl?.addEventListener('click', this._boundActivate);
    this._hitAreaEl?.addEventListener('keydown', this._boundKeydown);
    this._shellReady = true;
  }
   _fireMoreInfo_(entityId) {
    if (!entityId) return;
    try {
      this.dispatchEvent(new CustomEvent('hass-more-info', {
        detail: { entityId },
        bubbles: true,
        composed: true
      }));
    } catch {}
  }
   _handleKeydown_(ev) {
    if (!ev) return;
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      this._handleActivate_();
    }
  }
   _handleActivate_() {
    const entityId = String(this._config?.entity || '').trim();
    const action = String(this._config?.click_action || 'none').toLowerCase();
    if (!entityId || action === 'none') return;
    if (action === 'toggle') {
      try { this._hass?.callService?.('homeassistant', 'toggle', { entity_id: entityId }); } catch {}
      return;
    }
    this._fireMoreInfo_(entityId);
  }
   _renderCard_() {
    this._ensureShell_();
    if (!this._shellEl || !this._iconEl || !this._hitAreaEl || !this._config) return;
    const cfg = this._config;
    const visual = __ddcIconVisualState__(cfg, this._hass);
     this._iconEl.setAttribute('icon', visual.icon);
    this._shellEl.style.setProperty('--ddc-icon-size', `${Math.round(__ddcLineNormalizeNumber__(cfg.size, 96, 20, 320))}px`);
    this._shellEl.style.setProperty('--ddc-icon-color', visual.currentColor);
    this._shellEl.style.setProperty('--ddc-icon-opacity', `${visual.opacity}`);
    this._shellEl.style.setProperty('--ddc-icon-rotate', `${__ddcLineNormalizeNumber__(cfg.rotate, 0, -3600, 3600)}deg`);
    this._shellEl.classList.toggle('is-fit', __ddcIconNormalizeSizeMode__(cfg.size_mode) === 'fit');
    this._shellEl.classList.toggle('is-glow', cfg.glow !== false);
    this._shellEl.classList.toggle('is-pulsing', visual.shouldPulse);
    this._shellEl.classList.toggle('is-clickable', visual.clickable);
    this._hitAreaEl.classList.toggle('is-clickable', visual.clickable);
    this._hitAreaEl.tabIndex = visual.clickable ? 0 : -1;
    this._hitAreaEl.setAttribute('aria-label', visual.clickable && visual.entityId ? `Icon card for ${visual.entityId}` : 'Icon card');
  }
}
export class DdcIconCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = DdcIconCard.getStubConfig();
    this._configSig = '';
    this._emitTimer = null;
  }
   setConfig(config) {
    const next = __ddcIconNormalizeConfig__(config);
    const sig = JSON.stringify(next);
    if (sig === this._configSig) return;
    this._configSig = sig;
    this._config = next;
    this._renderEditor_();
  }
   set hass(hass) {
    this._hass = hass;
    if (!this.shadowRoot.childElementCount) this._renderEditor_();
    else this._updatePreview_();
  }
   disconnectedCallback() {
    clearTimeout(this._emitTimer);
  }
   _queueEmit_() {
    clearTimeout(this._emitTimer);
    this._emitTimer = setTimeout(() => {
      const config = { ...this._config };
      this._configSig = JSON.stringify(config);
      this.dispatchEvent(new CustomEvent('config-changed', {
        detail: { config }
      }));
    }, 120);
  }
   _bindField_(selector, key, type = 'text') {
    const input = this.shadowRoot.querySelector(selector);
    if (!input) return;
    const eventName = type === 'select' || type === 'checkbox' ? 'change' : 'input';
    input.addEventListener(eventName, () => {
      if (type === 'checkbox') {
        this._config[key] = !!input.checked;
      } else if (type === 'number') {
        const defaults = {
          size: [96, 20, 320],
          rotate: [0, -3600, 3600],
          active_opacity: [1, 0, 1],
          inactive_opacity: [0.28, 0, 1]
        };
        const [fallback, min, max] = defaults[key] || [0, -Infinity, Infinity];
        this._config[key] = __ddcLineNormalizeNumber__(input.value, fallback, min, max);
      } else {
        this._config[key] = input.value;
      }
      this._syncControlState_(key);
      this._updatePreview_();
      this._queueEmit_();
    });
  }
   _syncControlState_() {
    if (!this.shadowRoot) return;
    const cfg = this._config || DdcIconCard.getStubConfig();
    const setValue = (selector, value) => {
      const el = this.shadowRoot.querySelector(selector);
      if (el && String(el.value) !== String(value)) el.value = String(value);
    };
    const setText = (selector, value) => {
      this.shadowRoot.querySelectorAll(selector).forEach((el) => {
        el.textContent = value;
      });
    };
     const size = Math.round(__ddcLineNormalizeNumber__(cfg.size, 96, 20, 320));
    const rotate = Math.round(__ddcLineNormalizeNumber__(cfg.rotate, 0, -3600, 3600));
    const activeOpacity = __ddcLineNormalizeNumber__(cfg.active_opacity, 1, 0, 1);
    const inactiveOpacity = __ddcLineNormalizeNumber__(cfg.inactive_opacity, 0.28, 0, 1);
    const sizeMode = __ddcIconNormalizeSizeMode__(cfg.size_mode);
    const sizeDisabled = sizeMode === 'fit';
     setValue('#icon', cfg.icon || '');
    setValue('#entity', cfg.entity || '');
    setValue('#activeStates', cfg.active_states || '');
    setValue('#size', size);
    setValue('#sizeRange', size);
    setValue('#rotate', rotate);
    setValue('#rotateRange', rotate);
    setValue('#color', cfg.color || '');
    setValue('#activeColor', cfg.active_color || '');
    setValue('#activeOpacity', activeOpacity);
    setValue('#activeOpacityRange', activeOpacity);
    setValue('#inactiveOpacity', inactiveOpacity);
    setValue('#inactiveOpacityRange', inactiveOpacity);
    setValue('#clickAction', String(cfg.click_action || 'none').toLowerCase());
     setText('[data-size-output]', `${size}px`);
    setText('[data-size-hint]', sizeDisabled ? 'Follows card frame' : 'Fixed icon size');
    setText('[data-rotate-output]', `${rotate}deg`);
    setText('[data-active-opacity-output]', `${Math.round(activeOpacity * 100)}%`);
    setText('[data-inactive-opacity-output]', `${Math.round(inactiveOpacity * 100)}%`);
     ['#size', '#sizeRange'].forEach((selector) => {
      const el = this.shadowRoot.querySelector(selector);
      if (el) el.disabled = sizeDisabled;
    });
    this.shadowRoot.querySelector('[data-size-control]')?.classList.toggle('is-disabled', sizeDisabled);
    this.shadowRoot.querySelectorAll('[data-ddc-set="size_mode"]').forEach((btn) => {
      const active = String(btn.dataset.value || '') === sizeMode;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
     ['stateBasedColor', 'glow', 'pulseWhenActive', 'opacityBasedOnState'].forEach((id) => {
      const input = this.shadowRoot.querySelector(`#${id}`);
      if (!input) return;
      const key = ({
        stateBasedColor: 'state_based_color',
        glow: 'glow',
        pulseWhenActive: 'pulse_when_active',
        opacityBasedOnState: 'opacity_based_on_state'
      })[id];
      input.checked = !!cfg[key];
    });
  }
   _bindQuickSetters_() {
    this.shadowRoot.querySelectorAll('[data-ddc-set]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.ddcSet;
        if (!key) return;
        this._config[key] = btn.dataset.value || '';
        if (key === 'size_mode') this._config[key] = __ddcIconNormalizeSizeMode__(this._config[key]);
        this._syncControlState_(key);
        this._updatePreview_();
        this._queueEmit_();
      });
    });
  }
   _updatePreview_() {
    if (!this.shadowRoot || !this._config) return;
    const cfg = __ddcIconNormalizeConfig__(this._config);
    const visual = __ddcIconVisualState__(cfg, this._hass);
    const preview = this.shadowRoot.querySelector('.preview-shell');
    const iconEl = this.shadowRoot.querySelector('.preview-icon ha-icon');
    if (!preview || !iconEl) return;
     preview.style.setProperty('--ddc-icon-size', `${Math.round(cfg.size)}px`);
    preview.style.setProperty('--ddc-icon-color', visual.currentColor);
    preview.style.setProperty('--ddc-icon-opacity', `${visual.opacity}`);
    preview.style.setProperty('--ddc-icon-rotate', `${__ddcLineNormalizeNumber__(cfg.rotate, 0, -3600, 3600)}deg`);
    preview.classList.toggle('is-fit', __ddcIconNormalizeSizeMode__(cfg.size_mode) === 'fit');
    preview.classList.toggle('is-glow', cfg.glow !== false);
    preview.classList.toggle('is-pulsing', visual.shouldPulse);
    iconEl.setAttribute('icon', visual.icon);
     const iconName = this.shadowRoot.querySelector('[data-preview-icon]');
    if (iconName) iconName.textContent = visual.icon;
    const stateText = this.shadowRoot.querySelector('[data-preview-state]');
    if (stateText) {
      stateText.textContent = visual.hasEntity
        ? (visual.isActive ? 'Active entity' : 'Inactive entity')
        : 'Static icon';
    }
  }
   _renderEditor_() {
    const cfg = __ddcIconNormalizeConfig__(this._config || DdcIconCard.getStubConfig());
    this._config = cfg;
    const entityOptions = Object.keys(this._hass?.states || {})
      .sort((a, b) => a.localeCompare(b))
      .map((entityId) => `<option value="${__ddcTableEscapeAttr__(entityId)}"></option>`)
      .join('');
     this.shadowRoot.innerHTML = `
      <style>
        :host{
          display:block;
          color:var(--primary-text-color);
          --ddc-editor-surface:color-mix(in oklab, var(--ha-card-background, #111827) 88%, transparent);
          --ddc-editor-border:color-mix(in oklab, var(--divider-color, rgba(148,163,184,.28)) 72%, transparent);
          --ddc-editor-muted:var(--secondary-text-color, #94a3b8);
        }
        .editor{
          display:grid;
          gap:14px;
        }
        .preview-panel,
        .section{
          display:grid;
          gap:12px;
          padding:14px;
          border-radius:8px;
          background:var(--ddc-editor-surface);
          border:1px solid var(--ddc-editor-border);
        }
        .preview-panel{
          grid-template-columns:minmax(138px, 184px) minmax(0, 1fr);
          align-items:stretch;
        }
        .preview-shell{
          display:grid;
          place-items:center;
          min-height:154px;
          border-radius:8px;
          border:1px solid color-mix(in oklab, var(--primary-color, #ff9800) 22%, var(--ddc-editor-border));
          background:
            linear-gradient(135deg, color-mix(in oklab, var(--primary-color, #ff9800) 12%, transparent), transparent 58%),
            color-mix(in oklab, var(--ha-card-background, #111827) 92%, var(--primary-color, #ff9800));
          container-type:size;
          overflow:hidden;
          --ddc-icon-size:96px;
          --ddc-icon-available:max(20px, min(calc(100cqw - 24px), calc(100cqh - 24px)));
          --ddc-icon-box-size:min(var(--ddc-icon-size), var(--ddc-icon-available));
          --ddc-icon-color:var(--primary-color, #ff9800);
          --ddc-icon-opacity:1;
          --ddc-icon-rotate:0deg;
        }
        .preview-shell.is-fit{
          --ddc-icon-box-size:var(--ddc-icon-available);
        }
        .preview-icon{
          display:grid;
          place-items:center;
          width:var(--ddc-icon-box-size);
          height:var(--ddc-icon-box-size);
          max-width:100%;
          max-height:100%;
        }
        .preview-icon ha-icon{
          --mdc-icon-size:100%;
          width:100%;
          height:100%;
          color:var(--ddc-icon-color);
          opacity:var(--ddc-icon-opacity);
          transform:rotate(var(--ddc-icon-rotate));
          transition:color .18s ease, opacity .18s ease, transform .18s ease, filter .18s ease;
        }
        .preview-shell.is-glow .preview-icon ha-icon{
          filter:drop-shadow(0 0 14px color-mix(in srgb, var(--ddc-icon-color) 40%, transparent));
        }
        .preview-shell.is-pulsing .preview-icon ha-icon{
          animation:ddc-editor-icon-pulse 1.65s ease-in-out infinite;
        }
        .preview-meta{
          display:grid;
          align-content:center;
          gap:8px;
          min-width:0;
        }
        .preview-meta strong{
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          font-size:1rem;
        }
        .preview-meta span{
          color:var(--ddc-editor-muted);
          font-size:.86rem;
        }
        .preview-tags{
          display:flex;
          flex-wrap:wrap;
          gap:8px;
          margin-top:4px;
        }
        .preview-tags span{
          min-height:28px;
          display:inline-flex;
          align-items:center;
          padding:0 10px;
          border-radius:999px;
          background:color-mix(in oklab, var(--primary-color, #ff9800) 13%, transparent);
          color:var(--primary-text-color);
          border:1px solid color-mix(in oklab, var(--primary-color, #ff9800) 28%, transparent);
        }
        .section-head{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
        }
        .section-head strong{
          font-size:.95rem;
        }
        .grid{
          display:grid;
          gap:12px;
          grid-template-columns:repeat(2, minmax(0, 1fr));
        }
        .field{
          display:grid;
          gap:8px;
          min-width:0;
          font-size:.9rem;
          font-weight:650;
        }
        .field.full{
          grid-column:1 / -1;
        }
        .field.is-disabled{
          opacity:.72;
        }
        .label-line{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
        }
        output,
        .field-hint{
          color:var(--ddc-editor-muted);
          font-size:.82rem;
          font-weight:600;
          white-space:nowrap;
        }
        input[type="text"],
        input[type="number"],
        select{
          width:100%;
          box-sizing:border-box;
          min-height:44px;
          border-radius:8px;
          border:1px solid var(--ddc-editor-border);
          background:color-mix(in oklab, var(--ha-card-background, #111827) 86%, #000);
          color:var(--primary-text-color);
          padding:10px 12px;
          outline:none;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
          font:inherit;
        }
        input[type="number"]{
          max-width:94px;
          text-align:right;
          font-variant-numeric:tabular-nums;
        }
        input[type="range"]{
          width:100%;
          min-width:0;
          accent-color:var(--primary-color, #ff9800);
        }
        input:disabled{
          opacity:.48;
          cursor:not-allowed;
        }
        input[type="text"]:focus,
        input[type="number"]:focus,
        select:focus,
        button:focus-visible{
          border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, var(--ddc-editor-border));
          box-shadow:0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent);
        }
        .range-row{
          display:grid;
          grid-template-columns:minmax(0, 1fr) 94px;
          align-items:center;
          gap:10px;
        }
        .segmented{
          display:grid;
          grid-template-columns:repeat(2, minmax(0, 1fr));
          gap:4px;
          padding:4px;
          border-radius:10px;
          border:1px solid var(--ddc-editor-border);
          background:rgba(127,127,127,.08);
        }
        button.segment{
          min-height:38px;
          border:0;
          border-radius:7px;
          background:transparent;
          color:var(--ddc-editor-muted);
          font:inherit;
          font-weight:750;
          cursor:pointer;
        }
        button.segment.active{
          background:var(--primary-color, #ff9800);
          color:var(--text-primary-color, #fff);
          box-shadow:0 1px 8px color-mix(in oklab, var(--primary-color, #ff9800) 24%, transparent);
        }
        .swatches{
          display:flex;
          flex-wrap:wrap;
          gap:8px;
        }
        .swatch{
          width:34px;
          height:34px;
          border-radius:8px;
          border:1px solid var(--ddc-editor-border);
          cursor:pointer;
          background:var(--swatch);
        }
        .toggles{
          display:grid;
          gap:10px;
          grid-template-columns:repeat(2, minmax(0, 1fr));
        }
        .toggle{
          display:inline-flex;
          align-items:center;
          gap:10px;
          min-height:44px;
          padding:0 12px;
          border-radius:8px;
          border:1px solid var(--ddc-editor-border);
          background:rgba(127,127,127,.07);
          font-weight:650;
        }
        .toggle input{
          accent-color:var(--primary-color, #ff9800);
        }
        @supports not (width: 1cqw){
          .preview-shell{
            --ddc-icon-box-size:min(var(--ddc-icon-size), 100%);
          }
          .preview-shell.is-fit{
            --ddc-icon-box-size:100%;
          }
        }
        @media (prefers-reduced-motion: reduce){
          .preview-icon ha-icon{
            transition:none;
          }
          .preview-shell.is-pulsing .preview-icon ha-icon{
            animation:none;
          }
        }
        @media (max-width: 760px){
          .preview-panel,
          .grid,
          .toggles{
            grid-template-columns:1fr;
          }
          .preview-shell{
            min-height:132px;
          }
          .field.full{
            grid-column:auto;
          }
        }
        @keyframes ddc-editor-icon-pulse{
          0%, 100%{ transform:rotate(var(--ddc-icon-rotate)) scale(1); }
          45%{ transform:rotate(var(--ddc-icon-rotate)) scale(1.08); }
          60%{ transform:rotate(var(--ddc-icon-rotate)) scale(1.03); }
        }
      </style>
      <div class="editor">
        <section class="preview-panel">
          <div class="preview-shell">
            <div class="preview-icon">
              <ha-icon icon="${__ddcTableEscapeAttr__(cfg.icon || 'mdi:flash')}"></ha-icon>
            </div>
          </div>
          <div class="preview-meta">
            <strong data-preview-icon>${__ddcTableEscapeHtml__(cfg.icon || 'mdi:flash')}</strong>
            <span data-preview-state>Static icon</span>
            <div class="preview-tags">
              <span data-size-output>${Math.round(cfg.size)}px</span>
              <span data-size-hint>Fixed icon size</span>
            </div>
          </div>
        </section>
         <section class="section">
          <div class="section-head"><strong>Source</strong></div>
          <datalist id="ddcIconEntityList">${entityOptions}</datalist>
          <div class="grid">
            <label class="field">
              <span>Icon</span>
              <input id="icon" type="text" value="${__ddcTableEscapeAttr__(cfg.icon || '')}" placeholder="mdi:flash" />
            </label>
            <label class="field">
              <span>Entity</span>
              <input id="entity" type="text" list="ddcIconEntityList" value="${__ddcTableEscapeAttr__(cfg.entity || '')}" placeholder="sensor.example_power" />
            </label>
            <label class="field full">
              <span>Active states</span>
              <input id="activeStates" type="text" value="${__ddcTableEscapeAttr__(cfg.active_states || '')}" placeholder="on,home,open,playing,charging,active,>0" />
            </label>
          </div>
        </section>
         <section class="section">
          <div class="section-head"><strong>Scale</strong></div>
          <div class="grid">
            <div class="field full">
              <span>Size mode</span>
              <div class="segmented" role="group" aria-label="Size mode">
                <button class="segment" type="button" data-ddc-set="size_mode" data-value="manual" aria-pressed="false">Fixed</button>
                <button class="segment" type="button" data-ddc-set="size_mode" data-value="fit" aria-pressed="false">Fit card</button>
              </div>
            </div>
            <label class="field full" data-size-control>
              <span class="label-line"><span>Size</span><output data-size-output>${Math.round(cfg.size)}px</output></span>
              <div class="range-row">
                <input id="sizeRange" type="range" min="20" max="320" step="1" value="${Number(cfg.size || 96)}" />
                <input id="size" type="number" min="20" max="320" step="1" value="${Number(cfg.size || 96)}" />
              </div>
            </label>
            <label class="field full">
              <span class="label-line"><span>Rotate</span><output data-rotate-output>${Number(cfg.rotate || 0)}deg</output></span>
              <div class="range-row">
                <input id="rotateRange" type="range" min="-3600" max="3600" step="1" value="${Number(cfg.rotate || 0)}" />
                <input id="rotate" type="number" min="-3600" max="3600" step="1" value="${Number(cfg.rotate || 0)}" />
              </div>
            </label>
          </div>
        </section>
         <section class="section">
          <div class="section-head"><strong>Color</strong></div>
          <div class="grid">
            <label class="field">
              <span>Base color</span>
              <input id="color" type="text" value="${__ddcTableEscapeAttr__(cfg.color || '')}" placeholder="var(--primary-color)" />
              <span class="swatches" aria-label="Base color presets">
                <button class="swatch" type="button" title="Primary" aria-label="Primary" data-ddc-set="color" data-value="var(--primary-color, #ff9800)" style="--swatch:var(--primary-color, #ff9800)"></button>
                <button class="swatch" type="button" title="Amber" aria-label="Amber" data-ddc-set="color" data-value="#f59e0b" style="--swatch:#f59e0b"></button>
                <button class="swatch" type="button" title="Slate" aria-label="Slate" data-ddc-set="color" data-value="#94a3b8" style="--swatch:#94a3b8"></button>
              </span>
            </label>
            <label class="field">
              <span>Active color</span>
              <input id="activeColor" type="text" value="${__ddcTableEscapeAttr__(cfg.active_color || '')}" placeholder="#22c55e" />
              <span class="swatches" aria-label="Active color presets">
                <button class="swatch" type="button" title="Green" aria-label="Green" data-ddc-set="active_color" data-value="#22c55e" style="--swatch:#22c55e"></button>
                <button class="swatch" type="button" title="Blue" aria-label="Blue" data-ddc-set="active_color" data-value="#38bdf8" style="--swatch:#38bdf8"></button>
                <button class="swatch" type="button" title="Rose" aria-label="Rose" data-ddc-set="active_color" data-value="#fb7185" style="--swatch:#fb7185"></button>
              </span>
            </label>
            <label class="field">
              <span class="label-line"><span>Active opacity</span><output data-active-opacity-output>${Math.round((cfg.active_opacity ?? 1) * 100)}%</output></span>
              <div class="range-row">
                <input id="activeOpacityRange" type="range" min="0" max="1" step="0.05" value="${Number(cfg.active_opacity ?? 1)}" />
                <input id="activeOpacity" type="number" min="0" max="1" step="0.05" value="${Number(cfg.active_opacity ?? 1)}" />
              </div>
            </label>
            <label class="field">
              <span class="label-line"><span>Inactive opacity</span><output data-inactive-opacity-output>${Math.round((cfg.inactive_opacity ?? 0.28) * 100)}%</output></span>
              <div class="range-row">
                <input id="inactiveOpacityRange" type="range" min="0" max="1" step="0.05" value="${Number(cfg.inactive_opacity ?? 0.28)}" />
                <input id="inactiveOpacity" type="number" min="0" max="1" step="0.05" value="${Number(cfg.inactive_opacity ?? 0.28)}" />
              </div>
            </label>
          </div>
        </section>
         <section class="section">
          <div class="section-head"><strong>State</strong></div>
          <div class="toggles">
            <label class="toggle">
              <input id="stateBasedColor" type="checkbox" ${cfg.state_based_color ? 'checked' : ''}>
              <span>State color</span>
            </label>
            <label class="toggle">
              <input id="glow" type="checkbox" ${cfg.glow ? 'checked' : ''}>
              <span>Glow</span>
            </label>
            <label class="toggle">
              <input id="pulseWhenActive" type="checkbox" ${cfg.pulse_when_active ? 'checked' : ''}>
              <span>Pulse active</span>
            </label>
            <label class="toggle">
              <input id="opacityBasedOnState" type="checkbox" ${cfg.opacity_based_on_state ? 'checked' : ''}>
              <span>State opacity</span>
            </label>
          </div>
        </section>
         <section class="section">
          <div class="section-head"><strong>Action</strong></div>
          <label class="field">
            <span>Click action</span>
            <select id="clickAction">
              <option value="none" ${cfg.click_action === 'none' ? 'selected' : ''}>None</option>
              <option value="more-info" ${cfg.click_action === 'more-info' ? 'selected' : ''}>More info</option>
              <option value="toggle" ${cfg.click_action === 'toggle' ? 'selected' : ''}>Toggle entity</option>
            </select>
          </label>
        </section>
      </div>`;
     this._bindField_('#icon', 'icon');
    this._bindField_('#entity', 'entity');
    this._bindField_('#activeStates', 'active_states');
    this._bindField_('#size', 'size', 'number');
    this._bindField_('#sizeRange', 'size', 'number');
    this._bindField_('#rotate', 'rotate', 'number');
    this._bindField_('#rotateRange', 'rotate', 'number');
    this._bindField_('#color', 'color');
    this._bindField_('#activeColor', 'active_color');
    this._bindField_('#activeOpacity', 'active_opacity', 'number');
    this._bindField_('#activeOpacityRange', 'active_opacity', 'number');
    this._bindField_('#inactiveOpacity', 'inactive_opacity', 'number');
    this._bindField_('#inactiveOpacityRange', 'inactive_opacity', 'number');
    this._bindField_('#clickAction', 'click_action', 'select');
    this._bindField_('#stateBasedColor', 'state_based_color', 'checkbox');
    this._bindField_('#glow', 'glow', 'checkbox');
    this._bindField_('#pulseWhenActive', 'pulse_when_active', 'checkbox');
    this._bindField_('#opacityBasedOnState', 'opacity_based_on_state', 'checkbox');
    this._bindQuickSetters_();
    this._syncControlState_();
    this._updatePreview_();
  }
}
