# Irene English Design System Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the Next.js Irene English site into durable alignment with the updated `DESIGN.md`: Noto Sans KR, Electric Pink as the primary accent, warm education surfaces, direct consultation actions, Korean readability, branded Kakao/Naver actions, accessible states, and StyleSeed operating rules.

**Architecture:** Keep the current App Router and component structure. Add small shared UI primitives for design-system classes and consultation actions, then replace duplicated one-off CTA and card styling in the pages that currently drift from the design rules. Use focused unit tests for component contracts and one Playwright smoke test for end-to-end page behavior.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, HeroUI, motion/react, Vitest, Testing Library, Playwright.

---

## Scope Check

This plan covers one subsystem: visual/design-system alignment for the public website UI. It intentionally does not change SEO data generation, RSS parsing, Naver map integration behavior, or content strategy beyond Korean action labels and design naming consistency already specified in `DESIGN.md`.

## File Structure

- Modify `src/app/globals.css`: define reusable brand utility classes for focus rings, action buttons, cards, and section containers using existing CSS variables.
- Create `src/app/design-system.test.ts`: assert the global design tokens and shared utility classes exist so future UI work does not drift.
- Create `src/app/components/ui/ConsultActions.tsx`: single reusable renderer for telephone, Kakao, Naver booking, and optional Naver map actions.
- Create `src/app/components/ui/ConsultActions.test.tsx`: assert CTA labels, hrefs, targets, and 44px action sizing classes.
- Modify `src/app/components/section/HeroSectionClient.tsx`: use shared CTAs, semantic token colors, and existing Selena imagery without hardcoded warm-border hex values.
- Modify `src/app/components/section/HeroSectionClient.test.tsx`: update assertions for the shared CTA component and design-token classes.
- Modify `src/app/components/section/CTASection.tsx`: remove orb-like decorative blur elements, use shared CTA group, and keep the Electric Pink conversion band.
- Modify `src/app/contact/page.tsx`: use shared CTA group in the page hero and warm card borders for contact facts.
- Modify `src/app/components/topics/LocalTopicPage.tsx`: use shared CTAs, warm/pink surfaces, consistent local link cards, and existing `CTASection`.
- Modify `src/app/components/topics/LocalTopicPage.test.tsx`: update CTA label assertions to match canonical Korean labels.
- Modify `src/app/components/ui/ProgramCard.tsx`: make program cards use only the warm paper system, Electric Pink primary action, stable button states, and no unused `program.color` dependency.
- Modify `src/config/site.ts`: remove `color` from `programSummaries` because the updated design makes program-card styling component-owned.
- Modify `src/app/components/blog/BlogCard.tsx`: remove discrete orb decoration from the fallback image and use a quiet paper/grid fallback surface.
- Modify `src/app/components/blog/BlogCard.test.tsx`: assert the fallback uses the Irene English note label and the canonical external link.
- Modify `src/app/components/section/FeatureSection.tsx`: remove the violet blur blob and keep the feature section focused on cards/content.
- Modify `e2e/renewal-smoke.spec.ts`: assert home/contact pages expose canonical phone, Kakao, Naver booking, and Naver map actions.

---

### Task 1: Global Design Utilities

**Files:**
- Modify: `src/app/globals.css`
- Create: `src/app/design-system.test.ts`

- [ ] **Step 1: Write the failing design utility test**

Create `src/app/design-system.test.ts` with this content:

