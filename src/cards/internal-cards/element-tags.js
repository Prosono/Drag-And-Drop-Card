/*
 * Custom element tag constants for the internal companion cards.
 *
 * Keeping the tag names in one place prevents registry, picker, and card factory code from drifting
 * when an internal card or editor tag changes.
 */

export const DDC_HTML_CARD_TAG = 'ddc-html-card';
export const DDC_HTML_CARD_EDITOR_TAG = 'ddc-html-card-editor';
export const DDC_LINE_CARD_TAG = 'ddc-line-card';
export const DDC_LINE_CARD_EDITOR_TAG = 'ddc-line-card-editor';
export const DDC_TABLE_CARD_TAG = 'ddc-table-card';
export const DDC_TABLE_CARD_EDITOR_TAG = 'ddc-table-card-editor';
export const DDC_ICON_CARD_TAG = 'ddc-icon-card';
export const DDC_ICON_CARD_EDITOR_TAG = 'ddc-icon-card-editor';
export const DDC_TEXT_CARD_TAG = 'ddc-text-card';
export const DDC_TEXT_CARD_EDITOR_TAG = 'ddc-text-card-editor';

export const __DDC_INTERNAL_CARD_TAGS__ = {
  'custom:ddc-html-card': DDC_HTML_CARD_TAG,
  'custom:ddc-line-card': DDC_LINE_CARD_TAG,
  'custom:ddc-table-card': DDC_TABLE_CARD_TAG,
  'custom:ddc-icon-card': DDC_ICON_CARD_TAG,
  'custom:ddc-text-card': DDC_TEXT_CARD_TAG,
};
