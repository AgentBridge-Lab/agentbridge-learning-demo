import test from "node:test";
import assert from "node:assert/strict";
import { announcements, researchers } from "../data.js";
import { defaultState, loadState, selectAnnouncement, setRole, toggleCandidate, validateState } from "../state.js";

const ids = new Set(researchers.map((item) => item.id));

test("공고 변경 시 역할과 후보를 초기화한다", () => {
  const before = { announcementId: announcements[0].id, roles: { s1: "self" }, selectedIds: ["R-025"] };
  const after = selectAnnouncement(before, announcements[1]);
  assert.equal(after.announcementId, announcements[1].id);
  assert.deepEqual(after.selectedIds, []);
  assert.ok(Object.values(after.roles).every((role) => role === "undecided"));
});

test("역할 변경 시 후보를 초기화한다", () => {
  const before = { ...defaultState(announcements), selectedIds: ["R-025"] };
  const after = setRole(before, "s1", "shared");
  assert.equal(after.roles.s1, "shared");
  assert.deepEqual(after.selectedIds, []);
});

test("후보는 최대 두 명이고 다시 누르면 해제된다", () => {
  let state = defaultState(announcements);
  state = toggleCandidate(state, "R-025");
  state = toggleCandidate(state, "R-003");
  assert.deepEqual(toggleCandidate(state, "R-002").selectedIds, ["R-025", "R-003"]);
  assert.deepEqual(toggleCandidate(state, "R-025").selectedIds, ["R-003"]);
});

test("손상되거나 오래된 세션 값은 안전한 값으로 정규화한다", () => {
  const candidate = { announcementId: announcements[0].id, roles: { s1: "invalid" }, selectedIds: ["R-025", "UNKNOWN", "R-025"] };
  const result = validateState(candidate, announcements, ids);
  assert.equal(result.roles.s1, "undecided");
  assert.deepEqual(result.selectedIds, ["R-025"]);
});

test("세션 JSON 파싱 실패 시 기본 상태로 돌아간다", () => {
  const storage = { getItem: () => "not-json" };
  assert.deepEqual(loadState(storage, announcements, ids), defaultState(announcements));
});
