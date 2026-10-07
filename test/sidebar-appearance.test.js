import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeSidebarAppearance, applySidebarAppearance } from '../src/layout/sidebar-appearance.js';
import { installSidebarMethods } from '../src/layout/sidebar.js';
import { installTabsLayoutMethods } from '../src/layout/tabs.js';

class Harness {}
installSidebarMethods(Harness.prototype);

test('sidebar overrides normalize independently and retain explicit empty title and widget choices', () => {
  assert.deepEqual(normalizeSidebarAppearance({compact_width:'92',expanded_width:999,icon_size:0,button_gap:0,title:'',widgets:['clock','calendar'],alignment:'center',background:' transparent ',bad:true}),
    {compact_width:92,expanded_width:480,icon_size:16,button_gap:0,background:'transparent',title:'',widgets:['clock','calendar'],alignment:'center'});
  assert.deepEqual(normalizeSidebarAppearance({icon_size:NaN,button_gap:' ',padding:false,background:'red;display:none'}),{});
});

test('reset removes instance colors and dimensions so theme defaults apply again', () => {
  const values=new Map();
  const node={style:{setProperty:(key,value)=>values.set(key,value),removeProperty:key=>values.delete(key)}};
  applySidebarAppearance(node,{expanded_width:320,active_background:'#123456',button_gap:0});
  assert.equal(values.get('--ddc-side-expanded_width'),'320px');
  assert.equal(values.get('--ddc-side-button_gap'),'0px');
  applySidebarAppearance(node,{});
  assert.equal(values.size,0);
});

test('sidebar sizing reserves a column only on wide dashboards and restores full width when disabled', () => {
  const h=new Harness();
  const classes=new Set();
  h.rootEl={clientWidth:1200,classList:{toggle:(k,v)=>v?classes.add(k):classes.delete(k),remove:k=>classes.delete(k)}};
  h.sidebarHost={getBoundingClientRect:()=>({width:280})};
  h.sidebarEnabled=true;
  const before=globalThis.getComputedStyle;
  globalThis.getComputedStyle=()=>({columnGap:'16px'});
  try {
    assert.equal(h._getSidebarCanvasAvailableWidth_(1280),904);
    assert.equal(classes.has('ddc-sidebar-narrow'),false);
    h.rootEl.clientWidth=390;
    assert.equal(h._getSidebarCanvasAvailableWidth_(390),390);
    assert.equal(classes.has('ddc-sidebar-narrow'),true);
    h.sidebarEnabled=false;
    assert.equal(h._getSidebarCanvasAvailableWidth_(1200),1200);
    assert.equal(classes.has('ddc-sidebar-narrow'),false);
  } finally {
    if(before===undefined)delete globalThis.getComputedStyle;else globalThis.getComputedStyle=before;
  }
});

function node() {
  return {childNodes:[],dataset:{},style:{setProperty(){},removeProperty(){}},classList:{add(){},remove(){},toggle(){}},isConnected:true,
    setAttribute(){},getBoundingClientRect:()=>({width:280,height:600}),
    appendChild(child){child.parentNode?.removeChild(child);this.childNodes.push(child);child.parentNode=this;},
    insertBefore(child){this.appendChild(child);},
    removeChild(child){this.childNodes=this.childNodes.filter(n=>n!==child);child.parentNode=null;},
    remove(){this.parentNode?.removeChild(this);},
    querySelector(selector){
      if(selector==='.ddc-sidebar-navigation')return this.childNodes.find(n=>n.className==='ddc-sidebar-navigation');
      if(selector==='#ddcSidebarCanvas')return this.canvas ||= node();
      return null;
    },
  };
}

test('both sidebar modes exclude card canvases and preserve legacy card data', () => {
  const previous=globalThis.document;
  globalThis.document={createElement:()=>node()};
  try {
    const h=new Harness();
    h.rootEl=node();h.sidebarHost=node();h.cardContainer=node();h.tabsBar=node();
    h.sidebarEnabled=true;h.sidebarType='expanded';h.sidebarHeader='weather';
    h.sidebarCards=[{id:'one',card:{type:'button'}}];
    h._sidebarCardsRenderSignature_=v=>JSON.stringify(v);
    h._updateSidebarHeader_=()=>{};h._syncSidebarEditState_=()=>{};h._syncSidebarClockTimer_=()=>{};h._installSidebarCreateGesture_=()=>{};
    const builds=[];h._buildSidebarCardsFromEntries_=v=>builds.push(structuredClone(v));
    h._renderSidebar_();
    assert.equal(h.sidebarCanvas,null);
    assert.equal(h.sidebarHost.dataset.sidebarType,'expanded');
    h.sidebarType='minimal';h._renderSidebar_();
    assert.equal(h.sidebarCanvas,null);
    assert.equal(h.sidebarHeaderHost,null);
    assert.equal(h.sidebarHeader,'weather');
    assert.equal(h.sidebarCards.length,1);
    h.sidebarType='expanded';h._renderSidebar_();
    assert.deepEqual(builds,[]);
    h.sidebarAppearance={widgets:[]};h._renderSidebar_();
    assert.equal(h.sidebarCanvas,null);
    assert.equal(h.sidebarCards.length,1);
  } finally {if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});

test('sidebar keyboard navigation uses shadow focus and focuses the replacement active tab', () => {
  class Tabs {}
  installTabsLayoutMethods(Tabs.prototype);
  const h=new Tabs();
  const selected=new Set([0]);let focused=-1;let handler;
  const buttons=[0,1,2].map(i=>({dataset:{},classList:{contains:()=>selected.has(i)},setAttribute(){},click(){selected.clear();selected.add(i);},focus(){focused=i;}}));
  h.tabsBar={querySelector:s=>s==='.ddc-tab.active'?buttons[[...selected][0]]:null,querySelectorAll:()=>buttons,setAttribute(){},addEventListener:(type,fn)=>{if(type==='keydown')handler=fn;}};
  h._isSidebarNavigationActive_=()=>true;h._updateTabOverflowShadows_=()=>{};h.shadowRoot={activeElement:buttons[0]};
  h._updateTabsA11y_();
  handler({key:'ArrowDown',preventDefault(){},target:{closest:()=>null}});
  assert.equal(focused,1);
  assert.deepEqual([...selected],[1]);
});
