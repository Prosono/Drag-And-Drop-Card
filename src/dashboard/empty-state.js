/*
 * Empty-state and placeholder behavior for dashboards with no visible cards.
 *
 * This module keeps the canvas approachable during first setup while staying out of the way once cards
 * or sidebar content exist.
 */

const emptyStateMethods = {

  async _applyEmptyDashboardPreset_(presetKey) {
    const preset = this.constructor._sizePresets().find((item) => item.key === presetKey)
      || this.constructor._sizePresets().find((item) => item.key === 'fhd');
    if (!preset) return;

    const patch = {
      container_size_mode: 'preset',
      container_preset: preset.key,
      container_preset_orientation: 'auto',
      container_fixed_width: null,
      container_fixed_height: null,
      auto_resize_cards: true,
    };

    try {
      if (typeof this._setDashboardApiSettings_ === 'function') {
        await this._setDashboardApiSettings_(patch, { persist: true });
      } else {
        this._applyImportedOptions?.(patch, true);
        this._markDirty?.('empty-preset');
      }
      this._config = { ...(this._config || {}), ...patch };
      if (this._isLayoutEmpty?.()) {
        this._hideEmptyPlaceholder?.();
        this._showEmptyPlaceholder?.();
      } else {
        this._resizeContainer?.();
      }
      this._applyAutoScale?.();
      this._syncViewportPreviewUI_?.();
      this._toast?.(`${preset.label} canvas applied (${preset.w} x ${preset.h}).`);
    } catch (err) {
      console.warn('[drag-and-drop-card] Failed to apply empty-state preset', err);
      this._toast?.('Could not apply canvas preset.');
    }
  },


  async _applyEmptyDashboardSizeMode_(sizeMode = 'fixed-fhd') {
    const normalized = String(sizeMode || '').trim().toLowerCase();
    const useAuto = normalized === 'auto';
    const patch = useAuto
      ? {
          container_size_mode: 'auto',
          container_preset: 'fhd',
          container_preset_orientation: 'auto',
          container_fixed_width: null,
          container_fixed_height: null,
          auto_resize_cards: true,
        }
      : {
          container_size_mode: 'preset',
          container_preset: 'fhd',
          container_preset_orientation: 'auto',
          container_fixed_width: null,
          container_fixed_height: null,
          auto_resize_cards: false,
        };

    try {
      if (typeof this._setDashboardApiSettings_ === 'function') {
        await this._setDashboardApiSettings_(patch, { persist: true });
      } else {
        this._applyImportedOptions?.(patch, true);
        this._markDirty?.('empty-size-mode');
      }
      this._config = { ...(this._config || {}), ...patch };
      if (this._isLayoutEmpty?.()) {
        this._hideEmptyPlaceholder?.();
        this._showEmptyPlaceholder?.();
      } else {
        this._resizeContainer?.();
      }
      this._applyContainerSizingFromConfig?.(false);
      this._applyAutoScale?.();
      this._syncViewportPreviewUI_?.();
      this._toast?.(useAuto ? 'Auto canvas enabled.' : 'Fixed Size (Full HD) canvas applied.');
    } catch (err) {
      console.warn('[drag-and-drop-card] Failed to apply empty-state size mode', err);
      this._toast?.('Could not apply canvas size.');
    }
  },


  _makePlaceholderAt(x=0,y=0,w=400,h=400, options = {}) {
    const wrap = document.createElement('div');
    wrap.classList.add('card-wrapper','ddc-placeholder');
    wrap.dataset.placeholder = '1';
    wrap.setAttribute('role', 'region');
    wrap.setAttribute('aria-label', 'Drag and Drop Card getting started');
    if (this.editMode) wrap.classList.add('editing');
    this._setCardPosition(wrap, x, y);
    const designW = Math.max(320, Math.round(Number(options.designW || w) || 1180));
    const designH = Math.max(420, Math.round(Number(options.designH || h) || 740));
    const scale = Math.max(0.0001, Number(options.scale || Math.min(w / designW, h / designH, 1)) || 1);
    const displayW = Math.max(1, Math.round(designW * scale));
    const displayH = Math.max(1, Math.round(designH * scale));
    wrap.style.width = `${displayW}px`;
    wrap.style.height = `${displayH}px`;
    wrap.style.setProperty('--ddc-empty-design-w', `${designW}px`);
    wrap.style.setProperty('--ddc-empty-design-h', `${designH}px`);
    wrap.style.setProperty('--ddc-empty-scale', scale.toFixed(5));
    wrap.dataset.emptyDesignW = String(designW);
    wrap.dataset.emptyDesignH = String(designH);
    wrap.dataset.emptyScale = scale.toFixed(5);
    wrap.__ddcEmptySizeSig = `${displayW}x${displayH}@${scale.toFixed(5)}`;
    wrap.style.zIndex = String(this._highestZ() + 1);

    const inner = document.createElement('div');
    inner.className = 'ddc-placeholder-inner';
    inner.setAttribute('role', 'group');
    inner.setAttribute('aria-label', 'Getting started actions');

    const shell = document.createElement('div');
    shell.className = 'ddc-empty-shell';

    const visual = document.createElement('div');
    visual.className = 'ddc-empty-visual';
    const heroImgUrl = this.heroImage; // already set to default or config override
    if (heroImgUrl) {
      const img = document.createElement('img');
      img.src = heroImgUrl;
      img.alt = "";
      img.loading = 'lazy';
      visual.appendChild(img);
    }
    const content = document.createElement('div');
    content.className = 'ddc-empty-content';
    content.innerHTML = `
      <div class="ddc-empty-kicker"><ha-icon icon="mdi:creation-outline"></ha-icon><span>Start here</span></div>
      <h2 class="ddc-empty-title">Build your first dashboard canvas.</h2>
      <p class="ddc-empty-sub">Choose how the canvas should behave, add your first card, then shape the dashboard visually on the grid.</p>
      <div class="ddc-empty-steps" aria-label="Getting started steps">
        <div class="ddc-empty-step"><strong>1. Pick a mode</strong><span>Use a fixed Full HD canvas or let Auto scale to the viewport.</span></div>
        <div class="ddc-empty-step"><strong>2. Add cards</strong><span>Open the card picker and place Home Assistant or Drag & Drop cards.</span></div>
        <div class="ddc-empty-step"><strong>3. Play around</strong><span>Drag, resize, layer, test ideas, and save when the dashboard feels right.</span></div>
      </div>
      <div class="ddc-empty-actions">
        <button type="button" class="ddc-empty-btn primary" data-ddc-empty-action="add">
          <ha-icon icon="mdi:plus-circle-outline"></ha-icon><span>Add first card</span>
        </button>
        <button type="button" class="ddc-empty-btn" data-ddc-empty-action="settings">
          <ha-icon icon="mdi:tune-variant"></ha-icon><span>Dashboard settings</span>
        </button>
      </div>
      <div class="ddc-empty-presets" aria-label="Canvas size mode">
        <button type="button" class="ddc-empty-btn ddc-empty-preset" data-ddc-empty-action="size-mode" data-size-mode="fixed-fhd">
          <ha-icon icon="mdi:monitor-screenshot"></ha-icon>
          <span class="ddc-empty-size-copy"><span>Fixed Size (Full HD)</span><small>1920 x 1080 canvas</small></span>
        </button>
        <button type="button" class="ddc-empty-btn ddc-empty-preset" data-ddc-empty-action="size-mode" data-size-mode="auto">
          <ha-icon icon="mdi:fit-to-screen-outline"></ha-icon>
          <span class="ddc-empty-size-copy"><span>Auto</span><small>Scales to the current viewport</small></span>
        </button>
      </div>
      <div class="ddc-empty-links">
        <button type="button" class="ddc-empty-link" data-ddc-empty-action="docs">
          <ha-icon icon="mdi:help-circle-outline"></ha-icon><span>Read the start guide</span>
        </button>
        <span>Double-click empty space to enter Edit Mode.</span>
      </div>
    `;

    const handleEmptyAction = async (e) => {
      const btn = e.target?.closest?.('[data-ddc-empty-action]');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      const action = btn.dataset.ddcEmptyAction;
      if (action === 'add') {
        if (!this.editMode) this._toggleEditMode(true);
        this._openCardManager?.();
      } else if (action === 'settings') {
        if (!this.editMode) this._toggleEditMode(true);
        this._openDashboardSettings?.();
      } else if (action === 'docs') {
        window.open('https://hads.smarti.dev/wiki/start-here', '_blank', 'noopener,noreferrer');
      } else if (action === 'size-mode') {
        await this._applyEmptyDashboardSizeMode_(btn.dataset.sizeMode || 'fixed-fhd');
      } else if (action === 'preset') {
        await this._applyEmptyDashboardPreset_(btn.dataset.preset || 'fhd');
      }
    };
    shell.addEventListener('click', handleEmptyAction);
    shell.addEventListener('pointerdown', (e) => {
      if (e.target?.closest?.('button')) e.stopPropagation();
    });
    shell.addEventListener('dblclick', (e) => {
      if (e.target?.closest?.('button')) e.stopPropagation();
    });

    shell.append(visual, content);
    inner.appendChild(shell);

    // Let users double-click anywhere on the placeholder to enter edit
    wrap.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this._toggleEditMode(true);
    });

    const shield = document.createElement('div');
    shield.className = 'shield';

    wrap.append(inner, shield);
    return wrap;
  },


  _emptyPlaceholderBaseSize_() {
    return { w: 1180, h: 740 };
  },


  _emptyPlaceholderMetrics_() {
    const base = this._emptyPlaceholderBaseSize_?.() || { w: 1180, h: 740 };
    const designW = Math.max(320, Math.round(Number(base.w) || 1180));
    const designH = Math.max(420, Math.round(Number(base.h) || 740));
    let frame = null;
    try { frame = this._emptyPlaceholderVisibleFrame_?.(); } catch {}
    if (!frame || !Number.isFinite(frame.width) || !Number.isFinite(frame.height)) {
      try {
        const rect = this.getBoundingClientRect?.();
        frame = {
          width: Math.max(1, rect?.width || window.innerWidth || designW),
          height: Math.max(1, rect?.height || window.innerHeight || designH),
        };
      } catch {
        frame = { width: designW, height: designH };
      }
    }
    const frameW = Math.max(1, Number(frame.width) || designW);
    const frameH = Math.max(1, Number(frame.height) || designH);
    const marginX = frameW < 760 ? 32 : 80;
    const marginY = frameH < 760 ? 32 : 80;
    const availableW = Math.max(220, frameW - marginX);
    const availableH = Math.max(220, frameH - marginY);
    const scale = Math.max(0.0001, Math.min(1, availableW / designW, availableH / designH) || 1);
    return {
      designW,
      designH,
      scale,
      w: Math.max(1, Math.round(designW * scale)),
      h: Math.max(1, Math.round(designH * scale)),
    };
  },


  _syncEmptyPlaceholderSize_(placeholder = null) {
    const p = placeholder || this.cardContainer?.querySelector?.('.ddc-placeholder');
    if (!p || !p.isConnected) return null;
    const metrics = this._emptyPlaceholderMetrics_?.() || { designW: 1180, designH: 740, scale: 1, w: 1180, h: 740 };
    const scale = Math.max(0.0001, Number(metrics.scale) || 1);
    const displayW = Math.max(1, Math.round(Number(metrics.w) || (metrics.designW * scale)));
    const displayH = Math.max(1, Math.round(Number(metrics.h) || (metrics.designH * scale)));
    const designW = Math.max(320, Math.round(Number(metrics.designW) || 1180));
    const designH = Math.max(420, Math.round(Number(metrics.designH) || 740));
    const sig = `${displayW}x${displayH}@${scale.toFixed(5)}`;
    if (p.__ddcEmptySizeSig === sig) return metrics;
    p.style.width = `${displayW}px`;
    p.style.height = `${displayH}px`;
    p.style.setProperty('--ddc-empty-design-w', `${designW}px`);
    p.style.setProperty('--ddc-empty-design-h', `${designH}px`);
    p.style.setProperty('--ddc-empty-scale', scale.toFixed(5));
    p.dataset.emptyDesignW = String(designW);
    p.dataset.emptyDesignH = String(designH);
    p.dataset.emptyScale = scale.toFixed(5);
    p.__ddcEmptySizeSig = sig;
    try {
      if (!this._isContainerFixed?.()) this._resizeContainer?.();
    } catch {}
    return metrics;
  },


  _showEmptyPlaceholder() {
    // Avoid creating multiple placeholders
    if (this.cardContainer.querySelector('.ddc-placeholder')) return;
    const metrics = this._emptyPlaceholderMetrics_?.() || { designW: 1180, designH: 740, scale: 1, w: 1180, h: 740 };
    // Initially create the placeholder at (0,0) so that the resize logic can
    // compute an appropriate container size.  We will center it after the
    // container dimensions have been updated.
    const p = this._makePlaceholderAt(0, 0, metrics.w, metrics.h, metrics);
    this.cardContainer.appendChild(p);
    // Resize the container so its dimensions reflect the presence of the
    // placeholder.  Without this call the container width/height may be
    // reported as zero, preventing proper centering.
    this._resizeContainer();
    this._installEmptyPlaceholderCentering_?.();
    this._centerEmptyPlaceholderInViewport_?.(p);
    this._scheduleEmptyPlaceholderCenter_?.();
    // Update UI state (add button visibility, etc.)
    this._syncEmptyStateUI();
  },

  _hideEmptyPlaceholder() {
    this.cardContainer.querySelectorAll('.ddc-placeholder').forEach(n => n.remove());
    this._removeEmptyPlaceholderCentering_?.();
  },

  _ensurePlaceholderIfEmpty() {
    const realCards = this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)');
    if (realCards.length === 0) this._showEmptyPlaceholder();
        this._applyAutoScale?.();
    this._scheduleEmptyPlaceholderCenter_?.();
    this._syncEmptyStateUI();
  },


  _emptyPlaceholderVisibleFrame_() {
    const frameEl = this.__scaleOuter || this.cardContainer || this;
    const rect = frameEl?.getBoundingClientRect?.() || this.getBoundingClientRect?.();
    const fallback = this.getBoundingClientRect?.() || { left: 0, top: 0, right: window.innerWidth || 1, bottom: window.innerHeight || 1, width: window.innerWidth || 1, height: window.innerHeight || 1 };
    const base = rect && rect.width && rect.height ? rect : fallback;
    const winW = Math.max(1, window.innerWidth || document.documentElement?.clientWidth || base.right || 1);
    const winH = Math.max(1, window.innerHeight || document.documentElement?.clientHeight || base.bottom || 1);
    let left = Math.max(base.left || 0, 0);
    let top = Math.max(base.top || 0, 0);
    let right = Math.min(base.right || winW, winW);
    let bottom = Math.min(base.bottom || winH, winH);
    if (right - left < 40) {
      left = base.left || 0;
      right = base.right || (left + (base.width || winW));
    }
    if (bottom - top < 40) {
      top = base.top || 0;
      bottom = base.bottom || (top + (base.height || winH));
    }
    return { left, top, right, bottom, width: Math.max(1, right - left), height: Math.max(1, bottom - top) };
  },


  _centerEmptyPlaceholderInViewport_(placeholder = null) {
    try {
      const p = placeholder || this.cardContainer?.querySelector?.('.ddc-placeholder');
      const c = this.cardContainer;
      if (!p || !c || !p.isConnected) return;
      this._syncEmptyPlaceholderSize_?.(p);
      const frame = this._emptyPlaceholderVisibleFrame_?.();
      const contRect = c.getBoundingClientRect?.();
      if (!frame || !contRect) return;
      const designW = parseFloat(c.style.width || '') || c.offsetWidth || c.scrollWidth || Math.max(1, contRect.width);
      const designH = parseFloat(c.style.height || '') || c.offsetHeight || c.scrollHeight || Math.max(1, contRect.height);
      const scaleX = Math.max(0.0001, Number(this.__pointerScaleX || (designW ? contRect.width / designW : 1)) || 1);
      const scaleY = Math.max(0.0001, Number(this.__pointerScaleY || (designH ? contRect.height / designH : 1)) || 1);
      const pW = parseFloat(p.style.width || '') || p.offsetWidth || Math.max(1, p.getBoundingClientRect?.().width / scaleX || 1);
      const pH = parseFloat(p.style.height || '') || p.offsetHeight || Math.max(1, p.getBoundingClientRect?.().height / scaleY || 1);
      const targetX = frame.left + frame.width / 2;
      const targetY = frame.top + frame.height / 2;
      const desiredX = ((targetX - contRect.left) / scaleX) - (pW / 2);
      const desiredY = ((targetY - contRect.top) / scaleY) - (pH / 2);
      const maxX = Math.max(0, designW - pW);
      const maxY = Math.max(0, designH - pH);
      const x = Math.max(0, Math.min(maxX, Number.isFinite(desiredX) ? desiredX : 0));
      const y = Math.max(0, Math.min(maxY, Number.isFinite(desiredY) ? desiredY : 0));
      this._setCardPosition(p, x, y);
    } catch {}
  },


  _scheduleEmptyPlaceholderCenter_() {
    if (!this.cardContainer?.querySelector?.('.ddc-placeholder')) return;
    this._installEmptyPlaceholderCentering_?.();
    if (this.__emptyPlaceholderCenterRAF) return;
    this.__emptyPlaceholderCenterRAF = requestAnimationFrame(() => {
      this.__emptyPlaceholderCenterRAF = 0;
      this._syncEmptyPlaceholderCenterObservers_?.();
      this._centerEmptyPlaceholderInViewport_?.();
    });
  },


  _syncEmptyPlaceholderCenterObservers_() {
    try {
      if (!this.__emptyPlaceholderCenterRO) return;
      const targets = [this, this.__scaleOuter, this.cardContainer].filter(Boolean);
      const seen = this.__emptyPlaceholderObserved || new WeakSet();
      targets.forEach((target) => {
        if (!target || seen.has(target)) return;
        seen.add(target);
        try { this.__emptyPlaceholderCenterRO.observe(target); } catch {}
      });
      this.__emptyPlaceholderObserved = seen;
    } catch {}
  },


  _installEmptyPlaceholderCentering_() {
    try {
      if (!this.cardContainer?.querySelector?.('.ddc-placeholder')) return;
      if (!this.__emptyPlaceholderCenterHandler) {
        this.__emptyPlaceholderCenterHandler = () => this._scheduleEmptyPlaceholderCenter_?.();
        window.addEventListener('resize', this.__emptyPlaceholderCenterHandler, { passive: true });
        window.addEventListener('scroll', this.__emptyPlaceholderCenterHandler, true);
      }
      if (!this.__emptyPlaceholderCenterRO && typeof ResizeObserver !== 'undefined') {
        this.__emptyPlaceholderCenterRO = new ResizeObserver(() => this._scheduleEmptyPlaceholderCenter_?.());
        this.__emptyPlaceholderObserved = new WeakSet();
      }
      this._syncEmptyPlaceholderCenterObservers_?.();
    } catch {}
  },


  _removeEmptyPlaceholderCentering_() {
    try {
      if (this.__emptyPlaceholderCenterHandler) {
        window.removeEventListener('resize', this.__emptyPlaceholderCenterHandler);
        window.removeEventListener('scroll', this.__emptyPlaceholderCenterHandler, true);
        this.__emptyPlaceholderCenterHandler = null;
      }
      try { this.__emptyPlaceholderCenterRO?.disconnect?.(); } catch {}
      this.__emptyPlaceholderCenterRO = null;
      this.__emptyPlaceholderObserved = null;
      if (this.__emptyPlaceholderCenterRAF) {
        try { cancelAnimationFrame(this.__emptyPlaceholderCenterRAF); } catch {}
        this.__emptyPlaceholderCenterRAF = 0;
      }
    } catch {}
  },
};

export function installEmptyStateMethods(proto) {
  for (const [name, value] of Object.entries(emptyStateMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
