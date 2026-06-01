/*
 * Edit toolbar state and behavior.
 *
 * This module owns toolbar section switching, compact/expanded state, autosave indicators, and height
 * calculations used by sticky toolbar positioning.
 */

const toolbarBehaviorMethods = {
  _ensureToolbarStyles_() {
    try {
      const has = this.shadowRoot.querySelector('#ddc-toolbar-styles');
      if (has) return;
      const s = document.createElement('style');
      s.id = 'ddc-toolbar-styles';
      s.textContent = `/* ===== Edit toolbar ===== */
    .ddc-toolbar{
      position: sticky; top:calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px)); z-index: 50;
      display:grid; grid-template-columns: 1fr auto 1fr; align-items:center;
      gap: 12px; padding: 10px 14px;
      backdrop-filter: blur(8px);
      background: color-mix(in oklab, var(--card-background-color, rgba(0,0,0,.45)) 80%, transparent);
      border-bottom: 1px solid var(--divider-color, rgba(255,255,255,.08));
      box-shadow: 0 2px 10px rgba(0,0,0,.25);
    }
    .ddc-t-group{ display:flex; align-items:center; gap:8px; flex-wrap: wrap; }
    .ddc-toolbar > .ddc-t-group:first-child{ justify-self: start; }
    .ddc-toolbar > .ddc-t-group:nth-child(3){ justify-self: center; }
    .ddc-toolbar > .ddc-t-group:last-child{ justify-self: end; }

    .ddc-t-btn{
      display:inline-flex; align-items:center; gap:8px;
      height:34px; padding:0 12px; border-radius:10px;
      font: inherit; line-height: 1; cursor:pointer;
      background: var(--ha-card-background, rgba(255,255,255,.06));
      border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
      color: var(--primary-text-color, #e5e7eb);
      transition: transform .08s ease, background .15s ease, border-color .15s ease;
    }
    .ddc-t-btn:hover{ transform: translateY(-1px); background: rgba(255,255,255,.1); }
    .ddc-t-btn:active{ transform: translateY(0); }
    .ddc-t-btn ha-icon{ --mdc-icon-size:18px; }
    .ddc-t-btn .label{ white-space:nowrap; }

    .ddc-t-btn.primary{
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-color: color-mix(in oklab, var(--primary-color) 75%, #000);
    }
    .ddc-t-btn.danger{
      background: var(--error-color, #ef4444);
      color:#fff;
      border-color: color-mix(in oklab, var(--error-color) 75%, #000);
    }
    .ddc-t-btn.ghost{
      background: transparent;
      border-color: transparent;
      color: var(--secondary-text-color, #cbd5e1);
    }

    .ddc-t-sep{ width:1px; height:28px; background: var(--divider-color, rgba(255,255,255,.12)); }

    .ddc-t-status{
      display:inline-flex; align-items:center; gap:8px;
      padding:6px 12px; border-radius:999px;
      background: rgba(255,255,255,.06);
      border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
      font-size:.875rem;
    }
    .ddc-t-dot{ width:10px; height:10px; border-radius:50%; background:#22c55e; }
    .ddc-t-dot.dirty{ background:#f59e0b; animation: ddc-pulse 1.5s ease-in-out infinite; }
    .ddc-t-dot.error{ background:#ef4444; }
    @keyframes ddc-pulse{ 0%,100%{ transform:scale(1)} 50%{ transform:scale(1.4)} }

    /* Compact (icon-only) when narrow */
    .ddc-toolbar.compact .ddc-t-btn .label{ display:none; }
    /* Super-narrow: stack rows */
    @media (max-width: 840px){
      .ddc-toolbar{ grid-template-columns: 1fr; row-gap: 10px; }
      .ddc-toolbar .ddc-t-sep{ display:none; }
      .ddc-toolbar > .ddc-t-group{ justify-self: stretch; }
    }`;
      this.shadowRoot.appendChild(s);
    } catch (e) {
      console.warn('Toolbar style inject failed', e);
    }
  },


_removeToolbarDropdownDismissHandlers_() {
  try {
    if (this.__toolbarDropdownPointerHandler) {
      document.removeEventListener('pointerdown', this.__toolbarDropdownPointerHandler, true);
      this.__toolbarDropdownPointerHandler = null;
    }
    if (this.__toolbarDropdownKeyHandler) {
      document.removeEventListener('keydown', this.__toolbarDropdownKeyHandler, true);
      this.__toolbarDropdownKeyHandler = null;
    }
  } catch {}
},


_installToolbarDropdownDismissHandlers_(toolbar = null) {
  try {
    this._removeToolbarDropdownDismissHandlers_?.();
    const host = this.shadowRoot || this.renderRoot || this;
    const bar = toolbar || host?.querySelector?.('.ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3');
    if (!bar || bar.dataset.dropdownOpen !== '1') return;
    this.__toolbarDropdownPointerHandler = (ev) => {
      const path = typeof ev.composedPath === 'function' ? ev.composedPath() : [];
      if (path.includes(bar)) return;
      this._closeToolbarDropdown_?.({ toolbar: bar });
    };
    this.__toolbarDropdownKeyHandler = (ev) => {
      if (ev.key !== 'Escape') return;
      ev.stopPropagation?.();
      this._closeToolbarDropdown_?.({ toolbar: bar, focus: true });
    };
    document.addEventListener('pointerdown', this.__toolbarDropdownPointerHandler, true);
    document.addEventListener('keydown', this.__toolbarDropdownKeyHandler, true);
  } catch {}
},


_closeToolbarDropdown_(opts = {}) {
  try {
    const host = this.shadowRoot || this.renderRoot || this;
    const toolbar = opts?.toolbar || host?.querySelector?.('.ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3');
    if (!toolbar) return;
    toolbar.dataset.dropdownOpen = '0';
    toolbar.querySelectorAll?.('[data-toolbar-segment]')?.forEach((btn) => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('tabindex', btn.dataset.toolbarSegment === this.__toolbarActiveSegment ? '0' : '-1');
    });
    this._removeToolbarDropdownDismissHandlers_?.();
    if (opts.focus) {
      const activeBtn = toolbar.querySelector?.(`[data-toolbar-segment="${this.__toolbarActiveSegment || 'primary'}"]`);
      try { activeBtn?.focus?.({ preventScroll: true }); } catch {}
    }
    this._refreshToolbarOpenHeight_?.();
  } catch {}
},


