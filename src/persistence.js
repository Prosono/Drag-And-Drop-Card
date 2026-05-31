const persistenceMethods = {
  // ---------------- Dashboard URL helpers ----------------
  _getCurrentDashboardUrlPath_() {
    // e.g. "/", "/lovelace/0", "/myboard/0", "/lovelace-myboard/0"
    const path = (window.location.pathname || "/").replace(/^\/+/, "");
    const first = path.split("/")[0] || "lovelace";

    // Primary dashboard uses "/lovelace"
    if (first === "lovelace") return null;

    // Additional dashboards: first segment is the url_path (works for "/myboard" and "/lovelace-myboard")
    return first;
  },

  // ---------------- Storage-mode persistence (Visual Editor path) ----------------

  // Ensure this card has a persistent id in its config (stored in Lovelace)
  async _ensureCardIdSeededInStorage_() {
    if (this.config?.id) return this.config.id;

    const id = (crypto?.randomUUID ? crypto.randomUUID() : ("ddc_" + Math.random().toString(36).slice(2)));
    this.config = { ...this.config, id }; // in-memory immediately

    try {
      const url_path = this._getCurrentDashboardUrlPath_();
      const ll = await this.hass.callWS(url_path ? { type: "lovelace/config", url_path } : { type: "lovelace/config" });

      const hit = this._findThisCardPathRecursive_(ll, (c) =>
        c?.type === "custom:drag-and-drop-card" && (!c.id || c.id === id)
      );
      if (!hit) return id;

      const { viewIndex, cardIndex, parentPath } = hit;
      const view = ll.views[viewIndex];
      const curr = this._getCardByPath_(view, parentPath, cardIndex);
      const updated = { ...curr, id };
      this._setCardByPath_(view, parentPath, cardIndex, updated);

      // SAVE with url_path when present
      await this.hass.callWS(
        url_path
          ? { type: "lovelace/config/save", url_path, config: ll }
          : { type: "lovelace/config/save", config: ll }
      );
    } catch (_) {
      // YAML dashboards or permission issues: ignore; we still keep the in-memory id
    }
    return id;
  },

  // Persist this._config back into the stored card (Storage dashboards)
  async _persistThisCardConfigToStorage_() {
    await this._ensureCardIdSeededInStorage_();
    try {
      this._persistCurrentResponsiveProfileToMemory_?.({ syncMembership: true });
      this._syncLiveCardConfigsIntoResponsiveLayouts_?.();
    } catch {}
    const desktopCards = this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || this._captureCurrentLayoutEntries_?.() || [];
    const responsiveLayouts = this._serializeResponsiveLayouts_
      ? this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts, desktopCards))
      : undefined;

    // Build what we want to merge (like Visual Editor does at top-level)
    const partial = {
      type: "custom:drag-and-drop-card",
      ...this._config,
      id: this.config?.id,
      cards: this._cloneJson_(desktopCards),
    };
    if (responsiveLayouts) partial.responsive_layouts = responsiveLayouts;

    const url_path = this._getCurrentDashboardUrlPath_();

    // LOAD
    const ll = await this.hass.callWS(url_path ? { type: "lovelace/config", url_path } : { type: "lovelace/config" });

    // FIND our card by type + id (supports nesting)
    const hit = this._findThisCardPathRecursive_(ll, (c) =>
      c?.type === "custom:drag-and-drop-card" && c?.id === this.config?.id
    );
    if (!hit) throw new Error("Card not found in Lovelace config");

    const { viewIndex, cardIndex, parentPath } = hit;
    const view = ll.views[viewIndex];

    // MERGE + WRITE
    const currentCard = this._getCardByPath_(view, parentPath, cardIndex);
    const merged = { ...currentCard, ...partial };
    this._setCardByPath_(view, parentPath, cardIndex, merged);

    // SAVE (respect url_path)
    await this.hass.callWS(
      url_path
        ? { type: "lovelace/config/save", url_path, config: ll }
        : { type: "lovelace/config/save", config: ll }
    );

    // Apply locally
    this.config = merged;
    this.requestUpdate?.();
  },

  // ---- Tree helpers (unchanged) ----
  _findThisCardPathRecursive_(llConfig, predicate) {
    const views = llConfig?.views || [];
    for (let vi = 0; vi < views.length; vi++) {
      const hit = this._findInCardTree_(views[vi], predicate);
      if (hit) return { viewIndex: vi, ...hit };
    }
    return null;
  },

  _findInCardTree_(node, predicate, parentPath = []) {
    const cards = node?.cards || [];
    for (let ci = 0; ci < cards.length; ci++) {
      const c = cards[ci];
      if (predicate(c)) return { cardIndex: ci, parentPath };
      if (c?.cards?.length) {
        const sub = this._findInCardTree_(c, predicate, parentPath.concat(ci));
        if (sub) return sub;
      }
    }
    return null;
  },

  _getCardByPath_(view, parentPath, cardIndex) {
    let container = view;
    for (const idx of (parentPath || [])) container = container.cards[idx];
    return container.cards[cardIndex];
  },

  _setCardByPath_(view, parentPath, cardIndex, value) {
    let container = view;
    for (const idx of (parentPath || [])) container = container.cards[idx];
    container.cards[cardIndex] = value;
  },

  _getLovelace() {
    // Walk up from this element through shadow roots
    let hop = 0, host = this;
    while (host && hop++ < 20) {
      const root = host.getRootNode?.();
      const rHost = root?.host;
      if (rHost?.tagName === 'HUI-ROOT') return rHost.lovelace;
      host = rHost || host.parentElement;
    }
    // Breadth-first fallback
    const seen = new Set(), q = [document];
    while (q.length) {
      const n = q.shift();
      if (!n || seen.has(n)) continue;
      seen.add(n);
      if (n.host?.tagName === 'HUI-ROOT') return n.host.lovelace;
      if (n.tagName === 'HUI-ROOT') return n.lovelace;
      if (n.shadowRoot) q.push(n.shadowRoot);
      if (n.children) for (const c of n.children) q.push(c);
    }
    return undefined;
  },

  _scanDdcCards(cfg) {
    const hits = []; // { view:number, path:string[], card:object }
    const push = (view, path, obj) => {
      if (obj?.type === 'custom:drag-and-drop-card') hits.push({ view, path: [...path], card: obj });
    };
    const visit = (node, viewIdx, path) => {
      if (!node) return;
      if (Array.isArray(node)) { node.forEach((n, i) => visit(n, viewIdx, path.concat(i))); return; }
      if (typeof node !== 'object') return;

      if ('type' in node) push(viewIdx, path, node);

      for (const [k, v] of Object.entries(node)) {
        if (k === 'views' && Array.isArray(v)) v.forEach((vv, i) => visit(vv, i, ['views', i]));
        else if (Array.isArray(v)) visit(v, viewIdx, path.concat(k));
        else if (v && typeof v === 'object') visit(v, viewIdx, path.concat(k));
      }
    };
    visit(cfg, -1, []);
    return hits;
  },

  async _persistOptionsToYaml(opts, { prevKey = null, patchAllInCurrentViewIfNoKey = false } = {}) {
    opts = this._normalizeDashboardOptions_(opts || {}, { forceAutoResize: true });
    try {
      const ll = this._getLovelace();
      if (!ll) { console.debug('[ddc:import] persist: no lovelace root'); return false; }
      if (typeof ll.saveConfig !== 'function') { console.debug('[ddc:import] persist: dashboard not in Storage mode'); return false; }

      // Deep clone to avoid mutating live config
      const cfg = JSON.parse(JSON.stringify(ll.config));
      const hits = this._scanDdcCards(cfg);
      const curView = ll.current_view ?? 0;

      console.debug('[ddc:import] persist: found DDC cards', hits.map(h => ({ view: h.view, path: h.path.join('.'), storage_key: h.card.storage_key || null })));

      const newKey = opts?.storage_key ?? null;
      const keys = [];
      if (prevKey) keys.push(prevKey);
      if (newKey) keys.push(newKey);
      if (this.storageKey) keys.push(this.storageKey);
      if (this._config?.storage_key) keys.push(this._config.storage_key);

      // Prefer exact key matches (either previous or new)
      let targets = hits.filter(h => h.card.storage_key && keys.includes(h.card.storage_key));

      // If no exact match: if only one DDC in current view, target it
       if (!targets.length) {
        const inCur = hits.filter(h => h.view === curView);
         if (inCur.length === 1) targets = inCur;   // safe only if exactly one
         // else: no target -> abort instead of touching multiple cards
       }

      // As a last resort, if there is only one DDC overall, patch it
      if (!targets.length && hits.length === 1) targets = hits;

      if (!targets.length) {
        console.debug('[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.', { prevKey, newKey, storageKey: this.storageKey });
        return false;
      }

       // Build a patch for options ONLY - never stamp a global storage_key into multiple cards
       const basePatch = { type: 'custom:drag-and-drop-card', ...opts };
       // Remove any incoming storage_key so it doesn't overwrite per-card keys accidentally
       if ('storage_key' in basePatch) delete basePatch.storage_key;
       if ('storageKey' in basePatch)  delete basePatch.storageKey;

       for (const t of targets) {
         // Resolve the YAML object to patch
         let ref = cfg;
         for (const seg of t.path) ref = ref[seg];

         // Remember the card's existing key (support legacy camelCase & nested)
         const existingKey =
           ref?.storage_key ?? ref?.storageKey ?? ref?.options?.storage_key ?? ref?.options?.storageKey ?? null;

         // Decide if this specific card is being renamed (only when prevKey->newKey and it matches)
         const shouldRename = !!(prevKey && newKey && existingKey === prevKey && newKey !== prevKey);

         // Apply options WITHOUT a key
         // Merge options onto the card itself
         Object.assign(ref, basePatch);

         // Additionally merge into nested `options` object if present. Some YAML dashboards
         // wrap card options under an `options` key; updating both ensures screen saver
         // and other settings persist regardless of structure. Note: do not copy type or
         // storage_key into nested options.
         if (ref && typeof ref.options === 'object' && ref.options !== null) {
           for (const [k, v] of Object.entries(opts || {})) {
             if (k === 'storage_key' || k === 'storageKey' || k === 'type') continue;
             ref.options[k] = v;
           }
         }

         // Restore / set the right key per-card
         if (shouldRename) {
           ref.storage_key = String(newKey);
         } else if (existingKey) {
           ref.storage_key = String(existingKey);
         }
         // Clean up legacy field
         if ('storageKey' in ref) delete ref.storageKey;
       }

      console.debug('[ddc:import] persist -> saving', { patched: targets.length, keysTried: keys, patch });
      await ll.saveConfig(cfg);
      return true;
    } catch (e) {
      console.warn('[ddc:import] persist error', e);
      return false;
    }
  },

  _queueSave(reason='auto') {
    this._recordLayoutHistoryCheckpoint_?.(reason);
    // Always mark dirty so Apply becomes enabled
    this._markDirty(reason);
    // only queue save when autosave is enabled, not loading, and in edit mode
    if (!this.autoSave) return;
    // skip saving while the layout is still loading
    if (this._loading) return;
    // respect the user expectation that saving should only happen in edit mode
    if (!this.editMode) return;
    this._dbgPush('autosave', 'Queued', { reason, debounce: this.autoSaveDebounce });
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => this._saveLayout(true), this.autoSaveDebounce);
  },

  async _saveLayoutNow_() {
    return this._saveLayout(false);
  },

  async _saveLayout(silent = true) {
    this._persistCurrentResponsiveProfileToMemory_();
    try { this._syncLiveCardConfigsIntoResponsiveLayouts_?.(); } catch {}
    this._recordLayoutHistoryCheckpoint_?.('save');
    const desktopCards = this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_()] || this._captureCurrentLayoutEntries_();
    const savedAt = new Date().toISOString();
    const payload = {
       version: 3,
       updated_at: savedAt,
       options: this._exportableOptions(),
       cards: desktopCards,
       responsive_layouts: this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts, desktopCards)),
       packages: this._exportDashboardPackages_(),
     };
    try {
      this._config = {
        ...(this._config || {}),
        cards: this._cloneJson_(desktopCards),
        responsive_layouts: this._cloneJson_(payload.responsive_layouts),
      };
      this._deleteParkedSidebarOptions_(this._config);
    } catch {}

    try { localStorage.setItem(`ddc_local_${this.storageKey || 'default'}`, JSON.stringify(payload)); } catch {}

    if (!this.storageKey) { if (!silent) this._toast('Saved locally (no storage_key set).');
      this.__dirty = false; this._updateApplyBtn();
      return; }

    try {
      await this._saveLayoutToBackend(this.storageKey, payload);
      if (!silent) {
        try { await this._persistThisCardConfigToStorage_?.(); } catch (persistErr) {
          console.warn('[drag-and-drop-card] Could not persist layout to Lovelace storage', persistErr);
        }
      }
      if (!silent) this._toast('Layout saved.');
      this.__dirty = false; this._updateApplyBtn();
    } catch (e) {
      console.error('Backend save failed', e);
      this._dbgPush('save', 'Backend save failed', { error: String(e) });
      if (!silent) this._toast('Backend save failed — kept local copy.');
    }
  },

  async _probeBackend() {
    this._backendOK = false;
    const t0 = performance.now();
    try {
      this._dbgPush('probe', 'GET /api/dragdrop_storage (list keys)');
      const r = await this.hass.callApi('get', 'dragdrop_storage');
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('probe', `OK (${ms} ms)`, r);
      this._backendOK = !!r;
    } catch (e) {
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('probe', `FAILED (${ms} ms)`, { error: String(e) });
      this._backendOK = false;
    }
    this._updateStoreBadge();
  },

  async _loadLayoutFromBackend(key) {
    const url = `dragdrop_storage/${encodeURIComponent(key)}`;
    const t0 = performance.now();
    try {
      this._dbgPush('load', `GET /api/${url}`);
      const data = this._normalizeDashboardPayload_(await this.hass.callApi('get', url));
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('load', `OK (${ms} ms)`, { bytes: JSON.stringify(data||'').length });
      return data;
    } catch (e) {
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('load', `FAILED (${ms} ms)`, { error: String(e) });
      return null;
    }
  },

  async _saveLayoutToBackend(key, data) {
    data = this._normalizeDashboardPayload_(data);
    const url = `dragdrop_storage/${encodeURIComponent(key)}`;
    const size = JSON.stringify(data).length;
    const hasPackagePayload = Array.isArray(data?.packages) && data.packages.some((pkg) => {
      if (!pkg || typeof pkg !== 'object') return false;
      if (pkg.enabled === false) return false;
      return String(pkg.yaml || '').trim().length > 0;
    });
    const t0 = performance.now();
    try {
      this._dbgPush('save', `POST /api/${url}`, { bytes: size });
      const res = await this.hass.callApi('post', url, data);
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('save', `OK (${ms} ms)`, res);
      if (hasPackagePayload && !('package_sync' in (res || {}))) {
        this._dbgPush('packages', 'Package sync unsupported by backend', res);
        console.warn('[ddc] backend save succeeded, but no package_sync info was returned. Backend may be outdated.');
        this._toast?.('Packages were saved in dashboard JSON, but this backend does not report package sync. Update the Drag And Drop Card backend in Home Assistant.');
      } else if (res?.package_sync?.ok === false) {
        this._dbgPush('packages', 'Package sync failed', res.package_sync);
        console.warn('[ddc] package sync failed', res.package_sync);
        this._toast?.(`Package sync failed: ${res?.package_sync?.error || 'unknown error'}`);
      } else if (res?.package_sync?.count) {
        this._dbgPush('packages', 'Package sync OK', res.package_sync);
        this._toast?.(`Synced ${res.package_sync.count} package file${res.package_sync.count === 1 ? '' : 's'} to Home Assistant.`);
      }
      return res;
    } catch (e) {
      const ms = Math.round(performance.now() - t0);
      this._dbgPush('save', `FAILED (${ms} ms)`, { error: String(e), bytes: size });
      throw e;
    }
  },

  async _saveOptionsToBackend(key, newOptions) {
    try {
      const cur = await this._loadLayoutFromBackend(key);
      let local = null;
      try { local = this._normalizeDashboardPayload_(JSON.parse(localStorage.getItem(`ddc_local_${key || 'default'}`) || 'null')); } catch {}
      try {
        this._persistCurrentResponsiveProfileToMemory_?.({ syncMembership: true });
        this._syncLiveCardConfigsIntoResponsiveLayouts_?.();
      } catch {}
      const curTime = this._layoutSnapshotTimestamp_(cur);
      const localTime = this._layoutSnapshotTimestamp_(local);
      const localIsNewer = !!(local && (!cur || (localTime && (!curTime || localTime > curTime))));
      const base = localIsNewer
        ? local
        : ((cur && typeof cur === 'object')
          ? cur
          : ((local && typeof local === 'object') ? local : {}));
      const liveCards = this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || this._captureCurrentLayoutEntries_?.() || [];
      const liveResponsiveLayouts = this._serializeResponsiveLayouts_
        ? this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts, liveCards))
        : null;
      const normalizedOptions = this._normalizeDashboardOptions_(newOptions || this._exportableOptions?.() || {}, { requireSizeMode: true, forceAutoResize: true });
      const merged = {
        version: 3,
        ...this._normalizeDashboardPayload_(base),
        updated_at: new Date().toISOString(),
        options: normalizedOptions
      };
      if (Array.isArray(liveCards) && liveCards.length) merged.cards = this._cloneJson_(liveCards);
      else if (base && Array.isArray(base.cards)) merged.cards = base.cards;
      if (liveResponsiveLayouts) merged.responsive_layouts = liveResponsiveLayouts;
      else if (base && base.responsive_layouts) merged.responsive_layouts = base.responsive_layouts;
      try { localStorage.setItem(`ddc_local_${key || 'default'}`, JSON.stringify(merged)); } catch {}
      await this._saveLayoutToBackend(key, merged);
      return true;
    } catch (e) {
      console.warn('[ddc] saveOptionsToBackend failed', e);
      return false;
    }
  },

  _updateStoreBadge() {
    const el = this.storeBadge; if (!el) return;
    const usingHost = this._backendOK && !!this.storageKey;
    el.textContent = usingHost ? 'System OK' : 'Local storage';
    el.title = usingHost
      ? 'Storage backend connected'
      : 'Your changes are not being saved by the backend. Download the Drag and Drop Card backend integration.';
    el.classList.toggle('warn', !usingHost);
    el.style.background = usingHost ? 'rgba(76,175,80,.15)' : 'rgba(255,193,7,.15)';
    el.style.borderColor = usingHost ? 'rgba(76,175,80,.45)' : 'rgba(255,193,7,.45)';
  },

  _toast(message) {
    const ev = new Event('hass-notification');
    ev.detail = { message };
    window.dispatchEvent(ev);
  },

  _huiRoot() {
    try {
      const ha   = document.querySelector('home-assistant');
      const main = ha?.shadowRoot?.querySelector('home-assistant-main');
      const drawer = main?.shadowRoot?.querySelector('ha-drawer') || main;
      const ppr = drawer?.shadowRoot?.querySelector('partial-panel-resolver') || drawer;
      const panel = ppr?.shadowRoot?.querySelector('ha-panel-lovelace') || drawer?.shadowRoot?.querySelector('ha-panel-lovelace');
      return panel?.shadowRoot?.querySelector('hui-root') || null;
    } catch { return null; }
  },
};

export function installPersistenceMethods(proto) {
  for (const [name, value] of Object.entries(persistenceMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
