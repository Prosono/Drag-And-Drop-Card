/*
 * Per-card settings menu behavior for cards placed on the dashboard canvas.
 *
 * This module owns the contextual controls that let users edit, duplicate, layer, or remove a card
 * without coupling those actions to the low-level drag renderer.
 */

import { renderStylePresetLibrary, resolveStylePreviewBackground } from '../dashboard/style-presets.js';

/* Per-card style and card settings overlay helpers. */
const cardSettingsMenuMethods = {
  _normalizePerCardStyle_(style = {}) {
    const out = {};
    for (const key of ['background', 'container_background', 'text_color', 'border_color']) {
      const value = style?.[key];
      if (value == null) continue;
      const trimmed = String(value).trim();
      if (trimmed) out[key] = trimmed;
    }
    for (const key of ['animate_cards', 'card_shadow', 'connector_anchors']) {
      const value = String(style?.[key] || '').trim().toLowerCase();
      if (value === 'on' || value === 'off') out[key] = value;
    }
    return out;
  },

  _extractPerCardStyle_(wrap) {
    if (!wrap) return {};
    try {
      return this._normalizePerCardStyle_(JSON.parse(wrap.dataset.cardStyle || '{}') || {});
    } catch {
      return {};
    }
  },

  _applyPerCardStyle_(wrap, style = null, { persist = true } = {}) {
    if (!wrap) return {};
    const next = this._normalizePerCardStyle_(style || {});
    const themeOwnsDesign = this._isDashboardThemeOverrideAllDesignActive_?.();
    const resolvedOuterBackground = themeOwnsDesign ? '' : (next.background || next.container_background || '');
    const resolvedInnerBackground = themeOwnsDesign ? '' : (next.container_background || next.background || '');

    if (resolvedOuterBackground) wrap.style.setProperty('--ddc-card-local-bg', resolvedOuterBackground);
    else wrap.style.removeProperty('--ddc-card-local-bg');

    if (resolvedInnerBackground) {
      wrap.style.setProperty('--ddc-card-inner-bg', resolvedInnerBackground);
      wrap.style.setProperty('--ha-card-background', resolvedInnerBackground);
      wrap.style.setProperty('--card-background-color', resolvedInnerBackground);
      wrap.style.setProperty('--paper-card-background-color', resolvedInnerBackground);
    } else {
      wrap.style.removeProperty('--ddc-card-inner-bg');
      wrap.style.removeProperty('--ha-card-background');
      wrap.style.removeProperty('--card-background-color');
      wrap.style.removeProperty('--paper-card-background-color');
    }

    if (!themeOwnsDesign && next.border_color) wrap.style.setProperty('--ddc-card-border-color', next.border_color);
    else wrap.style.removeProperty('--ddc-card-border-color');

    if (themeOwnsDesign) {
      wrap.style.removeProperty('--ddc-card-local-shadow');
    } else if (next.card_shadow === 'off') {
      wrap.style.setProperty('--ddc-card-local-shadow', 'none');
    } else if (next.card_shadow === 'on') {
      wrap.style.setProperty('--ddc-card-local-shadow', this._cardShadowCssValue_());
    } else {
      wrap.style.removeProperty('--ddc-card-local-shadow');
    }

    // Connector endpoints are an editing affordance only. Keep saved
    // connectors attached while allowing individual compact cards to opt out
    // of the four interactive anchor buttons.
    wrap.classList.toggle('ddc-connector-anchors-disabled', next.connector_anchors === 'off');

    const textProps = [
      '--primary-text-color',
      '--text-primary-color',
      '--paper-item-icon-color',
      '--state-icon-color',
      '--mdc-theme-text-primary-on-background'
    ];
    if (!themeOwnsDesign && next.text_color) {
      wrap.style.color = next.text_color;
      textProps.forEach((prop) => wrap.style.setProperty(prop, next.text_color));
    } else {
      wrap.style.removeProperty('color');
      textProps.forEach((prop) => wrap.style.removeProperty(prop));
    }

    if (persist) {
      if (Object.keys(next).length) wrap.dataset.cardStyle = JSON.stringify(next);
      else delete wrap.dataset.cardStyle;
    }

    return next;
  },

  _closeCardSettingsMenu_() {
    const state = this.__cardSettingsMenu;
    if (!state) return;
    try { state.cleanup?.(); } catch {}
    try { state.root?.remove?.(); } catch {}
    try { if (!state.root) state.menu?.remove?.(); } catch {}
    this.__cardSettingsMenu = null;
  },

  _closeCompactCardActionsMenu_() {
    const state = this.__compactCardActionsMenu;
    if (!state) return;
    try { state.cleanup?.(); } catch {}
    try { state.root?.remove?.(); } catch {}
    try { state.wrap?.classList?.remove('ddc-compact-actions-open'); } catch {}
    try { state.trigger?.setAttribute('aria-expanded', 'false'); } catch {}
    this.__compactCardActionsMenu = null;
  },

  _positionCompactCardActionsMenu_() {
    const state = this.__compactCardActionsMenu;
    if (!state?.menu || !state?.wrap) return;
    const { menu, trigger, wrap } = state;
    if (!menu.isConnected || !wrap.isConnected) {
      this._closeCompactCardActionsMenu_();
      return;
    }

    const anchor = (trigger && trigger.isConnected) ? trigger : wrap;
    const rect = anchor.getBoundingClientRect();
    const margin = 10;
    const viewportW = Math.max(1, window.innerWidth || document.documentElement.clientWidth || 1);
    const viewportH = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 1);
    const menuW = Math.max(276, menu.offsetWidth || 296);
    const menuH = Math.max(180, menu.offsetHeight || 470);

    let left = rect.right - menuW;
    let top = rect.bottom + 8;
    if (top + menuH > viewportH - margin) {
      top = rect.top - menuH - 8;
    }

    left = Math.min(Math.max(margin, left), Math.max(margin, viewportW - menuW - margin));
    top = Math.min(Math.max(margin, top), Math.max(margin, viewportH - menuH - margin));

    menu.style.left = `${Math.round(left)}px`;
    menu.style.top = `${Math.round(top)}px`;
  },

  _openCompactCardActionsMenu_(wrap) {
    if (!wrap) return;
    if (this.__compactCardActionsMenu?.wrap === wrap) {
      this._closeCompactCardActionsMenu_();
      return;
    }

    this._closeCompactCardActionsMenu_();
    this._closeCardSettingsMenu_();

    const root = document.createElement('div');
    root.className = 'ddc-compact-actions-backdrop';
    const trigger = wrap.querySelector?.('.ddc-compact-card-actions');
    const menu = document.createElement('div');
    menu.className = 'ddc-compact-actions-menu';
    menu.setAttribute('role', 'menu');
    menu.setAttribute('aria-label', 'Card actions');

    const stopEvt = (ev) => ev.stopPropagation();
    menu.addEventListener('pointerdown', stopEvt, true);
    menu.addEventListener('mousedown', stopEvt, true);
    menu.addEventListener('touchstart', stopEvt, true);

    const selected = Array.from(this._selection || []);
    const selectionCount = selected.length > 1 && selected.includes(wrap) ? selected.length : 1;
    const isSidebarCard = wrap.dataset?.sidebarCard === '1';
    const config = this._extractCardConfig?.(wrap.firstElementChild) || {};
    const cardType = String(config.type || 'card').replace(/^custom:/, '').replace(/-/g, ' ');

    const header = document.createElement('header');
    header.className = 'ddc-compact-actions-header';
    const headerIcon = document.createElement('span');
    headerIcon.className = 'ddc-compact-actions-header-icon';
    headerIcon.innerHTML = '<ha-icon icon="mdi:card-bulleted-settings-outline"></ha-icon>';
    const headerCopy = document.createElement('span');
    headerCopy.className = 'ddc-compact-actions-header-copy';
    const headerTitle = document.createElement('strong');
    headerTitle.textContent = 'Card menu';
    const headerSubtitle = document.createElement('small');
    headerSubtitle.textContent = selectionCount > 1
      ? `${selectionCount} selected cards`
      : cardType;
    headerCopy.append(headerTitle, headerSubtitle);
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'ddc-compact-actions-close';
    closeButton.setAttribute('aria-label', 'Close card menu');
    closeButton.setAttribute('title', 'Close');
    closeButton.innerHTML = '<ha-icon icon="mdi:close"></ha-icon>';
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      this._closeCompactCardActionsMenu_();
      trigger?.focus?.();
    });
    header.append(headerIcon, headerCopy, closeButton);
    menu.appendChild(header);

    const makeGroup = (label, className = '') => {
      const section = document.createElement('section');
      section.className = `ddc-compact-actions-group${className ? ` ${className}` : ''}`;
      if (label) {
        const heading = document.createElement('span');
        heading.className = 'ddc-compact-actions-group-label';
        heading.textContent = label;
        section.appendChild(heading);
      }
      const actionsHost = document.createElement('div');
      actionsHost.className = 'ddc-compact-actions-group-buttons';
      section.appendChild(actionsHost);
      menu.appendChild(section);
      return actionsHost;
    };
    const appendAction = (host, {
      action,
      icon,
      label,
      description = '',
      danger = false,
      featured = false,
      compact = false,
    }) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = [
        danger ? 'danger' : '',
        featured ? 'featured' : '',
        compact ? 'compact' : '',
      ].filter(Boolean).join(' ');
      btn.dataset.cardQuickAction = action;
      btn.setAttribute('role', 'menuitem');
      btn.innerHTML = `
        <span class="ddc-compact-actions-button-icon"><ha-icon icon="${icon}"></ha-icon></span>
        <span class="ddc-compact-actions-button-copy"><strong>${label}</strong>${description ? `<small>${description}</small>` : ''}</span>`;
      btn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        if (action === 'settings') {
          this._closeCompactCardActionsMenu_();
          this._openCardSettingsMenu?.(wrap);
          return;
        }
        this._runCardQuickAction_?.(wrap, action);
      });
      host.appendChild(btn);
      return btn;
    };

    const primaryActions = makeGroup('Open');
    appendAction(primaryActions, {
      action: 'edit',
      icon: 'mdi:pencil-outline',
      label: selectionCount > 1 ? 'Edit this card' : 'Edit card',
      description: 'Content, entities and card options',
      featured: true,
    });
    if (!isSidebarCard) {
      appendAction(primaryActions, {
        action: 'settings',
        icon: 'mdi:tune-variant',
        label: 'Card settings',
        description: 'Position, appearance and behavior',
      });
    }

    const manageActions = makeGroup('Manage');
    appendAction(manageActions, {
      action: 'duplicate',
      icon: 'mdi:content-copy',
      label: selectionCount > 1 ? 'Duplicate selection' : 'Duplicate',
      description: selectionCount > 1 ? `${selectionCount} cards` : 'Create a copy',
    });
    if (!isSidebarCard) {
      appendAction(manageActions, {
        action: 'export-card',
        icon: 'mdi:download-box-outline',
        label: selectionCount > 1 ? 'Export this card' : 'Export',
        description: 'Save as a file',
      });
    }

    const layerActions = makeGroup(selectionCount > 1 ? 'Layer selection' : 'Layer', 'is-layer-grid');
    (isSidebarCard
      ? [
          { action: 'front-most', icon: 'mdi:arrange-bring-to-front', label: 'To front' },
          { action: 'back-most', icon: 'mdi:arrange-send-to-back', label: 'To back' },
        ]
      : [
          { action: 'front-most', icon: 'mdi:arrange-bring-to-front', label: 'To front' },
          { action: 'front', icon: 'mdi:arrange-bring-forward', label: 'Forward' },
          { action: 'back', icon: 'mdi:arrange-send-backward', label: 'Backward' },
          { action: 'back-most', icon: 'mdi:arrange-send-to-back', label: 'To back' },
        ]
    ).forEach((action) => appendAction(layerActions, { ...action, compact: true }));

    const dangerActions = makeGroup('', 'is-danger-zone');
    appendAction(dangerActions, {
      action: 'delete',
      icon: 'mdi:trash-can-outline',
      label: selectionCount > 1 ? `Delete ${selectionCount} cards` : 'Delete card',
      danger: true,
    });

    menu.addEventListener('keydown', (event) => {
      const buttons = Array.from(menu.querySelectorAll('button:not(:disabled)'));
      const activeElement = menu.getRootNode?.()?.activeElement || document.activeElement;
      const current = buttons.indexOf(activeElement);
      let next = -1;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = current < 0 ? 0 : (current + 1) % buttons.length;
      else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = current <= 0 ? buttons.length - 1 : current - 1;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = buttons.length - 1;
      if (next >= 0) {
        event.preventDefault();
        buttons[next]?.focus?.();
      }
    });

    const overlayRoot = this.shadowRoot || this;
    root.appendChild(menu);
    overlayRoot.appendChild(root);

    try { trigger?.setAttribute('aria-expanded', 'true'); } catch {}
    try { wrap.classList?.add('ddc-compact-actions-open'); } catch {}

    const closeOnOutside = (ev) => {
      if (ev.target === root) this._closeCompactCardActionsMenu_();
    };
    const closeOnPointer = (ev) => {
      const path = typeof ev.composedPath === 'function' ? ev.composedPath() : [];
      if (path.includes(menu) || (trigger && path.includes(trigger))) return;
      this._closeCompactCardActionsMenu_();
    };
    const closeOnEscape = (ev) => {
      if (ev.key === 'Escape') {
        this._closeCompactCardActionsMenu_();
        trigger?.focus?.();
      }
    };
    const reposition = () => this._positionCompactCardActionsMenu_();

    root.addEventListener('pointerdown', closeOnOutside, true);
    document.addEventListener('pointerdown', closeOnPointer, true);
    document.addEventListener('keydown', closeOnEscape, true);
    window.addEventListener('resize', reposition);
    window.addEventListener('scroll', reposition, true);

    this.__compactCardActionsMenu = {
      root,
      menu,
      wrap,
      trigger,
      cleanup: () => {
        root.removeEventListener('pointerdown', closeOnOutside, true);
        document.removeEventListener('pointerdown', closeOnPointer, true);
        document.removeEventListener('keydown', closeOnEscape, true);
        window.removeEventListener('resize', reposition);
        window.removeEventListener('scroll', reposition, true);
      }
    };
    requestAnimationFrame(() => {
      this._positionCompactCardActionsMenu_();
      menu.querySelector('[data-card-quick-action="edit"]')?.focus?.();
    });
  },

  _positionCardSettingsMenu_() {
    const state = this.__cardSettingsMenu;
    if (!state?.menu || !state?.wrap) return;
    const { menu, wrap } = state;
    if (!menu.isConnected || !wrap.isConnected) {
      this._closeCardSettingsMenu_();
      return;
    }

    const rect = wrap.getBoundingClientRect();
    const margin = 12;
    const viewportW = Math.max(1, window.innerWidth || document.documentElement.clientWidth || 1);
    const viewportH = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 1);
    const menuW = Math.max(220, menu.offsetWidth || 320);
    const menuH = Math.max(120, menu.offsetHeight || 360);

    let left = rect.left + ((rect.width - menuW) / 2);
    let top = rect.top + ((rect.height - menuH) / 2);

    if (rect.height < menuH * 0.6) {
      top = rect.top + Math.min(40, rect.height * 0.5);
    }

    left = Math.min(Math.max(margin, left), Math.max(margin, viewportW - menuW - margin));
    top = Math.min(Math.max(margin, top), Math.max(margin, viewportH - menuH - margin));

    menu.style.left = `${Math.round(left)}px`;
    menu.style.top = `${Math.round(top)}px`;
  },

  _updateCardPositionFromSettings_(wrap, coordinates = {}) {
    if (!wrap) return null;
    const numberOr = (value, fallback = 0) => {
      const parsed = Number.parseFloat(value);
      return Number.isFinite(parsed) ? parsed : fallback;
    };
    const currentX = numberOr(wrap.getAttribute?.('data-x'), numberOr(wrap.getAttribute?.('data-x-raw'), 0));
    const currentY = numberOr(wrap.getAttribute?.('data-y'), numberOr(wrap.getAttribute?.('data-y-raw'), 0));
    const gridSize = Math.max(1, numberOr(this.gridSize, numberOr(this._config?.grid, 1)));
    const rect = wrap.getBoundingClientRect?.() || {};
    const scaleX = Math.max(0.0001, numberOr(this.__pointerScaleX, 1));
    const scaleY = Math.max(0.0001, numberOr(this.__pointerScaleY, 1));
    const proposed = [{
      el: wrap,
      rawX: numberOr(coordinates.x, currentX),
      rawY: numberOr(coordinates.y, currentY),
      snapX: currentX,
      snapY: currentY,
      w: numberOr(wrap.style?.width, numberOr(wrap.offsetWidth, numberOr(rect.width, 0) / scaleX)),
      h: numberOr(wrap.style?.height, numberOr(wrap.offsetHeight, numberOr(rect.height, 0) / scaleY)),
    }];

    if (typeof this._constrainProposedCardsToCanvas_ === 'function') {
      this._constrainProposedCardsToCanvas_(proposed, true, gridSize);
    } else {
      proposed[0].snapX = Math.round(proposed[0].rawX / gridSize) * gridSize;
      proposed[0].snapY = Math.max(0, Math.round(proposed[0].rawY / gridSize) * gridSize);
    }

    const nextX = Math.round(numberOr(proposed[0].snapX, proposed[0].rawX));
    const nextY = Math.max(0, Math.round(numberOr(proposed[0].snapY, proposed[0].rawY)));
    wrap.setAttribute?.('data-x-raw', String(nextX));
    wrap.setAttribute?.('data-y-raw', String(nextY));
    this._setCardPosition?.(wrap, nextX, nextY);

    const cardId = String(wrap.dataset?.layoutCardId || '').trim();
    if (cardId && (nextX !== currentX || nextY !== currentY)) {
      this._moveConnectorsForCardDeltas_?.([{
        id: cardId,
        dx: nextX - currentX,
        dy: nextY - currentY,
      }], { reason: null, render: false });
    }
    this._syncAnchoredConnectorPointsForCurrentLayout_?.({ reason: null, render: false });
    this._scheduleConnectorsRender_?.({ syncAnchors: true });
    this._resizeContainer?.();
    this._persistCurrentResponsiveProfileToMemory_?.();
    this._queueSave?.('card-position-change');
    return { x: nextX, y: nextY };
  },

  /**
   * Open or toggle a small settings menu attached to a card wrapper. This menu
   * exposes placement, visibility, styling and overflow controls for one
   * card. The menu is rendered as an overlay so it can extend outside short
   * cards without being clipped.
   *
   * @param {HTMLElement} wrap The card wrapper to attach the settings menu to.
   */
  _openCardSettingsMenu(wrap) {
    if (!wrap) return;
    this._closeCompactCardActionsMenu_?.();
    if (this.__cardSettingsMenu?.wrap === wrap) {
      this._closeCardSettingsMenu_();
      return;
    }
    this._closeCardSettingsMenu_();
    const backdrop = document.createElement('div');
    backdrop.className = 'ddc-card-settings-backdrop';
    const menu = document.createElement('div');
    menu.className = 'ddc-card-settings';
    const themeVars = getComputedStyle(this);
    const resolveSolidSurface = (...vars) => {
      for (const varName of vars) {
        const value = String(themeVars.getPropertyValue(varName) || '').trim();
        if (value && !/^transparent$/i.test(value) && !/rgba?\([^)]*,\s*0(?:\.0+)?\s*\)/i.test(value)) {
          return value;
        }
      }
      return '#1f2329';
    };
    const fallbackPopupFieldSurface = resolveSolidSurface('--secondary-background-color', '--card-background-color', '--primary-background-color');
    const popupFieldSurface = `var(--ddc-popup-field, ${fallbackPopupFieldSurface})`;
    Object.assign(menu.style, {
      pointerEvents: 'auto',
      fontSize: '.92rem'
    });
    const stopEvt = (ev) => ev.stopPropagation();
    menu.addEventListener('pointerdown', stopEvt, true);
    menu.addEventListener('mousedown', stopEvt, true);
    menu.addEventListener('touchstart', stopEvt, true);

    const header = document.createElement('div');
    header.className = 'ddc-card-settings-header';
    const headCopy = document.createElement('div');
    const kicker = document.createElement('div');
    kicker.className = 'ddc-card-settings-kicker';
    kicker.textContent = 'Card Settings';
    const titleEl = document.createElement('div');
    titleEl.className = 'ddc-card-settings-title';
    titleEl.textContent = 'Card Settings';
    const subtitle = document.createElement('p');
    subtitle.className = 'ddc-card-settings-subtitle';
    subtitle.textContent = 'Fine-tune visibility, layers and per-card styling for this card without leaving edit mode.';
    headCopy.append(kicker, titleEl, subtitle);
    const closeBtn = document.createElement('button');
    closeBtn.className = 'ddc-card-settings-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('title', 'Close');
    closeBtn.setAttribute('aria-label', 'Close settings');
    closeBtn.innerHTML = '<ha-icon icon="mdi:close"></ha-icon>';
    closeBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      this._closeCardSettingsMenu_();
    });
    header.append(headCopy, closeBtn);
    menu.appendChild(header);

    const makeRow = (labelText, selectElement) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '12px';
      row.style.width = '100%';
      // Label
      const lab = document.createElement('span');
      lab.textContent = labelText;
      lab.style.color = 'var(--secondary-text-color, #9ca3af)';
      lab.style.fontWeight = '500';
      lab.style.whiteSpace = 'nowrap';
      // Control inherits width via flex
      selectElement.style.flex = '1 1 auto';
      row.appendChild(lab);
      row.appendChild(selectElement);
      return row;
    };
    const makeSection = (title, description) => {
      const section = document.createElement('section');
      section.className = 'section-card';
      if (title) {
        const h4 = document.createElement('h4');
        h4.textContent = title;
        section.appendChild(h4);
      }
      if (description) {
        const p = document.createElement('p');
        p.textContent = description;
        section.appendChild(p);
      }
      return section;
    };

    const applySelectStyle = (sel) => {
      Object.assign(sel.style, {
        appearance: 'none',
        padding: '10px 12px',
        minHeight: '44px',
        border: '1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.08))',
        borderRadius: '12px',
        background: popupFieldSurface,
        color: 'var(--primary-text-color, #f5f5f5)',
        font: 'inherit',
        lineHeight: '1.4',
        width: '100%'
      });
    };

    const themeOwnsDesign = this._isDashboardThemeOverrideAllDesignActive_?.();
    const currentCardStyle = this._extractPerCardStyle_(wrap);
    const stopInteractive = (el) => {
      if (!el) return el;
      el.addEventListener('pointerdown', stopEvt);
      el.addEventListener('mousedown', stopEvt);
      el.addEventListener('touchstart', stopEvt);
      return el;
    };
    const guessHex = (value, fallback = '#111827') => {
      const match = String(value || '').trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
      return match ? match[0] : fallback;
    };
    const saveCardStyle = (patch = {}) => {
      const next = {
        ...this._extractPerCardStyle_(wrap),
        ...patch,
      };
      for (const key of Object.keys(next)) {
        if (!String(next[key] || '').trim()) delete next[key];
      }
      this._applyPerCardStyle_(wrap, next);
      try { this._queueSave('card-style-change'); } catch {}
    };
    const makeOverrideRow = (labelText, key, hintText, options = {}) => {
      const sel = document.createElement('select');
      applySelectStyle(sel);
      [
        { value: '', label: options.defaultLabel || 'Dashboard default' },
        { value: 'on', label: 'Enabled' },
        { value: 'off', label: 'Disabled' }
      ].forEach(({ value, label }) => {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = label;
        sel.appendChild(opt);
      });
      sel.value = currentCardStyle[key] || '';
      stopInteractive(sel);
      sel.addEventListener('change', () => {
        saveCardStyle({ [key]: sel.value });
      });
      const row = makeRow(labelText, sel);
      const group = document.createElement('div');
      Object.assign(group.style, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      });
      group.appendChild(row);
      if (hintText) {
        const hint = document.createElement('div');
        hint.textContent = hintText;
        Object.assign(hint.style, {
          fontSize: '.75rem',
          color: 'var(--secondary-text-color, #9ca3af)'
        });
        group.appendChild(hint);
      }
      return group;
    };
    const makeStyleField = (labelText, key, placeholder, hintText, options = {}) => {
      const field = document.createElement('div');
      field.className = 'ddc-card-style-field';
      Object.assign(field.style, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      });

      const top = document.createElement('div');
      Object.assign(top.style, {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px'
      });

      const label = document.createElement('span');
      label.textContent = labelText;
      Object.assign(label.style, {
        color: 'var(--secondary-text-color, #9ca3af)',
        fontWeight: '500'
      });

      const resetBtn = document.createElement('button');
      resetBtn.type = 'button';
      resetBtn.textContent = 'Reset';
      Object.assign(resetBtn.style, {
        border: '1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.08))',
        borderRadius: '999px',
        padding: '6px 12px',
        background: popupFieldSurface,
        color: 'var(--primary-text-color, #f5f5f5)',
        cursor: 'pointer',
        font: 'inherit'
      });
      stopInteractive(resetBtn);

      const controls = document.createElement('div');
      controls.className = 'ddc-card-style-controls';
      Object.assign(controls.style, {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      });

      const picker = document.createElement('input');
      picker.type = 'color';
      picker.value = guessHex(currentCardStyle[key], key === 'text_color' ? '#f8fafc' : '#111827');
      Object.assign(picker.style, {
        width: '36px',
        height: '36px',
        padding: '0',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        flex: '0 0 36px'
      });
      stopInteractive(picker);

      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentCardStyle[key] || '';
      input.placeholder = placeholder;
      Object.assign(input.style, {
        flex: '1 1 auto',
        minHeight: '44px',
        padding: '10px 12px',
        border: '1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.08))',
        borderRadius: '12px',
        background: popupFieldSurface,
        color: 'var(--primary-text-color, #f5f5f5)',
        font: 'inherit'
      });
      stopInteractive(input);
      let styleLibrary = null;
      const updatePresetState = () => {
        const current = input.value.trim();
        styleLibrary?.sync?.(current);
        field.querySelectorAll('[data-card-style-value]').forEach((btn) => {
          const active = btn.getAttribute('data-card-style-value') === current;
          btn.setAttribute('aria-pressed', active ? 'true' : 'false');
          btn.style.outline = active ? '2px solid var(--primary-color, #03a9f4)' : 'none';
        });
      };

      picker.addEventListener('input', () => {
        input.value = picker.value;
        saveCardStyle({ [key]: picker.value });
        updatePresetState();
      });
      input.addEventListener('input', () => {
        const val = input.value.trim();
        const match = val.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
        if (match) picker.value = match[0];
        saveCardStyle({ [key]: val });
        updatePresetState();
      });
      resetBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        input.value = '';
        saveCardStyle({ [key]: '' });
        updatePresetState();
      });

      top.appendChild(label);
      top.appendChild(resetBtn);
      controls.appendChild(picker);
      controls.appendChild(input);
      field.appendChild(top);
      field.appendChild(controls);

      if (hintText) {
        const hint = document.createElement('div');
        hint.textContent = hintText;
        Object.assign(hint.style, {
          fontSize: '.75rem',
          color: 'var(--secondary-text-color, #9ca3af)'
        });
        field.appendChild(hint);
      }

      if (options.styleLibrary) {
        const libraryGroup = document.createElement('div');
        libraryGroup.className = 'ddc-card-style-library-wrap';
        const library = document.createElement('div');
        library.className = 'ddc-style-library';
        libraryGroup.appendChild(library);
        field.appendChild(libraryGroup);
        styleLibrary = renderStylePresetLibrary({
          container: library,
          disclosureTarget: libraryGroup,
          currentValue: input.value,
          getPreviewBackground: (value) => resolveStylePreviewBackground(
            value,
            (varName) => getComputedStyle(this).getPropertyValue(varName),
            'transparent'
          ),
          stopInteractive,
          onSelect: (value, _preset, ev) => {
            ev?.stopPropagation?.();
            input.value = value;
            const match = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
            if (match) picker.value = match[0];
            saveCardStyle({ [key]: value });
          },
        });
      }
      updatePresetState();

      return field;
    };

    const visibilitySection = makeSection('Visibility & placement', 'Control where this card appears and how it behaves inside the dashboard.');
    const styleSection = makeSection('Per-card style', 'Overrides Dashboard Settings for this card only.');
    const actionsSection = makeSection('Actions', 'Quick actions for this individual card.');

    if (themeOwnsDesign) {
      const themeWarning = document.createElement('div');
      themeWarning.className = 'ddc-card-theme-warning';
      const themeWarningIcon = document.createElement('ha-icon');
      themeWarningIcon.setAttribute('icon', 'mdi:alert-circle-outline');
      themeWarningIcon.setAttribute('aria-hidden', 'true');
      const themeWarningText = document.createElement('span');
      themeWarningText.textContent = "Prioritize theme colors is on. This card's background, text, border, and shadow choices are saved, but the dashboard theme controls the visible styling until that setting is turned off.";
      themeWarning.append(themeWarningIcon, themeWarningText);
      styleSection.appendChild(themeWarning);
    }

    const positionFields = document.createElement('div');
    positionFields.className = 'ddc-card-position-fields';
    const gridStep = String(Math.max(1, Number(this.gridSize || this._config?.grid || 1) || 1));
    const makePositionField = (axis, value) => {
      const field = document.createElement('label');
      field.className = 'ddc-card-position-field';
      const axisLabel = document.createElement('span');
      axisLabel.textContent = axis;
      const input = document.createElement('input');
      input.type = 'number';
      input.inputMode = 'numeric';
      input.step = gridStep;
      input.value = String(Math.round(Number(value) || 0));
      input.setAttribute('aria-label', `${axis} position`);
      input.setAttribute('data-card-position-axis', axis.toLowerCase());
      stopInteractive(input);
      field.append(axisLabel, input);
      return { field, input };
    };
    const xPosition = makePositionField('X', wrap.getAttribute?.('data-x'));
    const yPosition = makePositionField('Y', wrap.getAttribute?.('data-y'));
    const commitPosition = () => {
      const next = this._updateCardPositionFromSettings_(wrap, {
        x: xPosition.input.value,
        y: yPosition.input.value,
      });
      if (!next) return;
      xPosition.input.value = String(next.x);
      yPosition.input.value = String(next.y);
    };
    xPosition.input.addEventListener('change', commitPosition);
    yPosition.input.addEventListener('change', commitPosition);
    positionFields.append(xPosition.field, yPosition.field);
    const positionRow = makeRow('Position', positionFields);
    positionRow.classList.add('ddc-card-position-row');
    visibilitySection.appendChild(positionRow);
    const positionHint = document.createElement('div');
    positionHint.textContent = `Coordinates use the dashboard grid (${gridStep} px). Changes are applied immediately.`;
    Object.assign(positionHint.style, {
      fontSize: '.75rem',
      color: 'var(--secondary-text-color, #9ca3af)'
    });
    visibilitySection.appendChild(positionHint);

    if (Array.isArray(this.tabs) && this.tabs.length > 1) {
      const tabSelect = document.createElement('select');
      applySelectStyle(tabSelect);
      for (const t of this.tabs) {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.label || t.id;
        tabSelect.appendChild(opt);
      }
      const currentTab = wrap.dataset.tabId || this.defaultTab;
      tabSelect.value = this._normalizeTabId(currentTab);
      tabSelect.addEventListener('change', () => {
        const val = tabSelect.value;
        wrap.dataset.tabId = this._normalizeTabId(val);
        try { this._syncConnectorsForCardScopeChange_?.(wrap, { reason: null, render: false }); } catch {}
        try { this._addTabSelectorToChip?.(wrap, wrap.dataset.tabId); } catch {}
        try { this._applyActiveTab(); } catch {}
        try { this._applyVisibility_(); } catch {}
        try { this._queueSave('tab-change'); } catch {}
      });
      // Add pointer blocker to the select itself
      tabSelect.addEventListener('pointerdown', stopEvt);
      tabSelect.addEventListener('mousedown', stopEvt);
      tabSelect.addEventListener('touchstart', stopEvt);
      const row = makeRow('Tab', tabSelect);
      visibilitySection.appendChild(row);
      const tabHint = document.createElement('div');
      tabHint.textContent = 'Choose which tab this card appears on.';
      Object.assign(tabHint.style, {
        fontSize: '.75rem',
        color: 'var(--secondary-text-color, #9ca3af)'
      });
      visibilitySection.appendChild(tabHint);
    }

    if (this.layersEnabled && Array.isArray(this.layers) && this.layers.length) {
      const layerHint = document.createElement('div');
      layerHint.textContent = 'Pick the layers this card should belong to. If none are selected, the card stays visible on every layer.';
      Object.assign(layerHint.style, {
        fontSize: '.75rem',
        color: 'var(--secondary-text-color, #9ca3af)'
      });
      visibilitySection.appendChild(layerHint);

      const layerGrid = document.createElement('div');
      Object.assign(layerGrid.style, {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
      });
      const selectedLayers = new Set(this._getWrapperLayerIds_(wrap));
      const syncLayerChips = () => {
        layerGrid.querySelectorAll('[data-layer-id]').forEach((btn) => {
          const id = btn.getAttribute('data-layer-id');
          const active = !!id && selectedLayers.has(id);
          btn.setAttribute('aria-pressed', active ? 'true' : 'false');
          btn.style.outline = active ? '2px solid var(--primary-color, #03a9f4)' : 'none';
          btn.style.borderColor = active
            ? 'color-mix(in oklab, var(--primary-color, #03a9f4) 48%, transparent)'
            : 'var(--divider-color, rgba(255,255,255,.14))';
        });
      };

      (this.layers || []).forEach((layer) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'layer-chip';
        chip.setAttribute('data-layer-id', layer.id);
        chip.setAttribute('aria-pressed', selectedLayers.has(layer.id) ? 'true' : 'false');
        chip.style.borderColor = `color-mix(in oklab, ${layer.color || '#60a5fa'} 40%, transparent)`;
        chip.style.background = `color-mix(in oklab, ${layer.color || '#60a5fa'} 12%, transparent)`;
        chip.innerHTML = `${layer.icon ? `<ha-icon icon="${layer.icon}"></ha-icon>` : ''}<span>${layer.label || layer.id}</span>`;
        stopInteractive(chip);
        chip.addEventListener('click', (ev) => {
          ev.stopPropagation();
          if (selectedLayers.has(layer.id)) selectedLayers.delete(layer.id);
          else selectedLayers.add(layer.id);
          this._setWrapperLayerIds_(wrap, Array.from(selectedLayers));
          try { this._syncConnectorsForCardScopeChange_?.(wrap, { reason: null, render: false }); } catch {}
          syncLayerChips();
          try { this._applyActiveTab?.(); } catch {}
          try { this._applyVisibility_?.(); } catch {}
          try { this._queueSave?.('layer-change'); } catch {}
        });
        layerGrid.appendChild(chip);
      });
      syncLayerChips();
      visibilitySection.appendChild(layerGrid);
    }

    const overflowSelect = document.createElement('select');
    applySelectStyle(overflowSelect);
    const dashboardOverflow = this._normalizeCardOverflow_?.(this.cardOverflow) || 'auto';
    const dashboardOverflowLabel = {
      auto: 'Scroll',
      hidden: 'Hidden',
      visible: 'Visible'
    }[dashboardOverflow] || 'Scroll';
    const modes = [
      { value: '', label: `Dashboard default (${dashboardOverflowLabel})` },
      { value: 'visible', label: 'Visible' },
      { value: 'hidden', label: 'Hidden' },
      { value: 'auto', label: 'Scroll' }
    ];
    for (const m of modes) {
      const opt = document.createElement('option');
      opt.value = m.value;
      opt.textContent = m.label;
      overflowSelect.appendChild(opt);
    }
    const currentOverflow = wrap.dataset.overflow || wrap.style.overflow || '';
    overflowSelect.value = currentOverflow || '';
    overflowSelect.addEventListener('change', () => {
      const val = overflowSelect.value;
      const cardEl = wrap.firstElementChild;
      if (val) {
        wrap.style.setProperty('overflow', val, 'important');
        if (cardEl) cardEl.style.setProperty('overflow', val, 'important');
        wrap.dataset.overflow = val;
      } else {
        wrap.style.removeProperty('overflow');
        if (cardEl) cardEl.style.removeProperty('overflow');
        delete wrap.dataset.overflow;
      }
      try { this._queueSave('overflow-change'); } catch {}
    });
    // Add pointer blocker to overflow select
    overflowSelect.addEventListener('pointerdown', stopEvt);
    overflowSelect.addEventListener('mousedown', stopEvt);
    overflowSelect.addEventListener('touchstart', stopEvt);
    const rowOv = makeRow('Overflow', overflowSelect);
    visibilitySection.appendChild(rowOv);
    const ovHint = document.createElement('div');
    ovHint.textContent = 'Control how card content behaves when it exceeds its bounds.';
    Object.assign(ovHint.style, {
      fontSize: '.75rem',
      color: 'var(--secondary-text-color, #9ca3af)'
    });
    visibilitySection.appendChild(ovHint);
    visibilitySection.appendChild(makeOverrideRow(
      'Connector anchors',
      'connector_anchors',
      'Disable the four connector points for this card. Existing connectors stay attached.',
      { defaultLabel: 'Enabled (default)' }
    ));

    styleSection.appendChild(makeStyleField(
      'Card background',
      'background',
      'transparent · #123456 · linear-gradient(...)',
      'Sets the outer wrapper/background around this card.',
      { styleLibrary: true }
    ));
    styleSection.appendChild(makeStyleField('Text color', 'text_color', '#f8fafc · var(--primary-text-color)', 'Applies to text and icons when the card supports inherited theme vars.'));
    styleSection.appendChild(makeStyleField('Border color', 'border_color', '#38bdf8', 'Adds an optional border color around this card.'));
    styleSection.appendChild(makeOverrideRow('Animate cards', 'animate_cards', 'Overrides the dashboard animation setting for this card.'));
    styleSection.appendChild(makeOverrideRow('Drop shadow', 'card_shadow', 'Overrides the dashboard shadow setting for this card.'));

    const actionsRow = document.createElement('div');
    Object.assign(actionsRow.style, {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '8px'
    });

    const exportCardBtn = document.createElement('button');
    exportCardBtn.type = 'button';
    exportCardBtn.className = 'btn secondary';
    exportCardBtn.innerHTML = '<ha-icon icon="mdi:download-box-outline"></ha-icon><span style="margin-left:6px">Export card</span>';
    stopInteractive(exportCardBtn);
    exportCardBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      this._exportSingleCard_?.(wrap);
    });
    actionsRow.appendChild(exportCardBtn);
    actionsSection.appendChild(actionsRow);

    menu.append(visibilitySection, styleSection, actionsSection);

    const overlayRoot = this.shadowRoot || this;
    backdrop.appendChild(menu);
    overlayRoot.appendChild(backdrop);

    const closeOnOutside = (ev) => {
      if (ev.target === backdrop) this._closeCardSettingsMenu_();
    };
    const closeOnPointer = (ev) => {
      const path = typeof ev.composedPath === 'function' ? ev.composedPath() : [];
      if (path.includes(menu)) return;
      this._closeCardSettingsMenu_();
    };
    const closeOnEscape = (ev) => {
      if (ev.key === 'Escape') this._closeCardSettingsMenu_();
    };

    backdrop.addEventListener('pointerdown', closeOnOutside, true);
    document.addEventListener('pointerdown', closeOnPointer, true);
    document.addEventListener('keydown', closeOnEscape, true);

    this.__cardSettingsMenu = {
      root: backdrop,
      menu,
      wrap,
      cleanup: () => {
        backdrop.removeEventListener('pointerdown', closeOnOutside, true);
        document.removeEventListener('pointerdown', closeOnPointer, true);
        document.removeEventListener('keydown', closeOnEscape, true);
      }
    };
  },
};

export function installCardSettingsMenuMethods(proto) {
  for (const [name, value] of Object.entries(cardSettingsMenuMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
