# Local SEO Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build dedicated local SEO topic pages for `석성초 영어학원` and `동백역 영어학원`, while keeping the existing local topic as a hub and preserving sitemap/structured-data coverage.

**Architecture:** Extend the existing `topicPages` config with a discriminated local-topic data shape, add a focused `LocalTopicPage` renderer, and branch the existing `/topics/[slug]` route by topic intent. Keep all content static and config-driven so sitemap, static params, and tests remain simple.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, Vitest, Testing Library, schema.org JSON-LD helpers.

---

## File Structure

- Modify: `src/config/site.ts`
  - Owns local SEO page data, the topic type, and route slugs used by static generation and sitemap.
- Create: `src/app/components/topics/LocalTopicPage.tsx`
  - Renders local SEO pages from one local topic object. Does not fetch data.
- Modify: `src/app/topics/[slug]/page.tsx`
  - Chooses local vs. learning topic rendering, emits metadata and JSON-LD.
- Create: `src/config/site.test.ts`
  - Validates local topic data completeness and CTA-compatible site config.
- Create: `src/app/components/topics/LocalTopicPage.test.tsx`
  - Verifies local page copy, FAQ, program links, nearby links, and CTAs render.
- Modify: `src/app/sitemap.test.ts`
  - Adds explicit assertions for the new SEO URLs.
- Create: `src/app/topics/[slug]/page.test.ts`
  - Tests local metadata generation.

---

### Task 1: Add Local Topic Data Contract And Content

**Files:**
- Modify: `src/config/site.ts`
- Create: `src/config/site.test.ts`

- [ ] **Step 1: Write the failing data validation test**

Create `src/config/site.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { siteConfig, topicPages } from "./site";

describe("site topic configuration", () => {
  it("defines complete local SEO topic pages", () => {
    const localTopics = topicPages.filter((topic) => topic.intent === "local");

    expect(localTopics.map((topic) => topic.slug)).toEqual(
      expect.arrayContaining([
        "local-english",
        "suksung-elementary-english",
        "dongbaek-station-english",
      ]),
    );

    for (const topic of localTopics) {
      expect(topic.primaryKeyword).toBeTruthy();
      expect(topic.heroTitle).toContain(topic.primaryKeyword);
      expect(topic.heroDescription).toBeTruthy();
      expect(topic.sections.length).toBeGreaterThanOrEqual(2);
      expect(topic.programFit.length).toBeGreaterThanOrEqual(2);
      expect(topic.localFaqs.length).toBeGreaterThanOrEqual(2);
      expect(topic.nearbyLinks.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("keeps consultation links available for local SEO pages", () => {
    expect(siteConfig.telHref).toMatch(/^tel:/);
    expect(siteConfig.kakaoChannelChatUrl).toContain("pf.kakao.com");
    expect(siteConfig.bookingUrl).toContain("booking.naver.com");
    expect(siteConfig.placeUrl).toContain("map.naver.com");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
yarn test src/config/site.test.ts
```

Expected: FAIL because `intent`, `primaryKeyword`, `sections`, `programFit`, `localFaqs`, and `nearbyLinks` do not exist on current topic entries.

- [ ] **Step 3: Add the topic types and local page data**

In `src/config/site.ts`, add these types before `export const topicPages`:

```ts
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
```

Then change the topic export to:

```ts
export const topicPages: TopicPageData[] = [
```

Update the existing `local-english` entry to a local hub:

```ts
  {
    slug: "local-english",
    title: "석성초·초당초·동백역 영어학원 안내",
    description:
      "어은목마을, 석성초, 초당초, 동백역 생활권에서 다니기 좋은 1:1 관리형 영어 교습소입니다.",
    keywords: ["석성초 영어학원", "초당초 영어학원", "동백역 영어학원"],
    intent: "local",
    primaryKeyword: "석성초·초당초·동백역 영어학원",
    heroTitle: "석성초·초당초·동백역 생활권 영어학원 안내",
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
        description: "영어를 처음 시작하는 아이가 소리와 리듬에 익숙해지는 과정입니다.",
        href: "/programs/hey-hazel",
      },
      {
        title: "300만 문장 만들기",
        description: "초등부터 중등 전 단계까지 문장 이해와 표현을 반복하는 정규 과정입니다.",
        href: "/programs/300m-sentences",
      },
      {
        title: "PREP31",
        description: "중등 이후 독해, 문법, 어휘, 평가 루틴을 준비하는 심화 과정입니다.",
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
      { label: "석성초 영어학원 안내", href: "/topics/suksung-elementary-english" },
      { label: "동백역 영어학원 안내", href: "/topics/dongbaek-station-english" },
    ],
  },
```

