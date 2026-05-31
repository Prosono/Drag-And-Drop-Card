/* ==== DDC AUGMENTATION v6: backup on persist + inline toolbar switcher + load-by-key + edit-mode visibility ==== */
export function installDdcAugmentationV6() {
  const tag = 'drag-and-drop-card';
  const Cls = customElements.get(tag);
  if (!Cls) { console.warn('[ddc:augment] Could not find custom element', tag); return; }

  function _getLovelace() {
    try {
      let hop = 0, host = this;
      while (host && hop++ < 20) {
        const root = host.getRootNode?.();
        const rHost = root?.host;
        if (rHost?.tagName === 'HUI-ROOT') return rHost.lovelace;
        host = rHost || host.parentElement;
      }
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
    } catch(e) {}
    return undefined;
  }
  function _scanDdcCards(cfg) {
    const hits = [];
    const push = (view, path, obj) => { if (obj?.type === 'custom:drag-and-drop-card') hits.push({ view, path: [...path], card: obj }); };
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
  }
  function _makeYamlBackup(llConfig, targets, patch) {
    const when = new Date().toISOString().replace(/[:.]/g,'-');
    const items = targets.map(t => {
      let ref = llConfig;
      for (const seg of t.path) ref = ref[seg];
      return { view: t.view, path: t.path, storage_key: (ref && ref.storage_key) || null, before: ref, patch };
    });
    const backup = { kind: 'ddc-import-backup', created_at: when, count: items.length, items };
    try {
      const key = `ddc.backup.${when}`;
      localStorage.setItem(key, JSON.stringify(backup));
      const all = Object.keys(localStorage).filter(k => k.startsWith('ddc.backup.')).sort().reverse();
      for (const k of all.slice(10)) localStorage.removeItem(k);
    } catch(e){}
    return { name: `ddc_backup_${when}.json`, data: backup };
  }
  function _offerBackupDownload(name, obj) {
    try {
      const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url; a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
    } catch(e){ console.warn('[ddc:backup] download failed', e); }
  }
  function _recordRecentKey(key) {
    if (!key) return;
    try {
      const K = 'ddc.recent.keys';
      const arr = JSON.parse(localStorage.getItem(K) || '[]');
      if (!arr.includes(key)) arr.unshift(key);
      localStorage.setItem(K, JSON.stringify(arr.slice(0, 20)));
    } catch {}
  }
  function _getRecentKeys() {
    try { return JSON.parse(localStorage.getItem('ddc.recent.keys') || '[]'); } catch { return []; }
  }
  function _collectBackupKeys() {
    const keys = new Set();
    try {
      const names = Object.keys(localStorage).filter(k => k.startsWith('ddc.backup.')).sort().reverse();
      for (const name of names) {
        try {
          const obj = JSON.parse(localStorage.getItem(name) || 'null');
          if (obj && obj.items) {
            for (const it of obj.items) {
              const sk = it?.before?.storage_key || it?.patch?.storage_key;
              if (sk) keys.add(sk);
            }
          }
        } catch {}
      }
    } catch {}
    return Array.from(keys);
  }
async function _persistOptionsToYaml(opts, {
  forceTargetKey = null,   // when set, import ONLY into card with this key
  onlyThisCard   = false,  // reserved; current impl always enforces single-card import
  prevKey,
  noDownload
} = {}) {
  const ll = this._getLovelace?.() || _getLovelace.call(this);
  if (!ll) { console.debug('[ddc:import] persist: no lovelace root'); return false; }
  if (typeof ll.saveConfig !== 'function') { console.debug('[ddc:import] persist: dashboard not in Storage mode'); return false; }

  // Determine the EXACT key we will import into (the clicked card)
  const norm = (s) => (typeof s === 'string' ? s.trim() : null);
  const myKey =
    norm(forceTargetKey) ||
    norm(this?._config?.storage_key) ||
    norm(this?.storageKey) ||
    norm(prevKey);

  if (!myKey) {
    console.warn('[ddc:import] persist: missing target storage_key on this card; aborting');
    return false;
  }

  // Clone config and scan
  const cfg  = JSON.parse(JSON.stringify(ll.config));
  const hits = (this._scanDdcCards || _scanDdcCards)(cfg);

  console.debug('[ddc:import] persist: found DDC cards',
    hits.map(h => ({
      view: h.view,
      path: h.path.join('.'),
      storage_key: (h.card && (h.card.storage_key || h.card.storageKey)) || null
    }))
  );

  // Select exactly one target by key (no “patch-all-in-view” fallback)
  let targets = hits.filter(h => {
    const sk =
      norm(h.card?.storage_key) ??
      norm(h.card?.storageKey) ??
      norm(h.card?.options?.storage_key) ??
      norm(h.card?.options?.storageKey);
    return sk === myKey;
  });

  if (targets.length !== 1) {
    console.warn('[ddc:import] persist: expected exactly one target with key, got', targets.length, { myKey });
    return false;
  }

  // Build patch WITHOUT storage_key so we don't overwrite per-card keys
  const patch = { type: 'custom:drag-and-drop-card', ...(opts || {}) };
  if ('storage_key' in patch)  delete patch.storage_key;
  if ('storageKey'  in patch)  delete patch.storageKey;
  if (patch?.options) {
    if ('storage_key' in patch.options) delete patch.options.storage_key;
    if ('storageKey'  in patch.options) delete patch.options.storageKey;
  }
     // IMPORTANT: do NOT put the actual layout into Lovelace YAML
   const cardsForStorage = Array.isArray(patch.cards) ? patch.cards : null;
   delete patch.cards;

  // Optional: backup (keeps your previous behavior if helpers exist)
  try {
    const backup = _makeYamlBackup?.(ll.config, targets, patch);
    if (backup) {
      console.debug('[ddc:import] backup created', { file: backup.name, items: backup.data?.count });
      if (!noDownload && typeof _offerBackupDownload === 'function') _offerBackupDownload(backup.name, backup.data);
    }
  } catch (e) {
    console.debug('[ddc:import] backup skipped/error:', e?.message || e);
  }

  // Apply to the single matched ref
  const t = targets[0];
  let ref = cfg;
  for (const seg of t.path) ref = ref[seg];

  const existingKey =
    norm(ref?.storage_key) ??
    norm(ref?.storageKey) ?? null;

  Object.assign(ref, patch);

  // Preserve the original key on this card
  if (existingKey) {
    ref.storage_key = existingKey;
  } else {
    ref.storage_key = myKey;
  }
  if ('storageKey' in ref) delete ref.storageKey;

  console.debug('[ddc:import] persist → saving', {
    patched: 1,
    into_key: ref.storage_key,
    ignored_file_key: norm(opts?.storage_key) || norm(opts?.storageKey) || null
  });

  await ll.saveConfig(cfg);
  // Let the caller know if there were cards to save elsewhere
  return { yamlSaved: true, cardsForStorage };
}

  async function _fetchBackendKeys() {
    const parseKeys = (data) => {
      if (!data) return [];
      if (Array.isArray(data)) return data;
      if (Array.isArray(data?.keys)) return data.keys;
      if (Array.isArray(data?.dashboards)) return data.dashboards;
      if (Array.isArray(data?.entries)) return data.entries.map(e => e.key || e.id || e.name).filter(Boolean);
      if (Array.isArray(data?.items)) return data.items.map(e => e.key || e.id || e.name).filter(Boolean);
      if (typeof data === 'object') {
        for (const v of Object.values(data)) {
          if (Array.isArray(v) && v.every(x => typeof x === 'string')) return v;
        }
      }
      return [];
    };
    try {
      if (this?.hass?.callApi) {
        const r = await this.hass.callApi('get', 'dragdrop_storage');
        const k = parseKeys(r);
        if (k.length) return k;
      }
    } catch(e) { console.debug('[ddc:switcher] hass.callApi dragdrop_storage failed', e); }
    const urls = ['/api/dragdrop_storage', '/api/dragdrop_storage/keys', '/api/dragdrop_storage/list', '/api/dragdrop_storage?all=1'];
    for (const url of urls) {
      try {
        const resp = await fetch(url, { cache: 'no-store' });
        const json = await resp.json();
        const k = parseKeys(json);
        if (k.length) return k;
      } catch(e) {}
    }
    return [];
  }
  async function _fetchLayoutByKey(key) {
    const parseDesign = (data) => {
      if (!data) return null;
      if (data.options || data.cards) return data;
      if (typeof data.design === 'object') return data.design;
      if (typeof data.payload === 'object') return data.payload;
      try { if (typeof data === 'string') return JSON.parse(data); } catch {}
      return null;
    };
    const tryCall = async (method, path, params) => {
      try {
        if (this?.hass?.callApi) {
          const r = await this.hass.callApi(method, path, params);
          const d = parseDesign(r);
          if (d) return d;
        }
      } catch(e) {}
      return null;
    };
    const tryFetch = async (url) => {
      try {
        const resp = await fetch(url, { cache: 'no-store' });
        const ct = resp.headers.get('content-type') || '';
        if (ct.includes('application/json') || ct.includes('text/plain')) {
          const j = await resp.json().catch(()=>null) || await resp.text().catch(()=>null);
          const d = parseDesign(j);
          if (d) return d;
        }
      } catch(e) {}
      return null;
    };
    const enc = encodeURIComponent(key);
    return await (tryCall('get', `dragdrop_storage/${enc}`)
      || tryFetch(`/api/dragdrop_storage/${enc}`)
      || tryFetch(`/api/dragdrop_storage?key=${enc}`)
      || tryCall('post', 'dragdrop_storage/get', { key })
      || null);
  }
  async function _applyDesignObject(json, { source='switcher', newKey=null } = {}) {
    if (!json || typeof json !== 'object') throw new Error('Invalid design payload');
    const prevKey = this.storageKey || this._config?.storage_key || null;
    try { this._dbgInit?.(); this._dbgPush?.('import', 'Begin import (programmatic)', { source, newKey }); } catch {}
    if (json.options) {
      const { storage_key, ...optsNoKeyRaw } = json.options;
      const optsNoKey = this._normalizeDashboardOptions_?.(optsNoKeyRaw, { forceAutoResize: true }) || optsNoKeyRaw;
      this._applyImportedOptions?.(optsNoKey, true);
    } else if (typeof json.grid === 'number') {
      this._applyImportedOptions?.({ grid: json.grid }, true);
    }
    const key = newKey || json?.options?.storage_key || prevKey;
    if (key) {
      this.storageKey = key;
      this._config = { ...(this._config || {}), storage_key: key };
      try { this._syncEditorsStorageKey?.(); } catch {}
    }
    try {
      const toPersist = this._normalizeDashboardOptions_?.(json.options ?? (typeof json.grid === 'number' ? { grid: json.grid } : {}), { forceAutoResize: true }) || {};
      await (this._persistOptionsToYaml?.call(this, { ...toPersist, storage_key: key }, { prevKey, noDownload: (source==='switcher') }));
    } catch(e) { console.warn('[ddc:apply] persist failed', e); }
    try {
      this.responsiveViewportProfiles = this._normalizeResponsiveViewportProfiles_(
        json.options?.responsive_viewports || this.responsiveViewportProfiles
      );
      this._responsiveLayouts = this._normalizeResponsiveLayouts_(json.cards || [], json.responsive_layouts || null);
      await this._syncResponsiveProfileForViewport_?.({ force: true });
      this._resizeContainer?.();
      this._markDirty?.('import');
      this._toast?.(source==='switcher' ? `Loaded layout "${key}"` : 'Design imported');
    } catch(e) {
      console.error('[ddc:apply] rebuild failed', e);
      this._toast?.('Import failed during rebuild.');
    }
  }
  function _updateSwitcherVisibility() {
    try {
      const host = this.shadowRoot || this.renderRoot || this;
      const el = host.querySelector('.ddc-switcher-inline');
      if (!el) return;
      const sec = el.closest?.('.sec-layouts');
      const ll = this._getLovelace?.() || _getLovelace.call(this);
      let edit = false;
      try {
        const hui = (host.getRootNode && host.getRootNode())?.host;
        edit = !!(this.editMode || (ll && (ll.editMode === true || (hui && hui.editMode === true))));
      } catch {}
      el.style.display = edit ? '' : 'none';
      if (sec) sec.style.display = edit ? '' : 'none';
      this._refreshToolbarOpenHeight_?.();
    } catch {}
  }
  function _ensureInlineSwitcher() {
    try {
      if (this._ddcSwitcherInstalled) return;
      const host = this.shadowRoot || this.renderRoot || this;
      const toolbar = host.querySelector('.toolbar');
      if (!toolbar) return;
      const layoutPanel = toolbar.querySelector('.sec-layouts[data-toolbar-panel="layouts"]') || toolbar;
      let layoutHost = layoutPanel.querySelector?.('.layout-host') || toolbar.querySelector('.sec-layouts .layout-host');
      const existingSec = layoutHost?.closest?.('.sec-layouts');
      if (existingSec && existingSec !== layoutPanel) {
        try { existingSec.removeAttribute('data-toolbar-panel'); } catch {}
        if (layoutPanel && existingSec.parentElement !== layoutPanel) {
          try { layoutPanel.appendChild(existingSec); } catch {}
        }
      }
      if (!layoutHost) {
        const sec = document.createElement('section');
        sec.className = 'ddc-sec sec-layouts';
        sec.setAttribute('aria-label', 'Layouts');
        sec.style.display = 'none';
        sec.innerHTML = `
          <header class="ddc-sec-head">
            <span class="ddc-sec-dot" aria-hidden="true"></span>
            <span class="ddc-sec-title">Layouts</span>
          </header>
          <div class="ddc-row center">
            <div class="layout-host"></div>
          </div>
        `;
        layoutPanel.appendChild(sec);
        try { this._activateToolbarSegment_?.(this.__toolbarActiveSegment || toolbar.dataset.activeSection || 'primary', { toolbar, persist: false }); } catch {}
        layoutHost = sec.querySelector('.layout-host');
      }
      try {
        const closestLayouts = layoutHost?.closest?.('.sec-layouts');
        if (closestLayouts && closestLayouts !== layoutPanel) closestLayouts.removeAttribute?.('data-toolbar-panel');
      } catch {}
      const wrap = document.createElement('div');
      wrap.className = 'ddc-switcher-inline';
      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = 'Layout:';
      const select = document.createElement('select');
      select.title = 'Select stored layout (storage_key)';
      select.id = 'ddcKeySelect';
      const btn = document.createElement('button');
      btn.className = 'btn secondary';
      btn.type = 'button';
      btn.innerHTML = '<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>';
      // Create a delete button to remove the selected layout (except the current one)
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn danger';
      deleteBtn.type = 'button';
      // Set icon and text for delete
      deleteBtn.innerHTML = '<ha-icon icon="mdi:trash-can-outline"></ha-icon><span style="margin-left:6px">Delete</span>';
      deleteBtn.title = 'Delete selected layout';
      // Create an undo button to restore the most recently deleted layouts
      const undoBtn = document.createElement('button');
      undoBtn.className = 'btn info';
      undoBtn.type = 'button';
      undoBtn.innerHTML = '<ha-icon icon="mdi:undo"></ha-icon><span style="margin-left:6px">Restore</span>';
      undoBtn.title = 'Restore last deleted layout';
      wrap.appendChild(label);
      wrap.appendChild(select);
      wrap.appendChild(btn);
      wrap.appendChild(deleteBtn);
      wrap.appendChild(undoBtn);
      layoutHost.appendChild(wrap);
      this._ddcSwitcherInstalled = true;
      this._refreshToolbarOpenHeight_?.();
      const fill = async () => {
        const current = this.storageKey || (this._config && this._config.storage_key) || '';
        const serverKeys = await _fetchBackendKeys.call(this);
        const backupKeys = _collectBackupKeys();
        const recentKeys = _getRecentKeys();
        const toUnique = (arr) => Array.from(new Set(arr.filter(Boolean)));
        // Filter out any keys that have been marked as deleted (session or persisted)
        let persistentDeleted = [];
        try {
          persistentDeleted = JSON.parse(localStorage.getItem('ddc.deleted.keys') || '[]');
        } catch {}
        const deletedKeys = [...(this._ddcDeletedKeys || []), ...persistentDeleted];
        const server = toUnique(serverKeys).filter(k => !deletedKeys.includes(k));
        const backups = toUnique(backupKeys).filter(k => !deletedKeys.includes(k));
        const recent = toUnique(recentKeys).filter(k => !deletedKeys.includes(k));
        select.innerHTML = '';
        if (current && !deletedKeys.includes(current) && !server.includes(current) && !backups.includes(current) && !recent.includes(current)) {
          const opt = document.createElement('option');
          opt.value = current;
          opt.textContent = `${current} (current)`;
          opt.selected = true; // ensure the dropdown shows the actual current value
          select.appendChild(opt);
        }
        const makeGroup = (label, list) => {
          if (!list.length) return;
          const og = document.createElement('optgroup');
          og.label = label;
          list.forEach(k => {
            const o = document.createElement('option');
            o.value = k;
            // Show just the key name without any trash can emoji
            o.textContent = `${k}`;
            if (k === current) o.selected = true;
            og.appendChild(o);
          });
          select.appendChild(og);
        };
        makeGroup('Server', server);
        makeGroup('Backups', backups);
        makeGroup('Recent', recent);
        if (!select.children.length) {
          const none = document.createElement('option'); none.value=''; none.textContent='— none —'; none.selected = true;
          select.appendChild(none);
        }
        _updateSwitcherVisibility.call(this);
        this._refreshToolbarOpenHeight_?.();
        // Disable delete button when no layout is selected
        try {
          const selectedKey = select.value || '';
          deleteBtn.disabled = !selectedKey;
          // Disable undo button when there is nothing to restore
          undoBtn.disabled = !(this._ddcDeletedLayouts && this._ddcDeletedLayouts.length);
        } catch (err) {
          /* no-op */
        }
      };
      fill();
      btn.addEventListener('click', fill);

      // When delete is clicked, remove the selected layout (including the current one)
      deleteBtn.addEventListener('click', async () => {
        const key = select.value || '';
        if (!key) {
          this._toast?.('No layout selected.');
          return;
        }
        // confirm the deletion with the user
        try {
          if (typeof window !== 'undefined' && window.confirm) {
            const ok = window.confirm(`Delete layout "${key}"?`);
            if (!ok) return;
          }
        } catch {}
        // fetch the design before deletion for undo functionality
        let design = null;
        try { design = await _fetchLayoutByKey.call(this, key); } catch(e) {}
        if (design) {
          if (!this._ddcDeletedLayouts) this._ddcDeletedLayouts = [];
          this._ddcDeletedLayouts.unshift({ key, design });
          this._ddcDeletedLayouts = this._ddcDeletedLayouts.slice(0, 5);
        }
        // Track this key in a list of deleted keys so it doesn’t appear in the dropdown again
        try {
          if (!this._ddcDeletedKeys) this._ddcDeletedKeys = [];
          if (!this._ddcDeletedKeys.includes(key)) this._ddcDeletedKeys.push(key);
        } catch {}
        // Persist deleted keys to localStorage so they remain hidden after page reloads
        try {
          const storedDeleted = JSON.parse(localStorage.getItem('ddc.deleted.keys') || '[]');
          if (!storedDeleted.includes(key)) {
            storedDeleted.push(key);
            localStorage.setItem('ddc.deleted.keys', JSON.stringify(storedDeleted));
          }
        } catch {}
        // Attempt to delete via Home Assistant API. Try multiple possible endpoints.
        let okDelete = false;
        try {
          if (this?.hass?.callApi) {
            await this.hass.callApi('delete', `dragdrop_storage/${encodeURIComponent(key)}`);
            okDelete = true;
          }
        } catch(e) {
          okDelete = false;
        }
        // Fallback to alternate endpoint name (drag_and_drop_card_backend)
        if (!okDelete) {
          try {
            if (this?.hass?.callApi) {
              await this.hass.callApi('delete', `drag_and_drop_card_backend/${encodeURIComponent(key)}`);
              okDelete = true;
            }
          } catch(e) {
            okDelete = false;
          }
        }
        // Final fallback: direct HTTP DELETE call to /api/drag_and_drop_card_backend/<key>
        if (!okDelete) {
          try {
            const resp = await fetch(`/api/drag_and_drop_card_backend/${encodeURIComponent(key)}`, { method: 'DELETE' });
            if (resp && resp.ok) okDelete = true;
          } catch(e) {}
        }
        // Remove any local backup copy
        try { localStorage.removeItem(`ddc_local_${key}`); } catch(e) {}
        // Notify user
        if (okDelete) {
          this._toast?.(`Deleted layout "${key}"`);
        } else {
          this._toast?.(`Failed to delete layout "${key}"`);
        }
        // Refresh the dropdown list
        await fill();
      });

      // When undo is clicked, restore the most recently deleted layout (up to 5)
      undoBtn.addEventListener('click', async () => {
        if (!this._ddcDeletedLayouts || this._ddcDeletedLayouts.length === 0) {
          this._toast?.('Nothing to restore.');
          return;
        }
        const item = this._ddcDeletedLayouts.shift();
        const restoreKey = item.key;
        const design = item.design;
        let okRestore = false;
        // Attempt to restore via Home Assistant API
        try {
          if (this?.hass?.callApi) {
            await this.hass.callApi('post', `dragdrop_storage/${encodeURIComponent(restoreKey)}`, design);
            okRestore = true;
          }
        } catch(e) {}
        // Fallback: POST directly via fetch
        if (!okRestore) {
          try {
            const resp = await fetch(`/api/dragdrop_storage/${encodeURIComponent(restoreKey)}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(design)
            });
            if (resp && resp.ok) okRestore = true;
          } catch(e) {}
        }
        // Save a local copy as well
        try { localStorage.setItem(`ddc_local_${restoreKey}`, JSON.stringify(design)); } catch(e) {}
        if (okRestore) {
          this._toast?.(`Restored layout "${restoreKey}"`);
        } else {
          this._toast?.(`Failed to restore layout "${restoreKey}"`);
        }
        // Remove from the list of deleted keys so it appears in the dropdown again
        try {
          if (this._ddcDeletedKeys) {
            this._ddcDeletedKeys = this._ddcDeletedKeys.filter(k => k !== restoreKey);
          }
        } catch {}
        // Also remove from persistent deleted keys list
        try {
          const storedDeleted = JSON.parse(localStorage.getItem('ddc.deleted.keys') || '[]');
          const idx = storedDeleted.indexOf(restoreKey);
          if (idx >= 0) {
            storedDeleted.splice(idx, 1);
            localStorage.setItem('ddc.deleted.keys', JSON.stringify(storedDeleted));
          }
        } catch {}
        // Refresh dropdown and update button states
        await fill();
      });
      
      select.addEventListener('change', async (e) => {
        const newKey = String(e.target.value || '');
        if (!newKey) return;
        if (this._ddcLoadingFromKey) return;
        this._ddcLoadingFromKey = true;

        try {
          const design = await _fetchLayoutByKey.call(this, newKey);
          if (!design) {
            this._toast?.(`No layout found for "${newKey}"`);
            return;
          }

          // Apply the newly selected design to the canvas
          await _applyDesignObject.call(this, design, { source: 'switcher', newKey });
          this._resizeContainer?.();
          this._toast?.(`Loaded layout "${newKey}"`);

          // ---- PERSIST THE SELECTED KEY *TO THE CARD OPTIONS* ----
          // IMPORTANT: persist against the *old* key so the YAML updater finds this card
          const oldKey = String(this._config?.storage_key || this.storageKey || '');

          let persistOk = false;
          try {
            const persistOpts = oldKey
              ? { forceTargetKey: oldKey, noDownload: true }
              : { noDownload: true };

            // NOTE: in YAML mode this can resolve to false (no exception)
            persistOk = await this._persistOptionsToYaml({ storage_key: newKey }, persistOpts);
          } catch (err) {
            console.warn('[ddc:switcher] failed to persist storage_key to YAML', err);
            this._toast?.('Failed to persist selected layout. Keeping current.');
            return; // bail so we don't reload into the wrong key
          }

          // Always update in-memory state so the UI reflects the selection now
          this.storageKey = newKey;
          if (this._config) this._config.storage_key = newKey;

          // If persistence didn’t actually happen (e.g., YAML mode), stop here—don’t reload
          if (!persistOk) {
            console.warn('[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.');
            // Optional: remember across reloads if you want
            // localStorage.setItem('ddc:lastKey', newKey);
            return;
          }

          // ---- FLUSH SAVE UNDER THE *NEW* KEY, THEN HARD-RELOAD ----
          try {
            if (this._saveTimer) clearTimeout(this._saveTimer);
            await this._saveLayout(true); // writes under this.storageKey (now newKey)
          } catch (e2) {
            console.warn('[ddc:switcher] saveLayout failed', e2);
            this._markDirty?.('switcher');
            this._toast?.('Layout loaded — click Apply to save.');
            return;
          }

          // Only reload if persist succeeded (storage/dashboard mode)
          window.location.reload();

          // Finally, reload so the selected layout is what loads on startup
          window.location.reload();

        } catch (err) {
          console.warn('[ddc:switcher] load/apply failed', err);
          this._toast?.('Failed to load layout.');
        } finally {
          this._ddcLoadingFromKey = false;
        }
      });
      this._ddcVisTimer && clearInterval(this._ddcVisTimer);
      this._ddcVisTimer = setInterval(() => _updateSwitcherVisibility.call(this), 800);
      _updateSwitcherVisibility.call(this);
    } catch(e) {
      console.warn('[ddc:switcher] inline install failed', e);
    }
  }
  if (!Cls.prototype._getLovelace) Cls.prototype._getLovelace = _getLovelace;
  if (!Cls.prototype._scanDdcCards) Cls.prototype._scanDdcCards = _scanDdcCards;
  Cls.prototype._persistOptionsToYaml = _persistOptionsToYaml;
  if (!Cls.prototype._applyDesignObject) Cls.prototype._applyDesignObject = _applyDesignObject;
  try {
    const desc = Object.getOwnPropertyDescriptor(Cls.prototype, 'hass');
    if (desc && (desc.set || desc.get)) {
      const origSet = desc.set;
      Object.defineProperty(Cls.prototype, 'hass', {
        configurable: true, enumerable: true,
        set(v) { if (origSet) origSet.call(this, v); try { _ensureInlineSwitcher.call(this); } catch(e){} },
        get: desc.get || function(){ return this._hass; }
      });
    } else if (typeof Cls.prototype.setHass === 'function') {
      const orig = Cls.prototype.setHass;
      Cls.prototype.setHass = function(v){ if (orig) orig.call(this, v); try { _ensureInlineSwitcher.call(this); } catch(e){} }
    } else {
      const origUpdate = Cls.prototype.updated || Cls.prototype.firstUpdated;
      Cls.prototype.updated = function(...args){ if (origUpdate) origUpdate.apply(this, args); try { _ensureInlineSwitcher.call(this); } catch(e){} }
    }
  } catch(e){ console.warn('[ddc:switcher] wrap hass setter failed', e); }
}
