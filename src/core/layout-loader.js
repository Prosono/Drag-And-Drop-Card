/*
 * Initial layout loading and rebuild flow.
 *
 * This module chooses between backend storage, localStorage recovery, and embedded YAML config,
 * then builds the active responsive layout and refreshes post-load UI state.
 */

const initialLoadMethods = {
  _prefersReducedMotion_() {
    try {
      return !!window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    } catch {
      return false;
    }
  },

  _isPlayLoadingAnimationEnabled_() {
    const hasOwn = (obj, key) => !!obj && Object.prototype.hasOwnProperty.call(obj, key);
    const toBool = (value) => value === true || value === 1 || value === 'true' || value === '1';
    try {
      for (const obj of [this._config, this.config]) {
        if (hasOwn(obj, 'play-loading_animation')) return toBool(obj['play-loading_animation']);
        if (hasOwn(obj, 'play_loading_animation')) return toBool(obj.play_loading_animation);
        if (hasOwn(obj, 'playLoadingAnimation')) return toBool(obj.playLoadingAnimation);
      }
    } catch {}
    try {
      if (this.storageKey) {
        const local = JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`) || 'null');
        const opts = local?.options || local || {};
        if (hasOwn(opts, 'play-loading_animation')) return toBool(opts['play-loading_animation']);
        if (hasOwn(opts, 'play_loading_animation')) return toBool(opts.play_loading_animation);
        if (hasOwn(opts, 'playLoadingAnimation')) return toBool(opts.playLoadingAnimation);
      }
    } catch {}
    return !!this.playLoadingAnimation;
  },

  _beginDashboardLoadingAnimation_() {
    try {
      if (!this._isPlayLoadingAnimationEnabled_?.()) return null;
      if (this.__ddcLoadingAnimationPlayed) return null;
      if (this._isHaEditorBlockingEmptyState_?.() || this._isInHaEditorPreview?.()) return null;
      const overlay = this.loadingOverlay || this.shadowRoot?.querySelector?.('#ddcLoadingOverlay');
      const root = this.rootEl || this.shadowRoot?.querySelector?.('.ddc-root');
      if (!overlay || !root) return null;
      const reduced = this._prefersReducedMotion_?.();
      const token = (this.__ddcLoadingAnimationToken || 0) + 1;
      this.__ddcLoadingAnimationToken = token;
      this.__ddcLoadingAnimationPlayed = true;
      overlay.hidden = false;
      overlay.removeAttribute('aria-hidden');
      overlay.classList.remove('is-leaving');
      overlay.classList.add('is-active');
      root.classList.add('ddc-loading-active');
      const now = () => (
        typeof performance !== 'undefined' && typeof performance.now === 'function'
          ? performance.now()
          : Date.now()
      );
      return {
        token,
        overlay,
        root,
        startedAt: now(),
        minMs: reduced ? 520 : 1900,
        exitMs: reduced ? 80 : 320,
      };
    } catch {
      return null;
    }
  },

  async _finishDashboardLoadingAnimation_(session = null) {
    if (!session || session.token !== this.__ddcLoadingAnimationToken) return;
    const now = () => {
      try {
        return typeof performance !== 'undefined' && typeof performance.now === 'function'
          ? performance.now()
          : Date.now();
      } catch { return Date.now(); }
    };
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, Math.max(0, ms)));
    try {
      await wait(session.minMs - (now() - session.startedAt));
      if (session.token !== this.__ddcLoadingAnimationToken) return;
      session.overlay.classList.add('is-leaving');
      session.root.classList.remove('ddc-loading-active');
      session.root.classList.add('ddc-loading-reveal');
      await wait(session.exitMs);
      if (session.token !== this.__ddcLoadingAnimationToken) return;
      session.overlay.classList.remove('is-active', 'is-leaving');
      session.overlay.hidden = true;
      session.overlay.setAttribute('aria-hidden', 'true');
      session.root.classList.remove('ddc-loading-reveal');
    } catch {
      try {
        session.overlay.hidden = true;
        session.overlay.classList.remove('is-active', 'is-leaving');
        session.root.classList.remove('ddc-loading-active', 'ddc-loading-reveal');
      } catch {}
    }
  },

  _runtimeLayoutCacheKeys_() {
    const keys = [];
    const add = (value) => {
      const key = String(value || '').trim();
      if (key && !keys.includes(key)) keys.push(key);
    };
    add(this.storageKey);
    add(this._config?.storage_key);
    add(this._config?.storageKey);
    add(this.config?.storage_key);
    add(this.config?.storageKey);
    if (this.config?.id) add(`layout_${String(this.config.id).replace(/[^a-zA-Z0-9_-]+/g, '_')}`);
    try { add(this._deriveStorageKeyFromConfig_?.(this.config || this._config || {})); } catch {}
    add('default');
    return keys;
  },

  _readRuntimeLayoutCache_() {
    try {
      const cache = globalThis.__ddcRuntimeLayoutCache;
      for (const key of this._runtimeLayoutCacheKeys_?.() || []) {
        if (!cache?.has?.(key)) continue;
        const cached = cache.get(key);
        const normalized = this._normalizeDashboardPayload_?.(this._cloneJson_?.(cached) || cached) || null;
        if (normalized?.cards?.length) return normalized;
      }
      const last = globalThis.__ddcLastRuntimeLayoutPayload;
      return this._normalizeDashboardPayload_?.(this._cloneJson_?.(last) || last) || null;
    } catch {
      return null;
    }
  },

  _writeRuntimeLayoutCache_(payload = null) {
    try {
      const normalized = this._normalizeDashboardPayload_?.(payload) || null;
      if (!normalized || !Array.isArray(normalized.cards) || !normalized.cards.length) return;
      if (!globalThis.__ddcRuntimeLayoutCache) globalThis.__ddcRuntimeLayoutCache = new Map();
      const snapshot = this._cloneJson_?.(normalized) || normalized;
      for (const key of this._runtimeLayoutCacheKeys_?.() || []) {
        if (key) globalThis.__ddcRuntimeLayoutCache.set(key, snapshot);
      }
      globalThis.__ddcLastRuntimeLayoutPayload = snapshot;
    } catch {}
  },

  /* ------------------------ Initial load / rebuild ------------------------ */
    async _initialLoad(force = false, options = {}) {
      // prevent multiple parallel boots
      if (this.__booting) return;
      this.__booting = true;
      let loadingAnimation = this._beginDashboardLoadingAnimation_?.();
      let previousSuppressCardAnimation = false;
      let autoBootVisualActive = false;

      try {
        // mark loading in progress to prevent autosave during rebuild
        this._loading = true;
        const allowBootVisualState = !(options?.preserveExistingOnEmpty || this._isHaEditorBlockingEmptyState_?.());
        const enableAutoBootVisualState = () => {
          if (!allowBootVisualState) return;
          if (autoBootVisualActive) return;
          previousSuppressCardAnimation = !!this.__suppressCardAnimation;
          this.__suppressCardAnimation = true;
          this._setAutoScaleStartupVisualState_?.(true, { hide: true });
          autoBootVisualActive = true;
        };
        try {
          const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
          if (mode === 'auto' && allowBootVisualState) enableAutoBootVisualState();
        } catch {}

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

        const hasSavedCards = Array.isArray(saved?.cards) && saved.cards.length > 0;
        if (!hasSavedCards && (options?.preserveExistingOnEmpty || this._isHaEditorBlockingEmptyState_?.())) {
          const cached = this._readRuntimeLayoutCache_?.();
          if (cached?.cards?.length) {
            this._dbgPush('boot', 'Using runtime layout cache for empty editor refresh', {
              reason: options?.reason || 'ha-editor',
              count: cached.cards.length,
            });
            saved = cached;
          }
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
          'container_preset','container_preset_orientation','tabs','tabs_position','default_tab','hide_tabs_when_single','layers_enabled','layers_button_details','layers', 'auto_resize_cards', 'auto_viewport_max_width', 'auto_scale_max', 'optimize_for_mobile', 'mobile_dynamic_behavior', 'do_not_resize_text', 'outer_grid_buffer', 'outer_grid_buffer_cells', 'play-loading_animation', 'dashboard_theme_enabled', 'dashboard_theme', 'dashboard_theme_override_all_design', 'background_mode', 'background_image', 'background_particles', 'background_youtube', 'responsive_viewports', 'responsive_viewport_aspect_locks',
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
        if (!loadingAnimation) loadingAnimation = this._beginDashboardLoadingAnimation_?.();

        try {
          const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
          if (mode === 'auto' && allowBootVisualState) enableAutoBootVisualState();
        } catch {}

        this.responsiveViewportProfiles = this._normalizeResponsiveViewportProfiles_(
          saved?.options?.responsive_viewports
          || yamlCfg?.responsive_viewports
          || this.responsiveViewportProfiles
        );
        const nextResponsiveLayouts = this._normalizeResponsiveLayouts_(saved?.cards || [], saved?.responsive_layouts || null);
        const targetProfile = this._getRequestedResponsiveProfile_?.() || 'desktop';
        const targetOrientation = this._getRequestedResponsiveOrientation_?.(targetProfile) || 'landscape';
        const targetLayoutKey = this._getRuntimeResponsiveLayoutKey_?.(targetProfile, targetOrientation) || this._getResponsiveLayoutKey_(targetProfile, targetOrientation);
        const entriesToBuild = nextResponsiveLayouts?.[targetLayoutKey] || [];
        const hasExistingRealCards = !!this.cardContainer?.querySelector?.('.card-wrapper:not(.ddc-placeholder)');
        if (!entriesToBuild.length && options?.preserveExistingOnEmpty && hasExistingRealCards) {
          this._dbgPush('boot', 'Skipped empty refresh; preserving current dashboard', {
            profile: targetLayoutKey,
            reason: options?.reason || 'refresh',
          });
          this._syncEmptyStateUI?.();
          this._applyAutoScale?.();
          return;
        }

        this.sidebarCards = [];
        this._responsiveLayouts = nextResponsiveLayouts;
        try {
          const primaryCards = this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_()] || saved?.cards || [];
          this._config = {
            ...(this._config || {}),
            cards: this._cloneJson_(primaryCards),
            responsive_layouts: this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts, primaryCards)),
          };
        } catch {}
        this._activeResponsiveProfile = targetProfile;
        this._activeResponsiveLayoutKey = targetLayoutKey;

        await this._buildCardsFromEntries_(entriesToBuild);

        if (entriesToBuild.length) {
          this._writeRuntimeLayoutCache_?.({
            version: 3,
            options: this._exportableOptions?.() || {},
            cards: this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || entriesToBuild,
            responsive_layouts: this._cloneJson_(this._serializeResponsiveLayouts_?.(
              this._responsiveLayouts,
              this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || entriesToBuild
            )),
            packages: this._exportDashboardPackages_?.() || [],
          });
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
        try {
          const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
          if (mode === 'auto' && autoBootVisualActive) {
            this._settleAutoScaleAfterBoot_?.({ restoreCardAnimation: previousSuppressCardAnimation });
          } else {
            this.__suppressCardAnimation = previousSuppressCardAnimation;
            this._setAutoScaleStartupVisualState_?.(false);
            if (mode === 'auto') this._applyAutoScale?.({ force: true });
          }
        } catch {
          this.__suppressCardAnimation = previousSuppressCardAnimation;
          this._setAutoScaleStartupVisualState_?.(false);
        }
        await this._finishDashboardLoadingAnimation_?.(loadingAnimation);
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
