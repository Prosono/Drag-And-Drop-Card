// Optional, per-dashboard overrides. Empty fields keep the theme and tab-size defaults.
export const tabStyleFields = [
  ['icon_width', 'Icon width (px)', 8, 64],
  ['icon_height', 'Icon height (px)', 8, 64],
  ['button_height', 'Button height (px)', 32, 120],
  ['button_padding_horizontal', 'Button horizontal padding (px)', 0, 48],
  ['button_padding_vertical', 'Button vertical padding (px)', 0, 32],
  ['button_gap', 'Space between buttons (px)', 0, 48],
  ['bar_padding_bottom', 'Navigation bar bottom padding (px)', 0, 64],
  ['dashboard_gap', 'Space between bar and dashboard (px)', 0, 96],
  ['button_color', 'Button background'],
  ['text_color', 'Button text / icon color'],
  ['active_button_color', 'Active button background'],
  ['active_text_color', 'Active text / icon color'],
];

export function normalizeTabStyle(value) {
  const result = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
  for (const [key, , min, max] of tabStyleFields) {
    const input = value[key];
    if (input == null || input === '') continue;
    if (min !== undefined) {
      if (typeof input !== 'number' && typeof input !== 'string') continue;
      if (typeof input === 'string' && !input.trim()) continue;
      const number = Number(input);
      if (Number.isFinite(number)) result[key] = Math.min(max, Math.max(min, Math.round(number)));
    } else if (typeof input === 'string') {
      const color = input.trim();
      if (color && color.length <= 160 && !/[;{}<>]/.test(color)
        && (!globalThis.CSS?.supports || CSS.supports('color', color))) result[key] = color;
    }
  }
  if (value.active_shadow === false) result.active_shadow = false;
  return result;
}

export function applyTabStyle(host) {
  const style = normalizeTabStyle(host.tabsStyle);
  host.tabsStyle = style;
  for (const [key, , min] of tabStyleFields) {
    host.toggleAttribute?.(`data-tab-style-${key}`, key in style);
    const property = `--ddc-tab-style-${key}`;
    if (key in style) host.style?.setProperty?.(property, `${style[key]}${min === undefined ? '' : 'px'}`);
    else host.style?.removeProperty?.(property);
  }
  host.toggleAttribute?.('data-tab-style-no-shadow', style.active_shadow === false);
  const defaultIcon = 24 * (host.tabsSize || 100) / 100;
  host.style?.setProperty?.('--ddc-tab-icon-scale-x', String((style.icon_width ?? defaultIcon) / 24));
  host.style?.setProperty?.('--ddc-tab-icon-scale-y', String((style.icon_height ?? defaultIcon) / 24));
}

export function tabStyleControls() {
  return `<details class="setting tab-appearance"><summary>Tab appearance</summary>
    <p class="hint">Optional overrides for this dashboard's top or bottom tab bar. Leave fields empty to use the theme and tab bar size. Large icons may extend beyond small buttons.</p>
    <div class="tab-appearance-grid">${tabStyleFields.map(([key, label, min, max]) => `<label class="tab-appearance-field" for="ddc-tab-style-${key}"><span>${label}</span><input id="ddc-tab-style-${key}" data-tab-style-field="${key}" type="${min === undefined ? 'text' : 'number'}" ${min === undefined ? 'placeholder="Theme default (e.g. #167d86)" maxlength="160"' : `min="${min}" max="${max}" step="1" placeholder="Default"`} /></label>`).join('')}</div>
    <div class="row"><label for="ddc-tab-style-shadow">Active tab shadow</label><input id="ddc-tab-style-shadow" type="checkbox" checked /></div>
    <button type="button" id="ddc-tab-style-reset">Reset tab appearance</button>
  </details>`;
}

