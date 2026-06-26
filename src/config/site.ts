export const siteConfig = {
  name: "삼성영어 셀레나 아이린 석성",
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
  bookingUrl: "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
  kakaoChannelUrl: "https://pf.kakao.com/_auFFn",
  kakaoChannelChatUrl: "https://pf.kakao.com/_auFFn/chat",
  kakaoChannelId: "_auFFn",
  instagramUrl: "https://www.instagram.com/selenaenglish_irene",
  youtubeUrl: "https://www.youtube.com/@selena_englishtv",
  blogRssUrl: "https://rss.blog.naver.com/da_num.xml",
  placeUrl:
    "https://map.naver.com/p/search/%EC%82%BC%EC%84%B1%EC%98%81%EC%96%B4%20%EC%85%80%EB%A0%88%EB%82%98%20%EC%95%84%EC%9D%B4%EB%A6%B0%20%EC%84%9D%EC%84%B1",
  keywords: [
    "삼성영어 셀레나 아이린 석성",
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

type NavItem = {
  name: string;
  href: string;
  highlight?: boolean;
};

export const navItems: NavItem[] = [
  { name: "학원소개", href: "/about" },
  { name: "프로그램", href: "/programs" },
  { name: "학원 특징", href: "/feature" },
  { name: "FAQ", href: "/faq" },
  { name: "블로그", href: "/blog" },
  { name: "오시는 길", href: "/contact" },
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
    question: "수업 시간은 언제인가요?",
    answer:
      "수업 시간은 평일 13:00 ~ 18:00입니다.",
  },
  {
    category: "비용/운영",
    question: "방문할 때 주차가 가능한가요?",
    answer: "아파트 상가동 주차장이 준비되어 있습니다.",
  },
];

type TopicSection = {
  title: string;
  body: string;
  points: string[];
};

type TopicProgramFit = {
  title: string;
  description: string;
  href: string;
};

type TopicFaq = {
  question: string;
  answer: string;
};

type TopicLink = {
  label: string;
  href: string;
};

type LearningTopicPage = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  intent?: "learning";
};

export type LocalTopicPageData = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  intent: "local";
  primaryKeyword: string;
  heroTitle: string;
  heroDescription: string;
  sections: TopicSection[];
  programFit: TopicProgramFit[];
  localFaqs: TopicFaq[];
  nearbyLinks: TopicLink[];
};

export type TopicPageData = LearningTopicPage | LocalTopicPageData;