```ts
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const globalsCss = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8");

describe("global Irene English design system", () => {
  it("exposes the updated brand tokens from DESIGN.md", () => {
    expect(globalsCss).toContain("--brand: #e94391;");
    expect(globalsCss).toContain("--brand-hover: #d92d7f;");
    expect(globalsCss).toContain("--surface-page: #fcf9f8;");
    expect(globalsCss).toContain("--surface-cream: #fffdf7;");
    expect(globalsCss).toContain("--border-warm: #eadfd3;");
    expect(globalsCss).toContain('--app-font-noto-sans-kr: "Noto Sans KR"');
  });

  it("defines shared interaction and surface classes for future UI work", () => {
    expect(globalsCss).toContain(".brand-focus-ring");
    expect(globalsCss).toContain(".brand-primary-action");
    expect(globalsCss).toContain(".brand-secondary-action");
    expect(globalsCss).toContain(".brand-kakao-action");
    expect(globalsCss).toContain(".brand-naver-action");
    expect(globalsCss).toContain(".warm-card-surface");
    expect(globalsCss).toContain(".section-shell");
    expect(globalsCss).toContain(".section-container");
  });
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run:

```bash
yarn vitest run src/app/design-system.test.ts
```

Expected: FAIL because `.brand-focus-ring`, `.brand-primary-action`, `.brand-secondary-action`, `.brand-kakao-action`, `.brand-naver-action`, `.warm-card-surface`, `.section-shell`, and `.section-container` are not defined yet.

- [ ] **Step 3: Add the global utility classes**

Append this block to `src/app/globals.css` after the `body` rule and before `html`:

```css
.brand-focus-ring {
  outline: none;
}

.brand-focus-ring:focus-visible {
  box-shadow: 0 0 0 4px rgba(233, 67, 145, 0.24);
}

