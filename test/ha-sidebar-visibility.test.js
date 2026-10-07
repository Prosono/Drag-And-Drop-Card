import test from 'node:test';
import assert from 'node:assert/strict';
import { installHaChromeMethods } from '../src/ha/chrome-visibility.js';

function element(initial = {}) {
  const values = new Map(Object.entries(initial).map(([key,value])=>[key,{value,priority:''}]));
  return {open:true,style:{
    getPropertyValue:key=>values.get(key)?.value || '',
    getPropertyPriority:key=>values.get(key)?.priority || '',
    setProperty:(key,value,priority='')=>values.set(key,{value,priority}),
    removeProperty:key=>values.delete(key),
  }};
}
function fixture() {
  class Host {} installHaChromeMethods(Host.prototype);
  const host=new Host(),sidebar=element({display:'flex'}),drawer=element({'--ha-sidebar-width':'280px'});
  host._deepQueryAll=selector=>selector==='ha-sidebar'?[sidebar]:[drawer];
  return {host,sidebar,drawer};
}
test('hide removes both current and legacy drawer widths and repeated hide restores original styles',()=>{
  const {host,sidebar,drawer}=fixture();
  host._setSidebarVisible_(false);host._setSidebarVisible_(false);
  assert.equal(sidebar.style.getPropertyValue('display'),'none');
  for(const key of ['--ha-sidebar-width','--mdc-drawer-width'])assert.equal(drawer.style.getPropertyValue(key),'0px');
  assert.equal(drawer.open,false);
  host._setSidebarVisible_(true);
  assert.equal(sidebar.style.getPropertyValue('display'),'flex');
  assert.equal(drawer.style.getPropertyValue('--ha-sidebar-width'),'280px');
  assert.equal(drawer.style.getPropertyValue('--mdc-drawer-width'),'');
  drawer.style.setProperty('--ha-sidebar-width','320px');
  host._setSidebarVisible_(false);host._setSidebarVisible_(true);
  assert.equal(drawer.style.getPropertyValue('--ha-sidebar-width'),'320px');
});
test('visibility setting hides in normal use, restores in edit mode, and excludes own card chrome',()=>{
  const {host,sidebar}=fixture();const before=globalThis.requestAnimationFrame;
  globalThis.requestAnimationFrame=()=>{};host._setHeaderVisible_=()=>{};
  try {
    host.hideHaSidebar=true;host._applyHaChromeVisibility_();
    assert.equal(sidebar.style.getPropertyValue('display'),'none');
    host.editMode=true;host._applyHaChromeVisibility_();
    assert.equal(sidebar.style.getPropertyValue('display'),'flex');
    host.editMode=false;host.hideHaSidebar=false;host._applyHaChromeVisibility_();
    assert.equal(sidebar.style.getPropertyValue('display'),'flex');
    host._isOwnChromeElement_=()=>true;host._setSidebarVisible_(false);
    assert.equal(sidebar.style.getPropertyValue('display'),'flex');
  } finally {if(before===undefined)delete globalThis.requestAnimationFrame;else globalThis.requestAnimationFrame=before;}
});