_positionToolbarDropdown_(toolbar = null) {
  try {
    const host = this.shadowRoot || this.renderRoot || this;
    const bar = toolbar || host?.querySelector?.('.ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3');
    if (!bar) return;
    const segment = bar.querySelector?.(`[data-toolbar-segment="${this.__toolbarActiveSegment || 'primary'}"]`);
    const segments = bar.querySelector?.('.ddc-toolbar-segments');
    if (!segment || !segments) return;
    const barRect = bar.getBoundingClientRect();
    const segmentRect = segment.getBoundingClientRect();
    const available = Math.max(260, barRect.width - 16);
    const activeSegment = this.__toolbarActiveSegment || 'primary';
    const desiredWidth = activeSegment === 'layouts' ? 620 : activeSegment === 'view' ? 520 : 420;
    const panelWidth = Math.min(Math.max(segmentRect.width, desiredWidth), available);
    let left = segmentRect.left - barRect.left;
    if (left + panelWidth > barRect.width - 8) left = barRect.width - 8 - panelWidth;
    left = Math.max(8, left);
    const top = segments.offsetTop + segments.offsetHeight + 8;
    bar.style.setProperty('--ddc-toolbar-dropdown-left', `${Math.round(left)}px`);
    bar.style.setProperty('--ddc-toolbar-dropdown-width', `${Math.round(panelWidth)}px`);
    bar.style.setProperty('--ddc-toolbar-dropdown-top', `${Math.round(top)}px`);
    bar.style.setProperty('--ddc-toolbar-dropdown-origin', `${Math.round(segmentRect.left - barRect.left + (segmentRect.width / 2) - left)}px top`);
  } catch {}
},


