// Keep selections separate from the fetched list so failures never erase access.
export function editUserChoices(users, selected) {
  const choices = users.filter(user => user && typeof user.id === 'string' && !user.system_generated)
    .map(user => ({
      id: user.id,
      name: user.name || user.username || 'Unnamed user',
      admin: user.is_owner === true || user.group_ids?.includes('system-admin') === true,
      inactive: user.is_active === false,
    }));
  const known = new Set(choices.map(user => user.id));
  for (const id of selected) {
    if (!known.has(id)) choices.push({ id, name: 'Unavailable user', unavailable: true });
  }
  return choices.sort((a, b) => a.name.localeCompare(b.name));
}

export function setupEditUserPicker(modal, hass, selected) {
  const list = modal.querySelector('#ddc-edit-users');
  const status = modal.querySelector('#ddc-edit-users-status');
  const retry = modal.querySelector('#ddc-edit-users-retry');
  let loaded = false;
  let loading = false;
  const load = async () => {
    if (loaded || loading) return;
    if (!hass?.user?.is_admin) {
      status.textContent = 'Sign in as a Home Assistant administrator to choose editors. Existing selections are kept.';
      return;
    }
    loading = true;
    retry.hidden = true;
    list.setAttribute('aria-busy', 'true');
    status.textContent = 'Loading users…';
    try {
      const users = await hass.callWS({ type: 'config/auth/list' });
      if (!Array.isArray(users)) throw new Error('Invalid user list');
      if (!modal.isConnected) return;
      list.replaceChildren();
      const choices = editUserChoices(users, selected);
      for (const user of choices) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'edit-user-choice';
        button.disabled = !!user.admin;
        const check = document.createElement('span');
        check.className = 'edit-user-check';
        check.setAttribute('aria-hidden', 'true');
        const text = document.createElement('span');
        text.className = 'edit-user-text';
        const name = document.createElement('strong');
        name.textContent = user.name;
        const detail = document.createElement('span');
        detail.className = 'hint';
        text.append(name, detail);
        button.append(check, text);
        const update = () => {
          const active = user.admin || selected.has(user.id);
          button.setAttribute('aria-pressed', String(!!active));
          check.textContent = active ? '✓' : '';
          detail.textContent = user.admin ? 'Administrator · Always allowed'
            : user.unavailable ? `Saved user: ${user.id}`
            : `${active ? 'Can edit' : 'View and use only'}${user.inactive ? ' · Inactive account' : ''}${user.id === hass.user.id ? ' · You' : ''}`;
        };
        button.addEventListener('click', () => {
          if (user.admin) return;
          if (selected.has(user.id)) selected.delete(user.id);
          else selected.add(user.id);
          update();
        });
        update();
        list.append(button);
      }
      status.textContent = choices.length ? 'Changes take effect when you save.' : 'No users available.';
      loaded = true;
    } catch {
      if (!modal.isConnected) return;
      status.textContent = 'Could not load users. Existing selections are kept. Try again.';
      retry.hidden = false;
    } finally {
      loading = false;
      list.removeAttribute('aria-busy');
    }
  };
  retry.addEventListener('click', load);
  return { load };
}