Append the two new local topic entries after `local-english`:

```ts
  {
    slug: "suksung-elementary-english",
    title: "석성초 영어학원 찾는 학부모님께",
    description:
      "석성초 생활권에서 파닉스, 초등 문장 만들기, 중등 준비까지 아이 수준에 맞춰 관리하는 1:1 영어 수업 안내입니다.",
    keywords: ["석성초 영어학원", "석성초 영어", "석성초 근처 영어학원", "석성초 초등 영어"],
    intent: "local",
    primaryKeyword: "석성초 영어학원",
    heroTitle: "석성초 영어학원 찾는 학부모님께",
    heroDescription:
      "석성초 생활권에서 영어를 시작하거나 다시 잡아야 하는 아이에게 파닉스부터 문장 만들기, 중등 대비까지 레벨에 맞는 로드맵을 안내합니다.",
    sections: [
      {
        title: "석성초 학부모님이 자주 고민하는 영어 시작점",
        body: "초등 영어는 시작 시기보다 현재 수준을 정확히 보는 일이 먼저입니다. 알파벳과 소리부터 필요한 아이, 단어는 알지만 문장으로 말하기 어려운 아이, 중등 전환을 준비해야 하는 아이는 출발점이 다릅니다.",
        points: ["파닉스와 소리 감각", "문장 만들기", "읽기와 말하기 루틴", "중등 전환 준비"],
      },
      {
        title: "매일 확인되는 1:1 관리형 수업",
        body: "아이린 석성은 같은 학년이라도 같은 진도로 묶지 않습니다. 레벨 진단 후 필요한 반복량을 정하고, AI 셀레나 말하기 루틴과 교실 선생님 피드백을 함께 연결합니다.",
        points: ["레벨 진단", "개별 진도", "AI 셀레나 말하기", "학습 기록 기반 피드백"],
      },
      {
        title: "석성초 생활권에서 오기 좋은 위치",
        body: "학원은 경기도 용인시 기흥구 동백2로 9 어은목마을 벽산 블루밍 아파트 상가동 105호에 있습니다. 정확한 방문 경로는 네이버 지도를 통해 확인할 수 있습니다.",
        points: ["어은목마을 상가동 105호", "평일 13:00 ~ 18:00", "네이버 지도 확인 가능"],
      },
    ],
    programFit: [
      {
        title: "Hey! Hazel",
        description: "영어가 처음이거나 파닉스 전 흥미와 소리 감각이 필요한 아이에게 맞습니다.",
        href: "/programs/hey-hazel",
      },
      {
        title: "300만 문장 만들기",
        description: "단어 암기에서 문장 이해와 표현으로 넘어가야 하는 초등 학생에게 맞습니다.",
        href: "/programs/300m-sentences",
      },
      {
        title: "PREP31",
        description: "중등 내신과 수능형 영어의 기초 체력을 준비해야 하는 학생에게 맞습니다.",
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
    keywords: ["동백역 영어학원", "동백역 초등 영어", "동백역 중등 영어", "동백역 영어 교습소"],
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
        description: "예비초와 초등 저학년의 첫 영어, 흥미, 기초 음가 준비에 맞습니다.",
        href: "/programs/hey-hazel",
      },
      {
        title: "300만 문장 만들기",
        description: "초등부터 중등 전 단계까지 청크 학습과 문장 표현을 반복합니다.",
        href: "/programs/300m-sentences",
      },
      {
        title: "PREP31",
        description: "중등 이후 필요한 어휘, 문법, 독해, 평가 루틴을 준비합니다.",
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
      { label: "석성초 영어학원 안내", href: "/topics/suksung-elementary-english" },
      { label: "지역 영어학원 종합 안내", href: "/topics/local-english" },
    ],
  },
```

- [ ] **Step 4: Run the data validation test**

Run:

```bash
yarn test src/config/site.test.ts
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/config/site.ts src/config/site.test.ts
git commit -m "feat: add local SEO topic data"
```

---

### Task 2: Build The Local Topic Renderer

**Files:**
- Create: `src/app/components/topics/LocalTopicPage.tsx`
- Create: `src/app/components/topics/LocalTopicPage.test.tsx`

- [ ] **Step 1: Write the failing component test**

Create `src/app/components/topics/LocalTopicPage.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { topicPages } from "@/config/site";
import LocalTopicPage from "./LocalTopicPage";

const seokseongTopic = topicPages.find(
  (topic) => topic.slug === "suksung-elementary-english",
);

if (!seokseongTopic || seokseongTopic.intent !== "local") {
  throw new Error("Missing local SEO test fixture");
}

describe("LocalTopicPage", () => {
  it("renders local SEO content, program links, FAQs, nearby links, and CTAs", () => {
    render(<LocalTopicPage topic={seokseongTopic} />);

    expect(
      screen.getByRole("heading", { name: "석성초 영어학원 찾는 학부모님께" }),
    ).toBeInTheDocument();
    expect(screen.getByText("석성초 학부모님이 자주 고민하는 영어 시작점")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Hey! Hazel 자세히 보기" })).toHaveAttribute(
      "href",
      "/programs/hey-hazel",
    );
    expect(screen.getByText("석성초 저학년도 수업이 가능한가요?")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "동백역 영어학원 안내" })).toHaveAttribute(
      "href",
      "/topics/dongbaek-station-english",
    );
    expect(screen.getByRole("link", { name: "전화상담하기" })).toHaveAttribute(
      "href",
      "tel:010-3421-4383",
    );
    expect(screen.getByRole("link", { name: "카카오 상담" })).toHaveAttribute(
      "href",
      "https://pf.kakao.com/_auFFn/chat",
    );
    expect(screen.getByRole("link", { name: "네이버 예약" })).toHaveAttribute(
      "href",
      "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
    );
    expect(screen.getByRole("link", { name: "네이버 지도" })).toHaveAttribute(
      "href",
      expect.stringContaining("map.naver.com"),
    );
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
yarn test src/app/components/topics/LocalTopicPage.test.tsx
```

Expected: FAIL because `LocalTopicPage.tsx` does not exist.

- [ ] **Step 3: Implement `LocalTopicPage`**

Create `src/app/components/topics/LocalTopicPage.tsx`:

```tsx
import Link from "next/link";
import PageHero from "@/app/components/layout/PageHero";
import CTASection from "@/app/components/section/CTASection";
import { siteConfig, type LocalTopicPageData } from "@/config/site";

type LocalTopicPageProps = {
  topic: LocalTopicPageData;
};

export default function LocalTopicPage({ topic }: LocalTopicPageProps) {
  return (
    <>
      <PageHero
        eyebrow="LOCAL GUIDE"
        title={topic.heroTitle}
        description={topic.heroDescription}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={siteConfig.telHref}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-pink-600 px-5 text-sm font-bold text-white shadow-md shadow-pink-500/20"
          >
            전화상담하기
          </a>
          <a
            href={siteConfig.kakaoChannelChatUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-200 bg-white px-5 text-sm font-bold text-gray-950"
          >
            카카오 상담
          </a>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-bold text-emerald-700"
          >
            네이버 예약
          </a>
          <a
            href={siteConfig.placeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-sky-200 bg-white px-5 text-sm font-bold text-sky-700"
          >
            네이버 지도
          </a>
        </div>
      </PageHero>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div className="space-y-8">
            {topic.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-pink-100 bg-white p-7 shadow-sm shadow-pink-900/5"
              >
                <h2 className="break-keep text-2xl font-extrabold leading-8 text-gray-950">
                  {section.title}
                </h2>
                <p className="mt-4 break-keep text-base leading-7 text-gray-600">
                  {section.body}
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-xl bg-surface-page px-4 py-3 text-sm font-bold text-gray-700"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-pink-100 bg-surface-cream p-7">
              <p className="text-sm font-bold text-pink-600">PROGRAM FIT</p>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-950">
                아이 수준별 시작점
              </h2>
              <div className="mt-6 space-y-4">
                {topic.programFit.map((program) => (
                  <div key={program.href} className="rounded-xl bg-white p-5">
                    <h3 className="text-lg font-extrabold text-gray-950">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {program.description}
                    </p>
                    <Link
                      href={program.href}
                      className="mt-4 inline-flex text-sm font-bold text-pink-600"
                    >
                      {program.title} 자세히 보기
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-7">
              <p className="text-sm font-bold text-sky-600">LOCAL LINKS</p>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-950">
                함께 보면 좋은 지역 안내
              </h2>
              <div className="mt-5 flex flex-col gap-3">
                {topic.nearbyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl border border-sky-100 px-4 py-3 text-sm font-bold text-gray-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface-page px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-pink-600">LOCAL FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-950">
            자주 묻는 질문
          </h2>
          <div className="mt-8 grid gap-4">
            {topic.localFaqs.map((item) => (
              <article key={item.question} className="rounded-2xl bg-white p-6">
                <h3 className="text-lg font-extrabold text-gray-950">
                  {item.question}
                </h3>
                <p className="mt-3 break-keep text-sm leading-6 text-gray-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
```

