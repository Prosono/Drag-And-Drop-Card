/*
 * Edit mode state, preview rendering, and dashboard editing affordances.
 *
 * This module toggles between viewing and editing, controls edit-only UI visibility, and provides the
 * Home Assistant config preview branch used before the full dashboard is mounted.
 */

import { getHaConfigPreviewTemplate } from '../ha/config-preview-template.js';

/* Edit mode, HA editor preview, long-press entry, and edit toolbar helpers. */
const editModeMethods = {
    _requestEditModePin_(expectedPin = '') {
      const expected = String(expectedPin || '').trim();
      if (!expected) return Promise.resolve(true);
      if (this.__editModePinGatePromise) return this.__editModePinGatePromise;
  
      this.__editModePinGatePromise = new Promise((resolve) => {
        let settled = false;
        let backdrop = null;
        const overlayRoot = this.renderRoot || this.shadowRoot || this;
  
        const finish = (ok) => {
          if (settled) return;
          settled = true;
          try { document.removeEventListener('keydown', onDocumentKeyDown, true); } catch {}
          try { backdrop?.remove?.(); } catch {}
          if (this.__editPinGate === backdrop) this.__editPinGate = null;
          this.__editModePinGatePromise = null;
          resolve(!!ok);
        };
  
        const onDocumentKeyDown = (ev) => {
          if (ev.key === 'Escape') {
            ev.preventDefault();
            ev.stopPropagation();
            finish(false);
          }
        };
  
        try { this.__editPinGate?.remove?.(); } catch {}
        backdrop = document.createElement('div');
        backdrop.className = 'ddc-pin-gate-backdrop';
        backdrop.innerHTML = `
          <form class="ddc-pin-gate" role="dialog" aria-modal="true" aria-labelledby="ddc-pin-gate-title" aria-describedby="ddc-pin-gate-copy">
            <div class="ddc-pin-gate-head">
              <div class="ddc-pin-gate-icon" aria-hidden="true"><ha-icon icon="mdi:lock-outline"></ha-icon></div>
              <div>
                <h3 id="ddc-pin-gate-title">Unlock Edit Mode</h3>
                <p id="ddc-pin-gate-copy">Enter the dashboard PIN/password to make changes.</p>
              </div>
            </div>
            <div class="ddc-pin-gate-field">
              <label for="ddc-pin-gate-input">PIN / password</label>
              <div class="ddc-pin-gate-input-wrap">
                <ha-icon icon="mdi:form-textbox-password" aria-hidden="true"></ha-icon>
                <input id="ddc-pin-gate-input" type="password" value="" autocomplete="new-password" autocapitalize="off" autocorrect="off" spellcheck="false" inputmode="text" aria-describedby="ddc-pin-gate-error" data-lpignore="true" data-1p-ignore="true" />
              </div>
              <div class="ddc-pin-gate-error" id="ddc-pin-gate-error" aria-live="polite"></div>
            </div>
            <div class="ddc-pin-gate-actions">
              <button type="button" class="btn secondary" data-pin-cancel>Cancel</button>
              <button type="submit" class="btn primary">Unlock</button>
            </div>
          </form>`;
  
        const form = backdrop.querySelector('.ddc-pin-gate');
        const input = backdrop.querySelector('#ddc-pin-gate-input');
        const error = backdrop.querySelector('#ddc-pin-gate-error');
        const cancelBtn = backdrop.querySelector('[data-pin-cancel]');
        const stop = (ev) => ev.stopPropagation();
  
        form?.addEventListener('pointerdown', stop, true);
        form?.addEventListener('mousedown', stop, true);
        form?.addEventListener('touchstart', stop, true);
        form?.addEventListener('click', stop);
        form?.addEventListener('keyup', stop, true);
        form?.addEventListener('keypress', stop, true);
        form?.addEventListener('keydown', (ev) => {
          ev.stopPropagation();
          if (ev.key === 'Escape') {
            ev.preventDefault();
            finish(false);
          }
        }, true);
        backdrop.addEventListener('pointerdown', (ev) => {
          if (ev.target === backdrop) finish(false);
        }, true);
        cancelBtn?.addEventListener('click', (ev) => {
          ev.preventDefault();
          finish(false);
        });
        form?.addEventListener('submit', (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          const value = String(input?.value || '').trim();
          if (value === expected) {
            finish(true);
            return;
          }
          if (error) error.textContent = 'Incorrect PIN/password.';
          if (input) {
            input.value = '';
            input.dataset.invalid = 'true';
            input.focus();
          }
          this._toast?.('Incorrect PIN/password.');
        });
        input?.addEventListener('input', () => {
          input.dataset.invalid = 'false';
          if (error) error.textContent = '';
        });
        const clearAutofill = () => {
          if (!input) return;
          input.value = '';
          input.defaultValue = '';
          input.dataset.invalid = 'false';
        };
        input?.addEventListener('focus', clearAutofill, { once: true });
        input?.addEventListener('pointerdown', clearAutofill, { once: true });
        input?.addEventListener('keydown', clearAutofill, { once: true, capture: true });
  
        document.addEventListener('keydown', onDocumentKeyDown, true);
        overlayRoot.appendChild(backdrop);
        this.__editPinGate = backdrop;
        clearAutofill();
        requestAnimationFrame(() => {
          clearAutofill();
          input?.focus?.();
        });
      });
  
      return this.__editModePinGatePromise;
    },

  _toggleEditMode(force = null) {
    try { this.__clearPressTimer?.(); } catch {}
  
    const entering = (force === null) ? !this.editMode : !!force;
    const wasOff   = !this.editMode && entering;
    // EDIT MODE PIN gate
    try {
      const cfgPin = (this.config && this.config.edit_mode_pin != null) ? String(this.config.edit_mode_pin) : '';
      const runtimePin = (this.editModePin != null) ? String(this.editModePin) : '';
      const pin = (runtimePin || cfgPin).trim();
      if (entering && !this.editMode && pin && !this.__editModePinApproved) {
        this._requestEditModePin_(pin).then((ok) => {
          if (!ok) return;
          this.__editModePinApproved = true;
          try { this._toggleEditMode(force); }
          finally { this.__editModePinApproved = false; }
        });
        return;
      }
  
    } catch (e) {}
  
  
    // Find toolbar in a robust way (no early return)
    const host = this.renderRoot || this.shadowRoot || this;
    const toolbar = host?.querySelector?.('.ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3');
    if (entering) {
      try { this._setToolbarFollowMode_?.(true); } catch {}
    }
  
    // Helpers that are null-safe
    const setDisplay = (el, val) => { try { if (el) el.style.display = val; } catch {} };
    const on  = 'inline-flex';
    const off = 'none';
  
    const showButtons = () => {
      setDisplay(this.addButton, on);
      setDisplay(this.reloadBtn, on);
      setDisplay(this.diagBtn, on);
      setDisplay(this.exitEditBtn, on);
      setDisplay(this.exportBtn, on);
      setDisplay(this.importBtn, on);
      setDisplay(this.exploreBtn, on);
      setDisplay(this.storeBadge, on);
      setDisplay(this.applyLayoutBtn, on);
      setDisplay(this.toolbarAutoSaveBtn, on);
      setDisplay(this.copyBtn, on);
      setDisplay(this.pasteBtn, on);
      setDisplay(this.undoBtn, on);
      setDisplay(this.redoBtn, on);
      setDisplay(this.lineModeBtn, on);
      setDisplay(this.settingsBtn, on);
      setDisplay(this.toolbarToggleBtn, off);
      this._syncHistoryButtons_?.();
    };
  
    const hideButtons = () => {
      setDisplay(this.addButton, off);
      setDisplay(this.reloadBtn, off);
      setDisplay(this.diagBtn, off);
      setDisplay(this.exitEditBtn, off);
      setDisplay(this.exportBtn, off);
      setDisplay(this.importBtn, off);
      setDisplay(this.exploreBtn, off);
      setDisplay(this.storeBadge, off);
      setDisplay(this.applyLayoutBtn, off);
      setDisplay(this.toolbarAutoSaveBtn, off);
      setDisplay(this.copyBtn, off);
      setDisplay(this.pasteBtn, off);
      setDisplay(this.undoBtn, off);
      setDisplay(this.redoBtn, off);
      setDisplay(this.lineModeBtn, off);
      setDisplay(this.settingsBtn, off);
      setDisplay(this.toolbarToggleBtn, off);
    };
  
    // === Animate only if we actually found a toolbar ===
    if (toolbar) {
      const DUR = 260; // keep in sync with CSS --ddc-dur
      try { this._computeHaTopGutter_?.(); } catch {}
  
      if (entering) {
        // Make sure it can be measured even if CSS says display:none !important
        toolbar.setAttribute('data-force-open', '1');
        // also hard-force as an ultimate fallback
        toolbar.style.display = 'flex';
  
        // Reveal buttons first so height is real
        showButtons();
        toolbar.classList.remove('is-collapsed');
        toolbar.setAttribute('data-toolbar-expanded', '1');
        let initialSegment = this.__toolbarActiveSegment || 'primary';
        try {
          const storedSegment = localStorage.getItem(`ddc_toolbar_segment_${this.storageKey || 'default'}`);
          if (storedSegment) initialSegment = storedSegment;
        } catch {}
        this._activateToolbarSegment_?.(initialSegment, { toolbar, persist: false, open: false });
  
        // Let layout settle, then measure & open
        requestAnimationFrame(() => {
          const h = toolbar.scrollHeight || 0;
          toolbar.style.setProperty('--open-h', h + 'px');
          toolbar.classList.add('is-open');
          this._refreshToolbarOpenHeight_?.();
          requestAnimationFrame(() => this._refreshToolbarOpenHeight_?.());
          // keep data-force-open; :has() + buttons will keep it visible
        });
  
      } else {
        // Ensure it’s visible while we animate out
        toolbar.setAttribute('data-force-open', '1');
        toolbar.style.display = 'flex';
  
        // Lock current height as start, then collapse next frame
        const h = toolbar.scrollHeight || 0;
        toolbar.style.setProperty('--open-h', h + 'px');
  
        requestAnimationFrame(() => {
          toolbar.classList.remove('is-open');
        });
  
        // After the CSS transition ends, actually hide buttons and release shim
        setTimeout(() => {
          toolbar.classList.remove('is-collapsed');
          this._closeToolbarDropdown_?.({ toolbar });
          hideButtons();
          toolbar.removeAttribute('data-force-open');
          if (!this.editMode) {
            try { this._setToolbarFollowMode_?.(false); } catch {}
          }
          // Let your existing CSS take over (display:none when not in edit)
        }, DUR);
      }
    } else {
      // No toolbar found; still flip mode & show/hide buttons so app logic continues
      entering ? showButtons() : hideButtons();
      if (!entering) {
        try { this._setToolbarFollowMode_?.(false); } catch {}
      }
    }
  
    // === Your existing non-visual logic unchanged ===
    this.editMode = entering;
    if (entering) {
      try { this._computeHaTopGutter_?.(); } catch {}
      try { this._syncToolbarFollowPosition_?.(); } catch {}
    }
    if (!entering) {
      this._stopMiddleMousePan_?.();
      this._persistCurrentResponsiveProfileToMemory_();
      this.viewportPreviewMode = 'live';
      this._closeConnectorSettings_?.();
      this._cancelConnectorDraft_?.();
      this._selectedConnectorId = null;
    }
    try { this._syncViewportPreviewUI_?.(); } catch {}
    this._syncEmptyStateUI?.();
    this.cardContainer?.classList.toggle('grid-on', this.editMode);
    this.cardContainer?.classList.toggle('ddc-editing-connectors', this.editMode);
  
    // When entering or exiting edit mode, reset the screensaver timer to prevent
    // the screensaver from activating during edits and to hide it if currently active.
    try {
      if (typeof this._resetScreensaverTimer === 'function') {
        this._resetScreensaverTimer();
      }
    } catch {}
  
    const wraps = this.cardContainer?.querySelectorAll?.('.card-wrapper') || [];
    wraps.forEach((w) => {
      w.classList.toggle('editing', this.editMode);
      try { w.firstElementChild?.__ddcSetEditPreviewMode?.(this.editMode); } catch {}
      w.querySelectorAll('.resize-handle').forEach((handle) => {
        handle.style.display = this.editMode ? 'flex' : 'none';
      });
      if (!w.dataset.placeholder && window.interact) {
        window.interact(w).draggable(this.editMode).resizable(this.editMode);
      }
      w.style.touchAction = this.editMode ? 'none' : 'auto';
    });
    const sidebarWraps = this.sidebarCanvas?.querySelectorAll?.('.ddc-sidebar-card-wrapper') || [];
    sidebarWraps.forEach((w) => {
      w.classList.toggle('editing', this.editMode);
      try { w.firstElementChild?.__ddcSetEditPreviewMode?.(this.editMode); } catch {}
      w.querySelectorAll('.resize-handle').forEach((handle) => {
        handle.style.display = this.editMode ? 'flex' : 'none';
      });
      if (window.interact) {
        try { window.interact(w).draggable(this.editMode).resizable(this.editMode); } catch {}
      }
      w.style.touchAction = this.editMode ? 'none' : 'auto';
    });
    this._syncSidebarEmptyState_?.();
    if (!this.editMode) this._clearSelection?.();
  
    if (!this.editMode) {
      this.cardContainer?.querySelectorAll('.card-wrapper.dragging')
        .forEach(w => w.classList.remove('dragging'));
      this.sidebarCanvas?.querySelectorAll?.('.ddc-sidebar-card-wrapper.dragging')
        ?.forEach?.(w => w.classList.remove('dragging'));
    }
    try { this._syncBubblePopupWrappers_?.(); } catch {}
    try { this._syncBubblePopupActiveState_?.(); } catch {}
    this._syncConnectorUiState_?.();
  
    if (wasOff) {
      const ox = this.__lastHoldX ?? null;
      const oy = this.__lastHoldY ?? null;
      this._playEditRipple?.(ox, oy);
    }
  
    try { this._applyHaChromeVisibility_?.(); } catch {}
  
    // === Update CSS variable for toolbar height on the root so the tabs bar
    // can offset itself when the toolbar is visible.  When entering edit
    // mode, measure the toolbar height and assign it to --ddc-toolbar-height
    // on the root element.  When leaving edit mode, reset the value to 0.
    try {
      const root = this.shadowRoot?.querySelector?.('.ddc-root') || this.renderRoot?.querySelector?.('.ddc-root') || null;
      if (root) {
        root.classList.toggle('ddc-edit-mode-active', !!this.editMode);
        let h = 0;
        // If we are entering edit mode and have a toolbar element, read its
        // scrollHeight to include all buttons and margins.  If leaving edit
        // mode, h remains 0.
        if (entering && toolbar) {
          try { h = toolbar.scrollHeight || toolbar.offsetHeight || 0; } catch {}
        }
        root.style.setProperty('--ddc-toolbar-height', h + 'px');
        // When auto‑resize cards is disabled, push down the card container
        // by the height of the toolbar so the draggable area does not sit
        // underneath the toolbar.  Clear the margin when exiting edit mode.
        if (!this.autoResizeCards && this.cardContainer) {
          const toolbarFollowsViewport = this.hasAttribute?.('ddc-toolbar-follow');
          if (entering && toolbar && !toolbarFollowsViewport) {
            this.cardContainer.style.marginTop = h + 'px';
          } else {
            this.cardContainer.style.marginTop = '';
          }
        }
      }
    } catch {}
  
    // === Ensure the drag area renders fully on edit-mode toggle ===
    // In dynamic mode with auto‑resize off, the container does not
    // recompute its dimensions until a card is moved.  This can result
    // in the drag-and-drop area appearing clipped when first entering
    // edit mode.  Explicitly trigger a resize after toggling edit mode
    // so that the container grows to fit its contents and the grid
    // overlay updates immediately.  Always guard against missing
    // functions.
    try {
      // Resize the container based on current card positions.  This
      // updates its width/height and refreshes the grid overlay.
      this._syncResponsiveProfileForViewport_?.({ force: !entering });
      if (typeof this._resizeContainer === 'function') {
        this._resizeContainer();
      }
      // Reapply scaling to ensure the card container stays aligned
      // relative to the viewport and to recompute pointer scaling.
      if (typeof this._applyAutoScale === 'function') {
        this._applyAutoScale();
      }
      this._scheduleConnectorsRender_?.({ syncAnchors: true });
    } catch {}
  },

    _renderHaConfigPreview_() {
      if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
      if (this.__haConfigPreviewRendered) return;
      this.__haConfigPreviewRendered = true;
      try { this._destroyParticles_?.(); } catch {}
      try { this._destroyYouTube_?.(); } catch {}
      this.shadowRoot.innerHTML = getHaConfigPreviewTemplate();
    },

    _isInHaEditorPreview() {
      // Walk up through parents and shadow hosts to detect HA's edit/preview dialog
      let n = this;
      while (n) {
        const tag = (n.nodeType === 1 && n.localName) ? n.localName.toLowerCase() : '';
        if (tag === 'hui-card-editor' || tag === 'hui-dialog-edit-card' || tag === 'hui-card-preview') return true;
        if (tag === 'ha-dialog' || tag === 'mwc-dialog') return true; // general HA dialogs (edit card, more-info, etc.)
        const root = n.getRootNode && n.getRootNode();
        n = n.parentElement || (root && root.host) || null;
      }
      return false;
    },

  _installLongPressToEnterEdit() {
    if (this.__lpInstalled) return;
    this.__lpInstalled = true;
  
    const cont = this.cardContainer;
    if (!cont) return;
  
    // Tunables
    const HOLD_MS  = 800;  // how long to hold
    const DRIFT_PX = 18;   // cancel if the pointer drifts more than this
  
    // ---- helpers ------------------------------------------------------------
    const isElem = (n) => !!n && typeof n === 'object' && n.nodeType === 1; // Element node
    const containsSafe = (root, node) => {
      try { return !!(root && node && typeof root.contains === 'function' && isElem(node) && root.contains(node)); }
      catch { return false; }
    };
    const within = (el) => containsSafe(this.cardContainer, el);
  
    const isOverCard = (ev) => {
      // 1) Fast path via target.closest
      const hit = ev.target?.closest?.('.card-wrapper');
      if (isElem(hit) && within(hit) && !hit.classList.contains('ddc-placeholder')) return true;
  
      // 2) Robust path via composedPath() (skip non-Elements like window/document)
      const path = typeof ev.composedPath === 'function' ? ev.composedPath() : [];
      for (const n of path) {
        if (!isElem(n)) continue;
        if (!within(n)) continue;
        if (n.classList?.contains('card-wrapper') && !n.classList.contains('ddc-placeholder')) return true;
      }
      return false;
    };
  
    const makeRing = (x, y) => {
      const el = document.createElement('div');
      el.className = 'ddc-press-ring';
      document.body.appendChild(el); // ensure always visible
      Object.assign(el.style, {
        position: 'fixed', left: `${x}px`, top: `${y}px`,
        zIndex: '100000', width: '44px', height: '44px',
        pointerEvents: 'none', marginLeft: '-22px', marginTop: '-22px',
        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,.35))'
      });
      el.innerHTML = `
        <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
          <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
          <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
          <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
        </svg>`;
      const fg = el.querySelector('.pr-fg');
      const r = 18, circ = 2 * Math.PI * r;
      fg.style.strokeDasharray = `${circ}`;
      fg.style.strokeDashoffset = `${circ}`;
      requestAnimationFrame(() => {
        fg.style.transition = `stroke-dashoffset ${HOLD_MS}ms linear`;
        fg.style.strokeDashoffset = '0';
      });
      return {
        el,
        move(nx, ny) { el.style.left = `${nx}px`; el.style.top = `${ny}px`; },
        remove() { try { el.remove(); } catch {} }
      };
    };
  
  
  
    // ---- state --------------------------------------------------------------
    let timer = null;
    let ring  = null;
    let startX = 0, startY = 0;
    let activePointerId = null;
  
    const clearTimer = () => { if (timer) clearTimeout(timer); timer = null; ring?.remove(); ring = null; };
    this.__clearPressTimer = clearTimer; // allow external cancel on mode changes
  
  
  
    // ---- handlers -----------------------------------------------------------
    const onPointerDown = (e) => {
      // Left mouse / primary touch only
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (this._isInHaEditorPreview()) return;
  
      // Only trigger on empty space *within this container*
      if (!within(e.target) || isOverCard(e)) return;
  
      activePointerId = e.pointerId;
      startX = e.clientX; startY = e.clientY;
      this.__lastHoldX = startX; this.__lastHoldY = startY;
  
      // visual progress ring
      ring = makeRing(startX, startY);
  
      timer = setTimeout(() => {
        clearTimer();
        const toState = !this.editMode;
        this._toggleEditMode(toState);
        this._toast?.(`Edit mode ${toState ? 'enabled' : 'disabled'}`);
      }, HOLD_MS);
    };
  
    const onPointerMove = (e) => {
      if (timer == null || e.pointerId !== activePointerId) return;
      ring?.move(e.clientX, e.clientY);
      if (Math.abs(e.clientX - startX) > DRIFT_PX || Math.abs(e.clientY - startY) > DRIFT_PX) {
        clearTimer();
      }
    };
  
    const onPointerUpOrCancel = (e) => {
      if (e.pointerId !== activePointerId) return;
      clearTimer();
      activePointerId = null;
    };
  
    const onContextMenu = (e) => {
      // prevent the OS context menu *only while* long-press is pending
      if (timer) { e.preventDefault(); e.stopPropagation(); return false; }
    };
  
    const onDblClick = (e) => {
      if (this._isInHaEditorPreview()) return;
      if (!within(e.target) || isOverCard(e)) return;
      const toState = !this.editMode;
      this._toggleEditMode(toState);
      this._toast?.(`Edit mode ${toState ? 'enabled' : 'disabled'}`);
    };
  
    // ---- wire up ------------------------------------------------------------
    cont.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUpOrCancel, { passive: true });
    window.addEventListener('pointercancel', onPointerUpOrCancel, { passive: true });
    window.addEventListener('contextmenu', onContextMenu);
  
    cont.addEventListener('dblclick', onDblClick);
  
    // keep references for clean-up in disconnectedCallback
    this.__lpHandlers = { onPointerDown, onPointerMove, onPointerUpOrCancel, onContextMenu, onDblClick };
  },

  _isLayoutEmpty() {
    const c = this.cardContainer;
    if (!c) return true;
    return c.querySelectorAll('.card-wrapper:not(.ddc-placeholder)').length === 0;
  },

  _syncEmptyStateUI() {
    // Show Add button even outside edit mode when empty; style it as a CTA.
    const allowEmptyPlaceholder = this._shouldShowEmptyDashboardPlaceholder_?.() !== false;
    if (!allowEmptyPlaceholder) this._hideEmptyPlaceholder?.();
    const empty = allowEmptyPlaceholder && this._isLayoutEmpty();
    if (this.addButton) {
      const show = this.editMode || empty;
      this.addButton.style.display = show ? 'inline-flex' : 'none';
      this.addButton.classList.toggle('cta-empty', !this.editMode && empty);
    }
  
    // Keep other toolbar buttons hidden unless we’re in edit mode
    const toggle = (el) => el && (el.style.display = this.editMode ? 'inline-flex' : 'none');
    toggle(this.reloadBtn);
    toggle(this.diagBtn);
    toggle(this.exitEditBtn);
    toggle(this.exportBtn);
    toggle(this.importBtn);
    toggle(this.exploreBtn);
    toggle(this.storeBadge);
    toggle(this.applyLayoutBtn);
    toggle(this.toolbarAutoSaveBtn);
    toggle(this.undoBtn);
    toggle(this.redoBtn);
    toggle(this.lineModeBtn);
    this._syncHistoryButtons_?.();
    },

    _playEditRipple(clientX=null, clientY=null) {
      const cont = this.cardContainer;
      if (!cont) return;
      const r = cont.getBoundingClientRect();
      const x = clientX == null ? (r.left + r.width/2) : clientX;
      const y = clientY == null ? (r.top  + r.height/2) : clientY;
      const localX = x - r.left;
      const localY = y - r.top;
  
      const veil = document.createElement('div');
      veil.className = 'ddc-ripple-veil';
      veil.style.setProperty('--rip-x', `${localX}px`);
      veil.style.setProperty('--rip-y', `${localY}px`);
      cont.appendChild(veil);
      setTimeout(()=> veil.remove(), 450);
    },
};

export function installEditModeMethods(proto) {
  for (const [name, value] of Object.entries(editModeMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
