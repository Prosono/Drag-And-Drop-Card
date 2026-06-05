/*
 * Shared style presets for dashboard and per-card background controls.
 */

export const STYLE_SWATCHES = [
  { label: 'Pure White', value: '#ffffff' },
  { label: 'Snow Glass', value: '#f5f7fa' },
  { label: 'Cloud Mist', value: '#ebeff5' },
  { label: 'Soft Gray', value: '#f6f5f5' },
  { label: 'Carbon', value: '#121212' },
  { label: 'Charcoal', value: '#1f2937' },
  { label: 'Slate', value: '#334155' },
  { label: 'Coral', value: '#ff6b6b' },
  { label: 'Amber', value: '#fcbf49' },
  { label: 'Sunlit', value: '#ffe66d' },
  { label: 'Aqua', value: '#4ecdc4' },
  { label: 'Deep Teal', value: '#1a535c' },
  { label: 'Dusk Purple', value: '#6b5b95' },
  { label: 'HA Blue', value: '#00aaff' },
  { label: 'Magenta', value: '#ff00ff' },
  { label: 'Lime', value: '#00ff00' },
  { label: 'Theme Card', value: 'var(--card-background-color)' },
  { label: 'HA Card', value: 'var(--ha-card-background)' },
  { label: 'Transparent', value: 'transparent' },
  { label: 'Frosted White', value: 'rgba(255,255,255,0.4)' },
  { label: 'Smoke Glass', value: 'rgba(0,0,0,0.3)' },
  { label: 'Blue Glass', value: 'rgba(0,128,255,0.3)' },
  { label: 'Rose Glass', value: 'rgba(255,0,128,0.3)' },
  { label: 'Lemon Glass', value: 'rgba(255,255,0,0.3)' },
  { label: 'Mint Glass', value: 'rgba(0,255,128,0.3)' },
  { label: 'Graphite Glass', value: 'rgba(31,41,55,0.54)' },
  { label: 'Ocean Glass', value: 'rgba(14,116,144,0.34)' },
  { label: 'Pine Glass', value: 'rgba(6,95,70,0.34)' },
  { label: 'Violet Glass', value: 'rgba(91,33,182,0.32)' },
];

