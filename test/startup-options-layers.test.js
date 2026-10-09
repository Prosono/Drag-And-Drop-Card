import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeInitialLayoutOptions } from '../src/core/layout-loader.js';
import { installLayerMethods } from '../src/layout/layers.js';

test('load merge keeps baseline options and lets explicit YAML override normalized aliases',()=>{
  const baseline={grid:10,tabs:[{id:'saved'}],layers_enabled:true,tabsSize:150};
  const yaml={grid:20,layers_enabled:false,tabs_size:110};
  const normalize=v=>{const next={...v};if ('tabsSize' in next) {next.tabs_size=next.tabsSize;delete next.tabsSize;}return next;};
  assert.deepEqual(mergeInitialLayoutOptions(baseline,yaml,normalize),{grid:20,tabs:[{id:'saved'}],layers_enabled:false,tabs_size:110});
  assert.equal(baseline.tabsSize,150);
});

test('layer cleanup removes invalid memberships without cloning cards or altering layout',()=>{
  class H {} installLayerMethods(H.prototype);
  const h=new H();h.layers=[{id:'day'}];h.layersEnabled=false;
  const card={type:'custom:button-card',template:'large'};
  const entry={id:'a',card,position:{x:30,y:50},size:{width:200,height:100},layer_ids:['day','removed']};
  h._responsiveLayouts={desktop_landscape:[entry]};
  h._responsiveLayoutVariantKeys_=()=>['desktop_landscape'];
  h._normalizeSavedCardEntry_=()=>{throw Error('Must not normalize full card');};
  h._sanitizeResponsiveLayoutLayerMembership_();
  const result=h._responsiveLayouts.desktop_landscape[0];
  assert.deepEqual(result.layerIds,['day']);
  assert.equal(result.card,card);
  assert.equal(result.position,entry.position);
  assert.deepEqual(entry.layer_ids,['day','removed']);
  h.layersEnabled=true;h._sanitizeResponsiveLayoutLayerMembership_();
  assert.deepEqual(h._responsiveLayouts.desktop_landscape[0].layerIds,['day']);
});
