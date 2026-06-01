/*
 * Local dashboard API surface exposed to internal HTML cards and other embedded tools.
 *
 * It provides a controlled bridge for reading layout data, updating cards, opening pickers, and asking
 * the host dashboard to perform actions without reaching into private DOM details.
 */

/* Dashboard settings export/import and local API helpers. */
const dashboardApiMethods = {
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
      connector_grid_size: this.connectorGridSize || undefined,
      drag_live_snap: !!this.dragLiveSnap,
      auto_save: !!this.autoSave,
      auto_save_debounce: this.autoSaveDebounce,
      disable_overlap: !!this.disableOverlap,
      debug: !!this.debug,
      edit_mode_pin: (this.editModePin || undefined),

      // Size & layout
      container_size_mode: this._normalizeContainerSizeMode_(this.containerSizeMode || cfg.container_size_mode),
      container_preset_orientation: this.containerPresetOrient,
      container_fixed_width: this.containerFixedWidth ?? undefined,
      container_fixed_height: this.containerFixedHeight ?? undefined,
      container_preset: this.containerPreset,
      auto_resize_cards: this._normalizeContainerSizeMode_(this.containerSizeMode || cfg.container_size_mode) === 'auto' ? true : !!this.autoResizeCards,
      auto_viewport_max_width: this._normalizeAutoViewportMaxWidth_(this.autoViewportMaxWidth ?? cfg.auto_viewport_max_width) || undefined,
      auto_scale_max: this._normalizeAutoScaleMax_(this.autoScaleMax ?? cfg.auto_scale_max) || undefined,
      optimize_for_mobile: !!this.optimizeForMobile,
      mobile_dynamic_behavior: this.mobileDynamicBehavior || 'native',
      do_not_resize_text: !!this.doNotResizeText,
      outer_grid_buffer: !!this.outerGridBuffer,
      outer_grid_buffer_cells: this._normalizeOuterGridBufferCells_(this.outerGridBufferCells),
      responsive_viewports: this._cloneJson_(this._serializeResponsiveViewportProfiles_(this.responsiveViewportProfiles)),
      responsive_viewport_aspect_locks: this._cloneJson_(this._normalizeResponsiveViewportAspectLocks_(this.responsiveViewportAspectLocks)),
      connectors: this._cloneJson_(this._responsiveConnectors?.[this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape'] || []),
      responsive_connectors: this._cloneJson_(this._serializeResponsiveConnectorLayouts_(this._responsiveConnectors)),

      // Appearance
      container_background: this.containerBackground,
      apply_background_to_page: !!this.applyBackgroundToPage,
      card_background: this.cardBackground,
      card_shadow: !!this.cardShadowEnabled,
      card_shadow_intensity: this._normalizeCardShadowIntensity_(this.cardShadowIntensity),
      dashboard_theme: this.dashboardTheme || undefined,
      dashboard_theme_override_all_design: this.dashboardTheme ? !!this.dashboardThemeOverrideAllDesign : undefined,
      animate_cards: !!this.animateCards,

      // HA chrome visibility
      hide_HA_Header: !!this.hideHaHeader,
      hide_HA_Sidebar: !!this.hideHaSidebar,

      // Tabs (from the modal section)
      tabs: this.tabs,
      tabs_position: this._normalizeTabsPosition_(this.tabsPosition),
      default_tab: this.defaultTab,
      hide_tabs_when_single: !!this.hideTabsWhenSingle,
      layers_enabled: !!this.layersEnabled,
      layers_button_details: !!this.layersButtonDetails,
      layers: this._cloneJson_(this.layers || []),

      // Background (image | particles | youtube | none)
      background_mode: bgMode,
      background_image: cfg.background_image
        ? pick(cfg.background_image, ['src','repeat','size','position','attachment','opacity'])
        : undefined,
      background_particles: cfg.background_particles
        ? pick(cfg.background_particles, ['config_url','pointer_events','hover_mode','click_mode','interaction_distance','config'])
        : undefined,
      background_youtube: cfg.background_youtube
        ? pick(cfg.background_youtube, [
            'url','start','end','mute','loop','size','position','attachment','opacity'
          ])
        : undefined,

      // Screen saver
      screen_saver_enabled: !!this.screenSaverEnabled,
      screen_saver_delay: this.screenSaverDelay,
      screen_saver_style: this._normalizeScreenSaverStyle_?.(this.screenSaverStyle) || 'visionos_glass',
      screen_saver_entities: (this._normalizeScreenSaverEntities_?.(this.screenSaverEntities) || [])
        .filter((item) => item.entity || item.label)
        .map(({ key, entity, label, icon, tone }) => ({ key, entity, label, icon, tone })),
    };

    // strip undefined to keep files tidy
    Object.keys(opt).forEach(k => opt[k] === undefined && delete opt[k]);
    return opt;
  },

  _applyImportedOptions(opts = {}, recalc = true) {
    opts = this._normalizeDashboardOptions_(opts, { forceAutoResize: true });
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
    this._deleteParkedSidebarOptions_(this._config);

    if ('storage_key' in opts)        this.storageKey = opts.storage_key || undefined;
    this._syncEditorsStorageKey();
    if ('grid' in opts)               this.gridSize = Number(opts.grid) || 10;
    if ('connector_grid_size' in opts || 'connector_grid' in opts || 'line_grid_size' in opts || 'line_grid' in opts) {
      this.connectorGridSize = Number(opts.connector_grid_size ?? opts.connector_grid ?? opts.line_grid_size ?? opts.line_grid ?? 0) || 0;
    }
    if ('drag_live_snap' in opts)     this.dragLiveSnap = !!opts.drag_live_snap;
    if ('auto_save' in opts)          this.autoSave = !!opts.auto_save;
    if ('auto_save_debounce' in opts) this.autoSaveDebounce = Number(opts.auto_save_debounce) || 800;
    if ('auto_save' in opts || 'auto_save_debounce' in opts) this._syncToolbarAutoSaveState_?.();
    if ('edit_mode_pin' in opts || 'editModePin' in opts) this.editModePin = String(opts.edit_mode_pin ?? opts.editModePin ?? '');
    if ('do_not_resize_text' in opts) this.doNotResizeText = !!opts.do_not_resize_text;
    if ('optimize_for_mobile' in opts) this.optimizeForMobile = !!opts.optimize_for_mobile;
    if ('mobile_dynamic_behavior' in opts) {
      this.mobileDynamicBehavior = String(opts.mobile_dynamic_behavior || 'native').toLowerCase() === 'scale'
        ? 'scale'
        : 'native';
    }
    if ('auto_viewport_max_width' in opts) {
      this.autoViewportMaxWidth = this._normalizeAutoViewportMaxWidth_(opts.auto_viewport_max_width);
      if (this._config) this._config.auto_viewport_max_width = this.autoViewportMaxWidth || undefined;
    }
    if ('auto_scale_max' in opts) {
      this.autoScaleMax = this._normalizeAutoScaleMax_(opts.auto_scale_max);
      if (this._config) this._config.auto_scale_max = this.autoScaleMax || undefined;
    }
    if ('outer_grid_buffer' in opts)  this.outerGridBuffer = !!opts.outer_grid_buffer;
    if ('outer_grid_buffer_cells' in opts || 'outerGridBufferCells' in opts) {
      this.outerGridBufferCells = this._normalizeOuterGridBufferCells_(opts.outer_grid_buffer_cells ?? opts.outerGridBufferCells ?? 1);
    }
    if ('responsive_viewport_aspect_locks' in opts || 'responsiveViewportAspectLocks' in opts) {
      this.responsiveViewportAspectLocks = this._normalizeResponsiveViewportAspectLocks_(
        opts.responsive_viewport_aspect_locks ?? opts.responsiveViewportAspectLocks
      );
      if (this._config) {
        this._config.responsive_viewport_aspect_locks = this._cloneJson_(this.responsiveViewportAspectLocks);
      }
    }
    if ('responsive_viewports' in opts) this.responsiveViewportProfiles = this._normalizeResponsiveViewportProfiles_(opts.responsive_viewports);
    if ('responsive_connectors' in opts || 'connectors' in opts) {
      this._responsiveConnectors = this._normalizeResponsiveConnectorLayouts_(
        opts.connectors || [],
        opts.responsive_connectors || null
      );
      this._connectorDraft = null;
      this._selectedConnectorId = null;
    }
    if ('container_background' in opts) this.containerBackground = opts.container_background ?? 'transparent';
    if ('apply_background_to_page' in opts) this.applyBackgroundToPage = !!opts.apply_background_to_page;
    if ('card_background' in opts)      this.cardBackground = opts.card_background ?? 'var(--ha-card-background, var(--card-background-color))';
    if ('card_shadow' in opts)          this.cardShadowEnabled = !!opts.card_shadow;
    if ('card_shadow_intensity' in opts || 'cardShadowIntensity' in opts || 'shadow_intensity' in opts || 'shadowIntensity' in opts) {
      this.cardShadowIntensity = this._normalizeCardShadowIntensity_(
        opts.card_shadow_intensity ?? opts.cardShadowIntensity ?? opts.shadow_intensity ?? opts.shadowIntensity ?? this.cardShadowIntensity ?? 5
      );
    }
    if ('animate_cards' in opts)        this.animateCards = !!opts.animate_cards;
    if ('hide_HA_Header' in opts || 'hide_ha_header' in opts) {
      this.hideHaHeader = !!(opts.hide_HA_Header ?? opts.hide_ha_header);
    }
    if ('hide_HA_Sidebar' in opts || 'hide_ha_sidebar' in opts) {
      this.hideHaSidebar = !!(opts.hide_HA_Sidebar ?? opts.hide_ha_sidebar);
    }
    if ('dashboard_theme' in opts || 'theme_name' in opts) {
      this.dashboardTheme = String(opts.dashboard_theme ?? opts.theme_name ?? '').trim();
    }
    if ('dashboard_theme_enabled' in opts || 'theme_enabled' in opts) {
      this.dashboardThemeEnabled = !!(opts.dashboard_theme_enabled ?? opts.theme_enabled);
    }
    this.dashboardThemeEnabled = !!this._getDashboardThemeName_?.();
    if ('dashboard_theme_override_all_design' in opts || 'theme_override_all_design' in opts) {
      this.dashboardThemeOverrideAllDesign = !!this.dashboardTheme && !!(opts.dashboard_theme_override_all_design ?? opts.theme_override_all_design);
    }
    if ('layers_enabled' in opts || 'enable_layers' in opts) {
      this.layersEnabled = !!(opts.layers_enabled ?? opts.enable_layers);
    }
    if ('layers_button_details' in opts || 'show_layer_button_details' in opts || 'layersButtonDetails' in opts) {
      this.layersButtonDetails = !!(opts.layers_button_details ?? opts.show_layer_button_details ?? opts.layersButtonDetails);
    }
    if ('layers' in opts) {
      this._setDashboardLayers_(opts.layers || [], { refresh: false, persist: true });
    } else if ('layers_enabled' in opts || 'enable_layers' in opts) {
      this._setDashboardLayers_(this.layers || [], { refresh: false, persist: true });
    }
    if ('debug' in opts)              this.debug = !!opts.debug;
    if ('disable_overlap' in opts)    this.disableOverlap = !!opts.disable_overlap;

    if ('container_size_mode' in opts) {
      this.containerSizeMode = this._normalizeContainerSizeMode_(opts.container_size_mode);
      const modeLower = this.containerSizeMode;
      if (modeLower === 'auto') this.autoResizeCards = true;
      if (this._config) {
        this._config.container_size_mode = modeLower;
        if (modeLower === 'auto') this._config.auto_resize_cards = true;
      }

      if (this.autoResizeCards || modeLower === 'auto') {
        this._startScaleWatch?.();
      } else {
        this._stopScaleWatch?.();
      }

      this._syncViewportPreviewUI_?.();
      this._applyAutoScale?.();
      if (!this.__suppressResponsiveRebuild) {
        try { Promise.resolve(this._syncResponsiveProfileForViewport_?.({ force: true })).catch(() => {}); } catch {}
      }
    }

    if ('container_fixed_width' in opts)      this.containerFixedWidth  = Number(opts.container_fixed_width)  || null;
    if ('container_fixed_height' in opts)     this.containerFixedHeight = Number(opts.container_fixed_height) || null;
    if ('container_preset' in opts)           this.containerPreset = opts.container_preset || 'fhd';
    if ('container_preset_orientation' in opts) this.containerPresetOrient = opts.container_preset_orientation || 'auto';
    
    if ('auto_resize_cards' in opts) {
      const modeLower = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      this.autoResizeCards = modeLower === 'auto' ? true : !!opts.auto_resize_cards;
      if (this._config) this._config.auto_resize_cards = !!this.autoResizeCards;

      if (this.autoResizeCards || modeLower === 'auto') {
        this._startScaleWatch?.();
      } else {
        this._stopScaleWatch?.();
      }

      this._syncViewportPreviewUI_?.();
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
    if ('screen_saver_style' in opts || 'screensaver_style' in opts || 'screen_saver_variant' in opts) {
      this.screenSaverStyle = this._normalizeScreenSaverStyle_?.(opts.screen_saver_style ?? opts.screensaver_style ?? opts.screen_saver_variant) || 'visionos_glass';
    }
    if ('screen_saver_entities' in opts || 'screensaver_entities' in opts) {
      this.screenSaverEntities = this._normalizeScreenSaverEntities_?.(opts.screen_saver_entities ?? opts.screensaver_entities ?? []) || [];
    }
    if ('screen_saver_enabled' in opts || 'screen_saver_delay' in opts || 'screen_saver_style' in opts || 'screensaver_style' in opts || 'screen_saver_variant' in opts || 'screen_saver_entities' in opts || 'screensaver_entities' in opts) {
      if (typeof this._updateScreensaverSettings === 'function') this._updateScreensaverSettings();
    }

    if ('tabs' in opts) {
      this.tabs = Array.isArray(opts.tabs) ? opts.tabs.map((tab, index) => ({
        id: String(tab?.id || tab?.label || `tab_${index + 1}`).trim() || `tab_${index + 1}`,
        label: String(tab?.label || tab?.id || `Tab ${index + 1}`).trim(),
        icon: tab?.icon || '',
        label_mode: tab?.label_mode || tab?.labelMode || 'both',
      })) : [];
    }
    if ('default_tab' in opts) {
      this.defaultTab = String(opts.default_tab || '').trim() || (this.tabs?.[0]?.id ?? 'default');
    }
    if ('hide_tabs_when_single' in opts) {
      this.hideTabsWhenSingle = opts.hide_tabs_when_single !== false;
    }
    if ('sidebar_enabled' in opts) {
      this.sidebarEnabled = !!opts.sidebar_enabled;
    }
    if ('sidebar_items' in opts || 'sidebar_content' in opts) {
      this.sidebarItems = this._normalizeSidebarItems_(opts.sidebar_items ?? opts.sidebar_content, { enabled: !!this.sidebarEnabled });
    } else if ('sidebar_enabled' in opts) {
      this.sidebarItems = this._normalizeSidebarItems_(this.sidebarItems, { enabled: !!this.sidebarEnabled });
    }
    if ('sidebar_style' in opts) {
      this.sidebarStyle = this._normalizeSidebarStyle_(opts.sidebar_style);
    }
    if ('sidebar_density' in opts) {
      this.sidebarDensity = this._normalizeSidebarDensity_(opts.sidebar_density);
    }
    if ('sidebar_accent' in opts) {
      this.sidebarAccent = this._normalizeSidebarAccent_(opts.sidebar_accent);
    }
    if ('sidebar_header' in opts || 'sidebar_header_type' in opts) {
      this.sidebarHeader = this._normalizeSidebarHeader_(opts.sidebar_header ?? opts.sidebar_header_type);
    }
    if ('sidebar_canvas_height' in opts) {
      this.sidebarCanvasHeight = this._normalizeSidebarCanvasHeight_(opts.sidebar_canvas_height);
    }
    if ('sidebar_cards' in opts) {
      this.sidebarCards = this._normalizeSidebarCards_(opts.sidebar_cards);
      this._config.sidebar_cards = this._cloneJson_(this.sidebarCards);
    }
    if ('sidebar_home_image' in opts || 'sidebar_house_image' in opts || 'sidebar_home_image_url' in opts) {
      this.sidebarHomeImage = String(opts.sidebar_home_image ?? opts.sidebar_house_image ?? opts.sidebar_home_image_url ?? '').trim();
    }
    if ('sidebar_calendar_entities' in opts || 'sidebar_calendars' in opts) {
      this.sidebarCalendarEntities = this._normalizeSidebarCalendarEntities_(opts.sidebar_calendar_entities ?? opts.sidebar_calendars ?? []);
    }
    if ('tabs_position' in opts) {
      const tabsPosition = String(opts.tabs_position || 'top').toLowerCase();
      if (tabsPosition === 'left' && !('sidebar_enabled' in opts)) {
        this.sidebarEnabled = true;
        this.sidebarItems = this._normalizeSidebarItems_(this.sidebarItems, { enabled: true, legacyLeft: true });
      }
      this.tabsPosition = this._normalizeTabsPosition_(tabsPosition);
      this._syncTabsPlacement_?.();
    }
    if (Array.isArray(this.tabs) && this.tabs.length) {
      const validTabIds = new Set(this.tabs.map((tab) => tab.id));
      if (!validTabIds.has(this.defaultTab)) this.defaultTab = this.tabs[0]?.id || 'default';
      if (!validTabIds.has(this.activeTab)) this.activeTab = this.defaultTab;
    }


    this._applyDashboardThemeStyling_?.();
    this._applyGridVars();
    if ('background_mode' in opts || 'background_image' in opts || 'background_particles' in opts || 'background_youtube' in opts) {
      try { this._applyBackgroundFromConfig?.(); } catch {}
    }
    if ('hide_HA_Header' in opts || 'hide_ha_header' in opts || 'hide_HA_Sidebar' in opts || 'hide_ha_sidebar' in opts) {
      try { this._applyHaChromeVisibility_?.(); } catch {}
    }

    if (recalc) {
      this._applyContainerSizingFromConfig(true);
      this._applyAutoScale?.();
      this._resizeContainer();
      this._updateStoreBadge?.();
      this._applyAutoScale?.();
    }
    if ('tabs' in opts || 'default_tab' in opts || 'hide_tabs_when_single' in opts || 'tabs_position' in opts || 'sidebar_enabled' in opts || 'sidebar_items' in opts || 'sidebar_content' in opts || 'sidebar_style' in opts || 'sidebar_density' in opts || 'sidebar_accent' in opts || 'sidebar_header' in opts || 'sidebar_header_type' in opts || 'sidebar_canvas_height' in opts || 'sidebar_cards' in opts || 'sidebar_home_image' in opts || 'sidebar_house_image' in opts || 'sidebar_home_image_url' in opts || 'sidebar_calendar_entities' in opts || 'sidebar_calendars' in opts) {
      this._renderTabs?.();
      this._renderSidebar_?.();
      this._applyActiveTab?.();
      this._syncTabsWidth_?.();
    }
    if ('layers' in opts || 'layers_enabled' in opts || 'enable_layers' in opts || 'layers_button_details' in opts || 'show_layer_button_details' in opts || 'layersButtonDetails' in opts) {
      this._renderLayersBar_?.();
      this._applyActiveTab?.();
    }
    this._renderConnectors?.();
    this.__ddcTextLockDirty = true;
    this._scheduleTextResizeLockRefresh_?.(true);
  },

  _getDashboardSettingsApiSchema_() {
    return {
      storage_key: { type: 'string' },
      grid: { type: 'number' },
      drag_live_snap: { type: 'boolean' },
      auto_save: { type: 'boolean' },
      auto_save_debounce: { type: 'number' },
      debug: { type: 'boolean' },
      disable_overlap: { type: 'boolean' },
      edit_mode_pin: { type: 'string' },
      animate_cards: { type: 'boolean' },
      auto_resize_cards: { type: 'boolean' },
      auto_viewport_max_width: { type: 'number' },
      auto_scale_max: { type: 'number' },
      optimize_for_mobile: { type: 'boolean' },
      mobile_dynamic_behavior: { type: 'string' },
      do_not_resize_text: { type: 'boolean' },
      outer_grid_buffer: { type: 'boolean' },
      outer_grid_buffer_cells: { type: 'number' },
      responsive_viewports: { type: 'object' },
      responsive_viewport_aspect_locks: { type: 'object' },
      connectors: { type: 'array' },
      responsive_connectors: { type: 'object' },
      container_background: { type: 'string' },
      apply_background_to_page: { type: 'boolean' },
      card_background: { type: 'string' },
      card_shadow: { type: 'boolean' },
      card_shadow_intensity: { type: 'number' },
      dashboard_theme: { type: 'string' },
      dashboard_theme_override_all_design: { type: 'boolean' },
      container_size_mode: { type: 'string' },
      container_fixed_width: { type: 'number' },
      container_fixed_height: { type: 'number' },
      container_preset: { type: 'string' },
      container_preset_orientation: { type: 'string' },
      tabs: { type: 'array' },
      tabs_position: { type: 'string' },
      default_tab: { type: 'string' },
      hide_tabs_when_single: { type: 'boolean' },
      layers_enabled: { type: 'boolean' },
      layers_button_details: { type: 'boolean' },
      layers: { type: 'array' },
      hide_HA_Header: { type: 'boolean' },
      hide_HA_Sidebar: { type: 'boolean' },
      background_mode: { type: 'string' },
      background_image: { type: 'object' },
      background_particles: { type: 'object' },
      background_youtube: { type: 'object' },
      screen_saver_enabled: { type: 'boolean' },
      screen_saver_delay: { type: 'number' },
      screen_saver_style: { type: 'string' },
      screen_saver_entities: { type: 'array' },
    };
  },

  _normalizeDashboardSettingApiKey_(key) {
    const raw = String(key || '').trim();
    if (!raw) return '';
    const aliases = {
      storageKey: 'storage_key',
      dragLiveSnap: 'drag_live_snap',
      autoSave: 'auto_save',
      autoSaveDebounce: 'auto_save_debounce',
      disableOverlap: 'disable_overlap',
      editModePin: 'edit_mode_pin',
      animateCards: 'animate_cards',
      autoResizeCards: 'auto_resize_cards',
      autoViewportMaxWidth: 'auto_viewport_max_width',
      autoScaleMax: 'auto_scale_max',
      optimizeForMobile: 'optimize_for_mobile',
      mobileDynamicBehavior: 'mobile_dynamic_behavior',
      doNotResizeText: 'do_not_resize_text',
      outerGridBuffer: 'outer_grid_buffer',
      outerGridBufferCells: 'outer_grid_buffer_cells',
      responsiveViewports: 'responsive_viewports',
      responsiveViewportAspectLocks: 'responsive_viewport_aspect_locks',
      responsiveConnectors: 'responsive_connectors',
      containerBackground: 'container_background',
      applyBackgroundToPage: 'apply_background_to_page',
      cardBackground: 'card_background',
      cardShadow: 'card_shadow',
      cardShadowIntensity: 'card_shadow_intensity',
      shadowIntensity: 'card_shadow_intensity',
      dashboardTheme: 'dashboard_theme',
      dashboardThemeOverrideAllDesign: 'dashboard_theme_override_all_design',
      containerSizeMode: 'container_size_mode',
      containerFixedWidth: 'container_fixed_width',
      containerFixedHeight: 'container_fixed_height',
      containerPreset: 'container_preset',
      containerPresetOrientation: 'container_preset_orientation',
      tabsPosition: 'tabs_position',
      defaultTab: 'default_tab',
      hideTabsWhenSingle: 'hide_tabs_when_single',
      layersEnabled: 'layers_enabled',
      enable_layers: 'layers_enabled',
      layersButtonDetails: 'layers_button_details',
      showLayerButtonDetails: 'layers_button_details',
      show_layer_button_details: 'layers_button_details',
      hideHAHeader: 'hide_HA_Header',
      hideHaHeader: 'hide_HA_Header',
      hide_ha_header: 'hide_HA_Header',
      hideHASidebar: 'hide_HA_Sidebar',
      hideHaSidebar: 'hide_HA_Sidebar',
      hide_ha_sidebar: 'hide_HA_Sidebar',
      backgroundMode: 'background_mode',
      backgroundImage: 'background_image',
      backgroundParticles: 'background_particles',
      backgroundYoutube: 'background_youtube',
      backgroundYouTube: 'background_youtube',
      screenSaverEnabled: 'screen_saver_enabled',
      screensaverEnabled: 'screen_saver_enabled',
      screenSaverDelay: 'screen_saver_delay',
      screensaverDelay: 'screen_saver_delay',
      screenSaverStyle: 'screen_saver_style',
      screensaverStyle: 'screen_saver_style',
      screenSaverEntities: 'screen_saver_entities',
      screensaverEntities: 'screen_saver_entities',
    };
    if (aliases[raw]) return aliases[raw];
    const schema = this._getDashboardSettingsApiSchema_?.() || {};
    if (schema[raw]) return raw;
    const snake = raw
      .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      .replace(/[\s-]+/g, '_')
      .replace(/__+/g, '_')
      .toLowerCase();
    const schemaKey = Object.keys(schema).find((item) => item.toLowerCase() === snake);
    return schemaKey || snake;
  },

  _cloneDashboardApiValue_(value) {
    if (value === undefined || value === null) return value;
    try { return JSON.parse(JSON.stringify(value)); } catch { return value; }
  },

  _coerceDashboardApiSettingValue_(key, value) {
    const schema = this._getDashboardSettingsApiSchema_?.() || {};
    const type = schema[key]?.type || '';
    if (type === 'boolean') {
      if (typeof value === 'string') {
        const lowered = value.trim().toLowerCase();
        if (['false', '0', 'off', 'no', 'disabled', 'disable'].includes(lowered)) return false;
        if (['true', '1', 'on', 'yes', 'enabled', 'enable'].includes(lowered)) return true;
      }
      return !!value;
    }
    if (type === 'number') {
      if (value === '' || value === null || value === undefined) return null;
      const next = Number(value);
      return Number.isFinite(next) ? next : value;
    }
    if ((type === 'array' || type === 'object') && typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        if (type === 'array') return Array.isArray(parsed) ? parsed : value;
        return parsed && typeof parsed === 'object' ? parsed : value;
      } catch {
        return value;
      }
    }
    return value;
  },

  _normalizeDashboardApiPatch_(patch = {}) {
    const out = {};
    const schema = this._getDashboardSettingsApiSchema_?.() || {};
    const current = this._exportableOptions?.() || {};
    const source = patch && typeof patch === 'object' ? patch : {};
    for (const [rawKey, rawValue] of Object.entries(source)) {
      const key = this._normalizeDashboardSettingApiKey_(rawKey);
      if (!key) continue;
      const known = !!schema[key] || Object.prototype.hasOwnProperty.call(current, key) || Object.prototype.hasOwnProperty.call(this._config || {}, key);
      if (!known) {
        console.warn(`[ddc:api] Unknown dashboard setting "${rawKey}".`);
        continue;
      }
      out[key] = this._coerceDashboardApiSettingValue_(key, rawValue);
    }
    return out;
  },

  _listDashboardApiSettings_() {
    const schema = this._getDashboardSettingsApiSchema_?.() || {};
    const options = this._exportableOptions?.() || {};
    const keys = Array.from(new Set([...Object.keys(schema), ...Object.keys(options)])).sort();
    return keys.map((key) => ({
      key,
      type: schema[key]?.type || (Array.isArray(options[key]) ? 'array' : typeof options[key]),
      value: this._cloneDashboardApiValue_(options[key]),
      boolean: (schema[key]?.type || typeof options[key]) === 'boolean',
    }));
  },

  _getDashboardApiSetting_(key) {
    const normalized = this._normalizeDashboardSettingApiKey_(key);
    const options = this._exportableOptions?.() || {};
    return this._cloneDashboardApiValue_(options[normalized]);
  },

  async _persistDashboardApiSettings_(opts = {}) {
    const options = this._exportableOptions?.() || {};
    const result = { backend: false, yaml: false, local: false };
    try {
      if (this.storageKey && opts.backend !== false) {
        result.backend = await this._saveOptionsToBackend?.(this.storageKey, options);
      } else {
        await this._saveLayout?.(true);
        result.local = true;
      }
    } catch (err) {
      console.warn('[ddc:api] Failed to persist settings to backend/local storage', err);
    }
    if (opts.yaml !== false) {
      try {
        const yamlResult = await this._persistOptionsToYaml?.(options, { noDownload: true });
        result.yaml = !!(yamlResult && (yamlResult.yamlSaved !== false));
      } catch (err) {
        console.warn('[ddc:api] Failed to persist settings to dashboard YAML/storage', err);
      }
    }
    return result;
  },

  async _setDashboardApiSettings_(patch = {}, opts = {}) {
    const normalized = this._normalizeDashboardApiPatch_(patch);
    const keys = Object.keys(normalized);
    if (!keys.length) return this._exportableOptions?.() || {};
    const before = this._exportableOptions?.() || {};
    this._applyImportedOptions(normalized, opts.recalc !== false);
    this._markDirty?.('api-settings');
    this._updateApplyBtn?.();
    const after = this._exportableOptions?.() || {};
    const detail = {
      source: 'api',
      keys,
      patch: this._cloneDashboardApiValue_(normalized),
      before: this._cloneDashboardApiValue_(before),
      after: this._cloneDashboardApiValue_(after),
    };
    this.dispatchEvent(new CustomEvent('ddc:settings-changed', {
      detail,
      bubbles: true,
      composed: true,
    }));
    if (opts.persist === true) {
      detail.persist = await this._persistDashboardApiSettings_(opts);
    }
    return this._cloneDashboardApiValue_(after);
  },

  _getDashboardLocalApi_() {
    if (this.__dashboardLocalApi) return this.__dashboardLocalApi;
    const owner = this;
    const settings = {
      list() {
        return owner._listDashboardApiSettings_?.() || [];
      },
      all() {
        return owner._cloneDashboardApiValue_(owner._exportableOptions?.() || {});
      },
      options() {
        return this.all();
      },
      get(key) {
        return owner._getDashboardApiSetting_?.(key);
      },
      set(key, value, opts = {}) {
        return owner._setDashboardApiSettings_?.({ [key]: value }, opts);
      },
      setMany(patch = {}, opts = {}) {
        return owner._setDashboardApiSettings_?.(patch, opts);
      },
      toggle(key, opts = {}) {
        const next = !owner._getDashboardApiSetting_?.(key);
        return owner._setDashboardApiSettings_?.({ [key]: next }, opts).then(() => next);
      },
      enable(key, opts = {}) {
        return owner._setDashboardApiSettings_?.({ [key]: true }, opts).then(() => true);
      },
      disable(key, opts = {}) {
        return owner._setDashboardApiSettings_?.({ [key]: false }, opts).then(() => false);
      },
      save(opts = {}) {
        return owner._persistDashboardApiSettings_?.({ ...opts, yaml: opts.yaml !== false });
      },
      subscribe(handler) {
        if (typeof handler !== 'function') return () => {};
        const listener = (ev) => handler(ev.detail, ev);
        owner.addEventListener('ddc:settings-changed', listener);
        return () => owner.removeEventListener('ddc:settings-changed', listener);
      },
    };
    const api = {
      version: 1,
      card: owner,
      settings,
      getSetting: settings.get.bind(settings),
      setSetting: settings.set.bind(settings),
      setSettings: settings.setMany.bind(settings),
      toggleSetting: settings.toggle.bind(settings),
      enableSetting: settings.enable.bind(settings),
      disableSetting: settings.disable.bind(settings),
      listSettings: settings.list.bind(settings),
      saveSettings: settings.save.bind(settings),
      openSettings() {
        return owner._openDashboardSettings?.();
      },
      saveLayout(silent = true) {
        return owner._saveLayout?.(silent);
      },
      setEditMode(enabled) {
        return owner._toggleEditMode?.(!!enabled);
      },
    };
    this.__dashboardLocalApi = api;
    return api;
  },

  _handleDashboardApiRequest_(ev) {
    try {
      const api = this._getDashboardLocalApi_?.();
      if (!api) return;
      if (ev?.detail && typeof ev.detail === 'object') ev.detail.api = api;
      if (typeof ev?.detail?.receive === 'function') ev.detail.receive(api);
      ev?.stopPropagation?.();
    } catch (err) {
      console.warn('[ddc:api] Failed to answer API request', err);
    }
  },
};

export function installDashboardApiMethods(proto) {
  for (const [name, value] of Object.entries(dashboardApiMethods)) {
    Object.defineProperty(proto, name, {
      value,
      configurable: true,
      writable: true,
    });
  }
}
