/*
 * Media library picker and helper behavior.
 *
 * The media library is used by settings panels and visual controls to choose images or media sources
 * without duplicating Home Assistant media-browser integration code.
 */

const mediaLibraryMethods = {
  _normalizeMediaUrl_(rawUrl = '') {
    const value = String(rawUrl || '').trim();
    if (!value) return '';
    if (/^(https?:)?\/\//i.test(value) || value.startsWith('data:') || value.startsWith('blob:')) return value;
    try {
      if (typeof this.hass?.hassUrl === 'function') return this.hass.hassUrl(value);
    } catch {}
    return value;
  },

  async _browseMediaSource_(mediaContentId = undefined) {
    if (!this.hass || typeof this.hass.callWS !== 'function') {
      throw new Error('Home Assistant media browser is not available here.');
    }
    const payload = { type: 'media_source/browse_media' };
    if (mediaContentId) payload.media_content_id = mediaContentId;
    try {
      return await this.hass.callWS(payload);
    } catch (err) {
      if (mediaContentId) throw err;
      return await this.hass.callWS({ type: 'media_source/browse_media', media_content_id: 'media-source://' });
    }
  },

  async _resolveMediaSourceUrl_(mediaContentId) {
    if (!mediaContentId) throw new Error('Missing media item to resolve.');
    const result = await this.hass.callWS({
      type: 'media_source/resolve_media',
      media_content_id: mediaContentId,
    });
    const resolved = this._normalizeMediaUrl_(result?.url || '');
    if (!resolved) throw new Error('Home Assistant did not return a usable media URL.');
    return resolved;
  },

  _isMediaImageItem_(item) {
    const mediaType = String(item?.media_content_type || '').toLowerCase();
    const mediaClass = String(item?.media_class || '').toLowerCase();
    const raw = `${item?.title || ''} ${item?.media_content_id || ''}`.toLowerCase();
    return (
      mediaType.startsWith('image/') ||
      mediaClass === 'image' ||
      /\.(avif|bmp|gif|jpe?g|png|svg|webp)(?:$|\?)/i.test(raw)
    );
  },

  async _openMediaLibraryBrowser_(onSelect) {
    this._ensureSettingsStyles_?.();
    if (!this.hass || typeof this.hass.callWS !== 'function') {
      this._toast?.('Media library is not available in this view.');
      return;
    }

    try { this.__mediaBrowserModal?.remove?.(); } catch {}

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'ddc-media-browser-modal';
    modal.innerHTML = `
      <div class="dialog modern media-browser-dialog" role="dialog" aria-modal="true" aria-labelledby="ddc-media-browser-title">
        <div class="dlg-head">
          <h3 id="ddc-media-browser-title">Browse Media Library</h3>
          <button class="icon-btn" id="ddc-media-browser-close" title="Close" aria-label="Close dialog">
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="media-browser-toolbar">
          <button type="button" class="btn secondary" id="ddc-media-browser-back">Back</button>
          <div class="media-browser-path" id="ddc-media-browser-path">Media</div>
          <button type="button" class="btn secondary" id="ddc-media-browser-refresh">Refresh</button>
        </div>
        <div class="media-browser-status" id="ddc-media-browser-status" aria-live="polite"></div>
        <div class="media-browser-list" id="ddc-media-browser-list"></div>
        <div class="footer">
          <button type="button" class="btn secondary" id="ddc-media-browser-cancel">Cancel</button>
        </div>
      </div>
    `;

    this.__mediaBrowserModal = modal;
    this.shadowRoot.appendChild(modal);

    const listEl = modal.querySelector('#ddc-media-browser-list');
    const pathEl = modal.querySelector('#ddc-media-browser-path');
    const statusEl = modal.querySelector('#ddc-media-browser-status');
    const backBtn = modal.querySelector('#ddc-media-browser-back');
    const refreshBtn = modal.querySelector('#ddc-media-browser-refresh');
    const closeBtn = modal.querySelector('#ddc-media-browser-close');
    const cancelBtn = modal.querySelector('#ddc-media-browser-cancel');

    let currentNode = null;
    const stack = [];
    let requestId = 0;

    const close = () => {
      try { modal.remove(); } catch {}
      if (this.__mediaBrowserModal === modal) this.__mediaBrowserModal = null;
      document.removeEventListener('keydown', onKey);
    };

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        close();
      }
    };

    const setStatus = (message = '', isError = false) => {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.classList.toggle('is-error', !!isError);
    };

    const sortItems = (items = []) => {
      return [...items].sort((a, b) => {
        const aDir = !!a?.can_expand;
        const bDir = !!b?.can_expand;
        if (aDir !== bDir) return aDir ? -1 : 1;
        return String(a?.title || '').localeCompare(String(b?.title || ''), undefined, { sensitivity: 'base', numeric: true });
      });
    };

    const renderBreadcrumb = () => {
      const titles = ['Media', ...stack.map((entry) => entry?.title).filter(Boolean)];
      if (currentNode?.title && currentNode.title !== titles[titles.length - 1]) titles.push(currentNode.title);
      pathEl.textContent = titles.join(' / ');
      backBtn.disabled = stack.length === 0;
    };

    const selectImage = async (item) => {
      try {
        setStatus(`Resolving ${item?.title || 'image'}...`);
        const resolved = await this._resolveMediaSourceUrl_(item?.media_content_id);
        onSelect?.(resolved, item);
        close();
      } catch (err) {
        setStatus(err?.message || 'Could not resolve selected media item.', true);
      }
    };

    const renderNode = (node) => {
      currentNode = node || null;
      renderBreadcrumb();
      listEl.innerHTML = '';
      const items = sortItems(node?.children || []);
      if (!items.length) {
        const empty = document.createElement('div');
        empty.className = 'media-browser-empty';
        empty.textContent = 'No media items found here.';
        listEl.appendChild(empty);
        setStatus('');
        return;
      }

      items.forEach((item) => {
        const canExpand = !!item?.can_expand;
        const isImage = this._isMediaImageItem_(item);
        const row = document.createElement('div');
        row.className = 'media-browser-item';

        const primary = document.createElement('button');
        primary.type = 'button';
        primary.className = 'media-browser-primary';

        const preview = document.createElement('div');
        preview.className = 'media-browser-preview';
        const thumbUrl = this._normalizeMediaUrl_(item?.thumbnail || '');
        if (thumbUrl) {
          preview.style.backgroundImage = `url("${thumbUrl.replace(/"/g, '\\"')}")`;
          preview.classList.add('has-thumb');
        } else {
          preview.innerHTML = `<ha-icon icon="${canExpand ? 'mdi:folder-outline' : (isImage ? 'mdi:image-outline' : 'mdi:file-outline')}"></ha-icon>`;
        }

        const textWrap = document.createElement('div');
        textWrap.className = 'media-browser-copy';
        const title = document.createElement('div');
        title.className = 'media-browser-title';
        title.textContent = item?.title || item?.media_content_id || 'Untitled';
        const meta = document.createElement('div');
        meta.className = 'media-browser-meta';
        const metaParts = [
          canExpand ? 'Folder' : 'File',
          item?.media_class || '',
          item?.media_content_type || '',
        ].filter(Boolean);
        meta.textContent = metaParts.join(' · ');
        textWrap.append(title, meta);

        const icon = document.createElement('ha-icon');
        icon.setAttribute('icon', canExpand ? 'mdi:chevron-right' : (isImage ? 'mdi:check-circle-outline' : 'mdi:minus-circle-outline'));
        primary.append(preview, textWrap, icon);

        primary.addEventListener('click', async () => {
          if (canExpand) {
            stack.push(currentNode);
            await loadNode(item?.media_content_id, item?.title || 'Folder');
            return;
          }
          if (isImage) {
            await selectImage(item);
            return;
          }
          setStatus('Only image files can be used as background images.', true);
        });

        row.appendChild(primary);

        if (isImage && !canExpand) {
          const useBtn = document.createElement('button');
          useBtn.type = 'button';
          useBtn.className = 'mini-action primary';
          useBtn.innerHTML = '<ha-icon icon="mdi:image-check-outline"></ha-icon><span>Use</span>';
          useBtn.addEventListener('click', async (evt) => {
            evt.stopPropagation();
            await selectImage(item);
          });
          row.appendChild(useBtn);
        } else if (canExpand) {
          const openBtn = document.createElement('button');
          openBtn.type = 'button';
          openBtn.className = 'mini-action';
          openBtn.innerHTML = '<ha-icon icon="mdi:folder-open-outline"></ha-icon><span>Open</span>';
          openBtn.addEventListener('click', async (evt) => {
            evt.stopPropagation();
            stack.push(currentNode);
            await loadNode(item?.media_content_id, item?.title || 'Folder');
          });
          row.appendChild(openBtn);
        }

        listEl.appendChild(row);
      });
      setStatus('');
    };

    const loadNode = async (mediaContentId = undefined) => {
      const currentRequest = ++requestId;
      listEl.innerHTML = '<div class="media-browser-empty">Loading media…</div>';
      setStatus('');
      try {
        const node = await this._browseMediaSource_(mediaContentId);
        if (currentRequest !== requestId) return;
        renderNode(node);
      } catch (err) {
        if (currentRequest !== requestId) return;
        listEl.innerHTML = '<div class="media-browser-empty">Could not load media items.</div>';
        setStatus(err?.message || 'Could not load media items from Home Assistant.', true);
      }
    };

    backBtn?.addEventListener('click', () => {
      if (!stack.length) return;
      const prev = stack.pop();
      renderNode(prev);
    });
    refreshBtn?.addEventListener('click', () => loadNode(currentNode?.media_content_id));
    closeBtn?.addEventListener('click', close);
    cancelBtn?.addEventListener('click', close);
    modal.addEventListener('click', (evt) => {
      if (evt.target === modal) close();
    });
    document.addEventListener('keydown', onKey);

    await loadNode();
  },
};

export function installMediaLibraryMethods(proto) {
  for (const [name, value] of Object.entries(mediaLibraryMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
