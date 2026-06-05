/*
 * Card wrapper creation and embedded Lovelace card rendering.
 *
 * This module turns saved layout entries into positioned card DOM, keeps nested Home Assistant cards
 * rebuilt when needed, and coordinates sidebar/card-mod rebuild behavior.
 */

const raf = () => new Promise((resolve) => requestAnimationFrame(() => resolve()));

/* Card creation, wrapper controls, card config extraction, and layout insertion helpers. */
const cardBuilderMethods = {
  _restoreBackgroundHostToContainer_() {
    if (!this.cardContainer) return;
    let bgHost = this.cardContainer.querySelector('#ddcBgHost');
    if (!bgHost) {
      bgHost = document.createElement('div');
      bgHost.className = 'ddc-bg-host';
      bgHost.id = 'ddcBgHost';
      bgHost.setAttribute('aria-hidden', 'true');
    }
    this.cardContainer.innerHTML = '';
    this.cardContainer.appendChild(bgHost);
    this._ensureConnectorsLayer_();
  },

  async _buildCardsFromEntries_(entries = [], ticket = 0, options = {}) {
    let entryList = Array.isArray(entries) ? entries : [];
    const replaceExisting = !!options?.replaceExisting;
    if (!entryList.length && !replaceExisting && this._shouldShowEmptyDashboardPlaceholder_?.() === false) {
      try {
        const cached = this._readRuntimeLayoutCache_?.();
        const targetProfile = this._getRequestedResponsiveProfile_?.() || 'desktop';
        const targetOrientation = this._getRequestedResponsiveOrientation_?.(targetProfile) || 'landscape';
        const targetLayoutKey =
          this._getRuntimeResponsiveLayoutKey_?.(targetProfile, targetOrientation)
          || this._getResponsiveLayoutKey_?.(targetProfile, targetOrientation)
          || this._getPrimaryResponsiveLayoutKey_?.();
        const cachedLayouts = cached?.cards?.length
          ? this._normalizeResponsiveLayouts_?.(cached.cards || [], cached.responsive_layouts || null)
          : null;
        entryList = cachedLayouts?.[targetLayoutKey] || cachedLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || [];
        if (entryList.length) {
          this._responsiveLayouts = cachedLayouts;
          this._activeResponsiveLayoutKey = targetLayoutKey;
          this._activeResponsiveProfile = targetProfile;
        }
      } catch {}
    }
    if (entryList.length === 0 && !replaceExisting && this._shouldShowEmptyDashboardPlaceholder_?.() === false) {
      this._hideEmptyPlaceholder?.();
      this._syncEmptyStateUI?.();
      this._applyAutoScale?.();
      return;
    }

    this._restoreBackgroundHostToContainer_();
    this._clearSelection?.();
  
    let builtAny = false;
    const fragment = document.createDocumentFragment();
    const wrappersToRebuild = [];
    const wrappersToInit = [];
    for (const conf of entryList) {
      if (ticket && ticket !== this.__responsiveSwitchSeq) return;
      const normalized = this._normalizeSavedCardEntry_(conf);
      if (!normalized?.card || (typeof normalized.card === 'object' && Object.keys(normalized.card).length === 0)) {
        const wrap = this._makePlaceholderAt(
          normalized.position?.x || 0,
          normalized.position?.y || 0,
          normalized.size?.width || 200,
          normalized.size?.height || 200
        );
        wrap.dataset.layoutCardId = normalized.id;
        wrap.dataset.tabId = this._normalizeTabId(normalized.tabId || this.defaultTab);
        this._setWrapperLayerIds_(wrap, normalized.layerIds || normalized.layer_ids || []);
        fragment.appendChild(wrap);
        wrappersToRebuild.push(wrap);
        builtAny = true;
        continue;
      }
  
      const cardEl = await this._createCard(normalized.card);
      if (ticket && ticket !== this.__responsiveSwitchSeq) return;
      const wrap = this._makeWrapper(cardEl, { layoutCardId: normalized.id });
      if (this.editMode) wrap.classList.add('editing');
      wrap.dataset.tabId = this._normalizeTabId(normalized.tabId || this.defaultTab);
      this._setWrapperLayerIds_(wrap, normalized.layerIds || normalized.layer_ids || []);
  
      this._setCardPosition(wrap, normalized.position?.x || 0, normalized.position?.y || 0);
      wrap.style.width = `${normalized.size?.width ?? 14 * this.gridSize}px`;
      wrap.style.height = `${normalized.size?.height ?? 10 * this.gridSize}px`;
      this._syncCompactEditUiForWrapper_?.(wrap);
      if (normalized.z != null) wrap.style.zIndex = String(normalized.z);
      if (normalized.overflow) {
        try {
          wrap.style.overflow = normalized.overflow;
          wrap.dataset.overflow = normalized.overflow;
          const inner = wrap.firstElementChild;
          if (inner) inner.style.overflow = normalized.overflow;
        } catch {}
      }
      try { this._applyPerCardStyle_?.(wrap, normalized.card_style || normalized.cardStyle || null); } catch {}
  
      fragment.appendChild(wrap);
      wrappersToRebuild.push(wrap);
      wrappersToInit.push(wrap);
      builtAny = true;
    }
  
    if (!builtAny) {
      if (this._shouldShowEmptyDashboardPlaceholder_?.() !== false) {
        this._showEmptyPlaceholder();
      } else {
        this._hideEmptyPlaceholder?.();
      }
      this._applyAutoScale?.();
    } else {
      this.cardContainer.appendChild(fragment);
      wrappersToRebuild.forEach((wrap) => {
        try { this._rebuildOnce(wrap.firstElementChild); } catch {}
      });
      wrappersToInit.forEach((wrap) => {
        try { this._initCardInteract(wrap); } catch {}
      });
      this._resizeContainer();
      this._applyAutoScale?.();
      try {
        this._writeRuntimeLayoutCache_?.({
          version: 3,
          options: this._exportableOptions?.() || {},
          cards: this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || entryList,
          responsive_layouts: this._cloneJson_(this._serializeResponsiveLayouts_?.(
            this._responsiveLayouts,
            this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || entryList
          )),
          packages: this._exportDashboardPackages_?.() || [],
        });
      } catch {}
    }
  
    this._syncEmptyStateUI?.();
    try {
      this._renderTabs?.();
      this._renderLayersBar_?.();
      this._applyActiveTab?.();
    } catch {}
    try { this._renderConnectors_?.(); } catch {}
  },

    async _createCard(cfg) {
      let sourceCfg = this._sanitizeCardConfigForStorage_(cfg || {});
      if (sourceCfg?.type === 'custom:ddc-html-card') {
        sourceCfg = this._applyHtmlCardConfigOverride_(sourceCfg);
      }
      const runtimeCfg = this._cloneCardConfig_(sourceCfg);
      const type = String(sourceCfg?.type || '');
      if (type === 'custom:ddc-html-card') {
        const el = document.createElement('ddc-html-card');
        el.__ddcSourceConfig = sourceCfg;
        el.setConfig?.(this._cloneCardConfig_(sourceCfg));
        el.__ddcSetEditPreviewMode?.(this.editMode);
        el.hass = this.hass;
        return el;
      }
      if (type === 'custom:ddc-line-card') {
        const el = document.createElement('ddc-line-card');
        el.__ddcSourceConfig = sourceCfg;
        el.setConfig?.(this._cloneCardConfig_(sourceCfg));
        el.hass = this.hass;
        return el;
      }
      if (type === 'custom:ddc-table-card') {
        const el = document.createElement('ddc-table-card');
        el.__ddcSourceConfig = sourceCfg;
        el.setConfig?.(this._cloneCardConfig_(sourceCfg));
        el.hass = this.hass;
        return el;
      }
      if (type === 'custom:ddc-icon-card') {
        const el = document.createElement('ddc-icon-card');
        el.__ddcSourceConfig = sourceCfg;
        el.setConfig?.(this._cloneCardConfig_(sourceCfg));
        el.hass = this.hass;
        return el;
      }
      if (type === 'custom:ddc-text-card') {
        const el = document.createElement('ddc-text-card');
        el.__ddcSourceConfig = sourceCfg;
        el.setConfig?.(this._cloneCardConfig_(sourceCfg));
        el.hass = this.hass;
        return el;
      }
      const helpers = (await this._helpersPromise) || await window.loadCardHelpers();
      const el = helpers.createCardElement(runtimeCfg);
      el.__ddcSourceConfig = sourceCfg;
      el.hass = this.hass;
  
      // Special handling for mod-card
      if (sourceCfg.type === 'custom:mod-card') {
        // mod-card needs to be fully initialized before we can work with it
        await new Promise(resolve => setTimeout(resolve, 0));
  
        // Force mod-card to apply its styles
        if (el.setConfig && typeof el.setConfig === 'function') {
          try {
            // Re-apply config to ensure mod-card processes it
            el.setConfig(this._cloneCardConfig_(sourceCfg));
          } catch {}
        }
      }
  
      return el;
    },

    _createCardAnchors_(wrap) {
      const host = document.createElement('div');
      host.className = 'ddc-card-anchors';
      ['top', 'right', 'bottom', 'left'].forEach((anchor) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'ddc-card-anchor';
        btn.dataset.anchor = anchor;
        btn.setAttribute('title', `Connect from ${anchor}`);
        btn.setAttribute('aria-label', `Connect from ${anchor}`);
        btn.innerHTML = '<span></span>';
        const stop = (ev) => {
          ev.preventDefault?.();
          ev.stopPropagation?.();
        };
        btn.addEventListener('mousedown', stop);
        btn.addEventListener('click', stop);
        btn.addEventListener('pointerdown', (ev) => {
          if (!this.editMode) return;
          this._startConnectorAnchorDrag_?.(wrap, anchor, ev);
        });
        host.appendChild(btn);
      });
      return host;
    },

    _syncCompactEditUiForWrapper_(wrap) {
      if (!wrap) return;
      try {
        const rect = wrap.getBoundingClientRect?.() || {};
        const sx = Math.max(0.0001, Number(this.__pointerScaleX) || 1);
        const sy = Math.max(0.0001, Number(this.__pointerScaleY) || 1);
        const width =
          parseFloat(wrap.style?.width) ||
          Number(wrap.offsetWidth) ||
          (Number(rect.width) ? Number(rect.width) / sx : 0);
        const height =
          parseFloat(wrap.style?.height) ||
          Number(wrap.offsetHeight) ||
          (Number(rect.height) ? Number(rect.height) / sy : 0);
        const compact = !!(
          (width && width <= 190) ||
          (height && height <= 124) ||
          (width && height && width <= 250 && height <= 96)
        );
        const tiny = !!(
          (width && width <= 112) ||
          (height && height <= 72) ||
          (width && height && width <= 132 && height <= 86)
        );
        wrap.classList.toggle('ddc-compact-edit-ui', compact);
        wrap.classList.toggle('ddc-tiny-edit-ui', tiny);
        if (!compact) {
          wrap.classList.remove('ddc-compact-actions-open', 'ddc-tiny-edit-ui');
          if (this.__compactCardActionsMenu?.wrap === wrap) this._closeCompactCardActionsMenu_?.();
        }
      } catch {}
    },

    _runCardQuickAction_(wrap, action) {
      if (!wrap || !action) return;
      try {
        this._closeCardSettingsMenu_?.();
        this._closeCompactCardActionsMenu_?.();
        const act = String(action);
        if (act === 'delete') {
          wrap.querySelector?.('.delete-handle')?.click?.();
          return;
        }
        const button = wrap.querySelector?.(`.chip button[data-act="${act}"]`);
        button?.click?.();
      } catch {}
    },

    _makeWrapper(cardEl, options = {}) {
      const wrap = document.createElement('div');
      wrap.classList.add('card-wrapper');
      wrap.dataset.tabId = this._normalizeTabId(this.activeTab || this.defaultTab);
      wrap.dataset.layoutCardId = options.layoutCardId || cardEl?.dataset?.layoutCardId || this._genLayoutCardId_();
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
        <button class="mini" data-act="export-card" title="Export card" aria-label="Export card">
          <ha-icon icon="mdi:download-box-outline"></ha-icon><span>Export card</span>
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
  
      // Append a settings button to the chip. This button opens a small
      // configuration menu for the card (e.g. overflow options). It is
      // implemented separately rather than baked into the HTML string so the
      // dataset properties and event handlers work correctly.
      const settingsBtn = document.createElement('button');
      settingsBtn.className = 'mini';
      settingsBtn.dataset.act = 'settings';
      settingsBtn.setAttribute('title', 'Settings');
      settingsBtn.setAttribute('aria-label', 'Settings');
      settingsBtn.innerHTML = '<ha-icon icon="mdi:cog"></ha-icon><span>Settings</span>';
      chip.appendChild(settingsBtn);

      const compactActionsBtn = document.createElement('button');
      compactActionsBtn.type = 'button';
      compactActionsBtn.className = 'ddc-compact-card-actions';
      compactActionsBtn.setAttribute('title', 'Card actions');
      compactActionsBtn.setAttribute('aria-label', 'Card actions');
      compactActionsBtn.setAttribute('aria-haspopup', 'menu');
      compactActionsBtn.setAttribute('aria-expanded', 'false');
      compactActionsBtn.innerHTML = '<ha-icon icon="mdi:dots-grid"></ha-icon>';
      const stopCompactActionEvent = (ev) => {
        ev.stopPropagation();
      };
      compactActionsBtn.addEventListener('pointerdown', stopCompactActionEvent, true);
      compactActionsBtn.addEventListener('mousedown', stopCompactActionEvent, true);
      compactActionsBtn.addEventListener('touchstart', stopCompactActionEvent, true);
      compactActionsBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        this._openCompactCardActionsMenu_?.(wrap);
      });
  
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
          this._removeConnectorsForCardIds_?.(toDel.map((w) => w.dataset?.layoutCardId).filter(Boolean), { reason: null, render: false });
          toDel.forEach(w => w.remove());
          this._clearSelection();
          this._resizeContainer();
          this._renderConnectors_?.();
          this._queueSave('delete-multi');
          this._ensurePlaceholderIfEmpty?.();
        } else {
          this._removeConnectorsForCardIds_?.([wrap.dataset?.layoutCardId].filter(Boolean), { reason: null, render: false });
          wrap.remove();
          this._resizeContainer();
          this._renderConnectors_?.();
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
            this._removeConnectorsForCardIds_?.(toDel.map((w) => w.dataset?.layoutCardId).filter(Boolean), { reason: null, render: false });
            toDel.forEach(w => w.remove());
            this._clearSelection();
            this._resizeContainer(); this._renderConnectors_?.(); this._queueSave('delete-multi'); this._ensurePlaceholderIfEmpty();
          } else {
            this._removeConnectorsForCardIds_?.([wrap.dataset?.layoutCardId].filter(Boolean), { reason: null, render: false });
            wrap.remove(); this._resizeContainer(); this._renderConnectors_?.(); this._queueSave('delete'); this._ensurePlaceholderIfEmpty();
          }
        } else if (act === 'export-card') {
          this._exportSingleCard_?.(wrap);
        } else if (act === 'duplicate' || act === 'copy') {
          const targets = (this._selection.size > 1 && this._selection.has(wrap)) ? Array.from(this._selection) : [wrap];
          for (const t of targets) {
            const cfg = this._extractCardConfig(t.firstElementChild) || {};
            const dup = await this._createCard(cfg);
            const w2 = this._makeWrapper(dup);
            w2.style.width  = t.style.width;
            w2.style.height = t.style.height;
            this._syncCompactEditUiForWrapper_?.(w2);
            // Preserve per-card overflow setting on duplicates. Without this
            // duplication would revert to default overflow auto even when the
            // source card had overflow visible or hidden. Copy both the
            // wrapper’s overflow and the card element’s overflow so that
            // dropdowns/tooltips maintain correct clipping behaviour.
            try {
              if (t.style && t.style.overflow) {
                w2.style.overflow = t.style.overflow;
              }
              if (t.dataset && t.dataset.overflow) {
                w2.dataset.overflow = t.dataset.overflow;
              }
              if (t.dataset && t.dataset.cardStyle) {
                w2.dataset.cardStyle = t.dataset.cardStyle;
                this._applyPerCardStyle_?.(w2, this._extractPerCardStyle_?.(t) || null);
              }
              const origCard = t.firstElementChild;
              const dupCard = w2.firstElementChild;
              if (origCard && dupCard && origCard.style && origCard.style.overflow) {
                dupCard.style.overflow = origCard.style.overflow;
              }
            } catch {}
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
            const cleanCfg = this._sanitizeCardConfigForStorage_(newCfg || {});
            try { this._rememberHtmlCardConfigOverride_?.(cfg, cleanCfg); } catch {}
            const oldEl = wrap.firstElementChild;
            const newEl = await this._createCard(cleanCfg);
  
            // persist cfg on wrapper (and card-mod flag if you use it)
            try {
              wrap.dataset.cfg = JSON.stringify(cleanCfg);
              if (this._hasCardModDeep?.(cleanCfg)) wrap.dataset.needsCardMod = 'true';
              else delete wrap.dataset.needsCardMod;
            } catch {}
            try { this._updateCardConfigAcrossResponsiveLayouts_?.(wrap.dataset.layoutCardId, cleanCfg); } catch {}
  
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
              try { this._persistCurrentResponsiveProfileToMemory_?.({ syncMembership: true }); } catch {}
              try { this._updateCardConfigAcrossResponsiveLayouts_?.(wrap.dataset.layoutCardId, cleanCfg); } catch {}
              try { this._syncLiveCardConfigsIntoResponsiveLayouts_?.(); } catch {}
              await this._saveLayout(true);            // flush save now
              try { await this._persistThisCardConfigToStorage_?.(); } catch (persistErr) {
                console.warn('[drag-and-drop-card] Could not persist edited card config to Lovelace storage', persistErr);
              }
            } catch (e) { console.warn('Save before reload failed', e); }
  
            window.location.reload();                  // force refresh so edited card appears
          });
        } else if (act === 'settings') {
          // Open or toggle the per-card settings menu (e.g. overflow options).
          try {
            // Open the per-card settings menu which now contains both the
            // overflow toggle and a tab selector. The old _openOverflowMenu
            // method has been replaced by _openCardSettingsMenu.
            this._openCardSettingsMenu?.(wrap);
          } catch {}
        }
      });
  
      // ADD THE MISSING SHIELD ELEMENT
      const shield = document.createElement('div');
      shield.className = 'shield';
  
      const anchors = this._createCardAnchors_(wrap);
  
      // Resize handles in both bottom corners. The left handle mirrors the same
      // icon and resizes by moving the card's left edge.
      const resizeLeftHandle = document.createElement('div');
      resizeLeftHandle.classList.add('resize-handle', 'resize-handle--bl');
      if (!this.editMode) resizeLeftHandle.style.display = 'none';
      resizeLeftHandle.title = 'Resize from bottom left';
      resizeLeftHandle.innerHTML = `<ha-icon icon="mdi:resize-bottom-right"></ha-icon>`;
  
      const resizeRightHandle = document.createElement('div');
      resizeRightHandle.classList.add('resize-handle', 'resize-handle--br');
      if (!this.editMode) resizeRightHandle.style.display = 'none';  // hide handle if not editing
      resizeRightHandle.title = 'Resize from bottom right';
      resizeRightHandle.innerHTML = `<ha-icon icon="mdi:resize-bottom-right"></ha-icon>`;
  
      // cache the card config on the wrapper
      try {
        const cfg = this._sanitizeCardConfigForStorage_(
          cardEl.__ddcSourceConfig || cardEl._config || cardEl.config
        );
        if (cfg && typeof cfg === 'object' && Object.keys(cfg).length) {
          wrap.dataset.cfg = JSON.stringify(cfg);
          cardEl.__ddcSourceConfig = cfg;
  
          // Mark if this needs card_mod processing
          if (this._hasCardModDeep(cfg)) { wrap.dataset.needsCardMod = 'true'; }
        }
      } catch {}
  
      // include the delete handle before resize handles so it appears beneath them in the DOM
      wrap.append(cardEl, shield, anchors, chip, compactActionsBtn, delHandle, resizeLeftHandle, resizeRightHandle);
      // DDC patch: trigger one-time rebuild so nested card_mod attaches
      try { this._rebuildOnce(cardEl); } catch {}
      this.__ddcTextLockDirty = true;
      try { this._scheduleTextResizeLockRefresh_?.(true); } catch {}
  
      // Enable double-click on a card wrapper to open the card editor when
      // already in edit mode. This does not toggle edit mode; instead it
      // delegates to the existing Edit button, ensuring the same commit
      // behaviour and callback chain are used. Only plain double-clicks
      // outside of control elements (resize handle, delete handle, chip) are
      // intercepted.
      wrap.addEventListener('dblclick', (ev) => {
        if (!this.editMode) return;
        // Ignore double clicks originating from controls within the wrapper
        if (ev.target.closest('.resize-handle') || ev.target.closest('.delete-handle') || ev.target.closest('.chip') || ev.target.closest('.ddc-compact-card-actions')) return;
        ev.stopPropagation();
        try {
          const btn = wrap.querySelector('.chip button[data-act="edit"]');
          if (btn) btn.click();
        } catch {}
      });
      requestAnimationFrame(() => this._syncCompactEditUiForWrapper_?.(wrap));
      return wrap;
    },

      _processCardModOnce() {
      // Only run once per load
      if (this._cardModProcessed) return;
      this._cardModProcessed = true;
  
      const wraps = this.cardContainer?.querySelectorAll('[data-needs-card-mod="true"]') || [];
  
      wraps.forEach(wrap => {
        const card = wrap.firstElementChild;
        if (!card) return;
  
        const config = this._sanitizeCardConfigForStorage_(
          card.__ddcSourceConfig || card._config || card.config
        );
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
                card.setConfig(this._cloneCardConfig_(config));
              } catch {}
            }
          }, 100);
        } else if (config.card_mod && card.setConfig) {
          // Regular card_mod
          try {
            card.setConfig(this._cloneCardConfig_(config));
          } catch {}
        }
      });
    },

    _extractCardConfig(cardEl){
      if (!cardEl) return {};
      // Prefer the wrapper cache first. Runtime card instances, especially
      // mod-card/card-mod combinations, may rewrite or expand their own config
      // object internally after repeated rebuilds. If we serialize that mutated
      // runtime object back into YAML, style snippets can get duplicated many
      // times. The wrapper cache is the stable source-of-truth for what DDC
      // intentionally saved.
      try {
        const wrap = cardEl.closest ? cardEl.closest('.card-wrapper') : null;
        const raw  = wrap?.dataset?.cfg;
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object') {
            return this._sanitizeCardConfigForStorage_(parsed);
          }
        }
      } catch {}
      // Next prefer the original config snapshot captured when the card element
      // was created. This protects against internal runtime mutation even when a
      // wrapper cache is unavailable.
      const sourceCfg = cardEl.__ddcSourceConfig;
      if (sourceCfg && typeof sourceCfg === 'object' && Object.keys(sourceCfg).length) {
        return this._sanitizeCardConfigForStorage_(sourceCfg);
      }
      // attempt to read the card's own config
      const cfg = cardEl._config || cardEl.config;
      if (cfg && typeof cfg === 'object' && Object.keys(cfg).length) {
        // Always return a deep clone of the config so editing one card cannot
        // inadvertently mutate the config of another. Use structuredClone when
        // available for fidelity; fall back to JSON serialization otherwise.
        return this._sanitizeCardConfigForStorage_(cfg);
      }
      return {};
    },

    _getNextAvailablePosition() {
      const wraps = Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'));
      const occupied = new Set();
      const gs = this.gridSize;
      const edgeBuffer = this._getCanvasEdgeBufferPx_?.() || 0;
      wraps.forEach((w) => {
        const x = (parseFloat(w.getAttribute('data-x')) || 0);
        const y = (parseFloat(w.getAttribute('data-y')) || 0);
        const width  = parseFloat(getComputedStyle(w).width)  || 100;
        const height = parseFloat(getComputedStyle(w).height) || 100;
        const xStart = Math.floor(x/gs), yStart = Math.floor(y/gs);
        const xEnd   = Math.floor((x+width)/gs), yEnd = Math.floor((y+height)/gs);
        for (let xi=xStart; xi<xEnd; xi++) for (let yi=yStart; yi<yEnd; yi++) occupied.add(`${xi}-${yi}`);
      });
      let xi=Math.max(0, Math.ceil(edgeBuffer / gs)), yi=Math.max(0, Math.ceil(edgeBuffer / gs));
      const startXi = xi;
      while (occupied.has(`${xi}-${yi}`)) { xi+=6; if (xi>60) { xi=startXi; yi+=6; } }
      return { x: xi*gs, y: yi*gs };
    },

    async _addPickedCardToLayout(cardConfig) {
      this._hideEmptyPlaceholder();
      const cardEl = await this._createCard(cardConfig);
      const wrap = this._makeWrapper(cardEl);
      const next = this._getNextAvailablePosition();
      this._setCardPosition(wrap, next.x, next.y);
      const type = String(cardConfig?.type || '');
      if (type === 'custom:ddc-line-card') {
        const isVerticalish = ['vertical', 'diagonal-up', 'diagonal-down'].includes(String(cardConfig?.direction || '').toLowerCase());
        wrap.style.width  = `${(isVerticalish ? 5 : 16) * this.gridSize}px`;
        wrap.style.height = `${(isVerticalish ? 14 : 4) * this.gridSize}px`;
      } else if (type === 'custom:ddc-table-card') {
        const cols = Math.max(1, Number(cardConfig?.columns || 3) || 3);
        const rows = Math.max(1, Number(cardConfig?.rows || 3) || 3);
        wrap.style.width  = `${Math.max(12, Math.min(24, cols * 5)) * this.gridSize}px`;
        wrap.style.height = `${Math.max(7, Math.min(18, rows * 3 + (cardConfig?.title ? 2 : 1))) * this.gridSize}px`;
      } else if (type === 'custom:ddc-icon-card') {
        wrap.style.width  = `${6 * this.gridSize}px`;
        wrap.style.height = `${6 * this.gridSize}px`;
      } else if (type === 'custom:ddc-text-card') {
        wrap.style.width  = `${14 * this.gridSize}px`;
        wrap.style.height = `${5 * this.gridSize}px`;
      } else {
        wrap.style.width  = `${14*this.gridSize}px`;
        wrap.style.height = `${10*this.gridSize}px`;
      }
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
    },
};

export function installCardBuilderMethods(proto) {
  for (const [name, value] of Object.entries(cardBuilderMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
