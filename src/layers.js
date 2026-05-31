/* Dashboard layer normalization, state, and layer menu helpers. */
const layerMethods = {
  _normalizeLayerId_(value, fallback = 'layer') {
    const raw = String(value ?? '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
    return raw || fallback;
  },

  _defaultDashboardLayer_() {
    return {
      id: 'standard',
      label: 'Standard',
      icon: 'mdi:layers-outline',
      color: '#60a5fa',
      default_active: true,
    };
  },

  _normalizeDashboardLayers_(layers = []) {
    const source = Array.isArray(layers) ? layers : [];
    const seen = new Set();
    return source
      .map((layer, index) => {
        if (!layer || typeof layer !== 'object') return null;
        const fallbackId = `layer-${index + 1}`;
        let id = this._normalizeLayerId_(
          layer.id || layer.layer_id || layer.label || layer.name || fallbackId,
          fallbackId
        );
        let suffix = 2;
        while (seen.has(id)) id = `${this._normalizeLayerId_(id, fallbackId)}-${suffix++}`;
        seen.add(id);
        const label = String(layer.label || layer.name || id).trim() || id;
        const icon = String(layer.icon || 'mdi:layers-outline').trim() || 'mdi:layers-outline';
        const color = String(layer.color || '#60a5fa').trim() || '#60a5fa';
        return {
          ...this._cloneJson_(layer),
          id,
          label,
          icon,
          color,
          default_active: layer.default_active !== false,
        };
      })
      .filter(Boolean);
  },

  _normalizeCardLayerIds_(value = []) {
    const source = Array.isArray(value)
      ? value
      : String(value ?? '')
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean);
    const validIds = new Set((Array.isArray(this.layers) ? this.layers : []).map((layer) => layer.id));
    const shouldFilter = validIds.size > 0;
    const next = [];
    source.forEach((layerId, index) => {
      const normalized = this._normalizeLayerId_(layerId, `layer-${index + 1}`);
      if (!normalized) return;
      if (shouldFilter && !validIds.has(normalized)) return;
      if (!next.includes(normalized)) next.push(normalized);
    });
    return next;
  },

  _getDefaultActiveLayerIds_() {
    const layers = Array.isArray(this.layers) ? this.layers : [];
    if (!layers.length) return [];
    const defaults = layers.filter((layer) => layer.default_active !== false).map((layer) => layer.id);
    return defaults.length ? defaults : layers.map((layer) => layer.id);
  },

  _getStoredActiveLayerIds_() {
    if (!this.layersEnabled) return null;
    try {
      const raw = localStorage.getItem(`ddc_layers_${this.storageKey || 'default'}`);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return null;
      const next = this._normalizeCardLayerIds_(parsed);
      return next;
    } catch {
      return null;
    }
  },

  _persistActiveLayerIds_() {
    try {
      localStorage.setItem(
        `ddc_layers_${this.storageKey || 'default'}`,
        JSON.stringify(Array.isArray(this.activeLayerIds) ? this.activeLayerIds : [])
      );
    } catch {}
  },

  _setDashboardLayers_(layers = [], { refresh = true, persist = true } = {}) {
    let normalized = this._normalizeDashboardLayers_(layers);
    if (this.layersEnabled && !normalized.length) {
      normalized = this._normalizeDashboardLayers_([this._defaultDashboardLayer_()]);
    }
    this.layers = normalized;
    const validIds = new Set(normalized.map((layer) => layer.id));
    const stored = this._getStoredActiveLayerIds_();
    const hasStored = Array.isArray(stored);
    const storedActive = hasStored ? stored.filter((id) => validIds.has(id)) : [];
    const current = Array.isArray(this.activeLayerIds) ? this.activeLayerIds.filter((id) => validIds.has(id)) : [];
    const nextActive = hasStored
      ? storedActive
      : (current.length ? current : this._getDefaultActiveLayerIds_());
    this.activeLayerIds = nextActive;
    if (persist) this._persistActiveLayerIds_();
    this._sanitizeResponsiveLayoutLayerMembership_?.();
    if (refresh) {
      this._renderLayersBar_?.();
      this._applyActiveTab?.();
      this._applyVisibility_?.();
    }
    return normalized;
  },

  _setActiveLayerIds_(ids = [], { persist = true, refresh = true } = {}) {
    if (!this.layersEnabled) {
      this.activeLayerIds = [];
      if (persist) this._persistActiveLayerIds_();
      if (refresh) {
        this._renderLayersBar_?.();
        this._applyLayerVisibilityChange_?.();
      }
      return [];
    }
    const validIds = new Set((Array.isArray(this.layers) ? this.layers : []).map((layer) => layer.id));
    const next = this._normalizeCardLayerIds_(ids).filter((id) => validIds.has(id));
    this.activeLayerIds = next;
    if (persist) this._persistActiveLayerIds_();
    if (refresh) {
      this._applyLayerVisibilityChange_?.();
      this._syncLayerTriggerState_?.();
    }
    return next;
  },

  _getWrapperLayerIds_(wrap) {
    if (!wrap) return [];
    const raw = wrap.dataset.layerIds;
    if (!raw) return [];
    try {
      return this._normalizeCardLayerIds_(JSON.parse(raw));
    } catch {
      return this._normalizeCardLayerIds_(raw);
    }
  },

  _setWrapperLayerIds_(wrap, ids = []) {
    if (!wrap) return [];
    const next = this._normalizeCardLayerIds_(ids);
    if (next.length) wrap.dataset.layerIds = JSON.stringify(next);
    else delete wrap.dataset.layerIds;
    return next;
  },

  _isWrapVisibleForActiveLayers_(wrap) {
    if (!this.layersEnabled) return true;
    const layerIds = this._getWrapperLayerIds_(wrap);
    if (!layerIds.length) return true;
    const active = Array.isArray(this.activeLayerIds) ? this.activeLayerIds : [];
    if (!active.length) return false;
    return layerIds.some((id) => active.includes(id));
  },

  _sanitizeResponsiveLayoutLayerMembership_() {
    if (!this._responsiveLayouts) return;
    const variants = this._responsiveLayoutVariantKeys_();
    variants.forEach((variantKey) => {
      const entries = Array.isArray(this._responsiveLayouts?.[variantKey]) ? this._responsiveLayouts[variantKey] : [];
      this._responsiveLayouts[variantKey] = entries.map((entry) => this._normalizeSavedCardEntry_(entry, entry));
    });
  },

  _hasLayerMenu_() {
    return !!this.layersEnabled && Array.isArray(this.layers) && this.layers.length > 0;
  },

  _getLayerSelectionSummary_() {
    const layers = Array.isArray(this.layers) ? this.layers : [];
    const validIds = new Set(layers.map((layer) => layer.id));
    const activeIds = (Array.isArray(this.activeLayerIds) ? this.activeLayerIds : []).filter((id) => validIds.has(id));
    return {
      layers,
      activeIds,
      activeSet: new Set(activeIds),
      allActive: !!layers.length && activeIds.length === layers.length,
    };
  },

  _removeLayerMenuDismissHandlers_() {
    try {
      if (this.__layerMenuDismissHandler) {
        document.removeEventListener('pointerdown', this.__layerMenuDismissHandler, true);
        this.__layerMenuDismissHandler = null;
      }
      if (this.__layerMenuEscapeHandler) {
        document.removeEventListener('keydown', this.__layerMenuEscapeHandler, true);
        this.__layerMenuEscapeHandler = null;
      }
    } catch {}
  },

  _closeLayersMenu_({ render = true } = {}) {
    this.__layersMenuOpen = false;
    this._removeLayerMenuDismissHandlers_?.();
    if (render) {
      try { this._renderTabs?.(); } catch {}
    }
  },

  _installLayerMenuDismissHandlers_() {
    this._removeLayerMenuDismissHandlers_?.();
    if (!this.__layersMenuOpen) return;
    this.__layerMenuDismissHandler = (ev) => {
      const menu = this.shadowRoot?.querySelector?.('.ddc-layer-menu');
      const path = typeof ev.composedPath === 'function' ? ev.composedPath() : [];
      if (menu && path.includes(menu)) return;
      this._closeLayersMenu_?.();
    };
    this.__layerMenuEscapeHandler = (ev) => {
      if (ev.key === 'Escape') {
        ev.stopPropagation?.();
        this._closeLayersMenu_?.();
      }
    };
    try {
      document.addEventListener('pointerdown', this.__layerMenuDismissHandler, true);
      document.addEventListener('keydown', this.__layerMenuEscapeHandler, true);
    } catch {}
  },

  _syncLayerTriggerState_() {
    if (!this.shadowRoot) return;
    const { layers, activeIds, activeSet, allActive } = this._getLayerSelectionSummary_?.() || {};
    const total = Array.isArray(layers) ? layers.length : 0;
    const activeCount = Array.isArray(activeIds) ? activeIds.length : 0;
    const trigger = this.shadowRoot.querySelector?.('.ddc-layer-trigger');
    if (trigger) {
      trigger.classList.toggle('active', !!this.__layersMenuOpen || (!!total && !allActive));
      trigger.setAttribute('aria-label', `Layers (${activeCount} of ${total} active)`);
      const badge = trigger.querySelector?.('.ddc-layer-count');
      if (badge) badge.textContent = String(activeCount);
      const meta = trigger.querySelector?.('.ddc-layer-trigger-meta');
      if (meta) meta.textContent = total ? `${activeCount} of ${total} active` : 'No layers';
    }
    const panelMeta = this.shadowRoot.querySelector?.('.ddc-layer-menu-head span');
    if (panelMeta) panelMeta.textContent = total ? `${activeCount} of ${total} active` : 'No layers';
    this.shadowRoot.querySelectorAll?.('.ddc-layer-option').forEach((btn) => {
      const isAll = btn.dataset.layerOption === 'all';
      const isActive = isAll ? allActive : activeSet?.has?.(btn.dataset.layerId);
      btn.classList.toggle('active', !!isActive);
      btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
      const meta = btn.querySelector?.('.ddc-layer-option-meta');
      if (meta) meta.textContent = isActive ? 'Visible' : 'Hidden';
    });
  },

  _createLayerOptionButton_(option = {}) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `ddc-layer-option ${option.active ? 'active' : ''}`.trim();
    btn.setAttribute('role', 'menuitemcheckbox');
    btn.setAttribute('aria-checked', option.active ? 'true' : 'false');
    btn.dataset.layerOption = option.id === '__all__' ? 'all' : 'layer';
    if (option.id !== '__all__') btn.dataset.layerId = option.id;
    btn.style.setProperty('--ddc-layer-accent', option.color || 'var(--primary-color, #8b5cf6)');
  
    const icon = document.createElement('ha-icon');
    icon.setAttribute('icon', option.icon || 'mdi:layers-triple-outline');
    icon.className = 'ddc-layer-option-icon';
    btn.appendChild(icon);
  
    const copy = document.createElement('span');
    copy.className = 'ddc-layer-option-copy';
    const label = document.createElement('strong');
    label.className = 'ddc-layer-option-label';
    label.textContent = option.label || option.id || 'Layer';
    const meta = document.createElement('small');
    meta.className = 'ddc-layer-option-meta';
    meta.textContent = option.active ? 'Visible' : 'Hidden';
    copy.append(label, meta);
    btn.appendChild(copy);
  
    const check = document.createElement('ha-icon');
    check.setAttribute('icon', 'mdi:check');
    check.className = 'ddc-layer-option-check';
    check.setAttribute('aria-hidden', 'true');
    btn.appendChild(check);
  
    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const { layers, activeSet } = this._getLayerSelectionSummary_?.() || {};
      if (!Array.isArray(layers) || !layers.length) return;
      if (option.id === '__all__') {
        this._setActiveLayerIds_(layers.map((layer) => layer.id));
        return;
      }
      const next = new Set(activeSet || []);
      if (next.has(option.id)) next.delete(option.id);
      else next.add(option.id);
      this._setActiveLayerIds_(Array.from(next));
    });
  
    btn.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        ev.stopPropagation();
        this._closeLayersMenu_?.();
        return;
      }
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(ev.key)) return;
      ev.preventDefault();
      ev.stopPropagation();
      const items = Array.from(this.shadowRoot?.querySelectorAll?.('.ddc-layer-option') || []);
      if (!items.length) return;
      const idx = items.indexOf(ev.currentTarget);
      let nextIdx = idx;
      if (ev.key === 'ArrowDown') nextIdx = (idx + 1) % items.length;
      if (ev.key === 'ArrowUp') nextIdx = (idx - 1 + items.length) % items.length;
      if (ev.key === 'Home') nextIdx = 0;
      if (ev.key === 'End') nextIdx = items.length - 1;
      items[nextIdx]?.focus?.();
    });
    return btn;
  },

  _appendLayersMenuToTabs_(bar) {
    if (!bar || !this._hasLayerMenu_?.()) return;
    const { layers, activeIds, activeSet, allActive } = this._getLayerSelectionSummary_();
    const wrap = document.createElement('div');
    wrap.className = 'ddc-layer-menu';
    wrap.setAttribute('role', 'presentation');
  
    const trigger = document.createElement('button');
    trigger.type = 'button';
    const showDetails = !!this.layersButtonDetails;
    trigger.className = `ddc-layer-trigger ${showDetails ? 'details' : 'compact'} ${this.__layersMenuOpen || !allActive ? 'active' : ''}`.trim();
    trigger.setAttribute('aria-haspopup', 'menu');
    trigger.setAttribute('aria-expanded', this.__layersMenuOpen ? 'true' : 'false');
    trigger.setAttribute('aria-label', `Layers (${activeIds.length} of ${layers.length} active)`);
    trigger.title = 'Layers';
  
    const triggerIcon = document.createElement('ha-icon');
    triggerIcon.setAttribute('icon', 'mdi:layers-triple-outline');
    trigger.appendChild(triggerIcon);
  
    const triggerCopy = document.createElement('span');
    triggerCopy.className = 'ddc-layer-trigger-copy';
    const triggerLabel = document.createElement('span');
    triggerLabel.className = 'ddc-layer-trigger-label';
    triggerLabel.textContent = 'Layers';
    const triggerMeta = document.createElement('small');
    triggerMeta.className = 'ddc-layer-trigger-meta';
    triggerMeta.textContent = layers.length ? `${activeIds.length} of ${layers.length} active` : 'No layers';
    triggerCopy.append(triggerLabel, triggerMeta);
    if (showDetails) trigger.appendChild(triggerCopy);
  
    const count = document.createElement('span');
    count.className = 'ddc-layer-count';
    count.textContent = String(activeIds.length);
    if (showDetails) trigger.appendChild(count);
  
    trigger.addEventListener('click', (ev) => {
      ev.stopPropagation();
      this.__layersMenuOpen = !this.__layersMenuOpen;
      this._renderTabs?.();
    });
    trigger.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        ev.stopPropagation();
        this._closeLayersMenu_?.();
        return;
      }
      if (ev.key === 'ArrowDown' || ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        ev.stopPropagation();
        if (!this.__layersMenuOpen) {
          this.__layersMenuOpen = true;
          this._renderTabs?.();
        }
        requestAnimationFrame(() => {
          this.shadowRoot?.querySelector?.('.ddc-layer-option')?.focus?.();
        });
      }
    });
    wrap.appendChild(trigger);
  
    if (this.__layersMenuOpen) {
      const panel = document.createElement('div');
      panel.className = 'ddc-layer-menu-panel';
      panel.setAttribute('role', 'menu');
      panel.setAttribute('aria-label', 'Layers');
      panel.addEventListener('click', (ev) => ev.stopPropagation());
      const panelHead = document.createElement('div');
      panelHead.className = 'ddc-layer-menu-head';
      panelHead.innerHTML = `
        <strong>Layers</strong>
        <span>${activeIds.length} of ${layers.length} active</span>
      `;
      panel.appendChild(panelHead);
  
      panel.appendChild(this._createLayerOptionButton_({
        id: '__all__',
        label: 'All',
        icon: 'mdi:layers-triple-outline',
        color: 'var(--primary-color, #8b5cf6)',
        active: allActive,
      }));
  
      layers.forEach((layer) => {
        panel.appendChild(this._createLayerOptionButton_({
          id: layer.id,
          label: layer.label || layer.id,
          icon: layer.icon || 'mdi:layers-outline',
          color: layer.color || '#8b5cf6',
          active: activeSet.has(layer.id),
        }));
      });
      wrap.appendChild(panel);
      requestAnimationFrame(() => this._installLayerMenuDismissHandlers_?.());
    }
  
    bar.appendChild(wrap);
  },

  _renderLayersBar_() {
    const bar = this.layersBar;
    if (bar) {
      bar.style.display = 'none';
      bar.innerHTML = '';
    }
    if (this.__renderingTabs) return;
    try { this._renderTabs?.(); } catch {}
  },
};

export function installLayerMethods(proto) {
  for (const [name, value] of Object.entries(layerMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
