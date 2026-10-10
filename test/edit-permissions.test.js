import test from 'node:test';
import assert from 'node:assert/strict';
import { canUserEdit, normalizeEditPermissions } from '../src/core/edit-permissions.js';
import { installEditModeMethods } from '../src/interactions/edit-mode.js';
import { installDashboardApiMethods } from '../src/dashboard/api.js';

test('permissions preserve default access, fail closed while user loads, and retain admin recovery',()=>{
  assert.equal(canUserEdit(undefined,undefined),true);
  assert.equal(canUserEdit({mode:'admins'},undefined),false);
  assert.equal(canUserEdit({mode:'admins'},{id:'tablet',is_admin:false}),false);
  assert.equal(canUserEdit({mode:'selected',users:['owner']},{id:'owner'}),true);
  assert.equal(canUserEdit({mode:'selected',users:['owner']},{id:'tablet'}),false);
  assert.equal(canUserEdit({mode:'selected',users:[]},{is_admin:true}),true);
  assert.deepEqual(normalizeEditPermissions({mode:'selected',users:[' a ','a',null]}),{mode:'selected',users:['a']});
});

test('restricted edit entry returns before PIN or DOM operations',()=>{
  class Host {} installEditModeMethods(Host.prototype);
  const h=new Host();h._hass={user:{id:'tablet'}};h.editPermissions={mode:'admins'};
  h.editModePin='1234';h._requestEditModePin_=()=>{throw Error('PIN cannot grant permission');};
  assert.equal(h._toggleEditMode(true),false);
  assert.equal(h._toggleEditMode(),false);
  assert.notEqual(h.editMode,true);
});

test('restricted API rejects settings writes and persistence but allows runtime tab navigation',async()=>{
  class Host {} installDashboardApiMethods(Host.prototype);
  const h=new Host();h._canEditDashboard_=()=>false;h._normalizeDashboardApiPatch_=v=>v;
  await assert.rejects(h._setDashboardApiSettings_({edit_permissions:{mode:'all'}}),/not allowed/);
  await assert.rejects(h._persistDashboardApiSettings_(),/not allowed/);
  assert.equal(h._getDashboardLocalApi_().saveLayout(),false);
  h.tabs=[{id:'home'},{id:'climate'}];h._getDashboardApiState_=()=>({active_tab:'home'});
  let switched=false;
  h._switchActiveTab_=async id=>{assert.equal(id,'climate');switched=true;throw Error('Reached tab switch');};
  await assert.rejects(h._setDashboardApiSettings_({active_tab:'climate'}),/Reached tab switch/);
  assert.equal(switched,true);
});
