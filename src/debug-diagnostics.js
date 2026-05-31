/* Debug logging, HTML escaping, and diagnostics dialog helpers. */
const debugDiagnosticsMethods = {
  _dbgInit() {
    if (this.__dbgReady) return;
    this.__dbgReady = true;
    this._dbgBuffer = [];
    this._dbgMax = 400;
    try { window.DDC = this; } catch {}
  },

  _dbgPush(kind, msg, extra = null) {
    const line = { t: new Date().toISOString(), kind, msg, extra };
    this._dbgBuffer.push(line);
    if (this._dbgBuffer.length > this._dbgMax) this._dbgBuffer.shift();
    if (this.debug) console.debug(`%c[ddc:${kind}]%c ${msg}`, 'color:#03a9f4', 'color:unset', extra ?? '');
  },

  _dbgDump() { return [...this._dbgBuffer]; },

  _safe(s) { return String(s).replace(/[&<>"']/g, (c)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); },

  async _openDiagnostics() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    const sk = this.storageKey || '(none)';
    const usingHost = this._backendOK && !!this.storageKey;

    const logsToHtml = (rows) => rows.slice(-200).map(r =>
      `<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
        <span style="opacity:.6">${r.t}</span>
        <b style="margin-left:6px;color:#03a9f4">[${r.kind}]</b>
        <span style="margin-left:6px">${this._safe(r.msg)}</span>
        ${r.extra ? `<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(r.extra, null, 2))}</pre>` : ''}
      </div>`
    ).join('');

    modal.innerHTML = `
      <div class="dialog" style="max-width:1100px;width:min(1100px,95%);height:min(90vh,860px)">
        <div class="dlg-head">
          <h3>Drag & Drop — Diagnostics</h3>
          <button class="btn secondary" id="closeDiag"><ha-icon icon="mdi:close"></ha-icon><span style="margin-left:6px">Close</span></button>
        </div>
        <div style="display:block;overflow:auto;padding:12px">
          <div class="section" style="border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color);margin-bottom:10px">
            <div class="hd" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--divider-color);font-weight:600">Status</div>
            <div class="bd" style="padding:12px">
              <div style="display:grid;grid-template-columns:220px 1fr;gap:6px;align-items:center">
                <div>Storage key (raw → slug)</div><div><code>${this._safe(this._config?.storage_key || '')}</code> → <code>${this._safe(sk)}</code></div>
                <div>Backend reachable</div><div><b>${this._backendOK ? 'YES' : 'NO'}</b></div>
                <div>Persist target</div><div><b>${usingHost ? 'Host (backend)' : 'Browser (localStorage)'}</b></div>
                <div>Auto-save</div><div>${this.autoSave ? `ON (${this.autoSaveDebounce} ms)` : 'OFF'}</div>
                <div>Cards mounted</div><div>${this.cardContainer?.querySelectorAll('.card-wrapper:not(.ddc-placeholder)').length || 0}</div>
              </div>
              <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn" id="testRoundtrip"><ha-icon icon="mdi:sync"></ha-icon><span style="margin-left:6px">Test backend round-trip</span></button>
                <button class="btn secondary" id="exportJson"><ha-icon icon="mdi:download"></ha-icon><span style="margin-left:6px">Export JSON</span></button>
                <button class="btn secondary" id="importJson"><ha-icon icon="mdi:upload"></ha-icon><span style="margin-left:6px">Import JSON</span></button>
                <button class="btn" id="forceSave"><ha-icon icon="mdi:content-save"></ha-icon><span style="margin-left:6px">Force save now</span></button>
                <button class="btn secondary" id="refreshKeys"><ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh backend keys</span></button>
              </div>
            </div>
          </div>
          <div class="section" style="border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color)">
            <div class="hd" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--divider-color);font-weight:600">Logs (latest)</div>
            <div class="bd" id="logArea" style="padding:12px;max-height:420px;overflow:auto">${logsToHtml(this._dbgDump())}</div>
          </div>
        </div>
      </div>`;

    const close = () => modal.remove();
    modal.querySelector('#closeDiag').addEventListener('click', close);
    this.shadowRoot.appendChild(modal);

    const refreshLogs = () => {
      const logArea = modal.querySelector('#logArea');
      const logsToHtmlLocal = (rows) => rows.slice(-200).map(r =>
        `<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${r.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${r.kind}]</b>
          <span style="margin-left:6px">${this._safe(r.msg)}</span>
          ${r.extra ? `<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(r.extra, null, 2))}</pre>` : ''}
        </div>`
      ).join('');
      logArea.innerHTML = logsToHtmlLocal(this._dbgDump());
      logArea.scrollTop = logArea.scrollHeight;
    };

    modal.querySelector('#refreshKeys').addEventListener('click', async () => {
      try { this._dbgPush('probe', 'Manual refresh'); await this._probeBackend(); }
      finally { refreshLogs(); }
    });

    modal.querySelector('#forceSave').addEventListener('click', async () => {
      await this._saveLayout(false);
      refreshLogs();
    });

    modal.querySelector('#exportJson').addEventListener('click', () => {
      this._persistCurrentResponsiveProfileToMemory_();
      const saved = this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_()] || this._captureCurrentLayoutEntries_();
      const payload = {
        version: 3,
        options: this._exportableOptions(),
        cards: saved,
        responsive_layouts: this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts, saved)),
        packages: this._exportDashboardPackages_(),
      };
      const blob = new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `ddc_${this.storageKey || 'layout'}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    });

    modal.querySelector('#importJson').addEventListener('click', async () => {
      const inp = document.createElement('input');
      inp.type = 'file'; inp.accept = 'application/json';
      inp.onchange = async () => {
        const file = inp.files?.[0]; if (!file) return;
        const txt = await file.text();
        try {
          const json = JSON.parse(txt);
          this._dbgPush('import', 'Loaded file', { bytes: txt.length });
          if (this._isSingleCardImportPayload_(json)) {
            await this._importSingleCardPayload_(json);
            const ev = new Event('ddc-logrefresh'); window.dispatchEvent(ev);
            return;
          }
          this._setDashboardPackages_(json.packages || []);
          const importedOptions = this._normalizeDashboardOptions_(json.options
            ? { ...json.options }
            : (typeof json.grid === 'number' ? { grid: json.grid } : {}), { forceAutoResize: true });
          if (json.connectors && !('connectors' in importedOptions)) importedOptions.connectors = json.connectors;
          if (json.responsive_connectors && !('responsive_connectors' in importedOptions)) {
            importedOptions.responsive_connectors = json.responsive_connectors;
          }
          delete importedOptions.storage_key;
          this._applyImportedOptions?.(importedOptions, false);
          this.responsiveViewportProfiles = this._normalizeResponsiveViewportProfiles_(
            json.options?.responsive_viewports || this.responsiveViewportProfiles
          );
          this._responsiveLayouts = this._normalizeResponsiveLayouts_(json.cards || [], json.responsive_layouts || null);
          await this._syncResponsiveProfileForViewport_({ force: true });
          this._resizeContainer();
          await this._saveLayout(false);
        } catch (e) {
          this._dbgPush('import', 'Parse failed', { error: String(e) });
        }
        const ev = new Event('ddc-logrefresh'); window.dispatchEvent(ev);
      };
      inp.click();
    });

    modal.querySelector('#testRoundtrip').addEventListener('click', async () => {
      if (!this._backendOK) {
        this._dbgPush('test', 'Backend not reachable, aborting');
        return refreshLogs();
      }
      const key = (this.storageKey || 'ddc_test') + '_selftest';
      const payload = { t: Date.now(), msg: 'roundtrip' };
      try {
        await this._saveLayoutToBackend(key, payload);
        const back = await this._loadLayoutFromBackend(key);
        this._dbgPush('test', 'Round-trip result', { wrote: payload, read: back });
      } catch (e) {
        this._dbgPush('test', 'Round-trip failed', { error: String(e) });
      }
      refreshLogs();
    });

    refreshLogs();
  },
};

export function installDebugDiagnosticsMethods(proto) {
  for (const [name, value] of Object.entries(debugDiagnosticsMethods)) {
    Object.defineProperty(proto, name, {
      value,
      configurable: true,
      writable: true,
    });
  }
}
