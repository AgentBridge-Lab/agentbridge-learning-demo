export const TASK_LABELS = {
  design: "설계",
  analysis: "해석·시뮬레이션",
  test: "시험·검증",
  build: "제작·통합",
  data: "데이터 분석",
  ops: "운영·실증",
  plan: "기획·표준",
};

export const IMPORTANCE_LABELS = {
  required: "필수",
  preferred: "우대",
  optional: "선택",
  unspecified: "중요",
};

export const ROLE_LABELS = {
  self: "내가 담당",
  shared: "공동 담당",
  partner: "협업자 필요",
  undecided: "미정",
};

export const ORIGIN_LABELS = {
  explicit: "공고 명시",
  inferred: "해석 기반 도출",
};

export const announcements = [
  {
    "id": "space-kari-discovered-18434-t1",
    "parentId": "space-kari-discovered-18434",
    "agency": "한국항공우주연구원",
    "title": "달 착륙선 정밀 연착륙을 위한 볼록 최적화 기반 유도제어 기법 연구 및 임베디드 구현",
    "program": "위탁연구",
    "deadline": "2026-04-14",
    "deadlineLabel": "마감",
    "url": "https://www.kari.re.kr/kor/article/ATCLd4f64ac47/18434",
    "summary": "연구필요성: 달 착륙선 정밀 연착륙을 위해 동력 하강 구간의 최적 유도제어 알고리즘 연구 필요 · 연료 효율을 극대화하면서 동시에 여러 착륙 제약조건을 명시적으로 다룰 수 있는 볼록 최적화 기반 유도제어 기법 검토 필요 · 수치 실패/해 불능 발생과 같은 실패 상황에서의 안전 전환 및 센서/모델 오차에 대한 강인성이 확보된 유도제어 기법 필요 · 실시간성 확보를 위한 착륙선 OBC와 유사한 성능의 임베디드 환경에서의 유도제어 알고리즘 구현 및 검증 필요 / 최종목표: 달 착륙선 정밀 연착륙을 위한 볼록 최적화 기반 유도제어 기법 …",
    "requirements": [
      {
        "id": "s1",
        "label": "볼록 최적화 기반 착륙 유도",
        "capability": "TX09.landing",
        "area": "TX09",
        "task": "design",
        "importance": "required",
        "origin": "explicit",
        "evidence": [
          {
            "field": "rfpContent",
            "quote": "볼록 최적화 기반 유도제어 관련 연구 조사"
          },
          {
            "field": "title",
            "quote": "달 착륙선 정밀 연착륙을 위한 볼록 최적화 기반 유도제어 기법 연구 및 임베디드 구현"
          }
        ],
        "rationale": "동력 하강 구간 정밀 연착륙 유도 알고리즘이 핵심 연구내용이다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 2,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s2",
        "label": "6-DoF 유도제어 정식화·시뮬레이션",
        "capability": "TX17.gnc",
        "area": "TX17",
        "task": "analysis",
        "importance": "required",
        "origin": "explicit",
        "evidence": [
          {
            "field": "rfpContent",
            "quote": "시뮬레이션 환경 구축 및 6-DoF 유도제어 문제 정식화 후 기본 성능 확보(MatlabSimulink)"
          }
        ],
        "rationale": "6-DoF 유도제어 문제 정식화와 Simulink 기반 성능 확보가 명시되어 있다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 1,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s3",
        "label": "실패 안전(Fail-safe) 구조 설계",
        "capability": "TX10.fdir",
        "area": "TX10",
        "task": "design",
        "importance": "required",
        "origin": "explicit",
        "evidence": [
          {
            "field": "rfpContent",
            "quote": "실패 안전(Fail-safe) 구조 초안 설계"
          },
          {
            "field": "rfpContent",
            "quote": "실패 안전 구조 완성 및 안전성 검증"
          }
        ],
        "rationale": "수치 실패·해 불능 시 안전 전환 구조의 설계와 검증이 요구된다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 2,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s4",
        "label": "임베디드 비행SW 구현(C)",
        "capability": "TX02.fsw",
        "area": "TX02",
        "task": "build",
        "importance": "required",
        "origin": "explicit",
        "evidence": [
          {
            "field": "rfpContent",
            "quote": "착륙선 OBC와 유사 대체 플랫폼에서 실시간 동작 가능한 임베디드 SW 구현(C) 및 최적화"
          }
        ],
        "rationale": "C 기반 실시간 임베디드 SW 구현이 요구된다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 1,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s5",
        "label": "OBC 유사 임베디드 플랫폼 실시간 검증",
        "capability": "TX02.obc",
        "area": "TX02",
        "task": "test",
        "importance": "required",
        "origin": "explicit",
        "evidence": [
          {
            "field": "summary",
            "quote": "실시간성 확보를 위한 착륙선 OBC와 유사한 성능의 임베디드 환경에서의 유도제어 알고리즘 구현 및 검증 필요"
          }
        ],
        "rationale": "OBC 유사 성능의 임베디드 환경에서 구현·검증이 필요하다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 1,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s6",
        "label": "센서/모델 오차 강인성 평가",
        "capability": "TX11.missionsim",
        "area": "TX11",
        "task": "test",
        "importance": "required",
        "origin": "explicit",
        "evidence": [
          {
            "field": "rfpContent",
            "quote": "강인성 확보를 위한 오차 모델링 및 평가 체계 구축"
          },
          {
            "field": "rfpContent",
            "quote": "센서/모델 오차에 대한 강인성, 착륙 정밀도 성능 검증"
          }
        ],
        "rationale": "오차 모델링과 착륙 정밀도 성능 검증 체계가 필요하다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 2,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s7",
        "label": "착륙선 유도제어 임베디드 구현 경험",
        "capability": "TX09.landing",
        "area": "TX09",
        "task": "build",
        "importance": "preferred",
        "origin": "explicit",
        "evidence": [
          {
            "field": "supportAmount",
            "quote": "착륙선 유도제어 임베디드 구현 경험 우대"
          }
        ],
        "rationale": "우대 조건으로 명시되어 있다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 1,
          "quotesMissing": 0,
          "downgraded": false
        }
      }
    ]
  },
  {
    "id": "space-nasa-roses25-apra",
    "parentId": null,
    "agency": "NASA / 국제공동연구",
    "title": "NASA D.6 천체물리 관측장비·서브오비탈·큐브위성 연구 (APRA)",
    "program": "국제공동연구·외국기관 무자금 PI/Co-I",
    "deadline": "2026-06-26",
    "deadlineLabel": "NOI 마감",
    "url": "https://nspires.nasaprs.com/external/solicitations/summary.do?solId=%7bE355D6D2-A5D1-2E47-2937-EF289DC97E44%7d&path=&method=init",
    "summary": "천체물리 관측장비·서브오비탈·큐브위성 연구. 한국 기관의 연구자도 자체·국내 재원으로 PI 또는 공동연구자로 참여할 수 있습니다. 한국 기관 연구비·출장비를 NASA에서 지원하지 않습니다.",
    "requirements": [
      {
        "id": "s1",
        "label": "천체물리 관측장비 개발",
        "capability": "TX08.optics",
        "area": "TX08",
        "task": "design",
        "importance": "required",
        "origin": "explicit",
        "evidence": [
          {
            "field": "title",
            "quote": "천체물리 관측장비·서브오비탈·큐브위성 연구"
          }
        ],
        "rationale": "공고 주제가 천체물리 관측장비 연구이며 광학 탑재체·망원경이 핵심 구성으로 추정된다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 1,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s2",
        "label": "X선·적외선 검출기 기술",
        "capability": "TX08.detector",
        "area": "TX08",
        "task": "build",
        "importance": "optional",
        "origin": "inferred",
        "evidence": [],
        "rationale": "APRA 관측장비 연구는 천체물리용 검출기 개발을 흔히 포함한다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 0,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s3",
        "label": "큐브위성 탑재체 시스템 통합",
        "capability": "TX11.mbse",
        "area": "TX11",
        "task": "build",
        "importance": "optional",
        "origin": "inferred",
        "evidence": [],
        "rationale": "큐브위성 연구는 소형 위성 시스템 설계와 통합 역량이 필요할 것으로 추정된다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 0,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s4",
        "label": "서브오비탈 비행 시험·실증",
        "capability": "TX13.cert",
        "area": "TX13",
        "task": "ops",
        "importance": "optional",
        "origin": "inferred",
        "evidence": [],
        "rationale": "서브오비탈 관측 연구는 비행 실증과 시험 운용이 수반될 것으로 추정된다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 0,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s5",
        "label": "관측 자료 처리·분석",
        "capability": "TX11.dataproc",
        "area": "TX11",
        "task": "data",
        "importance": "optional",
        "origin": "inferred",
        "evidence": [],
        "rationale": "관측장비 연구는 관측 자료의 처리와 성능 검증이 수반된다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 0,
          "quotesMissing": 0,
          "downgraded": false
        }
      }
    ]
  },
  {
    "id": "space-kasa-discovered-B000000003393Rb8lK2",
    "parentId": null,
    "agency": "우주항공청",
    "title": "2026년도 신규프로젝트 탐색연구사업 재공고(다중 궤도 위성 기반 우주환경 상시 감시체계 구축 기획연구)",
    "program": "우주항공청 R&D/사업 공고",
    "deadline": "2026-09-07",
    "deadlineLabel": "마감",
    "url": "https://www.kasa.go.kr/bbs/BBSMSTR_000000000018/view.do?nttId=B000000003393Rb8lK2",
    "summary": "2026년도 신규프로젝트 탐색연구사업 재공고(다중 궤도 위성 기반 우주환경 상시 감시체계 구축 기획연구) 우주항공청 공고 제2026-0095호 2026년도 신규프로젝트 탐색연구사업 재공고 (다중 궤도 위성 기반 우주환경 상시 감시체계 구축 기획연구) 우주항공청이 추진하는 「신규프로젝트 탐색연구사업」 2026년도 신규과제를 아래와 같이 재공모하오니 관심 있는 연구자들의 많은 참여 바랍니다. 2026년 8월 7일 우주항공청장 오 태 석 1. (본문) 2026년도 신규프로젝트 탐색연구 재공고.pdf 다운로드 뷰어 2. (별첨1)",
    "requirements": [
      {
        "id": "s1",
        "label": "우주환경 입자·플라즈마 측정",
        "capability": "TX08.spaceenv",
        "area": "TX08",
        "task": "plan",
        "importance": "required",
        "origin": "inferred",
        "evidence": [],
        "rationale": "우주환경 상시 감시체계 기획연구이므로 우주환경(입자·방사선 등) 측정 센서 구성 검토가 핵심으로 추정된다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 0,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s2",
        "label": "다중 궤도 위성 임무 시뮬레이션",
        "capability": "TX11.missionsim",
        "area": "TX11",
        "task": "analysis",
        "importance": "required",
        "origin": "inferred",
        "evidence": [],
        "rationale": "다중 궤도 위성 기반 상시 감시체계의 궤도·관측 커버리지 분석이 기획연구에 필요하다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 0,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s3",
        "label": "위성 관측 자료 처리·융합",
        "capability": "TX11.dataproc",
        "area": "TX11",
        "task": "data",
        "importance": "preferred",
        "origin": "inferred",
        "evidence": [],
        "rationale": "여러 궤도 위성의 우주환경 관측자료를 상시 감시용으로 처리·융합해야 한다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 0,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s4",
        "label": "시스템 개념설계·아키텍처",
        "capability": "TX11.mbse",
        "area": "TX11",
        "task": "plan",
        "importance": "preferred",
        "origin": "inferred",
        "evidence": [],
        "rationale": "감시체계 구축 기획연구는 체계 요구사항과 아키텍처 정립을 포함할 가능성이 높다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 0,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s5",
        "label": "위성 통신·자료 전송",
        "capability": "TX05.rf",
        "area": "TX05",
        "task": "design",
        "importance": "optional",
        "origin": "explicit",
        "evidence": [
          {
            "field": "technologyAreas",
            "quote": "위성통신"
          }
        ],
        "rationale": "기술분야에 위성통신이 명시되어 있어 자료 전송 링크 검토가 필요할 수 있다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 1,
          "quotesMissing": 0,
          "downgraded": false
        }
      },
      {
        "id": "s6",
        "label": "지상국·관제 운영체계",
        "capability": "TX13.groundstation",
        "area": "TX13",
        "task": "plan",
        "importance": "optional",
        "origin": "inferred",
        "evidence": [],
        "rationale": "상시 감시를 위해 다중 위성 자료 수신 및 관제 체계 구성이 필요할 것으로 추정된다.",
        "checks": {
          "skillKnown": true,
          "quotesFound": 0,
          "quotesMissing": 0,
          "downgraded": false
        }
      }
    ]
  }
];

