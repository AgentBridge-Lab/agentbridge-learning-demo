import { announcements, IMPORTANCE_LABELS, ORIGIN_LABELS, researchers, ROLE_LABELS, TASK_LABELS } from "./data.js";
import { canAddSecondCandidate, coverageLabel, fitLabel, getCoverage, getGaps, rankCandidates } from "./matching.js";
import { createMarkdown, downloadMarkdown } from "./report.js";
import { clearState, defaultState, loadState, saveState, selectAnnouncement, setAllRoles, setRole, toggleCandidate } from "./state.js";

const $ = (selector) => document.querySelector(selector);
const els = {
  announcements: $("#announcement-list"), detail: $("#announcement-detail"), roles: $("#role-list"),
  gaps: $("#gap-summary"), team: $("#team-summary"), candidates: $("#candidate-list"),
  count: $("#selection-count"), toast: $("#toast"), download: $("#download-md"),
};
const researcherIds = new Set(researchers.map((item) => item.id));
let state = loadState(sessionStorage, announcements, researcherIds);
let toastTimer;

const esc = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
const currentAnnouncement = () => announcements.find((item) => item.id === state.announcementId) ?? announcements[0];
const selectedResearchers = () => state.selectedIds.map((id) => researchers.find((item) => item.id === id)).filter(Boolean);

function persist() {
  if (!saveState(sessionStorage, state)) showToast("이 브라우저에서는 세션 저장을 사용할 수 없습니다.");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2400);
}

function switchAnnouncement(id, restoreFocus = false) {
  const next = announcements.find((item) => item.id === id);
  if (!next) return;
  if (next.id !== state.announcementId) {
    state = selectAnnouncement(state, next);
    persist();
    render();
    showToast("공고가 바뀌어 역할과 후보 선택을 초기화했습니다.");
  }
  if (restoreFocus) queueMicrotask(() => els.announcements.querySelector(`[data-announcement="${CSS.escape(id)}"]`)?.focus());
}

function renderAnnouncements(announcement) {
  els.announcements.innerHTML = announcements.map((item) => `
    <button class="announcement-card" type="button" role="radio" aria-checked="${item.id === announcement.id}" tabindex="${item.id === announcement.id ? "0" : "-1"}" data-announcement="${esc(item.id)}">
      <span class="agency">${esc(item.agency)} · ${esc(item.program)}</span>
      <strong>${esc(item.title)}</strong>
      <span class="meta">${esc(item.deadlineLabel ?? "마감")} ${esc(item.deadline)} · 요구역량 ${item.requirements.length}개</span>
    </button>`).join("");

  els.detail.innerHTML = `
    <div><strong>${esc(announcement.agency)}</strong><p>${esc(announcement.summary)}</p><p><small>공고 ID: ${esc(announcement.id)}</small></p></div>
    <a href="${esc(announcement.url)}" target="_blank" rel="noreferrer">공고 원문 확인<span class="sr-only"> (새 창)</span></a>`;

  els.announcements.querySelectorAll("[data-announcement]").forEach((button) => button.addEventListener("click", () => switchAnnouncement(button.dataset.announcement, true)));
}

function renderRoles(announcement) {
  els.roles.innerHTML = announcement.requirements.map((requirement) => `
    <div class="role-row">
      <div class="requirement-title">
        <span class="importance ${esc(requirement.importance)}">${esc(IMPORTANCE_LABELS[requirement.importance])}</span>
        <div><strong>${esc(requirement.label)}</strong><small><span class="origin ${esc(requirement.origin)}">${esc(ORIGIN_LABELS[requirement.origin])}</span> · ${esc(TASK_LABELS[requirement.task])} · ${esc(requirement.origin === "explicit" ? requirement.evidence[0]?.quote : requirement.rationale)}</small></div>
      </div>
      <fieldset class="role-options">
        <legend>${esc(requirement.label)}에서 나의 역할</legend>
        ${Object.entries(ROLE_LABELS).map(([value, label]) => `
          <label class="role-option"><input type="radio" name="role-${esc(requirement.id)}" value="${value}" ${state.roles[requirement.id] === value ? "checked" : ""} /><span>${label}</span></label>`).join("")}
      </fieldset>
    </div>`).join("");

  els.roles.querySelectorAll("input[type=radio]").forEach((input) => input.addEventListener("change", () => {
    const requirementId = input.name.replace("role-", "");
    const role = input.value;
    const hadCandidates = state.selectedIds.length > 0;
    state = setRole(state, requirementId, role);
    persist();
    render();
    queueMicrotask(() => els.roles.querySelector(`input[name="role-${CSS.escape(requirementId)}"][value="${CSS.escape(role)}"]`)?.focus());
    if (hadCandidates) showToast("역할이 바뀌어 후보 선택을 초기화했습니다.");
  }));
}

