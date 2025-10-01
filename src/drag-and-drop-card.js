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
      try { this._applyAutoScale?.(); } catch {}
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
        try { this._applyAutoScale?.(); } catch {}
      } catch {}
    };
    // Attach listeners
    try { this.addEventListener('pointerdown', this.__onDDCPointerDown, { passive: true }); } catch {}
    try { this.addEventListener('pointermove', this.__onDDCPointerMove, { passive: true }); } catch {}
    try { window.addEventListener('pointerup', this.__onDDCPointerUp, { passive: true }); } catch {}
    try { window.addEventListener('pointercancel', this.__onDDCPointerUp, { passive: true }); } catch {}
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

  static getStubConfig(/* hass, entities, entitiesFallback */) {
    return {
      type: 'custom:drag-and-drop-card',
      // ← generated immediately when the card is added
      storage_key: this._genKey(),

      // (optional) sensible defaults you already use:
      grid: 10,
      drag_live_snap: false,
      auto_save: true,
      auto_save_debounce: 800,
      container_size_mode: 'dynamic',


      // your baked-in hero image, if you want it visible by default
      hero_image:
        "https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",
    };
  }

  /* ------------------------- Mini config editor (HA) ------------------------- */
// Replace your existing static getConfigElement() with the version below.
// It uses HA-native inputs (ha-textfield, ha-select, ha-formfield + ha-checkbox)
// for consistent styling, clearer alignment, helper text, and a subtle animation
// for the Apply button when there are unapplied changes.

