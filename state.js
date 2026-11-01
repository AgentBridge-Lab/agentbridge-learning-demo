export const STORAGE_KEY = "agentbridge-demo-v1";

export function defaultState(announcements) {
  const announcementId = announcements[0]?.id ?? null;
  return { announcementId, roles: rolesFor(announcements[0]), selectedIds: [] };
}

export function rolesFor(announcement, previous = {}) {
  return Object.fromEntries((announcement?.requirements ?? []).map((item) => [item.id, previous[item.id] ?? "undecided"]));
}

export function selectAnnouncement(state, announcement) {
  return { announcementId: announcement.id, roles: rolesFor(announcement), selectedIds: [] };
}

export function setRole(state, requirementId, role) {
  return { ...state, roles: { ...state.roles, [requirementId]: role }, selectedIds: [] };
}

export function setAllRoles(state, announcement, role) {
  return { ...state, roles: Object.fromEntries(announcement.requirements.map((item) => [item.id, role])), selectedIds: [] };
}

export function toggleCandidate(state, researcherId, max = 2) {
  if (state.selectedIds.includes(researcherId)) {
    return { ...state, selectedIds: state.selectedIds.filter((id) => id !== researcherId) };
  }
  if (state.selectedIds.length >= max) return state;
  return { ...state, selectedIds: [...state.selectedIds, researcherId] };
}

export function validateState(candidate, announcements, researcherIds) {
  const announcement = announcements.find((item) => item.id === candidate?.announcementId);
  if (!announcement) return defaultState(announcements);
  const roles = rolesFor(announcement, candidate.roles ?? {});
  const allowedRoles = new Set(["self", "shared", "partner", "undecided"]);
  for (const [id, role] of Object.entries(roles)) if (!allowedRoles.has(role)) roles[id] = "undecided";
  const selectedIds = [...new Set(candidate.selectedIds ?? [])].filter((id) => researcherIds.has(id)).slice(0, 2);
  return { announcementId: announcement.id, roles, selectedIds };
}

export function loadState(storage, announcements, researcherIds) {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    return raw ? validateState(JSON.parse(raw), announcements, researcherIds) : defaultState(announcements);
  } catch {
    return defaultState(announcements);
  }
}

export function saveState(storage, state) {
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function clearState(storage) {
  try { storage.removeItem(STORAGE_KEY); } catch { /* 저장소를 사용할 수 없는 환경에서는 화면 상태만 초기화 */ }
}