_activateToolbarSegment_(section = 'primary', opts = {}) {
  try {
    const host = this.shadowRoot || this.renderRoot || this;
    const toolbar = opts?.toolbar || host?.querySelector?.('.ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3');
    if (!toolbar) return;
    const valid = new Set(['primary', 'clip', 'share', 'misc', 'layouts', 'view']);
    const next = valid.has(section) ? section : 'primary';
    const wasOpen = toolbar.dataset.dropdownOpen === '1';
    const wasSame = this.__toolbarActiveSegment === next;
    const shouldOpen = opts.open !== undefined ? !!opts.open : (opts.toggle ? !(wasOpen && wasSame) : true);
    this.__toolbarActiveSegment = next;
    toolbar.dataset.activeSection = next;
    toolbar.dataset.dropdownOpen = shouldOpen ? '1' : '0';
    toolbar.querySelectorAll?.('[data-toolbar-segment]')?.forEach((btn) => {
      const selectedSegment = btn.dataset.toolbarSegment === next;
      const active = shouldOpen && selectedSegment;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.setAttribute('aria-expanded', active ? 'true' : 'false');
      btn.setAttribute('tabindex', selectedSegment ? '0' : '-1');
      if (selectedSegment && opts.focus) {
        try { btn.focus({ preventScroll: true }); } catch {}
      }
    });
    if (opts.persist !== false) {
      try { localStorage.setItem(`ddc_toolbar_segment_${this.storageKey || 'default'}`, next); } catch {}
    }
    if (shouldOpen) {
      requestAnimationFrame(() => {
        this._positionToolbarDropdown_?.(toolbar);
        this._installToolbarDropdownDismissHandlers_?.(toolbar);
        this._refreshToolbarOpenHeight_?.();
      });
    } else {
      this._removeToolbarDropdownDismissHandlers_?.();
      requestAnimationFrame(() => this._refreshToolbarOpenHeight_?.());
    }
  } catch {}
},


_setToolbarExpanded_(expanded = false, opts = {}) {
  try {
    const host = this.shadowRoot || this.renderRoot || this;
    const toolbar = opts?.toolbar || host?.querySelector?.('.ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3');
    if (!toolbar) return;
    const next = !!expanded;
    this.__toolbarExpanded = next;
    toolbar.classList.toggle('is-collapsed', !next);
    toolbar.setAttribute('data-toolbar-expanded', next ? '1' : '0');
    const toggleBtn = this.toolbarToggleBtn || toolbar.querySelector('#toolbarToggleBtn');
    if (toggleBtn) {
      const label = next ? 'Collapse toolbar' : 'Expand toolbar';
      toggleBtn.setAttribute('aria-expanded', next ? 'true' : 'false');
      toggleBtn.setAttribute('aria-label', label);
      toggleBtn.setAttribute('title', label);
      toggleBtn.setAttribute('data-tooltip', label);
      const icon = toggleBtn.querySelector('ha-icon');
      if (icon) icon.setAttribute('icon', next ? 'mdi:chevron-up' : 'mdi:chevron-down');
    }
    this._refreshToolbarOpenHeight_?.();
    this._syncTabsWidth_?.();
  } catch {}
},


_setToolbarFollowMode_(enabled = false) {
  try {
    const next = !!enabled;
    this.toggleAttribute?.('ddc-toolbar-follow', next);
    if (!next) {
      this._syncToolbarFollowPosition_?.(0);
      this._removeToolbarFollowListeners_?.();
      this._refreshToolbarOpenHeight_?.();
      return;
    }
    try { this._computeHaSidebarGutters_?.(); } catch {}
    try { this._computeHaTopGutter_?.(); } catch {}
    this._installToolbarFollowListeners_?.();
    this._refreshToolbarOpenHeight_?.();
  } catch {}
},


