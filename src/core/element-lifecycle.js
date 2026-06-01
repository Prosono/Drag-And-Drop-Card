/*
 * Browser custom-element lifecycle hooks for the main dashboard card.
 *
 * This module connects the card to Home Assistant updates, window/document listeners,
 * initial autosize kicks, and cleanup paths used when the element is detached.
 */

const lifecycleMethods = {
  // === Initial autosize kick (view-mode safe) ===
    _startInitialAutosize() {
    try {
      if (this.__autoInitStarted) return;
      this.__autoInitStarted = true;

      // Debounced apply to collapse bursty triggers
      let scheduled = false;
      const apply = () => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
          scheduled = false;
          try { this._applyAutoScale?.(); } catch {}
        });
      };

      // Kick a couple of frames to settle fonts/slots
      requestAnimationFrame(() => { apply(); requestAnimationFrame(apply); });
      setTimeout(apply, 0);
      try { document.fonts?.ready?.then(apply); } catch {}

      // Scope the MutationObserver: when auto-resize is OFF, avoid attribute churn
      const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      const inner = this.cardContainer || this.querySelector('#cardContainer');
      if (!inner) return;

      const optsWhenScaling = { childList: true, subtree: true, attributes: true, attributeFilter: ['style','class'] };
      const optsWhenStatic  = { childList: true, subtree: true }; // no attribute observation

      const observeAttrs = (this.autoResizeCards || mode === 'auto');
      const mo = new MutationObserver(() => apply());
      mo.observe(inner, observeAttrs ? optsWhenScaling : optsWhenStatic);
      this.__autoInitMO = mo;

      // Auto-stop after 2s to avoid long-running loops on heavy dashboards
      setTimeout(() => { try { mo.disconnect(); } catch {}; this.__autoInitMO = null; }, 2000);
    } catch {}
  },

  connectedCallback() {
      if (this._isInHaEditorPreview?.()) {
        this.__haConfigPreviewMode = true;
        this._renderHaConfigPreview_?.();
        return;
      }
      try {
        this._installGridObservers_();
        this._updateGridButtonsVisibility();
      } catch {}

      this._startInitialAutosize?.();

      try {
        this._applyHaChromeVisibility_?.();
        requestAnimationFrame(() => this._syncPageBackgroundToView_?.());
        this._ensureScreenSaverStyles?.();
        this._updateScreensaverSettings?.();
      } catch {}

      if (!this.__autoFillAfterDragHandler) {
        this.__autoFillAfterDragHandler = () => {
          const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
          if (mode === 'auto') requestAnimationFrame(() => this._applyAutoScale?.());
        };
      }
      this.removeEventListener('ddc:dragend', this.__autoFillAfterDragHandler);
      this.addEventListener('ddc:dragend', this.__autoFillAfterDragHandler);

      if (!this.__dashboardApiRequestHandler) {
        this.__dashboardApiRequestHandler = (ev) => this._handleDashboardApiRequest_?.(ev);
      }
      this.removeEventListener('ddc-api-request', this.__dashboardApiRequestHandler);
      this.addEventListener('ddc-api-request', this.__dashboardApiRequestHandler);

      if (!this.__keyHandlerBound) {
        this.__keyHandler = (e) => this._onKeyDown_(e);
        window.addEventListener('keydown', this.__keyHandler);
        this.__keyHandlerBound = true;
      }

      if (!this.__boundExitEdit) {
        this.__boundExitEdit = () => this._toggleEditMode(false);
      }
      window.addEventListener('pagehide', this.__boundExitEdit);
      window.addEventListener('beforeunload', this.__boundExitEdit);

      if (!this.__onVis) {
        this.__onVis = () => {
          if (document.visibilityState === 'hidden') this._toggleEditMode(false);
        };
      }
      document.addEventListener('visibilitychange', this.__onVis);

      this._toggleEditMode(false);

      if (!this.__visObs) {
        const io = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            requestAnimationFrame(() => this._applyAutoScale?.());
          }
        });
        io.observe(this);
        this.__visObs = io;
      }

      this.__ddcOnWinResize = this.__ddcOnWinResize || (() => {
        if (this.hasAttribute('ddc-fixed-ui')) {
          try { this._computeHaSidebarGutters_?.(); } catch {}
        }
        try { this._computeHaTopGutter_?.(); } catch {}
        this._syncResponsiveProfileForViewport_?.();
        this._applyAutoScale?.();
        this._refreshToolbarOpenHeight_?.();
        this._refreshTabsAlignment_?.();
      });

      try {
        const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
        if (this.autoResizeCards || mode === 'auto') {
          window.addEventListener('resize', this.__ddcOnWinResize);
        } else {
          window.removeEventListener('resize', this.__ddcOnWinResize);
        }
      } catch {}

      try { this.__ddcBindPointerListeners?.(); } catch {}
    },

  disconnectedCallback() {
      try { this._uninstallGridObservers_(); } catch {}
      try { this._setHeaderVisible_?.(true); this._setSidebarVisible_?.(true); } catch {}
      try { this._applyHaChromeVisibility_?.(); } catch {}
      try { this._clearPageBackground_?.(); } catch {}

      if (this.__keyHandlerBound && this.__keyHandler) {
        window.removeEventListener('keydown', this.__keyHandler);
        this.__keyHandlerBound = false;
        this.__keyHandler = null;
      }
      if (this.__saveShortcutHandler) {
        window.removeEventListener('keydown', this.__saveShortcutHandler);
        this.__saveShortcutHandler = null;
      }
      if (this.__escapeShortcutHandler) {
        window.removeEventListener('keydown', this.__escapeShortcutHandler);
        this.__escapeShortcutHandler = null;
      }
      if (this.__containerBlankMouseDown) {
        this.cardContainer?.removeEventListener('mousedown', this.__containerBlankMouseDown);
        this.__containerBlankMouseDown = null;
      }
      try { this._uninstallMiddleMousePan_?.(); } catch {}
      this.__uiBindingsReady = false;

      try { this._destroyParticles_?.(); } catch {}
      try { this._destroyYouTube_?.(); } catch {}

      window.removeEventListener('pagehide', this.__boundExitEdit);
      window.removeEventListener('beforeunload', this.__boundExitEdit);
      document.removeEventListener('visibilitychange', this.__onVis);

      if (this.__autoFillAfterDragHandler) {
        this.removeEventListener('ddc:dragend', this.__autoFillAfterDragHandler);
      }
      if (this.__dashboardApiRequestHandler) {
        this.removeEventListener('ddc-api-request', this.__dashboardApiRequestHandler);
      }

      try {
        if (this._screensaverTimer) { clearTimeout(this._screensaverTimer); this._screensaverTimer = null; }
        if (this._clockInterval) { clearInterval(this._clockInterval); this._clockInterval = null; }
        if (this.__sidebarClockInterval) { clearInterval(this.__sidebarClockInterval); this.__sidebarClockInterval = null; }
        if (this._screensaverActivityHandler) {
          const _evs = this._screensaverEvents || [];
          _evs.forEach((ev) => {
            document.removeEventListener(ev, this._screensaverActivityHandler, true);
          });
        }
        if (this.screenSaverOverlay && this.screenSaverOverlay.parentNode) {
          this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay);
        }
      } catch {}

      try { this.__ddcResizeObs?.disconnect(); } catch {}
      this.__ddcResizeObs = null;

      this._stopScaleWatch?.();

      if (this.__ddcOnWinResize) {
        window.removeEventListener('resize', this.__ddcOnWinResize);
        this.__ddcOnWinResize = null;
      }

      try { this.__streamlinedToolbarRO?.disconnect(); } catch {}
      this.__streamlinedToolbarRO = null;
      this.__streamlinedToolbarROTarget = null;
      try { this._removeToolbarFollowListeners_?.(); } catch {}
      try { this._removeEmptyPlaceholderCentering_?.(); } catch {}

      if (this.__lpInstalled && this.__lpHandlers) {
        const cont = this.cardContainer;
        cont?.removeEventListener('mousedown', this.__lpHandlers.mouseDown);
        window.removeEventListener('mousemove', this.__lpHandlers.mouseMove);
        window.removeEventListener('mouseup', this.__lpHandlers.mouseUp);
        window.removeEventListener('contextmenu', this.__lpHandlers.contextMenu);
        cont?.removeEventListener('touchstart', this.__lpHandlers.touchStart);
        window.removeEventListener('touchmove', this.__lpHandlers.touchMove);
        window.removeEventListener('touchend', this.__lpHandlers.touchEnd);
        window.removeEventListener('touchcancel', this.__lpHandlers.touchCancel);
        this.__lpInstalled = false;
        this.__lpHandlers = null;
      }

      try { this.__visObs?.disconnect?.(); } catch {}
      this.__visObs = null;
      try { clearTimeout(this.__connectorRenderSettleTimer1); } catch {}
      try { clearTimeout(this.__connectorRenderSettleTimer2); } catch {}
      this.__connectorRenderSettleTimer1 = 0;
      this.__connectorRenderSettleTimer2 = 0;
      try { cancelAnimationFrame(this.__postMoveSettleRAF1); } catch {}
      try { cancelAnimationFrame(this.__postMoveSettleRAF2); } catch {}
      this.__postMoveSettleRAF1 = 0;
      this.__postMoveSettleRAF2 = 0;

      try {
        if (this.__ddcPtrBound) {
          this.removeEventListener('pointerdown', this.__onDDCPointerDown);
          this.removeEventListener('pointermove', this.__onDDCPointerMove);
          window.removeEventListener('pointerup', this.__onDDCPointerUp);
          window.removeEventListener('pointercancel', this.__onDDCPointerUp);
          this.__ddcPtrBound = false;
        }
      } catch {}
    },

  set hass(hass) {
      this._hass = hass;
      if (!this.__probed && hass) {
        this.__probed = true;
        this._probeBackend().then(() => {
          this.__probed = true;
          if (!this.__booted && this.__cfgReady) {
            this.__booted = true;
            this._initialLoad(true);
          }
        });
      }

      const wraps = this.cardContainer?.children || [];
      for (const wrap of wraps) {
        const c = wrap.firstElementChild;
        if (c && c.hass !== hass) {
          c.hass = hass;
          // Don't reprocess card_mod here - it will be handled by _processCardModOnce
        }
      }
      const sidebarWraps = this.sidebarCanvas?.querySelectorAll?.('.ddc-sidebar-card-wrapper') || [];
      for (const wrap of sidebarWraps) {
        const c = wrap.firstElementChild;
        if (c && c.hass !== hass) {
          c.hass = hass;
        }
      }
      this._updateSidebarHeader_?.();

      // After updating hass on all cards, re‑evaluate visibility so that state
      // conditions are applied when not editing. Visibility is not applied during
      // edit mode so that all cards remain visible while editing.
      this._scheduleVisibilityRefresh_?.();
      this._scheduleVisualRefresh_?.();
      try {
        const nextConnectorSignature = this._getConnectorHassSignature_?.() || '';
        if (nextConnectorSignature !== this.__connectorHassSignature) {
          this.__connectorHassSignature = nextConnectorSignature;
          this._scheduleConnectorsRender_?.({ settle: true, deferFirst: true });
        }
      } catch {}
    },

  get hass() { return this._hass; }
};

export function installLifecycleMethods(proto) {
  Object.entries(Object.getOwnPropertyDescriptors(lifecycleMethods)).forEach(([key, descriptor]) => {
    if (key === '__proto__' || Object.prototype.hasOwnProperty.call(proto, key)) return;
    const nextDescriptor = {
      ...descriptor,
      configurable: true,
      enumerable: false,
    };
    if ('value' in nextDescriptor) nextDescriptor.writable = true;
    Object.defineProperty(proto, key, nextDescriptor);
  });
}
