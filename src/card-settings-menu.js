/* Per-card style and card settings overlay helpers. */
const cardSettingsMenuMethods = {
  _normalizePerCardStyle_(style = {}) {
    const out = {};
    for (const key of ['background', 'container_background', 'text_color', 'border_color']) {
      const value = style?.[key];
      if (value == null) continue;
      const trimmed = String(value).trim();
      if (trimmed) out[key] = trimmed;
    }
    for (const key of ['animate_cards', 'card_shadow']) {
      const value = String(style?.[key] || '').trim().toLowerCase();
      if (value === 'on' || value === 'off') out[key] = value;
    }
    return out;
  },

  _extractPerCardStyle_(wrap) {
    if (!wrap) return {};
    try {
      return this._normalizePerCardStyle_(JSON.parse(wrap.dataset.cardStyle || '{}') || {});
    } catch {
      return {};
    }
  },

  _applyPerCardStyle_(wrap, style = null, { persist = true } = {}) {
    if (!wrap) return {};
    const next = this._normalizePerCardStyle_(style || {});
    const themeOwnsDesign = this._isDashboardThemeOverrideAllDesignActive_?.();
    const resolvedOuterBackground = themeOwnsDesign ? '' : (next.background || next.container_background || '');
    const resolvedInnerBackground = themeOwnsDesign ? '' : (next.container_background || next.background || '');

    if (resolvedOuterBackground) wrap.style.setProperty('--ddc-card-local-bg', resolvedOuterBackground);
    else wrap.style.removeProperty('--ddc-card-local-bg');

    if (resolvedInnerBackground) {
      wrap.style.setProperty('--ddc-card-inner-bg', resolvedInnerBackground);
      wrap.style.setProperty('--ha-card-background', resolvedInnerBackground);
      wrap.style.setProperty('--card-background-color', resolvedInnerBackground);
      wrap.style.setProperty('--paper-card-background-color', resolvedInnerBackground);
    } else {
      wrap.style.removeProperty('--ddc-card-inner-bg');
      wrap.style.removeProperty('--ha-card-background');
      wrap.style.removeProperty('--card-background-color');
      wrap.style.removeProperty('--paper-card-background-color');
    }

    if (!themeOwnsDesign && next.border_color) wrap.style.setProperty('--ddc-card-border-color', next.border_color);
    else wrap.style.removeProperty('--ddc-card-border-color');

    if (themeOwnsDesign) {
      wrap.style.removeProperty('--ddc-card-local-shadow');
    } else if (next.card_shadow === 'off') {
      wrap.style.setProperty('--ddc-card-local-shadow', 'none');
    } else if (next.card_shadow === 'on') {
      wrap.style.setProperty('--ddc-card-local-shadow', this._cardShadowCssValue_());
    } else {
      wrap.style.removeProperty('--ddc-card-local-shadow');
    }

    const textProps = [
      '--primary-text-color',
      '--text-primary-color',
      '--paper-item-icon-color',
      '--state-icon-color',
      '--mdc-theme-text-primary-on-background'
    ];
    if (!themeOwnsDesign && next.text_color) {
      wrap.style.color = next.text_color;
      textProps.forEach((prop) => wrap.style.setProperty(prop, next.text_color));
    } else {
      wrap.style.removeProperty('color');
      textProps.forEach((prop) => wrap.style.removeProperty(prop));
    }

    if (persist) {
      if (Object.keys(next).length) wrap.dataset.cardStyle = JSON.stringify(next);
      else delete wrap.dataset.cardStyle;
    }

    return next;
  },

  _closeCardSettingsMenu_() {
    const state = this.__cardSettingsMenu;
    if (!state) return;
    try { state.cleanup?.(); } catch {}
    try { state.root?.remove?.(); } catch {}
    try { if (!state.root) state.menu?.remove?.(); } catch {}
    this.__cardSettingsMenu = null;
  },

  _positionCardSettingsMenu_() {
    const state = this.__cardSettingsMenu;
    if (!state?.menu || !state?.wrap) return;
    const { menu, wrap } = state;
    if (!menu.isConnected || !wrap.isConnected) {
      this._closeCardSettingsMenu_();
      return;
    }

    const rect = wrap.getBoundingClientRect();
    const margin = 12;
    const viewportW = Math.max(1, window.innerWidth || document.documentElement.clientWidth || 1);
    const viewportH = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 1);
    const menuW = Math.max(220, menu.offsetWidth || 320);
    const menuH = Math.max(120, menu.offsetHeight || 360);

    let left = rect.left + ((rect.width - menuW) / 2);
    let top = rect.top + ((rect.height - menuH) / 2);

    if (rect.height < menuH * 0.6) {
      top = rect.top + Math.min(40, rect.height * 0.5);
    }

    left = Math.min(Math.max(margin, left), Math.max(margin, viewportW - menuW - margin));
    top = Math.min(Math.max(margin, top), Math.max(margin, viewportH - menuH - margin));

    menu.style.left = `${Math.round(left)}px`;
    menu.style.top = `${Math.round(top)}px`;
  },

  /**
   * Open or toggle a small settings menu attached to a card wrapper. This menu
   * currently exposes an overflow option that allows the user to choose
   * between the default overflow behaviour, visible overflow or hidden
   * overflow on a per-card basis. The menu is rendered as an overlay so it
   * can extend outside short cards without being clipped.
   *
   * @param {HTMLElement} wrap The card wrapper to attach the settings menu to.
   */
  _openCardSettingsMenu(wrap) {
    if (!wrap) return;
    if (this.__cardSettingsMenu?.wrap === wrap) {
      this._closeCardSettingsMenu_();
      return;
    }
    this._closeCardSettingsMenu_();
    const backdrop = document.createElement('div');
    backdrop.className = 'ddc-card-settings-backdrop';
    const menu = document.createElement('div');
    menu.className = 'ddc-card-settings';
    const themeVars = getComputedStyle(this);
    const resolveSolidSurface = (...vars) => {
      for (const varName of vars) {
        const value = String(themeVars.getPropertyValue(varName) || '').trim();
        if (value && !/^transparent$/i.test(value) && !/rgba?\([^)]*,\s*0(?:\.0+)?\s*\)/i.test(value)) {
          return value;
        }
      }
      return '#1f2329';
    };
    const fallbackPopupFieldSurface = resolveSolidSurface('--secondary-background-color', '--card-background-color', '--primary-background-color');
    const popupFieldSurface = `var(--ddc-popup-field, ${fallbackPopupFieldSurface})`;
    Object.assign(menu.style, {
      pointerEvents: 'auto',
      fontSize: '.92rem'
    });
    const stopEvt = (ev) => ev.stopPropagation();
    menu.addEventListener('pointerdown', stopEvt, true);
    menu.addEventListener('mousedown', stopEvt, true);
    menu.addEventListener('touchstart', stopEvt, true);

    const header = document.createElement('div');
    header.className = 'ddc-card-settings-header';
    const headCopy = document.createElement('div');
    const kicker = document.createElement('div');
    kicker.className = 'ddc-card-settings-kicker';
    kicker.textContent = 'Card Settings';
    const titleEl = document.createElement('div');
    titleEl.className = 'ddc-card-settings-title';
    titleEl.textContent = 'Card Settings';
    const subtitle = document.createElement('p');
    subtitle.className = 'ddc-card-settings-subtitle';
    subtitle.textContent = 'Fine-tune visibility, layers and per-card styling for this card without leaving edit mode.';
    headCopy.append(kicker, titleEl, subtitle);
    const closeBtn = document.createElement('button');
    closeBtn.className = 'ddc-card-settings-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('title', 'Close');
    closeBtn.setAttribute('aria-label', 'Close settings');
    closeBtn.innerHTML = '<ha-icon icon="mdi:close"></ha-icon>';
    closeBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      this._closeCardSettingsMenu_();
    });
    header.append(headCopy, closeBtn);
    menu.appendChild(header);

    const makeRow = (labelText, selectElement) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '12px';
      row.style.width = '100%';
      // Label
      const lab = document.createElement('span');
      lab.textContent = labelText;
      lab.style.color = 'var(--secondary-text-color, #9ca3af)';
      lab.style.fontWeight = '500';
      lab.style.whiteSpace = 'nowrap';
      // Control inherits width via flex
      selectElement.style.flex = '1 1 auto';
      row.appendChild(lab);
      row.appendChild(selectElement);
      return row;
    };
    const makeSection = (title, description) => {
      const section = document.createElement('section');
      section.className = 'section-card';
      if (title) {
        const h4 = document.createElement('h4');
        h4.textContent = title;
        section.appendChild(h4);
      }
      if (description) {
        const p = document.createElement('p');
        p.textContent = description;
        section.appendChild(p);
      }
      return section;
    };

    const applySelectStyle = (sel) => {
      Object.assign(sel.style, {
        appearance: 'none',
        padding: '10px 12px',
        minHeight: '44px',
        border: '1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.08))',
        borderRadius: '12px',
        background: popupFieldSurface,
        color: 'var(--primary-text-color, #f5f5f5)',
        font: 'inherit',
        lineHeight: '1.4',
        width: '100%'
      });
    };

    const currentCardStyle = this._extractPerCardStyle_(wrap);
    const quickBackgroundPresets = [
      'transparent',
      '#111827',
      '#1f2937',
      '#334155',
      '#0f766e',
      '#6b5b95',
      'var(--ha-card-background)',
      'rgba(255,255,255,0.24)'
    ];
    const quickBackgroundGradients = [
      'linear-gradient(135deg, #1e3a8a, #0ea5e9)',
      'linear-gradient(135deg, #111827, #1f2937)',
      'linear-gradient(135deg, #0f766e, #22c55e)',
      'linear-gradient(135deg, #7c3aed, #06b6d4)',
      'linear-gradient(135deg, #f97316, #f43f5e)',
      'radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)'
    ];
    const stopInteractive = (el) => {
      if (!el) return el;
      el.addEventListener('pointerdown', stopEvt);
      el.addEventListener('mousedown', stopEvt);
      el.addEventListener('touchstart', stopEvt);
      return el;
    };
    const guessHex = (value, fallback = '#111827') => {
      const match = String(value || '').trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
      return match ? match[0] : fallback;
    };
    const resolvePreviewBackground = (value) => {
      const raw = String(value || '').trim();
      if (!raw) return 'transparent';
      if (raw.startsWith('var(')) {
        try {
          const varName = raw.slice(4, -1).trim();
          return getComputedStyle(this).getPropertyValue(varName).trim() || 'transparent';
        } catch {
          return 'transparent';
        }
      }
      return raw;
    };
    const saveCardStyle = (patch = {}) => {
      const next = {
        ...this._extractPerCardStyle_(wrap),
        ...patch,
      };
      for (const key of Object.keys(next)) {
        if (!String(next[key] || '').trim()) delete next[key];
      }
      this._applyPerCardStyle_(wrap, next);
      try { this._queueSave('card-style-change'); } catch {}
    };
    const makeOverrideRow = (labelText, key, hintText) => {
      const sel = document.createElement('select');
      applySelectStyle(sel);
      [
        { value: '', label: 'Dashboard default' },
        { value: 'on', label: 'Enabled' },
        { value: 'off', label: 'Disabled' }
      ].forEach(({ value, label }) => {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = label;
        sel.appendChild(opt);
      });
      sel.value = currentCardStyle[key] || '';
      stopInteractive(sel);
      sel.addEventListener('change', () => {
        saveCardStyle({ [key]: sel.value });
      });
      const row = makeRow(labelText, sel);
      const group = document.createElement('div');
      Object.assign(group.style, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      });
      group.appendChild(row);
      if (hintText) {
        const hint = document.createElement('div');
        hint.textContent = hintText;
        Object.assign(hint.style, {
          fontSize: '.75rem',
          color: 'var(--secondary-text-color, #9ca3af)'
        });
        group.appendChild(hint);
      }
      return group;
    };
    const makeStyleField = (labelText, key, placeholder, hintText, options = {}) => {
      const field = document.createElement('div');
      Object.assign(field.style, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      });

      const top = document.createElement('div');
      Object.assign(top.style, {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px'
      });

      const label = document.createElement('span');
      label.textContent = labelText;
      Object.assign(label.style, {
        color: 'var(--secondary-text-color, #9ca3af)',
        fontWeight: '500'
      });

      const resetBtn = document.createElement('button');
      resetBtn.type = 'button';
      resetBtn.textContent = 'Reset';
      Object.assign(resetBtn.style, {
        border: '1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.08))',
        borderRadius: '999px',
        padding: '6px 12px',
        background: popupFieldSurface,
        color: 'var(--primary-text-color, #f5f5f5)',
        cursor: 'pointer',
        font: 'inherit'
      });
      stopInteractive(resetBtn);

      const controls = document.createElement('div');
      Object.assign(controls.style, {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      });

      const picker = document.createElement('input');
      picker.type = 'color';
      picker.value = guessHex(currentCardStyle[key], key === 'text_color' ? '#f8fafc' : '#111827');
      Object.assign(picker.style, {
        width: '36px',
        height: '36px',
        padding: '0',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        flex: '0 0 36px'
      });
      stopInteractive(picker);

      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentCardStyle[key] || '';
      input.placeholder = placeholder;
      Object.assign(input.style, {
        flex: '1 1 auto',
        minHeight: '44px',
        padding: '10px 12px',
        border: '1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.08))',
        borderRadius: '12px',
        background: popupFieldSurface,
        color: 'var(--primary-text-color, #f5f5f5)',
        font: 'inherit'
      });
      stopInteractive(input);
      const updatePresetState = () => {
        const current = input.value.trim();
        field.querySelectorAll('[data-card-style-value]').forEach((btn) => {
          const active = btn.getAttribute('data-card-style-value') === current;
          btn.setAttribute('aria-pressed', active ? 'true' : 'false');
          btn.style.outline = active ? '2px solid var(--primary-color, #03a9f4)' : 'none';
        });
      };

      picker.addEventListener('input', () => {
        input.value = picker.value;
        saveCardStyle({ [key]: picker.value });
        updatePresetState();
      });
      input.addEventListener('input', () => {
        const val = input.value.trim();
        const match = val.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
        if (match) picker.value = match[0];
        saveCardStyle({ [key]: val });
        updatePresetState();
      });
      resetBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        input.value = '';
        saveCardStyle({ [key]: '' });
        updatePresetState();
      });

      top.appendChild(label);
      top.appendChild(resetBtn);
      controls.appendChild(picker);
      controls.appendChild(input);
      field.appendChild(top);
      field.appendChild(controls);

      if (hintText) {
        const hint = document.createElement('div');
        hint.textContent = hintText;
        Object.assign(hint.style, {
          fontSize: '.75rem',
          color: 'var(--secondary-text-color, #9ca3af)'
        });
        field.appendChild(hint);
      }

      const appendPresetRow = (values, { gradient = false } = {}) => {
        if (!Array.isArray(values) || !values.length) return;
        const row = document.createElement('div');
        Object.assign(row.style, {
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px'
        });

        values.forEach((value) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.setAttribute('data-card-style-value', value);
          btn.setAttribute('aria-pressed', 'false');
          Object.assign(btn.style, {
            width: gradient ? '42px' : '26px',
            height: '26px',
            borderRadius: gradient ? '8px' : '7px',
            border: '1px solid rgba(255,255,255,.18)',
            background: resolvePreviewBackground(value),
            cursor: 'pointer',
            padding: '0'
          });
          btn.title = value;
          stopInteractive(btn);
          btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            input.value = value;
            const match = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
            if (match) picker.value = match[0];
            saveCardStyle({ [key]: value });
            updatePresetState();
          });
          row.appendChild(btn);
        });

        field.appendChild(row);
      };

      appendPresetRow(options.presets || []);
      appendPresetRow(options.gradients || [], { gradient: true });
      updatePresetState();

      return field;
    };

    const visibilitySection = makeSection('Visibility & placement', 'Control where this card appears and how it behaves inside the dashboard.');
    const styleSection = makeSection('Per-card style', 'Overrides Dashboard Settings for this card only.');
    const actionsSection = makeSection('Actions', 'Quick actions for this individual card.');

    if (Array.isArray(this.tabs) && this.tabs.length > 1) {
      const tabSelect = document.createElement('select');
      applySelectStyle(tabSelect);
      for (const t of this.tabs) {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.label || t.id;
        tabSelect.appendChild(opt);
      }
      const currentTab = wrap.dataset.tabId || this.defaultTab;
      tabSelect.value = this._normalizeTabId(currentTab);
      tabSelect.addEventListener('change', () => {
        const val = tabSelect.value;
        wrap.dataset.tabId = this._normalizeTabId(val);
        try { this._syncConnectorsForCardScopeChange_?.(wrap, { reason: null, render: false }); } catch {}
        try { this._addTabSelectorToChip?.(wrap, wrap.dataset.tabId); } catch {}
        try { this._applyActiveTab(); } catch {}
        try { this._applyVisibility_(); } catch {}
        try { this._queueSave('tab-change'); } catch {}
      });
      // Add pointer blocker to the select itself
      tabSelect.addEventListener('pointerdown', stopEvt);
      tabSelect.addEventListener('mousedown', stopEvt);
      tabSelect.addEventListener('touchstart', stopEvt);
      const row = makeRow('Tab', tabSelect);
      visibilitySection.appendChild(row);
      const tabHint = document.createElement('div');
      tabHint.textContent = 'Choose which tab this card appears on.';
      Object.assign(tabHint.style, {
        fontSize: '.75rem',
        color: 'var(--secondary-text-color, #9ca3af)'
      });
      visibilitySection.appendChild(tabHint);
    }

    if (this.layersEnabled && Array.isArray(this.layers) && this.layers.length) {
      const layerHint = document.createElement('div');
      layerHint.textContent = 'Pick the layers this card should belong to. If none are selected, the card stays visible on every layer.';
      Object.assign(layerHint.style, {
        fontSize: '.75rem',
        color: 'var(--secondary-text-color, #9ca3af)'
      });
      visibilitySection.appendChild(layerHint);

      const layerGrid = document.createElement('div');
      Object.assign(layerGrid.style, {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
      });
      const selectedLayers = new Set(this._getWrapperLayerIds_(wrap));
      const syncLayerChips = () => {
        layerGrid.querySelectorAll('[data-layer-id]').forEach((btn) => {
          const id = btn.getAttribute('data-layer-id');
          const active = !!id && selectedLayers.has(id);
          btn.setAttribute('aria-pressed', active ? 'true' : 'false');
          btn.style.outline = active ? '2px solid var(--primary-color, #03a9f4)' : 'none';
          btn.style.borderColor = active
            ? 'color-mix(in oklab, var(--primary-color, #03a9f4) 48%, transparent)'
            : 'var(--divider-color, rgba(255,255,255,.14))';
        });
      };

      (this.layers || []).forEach((layer) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'layer-chip';
        chip.setAttribute('data-layer-id', layer.id);
        chip.setAttribute('aria-pressed', selectedLayers.has(layer.id) ? 'true' : 'false');
        chip.style.borderColor = `color-mix(in oklab, ${layer.color || '#60a5fa'} 40%, transparent)`;
        chip.style.background = `color-mix(in oklab, ${layer.color || '#60a5fa'} 12%, transparent)`;
        chip.innerHTML = `${layer.icon ? `<ha-icon icon="${layer.icon}"></ha-icon>` : ''}<span>${layer.label || layer.id}</span>`;
        stopInteractive(chip);
        chip.addEventListener('click', (ev) => {
          ev.stopPropagation();
          if (selectedLayers.has(layer.id)) selectedLayers.delete(layer.id);
          else selectedLayers.add(layer.id);
          this._setWrapperLayerIds_(wrap, Array.from(selectedLayers));
          try { this._syncConnectorsForCardScopeChange_?.(wrap, { reason: null, render: false }); } catch {}
          syncLayerChips();
          try { this._applyActiveTab?.(); } catch {}
          try { this._applyVisibility_?.(); } catch {}
          try { this._queueSave?.('layer-change'); } catch {}
        });
        layerGrid.appendChild(chip);
      });
      syncLayerChips();
      visibilitySection.appendChild(layerGrid);
    }

    const overflowSelect = document.createElement('select');
    applySelectStyle(overflowSelect);
    const modes = [
      { value: '', label: 'Default' },
      { value: 'visible', label: 'Visible' },
      { value: 'hidden', label: 'Hidden' },
      { value: 'auto', label: 'Scroll' }
    ];
    for (const m of modes) {
      const opt = document.createElement('option');
      opt.value = m.value;
      opt.textContent = m.label;
      overflowSelect.appendChild(opt);
    }
    const currentOverflow = wrap.dataset.overflow || wrap.style.overflow || '';
    overflowSelect.value = currentOverflow || '';
    overflowSelect.addEventListener('change', () => {
      const val = overflowSelect.value;
      const cardEl = wrap.firstElementChild;
      if (val) {
        wrap.style.setProperty('overflow', val, 'important');
        if (cardEl) cardEl.style.setProperty('overflow', val, 'important');
        wrap.dataset.overflow = val;
      } else {
        wrap.style.removeProperty('overflow');
        if (cardEl) cardEl.style.removeProperty('overflow');
        delete wrap.dataset.overflow;
      }
      try { this._queueSave('overflow-change'); } catch {}
    });
    // Add pointer blocker to overflow select
    overflowSelect.addEventListener('pointerdown', stopEvt);
    overflowSelect.addEventListener('mousedown', stopEvt);
    overflowSelect.addEventListener('touchstart', stopEvt);
    const rowOv = makeRow('Overflow', overflowSelect);
    visibilitySection.appendChild(rowOv);
    const ovHint = document.createElement('div');
    ovHint.textContent = 'Control how card content behaves when it exceeds its bounds.';
    Object.assign(ovHint.style, {
      fontSize: '.75rem',
      color: 'var(--secondary-text-color, #9ca3af)'
    });
    visibilitySection.appendChild(ovHint);

    styleSection.appendChild(makeStyleField(
      'Card background',
      'background',
      'transparent · #123456 · linear-gradient(...)',
      'Sets the outer wrapper/background around this card.',
      { presets: quickBackgroundPresets, gradients: quickBackgroundGradients }
    ));
    styleSection.appendChild(makeStyleField('Text color', 'text_color', '#f8fafc · var(--primary-text-color)', 'Applies to text and icons when the card supports inherited theme vars.'));
    styleSection.appendChild(makeStyleField('Border color', 'border_color', '#38bdf8', 'Adds an optional border color around this card.'));
    styleSection.appendChild(makeOverrideRow('Animate cards', 'animate_cards', 'Overrides the dashboard animation setting for this card.'));
    styleSection.appendChild(makeOverrideRow('Drop shadow', 'card_shadow', 'Overrides the dashboard shadow setting for this card.'));

    const actionsRow = document.createElement('div');
    Object.assign(actionsRow.style, {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '8px'
    });

    const exportCardBtn = document.createElement('button');
    exportCardBtn.type = 'button';
    exportCardBtn.className = 'btn secondary';
    exportCardBtn.innerHTML = '<ha-icon icon="mdi:download-box-outline"></ha-icon><span style="margin-left:6px">Export card</span>';
    stopInteractive(exportCardBtn);
    exportCardBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      this._exportSingleCard_?.(wrap);
    });
    actionsRow.appendChild(exportCardBtn);
    actionsSection.appendChild(actionsRow);

    menu.append(visibilitySection, styleSection, actionsSection);

    const overlayRoot = this.shadowRoot || this;
    backdrop.appendChild(menu);
    overlayRoot.appendChild(backdrop);

    const closeOnOutside = (ev) => {
      if (ev.target === backdrop) this._closeCardSettingsMenu_();
    };
    const closeOnPointer = (ev) => {
      const path = typeof ev.composedPath === 'function' ? ev.composedPath() : [];
      if (path.includes(menu)) return;
      this._closeCardSettingsMenu_();
    };
    const closeOnEscape = (ev) => {
      if (ev.key === 'Escape') this._closeCardSettingsMenu_();
    };

    backdrop.addEventListener('pointerdown', closeOnOutside, true);
    document.addEventListener('pointerdown', closeOnPointer, true);
    document.addEventListener('keydown', closeOnEscape, true);

    this.__cardSettingsMenu = {
      root: backdrop,
      menu,
      wrap,
      cleanup: () => {
        backdrop.removeEventListener('pointerdown', closeOnOutside, true);
        document.removeEventListener('pointerdown', closeOnPointer, true);
        document.removeEventListener('keydown', closeOnEscape, true);
      }
    };
  },
};

export function installCardSettingsMenuMethods(proto) {
  for (const [name, value] of Object.entries(cardSettingsMenuMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
