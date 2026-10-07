// Sidebar appearance belongs to one DDC instance, independently of the top/bottom tabs.
export const sidebarAppearanceFields = [
  ['compact_width', 'Button rail width (px)', 64, 144],
  ['expanded_width', 'Expanded width (px)', 220, 480],
  ['icon_size', 'Icon size (px)', 16, 48],
  ['button_height', 'Button height (px)', 44, 88],
  ['button_gap', 'Space between buttons (px)', 0, 24],
  ['button_radius', 'Button corner radius (px)', 0, 32],
  ['padding', 'Sidebar padding (px)', 4, 24],
  ['dashboard_gap', 'Space to dashboard (px)', 0, 48],
  ['background', 'Sidebar background'],
  ['text_color', 'Text / icon color'],
  ['active_background', 'Active button background'],
  ['active_text_color', 'Active text / icon color'],
];

export function normalizeSidebarAppearance(value) {
  const result = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
  for (const [key, , min, max] of sidebarAppearanceFields) {
    const input = value[key];
    if (input == null || input === '') continue;
    if (min !== undefined) {
      if (!['number', 'string'].includes(typeof input) || String(input).trim() === '') continue;
      const number = Number(input);
      if (Number.isFinite(number)) result[key] = Math.max(min, Math.min(max, Math.round(number)));
    } else if (typeof input === 'string') {
      const color = input.trim();
      if (color && color.length <= 160 && !/[;{}<>]/.test(color)
        && (!globalThis.CSS?.supports || CSS.supports('color', color))) result[key] = color;
    }
  }
  if (typeof value.title === 'string') result.title = value.title.trim().slice(0, 80);
  if (Array.isArray(value.widgets)) result.widgets = [...new Set(value.widgets.filter(v => ['clock','calendar','weather'].includes(v)))];
  if (['soft','minimal','accent'].includes(value.widget_style)) result.widget_style = value.widget_style;
  if (['top','center','bottom'].includes(value.alignment)) result.alignment = value.alignment;
  if (typeof value.weather_entity === 'string' && /^weather\.[a-z0-9_]+$/.test(value.weather_entity.trim())) result.weather_entity = value.weather_entity.trim();
  if (Array.isArray(value.calendar_entities)) result.calendar_entities = [...new Set(value.calendar_entities.filter(v => typeof v === 'string' && /^calendar\.[a-z0-9_]+$/.test(v)))];
  return result;
}

export function applySidebarAppearance(element, value) {
  const settings = normalizeSidebarAppearance(value);
  for (const [key, , min] of sidebarAppearanceFields) {
    const property = `--ddc-side-${key}`;
    if (key in settings) element?.style?.setProperty?.(property, `${settings[key]}${min === undefined ? '' : 'px'}`);
    else element?.style?.removeProperty?.(property);
  }
  return settings;
}

export function sidebarAppearanceControls() {
  return `<details class="sidebar-customize">
    <summary>Customize appearance</summary>
    <p class="hint">Applies only to this dashboard. Empty fields use your Home Assistant theme and the defaults. Widths are remembered separately for each mode.</p>
    <div class="tab-appearance-grid">${sidebarAppearanceFields.map(([key,label,min,max]) => `<label class="tab-appearance-field" for="ddc-sidebar-appearance-${key}"><span>${label}</span><input id="ddc-sidebar-appearance-${key}" type="${min === undefined ? 'text' : 'number'}" ${min === undefined ? 'maxlength="160" placeholder="Theme default"' : `min="${min}" max="${max}" step="1" placeholder="Default"`} /></label>`).join('')}</div>
    <button type="button" class="btn" id="ddc-sidebar-appearance-reset">Reset appearance</button>
  </details>`;
}

