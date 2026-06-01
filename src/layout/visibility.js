/*
 * Card visibility condition evaluation.
 *
 * Visibility rules are applied after Home Assistant state updates and layout rebuilds so view mode hides
 * cards according to entity conditions while edit mode can still show everything for editing.
 */

/* Card visibility, active tab/layer display, and overlap visibility helpers. */
const visibilityMethods = {
  _evaluateVisibility_(visList) {
    try {
      const hass = this.hass || this._hass;
      // If no conditions defined, always visible
      if (!Array.isArray(visList) || visList.length === 0) return true;
      /**
       * Recursively evaluate a single condition or a group of conditions.  The
       * visibility editor supports nested groups (and/or) as well as leaf
       * conditions such as state, numeric_state, screen and user.  Unknown
       * condition types default to passing.
       *
       * @param {Object} cond A visibility condition or group
       * @returns {boolean} true if the condition/group passes
       */
      const evalCond = (cond) => {
        if (!cond || typeof cond !== 'object') return true;
        const type = cond.condition || cond.type || 'state';
        // Group: AND / OR
        if (type === 'and' || type === 'or') {
          const children = Array.isArray(cond.conditions) ? cond.conditions : [];
          // Empty group passes by default
          if (children.length === 0) return true;
          if (type === 'and') {
            return children.every((child) => evalCond(child));
          }
          // type === 'or'
          return children.some((child) => evalCond(child));
        }
        if (type === 'state') {
          const entity = cond.entity;
          if (!entity) return true;
          const stateObj = hass?.states?.[entity];
          if (!stateObj) return false;
          const st = String(stateObj.state ?? '');
          if (cond.state !== undefined) {
            const target = Array.isArray(cond.state) ? cond.state : [cond.state];
            return target.some((v) => String(v) === st);
          }
          if (cond.state_not !== undefined) {
            const target = Array.isArray(cond.state_not) ? cond.state_not : [cond.state_not];
            return !target.some((v) => String(v) === st);
          }
          // No state specified -> pass
          return true;
        }
        if (type === 'numeric_state') {
          const entity = cond.entity;
          if (!entity) return true;
          const stateObj = hass?.states?.[entity];
          if (!stateObj) return false;
          const val = parseFloat(stateObj.state);
          if (isNaN(val)) return false;
          if (cond.above !== undefined && !(val > Number(cond.above))) return false;
          if (cond.below !== undefined && !(val < Number(cond.below))) return false;
          return true;
        }
        if (type === 'screen') {
          const mq = cond.media_query || cond.query;
          if (!mq || typeof mq !== 'string') return true;
          try { return window.matchMedia(mq).matches; } catch { return true; }
        }
        if (type === 'user') {
          const users = Array.isArray(cond.users) ? cond.users : (cond.user ? [cond.user] : []);
          if (!users.length) return true;
          // In Home Assistant, hass.user?.id contains the current user ID
          const uid = hass?.user?.id || hass?.user?.id || null;
          if (!uid) return true;
          return users.includes(uid);
        }
        // Unknown types pass
        return true;
      };
      // Top-level list uses implicit AND semantics (all must pass)
      return visList.every((c) => evalCond(c));
    } catch (e) {
      console.warn('[ddc:visibility] evaluate error', e);
      return true;
    }
  }

  /**
   * Apply visibility conditions to all card wrappers. When not in edit mode,
   * wrappers with conditions that evaluate to false are hidden by setting
   * display: none; otherwise they are shown. Cards are always visible in
   * edit mode. Call this after setting hass or updating card configs.
   */,

  _applyVisibility_() {
    try {
      const wraps = this.cardContainer?.querySelectorAll?.('.card-wrapper') || [];
      for (const wrap of wraps) {
        if (!wrap || !wrap.firstElementChild) continue;
        this._applyWrapDisplayState_(wrap);
      }
      this._requestPreviewOutsideCardsSync_?.();
    } catch (e) {
      console.warn('[ddc:visibility] apply error', e);
    }
  },

  _shouldWrapDisplayForCurrentContext_(wrap) {
    if (!wrap || !wrap.firstElementChild) return false;
    const currentTabId = this._normalizeTabId(this.activeTab);
    const tabId = wrap.dataset.tabId ? this._normalizeTabId(wrap.dataset.tabId) : this.defaultTab;
    const passesActiveTab = !this.tabs || !this.tabs.length || tabId === currentTabId;
    const passesLayers = this._isWrapVisibleForActiveLayers_(wrap);
    if (!passesActiveTab || !passesLayers) return false;
    if (this.editMode) return true;
    const cfg = this._extractCardConfig(wrap.firstElementChild) || {};
    const visList = cfg.visibility;
    return this._evaluateVisibility_(visList);
  },

  _applyWrapDisplayState_(wrap, { clearSelectionOnHide = false } = {}) {
    if (!wrap) return { changed: false, becameVisible: false, becameHidden: false, visible: false };
    const shouldShow = !!this._shouldWrapDisplayForCurrentContext_(wrap);
    const wasHidden = wrap.classList.contains('ddc-hidden') || wrap.style.display === 'none' || wrap.inert === true;

    if (shouldShow) {
      wrap.style.display = '';
      wrap.inert = false;
      wrap.classList.remove('ddc-hidden');
    } else {
      wrap.style.display = 'none';
      wrap.inert = true;
      wrap.classList.add('ddc-hidden');
      wrap.classList.remove('ddc-selected');
      if (clearSelectionOnHide && this._selectedWrap === wrap) {
        try { this._clearSelection?.(); } catch {}
      }
    }

    const isHidden = wrap.classList.contains('ddc-hidden') || wrap.style.display === 'none' || wrap.inert === true;
    return {
      changed: wasHidden !== isHidden,
      becameVisible: wasHidden && !isHidden,
      becameHidden: !wasHidden && isHidden,
      visible: !isHidden,
    };
  },

  _applyLayerVisibilityChange_() {
    const wraps = this.cardContainer?.querySelectorAll?.('.card-wrapper') || [];
    let changed = false;
    const becameVisible = [];
    wraps.forEach((wrap) => {
      const result = this._applyWrapDisplayState_(wrap, { clearSelectionOnHide: true });
      if (result.changed) changed = true;
      if (result.becameVisible) becameVisible.push(wrap);
    });
    try {
      if (this.__layersMenuOpen) this._syncLayerTriggerState_?.();
      else this._renderLayersBar_?.();
    } catch {}
    if (changed) {
      try {
        this._hydrateVisibleDeferredCards_?.(becameVisible).catch?.(() => {});
      } catch {}
      try { this._animateCards?.(becameVisible, { replay: true, reason: 'layer-change' }); } catch {}
      try { this._renderConnectors_?.(); } catch {}
    }
  },

  _isWrapperVisibleForOverlap_(wrap) {
    if (!wrap || wrap.dataset?.placeholder || wrap.classList?.contains?.('ddc-placeholder')) return false;
    if (typeof this._shouldWrapDisplayForCurrentContext_ === 'function' && !this._shouldWrapDisplayForCurrentContext_(wrap)) {
      return false;
    }
    if (wrap.classList?.contains?.('ddc-hidden') || wrap.style?.display === 'none' || wrap.inert === true) {
      return false;
    }
    try {
      const cs = getComputedStyle(wrap);
      if (cs.display === 'none' || cs.visibility === 'hidden') return false;
    } catch {}
    return true;
  },

  _getOverlapCandidateWrappers_(ignoreSet = new Set()) {
    if (!this.cardContainer) return [];
    return Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'))
      .filter((wrap) => !ignoreSet?.has?.(wrap) && this._isWrapperVisibleForOverlap_(wrap));
  }













    /**
     * Synchronise the width of the tabs bar with the visible width of the card
     * container. When the auto-scaling logic shrinks the canvas, the tabs
     * should shrink too rather than spanning the entire host width. This
     * helper queries the scale wrapper (if present) or falls back to the
     * container itself to derive the actual visual width and applies it
     * directly to the tabs bar. For vertical (left) tabs we reset any
     * widths to allow the rail to size naturally.
     */,
};

export function installVisibilityMethods(proto) {
  for (const [name, value] of Object.entries(visibilityMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
