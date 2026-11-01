import { IMPORTANCE_LABELS, ORIGIN_LABELS, ROLE_LABELS, TASK_LABELS } from "./data.js";
import { coverageLabel, getCoverage } from "./matching.js";

export function createMarkdown(announcement, roles, selectedResearchers, researchers) {
  const coverage = getCoverage(announcement, roles, selectedResearchers, researchers);
  const lines = [
    "# AgentBridge 연구협업 보완 매칭 결과",
    "",
    "> 기존 최종본을 바탕으로 만든 추가 시연 결과입니다. 후보와 연구성과는 모두 합성 데이터입니다.",
    "",
    "## 선택 공고",
    "",
    `- 기관: ${announcement.agency}`,
    `- 공고명: ${announcement.title}`,
    `- ${announcement.deadlineLabel ?? "마감일"}: ${announcement.deadline}`,
    `- 원문: ${announcement.url}`,
    "",
    "## 내 역할과 요구역량",
    "",
    ...announcement.requirements.map((item) => `- ${item.label} (${IMPORTANCE_LABELS[item.importance]}, ${TASK_LABELS[item.task]}, ${ORIGIN_LABELS[item.origin]}): ${ROLE_LABELS[roles[item.id] ?? "undecided"]}`),
    "",
    "## 선택한 합성 후보",
    "",
  ];

  if (selectedResearchers.length === 0) lines.push("- 선택한 후보 없음");
  for (const researcher of selectedResearchers) {
    lines.push(`### ${researcher.name}`, "", `- 소속 유형: ${researcher.affiliation}`, "- 구분: 공개 시연용 합성 후보", "");
  }

  lines.push("## 팀 충족 상태", "");
  for (const item of coverage) {
    const label = coverageLabel(item.value).text;
    const source = item.researcherId ? ` · 보완 후보 ${item.researcherId}` : "";
    lines.push(`- ${item.requirement.label}: ${label}${source}`);
  }
  lines.push("", "---", "AgentBridge 추가 시연본 · 브라우저에서 생성한 검토용 결과");
  return lines.join("\n");
}

export function downloadMarkdown(markdown, filename, documentRef = document) {
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = documentRef.createElement("a");
  link.href = url;
  link.download = filename;
  documentRef.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