export const STYLE_GRADIENTS = [
  { label: 'Ocean Rise', value: 'linear-gradient(135deg, #1e3a8a, #0ea5e9)' },
  { label: 'Midnight Slate', value: 'linear-gradient(135deg, #111827, #1f2937)' },
  { label: 'Emerald Field', value: 'linear-gradient(135deg, #0f766e, #22c55e)' },
  { label: 'Electric Dusk', value: 'linear-gradient(135deg, #7c3aed, #06b6d4)' },
  { label: 'Sunset Punch', value: 'linear-gradient(135deg, #f97316, #f43f5e)' },
  { label: 'Solar Lagoon', value: 'linear-gradient(135deg, #eab308, #22d3ee)' },
  { label: 'Teal Depth', value: 'radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)' },
  { label: 'Amber Nebula', value: 'radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)' },
  { label: 'Deep Ocean', value: 'linear-gradient(135deg, #0f5463, #073241)' },
  { label: 'Golden Horizon', value: 'linear-gradient(135deg, #ffb86b 0%, #f45f79 52%, #51258d 100%)' },
  { label: 'Forest Mist', value: 'linear-gradient(135deg, #028263, #02563f)' },
  { label: 'Warm Sand', value: 'linear-gradient(135deg, #d7a45d, #5d351f)' },
  { label: 'Arctic Blur', value: 'linear-gradient(135deg, #d8e9fb, #aec4dc)' },
  { label: 'Dusk Bokeh', value: 'radial-gradient(circle at 34% 36%, rgba(99,102,241,.42), transparent 42%), linear-gradient(135deg, #40236e, #6f43a0)' },
  { label: 'Ember Bokeh', value: 'radial-gradient(circle at 72% 68%, rgba(249,115,22,.45), transparent 46%), linear-gradient(135deg, #79380e, #3f1908)' },
  { label: 'Lagoon Bokeh', value: 'radial-gradient(circle at 68% 62%, rgba(20,184,166,.42), transparent 45%), linear-gradient(135deg, #008569, #045846)' },
  { label: 'Blush Bokeh', value: 'radial-gradient(circle at 35% 34%, rgba(244,114,182,.4), transparent 46%), linear-gradient(135deg, #8e3f64, #5a3156)' },
  { label: 'Steel Bokeh', value: 'radial-gradient(circle at 68% 38%, rgba(96,165,250,.32), transparent 44%), linear-gradient(135deg, #163f66, #223348)' },
  { label: 'Tokyo Bokeh', value: 'radial-gradient(circle at 62% 36%, rgba(236,72,153,.46), transparent 44%), linear-gradient(135deg, #4b1645, #8a2a68)' },
  { label: 'Aurora Bokeh', value: 'radial-gradient(circle at 64% 38%, rgba(34,211,238,.44), transparent 42%), linear-gradient(135deg, #006b78, #06465a)' },
  { label: 'Prism Bokeh', value: 'radial-gradient(circle at 78% 36%, rgba(14,165,233,.58), transparent 34%), radial-gradient(circle at 34% 42%, rgba(236,72,153,.55), transparent 38%), linear-gradient(135deg, #7c2d5d, #006f9f)' },
  { label: 'Synthwave Bokeh', value: 'radial-gradient(circle at 34% 70%, rgba(236,72,153,.46), transparent 40%), radial-gradient(circle at 68% 36%, rgba(37,99,235,.5), transparent 42%), linear-gradient(135deg, #17145f, #4b145e)' },
  { label: 'Nordic Night', value: 'radial-gradient(circle at 24% 28%, rgba(125,211,252,.28), transparent 34%), linear-gradient(135deg, #071827, #0f2539 52%, #050a12)' },
  { label: 'Copper Fade', value: 'linear-gradient(135deg, #4a2416, #b66b38 54%, #2a120b)' },
  { label: 'Sage Fog', value: 'radial-gradient(circle at 70% 30%, rgba(187,247,208,.24), transparent 40%), linear-gradient(135deg, #28463a, #6f8574)' },
  { label: 'Ruby Smoke', value: 'radial-gradient(circle at 34% 36%, rgba(251,113,133,.42), transparent 42%), linear-gradient(135deg, #45122a, #7f1d3b)' },
  { label: 'Blue Hour', value: 'linear-gradient(135deg, #0b2447, #19376d 54%, #0b132b)' },
  { label: 'Olive Studio', value: 'linear-gradient(135deg, #3f4f1f, #8a7b31)' },
  { label: 'Pearl Wash', value: 'linear-gradient(135deg, #f8fafc, #dbeafe 54%, #cbd5e1)' },
  { label: 'Graphite Glow', value: 'radial-gradient(circle at 75% 24%, rgba(148,163,184,.28), transparent 40%), linear-gradient(135deg, #101827, #1f2937)' },
  { label: 'Tropical Glass', value: 'radial-gradient(circle at 72% 30%, rgba(45,212,191,.48), transparent 38%), linear-gradient(135deg, #036666, #0f766e 48%, #134e4a)' },
  { label: 'Plum Velvet', value: 'radial-gradient(circle at 30% 28%, rgba(217,70,239,.34), transparent 44%), linear-gradient(135deg, #3b1745, #6d2876)' },
  { label: 'Citrus Beam', value: 'linear-gradient(135deg, #facc15, #fb923c 52%, #0f766e)' },
  { label: 'Ice Lake', value: 'radial-gradient(circle at 28% 24%, rgba(255,255,255,.52), transparent 36%), linear-gradient(135deg, #bfdbfe, #67e8f9 54%, #0e7490)' },
];

export const FEATURED_STYLE_LABELS = [
  'Golden Horizon', 'Deep Ocean', 'Forest Mist', 'Warm Sand', 'Arctic Blur', 'Dusk Bokeh',
  'Ember Bokeh', 'Lagoon Bokeh', 'Steel Bokeh', 'Prism Bokeh', 'Pure White', 'Carbon',
  'Transparent', 'HA Card', 'Theme Card', 'Frosted White', 'Aqua', 'Graphite Glow'
];

export const DEFAULT_VISIBLE_STYLE_COUNT = 18;

