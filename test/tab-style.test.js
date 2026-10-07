import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeTabStyle, applyTabStyle } from '../src/layout/tab-style.js';
import { installTabsLayoutMethods } from '../src/layout/tabs.js';
import { installConfigHelperMethods } from '../src/core/config-normalization.js';

test('tab appearance accepts independent dimensions, zero spacing and safe colors', () => {
  assert.deepEqual(normalizeTabStyle({icon_width:'40',icon_height:32,button_gap:0,button_color:' transparent ',active_shadow:false}),
    {icon_width:40,icon_height:32,button_gap:0,button_color:'transparent',active_shadow:false});
});

test('tab appearance clamps dimensions and drops invalid or unknown values', () => {
  assert.deepEqual(normalizeTabStyle({icon_width:500,icon_height:-1,button_gap:Infinity,button_height:true,button_padding_vertical:' ',text_color:'red;display:none',unknown:123}),
    {icon_width:64,icon_height:8});
  for (const value of [null,undefined,[],42,'red']) assert.deepEqual(normalizeTabStyle(value),{});
  assert.deepEqual(normalizeTabStyle({icon_width:'',active_shadow:true}),{});
});

test('tab overrides remain independent of scale and reset removes stale properties and flags', () => {
  class Harness {}
  installTabsLayoutMethods(Harness.prototype);
  const host = new Harness();
  const props = new Map();
  const attrs = new Set();
  host.style = {setProperty:(k,v)=>props.set(k,v),removeProperty:k=>props.delete(k)};
  host.toggleAttribute = (k,v)=>v?attrs.add(k):attrs.delete(k);
  host.tabsSize = 125;
  host.tabsStyle = {icon_width:40,icon_height:32,active_shadow:false,button_gap:0};
  host._syncTabsSize_();
  assert.equal(props.get('--ddc-tabs-button-height'),'70px');
  assert.equal(props.get('--ddc-tab-style-icon_width'),'40px');
  assert.equal(props.get('--ddc-tab-style-icon_height'),'32px');
  assert.equal(props.get('--ddc-tab-style-button_gap'),'0px');
  assert.equal(props.get('--ddc-tab-icon-scale-x'),String(40/24));
  assert.equal(attrs.has('data-tab-style-no-shadow'),true);
  host.tabsStyle = {};
  applyTabStyle(host);
  assert.equal(props.has('--ddc-tab-style-icon_width'),false);
  assert.equal(props.has('--ddc-tab-style-button_gap'),false);
  assert.equal(props.get('--ddc-tab-icon-scale-x'),'1.25');
  assert.equal(attrs.size,0);
});

test('dashboard option normalization preserves tab appearance without mutating input', () => {
  class Harness {}
  installConfigHelperMethods(Harness);
  const input = {tabs_style:{icon_width:'36',active_shadow:false}};
  const result = new Harness()._normalizeDashboardOptions_(input);
  assert.deepEqual(result.tabs_style,{icon_width:36,active_shadow:false});
  assert.equal(input.tabs_style.icon_width,'36');
});
