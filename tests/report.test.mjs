import test from "node:test";
import assert from "node:assert/strict";
import { announcements, researchers } from "../data.js";
import { createMarkdown } from "../report.js";

test("Markdown 결과에 공고·역할·선택 후보·합성 안내를 담는다", () => {
  const announcement = announcements[0];
  const roles = Object.fromEntries(announcement.requirements.map((item) => [item.id, "partner"]));
  const markdown = createMarkdown(announcement, roles, [researchers[0]], researchers);
  assert.match(markdown, /달 착륙선 정밀 연착륙/);
  assert.match(markdown, /협업자 필요/);
  assert.match(markdown, /합성 연구자 R-001/);
  assert.match(markdown, /후보와 연구성과는 모두 합성 데이터/);
  assert.match(markdown, /공고 명시/);
  assert.match(markdown, /팀 충족 상태/);
});

test("NASA APRA Markdown은 제안서 마감이 아닌 NOI 마감으로 표시한다", () => {
  const announcement = announcements.find((item) => item.id === "space-nasa-roses25-apra");
  const roles = Object.fromEntries(announcement.requirements.map((item) => [item.id, "undecided"]));
  const markdown = createMarkdown(announcement, roles, [], researchers);
  assert.match(markdown, /- NOI 마감: 2026-06-26/);
  assert.doesNotMatch(markdown, /- 마감일: 2026-06-26/);
});
