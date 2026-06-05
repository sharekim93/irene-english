export const siteConfig = {
  name: "삼성영어 아이린 석성",
  legalName: "삼성영어 셀레나 아이린 석성 교습소",
  domain: "https://irene-english.com",
  phone: "010-3421-4383",
  telHref: "tel:010-3421-4383",
  address:
    "경기도 용인시 기흥구 동백2로 9 어은목마을 벽산 블루밍 아파트 상가동 105호",
  shortAddress: "경기도 용인시 기흥구 동백2로 9 상가동 105호",
  coordinates: {
    latitude: 37.2674246,
    longitude: 127.154662,
  },
  openingHoursText: "13:00 ~ 18:00",
  openingHoursSchema: "Mo-Fr 13:00-18:00",
  blogUrl: "https://blog.naver.com/da_num",
  blogRssUrl: "https://rss.blog.naver.com/da_num.xml",
  placeUrl:
    "https://map.naver.com/p/search/%EC%82%BC%EC%84%B1%EC%98%81%EC%96%B4%20%EC%95%84%EC%9D%B4%EB%A6%B0%20%EC%84%9D%EC%84%B1",
  keywords: [
    "삼성영어 아이린 석성",
    "삼성영어셀레나 아이린석성",
    "아이린 석성 교습소",
    "석성초 영어학원",
    "초당초 영어학원",
    "초당중 영어",
    "동백역 영어학원",
    "어은목마을 영어학원",
    "용인 동백 영어학원",
    "동백 파닉스",
    "예비초 영어",
    "초등 영어",
    "중등 영어",
    "청크 학습",
    "PREP31",
    "Hey Hazel",
  ],
};

export const navItems = [
  { name: "학원소개", href: "/about" },
  { name: "프로그램", href: "/programs" },
  { name: "학원 특징", href: "/feature" },
  { name: "FAQ", href: "/faq" },
  { name: "블로그", href: "/blog" },
  { name: "오시는 길", href: "/contact", highlight: true },
];

export const programSummaries = [
  {
    slug: "hey-hazel",
    title: "Hey! Hazel",
    age: "유아 · 예비초 · 초등 저학년",
    target: "영어를 처음 시작하거나 파닉스 전 흥미가 필요한 아이",
    goal: "영어 소리와 리듬에 익숙해지고 기초 음가를 자연스럽게 준비",
    method: "Chant, Song, Game 기반 활동과 짧은 말하기 루틴",
    description:
      "Chant, Song, Game으로 영어의 첫 경험을 즐겁게 만들고, 삼성영어셀레나 Pre-level로 이어지는 기초를 다집니다.",
    features: ["기초 음가", "파닉스 준비", "흥미 중심 활동"],
    href: "/programs/hey-hazel",
    color: "bg-white/85 border-pink-200 shadow-pink-900/5",
  },
  {
    slug: "300m-sentences",
    title: "300만 문장 만들기",
    age: "초등 · 중등 정규",
    target: "단어 암기에서 문장 이해와 표현으로 확장이 필요한 학생",
    goal: "청크 단위로 문장을 이해하고 직접 만들어 보는 영어 체력 형성",
    method: "단어, 듣기, 읽기, 말하기, 쓰기, 평가를 반복하는 4대 영역 루틴",
    description:
      "청크 단위로 문장을 이해하고 직접 만들어 보며 Pre-level부터 Advanced까지 개별 진도로 관리합니다.",
    features: ["청크 학습", "4대 영역 루틴", "개별 진도 관리"],
    href: "/programs/300m-sentences",
    color: "bg-white/85 border-sky-200 shadow-sky-900/5",
  },
  {
    slug: "prep31",
    title: "PREP31",
    age: "중등 상위 · 내신 · 수능 대비",
    target: "중등 이후 독해, 문법, 어휘, 평가 루틴이 필요한 학생",
    goal: "수능 1등급 수준을 목표로 한 읽기와 언어 구조 훈련",
    method: "DK 원서, 문법, 어휘, 성취도 평가를 엮은 심화 루틴",
    description:
      "원서, 문법, 어휘, 평가 루틴으로 중등 내신과 수능형 영어의 기초 체력을 준비합니다.",
    features: ["중등 내신 대비", "원서 독해", "수능형 기초 체력"],
    href: "/programs/prep31",
    color: "bg-white/85 border-violet-200 shadow-violet-900/5",
  },
];