function coverageRows(items) {
  return `<div class="coverage-list">${items.map(({ requirement, value }) => {
    const label = coverageLabel(value);
    return `<div class="coverage-row"><div><strong>${esc(requirement.label)}</strong><small>${esc(IMPORTANCE_LABELS[requirement.importance])} · ${esc(TASK_LABELS[requirement.task])}</small></div><span class="coverage-label ${label.className}">${label.text}</span></div>`;
  }).join("")}</div>`;
}

function renderGaps(announcement) {
  const coverage = getCoverage(announcement, state.roles, [], researchers);
  const gaps = getGaps(announcement, state.roles, [], researchers);
  els.gaps.innerHTML = gaps.length
    ? `<div class="metric"><strong>${gaps.length}</strong><span>개 역량에 보완이 필요합니다.</span></div>${coverageRows(gaps)}`
    : `<div class="empty-state compact-empty"><strong>현재 역할 설정으로 공백이 없습니다.</strong><p>역할을 공동 담당이나 협업자 필요로 바꾸면 보완 후보를 다시 탐색합니다.</p></div>`;
}

function renderTeam(announcement) {
  const selected = selectedResearchers();
  const coverage = getCoverage(announcement, state.roles, selected, researchers);
  const gaps = coverage.filter((item) => item.value < 0.5);
  els.team.innerHTML = `
    <div class="metric"><strong>${coverage.length - gaps.length}/${coverage.length}</strong><span>개 역량을 팀이 충족·부분 충족합니다.</span></div>
    ${coverageRows(coverage)}
    ${selected.length ? `<p class="team-note">선택 후보: ${selected.map((item) => esc(item.id)).join(", ")}</p>` : '<p class="team-note">후보를 선택하면 팀 기준 충족 상태가 갱신됩니다.</p>'}`;
}

function candidateCard(entry, selected, disabled) {
  const researcher = entry.researcher;
  const evidence = entry.matches.slice(0, 3);
  const initials = researcher.id.replace("R-", "R");
  return `<article class="candidate-card ${selected ? "selected" : ""}">
    <div class="candidate-head">
      <div class="candidate-name"><span class="avatar" aria-hidden="true">${esc(initials)}</span><div><strong>${esc(researcher.name)}</strong><small>${esc(researcher.affiliation)} · ${esc(researcher.id)}</small></div></div>
      <span class="synthetic">합성 후보</span>
    </div>
    <div class="evidence-list">
      ${evidence.length ? evidence.map((match) => `<div class="evidence-item"><strong>${esc(match.requirement.label)} · ${esc(fitLabel(match.kind))}</strong><p>${esc(match.evidence?.title ?? "연결 근거 확인")}${match.evidence?.via ? ` · ${esc(match.evidence.via)} 경유` : ""}</p></div>`).join("") : '<div class="evidence-item"><strong>현재 역할 기준 추가 보완 없음</strong><p>저장된 선택을 검토한 뒤 아래에서 해제할 수 있습니다.</p></div>'}
    </div>
    <div class="candidate-actions"><span class="fit-summary">보완 가능한 요구역량 ${entry.matches.length}개</span><button class="button ${selected ? "ghost" : "secondary"} compact" type="button" data-candidate="${esc(researcher.id)}" ${disabled && !selected ? "disabled" : ""}>${selected ? "선택 해제" : "후보 선택"}</button></div>
  </article>`;
}

