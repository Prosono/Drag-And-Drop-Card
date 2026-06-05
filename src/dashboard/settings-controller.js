/*
 * Dashboard settings panel controller.
 *
 * This module renders the settings UI, reads user input back into dashboard options, and coordinates
 * save/apply flows without owning the static CSS or template strings directly.
 */

import { getDashboardSettingsTemplate } from './settings-template.js';
import { renderStylePresetLibrary, resolveStylePreviewBackground } from './style-presets.js';
import { getSettingsStyles } from '../styles/dashboard-settings-styles.js';

/* ------------------------ Dashboard Settings ------------------------ */
  /**
   * Opens a settings dialog allowing the user to configure dashboard‑wide
   * options such as grid size, auto resize, animations and HA chrome
   * visibility. The menu is designed to be simple and intuitive. Changes
   * are applied when the user clicks Save.
   */
const dashboardSettingsMethods = {
  _ensureSettingsStyles_() {
    if (this.shadowRoot.querySelector('#ddc-settings-styles')) return;
    const style = document.createElement('style');
    style.id = 'ddc-settings-styles';
    style.textContent = getSettingsStyles();
    this.shadowRoot.appendChild(style);
  },

  _openDashboardSettings() {
    // Build modal container
    const modal = document.createElement('div');
    modal.className = 'modal';
    const settingsThemeMode = this._getEffectiveDashboardThemeMode_?.()
      || (window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light');
    modal.dataset.ddcTheme = settingsThemeMode === 'dark' ? 'dark' : 'light';
    // Use the existing .dialog styles for consistent centering and sizing. Limit
    // the maximum width so the settings sheet doesn't overwhelm the screen.
    this._ensureSettingsStyles_();



    modal.innerHTML = getDashboardSettingsTemplate(this._renderScreenSaverStyleOptions_?.() || '');

    // Only allow one modal at a time across the card. If any modal exists in
    // the shadow root (including other DDC modals), remove it before
    // opening the settings. This prevents overlapping dialog layers.
    const existingModal = this.shadowRoot.querySelector('.modal');
    if (existingModal) {
      try { existingModal.remove(); } catch {}
      // clear any stored references
      if (this.__settingsModal === existingModal) this.__settingsModal = null;
    }

    // If a previous settings modal specifically exists, remove it as well
    if (this.__settingsModal) {
      try { this.__settingsModal.remove(); } catch {}
      this.__settingsModal = null;
    }
    // Append to our own shadow root so built-in .modal styles apply and centering works
    this.__settingsModal = modal;
    this.shadowRoot.appendChild(modal);

    const settingsTabs = Array.from(modal.querySelectorAll('[data-settings-tab]'));
    const settingsSections = Array.from(modal.querySelectorAll('[data-settings-section]'));
    const settingsBody = modal.querySelector('.settings-body');
    const settingsTabKeys = new Set(settingsTabs.map((btn) => btn.dataset.settingsTab).filter(Boolean));
    const activateSettingsTab = (key, { persist = true, focus = false } = {}) => {
      const nextKey = settingsTabKeys.has(key) ? key : 'layout';
      if (settingsBody) settingsBody.dataset.activeTab = nextKey;
      settingsTabs.forEach((btn) => {
        const active = btn.dataset.settingsTab === nextKey;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
        btn.setAttribute('tabindex', active ? '0' : '-1');
        if (active) {
          try { btn.scrollIntoView({ block: 'nearest', inline: 'nearest' }); } catch {}
          if (focus) {
            try { btn.focus({ preventScroll: true }); } catch {}
          }
        }
      });
      settingsSections.forEach((section) => {
        section.hidden = section.dataset.settingsSection !== nextKey;
      });
      if (persist) {
        try { localStorage.setItem(`ddc_settings_tab_${this.storageKey || 'default'}`, nextKey); } catch {}
      }
    };
    settingsTabs.forEach((btn) => {
      btn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        activateSettingsTab(btn.dataset.settingsTab);
      });
      btn.addEventListener('keydown', (ev) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(ev.key)) return;
        ev.preventDefault();
        const currentIndex = settingsTabs.indexOf(btn);
        let nextIndex = currentIndex;
        if (ev.key === 'ArrowRight') nextIndex = (currentIndex + 1) % settingsTabs.length;
        if (ev.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + settingsTabs.length) % settingsTabs.length;
        if (ev.key === 'Home') nextIndex = 0;
        if (ev.key === 'End') nextIndex = settingsTabs.length - 1;
        activateSettingsTab(settingsTabs[nextIndex]?.dataset.settingsTab, { focus: true });
      });
    });
    let initialSettingsTab = 'layout';
    try {
      const storedSettingsTab = localStorage.getItem(`ddc_settings_tab_${this.storageKey || 'default'}`);
      if (settingsTabKeys.has(storedSettingsTab)) initialSettingsTab = storedSettingsTab;
    } catch {}
    activateSettingsTab(initialSettingsTab, { persist: false });

    const wikiBaseUrl = 'https://hads.smarti.dev/wiki';
    const wikiDoc = (slug, label) => ({ href: `${wikiBaseUrl}/${slug}`, label });
    const sectionDocsByKey = {
      layout: wikiDoc('layout', 'Wiki: Layout'),
      appearance: wikiDoc('appearance', 'Wiki: Appearance'),
      behaviour: wikiDoc('behaviour', 'Wiki: Behaviour'),
      tabs: wikiDoc('tabs', 'Wiki: Tabs'),
      layers: wikiDoc('layers', 'Wiki: Layers'),
      screensaver: wikiDoc('screen-saver', 'Wiki: Screen saver'),
      packages: wikiDoc('packages', 'Wiki: Packages'),
    };
    const attachSettingsDocLinks = () => {
      settingsSections.forEach((section) => {
        const sectionKey = section.dataset?.settingsSection || '';
        const doc = sectionDocsByKey[sectionKey] || wikiDoc('start-here', 'Wiki: Overview');
        const head = section.querySelector('.section-head');
        if (!head || !doc?.href || head.querySelector('.tab-doc-link')) return;
        const link = document.createElement('a');
        link.className = 'setting-doc-link tab-doc-link';
        link.href = doc.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `Open ${String(doc.label || 'wiki').replace(/^Wiki:\s*/i, '')} documentation`);
        link.innerHTML = '<span class="setting-doc-bang" aria-hidden="true">!</span><span></span><ha-icon icon="mdi:open-in-new" aria-hidden="true"></ha-icon>';
        const label = link.querySelector('span:not(.setting-doc-bang)');
        if (label) label.textContent = doc.label || 'Wiki: Overview';
        link.addEventListener('click', (ev) => ev.stopPropagation());
        head.appendChild(link);
      });
    };

    // Prepopulate current settings
    const chkAuto    = modal.querySelector('#ddc-setting-autoResize');
    const inpStorageKey = modal.querySelector('#ddc-setting-storageKey');
    const inpGrid    = modal.querySelector('#ddc-setting-gridSize');

    const chkAnim    = modal.querySelector('#ddc-setting-animate');
    const chkLoadingAnimation = modal.querySelector('#ddc-setting-loadingAnimation');
    const chkHdr     = modal.querySelector('#ddc-setting-hideHdr');
    const chkBar     = modal.querySelector('#ddc-setting-hideSbar');
    const chkSnap    = modal.querySelector('#ddc-setting-dragSnap');
    const chkASave   = modal.querySelector('#ddc-setting-autoSave');
    const inpDeb     = modal.querySelector('#ddc-setting-autoSaveDebounce');
    const selSize    = modal.querySelector('#ddc-setting-sizeMode');
    const autoViewportLimitsSetting = modal.querySelector('[data-auto-viewport-limits]');
    const inpAutoViewportMaxWidth = modal.querySelector('#ddc-setting-autoViewportMaxWidth');
    const inpAutoScaleMax = modal.querySelector('#ddc-setting-autoScaleMax');
    const chkDoNotResizeText = modal.querySelector('#ddc-setting-doNotResizeText');
    const txtDoNotResizeTextHint = modal.querySelector('#ddc-setting-doNotResizeTextHint');
    const chkOuterGridBuffer = modal.querySelector('#ddc-setting-outerGridBuffer');
    const rngOuterGridBufferCells = modal.querySelector('#ddc-setting-outerGridBufferCells');
    const outOuterGridBufferCells = modal.querySelector('#ddc-outerGridBufferCellsOut');
    const outerGridBufferCellsControl = modal.querySelector('[data-outer-grid-buffer-cells]');
    const chkOverlap = modal.querySelector('#ddc-setting-disableOverlap');
    const inpEditPin = modal.querySelector('#ddc-setting-editPin');
    const selDashboardTheme = modal.querySelector('#ddc-setting-dashboardTheme');
    const txtDashboardThemeHint = modal.querySelector('#ddc-setting-dashboardThemeHint');
    const chkDashboardThemeOverrideAllDesign = modal.querySelector('#ddc-setting-dashboardThemeOverrideAllDesign');
    const txtDashboardThemeOverrideAllDesignHint = modal.querySelector('#ddc-setting-dashboardThemeOverrideAllDesignHint');
    const dashboardThemeColorWarning = modal.querySelector('[data-theme-color-warning]');
    const inpCBg     = modal.querySelector('#ddc-setting-containerBg');
    const chkApplyPageBg = modal.querySelector('#ddc-setting-applyPageBackground');
    const inpCardBg  = modal.querySelector('#ddc-setting-cardBg');
    const btnRandomAllStyle     = modal.querySelector('#ddc-randomize-allStyle');
    const btnRandomContainerBg = modal.querySelector('#ddc-randomize-containerBg');
    const btnRandomCardBg      = modal.querySelector('#ddc-randomize-cardBg');
    const btnRandomParticles   = modal.querySelector('#ddc-randomize-particles');
    const chkShadow  = modal.querySelector('#ddc-setting-cardShadow');
    const rngShadowIntensity = modal.querySelector('#ddc-setting-cardShadowIntensity');
    const outShadowIntensity = modal.querySelector('#ddc-cardShadowIntensityOut');
    const shadowIntensitySetting = modal.querySelector('[data-shadow-intensity-setting]');
    const inpBgImg   = modal.querySelector('#ddc-setting-bgImg');
    const inpBgUpload = modal.querySelector('#ddc-bg-upload');
    const btnBrowseMediaLibrary = modal.querySelector('#ddc-browse-media-library');
    const defaultBgTrack = modal.querySelector('#ddc-default-bg-track');
    const btnDefaultBgPrev = modal.querySelector('#ddc-default-bg-prev');
    const btnDefaultBgNext = modal.querySelector('#ddc-default-bg-next');
    const selBgRepeat     = modal.querySelector('#ddc-bg-repeat');
    const selBgSize       = modal.querySelector('#ddc-bg-size');
    const selBgPosition   = modal.querySelector('#ddc-bg-position');
    const selBgAttachment = modal.querySelector('#ddc-bg-attachment');
    const rngBgOpacity    = modal.querySelector('#ddc-bg-opacity');
    const outBgOpacity    = modal.querySelector('#ddc-bg-opacity-out');
    const chkDebug   = modal.querySelector('#ddc-setting-debug');

    // Screen saver controls
    const chkScreenSaver   = modal.querySelector('#ddc-setting-screenSaverEnabled');
    const rngScreenDelay   = modal.querySelector('#ddc-setting-screenSaverDelay');
    const outScreenDelay   = modal.querySelector('#ddc-screenSaverDelayOut');
    const inpScreenSaverStyle = modal.querySelector('#ddc-setting-screenSaverStyle');
    const screenSaverStyleCarousel = modal.querySelector('#ddc-screenSaverStyleCarousel');
    const screenSaverStyleCards = Array.from(modal.querySelectorAll('[data-screensaver-style]'));
    const screenSaverStylePrev = modal.querySelector('#ddc-screenSaverStylePrev');
    const screenSaverStyleNext = modal.querySelector('#ddc-screenSaverStyleNext');
    const screenSaverStyleName = modal.querySelector('#ddc-screenSaverStyleName');
    const screenSaverStyleNote = modal.querySelector('#ddc-screenSaverStyleNote');
    const screenSaverEntityList = modal.querySelector('#ddc-screenSaverEntityList');

    const selBgMode           = modal.querySelector('#ddc-bg-mode');
    const secImg              = modal.querySelector('[data-bg-section="image"]');
    const secParticles        = modal.querySelector('[data-bg-section="particles"]');
    const secYoutube          = modal.querySelector('[data-bg-section="youtube"]');
    const inpParticlesUrl     = modal.querySelector('#ddc-particles-url');
    const chkParticlesPointer = modal.querySelector('#ddc-particles-pointer');
    const rngParticlesCount   = modal.querySelector('#ddc-particles-count');
    const outParticlesCount   = modal.querySelector('#ddc-particles-count-out');
    const rngParticlesSpeed   = modal.querySelector('#ddc-particles-speed');
    const outParticlesSpeed   = modal.querySelector('#ddc-particles-speed-out');
    const rngParticlesSize    = modal.querySelector('#ddc-particles-size');
    const outParticlesSize    = modal.querySelector('#ddc-particles-size-out');
    const rngParticlesOpacity = modal.querySelector('#ddc-particles-opacity');
    const outParticlesOpacity = modal.querySelector('#ddc-particles-opacity-out');
    const chkParticlesLines   = modal.querySelector('#ddc-particles-lines');
    const rngParticlesLineDistance = modal.querySelector('#ddc-particles-line-distance');
    const outParticlesLineDistance = modal.querySelector('#ddc-particles-line-distance-out');
    const rngParticlesInteractionDistance = modal.querySelector('#ddc-particles-interaction-distance');
    const outParticlesInteractionDistance = modal.querySelector('#ddc-particles-interaction-distance-out');
    const inpParticlesColor   = modal.querySelector('#ddc-particles-color');
    const inpParticlesLineColor = modal.querySelector('#ddc-particles-line-color');
    const selParticlesShape   = modal.querySelector('#ddc-particles-shape');
    const selParticlesHoverMode = modal.querySelector('#ddc-particles-hover-mode');
    const selParticlesClickMode = modal.querySelector('#ddc-particles-click-mode');
    const inpYtUrl            = modal.querySelector('#ddc-youtube-url');
    const inpYtStart          = modal.querySelector('#ddc-youtube-start');
    const inpYtEnd            = modal.querySelector('#ddc-youtube-end');
    const chkYtMute           = modal.querySelector('#ddc-youtube-mute');
    const chkYtLoop           = modal.querySelector('#ddc-youtube-loop');
    const selYtSize           = modal.querySelector('#ddc-youtube-size');
    const selYtPosition       = modal.querySelector('#ddc-youtube-position');
    const selYtAttachment     = modal.querySelector('#ddc-youtube-attachment');
    const rngYtOpacity       = modal.querySelector('#ddc-youtube-opacity');
    const outYtOpacity       = modal.querySelector('#ddc-youtube-opacity-out');
    const selTabsPosition    = modal.querySelector('#ddc-setting-tabsPosition');
    const chkSidebarEnabled  = modal.querySelector('#ddc-setting-sidebarEnabled');
    const inpSidebarCanvasHeight = modal.querySelector('#ddc-setting-sidebarCanvasHeight');
    const sidebarItemInputs = Array.from(modal.querySelectorAll('[id^="ddc-setting-sidebarItem"]'));
    const sidebarHeaderInputs = Array.from(modal.querySelectorAll('input[name="ddc-sidebar-header"]'));
    const sidebarOrderListEl = modal.querySelector('#ddc-sidebar-order-list');
    const inpSidebarHomeImage = modal.querySelector('#ddc-setting-sidebarHomeImage');
    const inpSidebarHomeImageFile = modal.querySelector('#ddc-setting-sidebarHomeImageFile');
    const btnSidebarHomeImageClear = modal.querySelector('#ddc-setting-sidebarHomeImageClear');
    const sidebarHomeImagePreview = modal.querySelector('#ddc-setting-sidebarHomeImagePreview');
    const inpSidebarCalendarEntities = modal.querySelector('#ddc-setting-sidebarCalendarEntities');
    const chkLayersEnabled   = modal.querySelector('#ddc-setting-layersEnabled');
    const chkLayersButtonDetails = modal.querySelector('#ddc-setting-layersButtonDetails');
    const layersListEl       = modal.querySelector('#ddc-layers-list');
    const newLayerNameInput  = modal.querySelector('#ddc-new-layer-name');
    const addLayerBtn        = modal.querySelector('#ddc-add-layer-btn');
    const packagesListEl     = modal.querySelector('#ddc-packages-list');
    const addFeatureBtns     = Array.from(modal.querySelectorAll('.ddc-feature-add-btn'));
    const packageDiagnosticsBtn = modal.querySelector('#ddc-package-diagnostics-btn');
    const packageDiagnosticsEl  = modal.querySelector('#ddc-package-diagnostics');

    // hero image is intentionally omitted from the settings UI

    const bgCfg = (this._config?.background_image) || {};

    const bgMode = (this._config?.background_mode)
      || (this._config?.background_image?.src ? 'image' : 'none');
    if (selBgMode) selBgMode.value = String(bgMode);

    const pCfg = this._config?.background_particles || {};
    const cloneData = (obj) => {
      try { return JSON.parse(JSON.stringify(obj ?? null)); } catch { return null; }
    };
    const FEATURE_TYPES = {
      automation: {
        label: 'Automation',
        icon: 'mdi:robot-outline',
        description: 'Create one Home Assistant automation and keep the YAML bundled with this dashboard.',
      },
      script: {
        label: 'Script',
        icon: 'mdi:script-text-outline',
        description: 'Add a reusable Home Assistant script to this dashboard package bundle.',
      },
      input_boolean: {
        label: 'Input boolean',
        icon: 'mdi:toggle-switch-outline',
        description: 'Create a toggle helper that can be used across cards, automations, and scripts.',
      },
      input_select: {
        label: 'Input select',
        icon: 'mdi:format-list-bulleted-square',
        description: 'Create a selectable helper with a list of options.',
      },
      input_text: {
        label: 'Input text',
        icon: 'mdi:form-textbox',
        description: 'Create a text helper you can write to from cards, scripts, or automations.',
      },
      input_number: {
        label: 'Input number',
        icon: 'mdi:numeric',
        description: 'Create a numeric helper for counters, setpoints, or quick controls.',
      },
      template_sensor: {
        label: 'Template sensor',
        icon: 'mdi:chart-bell-curve-cumulative',
        description: 'Create a template sensor that derives values from other Home Assistant entities.',
      },
      misc: {
        label: 'Custom YAML',
        icon: 'mdi:code-tags',
        description: 'Write raw Home Assistant package YAML for anything that does not fit the guided shortcuts.',
      },
    };
    const FEATURE_TYPE_ORDER = Object.keys(FEATURE_TYPES);
    const featureTypeIsKnown = (type) => Object.prototype.hasOwnProperty.call(FEATURE_TYPES, type);
    const featureTypeLabel = (type) => FEATURE_TYPES[type]?.label || FEATURE_TYPES.misc.label;
    const featureTypeIcon = (type) => FEATURE_TYPES[type]?.icon || FEATURE_TYPES.misc.icon;
    const featureTypeDescription = (type) => FEATURE_TYPES[type]?.description || FEATURE_TYPES.misc.description;
    const formatFeatureError = (err) => {
      if (!err) return 'Unknown error';
      if (typeof err === 'string') return err;
      if (err?.body?.message) return String(err.body.message);
      if (err?.message) return String(err.message);
      try { return JSON.stringify(err); } catch {}
      return String(err);
    };
    const toFeatureKey = (value, fallback = 'feature') => this._slugifyPackageToken_(value, fallback).replace(/-/g, '_');
    const inferFeatureTypeFromYaml = (yaml = '') => {
      const text = String(yaml || '').trim();
      if (!text) return 'misc';
      const patterns = [
        ['automation', /^\s*automation\s*:/m],
        ['script', /^\s*script\s*:/m],
        ['input_boolean', /^\s*input_boolean\s*:/m],
        ['input_select', /^\s*input_select\s*:/m],
        ['input_text', /^\s*input_text\s*:/m],
        ['input_number', /^\s*input_number\s*:/m],
        ['template_sensor', /^\s*template\s*:/m],
      ];
      const matches = patterns.filter(([, pattern]) => pattern.test(text)).map(([type]) => type);
      return matches.length === 1 ? matches[0] : 'misc';
    };
    const buildFeatureYaml = (type, name) => {
      const safeName = String(name || featureTypeLabel(type)).trim() || featureTypeLabel(type);
      const key = toFeatureKey(safeName, type);
      switch (type) {
        case 'automation':
          return `automation:\n  - alias: ${safeName}\n    id: ${key}\n    trigger: []\n    condition: []\n    action: []\n`;
        case 'script':
          return `script:\n  ${key}:\n    alias: ${safeName}\n    sequence: []\n`;
        case 'input_boolean':
          return `input_boolean:\n  ${key}:\n    name: ${safeName}\n    icon: mdi:toggle-switch\n`;
        case 'input_select':
          return `input_select:\n  ${key}:\n    name: ${safeName}\n    options:\n      - Option 1\n      - Option 2\n`;
        case 'input_text':
          return `input_text:\n  ${key}:\n    name: ${safeName}\n    max: 100\n`;
        case 'input_number':
          return `input_number:\n  ${key}:\n    name: ${safeName}\n    min: 0\n    max: 100\n    step: 1\n    mode: slider\n`;
        case 'template_sensor':
          return `template:\n  - sensor:\n      - name: ${safeName}\n        unique_id: ${key}\n        state: "ready"\n`;
        case 'misc':
        default:
          return `# Add any Home Assistant package YAML here.\n`;
      }
    };
    const suggestFeatureFilename = (name, type, fallbackIndex = 1) => {
      const prefix = featureTypeIsKnown(type) ? type : 'feature';
      const slug = this._slugifyPackageToken_(name || `${prefix}_${fallbackIndex}`, `${prefix}_${fallbackIndex}`);
      return `${slug}.yaml`;
    };
    const nextFeatureName = (type) => {
      const label = featureTypeLabel(type);
      const count = packageDrafts.filter((pkg) => String(pkg.feature_type || 'misc') === type).length + 1;
      return `${label} ${count}`;
    };
    const createFeatureDraft = (type = 'misc') => {
      const featureType = featureTypeIsKnown(type) ? type : 'misc';
      const nextIndex = packageDrafts.length + 1;
      const name = nextFeatureName(featureType);
      return {
        id: `package_${Date.now()}_${nextIndex}`,
        name,
        filename: suggestFeatureFilename(name, featureType, nextIndex),
        yaml: buildFeatureYaml(featureType, name),
        enabled: true,
        feature_type: featureType,
        __filenameDirty: false,
        __yamlDirty: false,
      };
    };
    const clonePackageDraft = (pkg = {}, index = 0) => {
      const inferredType = featureTypeIsKnown(pkg.feature_type) ? pkg.feature_type : inferFeatureTypeFromYaml(pkg.yaml ?? pkg.content ?? pkg.body ?? '');
      return {
        id: String(pkg.id || pkg.package_id || `package_${index + 1}`),
        name: String(pkg.name || pkg.title || pkg.filename || `package_${index + 1}`),
        filename: String(pkg.filename || ''),
        yaml: String(pkg.yaml ?? pkg.content ?? pkg.body ?? '').replace(/\r\n/g, '\n'),
        enabled: pkg.enabled !== false,
        feature_type: inferredType,
        __filenameDirty: !!String(pkg.filename || '').trim(),
        __yamlDirty: !!String(pkg.yaml ?? pkg.content ?? pkg.body ?? '').trim(),
      };
    };
    const cloneLayerDraft = (layer = {}, index = 0) => ({
      id: String(layer.id || `layer-${index + 1}`),
      label: String(layer.label || layer.name || `Layer ${index + 1}`),
      icon: String(layer.icon || 'mdi:layers-outline'),
      color: String(layer.color || '#60a5fa'),
      default_active: layer.default_active !== false,
    });
    const normalizeLayerDrafts = (drafts = []) => this._normalizeDashboardLayers_(
      (Array.isArray(drafts) ? drafts : []).map((layer, index) => ({
        id: String(layer?.id || `layer-${index + 1}`),
        label: String(layer?.label || layer?.name || `Layer ${index + 1}`),
        icon: String(layer?.icon || 'mdi:layers-outline'),
        color: String(layer?.color || '#60a5fa'),
        default_active: layer?.default_active !== false,
      }))
    );
    let layersEnabledDraft = !!this.layersEnabled;
    let layersButtonDetailsDraft = !!this.layersButtonDetails;
    let layerDrafts = (this.layers || []).map((layer, index) => cloneLayerDraft(layer, index));
    if (layersEnabledDraft && !layerDrafts.length) {
      layerDrafts = [cloneLayerDraft(this._defaultDashboardLayer_(), 0)];
    }
    let packageDrafts = this._exportDashboardPackages_().map((pkg, index) => clonePackageDraft(pkg, index));
    const featureSummaryFromYaml = (yaml = '') => {
      const line = String(yaml || '')
        .split('\n')
        .map((entry) => entry.trim())
        .find((entry) => entry && !entry.startsWith('#'));
      return line || 'No YAML added yet.';
    };
    const renderPackageDiagnostics = (status, isError = false) => {
      if (!packageDiagnosticsEl) return;
      packageDiagnosticsEl.style.color = isError ? 'var(--error-color, #ef4444)' : 'var(--secondary-text-color)';
      packageDiagnosticsEl.textContent = status || 'Run package sync diagnostics to check backend support, package directory access, and detected files.';
    };
    const renderDashboardThemeOptions = () => {
      if (!selDashboardTheme) return;
      const themeNames = this._getAvailableDashboardThemeNames_?.() || [];
      const prevValue = String(selDashboardTheme.value || this.dashboardTheme || '').trim();
      selDashboardTheme.innerHTML = '';
      const emptyOpt = document.createElement('option');
      emptyOpt.value = '';
      emptyOpt.textContent = themeNames.length ? 'Select theme…' : 'No themes found';
      selDashboardTheme.appendChild(emptyOpt);
      themeNames.forEach((name) => {
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        selDashboardTheme.appendChild(opt);
      });
      if (prevValue && !themeNames.includes(prevValue)) {
        const retainedOpt = document.createElement('option');
        retainedOpt.value = prevValue;
        retainedOpt.textContent = `${prevValue} (saved)`;
        selDashboardTheme.appendChild(retainedOpt);
      }
      if (prevValue) {
        selDashboardTheme.value = prevValue;
      } else {
        selDashboardTheme.value = '';
      }
    };
    const syncLayerDraftState = () => {
      const enabled = !!layersEnabledDraft;
      if (chkLayersEnabled) chkLayersEnabled.checked = enabled;
      if (chkLayersButtonDetails) chkLayersButtonDetails.checked = !!layersButtonDetailsDraft;
      if (layersListEl) {
        layersListEl.style.opacity = enabled ? '1' : '.6';
      }
      if (chkLayersButtonDetails) chkLayersButtonDetails.disabled = !enabled;
      if (newLayerNameInput) newLayerNameInput.disabled = !enabled;
      if (addLayerBtn) addLayerBtn.disabled = !enabled;
    };
    const renderLayers = () => {
      if (!layersListEl) return;
      syncLayerDraftState();
      layersListEl.innerHTML = '';
      if (!layersEnabledDraft) {
        const hint = document.createElement('div');
        hint.className = 'layer-empty';
        hint.textContent = 'Layers are off. Turn them on to create visibility groups for modes, rooms, or temporary states.';
        layersListEl.appendChild(hint);
        attachSettingsDocLinks(layersListEl);
        return;
      }

      if (!layerDrafts.length) {
        const hint = document.createElement('div');
        hint.className = 'layer-empty';
        hint.textContent = 'No layers yet. Add one below; cards without assigned layers stay visible everywhere.';
        layersListEl.appendChild(hint);
        attachSettingsDocLinks(layersListEl);
        return;
      }

      layerDrafts.forEach((layer, index) => {
        const row = document.createElement('div');
        row.className = 'layer-row';
        row.dataset.layerId = layer.id;

        const labelInput = document.createElement('input');
        labelInput.type = 'text';
        labelInput.value = layer.label || '';
        labelInput.placeholder = 'Layer label';
        labelInput.title = 'Layer label';
        labelInput.addEventListener('input', () => {
          layerDrafts[index] = {
            ...layerDrafts[index],
            label: labelInput.value,
          };
        });

        const iconInput = document.createElement('input');
        iconInput.type = 'text';
        iconInput.value = layer.icon || '';
        iconInput.placeholder = 'mdi:layers-outline';
        iconInput.title = 'Layer icon';
        iconInput.addEventListener('input', () => {
          layerDrafts[index] = {
            ...layerDrafts[index],
            icon: iconInput.value.trim() || 'mdi:layers-outline',
          };
        });

        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.value = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(String(layer.color || '').trim())
          ? String(layer.color).trim()
          : '#60a5fa';
        colorInput.title = 'Layer accent color';
        colorInput.addEventListener('input', () => {
          layerDrafts[index] = {
            ...layerDrafts[index],
            color: colorInput.value,
          };
        });

        const activeWrap = document.createElement('div');
        activeWrap.className = 'layer-actions';
        const activeToggle = document.createElement('ha-switch');
        activeToggle.checked = layer.default_active !== false;
        activeToggle.title = 'Enabled by default';
        activeToggle.addEventListener('change', () => {
          layerDrafts[index] = {
            ...layerDrafts[index],
            default_active: !!activeToggle.checked,
          };
        });
        activeWrap.appendChild(activeToggle);

        const actions = document.createElement('div');
        actions.className = 'layer-actions';

        const previewChip = document.createElement('span');
        previewChip.className = 'layer-chip';
        previewChip.style.setProperty('--ddc-layer-accent', layer.color || '#60a5fa');
        previewChip.style.borderColor = `color-mix(in oklab, ${layer.color || '#60a5fa'} 48%, transparent)`;
        previewChip.style.background = `color-mix(in oklab, ${layer.color || '#60a5fa'} 12%, transparent)`;
        previewChip.innerHTML = `<ha-icon icon="${layer.icon || 'mdi:layers-outline'}"></ha-icon><span>${layer.label || layer.id}</span>`;

        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'icon-btn danger';
        delBtn.title = 'Delete layer';
        delBtn.innerHTML = '<ha-icon icon="mdi:trash-can-outline"></ha-icon>';
        delBtn.addEventListener('click', () => {
          layerDrafts.splice(index, 1);
          renderLayers();
        });

        actions.appendChild(previewChip);
        actions.appendChild(delBtn);

        row.appendChild(labelInput);
        row.appendChild(iconInput);
        row.appendChild(colorInput);
        row.appendChild(activeWrap);
        row.appendChild(actions);
        layersListEl.appendChild(row);
      });
      attachSettingsDocLinks(layersListEl);
    };
    const updateDashboardThemeState = () => {
      const themeNames = this._getAvailableDashboardThemeNames_?.() || [];
      const hasThemes = themeNames.length > 0;
      const selectedTheme = String(selDashboardTheme?.value || '').trim();
      if (selDashboardTheme) {
        selDashboardTheme.disabled = !hasThemes && !selectedTheme;
      }
      if (chkDashboardThemeOverrideAllDesign) {
        chkDashboardThemeOverrideAllDesign.disabled = !selectedTheme;
        if (!selectedTheme) chkDashboardThemeOverrideAllDesign.checked = false;
      }
      if (txtDashboardThemeHint) {
        txtDashboardThemeHint.textContent = !hasThemes
          ? (selectedTheme
              ? 'Using the saved theme name. Home Assistant has not exposed the theme list yet.'
              : 'No themes were found from Home Assistant.')
          : (selectedTheme
              ? 'This dashboard is now inheriting colors, text styles, buttons, and surfaces from the selected Home Assistant theme.'
              : 'Pick a Home Assistant theme to activate theme styling for this dashboard.');
      }
      if (txtDashboardThemeOverrideAllDesignHint) {
        const overrideActive = !!selectedTheme && !!chkDashboardThemeOverrideAllDesign?.checked;
        txtDashboardThemeOverrideAllDesignHint.textContent = !selectedTheme
          ? 'Select a dashboard theme before override mode can take control.'
          : (overrideActive
              ? 'Active: the selected theme wins over dashboard colors, card shadows, and per-card design overrides.'
              : 'Optional: let the selected theme win over dashboard colors, card shadows, and per-card design overrides.');
      }
      if (dashboardThemeColorWarning) {
        const overrideActive = !!selectedTheme && !!chkDashboardThemeOverrideAllDesign?.checked;
        dashboardThemeColorWarning.hidden = !overrideActive;
        dashboardThemeColorWarning.style.display = overrideActive ? '' : 'none';
      }
    };
    const applyLiveDashboardThemePreview = () => {
      try {
        this.dashboardTheme = String(selDashboardTheme?.value || '').trim();
        this.dashboardThemeEnabled = !!this.dashboardTheme;
        this.dashboardThemeOverrideAllDesign = !!this.dashboardTheme && !!chkDashboardThemeOverrideAllDesign?.checked;
        this._applyDashboardThemeStyling_?.();
      } catch {}
    };
    const runPackageDiagnostics = async () => {
      renderPackageDiagnostics('Checking backend package sync...');
      try {
        const res = await this.hass.callApi('get', 'dragdrop_storage_package_status');
        if (!res || res.ok === false) {
          renderPackageDiagnostics(`Package diagnostics failed.${res?.error ? ` ${res.error}` : ''}`, true);
          return;
        }
        const lines = [
          `Backend package sync: ${res.supports_package_sync ? 'supported' : 'unknown'}`,
          `Packages directory: ${res.directory || '(missing)'}`,
          `Directory exists: ${res.directory_exists ? 'yes' : 'no'}`,
          `Looks writable: ${res.directory_writable ? 'yes' : 'no'}`,
          `configuration.yaml found: ${res.configuration_exists ? 'yes' : 'no'}`,
          `configuration has "packages:": ${res.configuration_mentions_packages ? 'yes' : 'no'}`,
          `configuration includes packages dir: ${(res.configuration_includes_packages_dir_named || res.configuration_includes_packages_dir_merge_named) ? 'yes' : 'no'}`,
          `Detected DDC package files: ${Array.isArray(res.files) && res.files.length ? res.files.join(', ') : 'none'}`,
        ];
        renderPackageDiagnostics(lines.join('\n'));
      } catch (err) {
        renderPackageDiagnostics(`Package diagnostics request failed: ${formatFeatureError(err)}`, true);
      }
    };
    const packageYamlStats = (value = '') => {
      const text = String(value || '');
      return {
        lines: Math.max(1, text.split('\n').length),
        chars: text.length,
      };
    };
    const packageYamlLineNumbers = (value = '') => {
      const { lines } = packageYamlStats(value);
      return Array.from({ length: lines }, (_, line) => String(line + 1)).join('\n');
    };
    const packageYamlLineCountLabel = (value = '') => {
      const { lines } = packageYamlStats(value);
      return `${lines} line${lines === 1 ? '' : 's'}`;
    };
    const packageYamlCharCountLabel = (value = '') => {
      const { chars } = packageYamlStats(value);
      return `${chars} char${chars === 1 ? '' : 's'}`;
    };
    const packageYamlCursorLabel = (input) => {
      const text = String(input?.value || '');
      const pos = Math.max(0, Number(input?.selectionStart || 0));
      const before = text.slice(0, pos);
      const line = before.split('\n').length;
      const lastBreak = before.lastIndexOf('\n');
      const col = pos - lastBreak;
      return `Ln ${line}, Col ${col}`;
    };
    const packageYamlStatusMessage = (input, statusEl) => {
      if (!statusEl) return;
      const text = String(input?.value || '');
      statusEl.classList.remove('is-valid', 'is-invalid');
      if (!text.trim()) {
        statusEl.textContent = 'Empty YAML';
        return;
      }
      try {
        window.jsyaml?.load?.(text);
        statusEl.textContent = 'Valid YAML';
        statusEl.classList.add('is-valid');
      } catch (err) {
        statusEl.textContent = `YAML issue: ${String(err?.reason || err?.message || err).split('\n')[0]}`;
        statusEl.classList.add('is-invalid');
      }
    };
    let featureEditorEl = null;
    const closeFeatureEditor = () => {
      try { featureEditorEl?.remove?.(); } catch {}
      featureEditorEl = null;
    };
    const openFeatureEditor = (index) => {
      const draft = packageDrafts[index];
      if (!draft) return;

      closeFeatureEditor();
      const type = featureTypeIsKnown(draft.feature_type) ? draft.feature_type : 'misc';
      const overlay = document.createElement('div');
      overlay.className = 'feature-editor-shell';
      overlay.innerHTML = `
        <div class="feature-editor-backdrop"></div>
        <div class="feature-editor-modal" role="dialog" aria-modal="true" aria-labelledby="ddc-feature-editor-title">
          <div class="feature-editor-head">
            <div>
              <h5 id="ddc-feature-editor-title">Edit ${this._safe(featureTypeLabel(type))}</h5>
              <p>${this._safe(featureTypeDescription(type))}</p>
            </div>
            <button type="button" class="icon-btn" id="ddc-feature-editor-close" title="Close editor">
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
          <div class="feature-editor-grid">
            <div class="feature-editor-field">
              <label for="ddc-feature-editor-name"><ha-icon icon="mdi:tag-outline" aria-hidden="true"></ha-icon><span>Feature name</span></label>
              <input id="ddc-feature-editor-name" type="text" value="${this._safe(draft.name || '')}" />
            </div>
            <div class="feature-editor-field">
              <label for="ddc-feature-editor-type"><ha-icon icon="mdi:shape-outline" aria-hidden="true"></ha-icon><span>Feature type</span></label>
              <input id="ddc-feature-editor-type" type="text" value="${this._safe(featureTypeLabel(type))}" readonly aria-readonly="true" />
            </div>
            <div class="feature-editor-field full">
              <label for="ddc-feature-editor-file"><ha-icon icon="mdi:file-document-outline" aria-hidden="true"></ha-icon><span>Package file name</span></label>
              <input id="ddc-feature-editor-file" type="text" value="${this._safe(draft.filename || '')}" placeholder="${this._safe(suggestFeatureFilename(draft.name, type, index + 1))}" />
            </div>
            <div class="feature-editor-field full feature-yaml-field">
              <div class="feature-yaml-label-row">
                <label for="ddc-feature-editor-yaml"><ha-icon icon="mdi:code-tags" aria-hidden="true"></ha-icon><span>YAML content</span></label>
                <span class="feature-yaml-format"><ha-icon icon="mdi:format-indent-increase"></ha-icon>2-space YAML</span>
              </div>
              <div class="feature-yaml-editor" data-yaml-editor>
                <div class="feature-yaml-toolbar">
                  <div class="feature-yaml-title">
                    <span class="feature-yaml-dot"></span>
                    <span data-yaml-filename>${this._safe(draft.filename || suggestFeatureFilename(draft.name, type, index + 1))}</span>
                  </div>
                  <div class="feature-yaml-metrics" aria-live="polite">
                    <span data-yaml-line-count>${packageYamlLineCountLabel(draft.yaml || '')}</span>
                    <span data-yaml-char-count>${packageYamlCharCountLabel(draft.yaml || '')}</span>
                    <span data-yaml-cursor>Ln 1, Col 1</span>
                  </div>
                </div>
                <div class="feature-yaml-code">
                  <div class="feature-yaml-gutter" aria-hidden="true">
                    <pre data-yaml-lines>${packageYamlLineNumbers(draft.yaml || '')}</pre>
                  </div>
                  <div class="feature-yaml-textarea-wrap">
                    <textarea id="ddc-feature-editor-yaml" spellcheck="false" wrap="off" aria-describedby="ddc-feature-yaml-help ddc-feature-yaml-status" placeholder="${this._safe(buildFeatureYaml(type, draft.name || featureTypeLabel(type)))}">${this._safe(draft.yaml || '')}</textarea>
                  </div>
                </div>
                <div class="feature-yaml-footer">
                  <span id="ddc-feature-yaml-help">Tab indents with two spaces. Press Cmd/Ctrl+S to save this feature.</span>
                  <span id="ddc-feature-yaml-status" class="feature-yaml-status" data-yaml-status>Ready</span>
                </div>
              </div>
            </div>
          </div>
          <div class="feature-editor-footer">
            <label class="feature-editor-toggle">
              <span>Enable this feature</span>
              <ha-switch id="ddc-feature-editor-enabled"></ha-switch>
            </label>
            <div class="feature-editor-actions">
              <button type="button" class="btn secondary" id="ddc-feature-editor-cancel">Cancel</button>
              <button type="button" class="btn primary" id="ddc-feature-editor-save">Save feature</button>
            </div>
          </div>
        </div>
      `;
      modal.appendChild(overlay);
      featureEditorEl = overlay;

      const nameInput = overlay.querySelector('#ddc-feature-editor-name');
      const fileInput = overlay.querySelector('#ddc-feature-editor-file');
      const yamlInput = overlay.querySelector('#ddc-feature-editor-yaml');
      const yamlLinesEl = overlay.querySelector('[data-yaml-lines]');
      const yamlLineCountEl = overlay.querySelector('[data-yaml-line-count]');
      const yamlCharCountEl = overlay.querySelector('[data-yaml-char-count]');
      const yamlCursorEl = overlay.querySelector('[data-yaml-cursor]');
      const yamlFilenameEl = overlay.querySelector('[data-yaml-filename]');
      const yamlStatusEl = overlay.querySelector('[data-yaml-status]');
      const enabledToggle = overlay.querySelector('#ddc-feature-editor-enabled');
      const closeBtn = overlay.querySelector('#ddc-feature-editor-close');
      const cancelBtn = overlay.querySelector('#ddc-feature-editor-cancel');
      const saveBtn = overlay.querySelector('#ddc-feature-editor-save');
      const backdrop = overlay.querySelector('.feature-editor-backdrop');

      let filenameDirty = !!draft.__filenameDirty;
      let yamlDirty = !!draft.__yamlDirty;
      if (enabledToggle) enabledToggle.checked = draft.enabled !== false;

      const syncYamlScroll = () => {
        if (!yamlInput || !yamlLinesEl) return;
        yamlLinesEl.style.transform = `translateY(${-Number(yamlInput.scrollTop || 0)}px)`;
      };
      const syncYamlFilename = () => {
        if (!yamlFilenameEl) return;
        const liveName = String(nameInput?.value || '').trim() || featureTypeLabel(type);
        yamlFilenameEl.textContent = String(fileInput?.value || '').trim() || suggestFeatureFilename(liveName, type, index + 1);
      };
      const syncYamlChrome = ({ validate = false } = {}) => {
        if (!yamlInput) return;
        const value = String(yamlInput.value || '');
        if (yamlLinesEl) yamlLinesEl.textContent = packageYamlLineNumbers(value);
        if (yamlLineCountEl) yamlLineCountEl.textContent = packageYamlLineCountLabel(value);
        if (yamlCharCountEl) yamlCharCountEl.textContent = packageYamlCharCountLabel(value);
        if (yamlCursorEl) yamlCursorEl.textContent = packageYamlCursorLabel(yamlInput);
        syncYamlFilename();
        syncYamlScroll();
        if (validate) packageYamlStatusMessage(yamlInput, yamlStatusEl);
      };
      const insertYamlIndent = () => {
        if (!yamlInput) return;
        const start = Number(yamlInput.selectionStart || 0);
        const end = Number(yamlInput.selectionEnd || start);
        yamlInput.setRangeText('  ', start, end, 'end');
        yamlDirty = true;
        syncYamlChrome({ validate: true });
      };

      const syncTemplateDefaults = () => {
        const liveName = String(nameInput?.value || '').trim() || featureTypeLabel(type);
        if (!filenameDirty || !String(fileInput?.value || '').trim()) {
          const nextFile = suggestFeatureFilename(liveName, type, index + 1);
          if (fileInput) fileInput.value = nextFile;
        }
        if (!yamlDirty) {
          const nextYaml = buildFeatureYaml(type, liveName);
          if (yamlInput) yamlInput.value = nextYaml;
        }
        syncYamlChrome({ validate: true });
      };

      nameInput?.addEventListener('input', syncTemplateDefaults);
      fileInput?.addEventListener('input', () => { filenameDirty = true; syncYamlFilename(); });
      yamlInput?.addEventListener('input', () => { yamlDirty = true; syncYamlChrome({ validate: true }); });
      yamlInput?.addEventListener('scroll', syncYamlScroll, { passive: true });
      yamlInput?.addEventListener('click', () => syncYamlChrome());
      yamlInput?.addEventListener('keyup', () => syncYamlChrome());
      yamlInput?.addEventListener('select', () => syncYamlChrome());
      yamlInput?.addEventListener('keydown', (evt) => {
        if (evt.key !== 'Escape') evt.stopPropagation();
        if ((evt.metaKey || evt.ctrlKey) && evt.key.toLowerCase() === 's') {
          evt.preventDefault();
          saveEditor();
          return;
        }
        if (evt.key === 'Tab') {
          evt.preventDefault();
          insertYamlIndent();
        }
      });

      const closeEditor = () => {
        closeFeatureEditor();
        try {
          packagesListEl?.querySelector?.(`[data-feature-index="${index}"] .feature-edit-btn`)?.focus?.();
        } catch {}
      };

      const saveEditor = () => {
        const nextName = String(nameInput?.value || '').trim() || featureTypeLabel(type);
        const nextFilename = String(fileInput?.value || '').trim() || suggestFeatureFilename(nextName, type, index + 1);
        const nextYaml = String(yamlInput?.value || '').replace(/\r\n/g, '\n');
        if ((enabledToggle?.checked ?? true) && nextYaml.trim()) {
          try {
            window.jsyaml?.load?.(nextYaml);
          } catch (yamlErr) {
            packageYamlStatusMessage(yamlInput, yamlStatusEl);
            this._toast?.(`Invalid YAML in ${featureTypeLabel(type).toLowerCase()} "${nextName}".`);
            return;
          }
        }
        packageDrafts[index] = {
          ...packageDrafts[index],
          name: nextName,
          filename: nextFilename,
          yaml: nextYaml,
          enabled: !!enabledToggle?.checked,
          feature_type: type,
          __filenameDirty: filenameDirty || !!nextFilename.trim(),
          __yamlDirty: yamlDirty || !!nextYaml.trim(),
        };
        closeFeatureEditor();
        renderPackages();
      };

      closeBtn?.addEventListener('click', closeEditor);
      cancelBtn?.addEventListener('click', closeEditor);
      backdrop?.addEventListener('click', closeEditor);
      saveBtn?.addEventListener('click', saveEditor);
      overlay.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          closeEditor();
        }
        if ((evt.metaKey || evt.ctrlKey) && evt.key.toLowerCase() === 's') {
          evt.preventDefault();
          saveEditor();
        }
      });

      syncYamlChrome({ validate: true });
      try { nameInput?.focus?.(); nameInput?.select?.(); } catch {}
    };
    const renderPackages = () => {
      if (!packagesListEl) return;
      packagesListEl.innerHTML = '';

      if (!packageDrafts.length) {
        const empty = document.createElement('div');
        empty.className = 'package-empty';
        empty.textContent = 'No package features yet. Use the shortcuts above to add helpers, automations, scripts, template sensors, or custom YAML.';
        packagesListEl.appendChild(empty);
        return;
      }

      const list = document.createElement('div');
      list.className = 'feature-list';
      packageDrafts.forEach((pkg, index) => {
        const card = document.createElement('div');
        const type = featureTypeIsKnown(pkg.feature_type) ? pkg.feature_type : inferFeatureTypeFromYaml(pkg.yaml || '');
        const summary = featureSummaryFromYaml(pkg.yaml || '');
        card.className = 'feature-card';
        card.dataset.featureIndex = String(index);
        card.innerHTML = `
          <div class="feature-card-main">
            <div class="feature-card-head">
              <span class="feature-type-badge"><ha-icon icon="${this._safe(featureTypeIcon(type))}"></ha-icon>${this._safe(featureTypeLabel(type))}</span>
              <span class="feature-card-title">${this._safe(pkg.name || featureTypeLabel(type))}</span>
            </div>
            <div class="feature-card-meta">
              <code>${this._safe(pkg.filename || suggestFeatureFilename(pkg.name, type, index + 1))}</code>
              <span>${pkg.enabled !== false ? 'Enabled' : 'Disabled'}</span>
            </div>
            <div class="feature-card-summary">${this._safe(summary)}</div>
          </div>
          <div class="feature-card-actions">
            <label class="package-toggle">
              <span>Enabled</span>
              <ha-switch class="feature-enabled"></ha-switch>
            </label>
            <button type="button" class="mini-action feature-edit-btn">
              <ha-icon icon="mdi:pencil-outline"></ha-icon>
              <span>Edit</span>
            </button>
            <button type="button" class="icon-btn danger feature-delete-btn" title="Delete feature">
              <ha-icon icon="mdi:trash-can-outline"></ha-icon>
            </button>
          </div>
        `;

        const enabledToggle = card.querySelector('.feature-enabled');
        const editBtn = card.querySelector('.feature-edit-btn');
        const deleteBtn = card.querySelector('.feature-delete-btn');

        if (enabledToggle) enabledToggle.checked = pkg.enabled !== false;
        enabledToggle?.addEventListener('change', () => {
          packageDrafts[index].enabled = !!enabledToggle.checked;
        });
        editBtn?.addEventListener('click', () => openFeatureEditor(index));
        deleteBtn?.addEventListener('click', () => {
          packageDrafts.splice(index, 1);
          renderPackages();
        });
        list.appendChild(card);
      });
      packagesListEl.appendChild(list);
    };
    let particlesLiveConfig = cloneData(pCfg.config);
    if (inpParticlesUrl)     inpParticlesUrl.value = pCfg.config_url || '';
    if (chkParticlesPointer) chkParticlesPointer.checked = !!pCfg.pointer_events;
    const defaultParticlesConfig = () => cloneData(this.constructor?._defaultParticlesBackgroundConfig_?.()) || {};
    const clampNum = (value, min, max, fallback, digits = 0) => {
      const n = Number(value);
      const safe = Number.isFinite(n) ? n : fallback;
      const clamped = Math.max(min, Math.min(max, safe));
      return digits > 0 ? Number(clamped.toFixed(digits)) : Math.round(clamped);
    };
    const normalizeParticleConfig = (config = null) => {
      const conf = cloneData(config) || defaultParticlesConfig();
      conf.particles = conf.particles && typeof conf.particles === 'object' ? conf.particles : {};
      conf.particles.number = conf.particles.number && typeof conf.particles.number === 'object'
        ? conf.particles.number
        : { value: 52, density: { enable: true, value_area: 1150 } };
      conf.particles.number.density = conf.particles.number.density && typeof conf.particles.number.density === 'object'
        ? conf.particles.number.density
        : { enable: true, value_area: 1150 };
      conf.particles.color = conf.particles.color && typeof conf.particles.color === 'object'
        ? conf.particles.color
        : { value: '#7ddcff' };
      conf.particles.shape = conf.particles.shape && typeof conf.particles.shape === 'object'
        ? conf.particles.shape
        : { type: 'circle' };
      conf.particles.opacity = conf.particles.opacity && typeof conf.particles.opacity === 'object'
        ? conf.particles.opacity
        : { value: 0.22, random: true, anim: { enable: false, speed: 0.8, opacity_min: 0.08, sync: false } };
      conf.particles.size = conf.particles.size && typeof conf.particles.size === 'object'
        ? conf.particles.size
        : { value: 2.2, random: true, anim: { enable: false, speed: 1, size_min: 0.7, sync: false } };
      conf.particles.line_linked = conf.particles.line_linked && typeof conf.particles.line_linked === 'object'
        ? conf.particles.line_linked
        : { enable: true, distance: 155, color: '#7ddcff', opacity: 0.18, width: 1 };
      conf.particles.move = conf.particles.move && typeof conf.particles.move === 'object'
        ? conf.particles.move
        : { enable: true, speed: 0.4, direction: 'none', random: true, straight: false, out_mode: 'out' };
      conf.interactivity = conf.interactivity && typeof conf.interactivity === 'object' ? conf.interactivity : {};
      conf.interactivity.events = conf.interactivity.events && typeof conf.interactivity.events === 'object' ? conf.interactivity.events : {};
      conf.interactivity.modes = conf.interactivity.modes && typeof conf.interactivity.modes === 'object' ? conf.interactivity.modes : {};
      conf.interactivity.modes.repulse = conf.interactivity.modes.repulse && typeof conf.interactivity.modes.repulse === 'object'
        ? conf.interactivity.modes.repulse
        : { distance: 110, duration: 0.4 };
      conf.interactivity.modes.grab = conf.interactivity.modes.grab && typeof conf.interactivity.modes.grab === 'object'
        ? conf.interactivity.modes.grab
        : { distance: 145, line_linked: { opacity: 0.26 } };
      conf.interactivity.modes.grab.line_linked = conf.interactivity.modes.grab.line_linked && typeof conf.interactivity.modes.grab.line_linked === 'object'
        ? conf.interactivity.modes.grab.line_linked
        : { opacity: 0.26 };
      conf.interactivity.modes.bubble = conf.interactivity.modes.bubble && typeof conf.interactivity.modes.bubble === 'object'
        ? conf.interactivity.modes.bubble
        : { distance: 140, size: 5, duration: 2, opacity: 0.4 };
      conf.interactivity.modes.push = conf.interactivity.modes.push && typeof conf.interactivity.modes.push === 'object'
        ? conf.interactivity.modes.push
        : { particles_nb: 3 };
      return conf;
    };
    particlesLiveConfig = normalizeParticleConfig(particlesLiveConfig);
    const firstColor = (value, fallback = '#7ddcff') => {
      const candidate = Array.isArray(value) ? value[0] : value;
      const match = String(candidate || '').trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
      return match ? match[0] : fallback;
    };
    const normalizeParticleMode = (value, allowed, fallback) => {
      const mode = String(value || '').trim().toLowerCase();
      return allowed.includes(mode) ? mode : fallback;
    };
    const getParticleUiState = () => {
      const conf = normalizeParticleConfig(particlesLiveConfig);
      const events = conf.interactivity?.events || {};
      const modes = conf.interactivity?.modes || {};
      return {
        pointer: !!chkParticlesPointer?.checked,
        count: clampNum(rngParticlesCount?.value, 8, 120, conf.particles.number?.value ?? 52),
        speed: clampNum(rngParticlesSpeed?.value, 0, 4, conf.particles.move?.speed ?? 0.4, 1),
        size: clampNum(rngParticlesSize?.value, 1, 8, conf.particles.size?.value ?? 2.2, 1),
        opacity: clampNum(rngParticlesOpacity?.value, 5, 85, Math.round((conf.particles.opacity?.value ?? 0.22) * 100)),
        lines: !!chkParticlesLines?.checked,
        lineDistance: clampNum(rngParticlesLineDistance?.value, 60, 260, conf.particles.line_linked?.distance ?? 155),
        interactionDistance: clampNum(
          rngParticlesInteractionDistance?.value,
          40,
          240,
          pCfg.interaction_distance ?? modes.repulse?.distance ?? modes.grab?.distance ?? modes.bubble?.distance ?? 110
        ),
        particleColor: firstColor(inpParticlesColor?.value || conf.particles.color?.value, '#7ddcff'),
        lineColor: firstColor(inpParticlesLineColor?.value || conf.particles.line_linked?.color, '#7ddcff'),
        shape: normalizeParticleMode(selParticlesShape?.value || conf.particles.shape?.type, ['circle', 'triangle', 'edge', 'polygon', 'star'], 'circle'),
        hoverMode: normalizeParticleMode(selParticlesHoverMode?.value || pCfg.hover_mode || events.onhover?.mode, ['repulse', 'grab', 'bubble', 'none'], 'repulse'),
        clickMode: normalizeParticleMode(selParticlesClickMode?.value || pCfg.click_mode || events.onclick?.mode, ['push', 'repulse', 'none'], 'push'),
      };
    };
    const setParticleOutputs = () => {
      const state = getParticleUiState();
      if (outParticlesCount) outParticlesCount.textContent = String(state.count);
      if (outParticlesSpeed) outParticlesSpeed.textContent = state.speed.toFixed(1);
      if (outParticlesSize) outParticlesSize.textContent = state.size.toFixed(1);
      if (outParticlesOpacity) outParticlesOpacity.textContent = `${state.opacity}%`;
      if (outParticlesLineDistance) outParticlesLineDistance.textContent = `${state.lineDistance}px`;
      if (outParticlesInteractionDistance) outParticlesInteractionDistance.textContent = `${state.interactionDistance}px`;
      if (rngParticlesLineDistance) rngParticlesLineDistance.disabled = !state.lines;
      const pointerControls = [rngParticlesInteractionDistance, selParticlesHoverMode, selParticlesClickMode].filter(Boolean);
      pointerControls.forEach((el) => { el.disabled = !state.pointer; });
      [rngParticlesInteractionDistance, selParticlesClickMode]
        .filter(Boolean)
        .forEach((el) => el.closest?.('.particle-control')?.classList.toggle('is-disabled', !state.pointer));
    };
    const writeParticleControlsFromConfig = ({ useSavedModes = true } = {}) => {
      const conf = normalizeParticleConfig(particlesLiveConfig);
      const events = conf.interactivity?.events || {};
      const modes = conf.interactivity?.modes || {};
      if (rngParticlesCount) rngParticlesCount.value = String(clampNum(conf.particles.number?.value, 8, 120, 52));
      if (rngParticlesSpeed) rngParticlesSpeed.value = String(clampNum(conf.particles.move?.speed, 0, 4, 0.4, 1));
      if (rngParticlesSize) rngParticlesSize.value = String(clampNum(conf.particles.size?.value, 1, 8, 2.2, 1));
      if (rngParticlesOpacity) rngParticlesOpacity.value = String(clampNum((conf.particles.opacity?.value ?? 0.22) * 100, 5, 85, 22));
      if (chkParticlesLines) chkParticlesLines.checked = conf.particles.line_linked?.enable !== false;
      if (rngParticlesLineDistance) rngParticlesLineDistance.value = String(clampNum(conf.particles.line_linked?.distance, 60, 260, 155));
      if (rngParticlesInteractionDistance) {
        rngParticlesInteractionDistance.value = String(clampNum(
          (useSavedModes ? pCfg.interaction_distance : undefined) ?? modes.repulse?.distance ?? modes.grab?.distance ?? modes.bubble?.distance,
          40,
          240,
          110
        ));
      }
      if (inpParticlesColor) inpParticlesColor.value = firstColor(conf.particles.color?.value, '#7ddcff');
      if (inpParticlesLineColor) inpParticlesLineColor.value = firstColor(conf.particles.line_linked?.color, '#7ddcff');
      if (selParticlesShape) selParticlesShape.value = normalizeParticleMode(conf.particles.shape?.type, ['circle', 'triangle', 'edge', 'polygon', 'star'], 'circle');
      if (selParticlesHoverMode) selParticlesHoverMode.value = normalizeParticleMode((useSavedModes ? pCfg.hover_mode : undefined) || events.onhover?.mode, ['repulse', 'grab', 'bubble', 'none'], 'repulse');
      if (selParticlesClickMode) selParticlesClickMode.value = normalizeParticleMode((useSavedModes ? pCfg.click_mode : undefined) || events.onclick?.mode, ['push', 'repulse', 'none'], 'push');
      setParticleOutputs();
    };
    const applyParticleControlsToConfig = () => {
      const state = getParticleUiState();
      const conf = normalizeParticleConfig(particlesLiveConfig);
      conf.particles.number.value = state.count;
      conf.particles.number.density = { ...(conf.particles.number.density || {}), enable: true };
      conf.particles.color.value = state.particleColor;
      conf.particles.shape.type = state.shape;
      conf.particles.opacity.value = state.opacity / 100;
      conf.particles.size.value = state.size;
      conf.particles.line_linked.enable = !!state.lines;
      conf.particles.line_linked.distance = state.lineDistance;
      conf.particles.line_linked.color = state.lineColor;
      conf.particles.move.enable = true;
      conf.particles.move.speed = state.speed;
      conf.interactivity.detect_on = state.pointer ? 'window' : 'canvas';
      conf.interactivity.events.resize = true;
      conf.interactivity.events.onhover = {
        enable: state.pointer && state.hoverMode !== 'none',
        mode: state.hoverMode === 'none' ? 'repulse' : state.hoverMode,
      };
      conf.interactivity.events.onclick = {
        enable: state.pointer && state.clickMode !== 'none',
        mode: state.clickMode === 'none' ? 'push' : state.clickMode,
      };
      conf.interactivity.modes.repulse.distance = state.interactionDistance;
      conf.interactivity.modes.grab.distance = Math.max(60, state.interactionDistance);
      conf.interactivity.modes.grab.line_linked.opacity = 0.28;
      conf.interactivity.modes.bubble.distance = state.interactionDistance;
      conf.interactivity.modes.bubble.size = Math.max(state.size + 2, 5);
      conf.interactivity.modes.push.particles_nb = Math.max(2, Math.min(8, Math.round(state.count / 18)));
      particlesLiveConfig = conf;
      setParticleOutputs();
      return state;
    };
    let particlesPreviewTimer = null;
    const scheduleParticlesPreview = ({ clearUrl = true, immediate = false } = {}) => {
      clearTimeout(particlesPreviewTimer);
      const run = () => {
        const state = applyParticleControlsToConfig();
        if (clearUrl && inpParticlesUrl) inpParticlesUrl.value = '';
        if ((selBgMode?.value || 'none') !== 'particles') return;
        this._config = {
          ...(this._config || {}),
          background_mode: 'particles',
          background_particles: {
            ...(this._config?.background_particles || {}),
            config_url: (inpParticlesUrl?.value || '').trim() || undefined,
            config: (!(inpParticlesUrl?.value || '').trim() && particlesLiveConfig) ? cloneData(particlesLiveConfig) : undefined,
            pointer_events: !!state.pointer,
            hover_mode: state.hoverMode,
            click_mode: state.clickMode,
            interaction_distance: state.interactionDistance,
          }
        };
        this._applyBackgroundFromConfig?.();
      };
      if (immediate) run();
      else particlesPreviewTimer = setTimeout(run, 140);
    };
    writeParticleControlsFromConfig();
    if (selTabsPosition) selTabsPosition.value = this._normalizeTabsPosition_(this.tabsPosition || 'top');
    const sidebarItemsForSettings = this._normalizeSidebarItems_(this.sidebarItems, { enabled: !!this.sidebarEnabled });
    if (chkSidebarEnabled) chkSidebarEnabled.checked = !!this.sidebarEnabled;
    const sidebarHeaderForSettings = this._normalizeSidebarHeader_(this.sidebarHeader);
    sidebarHeaderInputs.forEach((input) => {
      input.checked = input.value === sidebarHeaderForSettings;
    });
    if (inpSidebarCanvasHeight) {
      inpSidebarCanvasHeight.value = String(this._normalizeSidebarCanvasHeight_(this.sidebarCanvasHeight));
    }
    sidebarItemInputs.forEach((input) => {
      input.checked = sidebarItemsForSettings.includes(input.value);
    });
    const sidebarDefinitions = this._getSidebarItemDefinitions_?.() || [];
    const sidebarDefinitionById = new Map(sidebarDefinitions.map((item) => [item.id, item]));
    let sidebarOrderDraft = this._normalizeSidebarItems_(sidebarItemsForSettings, { enabled: !!this.sidebarEnabled });
    const renderSidebarOrderList = () => {
      if (!sidebarOrderListEl) return;
      const safe = (value) => this._safe?.(value) || String(value ?? '');
      sidebarOrderListEl.innerHTML = '';
      const checked = sidebarItemInputs.filter((input) => input.checked).map((input) => input.value);
      sidebarOrderDraft = sidebarOrderDraft.filter((item) => checked.includes(item));
      checked.forEach((item) => {
        if (!sidebarOrderDraft.includes(item)) sidebarOrderDraft.push(item);
      });
      if (!sidebarOrderDraft.length) {
        sidebarOrderListEl.innerHTML = `
          <div class="sidebar-order-empty">
            <ha-icon icon="mdi:sort-variant-off" aria-hidden="true"></ha-icon>
            <span>Select modules above to arrange the Sidebar.</span>
          </div>
        `;
        return;
      }
      sidebarOrderDraft.forEach((item, index) => {
        const def = sidebarDefinitionById.get(item) || { id: item, label: item, icon: 'mdi:drag' };
        const row = document.createElement('div');
        row.className = 'sidebar-order-row';
        row.dataset.sidebarOrderItem = item;
        row.innerHTML = `
          <div class="sidebar-order-row-main">
            <span class="sidebar-order-handle"><ha-icon icon="mdi:drag" aria-hidden="true"></ha-icon></span>
            <span class="sidebar-order-icon"><ha-icon icon="${safe(def.icon)}" aria-hidden="true"></ha-icon></span>
            <strong>${safe(def.label)}</strong>
          </div>
          <div class="sidebar-order-actions">
            <button type="button" class="icon-btn" data-sidebar-order-move="-1" aria-label="Move ${safe(def.label)} up" ${index === 0 ? 'disabled' : ''}>
              <ha-icon icon="mdi:chevron-up"></ha-icon>
            </button>
            <button type="button" class="icon-btn" data-sidebar-order-move="1" aria-label="Move ${safe(def.label)} down" ${index === sidebarOrderDraft.length - 1 ? 'disabled' : ''}>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
          </div>
        `;
        row.querySelectorAll('[data-sidebar-order-move]').forEach((button) => {
          button.addEventListener('click', () => {
            const direction = Number(button.dataset.sidebarOrderMove || 0);
            const nextIndex = index + direction;
            if (nextIndex < 0 || nextIndex >= sidebarOrderDraft.length) return;
            const [moved] = sidebarOrderDraft.splice(index, 1);
            sidebarOrderDraft.splice(nextIndex, 0, moved);
            renderSidebarOrderList();
          });
        });
        sidebarOrderListEl.appendChild(row);
      });
    };
    const syncSidebarOrderDraft = () => renderSidebarOrderList();
    sidebarItemInputs.forEach((input) => input.addEventListener('change', syncSidebarOrderDraft));
    syncSidebarOrderDraft();

    const updateSidebarHomeImagePreview = () => {
      if (!sidebarHomeImagePreview) return;
      const src = String(inpSidebarHomeImage?.value || '').trim();
      sidebarHomeImagePreview.classList.toggle('has-image', !!src);
      sidebarHomeImagePreview.innerHTML = src
        ? `<img src="${this._safe(src)}" alt="" loading="lazy" />`
        : `<ha-icon icon="mdi:image-outline" aria-hidden="true"></ha-icon><span>No house image selected</span>`;
    };
    if (inpSidebarHomeImage) {
      inpSidebarHomeImage.value = this._getSidebarHomeImage_?.() || '';
      inpSidebarHomeImage.addEventListener('input', updateSidebarHomeImagePreview);
    }
    updateSidebarHomeImagePreview();
    inpSidebarHomeImageFile?.addEventListener('change', () => {
      const file = inpSidebarHomeImageFile.files?.[0];
      if (!file || !inpSidebarHomeImage) return;
      const reader = new FileReader();
      reader.onload = () => {
        inpSidebarHomeImage.value = String(reader.result || '');
        updateSidebarHomeImagePreview();
      };
      reader.readAsDataURL(file);
    });
    btnSidebarHomeImageClear?.addEventListener('click', () => {
      if (inpSidebarHomeImage) inpSidebarHomeImage.value = '';
      if (inpSidebarHomeImageFile) inpSidebarHomeImageFile.value = '';
      updateSidebarHomeImagePreview();
    });
    if (inpSidebarCalendarEntities) {
      inpSidebarCalendarEntities.value = this._normalizeSidebarCalendarEntities_(
        this.sidebarCalendarEntities ?? this._config?.sidebar_calendar_entities ?? this._config?.sidebar_calendars ?? []
      ).join(', ');
    }
    const sidebarStyleForSettings = this._normalizeSidebarStyle_(this.sidebarStyle);
    const sidebarDensityForSettings = this._normalizeSidebarDensity_(this.sidebarDensity);
    const sidebarAccentForSettings = this._normalizeSidebarAccent_(this.sidebarAccent);
    const styleInput = modal.querySelector(`input[name="ddc-sidebar-style"][value="${sidebarStyleForSettings}"]`);
    const densityInput = modal.querySelector(`input[name="ddc-sidebar-density"][value="${sidebarDensityForSettings}"]`);
    const accentInput = modal.querySelector(`input[name="ddc-sidebar-accent"][value="${sidebarAccentForSettings}"]`);
    if (styleInput) styleInput.checked = true;
    if (densityInput) densityInput.checked = true;
    if (accentInput) accentInput.checked = true;
    renderDashboardThemeOptions();

    const yCfg = this._config?.background_youtube || {};
    const ytStr = yCfg.url || yCfg.video_id || '';
    if (inpYtUrl)   inpYtUrl.value = ytStr;
    if (inpYtStart) inpYtStart.value = (yCfg.start ?? '');
    if (inpYtEnd)   inpYtEnd.value   = (yCfg.end   ?? '');
    if (chkYtMute)  chkYtMute.checked = (yCfg.mute !== false);
    if (chkYtLoop)  chkYtLoop.checked = (yCfg.loop !== false);
    if (selYtSize) selYtSize.value = String(yCfg.size || 'cover');
    if (selYtPosition) selYtPosition.value = String(yCfg.position || 'center');
    if (selYtAttachment) selYtAttachment.value = String(yCfg.attachment || 'scroll');
    if (rngYtOpacity) {
      const ypct = Math.round((yCfg.opacity != null ? yCfg.opacity : 1) * 100);
      rngYtOpacity.value = String(ypct);
      if (outYtOpacity) outYtOpacity.textContent = ypct + '%';
      rngYtOpacity.addEventListener('input', () => {
        const v = Math.max(0, Math.min(100, parseInt(rngYtOpacity.value || '100', 10)));
        if (outYtOpacity) outYtOpacity.textContent = v + '%';
      });
    }


    // show/hide sections based on mode
    const showBgSections = () => {
      const m = selBgMode?.value || 'none';
      if (secImg)       secImg.style.display       = (m === 'image')     ? '' : 'none';
      if (secParticles) secParticles.style.display = (m === 'particles') ? '' : 'none';
      if (secYoutube)   secYoutube.style.display   = (m === 'youtube')   ? '' : 'none';
    };
    selBgMode?.addEventListener('change', showBgSections);
    showBgSections();
    const secAutoResize = modal.querySelector('[aria-labelledby="lbl-auto-resize"]');
    const updateAutoResizeVisibility = () => {
      if (secAutoResize) secAutoResize.style.display = 'none';
    };
    const updateDoNotResizeTextState = () => {
      const mode = this._normalizeContainerSizeMode_(selSize?.value);
      const supported = mode === 'auto';
      if (txtDoNotResizeTextHint) {
        txtDoNotResizeTextHint.textContent = supported
          ? 'Keeps text at its design size when the Auto canvas scale changes.'
          : 'Stored, but only used while the container size mode is Auto.';
      }
    };
    const normalizeAutoViewportMaxWidth = (value) => this._normalizeAutoViewportMaxWidth_?.(value) || 0;
    const normalizeAutoScaleMax = (value) => this._normalizeAutoScaleMax_?.(value) || 0;
    const formatOptionalNumber = (value) => {
      const n = Number(value);
      return Number.isFinite(n) && n > 0 ? String(n) : '';
    };
    const syncAutoViewportLimitControls = () => {
      const mode = this._normalizeContainerSizeMode_(selSize?.value);
      const supported = mode === 'auto';
      if (autoViewportLimitsSetting) {
        autoViewportLimitsSetting.hidden = !supported;
        autoViewportLimitsSetting.style.display = supported ? '' : 'none';
        autoViewportLimitsSetting.classList?.toggle?.('is-disabled', !supported);
      }
      [inpAutoViewportMaxWidth, inpAutoScaleMax].forEach((input) => {
        if (input) input.disabled = !supported;
      });
    };
    updateAutoResizeVisibility();
    updateDoNotResizeTextState();
    syncAutoViewportLimitControls();
    selSize?.addEventListener('change', updateAutoResizeVisibility);
    selSize?.addEventListener('change', updateDoNotResizeTextState);
    selSize?.addEventListener('change', syncAutoViewportLimitControls);

    if (inpStorageKey) inpStorageKey.value = String(this.storageKey || this._config?.storage_key || '').trim();
    if (chkAuto)    chkAuto.checked    = !!this.autoResizeCards;
    if (inpGrid)    inpGrid.value      = String(this.gridSize || 100);
    if (chkAnim)    chkAnim.checked    = !!this.animateCards;
    if (chkLoadingAnimation) chkLoadingAnimation.checked = !!this.playLoadingAnimation;
    if (chkHdr)     chkHdr.checked     = !!this.hideHaHeader;
    if (chkBar)     chkBar.checked     = !!this.hideHaSidebar;
    if (chkSnap)    chkSnap.checked    = !!this.dragLiveSnap;
    if (chkASave)   chkASave.checked   = !!this.autoSave;
    if (inpDeb)     inpDeb.value       = String(this.autoSaveDebounce ?? 800);
    if (selSize)    selSize.value      = this._normalizeContainerSizeMode_(this.containerSizeMode);
    if (inpAutoViewportMaxWidth) {
      inpAutoViewportMaxWidth.value = formatOptionalNumber(normalizeAutoViewportMaxWidth(this.autoViewportMaxWidth));
    }
    if (inpAutoScaleMax) {
      inpAutoScaleMax.value = formatOptionalNumber(normalizeAutoScaleMax(this.autoScaleMax));
    }
    updateAutoResizeVisibility();
    updateDoNotResizeTextState();
    syncAutoViewportLimitControls();
    if (chkDoNotResizeText) chkDoNotResizeText.checked = !!this.doNotResizeText;
    if (chkOuterGridBuffer) chkOuterGridBuffer.checked = !!this.outerGridBuffer;
    const normalizeOuterGridBufferCells = (value) => this._normalizeOuterGridBufferCells_?.(value) || 1;
    const syncOuterGridBufferCellsControl = () => {
      const value = normalizeOuterGridBufferCells(rngOuterGridBufferCells?.value ?? this.outerGridBufferCells ?? 1);
      if (rngOuterGridBufferCells) {
        rngOuterGridBufferCells.value = String(value);
        rngOuterGridBufferCells.disabled = !this.outerGridBuffer;
      }
      if (outOuterGridBufferCells) outOuterGridBufferCells.textContent = `${value} cell${value === 1 ? '' : 's'}`;
      if (outerGridBufferCellsControl) outerGridBufferCellsControl.classList.toggle('is-disabled', !this.outerGridBuffer);
    };
    if (rngOuterGridBufferCells) {
      rngOuterGridBufferCells.value = String(normalizeOuterGridBufferCells(this.outerGridBufferCells));
      syncOuterGridBufferCellsControl();
      rngOuterGridBufferCells.addEventListener('input', () => {
        try {
          this.outerGridBufferCells = normalizeOuterGridBufferCells(rngOuterGridBufferCells.value);
          syncOuterGridBufferCellsControl();
          this._resizeContainer?.();
          if (this._isContainerFixed?.()) this._clampAllCardsInside?.();
        } catch {}
      });
    } else {
      syncOuterGridBufferCellsControl();
    }
    chkOuterGridBuffer?.addEventListener('change', () => {
      try {
        this.outerGridBuffer = !!chkOuterGridBuffer.checked;
        this.outerGridBufferCells = normalizeOuterGridBufferCells(rngOuterGridBufferCells?.value ?? this.outerGridBufferCells ?? 1);
        syncOuterGridBufferCellsControl();
        this._resizeContainer?.();
        if (this._isContainerFixed?.()) this._clampAllCardsInside?.();
      } catch {}
    });
    if (chkOverlap) chkOverlap.checked = !!this.disableOverlap;
    if (selDashboardTheme) selDashboardTheme.value = String(this.dashboardTheme || '');
    if (chkDashboardThemeOverrideAllDesign) chkDashboardThemeOverrideAllDesign.checked = !!this.dashboardThemeOverrideAllDesign;
    updateDashboardThemeState();
    if (inpCBg)     inpCBg.value       = String(this.containerBackground || '');
    if (chkApplyPageBg) chkApplyPageBg.checked = !!this.applyBackgroundToPage;
    if (inpCardBg)  inpCardBg.value    = String(this.cardBackground || '');
    if (inpBgImg)   {
      const bgObj = (this._config?.background_image ?? this._config?.bg_image) || {};
      inpBgImg.value = bgObj.src ? String(bgObj.src) : '';
    }
    if (chkDebug)   chkDebug.checked   = !!this.debug;
    const normalizeShadowIntensity = (value) => this._normalizeCardShadowIntensity_?.(value) || 5;
    const syncShadowIntensityControl = () => {
      const value = normalizeShadowIntensity(rngShadowIntensity?.value ?? this.cardShadowIntensity ?? 5);
      if (rngShadowIntensity) {
        rngShadowIntensity.value = String(value);
        rngShadowIntensity.disabled = !this.cardShadowEnabled;
      }
      if (outShadowIntensity) outShadowIntensity.textContent = String(value);
      if (shadowIntensitySetting) {
        shadowIntensitySetting.style.opacity = this.cardShadowEnabled ? '1' : '.62';
      }
    };
    // Initialize the drop shadow toggle
    if (chkShadow)  chkShadow.checked  = !!this.cardShadowEnabled;
    if (rngShadowIntensity) {
      rngShadowIntensity.value = String(normalizeShadowIntensity(this.cardShadowIntensity));
      syncShadowIntensityControl();
      rngShadowIntensity.addEventListener('input', () => {
        try {
          this.cardShadowIntensity = normalizeShadowIntensity(rngShadowIntensity.value);
          syncShadowIntensityControl();
          this._applyDashboardThemeStyling_?.();
        } catch {}
      });
    } else {
      syncShadowIntensityControl();
    }
    if (selBgRepeat)     selBgRepeat.value     = String(bgCfg.repeat     || 'no-repeat');
    if (selBgSize)       selBgSize.value       = String(bgCfg.size       || 'cover');
    if (selBgPosition)   selBgPosition.value   = String(bgCfg.position   || 'center center');
    if (selBgAttachment) selBgAttachment.value = String(bgCfg.attachment || 'scroll');
    if (rngBgOpacity) {
      const pct = Math.round((bgCfg.opacity != null ? bgCfg.opacity : 1) * 100);
      rngBgOpacity.value = String(pct);
      if (outBgOpacity) outBgOpacity.textContent = `${pct}%`;
      rngBgOpacity.addEventListener('input', () => {
        const v = Math.max(0, Math.min(100, parseInt(rngBgOpacity.value || '100', 10)));
        outBgOpacity.textContent = `${v}%`;
        // Live preview without waiting for Save
        this.style.setProperty('--ddc-bg-opacity', String(v/100));
      });
    }

    // Live update drop shadow when the toggle is changed
    if (chkShadow) {
      chkShadow.addEventListener('change', () => {
        try {
          this.cardShadowEnabled = !!chkShadow.checked;
          syncShadowIntensityControl();
          this._applyDashboardThemeStyling_?.();
        } catch {}
      });
    }
    selDashboardTheme?.addEventListener('change', () => {
      updateDashboardThemeState();
      applyLiveDashboardThemePreview();
    });
    chkDashboardThemeOverrideAllDesign?.addEventListener('change', () => {
      updateDashboardThemeState();
      applyLiveDashboardThemePreview();
    });

    // ===== Screen saver UI =====
    // Prepopulate current value and bind live changes
    if (chkScreenSaver) {
      chkScreenSaver.checked = !!this.screenSaverEnabled;
      chkScreenSaver.addEventListener('change', () => {
        this.screenSaverEnabled = chkScreenSaver.checked;
        if (typeof this._updateScreensaverSettings === 'function') this._updateScreensaverSettings();
      });
    }
    if (rngScreenDelay) {
      // determine minutes from current delay (ms)
      const ms = this.screenSaverDelay != null ? Number(this.screenSaverDelay) : (5 * 60000);
      let mins = Math.round(ms / 60000);
      if (!Number.isFinite(mins) || mins < 1) mins = 5;
      if (mins > 60) mins = 60;
      rngScreenDelay.value = String(mins);
      if (outScreenDelay) outScreenDelay.textContent = `${mins} min`;
      rngScreenDelay.addEventListener('input', () => {
        const v = parseInt(rngScreenDelay.value || '1', 10);
        const m = Math.max(1, Math.min(60, isNaN(v) ? 1 : v));
        if (outScreenDelay) outScreenDelay.textContent = `${m} min`;
        this.screenSaverDelay = m * 60000;
        if (typeof this._updateScreensaverSettings === 'function') this._updateScreensaverSettings();
      });
    }

    const screenSaverPresets = this._getScreenSaverPresets_?.() || [];
    let screenSaverEntityDrafts = this._normalizeScreenSaverEntities_?.(this.screenSaverEntities) || [];
    const updateLiveScreenSaverEntities = () => {
      this.screenSaverEntities = this._normalizeScreenSaverEntities_?.(screenSaverEntityDrafts) || [];
      try {
        this._renderScreenSaverOverlayContent_?.();
        this._updateScreenSaverClock?.();
      } catch {}
    };
    const renderScreenSaverEntityList = () => {
      if (!screenSaverEntityList) return;
      screenSaverEntityList.innerHTML = '';
      screenSaverEntityDrafts = this._normalizeScreenSaverEntities_?.(screenSaverEntityDrafts) || [];
      const mountPicker = (host, item, index) => {
        if (!host) return;
        host.innerHTML = '';
        if (customElements.get('ha-entity-picker')) {
          const picker = document.createElement('ha-entity-picker');
          picker.hass = this.hass || this._hass;
          picker.value = item.entity || '';
          picker.setAttribute('label', 'Entity');
          picker.removeAttribute('hide-clear-icon');
          host.appendChild(picker);
          picker.addEventListener('value-changed', (ev) => {
            ev.stopPropagation();
            const nextValue = String(ev.detail?.value || ev.detail || ev.target?.value || '').trim();
            screenSaverEntityDrafts[index].entity = nextValue;
            updateLiveScreenSaverEntities();
          });
          return;
        }

        const input = document.createElement('input');
        input.type = 'text';
        input.value = item.entity || '';
        input.placeholder = item.placeholder || 'sensor.example';
        input.setAttribute('aria-label', `${item.title || 'Status'} entity`);
        host.appendChild(input);
        input.addEventListener('input', () => {
          screenSaverEntityDrafts[index].entity = String(input.value || '').trim();
          updateLiveScreenSaverEntities();
        });
      };

      screenSaverEntityDrafts.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'ss-entity-row';
        row.dataset.ssEntityKey = item.key || String(index);
        row.innerHTML = `
          <div class="ss-entity-slot">
            <ha-icon icon="${this._safe?.(item.icon || 'mdi:circle-outline') || item.icon || 'mdi:circle-outline'}" aria-hidden="true"></ha-icon>
            <div>
              <strong>${this._safe?.(item.title || item.key || `Status ${index + 1}`) || item.title || `Status ${index + 1}`}</strong>
              <span>${this._safe?.(item.note || '') || item.note || ''}</span>
            </div>
          </div>
          <div class="ss-entity-fields">
            <div class="ss-entity-picker-host"></div>
            <input type="text" class="ss-entity-label-input" value="${this._safe?.(item.label || '') || ''}" placeholder="Display label (optional)" aria-label="${this._safe?.(item.title || item.key || 'Status') || 'Status'} display label" />
          </div>
        `;
        screenSaverEntityList.appendChild(row);
        mountPicker(row.querySelector('.ss-entity-picker-host'), item, index);
        const labelInput = row.querySelector('.ss-entity-label-input');
        labelInput?.addEventListener('input', () => {
          screenSaverEntityDrafts[index].label = String(labelInput.value || '').trim();
          updateLiveScreenSaverEntities();
        });
      });
      updateLiveScreenSaverEntities();
    };
    renderScreenSaverEntityList();
    if (!customElements.get('ha-entity-picker')) {
      customElements.whenDefined('ha-entity-picker').then(() => {
        if (!modal.isConnected) return;
        renderScreenSaverEntityList();
      }).catch(() => {});
    }

    const syncScreenSaverStylePicker = (style, { scroll = false, focus = false } = {}) => {
      const selectedStyle = this._normalizeScreenSaverStyle_?.(style) || 'visionos_glass';
      const preset = screenSaverPresets.find((item) => item.id === selectedStyle) || screenSaverPresets[0];
      if (inpScreenSaverStyle) inpScreenSaverStyle.value = selectedStyle;
      if (screenSaverStyleName) screenSaverStyleName.textContent = preset?.name || 'Screen saver';
      if (screenSaverStyleNote) screenSaverStyleNote.textContent = preset?.note || '';
      screenSaverStyleCards.forEach((card) => {
        const active = card.dataset.screensaverStyle === selectedStyle;
        card.setAttribute('aria-selected', active ? 'true' : 'false');
        card.tabIndex = active ? 0 : -1;
        if (active && scroll) {
          try { card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); } catch {}
        }
        if (active && focus) {
          try { card.focus({ preventScroll: true }); } catch {}
        }
      });
    };
    const chooseScreenSaverStyle = (style, opts = {}) => {
      const selectedStyle = this._normalizeScreenSaverStyle_?.(style) || 'visionos_glass';
      this.screenSaverStyle = selectedStyle;
      syncScreenSaverStylePicker(selectedStyle, opts);
      try {
        this._renderScreenSaverOverlayContent_?.();
        this._updateScreenSaverClock?.();
      } catch {}
    };
    chooseScreenSaverStyle(this.screenSaverStyle, { scroll: true });
    screenSaverStyleCards.forEach((card) => {
      card.addEventListener('click', () => chooseScreenSaverStyle(card.dataset.screensaverStyle, { scroll: true }));
      card.addEventListener('keydown', (ev) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Enter', ' '].includes(ev.key)) return;
        ev.preventDefault();
        const currentIndex = screenSaverStyleCards.indexOf(card);
        let nextIndex = currentIndex;
        if (ev.key === 'ArrowRight') nextIndex = (currentIndex + 1) % screenSaverStyleCards.length;
        if (ev.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + screenSaverStyleCards.length) % screenSaverStyleCards.length;
        if (ev.key === 'Home') nextIndex = 0;
        if (ev.key === 'End') nextIndex = screenSaverStyleCards.length - 1;
        if (ev.key === 'Enter' || ev.key === ' ') nextIndex = currentIndex;
        chooseScreenSaverStyle(screenSaverStyleCards[nextIndex]?.dataset.screensaverStyle, { scroll: true, focus: true });
      });
    });
    const nudgeScreenSaverStyle = (direction = 1) => {
      if (!screenSaverStyleCards.length) return;
      const selectedStyle = this._normalizeScreenSaverStyle_?.(inpScreenSaverStyle?.value || this.screenSaverStyle) || 'visionos_glass';
      const currentIndex = Math.max(0, screenSaverStyleCards.findIndex((card) => card.dataset.screensaverStyle === selectedStyle));
      const nextIndex = (currentIndex + direction + screenSaverStyleCards.length) % screenSaverStyleCards.length;
      chooseScreenSaverStyle(screenSaverStyleCards[nextIndex]?.dataset.screensaverStyle, { scroll: true, focus: true });
    };
    screenSaverStylePrev?.addEventListener('click', () => nudgeScreenSaverStyle(-1));
    screenSaverStyleNext?.addEventListener('click', () => nudgeScreenSaverStyle(1));
    try {
      screenSaverStyleCarousel?.addEventListener('wheel', (ev) => {
        if (Math.abs(ev.deltaY) <= Math.abs(ev.deltaX)) return;
        ev.preventDefault();
        screenSaverStyleCarousel.scrollLeft += ev.deltaY;
      }, { passive: false });
    } catch {}


    // ===== UI polish hooks =====

    // Prepopulate Edit PIN — UI value always wins over YAML
    // Prepopulate Edit PIN — UI value wins for display too
    try {
      if (inpEditPin) {
        const yamlPin = (this.config && this.config.edit_mode_pin != null) ? String(this.config.edit_mode_pin) : '';
        const uiPin   = (this.editModePin != null) ? String(this.editModePin) : '';
        inpEditPin.value = uiPin || yamlPin || '';
        inpEditPin.disabled = false;   // ensure editable
        inpEditPin.readOnly = false;   // ensure editable
      }
    } catch {}

    const gridSlider = modal.querySelector('#ddc-setting-gridSize');
    const gridOut    = modal.querySelector('#ddc-grid-out');
    const gridDemo   = modal.querySelector('#ddc-grid-demo');
    const gridMeta   = modal.querySelector('#ddc-grid-meta');
    // Reference to the manual grid size input (number field)
    const gridInput  = modal.querySelector('#ddc-setting-gridSizeInput');

    const renderMeta = () => {
      if (!gridDemo || !gridMeta) return;
      const rect = gridDemo.getBoundingClientRect();
      const cell = Math.max(1, parseInt(gridSlider.value || '100', 10));
      const cols = Math.max(1, Math.floor(rect.width  / cell));
      const rows = Math.max(1, Math.floor(rect.height / cell));
      gridMeta.innerHTML = `
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${cell}px · ${cols}×${rows}</span>
      `;
    };

    const syncGrid = () => {
      const v = Math.max(1, parseInt(gridSlider.value || '100', 10));
      if (gridOut)  gridOut.textContent = `${v} px`;
      if (gridDemo) gridDemo.style.setProperty('--g', `${v}px`);
      renderMeta();
    };

    // Init + live update on input
    if (gridSlider) {
      if (!gridSlider.value) gridSlider.value = String(this.gridSize || 100);
      gridSlider.addEventListener('input', () => {
        // Keep the numeric input in sync with the slider
        if (gridInput) gridInput.value = gridSlider.value;
        syncGrid();
      });
      // Prepopulate the corresponding number input
      if (gridInput) gridInput.value = gridSlider.value;
      syncGrid();
    }

    // Listen to manual grid number changes
    if (gridInput) {
      gridInput.addEventListener('input', () => {
        const v = Math.max(1, Math.min(400, parseInt(gridInput.value || '100', 10)));
        gridSlider.value = String(v);
        syncGrid();
      });
    }

    // Recompute rows×cols when the demo box changes size (responsive dialog)
    if (gridDemo) {
      const ro = new ResizeObserver(() => renderMeta());
      ro.observe(gridDemo);
      // remember to clean up when the modal closes
      this.__ddcGridRO?.disconnect?.();
      this.__ddcGridRO = ro;
    }

    // Quick size chips
    modal.querySelectorAll('.chip').forEach(ch => {
      ch.addEventListener('click', () => {
        modal.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed','false'));
        ch.setAttribute('aria-pressed','true');
        const w = parseInt(ch.dataset.w, 10);
        const h = parseInt(ch.dataset.h, 10);
        const sizeSel = modal.querySelector('#ddc-setting-sizeMode');
        sizeSel.value = 'fixed_custom';
      (typeof selSize !== 'undefined' && selSize)?.dispatchEvent?.(new Event('change'));
        setTimeout(() => {
          modal.querySelector('#ddc-setting-custW')?.setAttribute('value', String(w));
          modal.querySelector('#ddc-setting-custW')?.dispatchEvent?.(new Event('change'));
          const inpW = modal.querySelector('#ddc-setting-custW'); if (inpW) inpW.value = String(w);
          const inpH = modal.querySelector('#ddc-setting-custH'); if (inpH) inpH.value = String(h);
        }, 0);
      });
    });

    const pickRandom = (list) => list[Math.floor(Math.random() * list.length)];
    const randBetween = (min, max, digits = 0) => {
      const value = min + Math.random() * (max - min);
      return Number(value.toFixed(digits));
    };
    const RANDOM_BG_SOLIDS = [
      '#0f172a', '#1e293b', '#334155', '#0f766e', '#14532d', '#7c2d12',
      '#7f1d1d', '#581c87', '#1d4ed8', '#065f46', '#111827', '#3f3f46',
      'rgba(255,255,255,0.24)', 'rgba(15,23,42,0.56)', 'rgba(249,115,22,0.28)',
      'rgba(20,184,166,0.28)', 'rgba(59,130,246,0.28)', 'rgba(244,63,94,0.24)'
    ];
    const RANDOM_CARD_SOLIDS = [
      '#111827', '#1f2937', '#0f172a', '#172033', '#1a2332', '#202938',
      'rgba(15,23,42,0.72)', 'rgba(30,41,59,0.78)', 'rgba(17,24,39,0.84)',
      'rgba(8,47,73,0.72)', 'rgba(49,46,129,0.7)', 'rgba(69,10,10,0.7)'
    ];
    const makeRandomGradient = (palette) => {
      const a = pickRandom(palette);
      let b = pickRandom(palette);
      if (a === b) b = pickRandom(palette.filter((c) => c !== a) || palette);
      const angle = Math.round(randBetween(110, 320));
      const mode = Math.random() > 0.45 ? 'linear' : 'radial';
      return mode === 'linear'
        ? `linear-gradient(${angle}deg, ${a}, ${b})`
        : `radial-gradient(circle at ${Math.round(randBetween(20, 80))}% ${Math.round(randBetween(18, 82))}%, ${a}, ${b})`;
    };
    const randomBackgroundValue = (type = 'container') => {
      const palette = type === 'card' ? RANDOM_CARD_SOLIDS : RANDOM_BG_SOLIDS;
      return Math.random() > 0.45 ? makeRandomGradient(palette) : pickRandom(palette);
    };
    const syncChoiceGroup = (container, selector, value) => {
      if (!container) return;
      container.querySelectorAll(selector).forEach((el) => {
        const matches = (el.dataset?.value || el.title || '').trim() === String(value).trim();
        el.setAttribute('aria-pressed', matches ? 'true' : 'false');
      });
    };
    const applyBackgroundValue = ({ input, picker, value, kind }) => {
      if (!input) return;
      input.value = value;
      if (picker) {
        const hex = (String(value || '').match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i) || [])[0];
        if (hex) picker.value = hex;
      }
      syncChoiceGroup(input.closest('.color-stack'), '.ddc-color-preset', value);
      try { input.dispatchEvent(new Event('input', { bubbles: true, composed: true })); } catch {}
      try {
        if (kind === 'card') {
          this.cardBackground = value;
        } else {
          this.containerBackground = value;
        }
        this._applyDashboardThemeStyling_?.();
      } catch {}
    };
    const createRandomParticlesConfig = () => {
      const colorPool = ['#ffffff', '#f8fafc', '#38bdf8', '#22d3ee', '#34d399', '#f59e0b', '#fb7185', '#c084fc', '#facc15'];
      const directionPool = ['none', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'];
      return {
        particles: {
          number: { value: Math.round(randBetween(16, 72)), density: { enable: true, value_area: Math.round(randBetween(700, 1600)) } },
          color: { value: pickRandom(colorPool) },
          shape: { type: pickRandom(['circle', 'triangle', 'edge', 'star', 'polygon']) },
          opacity: {
            value: randBetween(0.14, 0.55, 2),
            random: true,
            anim: { enable: Math.random() > 0.6, speed: randBetween(0.2, 1.4, 2), opacity_min: randBetween(0.05, 0.2, 2), sync: false }
          },
          size: {
            value: randBetween(1.6, 5.4, 1),
            random: true,
            anim: { enable: Math.random() > 0.72, speed: randBetween(1.5, 8.5, 1), size_min: randBetween(0.4, 1.5, 1), sync: false }
          },
          line_linked: {
            enable: Math.random() > 0.45,
            distance: Math.round(randBetween(90, 220)),
            color: pickRandom(colorPool),
            opacity: randBetween(0.08, 0.28, 2),
            width: randBetween(0.6, 1.6, 1)
          },
          move: {
            enable: true,
            speed: randBetween(0.3, 2.4, 2),
            direction: pickRandom(directionPool),
            random: Math.random() > 0.55,
            straight: Math.random() > 0.8,
            out_mode: 'out'
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: !!chkParticlesPointer?.checked, mode: pickRandom(['repulse', 'grab', 'bubble']) },
            onclick: { enable: !!chkParticlesPointer?.checked, mode: pickRandom(['push', 'repulse']) },
            resize: true
          },
          modes: {
            repulse: { distance: Math.round(randBetween(70, 140)) },
            push: { particles_nb: Math.round(randBetween(2, 6)) },
            bubble: { distance: Math.round(randBetween(100, 180)), size: randBetween(3, 7, 1), duration: randBetween(1.2, 2.8, 1), opacity: randBetween(0.25, 0.6, 2) },
            grab: { distance: Math.round(randBetween(110, 170)), line_linked: { opacity: randBetween(0.18, 0.45, 2) } }
          }
        },
        retina_detect: false
      };
    };
    // Color pickers keep in sync with text inputs
    [['#ddc-color-containerBg','#ddc-setting-containerBg'], ['#ddc-color-cardBg','#ddc-setting-cardBg']]
      .forEach(([pickSel, textSel]) => {
        const pick = modal.querySelector(pickSel), text = modal.querySelector(textSel);
        if (!pick || !text) return;
        const hex = (String(text.value||'').match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];
        if (hex) pick.value = hex;
        pick.addEventListener('input', () => {
          text.value = pick.value;
          try { text.dispatchEvent(new Event('input', { bubbles: true, composed: true })); } catch {}
        });
        text.addEventListener('change', () => {
          const h = (String(text.value||'').match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];
          if (h) pick.value = h;
        });
      });

    const urlInput  = modal.querySelector('#ddc-setting-bgImg');
    const thumb     = modal.querySelector('#ddc-bg-thumb');
    const updateThumb = (src) => {
      if (thumb) thumb.style.backgroundImage = src ? `url("${String(src).replace(/"/g, '\\"')}")` : 'none';
    };
    const applyLiveImageSettingsPreview = () => {
      try {
        const liveSrc = (urlInput?.value || '').trim();
        const liveBg = liveSrc ? {
          ...((this._config && this._config.background_image) || {}),
          src: liveSrc,
          repeat: selBgRepeat?.value || 'no-repeat',
          size: selBgSize?.value || 'cover',
          position: selBgPosition?.value || 'center center',
          attachment: selBgAttachment?.value || 'scroll',
          opacity: rngBgOpacity ? Math.max(0, Math.min(100, parseInt(rngBgOpacity.value || '100', 10))) / 100 : 1,
        } : null;

        if (liveBg) {
          this._config = {
            ...(this._config || {}),
            background_mode: (selBgMode?.value || 'none') === 'image' ? 'image' : (this._config?.background_mode || 'image'),
            background_image: liveBg,
          };
        } else if ((selBgMode?.value || 'none') === 'image') {
          const { background_image, ...rest } = this._config || {};
          this._config = rest;
        }
        this._applyBackgroundFromConfig?.();
      } catch {}
    };
    const syncDefaultBackgroundSelection = () => {
      if (!defaultBgTrack || !urlInput) return;
      const activeSrc = String(urlInput.value || '').trim();
      const buttons = Array.from(defaultBgTrack.querySelectorAll('[data-bg-src]'));
      let hasSelected = false;
      buttons.forEach((button) => {
        const selected = String(button.dataset.bgSrc || '') === activeSrc;
        if (selected) hasSelected = true;
        button.setAttribute('aria-pressed', selected ? 'true' : 'false');
        button.tabIndex = selected ? 0 : -1;
      });
      if (!hasSelected && buttons[0]) buttons[0].tabIndex = 0;
    };
    const showImageBackgroundControls = () => {
      if (selBgMode && selBgMode.value !== 'image') {
        selBgMode.value = 'image';
        showBgSections();
      }
    };
    const setBackgroundImageSource = (src = '') => {
      if (!urlInput) return;
      const nextSrc = String(src || '').trim();
      urlInput.value = nextSrc;
      if (nextSrc) showImageBackgroundControls();
      updateThumb(nextSrc);
      applyLiveImageSettingsPreview();
      syncDefaultBackgroundSelection();
      try {
        urlInput.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        urlInput.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
      } catch {}
    };
    const defaultBackgrounds = this._getDefaultBackgroundPresets_?.() || [];
    if (defaultBgTrack) {
      defaultBgTrack.innerHTML = '';
      defaultBackgrounds.forEach((preset, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'default-bg-card';
        button.dataset.bgSrc = preset.src || '';
        button.setAttribute('aria-pressed', 'false');
        button.tabIndex = index === 0 ? 0 : -1;
        button.innerHTML = `
          <span class="default-bg-preview" style="background-image:url('${String(preset.src || '').replace(/'/g, "\\'")}')"></span>
          <span>${this._safe(preset.label || `Default ${index + 1}`)}</span>
        `;
        button.addEventListener('click', () => setBackgroundImageSource(preset.src));
        button.addEventListener('keydown', (ev) => {
          if (!['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Enter', ' '].includes(ev.key)) return;
          ev.preventDefault();
          const cards = Array.from(defaultBgTrack.querySelectorAll('.default-bg-card'));
          const currentIndex = Math.max(0, cards.indexOf(button));
          let nextIndex = currentIndex;
          if (ev.key === 'ArrowRight') nextIndex = (currentIndex + 1) % cards.length;
          if (ev.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + cards.length) % cards.length;
          if (ev.key === 'Home') nextIndex = 0;
          if (ev.key === 'End') nextIndex = cards.length - 1;
          if (ev.key === 'Enter' || ev.key === ' ') {
            setBackgroundImageSource(button.dataset.bgSrc);
            return;
          }
          cards[nextIndex]?.focus?.({ preventScroll: true });
        });
        defaultBgTrack.appendChild(button);
      });
    }
    const scrollDefaultBackgrounds = (direction = 1) => {
      if (!defaultBgTrack) return;
      const amount = Math.max(160, Math.round((defaultBgTrack.clientWidth || 320) * 0.72));
      try { defaultBgTrack.scrollBy({ left: direction * amount, behavior: 'smooth' }); }
      catch { defaultBgTrack.scrollLeft += direction * amount; }
    };
    btnDefaultBgPrev?.addEventListener('click', () => scrollDefaultBackgrounds(-1));
    btnDefaultBgNext?.addEventListener('click', () => scrollDefaultBackgrounds(1));
    inpBgUpload?.addEventListener('change', () => {
      const file = inpBgUpload.files?.[0];
      if (!file) return;
      if (!String(file.type || '').startsWith('image/')) {
        this._toast?.('Only image files can be used as backgrounds.');
        inpBgUpload.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setBackgroundImageSource(String(reader.result || ''));
        inpBgUpload.value = '';
      };
      reader.readAsDataURL(file);
    });
    if (btnBrowseMediaLibrary) {
      btnBrowseMediaLibrary.disabled = !(this.hass && typeof this.hass.callWS === 'function');
      btnBrowseMediaLibrary.addEventListener('click', async () => {
        await this._openMediaLibraryBrowser_(async (selectedUrl) => {
          setBackgroundImageSource(selectedUrl);
        });
      });
    }

    // Initialize thumbnail from existing value
    if (urlInput?.value) {
      updateThumb(urlInput.value);
    }
    syncDefaultBackgroundSelection();

    // Live preview whenever the URL changes
    urlInput?.addEventListener('input', () => {
      const v = (urlInput.value || '').trim();
      updateThumb(v || '');
      syncDefaultBackgroundSelection();
      if ((selBgMode?.value || 'none') === 'image') applyLiveImageSettingsPreview();
    });
    urlInput?.addEventListener('change', applyLiveImageSettingsPreview);
    selBgRepeat?.addEventListener('change', () => { if ((selBgMode?.value || 'none') === 'image') applyLiveImageSettingsPreview(); });
    selBgSize?.addEventListener('change', () => { if ((selBgMode?.value || 'none') === 'image') applyLiveImageSettingsPreview(); });
    selBgPosition?.addEventListener('change', () => { if ((selBgMode?.value || 'none') === 'image') applyLiveImageSettingsPreview(); });
    selBgAttachment?.addEventListener('change', () => { if ((selBgMode?.value || 'none') === 'image') applyLiveImageSettingsPreview(); });
    rngBgOpacity?.addEventListener('input', () => { if ((selBgMode?.value || 'none') === 'image') applyLiveImageSettingsPreview(); });


    modal.querySelector('#ddc-clear-bg')?.addEventListener('click', () => {
      if (urlInput) urlInput.value = '';
      updateThumb('');
      syncDefaultBackgroundSelection();
      // clear config & live preview
      const { background_image, ...rest } = this._config || {};
      this._config = rest;
      this.style.setProperty('--ddc-bg-image', 'none');
      this._applyBackgroundFromConfig?.();
      this._persistThisCardConfigToStorage_?.();
    });

    // Close quality improvements
    modal.addEventListener('click', (evt) => { if (evt.target === modal) { evt.stopPropagation(); closeModal(); } });
    const onKey = (e) => { if (e.key === 'Escape') { e.stopPropagation(); closeModal(); } };
    document.addEventListener('keydown', onKey);
    setTimeout(() => {
      const focusTarget = initialSettingsTab === 'layout'
        ? modal.querySelector('#ddc-setting-gridSize')
        : modal.querySelector('.settings-tab.active');
      try { focusTarget?.focus?.({ preventScroll: true }); } catch {}
    }, 0);


    // Build extra inputs for container size mode (custom dimensions or preset list)
    try {
      const extrasDiv = modal.querySelector('#ddc-setting-sizeExtras');
      const updateSizeExtras = () => {
        if (!extrasDiv) return;
        extrasDiv.innerHTML = '';
        const modeVal = this._normalizeContainerSizeMode_(selSize?.value);
        extrasDiv.hidden = !(modeVal === 'fixed_custom' || modeVal === 'preset');
        if (modeVal === 'fixed_custom') {
          // Custom width and height inputs
          const wrapW = document.createElement('label');
          wrapW.style.display = 'flex';
          wrapW.style.flexDirection = 'column';
          wrapW.style.fontSize = '.95rem';
          wrapW.style.marginBottom = '10px';
          const spanW = document.createElement('span');
          spanW.textContent = 'Custom width (px)';
          spanW.style.marginBottom = '4px';
          const inpW = document.createElement('input');
          inpW.type = 'number';
          inpW.id = 'ddc-setting-custW';
          inpW.min = '100';
          inpW.max = '10000';
          inpW.step = '10';
          inpW.style.padding = '6px';
          inpW.style.border = '1px solid var(--divider-color,rgba(0,0,0,.3))';
          inpW.style.borderRadius = '6px';
          inpW.value = String(this.containerFixedWidth ?? 800);
          wrapW.appendChild(spanW);
          wrapW.appendChild(inpW);
          const wrapH = document.createElement('label');
          wrapH.style.display = 'flex';
          wrapH.style.flexDirection = 'column';
          wrapH.style.fontSize = '.95rem';
          wrapH.style.marginBottom = '10px';
          const spanH = document.createElement('span');
          spanH.textContent = 'Custom height (px)';
          spanH.style.marginBottom = '4px';
          const inpH = document.createElement('input');
          inpH.type = 'number';
          inpH.id = 'ddc-setting-custH';
          inpH.min = '100';
          inpH.max = '10000';
          inpH.step = '10';
          inpH.style.padding = '6px';
          inpH.style.border = '1px solid var(--divider-color,rgba(0,0,0,.3))';
          inpH.style.borderRadius = '6px';
          inpH.value = String(this.containerFixedHeight ?? 600);
          wrapH.appendChild(spanH);
          wrapH.appendChild(inpH);
          extrasDiv.appendChild(wrapW);
          extrasDiv.appendChild(wrapH);
        } else if (modeVal === 'preset') {
          // Preset list select
          const wrap = document.createElement('label');
          wrap.style.display = 'flex';
          wrap.style.flexDirection = 'column';
          wrap.style.fontSize = '.95rem';
          wrap.style.marginBottom = '10px';
          const span = document.createElement('span');
          span.textContent = 'Preset size';
          span.style.marginBottom = '4px';
          const select = document.createElement('select');
          select.id = 'ddc-setting-preset';
          select.style.padding = '6px';
          select.style.border = '1px solid var(--divider-color,rgba(0,0,0,.3))';
          select.style.borderRadius = '6px';
          // Populate options from size presets
          const presets = typeof this.constructor?._sizePresets === 'function'
            ? this.constructor._sizePresets()
            : [];
          presets.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.key;
            opt.textContent = `${p.label || p.key} (${p.w}×${p.h})`;
            select.appendChild(opt);
          });
          // Preselect current preset if available
          select.value = String(this.containerPreset || 'fhd');
          wrap.appendChild(span);
          wrap.appendChild(select);
          extrasDiv.appendChild(wrap);

          const orientWrap = document.createElement('label');
          orientWrap.style.display = 'flex';
          orientWrap.style.flexDirection = 'column';
          orientWrap.style.fontSize = '.95rem';
          orientWrap.style.marginBottom = '10px';
          const orientLabel = document.createElement('span');
          orientLabel.textContent = 'Orientation';
          orientLabel.style.marginBottom = '4px';
          const orientSelect = document.createElement('select');
          orientSelect.id = 'ddc-setting-orient';
          orientSelect.style.padding = '6px';
          orientSelect.style.border = '1px solid var(--divider-color,rgba(0,0,0,.3))';
          orientSelect.style.borderRadius = '6px';
          [
            ['auto', 'Auto'],
            ['landscape', 'Landscape'],
            ['portrait', 'Portrait'],
          ].forEach(([value, label]) => {
            const opt = document.createElement('option');
            opt.value = value;
            opt.textContent = label;
            orientSelect.appendChild(opt);
          });
          orientSelect.value = String(this.containerPresetOrient || 'auto');
          orientWrap.appendChild(orientLabel);
          orientWrap.appendChild(orientSelect);
          extrasDiv.appendChild(orientWrap);
        }
        attachSettingsDocLinks(extrasDiv);
      };
      // initial call
      updateSizeExtras();
      // update when size mode changes
      selSize?.addEventListener('change', updateSizeExtras);
    } catch (err) {
      console.warn('[drag-and-drop-card] Failed to build container size extras', err);
    }

    // ===== TABS MANAGER (with icon + label mode) =====

    // read current tabs; preserve existing shape and unknown fields
    const readTabs = () => {
      const raw = this._config?.options?.tabs ?? this._config?.tabs ?? [];
      return raw.map((t) => {
        if (typeof t === 'string') return { id: t, label: t, icon: '', label_mode: 'both', __raw: { id: t, label: t } };
        return {
          id: t.id ?? t.key ?? t.label ?? 'tab',
          label: t.label ?? t.id ?? 'Tab',
          icon: t.icon ?? '',
          label_mode: t.label_mode ?? 'both', // 'icon' | 'text' | 'both' (optional)
          __raw: t                               // keep full object to avoid dropping fields
        };
      });
    };

    // write back without dropping unknown fields (merge)
    const writeTabs = async (tabs, defaultId) => {
      const out = tabs.map((t) => ({
        ...t.__raw,
        id: t.id,
        label: t.label,
        icon: t.icon || '',
        label_mode: t.label_mode || 'both'
      }));
      const nextDefault = defaultId ?? out[0]?.id ?? 'default';

      if (this._config?.options) {
        this._config.options = { ...(this._config.options || {}), tabs: out, default_tab: nextDefault };
      } else {
        this._config.tabs = out;
      }
      this._config.tabs = out;
      this._config.default_tab = nextDefault;

      this.tabs = out.map((t) => ({
        ...t,
        id: t.id ?? t.key ?? t.label ?? 'tab',
        label: t.label ?? t.id ?? 'Tab',
        icon: t.icon || '',
        label_mode: t.label_mode || 'both',
      }));
      this.defaultTab = nextDefault;
      if (!this.tabs.some((t) => t.id === this.activeTab)) {
        this.activeTab = this.defaultTab;
      }

      try { this._renderTabs?.(); } catch {}
      try { this._applyActiveTab?.(); } catch {}
      try { this._applyVisibility_?.(); } catch {}

      // Keep the settings dialog mounted while tabs are edited. A full Lovelace
      // config persist can rebuild the card; the Save button performs that step.
      try {
        if (typeof this._queueSave === 'function') this._queueSave('tabs');
        else {
          this._markDirty?.('tabs');
          this._updateApplyBtn?.();
        }
      } catch (e) {
        console.warn('[drag-and-drop-card] Could not mark tabs dirty', e);
      }
      this.requestUpdate?.();
    };

    const defaultTabId = () =>
      (this._config?.options?.default_tab) || this._config?.default_tab || (readTabs()[0]?.id);

    const tabsListEl = modal.querySelector('#ddc-tabs-list');

    const renderTabs = () => {
      const tabs = readTabs();
      const def = defaultTabId();
      tabsListEl.innerHTML = '';

      if (!tabs.length) {
        const empty = document.createElement('div');
        empty.className = 'hint';
        empty.textContent = 'No tabs yet. Add one below.';
        tabsListEl.appendChild(empty);
        attachSettingsDocLinks(tabsListEl);
        return;
      }

      tabs.forEach((t, idx) => {
        const row = document.createElement('div');
        row.className = 'tab-row';

        // default selector
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'ddc-default-tab';
        radio.value = t.id;
        radio.checked = (t.id === def);
        radio.title = 'Set as default tab';
        radio.addEventListener('change', async () => { await writeTabs(tabs, t.id); });

        // icon + label editors
        const nameWrap = document.createElement('div');
        nameWrap.className = 'tab-name';

        // live icon preview
        const preview = document.createElement('ha-icon');
        preview.setAttribute('icon', t.icon || 'mdi:tab');

        // icon input
        const iconInput = document.createElement('input');
        iconInput.value = t.icon || '';
        iconInput.placeholder = 'mdi:home';
        iconInput.title = 'Tab icon (mdi:...)';
        iconInput.style.width = '160px';
        iconInput.addEventListener('change', async () => {
          t.icon = iconInput.value.trim();
          preview.setAttribute('icon', t.icon || 'mdi:tab');
          tabs[idx] = t;
          await writeTabs(tabs, def);
        });

        // label input
        const nameInput = document.createElement('input');
        nameInput.value = t.label;
        nameInput.placeholder = 'Tab name';
        nameInput.style.flex = '1';
        nameInput.addEventListener('change', async () => {
          t.label = nameInput.value.trim() || t.id;
          tabs[idx] = t;
          await writeTabs(tabs, def);
        });

        const iconWrap = document.createElement('div');
        iconWrap.className = 'tab-icon-wrap';
        iconWrap.appendChild(preview);
        iconWrap.appendChild(iconInput);

        nameWrap.appendChild(iconWrap);
        nameWrap.appendChild(nameInput);

        // label mode chips (icon / text / both)
        const modes = document.createElement('div');
        modes.className = 'mode-chips';
        const mkMode = (val, text) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'chip';
          b.textContent = text;
          b.setAttribute('aria-pressed', String((t.label_mode || 'both') === val));
          b.addEventListener('click', async () => {
            modes.querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed','false'));
            b.setAttribute('aria-pressed','true');
            t.label_mode = val;              // store preference
            tabs[idx] = t;
            await writeTabs(tabs, def);
          });
          return b;
        };
        modes.appendChild(mkMode('icon', 'Icon'));
        modes.appendChild(mkMode('text', 'Text'));
        modes.appendChild(mkMode('both', 'Both'));

        // actions (delete)
        const actions = document.createElement('div');
        actions.className = 'tab-actions';
        const delBtn = document.createElement('button');
        delBtn.className = 'icon-btn danger';
        delBtn.innerHTML = '<ha-icon icon="mdi:trash-can-outline"></ha-icon>';
        delBtn.title = 'Delete tab';
        delBtn.addEventListener('click', async () => {
          const nextTabs = readTabs().filter(x => x.id !== t.id);
          let nextDefault = def;
          if (t.id === def) nextDefault = nextTabs[0]?.id;
          await writeTabs(nextTabs, nextDefault);
          try { this._reassignCardsToTab_?.(t.id, nextDefault); } catch {}
          renderTabs();
        });

        actions.appendChild(modes);
        actions.appendChild(delBtn);

        row.appendChild(radio);
        row.appendChild(nameWrap);
        row.appendChild(actions);
        tabsListEl.appendChild(row);
      });
      attachSettingsDocLinks(tabsListEl);
    };
    renderTabs();
    renderLayers();
    renderPackages();
    renderPackageDiagnostics('');
    attachSettingsDocLinks();
    packageDiagnosticsBtn?.addEventListener('click', runPackageDiagnostics);

    // Add tab
    modal.querySelector('#ddc-add-tab-btn')?.addEventListener('click', async (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      const inp = modal.querySelector('#ddc-new-tab-name');
      const raw = (inp?.value || '').trim();
      if (!raw) return;
      const tabs = readTabs();
      // unique id
      let id = raw.replace(/\s+/g, '-').toLowerCase();
      let i = 2;
      while (tabs.some(t => t.id === id)) id = `${id}-${i++}`;
      tabs.push({ id, label: raw, icon: '', label_mode: 'both', __raw: { id, label: raw } });
      await writeTabs(tabs, defaultTabId());
      inp.value = '';
      renderTabs();
    });

    chkLayersEnabled?.addEventListener('change', () => {
      layersEnabledDraft = !!chkLayersEnabled.checked;
      if (layersEnabledDraft && !layerDrafts.length) {
        layerDrafts = [cloneLayerDraft(this._defaultDashboardLayer_(), 0)];
      }
      renderLayers();
    });
    chkLayersButtonDetails?.addEventListener('change', () => {
      layersButtonDetailsDraft = !!chkLayersButtonDetails.checked;
      syncLayerDraftState();
    });

    const addLayerFromInput = () => {
      if (!layersEnabledDraft) return;
      const raw = String(newLayerNameInput?.value || '').trim();
      if (!raw) return;
      const nextIdBase = this._normalizeLayerId_(raw, `layer-${layerDrafts.length + 1}`);
      let nextId = nextIdBase;
      let suffix = 2;
      const ids = new Set(layerDrafts.map((layer) => String(layer.id || '')));
      while (ids.has(nextId)) nextId = `${nextIdBase}-${suffix++}`;
      layerDrafts.push({
        id: nextId,
        label: raw,
        icon: 'mdi:layers-outline',
        color: '#60a5fa',
        default_active: true,
      });
      if (newLayerNameInput) newLayerNameInput.value = '';
      renderLayers();
    };

    addLayerBtn?.addEventListener('click', addLayerFromInput);
    newLayerNameInput?.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        addLayerFromInput();
      }
    });

    addFeatureBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const type = String(btn.dataset.featureType || 'misc');
        packageDrafts.push(createFeatureDraft(type));
        renderPackages();
        openFeatureEditor(packageDrafts.length - 1);
      });
    });


    // ===== BACKGROUND IMAGE: DELETE BUTTON =====
    const clearBtn = modal.querySelector('#ddc-clear-bg');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        const urlInput  = modal.querySelector('#ddc-setting-bgImg');
        const thumb     = modal.querySelector('#ddc-bg-thumb');
        if (urlInput) urlInput.value = '';
        if (thumb) thumb.style.backgroundImage = 'none';
        // clear from config immediately
        try {
          if (this._config?.background_image) {
            const { background_image, ...rest } = this._config;
            this._config = rest;
          }
          this._applyBackgroundFromConfig?.();
          this._persistThisCardConfigToStorage_?.();
        } catch (e) {
          console.warn('[drag-and-drop-card] Failed to clear background image', e);
        }
      });
    }

    const buildStyleLibrary = (containerSel, targetInputSel, targetPickerSel) => {
      const wrap = modal.querySelector(containerSel);
      const target = modal.querySelector(targetInputSel);
      const picker = modal.querySelector(targetPickerSel);
      if (!wrap || !target) return;
      const kind = String(targetInputSel || '').toLowerCase().includes('cardbg') ? 'card' : 'container';
      renderStylePresetLibrary({
        container: wrap,
        disclosureTarget: wrap.closest('.color-group'),
        currentValue: target.value,
        getPreviewBackground: (value) => resolveStylePreviewBackground(
          value,
          (varName) => getComputedStyle(this).getPropertyValue(varName),
          '#fff'
        ),
        onSelect: (value) => {
          applyBackgroundValue({ input: target, picker, value, kind });
        },
      });
    };
    buildStyleLibrary('#ddc-style-library-containerBg', '#ddc-setting-containerBg', '#ddc-color-containerBg');
    buildStyleLibrary('#ddc-style-library-cardBg', '#ddc-setting-cardBg', '#ddc-color-cardBg');
    const applyRandomParticlesPreview = () => {
      particlesLiveConfig = normalizeParticleConfig(createRandomParticlesConfig());
      if (selBgMode) selBgMode.value = 'particles';
      if (inpParticlesUrl) inpParticlesUrl.value = '';
      writeParticleControlsFromConfig({ useSavedModes: false });
      showBgSections();
      const state = applyParticleControlsToConfig();
      this._config = {
        ...(this._config || {}),
        background_mode: 'particles',
        background_particles: {
          ...(this._config?.background_particles || {}),
          config_url: undefined,
          config: cloneData(particlesLiveConfig),
          pointer_events: !!state.pointer,
          hover_mode: state.hoverMode,
          click_mode: state.clickMode,
          interaction_distance: state.interactionDistance,
        }
      };
      this._applyBackgroundFromConfig?.();
    };
    btnRandomContainerBg?.addEventListener('click', () => {
      applyBackgroundValue({
        input: inpCBg,
        picker: modal.querySelector('#ddc-color-containerBg'),
        value: randomBackgroundValue('container'),
        kind: 'container'
      });
    });
    btnRandomCardBg?.addEventListener('click', () => {
      applyBackgroundValue({
        input: inpCardBg,
        picker: modal.querySelector('#ddc-color-cardBg'),
        value: randomBackgroundValue('card'),
        kind: 'card'
      });
    });
    btnRandomAllStyle?.addEventListener('click', () => {
      applyBackgroundValue({
        input: inpCBg,
        picker: modal.querySelector('#ddc-color-containerBg'),
        value: randomBackgroundValue('container'),
        kind: 'container'
      });
      applyBackgroundValue({
        input: inpCardBg,
        picker: modal.querySelector('#ddc-color-cardBg'),
        value: randomBackgroundValue('card'),
        kind: 'card'
      });
      applyRandomParticlesPreview();
    });
    btnRandomParticles?.addEventListener('click', () => {
      applyRandomParticlesPreview();
    });
    [
      rngParticlesCount,
      rngParticlesSpeed,
      rngParticlesSize,
      rngParticlesOpacity,
      rngParticlesLineDistance,
      inpParticlesColor,
      inpParticlesLineColor,
      selParticlesShape,
    ].filter(Boolean).forEach((el) => {
      const eventName = el.tagName === 'SELECT' ? 'change' : 'input';
      el.addEventListener(eventName, () => {
        setParticleOutputs();
        scheduleParticlesPreview({ clearUrl: true });
      });
    });
    chkParticlesLines?.addEventListener('change', () => {
      setParticleOutputs();
      scheduleParticlesPreview({ clearUrl: true, immediate: true });
    });
    [
      rngParticlesInteractionDistance,
      selParticlesHoverMode,
      selParticlesClickMode,
    ].filter(Boolean).forEach((el) => {
      const eventName = el.tagName === 'SELECT' ? 'change' : 'input';
      el.addEventListener(eventName, () => {
        setParticleOutputs();
        scheduleParticlesPreview({ clearUrl: false });
      });
    });
    inpParticlesUrl?.addEventListener('change', () => scheduleParticlesPreview({ clearUrl: false, immediate: true }));
    chkParticlesPointer?.addEventListener('change', () => {
      setParticleOutputs();
      if ((selBgMode?.value || 'none') !== 'particles') return;
      scheduleParticlesPreview({ clearUrl: false, immediate: true });
    });

    // Live preview when manually editing background text inputs
    if (inpCBg) {
      inpCBg.addEventListener('input', () => {
        const val = (inpCBg.value || '').trim();
        try {
          this.containerBackground = val;
          this._applyDashboardThemeStyling_?.();
        } catch {}
      });
    }
    if (chkApplyPageBg) {
      chkApplyPageBg.addEventListener('change', () => {
        try {
          this.applyBackgroundToPage = !!chkApplyPageBg.checked;
          this._applyBackgroundFromConfig?.();
        } catch {}
      });
    }
    if (inpCardBg) {
      inpCardBg.addEventListener('input', () => {
        const val = (inpCardBg.value || '').trim();
        try {
          this.cardBackground = val;
          this._applyDashboardThemeStyling_?.();
        } catch {}
      });
    }


    // Remove modal helper
    const closeModal = () => {
      try { closeFeatureEditor(); } catch {}
      try { this.__ddcGridRO?.disconnect?.(); this.__ddcGridRO = null; } catch{}
      try { clearTimeout(particlesPreviewTimer); } catch {}
      try { document.removeEventListener('keydown', onKey); } catch {}
      try { modal.remove(); } catch {}
      if (this.__settingsModal === modal) this.__settingsModal = null;
    };
    // Close handlers
    modal.querySelector('#ddc-settings-close')?.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); });
    modal.querySelector('#ddc-settings-cancel')?.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); });
    // Save handler
    modal.querySelector('#ddc-settings-save')?.addEventListener('click', async (e) => {
      e.stopPropagation();
      // Read values
      const newSize      = this._normalizeContainerSizeMode_(selSize?.value);
      const newResponsiveAspectLocks = this._normalizeResponsiveViewportAspectLocks_?.(this.responsiveViewportAspectLocks)
        || this.responsiveViewportAspectLocks
        || {};
      const newStorageKey = String(inpStorageKey?.value || this.storageKey || this._config?.storage_key || '').trim();
      const newAuto      = newSize === 'auto' ? true : !!chkAuto?.checked;
      const newGrid      = parseInt(inpGrid?.value || '0', 10);
      const newAnim      = !!chkAnim?.checked;
      const newLoadingAnimation = !!chkLoadingAnimation?.checked;
      const newHideHdr   = !!chkHdr?.checked;
      const newHideBar   = !!chkBar?.checked;
      const newSnap      = !!chkSnap?.checked;
      const newASave     = !!chkASave?.checked;
      const newDeb       = parseInt(inpDeb?.value || '0', 10);
      const newOrient    = newSize === 'preset'
        ? (modal.querySelector('#ddc-setting-orient')?.value || this.containerPresetOrient || 'auto')
        : (this.containerPresetOrient || 'auto');
      const newOptimizeForMobile = !!this.optimizeForMobile;
      const newMobileDynamicBehavior = String(this.mobileDynamicBehavior || 'native').toLowerCase() === 'scale'
        ? 'scale'
        : 'native';
      const newAutoViewportMaxWidth = normalizeAutoViewportMaxWidth(inpAutoViewportMaxWidth?.value);
      const newAutoScaleMax = normalizeAutoScaleMax(inpAutoScaleMax?.value);
      const newDoNotResizeText = !!chkDoNotResizeText?.checked;
      const newOuterGridBuffer = !!chkOuterGridBuffer?.checked;
      const newOuterGridBufferCells = normalizeOuterGridBufferCells(rngOuterGridBufferCells?.value ?? this.outerGridBufferCells ?? 1);
      const newOverlap   = !!chkOverlap?.checked;
      const newDashboardTheme = String(selDashboardTheme?.value || '').trim();
      const newDashboardThemeEnabled = !!newDashboardTheme;
      const newDashboardThemeOverrideAllDesign = !!newDashboardTheme && !!chkDashboardThemeOverrideAllDesign?.checked;
      const newCBg       = (inpCBg?.value || '').trim();
      const newApplyPageBg = !!chkApplyPageBg?.checked;
      const newCardBg    = (inpCardBg?.value || '').trim();
      const newBgImg     = (inpBgImg?.value || '').trim();
      const newDebug     = !!chkDebug?.checked;
      const newEditPin  = (inpEditPin?.value || '').trim();
      const newBgMode = selBgMode?.value || 'none';
      const newParticlesUrl = (inpParticlesUrl?.value || '').trim();
      const newParticlesPtr = !!chkParticlesPointer?.checked;
      const newParticlesState = applyParticleControlsToConfig();
      const newYtUrl   = (inpYtUrl?.value || '').trim();
      const newYtStart = parseInt(inpYtStart?.value || '', 10);
      const newYtEnd   = parseInt(inpYtEnd?.value   || '', 10);
      const newYtMute  = !!chkYtMute?.checked;
      const newYtLoop  = !!chkYtLoop?.checked;
      const newYtSize  = (selYtSize?.value || 'cover');
      const newYtPosition = (selYtPosition?.value || 'center');
      const newYtOpacity  = rngYtOpacity ? Math.max(0, Math.min(100, parseInt(rngYtOpacity.value || '100', 10))) / 100 : 1;
      const newYtAttachment = (selYtAttachment?.value || 'scroll');
      const newTabsPositionRaw = String(selTabsPosition?.value || this.tabsPosition || 'top').toLowerCase();
      const newTabsPosition = this._normalizeTabsPosition_(newTabsPositionRaw);
      const newLayersEnabled = !!chkLayersEnabled?.checked;
      const newLayersButtonDetails = !!chkLayersButtonDetails?.checked;
      const normalizedLayers = normalizeLayerDrafts(
        newLayersEnabled
          ? (layerDrafts.length ? layerDrafts : [cloneLayerDraft(this._defaultDashboardLayer_(), 0)])
          : layerDrafts
      );
      const normalizedPackages = this._normalizeDashboardPackages_(packageDrafts.map((pkg, index) => ({
        id: String(pkg.id || `package_${index + 1}`).trim() || `package_${index + 1}`,
        name: String(pkg.name || `Package ${index + 1}`).trim() || `Package ${index + 1}`,
        filename: String(pkg.filename || '').trim(),
        yaml: String(pkg.yaml || '').replace(/\r\n/g, '\n'),
        enabled: pkg.enabled !== false,
        feature_type: featureTypeIsKnown(pkg.feature_type) ? pkg.feature_type : 'misc',
      })));

      for (const pkg of normalizedPackages) {
        const yamlText = String(pkg.yaml || '').trim();
        if (!pkg.enabled || !yamlText) continue;
        try {
          window.jsyaml?.load?.(yamlText);
        } catch (yamlErr) {
          console.warn('[drag-and-drop-card] Invalid package YAML', pkg.name, yamlErr);
          this._toast?.(`Invalid YAML in feature "${pkg.name || pkg.filename || pkg.id}".`);
          return;
        }
      }

      // Card shadow toggle
      const newShadow = !!chkShadow?.checked;
      const newShadowIntensity = normalizeShadowIntensity(rngShadowIntensity?.value ?? this.cardShadowIntensity ?? 5);

      // Screen saver values
      const newScreenSaverEnabled   = !!chkScreenSaver?.checked;
      const newScreenSaverDelayMin  = parseInt(rngScreenDelay?.value || '1', 10);
      const newScreenSaverDelayMs   = (Number.isFinite(newScreenSaverDelayMin) ? newScreenSaverDelayMin : 1) * 60000;
      const newScreenSaverStyle     = this._normalizeScreenSaverStyle_?.(inpScreenSaverStyle?.value || this.screenSaverStyle) || 'visionos_glass';
      const newScreenSaverEntities  = this._normalizeScreenSaverEntities_?.(screenSaverEntityDrafts) || [];

      // hero image not exposed to user
      try {
        const resolvedStorageKey = newStorageKey || this._deriveStorageKeyFromConfig_?.(this._config || this.config || {}) || this.storageKey;
        if (resolvedStorageKey) {
          this.storageKey = resolvedStorageKey;
          this._config = { ...(this._config || {}), storage_key: resolvedStorageKey };
          this.config = { ...(this.config || {}), storage_key: resolvedStorageKey };
          if (inpStorageKey) inpStorageKey.value = resolvedStorageKey;
          this._syncEditorsStorageKey?.();
        }

        // Auto resize cards
        this.autoResizeCards = newAuto;
        this.autoViewportMaxWidth = newAutoViewportMaxWidth;
        this.autoScaleMax = newAutoScaleMax;

        // If turning OFF: disconnect observers & listeners
        if (!this.autoResizeCards && this.__ddcResizeObs) {
          try { this.__ddcResizeObs.disconnect(); } catch {}
          this.__ddcResizeObs = null;
          if (this.__ddcOnWinResize) {
            window.removeEventListener('resize', this.__ddcOnWinResize);
            this.__ddcOnWinResize = null;
          }
        }

        // If turning ON: attach observers & listeners (idempotent)
        if (this.autoResizeCards && !this.__ddcResizeObs) {
          this.__ddcResizeObs = new ResizeObserver(() => this._requestAutoScaleFromObserver_?.());
          try { this.__ddcResizeObs.observe(this); } catch {}
          try { this.__ddcResizeObs.observe(this.cardContainer); } catch {}
          this.__ddcOnWinResize = this.__ddcOnWinResize || (() => {
            this._syncResponsiveProfileForViewport_?.();
            this._applyAutoScale?.();
          });
          window.addEventListener('resize', this.__ddcOnWinResize);
        }

        // Start/stop any rAF scale watcher depending on mode
        if (
          this.autoResizeCards ||
          this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode) === 'auto'
        ) {
          this._startScaleWatch?.();
        } else {
          this._stopScaleWatch?.();
        }

        // Recompute once to settle layout immediately
        this._applyAutoScale?.();

        // Grid size
        if (!isNaN(newGrid) && newGrid > 0 && newGrid !== this.gridSize) {
          this.gridSize = newGrid;
          this._applyGridVars?.();
          this._resizeContainer?.();
        }
        // Apply card drop shadow
        this.cardShadowEnabled = newShadow;
        this.cardShadowIntensity = newShadowIntensity;
        // Edit mode PIN
        this.editModePin = newEditPin;
        // make sure the persisted config also carries it
        this._config = { ...(this._config || {}), edit_mode_pin: newEditPin };
        // Drag live snap
        const snapChanged = newSnap !== this.dragLiveSnap;
        this.dragLiveSnap = newSnap;
        if (snapChanged) {
          // Re-init interact on all cards so the snap modifiers take effect
          this._initInteract?.();
        }
        // Auto save
        this.autoSave = newASave;
        // Auto save debounce
        if (!isNaN(newDeb) && newDeb > 0) this.autoSaveDebounce = newDeb;
        this._syncToolbarAutoSaveState_?.();
        // Container size mode
        const sizeChanged = newSize !== this.containerSizeMode;
        const outerBufferChanged = newOuterGridBuffer !== !!this.outerGridBuffer
          || newOuterGridBufferCells !== normalizeOuterGridBufferCells(this.outerGridBufferCells);
        this.containerSizeMode = newSize;
        this.responsiveViewportAspectLocks = newResponsiveAspectLocks;
        this.optimizeForMobile = newOptimizeForMobile;
        this.mobileDynamicBehavior = newMobileDynamicBehavior;
        this.doNotResizeText = newDoNotResizeText;
        this.outerGridBuffer = newOuterGridBuffer;
        this.outerGridBufferCells = newOuterGridBufferCells;
        this.layersEnabled = newLayersEnabled;
        this.layersButtonDetails = newLayersButtonDetails;
        this.dashboardThemeEnabled = newDashboardThemeEnabled;
        this.dashboardTheme = newDashboardTheme;
        this.dashboardThemeOverrideAllDesign = newDashboardThemeOverrideAllDesign;
        // Container orientation
        const orientChanged = newOrient !== this.containerPresetOrient;
        this.containerPresetOrient = newOrient;
        if (sizeChanged || orientChanged || outerBufferChanged) {
          // When size or orientation changes, recalc container
          this._resizeContainer?.();
        }
        this._syncViewportPreviewUI_?.();

        // Apply fixed custom or preset dimensions
        if (newSize === 'fixed_custom') {
          // Read custom width & height from inputs and apply immediately
          const wVal = parseInt(modal.querySelector('#ddc-setting-custW')?.value || '0', 10);
          const hVal = parseInt(modal.querySelector('#ddc-setting-custH')?.value || '0', 10);
          if (!isNaN(wVal) && wVal > 0) this.containerFixedWidth  = wVal;
          if (!isNaN(hVal) && hVal > 0) this.containerFixedHeight = hVal;
          // Recompute container size after updating custom dims
          this._resizeContainer?.();
        } else if (newSize === 'preset') {
          const presetVal = modal.querySelector('#ddc-setting-preset')?.value;
          if (presetVal) this.containerPreset = presetVal;
          // Recompute container size after updating preset
          this._resizeContainer?.();
        }
        this._applyAutoScale?.();
        await this._syncResponsiveProfileForViewport_?.({ force: true });
        this._resizeContainer?.();
        this._applyAutoScale?.();
        this.tabsPosition = newTabsPosition;
        this.sidebarEnabled = false;
        this.sidebarItems = [];
        this.sidebarCards = [];
        this._config = this._config || {};
        if (this._config.options) {
          this._config.options = {
            ...(this._config.options || {}),
            tabs_position: this.tabsPosition,
            layers_enabled: !!this.layersEnabled,
            layers_button_details: !!this.layersButtonDetails,
            layers: this._cloneJson_(normalizedLayers),
          };
          this._deleteParkedSidebarOptions_(this._config.options);
        }
        this._config.tabs_position = this.tabsPosition;
        this._deleteParkedSidebarOptions_(this._config);
        this._config.layers_enabled = !!this.layersEnabled;
        this._config.layers_button_details = !!this.layersButtonDetails;
        this._config.layers = this._cloneJson_(normalizedLayers);
        this._setDashboardLayers_(normalizedLayers, { refresh: true, persist: true });
        this._syncTabsPlacement_?.();
        this._renderTabs?.();
        this._applyActiveTab?.();
        this._syncTabsWidth_?.();
        // Disable overlap
        this.disableOverlap = newOverlap;
        // Container background
        // When the input has a value, apply it; otherwise reset to an empty string.
        if (newCBg) {
          this.containerBackground = newCBg;
          // reflect into config immediately so exportable options include it
          this._config = this._config || {};
          this._config.container_background = this.containerBackground;
        } else {
          // Reset: remove inline style and persist an empty string to override any YAML value
          this.containerBackground = '';
          this._config = this._config || {};
          this._config.container_background = this.containerBackground;
        }
        this.applyBackgroundToPage = newApplyPageBg;
        this._config = this._config || {};
        this._config.apply_background_to_page = !!this.applyBackgroundToPage;
        // Card background
        if (newCardBg) {
          this.cardBackground = newCardBg;
          this._config = this._config || {};
          this._config.card_background = this.cardBackground;
        } else {
          // Reset card background: remove inline style and store empty string
          this.cardBackground = '';
          this._config = this._config || {};
          this._config.card_background = this.cardBackground;
        }
        this._config.dashboard_theme_enabled = undefined;
        this._config.theme_enabled = undefined;
        this._config.dashboard_theme = this.dashboardTheme || undefined;
        this._config.theme_name = undefined;
        this._config.dashboard_theme_override_all_design = this.dashboardTheme ? !!this.dashboardThemeOverrideAllDesign : undefined;
        this._applyDashboardThemeStyling_?.();
        // Background image (only src)
        // Background image (only src) — immutable update (avoids "read-only" error)
        if (newBgImg) {
          const prevBg = (this._config && this._config.background_image) || {};
          this._config = { ...this._config, background_image: { ...prevBg, src: newBgImg } };
        } else {
          const { background_image, ...rest } = this._config || {};
          this._config = rest;
        }
        // Debug
        this.debug = newDebug;
        // Animate cards
        this.animateCards = newAnim;
        this.playLoadingAnimation = newLoadingAnimation;
        // Hide HA chrome
        this.hideHaHeader  = newHideHdr;
        this.hideHaSidebar = newHideBar;
        this._applyHaChromeVisibility_?.();

        // Apply background image (if changed)
        // ---- Background image (immutable update) ----
        const prevBg = (this._config && this._config.background_image) || {};
        const rep    = selBgRepeat?.value     || 'no-repeat';
        const sz     = selBgSize?.value       || 'cover';
        const pos    = selBgPosition?.value   || 'center center';
        const att    = selBgAttachment?.value || 'scroll';
        const op     = rngBgOpacity ? Math.max(0, Math.min(100, parseInt(rngBgOpacity.value || '100', 10))) / 100 : 1;

        // ---- Background mode + dynamic configs ----
        this._config = this._config || {};
        this._config.background_mode = newBgMode;

        // keep image settings only if mode is 'image' or you’ve set a src
        if (newBgMode !== 'image' && !newBgImg) {
          const { background_image, ...rest } = this._config || {};
          this._config = rest;
        }

        // particles
        if (newBgMode === 'particles') {
          this._config.background_particles = {
            config_url: newParticlesUrl || undefined,
            config: (!newParticlesUrl && particlesLiveConfig) ? cloneData(particlesLiveConfig) : undefined,
            pointer_events: newParticlesPtr || undefined,
            hover_mode: newParticlesState.hoverMode,
            click_mode: newParticlesState.clickMode,
            interaction_distance: newParticlesState.interactionDistance,
          };
        } else {
          const { background_particles, ...rest } = this._config || {};
          this._config = rest;
        }

        // youtube
        if (newBgMode === 'youtube') {
          this._config.background_youtube = {
            url: newYtUrl || undefined,
            start: Number.isFinite(newYtStart) ? newYtStart : undefined,
            end:   Number.isFinite(newYtEnd)   ? newYtEnd   : undefined,
            mute:  newYtMute !== true ? newYtMute : undefined,  // defaults true
            loop:  newYtLoop !== true ? newYtLoop : undefined   // defaults true
          ,
            size:  newYtSize && newYtSize != 'cover' ? newYtSize : undefined,
            position: newYtPosition || undefined,
            attachment: (newYtAttachment && newYtAttachment !== 'scroll') ? newYtAttachment : undefined,
            opacity: (newYtOpacity != null && newYtOpacity !== 1) ? newYtOpacity : undefined
          };
        } else {
          const { background_youtube, ...rest } = this._config || {};
          this._config = rest;
        }

        // Screen saver settings
        this.screenSaverEnabled = newScreenSaverEnabled;
        this.screenSaverDelay   = newScreenSaverDelayMs;
        this.screenSaverStyle   = newScreenSaverStyle;
        this.screenSaverEntities = newScreenSaverEntities;
        this._updateScreensaverSettings?.();


        if (newBgImg) {
          this._config = {
            ...this._config,
            background_image: { ...prevBg, src: newBgImg, repeat: rep, size: sz, position: pos, attachment: att, opacity: op }
          };
        } else if (prevBg.src) {
          this._config = {
            ...this._config,
            background_image: { ...prevBg, repeat: rep, size: sz, position: pos, attachment: att, opacity: op }
          };
        } else {
          const { background_image, ...rest } = this._config || {};
          this._config = rest;
        }

        // Apply immediately (preview)
        this._applyBackgroundFromConfig?.();

        // Update underlying config so changes persist in YAML/storage
        try {
          if (!this._config) this._config = {};
          if (this.storageKey) this._config.storage_key = this.storageKey;
          this._config.grid                    = this.gridSize;
          if (this.connectorGridSize) this._config.connector_grid_size = this.connectorGridSize;
          else delete this._config.connector_grid_size;
          this._config.auto_resize_cards       = this.containerSizeMode === 'auto' ? true : !!this.autoResizeCards;
          this._config.drag_live_snap          = !!this.dragLiveSnap;
          this._config.auto_save               = !!this.autoSave;
          this._config.auto_save_debounce      = this.autoSaveDebounce;
          this._config.container_size_mode     = this._normalizeContainerSizeMode_(this.containerSizeMode);
          this._config.container_preset_orientation = this.containerPresetOrient;
          this._config.auto_viewport_max_width = this.autoViewportMaxWidth || undefined;
          this._config.auto_scale_max          = this.autoScaleMax || undefined;
          this._config.optimize_for_mobile     = !!this.optimizeForMobile;
          this._config.mobile_dynamic_behavior = this.mobileDynamicBehavior || 'native';
          this._config.do_not_resize_text      = !!this.doNotResizeText;
          this._config.outer_grid_buffer       = !!this.outerGridBuffer;
          this._config.outer_grid_buffer_cells = this._normalizeOuterGridBufferCells_(this.outerGridBufferCells);
          this._config.responsive_viewport_aspect_locks = this._cloneJson_?.(this._normalizeResponsiveViewportAspectLocks_?.(this.responsiveViewportAspectLocks)) || this.responsiveViewportAspectLocks;
          this._config.dashboard_theme_enabled = undefined;
          this._config.theme_enabled = undefined;
          this._config.dashboard_theme = this.dashboardTheme || undefined;
          this._config.theme_name = undefined;
          this._config.dashboard_theme_override_all_design = this.dashboardTheme ? !!this.dashboardThemeOverrideAllDesign : undefined;
          this._config.container_fixed_width   = this.containerFixedWidth;
          this._config.container_fixed_height  = this.containerFixedHeight;
          this._config.container_preset        = this.containerPreset;
          this._config.disable_overlap         = !!this.disableOverlap;
          // Only persist backgrounds when defined; otherwise remove from the config so YAML
          // can fall back to defaults. Note that undefined backgrounds are not exported
          // by _exportableOptions(), so leaving the keys deleted ensures old YAML
          // values are overwritten when we persist options.
          if (this.containerBackground !== undefined) {
            this._config.container_background = this.containerBackground;
          } else if (this._config) {
            delete this._config.container_background;
          }
          this._config.apply_background_to_page = !!this.applyBackgroundToPage;
          if (this.cardBackground !== undefined) {
            this._config.card_background = this.cardBackground;
          } else if (this._config) {
            delete this._config.card_background;
          }
          // Persist card shadow setting
          this._config.card_shadow            = !!this.cardShadowEnabled;
          this._config.card_shadow_intensity  = this._normalizeCardShadowIntensity_(this.cardShadowIntensity);
          this._config.debug                   = !!this.debug;
          this._config.animate_cards           = !!this.animateCards;
          this._config['play-loading_animation'] = !!this.playLoadingAnimation;
          this._config.hide_HA_Header          = !!this.hideHaHeader;
          this._config.hide_HA_Sidebar         = !!this.hideHaSidebar;
          // Screen saver config
          this._config.screen_saver_enabled    = !!this.screenSaverEnabled;
          this._config.screen_saver_delay      = this.screenSaverDelay;
          this._config.screen_saver_style      = this.screenSaverStyle;
          this._config.screen_saver_entities   = this._cloneJson_?.(this.screenSaverEntities) || this.screenSaverEntities;
          // Background image src is already updated in this._config.background_image above
        } catch (cfgErr) {
          console.warn('[drag-and-drop-card] Failed to update config', cfgErr);
        }
        this.__ddcTextLockDirty = true;
        this._scheduleTextResizeLockRefresh_?.(true);
        // Persist changes
        // Persist changes both to the Lovelace storage (when available) and to the YAML config.
        // Calling both persistence helpers ensures that any changed settings override the
        // YAML definitions on reload, and that storage dashboards remain in sync.
        try {
          const opts = this._exportableOptions?.() || {};
          // Attempt to persist this card config into the Lovelace storage (visual editor).
          const storagePromise = this._persistThisCardConfigToStorage_?.();
          if (storagePromise && typeof storagePromise.catch === 'function') {
            storagePromise.catch((err) => {
              console.warn('[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)', err);
            });
          }
          // Independently persist the updated options into YAML. This is harmless on storage
          // dashboards and will noop if the YAML is not editable. Suppress downloads to avoid
          // prompting the user for backups during normal settings changes.
          const yamlPromise = this._persistOptionsToYaml?.(opts, { noDownload: true });
          if (yamlPromise && typeof yamlPromise.catch === 'function') {
            yamlPromise.catch((yamlErr) => {
              console.warn('[drag-and-drop-card] YAML persist failed', yamlErr);
            });
          }
        } catch (persErr) {
          console.warn('[drag-and-drop-card] Unexpected error persisting settings', persErr);
        }

        try {
          this._setDashboardPackages_(normalizedPackages);
          await this._saveLayout(true);
        } catch (packageSaveErr) {
          console.warn('[drag-and-drop-card] Failed to persist package bundles', packageSaveErr);
        }
      } catch (err) {
        console.warn('[drag-and-drop-card] Failed to apply settings', err);
      }
      closeModal();
    });
  }
};

export function installDashboardSettingsMethods(proto) {
  for (const [name, value] of Object.entries(dashboardSettingsMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
