/*
 * setConfig lifecycle implementation for the main custom element.
 *
 * This method normalizes user/YAML options, refreshes runtime state, builds the dashboard shell,
 * and decides whether an existing layout must be reloaded after a config change.
 */

const setConfigMethods = {
  /* --------------------------- Card lifecycle --------------------------- */
  setConfig(config = {}) {
      const inHaConfigPreview = this._isInHaEditorPreview?.();
      if (this.__haConfigPreviewMode && !inHaConfigPreview) {
        this.__haConfigPreviewMode = false;
        this.__haConfigPreviewRendered = false;
        this._built = false;
      }
      if (inHaConfigPreview) {
        this.__haConfigPreviewMode = true;
        this.config = { ...config };
        this._config = this.config;
        this._renderHaConfigPreview_?.();
        return;
      }
      // Track old key so we only rebuild when storage_key actually changes
      // Keep previous to detect real key changes
      const prevKey = this.storageKey;
      const providedKey = String(config?.storage_key || config?.storageKey || '').trim();
      const stableKey = providedKey || prevKey || this._deriveStorageKeyFromConfig_(config);
      config = this._normalizeDashboardOptions_({ ...config, storage_key: stableKey }, { requireSizeMode: true, forceAutoResize: true });
      this.config = { ...config };

      // Store & reflect
      this._config = config;
      this.storageKey = stableKey || undefined;
      this._syncEditorsStorageKey();
      this.gridSize                 = Number(config.grid ?? 10);
      this.connectorGridSize        = Number(config.connector_grid_size ?? config.connector_grid ?? config.line_grid_size ?? config.line_grid ?? 0) || 0;
      this.dragLiveSnap             = !!config.drag_live_snap;
      this.autoSave                 = config.auto_save !== false;
      this.autoSaveDebounce         = Number(config.auto_save_debounce ?? 800);
      try { this._syncToolbarAutoSaveState_?.(); } catch {}
      this.editModePin =            (this.editModePin != null) ? this.editModePin: (config.edit_mode_pin ?? config.editModePin ?? '');
      this.containerBackground      = config.container_background ?? 'transparent';
      this.cardBackground           = config.card_background ?? 'var(--ha-card-background, var(--card-background-color))';
      this.applyBackgroundToPage    = !!(config.apply_background_to_page ?? config.applyBackgroundToPage ?? false);
      this.dashboardTheme           = String(config.dashboard_theme ?? config.theme_name ?? '').trim();
      this.dashboardThemeEnabled    = !!this.dashboardTheme || !!(config.dashboard_theme_enabled ?? config.theme_enabled ?? false);
      this.dashboardThemeOverrideAllDesign = !!(config.dashboard_theme_override_all_design ?? config.theme_override_all_design ?? false);
      this.outerGridBuffer          = !!(config.outer_grid_buffer ?? false);
      this.outerGridBufferCells     = this._normalizeOuterGridBufferCells_(
        config.outer_grid_buffer_cells ?? config.outerGridBufferCells ?? this.outerGridBufferCells ?? 1
      );

      // Whether to apply a drop shadow to card wrappers (defaults to false)
      this.cardShadowEnabled        = !!config.card_shadow;
      this.cardShadowIntensity      = this._normalizeCardShadowIntensity_(
        config.card_shadow_intensity ?? config.cardShadowIntensity ?? config.shadow_intensity ?? config.shadowIntensity ?? this.cardShadowIntensity ?? 5
      );

      this.hideHaHeader            = !!(config.hide_HA_Header ?? config.hide_ha_header ?? false);
      this.hideHaSidebar           = !!(config.hide_HA_Sidebar ?? config.hide_ha_sidebar ?? false);
          this.debug                    = !!config.debug;
      this.editMode                 = false;
      this._backendOK               = false;
      this.disableOverlap           = !!config.disable_overlap;
      this.containerSizeMode        = this._normalizeContainerSizeMode_(config.container_size_mode);
      this.doNotResizeText          = !!(config.do_not_resize_text ?? config.doNotResizeText ?? false);
      this.optimizeForMobile        = !!(config.optimize_for_mobile ?? config.optimizeForMobile ?? false);
      this.mobileDynamicBehavior    = String(config.mobile_dynamic_behavior ?? config.mobileDynamicBehavior ?? 'native').toLowerCase() === 'scale'
        ? 'scale'
        : 'native';
      this.responsiveViewportAspectLocks = this._normalizeResponsiveViewportAspectLocks_(
        config.responsive_viewport_aspect_locks
        || config.responsiveViewportAspectLocks
        || this.responsiveViewportAspectLocks
      );
      const providedResponsiveViewports = config.responsive_viewports || this.responsiveViewportProfiles;
      this.responsiveViewportProfiles = this._isLegacyResponsiveViewportProfiles_(providedResponsiveViewports)
        ? this._defaultResponsiveViewportProfiles_()
        : this._normalizeResponsiveViewportProfiles_(providedResponsiveViewports);
      this._responsiveConnectors = this._normalizeResponsiveConnectorLayouts_(
        config.connectors || [],
        config.responsive_connectors || null
      );
      this._connectorDrawMode = false;
      this._connectorDraft = null;
      this._selectedConnectorId = null;
      this.__connectorPointDrag = null;


      const sizeModeLower           = this._normalizeContainerSizeMode_(this.containerSizeMode);

      if (sizeModeLower === 'auto') {
        this.autoResizeCards = true;
      } else {
        this.autoResizeCards = config.auto_resize_cards !== false;
      }

      // Whether to play a fly‑in animation when switching tabs or refreshing
      // Defaults to false when not specified.  When true, the card wrappers
      // animate into view the moment a tab becomes active or on initial load.
      this.animateCards             = !!config.animate_cards;

      // Screen saver options
      this.screenSaverEnabled = !!(config.screen_saver_enabled ?? false);
      // Delay stored in ms; default to 5 minutes if not provided
      const ssDelay = Number(config.screen_saver_delay);
      this.screenSaverDelay = Number.isFinite(ssDelay) && ssDelay > 0 ? ssDelay : (5 * 60000);
      this.screenSaverStyle = this._normalizeScreenSaverStyle_?.(config.screen_saver_style ?? config.screensaver_style ?? config.screen_saver_variant) || 'visionos_glass';
      this.screenSaverEntities = this._normalizeScreenSaverEntities_?.(config.screen_saver_entities ?? config.screensaver_entities ?? []) || [];

      if ((this.autoResizeCards || this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode)==='auto')) this._startScaleWatch?.(); else this._stopScaleWatch?.();
      this._applyAutoScale?.();
      this.containerFixedWidth      = Number(config.container_fixed_width ?? 0) || null;
      this.containerFixedHeight     = Number(config.container_fixed_height ?? 0) || null;
      this.containerPreset          = config.container_preset || 'fhd';
      this.containerPresetOrient    = config.container_preset_orientation || 'auto';
      this.heroImage = config?.hero_image || "https://i.postimg.cc/j2bvd9Tc/Chat-GPT-Image-May-18-2026-02-33-38-PM.png";
      // Tabs options
      this.tabs               = Array.isArray(config.tabs) ? config.tabs : [];
      {
        const tabsPosition = String(config.tabs_position || 'top').toLowerCase();
        const hasSidebarEnabled = Object.prototype.hasOwnProperty.call(config, 'sidebar_enabled');
        const legacyLeftRail = tabsPosition === 'left' && !hasSidebarEnabled;
        this.tabsPosition = this._normalizeTabsPosition_(tabsPosition);
        this.sidebarEnabled = hasSidebarEnabled ? !!config.sidebar_enabled : legacyLeftRail;
        this.sidebarItems = this._normalizeSidebarItems_(config.sidebar_items ?? config.sidebar_content, {
          enabled: this.sidebarEnabled,
          legacyLeft: legacyLeftRail,
        });
        this.sidebarStyle = this._normalizeSidebarStyle_(config.sidebar_style ?? config.sidebarStyle);
        this.sidebarDensity = this._normalizeSidebarDensity_(config.sidebar_density ?? config.sidebarDensity);
        this.sidebarAccent = this._normalizeSidebarAccent_(config.sidebar_accent ?? config.sidebarAccent);
        this.sidebarHeader = this._normalizeSidebarHeader_(config.sidebar_header ?? config.sidebarHeader ?? config.sidebar_header_type ?? this.sidebarHeader ?? 'clock');
        this.sidebarCanvasHeight = this._normalizeSidebarCanvasHeight_(config.sidebar_canvas_height ?? config.sidebarCanvasHeight ?? this.sidebarCanvasHeight ?? 520);
        this.sidebarCards = this._normalizeSidebarCards_(config.sidebar_cards ?? config.sidebarCards ?? this.sidebarCards ?? []);
        this.sidebarHomeImage = String(config.sidebar_home_image ?? config.sidebar_house_image ?? config.sidebarHomeImage ?? '').trim();
        this.sidebarCalendarEntities = this._normalizeSidebarCalendarEntities_(config.sidebar_calendar_entities ?? config.sidebar_calendars ?? config.sidebarCalendarEntities ?? []);
      }
      this.layersEnabled = !!(config.layers_enabled ?? config.enable_layers ?? false);
      this.layersButtonDetails = !!(config.layers_button_details ?? config.show_layer_button_details ?? config.layersButtonDetails ?? false);
      this._setDashboardLayers_(config.layers || [], { refresh: false });
      this.defaultTab         = config.default_tab || (this.tabs[0]?.id ?? 'default');
      this.hideTabsWhenSingle = (config.hide_tabs_when_single !== false);
      this.activeTab          = this.defaultTab;
      try { const lastT = localStorage.getItem(`ddc_lasttab_${this.storageKey}`);
        if (lastT && this.tabs.some(t=>t.id===lastT)) this.activeTab = lastT; } catch {}
      this._syncTabsPlacement_?.();



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

      this._applyDashboardThemeStyling_?.();

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

      this._buildDashboardShellOnce_();

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
};

export function installSetConfigMethod(proto) {
  Object.entries(setConfigMethods).forEach(([key, value]) => {
    if (!Object.prototype.hasOwnProperty.call(proto, key)) {
      Object.defineProperty(proto, key, {
        value,
        writable: true,
        configurable: true,
      });
    }
  });
}
