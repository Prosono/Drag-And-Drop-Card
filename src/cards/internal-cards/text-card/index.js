/*
 * Internal text card and editor.
 *
 * The text card renders plain or rich text with dashboard-friendly typography controls. Its renderer
 * sanitizes rich HTML before showing it inside the card.
 */

import { DDC_TEXT_CARD_EDITOR_TAG } from '../element-tags.js';
import {
  __ddcLineNormalizeNumber__,
  __ddcTableEscapeAttr__,
  __ddcTableEscapeHtml__,
} from '../shared-helpers.js';

function __ddcTextVariantPreset__(variant) {
  switch (String(variant || '').toLowerCase()) {
    case 'header':
      return { font_size: 14, bold: true, letter_spacing: 0.16, line_height: 1.1 };
    case 'h1':
      return { font_size: 56, bold: true, letter_spacing: -0.06, line_height: 0.96 };
    case 'h2':
      return { font_size: 44, bold: true, letter_spacing: -0.045, line_height: 1.02 };
    case 'h3':
      return { font_size: 34, bold: true, letter_spacing: -0.03, line_height: 1.08 };
    case 'h4':
      return { font_size: 26, bold: true, letter_spacing: -0.018, line_height: 1.14 };
    case 'paragraph':
    case 'p':
      return { font_size: 18, bold: false, letter_spacing: 0, line_height: 1.58 };
    case 'small':
      return { font_size: 13, bold: false, letter_spacing: 0.02, line_height: 1.42 };
    case 'title':
    default:
      return { font_size: 42, bold: true, letter_spacing: -0.03, line_height: 1.05 };
  }
}
 function __ddcTextInlineMarkup__(value) {
  let html = __ddcTableEscapeHtml__(String(value ?? ''));
  html = html.replace(/\*\*\*([\s\S]+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
  return html;
}
 function __ddcTextRichMarkup__(value) {
  const lines = String(value ?? '').replace(/\r\n?/g, '\n').split('\n');
  const blocks = [];
  lines.forEach((raw) => {
    const line = String(raw ?? '').trimEnd();
    const trimmed = line.trim();
    if (!trimmed) {
      blocks.push('<div class="ddc-rich-break" aria-hidden="true"></div>');
      return;
    }
    if (trimmed.startsWith('###### ')) {
      blocks.push(`<div class="ddc-rich-line ddc-rich-small">${__ddcTextInlineMarkup__(trimmed.slice(7))}</div>`);
      return;
    }
    if (trimmed.startsWith('##### ')) {
      blocks.push(`<div class="ddc-rich-line ddc-rich-header">${__ddcTextInlineMarkup__(trimmed.slice(6))}</div>`);
      return;
    }
    if (trimmed.startsWith('#### ')) {
      blocks.push(`<h4 class="ddc-rich-line">${__ddcTextInlineMarkup__(trimmed.slice(5))}</h4>`);
      return;
    }
    if (trimmed.startsWith('### ')) {
      blocks.push(`<h3 class="ddc-rich-line">${__ddcTextInlineMarkup__(trimmed.slice(4))}</h3>`);
      return;
    }
    if (trimmed.startsWith('## ')) {
      blocks.push(`<h2 class="ddc-rich-line">${__ddcTextInlineMarkup__(trimmed.slice(3))}</h2>`);
      return;
    }
    if (trimmed.startsWith('# ')) {
      blocks.push(`<h1 class="ddc-rich-line">${__ddcTextInlineMarkup__(trimmed.slice(2))}</h1>`);
      return;
    }
    blocks.push(`<p class="ddc-rich-line">${__ddcTextInlineMarkup__(trimmed)}</p>`);
  });
  return blocks.join('');
}
 function __ddcTextSanitizeRichHtml__(value) {
  const html = String(value ?? '');
  if (!html.trim()) return '';
  const tpl = document.createElement('template');
  tpl.innerHTML = html;
  const allowedTags = new Set([
    'p', 'div', 'br',
    'h1', 'h2', 'h3', 'h4',
    'blockquote', 'pre', 'code',
    'ul', 'ol', 'li',
    'strong', 'b', 'em', 'i', 'u', 's', 'small',
    'span', 'a'
  ]);
   const sanitizeNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return document.createTextNode(node.textContent || '');
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return document.createDocumentFragment();
    }
    const tag = String(node.tagName || '').toLowerCase();
    const safeTag = tag === 'b' ? 'strong' : tag === 'i' ? 'em' : tag;
    const children = Array.from(node.childNodes).map((child) => sanitizeNode(child));
    if (!allowedTags.has(tag)) {
      const fragment = document.createDocumentFragment();
      children.forEach((child) => fragment.appendChild(child));
      return fragment;
    }
    const el = document.createElement(safeTag);
    if (safeTag === 'a') {
      const href = String(node.getAttribute('href') || '').trim();
      if (/^(https?:|mailto:|tel:|\/)/i.test(href)) {
        el.setAttribute('href', href);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noreferrer noopener');
      }
    }
    children.forEach((child) => el.appendChild(child));
    return el;
  };
   const out = document.createElement('div');
  Array.from(tpl.content.childNodes).forEach((node) => out.appendChild(sanitizeNode(node)));
  return out.innerHTML;
}


