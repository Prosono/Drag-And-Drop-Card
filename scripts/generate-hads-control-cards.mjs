import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { startCard } from './hads-control-cards/shared.js';
import { coverFeature } from './hads-control-cards/cover.js';
import { roomFeature } from './hads-control-cards/room.js';
import { energyFeature, energyReadings } from './hads-control-cards/energy.js';
import { definitions } from './hads-control-cards/definitions.js';

const source = new URL('./hads-control-cards/', import.meta.url);
const output = new URL('../examples/hads-control-cards/', import.meta.url);
const read = (name) => readFile(new URL(name, source), 'utf8');
const sharedCss = await read('shared.css');
const icons = {
  solar: '<path d="m5 11-2 8h18l-2-8zm3 0-1 8m9-8 1 8M4 15h16M12 2v2M5 5l1 1m13-1-1 1M9 8a3 3 0 0 1 6 0"/>',
  grid: '<path d="m9 3-4 18M15 3l4 18M8 5h8M6 11h12M4 17h16M8 5l10 12M16 5 6 17"/>',
  battery: '<rect x="6" y="5" width="12" height="16" rx="2"/><path d="M9 2h6m-2 6-4 6h5l-3 5"/>',
  home: '<path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7"/>',
  ev: '<path d="m5 8 2-5h10l2 5M4 9h16v9H4zM6 18v3m12-3v3M7 12h2m6 0h2"/>',
};
const energyHtml = `<div class="energy-layout"><div class="energy-map">
  <svg class="energy-flow" viewBox="0 0 300 367" preserveAspectRatio="none" aria-hidden="true">${Object.entries({ solar: 'M150 104V140', grid: 'M100 196H136', battery: 'M200 196H164', ev: 'M150 282V252' }).map(([key, d]) => `<g data-flow="${key}"><path d="${d}"/><path class="flow-dots" d="${d}"/></g>`).join('')}</svg>
  ${Object.keys(icons).map((key) => `<button type="button" class="energy-node" data-energy="${key}"><svg viewBox="0 0 24 24" aria-hidden="true">${icons[key]}</svg><span data-${key}-name></span><strong class="energy-power"><b data-${key}-number>—</b><small data-${key}-unit></small></strong><small data-${key}-status></small>${key === 'battery' ? '<small data-soc hidden></small>' : ''}</button>`).join('\n')}
  </div><p class="energy-note" data-energy-note></p></div>`;

function shell(content, id) {
  return `<article class="hc" data-hads-card>
    <header class="hc-head"><div><span class="hc-kicker" data-kicker></span><strong class="hc-title" data-title></strong></div><button type="button" class="hc-settings" data-settings aria-label="Settings"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3" fill="var(--paper)"/><circle cx="15" cy="17" r="3" fill="var(--paper)"/></svg></button></header>
    <div class="hc-body">${content}</div>
    <section class="hc-empty" data-empty><strong data-empty-title></strong><p data-empty-text></p><button type="button" class="hc-action primary" data-configure></button></section>
    <div class="hc-message" data-message role="status" aria-live="polite" hidden></div>
    <dialog aria-labelledby="${id}-settings-title"><form><header><h2 id="${id}-settings-title" data-dialog-title></h2><button type="button" data-close aria-label="Close">×</button></header><p class="hc-dialog-hint" data-dialog-hint></p><div class="hc-fields" data-fields></div><footer><button type="button" class="hc-action" data-cancel></button><button type="submit" class="hc-action primary" data-save></button></footer></form></dialog>
  </article>`;
}

await mkdir(output, { recursive: true });
for (const [id, definition] of Object.entries(definitions)) {
  const content = id === 'energy' ? energyHtml : await read(id + '.html');
  const feature = { cover: coverFeature, room: roomFeature, energy: energyFeature }[id];
  const factory = id === 'energy' ? `function(api) { return (${feature.toString()})(api, ${energyReadings.toString()}); }` : feature.toString();
  const { size, ...runtimeDefinition } = definition;
  const js = `// HADS ${id} 1.0.0 — generated; edit scripts/hads-control-cards instead.\nreturn (${startCard.toString()})({hass,states,config,root,host,helpers,ddc,reason}, ${JSON.stringify(runtimeDefinition)}, ${factory});`;
  const card = { type: 'custom:ddc-html-card', title: '', html: shell(content, id), css: sharedCss + '\n' + await read(id + '.css'), js, rerun_on_hass_update: false, [definition.key]: definition.defaults };
  const entry = { id: 'ddc_card_hads_' + id + '_1_0_0', card, position: { x: 0, y: 0 }, size, z: 1, tabId: 'default', overflow: 'hidden' };
  // The importer requires a full .card in a variant before accepting its geometry.
  const mobileEntry = { ...entry, size: { width: 320, height: { cover: 650, room: 740, energy: 590 }[id] } };
  const payload = { kind: 'ddc-card', version: 2, entry, responsive_entries: { mobile_portrait: mobileEntry, mobile_landscape: mobileEntry }, connectors: [], responsive_connectors: {} };
  const name = 'hads-' + ({ cover: 'cover-control', room: 'room-control', energy: 'energy-flow' }[id]) + '-1-0-0.json';
  await writeFile(new URL(name, output), JSON.stringify(payload, null, 2) + '\n');
  console.log('Generated ' + fileURLToPath(new URL(name, output)));
}
