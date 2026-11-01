import test from "node:test";
import assert from "node:assert/strict";
import { announcements, researchers } from "../data.js";
import { AI_INFERRED_CAP, candidateFit, canAddSecondCandidate, getGaps, rankCandidates } from "../matching.js";

const requirement = { id: "x", capability: "TX11.mbse", area: "TX11", task: "plan", importance: "required" };

test("동일 역량과 동일 작업은 직접 근거로 처리한다", () => {
  const evidence = { id: "E-X", title: "근거" };
  const researcher = { id: "R-X", capabilities: [{ skillId: "TX11.mbse", task: "plan", level: "direct", origin: "record", evidence: [evidence] }] };
  assert.deepEqual(candidateFit(researcher, requirement), { value: 1, kind: "direct", evidence, evidenceIds: ["E-X"] });
});

test("동일 역량이지만 작업이 다르면 direct_other를 적용한다", () => {
  const researcher = { id: "R-X", capabilities: [{ skillId: "TX11.mbse", task: "test", level: "direct", origin: "record", evidence: [] }] };
  assert.equal(candidateFit(researcher, requirement).value, 0.75);
  assert.equal(candidateFit(researcher, requirement).kind, "direct_other");
});

test("같은 기술영역의 인접 역량은 transfer를 적용한다", () => {
  const researcher = { id: "R-X", capabilities: [{ skillId: "TX11.dataproc", task: "plan", level: "direct", origin: "record", evidence: [] }] };
  assert.equal(candidateFit(researcher, requirement).value, 0.5);
  assert.equal(candidateFit(researcher, requirement).kind, "transfer");
});

test("직접 근거가 없고 공동연구자에게 근거가 있으면 coauthor를 적용한다", () => {
  const coauthor = { id: "R-Y", capabilities: [{ skillId: "TX11.mbse", task: "plan", level: "direct", origin: "record", evidence: [{ id: "E-Y", title: "공동연구자 근거" }] }] };
  const researcher = { id: "R-X", coauthors: ["R-Y"], capabilities: [] };
  const result = candidateFit(researcher, requirement, [researcher, coauthor]);
  assert.equal(result.value, 0.25);
  assert.equal(result.kind, "coauthor");
  assert.equal(result.evidence.via, "R-Y");
});

test("AI 추론 근거는 상한을 넘지 않는다", () => {
  const researcher = { id: "R-X", capabilities: [{ skillId: "TX11.mbse", task: "plan", level: "direct", origin: "ai_inferred", evidence: [] }] };
  assert.equal(candidateFit(researcher, requirement).value, AI_INFERRED_CAP);
});

test("모두 내가 담당하면 공백과 후보 제안이 없다", () => {
  const announcement = announcements[0];
  const roles = Object.fromEntries(announcement.requirements.map((item) => [item.id, "self"]));
  assert.equal(getGaps(announcement, roles, [], researchers).length, 0);
  assert.equal(rankCandidates(announcement, roles, researchers).length, 0);
});

test("첫 후보가 필수 공백을 채우면 두 번째 후보를 제안하지 않는다", () => {
  const announcement = { id: "a", requirements: [requirement] };
  const first = { id: "R-X", capabilities: [{ skillId: "TX11.mbse", task: "plan", level: "direct", origin: "record", evidence: [] }] };
  assert.equal(canAddSecondCandidate(announcement, { x: "partner" }, first, [first]), false);
});

test("첫 후보 뒤에도 필수 공백이 남으면 두 번째 후보를 허용한다", () => {
  const announcement = { id: "a", requirements: [requirement, { ...requirement, id: "y", capability: "TX08.optics", area: "TX08" }] };
  const first = { id: "R-X", capabilities: [{ skillId: "TX11.mbse", task: "plan", level: "direct", origin: "record", evidence: [] }] };
  assert.equal(canAddSecondCandidate(announcement, { x: "partner", y: "partner" }, first, [first]), true);
});
