const IMPORTANCE_WEIGHT = { required: 1, preferred: 0.5, optional: 0.25, unspecified: 0.25 };
const ROLE_BASE = { self: 1, shared: 0.5, partner: 0, undecided: 0 };

export const GAP_THRESHOLD = 0.5;
export const AI_INFERRED_CAP = 0.4;

const areaOf = (capability = "") => capability.split(".")[0];

export function baseCoverage(role) {
  return ROLE_BASE[role] ?? 0;
}

export function isImportantGap(requirement, coverage) {
  return ["required", "unspecified"].includes(requirement.importance) && coverage < GAP_THRESHOLD;
}

export function candidateFit(researcher, requirement, researchers = []) {
  let best = { value: 0, kind: "none", evidence: null };

  for (const item of researcher.capabilities ?? []) {
    let value = 0;
    let kind = "none";
    const exactCapability = item.skillId === requirement.capability;
    const sameArea = areaOf(item.skillId) === requirement.area;

    if (exactCapability) {
      if (item.level !== "direct") {
        value = 0.5;
        kind = "transfer";
      } else if (requirement.task === null || item.task === requirement.task) {
        value = 1;
        kind = "direct";
      } else {
        value = 0.75;
        kind = "direct_other";
      }
    } else if (sameArea && item.level === "direct") {
      value = 0.5;
      kind = "transfer";
    }

    if (item.origin === "ai_inferred") value = Math.min(value, AI_INFERRED_CAP);
    if (value > best.value) best = { value, kind, evidence: item.evidence[0] ?? null, evidenceIds: item.evidence.map((entry) => entry.id) };
  }

  if (best.value === 0) {
    for (const coauthorId of researcher.coauthors ?? []) {
      const coauthor = researchers.find((item) => item.id === coauthorId);
      const capability = coauthor?.capabilities?.find((item) => item.skillId === requirement.capability && item.level === "direct" && item.origin === "record");
      if (capability) {
        best = { value: 0.25, kind: "coauthor", evidence: { ...(capability.evidence[0] ?? {}), via: coauthorId }, evidenceIds: capability.evidence.map((entry) => entry.id) };
        break;
      }
    }
  }

  return best;
}

export function coverageForRequirement(requirement, role, selectedResearchers, researchers = []) {
  let best = { value: baseCoverage(role), kind: "role", evidence: null, researcherId: null };
  for (const researcher of selectedResearchers) {
    const fit = candidateFit(researcher, requirement, researchers);
    if (fit.value > best.value) best = { ...fit, researcherId: researcher.id };
  }
  return best;
}

export function getCoverage(announcement, roles, selectedResearchers = [], researchers = []) {
  return announcement.requirements.map((requirement) => ({
    requirement,
    ...coverageForRequirement(requirement, roles[requirement.id] ?? "undecided", selectedResearchers, researchers),
  }));
}

export function getGaps(announcement, roles, selectedResearchers = [], researchers = []) {
  return getCoverage(announcement, roles, selectedResearchers, researchers).filter((item) => isImportantGap(item.requirement, item.value));
}

export function rankCandidates(announcement, roles, researchers, selectedIds = []) {
  const selected = selectedIds.map((id) => researchers.find((item) => item.id === id)).filter(Boolean);
  const current = getCoverage(announcement, roles, selected, researchers);

  return researchers
    .filter((researcher) => !selectedIds.includes(researcher.id))
    .map((researcher) => {
      const matches = announcement.requirements.map((requirement, index) => {
        const fit = candidateFit(researcher, requirement, researchers);
        const gain = Math.max(0, fit.value - current[index].value);
        return { requirement, ...fit, gain };
      }).filter((item) => item.gain > 0);
      const rawGain = matches.reduce((sum, item) => sum + item.gain * (IMPORTANCE_WEIGHT[item.requirement.importance] ?? 0.25), 0);
      const gain = Math.round(rawGain * 1000) / 1000;
      return { researcher, gain, matches: matches.sort((a, b) => b.gain - a.gain) };
    })
    .filter((item) => item.gain > 0)
    .sort((a, b) => b.gain - a.gain || a.researcher.id.localeCompare(b.researcher.id));
}

export function canAddSecondCandidate(announcement, roles, firstResearcher, researchers) {
  if (!firstResearcher) return true;
  return getCoverage(announcement, roles, [firstResearcher], researchers)
    .some(({ requirement, value }) => isImportantGap(requirement, value));
}

export function coverageLabel(value) {
  if (value >= 1) return { text: "충족", className: "full" };
  if (value >= GAP_THRESHOLD) return { text: "부분 충족", className: "partial" };
  if (value > 0) return { text: "약함", className: "partial" };
  return { text: "공백", className: "" };
}

export function fitLabel(kind) {
  return ({
    direct: "동일 역량·동일 작업",
    direct_other: "동일 역량·다른 작업",
    transfer: "인접 역량 전이",
    coauthor: "공동연구자 경유",
    none: "근거 없음",
  })[kind] ?? "근거 없음";
}
