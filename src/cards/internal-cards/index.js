/*
 * Internal companion card registry.
 *
 * This module re-exports each internal card implementation, creates instances from config type,
 * and registers all card/editor custom elements exactly once.
 */

import {
  DDC_HTML_CARD_TAG,
  DDC_HTML_CARD_EDITOR_TAG,
  DDC_LINE_CARD_TAG,
  DDC_LINE_CARD_EDITOR_TAG,
  DDC_TABLE_CARD_TAG,
  DDC_TABLE_CARD_EDITOR_TAG,
  DDC_ICON_CARD_TAG,
  DDC_ICON_CARD_EDITOR_TAG,
  DDC_TEXT_CARD_TAG,
  DDC_TEXT_CARD_EDITOR_TAG,
  __DDC_INTERNAL_CARD_TAGS__,
} from './element-tags.js';
import { DdcLineCard, DdcLineCardEditor } from './line-card/index.js';
import { DdcTableCard, DdcTableCardEditor } from './table-card/index.js';
import { DdcIconCard, DdcIconCardEditor } from './icon-card/index.js';
import { DdcTextCard, DdcTextCardEditor } from './text-card/index.js';
import { DdcHtmlCard, DdcHtmlCardEditor } from './html-card/index.js';

export * from './element-tags.js';
export * from './line-card/index.js';
export * from './table-card/index.js';
export * from './icon-card/index.js';
export * from './text-card/index.js';
export * from './html-card/index.js';

// This factory is used by the main card renderer when a saved layout entry points
// to one of DDC's internal card types instead of a regular Lovelace card.
export function __createDdcInternalCardElement__(cfg, hass) {
  const type = String(cfg?.type || '');
  const tag = __DDC_INTERNAL_CARD_TAGS__[type];
  if (!tag) return null;
  const el = document.createElement(tag);
  try { el.setConfig?.(cfg); } catch {}
  try { el.hass = hass; } catch {}
  return el;
}

// Registration is centralized here so the main feature installer can define all
// companion cards and their editors with one call, while each implementation
// stays isolated in its own folder.
export function registerDdcInternalCards() {
  if (!customElements.get(DDC_LINE_CARD_TAG)) {
    customElements.define(DDC_LINE_CARD_TAG, DdcLineCard);
  }
  if (!customElements.get(DDC_LINE_CARD_EDITOR_TAG)) {
    customElements.define(DDC_LINE_CARD_EDITOR_TAG, DdcLineCardEditor);
  }
  if (!customElements.get(DDC_TABLE_CARD_TAG)) {
    customElements.define(DDC_TABLE_CARD_TAG, DdcTableCard);
  }
  if (!customElements.get(DDC_TABLE_CARD_EDITOR_TAG)) {
    customElements.define(DDC_TABLE_CARD_EDITOR_TAG, DdcTableCardEditor);
  }
  if (!customElements.get(DDC_ICON_CARD_TAG)) {
    customElements.define(DDC_ICON_CARD_TAG, DdcIconCard);
  }
  if (!customElements.get(DDC_ICON_CARD_EDITOR_TAG)) {
    customElements.define(DDC_ICON_CARD_EDITOR_TAG, DdcIconCardEditor);
  }
  if (!customElements.get(DDC_TEXT_CARD_TAG)) {
    customElements.define(DDC_TEXT_CARD_TAG, DdcTextCard);
  }
  if (!customElements.get(DDC_TEXT_CARD_EDITOR_TAG)) {
    customElements.define(DDC_TEXT_CARD_EDITOR_TAG, DdcTextCardEditor);
  }
  if (!customElements.get(DDC_HTML_CARD_TAG)) {
    customElements.define(DDC_HTML_CARD_TAG, DdcHtmlCard);
  }
  if (!customElements.get(DDC_HTML_CARD_EDITOR_TAG)) {
    customElements.define(DDC_HTML_CARD_EDITOR_TAG, DdcHtmlCardEditor);
  }
}
