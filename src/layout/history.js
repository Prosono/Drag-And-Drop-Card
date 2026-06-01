/*
 * Undo/redo history for layout changes.
 *
 * The history stack snapshots layout state around user edits so movement, resize, card edits, and other
 * mutations can be rolled backward or forward in edit mode.
 */

const layoutHistoryMethods = {

  _historyStacks_() {
    if (!Array.isArray(this.__undoStack)) this.__undoStack = [];
    if (!Array.isArray(this.__redoStack)) this.__redoStack = [];
    return { undo: this.__undoStack, redo: this.__redoStack };
  },


  _historyMaxDepth_() {
    return 60;
  },


  _historySnapshotSignature_(snapshot = null) {
    if (!snapshot || typeof snapshot !== 'object') return '';
    try {
      return JSON.stringify({
        activeLayoutKey: snapshot.activeLayoutKey || '',
        activeTab: snapshot.activeTab || '',
        cards: snapshot.cards || [],
        responsive_layouts: snapshot.responsive_layouts || null,
        connectors: snapshot.connectors || [],
        responsive_connectors: snapshot.responsive_connectors || null,
      });
    } catch {
      return '';
    }
  },


  _captureLayoutHistorySnapshot_(reason = '') {
    if (!this.cardContainer) return null;
    try { this._persistCurrentResponsiveProfileToMemory_?.(); } catch {}
    try { this._syncLiveCardConfigsIntoResponsiveLayouts_?.(); } catch {}

    const primaryKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    const activeKey = this._activeResponsiveLayoutKey
      || this._getRequestedResponsiveLayoutKey_?.()
      || primaryKey;
    const primaryCards = this._responsiveLayouts?.[primaryKey] || this._captureCurrentLayoutEntries_?.() || [];
    const responsiveLayouts = this._serializeResponsiveLayouts_
      ? this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts, primaryCards))
      : null;
    const activeConnectors = this._getCurrentConnectorEntries_
      ? this._cloneJson_(this._getCurrentConnectorEntries_())
      : this._cloneJson_(this._config?.connectors || []);
    const responsiveConnectors = this._serializeResponsiveConnectorLayouts_
      ? this._cloneJson_(this._serializeResponsiveConnectorLayouts_(this._responsiveConnectors, activeConnectors))
      : null;

    const snapshot = {
      reason,
      activeLayoutKey: activeKey,
      activeTab: this._normalizeTabId?.(this.activeTab || this.defaultTab) || this.activeTab || this.defaultTab || 'default',
      cards: this._cloneJson_(primaryCards),
      responsive_layouts: responsiveLayouts,
      connectors: activeConnectors || [],
      responsive_connectors: responsiveConnectors,
    };
    snapshot.signature = this._historySnapshotSignature_(snapshot);
    return snapshot;
  },


  _syncHistoryButtons_() {
    const { undo, redo } = this._historyStacks_();
    if (this.undoBtn) {
      this.undoBtn.disabled = !undo.length;
      this.undoBtn.setAttribute('aria-disabled', undo.length ? 'false' : 'true');
      this.undoBtn.title = undo.length ? 'Undo (Ctrl+Z)' : 'Nothing to undo';
    }
    if (this.redoBtn) {
      this.redoBtn.disabled = !redo.length;
      this.redoBtn.setAttribute('aria-disabled', redo.length ? 'false' : 'true');
      this.redoBtn.title = redo.length ? 'Redo (Ctrl+Y)' : 'Nothing to redo';
    }
  },


  _trimHistoryStack_(stack = []) {
    const max = this._historyMaxDepth_();
    while (stack.length > max) stack.shift();
  },


  _resetLayoutHistory_(reason = 'reset') {
    this.__undoStack = [];
    this.__redoStack = [];
    this.__historyCurrentSnapshot = this._captureLayoutHistorySnapshot_(reason);
    this._syncHistoryButtons_?.();
  },


  _recordLayoutHistoryCheckpoint_(reason = 'change') {
    if (this.__historyRestoring || this._loading || !this.cardContainer) return;
    const next = this._captureLayoutHistorySnapshot_(reason);
    if (!next) return;

    const nextSig = next.signature || this._historySnapshotSignature_(next);
    const current = this.__historyCurrentSnapshot;
    const currentSig = current?.signature || this._historySnapshotSignature_(current);

    if (!current) {
      this.__historyCurrentSnapshot = next;
      this._syncHistoryButtons_?.();
      return;
    }

    if (nextSig === currentSig) {
      this.__historyCurrentSnapshot = next;
      this._syncHistoryButtons_?.();
      return;
    }

    const { undo, redo } = this._historyStacks_();
    undo.push(this._cloneJson_(current));
    this._trimHistoryStack_(undo);
    redo.length = 0;
    this.__historyCurrentSnapshot = next;
    this._syncHistoryButtons_?.();
  },


  _scheduleHistoryPersist_(reason = 'history') {
    this._markDirty?.(reason);
    if (!this.autoSave || !this.editMode || this._loading) return;
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => this._saveLayout(true), this.autoSaveDebounce);
  },


  async _applyLayoutHistorySnapshot_(snapshot = null, reason = 'history') {
    if (!snapshot) return false;
    const prevSuppressCardAnimation = !!this.__suppressCardAnimation;
    this.__historyRestoring = true;
    this.__suppressCardAnimation = true;
    try {
      const primaryKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
      this._responsiveLayouts = this._normalizeResponsiveLayouts_(snapshot.cards || [], snapshot.responsive_layouts || null);
      this.sidebarCards = [];
      this._responsiveConnectors = this._normalizeResponsiveConnectorLayouts_(snapshot.connectors || [], snapshot.responsive_connectors || null);
      this._syncConnectorLayoutsToConfig_?.();

      const variants = this._responsiveLayoutVariantKeys_?.() || Object.keys(this._responsiveLayouts || {});
      const targetKey = variants.includes(snapshot.activeLayoutKey) ? snapshot.activeLayoutKey : (this._activeResponsiveLayoutKey || primaryKey);
      const split = this._splitResponsiveLayoutKey_?.(targetKey) || {};
      this._activeResponsiveLayoutKey = targetKey;
      this._activeResponsiveProfile = split.profile || this._activeResponsiveProfile || 'desktop';
      this.activeTab = this._normalizeTabId?.(snapshot.activeTab || this.activeTab || this.defaultTab) || this.activeTab || this.defaultTab;

      const entries = this._responsiveLayouts?.[targetKey] || this._responsiveLayouts?.[primaryKey] || [];
      await this._buildCardsFromEntries_(entries);
      this._renderSidebar_?.();

      try {
        const primaryCards = this._responsiveLayouts?.[primaryKey] || snapshot.cards || [];
        this._config = {
          ...(this._config || {}),
          cards: this._cloneJson_(primaryCards),
          responsive_layouts: this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts, primaryCards)),
        };
      } catch {}

      try { this._renderTabs?.(); this._renderLayersBar_?.(); this._applyActiveTab?.(); } catch {}
      try { this._applyVisibility_?.(); } catch {}
      try { this._renderConnectors_?.(); } catch {}
      this._resizeContainer?.();
      this._applyAutoScale?.();
      this._syncEmptyStateUI?.();
      this.__historyCurrentSnapshot = this._cloneJson_(snapshot);
      this.__historyCurrentSnapshot.signature = snapshot.signature || this._historySnapshotSignature_(snapshot);
      this._scheduleHistoryPersist_(reason);
      return true;
    } catch (err) {
      console.warn('[drag-and-drop-card] Failed to apply layout history snapshot', err);
      this._toast?.('Could not restore layout history.');
      return false;
    } finally {
      this.__suppressCardAnimation = prevSuppressCardAnimation;
      this.__historyRestoring = false;
      this._syncHistoryButtons_?.();
    }
  },


  async _undoLayoutHistory_() {
    const { undo, redo } = this._historyStacks_();
    if (!undo.length) {
      this._syncHistoryButtons_?.();
      this._toast?.('Nothing to undo.');
      return false;
    }

    const current = this._captureLayoutHistorySnapshot_('redo-point') || this.__historyCurrentSnapshot;
    const target = undo.pop();
    if (current) {
      redo.push(this._cloneJson_(current));
      this._trimHistoryStack_(redo);
    }
    const ok = await this._applyLayoutHistorySnapshot_(target, 'undo');
    if (ok) this._toast?.('Undo applied.');
    return ok;
  },


  async _redoLayoutHistory_() {
    const { undo, redo } = this._historyStacks_();
    if (!redo.length) {
      this._syncHistoryButtons_?.();
      this._toast?.('Nothing to redo.');
      return false;
    }

    const current = this._captureLayoutHistorySnapshot_('undo-point') || this.__historyCurrentSnapshot;
    const target = redo.pop();
    if (current) {
      undo.push(this._cloneJson_(current));
      this._trimHistoryStack_(undo);
    }
    const ok = await this._applyLayoutHistorySnapshot_(target, 'redo');
    if (ok) this._toast?.('Redo applied.');
    return ok;
  },


    _updateApplyBtn() {
    if (this.applyLayoutBtn) this.applyLayoutBtn.disabled = !this.__dirty;
  },

  _syncToolbarAutoSaveState_() {
    const btn = this.toolbarAutoSaveBtn || this.shadowRoot?.querySelector?.('#toolbarAutoSaveBtn');
    if (!btn) return;
    const enabled = this.autoSave !== false;
    btn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    btn.title = enabled ? 'Auto-save is on' : 'Auto-save is off';
    btn.dataset.tooltip = enabled ? 'Auto-save is on' : 'Auto-save is off';
    const state = btn.querySelector?.('.ddc-autosave-state');
    if (state) state.textContent = enabled ? 'On' : 'Off';
  },

  _setToolbarAutoSave_(enabled = true) {
    const next = !!enabled;
    this.autoSave = next;
    this._config = {
      ...(this._config || {}),
      auto_save: next,
      auto_save_debounce: this.autoSaveDebounce ?? 800,
    };
    if (!next) clearTimeout(this._saveTimer);
    this._syncToolbarAutoSaveState_?.();
    this._markDirty?.('toolbar-autosave');
    try {
      this.dispatchEvent(new CustomEvent('config-changed', {
        detail: { config: { type: 'custom:drag-and-drop-card', ...(this._config || {}) } },
        bubbles: true,
        composed: true,
      }));
    } catch {}
    if (next && this.editMode && !this._loading) {
      clearTimeout(this._saveTimer);
      this._saveTimer = setTimeout(() => this._saveLayout(true), this.autoSaveDebounce || 800);
    }
  },

  _markDirty(reason='') {
    this.__dirty = true;
    this._updateApplyBtn();
    this._dbgPush?.('dirty', 'Marked dirty', { reason });
  },
};

export function installLayoutHistoryMethods(proto) {
  for (const [name, value] of Object.entries(layoutHistoryMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
