const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function resolveSidebarWidgets(appearance = {}, legacyHeader = 'date_time') {
  if (Array.isArray(appearance.widgets)) return [...new Set(appearance.widgets.filter(v => ['clock','calendar','weather'].includes(v)))];
  return legacyHeader === 'none' ? [] : legacyHeader === 'weather' ? ['weather'] : ['clock'];
}

export function sidebarWidgetMarkup({ widgets = [], style = 'soft', time = '', date = '', weekday = '', calendar = '', events = [], weather = {} } = {}) {
  const safe = escapeHtml;
  return `<div class="ddc-side-widgets" data-widget-style="${['soft','minimal','accent'].includes(style) ? style : 'soft'}">${widgets.map(widget => {
    if (widget === 'clock') return `<section class="ddc-side-widget ddc-side-clock" aria-label="Clock"><span class="ddc-side-eyebrow">${safe(weekday)}</span><strong class="ddc-side-reading">${safe(time)}</strong><span class="ddc-side-caption">${safe(date)}</span></section>`;
    if (widget === 'calendar') return `<section class="ddc-side-widget ddc-side-calendar" aria-label="Calendar">${calendar}<div class="ddc-side-agenda">${events.length ? events.slice(0,2).map(event => `<button type="button" data-sidebar-more-info="${safe(event.entityId)}"><span>${safe(event.when)}</span><strong>${safe(event.message)}</strong></button>`).join('') : '<span class="ddc-side-caption">No upcoming events</span>'}</div></section>`;
    if (widget === 'weather') return `<section class="ddc-side-widget ddc-side-weather" aria-label="Weather"><span class="ddc-side-eyebrow">${safe(weather.place || 'Weather')}</span>${weather.entityId ? `<button type="button" data-sidebar-more-info="${safe(weather.entityId)}" aria-label="Weather details for ${safe(weather.place || 'home')}"><ha-icon icon="${safe(weather.icon || 'mdi:weather-partly-cloudy')}"></ha-icon><strong class="ddc-side-reading">${safe(weather.temperature || '—')}</strong></button><span class="ddc-side-caption">${safe(weather.state || 'Unavailable')}</span><span class="ddc-side-caption">${safe([weather.humidity,weather.wind].filter(Boolean).join(' · '))}</span>` : '<span class="ddc-side-caption">Choose a weather entity in Sidebar settings.</span>'}</section>`;
    return '';
  }).join('')}</div>`;
}

