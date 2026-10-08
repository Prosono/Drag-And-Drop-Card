import test from 'node:test';
import assert from 'node:assert/strict';
import { queryHaChrome } from '../src/ha/chrome-query.js';

// Minimal DOM fixture with nested shadow roots and TreeWalker rejection.
function fixture() {
  let walks = 0, queries = 0;
  const header = {localName:'ha-top-app-bar'};
  const inner = {children: [], querySelectorAll: () => { throw new Error('Must not inspect DDC card contents'); }};
  const ddc = {localName:'drag-and-drop-card', shadowRoot:inner, children:[]};
  const shell = {children:[header,ddc], querySelectorAll: () => { queries++; return [header]; }};
  const main = {localName:'home-assistant',shadowRoot:shell};
  const root = {
    children:[main], querySelectorAll: () => { queries++; return []; },
    createTreeWalker(node, _what, filter) {
      walks++;
      const nodes=[];
      const visit = parent => (parent.children || []).forEach(child => {
        if (filter.acceptNode(child) === 2) return;
        nodes.push(child); visit(child);
      });
      visit(node);
      return {nextNode: () => nodes.shift() || null};
    },
  };
  return {root,header,shell,counts: () => ({walks,queries})};
}

test('HA discovery excludes DDC contents and shares traversal across selectors', async () => {
  const f=fixture(), host={};
  assert.deepEqual(queryHaChrome(host,'header',f.root),[f.header]);
  queryHaChrome(host,'sidebar',f.root);
  assert.equal(f.counts().walks,2);
  const counts=f.counts();
  queryHaChrome(host,'header',f.root).pop();
  assert.deepEqual(queryHaChrome(host,'header',f.root),[f.header]);
  assert.deepEqual(f.counts(),counts);
  await Promise.resolve();
  f.shell.querySelectorAll=()=>[];
  assert.deepEqual(queryHaChrome(host,'header',f.root),[]);
  assert.equal(f.counts().walks,4);
});