export const topicPages: TopicPageData[] = [
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
    intent: "local",
    primaryKeyword: "석성초·초당초·동백역 영어학원",
    heroTitle: "석성초·초당초·동백역 영어학원 생활권 안내",
    heroDescription:
      "아이린 석성은 어은목마을 상가동에서 파닉스부터 중등 영어까지 아이 수준에 맞춰 매일 확인하는 1:1 관리형 영어 수업을 운영합니다.",
    sections: [
      {
        title: "지역보다 먼저 확인해야 할 것은 아이의 현재 단계입니다",
        body: "가까운 학원을 찾는 검색은 결국 우리 아이가 무리 없이 오래 다닐 수 있는지를 확인하는 과정입니다. 아이린 석성은 레벨 진단 후 필요한 단계와 반복량을 먼저 정합니다.",
        points: ["레벨 진단", "개별 진도", "매일 루틴", "학부모 피드백"],
      },
      {
        title: "학교와 생활권별로 더 자세히 볼 수 있습니다",
        body: "석성초 중심으로 찾는 경우와 동백역 생활권으로 찾는 경우는 궁금한 지점이 다릅니다. 아래 지역 안내 페이지에서 더 구체적인 기준을 확인할 수 있습니다.",
        points: ["석성초 생활권", "동백역 생활권", "어은목마을 접근성"],
      },
    ],
    programFit: [
      {
        title: "Hey! Hazel",
        description:
          "영어를 처음 시작하는 아이가 소리와 리듬에 익숙해지는 과정입니다.",
        href: "/programs/hey-hazel",
      },
      {
        title: "300만 문장 만들기",
        description:
          "초등부터 중등 전 단계까지 문장 이해와 표현을 반복하는 정규 과정입니다.",
        href: "/programs/300m-sentences",
      },
      {
        title: "PREP31",
        description:
          "중등 이후 독해, 문법, 어휘, 평가 루틴을 준비하는 심화 과정입니다.",
        href: "/programs/prep31",
      },
    ],
    localFaqs: [
      {
        question: "석성초와 동백역 생활권 학생 모두 상담할 수 있나요?",
        answer:
          "네. 방문 전 전화나 카카오 상담으로 학년과 현재 영어 수준을 알려주시면 시작 단계를 안내합니다.",
      },
      {
        question: "처음 영어를 시작하는 아이도 가능한가요?",
        answer:
          "가능합니다. 파닉스 전 흥미가 필요한 아이는 Hey! Hazel 또는 Pre-level 흐름부터 시작할 수 있습니다.",
      },
    ],
    nearbyLinks: [
      {
        label: "석성초 영어학원 안내",
        href: "/topics/suksung-elementary-english",
      },
      { label: "동백역 영어학원 안내", href: "/topics/dongbaek-station-english" },
    ],
  },
  {
    slug: "suksung-elementary-english",
    title: "석성초 영어학원 찾는 학부모님께",
    description:
      "석성초 생활권에서 파닉스, 초등 문장 만들기, 중등 준비까지 아이 수준에 맞춰 관리하는 1:1 영어 수업 안내입니다.",
    keywords: [
      "석성초 영어학원",
      "석성초 영어",
      "석성초 근처 영어학원",
      "석성초 초등 영어",
    ],
    intent: "local",
    primaryKeyword: "석성초 영어학원",
    heroTitle: "석성초 영어학원 찾는 학부모님께",
    heroDescription:
      "석성초 생활권에서 영어를 시작하거나 다시 잡아야 하는 아이에게 파닉스부터 문장 만들기, 중등 대비까지 레벨에 맞는 로드맵을 안내합니다.",
    sections: [
      {
        title: "석성초 학부모님이 자주 고민하는 영어 시작점",
        body: "초등 영어는 시작 시기보다 현재 수준을 정확히 보는 일이 먼저입니다. 알파벳과 소리부터 필요한 아이, 단어는 알지만 문장으로 말하기 어려운 아이, 중등 전환을 준비해야 하는 아이는 출발점이 다릅니다.",
        points: [
          "파닉스와 소리 감각",
          "문장 만들기",
          "읽기와 말하기 루틴",
          "중등 전환 준비",
        ],
      },
      {
        title: "매일 확인되는 1:1 관리형 수업",
        body: "아이린 석성은 같은 학년이라도 같은 진도로 묶지 않습니다. 레벨 진단 후 필요한 반복량을 정하고, AI 셀레나 말하기 루틴과 교실 선생님 피드백을 함께 연결합니다.",
        points: [
          "레벨 진단",
          "개별 진도",
          "AI 셀레나 말하기",
          "학습 기록 기반 피드백",
        ],
      },
      {
        title: "석성초 생활권에서 오기 좋은 위치",
        body: "학원은 경기도 용인시 기흥구 동백2로 9 어은목마을 벽산 블루밍 아파트 상가동 105호에 있습니다. 정확한 방문 경로는 네이버 지도를 통해 확인할 수 있습니다.",
        points: [
          "어은목마을 상가동 105호",
          "평일 13:00 ~ 18:00",
          "네이버 지도 확인 가능",
        ],
      },
    ],
    programFit: [
      {
        title: "Hey! Hazel",
        description:
          "영어가 처음이거나 파닉스 전 흥미와 소리 감각이 필요한 아이에게 맞습니다.",
        href: "/programs/hey-hazel",
      },
      {
        title: "300만 문장 만들기",
        description:
          "단어 암기에서 문장 이해와 표현으로 넘어가야 하는 초등 학생에게 맞습니다.",
        href: "/programs/300m-sentences",
      },
      {
        title: "PREP31",
        description:
          "중등 내신과 수능형 영어의 기초 체력을 준비해야 하는 학생에게 맞습니다.",
        href: "/programs/prep31",
      },
    ],
    localFaqs: [
      {
        question: "석성초 저학년도 수업이 가능한가요?",
        answer:
          "가능합니다. 영어를 처음 시작하는 아이는 흥미, 소리, 기초 파닉스부터 확인하고 무리 없는 단계로 시작합니다.",
      },
      {
        question: "파닉스부터 다시 시작할 수 있나요?",
        answer:
          "네. 학년보다 현재 읽기와 소리 인식 수준을 먼저 보고 필요한 단계부터 반복합니다.",
      },
      {
        question: "중등 준비는 언제부터 시작하면 좋나요?",
        answer:
          "초등 고학년부터 어휘, 문장 구조, 읽기 루틴을 조금씩 쌓으면 중등 전환이 부드러워집니다.",
      },
      {
        question: "상담 전에 무엇을 알려드리면 좋나요?",
        answer:
          "학년, 영어 학습 경험, 읽기 가능 여부, 아이가 어려워하는 부분을 알려주시면 레벨 진단 방향을 잡기 쉽습니다.",
      },
    ],
    nearbyLinks: [
      { label: "동백역 영어학원 안내", href: "/topics/dongbaek-station-english" },
      { label: "지역 영어학원 종합 안내", href: "/topics/local-english" },
    ],
  },
  {
    slug: "dongbaek-station-english",
    title: "동백역 영어학원, 매일 관리되는 1:1 영어",
    description:
      "동백역 생활권에서 초등 영어부터 중등 대비까지 레벨 진단과 매일 루틴으로 관리하는 영어 수업 안내입니다.",
    keywords: [
      "동백역 영어학원",
      "동백역 초등 영어",
      "동백역 중등 영어",
      "동백역 영어 교습소",
    ],
    intent: "local",
    primaryKeyword: "동백역 영어학원",
    heroTitle: "동백역 영어학원, 매일 관리되는 1:1 영어",
    heroDescription:
      "동백역 생활권에서 영어학원을 찾는 학부모님께, 아이린 석성은 초등 첫 영어부터 중등 대비까지 개별 진도와 피드백으로 관리합니다.",
    sections: [
      {
        title: "동백역 생활권에서 영어학원을 고를 때 볼 기준",
        body: "가까운 위치도 중요하지만, 아이가 매일 어떤 루틴으로 배우고 어떤 피드백을 받는지가 더 중요합니다. 아이린 석성은 진단, 개별 진도, 말하기 루틴, 학부모 피드백을 함께 봅니다.",
        points: ["접근성", "레벨 진단", "매일 학습 루틴", "교실 선생님 피드백"],
      },
      {
        title: "초등부터 중등까지 이어지는 로드맵",
        body: "처음 영어를 시작하는 아이는 흥미와 파닉스부터, 초등 정규 단계는 청크와 문장 만들기부터, 중등 준비 단계는 문법과 독해 루틴부터 연결합니다.",
        points: ["예비초·저학년", "초등 정규", "중등 준비", "수능형 기초 체력"],
      },
      {
        title: "상담과 방문 안내",
        body: "수업 시간은 평일 13:00 ~ 18:00입니다. 방문 전 전화, 카카오, 네이버 예약으로 아이의 학년과 현재 수준을 알려주시면 상담이 더 정확해집니다.",
        points: ["전화 상담", "카카오 상담", "네이버 예약", "네이버 지도"],
      },
    ],
    programFit: [
      {
        title: "Hey! Hazel",
        description:
          "예비초와 초등 저학년의 첫 영어, 흥미, 기초 음가 준비에 맞습니다.",
        href: "/programs/hey-hazel",
      },
      {
        title: "300만 문장 만들기",
        description:
          "초등부터 중등 전 단계까지 청크 학습과 문장 표현을 반복합니다.",
        href: "/programs/300m-sentences",
      },
      {
        title: "PREP31",
        description:
          "중등 이후 필요한 어휘, 문법, 독해, 평가 루틴을 준비합니다.",
        href: "/programs/prep31",
      },
    ],
    localFaqs: [
      {
        question: "동백역 생활권 초등학생도 상담할 수 있나요?",
        answer:
          "네. 아이의 학년과 영어 경험을 바탕으로 현재 수준을 확인하고 시작 단계를 안내합니다.",
      },
      {
        question: "중등 영어도 가능한가요?",
        answer:
          "가능합니다. PREP31과 정규 문법, 어휘, 독해 루틴으로 중등 이후 필요한 영어 체력을 준비합니다.",
      },
      {
        question: "AI 셀레나는 어떤 역할을 하나요?",
        answer:
          "AI 셀레나는 말하기와 피드백 루틴을 돕고, 교실 선생님이 진도와 반복을 함께 관리합니다.",
      },
      {
        question: "수업 시간은 언제인가요?",
        answer:
          "수업 시간은 평일 13:00 ~ 18:00입니다. 방문 전 상담 예약을 권장합니다.",
      },
    ],
    nearbyLinks: [
      {
        label: "석성초 영어학원 안내",
        href: "/topics/suksung-elementary-english",
      },
      { label: "지역 영어학원 종합 안내", href: "/topics/local-english" },
    ],
  },
];

export const pageDescription =
  "석성초, 초당초, 동백역 생활권의 삼성영어 셀레나 아이린 석성은 파닉스부터 중등 영어까지 AI 셀레나와 원장 직강으로 매일 말하고 확인하는 1:1 관리형 영어 수업을 운영합니다.";
