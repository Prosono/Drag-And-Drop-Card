/*!
 * Drag & Drop Card (Proprietary)
 * Copyright (c) 2025 <SMARTI AS>
 * Use is governed by EULA.md. Third-party notices: THIRD_PARTY_NOTICES.md
 */

/*
 * Entry point for the Drag & Drop Card custom element.
 *
 * This file intentionally stays small: it exposes bundled dependencies on window,
 * defines the host element shell, and delegates all behavior installation to core/install-features.js.
 */

// — bundle-time imports so we don't rely on CDNs in HACS installs —
import interact from 'interactjs';
import jsyaml from 'js-yaml';
import { initializeDragAndDropCardInstance } from './core/element-state.js';
import { installDragAndDropCardFeatures } from './core/install-features.js';

// expose for your existing code that checks window.interact/jsyaml
if (!window.interact) window.interact = interact;
if (!window.jsyaml) window.jsyaml = jsyaml;

// pretty console banner + version
const VERSION = __VERSION__;
console.info(
  `%c drag-and-drop-card %c v${VERSION} `,
  'color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px',
  'color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0'
);

// drag-and-drop-card.js
/* eslint-disable no-console */
console.info('%c drag-and-drop-card loaded', 'color:#03a9f4;font-weight:700;');

class DragAndDropCard extends HTMLElement {
  __booting = false;

  constructor() {
    super();
    initializeDragAndDropCardInstance(this);
  }
  // === GRID SELECT PATCH START (fields) ===
  _gridCanvas = null;
  _gridCtx = null;
  _gridCols = 0;
  _gridRows = 0;
  _gridCellSize = 0;
  _gridDown = false;
  _gridStartCol = -1;
  _gridStartRow = -1;
  _gridHoverCol = -1;
  _gridHoverRow = -1;
  _gridCurrCol = -1;
  _gridCurrRow = -1;
  _gridDirty = false;
  _gridRAF = 0;
  _gridTile = null;
  __gridPrevEditMode = undefined;
  __gridRO = null;
  __gridPollT = null;
  // === GRID SELECT PATCH END (fields) ===
}

installDragAndDropCardFeatures(DragAndDropCard, VERSION);