_syncToolbarFollowPosition_(topOverride = null) {
  try {
    const host = this.shadowRoot || this.renderRoot || this;
    const toolbar = host?.querySelector?.('.ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3');
    if (!toolbar) return;
    const followsViewport = this.hasAttribute?.('ddc-toolbar-follow');
    if (!followsViewport) {
      toolbar.style.removeProperty('top');
      toolbar.style.removeProperty('position');
      return;
    }
    const rawTop = topOverride == null
      ? parseFloat(this.style.getPropertyValue('--ddc-top-gutter') || '0')
      : Number(topOverride);
    const top = Math.max(0, Math.round(Number.isFinite(rawTop) ? rawTop : 0));
    toolbar.style.setProperty('position', 'fixed', 'important');
    toolbar.style.setProperty(
      'top',
      `calc(${top}px + max(env(safe-area-inset-top, 0px), 0px))`,
      'important'
    );
  } catch {}
},


_installToolbarFollowListeners_() {
  try {
    if (this.__toolbarFollowListeners || typeof window === 'undefined') return;
    const watched = new WeakSet();
    const sync = () => {
      try { this._computeHaSidebarGutters_?.(); } catch {}
      try { this._computeHaTopGutter_?.(); } catch {}
      try { this._syncToolbarFollowPosition_?.(); } catch {}
      try { this._refreshToolbarOpenHeight_?.(); } catch {}
      try { this._positionToolbarDropdown_?.(); } catch {}
    };
    const schedule = () => {
      if (this.__toolbarFollowRAF) return;
      this.__toolbarFollowRAF = requestAnimationFrame(() => {
        this.__toolbarFollowRAF = 0;
        sync();
      });
    };
    window.addEventListener('scroll', schedule, true);
    window.addEventListener('resize', schedule, { passive: true });
    let resizeObserver = null;
    let discoveryTimer = 0;
    try {
      resizeObserver = new ResizeObserver(schedule);
      const watchChrome = () => {
        try {
          [
            ...(this._getHaSidebarGutterCandidates_?.() || []),
            ...(this._getHaTopChromeCandidates_?.() || [])
          ].forEach((el) => {
            if (!el || watched.has(el)) return;
            watched.add(el);
            try { resizeObserver.observe(el); } catch {}
          });
        } catch {}
      };
      watchChrome();
      discoveryTimer = window.setInterval(() => {
        watchChrome();
        schedule();
      }, 1200);
    } catch {}
    this.__toolbarFollowListeners = { schedule, resizeObserver, discoveryTimer };
    schedule();
  } catch {}
},


_removeToolbarFollowListeners_() {
  try {
    const listeners = this.__toolbarFollowListeners;
    if (listeners?.schedule && typeof window !== 'undefined') {
      window.removeEventListener('scroll', listeners.schedule, true);
      window.removeEventListener('resize', listeners.schedule);
    }
    try { listeners?.resizeObserver?.disconnect?.(); } catch {}
    if (listeners?.discoveryTimer && typeof window !== 'undefined') {
      try { window.clearInterval(listeners.discoveryTimer); } catch {}
    }
    this.__toolbarFollowListeners = null;
    if (this.__toolbarFollowRAF) {
      try { cancelAnimationFrame(this.__toolbarFollowRAF); } catch {}
      this.__toolbarFollowRAF = 0;
    }
    this.removeAttribute?.('ddc-toolbar-follow');
    this._syncToolbarFollowPosition_?.(0);
  } catch {}
},


_refreshToolbarOpenHeight_() {
  try {
    const host = this.shadowRoot || this.renderRoot || this;
    const toolbar = host?.querySelector?.('.ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3');
    const root = host?.querySelector?.('.ddc-root') || null;
    if (!toolbar) {
      if (root) root.style.setProperty('--ddc-toolbar-height', '0px');
      if (!this.autoResizeCards && this.cardContainer) this.cardContainer.style.marginTop = '';
      return;
    }
    requestAnimationFrame(() => {
      try {
        const isOpen = toolbar.classList.contains('is-open') || toolbar.hasAttribute('data-force-open');
        const segments = toolbar.querySelector?.('.ddc-toolbar-segments');
        const styles = window.getComputedStyle?.(toolbar);
        const paddingBottom = parseFloat(styles?.paddingBottom || '0') || 0;
        const baseHeight = segments
          ? Math.ceil(segments.offsetTop + segments.offsetHeight + paddingBottom)
          : (toolbar.scrollHeight || toolbar.offsetHeight || 0);
        const h = isOpen ? baseHeight : 0;
        toolbar.style.setProperty('--open-h', `${h}px`);
        this._syncToolbarFollowPosition_?.();
        this._positionToolbarDropdown_?.(toolbar);
        if (root) root.style.setProperty('--ddc-toolbar-height', `${h}px`);
        if (!this.autoResizeCards && this.cardContainer) {
          const toolbarFollowsViewport = this.hasAttribute?.('ddc-toolbar-follow');
          this.cardContainer.style.marginTop = h > 0 && !toolbarFollowsViewport ? `${h}px` : '';
        }
      } catch {}
    });
  } catch {}
},