- [ ] **Step 4: Run the component test**

Run:

```bash
yarn test src/app/components/topics/LocalTopicPage.test.tsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/topics/LocalTopicPage.tsx src/app/components/topics/LocalTopicPage.test.tsx
git commit -m "feat: render local SEO topic pages"
```

---

### Task 3: Wire Local Rendering, Metadata, And JSON-LD

**Files:**
- Modify: `src/app/topics/[slug]/page.tsx`
- Create: `src/app/topics/[slug]/page.test.ts`

- [ ] **Step 1: Write the failing metadata test**

Create `src/app/topics/[slug]/page.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { generateMetadata } from "./page";

describe("topic page metadata", () => {
  it("places local SEO primary keywords in local topic titles", async () => {
    const seokseong = await generateMetadata({
      params: Promise.resolve({ slug: "suksung-elementary-english" }),
    });
    const dongbaek = await generateMetadata({
      params: Promise.resolve({ slug: "dongbaek-station-english" }),
    });

    expect(seokseong.title).toBe(
      "석성초 영어학원 | 삼성영어 셀레나 아이린 석성",
    );
    expect(seokseong.keywords).toEqual(
      expect.arrayContaining(["석성초 영어학원", "석성초 근처 영어학원"]),
    );
    expect(dongbaek.title).toBe(
      "동백역 영어학원 | 삼성영어 셀레나 아이린 석성",
    );
    expect(dongbaek.keywords).toEqual(
      expect.arrayContaining(["동백역 영어학원", "동백역 중등 영어"]),
    );
  });
});
```

- [ ] **Step 2: Run the metadata test to verify it fails**

Run:

```bash
yarn test 'src/app/topics/[slug]/page.test.ts'
```

Expected: FAIL because metadata still uses `topic.title`.

- [ ] **Step 3: Update the topic route**

Modify `src/app/topics/[slug]/page.tsx` so the import block becomes:

```ts
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import CTASection from "@/app/components/section/CTASection";
import LocalTopicPage from "@/app/components/topics/LocalTopicPage";
import { siteConfig, topicPages } from "@/config/site";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  organizationJsonLd,
} from "@/lib/seo";
```

Add this helper below `generateStaticParams`:

```ts
function localFaqJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
```

Change the metadata return to:

```ts
  return {
    title:
      topic.intent === "local"
        ? `${topic.primaryKeyword} | ${siteConfig.name}`
        : topic.title,
    description: topic.description,
    keywords: topic.keywords,
    alternates: { canonical: `/topics/${topic.slug}` },
  };
```

Inside `TopicPage`, after the `notFound()` guard, add:

```ts
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.title,
    description: topic.description,
    url: absoluteUrl(`/topics/${topic.slug}`),
    publisher: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
    },
  };

  if (topic.intent === "local") {
    return (
      <SiteFrame>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "홈", href: "/" },
            { name: topic.title, href: `/topics/${topic.slug}` },
          ])}
        />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={articleJsonLd} />
        <JsonLd data={localFaqJsonLd(topic.localFaqs)} />
        <LocalTopicPage topic={topic} />
      </SiteFrame>
    );
  }
```

Then replace the inline Article JSON-LD in the existing learning-page branch with:

```tsx
      <JsonLd data={articleJsonLd} />
```

- [ ] **Step 4: Run the metadata test**

Run:

```bash
yarn test 'src/app/topics/[slug]/page.test.ts'
```

Expected: PASS.

- [ ] **Step 5: Run the local renderer test again**

Run:

```bash
yarn test src/app/components/topics/LocalTopicPage.test.tsx
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add 'src/app/topics/[slug]/page.tsx' 'src/app/topics/[slug]/page.test.ts'
git commit -m "feat: wire local topic SEO metadata"
```

---

### Task 4: Assert Sitemap Coverage For Local SEO URLs

**Files:**
- Modify: `src/app/sitemap.test.ts`

- [ ] **Step 1: Add explicit sitemap assertions**

Append this test to `src/app/sitemap.test.ts` inside the existing `describe("sitemap", ...)` block:

```ts
  it("includes dedicated local SEO topic pages", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        `${siteConfig.domain}/topics/suksung-elementary-english`,
        `${siteConfig.domain}/topics/dongbaek-station-english`,
      ]),
    );
  });
```

- [ ] **Step 2: Run the sitemap test**

Run:

```bash
yarn test src/app/sitemap.test.ts
```

Expected: PASS because Task 1 added the two topic slugs and sitemap already maps `topicPages`.

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.test.ts
git commit -m "test: assert local SEO sitemap urls"
```

---

### Task 5: Verify The Full Local SEO Feature

**Files:**
- No source changes expected unless verification reveals a defect.

- [ ] **Step 1: Run focused tests**

Run:

```bash
yarn test src/config/site.test.ts src/app/components/topics/LocalTopicPage.test.tsx 'src/app/topics/[slug]/page.test.ts' src/app/sitemap.test.ts
```

Expected: PASS.

- [ ] **Step 2: Run the repository check**

Run:

```bash
yarn check
```

Expected: PASS for lint, tests, and build.

- [ ] **Step 3: Start the dev server for manual page checks**

Run:

```bash
yarn dev
```

Expected: Next.js starts and prints a local URL, usually `http://localhost:3000`.

- [ ] **Step 4: Manually inspect the local SEO pages**

Open:

```txt
http://localhost:3000/topics/suksung-elementary-english
http://localhost:3000/topics/dongbaek-station-english
http://localhost:3000/topics/local-english
```

Expected:

- The Seokseong page has `석성초 영어학원` in the hero.
- The Dongbaek page has `동백역 영어학원` in the hero.
- The local hub links to both dedicated pages.
- Phone, Kakao, Naver booking, and Naver map links are visible and clickable.
- No text overlaps on a narrow mobile viewport.

- [ ] **Step 5: Stop the dev server**

Press `Ctrl+C` in the dev server terminal.

- [ ] **Step 6: Commit any verification fixes**

If verification required fixes, commit them:

```bash
git add src/config/site.ts src/app/components/topics/LocalTopicPage.tsx 'src/app/topics/[slug]/page.tsx' src/app/sitemap.test.ts
git commit -m "fix: polish local SEO pages"
```

If no fixes were needed, do not create an empty commit.

---

## Post-Deploy Operations

After this feature is deployed, complete the Naver Search Advisor checklist from `docs/superpowers/specs/2026-06-20-local-seo-pages-design.md`:

1. Confirm `https://irene-english.com/sitemap.xml` is reachable.
2. Confirm `https://irene-english.com/robots.txt` points to the sitemap.
3. Confirm both new topic URLs appear in the production sitemap.
4. Open Naver Search Advisor with the owner account.
5. Confirm ownership for `https://irene-english.com`.
6. Submit or refresh the sitemap URL.
7. Request collection for both new topic pages if desired.
8. Monitor collection and indexing status.

---

## Self-Review

- Spec coverage: The plan covers the two local pages, local hub retention, config-driven rendering, local metadata, FAQ JSON-LD, organization JSON-LD, sitemap assertions, page rendering tests, and Naver Search Advisor checklist.
- Red-flag scan: No incomplete work remains; implementation content, paths, commands, and expected results are specified.
- Type consistency: The plan defines `LocalTopicPageData` in `src/config/site.ts`, imports the same type in `LocalTopicPage.tsx`, and branches on `topic.intent === "local"` in the route.