export function sidebarWidgetCss() { return `
.ddc-side-widgets{display:grid;gap:12px;color:var(--ddc-rail-text,var(--primary-text-color,#233143));}
.ddc-side-widget{min-width:0;display:grid;gap:8px;padding:18px;border:1px solid var(--ddc-rail-line,rgba(127,127,127,.2));border-radius:16px;background:var(--ddc-rail-raised,rgba(127,127,127,.06));}
.ddc-side-eyebrow{font-size:11px;font-weight:650;letter-spacing:.08em;text-transform:uppercase;opacity:.75;}
.ddc-side-reading{font-size:clamp(28px,3vw,40px);font-weight:550;line-height:1.12;letter-spacing:-.04em;font-variant-numeric:tabular-nums;}
.ddc-side-caption{font-size:12px;line-height:1.5;opacity:.75;overflow-wrap:anywhere;}
.ddc-side-widget button{font:inherit;color:inherit;border:0;background:transparent;text-align:left;cursor:pointer;padding:0;}
.ddc-side-widget button:focus-visible{outline:2px solid currentColor;outline-offset:4px;border-radius:5px;}
.ddc-side-weather > button{display:flex;align-items:center;gap:16px;min-height:48px;}
.ddc-side-weather > button ha-icon{--mdc-icon-size:40px;color:var(--primary-color,#277f9a);}
.ddc-side-agenda{display:grid;gap:10px;border-top:1px solid var(--ddc-rail-line,rgba(127,127,127,.2));padding-top:12px;}
.ddc-side-agenda button{display:grid;gap:3px;min-height:40px;}
.ddc-side-agenda span{font-size:11px;opacity:.75;}
.ddc-side-agenda strong{font-size:12px;font-weight:600;overflow-wrap:anywhere;}
.ddc-side-calendar .ddc-sidebar-month{margin:0;padding:0;border:0;background:none;box-shadow:none;color:inherit;}
.ddc-side-calendar .ddc-sidebar-month-head{color:inherit;margin-bottom:12px;}
.ddc-side-calendar .ddc-sidebar-month-head strong{color:inherit;font-size:15px;}
.ddc-side-calendar .ddc-sidebar-month-head span{display:none;}
.ddc-side-calendar .ddc-sidebar-month-head em{color:inherit;background:none;opacity:.6;}
.ddc-side-calendar .ddc-sidebar-month-grid{gap:3px;}
.ddc-side-calendar .ddc-sidebar-month-day{color:inherit;min-width:0;min-height:24px;border:0;background:none;border-radius:50%;font-size:11px;}
.ddc-side-calendar .ddc-sidebar-month-dow{color:inherit;opacity:.65;font-size:10px;}
.ddc-side-calendar .ddc-sidebar-month .ddc-sidebar-month-day.is-weekend:not(.is-today){color:inherit !important;}
.ddc-side-calendar .ddc-sidebar-month .ddc-sidebar-month-day.is-muted{color:inherit !important;opacity:.4;}
.ddc-side-calendar .ddc-sidebar-month-day.is-today{background:var(--ddc-rail-active,var(--primary-color,#1976b8));color:var(--ddc-rail-active-ink,#fff) !important;font-weight:700;}
.ddc-side-widgets[data-widget-style="minimal"] .ddc-side-widget{background:none;border:0;border-bottom:1px solid var(--ddc-rail-line,rgba(127,127,127,.2));border-radius:0;padding:14px 6px 20px;}
.ddc-side-widgets[data-widget-style="accent"] .ddc-side-widget{background:color-mix(in srgb,var(--ddc-rail-active,var(--primary-color,#1976b8)) 12%,var(--ddc-rail-bg,var(--card-background-color,#f5f7fa)));border-color:color-mix(in srgb,var(--ddc-rail-active,var(--primary-color,#1976b8)) 24%,transparent);border-radius:20px;}
.ddc-side-widgets[data-widget-style="accent"] .ddc-side-reading{font-weight:700;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar-header-slot{margin-bottom:10px;}
/* The shell fills the viewport; alignment applies only to its contents. */
.ddc-root.ddc-sidebar-layout:not(.ddc-sidebar-narrow) > .ddc-sidebar{
 position:fixed;left:var(--ddc-side-fixed-left);width:var(--ddc-side-fixed-width);top:var(--ddc-side-fixed-top,0px);height:var(--ddc-side-fixed-max-height,100dvh);max-height:var(--ddc-side-fixed-max-height,100dvh);border-radius:0;z-index:10020;
}
/* Auto margins surround the whole stack, keeping navigation and widgets together.
   When content overflows, they collapse to zero so the top stays reachable. */
.ddc-root.ddc-sidebar-layout:not(.ddc-sidebar-narrow) > .ddc-sidebar > .ddc-sidebar-navigation,
.ddc-root.ddc-sidebar-layout:not(.ddc-sidebar-narrow) > .ddc-sidebar > .ddc-sidebar-header-slot{flex:0 0 auto;margin-block:0;}
.ddc-root.ddc-sidebar-layout:not(.ddc-sidebar-narrow) > .ddc-sidebar[data-sidebar-alignment="center"] > :first-child,
.ddc-root.ddc-sidebar-layout:not(.ddc-sidebar-narrow) > .ddc-sidebar[data-sidebar-alignment="bottom"] > :first-child{margin-top:auto;}
.ddc-root.ddc-sidebar-layout:not(.ddc-sidebar-narrow) > .ddc-sidebar[data-sidebar-alignment="center"] > :last-child{margin-bottom:auto;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-layer-menu{border-top:1px solid var(--ddc-rail-line);padding-top:10px;margin-top:6px;flex:none;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-layer-menu .ddc-layer-trigger{display:flex;position:relative;align-items:center;gap:10px;width:100% !important;min-width:0 !important;max-width:none !important;height:var(--ddc-side-height) !important;min-height:44px !important;padding:0 12px !important;border:0;border-radius:var(--ddc-side-button_radius,12px);background:var(--ddc-rail-raised);color:var(--ddc-rail-text);box-shadow:none;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-layer-menu .ddc-layer-trigger::before{display:none;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-layer-menu .ddc-layer-trigger ha-icon{--mdc-icon-size:var(--ddc-side-icon);width:var(--ddc-side-icon);height:var(--ddc-side-icon);border:0;background:none;color:inherit;}
.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-layer-menu .ddc-layer-count{display:grid;place-items:center;min-width:20px;height:20px;font-size:11px;border-radius:10px;background:var(--ddc-rail-active);color:var(--ddc-rail-active-ink);}
.ddc-root.ddc-sidebar-type-expanded .ddc-sidebar .ddc-sidebar-layer-menu .ddc-layer-trigger-copy{display:grid;position:static;inline-size:auto;block-size:auto;clip-path:none;overflow:visible;flex:1;text-align:left;}
.ddc-root.ddc-sidebar-type-expanded .ddc-sidebar .ddc-sidebar-layer-menu .ddc-layer-trigger-label,
.ddc-root.ddc-sidebar-type-expanded .ddc-sidebar .ddc-sidebar-layer-menu .ddc-layer-trigger-meta{display:block;position:static;inline-size:auto;block-size:auto;clip-path:none;overflow:visible;color:inherit;}
.ddc-root.ddc-sidebar-type-minimal .ddc-sidebar .ddc-sidebar-layer-menu .ddc-layer-trigger{justify-content:center;padding:0 !important;}
.ddc-root.ddc-sidebar-type-minimal .ddc-sidebar .ddc-sidebar-layer-menu .ddc-layer-count{position:absolute;right:0;top:0;}
.ddc-sidebar-layer-panel{box-sizing:border-box;position:fixed !important;inset:auto !important;left:var(--ddc-layer-panel-x) !important;top:var(--ddc-layer-panel-y) !important;width:min(300px,calc(100vw - 24px));min-width:0 !important;max-height:calc(100dvh - 24px);overflow:auto;z-index:10050 !important;transform:none !important;background:var(--ha-card-background,var(--card-background-color,#f5f7fa));color:var(--primary-text-color,#233143);border:1px solid var(--divider-color,#ccd3dd);border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.2);}
.ddc-sidebar-layer-panel .ddc-layer-option{color:inherit;background:transparent;}
.ddc-sidebar-layer-panel .ddc-layer-option.active{background:color-mix(in srgb,var(--primary-color,#1976b8) 13%,transparent);}
.ddc-sidebar-layer-panel .ddc-layer-menu-head strong,.ddc-sidebar-layer-panel .ddc-layer-menu-head span,.ddc-sidebar-layer-panel .ddc-layer-option-label,.ddc-sidebar-layer-panel .ddc-layer-option-meta{color:inherit;}
.ddc-sidebar-layer-hint{font-size:12px;line-height:1.5;opacity:.7;margin:0 8px 12px;}
@container ddc-root (max-width:720px){.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-layer-menu{margin:0;padding:0 0 0 8px;border-top:0;border-left:1px solid var(--ddc-rail-line);}.ddc-root.ddc-sidebar-layout .ddc-sidebar .ddc-sidebar-layer-menu .ddc-layer-trigger{width:auto !important;min-width:52px !important;}.ddc-side-widgets{grid-template-columns:repeat(auto-fit,minmax(180px,1fr));}}
`; }
