import test from 'node:test';
import assert from 'node:assert/strict';
import { installPersistenceMethods } from '../src/storage/layout-persistence.js';

class Host {} installPersistenceMethods(Host.prototype);
for (const enabled of [true, false]) {
  test(`chrome settings survive card recreation when saved as ${enabled}`, async () => {
    const h=new Host();
    let stored={hide_HA_Header:!enabled,hide_HA_Sidebar:!enabled};
    let current={hide_HA_Header:enabled,hide_HA_Sidebar:enabled};
    const calls=[];
    h._cloneJson_=structuredClone;
    h._exportableOptions=()=>current;
    h._getStorageMode_=()=> 'backend';
    h._saveLayout=async()=>{calls.push('backend start');await Promise.resolve();stored=structuredClone(current);calls.push('backend complete');return true;};
    h._persistThisCardConfigToStorage_=async({configPatch})=>{
      calls.push('lovelace');
      // HA recreates the card and the backend loader reapplies its snapshot.
      current=structuredClone(stored);
      assert.deepEqual(configPatch,current);
      return true;
    };
    h._persistOptionsToYaml=()=>assert.fail('Must not issue a second competing Lovelace write');
    await h._persistDashboardSettings_();
    assert.deepEqual(current,{hide_HA_Header:enabled,hide_HA_Sidebar:enabled});
    assert.deepEqual(calls,['backend start','backend complete','lovelace']);
  });
}
test('failed authoritative settings save rejects without mirroring stale options',async()=>{
  const h=new Host();h._cloneJson_=structuredClone;h._exportableOptions=()=>({hide_HA_Header:true,hide_HA_Sidebar:true});
  h._saveLayout=async()=>false;
  h._persistThisCardConfigToStorage_=()=>assert.fail('Must not mirror a failed save');
  await assert.rejects(h._persistDashboardSettings_(),/could not be saved/);
});
test('Lovelace mode uses its single authoritative save',async()=>{
  const h=new Host();h._cloneJson_=structuredClone;h._exportableOptions=()=>({hide_HA_Header:true});
  h._saveLayout=async()=>true;h._getStorageMode_=()=> 'lovelace';
  h._persistThisCardConfigToStorage_=()=>assert.fail('Duplicate save');
  await h._persistDashboardSettings_();
});
