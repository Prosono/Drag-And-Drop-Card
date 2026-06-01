/*
 * Internal HTML card and editor.
 *
 * The HTML card runs user-provided markup, CSS, and JavaScript in a scoped card surface and exposes a
 * helper bridge for Home Assistant state, services, and dashboard API calls.
 */

import { __ddcHtmlDefaultConfig__ } from '../../../core/card-defaults.js';
import { DDC_HTML_CARD_EDITOR_TAG } from '../element-tags.js';

const __DDC_HTML_ASYNC_FUNCTION__ = Object.getPrototypeOf(async function () {}).constructor;

export class DdcHtmlCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = null;
    this._hass = null;
    this._styleSig = '';
    this._jsSig = '';
    this._scriptCleanup = null;
    this._scriptUpdate = null;
    this._scriptToken = 0;
    this._rerunTimer = null;
    this._shellReady = false;
    this._liveStatesProxy = null;
    this._pendingScriptReason = '';
    this._scriptHasRun = false;
    this._editPreviewMode = false;
    this._editHassTimer = 0;
    this._editHassLastFlush = 0;
  }
   static getStubConfig() {
    return __ddcHtmlDefaultConfig__();
  }
   static async getConfigElement() {
    return document.createElement(DDC_HTML_CARD_EDITOR_TAG);
  }
   async getConfigElement() {
    return document.createElement(DDC_HTML_CARD_EDITOR_TAG);
  }
   setConfig(config) {
    this._config = {
      type: 'custom:ddc-html-card',
      title: '',
      html: '',
      css: '',
      js: '',
      rerun_on_hass_update: false,
      ...(config || {})
    };
    this._renderCardShell_();
    this._applyTemplate_();
  }
   set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    if (this._editPreviewMode) {
      this._queueEditModeHassRefresh_('hass');
      return;
    }
    this._applyHassRuntimeUpdate_('hass');
  }
   __ddcSetEditPreviewMode(active = false) {
    const next = !!active;
    if (this._editPreviewMode === next) return;
    this._editPreviewMode = next;
    if (!next) this._flushEditModeHassRefresh_('hass-edit-exit');
  }
   _now_() {
    try {
      return typeof performance !== 'undefined' && typeof performance.now === 'function'
        ? performance.now()
        : Date.now();
    } catch {
      return Date.now();
    }
  }
   _queueEditModeHassRefresh_(reason = 'hass') {
    this._editHassReason = reason;
    if (this._editHassTimer) return;
    const minGap = 280;
    const elapsed = this._now_() - (this._editHassLastFlush || 0);
    const delay = Math.max(0, minGap - elapsed);
    this._editHassTimer = setTimeout(() => {
      this._editHassTimer = 0;
      this._flushEditModeHassRefresh_(this._editHassReason || reason);
    }, delay);
  }
   _flushEditModeHassRefresh_(reason = 'hass-edit') {
    if (this._editHassTimer) {
      clearTimeout(this._editHassTimer);
      this._editHassTimer = 0;
    }
    this._editHassReason = '';
    if (!this._config || !this.isConnected) return;
    this._editHassLastFlush = this._now_();
    this._applyHassRuntimeUpdate_(reason);
  }
   _applyHassRuntimeUpdate_(reason = 'hass') {
    this._dispatchRuntimeUpdate_(reason);
    if (this._scriptUpdate) {
      try {
        this._scriptUpdate(this._buildRuntimeContext_(reason === 'hass' ? 'update' : reason));
      } catch (err) {
        this._showRuntimeError_(err);
      }
      return;
    }
    if (this._config.rerun_on_hass_update && String(this._config.js || '').trim()) {
      clearTimeout(this._rerunTimer);
      this._rerunTimer = setTimeout(
        () => this._runUserScript_(reason === 'hass' ? 'hass-rerun' : `${reason}-rerun`),
        this._editPreviewMode ? 280 : 60
      );
    }
  }
   get hass() {
    return this._hass;
  }
   connectedCallback() {
    if (this._config) this._renderCardShell_();
    const pendingReason = this._pendingScriptReason;
    const hasRunnableScript = String(this._config?.js || '').trim();
    if (pendingReason || (hasRunnableScript && !this._scriptHasRun)) {
      this._pendingScriptReason = '';
      queueMicrotask(() => {
        if (!this.isConnected) return;
        this._runUserScript_(pendingReason || 'connected');
      });
    }
  }
   disconnectedCallback() {
    clearTimeout(this._rerunTimer);
    clearTimeout(this._editHassTimer);
    this._editHassTimer = 0;
    this._pendingScriptReason = '';
    this._scriptHasRun = false;
    this._teardownUserScript_();
  }
   getCardSize() {
    return 4;
  }
   _renderCardShell_() {
    if (!this.shadowRoot) return;
    if (!this._shellReady) {
      this.shadowRoot.innerHTML = `
        <style>
          :host{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            color:var(--primary-text-color);
          }
          ha-card{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            background:transparent;
            box-shadow:none;
            border-radius:inherit;
            overflow:hidden;
          }
          .shell{
            display:flex;
            flex-direction:column;
            gap:10px;
            height:100%;
            min-height:100%;
            padding:12px;
            box-sizing:border-box;
            overflow:hidden;
          }
          .title{
            display:none;
            margin:0;
            font-size:1rem;
            font-weight:800;
            letter-spacing:0;
            line-height:1.12;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .title.show{
            display:block;
          }
          .runtime{
            position:relative;
            flex:1 1 auto;
            min-height:0;
            overflow:auto;
          }
          .runtime-content{
            min-height:100%;
            min-width:0;
            box-sizing:border-box;
            overflow-wrap:anywhere;
          }
          .runtime-style-anchor{
            display:none;
          }
          .runtime-error{
            display:none;
            margin-top:12px;
            padding:10px 12px;
            border-radius:12px;
            border:1px solid color-mix(in oklab, var(--error-color, #ef4444) 42%, transparent);
            background:color-mix(in oklab, var(--error-color, #ef4444) 10%, transparent);
            color:var(--error-color, #ef4444);
            font-size:.82rem;
            line-height:1.45;
            white-space:pre-wrap;
          }
          .runtime-error.show{
            display:block;
          }
          .empty{
            display:grid;
            gap:8px;
            padding:14px;
            border-radius:8px;
            border:1px dashed color-mix(in oklab, var(--divider-color, rgba(148,163,184,.28)) 72%, transparent);
            background:rgba(127,127,127,.045);
            color:var(--secondary-text-color, #94a3b8);
            line-height:1.5;
          }
          .empty strong{
            color:var(--primary-text-color);
          }
        </style>
        <ha-card>
          <div class="shell">
            <div class="title"></div>
            <div class="runtime">
              <style class="runtime-style-anchor"></style>
              <div class="runtime-content"></div>
            </div>
            <div class="runtime-error"></div>
          </div>
        </ha-card>`;
      this._titleEl = this.shadowRoot.querySelector('.title');
      this._runtimeEl = this.shadowRoot.querySelector('.runtime');
      this._contentEl = this.shadowRoot.querySelector('.runtime-content');
      this._styleEl = this.shadowRoot.querySelector('.runtime-style-anchor');
      this._errorEl = this.shadowRoot.querySelector('.runtime-error');
      this._shellReady = true;
    }
    const title = String(this._config?.title || '').trim();
    this._titleEl.textContent = title;
    this._titleEl.classList.toggle('show', !!title);
  }
   _applyTemplate_() {
    this._renderCardShell_();
    if (!this._contentEl) return;
    const html = String(this._config?.html || '');
    const css = String(this._config?.css || '');
    const js = String(this._config?.js || '');
    const styleSig = JSON.stringify({ title: this._config?.title || '', html, css });
    const templateChanged = styleSig !== this._styleSig;
     if (templateChanged) {
      this._styleSig = styleSig;
      this._styleEl.textContent = css;
      this._contentEl.innerHTML = html.trim()
        ? html
        : `<div class="empty"><strong>HTML / Web card</strong><span>Add your own HTML, CSS and JavaScript in the visual editor to start building this card.</span></div>`;
    }
     if (js !== this._jsSig || templateChanged) {
      this._jsSig = js;
      this._scriptHasRun = false;
      if (this.isConnected) {
        this._runUserScript_('config');
      } else {
        this._pendingScriptReason = 'config';
        this._showRuntimeError_('');
      }
    } else {
      this._dispatchRuntimeUpdate_('template');
    }
  }
   _resolveDashboardApi_() {
    let api = null;
    try {
      this.dispatchEvent(new CustomEvent('ddc-api-request', {
        detail: {
          source: this,
          receive(value) {
            api = value || null;
          }
        },
        bubbles: true,
        composed: true,
      }));
    } catch {}
    return api;
  }
   _buildRuntimeContext_(reason = 'update') {
    const hass = this._hass;
    const states = this._getLiveStatesProxy_();
    const root = this._contentEl;
    const host = this;
    const ddc = this._resolveDashboardApi_();
    const listeners = [];
    const helpers = {
      ddc,
      dashboard: ddc,
      query(selector, scope = root) {
        return scope?.querySelector?.(selector) || null;
      },
      queryAll(selector, scope = root) {
        return Array.from(scope?.querySelectorAll?.(selector) || []);
      },
      entity(entityId) {
        return host._hass?.states?.[entityId] || null;
      },
      state(entityId) {
        return host._hass?.states?.[entityId]?.state;
      },
      attr(entityId, attr) {
        return host._hass?.states?.[entityId]?.attributes?.[attr];
      },
      callService(domain, service, data = {}, target) {
        return host._hass?.callService?.(domain, service, data, target);
      },
      fire(type, detail = {}) {
        host.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
      },
      listen(target, eventName, handler, options) {
        if (!target?.addEventListener) return () => {};
        target.addEventListener(eventName, handler, options);
        const cleanup = () => target.removeEventListener(eventName, handler, options);
        listeners.push(cleanup);
        return cleanup;
      },
      requestRerun() {
        host._runUserScript_('manual');
      },
      formatState(entityId) {
        const entity = host._hass?.states?.[entityId];
        if (!entity) return '';
        const friendly = entity.attributes?.friendly_name || entityId;
        return `${friendly}: ${entity.state}`;
      }
    };
    return { hass, states, config: this._config, root, host, helpers, ddc, reason, listeners };
  }
   _getLiveStatesProxy_() {
    if (this._liveStatesProxy) return this._liveStatesProxy;
    const host = this;
    this._liveStatesProxy = new Proxy({}, {
      get(_target, prop) {
        if (prop === Symbol.toStringTag) return 'Object';
        const states = host._hass?.states || {};
        return states[prop];
      },
      has(_target, prop) {
        return prop in (host._hass?.states || {});
      },
      ownKeys() {
        return Reflect.ownKeys(host._hass?.states || {});
      },
      getOwnPropertyDescriptor(_target, prop) {
        const states = host._hass?.states || {};
        if (!(prop in states)) return undefined;
        return {
          value: states[prop],
          writable: false,
          enumerable: true,
          configurable: true
        };
      }
    });
    return this._liveStatesProxy;
  }
   _teardownUserScript_() {
    try { this._scriptCleanup?.(); } catch {}
    this._scriptCleanup = null;
    this._scriptUpdate = null;
  }
   async _runUserScript_(reason = 'config') {
    clearTimeout(this._rerunTimer);
    this._teardownUserScript_();
    this._showRuntimeError_('');
    const source = String(this._config?.js || '').trim();
    if (!source || !this._contentEl) {
      this._dispatchRuntimeUpdate_(reason);
      return;
    }
     const token = ++this._scriptToken;
    this._scriptHasRun = true;
    const ctx = this._buildRuntimeContext_(reason);
    try {
      const runner = new __DDC_HTML_ASYNC_FUNCTION__(
        'hass',
        'states',
        'config',
        'root',
        'host',
        'helpers',
        'ddc',
        'reason',
        `${source}`
      );
      const result = await runner(ctx.hass, ctx.states, ctx.config, ctx.root, ctx.host, ctx.helpers, ctx.ddc, ctx.reason);
      if (token !== this._scriptToken) return;
       if (Array.isArray(ctx.listeners) && ctx.listeners.length) {
        const listenerCleanup = () => {
          ctx.listeners.forEach((off) => {
            try { off?.(); } catch {}
          });
        };
        if (typeof result === 'function') {
          const original = result;
          this._scriptCleanup = () => {
            listenerCleanup();
            original();
          };
        } else if (result && typeof result.destroy === 'function') {
          this._scriptCleanup = () => {
            listenerCleanup();
            result.destroy();
          };
        } else {
          this._scriptCleanup = listenerCleanup;
        }
      } else if (typeof result === 'function') {
        this._scriptCleanup = result;
      } else if (result && typeof result.destroy === 'function') {
        this._scriptCleanup = result.destroy.bind(result);
      }
       if (result && typeof result.update === 'function') {
        this._scriptUpdate = result.update.bind(result);
        try {
          this._scriptUpdate(this._buildRuntimeContext_('after-init'));
        } catch (err) {
          this._showRuntimeError_(err);
        }
      } else {
        this._dispatchRuntimeUpdate_('after-init');
      }
    } catch (err) {
      if (token === this._scriptToken) this._showRuntimeError_(err);
    }
  }
   _dispatchRuntimeUpdate_(reason = 'update') {
    if (!this._contentEl) return;
    try {
      this._contentEl.dispatchEvent(new CustomEvent('ddc-hass-update', {
        detail: this._buildRuntimeContext_(reason),
        bubbles: false,
        composed: false
      }));
    } catch {}
  }
   _showRuntimeError_(err) {
    if (!this._errorEl) return;
    const message = err ? String(err?.stack || err?.message || err) : '';
    this._errorEl.textContent = message;
    this._errorEl.classList.toggle('show', !!message);
  }
}
export class DdcHtmlCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {
      type: 'custom:ddc-html-card',
      title: '',
      html: '',
      css: '',
      js: '',
      rerun_on_hass_update: false
    };
    this._emitTimer = null;
    this._configSig = '';
    this._activeCodeTab = 'html';
    this._codeModal = null;
    this._codeModalCleanup = null;
  }
   setConfig(config) {
    const next = {
      type: 'custom:ddc-html-card',
      title: '',
      html: '',
      css: '',
      js: '',
      rerun_on_hass_update: false,
      ...(config || {})
    };
    const sig = JSON.stringify(next);
    if (sig === this._configSig) return;
    this._configSig = sig;
    this._config = next;
    this._renderEditor_();
  }
   set hass(hass) {
    this._hass = hass;
  }
   disconnectedCallback() {
    clearTimeout(this._emitTimer);
    this._closeCodePopup_();
  }
   _queueEmit_() {
    clearTimeout(this._emitTimer);
    this._emitTimer = setTimeout(() => {
      const config = this._cloneConfig_();
      this._configSig = JSON.stringify(config);
      this.dispatchEvent(new CustomEvent('config-changed', {
        detail: { config }
      }));
    }, 120);
  }
   _cloneConfig_() {
    return {
      type: 'custom:ddc-html-card',
      title: '',
      html: '',
      css: '',
      js: '',
      rerun_on_hass_update: false,
      ...(this._config || {})
    };
  }
   getConfig() {
    return this._cloneConfig_();
  }
   _bindField_(selector, key) {
    const input = this.shadowRoot.querySelector(selector);
    if (!input) return;
    input.addEventListener('input', () => {
      this._config[key] = input.value;
      this._syncPreviewMeta_();
      this._queueEmit_();
    });
  }
   _codeKeys_() {
    return ['html', 'css', 'js'];
  }
   _codeValue_(key) {
    const safeKey = this._normalizeCodeTab_(key);
    return String(this._config?.[safeKey] || '');
  }
   _codeHint_(key) {
    return ({
      html: 'Rendered inside the card body.',
      css: 'Scoped to this card.',
      js: 'Runs inside the card. Use helpers.callService(...) for HA actions.'
    })[this._normalizeCodeTab_(key)] || '';
  }
   _lineNumberText_(value) {
    const count = Math.max(1, String(value || '').split('\n').length);
    return Array.from({ length: count }, (_, index) => String(index + 1)).join('\n');
  }
   _escapeCodeHtml_(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
   _wrapToken_(className, value) {
    return `<span class="${className}">${this._escapeCodeHtml_(value)}</span>`;
  }
   _highlightHtmlTag_(token) {
    const match = String(token || '').match(/^(<\/?)([A-Za-z][A-Za-z0-9:-]*)([\s\S]*?)(\/?>)$/);
    if (!match) return this._escapeCodeHtml_(token);
    const [, open, tagName, attrs, close] = match;
    let out = `${this._wrapToken_('tok-punc', open)}${this._wrapToken_('tok-tag', tagName)}`;
    const attrPattern = /([:@A-Za-z_][\w:.-]*)(\s*=\s*)("[^"]*"|'[^']*'|[^\s"'=<>`]+)?/g;
    let last = 0;
    let attrMatch;
    while ((attrMatch = attrPattern.exec(attrs))) {
      out += this._escapeCodeHtml_(attrs.slice(last, attrMatch.index));
      out += this._wrapToken_('tok-attr', attrMatch[1]);
      out += this._wrapToken_('tok-punc', attrMatch[2] || '');
      if (attrMatch[3]) out += this._wrapToken_('tok-string', attrMatch[3]);
      last = attrMatch.index + attrMatch[0].length;
    }
    out += this._escapeCodeHtml_(attrs.slice(last));
    out += this._wrapToken_('tok-punc', close);
    return out;
  }
   _highlightCode_(value, language) {
    const text = String(value || '');
    if (!text) return '<span class="tok-muted"> </span>';
    const lang = this._normalizeCodeTab_(language);
    if (lang === 'html') {
      const pattern = /(<!--[\s\S]*?-->|<\/?[A-Za-z][^>]*?>)/g;
      let out = '';
      let last = 0;
      let match;
      while ((match = pattern.exec(text))) {
        out += this._escapeCodeHtml_(text.slice(last, match.index));
        const token = match[0];
        out += token.startsWith('<!--')
          ? this._wrapToken_('tok-comment', token)
          : this._highlightHtmlTag_(token);
        last = match.index + token.length;
      }
      return out + this._escapeCodeHtml_(text.slice(last)) + (text.endsWith('\n') ? ' ' : '');
    }
     if (lang === 'css') {
      const pattern = /(\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[\w-]+|--[\w-]+|-?\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|s|ms|deg)?\b|[A-Za-z_-][\w-]*(?=\s*:)|[.#][A-Za-z_-][\w-]*|[{}:;(),>+~])/g;
      let out = '';
      let last = 0;
      let match;
      while ((match = pattern.exec(text))) {
        const token = match[0];
        out += this._escapeCodeHtml_(text.slice(last, match.index));
        if (token.startsWith('/*')) out += this._wrapToken_('tok-comment', token);
        else if (/^["']/.test(token)) out += this._wrapToken_('tok-string', token);
        else if (/^#[\w-]+$/.test(token)) out += this._wrapToken_('tok-color', token);
        else if (/^--/.test(token)) out += this._wrapToken_('tok-var', token);
        else if (/^-?\d/.test(token)) out += this._wrapToken_('tok-number', token);
        else if (/^[.#]/.test(token)) out += this._wrapToken_('tok-selector', token);
        else if (/^[A-Za-z_-]/.test(token)) out += this._wrapToken_('tok-prop', token);
        else out += this._wrapToken_('tok-punc', token);
        last = match.index + token.length;
      }
      return out + this._escapeCodeHtml_(text.slice(last)) + (text.endsWith('\n') ? ' ' : '');
    }
     const jsKeywords = new Set([
      'async', 'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 'default',
      'delete', 'do', 'else', 'export', 'extends', 'false', 'finally', 'for', 'from',
      'function', 'if', 'import', 'in', 'instanceof', 'let', 'new', 'null', 'return',
      'switch', 'this', 'throw', 'true', 'try', 'typeof', 'undefined', 'var', 'void',
      'while', 'yield'
    ]);
    const pattern = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|`(?:\\[\s\S]|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b[A-Za-z_$][\w$]*\b|-?\d+(?:\.\d+)?\b|[{}()[\].,:;+\-*\/%=<>!&|?]+)/g;
    let out = '';
    let last = 0;
    let match;
    while ((match = pattern.exec(text))) {
      const token = match[0];
      out += this._escapeCodeHtml_(text.slice(last, match.index));
      if (token.startsWith('//') || token.startsWith('/*')) out += this._wrapToken_('tok-comment', token);
      else if (/^[`"']/.test(token)) out += this._wrapToken_('tok-string', token);
      else if (/^-?\d/.test(token)) out += this._wrapToken_('tok-number', token);
      else if (jsKeywords.has(token)) out += this._wrapToken_('tok-keyword', token);
      else if (/^[A-Za-z_$]/.test(token)) out += this._wrapToken_('tok-ident', token);
      else out += this._wrapToken_('tok-punc', token);
      last = match.index + token.length;
    }
    return out + this._escapeCodeHtml_(text.slice(last)) + (text.endsWith('\n') ? ' ' : '');
  }
   _codeEditorMarkup_(key, value, { expanded = false } = {}) {
    const safeKey = this._normalizeCodeTab_(key);
    const inputId = expanded ? `popup-${safeKey}` : safeKey;
    const label = this._codeTabLabel_(safeKey);
    return `
      <div class="code-editor ${expanded ? 'is-expanded' : ''}" data-code-editor="${safeKey}">
        <div class="code-gutter" aria-hidden="true">
          <pre data-code-lines="${safeKey}">${this._lineNumberText_(value)}</pre>
        </div>
        <div class="code-main">
          <pre class="code-highlight" data-code-highlight="${safeKey}" aria-hidden="true"><code>${this._highlightCode_(value, safeKey)}</code></pre>
          <textarea id="${inputId}" data-code-input="${safeKey}" spellcheck="false" wrap="off" aria-label="${label}">${this._escapeTextarea_(value || '')}</textarea>
        </div>
      </div>`;
  }
   _syncCodeScroll_(input) {
    const editor = input?.closest?.('[data-code-editor]');
    if (!editor) return;
    const highlight = editor.querySelector('[data-code-highlight]');
    const lines = editor.querySelector('[data-code-lines]');
    const x = Number(input.scrollLeft || 0);
    const y = Number(input.scrollTop || 0);
    if (highlight) highlight.style.transform = `translate(${-x}px, ${-y}px)`;
    if (lines) lines.style.transform = `translateY(${-y}px)`;
  }
   _syncCodeEditor_(key) {
    if (!this.shadowRoot) return;
    const safeKey = this._normalizeCodeTab_(key);
    const value = this._codeValue_(safeKey);
    this.shadowRoot.querySelectorAll(`[data-code-input="${safeKey}"]`).forEach((input) => {
      if (document.activeElement !== input && input.value !== value) input.value = value;
    });
    this.shadowRoot.querySelectorAll(`[data-code-highlight="${safeKey}"]`).forEach((el) => {
      el.innerHTML = `<code>${this._highlightCode_(value, safeKey)}</code>`;
    });
    this.shadowRoot.querySelectorAll(`[data-code-lines="${safeKey}"]`).forEach((el) => {
      el.textContent = this._lineNumberText_(value);
    });
    this.shadowRoot.querySelectorAll(`[data-popup-line-count="${safeKey}"]`).forEach((el) => {
      el.textContent = this._lineCountLabel_(value);
    });
    this.shadowRoot.querySelectorAll(`[data-code-input="${safeKey}"]`).forEach((input) => this._syncCodeScroll_(input));
    this._syncPreviewMeta_();
  }
   _syncAllCodeEditors_() {
    this._codeKeys_().forEach((key) => this._syncCodeEditor_(key));
  }
   _setCodeValue_(key, value, source = null) {
    const safeKey = this._normalizeCodeTab_(key);
    this._config[safeKey] = String(value || '');
    this.shadowRoot.querySelectorAll(`[data-code-input="${safeKey}"]`).forEach((input) => {
      if (input !== source && input.value !== this._config[safeKey]) input.value = this._config[safeKey];
    });
    this._syncCodeEditor_(safeKey);
    this._queueEmit_();
  }
   _stopCodeShortcutBubble_(event) {
    event?.stopPropagation?.();
    if (typeof event?.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
  }
   _activeCodeInput_() {
    const active = this.shadowRoot?.activeElement || this.ownerDocument?.activeElement;
    if (!active?.isConnected) return null;
    return active?.matches?.('[data-code-input]') ? active : null;
  }
   _installCodeShortcutGuards_() {
    if (this._globalCodeShortcutGuards) return;
    const guard = (event) => {
      if (!this._activeCodeInput_()) return;
      this._stopCodeShortcutBubble_(event);
    };
    this._globalCodeShortcutGuards = { guard };
    ['keydown', 'keypress', 'keyup', 'beforeinput', 'paste', 'cut'].forEach((eventName) => {
      this.ownerDocument?.addEventListener?.(eventName, guard);
    });
  }
   _removeCodeShortcutGuards_() {
    const guard = this._globalCodeShortcutGuards?.guard;
    if (!guard) return;
    ['keydown', 'keypress', 'keyup', 'beforeinput', 'paste', 'cut'].forEach((eventName) => {
      this.ownerDocument?.removeEventListener?.(eventName, guard);
    });
    this._globalCodeShortcutGuards = null;
  }
   _bindCodeEditors_(root = this.shadowRoot) {
    if (!root) return;
    root.querySelectorAll('[data-code-input]').forEach((input) => {
      if (input.__ddcCodeBound) return;
      input.__ddcCodeBound = true;
      input.addEventListener('input', (event) => {
        this._setCodeValue_(input.dataset.codeInput, input.value, input);
        this._stopCodeShortcutBubble_(event);
      });
      input.addEventListener('scroll', () => this._syncCodeScroll_(input), { passive: true });
      input.addEventListener('keydown', (event) => {
        this._stopCodeShortcutBubble_(event);
        if (event.key !== 'Tab') return;
        event.preventDefault();
        const start = input.selectionStart || 0;
        const end = input.selectionEnd || 0;
        const before = input.value.slice(0, start);
        const after = input.value.slice(end);
        input.value = `${before}  ${after}`;
        input.selectionStart = input.selectionEnd = start + 2;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
      ['keypress', 'keyup', 'beforeinput', 'paste', 'cut'].forEach((eventName) => {
        input.addEventListener(eventName, (event) => this._stopCodeShortcutBubble_(event));
      });
      input.addEventListener('focus', () => this._installCodeShortcutGuards_());
      input.addEventListener('blur', () => {
        setTimeout(() => {
          if (!this._activeCodeInput_()) this._removeCodeShortcutGuards_();
        }, 0);
      }, true);
      this._syncCodeScroll_(input);
    });
  }
   _lineCount_(value) {
    const text = String(value || '').trim();
    if (!text) return 0;
    return String(value || '').replace(/\r\n?/g, '\n').split('\n').length;
  }
   _lineLabel_(value, label) {
    const count = this._lineCount_(value);
    return `${count} ${label} line${count === 1 ? '' : 's'}`;
  }
   _lineCountLabel_(value) {
    const count = this._lineCount_(value);
    return `${count} line${count === 1 ? '' : 's'}`;
  }
   _normalizeCodeTab_(tab) {
    const value = String(tab || '').trim().toLowerCase();
    return ['html', 'css', 'js'].includes(value) ? value : 'html';
  }
   _codeTabLabel_(tab) {
    return ({
      html: 'HTML',
      css: 'CSS',
      js: 'JavaScript'
    })[this._normalizeCodeTab_(tab)] || 'HTML';
  }
   _setCodeTab_(tab, { focus = false } = {}) {
    if (!this.shadowRoot) return;
    const active = this._normalizeCodeTab_(tab);
    this._activeCodeTab = active;
    this.shadowRoot.querySelectorAll('[data-code-tab]').forEach((button) => {
      const isActive = button.dataset.codeTab === active;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
      button.setAttribute('tabindex', isActive ? '0' : '-1');
    });
    this.shadowRoot.querySelectorAll('[data-code-pane]').forEach((pane) => {
      const isActive = pane.dataset.codePane === active;
      pane.hidden = !isActive;
      pane.classList.toggle('is-active', isActive);
    });
    this._syncPreviewMeta_();
    if (focus) {
      requestAnimationFrame(() => {
        this.shadowRoot?.querySelector?.(`#${active === 'js' ? 'js' : active}`)?.focus?.();
      });
    }
  }
   _bindCodeTabs_() {
    const tabs = Array.from(this.shadowRoot.querySelectorAll('[data-code-tab]'));
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => this._setCodeTab_(tab.dataset.codeTab, { focus: true }));
    });
    this.shadowRoot.querySelectorAll('[data-code-expand]').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        this._openCodePopup_(button.dataset.codeExpand);
      });
    });
    const tabList = this.shadowRoot.querySelector('.code-tabs');
    tabList?.addEventListener('keydown', (event) => {
      const order = ['html', 'css', 'js'];
      const current = order.indexOf(this._normalizeCodeTab_(this._activeCodeTab));
      let next = current;
      if (event.key === 'ArrowRight') next = (current + 1) % order.length;
      else if (event.key === 'ArrowLeft') next = (current - 1 + order.length) % order.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = order.length - 1;
      else return;
      event.preventDefault();
      const nextTab = order[next];
      this._setCodeTab_(nextTab);
      this.shadowRoot.querySelector(`[data-code-tab="${nextTab}"]`)?.focus?.();
    });
    this._setCodeTab_(this._activeCodeTab || 'html');
  }
   _closeCodePopup_() {
    try { this._codeModalCleanup?.(); } catch {}
    this._codeModalCleanup = null;
    try { this._codeModal?.remove?.(); } catch {}
    this._codeModal = null;
    if (!this._activeCodeInput_()) this._removeCodeShortcutGuards_();
  }
   _openCodePopup_(tab) {
    if (!this.shadowRoot) return;
    const key = this._normalizeCodeTab_(tab);
    this._activeCodeTab = key;
    this._setCodeTab_(key);
    this._closeCodePopup_();
     const label = this._codeTabLabel_(key);
    const value = this._codeValue_(key);
    const modal = document.createElement('div');
    modal.className = 'code-modal';
    modal.innerHTML = `
      <div class="code-dialog" role="dialog" aria-modal="true" aria-labelledby="ddc-html-code-dialog-title">
        <div class="code-dialog-head">
          <div>
            <strong id="ddc-html-code-dialog-title">${label}</strong>
            <span>${this._codeHint_(key)}</span>
          </div>
          <div class="code-dialog-actions">
            <span class="code-dialog-count" data-popup-line-count="${key}">${this._lineCountLabel_(value)}</span>
            <button class="code-dialog-close" type="button" data-code-modal-close aria-label="Close expanded editor" title="Close">
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
        </div>
        <div class="code-dialog-body">
          ${this._codeEditorMarkup_(key, value, { expanded: true })}
        </div>
      </div>`;
     this.shadowRoot.appendChild(modal);
    this._codeModal = modal;
    const close = () => this._closeCodePopup_();
    const closeOnKey = (event) => {
      if (event.key === 'Escape') close();
    };
    modal.querySelector('[data-code-modal-close]')?.addEventListener('click', close);
    modal.addEventListener('pointerdown', (event) => {
      if (event.target === modal) close();
    });
    document.addEventListener('keydown', closeOnKey, true);
    this._codeModalCleanup = () => document.removeEventListener('keydown', closeOnKey, true);
    this._bindCodeEditors_(modal);
    this._syncCodeEditor_(key);
    requestAnimationFrame(() => {
      const input = modal.querySelector(`[data-code-input="${key}"]`);
      input?.focus?.();
      this._syncCodeScroll_(input);
    });
  }
   _syncPreviewMeta_() {
    if (!this.shadowRoot) return;
    const cfg = this._cloneConfig_();
    const setText = (selector, value) => {
      this.shadowRoot.querySelectorAll(selector).forEach((el) => {
        el.textContent = value;
      });
    };
    setText('[data-code-tab-count="html"]', this._lineCountLabel_(cfg.html));
    setText('[data-code-tab-count="css"]', this._lineCountLabel_(cfg.css));
    setText('[data-code-tab-count="js"]', this._lineCountLabel_(cfg.js));
    {
      const active = this._normalizeCodeTab_(this._activeCodeTab);
      const value = active === 'html' ? cfg.html : active === 'css' ? cfg.css : cfg.js;
      setText('[data-code-active-label]', `${this._codeTabLabel_(active)} / ${this._lineCountLabel_(value)}`);
    }
  }
   _renderEditor_() {
    const cfg = this._config || {};
    const activeCodeTab = this._normalizeCodeTab_(this._activeCodeTab);
    this._activeCodeTab = activeCodeTab;
    const isCodeTab = (tab) => activeCodeTab === tab;
    const codeTabAttrs = (tab) => `class="code-tab ${isCodeTab(tab) ? 'is-active' : ''}" type="button" role="tab" data-code-tab="${tab}" aria-controls="code-pane-${tab}" aria-selected="${isCodeTab(tab) ? 'true' : 'false'}" tabindex="${isCodeTab(tab) ? '0' : '-1'}"`;
    const codePaneAttrs = (tab) => `id="code-pane-${tab}" class="code-pane ${isCodeTab(tab) ? 'is-active' : ''}" role="tabpanel" data-code-pane="${tab}" aria-labelledby="code-tab-${tab}"${isCodeTab(tab) ? '' : ' hidden'}`;
    this.shadowRoot.innerHTML = `
      <style>
        :host{
          display:block;
          color:var(--primary-text-color);
          --ddc-editor-surface:color-mix(in oklab, var(--ha-card-background, #111827) 88%, transparent);
          --ddc-editor-border:color-mix(in oklab, var(--divider-color, rgba(148,163,184,.28)) 72%, transparent);
          --ddc-editor-muted:var(--secondary-text-color, #94a3b8);
        }
        .editor{
          display:grid;
          gap:14px;
        }
        .section{
          display:grid;
          gap:12px;
          padding:14px;
          border-radius:8px;
          background:var(--ddc-editor-surface);
          border:1px solid var(--ddc-editor-border);
        }
        .section-head{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
        }
        .section-head strong{
          font-size:.95rem;
        }
        .section-head span{
          color:var(--ddc-editor-muted);
          font-size:.82rem;
          font-weight:650;
        }
        .grid{
          display:grid;
          gap:12px;
          grid-template-columns:repeat(2, minmax(0, 1fr));
        }
        .field{
          display:grid;
          gap:8px;
          min-width:0;
          font-size:.9rem;
          font-weight:650;
        }
        .field.full{
          grid-column:1 / -1;
        }
        label{
          display:grid;
          gap:8px;
          min-width:0;
        }
        .hint{
          color:var(--ddc-editor-muted);
          font-size:.82rem;
          font-weight:600;
          line-height:1.4;
        }
        input[type="text"], textarea{
          width:100%;
          box-sizing:border-box;
          border-radius:8px;
          border:1px solid var(--ddc-editor-border);
          background:color-mix(in oklab, var(--ha-card-background, #111827) 86%, #000);
          color:var(--primary-text-color);
          padding:12px 14px;
          outline:none;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
          font:inherit;
        }
        input[type="text"]:focus, textarea:focus{
          border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
          box-shadow:
            0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
            inset 0 1px 0 rgba(255,255,255,.04);
        }
        textarea{
          min-height:180px;
          resize:vertical;
          font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size:.88rem;
          line-height:1.55;
          tab-size:2;
        }
        .code-shell{
          display:grid;
          border-radius:8px;
          overflow:hidden;
          border:1px solid var(--ddc-editor-border);
          background:color-mix(in oklab, var(--ha-card-background, #111827) 88%, #000);
        }
        .code-tabs{
          display:grid;
          grid-template-columns:repeat(3, minmax(0, 1fr));
          border-bottom:1px solid var(--ddc-editor-border);
          background:rgba(127,127,127,.045);
        }
        .code-tab-item{
          display:grid;
          grid-template-columns:minmax(0, 1fr) 38px;
          min-width:0;
          border-right:1px solid var(--ddc-editor-border);
        }
        .code-tab-item:last-child{
          border-right:0;
        }
        .code-tab{
          appearance:none;
          min-width:0;
          min-height:54px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
          padding:9px 12px;
          border:0;
          background:transparent;
          color:var(--ddc-editor-muted);
          cursor:pointer;
          font:inherit;
          text-align:left;
          transition:background .16s ease, color .16s ease, box-shadow .16s ease;
        }
        .code-tab:hover{
          background:rgba(127,127,127,.07);
          color:var(--primary-text-color);
        }
        .code-tab:focus-visible{
          outline:2px solid color-mix(in oklab, var(--primary-color, #ff9800) 72%, transparent);
          outline-offset:-2px;
        }
        .code-tab.is-active{
          background:color-mix(in oklab, var(--primary-color, #ff9800) 14%, transparent);
          color:var(--primary-text-color);
          box-shadow:inset 0 -2px 0 var(--primary-color, #ff9800);
        }
        .code-tab-label{
          display:flex;
          align-items:center;
          gap:8px;
          min-width:0;
          font-weight:800;
        }
        .code-tab-label span:last-child{
          min-width:0;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        .code-tab-mark{
          width:8px;
          height:8px;
          border-radius:999px;
          flex:0 0 auto;
          background:var(--primary-color, #ff9800);
          box-shadow:0 0 0 3px color-mix(in oklab, currentColor 10%, transparent);
        }
        .code-tab[data-code-tab="html"] .code-tab-mark{
          background:#f97316;
        }
        .code-tab[data-code-tab="css"] .code-tab-mark{
          background:#38bdf8;
        }
        .code-tab[data-code-tab="js"] .code-tab-mark{
          background:#facc15;
        }
        .code-tab small{
          flex:0 0 auto;
          color:var(--ddc-editor-muted);
          font-size:.72rem;
          font-weight:750;
          white-space:nowrap;
        }
        .code-tab.is-active small{
          color:var(--primary-text-color);
        }
        .code-expand{
          appearance:none;
          display:grid;
          place-items:center;
          min-width:0;
          min-height:54px;
          border:0;
          border-left:1px solid var(--ddc-editor-border);
          background:transparent;
          color:var(--ddc-editor-muted);
          cursor:pointer;
          transition:background .16s ease, color .16s ease;
        }
        .code-expand:hover,
        .code-expand:focus-visible{
          background:color-mix(in oklab, var(--primary-color, #ff9800) 12%, transparent);
          color:var(--primary-text-color);
          outline:none;
        }
        .code-expand ha-icon{
          --mdc-icon-size:18px;
        }
        .code-body{
          min-height:318px;
        }
        .code-pane{
          display:grid;
          gap:10px;
          padding:12px;
        }
        .code-pane[hidden]{
          display:none !important;
        }
        .code-pane-head{
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:12px;
        }
        .code-pane-head strong{
          font-size:.9rem;
        }
        .code-pane-head .hint{
          max-width:56%;
          text-align:right;
        }
        .code-editor{
          display:grid;
          grid-template-columns:48px minmax(0, 1fr);
          min-height:286px;
          border-radius:8px;
          overflow:hidden;
          border:1px solid color-mix(in oklab, var(--ddc-editor-border) 82%, transparent);
          background:color-mix(in oklab, var(--ha-card-background, #111827) 80%, #000);
        }
        .code-editor.is-expanded{
          min-height:0;
          height:100%;
        }
        .code-gutter{
          overflow:hidden;
          border-right:1px solid var(--ddc-editor-border);
          background:rgba(127,127,127,.06);
          color:color-mix(in oklab, var(--ddc-editor-muted) 78%, transparent);
          user-select:none;
        }
        .code-gutter pre,
        .code-highlight,
        .code-editor textarea{
          box-sizing:border-box;
          margin:0;
          padding:12px 10px;
          font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size:.88rem;
          line-height:1.55;
          tab-size:2;
        }
        .code-gutter pre{
          min-height:100%;
          text-align:right;
          white-space:pre;
          will-change:transform;
        }
        .code-main{
          position:relative;
          min-width:0;
          min-height:286px;
          overflow:hidden;
        }
        .code-editor.is-expanded .code-main{
          min-height:0;
          height:100%;
        }
        .code-highlight{
          position:absolute;
          inset:0;
          min-width:max-content;
          min-height:100%;
          overflow:visible;
          pointer-events:none;
          white-space:pre;
          color:var(--primary-text-color);
          will-change:transform;
        }
        .code-highlight code{
          font:inherit;
        }
        .code-editor textarea{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          min-height:0;
          resize:none;
          overflow:auto;
          white-space:pre;
          color:transparent;
          caret-color:var(--primary-text-color);
          background:transparent;
          border:0;
          box-shadow:none;
        }
        .code-editor textarea:focus{
          border-color:transparent;
          box-shadow:inset 0 0 0 2px color-mix(in oklab, var(--primary-color, #ff9800) 52%, transparent);
        }
        .code-editor textarea::selection{
          background:color-mix(in oklab, var(--primary-color, #ff9800) 34%, transparent);
          color:transparent;
        }
        .code-dialog-body::-webkit-scrollbar,
        .code-editor textarea::-webkit-scrollbar{
          width:10px;
          height:10px;
        }
        .code-dialog-body::-webkit-scrollbar-thumb,
        .code-editor textarea::-webkit-scrollbar-thumb{
          border:2px solid transparent;
          border-radius:999px;
          background:color-mix(in oklab, var(--primary-color, #ff9800) 34%, rgba(148,163,184,.46));
          background-clip:padding-box;
        }
        .code-dialog-body::-webkit-scrollbar-track,
        .code-editor textarea::-webkit-scrollbar-track{
          background:rgba(127,127,127,.055);
        }
        .tok-tag{ color:#fb923c; }
        .tok-attr{ color:#38bdf8; }
        .tok-string{ color:#86efac; }
        .tok-keyword{ color:#f59e0b; font-weight:750; }
        .tok-comment{ color:#94a3b8; font-style:italic; }
        .tok-number{ color:#facc15; }
        .tok-prop{ color:#7dd3fc; }
        .tok-selector{ color:#c4b5fd; }
        .tok-color{ color:#fda4af; }
        .tok-var{ color:#f0abfc; }
        .tok-ident{ color:var(--primary-text-color); }
        .tok-punc{ color:color-mix(in oklab, var(--primary-text-color) 66%, transparent); }
        .tok-muted{ color:var(--ddc-editor-muted); }
        .code-modal{
          position:fixed;
          inset:0;
          z-index:100000;
          display:grid;
          place-items:center;
          padding:18px;
          background:rgba(0,0,0,.58);
        }
        .code-dialog{
          width:min(1120px, calc(100vw - 36px));
          height:min(86vh, 820px);
          max-height:calc(100vh - 36px);
          display:grid;
          grid-template-rows:auto minmax(0, 1fr);
          border-radius:10px;
          overflow:hidden;
          border:1px solid color-mix(in oklab, var(--primary-color, #ff9800) 24%, var(--ddc-editor-border));
          background:var(--ha-card-background, #111827);
          box-shadow:0 24px 80px rgba(0,0,0,.44);
        }
        .code-dialog-head{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:14px;
          padding:14px 16px;
          border-bottom:1px solid var(--ddc-editor-border);
          background:rgba(127,127,127,.055);
        }
        .code-dialog-head > div:first-child{
          display:grid;
          gap:3px;
          min-width:0;
        }
        .code-dialog-head strong{
          font-size:1rem;
        }
        .code-dialog-head span{
          color:var(--ddc-editor-muted);
          font-size:.82rem;
          font-weight:650;
        }
        .code-dialog-actions{
          display:flex;
          align-items:center;
          gap:10px;
          flex:0 0 auto;
        }
        .code-dialog-count{
          min-height:30px;
          display:inline-flex;
          align-items:center;
          padding:0 10px;
          border-radius:999px;
          border:1px solid var(--ddc-editor-border);
          background:rgba(127,127,127,.07);
          color:var(--ddc-editor-muted);
          font-size:.8rem;
          font-weight:750;
        }
        .code-dialog-close{
          appearance:none;
          width:38px;
          height:38px;
          display:grid;
          place-items:center;
          border-radius:8px;
          border:1px solid var(--ddc-editor-border);
          background:rgba(127,127,127,.07);
          color:var(--primary-text-color);
          cursor:pointer;
        }
        .code-dialog-close:hover,
        .code-dialog-close:focus-visible{
          border-color:color-mix(in oklab, var(--primary-color, #ff9800) 42%, var(--ddc-editor-border));
          outline:none;
        }
        .code-dialog-close ha-icon{
          --mdc-icon-size:18px;
        }
        .code-dialog-body{
          min-height:0;
          display:grid;
          overflow:auto;
          overscroll-behavior:contain;
          scrollbar-gutter:stable;
          padding:14px;
        }
        .switch{
          display:inline-flex;
          align-items:center;
          gap:10px;
          min-height:44px;
          padding:0 12px;
          border-radius:8px;
          border:1px solid var(--ddc-editor-border);
          background:rgba(127,127,127,.07);
          font-weight:650;
        }
        .switch input{
          accent-color:var(--primary-color, #ff9800);
        }
        @media (max-width: 760px){
          .grid{
            grid-template-columns:1fr;
          }
          .field.full{
            grid-column:auto;
          }
          .code-tabs{
            grid-template-columns:1fr;
          }
          .code-tab-item{
            border-right:0;
            border-bottom:1px solid var(--ddc-editor-border);
          }
          .code-tab-item:last-child{
            border-bottom:0;
          }
          .code-expand{
            border-right:0;
          }
          .code-pane-head{
            display:grid;
          }
          .code-pane-head .hint{
            max-width:none;
            text-align:left;
          }
          .code-pane textarea{
            min-height:248px;
          }
          .code-modal{
            padding:10px;
          }
          .code-dialog{
            width:calc(100vw - 20px);
            height:calc(100vh - 20px);
            max-height:calc(100vh - 20px);
          }
          .code-dialog-head{
            align-items:flex-start;
          }
          .code-editor.is-expanded,
          .code-editor.is-expanded .code-main{
            min-height:0;
            height:100%;
          }
        }
      </style>
      <div class="editor">
        <section class="section">
          <div class="section-head">
            <strong>Source</strong>
            <span>HTML / CSS / JS</span>
          </div>
          <div class="grid">
            <label class="field">
              <span>Card title</span>
              <input id="title" type="text" placeholder="Optional title shown above the custom content" value="${this._escapeHtmlAttr_(cfg.title || '')}">
            </label>
            <label class="switch">
              <input id="rerun" type="checkbox" ${cfg.rerun_on_hass_update ? 'checked' : ''}>
              <span>Re-run JS on state updates</span>
            </label>
          </div>
        </section>
         <section class="section">
          <div class="section-head">
            <strong>Code</strong>
            <span data-code-active-label>${this._codeTabLabel_(activeCodeTab)} / ${this._lineCountLabel_(activeCodeTab === 'html' ? cfg.html : activeCodeTab === 'css' ? cfg.css : cfg.js)}</span>
          </div>
          <div class="code-shell">
            <div class="code-tabs" role="tablist" aria-label="HTML card code sections">
              <div class="code-tab-item">
                <button id="code-tab-html" ${codeTabAttrs('html')}>
                  <span class="code-tab-label"><span class="code-tab-mark"></span><span>HTML</span></span>
                  <small data-code-tab-count="html">${this._lineCountLabel_(cfg.html)}</small>
                </button>
                <button class="code-expand" type="button" data-code-expand="html" title="Open HTML in larger editor" aria-label="Open HTML in larger editor">
                  <ha-icon icon="mdi:plus"></ha-icon>
                </button>
              </div>
              <div class="code-tab-item">
                <button id="code-tab-css" ${codeTabAttrs('css')}>
                  <span class="code-tab-label"><span class="code-tab-mark"></span><span>CSS</span></span>
                  <small data-code-tab-count="css">${this._lineCountLabel_(cfg.css)}</small>
                </button>
                <button class="code-expand" type="button" data-code-expand="css" title="Open CSS in larger editor" aria-label="Open CSS in larger editor">
                  <ha-icon icon="mdi:plus"></ha-icon>
                </button>
              </div>
              <div class="code-tab-item">
                <button id="code-tab-js" ${codeTabAttrs('js')}>
                  <span class="code-tab-label"><span class="code-tab-mark"></span><span>JavaScript</span></span>
                  <small data-code-tab-count="js">${this._lineCountLabel_(cfg.js)}</small>
                </button>
                <button class="code-expand" type="button" data-code-expand="js" title="Open JavaScript in larger editor" aria-label="Open JavaScript in larger editor">
                  <ha-icon icon="mdi:plus"></ha-icon>
                </button>
              </div>
            </div>
            <div class="code-body">
              <div ${codePaneAttrs('html')}>
                <div class="code-pane-head">
                  <strong>HTML</strong>
                  <span class="hint">Rendered inside the card body.</span>
                </div>
                ${this._codeEditorMarkup_('html', cfg.html || '')}
              </div>
              <div ${codePaneAttrs('css')}>
                <div class="code-pane-head">
                  <strong>CSS</strong>
                  <span class="hint">Scoped to this card.</span>
                </div>
                ${this._codeEditorMarkup_('css', cfg.css || '')}
              </div>
              <div ${codePaneAttrs('js')}>
                <div class="code-pane-head">
                  <strong>JavaScript</strong>
                  <span class="hint">Runs inside the card. Use <code>helpers.callService(...)</code> for HA actions.</span>
                </div>
                ${this._codeEditorMarkup_('js', cfg.js || '')}
              </div>
            </div>
          </div>
        </section>
      </div>`;
     this._bindField_('#title', 'title');
    this._bindCodeTabs_();
    this._bindCodeEditors_();
    this._syncAllCodeEditors_();
     const rerun = this.shadowRoot.querySelector('#rerun');
    rerun?.addEventListener('change', () => {
      this._config.rerun_on_hass_update = !!rerun.checked;
      this._syncPreviewMeta_();
      this._queueEmit_();
    });
  }
   _escapeTextarea_(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
   _escapeHtmlAttr_(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}