_ensureStreamlinedToolbarObserver_() {
  try {
    const host = this.shadowRoot || this.renderRoot || this;
    const toolbar = host?.querySelector?.('.ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3');
    if (!toolbar) {
      try { this.__streamlinedToolbarRO?.disconnect(); } catch {}
      this.__streamlinedToolbarRO = null;
      this.__streamlinedToolbarROTarget = null;
      return;
    }
    if (this.__streamlinedToolbarRO && this.__streamlinedToolbarROTarget === toolbar) return;
    try { this.__streamlinedToolbarRO?.disconnect(); } catch {}
    this.__streamlinedToolbarRO = new ResizeObserver(() => {
      this._refreshToolbarOpenHeight_?.();
    });
    this.__streamlinedToolbarRO.observe(toolbar);
    this.__streamlinedToolbarROTarget = toolbar;
  } catch {}
},

  _renderEditToolbar_() {
    // Remove any existing
    this.shadowRoot.querySelectorAll('.ddc-toolbar').forEach(n => n.remove());

    // 🔹 ensure styles exist
    this._ensureToolbarStyles_();  // <— ADD THIS LINE

    const bar = document.createElement('div');
    bar.className = 'ddc-toolbar';

    // --- Left: Build
    const gBuild = document.createElement('div'); gBuild.className = 'ddc-t-group';
    gBuild.append(
      this._mkBtn_('add_card', 'mdi:plus-box', 'Add card (A)', 'primary'),
      this._mkBtn_('snap_toggle', 'mdi:magnet', 'Toggle snap (G)'),
      this._mkBtn_('align_grid', 'mdi:grid', 'Align to grid')
    );

    // --- Middle: Status
    const gStatus = document.createElement('div'); gStatus.className = 'ddc-t-group';
    const pill = document.createElement('div'); pill.className = 'ddc-t-status';
    const dot  = document.createElement('div'); dot.className = 'ddc-t-dot' + (this.__dirty ? ' dirty' : '');
    const txt  = document.createElement('span');
    txt.textContent = this.__dirty ? 'Unsaved changes' : `Saved${this.__lastSavedAt ? ' · ' + this.__lastSavedAt : ''}`;
    pill.append(dot, txt);
    gStatus.appendChild(pill);

    // --- Right: System
    const gSys = document.createElement('div'); gSys.className = 'ddc-t-group';
    gSys.append(
      this._mkBtn_('reload',    'mdi:refresh',             'Reload (R)', 'ghost'),          // ← make subtle
      this._mkBtn_('open_hads', 'mdi:alpha-h-box-outline', 'Open HACS/HADS', 'ghost'),      // ← make subtle
      this._mkBtn_('apply',     'mdi:content-save',        'Apply / Save (S)', 'primary'),
      this._mkBtn_('exit_edit', 'mdi:logout-variant',      'Exit edit (Esc)', 'danger')
    );

    // Layout rows (wrap on narrow)
    const rowL = document.createElement('div'); rowL.className = 'ddc-t-group ddc-t-row'; rowL.append(gBuild);
    const rowM = document.createElement('div'); rowM.className = 'ddc-t-group ddc-t-row'; rowM.append(gStatus);
    const rowR = document.createElement('div'); rowR.className = 'ddc-t-group ddc-t-row'; rowR.append(gSys);

    bar.append(rowL, document.createElement('div')).lastChild.className = 'ddc-t-sep';
    bar.append(rowM, document.createElement('div')).lastChild.className = 'ddc-t-sep';
    bar.append(rowR);

    // Click handling (single delegate)
    bar.addEventListener('click', (e) => {
      const b = e.target.closest('[data-action]'); if (!b) return;
      this._onToolbarAction_(b.dataset.action, { button: b, bar, dot, txt });
    });

    // Attach to shadowRoot
    this.shadowRoot.appendChild(bar);

    // 🔹 Responsive: collapse labels when narrow
    try {
      if (this.__toolbarRO) this.__toolbarRO.disconnect();
      this.__toolbarRO = new ResizeObserver(entries => {
        for (const e of entries) {
          bar.classList.toggle('compact', e.contentRect.width < 980);
        }
      });
      this.__toolbarRO.observe(bar);
    } catch {}

    // Keys while editing (unchanged)
    this.__toolbarKeyHandler = (ev) => {
      if (!this.editMode && !this.isEditing) return;
      if (ev.key === 'a' || ev.key === 'A') return this._onToolbarAction_('add_card');
      if (ev.key === 's' || ev.key === 'S') return this._onToolbarAction_('apply');
      if (ev.key === 'r' || ev.key === 'R') return this._onToolbarAction_('reload');
      if (ev.key === 'g' || ev.key === 'G') return this._onToolbarAction_('snap_toggle');
      if (ev.key === 'Escape')             return this._onToolbarAction_('exit_edit');
    };
    window.addEventListener('keydown', this.__toolbarKeyHandler);
  },

  async _onToolbarAction_(action, ctx = {}) {



    switch (action) {

      case 'add_card':
        (this._openAddCardDialog_?.() || this._addNewCard_?.() || this._openEntityPicker_?.());
        break;

      case 'snap_toggle': {
        this.dragLiveSnap = !this.dragLiveSnap;
        this._initInteract?.();
        this._toast_?.(`Live snap ${this.dragLiveSnap ? 'ON' : 'OFF'}`);
        break;
      }

      case 'align_grid':
        this._alignAllToGrid_?.(this.gridSize);
        break;

      case 'reload':
        this._reloadLayout_?.();
        break;

      case 'open_hads':
        (this._openHACS_?.() ||
         window.open('/hacs', '_blank') ||
         window.open('/hacsfiles', '_blank'));
        break;

      case 'apply': {
        // No need for 'async' on done()
        const done = () => {
          this._setDirty_(false);
          if (ctx?.txt) ctx.txt.textContent = `Saved · ${this.__lastSavedAt}`;
          if (ctx?.dot) ctx.dot.classList.remove('dirty','error');
        };
        const fail = () => { if (ctx?.dot) ctx.dot.classList.add('error'); };

        try {
          if (this._saveLayoutNow_) {
            await this._saveLayoutNow_();
          } else if (this._saveLayout) {
            await this._saveLayout(false);
          } else if (this._persistThisCardConfigToStorage_) {
            await this._persistThisCardConfigToStorage_();
          } else {
            this._queueSave?.('toolbar-apply', true);
          }
          this.__lastSavedAt = new Date().toLocaleTimeString();
          done();
        } catch (e) {
          console.warn(e);
          fail();
        }
        break;
      }

      case 'exit_edit':
        (this._toggleEditMode?.(false) || this._exitEditMode_?.() || (this.isEditing = false));
        // Clean up hotkeys when leaving
        if (this.__toolbarKeyHandler) {
          window.removeEventListener('keydown', this.__toolbarKeyHandler);
          this.__toolbarKeyHandler = null;
        }
        // 🔹 Clean up the resize observer
        if (this.__toolbarRO) { try { this.__toolbarRO.disconnect(); } catch{} this.__toolbarRO = null; }

        // Optionally remove toolbar
        this.shadowRoot.querySelectorAll('.ddc-toolbar').forEach(n => n.remove());
        break;
    }
  },
};

export function installToolbarBehaviorMethods(proto) {
  for (const [name, value] of Object.entries(toolbarBehaviorMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
