/*
 * Home Assistant visual config editor statics.
 *
 * HA calls these statics outside the normal dashboard runtime, so this module provides the lightweight
 * editor and preview bridge used from the Lovelace card editor.
 */

/* Home Assistant config editor and canvas size presets. */
function createGetConfigElement(CardClass) {
  function getConfigElement() {
    // -------------------------------------------------------------------------
    // Simplified visual editor: only expose the storage key.
    // All other settings should be edited from the dashboard settings.  The
    // editor renders a single HA textfield and propagates changes via the
    // `config-changed` event.
    const editor = document.createElement('div');
    editor.style.display = 'grid';
    editor.style.gridTemplateColumns = '1fr';
    editor.style.rowGap = '12px';
    // Use a native input instead of relying on ha-textfield being upgraded in
    // every Home Assistant editor context. This keeps the storage key visible
    // even on clean installs where HA lazy-loads form elements later.
    const label = document.createElement('label');
    label.setAttribute('for', 'storage_key');
    label.textContent = 'Storage key';
    label.style.fontWeight = '600';
    label.style.display = 'block';
    const text = document.createElement('input');
    text.type = 'text';
    text.id = 'storage_key';
    text.placeholder = 'Auto-generated if left blank';
    text.autocomplete = 'off';
    text.spellcheck = false;
    text.style.boxSizing = 'border-box';
    text.style.width = '100%';
    text.style.minHeight = '40px';
    text.style.padding = '8px 10px';
    text.style.border = '1px solid var(--divider-color, rgba(0,0,0,.2))';
    text.style.borderRadius = '8px';
    text.style.background = 'var(--card-background-color, white)';
    text.style.color = 'var(--primary-text-color, inherit)';
    editor.appendChild(label);
    editor.appendChild(text);
    // Provide helper text below the input
    const helper = document.createElement('div');
    helper.style.fontSize = '0.85rem';
    helper.style.opacity = '0.7';
    helper.textContent = 'Unique key for saving layout positions. Leave blank to auto‑generate.';
    editor.appendChild(helper);
    const cloneForEditor = (value = {}) => {
      try {
        if (typeof structuredClone === 'function') return structuredClone(value || {});
        return JSON.parse(JSON.stringify(value || {}));
      } catch {
        return { ...(value || {}) };
      }
    };
    const dedupeCssForEditor = (css = '') => {
      const textValue = String(css ?? '');
      if (!textValue.includes('{') || !textValue.includes('}')) return textValue;
      const seen = new Set();
      let changed = false;
      const next = textValue.replace(/([^{}]+\{[^{}]*\})/g, (block) => {
        const open = block.indexOf('{');
        const close = block.lastIndexOf('}');
        if (open < 0 || close <= open) return block;
        const selector = block.slice(0, open).trim().replace(/\s+/g, ' ');
        if (!selector || selector.startsWith('@')) return block;
        const body = block
          .slice(open + 1, close)
          .trim()
          .replace(/\s+/g, ' ')
          .replace(/\s*;\s*/g, ';')
          .replace(/\s*:\s*/g, ':');
        const key = `${selector}{${body}}`;
        if (!body || !seen.has(key)) {
          seen.add(key);
          return block;
        }
        changed = true;
        return '';
      });
      return changed ? next.replace(/\n{3,}/g, '\n\n').trimEnd() : textValue;
    };
    const sanitizeStyleForEditor = (value) => {
      if (typeof value === 'string') return dedupeCssForEditor(value);
      if (Array.isArray(value)) return value.map(sanitizeStyleForEditor);
      if (value && typeof value === 'object') {
        const out = {};
        for (const [key, child] of Object.entries(value)) out[key] = sanitizeStyleForEditor(child);
        return out;
      }
      return value;
    };
    const sanitizeConfigForEditor = (config = {}) => {
      const next = cloneForEditor(config);
      if (Object.prototype.hasOwnProperty.call(next, 'container_size_mode')) {
        next.container_size_mode = CardClass.normalizeContainerSizeMode(next.container_size_mode);
        if (next.container_size_mode === 'auto') next.auto_resize_cards = true;
      }
      const seen = new WeakSet();
      const visit = (node) => {
        if (!node || typeof node !== 'object' || seen.has(node)) return;
        seen.add(node);
        if (node.card_mod && typeof node.card_mod === 'object' && 'style' in node.card_mod) {
          node.card_mod = { ...node.card_mod, style: sanitizeStyleForEditor(node.card_mod.style) };
        }
        if (node.card && typeof node.card === 'object') visit(node.card);
        if (Array.isArray(node.cards)) node.cards.forEach((card) => visit(card));
      };
      visit(next);
      return next;
    };
    // setConfig: populate input from incoming config
    editor.setConfig = (config = {}) => {
      editor._config = sanitizeConfigForEditor({ type: config.type || 'custom:drag-and-drop-card', ...config });
      // Auto-generate a storage key if not provided
      if (!editor._config.storage_key) {
        editor._config.storage_key = `layout_${(crypto?.randomUUID?.() || Date.now().toString(36))}`;
      }
      text.value = editor._config.storage_key || '';
    };
    // getConfig: return updated configuration containing only the storage_key
    editor.getConfig = () => {
      const base = sanitizeConfigForEditor(editor._config || {});
      base.type = 'custom:drag-and-drop-card';
      base.storage_key = text.value || '';
      delete base.cards;
      delete base.responsive_layouts;
      delete base.responsiveLayouts;
      return base;
    };
    // Dispatch config-changed event when the value changes
    text.addEventListener('input', () => {
      editor.dispatchEvent(new CustomEvent('config-changed', {
        detail: { config: editor.getConfig() },
        bubbles: true,
        composed: true,
      }));
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
    const mode = CardClass.normalizeContainerSizeMode(el.querySelector('#sizeMode')?.value ?? el.querySelector('#ddc-setting-sizeMode')?.value);
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
    el._config.container_size_mode = CardClass.normalizeContainerSizeMode(el._config.container_size_mode);
    if (el._config.container_size_mode === 'auto') el._config.auto_resize_cards = true;

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
    el.querySelector('#autoResize').checked = el._config.container_size_mode === 'auto' ? true : !!el._config.auto_resize_cards;

    // Set the animate cards checkbox based on the incoming config. This
    // defaults to false when not specified. When true, cards will animate
    // into view on tab changes or refresh.
    el.querySelector('#animateCards').checked = !!el._config.animate_cards;


    const sizeModeEl = el.querySelector('#sizeMode') || el.querySelector('#ddc-setting-sizeMode');
    if (sizeModeEl) sizeModeEl.value = CardClass.normalizeContainerSizeMode(el._config.container_size_mode);
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
    const nextSizeMode = CardClass.normalizeContainerSizeMode(el.querySelector('#sizeMode')?.value ?? el.querySelector('#ddc-setting-sizeMode')?.value);
    base.auto_resize_cards = nextSizeMode === 'auto' ? true : !!el.querySelector('#autoResize').checked;
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
      const selParticlesHoverMode = el.querySelector('#ddc-particles-hover-mode');
      const selParticlesClickMode = el.querySelector('#ddc-particles-click-mode');
      const rngParticlesInteractionDistance = el.querySelector('#ddc-particles-interaction-distance');
      const rngOuterGridBufferCells = el.querySelector('#ddc-setting-outerGridBufferCells');
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
      const outerGridBufferCells = parseInt(rngOuterGridBufferCells?.value || '', 10);
      if (Number.isFinite(outerGridBufferCells)) base.outer_grid_buffer_cells = Math.max(1, Math.min(10, outerGridBufferCells));

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
        const interactionDistance = parseInt(rngParticlesInteractionDistance?.value || '', 10);
        base.background_particles = pick({
          config_url: (inpParticlesUrl?.value || '').trim() || undefined,
          pointer_events: !!chkParticlesPtr?.checked,
          hover_mode: selParticlesHoverMode?.value || undefined,
          click_mode: selParticlesClickMode?.value || undefined,
          interaction_distance: Number.isFinite(interactionDistance) ? interactionDistance : undefined,
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


    base.container_size_mode = nextSizeMode;
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

  return getConfigElement;
}

function sizePresets() {
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

export function installHaConfigEditorStatics(CardClass) {
  Object.defineProperties(CardClass, {
    getConfigElement: {
      configurable: true,
      writable: true,
      value: createGetConfigElement(CardClass),
    },
    _sizePresets: {
      configurable: true,
      writable: true,
      value: sizePresets,
    },
  });
}
