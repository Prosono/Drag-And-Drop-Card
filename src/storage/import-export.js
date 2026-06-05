/*
 * Design import/export workflows.
 *
 * This module serializes the dashboard into portable design payloads, imports those payloads back into
 * responsive layouts, and avoids full-page reloads when the runtime can update in place.
 */

/* Design and single-card export/import helpers. */
const designImportExportMethods = {
  
  
  
  
    _downloadJsonFile_(name, payload) {
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = name;
      a.click();
      URL.revokeObjectURL(a.href);
    },

  
    _getHighestZForEntries_(entries = []) {
      return (Array.isArray(entries) ? entries : []).reduce((max, entry) => {
        const z = Number(entry?.z);
        return Number.isFinite(z) ? Math.max(max, Math.round(z)) : max;
      }, 5);
    },

  
    _getImportViewportBoundsForLayoutVariant_(variantKey = '') {
      const layoutKey = String(variantKey || this._getActiveResponsiveLayoutKey_?.() || this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape');
      const { profile, orientation } = this._splitResponsiveLayoutKey_(layoutKey);
      const viewport = this._getResponsiveViewportProfile_?.(profile, orientation);
      const width = Math.max(1, Number(viewport?.width || 0) || 0);
      const height = Math.max(1, Number(viewport?.height || 0) || 0);
      if (width > 0 && height > 0) return { width, height };
      const fallback = this._getContainerSize?.() || {};
      return {
        width: Math.max(1, Number(fallback?.w || fallback?.width || 0) || 1),
        height: Math.max(1, Number(fallback?.h || fallback?.height || 0) || 1),
      };
    },

  
    _findNextAvailablePositionForEntries_(entries = [], size = {}, bounds = null) {
      const gs = Math.max(1, Number(this.gridSize || 10) || 10);
      const edgeBuffer = this._getCanvasEdgeBufferPx_?.() || 0;
      const width = Math.max(1, Number(size?.width) || (14 * gs));
      const height = Math.max(1, Number(size?.height) || (10 * gs));
      const boundWidth = Number(bounds?.width);
      const boundHeight = Number(bounds?.height);
      const hasBounds = Number.isFinite(boundWidth) && boundWidth > 0 && Number.isFinite(boundHeight) && boundHeight > 0;
      const existingRects = (Array.isArray(entries) ? entries : []).map((entry) => ({
        x: Number(entry?.position?.x) || 0,
        y: this._clampYToCanvasTop_(Number(entry?.position?.y) || 0),
        w: Math.max(1, Number(entry?.size?.width) || (14 * gs)),
        h: Math.max(1, Number(entry?.size?.height) || (10 * gs)),
      }));
      const maxX = existingRects.reduce((max, rect) => Math.max(max, rect.x + rect.w), 0);
      const searchCols = hasBounds
        ? Math.max(1, Math.floor(Math.max(0, boundWidth - edgeBuffer - width) / gs) + 1)
        : Math.max(24, Math.ceil((maxX + width + gs * 12) / gs));
      const searchRows = hasBounds
        ? Math.max(1, Math.floor(Math.max(0, boundHeight - edgeBuffer - height) / gs) + 1)
        : 400;
      const candidateRect = { x: 0, y: 0, w: width, h: height };
      const startCol = Math.max(0, Math.ceil(edgeBuffer / gs));
      const startRow = Math.max(0, Math.ceil(edgeBuffer / gs));
  
      for (let yi = startRow; yi < searchRows; yi += 1) {
        for (let xi = startCol; xi < searchCols; xi += 1) {
          candidateRect.x = xi * gs;
          candidateRect.y = this._clampYToCanvasTop_(yi * gs);
          if (hasBounds) {
            if ((candidateRect.x + candidateRect.w) > (boundWidth - edgeBuffer)) continue;
            if ((candidateRect.y + candidateRect.h) > (boundHeight - edgeBuffer)) continue;
          }
          const collision = existingRects.some((rect) => this._rectsOverlap(candidateRect, rect));
          if (!collision) {
            return { x: candidateRect.x, y: candidateRect.y };
          }
        }
      }
      return { x: startCol * gs, y: startRow * gs };
    },

  
    _captureSingleCardExportPayload_(wrap) {
      if (!wrap) return null;
      this._persistCurrentResponsiveProfileToMemory_?.();
      const layoutCardId = wrap.dataset.layoutCardId || this._genLayoutCardId_();
      const activeLayoutKey = this._shouldUseSharedResponsiveLayout_?.()
        ? (this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape')
        : (this._activeResponsiveLayoutKey || this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape');
      const currentEntries = this._captureCurrentLayoutEntries_();
      const activeEntry = currentEntries.find((entry) => entry.id === layoutCardId)
        || this._responsiveLayouts?.[activeLayoutKey]?.find?.((entry) => entry?.id === layoutCardId)
        || null;
      if (!activeEntry?.card) return null;
  
      const responsiveEntries = {};
      (this._responsiveLayoutVariantKeys_?.() || []).forEach((variantKey) => {
        const found = this._responsiveLayouts?.[variantKey]?.find?.((entry) => entry?.id === layoutCardId);
        if (found?.card) responsiveEntries[variantKey] = this._normalizeSavedCardEntry_(found, found);
      });
      if (!responsiveEntries[activeLayoutKey]) {
        responsiveEntries[activeLayoutKey] = this._normalizeSavedCardEntry_(activeEntry, activeEntry);
      }
      const connectorEntries = this._collectConnectorLayoutsForCard_?.(layoutCardId) || {};
      const activeConnectors = connectorEntries[activeLayoutKey] || connectorEntries[this._getPrimaryResponsiveLayoutKey_?.()] || [];
  
      return {
        kind: 'ddc-card',
        version: 2,
        exported_at: new Date().toISOString(),
        source_storage_key: this.storageKey || null,
        connector_card_id: layoutCardId,
        entry: this._normalizeSavedCardEntry_(activeEntry, activeEntry),
        responsive_entries: this._cloneJson_(responsiveEntries),
        connectors: this._cloneJson_(activeConnectors),
        responsive_connectors: this._cloneJson_(this._serializeResponsiveConnectorLayouts_(connectorEntries, activeConnectors)),
      };
    },

  
    _exportSingleCard_(wrap) {
      const payload = this._captureSingleCardExportPayload_(wrap);
      if (!payload?.entry?.card) {
        this._toast?.('Could not export this card.');
        return;
      }
      const typeToken = String(payload.entry?.card?.type || 'card')
        .replace(/^custom:/i, '')
        .replace(/[^a-z0-9]+/gi, '_')
        .replace(/^_+|_+$/g, '')
        .toLowerCase() || 'card';
      const fileName = `ddc_card_${typeToken}_${payload.entry.id || Date.now()}.json`;
      this._downloadJsonFile_(fileName, payload);
      this._toast?.('Card exported.');
    },

  
    _isSingleCardImportPayload_(json = null) {
      if (!json || typeof json !== 'object') return false;
      if (json.kind === 'ddc-card') return true;
      if (json.entry?.card) return true;
      if (json.card?.card) return true;
      if (json.responsive_entries && typeof json.responsive_entries === 'object') return true;
      return false;
    },

  
    async _createWrapperFromSavedEntry_(entry = {}) {
      const normalized = this._normalizeSavedCardEntry_(entry, entry);
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
        return wrap;
      }
      const cardEl = await this._createCard(normalized.card);
      const wrap = this._makeWrapper(cardEl, { layoutCardId: normalized.id });
      if (this.editMode) wrap.classList.add('editing');
      wrap.dataset.tabId = this._normalizeTabId(normalized.tabId || this.defaultTab);
      this._setWrapperLayerIds_(wrap, normalized.layerIds || normalized.layer_ids || []);
      this._setCardPosition(wrap, normalized.position?.x || 0, normalized.position?.y || 0);
      wrap.style.width = `${normalized.size?.width ?? 14 * this.gridSize}px`;
      wrap.style.height = `${normalized.size?.height ?? 10 * this.gridSize}px`;
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
      return wrap;
    },

  
    async _importSingleCardPayload_(payload = {}) {
      const baseEntryRaw = payload?.entry?.card ? payload.entry : (payload?.card?.card ? payload.card : payload);
      if (!baseEntryRaw?.card) {
        this._toast?.('Import failed — invalid card file.');
        return false;
      }
  
      this._persistCurrentResponsiveProfileToMemory_?.();
      if (!this._responsiveLayouts) {
        this._responsiveLayouts = this._normalizeResponsiveLayouts_(this._captureCurrentLayoutEntries_(), null);
      }
  
      const responsiveEntriesRaw = payload?.responsive_entries || payload?.responsiveEntries || {};
      const importedConnectorLayouts = this._normalizeResponsiveConnectorLayouts_(
        payload?.connectors || [],
        payload?.responsive_connectors || payload?.responsiveConnectors || null
      );
      const variantKeys = this._responsiveLayoutVariantKeys_?.() || [this._activeResponsiveLayoutKey || 'desktop_landscape'];
      const newLayoutCardId = this._genLayoutCardId_();
      const oldLayoutCardId = String(payload?.connector_card_id || payload?.connectorCardId || baseEntryRaw.id || payload?.entry?.id || '').trim();
      const targetTabId = this._normalizeTabId(this.activeTab || this.defaultTab);
      const importedByVariant = {};
      const connectorIdMap = new Map();
      this._ensureResponsiveConnectorsMemory_?.();
  
      variantKeys.forEach((variantKey) => {
        const sourceEntryRaw = responsiveEntriesRaw?.[variantKey]?.card
          ? responsiveEntriesRaw[variantKey]
          : baseEntryRaw;
        const sourceEntry = this._normalizeSavedCardEntry_(sourceEntryRaw, baseEntryRaw);
        const currentEntries = Array.isArray(this._responsiveLayouts?.[variantKey])
          ? this._responsiveLayouts[variantKey].map((entry) => this._normalizeSavedCardEntry_(entry, entry))
          : [];
        const importedEntry = this._normalizeSavedCardEntry_({
          ...this._cloneJson_(sourceEntry),
          id: newLayoutCardId,
          tabId: targetTabId,
        }, sourceEntry);
        importedEntry.id = newLayoutCardId;
        importedEntry.tabId = targetTabId;
        importedEntry.position = this._findNextAvailablePositionForEntries_(
          currentEntries,
          importedEntry.size,
          this._getImportViewportBoundsForLayoutVariant_(variantKey)
        );
        importedEntry.z = Math.max(6, this._getHighestZForEntries_(currentEntries) + 1);
        currentEntries.push(importedEntry);
        this._responsiveLayouts[variantKey] = currentEntries;
        importedByVariant[variantKey] = importedEntry;
  
        const sourceConnectors = Array.isArray(importedConnectorLayouts?.[variantKey])
          ? importedConnectorLayouts[variantKey]
          : [];
        if (sourceConnectors.length) {
          const currentConnectors = Array.isArray(this._responsiveConnectors?.[variantKey])
            ? this._responsiveConnectors[variantKey].map((entry) => this._normalizeConnectorEntry_(entry))
            : [];
          const importedConnectors = sourceConnectors
            .map((connector) => this._remapSingleCardConnector_(connector, {
              oldCardId: oldLayoutCardId,
              newCardId: newLayoutCardId,
              sourceEntry,
              importedEntry,
              connectorIdMap,
            }))
            .filter(Boolean);
          if (importedConnectors.length) {
            this._responsiveConnectors[variantKey] = [...currentConnectors, ...importedConnectors];
          }
        }
      });
      this._syncConnectorLayoutsToConfig_?.();
  
      const activeLayoutKey = this._shouldUseSharedResponsiveLayout_?.()
        ? (this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape')
        : (this._activeResponsiveLayoutKey || this._getRequestedResponsiveLayoutKey_?.() || this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape');
      const activeEntry = importedByVariant[activeLayoutKey] || importedByVariant[this._getPrimaryResponsiveLayoutKey_?.()] || Object.values(importedByVariant)[0];
      if (activeEntry) {
        this._hideEmptyPlaceholder?.();
        const wrap = await this._createWrapperFromSavedEntry_(activeEntry);
        if (wrap) {
          this.cardContainer.appendChild(wrap);
          try { this._rebuildOnce(wrap.firstElementChild); } catch {}
          if (!wrap.classList.contains('ddc-placeholder')) {
            this._initCardInteract?.(wrap);
          }
        }
      }
  
      this._resizeContainer?.();
      this._syncEmptyStateUI?.();
      try { this._renderTabs?.(); this._renderLayersBar_?.(); this._applyActiveTab?.(); } catch {}
      try { this._applyVisibility_?.(); } catch {}
      try { this._renderConnectors_?.(); } catch {}
      try { await this._saveLayout(false); } catch { this._queueSave?.('import-card'); }
      this._toast?.('Card imported.');
      return true;
    },

  
    _exportDesign() {
      this._persistCurrentResponsiveProfileToMemory_();
      const saved = this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_()] || this._captureCurrentLayoutEntries_();
  
      const payload = {
        version: 3,
        options: this._exportableOptions(),
        cards: saved,
        responsive_layouts: this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts, saved)),
        packages: this._exportDashboardPackages_(),
      };
  
      // NEW: preserve card_mod (if present) as part of options so it exports with the design
      if (this._config && this._config.card_mod) {
        payload.options = payload.options || {};
        payload.options.card_mod = this._config.card_mod;
      }
  
      const name = `DragAndDrop_Design_${this.storageKey || 'layout'}.json`;
      this._downloadJsonFile_(name, payload);
      this._toast('Design exported.');
    },

  
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
      'animate_cards','play-loading_animation','auto_resize_cards','auto_viewport_max_width','auto_scale_max','optimize_for_mobile','mobile_dynamic_behavior','do_not_resize_text','outer_grid_buffer','outer_grid_buffer_cells','responsive_viewports','responsive_viewport_aspect_locks',
      'connectors','responsive_connectors',
  
      // Visuals
      'container_background','apply_background_to_page','card_background','card_shadow','card_shadow_intensity',
      'dashboard_theme_enabled','dashboard_theme','dashboard_theme_override_all_design',
  
      // Size / layout
      'container_size_mode','container_fixed_width','container_fixed_height',
      'container_preset','container_preset_orientation',
  
      // Tabs
      'tabs','tabs_position','default_tab','hide_tabs_when_single','sidebar_enabled','sidebar_items','sidebar_style','sidebar_density','sidebar_accent','sidebar_header','sidebar_canvas_height','sidebar_cards','sidebar_home_image','sidebar_calendar_entities','layers_enabled','layers_button_details',
      'layers',
  
      // HA chrome
      'hide_HA_Header','hide_HA_Sidebar',
  
      // Background modes
      'background_mode','background_image','background_particles','background_youtube',
  
      // Screen saver
      'screen_saver_enabled','screen_saver_delay','screen_saver_style','screen_saver_entities',
    ];
    // ----------------------------------
  
    inp.onchange = async () => {
      const file = inp.files?.[0]; if (!file) return;
      const txt = await file.text();
  
      try {
        const json = JSON.parse(txt);
        if (this._isSingleCardImportPayload_(json)) {
          await this._importSingleCardPayload_(json);
          return;
        }
        const prevStorageKey = this.storageKey || this._config?.storage_key || null;
        this._setDashboardPackages_(json.packages || []);
  
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
  
        const compatTabsPositionRaw = String(json.options?.tabs_position || this.tabsPosition || 'top').toLowerCase();
        const compatTabsPosition = (compatTabsPositionRaw === 'left' || compatTabsPositionRaw === 'bottom')
          ? compatTabsPositionRaw
          : 'top';
  
        const compatDefaultTab =
          json.options?.default_tab
          || (compatTabs[0]?.id || 'default');
  
        const compatHideSingle =
          (json.options?.hide_tabs_when_single !== undefined)
            ? !!json.options.hide_tabs_when_single
            : true;
        // -------------------------------------------------------------------------
        const runtimeImportedOptions = this._normalizeDashboardOptions_(json.options
          ? { ...json.options }
          : (typeof json.grid === 'number' ? { grid: json.grid } : {}), { forceAutoResize: true });
        if (json.connectors && !('connectors' in runtimeImportedOptions)) {
          runtimeImportedOptions.connectors = json.connectors;
        }
        if (json.responsive_connectors && !('responsive_connectors' in runtimeImportedOptions)) {
          runtimeImportedOptions.responsive_connectors = json.responsive_connectors;
        }
        if ((!Array.isArray(runtimeImportedOptions.layers) || !runtimeImportedOptions.layers.length) && runtimeImportedOptions.layers_enabled !== false) {
          const layerIds = [];
          const addLayerId = (value) => {
            if (value === null || value === undefined) return;
            if (Array.isArray(value)) {
              value.forEach(addLayerId);
              return;
            }
            String(value)
              .split(',')
              .map((part) => this._normalizeLayerId_(part, part))
              .filter(Boolean)
              .forEach((id) => {
                if (!layerIds.includes(id)) layerIds.push(id);
              });
          };
          const visitLayoutEntries = (value) => {
            if (!value) return;
            if (Array.isArray(value)) {
              value.forEach((entry) => {
                if (entry && typeof entry === 'object') addLayerId(entry.layerIds || entry.layer_ids);
              });
              return;
            }
            if (typeof value !== 'object') return;
            if (Array.isArray(value.cards)) visitLayoutEntries(value.cards);
            Object.values(value).forEach((nested) => {
              if (nested && typeof nested === 'object') visitLayoutEntries(nested);
            });
          };
          visitLayoutEntries(json.cards || []);
          visitLayoutEntries(json.responsive_layouts || null);
          if (layerIds.length) {
            runtimeImportedOptions.layers = layerIds.map((id) => ({
              id,
              label: id.replace(/[-_]+/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()),
              icon: 'mdi:layers-outline',
            }));
            runtimeImportedOptions.layers_enabled = runtimeImportedOptions.layers_enabled ?? true;
          }
        }
        runtimeImportedOptions.tabs = runtimeImportedOptions.tabs ?? compatTabs;
        runtimeImportedOptions.tabs_position = runtimeImportedOptions.tabs_position ?? compatTabsPosition;
        runtimeImportedOptions.default_tab = runtimeImportedOptions.default_tab ?? compatDefaultTab;
        runtimeImportedOptions.hide_tabs_when_single = runtimeImportedOptions.hide_tabs_when_single ?? compatHideSingle;
        if (!ADOPT_IMPORTED_STORAGE_KEY) delete runtimeImportedOptions.storage_key;
  
        // ---- APPLY OPTIONS (with hard-replace or merge) ----
        if (json.options) {
          const imported = { ...runtimeImportedOptions };
  
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
            if ('play-loading_animation' in imported) this.playLoadingAnimation = !!imported['play-loading_animation'];
            if ('auto_resize_cards' in imported) this.autoResizeCards = !!imported.auto_resize_cards;
            if ('optimize_for_mobile' in imported) this.optimizeForMobile = !!imported.optimize_for_mobile;
            if ('mobile_dynamic_behavior' in imported) {
              this.mobileDynamicBehavior = String(imported.mobile_dynamic_behavior || 'native').toLowerCase() === 'scale'
                ? 'scale'
                : 'native';
            }
  
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
          const imported = { ...runtimeImportedOptions };
          HARD_REPLACE
            ? (this._config = { ...(this._config||{}), ...imported })
            : this._applyImportedOptions(imported, true);
          this.requestUpdate?.();
        }
        this._applyImportedOptions?.(runtimeImportedOptions, false);
  
        // Ensure instance tab options exist even for old files (after options applied)
        if (!Array.isArray(this.tabs) || !this.tabs.length) this.tabs = compatTabs;
        if (!this.tabsPosition) this.tabsPosition = this._normalizeTabsPosition_(compatTabsPosition);
        if (!this.defaultTab) this.defaultTab = compatDefaultTab;
        if (this.hideTabsWhenSingle === undefined) this.hideTabsWhenSingle = compatHideSingle;
        this._syncTabsPlacement_?.();
  
        // ---- PERSIST IMPORTED OPTIONS TO YAML (replace semantics) ----
        try {
          const targetKey = this._config?.storage_key || this.storageKey || null;
  
          // Start from what the file had (v2) or v1 fallback
          const importedOptions = runtimeImportedOptions;
  
          // Ensure tabs keys are present (either from file or from current instance state)
          const persistOptions = {
            ...importedOptions,
            tabs: importedOptions.tabs ?? this.tabs ?? [],
            tabs_position: this._normalizeTabsPosition_(importedOptions.tabs_position ?? this.tabsPosition ?? 'top'),
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
            this._deleteParkedSidebarOptions_(cfg);
  
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
        this.responsiveViewportProfiles = this._normalizeResponsiveViewportProfiles_(
          json.options?.responsive_viewports || this.responsiveViewportProfiles
        );
        this._responsiveLayouts = this._normalizeResponsiveLayouts_(json.cards || [], json.responsive_layouts || null);
        {
          const validTabIds = new Set((this.tabs || []).map((tab) => this._normalizeTabId(tab?.id)));
          const importedDefaultTab = this._normalizeTabId(runtimeImportedOptions.default_tab || this.defaultTab || compatDefaultTab);
          if (!validTabIds.size || validTabIds.has(importedDefaultTab)) {
            this.activeTab = importedDefaultTab;
            try { localStorage.setItem(`ddc_lasttab_${this.storageKey}`, this.activeTab); } catch {}
          }

          const targetProfile = this._getRequestedResponsiveProfile_?.() || 'desktop';
          const targetOrientation = this._getRequestedResponsiveOrientation_?.(targetProfile) || 'landscape';
          const targetLayoutKey =
            this._getRuntimeResponsiveLayoutKey_?.(targetProfile, targetOrientation)
            || this._getResponsiveLayoutKey_?.(targetProfile, targetOrientation)
            || this._getPrimaryResponsiveLayoutKey_?.()
            || 'desktop_landscape';
          const primaryLayoutKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
          const entriesToBuild =
            this._responsiveLayouts?.[targetLayoutKey]
            || this._responsiveLayouts?.[primaryLayoutKey]
            || [];
          this._activeResponsiveProfile = targetProfile;
          this._activeResponsiveLayoutKey = targetLayoutKey;
          const ticket = ++this.__responsiveSwitchSeq;
          await this._buildCardsFromEntries_(entriesToBuild, ticket);
          if (ticket === this.__responsiveSwitchSeq) this._syncViewportPreviewUI_?.();
        }
  
        // apply container sizing/appearance and refresh tabs UI now that cards exist
        this._applyOptionsToDom?.(this._config);
        this._resizeContainer();
        try { this._syncTabsPlacement_?.(); } catch {}
        try { this._renderTabs?.(); } catch {}
        try { this._renderSidebar_?.(); } catch {}
        try { this._renderLayersBar_?.(); } catch {}
        try { this._applyActiveTab?.(); } catch {}
        try { this._applyVisibility_?.(); } catch {}
        try { this._syncTabsWidth_?.(); } catch {}
        try { this._renderConnectors_?.(); } catch {}
        try { this._syncEmptyStateUI?.(); } catch {}
        try { this._applyAutoScale?.(); } catch {}
  
        // ---- SAVE LAYOUT ----
        try {
          if (this._saveTimer) clearTimeout(this._saveTimer);
          await this._saveLayout(true);  // NOTE: ensure _saveLayout returns {…, tabId} per card
          this.requestUpdate?.();
          this._toast?.('Design imported & saved.');
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
  },
};

export function installDesignImportExportMethods(proto) {
  for (const [name, value] of Object.entries(designImportExportMethods)) {
    Object.defineProperty(proto, name, {
      value,
      configurable: true,
      writable: true,
    });
  }
}