export function sidebarAppearanceCss() {
  return `
/* Two sidebar modes. Theme tokens and instance overrides share one styling surface. */
.ddc-root.ddc-sidebar-layout{
  --ddc-rail-bg:var(--ddc-side-background,var(--ha-card-background,var(--card-background-color,#f5f7fa)));
  --ddc-rail-text:var(--ddc-side-text_color,var(--primary-text-color,#233143));
  --ddc-rail-muted:color-mix(in srgb,var(--ddc-rail-text) 70%,var(--ddc-rail-bg));
  --ddc-rail-line:color-mix(in srgb,var(--ddc-rail-text) 14%,transparent);
  --ddc-rail-raised:color-mix(in srgb,var(--ddc-rail-text) 6%,var(--ddc-rail-bg));
  --ddc-rail-canvas:var(--ddc-rail-bg);
  --ddc-rail-active:var(--ddc-side-active_background,var(--primary-color,#1976b8));
  --ddc-rail-active-ink:var(--ddc-side-active_text_color,var(--text-primary-color,#fff));
  --ddc-sidebar-gap:var(--ddc-side-dashboard_gap,16px);
  --ddc-side-height:var(--ddc-side-button_height,52px);
  --ddc-side-icon:var(--ddc-side-icon_size,24px);
  --ddc-side-inset:var(--ddc-side-padding,10px);
  --ddc-sidebar-width:var(--ddc-side-expanded_width,280px);
}
.ddc-root.ddc-sidebar-type-minimal{
  --ddc-sidebar-width:max(var(--ddc-side-compact_width,76px),calc(var(--ddc-side-inset) * 2 + var(--ddc-side-icon) + 10px));
}
.ddc-root.ddc-sidebar-layout > .ddc-sidebar{
  height:auto;min-height:0;padding:var(--ddc-side-inset);border-radius:var(--ha-card-border-radius,16px);
  box-shadow:0 4px 18px color-mix(in srgb,var(--ddc-rail-text) 7%,transparent);
  scrollbar-color:var(--ddc-rail-line) transparent;
}
.ddc-root.ddc-sidebar-layout .ddc-sidebar-navigation{padding:10px 0;border:0;gap:10px;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar-navigation::before{display:none;}
.ddc-sidebar-title{margin:0;padding:0 10px;font-size:12px;font-weight:650;color:var(--ddc-rail-muted);overflow-wrap:anywhere;}
.ddc-root.ddc-sidebar-type-minimal .ddc-sidebar-title{display:none;}
.ddc-root.ddc-sidebar-type-minimal .ddc-sidebar-navigation{padding:0;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tabs-scroller{
  display:flex;flex-direction:column !important;gap:var(--ddc-side-button_gap,6px);overflow:visible;align-items:stretch;
}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-tabs-sidebar .ddc-sidebar-tab{
  display:flex;flex:0 0 auto;align-items:center;justify-content:flex-start;gap:12px;
  width:100%;min-width:0;max-width:100%;height:var(--ddc-side-height);min-height:var(--ddc-side-height);
  padding:0 12px;box-sizing:border-box;border:0;border-radius:var(--ddc-side-button_radius,12px);
  color:var(--ddc-rail-text);background:transparent;box-shadow:none;text-align:left;
}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-tabs-sidebar .ddc-sidebar-tab:hover{background:var(--ddc-rail-raised);}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-tabs-sidebar .ddc-sidebar-tab.active{background:var(--ddc-rail-active);color:var(--ddc-rail-active-ink);}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-tabs-sidebar .ddc-sidebar-tab:focus-visible{outline:2px solid currentColor;outline-offset:-4px;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-tab-icon{
  flex:none;display:grid;place-items:center;width:var(--ddc-side-icon);height:var(--ddc-side-icon);padding:0;
  color:inherit;background:transparent;border:0;border-radius:0;box-shadow:none;
}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-tab-icon ha-icon{--mdc-icon-size:var(--ddc-side-icon);color:inherit;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-tab-index,
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-tab-arrow,
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-tab-indicator{display:none;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-tabs-sidebar .ddc-sidebar-tab .ddc-tab-label{
  display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;color:inherit;
}
.ddc-root.ddc-sidebar-type-minimal .ddc-sidebar .ddc-tabs-sidebar .ddc-sidebar-tab{justify-content:center;padding:0;}
.ddc-root.ddc-sidebar-type-minimal .ddc-sidebar .ddc-tabs-sidebar .ddc-sidebar-tab .ddc-tab-label{display:none;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar-canvas{min-height:280px;border-radius:10px;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar-canvas.is-editing{
  border-color:var(--ddc-rail-line);
  background:radial-gradient(circle,var(--ddc-rail-line) 1px,transparent 1px) 0 0 / 20px 20px,var(--ddc-rail-bg);
}
.ddc-root.ddc-sidebar-layout .ddc-sidebar-workspace-bar{letter-spacing:0;text-transform:none;font-size:12px;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar-add-card:hover{background:var(--ddc-rail-raised);}
.ddc-root.ddc-sidebar-layout .ddc-sidebar-workspace:has(.ddc-sidebar-canvas.is-empty:not(.is-editing)){display:none;}
.ddc-root.ddc-sidebar-layout.ddc-sidebar-narrow{
  grid-template-columns:minmax(0,1fr);grid-template-areas:"toolbar" "sidebar" "canvas";
  row-gap:var(--ddc-side-dashboard_gap,12px);
}
.ddc-root.ddc-sidebar-layout.ddc-sidebar-narrow > .ddc-sidebar{width:100%;max-height:none;position:relative;top:auto;}
@container ddc-root (max-width:720px){
  .ddc-root.ddc-sidebar-layout{grid-template-columns:minmax(0,1fr);row-gap:var(--ddc-side-dashboard_gap,12px);}
  .ddc-root.ddc-sidebar-layout > .ddc-sidebar{width:100%;max-height:none;}
  .ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tabs-scroller{
    flex-direction:row !important;overflow-x:auto !important;overflow-y:hidden !important;gap:var(--ddc-side-button_gap,6px);
  }
  .ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-tabs-sidebar .ddc-sidebar-tab{width:auto;min-width:var(--ddc-side-height);max-width:240px;}
  .ddc-root.ddc-sidebar-type-minimal .ddc-sidebar .ddc-tabs-sidebar .ddc-sidebar-tab{width:var(--ddc-side-height);}
  .ddc-sidebar-title{display:none;}
}
`;
}