.brand-primary-action {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  background: var(--brand);
  color: #ffffff;
  font-family: var(--app-font-noto-sans-kr);
  font-weight: 800;
  line-height: 1;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(233, 67, 145, 0.2);
  transition:
    background-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.brand-primary-action:hover {
  background: var(--brand-hover);
  box-shadow: 0 14px 32px rgba(233, 67, 145, 0.25);
  transform: translateY(-1px);
}

.brand-secondary-action {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid rgba(233, 67, 145, 0.22);
  border-radius: 0.75rem;
  background: #ffffff;
  color: var(--foreground);
  font-family: var(--app-font-noto-sans-kr);
  font-weight: 800;
  line-height: 1;
  text-decoration: none;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.brand-secondary-action:hover {
  border-color: rgba(233, 67, 145, 0.42);
  background: rgba(255, 176, 203, 0.16);
  color: var(--brand-deep);
  transform: translateY(-1px);
}

.brand-kakao-action {
  border-color: rgba(254, 229, 0, 0.78);
  background: #fee500;
  color: #191919;
  box-shadow: 0 10px 24px rgba(234, 179, 8, 0.18);
}

.brand-kakao-action:hover {
  border-color: #f7dc00;
  background: #f7dc00;
  color: #191919;
}

.brand-naver-action {
  border-color: #03c75a;
  background: #03c75a;
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(3, 199, 90, 0.18);
}

.brand-naver-action:hover {
  border-color: #02b350;
  background: #02b350;
  color: #ffffff;
}

.warm-card-surface {
  border: 1px solid var(--border-warm);
  background: var(--surface-paper);
  box-shadow: 0 16px 34px rgba(31, 41, 55, 0.08);
}

.section-shell {
  padding: 5rem 1.25rem;
}

.section-container {
  width: 100%;
  max-width: 80rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
}

@media (min-width: 640px) {
  .section-shell {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .section-container {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .section-container {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
```

- [ ] **Step 4: Run the test and verify it passes**

Run:

```bash
yarn vitest run src/app/design-system.test.ts
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css src/app/design-system.test.ts
git commit -m "style: add Irene design system utilities"
```

---

### Task 2: Shared Consultation Actions

**Files:**
- Create: `src/app/components/ui/ConsultActions.tsx`
- Create: `src/app/components/ui/ConsultActions.test.tsx`

- [ ] **Step 1: Write the failing component test**

Create `src/app/components/ui/ConsultActions.test.tsx` with this content:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ConsultActions from "./ConsultActions";
import { siteConfig } from "@/config/site";

describe("ConsultActions", () => {
  it("renders canonical consultation actions with correct destinations", () => {
    render(<ConsultActions includeMap />);

    expect(screen.getByRole("link", { name: "전화상담하기" })).toHaveAttribute(
      "href",
      siteConfig.telHref,
    );
    expect(screen.getByRole("link", { name: "카카오톡 상담" })).toHaveAttribute(
      "href",
      siteConfig.kakaoChannelChatUrl,
    );
    expect(screen.getByRole("link", { name: "네이버 예약" })).toHaveAttribute(
      "href",
      siteConfig.bookingUrl,
    );
    expect(screen.getByRole("link", { name: "네이버 지도" })).toHaveAttribute(
      "href",
      siteConfig.placeUrl,
    );
  });

  it("keeps actions touch-friendly and wraps on narrow screens", () => {
    const { container } = render(<ConsultActions includeMap align="start" />);

    const group = container.querySelector('[data-testid="consult-actions"]');

    expect(group).toHaveClass("flex", "flex-col", "gap-3", "sm:flex-row", "sm:flex-wrap");
    expect(screen.getByRole("link", { name: "전화상담하기" })).toHaveClass(
      "min-h-11",
      "brand-primary-action",
      "brand-focus-ring",
    );
    expect(screen.getByRole("link", { name: "카카오톡 상담" })).toHaveClass(
      "min-h-11",
      "brand-secondary-action",
      "brand-kakao-action",
      "brand-focus-ring",
    );
    expect(screen.getByRole("link", { name: "네이버 예약" })).toHaveClass(
      "min-h-11",
      "brand-secondary-action",
      "brand-naver-action",
      "brand-focus-ring",
    );
  });
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run:

```bash
yarn vitest run src/app/components/ui/ConsultActions.test.tsx
```

Expected: FAIL because `src/app/components/ui/ConsultActions.tsx` does not exist.

- [ ] **Step 3: Create the shared CTA component**

Create `src/app/components/ui/ConsultActions.tsx` with this content:

```tsx
import { KakaoTalkBrandIcon } from "@/app/components/ui/BrandIcons";
import NaverBookingIcon from "@/app/components/ui/NaverBookingIcon";
import { siteConfig } from "@/config/site";

type ConsultActionsProps = {
  includeMap?: boolean;
  align?: "center" | "start";
  className?: string;
};

export default function ConsultActions({
  includeMap = false,
  align = "center",
  className = "",
}: ConsultActionsProps) {
  const alignmentClassName =
    align === "start"
      ? "items-stretch sm:items-start sm:justify-start"
      : "items-stretch sm:items-center sm:justify-center";

  const actionClassName =
    "min-h-11 px-5 text-sm sm:h-12 sm:px-6 sm:text-base";

  return (
    <div
      data-testid="consult-actions"
      className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${alignmentClassName} ${className}`}
    >
      <a
        href={siteConfig.telHref}
        className={`brand-primary-action brand-focus-ring ${actionClassName}`}
      >
        전화상담하기
      </a>
      <a
        href={siteConfig.kakaoChannelChatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`brand-secondary-action brand-kakao-action brand-focus-ring ${actionClassName}`}
      >
        <KakaoTalkBrandIcon className="h-5 w-5" />
        <span>카카오톡 상담</span>
      </a>
      <a
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`brand-secondary-action brand-naver-action brand-focus-ring ${actionClassName}`}
      >
        <NaverBookingIcon className="h-5 w-5 [&_path:first-of-type]:fill-[#03c75a] [&_path:last-of-type]:fill-none [&_path:last-of-type]:stroke-[#03c75a] [&_rect]:fill-white" />
        <span>네이버 예약</span>
      </a>
      {includeMap ? (
        <a
          href={siteConfig.placeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`brand-secondary-action brand-focus-ring ${actionClassName}`}
        >
          네이버 지도
        </a>
      ) : null}
    </div>
  );
}
```

- [ ] **Step 4: Run the component test and verify it passes**

Run:

```bash
yarn vitest run src/app/components/ui/ConsultActions.test.tsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/ui/ConsultActions.tsx src/app/components/ui/ConsultActions.test.tsx
git commit -m "feat: add shared consultation actions"
```

---

### Task 3: Home Hero and Conversion Band

**Files:**
- Modify: `src/app/components/section/HeroSectionClient.tsx`
- Modify: `src/app/components/section/HeroSectionClient.test.tsx`
- Modify: `src/app/components/section/CTASection.tsx`

- [ ] **Step 1: Update the hero test before implementation**

Replace `src/app/components/section/HeroSectionClient.test.tsx` with:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HeroSectionClient from "./HeroSectionClient";

describe("HeroSectionClient", () => {
  it("renders the text-first hero with Selena imagery and canonical consultation actions", () => {
    const { container } = render(<HeroSectionClient />);

    expect(
      screen.getByRole("heading", {
        name: "영어를 잘 할 수밖에 없는 학습 시스템",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/학생중심 1:1 맞춤 수업에 최적화된 전문 선생님/),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "전화상담하기" })).toHaveAttribute(
      "href",
      "tel:010-3421-4383",
    );
    expect(screen.getByRole("link", { name: "카카오톡 상담" })).toHaveAttribute(
      "href",
      "https://pf.kakao.com/_auFFn/chat",
    );
    expect(screen.getByRole("link", { name: "네이버 예약" })).toHaveAttribute(
      "href",
      "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
    );
    expect(container.querySelector('[data-testid="consult-actions"]')).toBeInTheDocument();
    expect(container.querySelector('[data-testid="hero-character-backdrop"]')).toHaveClass(
      "rounded-full",
      "bg-brand-soft",
    );
    expect(container.querySelector("section")).toHaveClass(
      "bg-surface-container-low",
      "px-5",
      "pt-12",
      "pb-8",
    );
    expect(container.querySelector(".blur-3xl")).not.toBeInTheDocument();
    const characterImage = container.querySelector('img[alt=""]');
    expect(characterImage).toHaveClass("h-full", "w-full", "object-cover", "object-top");
  });
});
```

- [ ] **Step 2: Run the hero test and verify it fails**

Run:

```bash
yarn vitest run src/app/components/section/HeroSectionClient.test.tsx
```

Expected: FAIL because the hero does not render the shared Kakao CTA and the backdrop does not use `bg-brand-soft`.

- [ ] **Step 3: Update the home hero**

Replace `src/app/components/section/HeroSectionClient.tsx` with:

```tsx
"use client";

import Image from "next/image";
import ConsultActions from "@/app/components/ui/ConsultActions";
import selenaMagic from "@/images/2021selena_magic.png";

export default function HeroSectionClient() {
  return (
    <section className="relative isolate overflow-hidden bg-surface-container-low px-5 pb-8 pt-12 sm:px-8 sm:py-10 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-8 right-0 hidden w-[38vw] rounded-l-[4rem] bg-brand-soft/50 lg:block"
      />
      <div className="relative mx-auto grid min-h-[420px] max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:px-8">
        <div className="relative z-10 max-w-[720px]">
          <h1 className="break-keep text-[1.7rem] font-extrabold leading-[1.14] text-gray-950 sm:text-[2.25rem] lg:text-[2.35rem]">
            영어를 잘 할 수밖에 없는 학습 시스템
          </h1>
          <p className="mt-6 max-w-3xl whitespace-pre-line break-keep text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {`학생중심 1:1 맞춤 수업에 최적화된 전문 선생님이 매일 확인하고
AI 셀레나 말하기 루틴으로 반복의 힘을 만듭니다.`}
          </p>
          <ConsultActions align="start" className="mt-8" />
        </div>
        <div
          className="relative z-10 ml-auto h-[260px] w-[74%] max-w-[260px] overflow-hidden lg:h-[356px] lg:w-full lg:max-w-[340px]"
          aria-hidden="true"
        >
          <div
            data-testid="hero-character-backdrop"
            className="absolute right-[6%] top-[45%] h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-brand-soft/65 sm:h-[240px] sm:w-[240px] lg:h-[300px] lg:w-[300px]"
          />
          <Image
            src={selenaMagic}
            alt=""
            width={977}
            height={2762}
            className="relative h-full w-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Update the conversion CTA section**

Replace `src/app/components/section/CTASection.tsx` with:

```tsx
"use client";

import { motion } from "motion/react";
import ConsultActions from "@/app/components/ui/ConsultActions";
import { siteConfig } from "@/config/site";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-brand px-5 py-24 sm:bg-[linear-gradient(135deg,var(--brand-deep)_0%,var(--brand)_58%,#f973b4_100%)]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div>
          <h2 className="mb-6 break-keep text-[1.75rem] font-extrabold leading-tight text-white sm:text-4xl">
            매일 달라지는 아이의 영어실력을 확인해보세요!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg font-bold text-white sm:text-xl">
            {siteConfig.phone}
          </p>
          <ConsultActions className="[&_.brand-focus-ring:focus-visible]:shadow-[0_0_0_4px_rgba(255,255,255,0.34)]" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
```

- [ ] **Step 5: Run the relevant tests and verify they pass**

Run:

```bash
yarn vitest run src/app/components/section/HeroSectionClient.test.tsx src/app/components/ui/ConsultActions.test.tsx
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/app/components/section/HeroSectionClient.tsx src/app/components/section/HeroSectionClient.test.tsx src/app/components/section/CTASection.tsx
git commit -m "feat: align hero and CTA actions with design system"
```

---

### Task 4: Contact and Local Topic CTAs

**Files:**
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/components/topics/LocalTopicPage.tsx`
- Modify: `src/app/components/topics/LocalTopicPage.test.tsx`

- [ ] **Step 1: Update the local topic test for canonical CTA labels**

In `src/app/components/topics/LocalTopicPage.test.tsx`, replace the CTA assertions near the end of the test with this exact block:

```tsx
    expectLinkWithHref("전화상담하기", "tel:010-3421-4383");
    expectLinkWithHref("카카오톡 상담", "https://pf.kakao.com/_auFFn/chat");
    expectLinkWithHref(
      "네이버 예약",
      "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
    );
    expectLinkWithHref("네이버 지도", /map\.naver\.com/);
    expect(
      screen.getByRole("heading", {
        name: "매일 달라지는 아이의 영어실력을 확인해보세요!",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("010-3421-4383")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "전화상담하기" })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: "카카오톡 상담" })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: "네이버 예약" })).toHaveLength(2);
```

- [ ] **Step 2: Run the local topic test and verify it fails**

Run:

```bash
yarn vitest run src/app/components/topics/LocalTopicPage.test.tsx
```

Expected: FAIL because the local topic page still renders `카카오 상담` instead of `카카오톡 상담`, and it does not use the shared CTA group.

- [ ] **Step 3: Update `LocalTopicPage` to use shared CTAs**

In `src/app/components/topics/LocalTopicPage.tsx`, add this import:

```tsx
import ConsultActions from "@/app/components/ui/ConsultActions";
```

Then replace the entire `PageHero` children block:

```tsx
      <PageHero
        eyebrow="LOCAL GUIDE"
        title={topic.heroTitle}
        description={topic.heroDescription}
      >
        <ConsultActions includeMap align="start" />
      </PageHero>
```

Also replace these class names:

```tsx
className="rounded-2xl border border-pink-100 bg-white p-7 shadow-sm shadow-pink-900/5"
```

with:

```tsx
className="rounded-2xl border border-border-warm bg-white p-7 shadow-sm shadow-pink-900/5"
```

Replace:

```tsx
className="rounded-2xl border border-sky-100 bg-white p-7"
```

with:

```tsx
className="rounded-2xl border border-border-warm bg-white p-7"
```

Replace:

```tsx
className="text-sm font-bold text-sky-600"
```

with:

```tsx
className="text-sm font-bold text-pink-600"
```

Replace:

```tsx
className="rounded-xl border border-sky-100 px-4 py-3 text-sm font-bold text-gray-700"
```

with:

```tsx
className="brand-secondary-action brand-focus-ring justify-start px-4 py-3 text-sm"
```

- [ ] **Step 4: Update contact page hero CTAs and fact-card borders**

In `src/app/contact/page.tsx`, remove these imports:

```tsx
import KakaoConsultButton from "@/app/components/ui/KakaoConsultButton";
import NaverBookingButton from "@/app/components/ui/NaverBookingButton";
```

Add this import:

```tsx
import ConsultActions from "@/app/components/ui/ConsultActions";
```

Replace the `PageHero` children with:

```tsx
        <ConsultActions align="start" />
```

Replace contact fact card class:

```tsx
className="rounded-xl border border-gray-100 p-5"
```

with:

```tsx
className="rounded-xl border border-border-warm bg-white p-5 shadow-sm shadow-pink-900/5"
```

- [ ] **Step 5: Run the relevant tests and verify they pass**

Run:

```bash
yarn vitest run src/app/components/topics/LocalTopicPage.test.tsx src/app/components/ui/ConsultActions.test.tsx
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/app/contact/page.tsx src/app/components/topics/LocalTopicPage.tsx src/app/components/topics/LocalTopicPage.test.tsx
git commit -m "feat: standardize consultation actions on local pages"
```

---

### Task 5: Program Cards and Site Data Ownership

**Files:**
- Modify: `src/app/components/ui/ProgramCard.tsx`
- Modify: `src/config/site.ts`

- [ ] **Step 1: Run the existing program-related tests as a baseline**

Run:

```bash
yarn vitest run src/config/site.test.ts src/app/topics/[slug]/page.test.ts
```

Expected: PASS before code changes.

- [ ] **Step 2: Update the program card component**

Replace `src/app/components/ui/ProgramCard.tsx` with:

```tsx
"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { motion } from "motion/react";

const ProgramCard = ({
  program,
}: {
  program: {
    title: string;
    age: string;
    description: string;
    features: string[];
    href: string;
  };
}) => {
  return (
    <motion.div whileHover={{ y: -6 }}>
      <Card className="warm-card-surface relative h-full overflow-hidden rounded-2xl">
        <CardBody className="relative flex min-h-[280px] flex-col bg-[linear-gradient(0deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:100%_32px] p-7 pl-9 before:absolute before:inset-y-0 before:left-5 before:w-px before:bg-pink-200/80">
          <div className="mb-5 flex min-h-20 flex-col items-start justify-between gap-3">
            <h3 className="break-keep text-2xl font-extrabold leading-tight text-gray-950">
              {program.title}
            </h3>
            <Chip
              size="sm"
              variant="flat"
              className="border border-pink-200 bg-pink-50 text-pink-700"
            >
              {program.age}
            </Chip>
          </div>
          <p className="mb-7 break-keep text-base leading-7 text-gray-600">
            {program.description}
          </p>
          <div className="mt-auto space-y-3">
            {program.features.map((feature) => (
              <div key={feature} className="flex items-center">
                <span className="mr-3 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-pink-50 text-sm font-extrabold text-pink-600">
                  ✓
                </span>
                <span className="break-keep font-bold text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <a
            href={program.href}
            className="brand-primary-action brand-focus-ring mt-7 min-h-11 px-4 text-sm"
          >
            상세 보기
          </a>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ProgramCard;
```

- [ ] **Step 3: Remove color styling from program data**

In `src/config/site.ts`, remove the `color` property from each object in `programSummaries`.

Remove this line from the Hey! Hazel object:

```ts
    color: "bg-white/85 border-pink-200 shadow-pink-900/5",
```

Remove this line from the 300만 문장 만들기 object:

```ts
    color: "bg-white/85 border-sky-200 shadow-sky-900/5",
```

Remove this line from the PREP31 object:

```ts
    color: "bg-white/85 border-violet-200 shadow-violet-900/5",
```

- [ ] **Step 4: Run tests and typecheck through build**

Run:

```bash
yarn vitest run src/config/site.test.ts src/app/topics/[slug]/page.test.ts
yarn build
```

Expected: both commands PASS. The build must not report a TypeScript error about `program.color`.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/ui/ProgramCard.tsx src/config/site.ts
git commit -m "style: make program cards own their design styling"
```

---

### Task 6: Blog Fallback and Feature Section Rhythm

**Files:**
- Modify: `src/app/components/blog/BlogCard.tsx`
- Modify: `src/app/components/blog/BlogCard.test.tsx`
- Modify: `src/app/components/section/FeatureSection.tsx`

- [ ] **Step 1: Expand the blog card test**

Replace `src/app/components/blog/BlogCard.test.tsx` with:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { BlogPost } from "@/lib/blog/rss";
import BlogCard from "./BlogCard";

const post: BlogPost = {
  title: "아이린 영어 학습 이야기",
  link: "https://example.com/blog/post",
  pubDate: "2026-06-05T00:00:00.000Z",
  summary: "초등 영어 루틴을 소개합니다.",
  tags: ["초등영어", "파닉스"],
};

describe("BlogCard", () => {
  it("labels the external blog link as 자세히 보기", () => {
    render(<BlogCard post={post} />);

    expect(screen.getByRole("link", { name: "자세히 보기" })).toHaveAttribute(
      "href",
      post.link,
    );
  });

  it("uses the Irene English fallback when no thumbnail is provided", () => {
    const { container } = render(<BlogCard post={post} />);

    expect(screen.getByText("Irene English Note")).toBeInTheDocument();
    expect(screen.getByText("아이린 석성 학습 이야기")).toBeInTheDocument();
    expect(container.querySelector(".rounded-full")).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the blog test and verify it fails**

Run:

```bash
yarn vitest run src/app/components/blog/BlogCard.test.tsx
```

Expected: FAIL because `BlogImageFallback` currently renders decorative rounded-full circles.

- [ ] **Step 3: Replace the blog image fallback**

In `src/app/components/blog/BlogCard.tsx`, replace `BlogImageFallback` with:

```tsx
function BlogImageFallback() {
  return (
    <div className="absolute inset-0 flex items-end overflow-hidden bg-surface-cream px-6 pb-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(233,67,145,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:42px_100%,100%_32px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-6 top-0 h-full w-px bg-pink-200/70"
      />
      <div className="relative">
        <p className="text-xs font-bold uppercase text-pink-600">
          Irene English Note
        </p>
        <p className="mt-2 max-w-48 break-keep text-lg font-extrabold leading-snug text-gray-950">
          아이린 석성 학습 이야기
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Remove the decorative blur blob from FeatureSection**

In `src/app/components/section/FeatureSection.tsx`, remove this entire block:

```tsx
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-20 z-0 hidden h-64 w-64 -translate-x-1/3 rounded-full bg-violet-100 blur-3xl sm:block"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
```

Keep the `motion` import because the section still uses `motion.div`.

- [ ] **Step 5: Run the test and lint**

Run:

```bash
yarn vitest run src/app/components/blog/BlogCard.test.tsx
yarn lint
```

Expected: both commands PASS.

- [ ] **Step 6: Commit**

```bash
git add src/app/components/blog/BlogCard.tsx src/app/components/blog/BlogCard.test.tsx src/app/components/section/FeatureSection.tsx
git commit -m "style: refine editorial fallback and feature rhythm"
```

---

### Task 7: End-to-End CTA and Design Smoke Coverage

**Files:**
- Modify: `e2e/renewal-smoke.spec.ts`

- [ ] **Step 1: Replace the Playwright smoke test**

Replace `e2e/renewal-smoke.spec.ts` with:

```ts
import { expect, test } from "@playwright/test";

test("home exposes primary design-system consultation actions", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "영어를 잘 할 수밖에 없는 학습 시스템",
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "전화상담하기" }).first()).toHaveAttribute(
    "href",
    "tel:010-3421-4383",
  );
  await expect(page.getByRole("link", { name: "카카오톡 상담" }).first()).toHaveAttribute(
    "href",
    "https://pf.kakao.com/_auFFn/chat",
  );
  await expect(page.getByRole("link", { name: "네이버 예약" }).first()).toHaveAttribute(
    "href",
    "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
  );
  await expect(page.getByRole("link", { name: "오시는 길" }).first()).toBeVisible();
});

test("blog and contact pages render key local-service actions", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.getByRole("heading", { name: /학원 소식|블로그/ })).toBeVisible();
  await expect(page.getByRole("link", { name: "네이버 블로그 열기" })).toBeVisible();

  await page.goto("/contact");
  await expect(
    page.getByRole("heading", { name: "상담과 방문 안내", level: 1 }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "전화상담하기" }).first()).toHaveAttribute(
    "href",
    "tel:010-3421-4383",
  );
  await expect(page.getByRole("link", { name: "카카오톡 상담" }).first()).toHaveAttribute(
    "href",
    "https://pf.kakao.com/_auFFn/chat",
  );
  await expect(page.getByRole("link", { name: "네이버 예약" }).first()).toHaveAttribute(
    "href",
    "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
  );
  await expect(page.getByRole("link", { name: /네이버 지도/ }).first()).toBeVisible();
});
```

- [ ] **Step 2: Run the full verification suite**

Run:

```bash
yarn test
yarn lint
yarn build
yarn e2e
```

Expected: all commands PASS. If `yarn e2e` fails because browsers are not installed, run `yarn playwright install chromium` once and rerun `yarn e2e`.

- [ ] **Step 3: Manual visual audit**

Start the dev server:

```bash
yarn dev
```

Open these routes and inspect desktop width around 1440px and mobile width around 390px:

```text
http://localhost:3000/
http://localhost:3000/contact
http://localhost:3000/programs
http://localhost:3000/topics/suksung-elementary-english
http://localhost:3000/blog
```

Expected visual result:

- Header remains fixed at 80px with translucent white surface and strong logo presence.
- Korean hero and card text uses Noto Sans KR, wraps cleanly, and does not overlap.
- Electric Pink is the only primary accent; Kakao yellow and Naver green appear only on their branded actions.
- Buttons are at least 44px tall, have visible focus states, and use direct action labels.
- Page sections alternate white, `surface-page`, and `surface-cream` without nested page-section cards.
- Program and blog cards use warm borders, paper surfaces, and soft shadows.
- There are no decorative blur or orb elements competing with content.

- [ ] **Step 4: Commit**

```bash
git add e2e/renewal-smoke.spec.ts
git commit -m "test: cover design-system consultation flows"
```

---

## Self-Review

**Spec coverage:** Covered global tokens, Noto Sans KR, Electric Pink accent discipline, warm surfaces, button sizing and focus, canonical Korean CTA labels, Header-preserving layout rhythm, home hero, CTA band, program cards, blog cards, local SEO pages, location action, motion restraint, and StyleSeed visual/verbal checks.

**Placeholder scan:** This plan contains no unresolved placeholder markers, no "similar to" implementation instructions, and no code steps that rely on unnamed functions or undefined types.

**Type consistency:** `ConsultActions` is defined in Task 2 and imported by exact name in Tasks 3 and 4. The `program.color` field is removed from both the `ProgramCard` prop type and `programSummaries` data in Task 5. CTA labels are consistently `전화상담하기`, `카카오톡 상담`, `네이버 예약`, and `네이버 지도`.
