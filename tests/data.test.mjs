import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { announcements, researchers } from "../data.js";

const digest = (value) => createHash("sha256").update(JSON.stringify(value)).digest("hex");
const SANITIZED_DATA_SHA256 = {
  announcements: "4a8786d1f06ff9e5d4889bf013cf8b2021cae24afab21bd8775b2d696e8896dd",
  researchers: "45a3e5a62ff23daa2ed2e4f556152835193b1f403dc177b71069124070249a20",
};

test("공개 시연 데이터는 실제 공고 세 건만 포함한다", () => {
  assert.equal(announcements.length, 3);
  assert.deepEqual(announcements.map((item) => item.id), [
    "space-kari-discovered-18434-t1",
    "space-nasa-roses25-apra",
    "space-kasa-discovered-B000000003393Rb8lK2",
  ]);
  assert.ok(announcements.every((item) => item.url.startsWith("https://") && item.requirements.length >= 5));
});

test("후보 데이터는 원본 합성 연구자 50명 전체를 익명 표시한다", () => {
  assert.equal(researchers.length, 50);
  assert.ok(researchers.every((item) => item.synthetic === true && /^R-\d{3}$/.test(item.id)));
  assert.ok(researchers.every((item) => item.name === `합성 연구자 ${item.id}`));
});

test("공개용으로 정제된 공고·연구자 데이터의 SHA-256이 고정되어 있다", () => {
  assert.equal(digest(announcements), SANITIZED_DATA_SHA256.announcements);
  assert.equal(digest(researchers), SANITIZED_DATA_SHA256.researchers);
});

test("후보 capability·evidence·coauthors의 공개 스키마를 유지한다", () => {
  assert.ok(researchers.every((researcher) => Array.isArray(researcher.capabilities) && Array.isArray(researcher.coauthors)));
  assert.ok(researchers.flatMap((researcher) => researcher.capabilities).every((capability) =>
    typeof capability.skillId === "string"
    && ["direct", "transfer"].includes(capability.level)
    && ["record", "ai_inferred"].includes(capability.origin)
    && Array.isArray(capability.evidence)
  ));
  assert.ok(researchers.flatMap((researcher) => researcher.capabilities).flatMap((capability) => capability.evidence).every((evidence) =>
    typeof evidence.id === "string" && typeof evidence.title === "string" && Number.isInteger(evidence.year)
  ));
});

test("요구역량은 공고 명시와 해석 기반 도출을 구분하고 checks를 보존한다", () => {
  const origins = new Set(announcements.flatMap((item) => item.requirements.map((requirement) => requirement.origin)));
  assert.deepEqual(origins, new Set(["explicit", "inferred"]));
  assert.ok(announcements.flatMap((item) => item.requirements).every((item) => item.checks && typeof item.checks.quotesFound === "number"));
  const lunar = announcements.find((item) => item.id === "space-kari-discovered-18434-t1");
  const nasa = announcements.find((item) => item.id === "space-nasa-roses25-apra");
  assert.equal(lunar.title, "달 착륙선 정밀 연착륙을 위한 볼록 최적화 기반 유도제어 기법 연구 및 임베디드 구현");
  assert.ok(lunar.requirements.every((item) => item.origin === "explicit" && item.checks.quotesFound > 0));
  assert.equal(nasa.deadlineLabel, "NOI 마감");
});

test("세 공고의 요구역량 공개 필드를 빠짐없이 포함한다", () => {
  const requirements = announcements.flatMap((announcement) => announcement.requirements);
  assert.ok(requirements.every((item) => item.area === item.capability.split(".")[0]));
  assert.ok(requirements.every((item) => ["required", "preferred", "optional", "unspecified"].includes(item.importance)));
  assert.ok(requirements.every((item) => Array.isArray(item.evidence) && typeof item.rationale === "string"));
  assert.ok(requirements.filter((item) => item.origin === "explicit").every((item) => item.evidence.length > 0 && item.checks.quotesFound > 0));
});

test("후보 데이터에 연락처나 실명 필드가 없다", () => {
  const raw = JSON.stringify(researchers);
  assert.doesNotMatch(raw, /email|phone|전화|@\w+\./i);
  assert.ok(researchers.every((item) => !Object.hasOwn(item, "email") && !Object.hasOwn(item, "phone")));
});