export const faqItems = [
  {
    category: "등록/상담",
    question: "레벨테스트는 어떻게 진행하나요?",
    answer:
      "전화 상담 후 아이의 학년, 학습 이력, 현재 읽기와 말하기 수준을 확인하고 시작 단계를 안내합니다.",
  },
  {
    category: "등록/상담",
    question: "처음 영어를 시작하는 예비초도 가능한가요?",
    answer:
      "가능합니다. Hey! Hazel과 Pre-level을 통해 흥미, 소리, 기초 파닉스부터 천천히 시작할 수 있습니다.",
  },
  {
    category: "수업 방식",
    question: "AI 셀레나 수업은 태블릿만 보는 수업인가요?",
    answer:
      "아닙니다. AI 셀레나는 말하기와 피드백 루틴을 돕고, 교실 선생님이 진도와 반복, 학습 기록을 함께 관리합니다.",
  },
  {
    category: "수업 방식",
    question: "학생마다 진도가 다른가요?",
    answer:
      "네. 1:1 개별 맞춤 방식으로 레벨 진단 후 아이에게 필요한 단계와 반복량을 조정합니다.",
  },
  {
    category: "숙제/관리",
    question: "학부모는 학습 상황을 어떻게 확인하나요?",
    answer:
      "수업 기록, 녹음, 리포트와 상담을 통해 아이가 어떤 표현을 익히고 어떤 부분을 반복하는지 안내합니다.",
  },
  {
    category: "중등/내신",
    question: "중등 내신 대비도 하나요?",
    answer:
      "PREP31과 정규 문법, 어휘, 독해 루틴을 통해 중등 이후 필요한 영어 체력을 준비합니다.",
  },
  {
    category: "비용/운영",
    question: "운영 시간과 상담 가능 시간은 언제인가요?",
    answer:
      "수업 시간은 평일 13:00 ~ 18:00입니다. 상담은 전화로 먼저 예약해 주시면 더 정확히 안내해 드립니다.",
  },
  {
    category: "비용/운영",
    question: "방문할 때 주차가 가능한가요?",
    answer:
      "어은목마을 벽산 블루밍 아파트 상가동 105호로 방문하시면 됩니다. 방문 전 전화로 동선과 주차 안내를 확인해 주세요.",
  },
];

export const topicPages = [
  {
    slug: "phonics",
    title: "동백 파닉스 시작 안내",
    description:
      "알파벳만 아는 아이도 소리, 음가, 짧은 단어 읽기부터 차근차근 시작합니다.",
    keywords: ["동백 파닉스", "석성초 파닉스", "예비초 영어"],
  },
  {
    slug: "chunk-learning",
    title: "청크 학습으로 문장 만들기",
    description:
      "단어를 따로 외우는 데서 멈추지 않고 의미 덩어리로 문장을 이해하고 말해 봅니다.",
    keywords: ["청크 학습", "초등 문장 만들기", "300만 문장 만들기"],
  },
  {
    slug: "first-english",
    title: "초등 첫 영어학원 선택",
    description:
      "초등 첫 영어는 흥미, 루틴, 피드백이 함께 있어야 오래 이어집니다.",
    keywords: ["초등 첫 영어학원", "초당초 영어학원", "석성초 영어학원"],
  },
  {
    slug: "middle-school",
    title: "중등 내신과 수능형 영어 준비",
    description:
      "문법, 어휘, 독해, 평가 루틴을 쌓아 중등 이후 영어의 기초 체력을 만듭니다.",
    keywords: ["중등 내신 영어", "초당중 영어", "PREP31"],
  },
  {
    slug: "local-english",
    title: "석성초·초당초·동백역 영어학원 안내",
    description:
      "어은목마을, 석성초, 초당초, 동백역 생활권에서 다니기 좋은 1:1 관리형 영어 교습소입니다.",
    keywords: ["석성초 영어학원", "초당초 영어학원", "동백역 영어학원"],
  },
];

export const pageDescription =
  "석성초, 초당초, 동백역 생활권의 삼성영어 아이린 석성은 파닉스부터 중등 영어까지 AI 셀레나와 원장 직강으로 매일 말하고 확인하는 1:1 관리형 영어 수업을 운영합니다.";
