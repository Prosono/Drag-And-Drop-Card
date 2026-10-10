export function normalizeEditPermissions(value) {
  const mode = ['all', 'admins', 'selected'].includes(value?.mode) ? value.mode : 'all';
  const users = Array.isArray(value?.users) ? value.users : [];
  return { mode, users: [...new Set(users.filter(id => typeof id === 'string').map(id => id.trim()).filter(Boolean))] };
}

export function canUserEdit(value, user) {
  const policy = normalizeEditPermissions(value);
  if (policy.mode === 'all') return true;
  if (!user) return false;
  // Administrators retain recovery access if the allow-list is empty or wrong.
  if (user.is_admin === true) return true;
  return policy.mode === 'selected' && !!user.id && policy.users.includes(user.id);
}
