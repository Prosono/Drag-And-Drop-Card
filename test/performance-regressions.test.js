import test from 'node:test';
import assert from 'node:assert/strict';
import { installTabsLayoutMethods } from '../src/layout/tabs.js';
import { installVisibilityMethods } from '../src/layout/visibility.js';
import { installResponsiveModelMethods } from '../src/layout/responsive-layouts.js';
import { installHaChromeMethods } from '../src/ha/chrome-visibility.js';
import { installLayoutHistoryMethods } from '../src/layout/history.js';

class Host {}
installVisibilityMethods(Host.prototype);
installTabsLayoutMethods(Host.prototype);
installResponsiveModelMethods(Host.prototype);
installHaChromeMethods(Host.prototype);
installLayoutHistoryMethods(Host.prototype);

function layoutsHost() {
  const host=new Host();
  host._normalizeTabId=v=>v || 'default';
  host._normalizeCardLayerIds_=v=>v;
  host._clampYToCanvasTop_=v=>v;
  host._shouldUseSharedResponsiveLayout_=()=>true;
  host._cloneJson_=structuredClone;
  host.copies=0;
  host._sanitizeCardConfigForStorage_=v=>{host.copies++;return structuredClone(v);};
  return host;
}

test('responsive normalization copies config once per final variant and serialization omits inherited configs',()=>{
  const h=layoutsHost();
  const cards=[{id:'a',card:{type:'custom:button-card',styles:{color:'red'}},position:{x:0,y:0},size:{width:100,height:100}}];
  const layouts=h._normalizeResponsiveLayouts_(cards);
  assert.equal(h.copies,5);
  layouts.mobile_portrait[0].card.styles.color='blue';
  assert.equal(layouts.desktop_landscape[0].card.styles.color,'red');
  assert.equal(cards[0].card.styles.color,'red');
  h._shouldUseSharedResponsiveLayout_=()=>false;
  h.copies=0;
  const saved=h._serializeResponsiveLayouts_(layouts,cards);
  assert.equal(saved.tablet.landscape.cards[0].card,undefined);
  assert.equal(saved.mobile.portrait.cards[0].card.styles.color,'blue');
  assert.equal(h.copies,1);
  const restored=h._normalizeResponsiveLayouts_(layouts.desktop_landscape,saved);
  assert.equal(restored.mobile_portrait[0].card.styles.color,'blue');
  assert.equal(restored.desktop_landscape[0].card.styles.color,'red');
});

test('visibility caches only configuration, still evaluates changing states and edited rules',()=>{
  const h=new Host();
  h._extractCardConfig=()=>{throw Error('Unexpected full config extraction');};
  const wrap={dataset:{cfg:JSON.stringify({visibility:[{entity:'light.a',state:'on'}]})},firstElementChild:{}};
  h.hass={states:{'light.a':{state:'off'}}};
  const rules=h._getWrapperVisibility_(wrap);
  assert.equal(h._evaluateVisibility_(rules),false);
  h.hass.states['light.a']={state:'on'};
  assert.equal(h._getWrapperVisibility_(wrap),rules);
  assert.equal(h._evaluateVisibility_(rules),true);
  wrap.dataset.cfg=JSON.stringify({visibility:[{entity:'light.a',state:'off'}]});
  assert.equal(h._evaluateVisibility_(h._getWrapperVisibility_(wrap)),false);
});

test('load history is lazy, entering edit captures an undo baseline',()=>{
  const h=new Host();let captures=0;
  h._captureLayoutHistorySnapshot_=()=>{captures++;return {cards:[]};};
  h._resetLayoutHistory_('load');assert.equal(captures,0);
  h._resetLayoutHistory_('enter-edit');assert.equal(captures,1);
  assert.ok(h.__historyCurrentSnapshot);
});

test('sidebar gutters reuse geometry until viewport or chrome attributes change',()=>{
  const oldWindow=globalThis.window,oldDocument=globalThis.document;
  let reads=0,cls='open';
  const node={getAttribute:n=>n==='class'?cls:null,getBoundingClientRect:()=>{reads++;return {height:700,width:280,left:0,right:280};}};
  globalThis.window={innerWidth:1200,innerHeight:800,getComputedStyle:()=>({width:'280px',getPropertyValue:()=>''})};
  globalThis.document={documentElement:{clientWidth:1200}};
  try {
    const h=new Host();h.style={setProperty:()=>{}};h._getHaSidebarGutterCandidates_=()=>[node];
    h._computeHaSidebarGutters_();h._computeHaSidebarGutters_();assert.equal(reads,1);
    cls='closed';h._computeHaSidebarGutters_();assert.equal(reads,2);
    window.innerWidth=1400;h._computeHaSidebarGutters_();assert.equal(reads,3);
  } finally {globalThis.window=oldWindow;globalThis.document=oldDocument;}
});

test('only fixed-canvas tab transitions skip autoscale, resize and automatic layouts still scale',()=>{
  const h=new Host();let mode='fixed_custom',scales=0;
  h.cardContainer={querySelectorAll:()=>[]};
  h._normalizeContainerSizeMode_=()=>mode;
  h._applyAutoScale=()=>scales++;
  h._animateCards=()=>{};
  h._clearSelection=()=>{};
  h._applyActiveTab({transitionSeq:1});assert.equal(scales,0);
  mode='auto';h._applyActiveTab({transitionSeq:2});assert.equal(scales,1);
  mode='fixed_custom';h._applyActiveTab();assert.equal(scales,2);
});

test('disabled animation avoids style/config extraction but honors changing per-card overrides',()=>{
  const oldWindow=globalThis.window;let reads=0;
  globalThis.window={matchMedia:()=>({matches:false}),getComputedStyle:()=>{reads++;return {display:'none'};}};
  try {
    const h=new Host();h.animateCards=false;
    h._extractPerCardStyle_=()=>{throw Error('Unnecessary style extraction');};
    h._extractCardConfig=()=>{throw Error('Unnecessary config extraction');};
    const w={dataset:{},style:{},classList:{contains:()=>false}};
    h._animateCards([w]);assert.equal(reads,0);
    w.dataset.cardStyle='{"animate_cards":"on"}';
    h._animateCards([w]);assert.equal(reads,1);
    w.dataset.cardStyle='{"animate_cards":"off"}';h.animateCards=true;
    h._animateCards([w]);assert.equal(reads,1);
    delete w.dataset.cardStyle;
    h._animateCards([w]);assert.equal(reads,2);
  } finally {globalThis.window=oldWindow;}
});
