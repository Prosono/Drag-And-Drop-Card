import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveSidebarWidgets, sidebarWidgetMarkup } from '../src/layout/sidebar-widgets.js';
import { normalizeSidebarAppearance } from '../src/layout/sidebar-appearance.js';
import { installSidebarMethods } from '../src/layout/sidebar.js';
import { installLayerMethods } from '../src/layout/layers.js';

test('widget selection migrates headers but honors an explicit empty selection',()=>{
  assert.deepEqual(resolveSidebarWidgets({},'weather'),['weather']);
  assert.deepEqual(resolveSidebarWidgets({},'none'),[]);
  assert.deepEqual(resolveSidebarWidgets({},'date_time'),['clock']);
  assert.deepEqual(resolveSidebarWidgets({widgets:[]},'clock'),[]);
  assert.deepEqual(resolveSidebarWidgets({widgets:['clock','clock','bad','calendar']}),['clock','calendar']);
});

test('widget options reject unsupported styles, placement and entity domains',()=>{
  assert.deepEqual(normalizeSidebarAppearance({widgets:['weather','bad','weather'],widget_style:'accent',alignment:'bottom',weather_entity:'light.test',calendar_entities:['calendar.home','light.home','calendar.home'],show_cards:true}),{widgets:['weather'],widget_style:'accent',alignment:'bottom',calendar_entities:['calendar.home']});
  assert.deepEqual(normalizeSidebarAppearance({widget_style:'bad',alignment:'fixed'}),{});
});

test('widgets escape entity text and event titles and provide useful empty states',()=>{
  const html=sidebarWidgetMarkup({widgets:['clock','calendar','weather'],time:'10:20',weather:{entityId:'weather.home',place:'<script>bad</script>',temperature:'18°C'},events:[{entityId:'calendar.home',message:'Dinner <b>home</b>',when:'18:00'}]});
  assert.match(html,/10:20/);assert.match(html,/18°C/);assert.match(html,/Dinner &lt;b&gt;home&lt;\/b&gt;/);assert.doesNotMatch(html,/<script>/);
  const empty=sidebarWidgetMarkup({widgets:['calendar','weather']});
  assert.match(empty,/No upcoming events/);assert.match(empty,/Choose a weather entity/);
});

test('both sidebar shells fill the viewport regardless of content alignment',()=>{
  class H {} installSidebarMethods(H.prototype);
  const h=new H(),values=new Map();
  h.sidebarEnabled=true;h.sidebarType='minimal';h.sidebarAppearance={alignment:'center'};
  h.sidebarHost={offsetHeight:300,style:{setProperty:(k,v)=>values.set(k,v)}};
  h.rootEl={classList:{contains:()=>false},getBoundingClientRect:()=>({left:24})};
  const before={getComputedStyle:globalThis.getComputedStyle,innerHeight:globalThis.innerHeight};
  globalThis.getComputedStyle=()=>({gridTemplateColumns:'76px 900px'});globalThis.innerHeight=900;
  try{
    h._syncSidebarViewportPosition_();assert.equal(values.get('--ddc-side-fixed-top'),'0px');
    assert.equal(values.get('--ddc-side-fixed-max-height'),'900px');
    h.sidebarType='expanded';h.__topGutter=56;h._syncSidebarViewportPosition_();
    assert.equal(values.get('--ddc-side-fixed-top'),'56px');
    assert.equal(values.get('--ddc-side-fixed-max-height'),'844px');
    h.__topGutter=0;h.sidebarType='minimal';
    h.sidebarAppearance.alignment='bottom';h._syncSidebarViewportPosition_();assert.equal(values.get('--ddc-side-fixed-top'),'0px');
  }finally{for(const[k,v]of Object.entries(before)){if(v===undefined)delete globalThis[k];else globalThis[k]=v;}}
});

test('layer panel is clamped into a narrow viewport',()=>{
  class H {} installLayerMethods(H.prototype);
  const h=new H(),values=new Map();
  const panel={scrollHeight:500,style:{setProperty:(k,v)=>values.set(k,v)}};
  h.shadowRoot={querySelector:s=>s.includes('panel')?panel:{getBoundingClientRect:()=>({right:380,top:800})}};
  const before=globalThis.window;globalThis.window={innerWidth:390,innerHeight:844};
  try{h._positionSidebarLayerPanel_();assert.equal(panel.style.width,'300px');assert.equal(values.get('--ddc-layer-panel-x'),'78px');assert.equal(values.get('--ddc-layer-panel-y'),'332px');}
  finally{if(before===undefined)delete globalThis.window;else globalThis.window=before;}
});
