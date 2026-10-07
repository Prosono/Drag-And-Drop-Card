export function normalizeStorageMode(value) {
  return value === 'lovelace' ? 'lovelace' : 'backend';
}

// Sort object keys so a HA round-trip does not turn a save echo into an edit.
export function configFingerprint(value) {
  const sort = (item) => Array.isArray(item) ? item.map(sort)
    : item && typeof item === 'object'
      ? Object.fromEntries(Object.keys(item).sort().filter((key) => item[key] !== undefined).map((key) => [key, sort(item[key])]))
      : item;
  return JSON.stringify(sort(value || {}));
}

export function lovelaceLayoutSnapshot(config = {}) {
  const { cards = [], responsive_layouts, responsiveLayouts, packages = [], ...options } = config;
  const baseCards = Array.isArray(cards) ? cards : [];
  const byId = new Map(baseCards.filter((entry) => entry?.id).map((entry) => [entry.id, entry]));
  const sync = (value) => {
    if (Array.isArray(value)) return value.filter((entry) => byId.has(entry?.id)).map((entry) => ({ ...entry }));
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, sync(item)]));
    return value;
  };
  // Top-level cards own membership and the primary layout. Compact responsive
  // entries inherit their config as usual; explicit per-profile overrides stay.
  const sourceLayouts = responsive_layouts ?? responsiveLayouts;
  const layouts = sourceLayouts && typeof sourceLayouts === 'object' && !Array.isArray(sourceLayouts) ? sync(sourceLayouts) : {};
  layouts.desktop_landscape = baseCards;
  return {
    cards: baseCards,
    responsive_layouts: layouts,
    packages,
    options,
  };
}

const methods = {
  _getStorageMode_() {
    return normalizeStorageMode(this._config?.storage_mode);
  },

  async _changeStorageMode_(value) {
    const mode = normalizeStorageMode(value);
    if (mode === this._getStorageMode_()) return;
    if (!this._hasHassWebSocketApi_() || this._getLovelace?.()?.mode === 'yaml') {
      throw new Error('Changing storage mode requires a UI-managed Lovelace dashboard with write access.');
    }
    if (this.__booting) throw new Error('Wait for the dashboard to finish loading before changing storage mode.');
    const operation = this._captureStorageOperation_();
    clearTimeout(this._saveTimer);
    await this.__saveLayoutChain;
    if (!this._isStorageOperationCurrent_(operation)) throw new Error('Dashboard changed before the storage switch. Please reload.');
    this._persistCurrentResponsiveProfileToMemory_?.({ syncMembership: true });
    this._syncLiveCardConfigsIntoResponsiveLayouts_?.();
    const cards = this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || this._captureCurrentLayoutEntries_?.() || [];
    const options = { ...this._exportableOptions(), storage_mode: mode };
    const packages = this._exportDashboardPackages_?.() || [];
    const copyToBackend = async () => {
      if (mode !== 'backend') return;
      if (!this._backendOK || !this.storageKey) throw new Error('The DDC backend must be connected before switching back.');
      await this._saveLayoutToBackend(this.storageKey, {
        version: 3, updated_at: new Date().toISOString(), options, cards,
        responsive_layouts: this._serializeResponsiveLayouts_(this._responsiveLayouts, cards), packages,
      }, { allowModeSwitch: true });
      if (!this._isStorageOperationCurrent_(operation)) throw new Error('Dashboard changed during the storage switch. Please reload.');
    };
    // Persist the mode together with the visible layout, never only the flag.
    // Do not change the active mode until Home Assistant accepts this write.
    const saved = await this._persistThisCardConfigToStorage_({
      captureLive: false, configPatch: { ...options, packages }, checkForExternalChanges: true,
      beforeSave: copyToBackend,
    });
    if (!saved) throw new Error('Home Assistant could not save the storage mode.');
    if (!this._isStorageOperationCurrent_(operation)) throw new Error('Dashboard changed during the storage switch. Please reload.');
    this.__lastSyncedDashboardPayload = null;
    this.__lastSyncedDashboardStorageKey = '';
    this.__dirty = false;
    this._updateApplyBtn?.();
    this._updateStoreBadge?.();
  },
};

export function installStorageModeMethods(proto) {
  for (const [name, value] of Object.entries(methods)) {
    Object.defineProperty(proto, name, { value, configurable: true, writable: true });
  }
}
