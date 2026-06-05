/*
 * Dashboard shell construction and UI event binding.
 *
 * This module creates the shadow DOM shell once, stores references to major toolbar/sidebar elements,
 * and wires buttons, shortcuts, preview controls, and resize observers.
 */

import { getDashboardShellTemplate } from './shell-template.js';

const dashboardShellBindingMethods = {
  _buildDashboardShellOnce_() {
    if (this._built) return;
    this._built = true;
    this.shadowRoot.innerHTML = getDashboardShellTemplate();
    this.cardContainer = this.shadowRoot.querySelector('#cardContainer');
    try { this._applyBackgroundFromConfig?.(); } catch {}

    // Reapply screensaver settings now that the card container exists. This ensures
    // the idle timer starts immediately and the overlay is appended correctly.
    try { this._updateScreensaverSettings?.(); } catch {}
    this.addButton     = this.shadowRoot.querySelector('#addCardBtn');
    this.reloadBtn     = this.shadowRoot.querySelector('#reloadBtn');
    this.diagBtn       = this.shadowRoot.querySelector('#diagBtn');
    this.exitEditBtn   = this.shadowRoot.querySelector('#exitEditBtn');
    this.storeBadge    = this.shadowRoot.querySelector('#storeBadge');
    this.exportBtn     = this.shadowRoot.querySelector('#exportBtn');
    this.importBtn     = this.shadowRoot.querySelector('#importBtn');
    this.exploreBtn    = this.shadowRoot.querySelector('#exploreBtn');
    this.applyLayoutBtn= this.shadowRoot.querySelector('#applyLayoutBtn');
    this.toolbarAutoSaveBtn = this.shadowRoot.querySelector('#toolbarAutoSaveBtn');
    this.toolbarToggleBtn = this.shadowRoot.querySelector('#toolbarToggleBtn');
    // Copy and Paste buttons (for edit mode)
    this.copyBtn      = this.shadowRoot.querySelector('#copyBtn');
    this.pasteBtn     = this.shadowRoot.querySelector('#pasteBtn');
    this.undoBtn      = this.shadowRoot.querySelector('#undoBtn');
    this.redoBtn      = this.shadowRoot.querySelector('#redoBtn');
    this.lineModeBtn  = this.shadowRoot.querySelector('#lineModeBtn');
    this.settingsBtn  = this.shadowRoot.querySelector('#settingsBtn');
    this.tabsBar      = this.shadowRoot.querySelector('#tabsBar');
    this.layersBar    = this.shadowRoot.querySelector('#layersBar');
    this.sidebarHost  = this.shadowRoot.querySelector('#ddcSidebar');
    this.rootEl       = this.shadowRoot.querySelector('.ddc-root');
    this.loadingOverlay = this.shadowRoot.querySelector('#ddcLoadingOverlay');
    this.previewModeControls = this.shadowRoot.querySelector('#previewModeControls');
    this.previewModeButtons = Array.from(this.shadowRoot.querySelectorAll('[data-preview-mode]'));
    this.previewMeta = this.shadowRoot.querySelector('#previewModeMeta');
    this.previewWidthInput = this.shadowRoot.querySelector('#previewWidthInput');
    this.previewHeightInput = this.shadowRoot.querySelector('#previewHeightInput');
    this.previewRatioLockButton = this.shadowRoot.querySelector('#previewRatioLockButton');
    this.previewSwapButton = this.shadowRoot.querySelector('#previewSwapButton');
    this.shadowRoot.querySelectorAll('.ddc-toolbar [data-tooltip]').forEach((node) => {
      try {
        const text = String(node.getAttribute('data-tooltip') || '').trim();
        if (text && !node.getAttribute('title')) node.setAttribute('title', text);
      } catch {}
    });
    try { this._syncToolbarAutoSaveState_?.(); } catch {}
    const toolbarSegmentButtons = Array.from(this.shadowRoot.querySelectorAll('[data-toolbar-segment]'));
    toolbarSegmentButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        this._activateToolbarSegment_?.(btn.dataset.toolbarSegment || 'primary', { toggle: true });
      });
      btn.addEventListener('keydown', (ev) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(ev.key)) return;
        ev.preventDefault();
        const current = toolbarSegmentButtons.indexOf(btn);
        let next = current;
        if (ev.key === 'ArrowRight') next = (current + 1) % toolbarSegmentButtons.length;
        if (ev.key === 'ArrowLeft') next = (current - 1 + toolbarSegmentButtons.length) % toolbarSegmentButtons.length;
        if (ev.key === 'Home') next = 0;
        if (ev.key === 'End') next = toolbarSegmentButtons.length - 1;
        const target = toolbarSegmentButtons[next];
        this._activateToolbarSegment_?.(target?.dataset?.toolbarSegment || 'primary', { focus: true, open: true });
      });
    });
    this.toolbarToggleBtn?.addEventListener('click', () => {
      this._setToolbarExpanded_?.(!this.__toolbarExpanded);
    });
    try { this._ensureStreamlinedToolbarObserver_?.(); } catch {}
    this.previewModeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.getAttribute('aria-disabled') === 'true') return;
        this._setViewportPreviewMode_(btn.dataset.previewMode || 'live');
      });
    });
    const commitPreviewWidth = () => this._commitResponsiveViewportField_?.('width');
    const commitPreviewHeight = () => this._commitResponsiveViewportField_?.('height');
    this.previewWidthInput?.addEventListener('change', commitPreviewWidth);
    this.previewWidthInput?.addEventListener('blur', commitPreviewWidth);
    this.previewHeightInput?.addEventListener('change', commitPreviewHeight);
    this.previewHeightInput?.addEventListener('blur', commitPreviewHeight);
    this.previewWidthInput?.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        commitPreviewWidth();
        this.previewWidthInput?.blur?.();
      }
    });
    this.previewHeightInput?.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        commitPreviewHeight();
        this.previewHeightInput?.blur?.();
      }
    });
    this.previewWidthInput?.addEventListener('wheel', (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
    }, { passive: false });
    this.previewHeightInput?.addEventListener('wheel', (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
    }, { passive: false });
    this.previewRatioLockButton?.addEventListener('click', () => this._toggleResponsiveViewportAspectLock_?.());
    this.previewSwapButton?.addEventListener('click', () => this._swapResponsiveViewportOrientation_?.());
    try { this._syncViewportPreviewUI_?.(); } catch {}
    try { this._renderTabs(); this._renderLayersBar(); this._applyActiveTab(); } catch {}
    try { this._syncConnectorUiState_?.(); } catch {}


    this._applyGridVars();

    if (!this.__uiBindingsReady) {
      this.addButton?.addEventListener('click', () => {
        if (!this.editMode) this._toggleEditMode(true);
        this._openCardManager();
      });
      this.reloadBtn?.addEventListener('click', () => this._initialLoad(true));
      this.diagBtn?.addEventListener('click', () => this._openDiagnostics());
      this.exitEditBtn?.addEventListener('click', () => this._toggleEditMode(false));
      this.exportBtn?.addEventListener('click', () => this._exportDesign());
      this.importBtn?.addEventListener('click', () => this._importDesign());
      this.applyLayoutBtn?.addEventListener('click', () => this._saveLayout(false));
      this.toolbarAutoSaveBtn?.addEventListener('click', () => this._setToolbarAutoSave_?.(!this.autoSave));
      this.copyBtn?.addEventListener('click', () => this._copySelection());
      this.pasteBtn?.addEventListener('click', () => this._pasteClipboard());
      this.undoBtn?.addEventListener('click', () => this._undoLayoutHistory_?.());
      this.redoBtn?.addEventListener('click', () => this._redoLayoutHistory_?.());
      this.lineModeBtn?.addEventListener('click', () => this._toggleConnectorDrawMode_?.());
      this.settingsBtn?.addEventListener('click', () => {
        this._closeToolbarDropdown_?.();
        this._openDashboardSettings();
      });
      this.exploreBtn?.addEventListener('click', () =>
        window.open('https://hads.smarti.dev/', '_blank', 'noopener,noreferrer')
      );

      this.__saveShortcutHandler = (e) => {
        if (!this.editMode) return;
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
          e.preventDefault();
          this._saveLayout(false);
        }
      };
      window.addEventListener('keydown', this.__saveShortcutHandler);

      this.__escapeShortcutHandler = (e) => {
        if (!this.editMode) return;
        const inField = this._isTypingTarget_?.(e);
        if (e.key === 'Escape') {
          if (this._isConnectorSettingsOpen_?.()) {
            e.preventDefault();
            this._closeConnectorSettings_?.();
            return;
          }
          if (this._connectorDrawMode || this._connectorDraft?.points?.length) {
            e.preventDefault();
            this._cancelConnectorDraft_?.();
            return;
          }
          this._toggleEditMode(false);
          return;
        }
        if (inField) return;
        if (e.key === 'Enter' && this._connectorDrawMode && this._connectorDraft?.points?.length >= 2) {
          e.preventDefault();
          this._finalizeConnectorDraft_?.({ openSettings: true });
          return;
        }
        if ((e.key === 'Delete' || e.key === 'Backspace') && this._selectedConnectorId) {
          e.preventDefault();
          const selectedId = this._selectedConnectorId;
          this._selectedConnectorId = null;
          this._setCurrentConnectorEntries_(
            (this._getCurrentConnectorEntries_() || []).filter((entry) => entry.id !== selectedId),
            { reason: 'connector-delete', render: true }
          );
          this._closeConnectorSettings_?.();
        }
      };
      window.addEventListener('keydown', this.__escapeShortcutHandler);

      this.__containerBlankMouseDown = (e) => {
        if (!this.editMode) return;
        if (typeof e.button === 'number' && e.button !== 0) return;
        if (e.target.closest('.card-wrapper')) return;
        const connectorLayer = this._ensureConnectorsLayer_?.();
        if (connectorLayer && connectorLayer.contains(e.target)) return;
        if (!e.shiftKey && !e.ctrlKey && !e.metaKey) {
          this._clearSelection();
          if (this._selectedConnectorId) {
            this._selectedConnectorId = null;
            this._closeConnectorSettings_?.();
            this._renderConnectors_?.();
          }
        }
      };
      this.cardContainer?.addEventListener('mousedown', this.__containerBlankMouseDown);

      this.__uiBindingsReady = true;
    }

    if (!this.__ddcResizeObs && this.autoResizeCards) {
      this.__ddcResizeObs = new ResizeObserver(() => this._requestAutoScaleFromObserver_?.());
      try { this.__ddcResizeObs.observe(this); } catch {}
      try { this.__ddcResizeObs.observe(this.cardContainer); } catch {}
      try { if (this.parentElement) this.__ddcResizeObs.observe(this.parentElement); } catch {}
      try { if (this.offsetParent) this.__ddcResizeObs.observe(this.offsetParent); } catch {}
    } else if (this.__ddcResizeObs && !this.autoResizeCards) {
      try { this.__ddcResizeObs.disconnect(); } catch {}
      this.__ddcResizeObs = null;
    }

    this._applyContainerSizingFromConfig(true);
    this._applyAutoScale?.();
    this._installLongPressToEnterEdit();
    this._installMiddleMousePan_?.();
    this._startScaleWatch?.();

    if (!this.__selectionMarqueeInstalled) {
      this._installSelectionMarquee();
      this.__selectionMarqueeInstalled = true;
    }
  },
};

export function installDashboardShellBindingMethods(proto) {
  Object.entries(dashboardShellBindingMethods).forEach(([key, value]) => {
    if (!Object.prototype.hasOwnProperty.call(proto, key)) {
      Object.defineProperty(proto, key, {
        value,
        writable: true,
        configurable: true,
      });
    }
  });
}