export class DdcTextCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = DdcTextCard.getStubConfig();
    this._hass = null;
    this._shellReady = false;
  }
   static getStubConfig() {
    return {
      type: 'custom:ddc-text-card',
      text: 'Energy overview',
      rich_text: false,
      rich_html: '',
      variant: 'title',
      font_family: '',
      font_size: 42,
      color: 'var(--primary-text-color, #f8fafc)',
      align: 'left',
      bold: true,
      italic: false,
      letter_spacing: -0.03,
      line_height: 1.05
    };
  }
   static async getConfigElement() {
    return document.createElement(DDC_TEXT_CARD_EDITOR_TAG);
  }
   async getConfigElement() {
    return document.createElement(DDC_TEXT_CARD_EDITOR_TAG);
  }
   setConfig(config) {
    const variant = String(config?.variant || 'title').toLowerCase();
    const preset = __ddcTextVariantPreset__(variant);
    this._config = {
      ...DdcTextCard.getStubConfig(),
      ...(config || {}),
      text: String(config?.text || 'Energy overview'),
      rich_text: !!config?.rich_text,
      rich_html: String(config?.rich_html || ''),
      variant,
      font_family: String(config?.font_family || ''),
      font_size: __ddcLineNormalizeNumber__(config?.font_size, preset.font_size, 8, 200),
      color: String(config?.color || 'var(--primary-text-color, #f8fafc)'),
      align: String(config?.align || 'left').toLowerCase(),
      bold: typeof config?.bold === 'boolean' ? config.bold : preset.bold,
      italic: !!config?.italic,
      letter_spacing: __ddcLineNormalizeNumber__(config?.letter_spacing, preset.letter_spacing, -1, 2),
      line_height: __ddcLineNormalizeNumber__(config?.line_height, preset.line_height, 0.7, 3)
    };
    this._renderCard_();
  }
   set hass(hass) {
    this._hass = hass;
    this._renderCard_();
  }
   get hass() {
    return this._hass;
  }
   connectedCallback() {
    if (this._config) this._renderCard_();
  }
   getCardSize() {
    return 2;
  }
   _ensureShell_() {
    if (this._shellReady || !this.shadowRoot) return;
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
          overflow:visible;
        }
        .shell{
          display:grid;
          align-items:center;
          width:100%;
          height:100%;
          min-height:100%;
          padding:10px 12px;
          box-sizing:border-box;
        }
        .copy{
          margin:0;
          width:100%;
          color:var(--ddc-text-color, var(--primary-text-color, #f8fafc));
          font-family:var(--ddc-text-font-family, inherit);
          font-size:var(--ddc-text-size, 42px);
          font-weight:var(--ddc-text-weight, 700);
          font-style:var(--ddc-text-style, normal);
          line-height:var(--ddc-text-line-height, 1.05);
          letter-spacing:var(--ddc-text-letter-spacing, 0em);
          text-align:var(--ddc-text-align, left);
          text-wrap:balance;
          overflow-wrap:anywhere;
        }
        .copy.is-rich{
          display:grid;
          gap:calc(var(--ddc-text-size, 42px) * 0.22);
          text-wrap:pretty;
        }
        .copy.is-rich > *{
          margin:0;
          color:inherit;
          font-family:inherit;
          text-align:inherit;
          line-height:inherit;
          letter-spacing:inherit;
        }
        .copy.is-rich p + p,
        .copy.is-rich p + ul,
        .copy.is-rich p + ol,
        .copy.is-rich ul + p,
        .copy.is-rich ol + p,
        .copy.is-rich blockquote + p,
        .copy.is-rich pre + p{
          margin-top:calc(var(--ddc-text-size, 42px) * 0.18);
        }
        .copy.is-rich h1{
          font-size:calc(var(--ddc-text-size, 42px) * 1.56);
          font-weight:800;
          line-height:0.96;
          letter-spacing:calc(var(--ddc-text-letter-spacing, -0.03em) - 0.025em);
        }
        .copy.is-rich h2{
          font-size:calc(var(--ddc-text-size, 42px) * 1.28);
          font-weight:780;
          line-height:1.02;
          letter-spacing:calc(var(--ddc-text-letter-spacing, -0.03em) - 0.015em);
        }
        .copy.is-rich h3{
          font-size:calc(var(--ddc-text-size, 42px) * 1.08);
          font-weight:760;
          line-height:1.08;
        }
        .copy.is-rich h4{
          font-size:calc(var(--ddc-text-size, 42px) * 0.92);
          font-weight:720;
          line-height:1.14;
        }
        .copy.is-rich p{
          font-size:var(--ddc-text-size, 42px);
        }
        .copy.is-rich small{
          font-size:calc(var(--ddc-text-size, 42px) * 0.74);
          opacity:.82;
          line-height:1.35;
        }
        .copy.is-rich ul,
        .copy.is-rich ol{
          padding-inline-start:1.2em;
          display:grid;
          gap:0.3em;
        }
        .copy.is-rich li{
          margin:0;
        }
        .copy.is-rich blockquote{
          padding:0.22em 0 0.22em 1em;
          border-left:3px solid color-mix(in oklab, var(--primary-color, #ff9800) 52%, rgba(255,255,255,.16));
          color:color-mix(in oklab, var(--ddc-text-color, #f8fafc) 82%, rgba(255,255,255,.36));
        }
        .copy.is-rich pre{
          padding:0.8em 0.95em;
          border-radius:16px;
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.08);
          overflow:auto;
          white-space:pre-wrap;
        }
        .copy.is-rich code{
          font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size:0.92em;
        }
        .copy.is-rich a{
          color:color-mix(in oklab, var(--primary-color, #ff9800) 78%, white 12%);
          text-decoration:underline;
          text-decoration-thickness:0.08em;
        }
        .copy.is-rich strong{
          font-weight:800;
        }
        .copy.is-rich em{
          font-style:italic;
        }
        .copy.variant-header{
          text-transform:uppercase;
        }
        .copy.variant-small{
          opacity:.86;
        }
      </style>
      <ha-card>
        <div class="shell">
          <div class="copy"></div>
        </div>
      </ha-card>`;
    this._shellEl = this.shadowRoot.querySelector('.shell');
    this._copyEl = this.shadowRoot.querySelector('.copy');
    this._shellReady = true;
  }
   _resolveTag_(variant) {
    switch (String(variant || '').toLowerCase()) {
      case 'h1': return 'h1';
      case 'h2': return 'h2';
      case 'h3': return 'h3';
      case 'h4': return 'h4';
      case 'header': return 'div';
      case 'small': return 'small';
      case 'paragraph':
      case 'p': return 'p';
      case 'title':
      default: return 'div';
    }
  }
   _renderCard_() {
    this._ensureShell_();
    if (!this._shellEl || !this._copyEl || !this._config) return;
    const cfg = this._config;
    const tag = this._resolveTag_(cfg.variant);
    const wantsRich = !!cfg.rich_text;
    const align = ['left', 'center', 'right'].includes(String(cfg.align || '').toLowerCase())
      ? String(cfg.align).toLowerCase()
      : 'left';
    const rawText = String(cfg.text || '');
    const text = rawText.trim() || 'Text';
    this._shellEl.style.setProperty('--ddc-text-font-family', String(cfg.font_family || '').trim() || 'inherit');
    this._shellEl.style.setProperty('--ddc-text-size', `${__ddcLineNormalizeNumber__(cfg.font_size, 42, 8, 200)}px`);
    this._shellEl.style.setProperty('--ddc-text-color', String(cfg.color || 'var(--primary-text-color, #f8fafc)'));
    this._shellEl.style.setProperty('--ddc-text-weight', cfg.bold ? '800' : '500');
    this._shellEl.style.setProperty('--ddc-text-style', cfg.italic ? 'italic' : 'normal');
    this._shellEl.style.setProperty('--ddc-text-line-height', `${__ddcLineNormalizeNumber__(cfg.line_height, 1.05, 0.7, 3)}`);
    this._shellEl.style.setProperty('--ddc-text-letter-spacing', `${__ddcLineNormalizeNumber__(cfg.letter_spacing, -0.03, -1, 2)}em`);
    this._shellEl.style.setProperty('--ddc-text-align', align);
    if (wantsRich) {
      if (this._copyEl.tagName.toLowerCase() !== 'div') {
        const replacement = document.createElement('div');
        replacement.className = 'copy';
        this._copyEl.replaceWith(replacement);
        this._copyEl = replacement;
      }
      this._copyEl.className = 'copy is-rich';
      const richHtml = __ddcTextSanitizeRichHtml__(cfg.rich_html || '') || __ddcTextSanitizeRichHtml__(__ddcTextRichMarkup__(rawText));
      this._copyEl.innerHTML = richHtml || '<p>Text</p>';
      return;
    }
    if (this._copyEl.tagName.toLowerCase() !== tag) {
      const replacement = document.createElement(tag);
      replacement.className = 'copy';
      this._copyEl.replaceWith(replacement);
      this._copyEl = replacement;
    }
    this._copyEl.className = `copy variant-${__ddcTableEscapeAttr__(cfg.variant || 'title')}`;
    this._copyEl.textContent = text;
  }
}
export class DdcTextCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = DdcTextCard.getStubConfig();
    this._configSig = '';
    this._emitTimer = null;
    this._richSelectionRange = null;
    this._globalRichShortcutGuards = null;
  }
   setConfig(config) {
    const variant = String(config?.variant || 'title').toLowerCase();
    const preset = __ddcTextVariantPreset__(variant);
    const next = {
      ...DdcTextCard.getStubConfig(),
      ...(config || {}),
      text: String(config?.text || 'Energy overview'),
      rich_text: !!config?.rich_text,
      rich_html: String(config?.rich_html || ''),
      variant,
      font_family: String(config?.font_family || ''),
      font_size: __ddcLineNormalizeNumber__(config?.font_size, preset.font_size, 8, 200),
      color: String(config?.color || 'var(--primary-text-color, #f8fafc)'),
      align: String(config?.align || 'left').toLowerCase(),
      bold: typeof config?.bold === 'boolean' ? config.bold : preset.bold,
      italic: !!config?.italic,
      letter_spacing: __ddcLineNormalizeNumber__(config?.letter_spacing, preset.letter_spacing, -1, 2),
      line_height: __ddcLineNormalizeNumber__(config?.line_height, preset.line_height, 0.7, 3)
    };
    const sig = JSON.stringify(next);
    if (sig === this._configSig) return;
    this._configSig = sig;
    this._config = next;
    this._renderEditor_();
  }
   set hass(hass) {
    this._hass = hass;
    if (!this.shadowRoot.childElementCount) this._renderEditor_();
  }
   _markLocalConfigUpdated_() {
    this._configSig = JSON.stringify(this._config || {});
  }
   _queueEmit_() {
    this._markLocalConfigUpdated_();
    clearTimeout(this._emitTimer);
    this._emitTimer = setTimeout(() => {
      this.dispatchEvent(new CustomEvent('config-changed', {
        detail: { config: { ...this._config } }
      }));
    }, 120);
  }
   _bindField_(selector, key, type = 'text') {
    const input = this.shadowRoot.querySelector(selector);
    if (!input) return;
    const eventName = type === 'select' || type === 'checkbox' ? 'change' : 'input';
    input.addEventListener(eventName, () => {
      if (key === 'variant' && type === 'select') {
        this._applyVariantPreset_(input.value);
        return;
      }
      if (type === 'checkbox') {
        this._config[key] = !!input.checked;
      } else if (type === 'number') {
        const defaults = {
          font_size: [42, 8, 200],
          letter_spacing: [-0.03, -1, 2],
          line_height: [1.05, 0.7, 3]
        };
        const [fallback, min, max] = defaults[key] || [0, -Infinity, Infinity];
        this._config[key] = __ddcLineNormalizeNumber__(input.value, fallback, min, max);
      } else {
        this._config[key] = input.value;
      }
      this._queueEmit_();
    });
  }
   _seedRichHtml_() {
    const seeded = __ddcTextSanitizeRichHtml__(this._config?.rich_html || '') || __ddcTextSanitizeRichHtml__(__ddcTextRichMarkup__(this._config?.text || ''));
    this._config.rich_html = seeded;
    this._markLocalConfigUpdated_();
    return seeded;
  }
   _captureRichSelection_() {
    const editor = this.shadowRoot?.querySelector('#richEditor');
    const selection = this.ownerDocument?.getSelection?.();
    if (!editor || !selection || selection.rangeCount < 1) return;
    const range = selection.getRangeAt(0);
    const anchorNode = range.commonAncestorContainer;
    if (editor.contains(anchorNode) || anchorNode === editor) {
      this._richSelectionRange = range.cloneRange();
    }
  }
   _restoreRichSelection_() {
    if (!this._richSelectionRange) return;
    const selection = this.ownerDocument?.getSelection?.();
    if (!selection) return;
    selection.removeAllRanges();
    selection.addRange(this._richSelectionRange);
  }
   _syncRichEditorFromDom_(rewrite = false) {
    const editor = this.shadowRoot?.querySelector('#richEditor');
    if (!editor) return;
    let html = editor.innerHTML || '';
    if (rewrite) {
      html = __ddcTextSanitizeRichHtml__(html);
      if (editor.innerHTML !== html) editor.innerHTML = html;
    }
    this._config.rich_html = html;
    const textContent = String(editor.textContent || '').replace(/\u00a0/g, ' ').trim();
    if (textContent) this._config.text = textContent;
    this._queueEmit_();
  }
   _execRichCommand_(command, value = null) {
    const editor = this.shadowRoot?.querySelector('#richEditor');
    if (!editor) return;
    editor.focus();
    this._restoreRichSelection_();
    try {
      if (command === 'createLink') {
        if (!value) return;
        this.ownerDocument.execCommand('createLink', false, value);
      } else if (command === 'formatBlock') {
        this.ownerDocument.execCommand('formatBlock', false, value);
      } else {
        this.ownerDocument.execCommand(command, false, value);
      }
    } catch {}
    this._captureRichSelection_();
    this._syncRichEditorFromDom_(true);
  }
   _bindRichEditor_() {
    const editor = this.shadowRoot?.querySelector('#richEditor');
    if (!editor) return;
    const stopShortcutBubble = (event) => {
      event.stopPropagation();
      if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
    };
    ['keydown', 'keypress', 'keyup', 'beforeinput', 'input', 'paste'].forEach((eventName) => {
      editor.addEventListener(eventName, stopShortcutBubble);
    });
    const installGlobalShortcutGuards = () => {
      if (this._globalRichShortcutGuards) return;
      const shouldTrap = () => {
        const selection = this.ownerDocument?.getSelection?.();
        const active = this.shadowRoot?.activeElement || this.ownerDocument?.activeElement;
        const inEditor =
          active === editor ||
          editor.contains(active) ||
          (selection?.anchorNode && editor.contains(selection.anchorNode));
        return !!inEditor;
      };
      const guard = (event) => {
        if (!shouldTrap()) return;
        event.stopPropagation();
        if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
      };
      this._globalRichShortcutGuards = { guard };
      ['keydown', 'keypress', 'keyup', 'beforeinput'].forEach((eventName) => {
        window.addEventListener(eventName, guard, true);
        document.addEventListener(eventName, guard, true);
      });
    };
    const removeGlobalShortcutGuards = () => {
      if (!this._globalRichShortcutGuards?.guard) return;
      const { guard } = this._globalRichShortcutGuards;
      ['keydown', 'keypress', 'keyup', 'beforeinput'].forEach((eventName) => {
        window.removeEventListener(eventName, guard, true);
        document.removeEventListener(eventName, guard, true);
      });
      this._globalRichShortcutGuards = null;
    };
    editor.addEventListener('input', () => this._syncRichEditorFromDom_(false));
    editor.addEventListener('keyup', () => this._captureRichSelection_());
    editor.addEventListener('mouseup', () => this._captureRichSelection_());
    editor.addEventListener('focus', () => {
      installGlobalShortcutGuards();
      this._captureRichSelection_();
    });
    editor.addEventListener('blur', () => {
      this._syncRichEditorFromDom_(true);
      setTimeout(() => {
        const active = this.shadowRoot?.activeElement || this.ownerDocument?.activeElement;
        if (!active || !editor.contains(active)) removeGlobalShortcutGuards();
      }, 0);
    }, true);
     this.shadowRoot.querySelectorAll('[data-rich-cmd]').forEach((btn) => {
      btn.addEventListener('mousedown', (event) => event.preventDefault());
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-rich-cmd');
        if (!cmd) return;
        if (cmd === 'createLink') {
          const url = window.prompt('Link URL', 'https://');
          if (!url) return;
          this._execRichCommand_(cmd, url);
          return;
        }
        this._execRichCommand_(cmd);
      });
    });
     const blockSelect = this.shadowRoot.querySelector('#richBlock');
    if (blockSelect) {
      blockSelect.addEventListener('change', () => {
        const value = String(blockSelect.value || 'P').toUpperCase();
        this._execRichCommand_('formatBlock', value);
      });
    }
  }
   _applyVariantPreset_(variant) {
    const nextVariant = String(variant || 'title').toLowerCase();
    const preset = __ddcTextVariantPreset__(nextVariant);
    this._config.variant = nextVariant;
    this._config.font_size = preset.font_size;
    this._config.bold = preset.bold;
    this._config.letter_spacing = preset.letter_spacing;
    this._config.line_height = preset.line_height;
    this._renderEditor_();
    this._queueEmit_();
  }
   _renderEditor_() {
    const cfg = this._config || DdcTextCard.getStubConfig();
    const richHtml = cfg.rich_text ? this._seedRichHtml_() : '';
    this.shadowRoot.innerHTML = `
      <style>
        :host{
          display:block;
          color:var(--primary-text-color);
        }
        .editor{
          display:grid;
          gap:14px;
        }
        .intro,
        .section{
          display:grid;
          gap:10px;
          padding:14px 16px;
          border-radius:16px;
          background:rgba(255,255,255,.025);
          border:1px solid rgba(255,255,255,.08);
        }
        .intro{
          line-height:1.5;
          color:var(--secondary-text-color, #94a3b8);
        }
        .intro strong,
        .section-head strong{
          color:var(--primary-text-color);
        }
        .section-head{
          display:grid;
          gap:4px;
        }
        .section-head span{
          color:var(--secondary-text-color, #94a3b8);
        }
        .grid{
          display:grid;
          gap:14px;
          grid-template-columns:repeat(2, minmax(0, 1fr));
        }
        .field{
          display:grid;
          gap:8px;
          min-width:0;
        }
        .field.full{
          grid-column:1 / -1;
        }
        label{
          display:grid;
          gap:6px;
          font-size:.9rem;
          font-weight:650;
        }
        input[type="text"],
        input[type="number"],
        textarea,
        select{
          width:100%;
          box-sizing:border-box;
          min-height:46px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.1);
          background:rgba(4,9,18,.82);
          color:var(--primary-text-color);
          padding:11px 14px;
          outline:none;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
          font:inherit;
        }
        textarea{
          min-height:120px;
          resize:vertical;
          line-height:1.55;
        }
        input[type="text"]:focus,
        input[type="number"]:focus,
        textarea:focus,
        select:focus{
          border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
          box-shadow:
            0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
            inset 0 1px 0 rgba(255,255,255,.04);
        }
        .toggles{
          display:grid;
          gap:12px;
          grid-template-columns:repeat(2, minmax(0, 1fr));
        }
        .toggle{
          display:inline-flex;
          align-items:center;
          gap:10px;
          min-height:46px;
          padding:0 14px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.03);
          font-weight:650;
        }
        .toggle.is-disabled{
          opacity:.5;
        }
        .toggle.is-disabled input{
          pointer-events:none;
        }
        .field.is-disabled{
          opacity:.58;
        }
        .field.is-disabled select,
        .field.is-disabled input{
          pointer-events:none;
        }
        .rich-shell{
          display:grid;
          gap:12px;
        }
        .rich-toolbar{
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          gap:8px;
          padding:10px 12px;
          border-radius:16px;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.03);
        }
        .rich-toolbar select{
          width:auto;
          min-width:148px;
          min-height:42px;
          padding:8px 12px;
          border-radius:12px;
        }
        .rich-divider{
          width:1px;
          align-self:stretch;
          background:rgba(255,255,255,.08);
          margin:0 4px;
        }
        .rich-btn{
          display:grid;
          place-items:center;
          width:42px;
          height:42px;
          padding:0;
          border-radius:12px;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(4,9,18,.82);
          color:var(--primary-text-color);
          cursor:pointer;
          transition:transform .18s ease, border-color .18s ease, background .18s ease;
        }
        .rich-btn:hover{
          transform:translateY(-1px);
          border-color:color-mix(in oklab, var(--primary-color, #ff9800) 48%, rgba(255,255,255,.12));
          background:rgba(255,255,255,.06);
        }
        .rich-btn ha-icon{
          --mdc-icon-size:20px;
        }
        .rich-surface{
          min-height:180px;
          padding:16px 18px;
          border-radius:18px;
          border:1px solid rgba(255,255,255,.1);
          background:rgba(4,9,18,.82);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
          outline:none;
          color:var(--primary-text-color);
          line-height:1.55;
          overflow:auto;
        }
        .rich-surface:focus{
          border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
          box-shadow:
            0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
            inset 0 1px 0 rgba(255,255,255,.04);
        }
        .rich-surface:empty::before{
          content:attr(data-placeholder);
          color:rgba(148,163,184,.7);
          pointer-events:none;
        }
        .rich-surface > *{
          margin:0;
        }
        .rich-surface > * + *{
          margin-top:.5em;
        }
        .rich-surface h1,
        .rich-surface h2,
        .rich-surface h3,
        .rich-surface h4{
          font-weight:800;
          letter-spacing:-0.03em;
        }
        .rich-surface h1{ font-size:2rem; line-height:1; }
        .rich-surface h2{ font-size:1.65rem; line-height:1.06; }
        .rich-surface h3{ font-size:1.35rem; line-height:1.12; }
        .rich-surface h4{ font-size:1.12rem; line-height:1.18; }
        .rich-surface blockquote{
          padding-left:.9em;
          border-left:3px solid color-mix(in oklab, var(--primary-color, #ff9800) 54%, rgba(255,255,255,.16));
          color:var(--secondary-text-color, #94a3b8);
        }
        .rich-surface pre{
          padding:.8em .9em;
          border-radius:14px;
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.08);
          white-space:pre-wrap;
        }
        .rich-surface code{
          font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        }
        .rich-surface ul,
        .rich-surface ol{
          padding-inline-start:1.3em;
        }
        .rich-note{
          color:var(--secondary-text-color, #94a3b8);
          line-height:1.5;
        }
        @media (max-width: 760px){
          .grid,
          .toggles{
            grid-template-columns:1fr;
          }
          .field.full{
            grid-column:auto;
          }
        }
      </style>
      <div class="editor">
        <div class="intro">
          <strong>Build a pure typography object</strong>
          <span>Use this for hero titles, subtle labels, paragraphs or editorial headers directly inside Drag & Drop Card.</span>
        </div>
         <div class="section">
          <div class="section-head">
            <strong>Copy</strong>
            <span>Choose the content and what kind of text object it should behave like.</span>
          </div>
          <div class="toggles">
            <label class="toggle">
              <input id="richText" type="checkbox" ${cfg.rich_text ? 'checked' : ''}>
              <span>Enable rich text mode</span>
            </label>
          </div>
          <div class="grid">
            ${cfg.rich_text ? `
              <div class="field full">
                <span>Rich text</span>
                <div class="rich-shell">
                  <div class="rich-toolbar">
                    <select id="richBlock">
                      <option value="P">Normal</option>
                      <option value="H1">Title / H1</option>
                      <option value="H2">H2</option>
                      <option value="H3">H3</option>
                      <option value="H4">H4</option>
                      <option value="BLOCKQUOTE">Quote</option>
                      <option value="PRE">Code</option>
                    </select>
                    <button class="rich-btn" type="button" data-rich-cmd="bold" title="Bold"><ha-icon icon="mdi:format-bold"></ha-icon></button>
                    <button class="rich-btn" type="button" data-rich-cmd="italic" title="Italic"><ha-icon icon="mdi:format-italic"></ha-icon></button>
                    <button class="rich-btn" type="button" data-rich-cmd="underline" title="Underline"><ha-icon icon="mdi:format-underline"></ha-icon></button>
                    <button class="rich-btn" type="button" data-rich-cmd="strikeThrough" title="Strike"><ha-icon icon="mdi:format-strikethrough-variant"></ha-icon></button>
                    <div class="rich-divider"></div>
                    <button class="rich-btn" type="button" data-rich-cmd="insertUnorderedList" title="Bullet list"><ha-icon icon="mdi:format-list-bulleted"></ha-icon></button>
                    <button class="rich-btn" type="button" data-rich-cmd="insertOrderedList" title="Numbered list"><ha-icon icon="mdi:format-list-numbered"></ha-icon></button>
                    <div class="rich-divider"></div>
                    <button class="rich-btn" type="button" data-rich-cmd="createLink" title="Link"><ha-icon icon="mdi:link-variant"></ha-icon></button>
                    <button class="rich-btn" type="button" data-rich-cmd="unlink" title="Unlink"><ha-icon icon="mdi:link-variant-off"></ha-icon></button>
                    <button class="rich-btn" type="button" data-rich-cmd="removeFormat" title="Clear formatting"><ha-icon icon="mdi:format-clear"></ha-icon></button>
                  </div>
                  <div id="richEditor" class="rich-surface" contenteditable="true" data-placeholder="Write your text here...">${richHtml}</div>
                  <div class="rich-note">Use the toolbar to mix headings, paragraphs, bold, italic, lists, quotes and links in the same text card.</div>
                </div>
              </div>
            ` : `
              <label class="field full">
                <span>Text</span>
                <textarea id="text">${__ddcTableEscapeHtml__(cfg.text || '')}</textarea>
              </label>
            `}
            <label class="field ${cfg.rich_text ? 'is-disabled' : ''}">
              <span>Variant</span>
              <select id="variant" ${cfg.rich_text ? 'disabled' : ''}>
                <option value="title" ${cfg.variant === 'title' ? 'selected' : ''}>Title</option>
                <option value="header" ${cfg.variant === 'header' ? 'selected' : ''}>Header</option>
                <option value="h1" ${cfg.variant === 'h1' ? 'selected' : ''}>H1</option>
                <option value="h2" ${cfg.variant === 'h2' ? 'selected' : ''}>H2</option>
                <option value="h3" ${cfg.variant === 'h3' ? 'selected' : ''}>H3</option>
                <option value="h4" ${cfg.variant === 'h4' ? 'selected' : ''}>H4</option>
                <option value="paragraph" ${cfg.variant === 'paragraph' ? 'selected' : ''}>Paragraph</option>
                <option value="small" ${cfg.variant === 'small' ? 'selected' : ''}>Small</option>
              </select>
            </label>
            <label class="field">
              <span>Alignment</span>
              <select id="align">
                <option value="left" ${cfg.align === 'left' ? 'selected' : ''}>Left</option>
                <option value="center" ${cfg.align === 'center' ? 'selected' : ''}>Center</option>
                <option value="right" ${cfg.align === 'right' ? 'selected' : ''}>Right</option>
              </select>
            </label>
          </div>
        </div>
         <div class="section">
          <div class="section-head">
            <strong>Typography</strong>
            <span>Fine-tune the editorial expression of the text object.</span>
          </div>
          <div class="grid">
            <label class="field full">
              <span>Font family</span>
              <input id="fontFamily" type="text" value="${__ddcTableEscapeAttr__(cfg.font_family || '')}" placeholder="e.g. Georgia, 'Avenir Next', var(--paper-font-common-base_-_font-family)" />
            </label>
            <label class="field">
              <span>Font size</span>
              <input id="fontSize" type="number" min="8" max="200" step="1" value="${Number(cfg.font_size || 42)}" />
            </label>
            <label class="field">
              <span>Color</span>
              <input id="color" type="text" value="${__ddcTableEscapeAttr__(cfg.color || '')}" placeholder="var(--primary-text-color)" />
            </label>
            <label class="field">
              <span>Letter spacing</span>
              <input id="letterSpacing" type="number" min="-1" max="2" step="0.01" value="${Number(cfg.letter_spacing ?? -0.03)}" />
            </label>
            <label class="field">
              <span>Line height</span>
              <input id="lineHeight" type="number" min="0.7" max="3" step="0.05" value="${Number(cfg.line_height ?? 1.05)}" />
            </label>
          </div>
          <div class="toggles">
            <label class="toggle ${cfg.rich_text ? 'is-disabled' : ''}">
              <input id="bold" type="checkbox" ${cfg.bold ? 'checked' : ''} ${cfg.rich_text ? 'disabled' : ''}>
              <span>Bold</span>
            </label>
            <label class="toggle ${cfg.rich_text ? 'is-disabled' : ''}">
              <input id="italic" type="checkbox" ${cfg.italic ? 'checked' : ''} ${cfg.rich_text ? 'disabled' : ''}>
              <span>Italic</span>
            </label>
          </div>
        </div>
      </div>`;
     this._bindField_('#richText', 'rich_text', 'checkbox');
    if (cfg.rich_text) this._bindRichEditor_();
    else this._bindField_('#text', 'text');
    this._bindField_('#variant', 'variant', 'select');
    this._bindField_('#align', 'align', 'select');
    this._bindField_('#fontFamily', 'font_family');
    this._bindField_('#fontSize', 'font_size', 'number');
    this._bindField_('#color', 'color');
    this._bindField_('#letterSpacing', 'letter_spacing', 'number');
    this._bindField_('#lineHeight', 'line_height', 'number');
    this._bindField_('#bold', 'bold', 'checkbox');
    this._bindField_('#italic', 'italic', 'checkbox');
     const richToggle = this.shadowRoot.querySelector('#richText');
    if (richToggle) {
      richToggle.addEventListener('change', () => {
        if (richToggle.checked) {
          this._config.bold = false;
          this._config.italic = false;
          this._seedRichHtml_();
        }
        this._renderEditor_();
        this._queueEmit_();
      });
    }
  }
}
