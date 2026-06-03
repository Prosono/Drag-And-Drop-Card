/*
 * Smart card picker and default stub generation for new cards.
 *
 * This module drives the add-card flow, filters available Home Assistant card types, and supplies
 * sensible starter config for both internal and Lovelace cards.
 */

import { __ddcHtmlDefaultConfig__ } from '../core/card-defaults.js';

const raf = () => new Promise((resolve) => window.requestAnimationFrame(() => resolve()));
const idle = () => new Promise((resolve) => (
  window.requestIdleCallback ? window.requestIdleCallback(() => resolve()) : window.setTimeout(resolve, 0)
));

const smartPickerMethods = {

  /* ------------------------------- Picker UI ------------------------------- */
  async _openCardManager() { await this._openSmartPicker('add'); },


  _catalog() {
    return [
      { id:'favorites', name:'Favorites', items:[] },
      {
        id:'ddc',
        name:'Drag and drop cards',
        hint:'Cards in this section are reserved for components that only make sense inside Drag & Drop Card. Connector lines are now drawn directly from the edit toolbar.',
        items:this._dragAndDropCardsCatalog()
      },
      {
        id:'imported',
        name:'Imported cards',
        hint:'Single-card imports are saved here so you can reuse them without uploading the file again.',
        items:[]
      },
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
  },


  _dragAndDropCardsCatalog() {
    return [
      {
        type:'custom:ddc-html-card',
        name:'HTML / Web card',
        icon:'mdi:language-html5',
        description:'Build a custom card with your own HTML, CSS and JavaScript inside Drag & Drop Card.'
      },
      {
        type:'custom:ddc-table-card',
        name:'Table card',
        icon:'mdi:table-large',
        description:'Build a visual table with text, icons, entity states, badges and buttons directly inside Drag & Drop Card.'
      },
      {
        type:'custom:ddc-icon-card',
        name:'Icon card',
        icon:'mdi:star-four-points-circle',
        description:'Place a pure icon design object with state-based color, glow, pulse and optional click action.'
      },
      {
        type:'custom:ddc-text-card',
        name:'Text card',
        icon:'mdi:format-text',
        description:'Create a pure typography object with font controls, semantic text styles and editorial layout options.'
      }
    ];
  },


  _importedCardTemplatePickerItems_() {
    const templates = this._getImportedCardTemplates_?.() || [];
    return templates.map((template) => ({
      type: `ddc-imported-card:${template.id}`,
      actualType: template.type || template.payload?.entry?.card?.type || 'custom_card',
      name: template.name || 'Imported card',
      icon: template.icon || 'mdi:tray-arrow-down',
      description: 'Imported single-card template',
      importedTemplateId: template.id,
      importedTemplate: template,
    }));
  },


  /* ---- Find/create a config editor element for a given card type ---- */
  async _getEditorElementForType(type, cfg) {
    // Log the start of an editor lookup; this uses console.debug so it is visible
    try { console.info('[ddc:editor] Requesting editor element', { type, cfg }); } catch {}

    if (type === 'custom:ddc-html-card') return document.createElement('ddc-html-card-editor');
    if (type === 'custom:ddc-line-card') return document.createElement('ddc-line-card-editor');
    if (type === 'custom:ddc-table-card') return document.createElement('ddc-table-card-editor');
    if (type === 'custom:ddc-icon-card') return document.createElement('ddc-icon-card-editor');
    if (type === 'custom:ddc-text-card') return document.createElement('ddc-text-card-editor');

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
  },


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
  },

  
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
  },

  

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
  },


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
  },


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
  },


  _shapeBySchema(type, cfg = {}) {
    const sc = this._schemaForType(type) || { fields: [] };
    const out = { ...cfg, type };

    for (const f of sc.fields) {
      let v = out[f.key];

      if (f.type === 'entities') {
        const arr = Array.isArray(v) ? v : (v != null && v !== '' ? [v] : []);
        const clean = arr.map((item) => {
          if (typeof item === 'string') return item.trim();
          if (item && typeof item === 'object') {
            const next = { ...item };
            if (typeof next.entity === 'string') next.entity = next.entity.trim();
            if (typeof next.type === 'string') next.type = next.type.trim();
            const hasEntity = !!next.entity;
            const hasTypedRow = !!next.type && next.type !== 'entity';
            return (hasEntity || hasTypedRow) ? next : null;
          }
          return item;
        }).filter(Boolean);
        if (clean.length || Array.isArray(v)) out[f.key] = clean;
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
  },


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
  },

  _isNumericEntity(eid) {
    const st = this.hass?.states?.[eid]; if (!st) return false;
    const v = Number(st.state); return Number.isFinite(v);
  },


  _getFaves(){ try { return new Set(JSON.parse(localStorage.getItem('ddc_faves')||'[]')); } catch { return new Set(); } },

  _setFaves(set){ try { localStorage.setItem('ddc_faves', JSON.stringify(Array.from(set))); } catch {} },

  _getRecent(){ try { return JSON.parse(localStorage.getItem('ddc_recent_types')||'[]'); } catch { return []; } },

  _pushRecent(type){ try { const r = this._getRecent().filter(t=>t!==type); r.unshift(type); if (r.length>10) r.length=10; localStorage.setItem('ddc_recent_types', JSON.stringify(r)); } catch{} },


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
  },


  async _mountYamlEditor(hostEl, initialCfg, onValidChange, onInvalidChange) {
    const dump = (o) => (window.jsyaml ? window.jsyaml.dump(o) : JSON.stringify(o, null, 2));
    const parse = (t) => (window.jsyaml ? window.jsyaml.load(t) : JSON.parse(t));
    hostEl.innerHTML = '';
    const initialText = dump(initialCfg);
    let suppressProgrammaticText = null;

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
        if (suppressProgrammaticText !== null && txt === suppressProgrammaticText) {
          suppressProgrammaticText = null;
          return;
        }
        try { onValidChange(parse(txt)); }
        catch (err) { onInvalidChange?.(err); }
      });
      return {
        setValue: (cfg) => {
          const txt = dump(cfg);
          if ((ed.value ?? '') !== txt) {
            suppressProgrammaticText = txt;
            programmatic = true;
            ed.value = txt;
            programmatic = false;
          }
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
        if (suppressProgrammaticText !== null && text === suppressProgrammaticText) {
          suppressProgrammaticText = null;
          return;
        }
        try { onValidChange(parse(text)); }
        catch (e) { onInvalidChange?.(e); }
      });
      return {
        setValue: (cfg) => {
          const txt = dump(cfg);
          if (cm.getValue() !== txt) {
            suppressProgrammaticText = txt;
            programmatic = true;
            cm.setValue(txt);
            programmatic = false;
          }
        }
      };
    } catch {
      const ta = document.createElement('textarea');
      ta.style.width = '100%';
      ta.style.height = '260px';
      ta.value = initialText;
      ta.addEventListener('input', () => {
        if (suppressProgrammaticText !== null && ta.value === suppressProgrammaticText) {
          suppressProgrammaticText = null;
          return;
        }
        try { onValidChange(parse(ta.value)); }
        catch (e) { onInvalidChange?.(e); }
      });
      hostEl.appendChild(ta);
      return {
        setValue: (cfg) => {
          const txt = dump(cfg);
          if (ta.value !== txt) {
            suppressProgrammaticText = txt;
            ta.value = txt;
          }
        }
      };
    }
  },


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
  },
  
  async _openSmartPicker(mode='add', initialCfg=null, onCommit=null) {

    
    let mobilePickerResizeObserver = null;
    let updateSmartPickerMobileMode = null;
    const close = () => {
      try { mobilePickerResizeObserver?.disconnect(); } catch {}
      try {
        if (updateSmartPickerMobileMode) {
          window.removeEventListener('resize', updateSmartPickerMobileMode);
          window.visualViewport?.removeEventListener?.('resize', updateSmartPickerMobileMode);
        }
      } catch {}
      modal.remove();
    };
    const modal = document.createElement('div'); modal.className='modal smart-picker-modal';
    modal.innerHTML = `
      <div class="dialog smart-picker-dialog" role="dialog" aria-modal="true">
        <div class="dlg-head">
          <h3>${mode==='edit'?'Edit card':'Add a card'}</h3>
          <div class="picker-search-wrap">
            <input id="search" class="picker-search" placeholder="Search cards (name or type)…" aria-label="search">
          </div>
          <div class="picker-actions">
          <button class="picker-btn secondary" id="cancelBtn"><ha-icon icon="mdi:close"></ha-icon><span>Cancel</span></button>
          <button class="picker-btn primary" id="addBtn" disabled>${mode==='edit'
            ? '<ha-icon icon="mdi:content-save"></ha-icon><span>Update</span>'
            : '<ha-icon icon="mdi:plus"></ha-icon><span>Add</span>'}
          </button>
          </div>
        </div>
        <div id="layoutGrid" class="layout">
          <div class="pane" id="leftPane"></div>
          <div class="pane" id="rightPane">
            <div class="rightGrid">
              <div class="sec" id="quickFillSec" style="grid-column:1;grid-row:1">
                <div class="hd">Quick fill <span style="opacity:.7;font-size:.85rem">card-aware</span></div>
                <div class="bd" id="quickFill"></div>
              </div>

              <div class="sec picker-preview-sec" style="grid-column:2;grid-row:1 / span 3;min-height:0;position:relative">
                <div class="hd">Preview</div>
                <div class="spin-center picker-preview-spinner" id="previewSpin" hidden>
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
          <span class="picker-footnote">Tip: use <ha-icon icon="mdi:star-outline"></ha-icon> to favorite cards you use often</span>
          <button class="picker-btn secondary" id="footCancel"><ha-icon icon="mdi:close"></ha-icon><span>Cancel</span></button>
          <button class="picker-btn primary" id="footAdd" disabled>${mode==='edit'
            ? '<ha-icon icon="mdi:content-save"></ha-icon><span>Update</span>'
            : '<ha-icon icon="mdi:plus"></ha-icon><span>Add</span>'}
          </button>
        </div>
      </div>`;
    this.shadowRoot.appendChild(modal);

    const dialog = modal.querySelector('.smart-picker-dialog');
    updateSmartPickerMobileMode = () => {
      try {
        const rect = dialog?.getBoundingClientRect?.();
        const viewportW = Number(window.visualViewport?.width || window.innerWidth || document.documentElement?.clientWidth || 0);
        const dialogW = Number(rect?.width || modal.clientWidth || viewportW || 0);
        const coarse = !!window.matchMedia?.('(pointer: coarse)')?.matches;
        const smallestW = Math.min(
          viewportW || Number.POSITIVE_INFINITY,
          dialogW || Number.POSITIVE_INFINITY
        );
        const mobile = smallestW <= 760 || (coarse && smallestW <= 980);
        modal.classList.toggle('smart-picker-mobile', !!mobile);
      } catch {
        modal.classList.toggle('smart-picker-mobile', (window.innerWidth || 0) <= 760);
      }
    };
    updateSmartPickerMobileMode();
    requestAnimationFrame(updateSmartPickerMobileMode);
    try { window.addEventListener('resize', updateSmartPickerMobileMode, { passive:true }); } catch {}
    try { window.visualViewport?.addEventListener?.('resize', updateSmartPickerMobileMode, { passive:true }); } catch {}
    try {
      if (typeof ResizeObserver !== 'undefined' && dialog) {
        mobilePickerResizeObserver = new ResizeObserver(updateSmartPickerMobileMode);
        mobilePickerResizeObserver.observe(dialog);
        mobilePickerResizeObserver.observe(modal);
      }
    } catch {}

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
    const ddcSection = catalog.find(c=>c.id==='ddc');
    const importedSection = catalog.find(c=>c.id==='imported');
    if (ddcSection) {
      const merged = new Map();
      [...this._dragAndDropCardsCatalog(), ...(ddcSection.items || [])].forEach((item) => {
        if (!item?.type) return;
        merged.set(item.type, item);
      });
      ddcSection.items = Array.from(merged.values());
    }
    if (importedSection) importedSection.items = this._importedCardTemplatePickerItems_?.() || [];
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
      const favoriteKey = currentPickerType || currentType;
      const on = favoriteKey && faves.has(favoriteKey);
      const icon = favBtn.querySelector('ha-icon');
      if (icon) icon.setAttribute('icon', on ? 'mdi:star' : 'mdi:star-outline');
    };
    // Function to update the headline text and star icon.  Called from selectType.
    const updateHeader = (type) => {
      if (selInfo) {
        const item = currentPickerType
          ? allItems.find(i => i.type === currentPickerType)
          : allItems.find(i => i.type === type);
        const nm = currentPickerName || (item ? item.name : (type || ''));
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
        const favoriteKey = currentPickerType || currentType;
        if (!favoriteKey) return;
        if (faves.has(favoriteKey)) {
          faves.delete(favoriteKey);
        } else {
          faves.add(favoriteKey);
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
        .map(section => {
          const baseItems = section.id === 'ddc'
            ? Array.from(new Map(
                [...this._dragAndDropCardsCatalog(), ...(section.items || [])]
                  .filter((it) => !!it?.type)
                  .map((it) => [it.type, it])
              ).values())
            : (section.items || []);
          return {
            ...section,
            items: baseItems.filter(
              it => {
                const haystack = [
                  it.name,
                  it.type,
                  it.actualType,
                  it.description,
                ].filter(Boolean).join(' ').toLowerCase();
                return !q || haystack.includes(q);
              }
            )
          };
        })
        .filter(sec => (
          (sec.items && sec.items.length)
          || sec.id === 'favorites'
          || sec.id === 'recent'
          || sec.id === 'imported'
          || (!q && sec.id === 'ddc')
        ));
    };

    const renderLeft = () => {
      const view = filteredCatalog();
      left.innerHTML = '';
      view.forEach(cat => {
        const div = document.createElement('section');
        div.className = 'picker-category';
        const h = document.createElement('h4');
        h.className = 'picker-category-title';
        h.textContent = cat.name;
        div.appendChild(h);

        if (!cat.items.length && (cat.id==='favorites' || cat.id==='recent' || cat.id==='ddc' || cat.id==='imported')) {
          const p = document.createElement('div');
          p.className = 'picker-category-note';
          if (cat.id === 'favorites') {
            p.textContent = 'No favorites yet.';
          } else if (cat.id === 'recent') {
            p.textContent = 'No recent items yet.';
          } else if (cat.id === 'imported') {
            p.innerHTML = `<strong>No imported cards yet</strong><span>Import a single-card JSON file and it will appear here for reuse.</span>`;
          } else {
            p.innerHTML = `<strong>Reserved for Drag & Drop Card</strong><span>${cat.hint || 'Cards that only work inside Drag & Drop Card will appear here.'}</span>`;
          }
          div.appendChild(p);
        } else {
          cat.items.forEach(item => {
            const b = document.createElement('button');
            b.className = 'picker-item';
            b.innerHTML = `
              <ha-icon icon="${item.icon}"></ha-icon>
              <span class="picker-item-meta">
                <span class="picker-item-name">${item.name}</span>
                <span class="picker-item-subtitle">${cat.name}</span>
              </span>`;
            b.addEventListener('click', async () => { highlight(b); await selectCatalogItem(item, { fromUser: true }); });
            div.appendChild(b);
          });
        }
        left.appendChild(div);
      });
    };

    const highlight = (btn) => {
      // Reset all buttons to default appearance
      left.querySelectorAll('.picker-item').forEach(b => {
        b.classList.remove('active');
      });
      // Highlight the selected button so it is obvious which one is active.
      if (btn) {
        btn.classList.add('active');
      }
    };

    let currentConfig = null;
    let currentType = null;
    let currentPickerType = null;
    let currentPickerName = '';
    let currentImportedTemplate = null;
    let yamlEditorApi = null;
    let visualEditor = null;
    let editor = null;
    let pickSeq = 0; // stale-select guard
    let previewSeq = 0;
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

    const createDdcPreviewElement = async (tag, cfg) => {
      if (!customElements.get(tag)) {
        try { await customElements.whenDefined(tag); } catch {}
      }
      const el = document.createElement(tag);
      el.classList.add('ddc-picker-preview-card');
      if (tag === 'ddc-table-card') el.classList.add('ddc-picker-table-preview');
      el.__ddcSourceConfig = this._sanitizeCardConfigForStorage_?.(cfg || {}) || cfg || {};
      return el;
    };

    const paintPreviewFallback = (message) => {
      cardHost.classList.remove('has-ddc-preview', 'has-ddc-table-preview');
      cardHost.innerHTML = `<div class="picker-preview-empty">${message}</div>`;
    };

    const mountPreview = (cfg) => {
      if ((cfg?.type || '') === 'custom_card') {
        __lastPreviewCfgJSON = JSON.stringify(cfg || {});
        paintPreviewFallback('Preview is not available for the custom card placeholder. Use the YAML editor.');
        previewSpin.hidden = true;
        return;
      }
      const cfgJSON = JSON.stringify(cfg || {});
      if (cfgJSON === __lastPreviewCfgJSON) return; // same config, skip
      if (__previewTimer) clearTimeout(__previewTimer);
      __previewTimer = setTimeout(async () => {
        const seq = ++previewSeq;
        previewSpin.hidden = false;
        cardHost.innerHTML = '';
        cardHost.classList.remove('has-ddc-preview', 'has-ddc-table-preview');
        await raf();
        try {
          if (seq !== previewSeq) return;
          let temp = null;
          const type = String(cfg?.type || '');
          if (type === 'custom:ddc-html-card') {
            temp = await createDdcPreviewElement('ddc-html-card', cfg);
            cardHost.classList.add('has-ddc-preview');
          } else if (type === 'custom:ddc-line-card') {
            temp = await createDdcPreviewElement('ddc-line-card', cfg);
            cardHost.classList.add('has-ddc-preview');
          } else if (type === 'custom:ddc-table-card') {
            temp = await createDdcPreviewElement('ddc-table-card', cfg);
            cardHost.classList.add('has-ddc-preview', 'has-ddc-table-preview');
          } else if (type === 'custom:ddc-icon-card') {
            temp = await createDdcPreviewElement('ddc-icon-card', cfg);
            cardHost.classList.add('has-ddc-preview');
          } else if (type === 'custom:ddc-text-card') {
            temp = await createDdcPreviewElement('ddc-text-card', cfg);
            cardHost.classList.add('has-ddc-preview');
          } else {
            const helpers = (await this._helpersPromise) || await window.loadCardHelpers();
            if (seq !== previewSeq) return;
            temp = helpers.createCardElement(cfg);
          }
          if (seq !== previewSeq) return;
          cardHost.appendChild(temp);
          try { temp.setConfig?.(cfg); } catch {}
          try { temp.hass = this.hass; } catch {}
          __lastPreviewCfgJSON = cfgJSON;
        } catch (err) {
          if (seq === previewSeq) {
            __lastPreviewCfgJSON = '';
            paintPreviewFallback('Preview could not be rendered for this card yet. The configuration can still be edited below.');
            try { console.warn('[drag-and-drop-card] Failed to render picker preview', err); } catch {}
          }
        }
        finally { if (seq === previewSeq) previewSpin.hidden = true; }
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

        // Try official getStubConfig once for HA cards only. DDC internal
        // editors already receive curated stubs and should not wait on helpers.
        try {
          const lookupType = String(cfg.type || currentType || '');
          if (lookupType && !lookupType.startsWith('custom:ddc-')) {
            const helpers = (await this._helpersPromise) || await window.loadCardHelpers();
            const CardClass = helpers.getCardElementClass ? await helpers.getCardElementClass(lookupType) : null;
            if (CardClass?.getStubConfig) {
              const all = Object.keys(this.hass?.states || {});
              const byDomain = (d)=>all.filter((e)=>e.startsWith(d+'.'));
              const better = await CardClass.getStubConfig(this.hass, all, byDomain);
              if (better) cfg = this._shapeBySchema(lookupType, { ...better });
            }
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
          if (!next || typeof next !== 'object') return;
          const nextType = next.type || currentType;
          currentType = nextType;
          currentConfig = this._shapeBySchema(nextType, {
            ...(currentConfig && typeof currentConfig === 'object' ? currentConfig : {}),
            ...next,
            type: nextType,
          });
    
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

    const selectType = async (type, opts = {}) => {
      yamlErr.hidden = true; yamlErr.textContent = '';
      setError('');
      currentPickerType = opts.pickerType || type;
      currentPickerName = opts.pickerName || '';
      currentImportedTemplate = opts.importedTemplate || null;
      currentType = type;
      // Update the selected-card headline and favorite star when a new card is chosen
      try {
        if (typeof updateHeader === 'function') updateHeader(type);
      } catch {
        // ignore if updateHeader is undefined or throws
      }

      let cfg = null;
      try {
        cfg = opts.importedTemplate?.payload
          ? (this._singleCardPayloadBaseEntry_?.(opts.importedTemplate.payload)?.card || null)
          : null;
        cfg = cfg
          ? (this._cloneJson_?.(cfg) || JSON.parse(JSON.stringify(cfg)))
          : (mode==='edit' && initialCfg && initialCfg.type===type)
          ? { ...initialCfg }
          : await getStub(type);
      } catch (err) {
        setError(`Could not load ${type}: ${String(err?.message || err)}`);
        paintPreviewFallback('This card could not be loaded in the picker. Try reloading the dashboard resource and selecting it again.');
        enableCommit(false);
        try { console.warn('[drag-and-drop-card] Failed to load card picker config', { type, err }); } catch {}
        return;
      }
    
      currentConfig = this._shapeBySchema(type, cfg);

      // Reset any previously mounted visual editor so the correct one loads for this card
      visualEditor = null;

      buildQuickFill(type, currentConfig);
      mountPreview(currentConfig);
      const yamlReady = mountYaml(currentConfig)
        .then(() => {
          try { yamlEditorApi?.setValue(currentConfig); } catch {}
        })
        .catch((err) => {
          yamlErr.hidden = false;
          yamlErr.textContent = `YAML editor could not load: ${String(err?.message || err)}`;
        });
      await raf();

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
      void yamlReady;
      enableCommit(true);
      if (opts.fromUser && modal.classList.contains('smart-picker-mobile')) {
        requestAnimationFrame(() => {
          try {
            (modal.querySelector('#optionsSec') || modal.querySelector('#rightPane'))?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          } catch {}
        });
      }

    };
    const selectCatalogItem = async (item = {}, opts = {}) => {
      const template = item.importedTemplateId
        ? (item.importedTemplate || this._getImportedCardTemplateById_?.(item.importedTemplateId))
        : null;
      const actualType = template?.type || item.actualType || item.type;
      await selectType(actualType, {
        ...opts,
        pickerType: item.type || actualType,
        pickerName: item.name || '',
        importedTemplate: template,
      });
    };
    const commit = async () => {
      if (!currentConfig) return;
      try {
        let liveConfig = null;
        if (visualEditor && typeof visualEditor.getConfig === 'function') {
          liveConfig = visualEditor.getConfig();
        } else if (
          visualEditor
          && String(visualEditor.localName || '').startsWith('ddc-')
          && visualEditor._config
          && typeof visualEditor._config === 'object'
        ) {
          liveConfig = this._cloneCardConfig_(visualEditor._config);
        }
        if (liveConfig && typeof liveConfig === 'object') {
          const liveType = liveConfig.type || currentType;
          currentType = liveType;
          currentConfig = this._shapeBySchema(liveType, {
            ...(currentConfig && typeof currentConfig === 'object' ? currentConfig : {}),
            ...liveConfig,
            type: liveType,
          });
        }
      } catch {}
      const finalCfg = this._shapeBySchema(currentType, currentConfig);
      if (typeof onCommit === 'function') {
        await onCommit(finalCfg);
      } else if (currentImportedTemplate && mode !== 'edit') {
        await this._addImportedCardTemplateToLayout_?.(currentImportedTemplate, finalCfg);
        this._pushRecent(currentPickerType || (finalCfg||{}).type);
      } else {
        await this._addPickedCardToLayout(finalCfg);
        this._pushRecent(currentPickerType || (finalCfg||{}).type);
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
    const findPickerItem = (type = '') => {
      const key = String(type || '');
      return catalog.flatMap((section) => section.items || []).find((item) => item.type === key) || null;
    };

    // When editing an existing card, load its type immediately instead of
    // selecting a default first. Selecting two card types in succession can
    // race, causing the YAML editor to display the wrong configuration. See
    // issue: sometimes the YAML from the previous card would appear. By
    // selecting only once here we ensure the initial configuration is the
    // correct one.
    if (mode === 'edit' && initialCfg) {
      await selectType(initialCfg.type || 'entities');
      enableCommit(true);
    } else {
      const defaultType = pickDefaultType();
      const defaultItem = findPickerItem(defaultType);
      if (defaultItem) await selectCatalogItem(defaultItem);
      else await selectType(defaultType);
      enableCommit(true);
    }
  },

  /* ------------------------- Stubs / helpers (cards) ------------------------- */
  async _getStubConfigForType(type) {
    const importedTemplate = this._getImportedCardTemplateByPickerType_?.(type);
    if (importedTemplate?.payload) {
      const card = this._singleCardPayloadBaseEntry_?.(importedTemplate.payload)?.card;
      if (card) return this._cloneJson_?.(card) || JSON.parse(JSON.stringify(card));
    }
    // Provide a blank stub when the user selects the "Custom Card" entry.
    // A blank type lets the YAML editor drive the configuration entirely.
    if (type === 'custom_card') return null;
    if (type === 'custom:ddc-line-card') return {
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
    if (type === 'custom:ddc-html-card') return __ddcHtmlDefaultConfig__();
    if (type === 'custom:ddc-table-card') {
      const entityIds = Object.keys(this.hass?.states || {});
      const first = entityIds[0] || '';
      const second = entityIds[1] || first;
      return {
        type: 'custom:ddc-table-card',
        title: 'Energy overview',
        rows: 3,
        columns: 3,
        header_row: true,
        border: true,
        radius: 16,
        spacing: 8,
        cells: [
          { type: 'text', text: 'Area', align: 'left' },
          { type: 'text', text: 'Live state', align: 'center' },
          { type: 'text', text: 'Action', align: 'center' },
          { type: 'text', text: 'Primary', align: 'left' },
          { type: 'entity', entity: first, text: 'Primary sensor', align: 'center', active_states: 'on,home,open,playing,charging,active,>0', active_color: 'var(--primary-color, #ff9800)', inactive_color: 'rgba(148, 163, 184, 0.18)' },
          { type: 'button', entity: first, text: 'Inspect', button_action: 'more-info', align: 'center', active_states: 'on,home,open,playing,charging,active,>0', active_color: 'var(--primary-color, #ff9800)', inactive_color: 'rgba(148, 163, 184, 0.18)' },
          { type: 'icon', icon: 'mdi:flash', text: 'Secondary', align: 'left' },
          { type: 'badge', entity: second, text: 'Secondary sensor', align: 'center', active_states: 'on,home,open,playing,charging,active,>0', active_color: 'var(--primary-color, #ff9800)', inactive_color: 'rgba(148, 163, 184, 0.18)' },
          { type: 'text', text: 'Editable cells', align: 'center' },
        ]
      };
    }
    if (type === 'custom:ddc-icon-card') {
      const entityIds = Object.keys(this.hass?.states || {});
      const first = entityIds[0] || '';
      const iconFallback = first ? String(this.hass?.states?.[first]?.attributes?.icon || 'mdi:flash') : 'mdi:flash';
      return {
        type: 'custom:ddc-icon-card',
        icon: iconFallback,
        entity: first,
        size: 96,
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
        click_action: 'more-info'
      };
    }
    if (type === 'custom:ddc-text-card') {
      return {
        type: 'custom:ddc-text-card',
        text: 'Energy overview',
        rich_text: false,
        rich_html: '',
        variant: 'title',
        font_family: '',
        font_size: 42,
        color: 'var(--primary-text-color, #f8fafc)',
        align: 'left',
        bold: true,
        italic: false,
        letter_spacing: -0.03,
        line_height: 1.05
      };
    }

    const helpers = (await this._helpersPromise) || await window.loadCardHelpers();
    let CardClass = null;

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
  },
};

export function installSmartPickerMethods(proto) {
  for (const [name, value] of Object.entries(smartPickerMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