export function getStylePresetList(featuredLabels = FEATURED_STYLE_LABELS) {
  const all = [
    ...STYLE_SWATCHES.map((item) => ({ ...item, type: 'solid' })),
    ...STYLE_GRADIENTS.map((item) => ({ ...item, type: 'gradient' })),
  ];
  const byLabel = new Map(all.map((item) => [item.label, item]));
  const featured = featuredLabels.map((label) => byLabel.get(label)).filter(Boolean);
  const featuredSet = new Set(featured.map((item) => item.label));
  return [
    ...featured,
    ...all.filter((item) => !featuredSet.has(item.label)),
  ];
}

export function resolveStylePreviewBackground(value, resolveCssVar = null, fallback = '#fff') {
  const raw = String(value || '').trim();
  if (!raw) return 'transparent';
  if (raw.startsWith('var(')) {
    const varName = raw.match(/var\(\s*(--[a-zA-Z0-9_-]+)/)?.[1] || '';
    if (varName && typeof resolveCssVar === 'function') {
      const resolved = String(resolveCssVar(varName) || '').trim();
      if (resolved) return resolved;
    }
    return fallback;
  }
  return raw;
}

function updateStyleDisclosure(group, button, totalCount) {
  if (!group || !button) return;
  const expanded = group.classList.contains('ddc-style-library-expanded');
  const visibleCount = group.querySelectorAll('.ddc-color-preset:not(.is-extra-style)').length;
  const hiddenCount = Math.max(0, totalCount - visibleCount);
  button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  button.innerHTML = `
    <ha-icon icon="${expanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}"></ha-icon>
    <span>${expanded ? 'Show fewer styles' : 'Show all styles'}</span>
    <small>${expanded ? `${totalCount} styles` : `+${hiddenCount}`}</small>
  `;
}

export function renderStylePresetLibrary({
  container,
  disclosureTarget = null,
  currentValue = '',
  visibleCount = DEFAULT_VISIBLE_STYLE_COUNT,
  presets = getStylePresetList(),
  getPreviewBackground = (value) => value,
  onSelect = () => {},
  stopInteractive = null,
} = {}) {
  if (!container) return null;
  const group = disclosureTarget || container;
  const existingDisclosure = group.querySelector?.('.ddc-style-disclosure');
  try { existingDisclosure?.remove?.(); } catch {}
  try { group.classList?.remove('ddc-style-library-collapsible', 'ddc-style-library-expanded'); } catch {}

  container.innerHTML = '';

  const sync = (nextValue = currentValue) => {
    const valueText = String(nextValue || '').trim();
    container.querySelectorAll('.ddc-color-preset').forEach((button) => {
      const index = Number(button.dataset.styleIndex || 0);
      const active = String(button.dataset.value || '').trim() === valueText;
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
      button.classList.toggle('is-extra-style', index >= visibleCount && !active);
    });
    const disclosure = group.querySelector?.('.ddc-style-disclosure');
    if (disclosure) updateStyleDisclosure(group, disclosure, presets.length);
  };

  presets.forEach((preset, index) => {
    const value = preset.value;
    const label = preset.label || value;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `ddc-color-preset ${preset.type || 'style'}`;
    button.dataset.value = value;
    button.dataset.styleIndex = String(index);
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', `${label}: ${value}`);
    button.title = value;

    const preview = document.createElement('span');
    preview.className = 'ddc-color-preset-preview';
    preview.style.background = getPreviewBackground(value);

    const caption = document.createElement('span');
    caption.className = 'ddc-color-preset-label';
    caption.textContent = label;

    button.append(preview, caption);
    if (typeof stopInteractive === 'function') stopInteractive(button);
    button.addEventListener('click', (ev) => {
      onSelect(value, preset, ev);
      sync(value);
    });
    container.appendChild(button);
  });

  sync(currentValue);

  if (container.querySelector('.is-extra-style') && group) {
    const disclosure = document.createElement('button');
    disclosure.type = 'button';
    disclosure.className = 'ddc-style-disclosure';
    if (typeof stopInteractive === 'function') stopInteractive(disclosure);
    disclosure.addEventListener('click', (ev) => {
      ev.stopPropagation();
      group.classList.toggle('ddc-style-library-expanded');
      updateStyleDisclosure(group, disclosure, presets.length);
    });
    group.classList.add('ddc-style-library-collapsible');
    group.appendChild(disclosure);
    updateStyleDisclosure(group, disclosure, presets.length);
  }

  return { container, group, presets, sync };
}
