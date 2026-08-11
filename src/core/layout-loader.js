/*
 * Initial layout loading and rebuild flow.
 *
 * This module chooses between backend storage, localStorage recovery, and embedded YAML config,
 * then builds the active responsive layout and refreshes post-load UI state.
 */

export function selectInitialLayoutSnapshot(backendSnapshot, localSnapshot, { preferLocal = false } = {}) {
  if (preferLocal && localSnapshot && typeof localSnapshot === 'object') {
    return { source: 'local-replacement', snapshot: localSnapshot };
  }
  if (backendSnapshot && typeof backendSnapshot === 'object') {
    return { source: 'backend', snapshot: backendSnapshot };
  }
  if (localSnapshot && typeof localSnapshot === 'object') {
    return { source: 'local', snapshot: localSnapshot };
  }
  return { source: 'none', snapshot: null };
}

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

  _cancelDashboardLoadingAnimation_(session = null) {
    if (!session || session.token !== this.__ddcLoadingAnimationToken) return;
    this.__ddcLoadingAnimationToken += 1;
    try {
      session.overlay.hidden = true;
      session.overlay.classList.remove('is-active', 'is-leaving');
      session.overlay.setAttribute('aria-hidden', 'true');
      session.root.classList.remove('ddc-loading-active', 'ddc-loading-reveal');
    } catch {}
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
    if (!keys.length) add('default');
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
      return null;
    } catch {
      return null;
    }
  },

  _readLocalLayoutSnapshot_() {
    if (!this.storageKey) return null;
    try {
      return this._normalizeDashboardPayload_(
        JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`) || 'null')
      );
    } catch {
      return null;
    }
  },

  _hasFastInitialLayout_() {
    try {
      const cache = globalThis.__ddcRuntimeLayoutCache;
      for (const key of this._runtimeLayoutCacheKeys_?.() || []) {
        if (!cache?.has?.(key)) continue;
        const cached = cache.get(key);
        const normalized = this._normalizeDashboardPayload_?.(cached) || null;
        if (normalized?.cards?.length) return true;
      }
    } catch {}
    try {
      if (this._readLocalLayoutSnapshot_?.()?.cards?.length) return true;
    } catch {}
    try {
      if (Array.isArray(this._config?.cards) && this._config.cards.length) return true;
      if (Array.isArray(this.config?.cards) && this.config.cards.length) return true;
    } catch {}
    return false;
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
    } catch {}
  },

  /* ------------------------ Initial load / rebuild ------------------------ */
    async _initialLoad(force = false, options = {}) {
      // prevent multiple parallel boots
      if (this.__booting) return;
      const loadSeq = (Number(this.__initialLoadSeq || 0) || 0) + 1;
      this.__initialLoadSeq = loadSeq;
      const isCurrentLoad = () => (
        loadSeq === this.__initialLoadSeq
        && !this.__dashboardConverterImporting
        && !this.__ddcImportingDashboard
      );
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
        let syncedWithBackend = false;
        let authoritativeBackendSnapshot = null;

        if (this.storageKey) {
          local = this._readLocalLayoutSnapshot_?.();
        }
        const preferLocalReplacement = !!(
          local
          && this.storageKey
          && this._hasPendingDashboardReplacement_?.()
        );

        // A converted dashboard is a deliberate full replacement. If it was
        // imported before the backend probe completed, the marked local copy
        // must be uploaded before an older backend snapshot is allowed to win.
        if (preferLocalReplacement) {
          saved = local;
          this._dbgPush('boot', 'Using pending imported dashboard snapshot');
          if (this._backendOK) {
            try {
              await this._saveLayoutToBackend(this.storageKey, this._normalizeDashboardPayload_(local));
              this._clearPendingDashboardReplacement_?.();
              authoritativeBackendSnapshot = this._cloneJson_?.(local) || local;
              syncedWithBackend = true;
              this._dbgPush('boot', 'Committed pending imported dashboard to backend');
            } catch (e) {
              this._dbgPush('boot', 'Pending dashboard commit failed; keeping local replacement', { error: String(e) });
            }
          }
        } else if (this._backendOK && this.storageKey) {
          try {
            saved = await this._loadLayoutFromBackend(this.storageKey);
            syncedWithBackend = !!(saved && typeof saved === 'object');
          } catch (e) {
            this._dbgPush('boot', 'Backend load failed', { error: String(e) });
          }
        }

        // The backend request above is asynchronous. An import may have started
        // while it was in flight, in which case even updating local/runtime
        // caches from this response would preserve stale dashboard state.
        if (!isCurrentLoad()) return;

        const selectedInitialSnapshot = selectInitialLayoutSnapshot(saved, local, {
          preferLocal: preferLocalReplacement,
        });
        if (selectedInitialSnapshot.source === 'backend') {
          saved = selectedInitialSnapshot.snapshot;
          authoritativeBackendSnapshot = this._cloneJson_?.(saved) || saved;
          syncedWithBackend = true;
        } else if (selectedInitialSnapshot.source === 'local-replacement') {
          saved = selectedInitialSnapshot.snapshot;
        }

        // The shared backend is authoritative whenever it is reachable. A browser-local
        // timestamp may be newer because of clock skew or an old offline session and must
        // never overwrite a valid shared snapshot during refresh.
        if (syncedWithBackend) {
          this._dbgPush('boot', 'Using authoritative backend snapshot');
          try {
            localStorage.setItem(`ddc_local_${this.storageKey}`, JSON.stringify(saved));
          } catch {}
          try { this._writeRuntimeLayoutCache_?.(saved); } catch {}
        }

        // Fallback: localStorage (and migrate to backend if possible)
        if (!saved && this.storageKey) {
          if (local) {
            this._dbgPush('boot', 'Found local snapshot', { bytes: JSON.stringify(local).length });

            if (this._backendOK) {
              try {
                await this._saveLayoutToBackend(this.storageKey, this._normalizeDashboardPayload_(local));
                this._clearPendingDashboardReplacement_?.();
                this._dbgPush('boot', 'Migrated local -> backend');
                saved = local;
                syncedWithBackend = true;
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

        // A dashboard import invalidates any storage load that was already in
        // flight. Do this before touching tabs, responsive layouts, the runtime
        // cache, or the live canvas so an older backend response cannot become
        // the new baseline halfway through the import transaction.
        if (!isCurrentLoad()) return;

        const syncedSnapshot = authoritativeBackendSnapshot || (syncedWithBackend ? saved : null);
        this.__lastSyncedDashboardPayload = syncedSnapshot
          ? (this._cloneJson_?.(this._normalizeDashboardPayload_(syncedSnapshot)) || syncedSnapshot)
          : null;

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
          'container_background','card_background','card_overflow','card_shadow','card_shadow_intensity','debug','disable_overlap',
          'container_size_mode','container_fixed_width','container_fixed_height',
          'container_preset','container_preset_orientation','tabs','tabs_position','tabs_size','default_tab','hide_tabs_when_single','sidebar_enabled','sidebar_type','sidebar_items','sidebar_header','sidebar_canvas_height','sidebar_cards','layers_enabled','layers_button_details','layers', 'auto_resize_cards', 'auto_viewport_max_width', 'auto_scale_max', 'optimize_for_mobile', 'mobile_dynamic_behavior', 'do_not_resize_text', 'outer_grid_buffer', 'outer_grid_buffer_cells', 'play-loading_animation', 'dashboard_theme_enabled', 'dashboard_theme', 'dashboard_theme_override_all_design', 'background_mode', 'background_image', 'background_particles', 'background_youtube', 'responsive_viewports', 'responsive_viewport_aspect_locks',
          // Ensure screen saver settings from YAML override persisted options on reload. Without
          // including these keys, the screensaver delay can become stuck because the overlay
          // of YAML values never occurs. Adding them keeps behaviour consistent with other
          // settings like disable_overlap.
          'screen_saver_enabled', 'screen_saver_delay', 'screen_saver_style', 'screen_saver_image', 'screensaver_image', 'screen_saver_background_image', 'screen_saver_entities'
        ];
        const cfgOpts = {};
        for (const k of overrideKeys) {
          if (yamlCfg[k] !== undefined) cfgOpts[k] = yamlCfg[k];
        }
        const collectSavedLayoutTabIds = (source = null, out = new Set()) => {
          if (!source) return out;
          if (Array.isArray(source)) {
            source.forEach((entry) => {
              const tabId = String(entry?.tabId || entry?.tab_id || '').trim();
              if (tabId) out.add(tabId);
            });
            return out;
          }
          if (typeof source === 'object') {
            if (Array.isArray(source.cards)) collectSavedLayoutTabIds(source.cards, out);
            Object.values(source).forEach((value) => {
              if (value && typeof value === 'object') collectSavedLayoutTabIds(value, out);
            });
          }
          return out;
        };
        const savedTabs = Array.isArray(saved?.options?.tabs)
          ? saved.options.tabs.filter((tab) => String(tab?.id || '').trim())
          : [];
        if (savedTabs.length) {
          const savedTabIds = new Set(savedTabs.map((tab) => String(tab.id).trim()));
          const yamlTabs = Array.isArray(cfgOpts.tabs) ? cfgOpts.tabs.filter((tab) => String(tab?.id || '').trim()) : [];
          const yamlTabIds = new Set(yamlTabs.map((tab) => String(tab.id).trim()));
          const layoutTabIds = collectSavedLayoutTabIds(saved?.cards);
          collectSavedLayoutTabIds(saved?.responsive_layouts, layoutTabIds);
          const savedLayoutUsesSavedTabs = Array.from(layoutTabIds).some((tabId) => savedTabIds.has(tabId));
          const yamlMissingSavedLayoutTabs = !yamlTabs.length || Array.from(layoutTabIds).some((tabId) => !yamlTabIds.has(tabId));
          if (savedLayoutUsesSavedTabs && yamlMissingSavedLayoutTabs) {
            delete cfgOpts.tabs;
            delete cfgOpts.default_tab;
            delete cfgOpts.hide_tabs_when_single;
            delete cfgOpts.tabs_position;
          }
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

        await this._buildCardsFromEntries_(entriesToBuild, 0, {
          replaceExisting: !!options?.replaceExisting,
        });

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
        const loadStillCurrent = isCurrentLoad();
        this._loading = false;
        this.__booting = false;
        if (!loadStillCurrent) {
          this.__suppressCardAnimation = previousSuppressCardAnimation;
          this._setAutoScaleStartupVisualState_?.(false);
          this._cancelDashboardLoadingAnimation_?.(loadingAnimation);
        }
        if (loadStillCurrent) {
          this.__dirty = false;
          try { this._ensurePlaceholderIfEmpty?.(); } catch {}
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
          this._scheduleCardHelpersPreload_?.();
          const shouldRefreshBackend = !!(
            this.__backendRefreshPending
            && this._backendOK
            && this.storageKey
          );
          if (shouldRefreshBackend) {
            this._queueBackendRefresh_?.(this.__backendRefreshReason || 'backend-probe-refresh');
          }
        }
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