export function tabStyleCss() {
  const bar = '.ddc-tabs:not(.ddc-tabs-left)';
  const rule = (key, target, css) => `:host([data-tab-style-${key}]) ${target}{${css}}`;
  const v = key => `var(--ddc-tab-style-${key})`;
  return `
    ${bar} .ddc-tab{box-sizing:border-box;}
    ${bar} .ddc-tab-icon{position:relative;display:inline-block;flex:none;width:var(--ddc-tab-style-icon_width,var(--ddc-tabs-icon-size,24px));height:var(--ddc-tab-style-icon_height,var(--ddc-tabs-icon-size,24px));}
    ${bar} .ddc-tab-icon > ha-icon{position:absolute;left:50%;top:50%;width:24px;height:24px;--mdc-icon-size:24px;transform:translate(-50%,-50%) scale(var(--ddc-tab-icon-scale-x,1),var(--ddc-tab-icon-scale-y,1));}
    ${rule('button_height', `${bar} .ddc-tab`, `height:${v('button_height')} !important;box-sizing:border-box;`)}
    ${rule('button_padding_horizontal', `${bar} .ddc-tab`, `padding-inline:${v('button_padding_horizontal')} !important;`)}
    ${rule('button_padding_vertical', `${bar} .ddc-tab`, `padding-block:${v('button_padding_vertical')} !important;`)}
    ${rule('button_gap', bar, `column-gap:${v('button_gap')} !important;`)}
    ${rule('button_gap', `${bar} .ddc-tabs-scroller`, `column-gap:${v('button_gap')} !important;`)}
    ${rule('bar_padding_bottom', bar, `padding-bottom:${v('bar_padding_bottom')} !important;`)}
    @media(max-width:768px){${rule('bar_padding_bottom', `${bar}.ddc-tabs-bottom`, `padding-bottom:calc(${v('bar_padding_bottom')} + env(safe-area-inset-bottom,0px)) !important;`)}}
    ${rule('button_color', `${bar} .ddc-tab:not(.active)`, `background:${v('button_color')};`)}
    ${rule('text_color', `${bar} .ddc-tab:not(.active)`, `color:${v('text_color')};`)}
    ${rule('active_button_color', `${bar} .ddc-tab.active`, `background:${v('active_button_color')};`)}
    ${rule('active_text_color', `${bar} .ddc-tab.active`, `color:${v('active_text_color')};`)}
    ${rule('no-shadow', `${bar} .ddc-tab.active`, 'box-shadow:none;')}
    ${bar} .ddc-tab:focus-visible{outline:2px solid currentColor;outline-offset:-3px;}
    ${rule('dashboard_gap', `${bar}:not(.ddc-tabs-bottom)`, `margin-bottom:${v('dashboard_gap')};`)}
    ${['button_height','bar_padding_bottom','dashboard_gap'].map(key => `
      ${rule(key, '.ddc-root.ddc-fixed-canvas-tabs-top > .ddc-scale-outer', 'margin-top:var(--ddc-custom-tab-offset);')}
      ${rule(key, '.ddc-root.ddc-fixed-canvas-tabs-top > .card-container', 'margin-top:var(--ddc-custom-tab-offset);')}
      ${rule(key, '.ddc-root.ddc-tabs-bottom-layout .ddc-scale-outer', 'margin-bottom:var(--ddc-custom-tab-offset);')}
      ${rule(key, '.ddc-root.ddc-tabs-bottom-layout .card-container', 'margin-bottom:var(--ddc-custom-tab-offset);')}
    `).join('')}
    :host{--ddc-custom-tab-offset:calc(var(--ddc-tab-style-button_height,var(--ddc-tabs-button-height,56px)) + var(--ddc-tabs-padding-block,10px) + var(--ddc-tab-style-bar_padding_bottom,var(--ddc-tabs-padding-block,10px)) + var(--ddc-tab-style-dashboard_gap,10px));}
    @media(max-width:768px){:host{--ddc-custom-tab-offset:calc(var(--ddc-tab-style-button_height,var(--ddc-tabs-mobile-button-height,54px)) + 8px + var(--ddc-tab-style-bar_padding_bottom,8px) + var(--ddc-tab-style-dashboard_gap,10px) + env(safe-area-inset-bottom,0px));}}
    :host .ddc-root.ddc-edit-canvas-tabs.ddc-tabs-bottom-layout > .ddc-scale-outer{margin-bottom:0;}
  `;
}