function renderCandidates(announcement) {
  const selected = selectedResearchers();
  const baseline = rankCandidates(announcement, state.roles, researchers, []);
  const ranked = rankCandidates(announcement, state.roles, researchers, state.selectedIds);
  const selectedEntries = state.selectedIds.map((id) => baseline.find((entry) => entry.researcher.id === id) ?? {
    researcher: researchers.find((item) => item.id === id),
    gain: 0,
    matches: [],
  }).filter((entry) => entry.researcher);
  const allowSecond = state.selectedIds.length === 0 || canAddSecondCandidate(announcement, state.roles, selected[0], researchers);
  const entries = [...selectedEntries, ...ranked.filter((entry) => !state.selectedIds.includes(entry.researcher.id)).slice(0, Math.max(0, 8 - selectedEntries.length))];
  const disableNew = state.selectedIds.length >= 2 || (state.selectedIds.length === 1 && !allowSecond);
  els.count.textContent = `${state.selectedIds.length} / 2명 선택`;

  if (entries.length === 0) {
    els.candidates.innerHTML = '<div class="empty-state"><strong>현재 역할 설정에서는 보완 후보가 필요하지 않습니다.</strong><p>‘협업자 필요’, ‘공동 담당’ 또는 ‘미정’ 역할을 지정하면 후보 근거가 표시됩니다.</p></div>';
    return;
  }
  els.candidates.innerHTML = `${entries.map((entry) => candidateCard(entry, state.selectedIds.includes(entry.researcher.id), disableNew)).join("")}${!allowSecond && state.selectedIds.length === 1 ? '<p class="proposal-note">첫 후보를 반영한 뒤 필수·중요 공백이 남지 않아 두 번째 후보는 제안하지 않습니다.</p>' : ""}`;
  els.candidates.querySelectorAll("[data-candidate]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.candidate;
    const isSelected = state.selectedIds.includes(id);
    if (!isSelected && state.selectedIds.length === 1 && !allowSecond) {
      showToast("첫 후보가 필수·중요 공백을 채워 추가 후보를 제안하지 않습니다.");
      return;
    }
    if (!isSelected && state.selectedIds.length >= 2) {
      showToast("후보는 최대 2명까지 선택할 수 있습니다.");
      return;
    }
    state = toggleCandidate(state, id);
    persist();
    render();
    queueMicrotask(() => (els.candidates.querySelector(`[data-candidate="${CSS.escape(id)}"]`) ?? els.candidates).focus());
  }));
}

function render() {
  const announcement = currentAnnouncement();
  renderAnnouncements(announcement);
  renderRoles(announcement);
  renderGaps(announcement);
  renderTeam(announcement);
  renderCandidates(announcement);
}

$("#roles-partner").addEventListener("click", () => {
  const hadCandidates = state.selectedIds.length > 0;
  state = setAllRoles(state, currentAnnouncement(), "partner");
  persist();
  render();
  showToast(hadCandidates ? "역할을 바꾸고 후보 선택을 초기화했습니다." : "모든 역량을 협업자 필요로 설정했습니다.");
});

els.announcements.addEventListener("keydown", (event) => {
  if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
  const buttons = [...els.announcements.querySelectorAll("[data-announcement]")];
  const currentIndex = Math.max(0, buttons.indexOf(document.activeElement));
  let nextIndex = currentIndex;
  if (["ArrowRight", "ArrowDown"].includes(event.key)) nextIndex = (currentIndex + 1) % buttons.length;
  if (["ArrowLeft", "ArrowUp"].includes(event.key)) nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = buttons.length - 1;
  event.preventDefault();
  switchAnnouncement(buttons[nextIndex].dataset.announcement, true);
});

$("#reset-all").addEventListener("click", () => {
  clearState(sessionStorage);
  state = defaultState(announcements);
  render();
  showToast("시연 내용을 처음 상태로 되돌렸습니다.");
});

els.download.addEventListener("click", () => {
  const announcement = currentAnnouncement();
  const markdown = createMarkdown(announcement, state.roles, selectedResearchers(), researchers);
  downloadMarkdown(markdown, `AgentBridge_${announcement.id}_협업검토.md`);
  showToast("Markdown 결과를 만들었습니다.");
});

render();
