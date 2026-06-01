/*
 * Main dashboard shadow DOM template.
 *
 * The shell template contains the persistent canvas, toolbar, tabs, layers, sidebar, preview controls,
 * and global dashboard styles used before individual cards are rendered.
 */

export function getDashboardShellTemplate() {
  return `
        <style>


.ddc-root{
  position:relative;
  z-index: 1;
  /* JS will keep this in sync with your “Grid (px)” */
  --ddc-grid-size: 10px;
  --ddc-grid-color: color-mix(in srgb, #7dd3fc 24%, transparent);
  --ddc-grid-major-color: color-mix(in srgb, #38bdf8 34%, transparent);
  --ddc-grid-major-size: calc(var(--ddc-grid-size) + var(--ddc-grid-size) + var(--ddc-grid-size) + var(--ddc-grid-size));
  --ddc-left-rail-width: clamp(84px, 7vw, 104px);
  --ddc-left-rail-gap: clamp(18px, 2.6vw, 30px);
  --ddc-sidebar-width: clamp(220px, 18vw, 310px);
  --ddc-sidebar-gap: clamp(18px, 2.6vw, 30px);

  /* Container we query for width */
  container-type: inline-size;
  container-name: ddc-root;
}

.ddc-root.ddc-sidebar-density-compact{ --ddc-sidebar-width: clamp(92px, 7.5vw, 118px); --ddc-sidebar-gap: clamp(14px, 2vw, 22px); }
.ddc-root.ddc-sidebar-density-comfortable{ --ddc-sidebar-width: clamp(220px, 18vw, 310px); }
.ddc-root.ddc-sidebar-density-spacious{ --ddc-sidebar-width: clamp(260px, 22vw, 380px); --ddc-sidebar-gap: clamp(22px, 3vw, 38px); }

.ddc-root.ddc-sidebar-layout{
  --ddc-sidebar-accent: #3b82f6;
  --ddc-sidebar-accent-2: #22d3ee;
  --ddc-sidebar-panel: color-mix(in oklab, #07111f 88%, var(--ha-card-background, #10151f) 12%);
  --ddc-sidebar-panel-soft: rgba(255,255,255,.055);
  --ddc-sidebar-text: rgba(241,246,255,.94);
  --ddc-sidebar-muted: rgba(203,213,225,.66);
  --ddc-sidebar-line: rgba(148,163,184,.18);
}

.ddc-root.ddc-sidebar-accent-cyan{ --ddc-sidebar-accent:#22d3ee; --ddc-sidebar-accent-2:#60a5fa; }
.ddc-root.ddc-sidebar-accent-purple{ --ddc-sidebar-accent:#8b5cf6; --ddc-sidebar-accent-2:#22d3ee; }
.ddc-root.ddc-sidebar-accent-amber{ --ddc-sidebar-accent:#f59e0b; --ddc-sidebar-accent-2:#38bdf8; }
.ddc-root.ddc-sidebar-accent-green{ --ddc-sidebar-accent:#22c55e; --ddc-sidebar-accent-2:#38bdf8; }

.ddc-root.ddc-tabs-left-layout,
.ddc-root.ddc-sidebar-layout{
  display:grid;
  grid-template-columns: var(--ddc-sidebar-width) minmax(0, 1fr);
  grid-template-areas:
    "toolbar toolbar"
    "sidebar canvas";
  column-gap: var(--ddc-sidebar-gap);
  align-items:start;
}

.ddc-root.ddc-tabs-left-layout > .ddc-toolbar,
.ddc-root.ddc-sidebar-layout > .ddc-toolbar{
  grid-area: toolbar;
}

.ddc-root.ddc-tabs-left-layout > .ddc-tabs,
.ddc-root.ddc-sidebar-layout > .ddc-sidebar{
  grid-area: sidebar;
  justify-self: center;
  align-self: start;
}

.ddc-sidebar{
  --ddc-sidebar-top-offset: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px) + 14px);
  width:100%;
  min-width:0;
  display:flex;
  flex-direction:column;
  gap:14px;
  align-items:stretch;
  position:sticky;
  top:var(--ddc-sidebar-top-offset);
  z-index:6;
  box-sizing:border-box;
  padding:16px;
  height:max(480px, var(--ddc-sidebar-canvas-height, 0px), calc(100dvh - var(--ddc-sidebar-top-offset) - max(env(safe-area-inset-bottom, 0px), 14px)));
  min-height:0;
  max-height:none;
  border-radius:32px;
  color:var(--ddc-sidebar-text);
  background:
    linear-gradient(150deg, rgba(255,255,255,.075), transparent 34%),
    radial-gradient(circle at 0% 12%, color-mix(in oklab, var(--ddc-sidebar-accent) 34%, transparent), transparent 34%),
    var(--ddc-sidebar-panel);
  border:1px solid rgba(148,163,184,.18);
  box-shadow:
    0 22px 52px rgba(2,6,23,.34),
    inset 0 1px 0 rgba(255,255,255,.08);
  backdrop-filter:blur(18px) saturate(1.12);
  -webkit-backdrop-filter:blur(18px) saturate(1.12);
  overflow-y:auto;
  overflow-x:hidden;
  scrollbar-width:thin;
  scrollbar-color:color-mix(in oklab, var(--ddc-sidebar-accent) 52%, transparent) transparent;
}

.ddc-sidebar::before{
  content:"";
  position:absolute;
  inset:18px auto 18px 0;
  width:3px;
  border-radius:999px;
  background:linear-gradient(180deg, var(--ddc-sidebar-accent), var(--ddc-sidebar-accent-2));
  box-shadow:0 0 24px color-mix(in oklab, var(--ddc-sidebar-accent) 72%, transparent);
  opacity:.92;
}

.ddc-root.ddc-sidebar-style-minimal .ddc-sidebar{
  background:color-mix(in oklab, var(--ha-card-background, #10151f) 92%, #020617 8%);
  box-shadow:0 12px 30px rgba(2,6,23,.18);
}

.ddc-root.ddc-sidebar-style-neon .ddc-sidebar{
  border-color:color-mix(in oklab, var(--ddc-sidebar-accent) 46%, rgba(255,255,255,.12));
  box-shadow:
    0 26px 60px rgba(2,6,23,.42),
    0 0 0 1px color-mix(in oklab, var(--ddc-sidebar-accent) 18%, transparent),
    inset 0 0 38px color-mix(in oklab, var(--ddc-sidebar-accent) 9%, transparent);
}

.ddc-sidebar[aria-hidden="true"]{
  display:none !important;
}

.ddc-sidebar-widget{
  min-width:0;
  display:flex;
  align-items:center;
  gap:12px;
  padding:13px 14px;
  border-radius:20px;
  border:1px solid var(--ddc-sidebar-line);
  background:var(--ddc-sidebar-panel-soft);
  color:var(--ddc-sidebar-text);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.045);
  text-align:left;
  cursor:pointer;
  transition:
    transform .16s cubic-bezier(.2,.8,.2,1),
    border-color .16s ease,
    background .16s ease,
    box-shadow .16s ease;
}

.ddc-sidebar-widget:hover,
.ddc-sidebar-widget.is-active{
  background:color-mix(in oklab, var(--ddc-sidebar-accent) 13%, rgba(255,255,255,.06));
  border-color:color-mix(in oklab, var(--ddc-sidebar-accent) 42%, var(--ddc-sidebar-line));
}

.ddc-sidebar-widget:hover{
  transform:translateY(-1px);
}

.ddc-sidebar-widget:focus-visible{
  outline:none;
  box-shadow:
    0 0 0 2px color-mix(in oklab, var(--ddc-sidebar-accent) 62%, transparent),
    inset 0 1px 0 rgba(255,255,255,.045);
}

.ddc-sidebar-widget ha-icon{
  --mdc-icon-size:22px;
  flex:0 0 auto;
  color:color-mix(in oklab, var(--ddc-sidebar-accent) 76%, white 24%);
}

.ddc-sidebar-widget span,
.ddc-sidebar-widget strong{
  min-width:0;
  max-width:100%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ddc-sidebar-widget strong{
  display:block;
  font:800 18px/1.05 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  color:var(--ddc-sidebar-text);
}

.ddc-sidebar-widget span{
  display:block;
  margin-top:2px;
  font:700 12px/1.2 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  color:var(--ddc-sidebar-muted);
}

.ddc-sidebar-avatar{
  width:42px;
  height:42px;
  border-radius:16px;
  display:grid;
  place-items:center;
  flex:0 0 auto;
  color:white;
  background:linear-gradient(135deg, var(--ddc-sidebar-accent), var(--ddc-sidebar-accent-2));
  box-shadow:0 12px 28px color-mix(in oklab, var(--ddc-sidebar-accent) 30%, transparent);
}

.ddc-sidebar-widget-copy,
.ddc-sidebar-profile-copy{ min-width:0; flex:1 1 auto; }

.ddc-sidebar-widget-clock,
.ddc-sidebar-widget-date{
  display:grid;
  gap:12px;
  align-items:stretch;
}

.ddc-sidebar-clock-card{
  display:grid;
  grid-template-columns:auto minmax(0, 1fr);
  align-items:center;
  gap:15px;
  width:100%;
  min-height:92px;
}

.ddc-sidebar-clock-stage{
  position:relative;
  width:84px;
  height:84px;
  display:grid;
  place-items:center;
  flex:0 0 84px;
  border-radius:28px;
  background:
    radial-gradient(circle at 34% 24%, color-mix(in oklab, var(--ddc-sidebar-accent-2) 22%, transparent), transparent 48%),
    linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.018));
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 28%, rgba(255,255,255,.14));
  box-shadow:
    0 18px 34px color-mix(in oklab, var(--ddc-sidebar-accent) 18%, transparent),
    inset 0 1px 0 rgba(255,255,255,.06);
}

.ddc-sidebar-clock-copy{
  min-width:0;
  display:grid;
  gap:5px;
  align-content:center;
}

.ddc-sidebar-clock-copy strong{
  font-size:32px;
  letter-spacing:0;
  line-height:.98;
}

.ddc-sidebar-clock-copy span{
  margin:0;
  color:color-mix(in oklab, var(--ddc-sidebar-accent-2) 70%, white 30%);
  font-size:10px;
  letter-spacing:.14em;
  text-transform:uppercase;
}

.ddc-sidebar-clock-copy em{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  color:var(--ddc-sidebar-muted);
  font-size:11px;
  font-style:normal;
  font-weight:760;
}

.ddc-sidebar-clock-face{
  position:relative;
  width:68px;
  height:68px;
  flex:0 0 68px;
  border-radius:999px;
  background:
    repeating-conic-gradient(from -1deg, rgba(255,255,255,.28) 0deg 1.4deg, transparent 1.4deg 30deg),
    radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--ddc-sidebar-accent) 16%, transparent) 0 24%, transparent 25%),
    linear-gradient(145deg, rgba(255,255,255,.09), rgba(255,255,255,.025));
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 48%, rgba(255,255,255,.18));
  box-shadow:0 10px 24px color-mix(in oklab, var(--ddc-sidebar-accent) 18%, transparent);
}

.ddc-sidebar-clock-seconds{
  position:absolute;
  right:-5px;
  bottom:-5px;
  min-width:28px;
  height:28px;
  display:grid;
  place-items:center;
  border-radius:999px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent-2) 42%, rgba(255,255,255,.18));
  background:color-mix(in oklab, #020617 76%, var(--ddc-sidebar-accent) 24%);
  color:color-mix(in oklab, var(--ddc-sidebar-accent-2) 76%, white 24%);
  font-size:11px;
  font-weight:900;
  box-shadow:0 8px 18px rgba(0,0,0,.26);
}

.ddc-sidebar-clock-face::before{
  content:"";
  position:absolute;
  inset:7px;
  border-radius:inherit;
  border:1px solid rgba(255,255,255,.08);
  background:radial-gradient(circle at 50% 50%, rgba(255,255,255,.045), transparent 62%);
}

.ddc-sidebar-clock-face::after{
  content:"";
  position:absolute;
  left:50%;
  top:50%;
  width:5px;
  height:5px;
  border-radius:999px;
  transform:translate(-50%, -50%);
  background:var(--ddc-sidebar-text);
}

.ddc-sidebar-clock-hand{
  position:absolute;
  left:50%;
  top:50%;
  width:2px;
  border-radius:999px;
  transform-origin:50% 100%;
  background:var(--ddc-sidebar-text);
}

.ddc-sidebar-clock-hand.hour{
  height:18px;
  width:3px;
  transform:translate(-50%, -100%) rotate(var(--ddc-sidebar-hour));
}

.ddc-sidebar-clock-hand.minute{
  height:26px;
  background:color-mix(in oklab, var(--ddc-sidebar-accent) 80%, white 20%);
  transform:translate(-50%, -100%) rotate(var(--ddc-sidebar-minute));
}

.ddc-sidebar-clock-hand.second{
  width:1px;
  height:29px;
  background:color-mix(in oklab, var(--ddc-sidebar-accent-2) 86%, white 14%);
  box-shadow:0 0 10px color-mix(in oklab, var(--ddc-sidebar-accent-2) 44%, transparent);
  transform:translate(-50%, -100%) rotate(var(--ddc-sidebar-second));
  animation:ddc-sidebar-clock-second 60s linear infinite;
}

@keyframes ddc-sidebar-clock-second{
  to{ transform:translate(-50%, -100%) rotate(calc(var(--ddc-sidebar-second) + 360deg)); }
}

@media (prefers-reduced-motion: reduce){
  .ddc-sidebar-clock-hand.second{
    animation:none !important;
  }
}

.ddc-sidebar-clock-face-large{
  width:92px;
  height:92px;
  flex:0 0 92px;
}

.ddc-sidebar-clock-face-large .ddc-sidebar-clock-hand.hour{ height:25px; }
.ddc-sidebar-clock-face-large .ddc-sidebar-clock-hand.minute{ height:34px; }
.ddc-sidebar-clock-face-large .ddc-sidebar-clock-hand.second{ height:38px; }

.ddc-sidebar-clock-detail{
  display:grid;
  grid-template-columns:auto minmax(0, 1fr);
  align-items:center;
  gap:16px;
}

.ddc-sidebar-date-card{
  display:grid;
  gap:12px;
  width:100%;
}

.ddc-sidebar-date-top{
  display:grid;
  grid-template-columns:auto minmax(0, 1fr);
  align-items:center;
  gap:12px;
}

.ddc-sidebar-calendar-tile{
  width:46px;
  height:50px;
  flex:0 0 46px;
  display:grid;
  grid-template-rows:18px 1fr;
  overflow:hidden;
  border-radius:14px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 42%, rgba(255,255,255,.16));
  background:rgba(255,255,255,.055);
}

.ddc-sidebar-calendar-tile span{
  display:grid;
  place-items:center;
  margin:0;
  font-size:10px;
  font-weight:900;
  color:white;
  background:linear-gradient(135deg, var(--ddc-sidebar-accent), var(--ddc-sidebar-accent-2));
  text-transform:uppercase;
}

.ddc-sidebar-calendar-tile strong{
  display:grid;
  place-items:center;
  font-size:21px;
  line-height:1;
}

.ddc-sidebar-month{
  min-width:0;
  display:grid;
  gap:10px;
  padding:11px;
  border-radius:18px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 26%, rgba(255,255,255,.12));
  background:
    linear-gradient(150deg, color-mix(in oklab, var(--ddc-sidebar-accent) 10%, transparent), rgba(255,255,255,.026));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.04);
}

.ddc-sidebar-month-detail{
  padding:12px;
}

.ddc-sidebar-month-head{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:10px;
}

.ddc-sidebar-month-head div{
  min-width:0;
  display:grid;
  gap:2px;
}

.ddc-sidebar-month-head span,
.ddc-sidebar-month-head strong{
  margin:0;
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ddc-sidebar-month-head span{
  color:var(--ddc-sidebar-muted);
  font-size:10px;
  font-weight:900;
  letter-spacing:.12em;
  text-transform:uppercase;
}

.ddc-sidebar-month-head strong{
  color:var(--ddc-sidebar-text);
  font-size:14px;
  line-height:1.1;
}

.ddc-sidebar-month-head em{
  flex:0 0 auto;
  padding:5px 8px;
  border-radius:999px;
  background:color-mix(in oklab, var(--ddc-sidebar-accent) 18%, rgba(255,255,255,.04));
  color:color-mix(in oklab, var(--ddc-sidebar-accent) 78%, white 22%);
  font-style:normal;
  font-size:10px;
  font-weight:900;
}

.ddc-sidebar-month-grid{
  display:grid;
  grid-template-columns:repeat(7, minmax(0, 1fr));
  gap:4px;
}

.ddc-sidebar-month-dow,
.ddc-sidebar-month-day{
  display:grid !important;
  place-items:center;
  margin:0 !important;
  min-width:0;
  overflow:visible !important;
  text-overflow:clip !important;
  white-space:normal !important;
}

.ddc-sidebar-month-dow{
  height:18px;
  color:var(--ddc-sidebar-muted) !important;
  font-size:9px !important;
  font-weight:850 !important;
  text-transform:uppercase;
}

.ddc-sidebar-month-day{
  aspect-ratio:1;
  min-height:22px;
  border-radius:9px;
  color:color-mix(in oklab, var(--ddc-sidebar-text) 88%, transparent) !important;
  font-size:11px !important;
  font-weight:800 !important;
  line-height:1 !important;
}

.ddc-sidebar-month-day.is-muted{
  opacity:.34;
}

.ddc-sidebar-month-day.is-weekend:not(.is-selected){
  color:color-mix(in oklab, var(--ddc-sidebar-accent-2) 72%, white 28%) !important;
}

.ddc-sidebar-month-day.is-today,
.ddc-sidebar-month-day.is-selected{
  background:linear-gradient(135deg, var(--ddc-sidebar-accent), var(--ddc-sidebar-accent-2));
  color:white !important;
  box-shadow:0 8px 18px color-mix(in oklab, var(--ddc-sidebar-accent) 30%, transparent);
}

.ddc-sidebar-events{
  display:grid;
  gap:8px;
}

.ddc-sidebar-event{
  appearance:none;
  -webkit-appearance:none;
  display:grid;
  grid-template-columns:minmax(54px, .42fr) minmax(0, 1fr);
  grid-template-areas:
    "time title"
    "time meta";
  align-items:center;
  column-gap:10px;
  width:100%;
  min-height:46px;
  padding:8px 10px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 24%, rgba(255,255,255,.1));
  border-radius:15px;
  background:linear-gradient(135deg, color-mix(in oklab, var(--ddc-sidebar-accent) 10%, transparent), rgba(255,255,255,.026));
  color:var(--ddc-sidebar-text);
  text-align:left;
  cursor:pointer;
}

.ddc-sidebar-event span,
.ddc-sidebar-event strong,
.ddc-sidebar-event em{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ddc-sidebar-event span{
  grid-area:time;
  margin:0;
  color:color-mix(in oklab, var(--ddc-sidebar-accent-2) 72%, white 28%);
  font-size:10px;
  font-weight:900;
  line-height:1.2;
  text-transform:uppercase;
}

.ddc-sidebar-event strong{
  grid-area:title;
  font-size:12px;
  line-height:1.15;
}

.ddc-sidebar-event em{
  grid-area:meta;
  color:var(--ddc-sidebar-muted);
  font-style:normal;
  font-size:11px;
  font-weight:750;
}

.ddc-sidebar-events.compact .ddc-sidebar-event{
  min-height:40px;
  padding:7px 9px;
}

.ddc-sidebar-events-empty{
  display:flex;
  align-items:center;
  gap:8px;
  min-height:38px;
  padding:8px 10px;
  border-radius:14px;
  color:var(--ddc-sidebar-muted);
  background:rgba(255,255,255,.03);
}

.ddc-sidebar-events-empty ha-icon{ --mdc-icon-size:17px; }

.ddc-sidebar-weather-icon{
  width:52px;
  height:52px;
  flex:0 0 52px;
  display:grid;
  place-items:center;
  border-radius:18px;
  background:
    radial-gradient(circle at 42% 34%, color-mix(in oklab, var(--ddc-sidebar-accent-2) 24%, transparent), transparent 54%),
    rgba(255,255,255,.052);
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 32%, rgba(255,255,255,.12));
}

.ddc-sidebar-weather-icon ha-icon{
  --mdc-icon-size:32px;
  filter:drop-shadow(0 0 12px color-mix(in oklab, var(--ddc-sidebar-accent) 46%, transparent));
}

.ddc-sidebar-weather-meta{
  flex:0 0 auto;
  display:grid;
  gap:4px;
  text-align:right;
}

.ddc-sidebar-weather-meta span{
  margin:0;
  font-size:10px;
  font-weight:850;
  color:color-mix(in oklab, var(--ddc-sidebar-muted) 90%, white 10%);
}

.ddc-sidebar-widget-heading{
  width:100%;
  color:var(--ddc-sidebar-muted);
  font-size:11px;
  font-weight:900;
  line-height:1;
  letter-spacing:.12em;
  text-transform:uppercase;
}

.ddc-sidebar-widget-status{
  display:grid;
  gap:12px;
}

.ddc-sidebar-home-card{
  display:grid;
  gap:11px;
  width:100%;
}

.ddc-sidebar-home-media{
  position:relative;
  min-height:116px;
  overflow:hidden;
  display:grid;
  place-items:center;
  border-radius:20px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 28%, rgba(255,255,255,.14));
  background:
    radial-gradient(circle at 18% 18%, color-mix(in oklab, var(--ddc-sidebar-accent-2) 22%, transparent), transparent 42%),
    linear-gradient(145deg, color-mix(in oklab, var(--ddc-sidebar-accent) 12%, transparent), rgba(255,255,255,.03));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.055);
}

.ddc-sidebar-home-media::after{
  content:"";
  position:absolute;
  inset:auto 0 0;
  height:48%;
  background:linear-gradient(180deg, transparent, rgba(2,6,23,.58));
  pointer-events:none;
}

.ddc-sidebar-home-media img{
  width:100%;
  height:100%;
  min-height:116px;
  object-fit:cover;
  display:block;
}

.ddc-sidebar-home-media ha-icon{
  --mdc-icon-size:42px;
  color:color-mix(in oklab, var(--ddc-sidebar-accent) 74%, white 26%);
  filter:drop-shadow(0 0 16px color-mix(in oklab, var(--ddc-sidebar-accent) 44%, transparent));
}

.ddc-sidebar-home-title{
  min-width:0;
  display:grid;
  gap:3px;
}

.ddc-sidebar-home-title span{
  margin:0;
  color:var(--ddc-sidebar-muted);
  font-size:10px;
  font-weight:900;
  letter-spacing:.13em;
  text-transform:uppercase;
}

.ddc-sidebar-home-title strong{
  font-size:18px;
  line-height:1.05;
}

.ddc-sidebar-status-list{
  display:grid;
  gap:9px;
  width:100%;
}

.ddc-sidebar-status-row{
  appearance:none;
  -webkit-appearance:none;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  width:100%;
  min-height:34px;
  padding:6px 8px;
  border:1px solid transparent;
  border-radius:12px;
  background:transparent;
  color:var(--ddc-sidebar-muted);
  font-size:12px;
  font-weight:700;
  text-align:left;
  cursor:pointer;
  transition:background .16s ease, border-color .16s ease, transform .16s ease, color .16s ease;
}

.ddc-sidebar-status-row span{
  display:inline-flex;
  align-items:center;
  gap:8px;
  margin:0;
}

.ddc-sidebar-status-row ha-icon{ --mdc-icon-size:15px; color:var(--ddc-sidebar-muted); }
.ddc-sidebar-status-row strong{ font-size:13px; color:var(--ddc-sidebar-text); }

.ddc-sidebar-status-row:hover,
.ddc-sidebar-status-row:focus-visible{
  outline:none;
  transform:translateX(2px);
  border-color:color-mix(in oklab, var(--ddc-sidebar-accent) 24%, transparent);
  background:color-mix(in oklab, var(--ddc-sidebar-accent) 12%, rgba(255,255,255,.035));
  color:var(--ddc-sidebar-text);
}

.ddc-sidebar-status-row:hover ha-icon,
.ddc-sidebar-status-row:focus-visible ha-icon{
  color:color-mix(in oklab, var(--ddc-sidebar-accent) 78%, white 22%);
}

.ddc-sidebar-widget-people{
  display:grid;
  gap:11px;
  align-items:stretch;
}

.ddc-sidebar-people-card{
  display:grid;
  gap:10px;
  width:100%;
}

.ddc-sidebar-people-avatars{
  min-width:0;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  gap:7px;
}

.ddc-sidebar-person-avatar{
  position:relative;
  width:38px;
  height:38px;
  flex:0 0 38px;
  display:grid;
  place-items:center;
  overflow:hidden;
  border-radius:999px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 28%, rgba(255,255,255,.18));
  background:linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.025));
  color:var(--ddc-sidebar-text);
  font-weight:900;
  box-shadow:0 10px 20px rgba(0,0,0,.2);
}

.ddc-sidebar-person-avatar.large{
  width:48px;
  height:48px;
  flex-basis:48px;
}

.ddc-sidebar-person-avatar img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

.ddc-sidebar-person-avatar::after{
  content:"";
  position:absolute;
  right:1px;
  bottom:1px;
  width:11px;
  height:11px;
  border-radius:999px;
  border:2px solid color-mix(in oklab, var(--ddc-sidebar-panel) 86%, #020617 14%);
  background:#94a3b8;
}

.ddc-sidebar-person-avatar.is-home::after{
  background:#22c55e;
  box-shadow:0 0 12px rgba(34,197,94,.58);
}

.ddc-sidebar-person-avatar.is-empty::after{
  display:none;
}

.ddc-sidebar-people-summary{
  min-width:0;
  display:grid;
  gap:3px;
}

.ddc-sidebar-people-summary strong{
  font-size:17px;
  line-height:1.1;
}

.ddc-sidebar-people-summary span{
  margin:0;
  color:var(--ddc-sidebar-muted);
  font-size:12px;
  font-weight:800;
}

.ddc-sidebar-status-popup-backdrop{
  position:fixed;
  inset:0;
  z-index:100002;
  display:grid;
  place-items:center;
  padding:18px;
  background:rgba(4,8,16,.54);
  backdrop-filter:blur(13px) saturate(1.06);
  -webkit-backdrop-filter:blur(13px) saturate(1.06);
}

.ddc-sidebar-status-popup{
  width:min(760px, calc(100vw - 36px));
  max-height:min(88vh, 860px);
  display:grid;
  grid-template-rows:auto auto auto minmax(0, 1fr) auto;
  gap:14px;
  overflow:hidden;
  padding:20px;
  border-radius:26px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent, var(--primary-color, #03a9f4)) 26%, rgba(255,255,255,.16));
  background:
    linear-gradient(155deg, color-mix(in oklab, var(--ddc-sidebar-accent, #3b82f6) 12%, transparent), transparent 42%),
    color-mix(in oklab, var(--card-background-color, #111827) 92%, rgba(7,10,18,.9));
  color:var(--primary-text-color, #f5f5f5);
  box-shadow:
    0 30px 92px rgba(0,0,0,.46),
    0 10px 28px rgba(0,0,0,.26),
    inset 0 1px 0 rgba(255,255,255,.06);
}

.ddc-sidebar-status-popup-head{
  display:grid;
  grid-template-columns:auto minmax(0, 1fr) auto;
  align-items:start;
  gap:14px;
}

.ddc-sidebar-status-popup-icon{
  width:48px;
  height:48px;
  display:grid;
  place-items:center;
  border-radius:17px;
  background:linear-gradient(135deg, var(--ddc-sidebar-accent, #3b82f6), var(--ddc-sidebar-accent-2, #22d3ee));
  color:white;
  box-shadow:0 14px 30px color-mix(in oklab, var(--ddc-sidebar-accent, #3b82f6) 26%, transparent);
}

.ddc-sidebar-status-popup-icon ha-icon{ --mdc-icon-size:25px; }

.ddc-sidebar-status-popup-head span{
  display:block;
  color:var(--secondary-text-color, #9ca3af);
  font-size:.72rem;
  font-weight:850;
  letter-spacing:.16em;
  text-transform:uppercase;
}

.ddc-sidebar-status-popup-head strong{
  display:block;
  margin-top:3px;
  font-size:1.32rem;
  line-height:1.12;
  font-weight:850;
}

.ddc-sidebar-status-popup-head p{
  margin:7px 0 0;
  color:var(--secondary-text-color, #9ca3af);
  font-size:.92rem;
  line-height:1.42;
}

.ddc-sidebar-status-popup-close{
  width:38px;
  height:38px;
  display:grid;
  place-items:center;
  border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.14)) 80%, transparent);
  border-radius:999px;
  background:rgba(255,255,255,.045);
  color:var(--primary-text-color, #f5f5f5);
  cursor:pointer;
}

.ddc-sidebar-status-popup-close ha-icon{ --mdc-icon-size:18px; }

.ddc-sidebar-status-popup-summary{
  display:grid;
  grid-template-columns:repeat(3, minmax(0, 1fr));
  gap:10px;
}

.ddc-sidebar-status-popup-summary div{
  min-width:0;
  padding:12px;
  border-radius:16px;
  border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.14)) 78%, transparent);
  background:rgba(255,255,255,.035);
}

.ddc-sidebar-status-popup-summary span{
  display:block;
  color:var(--secondary-text-color, #9ca3af);
  font-size:.72rem;
  font-weight:800;
  text-transform:uppercase;
}

.ddc-sidebar-status-popup-summary strong{
  display:block;
  margin-top:4px;
  font-size:1.18rem;
  line-height:1;
}

.ddc-sidebar-status-popup-actions{
  display:flex;
  flex-wrap:wrap;
  gap:9px;
}

.ddc-sidebar-status-popup-actions button,
.ddc-sidebar-status-entity-actions button{
  appearance:none;
  -webkit-appearance:none;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:7px;
  min-height:34px;
  padding:0 11px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent, var(--primary-color, #03a9f4)) 28%, rgba(255,255,255,.12));
  border-radius:999px;
  background:color-mix(in oklab, var(--ddc-sidebar-accent, var(--primary-color, #03a9f4)) 13%, rgba(255,255,255,.04));
  color:var(--primary-text-color, #f5f5f5);
  font:750 12px/1 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  cursor:pointer;
}

.ddc-sidebar-status-popup-actions ha-icon,
.ddc-sidebar-status-entity-actions ha-icon{ --mdc-icon-size:16px; }

.ddc-sidebar-status-entity-list{
  min-height:0;
  overflow:auto;
  display:grid;
  gap:10px;
  padding-right:4px;
}

.ddc-sidebar-status-entity{
  display:grid;
  gap:8px;
  padding:10px;
  border-radius:17px;
  border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.14)) 76%, transparent);
  background:rgba(255,255,255,.032);
}

.ddc-sidebar-status-entity-main{
  appearance:none;
  -webkit-appearance:none;
  display:grid;
  grid-template-columns:34px minmax(0, 1fr) auto;
  align-items:center;
  gap:10px;
  width:100%;
  padding:0;
  border:0;
  background:transparent;
  color:inherit;
  text-align:left;
  cursor:pointer;
}

.ddc-sidebar-status-entity-main ha-icon{
  --mdc-icon-size:21px;
  width:34px;
  height:34px;
  display:grid;
  place-items:center;
  border-radius:12px;
  color:color-mix(in oklab, var(--ddc-sidebar-accent, var(--primary-color, #03a9f4)) 74%, white 26%);
  background:color-mix(in oklab, var(--ddc-sidebar-accent, var(--primary-color, #03a9f4)) 12%, transparent);
}

.ddc-sidebar-status-entity-main span{
  min-width:0;
  display:grid;
  gap:3px;
}

.ddc-sidebar-status-entity-main strong,
.ddc-sidebar-status-entity-main em,
.ddc-sidebar-status-entity-main b{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ddc-sidebar-status-entity-main strong{
  font-size:.92rem;
  line-height:1.1;
}

.ddc-sidebar-status-entity-main em{
  color:var(--secondary-text-color, #9ca3af);
  font-style:normal;
  font-size:.74rem;
}

.ddc-sidebar-status-entity-main b{
  justify-self:end;
  max-width:150px;
  padding:6px 9px;
  border-radius:999px;
  background:rgba(255,255,255,.045);
  color:var(--primary-text-color, #f5f5f5);
  font-size:.75rem;
}

.ddc-sidebar-status-entity-actions{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  flex-wrap:wrap;
  gap:8px;
}

.ddc-sidebar-status-entity-actions > span{
  margin-right:auto;
  color:var(--secondary-text-color, #9ca3af);
  font-size:.73rem;
  font-weight:700;
}

.ddc-sidebar-status-empty{
  min-height:180px;
  display:grid;
  place-items:center;
  align-content:center;
  gap:7px;
  color:var(--secondary-text-color, #9ca3af);
  text-align:center;
}

.ddc-sidebar-status-empty ha-icon{
  --mdc-icon-size:34px;
  color:color-mix(in oklab, var(--ddc-sidebar-accent, var(--primary-color, #03a9f4)) 68%, white 32%);
}

.ddc-sidebar-status-empty strong{
  color:var(--primary-text-color, #f5f5f5);
}

.ddc-sidebar-status-more{
  color:var(--secondary-text-color, #9ca3af);
  font-size:.78rem;
  line-height:1.35;
}

.ddc-sidebar-people-popup{
  max-width:min(680px, calc(100vw - 36px));
}

.ddc-sidebar-people-list{
  min-height:0;
  overflow:auto;
  display:grid;
  gap:10px;
  padding-right:4px;
}

.ddc-sidebar-person-row{
  display:grid;
  gap:8px;
  padding:10px;
  border-radius:18px;
  border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.14)) 76%, transparent);
  background:rgba(255,255,255,.032);
}

.ddc-sidebar-person-row.is-home{
  border-color:rgba(34,197,94,.24);
  background:linear-gradient(135deg, rgba(34,197,94,.1), rgba(255,255,255,.03));
}

.ddc-sidebar-person-main{
  appearance:none;
  -webkit-appearance:none;
  display:grid;
  grid-template-columns:auto minmax(0, 1fr) auto;
  align-items:center;
  gap:12px;
  width:100%;
  padding:0;
  border:0;
  background:transparent;
  color:inherit;
  text-align:left;
  cursor:pointer;
}

.ddc-sidebar-person-main span{
  min-width:0;
  display:grid;
  gap:3px;
}

.ddc-sidebar-person-main strong,
.ddc-sidebar-person-main em,
.ddc-sidebar-person-main b{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ddc-sidebar-person-main strong{
  color:var(--primary-text-color, #f5f5f5);
  font-size:.96rem;
  line-height:1.1;
}

.ddc-sidebar-person-main em{
  color:var(--secondary-text-color, #9ca3af);
  font-style:normal;
  font-size:.74rem;
}

.ddc-sidebar-person-main b{
  justify-self:end;
  padding:6px 10px;
  border-radius:999px;
  background:rgba(255,255,255,.045);
  color:var(--primary-text-color, #f5f5f5);
  font-size:.76rem;
}

.ddc-sidebar-person-row.is-home .ddc-sidebar-person-main b{
  background:rgba(34,197,94,.16);
  color:#86efac;
}

.ddc-sidebar-avatar{
  border-radius:999px;
  font-weight:900;
  font-size:18px;
}

.ddc-sidebar-widget-profile > ha-icon:last-child{
  --mdc-icon-size:20px;
  color:var(--ddc-sidebar-muted);
}

.ddc-sidebar-detail{
  display:grid;
  gap:12px;
  min-width:0;
  padding:14px;
  border-radius:20px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 34%, var(--ddc-sidebar-line));
  background:
    linear-gradient(145deg, color-mix(in oklab, var(--ddc-sidebar-accent) 12%, transparent), rgba(255,255,255,.045));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.055);
}

.ddc-sidebar-detail-head{
  display:grid;
  grid-template-columns:auto minmax(0, 1fr) auto;
  align-items:center;
  gap:10px;
}

.ddc-sidebar-detail-head ha-icon{
  --mdc-icon-size:20px;
  color:color-mix(in oklab, var(--ddc-sidebar-accent) 76%, white 24%);
}

.ddc-sidebar-detail-head strong{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size:14px;
  color:var(--ddc-sidebar-text);
}

.ddc-sidebar-detail-close{
  width:30px;
  height:30px;
  display:grid;
  place-items:center;
  border:1px solid var(--ddc-sidebar-line);
  border-radius:999px;
  background:rgba(255,255,255,.045);
  color:var(--ddc-sidebar-muted);
  cursor:pointer;
}

.ddc-sidebar-detail-close ha-icon{ --mdc-icon-size:16px; }

.ddc-sidebar-detail-body{
  display:grid;
  gap:8px;
}

.ddc-sidebar-detail-hero{
  font-size:28px;
  line-height:1.05;
  font-weight:850;
  letter-spacing:0;
  color:var(--ddc-sidebar-text);
}

.ddc-sidebar-detail-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding-top:8px;
  border-top:1px solid rgba(255,255,255,.06);
}

.ddc-sidebar-detail-row span{
  min-width:0;
  color:var(--ddc-sidebar-muted);
  font-size:12px;
  font-weight:750;
}

.ddc-sidebar-detail-row strong{
  min-width:0;
  max-width:58%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  color:var(--ddc-sidebar-text);
  font-size:12px;
  text-align:right;
}

.ddc-sidebar-detail-copy{
  margin:0;
  color:var(--ddc-sidebar-muted);
  font-size:12px;
  line-height:1.45;
}

.ddc-sidebar-detail-copy code{
  color:var(--ddc-sidebar-text);
}

.ddc-sidebar-footer{
  min-width:0;
  margin-top:auto;
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px 13px;
  border-radius:18px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-line) 86%, transparent);
  background:
    linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,.018)),
    color-mix(in oklab, var(--ddc-sidebar-accent) 6%, transparent);
  color:var(--ddc-sidebar-muted);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.035);
}

.ddc-sidebar-footer-mark{
  width:34px;
  height:34px;
  flex:0 0 34px;
  display:grid;
  place-items:center;
  border-radius:13px;
  background:color-mix(in oklab, var(--ddc-sidebar-accent) 16%, rgba(255,255,255,.045));
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 30%, rgba(255,255,255,.12));
}

.ddc-sidebar-footer-mark ha-icon{
  --mdc-icon-size:19px;
  color:color-mix(in oklab, var(--ddc-sidebar-accent) 78%, white 22%);
}

.ddc-sidebar-footer-copy{
  min-width:0;
  display:grid;
  gap:2px;
}

.ddc-sidebar-footer-copy strong{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  color:var(--ddc-sidebar-text);
  font-size:12px;
  line-height:1.15;
}

.ddc-sidebar-footer-copy span{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  color:var(--ddc-sidebar-muted);
  font-size:11px;
  font-weight:750;
  line-height:1.15;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar{
  padding:12px 9px;
  border-radius:28px;
  gap:10px;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-widget{
  justify-content:center;
  padding:12px 8px;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-widget strong,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-widget span,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-profile-copy,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-widget-profile > ha-icon:last-child,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-widget-heading,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-footer-copy{
  display:none;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-clock-card,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-date-top{
  display:flex;
  justify-content:center;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-clock-copy,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-month,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-status-list{
  display:none;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-calendar-tile span,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-calendar-tile strong{
  display:grid;
}

.ddc-root.ddc-tabs-left-layout > .ddc-scale-outer,
.ddc-root.ddc-tabs-left-layout > .card-container,
.ddc-root.ddc-sidebar-layout > .ddc-scale-outer,
.ddc-root.ddc-sidebar-layout > .card-container{
  grid-area: canvas;
  min-width: 0;
}

.ddc-root.ddc-tabs-bottom-layout .ddc-scale-outer,
.ddc-root.ddc-tabs-bottom-layout .card-container{
  margin-bottom: 86px;
}

@container ddc-root (max-width: 980px){
  .ddc-root.ddc-tabs-left-layout,
  .ddc-root.ddc-sidebar-layout{
    grid-template-columns: 1fr;
    grid-template-areas:
      "toolbar"
      "sidebar"
      "canvas";
    row-gap: 12px;
  }

  .ddc-root.ddc-tabs-left-layout > .ddc-tabs,
  .ddc-root.ddc-sidebar-layout > .ddc-sidebar{
    align-self: start;
    justify-self: stretch;
    position:sticky;
    top:calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px));
    height:auto;
    min-height:0;
    max-height:none;
  }
}

/* Premium smart-home sidebar redesign */
.ddc-root{
  --ddc-sidebar-width: clamp(248px, 17vw, 334px);
  --ddc-sidebar-gap: clamp(18px, 2.2vw, 32px);
  --ddc-sidebar-radius: 22px;
  --ddc-sidebar-widget-radius: 14px;
}

.ddc-root.ddc-sidebar-density-compact{
  --ddc-sidebar-width: clamp(86px, 7vw, 106px);
  --ddc-sidebar-gap: clamp(12px, 1.7vw, 20px);
}

.ddc-root.ddc-sidebar-density-comfortable{
  --ddc-sidebar-width: clamp(248px, 17vw, 334px);
}

.ddc-root.ddc-sidebar-density-spacious{
  --ddc-sidebar-width: clamp(292px, 22vw, 398px);
  --ddc-sidebar-gap: clamp(22px, 2.8vw, 40px);
}

.ddc-root.ddc-sidebar-layout{
  --ddc-sidebar-accent: var(--primary-color, #3b82f6);
  --ddc-sidebar-accent-2: #2dd4bf;
  --ddc-sidebar-panel: color-mix(in oklab, var(--ha-card-background, #10151f) 92%, #0b111d 8%);
  --ddc-sidebar-panel-raised: color-mix(in oklab, var(--ha-card-background, #10151f) 86%, var(--primary-text-color, #f8fafc) 4%);
  --ddc-sidebar-panel-soft: color-mix(in oklab, var(--ha-card-background, #10151f) 82%, transparent);
  --ddc-sidebar-text: var(--primary-text-color, #f8fafc);
  --ddc-sidebar-muted: color-mix(in oklab, var(--secondary-text-color, #94a3b8) 86%, var(--primary-text-color, #f8fafc) 14%);
  --ddc-sidebar-line: color-mix(in oklab, var(--divider-color, rgba(148,163,184,.2)) 78%, transparent);
  --ddc-sidebar-shadow: 0 24px 54px rgba(8, 12, 20, .22), 0 4px 14px rgba(8, 12, 20, .12);
}

.ddc-root.ddc-sidebar-layout{
  grid-template-columns: var(--ddc-sidebar-width) minmax(0, 1fr);
  column-gap: var(--ddc-sidebar-gap);
}

.ddc-sidebar{
  --ddc-sidebar-top-offset: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px) + 12px);
  gap:10px;
  padding:12px;
  border-radius:var(--ddc-sidebar-radius);
  background:
    linear-gradient(180deg, rgba(255,255,255,.075), rgba(255,255,255,.028)),
    var(--ddc-sidebar-panel);
  border:1px solid var(--ddc-sidebar-line);
  box-shadow:var(--ddc-sidebar-shadow), inset 0 1px 0 rgba(255,255,255,.08);
  backdrop-filter:blur(20px) saturate(1.05);
  -webkit-backdrop-filter:blur(20px) saturate(1.05);
  scrollbar-color:color-mix(in oklab, var(--ddc-sidebar-accent) 40%, var(--ddc-sidebar-line)) transparent;
}

.ddc-sidebar::before{
  inset:12px auto 12px 7px;
  width:2px;
  background:linear-gradient(180deg, transparent, var(--ddc-sidebar-accent), var(--ddc-sidebar-accent-2), transparent);
  box-shadow:none;
  opacity:.82;
}

.ddc-sidebar::after{
  content:"";
  position:absolute;
  inset:1px;
  border-radius:calc(var(--ddc-sidebar-radius) - 1px);
  pointer-events:none;
  border:1px solid rgba(255,255,255,.045);
}

.ddc-root.ddc-sidebar-style-minimal .ddc-sidebar{
  background:var(--ddc-sidebar-panel);
  box-shadow:0 14px 34px rgba(8,12,20,.14), inset 0 1px 0 rgba(255,255,255,.06);
}

.ddc-root.ddc-sidebar-style-neon .ddc-sidebar{
  border-color:color-mix(in oklab, var(--ddc-sidebar-accent) 36%, var(--ddc-sidebar-line));
  box-shadow:
    0 26px 60px rgba(8,12,20,.28),
    0 0 0 1px color-mix(in oklab, var(--ddc-sidebar-accent) 14%, transparent),
    inset 0 1px 0 rgba(255,255,255,.08);
}

.ddc-sidebar-header{
  min-width:0;
  display:grid;
  gap:10px;
  padding:12px;
  border-radius:18px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-line) 88%, transparent);
  background:
    linear-gradient(135deg, color-mix(in oklab, var(--ddc-sidebar-accent) 10%, transparent), transparent 56%),
    var(--ddc-sidebar-panel-raised);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.07);
}

.ddc-sidebar-header-main{
  min-width:0;
  display:grid;
  grid-template-columns:auto minmax(0, 1fr) auto;
  align-items:center;
  gap:10px;
}

.ddc-sidebar-header-mark{
  width:40px;
  height:40px;
  display:grid;
  place-items:center;
  border-radius:14px;
  color:white;
  background:linear-gradient(135deg, var(--ddc-sidebar-accent), var(--ddc-sidebar-accent-2));
  font-size:15px;
  font-weight:900;
  box-shadow:0 12px 24px color-mix(in oklab, var(--ddc-sidebar-accent) 22%, transparent);
}

.ddc-sidebar-header-copy{
  min-width:0;
  display:grid;
  gap:2px;
}

.ddc-sidebar-header-copy span,
.ddc-sidebar-header-copy strong,
.ddc-sidebar-header-copy em{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ddc-sidebar-header-copy span{
  color:color-mix(in oklab, var(--ddc-sidebar-accent) 68%, var(--ddc-sidebar-text) 32%);
  font-size:10px;
  font-weight:900;
  letter-spacing:.12em;
  line-height:1;
  text-transform:uppercase;
}

.ddc-sidebar-header-copy strong{
  color:var(--ddc-sidebar-text);
  font-size:16px;
  line-height:1.08;
  font-weight:850;
}

.ddc-sidebar-header-copy em{
  color:var(--ddc-sidebar-muted);
  font-size:11px;
  line-height:1.2;
  font-style:normal;
  font-weight:760;
}

.ddc-sidebar-live-pill{
  min-width:54px;
  height:28px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:6px;
  padding:0 8px;
  border-radius:999px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 28%, var(--ddc-sidebar-line));
  background:color-mix(in oklab, var(--ddc-sidebar-accent) 10%, transparent);
  color:var(--ddc-sidebar-text);
  font-size:10px;
  font-weight:850;
}

.ddc-sidebar-live-pill i{
  width:7px;
  height:7px;
  border-radius:999px;
  background:#22c55e;
  box-shadow:0 0 0 3px rgba(34,197,94,.12);
}

.ddc-sidebar-header-stats{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:7px;
}

.ddc-sidebar-header-stats span{
  min-width:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:6px;
  padding:7px 8px;
  border-radius:12px;
  background:rgba(255,255,255,.04);
  color:var(--ddc-sidebar-muted);
  font-size:10px;
  font-weight:780;
}

.ddc-sidebar-header-stats b{
  color:var(--ddc-sidebar-text);
  font-size:12px;
}

.ddc-sidebar-section-label{
  min-width:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  padding:8px 5px 4px 10px;
  color:var(--ddc-sidebar-muted);
  font-size:10px;
  font-weight:900;
  letter-spacing:.11em;
  line-height:1;
  text-transform:uppercase;
}

.ddc-sidebar-section-label span{
  min-width:0;
  display:inline-flex;
  align-items:center;
  gap:7px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ddc-sidebar-section-label ha-icon{
  --mdc-icon-size:14px;
  color:color-mix(in oklab, var(--ddc-sidebar-accent) 68%, var(--ddc-sidebar-muted) 32%);
}

.ddc-sidebar-section-label em{
  min-width:20px;
  height:20px;
  display:grid;
  place-items:center;
  border-radius:999px;
  background:rgba(255,255,255,.045);
  color:var(--ddc-sidebar-text);
  font-style:normal;
  letter-spacing:0;
}

.ddc-sidebar-widget{
  min-height:58px;
  padding:12px;
  border-radius:var(--ddc-sidebar-widget-radius);
  border-color:color-mix(in oklab, var(--ddc-sidebar-line) 86%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.018)),
    var(--ddc-sidebar-panel-soft);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.055);
}

.ddc-sidebar-widget:hover,
.ddc-sidebar-widget.is-active{
  background:
    linear-gradient(135deg, color-mix(in oklab, var(--ddc-sidebar-accent) 12%, transparent), transparent 58%),
    var(--ddc-sidebar-panel-raised);
  border-color:color-mix(in oklab, var(--ddc-sidebar-accent) 34%, var(--ddc-sidebar-line));
  box-shadow:
    0 12px 26px rgba(8,12,20,.16),
    inset 0 1px 0 rgba(255,255,255,.075);
}

.ddc-sidebar-widget > .ddc-sidebar-widget-copy strong,
.ddc-sidebar-widget > .ddc-sidebar-profile-copy strong,
.ddc-sidebar-clock-copy strong,
.ddc-sidebar-home-title strong,
.ddc-sidebar-people-summary strong{
  font-size:16px;
  font-weight:850;
  line-height:1.08;
}

.ddc-sidebar-widget > .ddc-sidebar-widget-copy span,
.ddc-sidebar-widget > .ddc-sidebar-profile-copy span,
.ddc-sidebar-clock-copy span,
.ddc-sidebar-home-title span,
.ddc-sidebar-people-summary span{
  font-size:11px;
  font-weight:760;
  line-height:1.2;
}

.ddc-sidebar-widget ha-icon{
  color:color-mix(in oklab, var(--ddc-sidebar-accent) 70%, var(--ddc-sidebar-text) 30%);
}

.ddc-sidebar .ddc-tabs.ddc-tabs-left{
  display:grid;
  gap:7px;
}

.ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab{
  min-height:48px;
  padding:0 12px;
  border-radius:14px;
  color:var(--ddc-sidebar-muted);
  background:
    linear-gradient(180deg, rgba(255,255,255,.036), rgba(255,255,255,.012)),
    transparent;
  border:1px solid transparent;
}

.ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab:hover{
  background:color-mix(in oklab, var(--ddc-sidebar-accent) 8%, rgba(255,255,255,.04));
  border-color:color-mix(in oklab, var(--ddc-sidebar-accent) 22%, var(--ddc-sidebar-line));
}

.ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab.active{
  color:white;
  background:
    linear-gradient(135deg, color-mix(in oklab, var(--ddc-sidebar-accent) 88%, #111827 12%), color-mix(in oklab, var(--ddc-sidebar-accent-2) 70%, #111827 30%));
  box-shadow:
    0 12px 24px color-mix(in oklab, var(--ddc-sidebar-accent) 24%, transparent),
    inset 0 1px 0 rgba(255,255,255,.18);
}

.ddc-sidebar-clock-card{
  min-height:82px;
  gap:12px;
}

.ddc-sidebar-clock-stage{
  width:70px;
  height:70px;
  flex-basis:70px;
  border-radius:18px;
  background:
    linear-gradient(145deg, color-mix(in oklab, var(--ddc-sidebar-accent) 12%, transparent), rgba(255,255,255,.045));
  border-color:color-mix(in oklab, var(--ddc-sidebar-accent) 24%, var(--ddc-sidebar-line));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.07);
}

.ddc-sidebar-clock-face{
  width:54px;
  height:54px;
  flex-basis:54px;
  background:
    repeating-conic-gradient(from -1deg, rgba(255,255,255,.22) 0deg 1.2deg, transparent 1.2deg 30deg),
    linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
  box-shadow:none;
}

.ddc-sidebar-clock-copy strong{
  font-size:30px;
  font-weight:860;
  line-height:.96;
}

.ddc-sidebar-clock-copy span{
  color:color-mix(in oklab, var(--ddc-sidebar-accent-2) 64%, var(--ddc-sidebar-text) 36%);
}

.ddc-sidebar-clock-seconds{
  right:-4px;
  bottom:-4px;
  background:var(--ddc-sidebar-panel);
}

.ddc-sidebar-date-card,
.ddc-sidebar-home-card,
.ddc-sidebar-people-card{
  gap:10px;
}

.ddc-sidebar-calendar-tile,
.ddc-sidebar-weather-icon,
.ddc-sidebar-footer-mark{
  border-radius:14px;
}

.ddc-sidebar-month,
.ddc-sidebar-event,
.ddc-sidebar-status-row,
.ddc-sidebar-detail,
.ddc-sidebar-footer{
  border-radius:14px;
}

.ddc-sidebar-month{
  background:color-mix(in oklab, var(--ddc-sidebar-panel-raised) 82%, transparent);
}

.ddc-sidebar-weather-icon{
  width:48px;
  height:48px;
  flex-basis:48px;
  background:color-mix(in oklab, var(--ddc-sidebar-accent) 9%, rgba(255,255,255,.035));
}

.ddc-sidebar-weather-meta{
  gap:5px;
}

.ddc-sidebar-weather-meta span{
  padding:4px 6px;
  border-radius:999px;
  background:rgba(255,255,255,.04);
}

.ddc-sidebar-home-media{
  min-height:104px;
  border-radius:16px;
  background:
    linear-gradient(145deg, color-mix(in oklab, var(--ddc-sidebar-accent) 10%, transparent), rgba(255,255,255,.035));
}

.ddc-sidebar-home-media img{
  min-height:104px;
}

.ddc-sidebar-status-row{
  min-height:36px;
  padding:7px 9px;
  background:rgba(255,255,255,.026);
}

.ddc-sidebar-person-avatar{
  border-radius:13px;
}

.ddc-sidebar-person-avatar.large{
  width:44px;
  height:44px;
  flex-basis:44px;
}

.ddc-sidebar-detail{
  background:
    linear-gradient(135deg, color-mix(in oklab, var(--ddc-sidebar-accent) 10%, transparent), transparent 54%),
    var(--ddc-sidebar-panel-raised);
}

.ddc-sidebar-footer{
  padding:11px 12px;
  background:rgba(255,255,255,.03);
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-header{
  padding:9px 7px;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-header-main{
  grid-template-columns:1fr;
  justify-items:center;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-header-copy,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-live-pill,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-header-stats,
.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-section-label{
  display:none;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar-header-mark{
  width:40px;
  height:40px;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab{
  width:54px;
  min-width:54px;
  min-height:54px;
  border-radius:15px;
}

@container ddc-root (max-width: 980px){
  .ddc-root.ddc-sidebar-layout{
    row-gap:12px;
  }

  .ddc-root.ddc-sidebar-layout > .ddc-sidebar{
    display:grid;
    grid-auto-flow:column;
    grid-auto-columns:minmax(176px, 236px);
    align-items:stretch;
    gap:10px;
    overflow-x:auto;
    overflow-y:hidden;
    height:auto;
    max-height:none;
    padding:10px;
    border-radius:18px;
  }

  .ddc-sidebar::before{
    inset:auto 12px 7px 12px;
    width:auto;
    height:2px;
    background:linear-gradient(90deg, transparent, var(--ddc-sidebar-accent), var(--ddc-sidebar-accent-2), transparent);
  }

  .ddc-sidebar-header,
  .ddc-sidebar .ddc-tabs.ddc-tabs-left,
  .ddc-sidebar-widget,
  .ddc-sidebar-detail,
  .ddc-sidebar-footer{
    min-width:0;
  }

  .ddc-sidebar-section-label{
    align-self:center;
    writing-mode:vertical-rl;
    transform:rotate(180deg);
    padding:0 4px;
    justify-content:center;
  }

  .ddc-sidebar-section-label em{
    display:none;
  }

  .ddc-sidebar .ddc-tabs.ddc-tabs-left{
    min-width:188px;
    max-height:190px;
    overflow:auto;
  }

  .ddc-sidebar-month,
  .ddc-sidebar-events.compact{
    display:none;
  }

  .ddc-sidebar-home-media{
    min-height:78px;
  }

  .ddc-sidebar-home-media img{
    min-height:78px;
  }
}

@container ddc-root (max-width: 640px){
  .ddc-root.ddc-sidebar-layout > .ddc-sidebar{
    grid-auto-columns:minmax(156px, 210px);
    border-radius:16px;
  }

  .ddc-sidebar-header-stats,
  .ddc-sidebar-footer-copy{
    display:none;
  }

  .ddc-sidebar-clock-stage{
    width:58px;
    height:58px;
    flex-basis:58px;
  }

  .ddc-sidebar-clock-face{
    width:44px;
    height:44px;
    flex-basis:44px;
  }

  .ddc-sidebar-clock-copy strong{
    font-size:24px;
  }

  .ddc-sidebar-weather-meta{
    display:none;
  }
}

/* ===== DDC Toolbar and tabs when auto sieze is off ===== */

/* Center toolbar & tabs to viewport when auto-resize is OFF in dynamic mode */
/* === Centered, nav-aware UI when auto-resize is OFF in dynamic mode === */
:host([ddc-fixed-ui]) .ddc-toolbar,
:host([ddc-fixed-ui]) .ddc-tabs {
  position: fixed;
  /* Keep clear of HA's left navigation bar; computed in JS, fallback 56px desktop / 0 mobile */
  left: calc(var(--ddc-left-gutter, 56px) + 50%);
  transform: translateX(-50%);
  width: var(--ddc-ui-width, auto);
  max-width: calc(100vw - var(--ddc-left-gutter, 56px) - var(--ddc-right-gutter, 0px));
  box-sizing: border-box;
  pointer-events: auto;
}

/* Vertical placement */
:host([ddc-fixed-ui]) .ddc-toolbar {
  top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px));
  z-index: 8;
}
:host([ddc-fixed-ui]) .ddc-tabs {
  top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px));
  z-index: 5;
}
:host([ddc-fixed-ui]) .ddc-tabs.ddc-tabs-bottom {
  top: auto;
  bottom: max(env(safe-area-inset-bottom, 0px), 12px);
}

/* Make tabs horizontally scrollable when narrow */
:host([ddc-fixed-ui]) .ddc-tabs {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  scrollbar-width: thin;
}

/* Keep inner list no-wrap; match your existing inner wrapper class if different */
:host([ddc-fixed-ui]) .ddc-tabs .scroll-wrap,
:host([ddc-fixed-ui]) .ddc-tabs .tabs-inner {
  display: inline-flex;
  white-space: nowrap;
}

/* Mobile: force sticky top behavior instead of fixed centering */
@media (max-width: 768px) {
  :host([ddc-fixed-ui]) .ddc-toolbar,
  :host([ddc-fixed-ui]) .ddc-tabs,
  .ddc-tabs {
    position: sticky !important;
    left: 0 !important;
    transform: none !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0;
  }

  :host([ddc-fixed-ui]) .ddc-toolbar {
    top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px)) !important;
  }

  :host([ddc-fixed-ui]) .ddc-tabs,
  .ddc-tabs {
    top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px)) !important;
    padding-inline: 0;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([ddc-fixed-ui]) .ddc-tabs.ddc-tabs-bottom,
  .ddc-tabs.ddc-tabs-bottom {
    position: fixed !important;
    top: auto !important;
    bottom: max(env(safe-area-inset-bottom, 0px), 8px) !important;
    left: 0 !important;
    right: 0 !important;
    transform: none !important;
    width: 100% !important;
    max-width: 100% !important;
  }
}
/* ===== DDC Toolbar and tabs when auto sieze is off END ===== */


/* ===== DDC Toolbar — Minimal Redesign (pills with accent tint) ===== */


/* scope to either version */
.ddc-toolbar.streamlined.v2,
.ddc-toolbar.streamlined.v3{
  --ddc-bg:
    linear-gradient(
      180deg,
      color-mix(in oklab, var(--card-background-color, #11151a) 92%, rgba(255,255,255,.02)),
      color-mix(in oklab, var(--primary-background-color, #0c1014) 78%, rgba(255,255,255,.01))
    );
  --ddc-border: color-mix(in oklab, #fff 12%, transparent);
  --ddc-soft: color-mix(in oklab, #fff 6%, transparent);
  --ddc-shadow: 0 14px 36px rgba(0,0,0,.28), 0 4px 14px rgba(0,0,0,.18);
  --ddc-shell-highlight: linear-gradient(90deg, rgba(255,255,255,.045), transparent 24%, transparent 76%, rgba(255,255,255,.025));
  --ddc-btn-border: color-mix(in oklab, #fff 14%, transparent);
  --ddc-btn-surface:
    linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.015)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 24%, transparent);

  /* section accent colors */
  --sec-primary: #6f859c;
  --sec-clip:    #877d8f;
  --sec-share:   #6d8f94;
  --sec-utils:   #738975;
  --sec-status:  #a37067;

  --btn-h: 40px;
  --btn-r: 14px;
  --btn-gap: 8px;

  /* animation vars */
  --ddc-ease: cubic-bezier(.2,.7,.2,1);
  --ddc-dur: 260ms;
  --open-h: 0px; /* JS sets this to scrollHeight */

  position: sticky;
  top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px));
  z-index: 8;
  isolation: isolate;
  background: var(--ddc-bg);
  border: 1px solid var(--ddc-border);
  border-top: 0;
  border-radius: 0 0 28px 28px;
  backdrop-filter: blur(18px) saturate(1.08);
  -webkit-backdrop-filter: blur(18px) saturate(1.08);
  box-shadow: var(--ddc-shadow);
  padding: 14px clamp(14px, 1.8vw, 22px) 14px;

  /* never exceed the root’s width */
  max-width: 100%;

  /* GRID (kept ready) */
  display: none;
  grid-template-columns:
    minmax(240px, 1.08fr)
    minmax(200px, .9fr)
    minmax(290px, 1.14fr)
    minmax(240px, .98fr)
    minmax(170px, .68fr);
  grid-template-areas:
    "primary clip share utils status"
    "layouts layouts layouts layouts status";
  column-gap: 12px;
  row-gap: 12px;
  align-items: stretch;

  /* Visibility is animated — NOT display */
  opacity: 0;
  transform: translateY(-6px);
  max-height: 0;              /* collapse when closed */
  overflow: hidden;             /* avoid scrollbars during anim */
  pointer-events: none;       /* inert when closed */
  visibility: hidden;         /* keep out of a11y focus when closed */

  transition:
    opacity var(--ddc-dur) var(--ddc-ease),
    transform var(--ddc-dur) var(--ddc-ease),
    max-height var(--ddc-dur) var(--ddc-ease),
    visibility 0s linear var(--ddc-dur); /* becomes hidden after fade-out */

  /* make this element respond to its own width, too */
  container-type: inline-size;
  container-name: ddc;
}

.ddc-toolbar.streamlined.v2::before,
.ddc-toolbar.streamlined.v3::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius: inherit;
  background:
    radial-gradient(circle at top left, rgba(255,255,255,.05), transparent 34%),
    radial-gradient(circle at top right, rgba(255,255,255,.035), transparent 34%),
    var(--ddc-shell-highlight);
  opacity:.88;
  pointer-events:none;
}

.ddc-toolbar.streamlined.v2 > *,
.ddc-toolbar.streamlined.v3 > *{
  position:relative;
  z-index:1;
}

/* OPEN state (set by JS) */
.ddc-toolbar.streamlined.v2.is-open,
.ddc-toolbar.streamlined.v3.is-open{
  opacity: 1;
  transform: translateY(0);
  max-height: var(--open-h);  /* expand to measured height */
  pointer-events: auto;
  visibility: visible;
  transition:
    opacity var(--ddc-dur) var(--ddc-ease),
    transform var(--ddc-dur) var(--ddc-ease),
    max-height var(--ddc-dur) var(--ddc-ease),
    visibility 0s; /* visible immediately */
}

.ddc-toolbar.streamlined.v2 .ddc-toolbar-toggle,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-toggle{
  position:absolute;
  top:12px;
  right:12px;
  z-index:3;
  appearance:none;
  -webkit-appearance:none;
  width:40px;
  height:40px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:14px;
  border:1px solid color-mix(in oklab, #fff 14%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 26%, transparent);
  color:var(--primary-text-color, #eef2f7);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.06), 0 10px 18px rgba(0,0,0,.18);
  cursor:pointer;
  transition: transform .08s, background .16s, border-color .16s, box-shadow .16s;
}
.ddc-toolbar.streamlined.v2 .ddc-toolbar-toggle:hover,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-toggle:hover{
  transform: translateY(-1px);
  border-color: color-mix(in oklab, var(--sec-share) 26%, rgba(255,255,255,.14));
  background:
    linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,.04)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 30%, transparent);
}
.ddc-toolbar.streamlined.v2 .ddc-toolbar-toggle ha-icon,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-toggle ha-icon{
  --mdc-icon-size:18px;
  width:18px;
  height:18px;
}

.ddc-toolbar.streamlined.v2.is-collapsed,
.ddc-toolbar.streamlined.v3.is-collapsed{
  display:flex !important;
  flex-wrap:nowrap;
  align-items:center;
  justify-content:center;
  gap:2px;
  width:100% !important;
  min-width:0;
  max-width:100%;
  margin-inline:0;
  padding:12px 14px;
  overflow-x:auto;
  overflow-y:hidden;
  scrollbar-width:none;
  -ms-overflow-style:none;
}
.ddc-toolbar.streamlined.v2.is-collapsed::-webkit-scrollbar,
.ddc-toolbar.streamlined.v3.is-collapsed::-webkit-scrollbar{
  display:none;
}
.ddc-toolbar.streamlined.v2.is-collapsed::before,
.ddc-toolbar.streamlined.v3.is-collapsed::before{
  opacity:.72;
}
.ddc-toolbar.streamlined.v2.is-collapsed .ddc-sec,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-sec{
  display:flex;
  flex-direction:row;
  margin:0;
  align-items:center;
  gap:4px;
  flex:0 0 auto;
  min-width:0;
  padding:0;
  border:0;
  background:none;
  box-shadow:none;
}
.ddc-toolbar.streamlined.v2.is-collapsed .ddc-sec-head,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-sec-head,
.ddc-toolbar.streamlined.v2.is-collapsed .ddc-preview-stack,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-preview-stack,
.ddc-toolbar.streamlined.v2.is-collapsed .sec-layouts,
.ddc-toolbar.streamlined.v3.is-collapsed .sec-layouts,
.ddc-toolbar.streamlined.v2.is-collapsed .sec-status,
.ddc-toolbar.streamlined.v3.is-collapsed .sec-status{
  display:none !important;
}
.ddc-toolbar.streamlined.v2.is-collapsed .ddc-row,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-row{
  display:flex;
  flex-direction:row;
  align-items:center;
  flex-wrap:nowrap;
  gap:4px;
  grid-template-columns:none;
  margin:0;
}
.ddc-toolbar.streamlined.v2.is-collapsed .ddc-toolbar-toggle,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-toolbar-toggle{
  position:static;
  top:auto;
  right:auto;
  flex:0 0 auto;
  order:99;
  margin:0 0 0 4px;
}
.ddc-toolbar.streamlined.v2.is-collapsed .btn,
.ddc-toolbar.streamlined.v3.is-collapsed .btn{
  width:40px;
  min-width:40px;
  flex:0 0 auto;
  height:40px;
  padding:0;
  border-radius:13px;
  gap:0;
  justify-content:center;
}
.ddc-toolbar.streamlined.v2.is-collapsed .btn .label,
.ddc-toolbar.streamlined.v3.is-collapsed .btn .label{
  display:none !important;
}
.ddc-toolbar.streamlined.v2.is-collapsed .btn.cta-add,
.ddc-toolbar.streamlined.v3.is-collapsed .btn.cta-add,
.ddc-toolbar.streamlined.v2.is-collapsed #applyLayoutBtn,
.ddc-toolbar.streamlined.v3.is-collapsed #applyLayoutBtn,
.ddc-toolbar.streamlined.v2.is-collapsed #toolbarAutoSaveBtn,
.ddc-toolbar.streamlined.v3.is-collapsed #toolbarAutoSaveBtn,
.ddc-toolbar.streamlined.v2.is-collapsed #settingsBtn,
.ddc-toolbar.streamlined.v3.is-collapsed #settingsBtn{
  grid-column:auto;
}
.ddc-toolbar.streamlined.v2.is-collapsed #toolbarAutoSaveBtn .ddc-autosave-state,
.ddc-toolbar.streamlined.v3.is-collapsed #toolbarAutoSaveBtn .ddc-autosave-state{
  display:none !important;
}
.ddc-toolbar.streamlined.v2.is-collapsed .btn.cta-add::after,
.ddc-toolbar.streamlined.v3.is-collapsed .btn.cta-add::after{
  display:none;
}
.ddc-toolbar.streamlined.v2.is-collapsed .btn.cta-add,
.ddc-toolbar.streamlined.v3.is-collapsed .btn.cta-add{
  height:40px;
  padding:0;
  border-radius:13px;
  box-shadow:0 8px 16px color-mix(in oklab, var(--sec-primary) 22%, transparent);
}

/* Always hide when closed, no matter what other rules say */
.ddc-toolbar.streamlined.v2:not(.is-open):not([data-force-open="1"]),
.ddc-toolbar.streamlined.v3:not(.is-open):not([data-force-open="1"]) {
  display: none !important;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    transition: none;
  }
}

/* map areas (HTML unchanged) */
.ddc-toolbar.streamlined.v2 .sec-primary{ grid-area: primary; }
.ddc-toolbar.streamlined.v2 .sec-clip   { grid-area: clip; }
.ddc-toolbar.streamlined.v2 .sec-share  { grid-area: share; }
.ddc-toolbar.streamlined.v2 .sec-utils  { grid-area: utils; }
.ddc-toolbar.streamlined.v2 .sec-status { grid-area: status; }
.ddc-toolbar.streamlined.v2 .sec-layouts{ grid-area: layouts; }
.ddc-toolbar.streamlined.v2 .ddc-spacer,
.ddc-toolbar.streamlined.v2 .ddc-vsep{ display:none; }

/* === ONE-PILL PER SECTION: header + buttons inside === */
.ddc-toolbar.streamlined.v2 .ddc-sec,
.ddc-toolbar.streamlined.v3 .ddc-sec{
  --pill-accent: #6b7280;            /* default; overridden per-section below */

  display: grid;
  align-content: start;
  gap: 10px;
  min-width: 0;
  padding: 12px;
  border-radius: 20px;

  /* accent-tinted background & border */
  background:
    linear-gradient(180deg,
      color-mix(in oklab, var(--pill-accent) 10%, transparent),
      transparent 52%),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 18%, transparent);
  border: 1px solid color-mix(in oklab, var(--pill-accent) 18%, rgba(255,255,255,.12));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.06),
    0 10px 22px rgba(0,0,0,.16);
}

/* per-section tint */
.ddc-toolbar.streamlined.v2 .sec-primary{ --pill-accent: var(--sec-primary); }
.ddc-toolbar.streamlined.v2 .sec-clip   { --pill-accent: var(--sec-clip); }
.ddc-toolbar.streamlined.v2 .sec-share  { --pill-accent: var(--sec-share); }
.ddc-toolbar.streamlined.v2 .sec-utils  { --pill-accent: var(--sec-utils); }
.ddc-toolbar.streamlined.v2 .sec-status { --pill-accent: var(--sec-status); }
.ddc-toolbar.streamlined.v2 .sec-layouts{ --pill-accent: var(--sec-clip); } /* layouts gets a gentle purple tint */

/* header inside the pill */
.ddc-toolbar.streamlined.v2 .ddc-sec-head{
  background: transparent; border: 0; padding: 0; border-radius: 0;
  color: var(--accent, #9aa0a6);
  display: inline-flex; align-items: center; gap: 10px;
  min-height: 18px;
  font-weight: 700;
  font-size: .72rem;
  letter-spacing: .16em;
  text-transform: uppercase;
  opacity: .96;
}
.ddc-toolbar.streamlined.v2 .sec-primary .ddc-sec-head{ --accent: var(--sec-primary); color: var(--sec-primary); }
.ddc-toolbar.streamlined.v2 .sec-clip    .ddc-sec-head{ --accent: var(--sec-clip);    color: var(--sec-clip); }
.ddc-toolbar.streamlined.v2 .sec-share   .ddc-sec-head{ --accent: var(--sec-share);   color: var(--sec-share); }
.ddc-toolbar.streamlined.v2 .sec-utils   .ddc-sec-head{ --accent: var(--sec-utils);   color: var(--sec-utils); }
.ddc-toolbar.streamlined.v2 .sec-status  .ddc-sec-head{ --accent: var(--sec-status);  color: var(--sec-status); }
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-sec-head{ --accent: var(--sec-clip);    color: var(--sec-clip); }

.ddc-toolbar.streamlined.v2 .ddc-sec-dot{
  width: 8px; height: 8px; border-radius: 50%; background: currentColor; opacity: .95;
  box-shadow: 0 0 0 6px color-mix(in oklab, currentColor 14%, transparent);
}

/* row of actions inside the pill */
.ddc-toolbar.streamlined.v2 .ddc-row{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: var(--btn-gap);
  margin: 0;
}

/* buttons (reset native look + style) */
.ddc-toolbar.streamlined.v2 .btn{
  appearance:none; -webkit-appearance:none;
  width: 100%;
  min-width: 0;
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  height:var(--btn-h); padding:0 12px; border-radius:var(--btn-r);
  background: var(--ddc-btn-surface);
  border:1px solid var(--ddc-btn-border);
  color: var(--primary-text-color, #e5e7eb);
  cursor:pointer; font:inherit; white-space:nowrap;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
  transition: transform .08s, background .16s, border-color .16s, box-shadow .16s;
}
.ddc-toolbar.streamlined.v2 .btn ha-icon{ --mdc-icon-size:18px; width:18px; height:18px; display:inline-block; }
.ddc-toolbar.streamlined.v2 .btn:hover{
  transform: translateY(-1px);
  background:
    linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.025)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 28%, transparent);
  border-color: color-mix(in oklab, var(--pill-accent) 22%, rgba(255,255,255,.14));
  box-shadow: inset 0 1px 0 rgba(255,255,255,.06), 0 10px 16px rgba(0,0,0,.14);
}
.ddc-toolbar.streamlined.v2 .btn:active{ transform: translateY(0); }
.ddc-toolbar.streamlined.v2 .btn:focus-visible{ outline:none; box-shadow:0 0 0 2px color-mix(in oklab, #fff 15%, transparent); }
.ddc-toolbar.streamlined.v2 .btn.secondary{
  background:
    linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,.01)),
    transparent;
}
.ddc-toolbar.streamlined.v2 .btn.info{
  background:
    linear-gradient(180deg, rgba(255,255,255,.11), rgba(255,255,255,.03)),
    color-mix(in oklab, var(--sec-share) 60%, rgba(255,255,255,.12));
  color:#10252a;
  border-color: color-mix(in oklab, var(--sec-share) 30%, transparent);
}
.ddc-toolbar.streamlined.v2 .btn.danger{
  background:
    linear-gradient(180deg, rgba(255,255,255,.1), rgba(255,255,255,.03)),
    color-mix(in oklab, var(--sec-status) 72%, rgba(255,255,255,.08));
  color:#2d120e;
  border-color: color-mix(in oklab, var(--sec-status) 30%, transparent);
}

/* >>> Make "Add Card" extra prominent */
.ddc-toolbar.streamlined.v2 .btn.cta-add{
  --glow: color-mix(in oklab, var(--sec-primary) 65%, #fff 0%);
  grid-column: 1 / -1;
  height: 44px; padding: 0 16px; border-radius: 16px;
  font-weight: 800; letter-spacing: .2px;
  background: linear-gradient(135deg, var(--sec-primary), color-mix(in oklab, var(--sec-primary) 60%, #fff 0%));
  color:#fff;
  border-color: color-mix(in oklab, var(--sec-primary) 55%, #000);
  box-shadow: 0 10px 24px color-mix(in oklab, var(--sec-primary) 34%, transparent), 0 0 0 2px color-mix(in oklab, var(--sec-primary) 22%, transparent) inset;
}
.ddc-toolbar.streamlined.v2 .btn.cta-add::after{
  content:""; position:absolute; inset:-4px; border-radius:16px;
  border:2px solid color-mix(in oklab, var(--sec-primary) 45%, transparent);
  opacity:.6; pointer-events:none;
}

.ddc-toolbar.streamlined.v2 #applyLayoutBtn,
.ddc-toolbar.streamlined.v2 #toolbarAutoSaveBtn,
.ddc-toolbar.streamlined.v2 #settingsBtn{
  grid-column: 1 / -1;
}
.ddc-toolbar.streamlined.v2 #toolbarAutoSaveBtn{
  justify-content:space-between;
}
.ddc-toolbar.streamlined.v2 #toolbarAutoSaveBtn .label{
  flex:1 1 auto;
  text-align:left;
}
.ddc-toolbar.streamlined.v2 #toolbarAutoSaveBtn .ddc-autosave-state{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:38px;
  height:22px;
  padding:0 8px;
  border-radius:999px;
  font-size:.74rem;
  font-weight:900;
  background:rgba(148,163,184,.18);
  color:var(--secondary-text-color, rgba(255,255,255,.78));
}
.ddc-toolbar.streamlined.v2 #toolbarAutoSaveBtn[aria-pressed="true"]{
  border-color:color-mix(in oklab, #22c55e 42%, rgba(255,255,255,.14));
  background:
    linear-gradient(180deg, rgba(34,197,94,.16), rgba(34,197,94,.045)),
    transparent;
}
.ddc-toolbar.streamlined.v2 #toolbarAutoSaveBtn[aria-pressed="true"] .ddc-autosave-state{
  background:color-mix(in oklab, #22c55e 82%, rgba(255,255,255,.12));
  color:#052e16;
}

/* status: dot above text, HIGH-CONTRAST text */
.ddc-toolbar.streamlined.v2 .ddc-t-status{
  width: 100%;
  display:flex; flex-direction: column; align-items:center; justify-content:center;
  gap: 4px; text-align: center;
  min-width: 0; min-height: 54px; padding: 10px 12px; border-radius: 16px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)),
    color-mix(in oklab, var(--primary-background-color, #0b0d10) 30%, transparent);
  border: 1px solid color-mix(in oklab, #ffffff 18%, transparent);
  color: #f8fbff;  /* brighter default */
  font-size: .9rem; line-height: 1.25; font-weight: 700;
  text-shadow: 0 1px 1px rgba(0,0,0,.45);
}
.ddc-toolbar.streamlined.v2 .ddc-t-status .ddc-t-text{ color: #f8fbff; }
.ddc-toolbar.streamlined.v2 .ddc-t-dot{ width: 12px; height: 12px; border-radius:50%; background:#22c55e; }
.ddc-toolbar.streamlined.v2 .ddc-t-status.warn  .ddc-t-dot{ background:#f59e0b; }
.ddc-toolbar.streamlined.v2 .ddc-t-status.error .ddc-t-dot{ background:#ef4444; }
@keyframes ddc-pulse{ 0%,100%{ transform:scale(1)} 50%{ transform:scale(1.35)} }

/* store badge (optional) */
.ddc-toolbar.streamlined.v2 .store-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  min-height: 54px;
  border: 1px solid color-mix(in oklab, var(--sec-utils) 30%, transparent);
  border-radius: 16px;
  padding: 8px 12px;
  font-size: .88rem;
  background:
    linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)),
    color-mix(in oklab, var(--sec-utils) 18%, transparent);
  color: #f8fbff;
  text-align:center;
}

.ddc-toolbar.streamlined.v2 .sec-status{
  align-content: start;
}

.ddc-toolbar.streamlined.v2 .sec-status .ddc-row{
  grid-template-columns: 1fr;
}

/* Layouts: inline switcher styling */
.ddc-toolbar.streamlined.v2 .sec-layouts{
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 14px 18px;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-row.center{
  display:block;
  margin: 0;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .layout-host{
  display:flex; align-items:center; gap:10px; color:#cfd6de;
  width:100%;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline{
  display:grid;
  grid-template-columns: auto minmax(240px, 1fr) auto auto auto;
  align-items:center;
  gap:8px;
  padding:10px 12px;
  border-radius:16px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.015)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 20%, transparent);
  border: 1px solid color-mix(in oklab, var(--sec-clip) 16%, rgba(255,255,255,.12));
  width:100%;
  box-sizing:border-box;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline .label{
  color:#cfd6de;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.14em;
  text-transform:uppercase;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline select{
  appearance:none; -webkit-appearance:none;
  min-width: 0;
  width: 100%;
  height: 40px;
  padding: 0 38px 0 12px;
  border-radius: 12px;
  border:1px solid color-mix(in oklab, #ffffff 14%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02)),
    var(--primary-background-color, #0e1116);
  color: var(--primary-text-color, #e5e7eb);
  font: inherit;
  line-height: 1;
  cursor: pointer;
  box-shadow: inset 0 1px 1px rgba(255,255,255,.04);
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline button,
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline .btn{
  appearance:none; -webkit-appearance:none;
  width:auto;
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  height:36px; padding:0 12px; border-radius:12px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 16%, transparent);
  border:1px solid color-mix(in oklab, #ffffff 12%, transparent);
  color: var(--primary-text-color, #e5e7eb);
  cursor:pointer; font:inherit; white-space:nowrap;
  transition: transform .08s, background .16s, border-color .16s, box-shadow .16s;
  flex: 0 0 auto;
  min-width: fit-content;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline .btn[disabled]{
  opacity:.45;
  cursor:not-allowed;
  transform:none;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-stack{
  grid-column: 1 / -1;
  display:grid;
  gap:10px;
  margin-top: 2px;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-label{
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color: color-mix(in oklab, var(--primary-text-color, #e5e7eb) 68%, transparent);
}

.ddc-toolbar.streamlined.v2 .ddc-preview-meta{
  font-size:.74rem;
  font-weight:700;
  color: color-mix(in oklab, var(--primary-text-color, #e5e7eb) 84%, transparent);
}

.ddc-toolbar.streamlined.v2 .ddc-preview-modes{
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap:8px;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip{
  appearance:none;
  -webkit-appearance:none;
  min-width:0;
  height:36px;
  padding:0 10px;
  border-radius:12px;
  border:1px solid color-mix(in oklab, #ffffff 12%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.018)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 18%, transparent);
  color: var(--primary-text-color, #e5e7eb);
  font: inherit;
  font-size:.82rem;
  font-weight:700;
  cursor:pointer;
  transition: transform .08s, background .16s, border-color .16s, color .16s;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip--icon{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:42px;
  padding:0;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip--icon ha-icon{
  --mdc-icon-size: 18px;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip:hover{
  transform: translateY(-1px);
  border-color: color-mix(in oklab, var(--sec-share) 22%, rgba(255,255,255,.14));
  background:
    linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.025)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 24%, transparent);
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip.is-active{
  background:
    linear-gradient(180deg, rgba(255,255,255,.1), rgba(255,255,255,.03)),
    color-mix(in oklab, var(--sec-share) 58%, rgba(255,255,255,.12));
  border-color: color-mix(in oklab, var(--sec-share) 34%, transparent);
  color:#10252a;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.14);
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip:disabled{
  opacity:.5;
  cursor:not-allowed;
  transform:none;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip[aria-disabled="true"],
.ddc-toolbar.streamlined.v2 .ddc-preview-chip.is-disabled,
.ddc-toolbar.streamlined.v2 .ddc-preview-chip.is-active.is-disabled{
  opacity:.48;
  cursor:not-allowed;
  transform:none;
  color: color-mix(in oklab, var(--primary-text-color, #e5e7eb) 54%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.026), rgba(255,255,255,.01)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 12%, transparent);
  border-color: color-mix(in oklab, #ffffff 8%, transparent);
  box-shadow:none;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip[aria-disabled="true"]:hover,
.ddc-toolbar.streamlined.v2 .ddc-preview-chip.is-disabled:hover{
  transform:none;
  background:
    linear-gradient(180deg, rgba(255,255,255,.026), rgba(255,255,255,.01)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 12%, transparent);
  border-color: color-mix(in oklab, #ffffff 8%, transparent);
  box-shadow:none;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-dimensions{
  display:grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
  gap:8px;
  align-items:end;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-field{
  display:grid;
  gap:6px;
  min-width:0;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-field span{
  font-size:.66rem;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color: color-mix(in oklab, var(--primary-text-color, #e5e7eb) 66%, transparent);
}

.ddc-toolbar.streamlined.v2 .ddc-preview-field input{
  appearance:none;
  -webkit-appearance:none;
  width:100%;
  min-width:0;
  height:38px;
  padding:0 12px;
  border-radius:12px;
  border:1px solid color-mix(in oklab, #ffffff 12%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.018)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 18%, transparent);
  color: var(--primary-text-color, #e5e7eb);
  font: inherit;
  box-sizing:border-box;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-field input:disabled{
  opacity:.55;
}

@media (max-width: 720px){
  .ddc-toolbar.streamlined.v2 .ddc-preview-modes{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ddc-toolbar.streamlined.v2 .ddc-preview-dimensions{
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .ddc-toolbar.streamlined.v2 .ddc-preview-chip--icon{
    grid-column: 1 / -1;
  }
}

.ddc-root.ddc-preview-active .ddc-scale-outer{
  padding: 0;
  margin: clamp(24px, 3.4vw, 56px) auto clamp(48px, 6vw, 92px);
}

.ddc-preview-device-frame{
  position: relative;
  pointer-events:none;
  z-index:0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.ddc-preview-device-frame{
  position:absolute;
  z-index:0;
  pointer-events:none;
}

.ddc-preview-device-frame::before{
  content:none;
}

.ddc-preview-device-frame::after{
  content:"";
  position:absolute;
  left: var(--ddc-preview-asset-left, 0px);
  top: var(--ddc-preview-asset-top, 0px);
  width: var(--ddc-preview-asset-width, 100%);
  height: var(--ddc-preview-asset-height, 100%);
  z-index:0;
  pointer-events:none;
  background-image: var(--ddc-preview-frame-url, none);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  transform: rotate(var(--ddc-preview-asset-rotation, 0deg));
  transform-origin: center center;
  filter: drop-shadow(0 16px 32px rgba(0,0,0,.18));
}

.ddc-preview-frame-viewport-box{
  position:absolute;
  z-index:1;
  pointer-events:none;
  border-radius: 18px;
  border: 2px dashed rgba(102, 225, 255, 0.88);
  background: rgba(102, 225, 255, 0.04);
  box-shadow:
    inset 0 0 0 1px rgba(102, 225, 255, 0.18),
    0 0 0 1px rgba(7, 23, 31, 0.12);
}

.ddc-preview-frame-viewport-box::after{
  content: attr(data-debug);
  position:absolute;
  left: 12px;
  bottom: 12px;
  max-width: calc(100% - 24px);
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding: 5px 9px;
  border-radius: 999px;
  background: rgba(6, 20, 28, 0.72);
  border: 1px solid rgba(102, 225, 255, 0.34);
  color: rgba(208, 247, 255, 0.96);
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.ddc-root.ddc-preview-device-active .ddc-scale-outer{
  position: relative;
  z-index:1;
}

.ddc-root.ddc-preview-device-mobile.ddc-preview-active .ddc-scale-outer{
  margin-top: clamp(20px, 3vw, 34px);
  margin-bottom: clamp(56px, 7vw, 104px);
}

.ddc-root.ddc-preview-device-tablet.ddc-preview-active .ddc-scale-outer{
  margin-top: clamp(26px, 3.6vw, 48px);
  margin-bottom: clamp(52px, 6.6vw, 98px);
}

.ddc-root.ddc-preview-device-desktop.ddc-preview-active .ddc-scale-outer{
  margin-top: clamp(22px, 3vw, 40px);
  margin-bottom: clamp(48px, 6vw, 88px);
}

.ddc-root.ddc-edit-mode-active .ddc-scale-outer{
  position: relative;
}

.ddc-root.ddc-edit-mode-active .ddc-scale-outer::before{
  content:"";
  position:absolute;
  inset:0;
  z-index:5;
  pointer-events:none;
  border-radius: 18px;
  box-shadow:
    inset 0 0 0 2px rgba(255, 196, 92, 0.96),
    0 0 0 1px rgba(255, 196, 92, 0.32);
}

.ddc-root.ddc-edit-mode-active.ddc-preview-active .ddc-scale-outer::before{
  box-shadow:
    inset 0 0 0 3px rgba(255, 196, 92, 0.98),
    0 0 0 1px rgba(255, 196, 92, 0.38),
    0 0 0 10px rgba(255, 196, 92, 0.08);
}

.ddc-root.ddc-edit-mode-active .ddc-scale-outer::after{
  content:"Active Viewport";
  position:absolute;
  top:12px;
  left:12px;
  z-index:6;
  pointer-events:none;
  padding:6px 10px;
  border-radius:999px;
  background: rgba(255, 196, 92, 0.14);
  border:1px solid rgba(255, 196, 92, 0.42);
  color: rgba(255, 228, 176, 0.96);
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* JS shim to override default hidden state purely for measuring/animating */
.ddc-toolbar.streamlined.v2[data-force-open="1"],
.ddc-toolbar.streamlined.v3[data-force-open="1"]{
  display: grid !important;
}

/* ===== STACK WHEN ROOT IS NARROW (uses .ddc-root width) ===== */
@container ddc-root (max-width: 1480px){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-areas:
      "primary clip share status"
      "utils utils layouts layouts";
  }
}

@container ddc-root (max-width: 1120px){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
      "primary share"
      "clip utils"
      "status status"
      "layouts layouts";
  }
}

@container ddc-root (max-width: 860px){
  .ddc-toolbar.streamlined.v2 .ddc-row,
  .ddc-toolbar.streamlined.v3 .ddc-row{
    grid-template-columns: 1fr;
  }

  .ddc-toolbar.streamlined.v2 .sec-layouts{
    grid-template-columns: 1fr;
    align-items: stretch;
  }

  .ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline{
    grid-template-columns: 1fr;
  }

  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    max-width: 100%;
    margin: 10px 0 12px 0;
    border-radius: 22px;
  }
}

/* Fallback for environments without container queries */
@supports not (container-type: inline-size){
  @media (max-width: 1480px){
    .ddc-toolbar.streamlined.v2,
    .ddc-toolbar.streamlined.v3{
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-template-areas:
        "primary clip share status"
        "utils utils layouts layouts";
    }
  }
  @media (max-width: 1120px){
    .ddc-toolbar.streamlined.v2,
    .ddc-toolbar.streamlined.v3{
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-areas:
        "primary share"
        "clip utils"
        "status status"
        "layouts layouts";
    }
  }
  @media (max-width: 860px){
    .ddc-toolbar.streamlined.v2 .ddc-row,
    .ddc-toolbar.streamlined.v3 .ddc-row{
      grid-template-columns: 1fr;
    }
    .ddc-toolbar.streamlined.v2 .sec-layouts,
    .ddc-toolbar.streamlined.v3 .sec-layouts{
      grid-template-columns: 1fr;
      align-items: stretch;
    }
    .ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline,
    .ddc-toolbar.streamlined.v3 .sec-layouts .ddc-switcher-inline{
      grid-template-columns: 1fr;
    }
    .ddc-toolbar.streamlined.v2,
    .ddc-toolbar.streamlined.v3{
      margin: 10px 0 12px 0;
      border-radius: 22px;
    }
  }
}

/* Optional: make sure all children use border-box inside the toolbar */
.ddc-toolbar.streamlined.v2 *,
.ddc-toolbar.streamlined.v3 * { box-sizing: border-box; }

/* ===== DDC Toolbar - segmented edit command bar ===== */
.ddc-toolbar.streamlined.v2,
.ddc-toolbar.streamlined.v3{
  --ddc-segment-accent: var(--primary-color, #8b5cf6);
  --ddc-segment-bg:
    linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.018)),
    color-mix(in oklab, var(--card-background-color, #111827) 86%, var(--primary-background-color, #050811) 14%);
  display:none;
  flex-direction:column;
  gap:10px;
  width:min(100%, calc(100vw - var(--ddc-left-gutter, 0px) - var(--ddc-right-gutter, 0px) - 24px));
  max-width:1390px;
  margin:8px auto 12px;
  padding:12px;
  border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.18)) 72%, transparent);
  border-radius:22px;
  background:
    radial-gradient(circle at 14% 0%, color-mix(in oklab, var(--ddc-segment-accent) 12%, transparent), transparent 32%),
    var(--ddc-segment-bg);
  box-shadow:
    0 18px 38px rgba(0,0,0,.24),
    inset 0 1px 0 rgba(255,255,255,.08);
  border-top:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.18)) 72%, transparent);
  overflow:hidden;
}

.ddc-toolbar.streamlined.v2[data-force-open="1"],
.ddc-toolbar.streamlined.v3[data-force-open="1"]{
  display:flex !important;
}

.ddc-toolbar.streamlined.v2.is-open,
.ddc-toolbar.streamlined.v3.is-open{
  display:flex !important;
}

.ddc-toolbar.streamlined.v2.is-collapsed,
.ddc-toolbar.streamlined.v3.is-collapsed{
  display:flex !important;
  flex-direction:column;
  align-items:stretch;
  justify-content:flex-start;
  gap:10px;
  padding:12px;
  overflow:hidden;
}

.ddc-toolbar.streamlined.v2 .ddc-toolbar-toggle,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-toggle{
  display:none !important;
}

.ddc-toolbar-segments{
  position:relative;
  z-index:2;
  display:grid;
  grid-template-columns:
    minmax(180px, 1fr)
    minmax(170px, .96fr)
    minmax(220px, 1.08fr)
    minmax(170px, .9fr)
    minmax(142px, auto);
  align-items:stretch;
  gap:0;
  min-height:58px;
  border-radius:18px;
  border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.18)) 72%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.012)),
    color-mix(in oklab, var(--primary-background-color, #08111f) 72%, transparent);
  overflow:hidden;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.06);
}

.ddc-toolbar-segment{
  position:relative;
  min-width:0;
  min-height:58px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  padding:0 18px;
  border:0;
  border-right:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.18)) 62%, transparent);
  background:transparent;
  color:color-mix(in oklab, var(--primary-text-color, #f8fafc) 84%, transparent);
  font:800 13px/1 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  letter-spacing:.045em;
  text-transform:uppercase;
  cursor:pointer;
  white-space:nowrap;
  transition:
    color .16s ease,
    background .18s ease,
    box-shadow .18s ease,
    transform .12s ease;
}

.ddc-toolbar-segment::after{
  content:"";
  position:absolute;
  left:24px;
  right:24px;
  bottom:0;
  height:3px;
  border-radius:999px 999px 0 0;
  background:var(--ddc-segment-accent);
  opacity:0;
  transform:scaleX(.35);
  transform-origin:center;
  transition:opacity .18s ease, transform .18s ease;
}

.ddc-toolbar-segment ha-icon{
  --mdc-icon-size:22px;
  flex:0 0 auto;
  color:color-mix(in oklab, var(--primary-text-color, #f8fafc) 78%, transparent);
}

.ddc-toolbar-segment span{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
}

.ddc-toolbar-segment-chevron{
  --mdc-icon-size:18px !important;
  opacity:.76;
  transition:transform .18s ease, color .16s ease;
}

.ddc-toolbar-segment:hover{
  color:var(--primary-text-color, #f8fafc);
  background:color-mix(in oklab, var(--ddc-segment-accent) 8%, transparent);
}

.ddc-toolbar-segment.active,
.ddc-toolbar-segment[aria-pressed="true"]{
  color:color-mix(in oklab, var(--ddc-segment-accent) 72%, #fff 28%);
  background:
    linear-gradient(180deg, color-mix(in oklab, var(--ddc-segment-accent) 16%, transparent), transparent 76%),
    color-mix(in oklab, var(--ddc-segment-accent) 8%, transparent);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
}

.ddc-toolbar-segment.active::after,
.ddc-toolbar-segment[aria-pressed="true"]::after{
  opacity:1;
  transform:scaleX(1);
}

.ddc-toolbar-segment.active ha-icon,
.ddc-toolbar-segment[aria-pressed="true"] ha-icon,
.ddc-toolbar-segment.active .ddc-toolbar-segment-chevron,
.ddc-toolbar-segment[aria-pressed="true"] .ddc-toolbar-segment-chevron{
  color:color-mix(in oklab, var(--ddc-segment-accent) 72%, #fff 28%);
}

.ddc-toolbar-segment.active .ddc-toolbar-segment-chevron,
.ddc-toolbar-segment[aria-pressed="true"] .ddc-toolbar-segment-chevron{
  transform:rotate(180deg);
}

.ddc-toolbar-segment:focus-visible{
  outline:none;
  box-shadow:
    inset 0 0 0 2px color-mix(in oklab, var(--ddc-segment-accent) 54%, transparent),
    inset 0 0 0 5px color-mix(in oklab, var(--ddc-segment-accent) 15%, transparent);
}

.ddc-toolbar-segments .sec-status{
  display:flex !important;
  align-items:center;
  justify-content:center;
  min-width:0;
  padding:8px;
  border:0;
  border-radius:0;
  background:transparent;
  box-shadow:none;
}

.ddc-toolbar.streamlined.v2.is-collapsed .ddc-toolbar-segments .sec-status,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-toolbar-segments .sec-status{
  display:flex !important;
}

.ddc-toolbar-segments .sec-status .ddc-sec-head{
  display:none !important;
}

.ddc-toolbar-segments .sec-status .ddc-row{
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  margin:0;
}

.ddc-toolbar-segments .store-badge,
.ddc-toolbar-segments .ddc-t-status{
  position:relative;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:9px;
  width:100%;
  min-width:122px;
  max-width:180px;
  min-height:42px;
  padding:0 14px 0 15px;
  border-radius:16px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  color:color-mix(in oklab, #86efac 70%, var(--primary-text-color, #f8fafc) 30%);
  font:800 13px/1 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  letter-spacing:0;
  background:
    linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.018)),
    color-mix(in oklab, #22c55e 10%, var(--primary-background-color, #07111d));
  border:1px solid color-mix(in oklab, #22c55e 20%, rgba(255,255,255,.12));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
}

.ddc-toolbar-segments .store-badge::before{
  content:"";
  width:10px;
  height:10px;
  flex:0 0 auto;
  border-radius:999px;
  background:#52e01c;
  box-shadow:0 0 0 5px color-mix(in oklab, #52e01c 12%, transparent);
}

.ddc-toolbar-segments .store-badge.warn{
  color:color-mix(in oklab, #fbbf24 78%, var(--primary-text-color, #f8fafc) 22%);
}

.ddc-toolbar-segments .store-badge.warn::before{
  background:#f59e0b;
  box-shadow:0 0 0 5px color-mix(in oklab, #f59e0b 14%, transparent);
}

.ddc-toolbar-segments .ddc-t-status .ddc-t-dot{
  width:10px;
  height:10px;
}

.ddc-toolbar.streamlined.v2 .ddc-toolbar-segments .sec-status,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-segments .sec-status{
  display:flex !important;
  align-items:center;
  justify-content:center;
  min-width:0;
  padding:8px;
  border:0;
  border-radius:0;
  background:transparent;
  box-shadow:none;
}

.ddc-toolbar.streamlined.v2 .ddc-toolbar-segments .sec-status .ddc-sec-head,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-segments .sec-status .ddc-sec-head{
  display:none !important;
}

.ddc-toolbar.streamlined.v2 .ddc-toolbar-segments .sec-status .ddc-row,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-segments .sec-status .ddc-row{
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  margin:0;
}

.ddc-toolbar.streamlined.v2 .ddc-toolbar-segments .store-badge,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-segments .store-badge,
.ddc-toolbar.streamlined.v2 .ddc-toolbar-segments .ddc-t-status,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-segments .ddc-t-status{
  flex-direction:row;
  width:100%;
  min-width:122px;
  max-width:180px;
  min-height:42px;
  padding:0 14px 0 15px;
  border-radius:16px;
  font-size:13px;
  line-height:1;
  text-shadow:none;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel],
.ddc-toolbar.streamlined.v3 [data-toolbar-panel]{
  display:none !important;
}

.ddc-toolbar.streamlined.v2[data-active-section="primary"] [data-toolbar-panel="primary"],
.ddc-toolbar.streamlined.v3[data-active-section="primary"] [data-toolbar-panel="primary"],
.ddc-toolbar.streamlined.v2[data-active-section="clip"] [data-toolbar-panel="clip"],
.ddc-toolbar.streamlined.v3[data-active-section="clip"] [data-toolbar-panel="clip"],
.ddc-toolbar.streamlined.v2[data-active-section="share"] [data-toolbar-panel="share"],
.ddc-toolbar.streamlined.v3[data-active-section="share"] [data-toolbar-panel="share"],
.ddc-toolbar.streamlined.v2[data-active-section="misc"] [data-toolbar-panel="misc"],
.ddc-toolbar.streamlined.v3[data-active-section="misc"] [data-toolbar-panel="misc"],
.ddc-toolbar.streamlined.v2[data-active-section="layouts"] [data-toolbar-panel="layouts"],
.ddc-toolbar.streamlined.v3[data-active-section="layouts"] [data-toolbar-panel="layouts"],
.ddc-toolbar.streamlined.v2[data-active-section="view"] [data-toolbar-panel="view"],
.ddc-toolbar.streamlined.v3[data-active-section="view"] [data-toolbar-panel="view"]{
  display:grid !important;
  animation:ddc-toolbar-panel-in .16s ease-out both;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel],
.ddc-toolbar.streamlined.v3 [data-toolbar-panel]{
  grid-template-columns:1fr;
  align-content:start;
  gap:10px;
  padding:12px;
  border-radius:18px;
  border:1px solid color-mix(in oklab, var(--pill-accent, var(--ddc-segment-accent)) 18%, rgba(255,255,255,.12));
  background:
    linear-gradient(180deg, color-mix(in oklab, var(--pill-accent, var(--ddc-segment-accent)) 8%, transparent), transparent 64%),
    color-mix(in oklab, var(--primary-background-color, #09111d) 44%, transparent);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.055),
    0 10px 24px rgba(0,0,0,.14);
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .ddc-sec-head,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .ddc-sec-head{
  display:none !important;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .ddc-row,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .ddc-row{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:8px;
  margin:0;
  grid-template-columns:none;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .btn,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .btn,
.ddc-toolbar.streamlined.v2.is-collapsed [data-toolbar-panel] .btn,
.ddc-toolbar.streamlined.v3.is-collapsed [data-toolbar-panel] .btn{
  width:auto;
  min-width:118px;
  flex:0 0 auto;
  height:40px;
  padding:0 14px;
  border-radius:14px;
  gap:8px;
  display:inline-flex !important;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .btn .label,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .btn .label,
.ddc-toolbar.streamlined.v2.is-collapsed [data-toolbar-panel] .btn .label,
.ddc-toolbar.streamlined.v3.is-collapsed [data-toolbar-panel] .btn .label{
  display:inline !important;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .btn.cta-add,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .btn.cta-add{
  min-width:142px;
  height:42px;
  grid-column:auto;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] #applyLayoutBtn,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] #applyLayoutBtn,
.ddc-toolbar.streamlined.v2 [data-toolbar-panel] #settingsBtn,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] #settingsBtn{
  grid-column:auto;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .btn.cta-add::after,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .btn.cta-add::after{
  display:none;
}

.ddc-toolbar.streamlined.v2 .sec-utils .ddc-preview-stack,
.ddc-toolbar.streamlined.v3 .sec-utils .ddc-preview-stack{
  margin-top:2px;
}

.ddc-toolbar.streamlined.v2 .sec-layouts,
.ddc-toolbar.streamlined.v3 .sec-layouts{
  grid-template-columns:1fr;
}

.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-row.center,
.ddc-toolbar.streamlined.v3 .sec-layouts .ddc-row.center{
  display:block;
}

@keyframes ddc-toolbar-panel-in{
  from{ opacity:0; transform:translateY(-4px); }
  to{ opacity:1; transform:translateY(0); }
}

@container ddc-root (max-width: 1100px){
  .ddc-toolbar-segments{
    grid-template-columns:repeat(2, minmax(150px, 1fr));
  }
  .ddc-toolbar-segments .sec-status{
    grid-column:1 / -1;
    border-top:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.18)) 62%, transparent);
  }
  .ddc-toolbar-segments .store-badge,
  .ddc-toolbar-segments .ddc-t-status{
    max-width:none;
  }
}

@container ddc-root (max-width: 660px){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    width:100%;
    margin:8px 0 10px;
    padding:9px;
    border-radius:18px;
  }
  .ddc-toolbar-segments{
    grid-template-columns:repeat(2, minmax(0, 1fr));
    border-radius:15px;
  }
  .ddc-toolbar-segment{
    min-height:52px;
    padding-inline:10px;
    gap:8px;
    font-size:11px;
  }
  .ddc-toolbar-segment ha-icon{
    --mdc-icon-size:20px;
  }
  .ddc-toolbar-segment-chevron{
    display:none;
  }
  .ddc-toolbar.streamlined.v2 [data-toolbar-panel] .ddc-row,
  .ddc-toolbar.streamlined.v3 [data-toolbar-panel] .ddc-row{
    display:grid;
    grid-template-columns:1fr;
  }
  .ddc-toolbar.streamlined.v2 [data-toolbar-panel] .btn,
  .ddc-toolbar.streamlined.v3 [data-toolbar-panel] .btn{
    width:100%;
  }
}

@media (prefers-reduced-motion: reduce){
  .ddc-toolbar.streamlined.v2 [data-toolbar-panel],
  .ddc-toolbar.streamlined.v3 [data-toolbar-panel]{
    animation:none !important;
  }
  .ddc-toolbar-segment,
  .ddc-toolbar-segment::after,
  .ddc-toolbar-segment-chevron{
    transition:none !important;
  }
}

/* Compact dropdown mode for the edit toolbar */
.ddc-toolbar.streamlined.v2,
.ddc-toolbar.streamlined.v3{
  --ddc-toolbar-surface: color-mix(in oklab, var(--card-background-color, #ffffff) 90%, var(--primary-background-color, #f6f8fb) 10%);
  --ddc-toolbar-elevated: color-mix(in oklab, var(--card-background-color, #ffffff) 84%, var(--primary-color, #8b5cf6) 3%);
  --ddc-toolbar-text: var(--primary-text-color, #111827);
  --ddc-toolbar-muted: var(--secondary-text-color, #64748b);
  --ddc-toolbar-line: color-mix(in oklab, var(--divider-color, rgba(15,23,42,.16)) 78%, transparent);
  --ddc-toolbar-shadow: 0 14px 34px rgba(15,23,42,.16), inset 0 1px 0 rgba(255,255,255,.32);
  --ddc-dropdown-shadow: 0 20px 44px rgba(15,23,42,.22), inset 0 1px 0 rgba(255,255,255,.28);
  gap:0;
  padding:8px;
  border-radius:20px;
  background:
    radial-gradient(circle at 14% 0%, color-mix(in oklab, var(--ddc-segment-accent) 8%, transparent), transparent 34%),
    linear-gradient(180deg, color-mix(in oklab, var(--ddc-toolbar-surface) 96%, rgba(255,255,255,.08)), var(--ddc-toolbar-surface));
  border-color:var(--ddc-toolbar-line);
  box-shadow:var(--ddc-toolbar-shadow);
  overflow:visible;
}

.ddc-toolbar.streamlined.v2.is-collapsed,
.ddc-toolbar.streamlined.v3.is-collapsed{
  gap:0;
  padding:8px;
  overflow:visible;
}

.ddc-toolbar-segments{
  min-height:48px;
  border-radius:16px;
  border-color:var(--ddc-toolbar-line);
  background:
    linear-gradient(180deg, color-mix(in oklab, var(--ddc-toolbar-elevated) 96%, rgba(255,255,255,.08)), var(--ddc-toolbar-elevated));
  box-shadow:inset 0 1px 0 color-mix(in oklab, #fff 36%, transparent);
}

.ddc-toolbar-segment{
  min-height:48px;
  padding:0 16px;
  color:color-mix(in oklab, var(--ddc-toolbar-text) 82%, transparent);
  border-right-color:var(--ddc-toolbar-line);
}

.ddc-toolbar-segment ha-icon{
  color:color-mix(in oklab, var(--ddc-toolbar-text) 68%, transparent);
}

.ddc-toolbar-segment:hover{
  color:var(--ddc-toolbar-text);
  background:color-mix(in oklab, var(--ddc-segment-accent) 9%, transparent);
}

.ddc-toolbar-segment.active,
.ddc-toolbar-segment[aria-pressed="true"]{
  color:color-mix(in oklab, var(--ddc-segment-accent) 72%, var(--ddc-toolbar-text) 28%);
  background:
    linear-gradient(180deg, color-mix(in oklab, var(--ddc-segment-accent) 15%, transparent), transparent 78%),
    color-mix(in oklab, var(--ddc-segment-accent) 8%, transparent);
}

.ddc-toolbar-segment.active ha-icon,
.ddc-toolbar-segment[aria-pressed="true"] ha-icon,
.ddc-toolbar-segment.active .ddc-toolbar-segment-chevron,
.ddc-toolbar-segment[aria-pressed="true"] .ddc-toolbar-segment-chevron{
  color:color-mix(in oklab, var(--ddc-segment-accent) 74%, var(--ddc-toolbar-text) 26%);
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel],
.ddc-toolbar.streamlined.v3 [data-toolbar-panel]{
  position:absolute;
  top:var(--ddc-toolbar-dropdown-top, calc(100% + 8px));
  left:var(--ddc-toolbar-dropdown-left, 8px);
  width:var(--ddc-toolbar-dropdown-width, min(420px, calc(100% - 16px)));
  max-width:calc(100% - 16px);
  max-height:min(58vh, 520px);
  overflow:auto;
  z-index:60;
  padding:10px;
  border-radius:16px;
  border:1px solid color-mix(in oklab, var(--pill-accent, var(--ddc-segment-accent)) 24%, var(--ddc-toolbar-line));
  background:
    linear-gradient(180deg, color-mix(in oklab, var(--pill-accent, var(--ddc-segment-accent)) 7%, transparent), transparent 58%),
    color-mix(in oklab, var(--card-background-color, #ffffff) 90%, var(--primary-background-color, #f6f8fb) 10%);
  box-shadow:var(--ddc-dropdown-shadow);
  backdrop-filter:blur(18px) saturate(1.05);
  -webkit-backdrop-filter:blur(18px) saturate(1.05);
  transform-origin:var(--ddc-toolbar-dropdown-origin, top center);
}

.ddc-toolbar.streamlined.v2:not([data-dropdown-open="1"]) [data-toolbar-panel],
.ddc-toolbar.streamlined.v3:not([data-dropdown-open="1"]) [data-toolbar-panel]{
  display:none !important;
}

.ddc-toolbar.streamlined.v2[data-dropdown-open="1"][data-active-section="primary"] [data-toolbar-panel="primary"],
.ddc-toolbar.streamlined.v3[data-dropdown-open="1"][data-active-section="primary"] [data-toolbar-panel="primary"],
.ddc-toolbar.streamlined.v2[data-dropdown-open="1"][data-active-section="clip"] [data-toolbar-panel="clip"],
.ddc-toolbar.streamlined.v3[data-dropdown-open="1"][data-active-section="clip"] [data-toolbar-panel="clip"],
.ddc-toolbar.streamlined.v2[data-dropdown-open="1"][data-active-section="share"] [data-toolbar-panel="share"],
.ddc-toolbar.streamlined.v3[data-dropdown-open="1"][data-active-section="share"] [data-toolbar-panel="share"],
.ddc-toolbar.streamlined.v2[data-dropdown-open="1"][data-active-section="misc"] [data-toolbar-panel="misc"],
.ddc-toolbar.streamlined.v3[data-dropdown-open="1"][data-active-section="misc"] [data-toolbar-panel="misc"],
.ddc-toolbar.streamlined.v2[data-dropdown-open="1"][data-active-section="layouts"] [data-toolbar-panel="layouts"],
.ddc-toolbar.streamlined.v3[data-dropdown-open="1"][data-active-section="layouts"] [data-toolbar-panel="layouts"],
.ddc-toolbar.streamlined.v2[data-dropdown-open="1"][data-active-section="view"] [data-toolbar-panel="view"],
.ddc-toolbar.streamlined.v3[data-dropdown-open="1"][data-active-section="view"] [data-toolbar-panel="view"]{
  display:grid !important;
  animation:ddc-toolbar-dropdown-in .14s ease-out both;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .ddc-row,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .ddc-row{
  gap:8px;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .btn,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .btn,
.ddc-toolbar.streamlined.v2.is-collapsed [data-toolbar-panel] .btn,
.ddc-toolbar.streamlined.v3.is-collapsed [data-toolbar-panel] .btn{
  min-width:112px;
  height:38px;
  border-color:color-mix(in oklab, var(--divider-color, rgba(15,23,42,.16)) 72%, transparent);
  background:
    linear-gradient(180deg, color-mix(in oklab, #fff 22%, transparent), transparent),
    color-mix(in oklab, var(--card-background-color, #ffffff) 86%, var(--primary-background-color, #f6f8fb) 14%);
  color:var(--ddc-toolbar-text);
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .btn:hover,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .btn:hover{
  border-color:color-mix(in oklab, var(--pill-accent, var(--ddc-segment-accent)) 34%, transparent);
  background:color-mix(in oklab, var(--pill-accent, var(--ddc-segment-accent)) 10%, var(--card-background-color, #fff));
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .btn.info,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .btn.info,
.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .btn.danger,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .btn.danger{
  color:var(--ddc-toolbar-text);
}

.ddc-toolbar.streamlined.v2 .sec-utils .ddc-preview-stack,
.ddc-toolbar.streamlined.v3 .sec-utils .ddc-preview-stack{
  max-height:320px;
  overflow:auto;
}

.ddc-toolbar-segments .store-badge,
.ddc-toolbar-segments .ddc-t-status{
  min-height:36px;
  color:color-mix(in oklab, #15803d 74%, var(--ddc-toolbar-text) 26%);
  background:
    linear-gradient(180deg, color-mix(in oklab, #fff 24%, transparent), transparent),
    color-mix(in oklab, #22c55e 10%, var(--card-background-color, #ffffff));
  border-color:color-mix(in oklab, #22c55e 28%, var(--ddc-toolbar-line));
}

@media (prefers-color-scheme: dark){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    --ddc-toolbar-surface: color-mix(in oklab, var(--card-background-color, #101722) 88%, var(--primary-background-color, #050811) 12%);
    --ddc-toolbar-elevated: color-mix(in oklab, var(--card-background-color, #101722) 86%, var(--primary-color, #8b5cf6) 7%);
    --ddc-toolbar-text: var(--primary-text-color, #f8fafc);
    --ddc-toolbar-muted: var(--secondary-text-color, #a7b1c2);
    --ddc-toolbar-line: color-mix(in oklab, var(--divider-color, rgba(255,255,255,.18)) 72%, transparent);
    --ddc-toolbar-shadow: 0 16px 38px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.08);
    --ddc-dropdown-shadow: 0 20px 44px rgba(0,0,0,.36), inset 0 1px 0 rgba(255,255,255,.08);
  }

  .ddc-toolbar.streamlined.v2 [data-toolbar-panel],
  .ddc-toolbar.streamlined.v3 [data-toolbar-panel]{
    background:
      linear-gradient(180deg, color-mix(in oklab, var(--pill-accent, var(--ddc-segment-accent)) 10%, transparent), transparent 58%),
      color-mix(in oklab, var(--card-background-color, #101722) 88%, var(--primary-background-color, #050811) 12%);
  }

  .ddc-toolbar.streamlined.v2 [data-toolbar-panel] .btn,
  .ddc-toolbar.streamlined.v3 [data-toolbar-panel] .btn,
  .ddc-toolbar.streamlined.v2.is-collapsed [data-toolbar-panel] .btn,
  .ddc-toolbar.streamlined.v3.is-collapsed [data-toolbar-panel] .btn{
    background:
      linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.014)),
      color-mix(in oklab, var(--primary-background-color, #050811) 30%, transparent);
  }

  .ddc-toolbar-segments .store-badge,
  .ddc-toolbar-segments .ddc-t-status{
    color:color-mix(in oklab, #86efac 74%, var(--ddc-toolbar-text) 26%);
    background:
      linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.014)),
      color-mix(in oklab, #22c55e 10%, var(--primary-background-color, #050811));
  }

  .ddc-toolbar-settings-main{
    background:
      linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #8b5cf6) 22%, transparent), transparent 76%),
      color-mix(in oklab, var(--primary-color, #8b5cf6) 12%, var(--ddc-toolbar-elevated));
  }

  .ddc-toolbar-settings-main .ddc-toolbar-settings-icon{
    background:color-mix(in oklab, var(--primary-color, #8b5cf6) 18%, var(--primary-background-color, #050811));
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.08),
      0 0 0 1px color-mix(in oklab, var(--primary-color, #8b5cf6) 32%, transparent);
  }
}

@keyframes ddc-toolbar-dropdown-in{
  from{ opacity:0; transform:translateY(-5px) scale(.98); }
  to{ opacity:1; transform:translateY(0) scale(1); }
}

@container ddc-root (max-width: 660px){
  .ddc-toolbar.streamlined.v2 [data-toolbar-panel],
  .ddc-toolbar.streamlined.v3 [data-toolbar-panel]{
    left:8px;
    width:calc(100% - 16px);
    max-width:calc(100% - 16px);
  }
}

.ddc-toolbar-segments{
  display:flex;
  flex-wrap:nowrap;
  align-items:stretch;
  overflow:hidden;
  scrollbar-width:none;
  -ms-overflow-style:none;
}

.ddc-toolbar-segments::-webkit-scrollbar{
  display:none;
}

.ddc-toolbar-segment{
  flex:1 1 max-content;
  width:auto;
  min-width:0;
}

.ddc-toolbar-segment[data-toolbar-segment="share"]{
  flex:1.18 1 max-content;
}

.ddc-toolbar-segment[data-toolbar-segment="misc"],
.ddc-toolbar-segment[data-toolbar-segment="layouts"],
.ddc-toolbar-segment[data-toolbar-segment="view"]{
  flex:.78 1 max-content;
}

.ddc-toolbar-settings-main{
  appearance:none;
  -webkit-appearance:none;
  position:relative;
  flex:.92 1 max-content;
  width:auto;
  min-width:0;
  min-height:48px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:0 16px;
  border:0;
  border-right:1px solid var(--ddc-toolbar-line);
  border-left:1px solid var(--ddc-toolbar-line);
  background:
    linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #8b5cf6) 18%, transparent), transparent 76%),
    color-mix(in oklab, var(--primary-color, #8b5cf6) 10%, var(--ddc-toolbar-elevated));
  color:color-mix(in oklab, var(--primary-color, #8b5cf6) 66%, var(--ddc-toolbar-text) 34%);
  font:900 13px/1 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  letter-spacing:.045em;
  text-transform:uppercase;
  white-space:nowrap;
  cursor:pointer;
  transition:
    color .16s ease,
    background .18s ease,
    box-shadow .18s ease,
    transform .12s ease;
}

.ddc-toolbar-settings-main > span:not(.ddc-toolbar-settings-icon){
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
}

.ddc-toolbar-settings-main::after{
  content:"";
  position:absolute;
  left:24px;
  right:24px;
  bottom:0;
  height:3px;
  border-radius:999px 999px 0 0;
  background:var(--primary-color, #8b5cf6);
  opacity:.9;
  box-shadow:0 -8px 18px color-mix(in oklab, var(--primary-color, #8b5cf6) 24%, transparent);
}

.ddc-toolbar-settings-main .ddc-toolbar-settings-icon{
  width:30px;
  height:30px;
  display:inline-grid;
  place-items:center;
  border-radius:999px;
  background:color-mix(in oklab, var(--primary-color, #8b5cf6) 13%, var(--card-background-color, #ffffff));
  box-shadow:
    inset 0 1px 0 color-mix(in oklab, #fff 32%, transparent),
    0 0 0 1px color-mix(in oklab, var(--primary-color, #8b5cf6) 24%, transparent);
}

.ddc-toolbar-settings-main ha-icon{
  --mdc-icon-size:19px;
  color:currentColor;
}

.ddc-toolbar-settings-main:hover{
  color:color-mix(in oklab, var(--primary-color, #8b5cf6) 76%, var(--ddc-toolbar-text) 24%);
  background:
    linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #8b5cf6) 24%, transparent), transparent 76%),
    color-mix(in oklab, var(--primary-color, #8b5cf6) 15%, var(--ddc-toolbar-elevated));
  box-shadow:inset 0 1px 0 color-mix(in oklab, #fff 24%, transparent);
}

.ddc-toolbar-settings-main:active{
  transform:translateY(1px);
}

.ddc-toolbar-settings-main:focus-visible{
  outline:none;
  box-shadow:
    inset 0 0 0 2px color-mix(in oklab, var(--primary-color, #8b5cf6) 54%, transparent),
    inset 0 0 0 5px color-mix(in oklab, var(--primary-color, #8b5cf6) 15%, transparent);
}

.ddc-toolbar-segments .sec-status,
.ddc-toolbar.streamlined.v2 .ddc-toolbar-segments .sec-status,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-segments .sec-status{
  grid-column:auto !important;
  flex:.92 1 max-content;
  align-self:stretch;
  margin-left:0;
  min-width:0;
  border-top:0 !important;
  border-left:1px solid var(--ddc-toolbar-line);
}

.ddc-toolbar-segments .store-badge,
.ddc-toolbar-segments .ddc-t-status,
.ddc-toolbar.streamlined.v2 .ddc-toolbar-segments .store-badge,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-segments .store-badge{
  min-width:0;
  max-width:none;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .sec-layouts,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .sec-layouts{
  position:static;
  display:grid !important;
  width:100%;
  max-width:none;
  max-height:none;
  margin-top:10px;
  overflow:visible;
  border-radius:14px;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .sec-layouts .ddc-sec-head,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .sec-layouts .ddc-sec-head{
  display:inline-flex !important;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel] .sec-layouts .ddc-row,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel] .sec-layouts .ddc-row{
  display:block;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel="misc"] .ddc-row,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel="misc"] .ddc-row{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:8px;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel="misc"] .btn,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel="misc"] .btn{
  width:100%;
  min-width:0;
}

.ddc-toolbar.streamlined.v2 .sec-layouts[data-toolbar-panel="layouts"],
.ddc-toolbar.streamlined.v3 .sec-layouts[data-toolbar-panel="layouts"]{
  grid-template-columns:1fr;
  align-items:stretch;
  gap:10px;
  margin-top:0;
  overflow:visible;
}

.ddc-toolbar.streamlined.v2 .sec-layouts[data-toolbar-panel="layouts"] .ddc-row.center,
.ddc-toolbar.streamlined.v3 .sec-layouts[data-toolbar-panel="layouts"] .ddc-row.center{
  display:block;
}

.ddc-toolbar.streamlined.v2 .sec-layouts[data-toolbar-panel="layouts"] .ddc-switcher-inline,
.ddc-toolbar.streamlined.v3 .sec-layouts[data-toolbar-panel="layouts"] .ddc-switcher-inline{
  grid-template-columns:auto minmax(0, 1fr) auto auto auto;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel="view"] .ddc-preview-stack,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel="view"] .ddc-preview-stack{
  margin:0;
  max-height:none;
  overflow:visible;
}

.ddc-toolbar.streamlined.v2 [data-toolbar-panel="view"] .ddc-preview-modes,
.ddc-toolbar.streamlined.v3 [data-toolbar-panel="view"] .ddc-preview-modes{
  grid-template-columns:repeat(4, minmax(0, 1fr));
}

@container ddc-root (max-width: 640px){
  .ddc-toolbar-segment,
  .ddc-toolbar-settings-main{
    padding-inline:9px;
    gap:6px;
    font-size:10.5px;
    letter-spacing:.018em;
  }

  .ddc-toolbar-segment ha-icon{
    --mdc-icon-size:18px;
  }

  .ddc-toolbar-segment-chevron{
    --mdc-icon-size:14px !important;
  }

  .ddc-toolbar-settings-main .ddc-toolbar-settings-icon{
    width:25px;
    height:25px;
  }

  .ddc-toolbar-settings-main ha-icon{
    --mdc-icon-size:17px;
  }

  .ddc-toolbar-segments .store-badge,
  .ddc-toolbar-segments .ddc-t-status,
  .ddc-toolbar.streamlined.v2 .ddc-toolbar-segments .store-badge,
  .ddc-toolbar.streamlined.v3 .ddc-toolbar-segments .store-badge{
    min-width:0;
    padding-inline:10px;
    font-size:12px;
  }
}

@container ddc-root (max-width: 760px){
  .ddc-toolbar-segment,
  .ddc-toolbar-settings-main{
    padding-inline:6px;
    gap:4px;
    font-size:9.5px;
    letter-spacing:0;
  }

  .ddc-toolbar-segment ha-icon{
    --mdc-icon-size:16px;
  }

  .ddc-toolbar-segment-chevron{
    --mdc-icon-size:12px !important;
  }

  .ddc-toolbar-settings-main{
    min-height:48px;
  }

  .ddc-toolbar-settings-main .ddc-toolbar-settings-icon{
    width:22px;
    height:22px;
  }

  .ddc-toolbar-settings-main ha-icon{
    --mdc-icon-size:15px;
  }

  .ddc-toolbar-segments .store-badge,
  .ddc-toolbar-segments .ddc-t-status,
  .ddc-toolbar.streamlined.v2 .ddc-toolbar-segments .store-badge,
  .ddc-toolbar.streamlined.v3 .ddc-toolbar-segments .store-badge{
    padding-inline:6px;
    font-size:10px;
  }

  .ddc-toolbar.streamlined.v2 .sec-layouts[data-toolbar-panel="layouts"] .ddc-switcher-inline,
  .ddc-toolbar.streamlined.v3 .sec-layouts[data-toolbar-panel="layouts"] .ddc-switcher-inline{
    grid-template-columns:1fr;
  }

  .ddc-toolbar.streamlined.v2 [data-toolbar-panel="view"] .ddc-preview-modes,
  .ddc-toolbar.streamlined.v3 [data-toolbar-panel="view"] .ddc-preview-modes,
  .ddc-toolbar.streamlined.v2 [data-toolbar-panel="misc"] .ddc-row,
  .ddc-toolbar.streamlined.v3 [data-toolbar-panel="misc"] .ddc-row{
    grid-template-columns:repeat(2, minmax(0, 1fr));
  }
}

@container ddc-root (max-width: 560px){
  .ddc-toolbar-segment > span,
  .ddc-toolbar-settings-main > span:not(.ddc-toolbar-settings-icon){
    display:none;
  }

  .ddc-toolbar-segment,
  .ddc-toolbar-settings-main{
    padding-inline:5px;
  }

  .ddc-toolbar-segment-chevron{
    display:none;
  }

  .ddc-toolbar-segments .store-badge,
  .ddc-toolbar-segments .ddc-t-status,
  .ddc-toolbar.streamlined.v2 .ddc-toolbar-segments .store-badge,
  .ddc-toolbar.streamlined.v3 .ddc-toolbar-segments .store-badge{
    font-size:9px;
  }
}

@media (prefers-color-scheme: dark){
  .ddc-toolbar-settings-main{
    background:
      linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #8b5cf6) 22%, transparent), transparent 76%),
      color-mix(in oklab, var(--primary-color, #8b5cf6) 12%, var(--ddc-toolbar-elevated));
  }

  .ddc-toolbar-settings-main .ddc-toolbar-settings-icon{
    background:color-mix(in oklab, var(--primary-color, #8b5cf6) 18%, var(--primary-background-color, #050811));
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.08),
      0 0 0 1px color-mix(in oklab, var(--primary-color, #8b5cf6) 32%, transparent);
  }
}

@media (prefers-reduced-motion: reduce){
  .ddc-toolbar-settings-main,
  .ddc-toolbar-settings-main::after{
    transition:none !important;
  }
}

:host([ddc-toolbar-follow]) .ddc-root.ddc-edit-mode-active{
  padding-top:var(--ddc-toolbar-height, 0px);
}

:host([ddc-toolbar-follow]) .ddc-toolbar.streamlined.v2,
:host([ddc-toolbar-follow]) .ddc-toolbar.streamlined.v3{
  --ddc-toolbar-follow-pad: clamp(20px, 1.6vw, 32px);
  position:fixed;
  top:calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px));
  left:calc(var(--ddc-left-gutter, 0px) + max(env(safe-area-inset-left, 0px), 0px) + var(--ddc-toolbar-follow-pad));
  right:calc(var(--ddc-right-gutter, 0px) + max(env(safe-area-inset-right, 0px), 0px) + var(--ddc-toolbar-follow-pad));
  width:auto;
  max-width:none;
  margin:0;
  box-sizing:border-box;
  z-index:10040;
}

@media (max-width: 768px){
  :host([ddc-toolbar-follow]) .ddc-toolbar.streamlined.v2,
  :host([ddc-toolbar-follow]) .ddc-toolbar.streamlined.v3{
    --ddc-toolbar-follow-pad:12px;
    left:calc(max(env(safe-area-inset-left, 0px), 0px) + var(--ddc-toolbar-follow-pad));
    right:calc(max(env(safe-area-inset-right, 0px), 0px) + var(--ddc-toolbar-follow-pad));
  }
}

/* ===== DDC Toolbar — END ===== */





      /* ------- Rest of your styles remain unchanged ------- */

      .card-container{
        position: relative;
        transform-origin: top left;
        padding: 0;
        border: 1px solid var(--divider-color);
        background: var(--ddc-bg, transparent);
        width: auto; height: auto; border-radius: 12px; overflow: hidden;
        isolation: isolate; z-index: 0; -webkit-touch-callout: none;
        user-select: none;
      }
      .card-container::before{
        content:'';
        position:absolute; inset:0;
        background-image:
          linear-gradient(var(--ddc-grid-color, rgba(120,120,120,.25)) 1px, transparent 1px),
          linear-gradient(90deg, var(--ddc-grid-color, rgba(120,120,120,.25)) 1px, transparent 1px),
          linear-gradient(var(--ddc-grid-major-color, rgba(120,120,120,.32)) 1px, transparent 1px),
          linear-gradient(90deg, var(--ddc-grid-major-color, rgba(120,120,120,.32)) 1px, transparent 1px);
        background-size:
          var(--ddc-grid-size) var(--ddc-grid-size),
          var(--ddc-grid-size) var(--ddc-grid-size),
          var(--ddc-grid-major-size) var(--ddc-grid-major-size),
          var(--ddc-grid-major-size) var(--ddc-grid-major-size);
        background-position: 0 0;
        pointer-events:none;
        opacity:0;
        transition: opacity .15s;
        z-index:1;
      }
      .card-container.grid-on::before{ opacity:.28; }
      .card-container.ddc-middle-pan-active,
      .ddc-scale-outer.ddc-middle-pan-active{
        cursor:grabbing !important;
        user-select:none;
      }
      .card-container.ddc-middle-pan-active *,
      .ddc-scale-outer.ddc-middle-pan-active *{
        cursor:grabbing !important;
      }

      .card-container::after{
        content:'';
        position:absolute; inset:0;
        pointer-events:none;
        z-index:0;
        opacity: var(--ddc-bg-opacity, 1);
        background-image: var(--ddc-bg-image, none);
        background-repeat: var(--ddc-bg-repeat, no-repeat);
        background-size: var(--ddc-bg-size, cover);
        background-position: var(--ddc-bg-position, center center);
        background-attachment: var(--ddc-bg-attachment, scroll);
        filter: var(--ddc-bg-filter, none);
      }

      /* Dynamic background host (particles.js / YouTube) */
      .card-container .ddc-bg-host{
        position: absolute;
        inset: 0;
        z-index: 0;               /* under grid (::before, z=1) and cards (z=2) */
        overflow: hidden;
        pointer-events: none;     /* don’t block card drag/drop */
        opacity: var(--ddc-bg-opacity, 1);
      }

      .card-container .ddc-bg-host > *{
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      /* When an image background is active, we don’t need the dynamic host */
      .card-container.has-bg-image .ddc-bg-host{ display: none; }

      .ddc-page-bg-host{
        position: fixed;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
        opacity: var(--ddc-bg-opacity, 1);
        display: none;
      }

      .ddc-page-bg-host > *{
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      .card-wrapper{
        position:absolute;
        left: 0; top: 0;
        box-sizing: border-box;
        border:2px solid var(--ddc-card-border-color, transparent);
        background:var(--ddc-card-local-bg, var(--ddc-card-bg, var(--card-background-color)));
        cursor:grab;
        overflow:auto;
        border-radius:14px;
        /* Allow a custom drop shadow via --ddc-card-shadow. Fallback to the HA default if unset */
        box-shadow: var(--ddc-card-local-shadow, var(--ddc-card-shadow, var(--ha-card-box-shadow,0 2px 12px rgba(0,0,0,.18))));
        will-change:auto; touch-action:auto;
        /*
         * Ensure cards are always layered above the interactive grid overlay.  The
         * selectable grid canvas uses a z-index of 5 (see .ddc-grid-canvas).  By
         * default the card wrappers were assigned a z-index of 2, causing
         * newly added cards to appear behind the overlay until enough cards
         * were added to raise the maximum z-index above 5.  Raising this
         * baseline to 6 ensures all cards start above the grid overlay and
         * remain interactive without requiring the user to add multiple cards.
         */
        z-index:6;
      }
      .card-wrapper.dragging{ cursor:grabbing; touch-action: none; will-change:transform; }
      .card-wrapper.editing.selected{
        border-color:var(--primary-color,#03a9f4);
        box-shadow:0 0 0 2px var(--primary-color,#03a9f4)!important;
      }

      /* CARD WRAPPER FOR BSCKGORUND COLORS START */

      /* Make the inner card and its header fully transparent
        so the wrapper’s gradient is the only background shown. */
      /*
       * Make the inner card and its header fully transparent so the wrapper’s gradient is the only
       * background shown. However, exclude edit-only overlay UI so those
       * layers do not accidentally paint above the actual card contents.
       */
      .card-wrapper > *:not(.ddc-card-settings):not(.delete-handle):not(.resize-handle):not(.ddc-card-anchors):not(.shield):not(.chip) {
        /* Critical: do NOT give the card a background via this variable.
          Some headers read --ha-card-background when header-color is unset. */
        --ha-card-background: var(--ddc-card-inner-bg, transparent) !important;

        /* Many cards also set a background on the host element; neutralize it. */
        background: var(--ddc-card-inner-bg, transparent) !important;
      }

      /* Ensure <ha-card> itself doesn't repaint a body background */
      .card-wrapper ha-card {
        background: var(--ddc-card-inner-bg, transparent) !important;
      }

      /* Make header strips transparent regardless of how they are implemented */
      .card-wrapper ::part(header),
      .card-wrapper ::part(card-header),
      .card-wrapper .card-header {
        background: var(--ddc-card-inner-bg, transparent) !important;
        box-shadow: none !important;
        border-bottom: none !important;
      }

      /* CARD WRAPPER FOR BSCKGORUND COLORS END */

      /* ---- empty-state of the card ---- */
      .btn.cta-empty{
        position:relative;
        padding:12px 16px;
        font-weight:600;
        border-radius:14px;
        display:inline-flex !important;
        align-items:center;
        gap:8px;
        box-shadow:0 6px 18px rgba(3,169,244,.25);
      }
      .btn.cta-empty::after{
        content:"";
        position:absolute; inset:-4px;
        border-radius:16px;
        border:2px solid rgba(3,169,244,.35);
        animation: ddc-cta-pulse 1.8s ease-out infinite;
        pointer-events:none;
      }
      @keyframes ddc-cta-pulse{
        0%   { opacity:.85; transform:scale(.98); }
        70%  { opacity:0;   transform:scale(1.12); }
        100% { opacity:0;   transform:scale(1.18); }
      }

      /* pleasant buttons: info (light blue) & warning (orange) */
      .btn.info:hover{ filter: brightness(1.06); transform: translateY(-1px); box-shadow:0 4px 14px rgba(0,0,0,.18) }
      .btn.info:active{ transform: translateY(0) }
      .btn.warning:hover{ filter: brightness(1.07); transform: translateY(-1px); box-shadow:0 4px 14px rgba(0,0,0,.18) }
      .btn.warning:active{ transform: translateY(0) }

      /* ---- chip ---- */
      .chip{
        position:absolute;
        top:50%; left:50%;
        transform:translate(-50%, -50%) scale(var(--ddc-edit-ui-scale, 1));
        transform-origin:center center;
        display:flex; gap:6px; flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        width:max-content;
        max-width:calc(100% - 28px);
        padding:8px 10px;
        border-radius:16px;
        background:linear-gradient(135deg, rgba(13,18,28,.78) 0%, rgba(29,36,48,.88) 100%);
        border:1px solid rgba(255,255,255,.16);
        box-shadow:0 10px 28px rgba(0,0,0,.28);
        backdrop-filter:blur(10px);
        opacity:0;
        visibility:hidden;
        transition:opacity .12s ease, visibility 0s linear .12s;
        z-index:30; pointer-events: none;
      }
      .card-wrapper.editing:hover .chip,
      .card-wrapper.editing.selected .chip,
      .card-wrapper.editing:focus-within .chip{
        opacity:1;
        visibility:visible;
        pointer-events:auto;
        transition-delay:0s;
      }
      .chip .mini{
        display:flex; align-items:center; justify-content:center;
        width:32px; height:32px;
        background:linear-gradient(135deg, rgba(24,25,27,.7) 0%, rgba(40,41,43,.9) 100%);
        color:#fff; border:1px solid rgba(255,255,255,.18); border-radius:8px; cursor:pointer;
        box-shadow:0 2px 4px rgba(0,0,0,.25);
        transition:background .15s, box-shadow .15s, border-color .15s;
      }
      .chip .mini span{ display:none; }
      .chip .mini:hover{
        transform:none;
        background:linear-gradient(135deg, rgba(24,25,27,.85) 0%, rgba(40,41,43,1) 100%);
        box-shadow:0 3px 8px rgba(0,0,0,.4);
      }
      .chip .mini ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; }
      .chip .mini.danger{
        background:linear-gradient(135deg, rgba(236,72,72,.9) 0%, rgba(255,105,97,1) 100%);
        border-color:rgba(255,255,255,.22);
      }
      .chip .mini.danger:hover{
        background:linear-gradient(135deg, rgba(236,72,72,1) 0%, rgba(255,105,97,1) 100%);
      }
      .chip .mini.pill{ padding:0; }

	      /* Edit highlight */
	      .card-wrapper.editing{ border-color:var(--primary-color,#03a9f4); touch-action: none; overflow: hidden; }
	      .card-wrapper.editing::after{
	        content:""; position:absolute; inset:0; border:1px dashed var(--primary-color,#03a9f4);
	        border-radius:12px; pointer-events:none; opacity:.35; z-index:5; box-sizing:border-box;
	      }

	      .ddc-root.ddc-edit-mode-active.ddc-preview-active .card-wrapper.ddc-preview-outside-active:not(.selected):not(.dragging){
	        opacity:.58;
	        border-color:rgba(102, 225, 255, .54);
	        box-shadow:
	          var(--ddc-card-local-shadow, var(--ddc-card-shadow, var(--ha-card-box-shadow,0 2px 12px rgba(0,0,0,.18)))),
	          0 0 0 1px rgba(102, 225, 255, .42),
	          0 0 0 9px rgba(102, 225, 255, .07);
	      }
	      .ddc-root.ddc-edit-mode-active.ddc-preview-active .card-wrapper.ddc-preview-outside-active:not(.selected):not(.dragging).editing::after{
	        border-color:rgba(102, 225, 255, .86);
	        opacity:.62;
	      }
	      .ddc-root.ddc-edit-mode-active.ddc-preview-active .card-wrapper.ddc-preview-outside-active:hover,
	      .ddc-root.ddc-edit-mode-active.ddc-preview-active .card-wrapper.ddc-preview-outside-active:focus-within,
	      .ddc-root.ddc-edit-mode-active.ddc-preview-active .card-wrapper.ddc-preview-outside-active.selected,
	      .ddc-root.ddc-edit-mode-active.ddc-preview-active .card-wrapper.ddc-preview-outside-active.dragging{
	        opacity:1;
	      }

	      .card-wrapper{
	        --ddc-anchor-offset:14px;
	        --ddc-anchor-size:24px;
	      }
      .ddc-card-anchors{
        position:absolute;
        inset:0;
        z-index:10020;
        display:none;
        pointer-events:none;
        opacity:0;
        visibility:hidden;
        transition:opacity .12s ease, visibility 0s linear .12s;
      }
      .card-wrapper.editing .ddc-card-anchors{
        display:block;
      }
      .card-wrapper.editing:hover .ddc-card-anchors,
      .card-wrapper.editing.selected .ddc-card-anchors,
      .card-wrapper.editing:focus-within .ddc-card-anchors,
      .card-container.ddc-connector-draw-mode .card-wrapper.editing .ddc-card-anchors,
      .card-container.ddc-connector-anchor-dragging .card-wrapper.editing .ddc-card-anchors{
        opacity:1;
        visibility:visible;
        transition-delay:0s;
      }
      .ddc-card-anchor{
        position:absolute;
        width:var(--ddc-anchor-size);
        height:var(--ddc-anchor-size);
        padding:0;
        border:0;
        border-radius:9px;
        appearance:none;
        -webkit-appearance:none;
        display:grid;
        place-items:center;
        color:var(--primary-color, #ff9800);
        background:transparent;
        pointer-events:auto;
        cursor:crosshair;
        opacity:.78;
        transform:translate(-50%, -50%) scale(var(--ddc-edit-anchor-scale-idle, .88));
        transition:opacity .15s ease, transform .15s ease, filter .15s ease;
      }
      .ddc-card-anchor[data-anchor="top"]{ left:50%; top:var(--ddc-anchor-offset); }
      .ddc-card-anchor[data-anchor="right"]{ left:calc(100% - var(--ddc-anchor-offset)); top:50%; }
      .ddc-card-anchor[data-anchor="bottom"]{ left:50%; top:calc(100% - var(--ddc-anchor-offset)); }
      .ddc-card-anchor[data-anchor="left"]{ left:var(--ddc-anchor-offset); top:50%; }
      .ddc-card-anchor::before{
        content:"";
        position:absolute;
        inset:2px;
        border-radius:inherit;
        background:
          linear-gradient(135deg, rgba(255,255,255,.92), rgba(255,255,255,.14) 35%, transparent 36%),
          color-mix(in oklab, currentColor 86%, #ffffff 10%);
        box-shadow:
          0 0 0 1.5px color-mix(in oklab, currentColor 54%, rgba(255,255,255,.62)),
          0 8px 18px rgba(0,0,0,.24),
          0 0 0 6px color-mix(in oklab, currentColor 16%, transparent);
      }
      .ddc-card-anchor::after{
        content:"";
        position:absolute;
        width:8px;
        height:8px;
        border-radius:3px;
        background:rgba(255,255,255,.92);
        box-shadow:
          inset 0 -1px 0 rgba(0,0,0,.08),
          0 0 0 1px rgba(0,0,0,.12);
      }
      .card-wrapper.editing:not(:hover):not(.selected) .ddc-card-anchor{
        opacity:.52;
        transform:translate(-50%, -50%) scale(var(--ddc-edit-anchor-scale-muted, .76));
      }
      .card-wrapper.editing:hover .ddc-card-anchor,
      .card-wrapper.editing.selected .ddc-card-anchor,
      .card-container.ddc-connector-anchor-dragging .ddc-card-anchor{
        opacity:.94;
        transform:translate(-50%, -50%) scale(var(--ddc-edit-anchor-scale-active, .96));
      }
      .ddc-card-anchor:hover,
      .ddc-card-anchor:focus-visible,
      .ddc-card-anchor.is-hot,
      .ddc-card-anchor.is-dragging{
        opacity:1 !important;
        transform:translate(-50%, -50%) scale(var(--ddc-edit-anchor-scale-hot, 1.08)) !important;
        filter:drop-shadow(0 0 12px color-mix(in oklab, currentColor 34%, transparent));
        outline:none;
      }
      .ddc-card-anchor.is-hot::before,
      .ddc-card-anchor.is-dragging::before{
        box-shadow:
          0 0 0 2px rgba(255,255,255,.86),
          0 10px 22px rgba(0,0,0,.3),
          0 0 0 8px color-mix(in oklab, currentColor 20%, transparent);
      }

      .shield{position:absolute; inset:0; z-index:10; background:transparent!important; pointer-events:none}
      .card-wrapper.editing .shield, .card-wrapper.dragging .shield{pointer-events:auto; cursor:grab}

      .resize-handle{
        display:none; position:absolute; bottom: 6px; width:40px; height:40px;
        background: #27BEF5 !important; color:#fff;
        z-index:9999; box-shadow:0 3px 8px rgba(0,0,0,.28);
        align-items:center; justify-content:center;
        transform:scale(var(--ddc-edit-ui-scale, 1));
        transition:background .15s, transform .1s, box-shadow .15s, opacity .12s ease, visibility 0s linear .12s;
      }
      .resize-handle--br{
        right: 6px;
        cursor:se-resize;
        transform-origin:bottom right;
        border-top-left-radius:40px;
        border-bottom-right-radius:5px;
      }
      .resize-handle--bl{
        left: 6px;
        cursor:sw-resize;
        transform-origin:bottom left;
        border-top-right-radius:40px;
        border-bottom-left-radius:5px;
      }
      .resize-handle--bl ha-icon{ transform:scaleX(-1); }
      .resize-handle:hover{ transform:scale(var(--ddc-edit-ui-scale-hover, 1.05)); box-shadow:0 6px 16px rgba(0,0,0,.35); filter:brightness(1.05); }
      .card-wrapper.editing .resize-handle{ display:flex }
      .resize-handle ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; pointer-events:none; color: #fff !important; }

      /* Delete handle */
      .delete-handle{
        display:none; position:absolute; top:0; left:0; width:40px; height:40px;
        background: linear-gradient(135deg, rgba(236,72,72,.98) 0%, rgba(255,85,85,1) 100%) !important;
        color: #fff !important;
        box-shadow:0 3px 8px rgba(0,0,0,.28); cursor:pointer; align-items:center; justify-content:center;
        transform:scale(var(--ddc-edit-ui-scale, 1));
        transform-origin:top left;
        transition:background .15s, transform .1s, box-shadow .15s, opacity .12s ease, visibility 0s linear .12s;
        border-bottom-right-radius:10px; z-index: 9999 !important;

      }
      .delete-handle:hover{ transform:scale(var(--ddc-edit-ui-scale-hover, 1.05)); box-shadow:0 6px 16px rgba(0,0,0,.35); filter:brightness(1.05); }
      .card-wrapper.editing .delete-handle{ display:flex }
      .delete-handle ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; pointer-events:none; color: #fff !important;}

      .card-wrapper.editing:not(:hover):not(.selected):not(:focus-within) .resize-handle,
      .card-wrapper.editing:not(:hover):not(.selected):not(:focus-within) .delete-handle{
        opacity:0;
        visibility:hidden;
        pointer-events:none;
      }
      .card-wrapper.editing:hover .resize-handle,
      .card-wrapper.editing.selected .resize-handle,
      .card-wrapper.editing:focus-within .resize-handle,
      .card-wrapper.editing:hover .delete-handle,
      .card-wrapper.editing.selected .delete-handle,
      .card-wrapper.editing:focus-within .delete-handle{
        opacity:1;
        visibility:visible;
        pointer-events:auto;
        transition-delay:0s;
      }

      /* modal */
      .modal{ position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:9000 }
      .smart-picker-modal{
        background:rgba(6,10,18,.62);
        backdrop-filter: blur(16px) saturate(1.06);
      }
      .dialog{
        width:min(1220px,96%); max-height:min(90vh, 900px); display:flex; flex-direction:column;
        background:var(--card-background-color); border-radius:20px; padding:0; border:1px solid var(--divider-color); overflow:visible;
      }
      .smart-picker-dialog{
        width:min(1320px,96vw);
        max-height:min(92vh, 920px);
        border-radius:28px;
        overflow:hidden;
        border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.2));
        background:
          linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.01)),
          color-mix(in oklab, var(--card-background-color, #111827) 88%, rgba(7,10,18,.82));
        box-shadow:
          0 28px 90px rgba(0,0,0,.42),
          0 8px 24px rgba(0,0,0,.22),
          inset 0 1px 0 rgba(255,255,255,.04);
      }
      .dlg-head{
        display:flex; align-items:center; gap:12px; padding:12px 16px; border-bottom:1px solid var(--divider-color);
        background:
          radial-gradient(1200px 120px at 20% -40px, rgba(3,169,244,.21), transparent 60%),
          radial-gradient(900px 110px at 80% -40px, rgba(0,150,136,.18), transparent 60%);
      }
      .dlg-head h3{ margin:0; font-size:1.1rem; letter-spacing:.2px }
      .dlg-foot{ display:flex; gap:10px; justify-content:flex-end; padding:12px; border-top:1px solid var(--divider-color); background:var(--primary-background-color) }
      .btn:disabled{ opacity:.6; cursor:not-allowed }
      .smart-picker-dialog .dlg-head{
        gap:18px;
        padding:18px 22px;
        border-bottom:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 72%, rgba(255,255,255,.1));
        background:
          radial-gradient(900px 180px at 10% -70px, rgba(255,157,0,.26), transparent 62%),
          radial-gradient(720px 160px at 90% -80px, rgba(255,120,40,.2), transparent 64%),
          linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.015));
      }
      .smart-picker-dialog .dlg-head h3{
        font-size:1.22rem;
        font-weight:760;
        letter-spacing:.01em;
        white-space:nowrap;
      }
      .smart-picker-dialog .dlg-foot{
        align-items:center;
        gap:12px;
        padding:14px 20px 18px;
        border-top:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 72%, rgba(255,255,255,.1));
        background:
          linear-gradient(180deg, rgba(255,255,255,.025), rgba(255,255,255,.012)),
          color-mix(in oklab, var(--primary-background-color, #0f172a) 94%, rgba(0,0,0,.08));
      }
      .ddc-card-settings-backdrop{
        position:fixed;
        inset:0;
        z-index:100000;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:18px;
        background:rgba(4,8,16,.38);
        backdrop-filter:blur(12px) saturate(1.05);
        -webkit-backdrop-filter:blur(12px) saturate(1.05);
      }
      .ddc-card-settings{
        --ddc-popup-accent:var(--primary-color, #ff9800);
        --ddc-popup-surface:color-mix(in oklab, var(--card-background-color, #111827) 88%, var(--primary-background-color, #050811) 12%);
        --ddc-popup-elevated:color-mix(in oklab, var(--card-background-color, #111827) 82%, var(--ddc-popup-accent) 6%);
        --ddc-popup-line:color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 72%, transparent);
        --ddc-popup-field:color-mix(in oklab, var(--primary-background-color, #050811) 34%, var(--card-background-color, #111827));
        --ddc-popup-shadow:0 20px 44px rgba(0,0,0,.36), inset 0 1px 0 rgba(255,255,255,.08);
        width:min(720px, calc(100vw - 36px));
        max-height:min(88vh, 860px);
        display:flex;
        flex-direction:column;
        gap:12px;
        overflow:auto;
        padding:16px;
        border-radius:18px;
        border:1px solid color-mix(in oklab, var(--ddc-popup-accent) 24%, var(--ddc-popup-line));
        background:
          radial-gradient(circle at 0% 0%, color-mix(in oklab, var(--ddc-popup-accent) 14%, transparent), transparent 48%),
          linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.015)),
          var(--ddc-popup-surface);
        box-shadow:var(--ddc-popup-shadow);
        color:var(--primary-text-color, #f5f5f5);
        backdrop-filter:blur(18px) saturate(1.08);
        -webkit-backdrop-filter:blur(18px) saturate(1.08);
      }
      .ddc-card-settings-header{
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        gap:14px;
        padding:2px 2px 10px;
        border-bottom:1px solid var(--ddc-popup-line);
      }
      .ddc-card-settings-kicker{
        font-size:.7rem;
        letter-spacing:.16em;
        text-transform:uppercase;
        color:var(--secondary-text-color, #9ca3af);
        font-weight:800;
      }
      .ddc-card-settings-title{
        margin:4px 0 0;
        font-size:1.18rem;
        font-weight:820;
        letter-spacing:0;
      }
      .ddc-card-settings-subtitle{
        margin:7px 0 0;
        color:var(--secondary-text-color, #9ca3af);
        font-size:.9rem;
        line-height:1.45;
      }
      .ddc-pin-gate-backdrop{
        position:fixed;
        inset:0;
        z-index:100001;
        display:grid;
        place-items:center;
        padding:18px;
        background:rgba(4,8,16,.56);
        backdrop-filter:blur(10px) saturate(1.04);
        -webkit-backdrop-filter:blur(10px) saturate(1.04);
      }
      .ddc-pin-gate{
        width:min(430px, calc(100vw - 36px));
        display:grid;
        gap:16px;
        padding:22px;
        border-radius:22px;
        border:1px solid color-mix(in oklab, var(--primary-color, #03a9f4) 24%, var(--divider-color, rgba(255,255,255,.14)));
        background:
          linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.012)),
          color-mix(in oklab, var(--card-background-color, #111827) 94%, rgba(7,10,18,.9));
        box-shadow:
          0 28px 90px rgba(0,0,0,.46),
          0 8px 24px rgba(0,0,0,.28),
          inset 0 1px 0 rgba(255,255,255,.05);
        color:var(--primary-text-color, #f5f5f5);
      }
      .ddc-pin-gate-head{
        display:flex;
        align-items:flex-start;
        gap:13px;
      }
      .ddc-pin-gate-icon{
        width:42px;
        height:42px;
        display:grid;
        place-items:center;
        border-radius:12px;
        flex:0 0 auto;
        background:color-mix(in oklab, var(--primary-color, #03a9f4) 15%, transparent);
        color:var(--primary-color, #03a9f4);
      }
      .ddc-pin-gate-icon ha-icon{
        --mdc-icon-size:22px;
      }
      .ddc-pin-gate h3{
        margin:0;
        font-size:1.18rem;
        line-height:1.2;
        font-weight:800;
      }
      .ddc-pin-gate p{
        margin:6px 0 0;
        color:var(--secondary-text-color, #9ca3af);
        font-size:.92rem;
        line-height:1.45;
      }
      .ddc-pin-gate-field{
        display:grid;
        gap:7px;
      }
      .ddc-pin-gate-field label{
        color:var(--secondary-text-color, #9ca3af);
        font-size:.78rem;
        font-weight:800;
        letter-spacing:.05em;
        text-transform:uppercase;
      }
      .ddc-pin-gate-input-wrap{
        position:relative;
      }
      .ddc-pin-gate-input-wrap ha-icon{
        position:absolute;
        left:12px;
        top:50%;
        transform:translateY(-50%);
        --mdc-icon-size:18px;
        color:color-mix(in oklab, var(--primary-color, #03a9f4) 78%, var(--secondary-text-color, #9ca3af));
        pointer-events:none;
      }
      .ddc-pin-gate input{
        width:100%;
        min-height:48px;
        box-sizing:border-box;
        padding:0 12px 0 40px;
        border-radius:10px;
        border:1px solid color-mix(in oklab, var(--primary-color, #03a9f4) 30%, var(--divider-color, rgba(255,255,255,.16)));
        background:
          linear-gradient(180deg, rgba(255,255,255,.045), transparent),
          color-mix(in oklab, var(--card-background-color, #111827) 86%, var(--primary-background-color, #050812));
        color:var(--primary-text-color, #f5f5f5);
        caret-color:var(--primary-color, #03a9f4);
        font:700 1rem/1.2 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
        outline:none;
      }
      .ddc-pin-gate input:focus{
        border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 68%, transparent);
        box-shadow:
          0 0 0 3px color-mix(in oklab, var(--primary-color, #03a9f4) 18%, transparent),
          inset 0 1px 0 rgba(255,255,255,.06);
      }
      .ddc-pin-gate-error{
        min-height:20px;
        color:var(--error-color, #ef4444);
        font-size:.86rem;
        line-height:1.35;
      }
      .ddc-pin-gate-actions{
        display:flex;
        justify-content:flex-end;
        gap:10px;
        flex-wrap:wrap;
      }
      .ddc-pin-gate-actions .btn{
        min-height:40px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:7px;
        border-radius:999px;
        padding:0 16px;
        font-weight:800;
      }
      .ddc-pin-gate-actions .btn.secondary{
        border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 80%, var(--primary-color, #03a9f4));
        background:color-mix(in oklab, var(--card-background-color, #111827) 88%, transparent);
        color:var(--primary-text-color, #f5f5f5);
      }
      .ddc-pin-gate-actions .btn.primary{
        border:1px solid color-mix(in oklab, var(--primary-color, #03a9f4) 68%, transparent);
        background:
          linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,0)),
          var(--primary-color, #03a9f4);
        color:var(--text-primary-color, #ffffff);
        box-shadow:0 10px 26px color-mix(in oklab, var(--primary-color, #03a9f4) 26%, transparent);
      }
      .ddc-pin-gate input[data-invalid="true"]{
        border-color:var(--error-color, #ef4444);
        box-shadow:0 0 0 3px color-mix(in oklab, var(--error-color, #ef4444) 18%, transparent);
      }
      .ddc-pin-gate input::-ms-reveal,
      .ddc-pin-gate input::-ms-clear{
        display:none;
      }
      .ddc-pin-gate input::-webkit-credentials-auto-fill-button,
      .ddc-pin-gate input::-webkit-caps-lock-indicator{
        visibility:hidden;
        pointer-events:none;
      }
      .ddc-card-settings-close{
        flex:0 0 auto;
        width:40px;
        height:40px;
        border-radius:14px;
        border:1px solid var(--ddc-popup-line);
        background:
          linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.018)),
          var(--ddc-popup-field);
        color:var(--primary-text-color, #f5f5f5);
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        box-shadow:0 8px 20px rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.05);
      }
      .ddc-card-settings-close:hover{
        transform:translateY(-1px);
        border-color:color-mix(in oklab, var(--ddc-popup-accent) 36%, var(--ddc-popup-line));
        background:
          linear-gradient(180deg, color-mix(in oklab, var(--ddc-popup-accent) 10%, transparent), rgba(255,255,255,.02)),
          var(--ddc-popup-field);
      }
      .ddc-card-settings .section-card{
        display:flex;
        flex-direction:column;
        gap:12px;
        padding:14px;
        border-radius:16px;
        background:
          linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,.012)),
          var(--ddc-popup-elevated);
        border:1px solid var(--ddc-popup-line);
        box-shadow:inset 0 1px 0 rgba(255,255,255,.045);
      }
      .ddc-card-settings .section-card h4{
        margin:0;
        font-size:.95rem;
        font-weight:820;
      }
      .ddc-card-settings .section-card p{
        margin:0;
        color:var(--secondary-text-color, #9ca3af);
        font-size:.86rem;
        line-height:1.45;
      }
      .ddc-card-settings input[type="text"],
      .ddc-card-settings select{
        min-height:44px!important;
        border:1px solid var(--ddc-popup-line)!important;
        border-radius:12px!important;
        background:
          linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.012)),
          var(--ddc-popup-field)!important;
        color:var(--primary-text-color, #f5f5f5)!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.035)!important;
        outline:none;
      }
      .ddc-card-settings input[type="text"]:focus,
      .ddc-card-settings select:focus{
        border-color:color-mix(in oklab, var(--ddc-popup-accent) 58%, var(--ddc-popup-line))!important;
        box-shadow:
          0 0 0 3px color-mix(in oklab, var(--ddc-popup-accent) 17%, transparent),
          inset 0 1px 0 rgba(255,255,255,.05)!important;
      }
      .ddc-card-settings input[type="color"]{
        border-radius:12px!important;
        border:1px solid var(--ddc-popup-line)!important;
        background:var(--ddc-popup-field)!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.04);
      }
      .ddc-card-settings .layer-chip,
      .ddc-card-settings .btn.secondary,
      .ddc-card-settings button:not(.ddc-card-settings-close):not([data-card-style-value]){
        min-height:38px;
        border:1px solid var(--ddc-popup-line);
        border-radius:13px;
        background:
          linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.014)),
          var(--ddc-popup-field);
        color:var(--primary-text-color, #f5f5f5);
        box-shadow:inset 0 1px 0 rgba(255,255,255,.04);
      }
      .ddc-card-settings .layer-chip:hover,
      .ddc-card-settings .btn.secondary:hover,
      .ddc-card-settings button:not(.ddc-card-settings-close):not([data-card-style-value]):hover{
        border-color:color-mix(in oklab, var(--ddc-popup-accent) 34%, var(--ddc-popup-line));
        background:
          linear-gradient(180deg, color-mix(in oklab, var(--ddc-popup-accent) 10%, transparent), rgba(255,255,255,.014)),
          var(--ddc-popup-field);
      }
      .ddc-card-settings [data-card-style-value]{
        border-color:color-mix(in oklab, var(--ddc-popup-line) 78%, rgba(255,255,255,.18))!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.16), 0 6px 14px rgba(0,0,0,.16);
      }
      @media (max-width: 640px){
        .ddc-card-settings-backdrop{
          padding:10px;
          align-items:stretch;
        }
        .ddc-card-settings{
          width:100%;
          max-height:calc(100dvh - 20px);
          border-radius:18px;
        }
      }
      .picker-search-wrap{
        display:flex;
        align-items:center;
        gap:12px;
        flex:1;
        min-width:0;
      }
      .picker-search{
        width:100%;
        min-width:0;
        height:54px;
        padding:0 18px;
        border-radius:18px;
        border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 74%, rgba(255,255,255,.08));
        background:rgba(7,10,18,.78);
        color:var(--primary-text-color);
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.04),
          0 10px 24px rgba(0,0,0,.16);
        outline:none;
        font-size:1rem;
      }
      .picker-search::placeholder{
        color:color-mix(in oklab, var(--secondary-text-color, #94a3b8) 88%, rgba(255,255,255,.2));
      }
      .picker-search:focus{
        border-color:color-mix(in oklab, var(--primary-color, #ff9800) 72%, #fff 14%);
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.06),
          0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 22%, transparent),
          0 14px 28px rgba(0,0,0,.18);
      }
      .picker-actions{
        display:flex;
        align-items:center;
        gap:10px;
      }
      .picker-btn{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        min-height:48px;
        padding:0 18px;
        border-radius:16px;
        border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 76%, rgba(255,255,255,.08));
        background:rgba(255,255,255,.03);
        color:var(--primary-text-color);
        font-weight:700;
        letter-spacing:.01em;
        transition: transform .12s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease, color .18s ease;
      }
      .picker-btn ha-icon{
        --mdc-icon-size:20px;
      }
      .picker-btn:hover{
        transform:translateY(-1px);
        background:rgba(255,255,255,.06);
        border-color:color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 58%, rgba(255,255,255,.16));
        box-shadow:0 10px 22px rgba(0,0,0,.16);
      }
      .picker-btn:active{
        transform:translateY(0);
      }
      .picker-btn:focus-visible{
        outline:none;
        box-shadow:0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 24%, transparent);
      }
      .picker-btn.secondary{
        background:rgba(255,255,255,.025);
        color:color-mix(in oklab, var(--primary-text-color, #fff) 92%, rgba(255,255,255,.6));
      }
      .picker-btn.primary{
        border-color:color-mix(in oklab, var(--primary-color, #ff9800) 64%, rgba(255,255,255,.1));
        background:
          linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #ff9800) 82%, #fff 10%), color-mix(in oklab, var(--primary-color, #ff9800) 92%, #000 4%));
        color:#fff;
        box-shadow:0 14px 28px color-mix(in oklab, var(--primary-color, #ff9800) 28%, transparent);
      }
      .picker-btn.primary:hover{
        background:
          linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #ff9800) 88%, #fff 12%), color-mix(in oklab, var(--primary-color, #ff9800) 96%, #000 4%));
        border-color:color-mix(in oklab, var(--primary-color, #ff9800) 82%, rgba(255,255,255,.1));
      }
      .picker-btn[disabled]{
        box-shadow:none;
      }
      .picker-footnote{
        display:flex;
        align-items:center;
        gap:8px;
        flex:1;
        opacity:.8;
        font-size:.88rem;
      }
      .picker-footnote ha-icon{
        --mdc-icon-size:18px;
      }

      .visually-hidden{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}

          /* picker layout */
          .layout{display:grid;height:min(84vh,820px);grid-template-columns:280px 1fr}
          #leftPane{
            border-right:1px solid var(--divider-color);
            overflow:auto;
            background:var(--primary-background-color);
            color: var(--primary-text-color, #fff); /* 👈 ensure readable text */
            /*
             * Remove contain:content so that fixed-position menus from
             * custom card editors can correctly position themselves
             * relative to the viewport. CSS containment can interfere
             * with anchoring of overlays.
             */
            contain:none;
          }
          /*
           * Allow content like dropdown menus from custom card editors to
           * overflow the right pane without being clipped. Using overflow
           * visible instead of hidden prevents menus from being positioned
           * far away or requiring excessive scrolling when they open.
           */
          #rightPane{
            /* Allow the right-hand editor pane to scroll vertically when
             * content from custom card editors exceeds the available space.
             * We hide horizontal overflow to avoid layout shifts. */
            overflow-y:auto;
            overflow-x:hidden;
            background:var(--primary-background-color);
          }
          .rightGrid{
            display:grid;grid-template-columns:540px 1fr;grid-template-rows:auto auto 1fr;gap:12px;padding:12px;height:100%;box-sizing:border-box;position:relative;
          }
          .sec{
            border:1px solid var(--divider-color);
            border-radius:12px;
            background:var(--card-background-color);
            overflow:visible;
            position:relative;
            /* Remove content containment on sections to prevent the
             * creation of an artificial containing block which can
             * disrupt dropdown positioning. */
            contain:none;
          }
          .sec .hd{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--divider-color);font-weight:600;position: relative;z-index: 10}
          .sec .bd{padding:12px;overflow:visible}       
          .picker-preview-sec{
            display:grid;
            grid-template-rows:auto minmax(0, 1fr);
            overflow:hidden;
          }
          .picker-preview-sec .bd{
            min-height:0;
            height:100%;
            overflow:auto;
            display:grid;
          }
          #cardHost{
            min-height:260px;
            min-width:0;
            display:block;
          }
          #cardHost.has-ddc-preview{
            display:grid;
            align-items:stretch;
            height:100%;
          }
          #cardHost.has-ddc-table-preview{
            min-height:320px;
          }
          #cardHost > .ddc-picker-preview-card{
            display:block;
            width:100%;
            min-width:0;
          }
          #cardHost > .ddc-picker-preview-card.ddc-picker-table-preview{
            min-height:320px;
            height:100%;
          }
          .picker-preview-empty{
            display:grid;
            place-items:center;
            min-height:220px;
            padding:18px;
            border-radius:16px;
            border:1px dashed color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 72%, transparent);
            color:var(--secondary-text-color, #94a3b8);
            text-align:center;
            line-height:1.45;
            background:rgba(127,127,127,.04);
          }
          .picker-preview-spinner{
            z-index:12;
            border-radius:16px;
            background:color-mix(in oklab, var(--card-background-color, #111827) 72%, transparent);
          }
          .tabs{display:flex;gap:6px;margin-left:auto}
          .tab{
            font-size:.85rem;padding:6px 10px;border-radius:10px;border:1px solid var(--divider-color);
            background:var(--primary-background-color);color:var(--primary-text-color);cursor:pointer
          }
          .tab.active{background:var(--primary-color);color:#fff;border-color:var(--primary-color)}
          .picker-category{
            padding:14px 14px 12px;
            border-bottom:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 82%, transparent);
          }
          .picker-category-title{
            margin:0 0 10px 0;
            font-size:.92rem;
            font-weight:760;
            letter-spacing:.01em;
            opacity:.9;
          }
          .picker-category-note{
            display:flex;
            flex-direction:column;
            gap:6px;
            padding:12px 14px;
            border-radius:14px;
            border:1px dashed color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 72%, rgba(255,255,255,.08));
            background:rgba(255,255,255,.025);
            color:color-mix(in oklab, var(--secondary-text-color, #94a3b8) 90%, rgba(255,255,255,.2));
            font-size:.86rem;
            line-height:1.45;
          }
          .picker-category-note strong{
            color:var(--primary-text-color);
            font-size:.88rem;
          }
          .picker-item{
            display:flex;
            align-items:center;
            gap:10px;
            width:100%;
            text-align:left;
            border:none;
            background:transparent;
            padding:10px 12px;
            border-radius:14px;
            cursor:pointer;
            color:inherit;
            transition: background .16s ease, color .16s ease, transform .12s ease, box-shadow .16s ease;
          }
          .picker-item:hover{
            background:rgba(255,255,255,.045);
            transform:translateX(1px);
          }
          .picker-item.active{
            background:color-mix(in oklab, var(--primary-color, #ff9800) 16%, rgba(255,255,255,.03));
            color:var(--primary-text-color);
            box-shadow:inset 0 0 0 1px color-mix(in oklab, var(--primary-color, #ff9800) 45%, transparent);
          }
          .picker-item-meta{
            display:flex;
            flex-direction:column;
            gap:2px;
            min-width:0;
          }
          .picker-item-name{
            font-size:.98rem;
            font-weight:650;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
          .picker-item-subtitle{
            font-size:.78rem;
            opacity:.65;
          }
          .cm-editor{height: 100%}
          /* --- FIX: YAML/Visual editor: ensure the entire content is visible --- */
          /*
           * The YAML editor previously had a fixed height which caused the
           * bottom of longer configurations to be clipped. Removing the fixed
           * height allows the section to flex based on available space within
           * the grid row. A min-height of zero lets it collapse when there
           * isn't much content, while overflow:auto enables scrolling when
           * content exceeds the visible area.
           */
          #yamlSec {
            min-height: 0;
            height: auto !important;
            overflow: auto;
          }
          #yamlSec .bd {
            /* allow the YAML editor to use the full available space instead of a fixed max height */
            overflow: auto;
            max-height: none;
            /* Fill the available grid row height (1fr) so that scrolling
             * happens inside this section rather than expanding the editor
             * beyond the modal boundary. A min-height of zero ensures the
             * section can shrink when little content is present. */
            height: 100%;
            min-height: 0;
          }
          /* --- make Visual editor area scrollable, like YAML --- */
          #optionsSec {
            min-height: 0;
            overflow: auto;
          }
          #optionsSec .bd {
            position: relative;
            overflow: auto;
            height: auto;
            max-height: none;
            min-height: 0;
          }
          #editorHost {
            display: block;
            min-height: 0;
          }

          #quickFillSec { 
            display: flex; 
            flex-direction: column; 
            min-height: 0; 
          }
          #quickFillSec .bd { 
            overflow: auto;          /* scroll inside the card */
            max-height: 320px;       /* keep it contained; tweak as you wish */
          }

          /* ha-code-editor / CodeMirror height: allow growth but set a sensible minimum
           * so that very short snippets don't collapse. Using min-height
           * instead of a fixed height allows the editor to expand when the
           * parent container grows. The !important flag ensures that the
           * component’s inline styles from HA won’t override this sizing.
           */
          ha-code-editor {
            display: block;
            min-height: 260px;
            height: auto !important;
          }
          .CodeMirror {
            min-height: 260px;
            height: auto !important;
          }

          /* host that wraps the editor should also allow scroll if content grows */
          #yamlHost { 
            overflow: visible; 
            height: auto;
          }

          /* CodeMirror */
          .CodeMirror{
            height:260px;border:1px solid var(--divider-color);border-radius:12px;
            background:var(--primary-background-color);color:var(--primary-text-color);
            z-index:6;
          }

          /* YAML editor safety / visibility */
          #yamlSec{ z-index:5; }
          #yamlHost, #yamlHost * { touch-action: auto; }
          ha-code-editor, ha-code-editor * { touch-action: auto; }
          ha-code-editor{ display:block; height:260px; z-index:6; }

          @media (max-width: 760px), (pointer: coarse) and (max-width: 900px) {
            .smart-picker-modal{
              align-items:stretch;
              justify-content:stretch;
              padding:0;
              background:rgba(4,8,15,.76);
              backdrop-filter:blur(18px) saturate(1.04);
              -webkit-backdrop-filter:blur(18px) saturate(1.04);
            }
            .smart-picker-dialog{
              width:100vw;
              max-width:none;
              height:100vh;
              height:100dvh;
              min-height:100svh;
              max-height:none;
              border-radius:0;
              border:0;
              box-shadow:none;
              display:flex;
              flex-direction:column;
              overflow:hidden;
            }
            .smart-picker-dialog .dlg-head{
              position:relative;
              z-index:30;
              display:grid;
              grid-template-columns:minmax(0, 1fr) auto;
              grid-template-areas:
                "title actions"
                "search search";
              align-items:center;
              gap:10px 12px;
              padding:calc(10px + env(safe-area-inset-top, 0px)) 12px 10px;
              background:
                radial-gradient(640px 150px at 12% -80px, rgba(255,157,0,.22), transparent 64%),
                radial-gradient(560px 130px at 92% -70px, rgba(3,169,244,.16), transparent 66%),
                color-mix(in oklab, var(--card-background-color, #111827) 94%, rgba(5,10,18,.9));
            }
            .smart-picker-dialog .dlg-head h3{
              grid-area:title;
              min-width:0;
              overflow:hidden;
              text-overflow:ellipsis;
              font-size:1.04rem;
              line-height:1.18;
            }
            .smart-picker-dialog .picker-search-wrap{
              grid-area:search;
              width:100%;
            }
            .smart-picker-dialog .picker-search{
              height:46px;
              border-radius:14px;
              padding:0 14px;
              font-size:16px;
            }
            .smart-picker-dialog .picker-actions{
              grid-area:actions;
              gap:8px;
              justify-content:flex-end;
            }
            .smart-picker-dialog .picker-actions .picker-btn{
              min-width:44px;
              min-height:44px;
              padding:0 12px;
              border-radius:14px;
            }
            .smart-picker-dialog .picker-actions .picker-btn.secondary span{
              position:absolute !important;
              width:1px;
              height:1px;
              padding:0;
              margin:-1px;
              overflow:hidden;
              clip:rect(0, 0, 0, 0);
              white-space:nowrap;
              border:0;
            }
            .smart-picker-dialog .layout{
              flex:1 1 auto;
              min-height:0;
              height:auto;
              display:grid;
              grid-template-columns:1fr;
              grid-template-rows:auto minmax(0, 1fr);
              overflow:hidden;
            }
            .smart-picker-dialog #leftPane{
              display:grid;
              grid-auto-flow:column;
              grid-auto-columns:minmax(178px, 72vw);
              gap:10px;
              max-height:min(34dvh, 260px);
              padding:10px 12px 12px;
              border-right:0;
              border-bottom:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.1));
              overflow-x:auto;
              overflow-y:hidden;
              scroll-snap-type:x proximity;
              -webkit-overflow-scrolling:touch;
              overscroll-behavior-x:contain;
              background:
                linear-gradient(180deg, rgba(255,255,255,.025), rgba(255,255,255,.01)),
                var(--primary-background-color);
            }
            .smart-picker-dialog .picker-category{
              min-width:0;
              max-height:100%;
              padding:10px;
              border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 76%, rgba(255,255,255,.08));
              border-radius:16px;
              background:color-mix(in oklab, var(--card-background-color, #111827) 88%, rgba(255,255,255,.02));
              overflow-y:auto;
              scroll-snap-align:start;
              -webkit-overflow-scrolling:touch;
            }
            .smart-picker-dialog .picker-category-title{
              position:sticky;
              top:0;
              z-index:1;
              margin:0 0 8px;
              padding:0 0 7px;
              background:linear-gradient(180deg, color-mix(in oklab, var(--card-background-color, #111827) 96%, rgba(255,255,255,.03)) 70%, transparent);
              font-size:.82rem;
            }
            .smart-picker-dialog .picker-category-note{
              padding:10px;
              font-size:.82rem;
            }
            .smart-picker-dialog .picker-item{
              min-height:44px;
              padding:9px 10px;
              border-radius:12px;
              touch-action:manipulation;
            }
            .smart-picker-dialog .picker-item:hover{
              transform:none;
            }
            .smart-picker-dialog .picker-item ha-icon{
              flex:0 0 auto;
              --mdc-icon-size:20px;
            }
            .smart-picker-dialog .picker-item-name{
              font-size:.91rem;
            }
            .smart-picker-dialog .picker-item-subtitle{
              display:none;
            }
            .smart-picker-dialog #rightPane{
              min-height:0;
              overflow-y:auto;
              overflow-x:hidden;
              -webkit-overflow-scrolling:touch;
              overscroll-behavior:contain;
            }
            .smart-picker-dialog .rightGrid{
              grid-template-columns:1fr;
              grid-template-rows:none;
              gap:10px;
              height:auto;
              min-height:100%;
              padding:10px 12px 14px;
            }
            .smart-picker-dialog .rightGrid > .sec{
              grid-column:1 !important;
              grid-row:auto !important;
            }
            .smart-picker-dialog .sec{
              border-radius:14px;
            }
            .smart-picker-dialog .sec .hd{
              gap:8px;
              align-items:flex-start;
              flex-wrap:wrap;
              padding:10px 11px;
              font-size:.9rem;
            }
            .smart-picker-dialog .sec .bd{
              padding:10px;
            }
            .smart-picker-dialog .picker-preview-sec{
              max-height:clamp(158px, 28dvh, 240px);
            }
            .smart-picker-dialog .picker-preview-sec .bd{
              max-height:calc(clamp(158px, 28dvh, 240px) - 42px);
              overflow:auto;
            }
            .smart-picker-dialog #cardHost{
              min-height:132px;
            }
            .smart-picker-dialog #cardHost.has-ddc-table-preview,
            .smart-picker-dialog #cardHost > .ddc-picker-preview-card.ddc-picker-table-preview{
              min-height:180px;
            }
            .smart-picker-dialog #optionsSec,
            .smart-picker-dialog #yamlSec,
            .smart-picker-dialog #visSec{
              overflow:visible;
            }
            .smart-picker-dialog #optionsSec .bd,
            .smart-picker-dialog #yamlSec .bd,
            .smart-picker-dialog #visSec .bd{
              height:auto;
              overflow:visible;
            }
            .smart-picker-dialog #optionsSec .hd .sel-info{
              min-width:0;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            }
            .smart-picker-dialog .tabs{
              width:100%;
              margin-left:0;
              gap:6px;
              overflow-x:auto;
              padding-bottom:1px;
              -webkit-overflow-scrolling:touch;
            }
            .smart-picker-dialog .tab{
              flex:1 0 auto;
              min-height:40px;
              padding:7px 10px;
              font-size:.84rem;
              touch-action:manipulation;
            }
            .smart-picker-dialog ha-code-editor,
            .smart-picker-dialog .CodeMirror{
              min-height:220px;
            }
            .smart-picker-dialog .dlg-foot{
              position:relative;
              z-index:30;
              gap:10px;
              padding:10px 12px calc(10px + env(safe-area-inset-bottom, 0px));
              background:
                linear-gradient(180deg, rgba(255,255,255,.028), rgba(255,255,255,.012)),
                color-mix(in oklab, var(--primary-background-color, #0f172a) 96%, rgba(0,0,0,.12));
            }
            .smart-picker-dialog .picker-footnote{
              display:none;
            }
            .smart-picker-dialog .dlg-foot .picker-btn{
              flex:1 1 0;
              min-width:0;
              min-height:48px;
              border-radius:15px;
            }
          }

          @media (max-width: 900px) and (max-height: 560px) {
            .smart-picker-dialog #leftPane{
              grid-auto-columns:minmax(160px, 44vw);
              max-height:136px;
              padding-block:8px;
            }
            .smart-picker-dialog .picker-category{
              padding:8px;
            }
            .smart-picker-dialog .picker-category-title{
              font-size:.76rem;
              margin-bottom:6px;
            }
            .smart-picker-dialog .picker-item{
              min-height:40px;
              padding:7px 8px;
            }
            .smart-picker-dialog .picker-preview-sec{
              max-height:150px;
            }
            .smart-picker-dialog .picker-preview-sec .bd{
              max-height:108px;
            }
          }

          .smart-picker-modal.smart-picker-mobile{
            align-items:stretch;
            justify-content:stretch;
            padding:0;
            background:rgba(4,8,15,.78);
            backdrop-filter:blur(18px) saturate(1.04);
            -webkit-backdrop-filter:blur(18px) saturate(1.04);
          }
          .smart-picker-modal.smart-picker-mobile .smart-picker-dialog{
            width:100vw;
            max-width:none;
            height:100vh;
            height:100dvh;
            min-height:100svh;
            max-height:none;
            border-radius:0;
            border:0;
            box-shadow:none;
            display:flex;
            flex-direction:column;
            overflow:hidden;
          }
          .smart-picker-modal.smart-picker-mobile .smart-picker-dialog .dlg-head{
            position:relative;
            z-index:30;
            display:grid;
            grid-template-columns:minmax(0, 1fr) auto;
            grid-template-areas:
              "title actions"
              "search search";
            align-items:center;
            gap:10px 12px;
            padding:calc(10px + env(safe-area-inset-top, 0px)) 12px 10px;
            background:
              radial-gradient(640px 150px at 12% -80px, rgba(255,157,0,.22), transparent 64%),
              radial-gradient(560px 130px at 92% -70px, rgba(3,169,244,.16), transparent 66%),
              color-mix(in oklab, var(--card-background-color, #111827) 94%, rgba(5,10,18,.9));
          }
          .smart-picker-modal.smart-picker-mobile .smart-picker-dialog .dlg-head h3{
            grid-area:title;
            min-width:0;
            overflow:hidden;
            text-overflow:ellipsis;
            font-size:1.04rem;
            line-height:1.18;
          }
          .smart-picker-modal.smart-picker-mobile .picker-search-wrap{
            grid-area:search;
            width:100%;
          }
          .smart-picker-modal.smart-picker-mobile .picker-search{
            height:46px;
            border-radius:14px;
            padding:0 14px;
            font-size:16px;
          }
          .smart-picker-modal.smart-picker-mobile .picker-actions{
            grid-area:actions;
            gap:8px;
            justify-content:flex-end;
          }
          .smart-picker-modal.smart-picker-mobile .picker-actions .picker-btn{
            min-width:44px;
            min-height:44px;
            padding:0 12px;
            border-radius:14px;
          }
          .smart-picker-modal.smart-picker-mobile .picker-actions .picker-btn.secondary span{
            position:absolute !important;
            width:1px;
            height:1px;
            padding:0;
            margin:-1px;
            overflow:hidden;
            clip:rect(0, 0, 0, 0);
            white-space:nowrap;
            border:0;
          }
          .smart-picker-modal.smart-picker-mobile .layout{
            flex:1 1 auto;
            min-height:0;
            height:auto;
            display:block;
            overflow-y:auto;
            overflow-x:hidden;
            -webkit-overflow-scrolling:touch;
            overscroll-behavior:contain;
            background:var(--primary-background-color);
          }
          .smart-picker-modal.smart-picker-mobile #leftPane{
            display:block;
            width:100%;
            max-height:min(42dvh, 340px);
            padding:10px 12px 12px;
            box-sizing:border-box;
            border-right:0;
            border-bottom:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.1));
            overflow-y:auto;
            overflow-x:hidden;
            -webkit-overflow-scrolling:touch;
            background:
              linear-gradient(180deg, rgba(255,255,255,.025), rgba(255,255,255,.01)),
              var(--primary-background-color);
          }
          .smart-picker-modal.smart-picker-mobile .picker-category{
            max-height:none;
            padding:10px 0 12px;
            border:0;
            border-radius:0;
            background:transparent;
            overflow:visible;
          }
          .smart-picker-modal.smart-picker-mobile .picker-category + .picker-category{
            border-top:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 58%, transparent);
          }
          .smart-picker-modal.smart-picker-mobile .picker-category-title{
            position:sticky;
            top:0;
            z-index:1;
            margin:0 0 8px;
            padding:2px 0 7px;
            background:linear-gradient(180deg, var(--primary-background-color) 74%, transparent);
            font-size:.83rem;
          }
          .smart-picker-modal.smart-picker-mobile .picker-category-note{
            padding:11px 12px;
            border-radius:13px;
            font-size:.84rem;
          }
          .smart-picker-modal.smart-picker-mobile .picker-item{
            min-height:48px;
            padding:10px 10px;
            border-radius:12px;
            touch-action:manipulation;
          }
          .smart-picker-modal.smart-picker-mobile .picker-item:hover{
            transform:none;
          }
          .smart-picker-modal.smart-picker-mobile .picker-item ha-icon{
            flex:0 0 auto;
            --mdc-icon-size:21px;
          }
          .smart-picker-modal.smart-picker-mobile .picker-item-name{
            font-size:.94rem;
          }
          .smart-picker-modal.smart-picker-mobile .picker-item-subtitle{
            font-size:.76rem;
          }
          .smart-picker-modal.smart-picker-mobile #rightPane{
            width:100%;
            min-height:0;
            overflow:visible;
            background:var(--primary-background-color);
          }
          .smart-picker-modal.smart-picker-mobile .rightGrid{
            display:grid;
            grid-template-columns:1fr;
            grid-template-rows:none;
            gap:10px;
            height:auto;
            min-height:0;
            padding:12px 12px 16px;
            box-sizing:border-box;
          }
          .smart-picker-modal.smart-picker-mobile .rightGrid > .sec{
            grid-column:1 !important;
            grid-row:auto !important;
          }
          .smart-picker-modal.smart-picker-mobile #optionsSec{
            order:1;
          }
          .smart-picker-modal.smart-picker-mobile #yamlSec,
          .smart-picker-modal.smart-picker-mobile #visSec{
            order:2;
          }
          .smart-picker-modal.smart-picker-mobile .picker-preview-sec{
            order:3;
          }
          .smart-picker-modal.smart-picker-mobile .sec{
            border-radius:14px;
          }
          .smart-picker-modal.smart-picker-mobile .sec .hd{
            gap:8px;
            align-items:flex-start;
            flex-wrap:wrap;
            padding:10px 11px;
            font-size:.9rem;
          }
          .smart-picker-modal.smart-picker-mobile .sec .bd{
            padding:10px;
          }
          .smart-picker-modal.smart-picker-mobile .picker-preview-sec{
            max-height:none;
          }
          .smart-picker-modal.smart-picker-mobile .picker-preview-sec .bd{
            max-height:min(34dvh, 260px);
            overflow:auto;
          }
          .smart-picker-modal.smart-picker-mobile #cardHost{
            min-height:132px;
          }
          .smart-picker-modal.smart-picker-mobile #cardHost.has-ddc-table-preview,
          .smart-picker-modal.smart-picker-mobile #cardHost > .ddc-picker-preview-card.ddc-picker-table-preview{
            min-height:180px;
          }
          .smart-picker-modal.smart-picker-mobile #optionsSec,
          .smart-picker-modal.smart-picker-mobile #yamlSec,
          .smart-picker-modal.smart-picker-mobile #visSec{
            overflow:visible;
          }
          .smart-picker-modal.smart-picker-mobile #optionsSec .bd,
          .smart-picker-modal.smart-picker-mobile #yamlSec .bd,
          .smart-picker-modal.smart-picker-mobile #visSec .bd{
            height:auto;
            overflow:visible;
          }
          .smart-picker-modal.smart-picker-mobile #optionsSec .hd .sel-info{
            min-width:0;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .smart-picker-modal.smart-picker-mobile .tabs{
            width:100%;
            margin-left:0;
            gap:6px;
            overflow-x:auto;
            padding-bottom:1px;
            -webkit-overflow-scrolling:touch;
          }
          .smart-picker-modal.smart-picker-mobile .tab{
            flex:1 0 auto;
            min-height:40px;
            padding:7px 10px;
            font-size:.84rem;
            touch-action:manipulation;
          }
          .smart-picker-modal.smart-picker-mobile ha-code-editor,
          .smart-picker-modal.smart-picker-mobile .CodeMirror{
            min-height:220px;
          }
          .smart-picker-modal.smart-picker-mobile .smart-picker-dialog .dlg-foot{
            position:relative;
            z-index:30;
            gap:10px;
            padding:10px 12px calc(10px + env(safe-area-inset-bottom, 0px));
            background:
              linear-gradient(180deg, rgba(255,255,255,.028), rgba(255,255,255,.012)),
              color-mix(in oklab, var(--primary-background-color, #0f172a) 96%, rgba(0,0,0,.12));
          }
          .smart-picker-modal.smart-picker-mobile .picker-footnote{
            display:none;
          }
          .smart-picker-modal.smart-picker-mobile .dlg-foot .picker-btn{
            flex:1 1 0;
            min-width:0;
            min-height:48px;
            border-radius:15px;
          }
          @media (max-height: 560px) {
            .smart-picker-modal.smart-picker-mobile #leftPane{
              max-height:148px;
              padding-block:8px;
            }
            .smart-picker-modal.smart-picker-mobile .picker-category{
              padding-block:8px;
            }
            .smart-picker-modal.smart-picker-mobile .picker-category-title{
              font-size:.76rem;
              margin-bottom:6px;
            }
            .smart-picker-modal.smart-picker-mobile .picker-item{
              min-height:42px;
              padding:8px;
            }
            .smart-picker-modal.smart-picker-mobile .picker-preview-sec .bd{
              max-height:136px;
            }
          }

          /* loading spinners */
          .spin-center{
            position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events: none; /* let clicks pass through to tabs and controls */
          }
          .spin-center[hidden]{
            display:none !important;
          }


          /* marquee selection rectangle */
          .marquee{
            position:absolute; border:1px dashed var(--primary-color);
            background: color-mix(in srgb, var(--primary-color) 10%, transparent);
            pointer-events:none; z-index:50;
          }

          /* empty dashboard welcome */
          .card-wrapper.ddc-placeholder{
            border:0;
            background:transparent;
            box-shadow:none;
            overflow:visible;
            cursor:default;
            --ddc-empty-scale:1;
            --ddc-empty-design-w:1180px;
            --ddc-empty-design-h:740px;
            --ddc-empty-accent: color-mix(in oklab, var(--primary-color, #03a9f4) 78%, #00e0ff 22%);
            --ddc-empty-panel: color-mix(in oklab, var(--card-background-color, #111827) 88%, #07111f 12%);
            --ddc-empty-line: color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 74%, var(--ddc-empty-accent) 26%);
          }
          .card-wrapper.ddc-placeholder.editing{
            border-color:transparent;
          }
          .card-wrapper.ddc-placeholder.editing::after{
            display:none;
          }
          .card-wrapper.ddc-placeholder .shield{
            display:none !important;
          }
          .card-wrapper.ddc-placeholder > .ddc-placeholder-inner{
            position:relative;
            width:var(--ddc-empty-design-w);
            height:var(--ddc-empty-design-h);
            border-radius:30px;
            overflow:hidden;
            color:var(--primary-text-color, #f8fafc);
            background:
              linear-gradient(145deg, color-mix(in oklab, var(--ddc-empty-panel) 96%, #ffffff 4%), color-mix(in oklab, var(--primary-background-color, #050812) 92%, var(--ddc-empty-accent) 8%)) !important;
            border:1px solid var(--ddc-empty-line);
            box-shadow:
              0 28px 90px rgba(0,0,0,.34),
              0 8px 24px rgba(0,0,0,.18),
              inset 0 1px 0 rgba(255,255,255,.08);
            pointer-events:auto;
            isolation:isolate;
            transform:scale(var(--ddc-empty-scale));
            transform-origin:top left;
            will-change:transform;
          }
          .ddc-placeholder-inner::before{
            content:"";
            position:absolute;
            inset:0;
            z-index:0;
            pointer-events:none;
            opacity:.52;
            background:
              linear-gradient(rgba(80,210,255,.11) 1px, transparent 1px),
              linear-gradient(90deg, rgba(80,210,255,.1) 1px, transparent 1px),
              radial-gradient(760px 420px at 16% 18%, color-mix(in oklab, var(--ddc-empty-accent) 26%, transparent), transparent 66%),
              radial-gradient(640px 360px at 86% 18%, rgba(255,255,255,.12), transparent 68%);
            background-size:44px 44px, 44px 44px, auto, auto;
          }
          .ddc-placeholder-inner::after{
            content:"";
            position:absolute;
            inset:0;
            z-index:1;
            pointer-events:none;
            background:
              linear-gradient(90deg, color-mix(in oklab, var(--ddc-empty-panel) 86%, transparent), transparent 44%, color-mix(in oklab, var(--ddc-empty-panel) 72%, transparent)),
              linear-gradient(180deg, rgba(255,255,255,.08), transparent 20%, rgba(0,0,0,.16));
          }
          .ddc-empty-shell{
            position:relative;
            z-index:2;
            display:grid;
            grid-template-columns:minmax(260px, .88fr) minmax(360px, 1.12fr);
            gap:48px;
            align-items:center;
            width:100%;
            height:100%;
            box-sizing:border-box;
            padding:54px;
          }
          .ddc-empty-visual{
            position:relative;
            min-height:0;
            height:100%;
            border-radius:24px;
            overflow:hidden;
            border:1px solid color-mix(in oklab, var(--ddc-empty-accent) 28%, rgba(255,255,255,.14));
            background:rgba(255,255,255,.035);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
          }
          .ddc-empty-visual img{
            position:absolute;
            inset:0;
            width:100%;
            height:100%;
            object-fit:contain;
            box-sizing:border-box;
            padding:34px;
            opacity:.9;
            filter:saturate(.96) contrast(1.03);
          }
          .ddc-empty-visual::after{
            content:"";
            position:absolute;
            inset:0;
            background:
              linear-gradient(180deg, transparent 56%, rgba(4,9,18,.72)),
              radial-gradient(420px 220px at 15% 12%, rgba(255,255,255,.22), transparent 70%);
          }
          .ddc-empty-content{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            min-width:0;
          }
          .ddc-empty-kicker{
            display:inline-flex;
            align-items:center;
            gap:8px;
            margin-bottom:14px;
            padding:7px 10px;
            border-radius:999px;
            border:1px solid color-mix(in oklab, var(--ddc-empty-accent) 34%, transparent);
            color:color-mix(in oklab, var(--ddc-empty-accent) 78%, var(--primary-text-color, #fff) 22%);
            background:color-mix(in oklab, var(--ddc-empty-accent) 11%, transparent);
            font-size:.74rem;
            font-weight:800;
            letter-spacing:.1em;
            text-transform:uppercase;
          }
          .ddc-empty-kicker ha-icon{
            --mdc-icon-size:17px;
          }
          .ddc-empty-title{
            margin:0;
            max-width:760px;
            font-size:3.05rem;
            line-height:1.02;
            font-weight:860;
            letter-spacing:0;
            color:var(--primary-text-color, #f8fafc);
          }
          .ddc-empty-sub{
            margin:18px 0 0;
            max-width:650px;
            color:color-mix(in oklab, var(--primary-text-color, #f8fafc) 78%, transparent);
            font-size:1.08rem;
            line-height:1.55;
          }
          .ddc-empty-steps{
            display:grid;
            grid-template-columns:repeat(3, minmax(0, 1fr));
            gap:10px;
            width:100%;
            margin:24px 0 0;
          }
          .ddc-empty-step{
            min-width:0;
            padding:13px 14px;
            border-radius:16px;
            border:1px solid color-mix(in oklab, var(--ddc-empty-line) 78%, transparent);
            background:color-mix(in oklab, var(--card-background-color, #111827) 76%, transparent);
          }
          .ddc-empty-step strong{
            display:block;
            margin-bottom:5px;
            font-size:.88rem;
            color:var(--primary-text-color, #fff);
          }
          .ddc-empty-step span{
            display:block;
            font-size:.8rem;
            line-height:1.42;
            color:color-mix(in oklab, var(--primary-text-color, #fff) 66%, transparent);
          }
          .ddc-empty-actions{
            display:flex;
            flex-wrap:wrap;
            gap:10px;
            margin-top:24px;
          }
          .ddc-empty-btn{
            appearance:none;
            -webkit-appearance:none;
            min-height:44px;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:9px;
            padding:0 15px;
            border-radius:14px;
            border:1px solid color-mix(in oklab, var(--ddc-empty-line) 82%, rgba(255,255,255,.12));
            background:rgba(255,255,255,.045);
            color:var(--primary-text-color, #fff);
            font:inherit;
            font-weight:780;
            cursor:pointer;
            transition:background .18s ease, border-color .18s ease, box-shadow .18s ease;
          }
          .ddc-empty-btn ha-icon{
            --mdc-icon-size:19px;
          }
          .ddc-empty-btn:hover{
            background:rgba(255,255,255,.075);
            border-color:color-mix(in oklab, var(--ddc-empty-accent) 38%, rgba(255,255,255,.14));
            box-shadow:0 10px 22px rgba(0,0,0,.18);
          }
          .ddc-empty-btn:focus-visible{
            outline:none;
            box-shadow:0 0 0 3px color-mix(in oklab, var(--ddc-empty-accent) 26%, transparent);
          }
          .ddc-empty-btn.primary{
            border-color:color-mix(in oklab, var(--ddc-empty-accent) 64%, rgba(255,255,255,.14));
            background:
              linear-gradient(180deg, color-mix(in oklab, var(--ddc-empty-accent) 92%, #fff 8%), color-mix(in oklab, var(--ddc-empty-accent) 78%, #022033 22%));
            color:#04121c;
            box-shadow:0 16px 30px color-mix(in oklab, var(--ddc-empty-accent) 24%, transparent);
          }
          .ddc-empty-presets{
            display:grid;
            grid-template-columns:repeat(2, minmax(0, 1fr));
            gap:10px;
            margin-top:14px;
            width:min(100%, 620px);
          }
          .ddc-empty-preset{
            min-height:64px;
            justify-content:flex-start;
            padding:10px 13px;
            border-radius:16px;
            font-size:.88rem;
            text-align:left;
          }
          .ddc-empty-preset ha-icon{
            flex:0 0 auto;
            --mdc-icon-size:20px;
            color:var(--ddc-empty-accent);
          }
          .ddc-empty-size-copy{
            display:flex;
            flex-direction:column;
            min-width:0;
            gap:3px;
          }
          .ddc-empty-size-copy span,
          .ddc-empty-size-copy small{
            display:block;
            overflow-wrap:anywhere;
          }
          .ddc-empty-size-copy small{
            opacity:.72;
            font-size:.75rem;
            line-height:1.28;
            font-weight:700;
          }
          .ddc-empty-links{
            display:flex;
            flex-wrap:wrap;
            align-items:center;
            gap:12px;
            margin-top:18px;
            color:color-mix(in oklab, var(--primary-text-color, #fff) 64%, transparent);
            font-size:.9rem;
          }
          .ddc-empty-link{
            appearance:none;
            -webkit-appearance:none;
            border:0;
            padding:0;
            display:inline-flex;
            align-items:center;
            gap:6px;
            background:transparent;
            color:color-mix(in oklab, var(--ddc-empty-accent) 78%, var(--primary-text-color, #fff) 22%);
            font:inherit;
            font-weight:780;
            cursor:pointer;
          }
          .ddc-empty-link:hover{
            text-decoration:underline;
            text-underline-offset:3px;
          }
          .ddc-empty-link ha-icon{
            --mdc-icon-size:17px;
          }

          /* --- hold-to-edit ring (cursor progress) --- */
          .ddc-press-ring{
            position:fixed; z-index:100000; width:44px; height:44px; pointer-events:none;
            margin-left:-22px; margin-top:-22px;
            filter: drop-shadow(0 2px 6px rgba(0,0,0,.35));
          }
          .ddc-press-ring svg{width:44px;height:44px}
          .ddc-press-ring .pr-bg{stroke: rgba(255,255,255,.45); stroke-width:4; fill:none}
          .ddc-press-ring .pr-fg{stroke: var(--primary-color); stroke-width:4; fill:none; stroke-linecap:round}
          .ddc-press-ring .pr-dot{fill: var(--primary-color); opacity:.95}

          /* --- edit-mode ripple transition --- */
          .ddc-ripple-veil{
            position:absolute; inset:0; pointer-events:none; z-index:80; overflow:hidden;
            mix-blend-mode: screen;
          }
          .ddc-ripple-veil::before{
            content:""; position:absolute; left: var(--rip-x, 50%); top: var(--rip-y, 50%);
            width:0px; height:0px; transform: translate(-50%,-50%);
            border-radius:50%;
            background:
              radial-gradient(closest-side, rgba(3,169,244,.55), rgba(3,169,244,.25) 45%, rgba(0,0,0,0) 65%),
              radial-gradient(closest-side, rgba(0,150,136,.35), rgba(0,150,136,.15) 50%, rgba(0,0,0,0) 70%);
            filter: blur(12px);
            animation: ddc-ripple-grow 900ms ease-out forwards;
          }
          .ddc-ripple-veil::after{
            content:""; position:absolute; inset:-20%;
            background:
              repeating-linear-gradient(115deg, rgba(3,169,244,.09) 0 12px, rgba(0,0,0,0) 12px 24px);
            opacity:0;
            animation: ddc-ripple-scan 900ms ease-out forwards;
          }
          @keyframes ddc-ripple-grow{
            0%   { width:0; height:0; opacity:.9 }
            60%  { width:150vmax; height:150vmax; opacity:.9 }
            100% { width:170vmax; height:170vmax; opacity:0 }
          }
          @keyframes ddc-ripple-scan{
            0%   { transform:scale(.96) rotate(0deg); opacity:0 }
            40%  { opacity:.7 }
            100% { transform:scale(1.06) rotate(2deg); opacity:0 }
          }


/* ===== DDC TABS — Minimal Redesign (pills with accent tint) ===== */
    
/* ====================================================================
   CHROME-LIKE TABS • spaced + concave bottoms (sticky, CSS-only)
   ==================================================================== */

/*
 * Tabs bar: stick below the toolbar when edit mode is active.
 * The top offset uses a CSS custom property --ddc-toolbar-height set via
 * JavaScript when toggling edit mode. This keeps the tabs visually docked
 * beneath the edit toolbar without giving the whole strip a heavy solid bar.
 */
.ddc-tabs{
  --bg: var(--card-background-color, #16181c);
  --fg: var(--primary-text-color, #e6e8ea);
  --accent: color-mix(
    in oklab,
    var(--state-icon-active-color, var(--primary-color, #6aa4ff)) 68%,
    var(--primary-color, #6aa4ff) 32%
  );
  --tab-surface: color-mix(in oklab, var(--card-background-color, #16181c) 90%, rgba(255,255,255,.06));
  --tab-border: color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 72%, transparent);
  --tab-shadow: 0 18px 34px rgba(16,18,23,.18);
  --tab-dock-bg:
    linear-gradient(
      180deg,
      color-mix(in oklab, var(--card-background-color, #16181c) 94%, rgba(255,255,255,.05)),
      color-mix(in oklab, var(--primary-background-color, #0f1216) 92%, rgba(255,255,255,.02))
    );
  --tab-dock-border: color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 76%, transparent);
  --tab-dock-fg: color-mix(in oklab, var(--primary-text-color, #e6e8ea) 94%, transparent);
  --tab-idle-bg: transparent;
  --tab-idle-hover: color-mix(in oklab, var(--primary-color, #6aa4ff) 10%, transparent);
  --tab-active-fg: color-mix(in oklab, var(--primary-text-color, #ffffff) 96%, rgba(0,0,0,.04));
  --tab-active-bg:
    linear-gradient(
      180deg,
      color-mix(in oklab, var(--accent) 88%, rgba(255,255,255,.16)),
      color-mix(in oklab, var(--accent) 78%, rgba(0,0,0,.06))
    );
  --tab-active-shadow:
    0 14px 24px color-mix(in oklab, var(--accent) 24%, transparent),
    inset 0 1px 0 rgba(255,255,255,.18);

  position: sticky;
  top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px));
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: clamp(10px, 1.5vw, 16px);
  width: fit-content;
  max-width: min(100%, calc(100vw - var(--ddc-left-gutter, 0px) - var(--ddc-right-gutter, 0px) - 24px));
  box-sizing: border-box;
  padding: 10px clamp(12px, 2vw, 18px);
  border-radius: 28px;
  background: transparent;
  border: 0;
  box-shadow: none;
  color: var(--tab-dock-fg);
  backdrop-filter: blur(14px) saturate(1.02);
  -webkit-backdrop-filter: blur(14px) saturate(1.02);
  margin-inline: auto;
  isolation: isolate;

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  scrollbar-gutter: stable;
  -webkit-mask-image: none;
  mask-image: none;
}

.ddc-tabs::before,
.ddc-tabs::after{
  display:none;
}

.ddc-tabs:not(.ddc-tabs-left)::before{
  content:"";
  display:block;
  position:absolute;
  inset:0;
  border-radius:inherit;
  background: var(--tab-dock-bg);
  border: 1px solid var(--tab-dock-border);
  box-shadow: var(--tab-shadow);
  pointer-events:none;
  z-index:-1;
}

.ddc-tabs::-webkit-scrollbar{ height: 8px; }
.ddc-tabs::-webkit-scrollbar-thumb{
  background: color-mix(in oklab, var(--fg) 26%, transparent);
  border-radius: 999px;
}
.ddc-tabs::-webkit-scrollbar-track{ background: transparent; }

.ddc-tab{
  -webkit-tap-highlight-color: transparent;
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: clamp(56px, 5vw, 64px);
  max-width: min(260px, 46vw);
  height: 56px;
  padding: 0 16px;
  border: 0;
  border-radius: 20px;
  scroll-snap-align: start;

  font: 600 14px/1 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  letter-spacing: .02em;
  color: color-mix(in oklab, var(--tab-dock-fg) 92%, rgba(0,0,0,.18));
  cursor: pointer;
  user-select: none;
  pointer-events: auto;

  background: var(--tab-idle-bg);
  box-shadow: none;
  transition:
    transform .16s cubic-bezier(.2,.6,.2,1),
    box-shadow .18s ease,
    color .16s ease,
    background .18s ease,
    opacity .16s ease;
}

.ddc-tab ha-icon{
  --mdc-icon-size: 24px;
  opacity: .96;
}

.ddc-tab .ddc-tab-label{
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ddc-tab.ddc-tab--has-icon{
  width: 56px;
  min-width: 56px;
  padding: 0;
}

.ddc-tab.ddc-tab--has-icon .ddc-tab-label{
  display:none;
}

.ddc-tab:hover{
  transform: translateY(-1px);
  background: var(--tab-idle-hover);
  box-shadow: inset 0 0 0 1px rgba(40,44,52,.06);
}

.ddc-tab:active{
  transform: translateY(0) scale(.985);
}

.ddc-tab:focus-visible{
  outline: none;
  box-shadow:
    0 0 0 2px color-mix(in oklab, var(--accent) 60%, transparent),
    0 0 0 6px color-mix(in oklab, var(--accent) 16%, transparent);
}

.ddc-tab::after{
  display:none;
}

.ddc-tab.active{
  color: var(--tab-active-fg);
  background: var(--tab-active-bg);
  box-shadow: var(--tab-active-shadow);
}

.ddc-tab[disabled],
.ddc-tab[aria-disabled="true"]{
  opacity:.55;
  cursor:not-allowed;
  filter:saturate(.75);
}

.ddc-tabs.ddc-tabs-left{
  position: fixed;
  left: var(--ddc-left-rail-left, calc(var(--ddc-left-gutter, 0px) + (var(--ddc-left-rail-width) / 2) + 16px));
  top: 50vh;
  transform: translate(-50%, -50%);
  align-self: auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  width: var(--ddc-left-rail-width);
  min-width: var(--ddc-left-rail-width);
  max-width: var(--ddc-left-rail-width);
  padding: 14px 10px;
  overflow: visible;
  background: var(--tab-dock-bg);
  border: 1px solid var(--tab-dock-border);
  border-radius: 30px;
  box-shadow: 0 24px 42px rgba(8,10,14,.22);
  backdrop-filter: blur(10px) saturate(1.02);
  -webkit-backdrop-filter: blur(10px) saturate(1.02);
  margin-inline: 0;
  z-index: 6;
}

.ddc-tabs.ddc-tabs-bottom{
  position: fixed;
  left: calc(var(--ddc-left-gutter, 0px) + 50%);
  right: auto;
  top: auto;
  bottom: max(env(safe-area-inset-bottom, 0px), 12px);
  transform: translateX(-50%);
  width: fit-content;
  max-width: calc(100vw - var(--ddc-left-gutter, 0px) - var(--ddc-right-gutter, 0px) - 24px);
  justify-content: center;
  padding: 10px clamp(12px, 2vw, 18px);
  z-index: 6;
}

.ddc-tabs.ddc-tabs-left::before,
.ddc-tabs.ddc-tabs-left::after{
  display:none;
}

.ddc-sidebar .ddc-tabs.ddc-tabs-left{
  position:static;
  left:auto;
  top:auto;
  transform:none;
  width:100%;
  min-width:0;
  max-width:100%;
  margin:0;
  z-index:auto;
  display:grid;
  gap:7px;
  padding:0;
  border:0;
  border-radius:0;
  background:transparent;
  box-shadow:none;
  backdrop-filter:none;
  -webkit-backdrop-filter:none;
}

:host([ddc-fixed-ui]) .ddc-sidebar .ddc-tabs.ddc-tabs-left{
  position:static;
  left:auto;
  top:auto;
  transform:none;
  width:100%;
  max-width:100%;
}

.ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab{
  min-height:48px;
  height:auto;
  justify-content:flex-start;
  padding:0 12px;
  border-radius:14px;
  border:1px solid transparent;
  color:var(--ddc-sidebar-muted);
  background:
    linear-gradient(180deg, rgba(255,255,255,.036), rgba(255,255,255,.012)),
    transparent;
}

.ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon{
  width:100%;
  min-width:0;
  align-self:stretch;
}

.ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon .ddc-tab-label{
  display:block;
}

.ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab ha-icon{
  --mdc-icon-size:23px;
  color:currentColor;
}

.ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab.active{
  color:white;
  background:
    linear-gradient(135deg, color-mix(in oklab, var(--ddc-sidebar-accent) 88%, #111827 12%), color-mix(in oklab, var(--ddc-sidebar-accent-2) 70%, #111827 30%));
  box-shadow:
    0 12px 24px color-mix(in oklab, var(--ddc-sidebar-accent) 24%, transparent),
    inset 0 1px 0 rgba(255,255,255,.18);
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab{
  width:54px;
  min-width:54px;
  min-height:54px;
  justify-content:center;
  padding:0;
  border-radius:15px;
}

.ddc-root.ddc-sidebar-density-compact .ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab .ddc-tab-label{
  display:none;
}

.ddc-tabs.ddc-tabs-left .ddc-tab{
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 60px;
  height: 60px;
  padding: 0 10px;
  border-radius: 18px;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  gap: 10px;
  color: color-mix(in oklab, var(--tab-dock-fg) 78%, transparent);
  background: transparent;
  box-shadow: none;
}

.ddc-tabs.ddc-tabs-left .ddc-tab ha-icon{
  --mdc-icon-size: 24px;
}

.ddc-tabs.ddc-tabs-left .ddc-tab .ddc-tab-label{
  font-size: 12px;
  line-height: 1.15;
  white-space: nowrap;
}

.ddc-tabs.ddc-tabs-left .ddc-tab.active{
  color: var(--tab-active-fg);
  background: var(--tab-active-bg);
  box-shadow: var(--tab-active-shadow);
}

.ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon{
  width: 60px;
  min-width: 60px;
  align-self: center;
}

.ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon .ddc-tab-label{
  display:none;
}

.ddc-tabs.ddc-tabs-left .ddc-tab:not(.ddc-tab--has-icon){
  min-height: 66px;
  height: auto;
  padding-block: 12px;
}

/* Sidebar as a bounded drag-and-drop canvas */
.ddc-root.ddc-sidebar-density-compact{
  --ddc-sidebar-width: clamp(236px, 16vw, 300px);
}

.ddc-root.ddc-sidebar-density-comfortable{
  --ddc-sidebar-width: clamp(292px, 20vw, 360px);
}

.ddc-root.ddc-sidebar-density-spacious{
  --ddc-sidebar-width: clamp(340px, 24vw, 430px);
}

.ddc-root.ddc-sidebar-layout > .ddc-sidebar{
  display:grid;
  grid-template-rows:auto minmax(0, 1fr);
  align-content:start;
  gap:12px;
  min-width:0;
  height:auto;
  min-height:0;
  max-height:none;
  overflow:visible;
}

.ddc-sidebar-header-slot[hidden]{
  display:none;
}

.ddc-sidebar-header-button{
  width:100%;
  appearance:none;
  border:0;
  padding:0;
  margin:0;
  color:inherit;
  font:inherit;
  text-align:left;
  background:transparent;
  cursor:pointer;
}

.ddc-sidebar-header-mark ha-icon{
  --mdc-icon-size:22px;
}

.ddc-sidebar-header-date-mark{
  gap:0;
  line-height:1;
  text-transform:uppercase;
}

.ddc-sidebar-header-date-mark span{
  font-size:9px;
  font-weight:900;
}

.ddc-sidebar-header-date-mark b{
  font-size:18px;
  font-weight:950;
}

.ddc-sidebar-header-avatars{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  min-width:54px;
}

.ddc-sidebar-header-avatars .ddc-sidebar-person-avatar{
  width:28px;
  height:28px;
  margin-left:-8px;
  border:2px solid var(--ddc-sidebar-panel);
}

.ddc-sidebar-workspace{
  min-width:0;
  min-height:0;
  display:grid;
  grid-template-rows:auto minmax(0, 1fr);
  gap:9px;
}

.ddc-sidebar-workspace-bar{
  min-width:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  padding:0 2px 0 8px;
  color:var(--ddc-sidebar-muted);
  font-size:11px;
  font-weight:850;
}

.ddc-sidebar:not(.is-editing) .ddc-sidebar-workspace-bar{
  display:none;
}

.ddc-sidebar:not(.is-editing) .ddc-sidebar-workspace{
  gap:0;
}

.ddc-sidebar-workspace-bar span{
  min-width:0;
  display:inline-flex;
  align-items:center;
  gap:6px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ddc-sidebar-workspace-bar ha-icon{
  --mdc-icon-size:16px;
}

.ddc-sidebar-add-card{
  width:34px;
  height:34px;
  display:none;
  place-items:center;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 30%, var(--ddc-sidebar-line));
  border-radius:12px;
  color:var(--ddc-sidebar-text);
  background:color-mix(in oklab, var(--ddc-sidebar-accent) 14%, var(--ddc-sidebar-panel-raised));
  cursor:pointer;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
}

.ddc-sidebar-add-card.is-visible{
  display:grid;
}

.ddc-sidebar-add-card ha-icon{
  --mdc-icon-size:20px;
}

.ddc-sidebar-canvas{
  position:relative;
  min-width:0;
  width:100%;
  height:var(--ddc-sidebar-canvas-frame-height, 520px);
  min-height:280px;
  overflow:hidden;
  border-radius:18px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-line) 86%, transparent);
  background:color-mix(in oklab, var(--ddc-sidebar-panel-raised) 52%, transparent);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.035);
  touch-action:auto;
}

.ddc-sidebar-canvas.is-editing{
  background:
    linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255,255,255,.035) 1px, transparent 1px),
    color-mix(in oklab, var(--ddc-sidebar-panel-raised) 76%, transparent);
  background-size:
    max(20px, var(--grid-size, 20px)) max(20px, var(--grid-size, 20px)),
    max(20px, var(--grid-size, 20px)) max(20px, var(--grid-size, 20px)),
    auto;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.06), inset 0 0 0 1px rgba(255,255,255,.025);
  touch-action:none;
  cursor:crosshair;
}

.ddc-sidebar-canvas.is-empty:not(.is-editing){
  height:96px;
  min-height:96px;
  border-style:dashed;
  background:transparent;
  box-shadow:none;
}

.ddc-sidebar-empty{
  position:absolute;
  inset:12px;
  display:grid;
  place-items:center;
  align-content:center;
  gap:8px;
  border:1px dashed color-mix(in oklab, var(--ddc-sidebar-accent) 30%, var(--ddc-sidebar-line));
  border-radius:14px;
  color:var(--ddc-sidebar-muted);
  font-size:12px;
  font-weight:800;
  pointer-events:none;
}

.ddc-sidebar-canvas:not(.is-editing) .ddc-sidebar-empty{
  inset:0;
  border:0;
  background:transparent;
  cursor:pointer;
  pointer-events:auto;
}

.ddc-sidebar-empty[hidden]{
  display:none;
}

.ddc-sidebar-empty ha-icon{
  --mdc-icon-size:28px;
  color:color-mix(in oklab, var(--ddc-sidebar-accent) 68%, var(--ddc-sidebar-muted) 32%);
}

.ddc-sidebar-drag-rect{
  position:absolute;
  left:0;
  top:0;
  z-index:20;
  min-width:1px;
  min-height:1px;
  border:1px solid color-mix(in oklab, var(--ddc-sidebar-accent) 68%, white 12%);
  border-radius:12px;
  background:color-mix(in oklab, var(--ddc-sidebar-accent) 18%, transparent);
  box-shadow:0 10px 24px color-mix(in oklab, var(--ddc-sidebar-accent) 16%, transparent);
  pointer-events:none;
}

.ddc-sidebar-card-wrapper{
  position:absolute;
  left:0;
  top:0;
  min-width:48px;
  min-height:44px;
  margin:0;
  box-sizing:border-box;
  overflow:visible;
  transform-origin:0 0;
  border-radius:14px;
  touch-action:auto;
}

.ddc-sidebar-card-wrapper.editing{
  touch-action:none;
}

.ddc-sidebar-card-wrapper.dragging{
  z-index:9999 !important;
}

.ddc-sidebar-card-wrapper > :first-child{
  width:100%;
  height:100%;
  display:block;
}

.ddc-sidebar-card-wrapper .chip{
  top:8px;
  left:50%;
  max-width:calc(100% - 16px);
  padding:6px;
  transform:translateX(-50%) scale(var(--ddc-edit-ui-scale, 1));
}

.ddc-sidebar-card-wrapper .resize-handle{
  right:-10px;
  bottom:-10px;
}

@container ddc-root (max-width: 980px){
  .ddc-root.ddc-sidebar-layout > .ddc-sidebar{
    position:relative;
    top:auto;
    height:auto;
    max-height:none;
    overflow:visible;
  }

  .ddc-sidebar-canvas{
    height:min(var(--ddc-sidebar-canvas-frame-height, 520px), 70vh);
  }
}

@container ddc-root (max-width: 640px){
  .ddc-tabs.ddc-tabs-left{
    position: sticky;
    left: auto;
    top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px));
    transform: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    padding: 10px 12px;
    overflow-x: auto;
    overflow-y: hidden;
    margin-inline: auto;
    z-index: 5;
  }

  .ddc-tabs.ddc-tabs-left .ddc-tab{
    min-width: 56px;
    width: auto;
    min-height: 56px;
    height: 56px;
    padding: 0 16px;
    flex-direction: row;
    gap: 10px;
    color: color-mix(in oklab, var(--tab-dock-fg) 92%, rgba(0,0,0,.18));
  }

  .ddc-tabs.ddc-tabs-left .ddc-tab .ddc-tab-label{
    white-space: nowrap;
  }

  .ddc-tabs.ddc-tabs-left .ddc-tab.active{
    transform: none;
  }

  .ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon{
    width: 56px;
    min-width: 56px;
    align-self: auto;
  }
}

@container ddc-root (max-width: 640px){
  .ddc-sidebar .ddc-tabs.ddc-tabs-left{
    position:static;
    left:auto;
    top:auto;
    transform:none;
    display:grid;
    flex-direction:column;
    align-items:stretch;
    justify-content:start;
    width:100%;
    min-width:188px;
    max-width:100%;
    margin:0;
    padding:0;
    overflow:auto;
    background:transparent;
    border:0;
    box-shadow:none;
  }

  .ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab{
    width:100%;
    min-width:0;
    min-height:48px;
    height:auto;
    justify-content:flex-start;
    padding:0 12px;
  }

  .ddc-sidebar .ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon{
    width:100%;
    min-width:0;
  }
}

@media (max-width: 768px) {
  :host([ddc-fixed-ui]) .ddc-tabs,
  .ddc-tabs{
    left: 0;
    transform: none;
    width: fit-content;
    max-width: calc(100vw - 20px);
    margin: 0 auto;
    padding-inline: 10px;
    scroll-snap-type: none;
  }

  .ddc-tabs:not(.ddc-tabs-left)::before{
    inset: 0;
  }

  .ddc-tab{
    min-width: 56px;
    height: 54px;
    padding-inline: 14px;
  }
}

@media (max-width: 768px) {
  .ddc-sidebar .ddc-tabs.ddc-tabs-left{
    position:static !important;
    left:auto !important;
    top:auto !important;
    right:auto !important;
    bottom:auto !important;
    transform:none !important;
    width:100% !important;
    max-width:100% !important;
    margin:0 !important;
    padding:0 !important;
  }
}

.ddc-root.ddc-preview-docked-tabs{
  row-gap: clamp(12px, 2vw, 24px);
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs,
.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left,
.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-bottom{
  position: relative !important;
  left: auto !important;
  right: auto !important;
  top: auto !important;
  bottom: auto !important;
  transform: none !important;
  width: fit-content !important;
  min-width: 0 !important;
  max-width: min(100%, calc(var(--ddc-preview-width, 100%) + 48px)) !important;
  margin: 26px auto 0 !important;
  padding: 10px clamp(12px, 2vw, 18px) !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  backdrop-filter: blur(14px) saturate(1.02) !important;
  -webkit-backdrop-filter: blur(14px) saturate(1.02) !important;
  z-index: 4 !important;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left::before,
.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-bottom::before,
.ddc-root.ddc-preview-docked-tabs > .ddc-tabs::before{
  display: block;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-tab{
  width: auto;
  max-width: min(260px, 46vw);
  min-width: clamp(56px, 5vw, 64px);
  min-height: 56px;
  height: 56px;
  padding: 0 16px;
  border-radius: 20px;
  gap: 10px;
  color: color-mix(in oklab, var(--tab-dock-fg) 92%, rgba(0,0,0,.18));
  background: var(--tab-idle-bg);
  box-shadow: none;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-tab.active{
  color: var(--tab-active-fg);
  background: var(--tab-active-bg);
  box-shadow: var(--tab-active-shadow);
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon{
  width: 56px;
  min-width: 56px;
  align-self: auto;
}

@media (prefers-color-scheme: dark){
  .ddc-tabs{
    --bg: var(--card-background-color, #0f1216);
    --fg: var(--primary-text-color, #e6e8ea);
  }
}

@media (prefers-reduced-motion: reduce){
  .ddc-tab,
  .ddc-tab::after{
    transition: none !important;
  }
}

@supports not (scrollbar-gutter: stable){
  .ddc-tabs{ padding-inline-end: 24px; }
}

/* ===== DDC Tabs —END ==================== */

/* ===== DDC Layers menu ==================== */
.ddc-layers{
  display:none !important;
}

.ddc-tabs.ddc-layer-menu-open{
  overflow:visible;
  scrollbar-gutter:auto;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-layer-menu-open{
  overflow:visible !important;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-layer-menu{
  width:auto;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-layer-trigger{
  width:auto;
  min-width:58px;
  height:46px;
  min-height:46px;
  padding:0 12px;
  border-radius:999px;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-layer-trigger-label{
  position:static;
  inline-size:auto;
  block-size:auto;
  overflow:visible;
  clip-path:none;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-layer-trigger-copy{
  position:static;
  inline-size:auto;
  block-size:auto;
  overflow:visible;
  clip-path:none;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-layer-count{
  position:static;
  min-width:24px;
  height:24px;
  font-size:12px;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-layer-menu-panel{
  top:calc(100% + 10px);
  right:0;
  bottom:auto;
  left:auto;
  transform:none;
  transform-origin:top right;
  animation:ddc-layer-menu-in .16s ease-out both;
}

.ddc-layer-menu{
  position:relative;
  z-index:12;
  flex:0 0 auto;
  display:flex;
  align-items:center;
  justify-content:center;
}

.ddc-layer-trigger{
  --ddc-layer-accent: var(--ddc-sidebar-accent, var(--primary-color, #8b5cf6));
  position:relative;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:0;
  width:58px;
  min-width:58px;
  height:58px;
  min-height:58px;
  padding:0;
  overflow:hidden;
  border:1px solid color-mix(in oklab, var(--ddc-layer-accent) 34%, rgba(255,255,255,.14));
  border-radius:18px;
  background:
    radial-gradient(circle at 8% 0%, color-mix(in oklab, var(--ddc-layer-accent) 32%, transparent), transparent 46%),
    linear-gradient(135deg, color-mix(in oklab, var(--ddc-layer-accent) 14%, transparent), transparent 58%),
    linear-gradient(
      180deg,
      color-mix(in oklab, var(--card-background-color, #111827) 90%, var(--ddc-layer-accent) 10%),
      color-mix(in oklab, var(--primary-background-color, #0b1220) 93%, var(--ddc-layer-accent) 7%)
    );
  color:color-mix(in oklab, var(--primary-text-color, #f8fafc) 88%, var(--ddc-layer-accent) 12%);
  font:700 14px/1 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  letter-spacing:0;
  cursor:pointer;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.08),
    0 12px 26px rgba(0,0,0,.16);
  transition:
    transform .16s ease,
    color .16s ease,
    border-color .18s ease,
    background .18s ease,
    box-shadow .18s ease;
}

.ddc-layer-trigger.details{
  width:auto;
  min-width:186px;
  gap:11px;
  padding:0 13px 0 16px;
  border-radius:20px;
}

.ddc-layer-trigger::before{
  content:"";
  position:absolute;
  left:0;
  top:10px;
  bottom:10px;
  width:3px;
  border-radius:999px;
  background:linear-gradient(180deg, var(--ddc-layer-accent), color-mix(in oklab, var(--ddc-layer-accent) 42%, #22d3ee 58%));
  box-shadow:0 0 18px color-mix(in oklab, var(--ddc-layer-accent) 62%, transparent);
  opacity:.82;
}

.ddc-layer-trigger.compact::before{
  display:none;
}

.ddc-layer-trigger ha-icon{
  --mdc-icon-size:24px;
  width:38px;
  height:38px;
  display:grid;
  place-items:center;
  border-radius:14px;
  background:color-mix(in oklab, var(--ddc-layer-accent) 14%, rgba(255,255,255,.04));
  color:color-mix(in oklab, var(--ddc-layer-accent) 72%, var(--primary-text-color, #f8fafc) 28%);
}

.ddc-layer-trigger-copy{
  min-width:0;
  display:grid;
  gap:3px;
  text-align:left;
}

.ddc-layer-trigger-meta{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  color:var(--secondary-text-color, #9ca3af);
  font-size:10px;
  font-weight:760;
  line-height:1;
}

.ddc-layer-trigger:hover,
.ddc-layer-trigger.active{
  transform:translateY(-1px);
  color:var(--primary-color, #a855f7);
  border-color:color-mix(in oklab, var(--ddc-layer-accent) 44%, transparent);
  background:
    linear-gradient(
      180deg,
      color-mix(in oklab, var(--ddc-layer-accent) 18%, var(--card-background-color, #111827)),
      color-mix(in oklab, var(--ddc-layer-accent) 12%, var(--primary-background-color, #0b1220))
    );
  box-shadow:
    0 18px 34px color-mix(in oklab, var(--ddc-layer-accent) 20%, transparent),
    inset 0 1px 0 rgba(255,255,255,.12);
}

.ddc-layer-trigger:focus-visible{
  outline:none;
  box-shadow:
    0 0 0 2px color-mix(in oklab, var(--ddc-layer-accent) 62%, transparent),
    0 0 0 6px color-mix(in oklab, var(--ddc-layer-accent) 18%, transparent),
    inset 0 1px 0 rgba(255,255,255,.12);
}

.ddc-layer-count{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:28px;
  height:28px;
  padding:0 8px;
  border-radius:999px;
  background:
    radial-gradient(circle at 30% 20%, rgba(255,255,255,.22), transparent 42%),
    color-mix(in oklab, var(--ddc-layer-accent) 84%, rgba(0,0,0,.04));
  color:#fff;
  font-size:13px;
  line-height:1;
  font-weight:900;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.2),
    0 8px 18px color-mix(in oklab, var(--ddc-layer-accent) 28%, transparent);
}

.ddc-layer-menu-panel{
  --ddc-menu-bg: color-mix(in oklab, var(--card-background-color, #0f172a) 88%, rgba(15,23,42,.38));
  position:absolute;
  top:calc(100% + 10px);
  right:0;
  z-index:40;
  display:grid;
  gap:10px;
  min-width:320px;
  max-width:min(380px, calc(100vw - 32px));
  max-height:min(70vh, 620px);
  overflow:auto;
  padding:14px;
  border-radius:24px;
  border:1px solid color-mix(in oklab, var(--ddc-layer-accent, var(--primary-color, #8b5cf6)) 32%, rgba(255,255,255,.14));
  background:
    radial-gradient(circle at 0% 0%, color-mix(in oklab, var(--ddc-layer-accent, var(--primary-color, #8b5cf6)) 18%, transparent), transparent 48%),
    linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.015)),
    var(--ddc-menu-bg);
  box-shadow:
    0 20px 42px rgba(0,0,0,.32),
    inset 0 1px 0 rgba(255,255,255,.08);
  backdrop-filter: blur(18px) saturate(1.08);
  -webkit-backdrop-filter: blur(18px) saturate(1.08);
  transform-origin:top right;
  animation:ddc-layer-menu-in .16s ease-out both;
}

.ddc-layer-menu-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding:4px 4px 8px;
  border-bottom:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.14)) 72%, transparent);
}

.ddc-layer-menu-head strong{
  color:var(--primary-text-color, #f8fafc);
  font-size:14px;
  font-weight:850;
}

.ddc-layer-menu-head span{
  color:var(--secondary-text-color, #9ca3af);
  font-size:11px;
  font-weight:760;
}

.ddc-tabs-bottom .ddc-layer-menu-panel{
  top:auto;
  bottom:calc(100% + 10px);
  transform-origin:bottom right;
}

.ddc-layer-option{
  --ddc-layer-accent: var(--ddc-sidebar-accent, var(--primary-color, #8b5cf6));
  position:relative;
  display:grid;
  grid-template-columns:40px minmax(0, 1fr) 28px;
  align-items:center;
  gap:12px;
  width:100%;
  min-height:62px;
  padding:0 12px;
  overflow:hidden;
  border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 60%, transparent);
  border-radius:18px;
  background:
    linear-gradient(135deg, rgba(255,255,255,.042), rgba(255,255,255,.016)),
    color-mix(in oklab, var(--card-background-color, #111827) 72%, transparent);
  color:color-mix(in oklab, var(--primary-text-color, #f8fafc) 86%, transparent);
  font:650 13px/1.2 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  letter-spacing:0;
  text-align:left;
  cursor:pointer;
  transition:
    color .16s ease,
    background .16s ease,
    box-shadow .16s ease,
    transform .16s ease;
}

.ddc-layer-option-icon{
  --mdc-icon-size:23px;
  width:40px;
  height:40px;
  display:grid;
  place-items:center;
  border-radius:15px;
  background:color-mix(in oklab, var(--ddc-layer-accent) 10%, rgba(255,255,255,.035));
  color:color-mix(in oklab, var(--primary-text-color, #f8fafc) 74%, transparent);
}

.ddc-layer-option-copy{
  min-width:0;
  display:grid;
  gap:3px;
}

.ddc-layer-option-label{
  display:block;
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size:13px;
  line-height:1.1;
}

.ddc-layer-option-meta{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  color:var(--secondary-text-color, #9ca3af);
  font-size:10px;
  font-weight:760;
}

.ddc-layer-option-check{
  --mdc-icon-size:23px;
  justify-self:end;
  color:color-mix(in oklab, var(--ddc-layer-accent) 76%, #fff 24%);
  opacity:0;
  transform:scale(.82);
  transition:opacity .16s ease, transform .16s ease;
}

.ddc-layer-option:hover,
.ddc-layer-option:focus-visible,
.ddc-layer-option.active{
  outline:none;
  transform:translateY(-1px);
  color:color-mix(in oklab, var(--ddc-layer-accent) 78%, #fff 22%);
  background:
    linear-gradient(
      135deg,
      color-mix(in oklab, var(--ddc-layer-accent) 24%, transparent),
      color-mix(in oklab, var(--ddc-layer-accent) 8%, transparent)
    ),
    rgba(255,255,255,.035);
  border-color:color-mix(in oklab, var(--ddc-layer-accent) 36%, transparent);
  box-shadow:
    0 12px 24px color-mix(in oklab, var(--ddc-layer-accent) 12%, transparent),
    inset 0 0 0 1px color-mix(in oklab, var(--ddc-layer-accent) 14%, transparent);
}

.ddc-layer-option:hover .ddc-layer-option-icon,
.ddc-layer-option:focus-visible .ddc-layer-option-icon,
.ddc-layer-option.active .ddc-layer-option-icon{
  color:color-mix(in oklab, var(--ddc-layer-accent) 72%, #fff 28%);
}

.ddc-layer-option.active .ddc-layer-option-check{
  opacity:1;
  transform:scale(1);
}

.ddc-tabs-left .ddc-layer-menu{
  width:100%;
}

.ddc-tabs-left .ddc-layer-trigger{
  width:58px;
  min-width:58px;
  height:58px;
  min-height:58px;
  padding:0;
  border-radius:18px;
}

.ddc-tabs-left .ddc-layer-trigger-copy,
.ddc-tabs-left .ddc-layer-trigger-label{
  position:absolute;
  inline-size:1px;
  block-size:1px;
  overflow:hidden;
  clip-path:inset(50%);
  white-space:nowrap;
}

.ddc-tabs-left .ddc-layer-count{
  position:absolute;
  top:5px;
  right:5px;
  min-width:19px;
  height:19px;
  padding:0 5px;
  font-size:10px;
}

.ddc-tabs-left .ddc-layer-menu-panel{
  top:50%;
  right:auto;
  left:calc(100% + 10px);
  transform:translateY(-50%);
  transform-origin:left center;
  animation:ddc-layer-menu-left-in .16s ease-out both;
}

@keyframes ddc-layer-menu-in{
  from{ opacity:0; transform:translateY(-4px) scale(.98); }
  to{ opacity:1; transform:translateY(0) scale(1); }
}

@keyframes ddc-layer-menu-left-in{
  from{ opacity:0; transform:translateY(-50%) translateX(-4px) scale(.98); }
  to{ opacity:1; transform:translateY(-50%) translateX(0) scale(1); }
}

@media (prefers-reduced-motion: reduce){
  .ddc-layer-menu-panel{
    animation:none !important;
  }
  .ddc-layer-trigger,
  .ddc-layer-option,
  .ddc-layer-option-check{
    transition:none !important;
  }
}

@container ddc-root (max-width: 640px){
  .ddc-tabs-left .ddc-layer-menu{
    width:auto;
  }
  .ddc-tabs-left .ddc-layer-trigger{
    width:auto;
    min-width:58px;
    height:46px;
    min-height:46px;
    padding:0 12px;
    border-radius:999px;
  }
  .ddc-tabs-left .ddc-layer-trigger-label{
    position:static;
    inline-size:auto;
    block-size:auto;
    overflow:visible;
    clip-path:none;
  }
  .ddc-tabs-left .ddc-layer-trigger-copy{
    position:static;
    inline-size:auto;
    block-size:auto;
    overflow:visible;
    clip-path:none;
  }
  .ddc-tabs-left .ddc-layer-count{
    position:static;
    min-width:24px;
    height:24px;
    font-size:12px;
  }
  .ddc-tabs-left .ddc-layer-menu-panel{
    top:calc(100% + 10px);
    right:0;
    bottom:auto;
    left:auto;
    transform:none;
    transform-origin:top right;
    animation:ddc-layer-menu-in .16s ease-out both;
  }
}

@media (max-width: 640px){
  .ddc-layer-trigger{
    min-width:58px;
    padding:0 11px;
  }
  .ddc-layer-trigger.details{
    min-width:58px;
    gap:8px;
  }
  .ddc-layer-trigger-label{
    position:absolute;
    inline-size:1px;
    block-size:1px;
    overflow:hidden;
    clip-path:inset(50%);
    white-space:nowrap;
  }
  .ddc-layer-trigger-copy{
    position:absolute;
    inline-size:1px;
    block-size:1px;
    overflow:hidden;
    clip-path:inset(50%);
    white-space:nowrap;
  }
  .ddc-layer-count{
    min-width:24px;
    height:24px;
    font-size:12px;
  }
  .ddc-layer-menu-panel{
    min-width:205px;
  }
}
/* ===== DDC Layers menu END ==================== */


        /* Fly‑in animation for card wrappers. When the animate_cards
           configuration option is enabled, card wrappers will animate
           into view using this keyframe sequence. Cards translate
           upward while fading in to produce a quick, pleasant fly‑in. */
        @keyframes ddc-card-fly-in{
          0%   { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* Apply the fly‑in animation to visible cards. The animation
           duration and easing mirror other UI animations for cohesion. */
        .card-wrapper.ddc-fly-in{
          animation: ddc-card-fly-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
              

        
/* === GRID SELECT PATCH START (styles) === */
.ddc-grid-canvas {
  position: absolute;
  inset: 0;
  pointer-events: auto;     /* receives events only on empty space since it's behind cards */
  z-index: 5;               /* above visual grid, but behind draggable cards */
  background:
    linear-gradient(135deg, rgba(8, 47, 73, .035), rgba(14, 116, 144, .018));
}
.ddc-grid-canvas--light{
  --ddc-blueprint-major:rgba(74, 222, 255, .34);
  --ddc-blueprint-minor:rgba(125, 211, 252, .12);
  --ddc-blueprint-dot:rgba(224, 242, 254, .36);
  background-color:rgba(7, 43, 66, .052);
  background-image:
    radial-gradient(circle at 1px 1px, var(--ddc-blueprint-dot) 0 1px, transparent 1.6px),
    linear-gradient(var(--ddc-blueprint-major) 1px, transparent 1px),
    linear-gradient(90deg, var(--ddc-blueprint-major) 1px, transparent 1px),
    linear-gradient(rgba(186, 230, 253, .18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(186, 230, 253, .18) 1px, transparent 1px),
    linear-gradient(var(--ddc-blueprint-minor) 1px, transparent 1px),
    linear-gradient(90deg, var(--ddc-blueprint-minor) 1px, transparent 1px),
    linear-gradient(135deg, rgba(8, 47, 73, .16), rgba(14, 116, 144, .034) 52%, transparent 100%);
  background-size:
    var(--ddc-grid-major-size, 40px) var(--ddc-grid-major-size, 40px),
    var(--ddc-grid-major-size, 40px) var(--ddc-grid-major-size, 40px),
    var(--ddc-grid-major-size, 40px) var(--ddc-grid-major-size, 40px),
    var(--ddc-grid-super-size, 80px) var(--ddc-grid-super-size, 80px),
    var(--ddc-grid-super-size, 80px) var(--ddc-grid-super-size, 80px),
    var(--ddc-grid-cell-size, 10px) var(--ddc-grid-cell-size, 10px),
    var(--ddc-grid-cell-size, 10px) var(--ddc-grid-cell-size, 10px),
    100% 100%;
  background-position:
    0 0,
    0 0,
    0 0,
    var(--ddc-grid-half-major-offset, 20px) var(--ddc-grid-half-major-offset, 20px),
    var(--ddc-grid-half-major-offset, 20px) var(--ddc-grid-half-major-offset, 20px),
    0 0,
    0 0,
    0 0;
  box-shadow:
    inset 0 0 0 1px rgba(125, 211, 252, .22),
    inset 0 0 0 2px rgba(8, 47, 73, .14);
}
.ddc-grid-hover-cell,
.ddc-grid-selection-rect{
  position:absolute;
  left:0;
  top:0;
  z-index:5;
  pointer-events:none;
  box-sizing:border-box;
  display:none;
  contain:layout paint style;
}
.ddc-grid-hover-cell{
  background:
    radial-gradient(circle at center, rgba(224, 242, 254, .16), transparent 38%),
    linear-gradient(135deg, rgba(125, 211, 252, .18), rgba(56, 189, 248, .06));
  border:1px solid rgba(125, 211, 252, .58);
  box-shadow:
    inset 0 0 0 1px rgba(224, 242, 254, .26),
    inset 0 0 12px rgba(56, 189, 248, .10);
}
.ddc-grid-selection-rect{
  background:
    linear-gradient(rgba(224,242,254,.13) 1px, transparent 1px),
    linear-gradient(90deg, rgba(224,242,254,.13) 1px, transparent 1px),
    linear-gradient(135deg, rgba(56, 189, 248, .18), rgba(14, 165, 233, .075));
  background-size:
    var(--ddc-grid-cell-size, 10px) var(--ddc-grid-cell-size, 10px),
    var(--ddc-grid-cell-size, 10px) var(--ddc-grid-cell-size, 10px),
    100% 100%;
  border:1.5px dashed rgba(147, 197, 253, .72);
  box-shadow:
    inset 0 0 0 1px rgba(224, 242, 254, .42),
    inset 0 0 0 5px rgba(14, 165, 233, .07),
    inset 0 0 24px rgba(56, 189, 248, .08);
}
.ddc-grid-hover-cell::before,
.ddc-grid-selection-rect::before{
  content:"";
  position:absolute;
  inset:3px;
  pointer-events:none;
  background:
    linear-gradient(rgba(224,242,254,.68), rgba(224,242,254,.68)) left top / 10px 1px no-repeat,
    linear-gradient(rgba(224,242,254,.68), rgba(224,242,254,.68)) left top / 1px 10px no-repeat,
    linear-gradient(rgba(224,242,254,.68), rgba(224,242,254,.68)) right top / 10px 1px no-repeat,
    linear-gradient(rgba(224,242,254,.68), rgba(224,242,254,.68)) right top / 1px 10px no-repeat,
    linear-gradient(rgba(224,242,254,.68), rgba(224,242,254,.68)) left bottom / 10px 1px no-repeat,
    linear-gradient(rgba(224,242,254,.68), rgba(224,242,254,.68)) left bottom / 1px 10px no-repeat,
    linear-gradient(rgba(224,242,254,.68), rgba(224,242,254,.68)) right bottom / 10px 1px no-repeat,
    linear-gradient(rgba(224,242,254,.68), rgba(224,242,254,.68)) right bottom / 1px 10px no-repeat;
}
.ddc-grid-hover-cell::before{
  inset:2px;
  opacity:.72;
}
.ddc-grid-hover-cell::after,
.ddc-grid-selection-rect::after{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  background:
    repeating-linear-gradient(90deg, rgba(224,242,254,.36) 0 1px, transparent 1px 8px) top left / 100% 4px no-repeat,
    repeating-linear-gradient(90deg, rgba(224,242,254,.28) 0 1px, transparent 1px 8px) bottom left / 100% 4px no-repeat,
    repeating-linear-gradient(0deg, rgba(224,242,254,.32) 0 1px, transparent 1px 8px) top left / 4px 100% no-repeat,
    repeating-linear-gradient(0deg, rgba(224,242,254,.24) 0 1px, transparent 1px 8px) top right / 4px 100% no-repeat;
  opacity:.76;
}
.ddc-grid-hover-cell::after{
  opacity:.42;
}
.ddc-connectors-layer{
  position:absolute;
  left:0;
  top:0;
  width:var(--ddc-connectors-width, 100%);
  height:var(--ddc-connectors-height, 100%);
  z-index:auto;
  overflow:visible;
  pointer-events:none;
  color:var(--primary-color, #ff9800);
}
.card-container.grid-on .ddc-connectors-layer,
.card-container.ddc-editing-connectors .ddc-connectors-layer,
.card-container.ddc-connector-draw-mode .ddc-connectors-layer,
.card-container.ddc-connector-anchor-dragging .ddc-connectors-layer{
  z-index:auto;
}
.ddc-connectors-layer .ddc-connector-surface,
.ddc-connectors-layer .ddc-connector-capture-surface{
  position:absolute;
  left:0;
  top:0;
  width:var(--ddc-connectors-width, 100%);
  height:var(--ddc-connectors-height, 100%);
  overflow:visible;
  pointer-events:none;
}
.ddc-connectors-layer .ddc-connector-capture-surface{
  z-index:100000;
  pointer-events:all;
}
.ddc-connectors-layer .ddc-connector-track,
.ddc-connectors-layer .ddc-connector-selection,
.ddc-connectors-layer .ddc-connector-line,
.ddc-connectors-layer .ddc-connector-flow,
.ddc-connectors-layer .ddc-connector-pulse,
.ddc-connectors-layer .ddc-connector-hit,
.ddc-connectors-layer .ddc-connector-handle{
  fill:none;
  vector-effect:non-scaling-stroke;
}
.ddc-connectors-layer .ddc-connector-selection{
  pointer-events:none;
  opacity:.36;
  filter:
    drop-shadow(0 0 14px color-mix(in oklab, currentColor 42%, transparent))
    drop-shadow(0 9px 16px rgba(0,0,0,.2));
}
.ddc-connectors-layer .ddc-connector-track,
.ddc-connectors-layer .ddc-connector-line,
.ddc-connectors-layer .ddc-connector-flow,
.ddc-connectors-layer .ddc-connector-pulse{
  pointer-events:none;
}
.ddc-connectors-layer .ddc-connector-track{
  stroke:rgba(15, 23, 42, 0.34);
  opacity:.85;
  filter:drop-shadow(0 1px 2px rgba(255,255,255,.18));
}
.ddc-connectors-layer .ddc-connector-line{
  filter:none;
  opacity:.96;
  transition:opacity .15s ease, filter .15s ease;
}
.ddc-connectors-layer .ddc-connector-arrowhead{
  pointer-events:none;
  vector-effect:non-scaling-stroke;
  opacity:.98;
  filter:
    drop-shadow(0 1px 0 rgba(255,255,255,.22))
    drop-shadow(0 4px 8px rgba(0,0,0,.24));
  transition:opacity .15s ease, filter .15s ease;
}
.ddc-connectors-layer .ddc-connector-line.is-glow,
.ddc-connectors-layer .ddc-connector.is-active .ddc-connector-line.is-glow{
  filter:
    drop-shadow(0 0 8px color-mix(in oklab, currentColor 26%, transparent))
    drop-shadow(0 8px 16px rgba(0,0,0,.18));
}
.ddc-connectors-layer .ddc-connector-flow{
  stroke:rgba(255,255,255,.86);
  opacity:.78;
  animation:ddc-connector-flow 1.8s linear infinite;
  mix-blend-mode:screen;
}
.ddc-connectors-layer .ddc-connector-flow.reverse{
  animation-direction:reverse;
}
.ddc-connectors-layer .ddc-connector-pulse{
  pointer-events:none;
  opacity:.32;
  stroke-width:var(--ddc-connector-pulse-width, 14);
  animation:ddc-connector-pulse 1.8s cubic-bezier(.22, .61, .36, 1) infinite;
  mix-blend-mode:screen;
  filter:drop-shadow(0 0 16px color-mix(in oklab, currentColor 42%, transparent));
}
.ddc-connectors-layer .ddc-connector-moving-arrow{
  pointer-events:none;
  vector-effect:non-scaling-stroke;
  opacity:.96;
  filter:
    drop-shadow(0 1px 0 rgba(255,255,255,.28))
    drop-shadow(0 4px 9px rgba(0,0,0,.26));
}
.ddc-connectors-layer .ddc-connector-particle{
  pointer-events:none;
  vector-effect:non-scaling-stroke;
  opacity:.78;
  filter:
    drop-shadow(0 0 6px color-mix(in oklab, currentColor 48%, transparent))
    drop-shadow(0 2px 6px rgba(0,0,0,.22));
}
.ddc-connectors-layer .ddc-connector-hit{
  stroke:transparent;
  pointer-events:stroke;
  cursor:pointer;
}
.ddc-connectors-layer .ddc-connector-handle{
  fill:color-mix(in oklab, var(--primary-color, #ff9800) 84%, #ffffff 12%);
  stroke:rgba(255,255,255,.94);
  stroke-width:2.5;
  pointer-events:all;
  cursor:grab;
  filter:drop-shadow(0 7px 14px rgba(0,0,0,.28));
}
.ddc-connectors-layer .ddc-connector-handle:active{
  cursor:grabbing;
}
.ddc-connectors-layer .ddc-connector.is-idle .ddc-connector-line{
  opacity:.68;
}
.ddc-connectors-layer .ddc-connector.is-idle .ddc-connector-arrowhead{
  opacity:.76;
}
.ddc-connectors-layer .ddc-connector.is-selected .ddc-connector-line{
  opacity:1;
  filter:
    drop-shadow(0 0 10px color-mix(in oklab, currentColor 36%, transparent))
    drop-shadow(0 10px 18px rgba(0,0,0,.22));
}
.ddc-connectors-layer .ddc-connector.is-selected .ddc-connector-arrowhead{
  opacity:1;
  filter:
    drop-shadow(0 0 9px color-mix(in oklab, currentColor 32%, transparent))
    drop-shadow(0 6px 12px rgba(0,0,0,.28));
}
.ddc-connectors-layer .ddc-connector.is-selected .ddc-connector-track{
  stroke:color-mix(in oklab, currentColor 24%, rgba(15,23,42,.36));
  opacity:1;
}
.ddc-connectors-layer .ddc-connector.is-draft .ddc-connector-line{
  opacity:.92;
  stroke-dasharray:14 10;
  animation:ddc-connector-draft 1s linear infinite;
}
.ddc-connectors-layer .ddc-connector.is-draft,
.ddc-connectors-layer .ddc-connector.is-draft *{
  pointer-events:none !important;
}
.ddc-connectors-layer .ddc-connector.is-anchored .ddc-connector-track{
  stroke:rgba(15, 23, 42, .42);
}
.ddc-connectors-layer .ddc-connector-capture{
  fill:transparent;
  pointer-events:all;
}
.card-container.ddc-connector-draw-mode,
.card-container.ddc-connector-anchor-dragging{
  cursor:crosshair;
}
.ddc-connector-inspector{
  position:fixed;
  right:max(16px, env(safe-area-inset-right, 0px));
  top:calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px) + 16px);
  width:min(330px, calc(100vw - 24px));
  max-height:calc(100vh - (var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px) + 32px));
  z-index:70;
  display:none;
}
.ddc-connector-inspector.is-open{
  display:block;
}
.ddc-connector-inspector-card{
  display:grid;
  gap:12px;
  padding:14px;
  border-radius:18px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 76%, transparent);
  background:var(--ha-card-background, var(--card-background-color, #1f2329));
  box-shadow:0 22px 52px rgba(0,0,0,.34);
  overflow:auto;
  max-height:inherit;
}
.ddc-connector-inspector-head{
  display:flex;
  align-items:start;
  justify-content:space-between;
  gap:10px;
  padding:0 1px;
}
.ddc-connector-close{
  width:38px;
  height:38px;
  border-radius:11px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.16)) 78%, transparent);
  background:var(--secondary-background-color, rgba(255,255,255,.04));
  color:var(--primary-text-color, #fff);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 8px 18px rgba(0,0,0,.18);
  transition:transform .16s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease;
}
.ddc-connector-close:hover{
  transform:translateY(-1px);
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 26%, rgba(255,255,255,.18));
  background:color-mix(in srgb, var(--secondary-background-color, rgba(255,255,255,.04)) 82%, var(--primary-color, #ff9800) 18%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.06),
    0 12px 24px rgba(0,0,0,.24);
}
.ddc-connector-close ha-icon{
  --mdc-icon-size:22px;
}
.ddc-connector-inspector-head h3{
  margin:4px 0 0;
  font-size:1.02rem;
  line-height:1.08;
}
.ddc-connector-inspector-head p{
  margin:5px 0 0;
  font-size:.78rem;
  line-height:1.35;
  color:var(--secondary-text-color, rgba(255,255,255,.72));
}
.ddc-connector-inspector-kicker{
  font-size:.66rem;
  font-weight:700;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:color-mix(in srgb, var(--primary-text-color, #fff) 56%, transparent);
}
.ddc-connector-preview,
.ddc-connector-section{
  display:grid;
  gap:10px;
  padding:12px;
  border-radius:14px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 72%, transparent);
  background:color-mix(in srgb, var(--secondary-background-color, rgba(255,255,255,.04)) 88%, transparent);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.04);
}
.ddc-connector-preview{
  gap:8px;
}
.ddc-connector-preview-line{
  display:grid;
  place-items:center;
  min-height:36px;
  padding:0 10px;
  border-radius:12px;
  background:rgba(255,255,255,.025);
  overflow:hidden;
}
.ddc-connector-preview-stroke{
  display:block;
  width:100%;
  min-height:4px;
  border-radius:999px;
  box-shadow:0 0 0 1px rgba(255,255,255,.05);
}
.ddc-connector-preview-stroke.is-glow{
  box-shadow:
    0 0 0 1px rgba(255,255,255,.05),
    0 0 18px color-mix(in srgb, currentColor 32%, transparent);
}
.ddc-connector-preview-stroke.is-animated.is-style-flow,
.ddc-connector-preview-stroke.is-animated.is-style-particles,
.ddc-connector-preview-stroke.is-animated.is-style-arrows,
.ddc-connector-preview-stroke.is-animated.is-style-pulse-arrows{
  background-size:200% 100% !important;
  animation:ddc-connector-preview-flow 2.1s linear infinite;
}
.ddc-connector-preview-stroke.is-animated.is-style-pulse{
  animation:ddc-connector-preview-pulse 1.45s cubic-bezier(.22, .61, .36, 1) infinite;
}
.ddc-connector-preview-copy{
  display:grid;
  gap:2px;
}
.ddc-connector-preview-copy strong{
  font-size:.84rem;
  font-weight:800;
}
.ddc-connector-preview-copy span{
  font-size:.74rem;
  line-height:1.45;
  color:var(--secondary-text-color, rgba(255,255,255,.72));
}
.ddc-connector-tabs{
  display:grid;
  grid-template-columns:repeat(3, minmax(0, 1fr));
  gap:4px;
  padding:4px;
  border-radius:13px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 70%, transparent);
  background:rgba(255,255,255,.025);
}
.ddc-connector-tab{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:5px;
  min-width:0;
  min-height:34px;
  padding:0 8px;
  border:0;
  border-radius:9px;
  background:transparent;
  color:color-mix(in srgb, var(--primary-text-color, #fff) 68%, transparent);
  font:inherit;
  font-size:.72rem;
  font-weight:800;
  cursor:pointer;
  transition:background .16s ease, color .16s ease, box-shadow .16s ease;
}
.ddc-connector-tab ha-icon{
  --mdc-icon-size:15px;
  width:15px;
  height:15px;
  flex:0 0 15px;
}
.ddc-connector-tab span{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.ddc-connector-tab.is-active{
  color:var(--primary-text-color, #fff);
  background:color-mix(in srgb, var(--primary-color, #ff9800) 22%, rgba(255,255,255,.07));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.08),
    0 8px 16px rgba(0,0,0,.16);
}
.ddc-connector-section[hidden]{
  display:none !important;
}
.ddc-connector-section-head{
  display:grid;
  gap:3px;
}
.ddc-connector-section-title{
  font-size:.8rem;
  font-weight:800;
  letter-spacing:.02em;
}
.ddc-connector-section-head p{
  margin:0;
  font-size:.72rem;
  line-height:1.45;
  color:var(--secondary-text-color, rgba(255,255,255,.68));
}
.ddc-connector-inspector-grid{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:9px;
}
.ddc-connector-field{
  display:grid;
  gap:5px;
  min-width:0;
}
.ddc-connector-field.full{
  grid-column:1 / -1;
}
.ddc-connector-field span{
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.04em;
  color:color-mix(in srgb, var(--primary-text-color, #fff) 68%, transparent);
}
.ddc-connector-field .input{
  width:100%;
  min-height:38px;
  box-sizing:border-box;
  padding:9px 10px;
  border-radius:10px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.16)) 80%, transparent);
  background:var(--secondary-background-color, rgba(255,255,255,.03));
  color:var(--primary-text-color, #fff);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.04),
    0 1px 0 rgba(0,0,0,.08);
  outline:none;
  transition:border-color .18s ease, box-shadow .18s ease, background .18s ease, transform .18s ease;
}
.ddc-connector-field .input:hover{
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 16%, rgba(255,255,255,.18));
}
.ddc-connector-field .input:focus{
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 42%, rgba(255,255,255,.18));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 0 0 3px color-mix(in srgb, var(--primary-color, #ff9800) 18%, transparent),
    0 14px 28px rgba(0,0,0,.18);
  background:color-mix(in srgb, var(--secondary-background-color, rgba(255,255,255,.03)) 84%, rgba(255,255,255,.06));
}
.ddc-connector-entity-host{
  display:grid;
}
.ddc-connector-entity-host > *{
  width:100%;
}
.ddc-connector-entity-host ha-entity-picker{
  display:block;
  --mdc-theme-primary: var(--primary-color, #ff9800);
  --mdc-shape-small: 16px;
  --mdc-text-field-fill-color: rgba(255,255,255,.025);
}
.ddc-connector-entity-meta,
.ddc-connector-state-meta{
  font-size:.79rem;
  line-height:1.5;
  color:var(--secondary-text-color, rgba(255,255,255,.72));
}
.ddc-connector-state-suggestions{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
}
.ddc-connector-inline-actions{
  display:grid;
  grid-template-columns:minmax(0, 1fr) auto;
  gap:8px;
  align-items:center;
}
.ddc-connector-state-picker{
  min-width:0;
}
.ddc-connector-state-chip{
  appearance:none;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 74%, transparent);
  background:var(--secondary-background-color, rgba(255,255,255,.03));
  color:var(--primary-text-color, #fff);
  min-height:30px;
  padding:0 10px;
  border-radius:999px;
  font:inherit;
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.02em;
  cursor:pointer;
  transition:transform .16s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease, color .18s ease;
}
.ddc-connector-state-chip:hover{
  transform:translateY(-1px);
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 28%, rgba(255,255,255,.18));
  box-shadow:0 10px 18px rgba(0,0,0,.16);
}
.ddc-connector-state-chip.is-active{
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 42%, rgba(255,255,255,.22));
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--primary-color, #ff9800) 22%, rgba(255,255,255,.06)) 0%, color-mix(in srgb, var(--primary-color, #ff9800) 14%, rgba(255,255,255,.02)) 100%);
  color:color-mix(in srgb, var(--primary-text-color, #fff) 92%, rgba(255,255,255,.95));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 10px 24px rgba(0,0,0,.18);
}
.ddc-connector-state-empty{
  font-size:.78rem;
  line-height:1.5;
  color:var(--secondary-text-color, rgba(255,255,255,.68));
}
.ddc-connector-toggles{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.ddc-toggle-row{
  display:flex;
  align-items:center;
  gap:10px;
  min-height:36px;
  padding:8px 10px;
  border-radius:11px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 68%, transparent);
  background:var(--secondary-background-color, rgba(255,255,255,.03));
  font-size:.8rem;
  font-weight:600;
}
.ddc-connector-actions{
  display:grid;
  grid-template-columns:1fr;
  gap:8px;
}
.ddc-connector-layer-order{
  display:grid;
  gap:9px;
  margin-top:2px;
}
.ddc-connector-z-actions{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:8px;
}
.ddc-connector-z-actions .btn{
  min-width:0;
}
.ddc-connector-layer-order .ddc-connector-field{
  max-width:180px;
}
.ddc-connector-footer-actions{
  display:grid;
  gap:8px;
  padding-top:2px;
}
.ddc-connector-inspector .btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  min-height:40px;
  width:100%;
  padding:0 12px;
  border-radius:10px;
  font-size:.82rem;
  font-weight:700;
  letter-spacing:.01em;
  transition:transform .16s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease, filter .18s ease;
}
.ddc-connector-inspector .btn.compact{
  min-height:38px;
  width:auto;
  padding:0 10px;
  white-space:nowrap;
}
.ddc-connector-inspector .btn:hover{
  transform:translateY(-1px);
}
.ddc-connector-inspector .btn.secondary{
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.16)) 80%, transparent);
  background:var(--secondary-background-color, rgba(255,255,255,.03));
  color:var(--primary-text-color, #fff);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 10px 20px rgba(0,0,0,.14);
}
.ddc-connector-inspector .btn.secondary:hover{
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 24%, rgba(255,255,255,.18));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.06),
    0 14px 26px rgba(0,0,0,.18);
}
.ddc-connector-inspector .btn.danger{
  border:1px solid color-mix(in srgb, var(--error-color, #ef4444) 48%, rgba(255,255,255,.18));
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--error-color, #ef4444) 78%, rgba(255,255,255,.08)) 0%, color-mix(in srgb, var(--error-color, #ef4444) 62%, rgba(0,0,0,.06)) 100%);
  color:#fff;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.08),
    0 12px 22px color-mix(in srgb, var(--error-color, #ef4444) 22%, transparent);
}
.ddc-connector-inspector .btn.danger:hover{
  filter:brightness(1.04);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.1),
    0 14px 28px color-mix(in srgb, var(--error-color, #ef4444) 28%, transparent);
}
.ddc-connector-inspector .btn ha-icon{
  --mdc-icon-size:18px;
}
.ddc-connector-help{
  margin:0;
  font-size:.72rem;
  line-height:1.5;
  color:var(--secondary-text-color, rgba(255,255,255,.72));
}
@media (max-width: 920px){
  .ddc-connector-inspector{
    right:12px;
    left:12px;
    width:auto;
  }
  .ddc-connector-inspector-grid{
    grid-template-columns:1fr;
  }
  .ddc-connector-inline-actions{
    grid-template-columns:1fr;
  }
}
@media (prefers-reduced-motion: reduce){
  .ddc-connectors-layer .ddc-connector-flow,
  .ddc-connectors-layer .ddc-connector-pulse,
  .ddc-connectors-layer .ddc-connector.is-draft .ddc-connector-line,
  .ddc-card-anchor{
    animation:none !important;
    transition:none !important;
  }
  .ddc-connectors-layer .ddc-connector-moving-arrow,
  .ddc-connectors-layer .ddc-connector-particle{
    display:none !important;
  }
}
@keyframes ddc-connector-preview-flow{
  from { background-position: 0% 0%; }
  to   { background-position: 200% 0%; }
}
@keyframes ddc-connector-preview-pulse{
  0%, 100% { opacity:.62; filter:saturate(.92); }
  50% { opacity:1; filter:saturate(1.18) brightness(1.08); }
}
@keyframes ddc-connector-pulse{
  0%, 100% { opacity:.18; }
  50% { opacity:.58; }
}
@keyframes ddc-connector-flow{
  from { stroke-dashoffset: var(--ddc-connector-flow-cycle, 56); }
  to   { stroke-dashoffset: 0; }
}
@keyframes ddc-connector-draft{
  from { stroke-dashoffset: 0; }
  to   { stroke-dashoffset: -24; }
}
/* === GRID SELECT PATCH END (styles) === */
</style>
        <div class="ddc-page-bg-host" id="ddcPageBgHost" aria-hidden="true"></div>
        <div class="ddc-root">
        
<div class="toolbar ddc-toolbar streamlined v2" role="toolbar" aria-label="Layout editor">

  <button class="ddc-toolbar-toggle" id="toolbarToggleBtn" hidden style="display:none" data-tooltip="Expand toolbar" title="Expand toolbar" aria-label="Expand toolbar" aria-expanded="false">
    <ha-icon icon="mdi:chevron-down"></ha-icon>
  </button>

  <div class="ddc-toolbar-segments" role="group" aria-label="Edit toolbar categories">
    <button type="button" class="ddc-toolbar-segment active" data-toolbar-segment="primary" aria-pressed="true" aria-expanded="true">
      <ha-icon icon="mdi:plus-circle-outline" aria-hidden="true"></ha-icon>
      <span>Add &amp; Save</span>
      <ha-icon class="ddc-toolbar-segment-chevron" icon="mdi:chevron-down" aria-hidden="true"></ha-icon>
    </button>
    <button type="button" class="ddc-toolbar-segment" data-toolbar-segment="clip" aria-pressed="false" aria-expanded="false">
      <ha-icon icon="mdi:clipboard-outline" aria-hidden="true"></ha-icon>
      <span>Clipboard</span>
      <ha-icon class="ddc-toolbar-segment-chevron" icon="mdi:chevron-down" aria-hidden="true"></ha-icon>
    </button>
    <button type="button" class="ddc-toolbar-segment" data-toolbar-segment="share" aria-pressed="false" aria-expanded="false">
      <ha-icon icon="mdi:tray-arrow-up" aria-hidden="true"></ha-icon>
      <span>Import &amp; Share</span>
      <ha-icon class="ddc-toolbar-segment-chevron" icon="mdi:chevron-down" aria-hidden="true"></ha-icon>
    </button>
    <button type="button" class="ddc-toolbar-settings-main" id="settingsBtn" style="display:none" data-tooltip="Dashboard Settings" aria-label="Open dashboard settings">
      <span class="ddc-toolbar-settings-icon" aria-hidden="true">
        <ha-icon icon="mdi:cog-outline"></ha-icon>
      </span>
      <span>Settings</span>
    </button>
    <button type="button" class="ddc-toolbar-segment" data-toolbar-segment="misc" aria-pressed="false" aria-expanded="false">
      <ha-icon icon="mdi:tools" aria-hidden="true"></ha-icon>
      <span>Misc</span>
      <ha-icon class="ddc-toolbar-segment-chevron" icon="mdi:chevron-down" aria-hidden="true"></ha-icon>
    </button>
    <button type="button" class="ddc-toolbar-segment" data-toolbar-segment="layouts" aria-pressed="false" aria-expanded="false">
      <ha-icon icon="mdi:view-dashboard-outline" aria-hidden="true"></ha-icon>
      <span>Layouts</span>
      <ha-icon class="ddc-toolbar-segment-chevron" icon="mdi:chevron-down" aria-hidden="true"></ha-icon>
    </button>
    <button type="button" class="ddc-toolbar-segment" data-toolbar-segment="view" aria-pressed="false" aria-expanded="false">
      <ha-icon icon="mdi:monitor-eye" aria-hidden="true"></ha-icon>
      <span>View</span>
      <ha-icon class="ddc-toolbar-segment-chevron" icon="mdi:chevron-down" aria-hidden="true"></ha-icon>
    </button>

    <section class="ddc-sec sec-status" aria-label="Status">
      <header class="ddc-sec-head">
        <span class="ddc-sec-dot" aria-hidden="true"></span>
        <span class="ddc-sec-title">Status</span>
      </header>
      <div class="ddc-row">
        <span class="ddc-t-status ok" id="ddcStatus" style="display:none" aria-live="polite">
          <span class="ddc-t-dot" id="ddcDot" aria-hidden="true"></span>
          <span class="ddc-t-text" id="ddcStatusText">System OK</span>
        </span>
        <span class="store-badge" id="storeBadge" title="Where layout is persisted" style="display:none">System OK</span>
      </div>
    </section>
  </div>

  <!-- Add & Save -->
  <section class="ddc-sec sec-primary" data-toolbar-panel="primary" aria-label="Add & Save">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Add &amp; Save</span>
    </header>
    <div class="ddc-row">
      <button class="btn primary cta-add" id="addCardBtn" style="display:none" data-tooltip="Add card">
        <ha-icon icon="mdi:plus"></ha-icon><span class="label">Add Card</span>
      </button>
      <button class="btn secondary" id="applyLayoutBtn" style="display:none" data-tooltip="Save">
        <ha-icon icon="mdi:content-save"></ha-icon><span class="label">Save</span>
      </button>
      <button class="btn secondary ddc-autosave-toggle" id="toolbarAutoSaveBtn" style="display:none" data-tooltip="Toggle auto-save" aria-pressed="false">
        <ha-icon icon="mdi:content-save-clock-outline"></ha-icon><span class="label">Auto-save</span><span class="ddc-autosave-state">Off</span>
      </button>
    </div>
  </section>

  <!-- Clipboard -->
  <section class="ddc-sec sec-clip" data-toolbar-panel="clip" aria-label="Clipboard">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Clipboard</span>
    </header>
    <div class="ddc-row">
      <button class="btn secondary" id="copyBtn" style="display:none" data-tooltip="Copy">
        <ha-icon icon="mdi:content-copy"></ha-icon><span class="label">Copy</span>
      </button>
      <button class="btn secondary" id="pasteBtn" style="display:none" data-tooltip="Paste">
        <ha-icon icon="mdi:content-paste"></ha-icon><span class="label">Paste</span>
      </button>
      <button class="btn secondary" id="undoBtn" style="display:none" data-tooltip="Undo (Ctrl+Z)" disabled>
        <ha-icon icon="mdi:undo"></ha-icon><span class="label">Undo</span>
      </button>
      <button class="btn secondary" id="redoBtn" style="display:none" data-tooltip="Redo (Ctrl+Y)" disabled>
        <ha-icon icon="mdi:redo"></ha-icon><span class="label">Redo</span>
      </button>
    </div>
  </section>

  <!-- Import & Share -->
  <section class="ddc-sec sec-share" data-toolbar-panel="share" aria-label="Import & Share">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Import &amp; Share</span>
    </header>
    <div class="ddc-row">
      <button class="btn secondary" id="importBtn" style="display:none" data-tooltip="Import YAML">
        <ha-icon icon="mdi:upload"></ha-icon><span class="label">Import</span>
      </button>
      <button class="btn secondary" id="exportBtn" style="display:none" data-tooltip="Export YAML">
        <ha-icon icon="mdi:download"></ha-icon><span class="label">Export</span>
      </button>
      <button class="btn info hads" id="exploreBtn" style="display:none" data-tooltip="Open HADS">
        <ha-icon icon="mdi:storefront-outline"></ha-icon><span class="label">Open HADS</span>
      </button>
      <button class="btn danger" id="exitEditBtn" style="display:none" data-tooltip="Exit edit mode">
        <ha-icon icon="mdi:exit-run"></ha-icon><span class="label">Exit Edit Mode</span>
      </button>
    </div>
  </section>
  

  <!-- Misc -->
  <section class="ddc-sec sec-utils" data-toolbar-panel="misc" aria-label="Misc">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Misc</span>
    </header>
    <div class="ddc-row">
      <button class="btn secondary" id="lineModeBtn" style="display:none" data-tooltip="Add line">
        <ha-icon icon="mdi:vector-polyline-plus"></ha-icon><span class="label">Add line</span>
      </button>
      <button class="btn secondary" id="reloadBtn" style="display:none" data-tooltip="Reload">
        <ha-icon icon="mdi:refresh"></ha-icon><span class="label">Reload</span>
      </button>
      <button class="btn secondary" id="diagBtn" style="display:none" data-tooltip="Diagnostics">
        <ha-icon icon="mdi:play-circle-outline"></ha-icon><span class="label">Diagnostics</span>
      </button>
    </div>
  </section>

  <!-- Layouts -->
  <section class="ddc-sec sec-layouts" data-toolbar-panel="layouts" aria-label="Layouts">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Layouts</span>
    </header>
    <div class="ddc-row center">
      <div class="layout-host"></div>
    </div>
  </section>

  <!-- View -->
  <section class="ddc-sec sec-view" data-toolbar-panel="view" aria-label="View">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">View</span>
    </header>
    <div class="ddc-preview-stack" id="previewModeControls">
      <div class="ddc-preview-head">
        <div class="ddc-preview-label">Responsive Layout</div>
        <div class="ddc-preview-meta" id="previewModeMeta">Auto: Desktop</div>
      </div>
      <div class="ddc-preview-modes" role="group" aria-label="Viewport preview">
        <button type="button" class="ddc-preview-chip" data-preview-mode="live" aria-label="Live View">Live View</button>
        <button type="button" class="ddc-preview-chip" data-preview-mode="desktop">Desktop</button>
        <button type="button" class="ddc-preview-chip" data-preview-mode="tablet">Tablet</button>
        <button type="button" class="ddc-preview-chip" data-preview-mode="mobile">Mobile</button>
      </div>
      <div class="ddc-preview-dimensions">
        <label class="ddc-preview-field" for="previewWidthInput">
          <span>W</span>
          <input type="number" id="previewWidthInput" min="240" max="6000" step="1" />
        </label>
        <label class="ddc-preview-field" for="previewHeightInput">
          <span>H</span>
          <input type="number" id="previewHeightInput" min="240" max="6000" step="1" />
        </label>
        <button type="button" class="ddc-preview-chip ddc-preview-chip--icon" id="previewSwapButton" title="Swap width and height" aria-label="Swap width and height">
          <ha-icon icon="mdi:phone-rotate-landscape"></ha-icon>
        </button>
      </div>
    </div>
  </section>

</div>


          <!-- Tabs & card container -->
          <aside class="ddc-sidebar" id="ddcSidebar" style="display:none" aria-label="Sidebar" aria-hidden="true"></aside>
          <div class="ddc-tabs" id="tabsBar" style="display:none"></div>
          <div class="ddc-layers" id="layersBar" style="display:none"></div>
          <div class="card-container" id="cardContainer">
            <!-- host for particles.js / YouTube backgrounds -->
            <div class="ddc-bg-host" id="ddcBgHost" aria-hidden="true"></div>
          </div>
          <aside class="ddc-connector-inspector" id="connectorInspector" hidden aria-live="polite"></aside>



      `;
}