static getConfigElement() {
  const el = document.createElement('div');
  el.innerHTML = `
    <style>
      :host, .ddc-editor { font-family: var(--paper-font-body1_-_font-family, Roboto, system-ui, sans-serif); color: var(--primary-text-color); }

      .ddc-editor { display: grid; grid-template-columns: 220px 1fr; gap: 10px 16px; align-items: center; box-sizing: border-box; padding: 8px 4px; }
      .section { grid-column: 1 / -1; margin: 10px 0 2px; font-weight: 600; opacity: 0.9; }
      .row-spacer { grid-column: 1 / -1; height: 2px; background: var(--divider-color); opacity: .2; border-radius: 2px; }

      .label { align-self: flex-start; padding-top: 6px; font-weight: 600; opacity: .9; }
      .helper { grid-column: 2 / 3; font-size: .85rem; opacity: .7; margin-top: -6px; }

      .inline { display: inline-flex; align-items: center; gap: 8px; }
      .two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }

      .actions { grid-column: 1 / -1; display: flex; gap: 8px; justify-content: flex-end; margin-top: 8px; }
      .actions ha-button[disabled] { opacity: .6; }

      /* Subtle pulse for enabled Apply button */
      @keyframes ddcPulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,0,0,0); }
        50% { transform: scale(1.035); box-shadow: 0 0 12px 2px rgba(255,255,255,.22); }
      }
      #applyBtn:not([disabled]) { animation: ddcPulse 1.8s ease-in-out infinite; }

      /* Make HA inputs fill width nicely */
      ha-textfield, ha-select { width: 100%; }

      /* Checkbox rows: keep left column reserved so alignment stays consistent */
      .left-empty { visibility: hidden; }
    
      </style>

     <div class="ddc-editor">
      <div class="section">Layout & Behavior</div>

      <div class="label">Storage key</div>
      <ha-textfield id="storage_key" label="Storage key" placeholder="my_unique_layout_key"></ha-textfield>
      <div class="helper">Unique key for saving layout positions. Auto-generated if empty.</div>

      <div class="label">Grid size</div>
      <ha-textfield id="grid" label="Grid (px)" type="number" min="4" max="32" step="1" value="10"></ha-textfield>
      <div class="helper">Pixel size of each grid cell. Affects snap and default card size.</div>

      <div class="label">Snap while dragging</div>
      <ha-formfield label="Snap to grid during drag (live)">
        <ha-checkbox id="liveSnap"></ha-checkbox>
      </ha-formfield>
      <div class="helper">If on, elements snap to grid while dragging. If off, snap occurs on drop.</div>

      <div class="label">Auto-save</div>
      <div class="two-col">
        <ha-formfield label="Auto-save changes">
          <ha-checkbox id="autoSave"></ha-checkbox>
        </ha-formfield>
        <ha-textfield id="autoSaveDebounce" label="Debounce (ms)" type="number" min="0" step="50" value="800"></ha-textfield>
      </div>
      <div class="helper">When enabled, layout changes are saved automatically after a short delay.</div>

      <div class="row-spacer"></div>
      <div class="section">Appearance</div>

      <div class="label">Container background</div>
      <ha-textfield id="containerBg" label="CSS color/gradient" placeholder="transparent, #232f3e, linear-gradient(...)" helper=""></ha-textfield>
      <div class="helper">Examples: <code>transparent</code>, <code>#232f3e</code>, <code>linear-gradient(...)</code>.</div>

      <div class="label">Card background</div>
      <ha-textfield id="cardBg" label="CSS color/gradient" placeholder="var(--ha-card-background) or #ffffffcc"></ha-textfield>
      <div class="helper">Background for each card in the layout; can use theme vars.</div>

      <div class="label">Debug logs</div>
      <ha-formfield label="Enable console debug">
        <ha-checkbox id="debug"></ha-checkbox>
      </ha-formfield>

      <div class="label">Disable overlap</div>
      <ha-formfield label="Prevent cards from overlapping">
        <ha-checkbox id="noOverlap"></ha-checkbox>
      </ha-formfield>

      <div class="label">Auto-resize cards</div>
      <ha-formfield label="Scale layout to fit parent (view mode)">
        <ha-checkbox id="autoResize"></ha-checkbox>
      </ha-formfield>


      <div class="row-spacer"></div>
      <div class="section">Container Size</div>

      <div class="label">Mode</div>
      <ha-select id="sizeMode" label="Container size mode">
        <mwc-list-item value="dynamic">Dynamic (auto)</mwc-list-item>
        <mwc-list-item value="fixed_custom">Fixed (custom)</mwc-list-item>
        <mwc-list-item value="preset">Preset</mwc-list-item>
      </ha-select>

      <div class="label">Fixed size</div>
      <div class="inline" id="sizeCustom" style="display:none">
        <ha-textfield id="sizeW" type="number" label="W" min="100" step="10"></ha-textfield>
        <ha-textfield id="sizeH" type="number" label="H" min="100" step="10"></ha-textfield>
      </div>

      <div class="label">Preset</div>
      <div class="inline" id="sizePresetWrap" style="display:none">
        <ha-select id="sizePreset" label="Preset"></ha-select>
        <ha-select id="sizeOrientation" label="Orientation">
          <mwc-list-item value="auto">Auto</mwc-list-item>
          <mwc-list-item value="landscape">Landscape</mwc-list-item>
          <mwc-list-item value="portrait">Portrait</mwc-list-item>
        </ha-select>
      </div>

      <div class="actions">
        <ha-button id="revertBtn">Revert</ha-button>
        <ha-button id="applyBtn" raised disabled>Apply</ha-button>
      </div>
    </div>
  `;

  // ---- Utility helpers ----
  const updateButtons = () => {
    const dirty = isDirty();
    applyBtn.disabled = !dirty;
  };

  const fire = () => {
    const newConfig = el.getConfig();
    el.dispatchEvent(new CustomEvent('config-changed', { detail: { config: newConfig } }));
    // Re-check button states after applying
    updateButtons();
  };

  const toggleSizeControls = () => {
    const mode = el.querySelector('#sizeMode').value;
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


    el.querySelector('#sizeMode').value = el._config.container_size_mode || 'dynamic';
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


    base.container_size_mode = el.querySelector('#sizeMode').value;
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
  on('#sizeMode', 'change'); on('#sizeW'); on('#sizeH');
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

_isContainerFixed() { return this.containerSizeMode !== 'dynamic'; }

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
    this.containerBackground      = config.container_background ?? 'transparent';
    this.cardBackground           = config.card_background ?? 'var(--ha-card-background, var(--card-background-color))';
    this.debug                    = !!config.debug;
    this.editMode                 = false;
    this._backendOK               = false;
    this.disableOverlap           = !!config.disable_overlap;
    this.containerSizeMode        = config.container_size_mode || 'dynamic';
    this.autoResizeCards         = !!config.auto_resize_cards;

    if (this.autoResizeCards) this._startScaleWatch?.(); else this._stopScaleWatch?.();
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

    // Overlay fix for UI based cards
    this._ensureOverlayZFix();

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
          }
          .toolbar{display:flex;gap:8px;margin:6px 0;align-items:center;flex-wrap:wrap}
          .btn{
            background:var(--primary-color);color:#fff;border:none;padding:8px 12px;border-radius:10px;
            cursor:pointer;font:inherit;box-shadow:0 2px 6px rgba(0,0,0,.12)
          }
          .btn.secondary{background:var(--secondary-background-color);color:var(--primary-text-color);border:1px solid var(--divider-color)}
          .btn.ghost{background:transparent;color:var(--primary-text-color);border:1px dashed var(--divider-color)}
          .store-badge {
            margin-left: auto;
            border: 1px solid var(--divider-color);
            border-radius: 999px;
            padding: 4px 10px;
            font-size: .85rem;
            background: rgba(255,193,7,.15);
            display: none; /* hidden by default, shown only in edit mode */
          }

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
          /* make the grid only on the background, aligned to the same origin as cards */
          .card-container::before{
            content:'';
            position:absolute; inset:0;                 /* same origin as absolutely positioned children */
            background-image:
              linear-gradient(var(--ddc-grid-color, rgba(120,120,120,.25)) 1px, transparent 1px),
              linear-gradient(90deg, var(--ddc-grid-color, rgba(120,120,120,.25)) 1px, transparent 1px);
            background-size: var(--ddc-grid-size) var(--ddc-grid-size);
            background-origin: content-box;              /* align pattern to the content/padding edge */
            background-clip: content-box;
            pointer-events:none;
            opacity:0;
            transition: opacity .15s;
            z-index:0;
          }
          .card-container.grid-on::before{
            opacity:.28;
          }

          .card-wrapper{
            position:absolute;
            left: 0;                     /* <<< important: unify origin with the grid */
            top:  0;                     /* <<< important: unify origin with the grid */
            box-sizing: border-box;      /* include the 2px border in the set width/height */
            border:2px solid transparent;
            background:var(--ddc-card-bg, var(--card-background-color));
            cursor:grab;
            /* ensure buttons and resize handles remain visible on very small cards */
            overflow:auto;
            border-radius:14px;
            box-shadow:var(--ha-card-box-shadow,0 2px 12px rgba(0,0,0,.18));
            will-change:transform,width,height,box-shadow; touch-action:auto;
            z-index:1;
          }
          .card-wrapper.dragging{
            cursor:grabbing;
            touch-action: none;
            }
          .card-wrapper.editing.selected{
            border-color:var(--primary-color,#03a9f4);
            box-shadow:0 0 0 2px var(--primary-color,#03a9f4)!important;
          }

          /* ---- empty-state of the card---- */
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
          .btn.info{
            background: var(--ddc-info,#4db6ff);
            color:#0b2537;
            border:1px solid color-mix(in srgb, var(--ddc-info,#4db6ff) 55%, #000 15%);
          }
          .btn.info:hover{ filter: brightness(1.06); transform: translateY(-1px); box-shadow:0 4px 14px rgba(0,0,0,.18) }
          .btn.info:active{ transform: translateY(0) }

          .btn.warning{
            background: var(--ddc-warning,#ff9800);
            color:#210b00;
            border:1px solid color-mix(in srgb, var(--ddc-warning,#ff9800) 55%, #000 15%);
          }
          .btn.warning:hover{ filter: brightness(1.07); transform: translateY(-1px); box-shadow:0 4px 14px rgba(0,0,0,.18) }
          .btn.warning:active{ transform: translateY(0) }

          /* small quality-of-life for all .btn */
          .btn{
            display:inline-flex; align-items:center; gap:8px;
            border-radius:12px; transition: transform .08s ease, box-shadow .12s ease, filter .12s ease;
          }
          .btn ha-icon{ --mdc-icon-size:18px; width:18px; height:18px }

          /* ---- chip ---- */
        .chip{
            position:absolute;
            top:8px;
            right:8px;
            display:flex;
            gap:6px;
            flex-wrap:wrap;             /* allow chip buttons to wrap when space is limited */
            opacity:0;
            transition:opacity .15s;
            z-index:30;
            pointer-events: none;
          }
          .card-wrapper.editing .chip{
            opacity:1;
            pointer-events: auto;
          }
          .card-wrapper.editing .chip{
            opacity:1;
            pointer-events: auto;
          }
          .chip .mini{
            display:inline-flex;align-items:center;gap:6px;
            background:rgba(28,28,30,.78);color:#fff;border:1px solid rgba(255,255,255,.18);
            border-radius:999px;padding:6px 10px;font-size:.76rem;cursor:pointer;letter-spacing:.2px;
            box-shadow:0 2px 6px rgba(0,0,0,.25); transition:transform .08s, background .12s, box-shadow .12s
          }
          .chip .mini:hover{transform:translateY(-1px); background:rgba(28,28,30,.95); box-shadow:0 3px 10px rgba(0,0,0,.35)}
          .chip .mini ha-icon{--mdc-icon-size:18px;width:18px;height:18px}
          .chip .mini.danger{background:rgba(220, 38, 38, .9);border-color:rgba(255,255,255,.22)}
          .chip .mini.danger:hover{background:rgba(220, 38, 38, 1)}
          .chip .mini.pill{padding:6px}

          /* Edit highlight */
          .card-wrapper.editing{ 
            border-color:var(--primary-color,#03a9f4);
            touch-action: none;
          }
          .card-wrapper.editing::after{
            content:"";position:absolute;inset:0;border:1px dashed var(--primary-color,#03a9f4);
            border-radius:12px;pointer-events:none;opacity:.35;z-index:5;box-sizing:border-box
          }

          .shield{position:absolute;inset:0;z-index:10;background:transparent;pointer-events:none}
          .card-wrapper.editing .shield,
          .card-wrapper.dragging .shield{pointer-events:auto;cursor:grab}

          .resize-handle{
            display:none;                 /* shown in edit mode via your existing rule */
            position:absolute;
            bottom:8px;                   /* move INSIDE the wrapper bounds */
            right:8px;                    /* so it can't be clipped by overflow */
            width:28px;
            height:28px;
            border-radius:50%;
            background:var(--primary-color);
            color:#fff;
            border:1px solid rgba(255,255,255,.25);
            cursor:se-resize;
            z-index:999;                  /* above the card content */
            box-shadow:0 3px 8px rgba(0,0,0,.28);
            align-items:center;
            justify-content:center;
          }
          .resize-handle:hover{transform:scale(1.08);box-shadow:0 6px 16px rgba(0,0,0,.35)}
          .card-wrapper.editing .resize-handle{display:flex}
          .resize-handle ha-icon{--mdc-icon-size:18px;width:18px;height:18px;pointer-events:none}

          /* modal */
          .modal{position:fixed;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;z-index:9000}
          .dialog{
            width:min(1220px,96vw);max-height:min(90vh, 900px);display:flex;flex-direction:column;
            background:var(--card-background-color);border-radius:20px;padding:0;border:1px solid var(--divider-color);overflow:visible
          }
          .dlg-head{
            display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--divider-color);
            background:
              radial-gradient(1200px 120px at 20% -40px, rgba(3,169,244,.21), transparent 60%),
              radial-gradient(900px 110px at 80% -40px, rgba(0,150,136,.18), transparent 60%);
          }
          .dlg-head h3{margin:0;font-size:1.1rem;letter-spacing:.2px}
          .dlg-foot{display:flex;gap:10px;justify-content:flex-end;padding:12px;border-top:1px solid var(--divider-color);background:var(--primary-background-color)}
          .btn:disabled{opacity:.6;cursor:not-allowed}

          /* picker layout */
          .layout{display:grid;height:min(84vh,820px);grid-template-columns:260px 1fr}
          #leftPane{border-right:1px solid var(--divider-color);overflow:auto;background:var(--primary-background-color);contain:content}
          #rightPane{overflow:hidden;background:var(--primary-background-color)}
          .rightGrid{
            display:grid;grid-template-columns:540px 1fr;grid-template-rows:auto auto 1fr;gap:12px;padding:12px;height:100%;box-sizing:border-box;position:relative;
          }
          .sec{border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color);overflow:visible;position:relative;contain:content;}
          .sec .hd{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--divider-color);font-weight:600;position: relative;z-index: 10}
          .sec .bd{padding:12px;overflow:visible}       
          .tabs{display:flex;gap:6px;margin-left:auto}
          .tab{
            font-size:.85rem;padding:6px 10px;border-radius:10px;border:1px solid var(--divider-color);
            background:var(--primary-background-color);color:var(--primary-text-color);cursor:pointer
          }
          .tab.active{background:var(--primary-color);color:#fff;border-color:var(--primary-color)}
          .cm-editor{height: 100%}
          /* --- FIX: YAML editor should scroll and not overflow --- */
          #yamlSec { min-height: 0; height: 700px !important; }
          #yamlSec .bd { 
            overflow: auto;        /* allow scrolling inside the YAML section */
            /* allow the YAML editor to use the full available space instead of a fixed max height */
            max-height: none;
            height: 100%;
          }
          /* --- make Visual editor area scrollable, like YAML --- */
          #optionsSec { min-height: 0; overflow: auto;}
          #optionsSec .bd {
            position: relative;
            overflow: auto;
            height: auto;
            max-height: 100%;
          }
          #editorHost { display:block; min-height: 0; }

          #quickFillSec { 
            display: flex; 
            flex-direction: column; 
            min-height: 0; 
          }
          #quickFillSec .bd { 
            overflow: auto;          /* scroll inside the card */
            max-height: 320px;       /* keep it contained; tweak as you wish */
          }

          /* ha-code-editor / CodeMirror height: fixed and scroll inside */
          ha-code-editor { 
            display: block; 
            height: 260px !important; 
          }
          .CodeMirror { 
            height: 260px !important; 
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

                /* --- Tabs bar (DDC) --- */
      /* --- Tabs bar (DDC) --- */
      .ddc-tabs{
        /* Full-width, equal columns */
        display:grid;
        grid-auto-flow:column;
        grid-auto-columns:1fr;
        gap:6px;
        padding:6px;
        align-items:stretch;
        border-bottom:1px solid var(--divider-color, rgba(0,0,0,.12));
        width:100%;
        /* If you prefer flex instead of grid, see the fallback below */
      }

      /* Vertical/left variant unchanged */
      .ddc-tabs-left{
        display:flex;
        flex-direction:column;
        width:160px; min-width:160px;
        border-bottom:none;
        border-right:1px solid var(--divider-color, rgba(0,0,0,.12));
      }

      /* Tab button */
      .ddc-tab{
        display:flex;
        align-items:center;
        justify-content:center;        /* centers label+icon */
        gap:8px;
        padding:10px 12px;
        min-width:0;                   /* allow text ellipsis */
        border-radius:12px;
        border:1px solid
          var(--ha-card-border-color, color-mix(in oklab, var(--primary-text-color) 12%, transparent));
        background:var(--ha-card-background, rgba(0,0,0,.02));
        cursor:pointer;
        font:inherit;
        position:relative;
        transition:background .2s ease, border-color .2s ease, box-shadow .2s ease, transform .2s ease;
      }
      .ddc-tab ha-icon{ --mdc-icon-size:18px; }
      .ddc-tab span{ overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }

      /* Hover */
      .ddc-tab:hover{
        background:color-mix(in oklab, var(--primary-color) 8%, transparent);
        border-color:color-mix(in oklab, var(--primary-color) 40%, transparent);
        box-shadow:0 1px 2px rgba(0,0,0,.15);
      }

      /* Active */
      .ddc-tab.active{
        border-color:var(--primary-color);
        background:color-mix(in oklab, var(--primary-color) 14%, transparent);
        box-shadow:0 2px 6px rgba(0,0,0,.16);
      }

      /* Active "ink bar" */
      .ddc-tab.active::after{
        content:"";
        position:absolute;
        left:8px; right:8px; bottom:-6px;
        height:3px;
        border-radius:2px;
        background:var(--primary-color);
        box-shadow:0 0 0 1px color-mix(in oklab, var(--primary-color) 25%, transparent);
      }

      /* Focus accessibility */
      .ddc-tab:focus-visible{
        outline:3px solid color-mix(in oklab, var(--primary-color) 55%, transparent);
        outline-offset:2px;
      }

      /* Layout helper when using vertical tabs alongside content */
      .ddc-tabs-left-layout{
        display: grid;
        grid-template-columns: 160px 1fr;   /* tabs | content */
        grid-template-rows: auto 1fr;       /* toolbar | main */
        grid-template-areas:
          "toolbar toolbar"
          "tabs    content";
      } 

      /* Place children into the intended areas */
      .ddc-tabs-left-layout .toolbar{ grid-area: toolbar; }
      .ddc-tabs-left-layout #tabsBar{ grid-area: tabs; }
      .ddc-tabs-left-layout #cardContainer{ grid-area: content; }
      
        </style>
        <div class="ddc-root">
          <div class="toolbar">
            <button class="btn" id="addCardBtn" style="display:none">
              <ha-icon icon="mdi:plus"></ha-icon>
              <span style="margin-left:6px">Add Card</span>
            </button>
            <button class="btn secondary" id="reloadBtn" style="display:none">
              <ha-icon icon="mdi:refresh"></ha-icon>
              <span style="margin-left:6px">Reload</span>
            </button>
            <button class="btn secondary" id="diagBtn" style="display:none">
              <ha-icon icon="mdi:play-circle-outline"></ha-icon>
              <span style="margin-left:6px">Diagnostics</span>
            </button>
            <button class="btn secondary" id="exportBtn" style="display:none">
              <ha-icon icon="mdi:download"></ha-icon>
              <span style="margin-left:6px">Export Design</span>
            </button>
            <button class="btn secondary" id="importBtn" style="display:none">
              <ha-icon icon="mdi:upload"></ha-icon>
              <span style="margin-left:6px">Import Design</span>
            </button>
            <button class="btn" id="applyLayoutBtn" style="display:none">
              <ha-icon icon="mdi:content-save"></ha-icon>
              <span style="margin-left:6px">Apply</span>
            </button>
            <button class="btn info" id="exploreBtn" style="display:none" title="Open HADS (Home Assistant Dashboard Store)">
              <ha-icon icon="mdi:storefront-outline"></ha-icon>
              <span>Open HADS</span>
            </button>
            <button class="btn warning" id="exitEditBtn" style="display:none">
              <ha-icon icon="mdi:exit-run"></ha-icon>
              <span>Exit edit mode</span>
            </button>
            <span class="store-badge" id="storeBadge" title="where layout is persisted">storage: local</span>
          </div>
          <div class="ddc-tabs" id="tabsBar" style="display:none"></div>
          <div class="card-container" id="cardContainer"></div>
        </div>
      `;
      this.cardContainer = this.shadowRoot.querySelector('#cardContainer');
      this.addButton     = this.shadowRoot.querySelector('#addCardBtn');
      this.reloadBtn     = this.shadowRoot.querySelector('#reloadBtn');
      this.diagBtn       = this.shadowRoot.querySelector('#diagBtn');
      this.exitEditBtn   = this.shadowRoot.querySelector('#exitEditBtn');
      this.storeBadge    = this.shadowRoot.querySelector('#storeBadge');
      this.exportBtn     = this.shadowRoot.querySelector('#exportBtn');
      this.importBtn     = this.shadowRoot.querySelector('#importBtn');
      this.exploreBtn    = this.shadowRoot.querySelector('#exploreBtn'); 
      this.applyLayoutBtn= this.shadowRoot.querySelector('#applyLayoutBtn');
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
    if (!this.__ddcResizeObs) {
      this.__ddcResizeObs = new ResizeObserver(() => this._applyAutoScale?.());
      this.__ddcResizeObs.observe(this);
      this.__ddcResizeObs.observe(this.cardContainer);
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

  connectedCallback() {
    if (!this.__boundExitEdit) {
      this.__boundExitEdit = () => this._toggleEditMode(false);
    }
    window.addEventListener('pagehide', this.__boundExitEdit);
    window.addEventListener('beforeunload', this.__boundExitEdit);
  
    this.__onVis = () => { if (document.visibilityState === 'hidden') this._toggleEditMode(false); };
    document.addEventListener('visibilitychange', this.__onVis);
  
    // NEW: ensure we never boot in edit mode
    this._toggleEditMode(false);
  

// Ensure scale reapplies when the card becomes visible (e.g., after a tab switch)
if (!this.__visObs) {
  const io = new IntersectionObserver((entries) => {
    if (entries.some(e => e.isIntersecting)) {
      requestAnimationFrame(() => this._applyAutoScale && this._applyAutoScale());
    }
  }, { root: null, threshold: 0 });
  io.observe(this);
  this.__visObs = io;
}

// Also respond to window resizes
this.__ddcOnWinResize = this.__ddcOnWinResize || (() => this._applyAutoScale && this._applyAutoScale());
window.addEventListener('resize', this.__ddcOnWinResize);

    try { this.__ddcBindPointerListeners?.(); } catch {}
}
  
  disconnectedCallback() {
    window.removeEventListener('pagehide', this.__boundExitEdit);
    window.removeEventListener('beforeunload', this.__boundExitEdit);
    document.removeEventListener('visibilitychange', this.__onVis);

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
          this._applyImportedOptions(optsNoKey, true);
        } else if (typeof saved?.grid === 'number') {
        this._applyImportedOptions({ grid: saved.grid }, true);
      }

      // 2) Overlay explicit YAML options (take precedence)
      const overrideKeys = [
        'storage_key','grid','drag_live_snap','auto_save','auto_save_debounce',
        'container_background','card_background','debug','disable_overlap',
        'container_size_mode','container_fixed_width','container_fixed_height',
        'container_preset','container_preset_orientation','tabs','tabs_position','default_tab','hide_tabs_when_single', 'auto_resize_cards'
      ];
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
        }
      });
      bar.appendChild(btn);
    }
    if (this.rootEl) this.rootEl.classList.toggle('ddc-tabs-left-layout', this.tabsPosition === 'left');
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
      
    // apply or clear scaling per mode
    this._applyAutoScale?.();
  }
    });
    try { this._clearSelection(); } catch {}
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
      try { this._queueSave('tab-change'); } catch {}
    };
  }
/* ------------------------------ Edit mode ------------------------------ */
  _toggleEditMode(force=null) {
    // NEW: kill any in-flight “enter edit” timer 
    try { this.__clearPressTimer?.(); } catch {}
    const entering = (force === null) ? !this.editMode : !!force;
    const wasOff = !this.editMode && entering;
  
    this.editMode = entering;

    this.editMode = entering;
    this.addButton.style.display   = this.editMode ? 'inline-block' : 'none';
    this.reloadBtn.style.display   = this.editMode ? 'inline-block' : 'none';
    this.diagBtn.style.display     = this.editMode ? 'inline-block' : 'none';
    this.exitEditBtn.style.display = this.editMode ? 'inline-block' : 'none';
    this.exportBtn.style.display   = this.editMode ? 'inline-block' : 'none';
    this.importBtn.style.display   = this.editMode ? 'inline-block' : 'none';
    this.exploreBtn.style.display  = this.editMode ? 'inline-block' : 'none';
    this.storeBadge.style.display  = this.editMode ? 'inline-block' : 'none';
    this.applyLayoutBtn.style.display = this.editMode ? 'inline-block' : 'none';
    this._syncEmptyStateUI();
    
    this.cardContainer.classList.toggle('grid-on', this.editMode);

    const wraps = this.cardContainer.querySelectorAll('.card-wrapper');
    wraps.forEach((w) => {
      w.classList.toggle('editing', this.editMode);
      const handle = w.querySelector('.resize-handle');
      if (handle) handle.style.display = this.editMode ? 'flex' : 'none';
      if (!w.dataset.placeholder && window.interact) {
        window.interact(w).draggable(this.editMode).resizable(this.editMode);
      }
      w.style.touchAction = this.editMode ? 'none' : 'auto';
    });
    if (!this.editMode) this._clearSelection();

    if (!this.editMode) {
      // clear any stale dragging classes
      this.cardContainer?.querySelectorAll('.card-wrapper.dragging')
        .forEach(w => w.classList.remove('dragging'));
    }

    // Play ripple when switching ON
    if (wasOff) {
      // center by default, unless last hold coords known
      const ox = this.__lastHoldX ?? null;
      const oy = this.__lastHoldY ?? null;
      this._playEditRipple(ox, oy);
    }
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
    if (this.dragLiveSnap) {
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
          const curLeadX = (parseFloat(lead.getAttribute('data-x-raw')) || srL.x) + ev.dx;
          const curLeadY = (parseFloat(lead.getAttribute('data-y-raw')) || srL.y) + ev.dy;
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
    
          let {width, height} = ev.rect;
          const wTry = live ? Math.max(gs, Math.round(width/gs)*gs) : width;
          const hTry = live ? Math.max(gs, Math.round(height/gs)*gs) : height;
        
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
      if (e.target.closest('.resize-handle') || e.target.closest('.chip')) return;
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
    if (!wrap.style.zIndex) wrap.style.zIndex = String(this._highestZ() + 1);

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
      <button class="mini danger pill" data-act="delete" title="Delete card" aria-label="Delete card">
        <ha-icon icon="mdi:close-thick"></ha-icon>
      </button>
    `;

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
          w2.style.zIndex = String(this._highestZ() + 1);
          this.cardContainer.appendChild(w2);
          try { this._rebuildOnce(w2.firstElementChild); } catch {}
          this._initCardInteract(w2);
        }
        this._resizeContainer();
        this._queueSave('duplicate');
      } else if (act === 'front') {
        this._adjustZ(wrap, +1);
      } else if (act === 'back')  {
        this._adjustZ(wrap, -1);
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

    wrap.append(cardEl, shield, chip, handle);
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
    if (this.cardContainer.querySelector('.ddc-placeholder')) return;
    const p = this._makePlaceholderAt(0,0,200,200);
    this.cardContainer.appendChild(p);
    this._resizeContainer();
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
    let max = 0;
    this.cardContainer.querySelectorAll('.card-wrapper').forEach(w => {
      const z = parseInt(w.style.zIndex || '0', 10);
      if (z > max) max = z;
    });
    return max;
  }

  _setCardPosition(el, x, y) {
    // ensure integer CSS pixels and use 3D translate to avoid compositor fuzz
    const nx = Math.round(x);
    const ny = Math.round(y);
    el.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
    el.setAttribute('data-x', String(nx));
    el.setAttribute('data-y', String(ny));
    el.setAttribute('data-x-raw', String(nx));
    el.setAttribute('data-y-raw', String(ny));
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
        this._applyAutoScale?.();
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
  const c = this.cardContainer; if (!c) return;

  // Keep the wrapper in place
  if (typeof this._ensureScaleWrapper === 'function') this._ensureScaleWrapper();

  // If auto-resize is off, lock to 1 but still keep scaffold consistent
  if (!this.autoResizeCards) {
    // Design size should still reflect config (fixed/preset or content)
    const d = (typeof this._computeDesignSize === 'function') ? this._computeDesignSize() : { w: c.offsetWidth || 1, h: c.offsetHeight || 1 };
    c.style.width  = `${d.w}px`;
    c.style.height = `${d.h}px`;
    c.style.transform = `scale(1)`;
    c.style.transformOrigin = 'top left';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    if (this.__scaleOuter) {
      // Use parent/host width for layout box so we don't force expansion
      const pw = (this.parentElement && this.parentElement.getBoundingClientRect?.().width) ||
                 (this.offsetParent && this.offsetParent.getBoundingClientRect?.().width) ||
                 (this.getBoundingClientRect && this.getBoundingClientRect().width) ||
                 this.offsetWidth || d.w;
      this.__scaleOuter.style.width  = `${Math.max(1, pw)}px`;
      this.__scaleOuter.style.height = `${Math.max(1, d.h)}px`;
    }
    return;
  }

  // Determine design size (prefer preset/fixed if configured)
  const d = (typeof this._computeDesignSize === 'function') ? this._computeDesignSize() : { w: c.offsetWidth || 1, h: c.offsetHeight || 1 };

  // Measure available width from the *parent* (host column) first
  const pw = (this.parentElement && this.parentElement.getBoundingClientRect?.().width) ||
             (this.offsetParent && this.offsetParent.getBoundingClientRect?.().width) ||
             (this.getBoundingClientRect && this.getBoundingClientRect().width) ||
             this.offsetWidth || d.w;
  const availableW = Math.max(1, pw);

  // Fit & clamp (never upscale beyond native)
  const scale = Math.min(availableW / Math.max(1, d.w), 1);

  // Outer layout box follows host width and scaled height
  if (this.__scaleOuter) {
    this.__scaleOuter.style.width  = `${availableW}px`;
    this.__scaleOuter.style.height = `${Math.max(1, d.h * scale)}px`;
  }

  // Inner canvas stays at design size and is visually scaled
  c.style.width  = `${d.w}px`;
  c.style.height = `${d.h}px`;
  c.style.transform = `scale(${scale})`;
  c.style.transformOrigin = 'top left';
  c.style.position = 'absolute';
  c.style.top = '0';
  c.style.left = '0';
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
      if (CardClass && typeof CardClass.getConfigElement === 'function') {
        const el = await CardClass.getConfigElement();
        if (el) {
          try { console.info('[ddc:editor] Found static class editor', { type }); } catch {}
          return el;
        }
      }
    } catch {}

    // 2) Instance-provided editor. Only try this for custom cards. Most built‑in
    // cards either expose a static editor or register a `hui-<type>-card-editor`
    // tag; instantiating them with invalid or empty configs causes errors (e.g.
    // "Entities must be specified"). For custom cards, we derive a stub config
    // to satisfy basic validation and then ask the instance for its editor.
    if (typeof type === 'string' && (type.startsWith('custom:') || type === 'custom_card' || type === 'entity')) {
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
    // Reposition the options and YAML sections upward now that quick fill is hidden
    const optionsSecDiv = modal.querySelector('#optionsSec');
    const yamlSecDiv = modal.querySelector('#yamlSec');
    if (optionsSecDiv) optionsSecDiv.style.gridRow = '1';
    if (yamlSecDiv) yamlSecDiv.style.gridRow = '2';

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
      const wantYaml = name === 'yaml';
      tabVisual.classList.toggle('active', !wantYaml);
      tabVisual.setAttribute('aria-selected', String(!wantYaml));
      tabYaml.classList.toggle('active', wantYaml);
      tabYaml.setAttribute('aria-selected', String(wantYaml));
    
      // Show/hide the two editors
      editorHost.parentElement.style.display = wantYaml ? 'none' : '';
      yamlSec.style.display = wantYaml ? '' : 'none';
    
      if (wantYaml) yamlSec.scrollIntoView({ behavior:'smooth', block:'start' });
      __activeTab = wantYaml ? 'yaml' : 'visual';
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
            } else {
              try { visualEditor?.setConfig?.(currentConfig); } catch {}
              mountPreview(currentConfig);
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

      // Do not reuse an old editor; a new one will be created on demand when the user clicks “Visual”
      showTab('yaml');
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
    wrap.style.zIndex = String(this._highestZ() + 1);
    this.cardContainer.appendChild(wrap);
    
  try { this._rebuildOnce(wrap.firstElementChild); } catch {}
    this._initCardInteract(wrap);
    this._resizeContainer();
    this._queueSave('add');
    this._toast('Card added to layout.');
    this._syncEmptyStateUI();
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

  _installSelectionMarquee() {
    const cont = this.cardContainer;
    let startX=0, startY=0, marquee=null, active=false;

    const toLocal = (ev) => {
      const r = cont.getBoundingClientRect();
      const x = ('touches' in ev && ev.touches[0]) ? ev.touches[0].clientX : ev.clientX;
      const y = ('touches' in ev && ev.touches[0]) ? ev.touches[0].clientY : ev.clientY;
      return { x: x - r.left, y: y - r.top };
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
    window.addEventListener('touchmove', (e)=>{ move(e); }, {passive:false});
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
      <div class="dialog" style="max-width:1100px;width:min(1100px,95vw);height:min(90vh,860px)">
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

  
  /* ----------------------------- Export / Import Design ----------------------------- */


  // Put these inside the class

  /** Only the exportable knobs the user set in the UI */
  _exportableOptions() {
    const opt = {
      storage_key: this.storageKey || undefined,
      grid: this.gridSize,
      container_background: this.containerBackground,
      card_background: this.cardBackground,
      disable_overlap: !!this.disableOverlap,
      drag_live_snap: !!this.dragLiveSnap,
      auto_save: !!this.autoSave,
      auto_save_debounce: this.autoSaveDebounce,
      debug: !!this.debug,
      container_size_mode: this.containerSizeMode,
      container_preset_orientation: this.containerPresetOrient,
      container_fixed_width: this.containerFixedWidth ?? undefined,
      container_fixed_height: this.containerFixedHeight ?? undefined,
      container_preset: this.containerPreset,
      tabs: this.tabs,
      tabs_position: this.tabsPosition,
      default_tab: this.defaultTab,
      hide_tabs_when_single: !!this.hideTabsWhenSingle,
          auto_resize_cards: !!this.autoResizeCards,
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
    if ('debug' in opts)              this.debug = !!opts.debug;
    if ('disable_overlap' in opts)    this.disableOverlap = !!opts.disable_overlap;

    if ('container_size_mode' in opts)        this.containerSizeMode = opts.container_size_mode || 'dynamic';
    if ('container_fixed_width' in opts)      this.containerFixedWidth  = Number(opts.container_fixed_width)  || null;
    if ('container_fixed_height' in opts)     this.containerFixedHeight = Number(opts.container_fixed_height) || null;
    if ('container_preset' in opts)           this.containerPreset = opts.container_preset || 'fhd';
    if ('container_preset_orientation' in opts) this.containerPresetOrient = opts.container_preset_orientation || 'auto';
    
    if ('auto_resize_cards' in opts) {
      this.autoResizeCards = !!opts.auto_resize_cards;
      if (this.autoResizeCards) this._startScaleWatch?.(); else this._stopScaleWatch?.();
      this._applyAutoScale?.();
    }



    // reflect to CSS
    this.style.setProperty('--ddc-bg', this.containerBackground);
    this.style.setProperty('--ddc-card-bg', this.cardBackground);
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
    'grid','drag_live_snap','auto_save','auto_save_debounce',
    'container_background','card_background','debug','disable_overlap',
    'container_size_mode','container_fixed_width','container_fixed_height',
    'container_preset','container_preset_orientation',
    'tabs','tabs_position','default_tab','hide_tabs_when_single',
    'card_mod','storage_key'
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

  _updateStoreBadge() {
    const el = this.storeBadge; if (!el) return;
    const usingHost = this._backendOK && !!this.storageKey;
    el.textContent = usingHost ? 'storage: backend - OK' : 'storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration';
    el.style.background = usingHost ? 'rgba(76,175,80,.15)' : 'rgba(255,193,7,.15)';
    el.style.borderColor = usingHost ? 'rgba(76,175,80,.45)' : 'rgba(255,193,7,.45)';
  }

  /* ----------------------------- Utilities ----------------------------- */
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
  customElements.define('drag-and-drop-card', DragAndDropCard);
}

/* Register in HA's card picker */
(() => {
  try {
    const list = (window.customCards = window.customCards || []);
    if (!list.some(c => c.type === 'drag-and-drop-card')) {
      list.push({
        type: 'drag-and-drop-card',   // no "custom:" here
        name: 'Drag & Drop Card',
        description: 'Freeform drag/resize/snap-to-grid canvas for Lovelace cards.',
        preview: false
      });
    }
  } catch (e) { /* no-op */ }
})();


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