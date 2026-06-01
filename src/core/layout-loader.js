/*
 * Initial layout loading and rebuild flow.
 *
 * This module chooses between backend storage, localStorage recovery, and embedded YAML config,
 * then builds the active responsive layout and refreshes post-load UI state.
 */

const initialLoadMethods = {
  /* ------------------------ Initial load / rebuild ------------------------ */
    async _initialLoad(force = false) {
      // prevent multiple parallel boots
      if (this.__booting) return;
      this.__booting = true;

      try {
        // mark loading in progress to prevent autosave during rebuild
        this._loading = true;

        if (force && this.cardContainer) {
          this._restoreBackgroundHostToContainer_?.();
        }

        this._dbgPush('boot', 'Initial load start', { force });

        const __rebuildAfter = [];
        let saved = null;
        let local = null;

        // Try backend first if available
        if (this._backendOK && this.storageKey) {
          try {
            saved = await this._loadLayoutFromBackend(this.storageKey);
          } catch (e) {
            this._dbgPush('boot', 'Backend load failed', { error: String(e) });
          }
        }

        if (this.storageKey) {
          try {
            local = this._normalizeDashboardPayload_(JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`) || 'null'));
          } catch {}
        }

        if (saved && local) {
          const backendTime = this._layoutSnapshotTimestamp_(saved);
          const localTime = this._layoutSnapshotTimestamp_(local);
          if (localTime && (!backendTime || localTime > backendTime)) {
            this._dbgPush('boot', 'Using newer local snapshot', { backendTime, localTime });
            saved = local;
            if (this._backendOK) {
              try {
                await this._saveLayoutToBackend(this.storageKey, this._normalizeDashboardPayload_(local));
                this._dbgPush('boot', 'Repaired backend from newer local snapshot');
              } catch (e) {
                this._dbgPush('boot', 'Backend repair from local failed', { error: String(e) });
              }
            }
          }
        }

        // Fallback: localStorage (and migrate to backend if possible)
        if (!saved && this.storageKey) {
          if (local) {
            this._dbgPush('boot', 'Found local snapshot', { bytes: JSON.stringify(local).length });

            if (this._backendOK) {
              try {
                await this._saveLayoutToBackend(this.storageKey, this._normalizeDashboardPayload_(local));
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

        this._setDashboardPackages_(saved?.packages || []);

        // Snapshot of YAML before we overlay anything
        const yamlCfg = { ...(this._config || {}) };

        // 1) Apply persisted options as baseline
          if (saved?.options) {
    const { storage_key, ...optsNoKey } = saved.options;
    // Apply all persisted options, including background-related fields. Previously, the
    // backgrounds were stripped to avoid overwriting YAML values. However, this
    // prevented users from changing the card and container backgrounds or background
    // modes via the settings UI. Including them here allows saved options (and
    // consequently YAML updates) to take effect on reload.
    this._applyImportedOptions(optsNoKey, true);
  } else if (typeof saved?.grid === 'number') {
          this._applyImportedOptions({ grid: saved.grid }, true);
        }

        // 2) Overlay explicit YAML options (take precedence)
        const overrideKeys = [
          'storage_key','grid','drag_live_snap','auto_save','auto_save_debounce',
          'container_background','card_background','card_shadow','card_shadow_intensity','debug','disable_overlap',
          'container_size_mode','container_fixed_width','container_fixed_height',
          'container_preset','container_preset_orientation','tabs','tabs_position','default_tab','hide_tabs_when_single','layers_enabled','layers_button_details','layers', 'auto_resize_cards', 'optimize_for_mobile', 'mobile_dynamic_behavior', 'do_not_resize_text', 'outer_grid_buffer', 'outer_grid_buffer_cells', 'dashboard_theme_enabled', 'dashboard_theme', 'dashboard_theme_override_all_design', 'background_mode', 'background_image', 'background_particles', 'background_youtube', 'responsive_viewports', 'responsive_viewport_aspect_locks',
          // Ensure screen saver settings from YAML override persisted options on reload. Without
          // including these keys, the screensaver delay can become stuck because the overlay
          // of YAML values never occurs. Adding them keeps behaviour consistent with other
          // settings like disable_overlap.
          'screen_saver_enabled', 'screen_saver_delay', 'screen_saver_style', 'screen_saver_entities'
        ];
        const cfgOpts = {};
        for (const k of overrideKeys) {
          if (yamlCfg[k] !== undefined) cfgOpts[k] = yamlCfg[k];
        }
        if (Object.keys(cfgOpts).length) {
          this._applyImportedOptions(cfgOpts, true);
        }

        this.responsiveViewportProfiles = this._normalizeResponsiveViewportProfiles_(
          saved?.options?.responsive_viewports
          || yamlCfg?.responsive_viewports
          || this.responsiveViewportProfiles
        );
        this.sidebarCards = [];
        this._responsiveLayouts = this._normalizeResponsiveLayouts_(saved?.cards || [], saved?.responsive_layouts || null);
        try {
          const primaryCards = this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_()] || saved?.cards || [];
          this._config = {
            ...(this._config || {}),
            cards: this._cloneJson_(primaryCards),
            responsive_layouts: this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts, primaryCards)),
          };
        } catch {}
        const targetProfile = this._getRequestedResponsiveProfile_?.() || 'desktop';
        const targetOrientation = this._getRequestedResponsiveOrientation_?.(targetProfile) || 'landscape';
        const targetLayoutKey = this._getRuntimeResponsiveLayoutKey_?.(targetProfile, targetOrientation) || this._getResponsiveLayoutKey_(targetProfile, targetOrientation);
        this._activeResponsiveProfile = targetProfile;
        this._activeResponsiveLayoutKey = targetLayoutKey;
        const entriesToBuild = this._responsiveLayouts?.[targetLayoutKey] || [];

        await this._buildCardsFromEntries_(entriesToBuild);

        if (entriesToBuild.length) {
          this._dbgPush('boot', 'Layout applied', {
            count: entriesToBuild.length,
            profile: targetLayoutKey,
          });
        } else {
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
        this._resetLayoutHistory_?.('load');
        try { this._renderTabs(); this._renderLayersBar_?.(); this._applyActiveTab(); } catch {}
        // Reevaluate visibility after the layout has been built. Cards with
        // visibility conditions will hide themselves when not in edit mode.
        try { this._applyVisibility_(); } catch {}
        try {
          const host = this.cardContainer?.querySelector?.('#ddcBgHost');
          if (!host || !host.firstChild) this._applyBackgroundFromConfig?.();
        } catch {}
      }
    }
};

export function installInitialLoadMethods(proto) {
  Object.entries(initialLoadMethods).forEach(([key, value]) => {
    if (!Object.prototype.hasOwnProperty.call(proto, key)) {
      Object.defineProperty(proto, key, {
        value,
        writable: true,
        configurable: true,
      });
    }
  });
}