export const researchers = [
  {
    "id": "R-001",
    "name": "합성 연구자 R-001",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX13",
    "capabilities": [
      {
        "skillId": "TX13.envtest",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-001-1",
            "kind": "논문",
            "title": "[합성] 우주환경 시험(진동·열진공) 데이터 분석 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-001-2",
            "kind": "특허",
            "title": "[합성] 우주환경 시험(진동·열진공) 데이터 분석 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX13.groundstation",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-001-3",
            "kind": "논문",
            "title": "[합성] 지상국·관제 운영·실증 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-001-4",
            "kind": "과제",
            "title": "[합성] 지상국·관제 운영·실증 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX13.cert",
        "task": "analysis",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-001-5",
            "kind": "특허",
            "title": "[합성] 인증·실증 시험 해석·시뮬레이션 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX03.pmad",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-001-6",
            "kind": "논문",
            "title": "[합성] 전력 관리·분배 데이터 분석 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-001-7",
            "kind": "특허",
            "title": "[합성] 전력 관리·분배 데이터 분석 수행 기록",
            "year": 2021
          }
        ]
      }
    ],
    "coauthors": [
      "R-043",
      "R-046",
      "R-048",
      "R-013",
      "R-017",
      "R-036"
    ]
  },
  {
    "id": "R-002",
    "name": "합성 연구자 R-002",
    "affiliation": "기업연구소",
    "synthetic": true,
    "primaryArea": "TX08",
    "capabilities": [
      {
        "skillId": "TX08.optics",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-002-1",
            "kind": "논문",
            "title": "[합성] 광학 탑재체·망원경 데이터 분석 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-002-2",
            "kind": "특허",
            "title": "[합성] 광학 탑재체·망원경 데이터 분석 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX08.detector",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-002-3",
            "kind": "논문",
            "title": "[합성] 검출기·X선·적외선 센서 데이터 분석 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX05.rf",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-002-4",
            "kind": "과제",
            "title": "[합성] RF·안테나 통신 데이터 분석 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX05.optical",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-002-5",
            "kind": "과제",
            "title": "[합성] 광통신 설계 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-002-6",
            "kind": "논문",
            "title": "[합성] 광통신 설계 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX15.uam",
        "task": "ops",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-004",
      "R-041",
      "R-016"
    ]
  },
  {
    "id": "R-003",
    "name": "합성 연구자 R-003",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX08",
    "capabilities": [
      {
        "skillId": "TX08.optics",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-003-1",
            "kind": "논문",
            "title": "[합성] 광학 탑재체·망원경 기획·표준 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-003-2",
            "kind": "과제",
            "title": "[합성] 광학 탑재체·망원경 기획·표준 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX08.spaceenv",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-003-3",
            "kind": "특허",
            "title": "[합성] 우주환경·입자 측정 운영·실증 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX08.sar",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-003-4",
            "kind": "특허",
            "title": "[합성] 레이더·SAR 설계 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-003-5",
            "kind": "과제",
            "title": "[합성] 레이더·SAR 설계 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX13.cert",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-003-6",
            "kind": "논문",
            "title": "[합성] 인증·실증 시험 제작·통합 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX13.groundstation",
        "task": "ops",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-003-7",
            "kind": "과제",
            "title": "[합성] 지상국·관제 운영·실증 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-003-8",
            "kind": "과제",
            "title": "[합성] 지상국·관제 운영·실증 수행 기록",
            "year": 2024
          }
        ]
      }
    ],
    "coauthors": [
      "R-023",
      "R-041"
    ]
  },
  {
    "id": "R-004",
    "name": "합성 연구자 R-004",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX08",
    "capabilities": [
      {
        "skillId": "TX08.detector",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-004-1",
            "kind": "논문",
            "title": "[합성] 검출기·X선·적외선 센서 운영·실증 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX08.spaceenv",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-004-2",
            "kind": "과제",
            "title": "[합성] 우주환경·입자 측정 설계 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX08.sar",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-004-3",
            "kind": "과제",
            "title": "[합성] 레이더·SAR 데이터 분석 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX14.cryo",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-004-4",
            "kind": "과제",
            "title": "[합성] 극저온 시스템 데이터 분석 수행 기록",
            "year": 2022
          }
        ]
      }
    ],
    "coauthors": [
      "R-002",
      "R-025",
      "R-020",
      "R-027"
    ]
  },
  {
    "id": "R-005",
    "name": "합성 연구자 R-005",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX01",
    "capabilities": [
      {
        "skillId": "TX01.electric",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-005-1",
            "kind": "과제",
            "title": "[합성] 전기추진 제작·통합 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX01.liquid",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-005-2",
            "kind": "특허",
            "title": "[합성] 액체로켓 엔진·연소 제작·통합 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-005-3",
            "kind": "특허",
            "title": "[합성] 액체로켓 엔진·연소 제작·통합 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX17.gnc",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-005-4",
            "kind": "논문",
            "title": "[합성] 궤도·유도 제어 데이터 분석 수행 기록",
            "year": 2022
          }
        ]
      }
    ],
    "coauthors": [
      "R-037",
      "R-042",
      "R-026",
      "R-032",
      "R-034",
      "R-040"
    ]
  },
  {
    "id": "R-006",
    "name": "합성 연구자 R-006",
    "affiliation": "기업연구소",
    "synthetic": true,
    "primaryArea": "TX07",
    "capabilities": [
      {
        "skillId": "TX07.lunar",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-006-1",
            "kind": "과제",
            "title": "[합성] 달 표면 임무 설계 시험·검증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX07.planetary",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-006-2",
            "kind": "논문",
            "title": "[합성] 행성과학 임무·자료 운영·실증 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-006-3",
            "kind": "논문",
            "title": "[합성] 행성과학 임무·자료 운영·실증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX10.onboardai",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-006-4",
            "kind": "과제",
            "title": "[합성] 탑재 AI·자율 판단 설계 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-006-5",
            "kind": "과제",
            "title": "[합성] 탑재 AI·자율 판단 설계 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX10.fdir",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-006-6",
            "kind": "특허",
            "title": "[합성] 고장 진단·자가 복구 기획·표준 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-006-7",
            "kind": "특허",
            "title": "[합성] 고장 진단·자가 복구 기획·표준 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX16.atm",
        "task": "test",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-007",
      "R-030",
      "R-046",
      "R-016",
      "R-037"
    ]
  },
  {
    "id": "R-007",
    "name": "합성 연구자 R-007",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX07",
    "capabilities": [
      {
        "skillId": "TX07.isru",
        "task": "analysis",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-007-1",
            "kind": "과제",
            "title": "[합성] 현지자원활용(ISRU) 해석·시뮬레이션 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX07.lunar",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-007-2",
            "kind": "과제",
            "title": "[합성] 달 표면 임무 설계 운영·실증 수행 기록",
            "year": 2026
          },
          {
            "id": "E-R-007-3",
            "kind": "논문",
            "title": "[합성] 달 표면 임무 설계 운영·실증 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX01.liquid",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-007-4",
            "kind": "특허",
            "title": "[합성] 액체로켓 엔진·연소 기획·표준 수행 기록",
            "year": 2026
          },
          {
            "id": "E-R-007-5",
            "kind": "과제",
            "title": "[합성] 액체로켓 엔진·연소 기획·표준 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX01.solid",
        "task": "test",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-007-6",
            "kind": "과제",
            "title": "[합성] 고체·하이브리드 추진 시험·검증 수행 기록",
            "year": 2023
          }
        ]
      }
    ],
    "coauthors": [
      "R-006",
      "R-046",
      "R-013"
    ]
  },
  {
    "id": "R-008",
    "name": "합성 연구자 R-008",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX15",
    "capabilities": [
      {
        "skillId": "TX15.aero",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-008-1",
            "kind": "논문",
            "title": "[합성] 공력 설계 운영·실증 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX15.uav",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-008-2",
            "kind": "논문",
            "title": "[합성] 무인기·드론 체계 설계 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX15.uam",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-008-3",
            "kind": "논문",
            "title": "[합성] UAM·PAV 기체 운영·실증 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX14.cryo",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-008-4",
            "kind": "논문",
            "title": "[합성] 극저온 시스템 데이터 분석 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX14.thermal",
        "task": "test",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-008-5",
            "kind": "과제",
            "title": "[합성] 열제어 설계 시험·검증 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-008-6",
            "kind": "과제",
            "title": "[합성] 열제어 설계 시험·검증 수행 기록",
            "year": 2020
          }
        ]
      }
    ],
    "coauthors": [
      "R-018",
      "R-017"
    ]
  },
  {
    "id": "R-009",
    "name": "합성 연구자 R-009",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX05",
    "capabilities": [
      {
        "skillId": "TX05.optical",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-009-1",
            "kind": "논문",
            "title": "[합성] 광통신 운영·실증 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-009-2",
            "kind": "논문",
            "title": "[합성] 광통신 운영·실증 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX05.ssa",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-009-3",
            "kind": "특허",
            "title": "[합성] 우주물체 감시·잔해 추적 시험·검증 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX05.gnss",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-009-4",
            "kind": "논문",
            "title": "[합성] 위성항법·GNSS 성능 분석 기획·표준 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-009-5",
            "kind": "특허",
            "title": "[합성] 위성항법·GNSS 성능 분석 기획·표준 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX15.uav",
        "task": "test",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-009-6",
            "kind": "과제",
            "title": "[합성] 무인기·드론 체계 시험·검증 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX10.swarm",
        "task": "ops",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-049",
      "R-022",
      "R-021"
    ]
  },
  {
    "id": "R-010",
    "name": "합성 연구자 R-010",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX17",
    "capabilities": [
      {
        "skillId": "TX17.adcs",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-010-1",
            "kind": "과제",
            "title": "[합성] 자세 결정·제어 제작·통합 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX17.rendezvous",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-010-2",
            "kind": "특허",
            "title": "[합성] 랑데부·근접 운용 기획·표준 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-010-3",
            "kind": "논문",
            "title": "[합성] 랑데부·근접 운용 기획·표준 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX17.gnc",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-010-4",
            "kind": "특허",
            "title": "[합성] 궤도·유도 제어 시험·검증 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-010-5",
            "kind": "논문",
            "title": "[합성] 궤도·유도 제어 시험·검증 수행 기록",
            "year": 2020
          }
        ]
      }
    ],
    "coauthors": [
      "R-042",
      "R-031"
    ]
  },
  {
    "id": "R-011",
    "name": "합성 연구자 R-011",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX06",
    "capabilities": [
      {
        "skillId": "TX06.health",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-011-1",
            "kind": "특허",
            "title": "[합성] 우주의학·인체 영향 기획·표준 수행 기록",
            "year": 2026
          },
          {
            "id": "E-R-011-2",
            "kind": "과제",
            "title": "[합성] 우주의학·인체 영향 기획·표준 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX06.habitat",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-011-3",
            "kind": "논문",
            "title": "[합성] 거주 모듈 제작·통합 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX06.eclss",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-011-4",
            "kind": "논문",
            "title": "[합성] 환경제어·생명유지 시험·검증 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX12.mech",
        "task": "test",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-011-5",
            "kind": "특허",
            "title": "[합성] 기구·전개 장치 시험·검증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX12.am",
        "task": "analysis",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-011-6",
            "kind": "논문",
            "title": "[합성] 적층제조·3D 프린팅 해석·시뮬레이션 수행 기록",
            "year": 2025
          }
        ]
      }
    ],
    "coauthors": [
      "R-019",
      "R-036",
      "R-045",
      "R-021"
    ]
  },
  {
    "id": "R-012",
    "name": "합성 연구자 R-012",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX03",
    "capabilities": [
      {
        "skillId": "TX03.pmad",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-012-1",
            "kind": "특허",
            "title": "[합성] 전력 관리·분배 운영·실증 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX03.solar",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-012-2",
            "kind": "특허",
            "title": "[합성] 태양전지·전력 생성 제작·통합 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-012-3",
            "kind": "논문",
            "title": "[합성] 태양전지·전력 생성 제작·통합 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX03.battery",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-012-4",
            "kind": "논문",
            "title": "[합성] 배터리·에너지 저장 설계 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-012-5",
            "kind": "과제",
            "title": "[합성] 배터리·에너지 저장 설계 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX01.solid",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-012-6",
            "kind": "논문",
            "title": "[합성] 고체·하이브리드 추진 설계 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX01.liquid",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-012-7",
            "kind": "특허",
            "title": "[합성] 액체로켓 엔진·연소 제작·통합 수행 기록",
            "year": 2026
          }
        ]
      }
    ],
    "coauthors": [
      "R-022",
      "R-019"
    ]
  },
  {
    "id": "R-013",
    "name": "합성 연구자 R-013",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX14",
    "capabilities": [
      {
        "skillId": "TX14.thermal",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-013-1",
            "kind": "논문",
            "title": "[합성] 열제어 설계 설계 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX14.cryo",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-013-2",
            "kind": "논문",
            "title": "[합성] 극저온 시스템 설계 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX15.uam",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-013-3",
            "kind": "특허",
            "title": "[합성] UAM·PAV 기체 기획·표준 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX15.uav",
        "task": "ops",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-013-4",
            "kind": "논문",
            "title": "[합성] 무인기·드론 체계 운영·실증 수행 기록",
            "year": 2023
          },
          {
            "id": "E-R-013-5",
            "kind": "과제",
            "title": "[합성] 무인기·드론 체계 운영·실증 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX03.solar",
        "task": "build",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-035",
      "R-001",
      "R-007",
      "R-015"
    ]
  },
  {
    "id": "R-014",
    "name": "합성 연구자 R-014",
    "affiliation": "기업연구소",
    "synthetic": true,
    "primaryArea": "TX16",
    "capabilities": [
      {
        "skillId": "TX16.airport",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-014-1",
            "kind": "과제",
            "title": "[합성] 공항 안전·조류 탐지 시험·검증 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX16.atm",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-014-2",
            "kind": "논문",
            "title": "[합성] 항공교통관리·UTM 제작·통합 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-014-3",
            "kind": "특허",
            "title": "[합성] 항공교통관리·UTM 제작·통합 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX07.isru",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-014-4",
            "kind": "논문",
            "title": "[합성] 현지자원활용(ISRU) 기획·표준 수행 기록",
            "year": 2020
          }
        ]
      }
    ],
    "coauthors": [
      "R-018",
      "R-028",
      "R-046",
      "R-029"
    ]
  },
  {
    "id": "R-015",
    "name": "합성 연구자 R-015",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX05",
    "capabilities": [
      {
        "skillId": "TX05.rf",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-015-1",
            "kind": "특허",
            "title": "[합성] RF·안테나 통신 설계 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX05.optical",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-015-2",
            "kind": "과제",
            "title": "[합성] 광통신 시험·검증 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-015-3",
            "kind": "과제",
            "title": "[합성] 광통신 시험·검증 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX08.spaceenv",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-015-4",
            "kind": "과제",
            "title": "[합성] 우주환경·입자 측정 기획·표준 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-015-5",
            "kind": "논문",
            "title": "[합성] 우주환경·입자 측정 기획·표준 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX08.sar",
        "task": "analysis",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-015-6",
            "kind": "과제",
            "title": "[합성] 레이더·SAR 해석·시뮬레이션 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX17.adcs",
        "task": "design",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-029",
      "R-013",
      "R-041",
      "R-045"
    ]
  },
  {
    "id": "R-016",
    "name": "합성 연구자 R-016",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX07",
    "capabilities": [
      {
        "skillId": "TX07.isru",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-016-1",
            "kind": "논문",
            "title": "[합성] 현지자원활용(ISRU) 설계 수행 기록",
            "year": 2023
          },
          {
            "id": "E-R-016-2",
            "kind": "과제",
            "title": "[합성] 현지자원활용(ISRU) 설계 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX07.lunar",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-016-3",
            "kind": "논문",
            "title": "[합성] 달 표면 임무 설계 제작·통합 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX07.planetary",
        "task": "analysis",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-016-4",
            "kind": "과제",
            "title": "[합성] 행성과학 임무·자료 해석·시뮬레이션 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-016-5",
            "kind": "특허",
            "title": "[합성] 행성과학 임무·자료 해석·시뮬레이션 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX13.groundstation",
        "task": "ops",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-016-6",
            "kind": "과제",
            "title": "[합성] 지상국·관제 운영·실증 수행 기록",
            "year": 2019
          }
        ]
      }
    ],
    "coauthors": [
      "R-002",
      "R-006",
      "R-029",
      "R-047"
    ]
  },
  {
    "id": "R-017",
    "name": "합성 연구자 R-017",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX13",
    "capabilities": [
      {
        "skillId": "TX13.groundstation",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-017-1",
            "kind": "논문",
            "title": "[합성] 지상국·관제 데이터 분석 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-017-2",
            "kind": "특허",
            "title": "[합성] 지상국·관제 데이터 분석 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX13.envtest",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-017-3",
            "kind": "논문",
            "title": "[합성] 우주환경 시험(진동·열진공) 제작·통합 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-017-4",
            "kind": "과제",
            "title": "[합성] 우주환경 시험(진동·열진공) 제작·통합 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX13.cert",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-017-5",
            "kind": "논문",
            "title": "[합성] 인증·실증 시험 데이터 분석 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX09.tps",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-017-6",
            "kind": "특허",
            "title": "[합성] 열차폐·대기 진입 데이터 분석 수행 기록",
            "year": 2022
          }
        ]
      }
    ],
    "coauthors": [
      "R-008",
      "R-001",
      "R-047",
      "R-040"
    ]
  },
  {
    "id": "R-018",
    "name": "합성 연구자 R-018",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX15",
    "capabilities": [
      {
        "skillId": "TX15.uav",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-018-1",
            "kind": "과제",
            "title": "[합성] 무인기·드론 체계 기획·표준 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-018-2",
            "kind": "과제",
            "title": "[합성] 무인기·드론 체계 기획·표준 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX15.aero",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-018-3",
            "kind": "특허",
            "title": "[합성] 공력 설계 기획·표준 수행 기록",
            "year": 2026
          },
          {
            "id": "E-R-018-4",
            "kind": "논문",
            "title": "[합성] 공력 설계 기획·표준 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX15.uam",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-018-5",
            "kind": "논문",
            "title": "[합성] UAM·PAV 기체 시험·검증 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-018-6",
            "kind": "특허",
            "title": "[합성] UAM·PAV 기체 시험·검증 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX05.rf",
        "task": "analysis",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-018-7",
            "kind": "논문",
            "title": "[합성] RF·안테나 통신 해석·시뮬레이션 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-018-8",
            "kind": "논문",
            "title": "[합성] RF·안테나 통신 해석·시뮬레이션 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX05.ssa",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-018-9",
            "kind": "특허",
            "title": "[합성] 우주물체 감시·잔해 추적 설계 수행 기록",
            "year": 2024
          }
        ]
      }
    ],
    "coauthors": [
      "R-008",
      "R-014",
      "R-041",
      "R-028"
    ]
  },
  {
    "id": "R-019",
    "name": "합성 연구자 R-019",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX06",
    "capabilities": [
      {
        "skillId": "TX06.health",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-019-1",
            "kind": "과제",
            "title": "[합성] 우주의학·인체 영향 기획·표준 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-019-2",
            "kind": "특허",
            "title": "[합성] 우주의학·인체 영향 기획·표준 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX06.habitat",
        "task": "analysis",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-019-3",
            "kind": "과제",
            "title": "[합성] 거주 모듈 해석·시뮬레이션 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-019-4",
            "kind": "논문",
            "title": "[합성] 거주 모듈 해석·시뮬레이션 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX06.eclss",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-019-5",
            "kind": "논문",
            "title": "[합성] 환경제어·생명유지 운영·실증 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-019-6",
            "kind": "논문",
            "title": "[합성] 환경제어·생명유지 운영·실증 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX05.optical",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-019-7",
            "kind": "특허",
            "title": "[합성] 광통신 제작·통합 수행 기록",
            "year": 2026
          }
        ]
      }
    ],
    "coauthors": [
      "R-011",
      "R-012"
    ]
  },
  {
    "id": "R-020",
    "name": "합성 연구자 R-020",
    "affiliation": "기업연구소",
    "synthetic": true,
    "primaryArea": "TX11",
    "capabilities": [
      {
        "skillId": "TX11.missionsim",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-020-1",
            "kind": "논문",
            "title": "[합성] 임무·시스템 시뮬레이션 제작·통합 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-020-2",
            "kind": "논문",
            "title": "[합성] 임무·시스템 시뮬레이션 제작·통합 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX11.cfd",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-020-3",
            "kind": "논문",
            "title": "[합성] 유동·열 수치해석 설계 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX11.dataproc",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-020-4",
            "kind": "과제",
            "title": "[합성] 위성·관측 자료 처리 시험·검증 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-020-5",
            "kind": "논문",
            "title": "[합성] 위성·관측 자료 처리 시험·검증 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX15.uav",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-020-6",
            "kind": "과제",
            "title": "[합성] 무인기·드론 체계 제작·통합 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX15.aero",
        "task": "ops",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-020-7",
            "kind": "과제",
            "title": "[합성] 공력 설계 운영·실증 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX16.atm",
        "task": "analysis",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-004",
      "R-033",
      "R-021"
    ]
  },
  {
    "id": "R-021",
    "name": "합성 연구자 R-021",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX11",
    "capabilities": [
      {
        "skillId": "TX11.astrosim",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-021-1",
            "kind": "특허",
            "title": "[합성] 이론·계산 천체물리 제작·통합 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX11.mbse",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-021-2",
            "kind": "논문",
            "title": "[합성] 모델 기반 시스템공학 설계 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-021-3",
            "kind": "논문",
            "title": "[합성] 모델 기반 시스템공학 설계 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX11.missionsim",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-021-4",
            "kind": "논문",
            "title": "[합성] 임무·시스템 시뮬레이션 기획·표준 수행 기록",
            "year": 2023
          },
          {
            "id": "E-R-021-5",
            "kind": "논문",
            "title": "[합성] 임무·시스템 시뮬레이션 기획·표준 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX05.gnss",
        "task": "ops",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-021-6",
            "kind": "특허",
            "title": "[합성] 위성항법·GNSS 성능 분석 운영·실증 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-021-7",
            "kind": "과제",
            "title": "[합성] 위성항법·GNSS 성능 분석 운영·실증 수행 기록",
            "year": 2022
          }
        ]
      }
    ],
    "coauthors": [
      "R-020",
      "R-009",
      "R-011"
    ]
  },
  {
    "id": "R-022",
    "name": "합성 연구자 R-022",
    "affiliation": "기업연구소",
    "synthetic": true,
    "primaryArea": "TX03",
    "capabilities": [
      {
        "skillId": "TX03.pmad",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-022-1",
            "kind": "특허",
            "title": "[합성] 전력 관리·분배 제작·통합 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-022-2",
            "kind": "논문",
            "title": "[합성] 전력 관리·분배 제작·통합 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX03.battery",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-022-3",
            "kind": "과제",
            "title": "[합성] 배터리·에너지 저장 시험·검증 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-022-4",
            "kind": "논문",
            "title": "[합성] 배터리·에너지 저장 시험·검증 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX03.solar",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-022-5",
            "kind": "논문",
            "title": "[합성] 태양전지·전력 생성 설계 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX11.missionsim",
        "task": "analysis",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-022-6",
            "kind": "논문",
            "title": "[합성] 임무·시스템 시뮬레이션 해석·시뮬레이션 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-022-7",
            "kind": "과제",
            "title": "[합성] 임무·시스템 시뮬레이션 해석·시뮬레이션 수행 기록",
            "year": 2019
          }
        ]
      }
    ],
    "coauthors": [
      "R-009",
      "R-012",
      "R-047"
    ]
  },
  {
    "id": "R-023",
    "name": "합성 연구자 R-023",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX08",
    "capabilities": [
      {
        "skillId": "TX08.sar",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-023-1",
            "kind": "특허",
            "title": "[합성] 레이더·SAR 기획·표준 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-023-2",
            "kind": "과제",
            "title": "[합성] 레이더·SAR 기획·표준 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX08.spaceenv",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-023-3",
            "kind": "논문",
            "title": "[합성] 우주환경·입자 측정 운영·실증 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-023-4",
            "kind": "논문",
            "title": "[합성] 우주환경·입자 측정 운영·실증 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX15.uav",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-023-5",
            "kind": "논문",
            "title": "[합성] 무인기·드론 체계 제작·통합 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-023-6",
            "kind": "논문",
            "title": "[합성] 무인기·드론 체계 제작·통합 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX15.aero",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-023-7",
            "kind": "과제",
            "title": "[합성] 공력 설계 데이터 분석 수행 기록",
            "year": 2026
          }
        ]
      }
    ],
    "coauthors": [
      "R-003",
      "R-039"
    ]
  },
  {
    "id": "R-024",
    "name": "합성 연구자 R-024",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX13",
    "capabilities": [
      {
        "skillId": "TX13.envtest",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-024-1",
            "kind": "논문",
            "title": "[합성] 우주환경 시험(진동·열진공) 운영·실증 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX13.groundstation",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-024-2",
            "kind": "논문",
            "title": "[합성] 지상국·관제 시험·검증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX13.cert",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-024-3",
            "kind": "과제",
            "title": "[합성] 인증·실증 시험 제작·통합 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-024-4",
            "kind": "논문",
            "title": "[합성] 인증·실증 시험 제작·통합 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX08.detector",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-024-5",
            "kind": "논문",
            "title": "[합성] 검출기·X선·적외선 센서 설계 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX08.spaceenv",
        "task": "test",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-024-6",
            "kind": "특허",
            "title": "[합성] 우주환경·입자 측정 시험·검증 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-024-7",
            "kind": "논문",
            "title": "[합성] 우주환경·입자 측정 시험·검증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX14.cryo",
        "task": "build",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-040",
      "R-050"
    ]
  },
  {
    "id": "R-025",
    "name": "합성 연구자 R-025",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX08",
    "capabilities": [
      {
        "skillId": "TX08.optics",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-025-1",
            "kind": "과제",
            "title": "[합성] 광학 탑재체·망원경 데이터 분석 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX08.detector",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-025-2",
            "kind": "논문",
            "title": "[합성] 검출기·X선·적외선 센서 데이터 분석 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX08.sar",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-025-3",
            "kind": "과제",
            "title": "[합성] 레이더·SAR 기획·표준 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX11.mbse",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-025-4",
            "kind": "특허",
            "title": "[합성] 모델 기반 시스템공학 설계 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-025-5",
            "kind": "특허",
            "title": "[합성] 모델 기반 시스템공학 설계 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX11.astrosim",
        "task": "ops",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-025-6",
            "kind": "과제",
            "title": "[합성] 이론·계산 천체물리 운영·실증 수행 기록",
            "year": 2023
          },
          {
            "id": "E-R-025-7",
            "kind": "특허",
            "title": "[합성] 이론·계산 천체물리 운영·실증 수행 기록",
            "year": 2020
          }
        ]
      }
    ],
    "coauthors": [
      "R-004",
      "R-039"
    ]
  },
  {
    "id": "R-026",
    "name": "합성 연구자 R-026",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX17",
    "capabilities": [
      {
        "skillId": "TX17.adcs",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-026-1",
            "kind": "논문",
            "title": "[합성] 자세 결정·제어 운영·실증 수행 기록",
            "year": 2023
          },
          {
            "id": "E-R-026-2",
            "kind": "과제",
            "title": "[합성] 자세 결정·제어 운영·실증 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX17.gnc",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-026-3",
            "kind": "논문",
            "title": "[합성] 궤도·유도 제어 운영·실증 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-026-4",
            "kind": "과제",
            "title": "[합성] 궤도·유도 제어 운영·실증 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX11.astrosim",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-026-5",
            "kind": "특허",
            "title": "[합성] 이론·계산 천체물리 제작·통합 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-026-6",
            "kind": "논문",
            "title": "[합성] 이론·계산 천체물리 제작·통합 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX12.mech",
        "task": "design",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-042",
      "R-005",
      "R-030",
      "R-034",
      "R-044"
    ]
  },
  {
    "id": "R-027",
    "name": "합성 연구자 R-027",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX11",
    "capabilities": [
      {
        "skillId": "TX11.astrosim",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-027-1",
            "kind": "논문",
            "title": "[합성] 이론·계산 천체물리 데이터 분석 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX11.dataproc",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-027-2",
            "kind": "특허",
            "title": "[합성] 위성·관측 자료 처리 시험·검증 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-027-3",
            "kind": "특허",
            "title": "[합성] 위성·관측 자료 처리 시험·검증 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX11.missionsim",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-027-4",
            "kind": "특허",
            "title": "[합성] 임무·시스템 시뮬레이션 설계 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX09.tps",
        "task": "analysis",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-027-5",
            "kind": "특허",
            "title": "[합성] 열차폐·대기 진입 해석·시뮬레이션 수행 기록",
            "year": 2020
          }
        ]
      }
    ],
    "coauthors": [
      "R-033",
      "R-004",
      "R-045"
    ]
  },
  {
    "id": "R-028",
    "name": "합성 연구자 R-028",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX15",
    "capabilities": [
      {
        "skillId": "TX15.aero",
        "task": "analysis",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-028-1",
            "kind": "논문",
            "title": "[합성] 공력 설계 해석·시뮬레이션 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX15.uav",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-028-2",
            "kind": "과제",
            "title": "[합성] 무인기·드론 체계 기획·표준 수행 기록",
            "year": 2026
          },
          {
            "id": "E-R-028-3",
            "kind": "논문",
            "title": "[합성] 무인기·드론 체계 기획·표준 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX04.mobility",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-028-4",
            "kind": "논문",
            "title": "[합성] 표면 이동 로봇·로버 제작·통합 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX04.manip",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-028-5",
            "kind": "과제",
            "title": "[합성] 로봇 팔·조작 설계 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-028-6",
            "kind": "논문",
            "title": "[합성] 로봇 팔·조작 설계 수행 기록",
            "year": 2022
          }
        ]
      }
    ],
    "coauthors": [
      "R-014",
      "R-018",
      "R-034"
    ]
  },
  {
    "id": "R-029",
    "name": "합성 연구자 R-029",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX05",
    "capabilities": [
      {
        "skillId": "TX05.rf",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-029-1",
            "kind": "특허",
            "title": "[합성] RF·안테나 통신 설계 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-029-2",
            "kind": "논문",
            "title": "[합성] RF·안테나 통신 설계 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX05.ssa",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-029-3",
            "kind": "논문",
            "title": "[합성] 우주물체 감시·잔해 추적 기획·표준 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX01.electric",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-029-4",
            "kind": "과제",
            "title": "[합성] 전기추진 설계 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-029-5",
            "kind": "특허",
            "title": "[합성] 전기추진 설계 수행 기록",
            "year": 2025
          }
        ]
      }
    ],
    "coauthors": [
      "R-015",
      "R-016",
      "R-014"
    ]
  },
  {
    "id": "R-030",
    "name": "합성 연구자 R-030",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX17",
    "capabilities": [
      {
        "skillId": "TX17.adcs",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-030-1",
            "kind": "특허",
            "title": "[합성] 자세 결정·제어 설계 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-030-2",
            "kind": "논문",
            "title": "[합성] 자세 결정·제어 설계 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX17.rendezvous",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-030-3",
            "kind": "과제",
            "title": "[합성] 랑데부·근접 운용 시험·검증 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-030-4",
            "kind": "논문",
            "title": "[합성] 랑데부·근접 운용 시험·검증 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX17.gnc",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-030-5",
            "kind": "과제",
            "title": "[합성] 궤도·유도 제어 설계 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX08.optics",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-030-6",
            "kind": "특허",
            "title": "[합성] 광학 탑재체·망원경 제작·통합 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-030-7",
            "kind": "논문",
            "title": "[합성] 광학 탑재체·망원경 제작·통합 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX08.spaceenv",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-030-8",
            "kind": "과제",
            "title": "[합성] 우주환경·입자 측정 기획·표준 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-030-9",
            "kind": "과제",
            "title": "[합성] 우주환경·입자 측정 기획·표준 수행 기록",
            "year": 2019
          }
        ]
      }
    ],
    "coauthors": [
      "R-006",
      "R-026"
    ]
  },
  {
    "id": "R-031",
    "name": "합성 연구자 R-031",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX09",
    "capabilities": [
      {
        "skillId": "TX09.landing",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-031-1",
            "kind": "과제",
            "title": "[합성] 착륙 유도·착지 장치 제작·통합 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-031-2",
            "kind": "과제",
            "title": "[합성] 착륙 유도·착지 장치 제작·통합 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX09.hazard",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-031-3",
            "kind": "과제",
            "title": "[합성] 착륙 위험 탐지 데이터 분석 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX09.tps",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-031-4",
            "kind": "특허",
            "title": "[합성] 열차폐·대기 진입 설계 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX07.isru",
        "task": "analysis",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-031-5",
            "kind": "특허",
            "title": "[합성] 현지자원활용(ISRU) 해석·시뮬레이션 수행 기록",
            "year": 2024
          }
        ]
      }
    ],
    "coauthors": [
      "R-010",
      "R-050",
      "R-038"
    ]
  },
  {
    "id": "R-032",
    "name": "합성 연구자 R-032",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX01",
    "capabilities": [
      {
        "skillId": "TX01.liquid",
        "task": "analysis",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-032-1",
            "kind": "논문",
            "title": "[합성] 액체로켓 엔진·연소 해석·시뮬레이션 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX01.electric",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-032-2",
            "kind": "과제",
            "title": "[합성] 전기추진 운영·실증 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-032-3",
            "kind": "과제",
            "title": "[합성] 전기추진 운영·실증 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX01.solid",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-032-4",
            "kind": "과제",
            "title": "[합성] 고체·하이브리드 추진 데이터 분석 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-032-5",
            "kind": "과제",
            "title": "[합성] 고체·하이브리드 추진 데이터 분석 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX13.groundstation",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-032-6",
            "kind": "논문",
            "title": "[합성] 지상국·관제 데이터 분석 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX13.cert",
        "task": "ops",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-032-7",
            "kind": "특허",
            "title": "[합성] 인증·실증 시험 운영·실증 수행 기록",
            "year": 2026
          },
          {
            "id": "E-R-032-8",
            "kind": "과제",
            "title": "[합성] 인증·실증 시험 운영·실증 수행 기록",
            "year": 2024
          }
        ]
      }
    ],
    "coauthors": [
      "R-005",
      "R-049",
      "R-037",
      "R-038"
    ]
  },
  {
    "id": "R-033",
    "name": "합성 연구자 R-033",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX11",
    "capabilities": [
      {
        "skillId": "TX11.dataproc",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-033-1",
            "kind": "과제",
            "title": "[합성] 위성·관측 자료 처리 운영·실증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX11.astrosim",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-033-2",
            "kind": "과제",
            "title": "[합성] 이론·계산 천체물리 기획·표준 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX10.onboardai",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-033-3",
            "kind": "특허",
            "title": "[합성] 탑재 AI·자율 판단 데이터 분석 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-033-4",
            "kind": "특허",
            "title": "[합성] 탑재 AI·자율 판단 데이터 분석 수행 기록",
            "year": 2024
          }
        ]
      }
    ],
    "coauthors": [
      "R-020",
      "R-027"
    ]
  },
  {
    "id": "R-034",
    "name": "합성 연구자 R-034",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX01",
    "capabilities": [
      {
        "skillId": "TX01.liquid",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-034-1",
            "kind": "과제",
            "title": "[합성] 액체로켓 엔진·연소 운영·실증 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX01.electric",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-034-2",
            "kind": "특허",
            "title": "[합성] 전기추진 기획·표준 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-034-3",
            "kind": "과제",
            "title": "[합성] 전기추진 기획·표준 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX01.solid",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-034-4",
            "kind": "특허",
            "title": "[합성] 고체·하이브리드 추진 시험·검증 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX04.mobility",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-034-5",
            "kind": "과제",
            "title": "[합성] 표면 이동 로봇·로버 제작·통합 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-034-6",
            "kind": "특허",
            "title": "[합성] 표면 이동 로봇·로버 제작·통합 수행 기록",
            "year": 2021
          }
        ]
      }
    ],
    "coauthors": [
      "R-005",
      "R-026",
      "R-028"
    ]
  },
  {
    "id": "R-035",
    "name": "합성 연구자 R-035",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX04",
    "capabilities": [
      {
        "skillId": "TX04.manip",
        "task": "analysis",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-035-1",
            "kind": "특허",
            "title": "[합성] 로봇 팔·조작 해석·시뮬레이션 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX04.mobility",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-035-2",
            "kind": "특허",
            "title": "[합성] 표면 이동 로봇·로버 데이터 분석 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX04.hri",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-035-3",
            "kind": "과제",
            "title": "[합성] 원격 운용·인간-로봇 협업 운영·실증 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX13.cert",
        "task": "analysis",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-035-4",
            "kind": "과제",
            "title": "[합성] 인증·실증 시험 해석·시뮬레이션 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-035-5",
            "kind": "논문",
            "title": "[합성] 인증·실증 시험 해석·시뮬레이션 수행 기록",
            "year": 2022
          }
        ]
      }
    ],
    "coauthors": [
      "R-013",
      "R-046"
    ]
  },
  {
    "id": "R-036",
    "name": "합성 연구자 R-036",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX12",
    "capabilities": [
      {
        "skillId": "TX12.composite",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-036-1",
            "kind": "과제",
            "title": "[합성] 복합재 구조 설계 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-036-2",
            "kind": "과제",
            "title": "[합성] 복합재 구조 설계 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX12.am",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-036-3",
            "kind": "특허",
            "title": "[합성] 적층제조·3D 프린팅 운영·실증 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-036-4",
            "kind": "논문",
            "title": "[합성] 적층제조·3D 프린팅 운영·실증 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX11.astrosim",
        "task": "test",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-036-5",
            "kind": "특허",
            "title": "[합성] 이론·계산 천체물리 시험·검증 수행 기록",
            "year": 2023
          },
          {
            "id": "E-R-036-6",
            "kind": "과제",
            "title": "[합성] 이론·계산 천체물리 시험·검증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX11.dataproc",
        "task": "ops",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-036-7",
            "kind": "특허",
            "title": "[합성] 위성·관측 자료 처리 운영·실증 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-036-8",
            "kind": "특허",
            "title": "[합성] 위성·관측 자료 처리 운영·실증 수행 기록",
            "year": 2021
          }
        ]
      }
    ],
    "coauthors": [
      "R-011",
      "R-044",
      "R-001"
    ]
  },
  {
    "id": "R-037",
    "name": "합성 연구자 R-037",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX01",
    "capabilities": [
      {
        "skillId": "TX01.electric",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-037-1",
            "kind": "특허",
            "title": "[합성] 전기추진 운영·실증 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-037-2",
            "kind": "특허",
            "title": "[합성] 전기추진 운영·실증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX01.liquid",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-037-3",
            "kind": "과제",
            "title": "[합성] 액체로켓 엔진·연소 데이터 분석 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-037-4",
            "kind": "과제",
            "title": "[합성] 액체로켓 엔진·연소 데이터 분석 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX04.hri",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-037-5",
            "kind": "과제",
            "title": "[합성] 원격 운용·인간-로봇 협업 기획·표준 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-037-6",
            "kind": "논문",
            "title": "[합성] 원격 운용·인간-로봇 협업 기획·표준 수행 기록",
            "year": 2026
          }
        ]
      }
    ],
    "coauthors": [
      "R-005",
      "R-032",
      "R-006"
    ]
  },
  {
    "id": "R-038",
    "name": "합성 연구자 R-038",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX02",
    "capabilities": [
      {
        "skillId": "TX02.obc",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-038-1",
            "kind": "특허",
            "title": "[합성] 탑재 컴퓨터·FPGA 설계 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-038-2",
            "kind": "논문",
            "title": "[합성] 탑재 컴퓨터·FPGA 설계 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX02.fsw",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-038-3",
            "kind": "논문",
            "title": "[합성] 비행 소프트웨어 시험·검증 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX02.radhard",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-038-4",
            "kind": "과제",
            "title": "[합성] 내방사선 전자부품 기획·표준 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-038-5",
            "kind": "특허",
            "title": "[합성] 내방사선 전자부품 기획·표준 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX12.mech",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-038-6",
            "kind": "특허",
            "title": "[합성] 기구·전개 장치 데이터 분석 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX12.am",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-038-7",
            "kind": "과제",
            "title": "[합성] 적층제조·3D 프린팅 기획·표준 수행 기록",
            "year": 2022
          }
        ]
      }
    ],
    "coauthors": [
      "R-031",
      "R-032"
    ]
  },
  {
    "id": "R-039",
    "name": "합성 연구자 R-039",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX08",
    "capabilities": [
      {
        "skillId": "TX08.spaceenv",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-039-1",
            "kind": "특허",
            "title": "[합성] 우주환경·입자 측정 운영·실증 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX08.optics",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-039-2",
            "kind": "논문",
            "title": "[합성] 광학 탑재체·망원경 데이터 분석 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX08.sar",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-039-3",
            "kind": "과제",
            "title": "[합성] 레이더·SAR 설계 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-039-4",
            "kind": "논문",
            "title": "[합성] 레이더·SAR 설계 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX15.uav",
        "task": "analysis",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-039-5",
            "kind": "논문",
            "title": "[합성] 무인기·드론 체계 해석·시뮬레이션 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX15.aero",
        "task": "ops",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-039-6",
            "kind": "특허",
            "title": "[합성] 공력 설계 운영·실증 수행 기록",
            "year": 2025
          }
        ]
      }
    ],
    "coauthors": [
      "R-023",
      "R-025",
      "R-048"
    ]
  },
  {
    "id": "R-040",
    "name": "합성 연구자 R-040",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX13",
    "capabilities": [
      {
        "skillId": "TX13.groundstation",
        "task": "ops",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-040-1",
            "kind": "논문",
            "title": "[합성] 지상국·관제 운영·실증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX13.cert",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-040-2",
            "kind": "과제",
            "title": "[합성] 인증·실증 시험 데이터 분석 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-040-3",
            "kind": "과제",
            "title": "[합성] 인증·실증 시험 데이터 분석 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX13.envtest",
        "task": "analysis",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-040-4",
            "kind": "과제",
            "title": "[합성] 우주환경 시험(진동·열진공) 해석·시뮬레이션 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-040-5",
            "kind": "과제",
            "title": "[합성] 우주환경 시험(진동·열진공) 해석·시뮬레이션 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX11.dataproc",
        "task": "ops",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-040-6",
            "kind": "특허",
            "title": "[합성] 위성·관측 자료 처리 운영·실증 수행 기록",
            "year": 2023
          },
          {
            "id": "E-R-040-7",
            "kind": "특허",
            "title": "[합성] 위성·관측 자료 처리 운영·실증 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX04.hri",
        "task": "build",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-024",
      "R-017",
      "R-005",
      "R-043"
    ]
  },
  {
    "id": "R-041",
    "name": "합성 연구자 R-041",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX01",
    "capabilities": [
      {
        "skillId": "TX01.liquid",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-041-1",
            "kind": "특허",
            "title": "[합성] 액체로켓 엔진·연소 시험·검증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX01.electric",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-041-2",
            "kind": "논문",
            "title": "[합성] 전기추진 기획·표준 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-041-3",
            "kind": "특허",
            "title": "[합성] 전기추진 기획·표준 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX01.solid",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-041-4",
            "kind": "논문",
            "title": "[합성] 고체·하이브리드 추진 시험·검증 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-041-5",
            "kind": "논문",
            "title": "[합성] 고체·하이브리드 추진 시험·검증 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX11.cfd",
        "task": "test",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-041-6",
            "kind": "특허",
            "title": "[합성] 유동·열 수치해석 시험·검증 수행 기록",
            "year": 2025
          },
          {
            "id": "E-R-041-7",
            "kind": "과제",
            "title": "[합성] 유동·열 수치해석 시험·검증 수행 기록",
            "year": 2021
          }
        ]
      }
    ],
    "coauthors": [
      "R-002",
      "R-003",
      "R-015",
      "R-018"
    ]
  },
  {
    "id": "R-042",
    "name": "합성 연구자 R-042",
    "affiliation": "기업연구소",
    "synthetic": true,
    "primaryArea": "TX17",
    "capabilities": [
      {
        "skillId": "TX17.adcs",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-042-1",
            "kind": "과제",
            "title": "[합성] 자세 결정·제어 데이터 분석 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-042-2",
            "kind": "논문",
            "title": "[합성] 자세 결정·제어 데이터 분석 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX17.gnc",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-042-3",
            "kind": "과제",
            "title": "[합성] 궤도·유도 제어 설계 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-042-4",
            "kind": "논문",
            "title": "[합성] 궤도·유도 제어 설계 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX17.rendezvous",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-042-5",
            "kind": "과제",
            "title": "[합성] 랑데부·근접 운용 데이터 분석 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-042-6",
            "kind": "논문",
            "title": "[합성] 랑데부·근접 운용 데이터 분석 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX16.atm",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-042-7",
            "kind": "특허",
            "title": "[합성] 항공교통관리·UTM 설계 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-042-8",
            "kind": "특허",
            "title": "[합성] 항공교통관리·UTM 설계 수행 기록",
            "year": 2025
          }
        ]
      }
    ],
    "coauthors": [
      "R-005",
      "R-010",
      "R-026"
    ]
  },
  {
    "id": "R-043",
    "name": "합성 연구자 R-043",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX13",
    "capabilities": [
      {
        "skillId": "TX13.cert",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-043-1",
            "kind": "과제",
            "title": "[합성] 인증·실증 시험 기획·표준 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-043-2",
            "kind": "특허",
            "title": "[합성] 인증·실증 시험 기획·표준 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX13.envtest",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-043-3",
            "kind": "특허",
            "title": "[합성] 우주환경 시험(진동·열진공) 설계 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-043-4",
            "kind": "특허",
            "title": "[합성] 우주환경 시험(진동·열진공) 설계 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX11.dataproc",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-043-5",
            "kind": "특허",
            "title": "[합성] 위성·관측 자료 처리 설계 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-043-6",
            "kind": "과제",
            "title": "[합성] 위성·관측 자료 처리 설계 수행 기록",
            "year": 2022
          }
        ]
      }
    ],
    "coauthors": [
      "R-001",
      "R-040",
      "R-044"
    ]
  },
  {
    "id": "R-044",
    "name": "합성 연구자 R-044",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX12",
    "capabilities": [
      {
        "skillId": "TX12.composite",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-044-1",
            "kind": "논문",
            "title": "[합성] 복합재 구조 데이터 분석 수행 기록",
            "year": 2023
          },
          {
            "id": "E-R-044-2",
            "kind": "특허",
            "title": "[합성] 복합재 구조 데이터 분석 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX12.mech",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-044-3",
            "kind": "과제",
            "title": "[합성] 기구·전개 장치 데이터 분석 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX12.am",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-044-4",
            "kind": "특허",
            "title": "[합성] 적층제조·3D 프린팅 설계 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX11.cfd",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-044-5",
            "kind": "특허",
            "title": "[합성] 유동·열 수치해석 설계 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX11.astrosim",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-044-6",
            "kind": "논문",
            "title": "[합성] 이론·계산 천체물리 설계 수행 기록",
            "year": 2023
          }
        ]
      }
    ],
    "coauthors": [
      "R-036",
      "R-043",
      "R-026"
    ]
  },
  {
    "id": "R-045",
    "name": "합성 연구자 R-045",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX11",
    "capabilities": [
      {
        "skillId": "TX11.mbse",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-045-1",
            "kind": "특허",
            "title": "[합성] 모델 기반 시스템공학 시험·검증 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX11.dataproc",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-045-2",
            "kind": "과제",
            "title": "[합성] 위성·관측 자료 처리 기획·표준 수행 기록",
            "year": 2020
          },
          {
            "id": "E-R-045-3",
            "kind": "특허",
            "title": "[합성] 위성·관측 자료 처리 기획·표준 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX02.fsw",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-045-4",
            "kind": "논문",
            "title": "[합성] 비행 소프트웨어 데이터 분석 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-045-5",
            "kind": "논문",
            "title": "[합성] 비행 소프트웨어 데이터 분석 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX02.obc",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-045-6",
            "kind": "특허",
            "title": "[합성] 탑재 컴퓨터·FPGA 데이터 분석 수행 기록",
            "year": 2025
          }
        ]
      },
      {
        "skillId": "TX09.tps",
        "task": "design",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-011",
      "R-027",
      "R-015"
    ]
  },
  {
    "id": "R-046",
    "name": "합성 연구자 R-046",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX07",
    "capabilities": [
      {
        "skillId": "TX07.planetary",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-046-1",
            "kind": "특허",
            "title": "[합성] 행성과학 임무·자료 데이터 분석 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-046-2",
            "kind": "논문",
            "title": "[합성] 행성과학 임무·자료 데이터 분석 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX07.lunar",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-046-3",
            "kind": "논문",
            "title": "[합성] 달 표면 임무 설계 시험·검증 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-046-4",
            "kind": "과제",
            "title": "[합성] 달 표면 임무 설계 시험·검증 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX07.isru",
        "task": "analysis",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-046-5",
            "kind": "과제",
            "title": "[합성] 현지자원활용(ISRU) 해석·시뮬레이션 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX02.radhard",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-046-6",
            "kind": "특허",
            "title": "[합성] 내방사선 전자부품 제작·통합 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-046-7",
            "kind": "과제",
            "title": "[합성] 내방사선 전자부품 제작·통합 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX02.fsw",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-046-8",
            "kind": "특허",
            "title": "[합성] 비행 소프트웨어 기획·표준 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX08.spaceenv",
        "task": "design",
        "level": "direct",
        "origin": "ai_inferred",
        "evidence": []
      }
    ],
    "coauthors": [
      "R-001",
      "R-006",
      "R-007",
      "R-014",
      "R-035"
    ]
  },
  {
    "id": "R-047",
    "name": "합성 연구자 R-047",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX07",
    "capabilities": [
      {
        "skillId": "TX07.lunar",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-047-1",
            "kind": "논문",
            "title": "[합성] 달 표면 임무 설계 시험·검증 수행 기록",
            "year": 2023
          }
        ]
      },
      {
        "skillId": "TX07.planetary",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-047-2",
            "kind": "특허",
            "title": "[합성] 행성과학 임무·자료 데이터 분석 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX07.isru",
        "task": "analysis",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-047-3",
            "kind": "논문",
            "title": "[합성] 현지자원활용(ISRU) 해석·시뮬레이션 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX08.sar",
        "task": "build",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-047-4",
            "kind": "과제",
            "title": "[합성] 레이더·SAR 제작·통합 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX08.spaceenv",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-047-5",
            "kind": "과제",
            "title": "[합성] 우주환경·입자 측정 기획·표준 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-047-6",
            "kind": "논문",
            "title": "[합성] 우주환경·입자 측정 기획·표준 수행 기록",
            "year": 2021
          }
        ]
      }
    ],
    "coauthors": [
      "R-017",
      "R-016",
      "R-022"
    ]
  },
  {
    "id": "R-048",
    "name": "합성 연구자 R-048",
    "affiliation": "기업연구소",
    "synthetic": true,
    "primaryArea": "TX11",
    "capabilities": [
      {
        "skillId": "TX11.mbse",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-048-1",
            "kind": "특허",
            "title": "[합성] 모델 기반 시스템공학 기획·표준 수행 기록",
            "year": 2024
          },
          {
            "id": "E-R-048-2",
            "kind": "논문",
            "title": "[합성] 모델 기반 시스템공학 기획·표준 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX11.missionsim",
        "task": "design",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-048-3",
            "kind": "과제",
            "title": "[합성] 임무·시스템 시뮬레이션 설계 수행 기록",
            "year": 2020
          }
        ]
      },
      {
        "skillId": "TX11.cfd",
        "task": "build",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-048-4",
            "kind": "특허",
            "title": "[합성] 유동·열 수치해석 제작·통합 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-048-5",
            "kind": "특허",
            "title": "[합성] 유동·열 수치해석 제작·통합 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX08.detector",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-048-6",
            "kind": "논문",
            "title": "[합성] 검출기·X선·적외선 센서 데이터 분석 수행 기록",
            "year": 2021
          },
          {
            "id": "E-R-048-7",
            "kind": "과제",
            "title": "[합성] 검출기·X선·적외선 센서 데이터 분석 수행 기록",
            "year": 2026
          }
        ]
      }
    ],
    "coauthors": [
      "R-001",
      "R-039"
    ]
  },
  {
    "id": "R-049",
    "name": "합성 연구자 R-049",
    "affiliation": "출연연",
    "synthetic": true,
    "primaryArea": "TX05",
    "capabilities": [
      {
        "skillId": "TX05.gnss",
        "task": "plan",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-049-1",
            "kind": "특허",
            "title": "[합성] 위성항법·GNSS 성능 분석 기획·표준 수행 기록",
            "year": 2019
          }
        ]
      },
      {
        "skillId": "TX05.ssa",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-049-2",
            "kind": "과제",
            "title": "[합성] 우주물체 감시·잔해 추적 데이터 분석 수행 기록",
            "year": 2021
          }
        ]
      },
      {
        "skillId": "TX12.composite",
        "task": "design",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-049-3",
            "kind": "과제",
            "title": "[합성] 복합재 구조 설계 수행 기록",
            "year": 2022
          }
        ]
      },
      {
        "skillId": "TX12.am",
        "task": "plan",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-049-4",
            "kind": "특허",
            "title": "[합성] 적층제조·3D 프린팅 기획·표준 수행 기록",
            "year": 2023
          }
        ]
      }
    ],
    "coauthors": [
      "R-009",
      "R-032"
    ]
  },
  {
    "id": "R-050",
    "name": "합성 연구자 R-050",
    "affiliation": "대학",
    "synthetic": true,
    "primaryArea": "TX09",
    "capabilities": [
      {
        "skillId": "TX09.landing",
        "task": "data",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-050-1",
            "kind": "과제",
            "title": "[합성] 착륙 유도·착지 장치 데이터 분석 수행 기록",
            "year": 2024
          }
        ]
      },
      {
        "skillId": "TX09.hazard",
        "task": "test",
        "level": "direct",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-050-2",
            "kind": "과제",
            "title": "[합성] 착륙 위험 탐지 시험·검증 수행 기록",
            "year": 2022
          },
          {
            "id": "E-R-050-3",
            "kind": "특허",
            "title": "[합성] 착륙 위험 탐지 시험·검증 수행 기록",
            "year": 2026
          }
        ]
      },
      {
        "skillId": "TX05.ssa",
        "task": "data",
        "level": "transfer",
        "origin": "record",
        "evidence": [
          {
            "id": "E-R-050-4",
            "kind": "과제",
            "title": "[합성] 우주물체 감시·잔해 추적 데이터 분석 수행 기록",
            "year": 2019
          },
          {
            "id": "E-R-050-5",
            "kind": "논문",
            "title": "[합성] 우주물체 감시·잔해 추적 데이터 분석 수행 기록",
            "year": 2024
          }
        ]
      }
    ],
    "coauthors": [
      "R-024",
      "R-031"
    ]
  }
];
