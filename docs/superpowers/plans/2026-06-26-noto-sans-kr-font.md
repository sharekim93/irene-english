# Noto Sans KR Font Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Change the whole Next.js site from Pretendard to Noto Sans KR while preserving the existing Tailwind v4 font-token pattern and Korean typography behavior.

**Architecture:** Keep the current global CSS-driven font architecture. Replace the Pretendard import, CSS custom properties, Tailwind theme font token, and root body class with Noto Sans KR equivalents, then update the existing font regression test so future changes cannot accidentally reintroduce Pretendard.

**Tech Stack:** Next.js 15 App Router, React 19, Tailwind CSS v4, Vitest, Playwright.

---

## File Structure

- Modify: `src/app/globals.css`
  - Owns the external font import, global CSS font variable, Tailwind `@theme` font token, and direct CSS `font-family` references used by custom buttons.
- Modify: `src/app/layout.tsx`
  - Applies the global font utility to `<body>`.
- Modify: `src/app/font.test.ts`
  - Keeps the font migration covered with a fast Vitest file-content regression test.
- No direct component edits are expected.
  - Current component font usage is weight-only Tailwind classes such as `font-bold` and `font-extrabold`.
  - Existing direct font-family references are centralized in `src/app/globals.css`.

## Current Font References

The migration should replace these active source references:

```txt
src/app/globals.css:1   Pretendard CDN import
src/app/globals.css:21  --app-font-pretendard
src/app/globals.css:39  --font-pretendard
src/app/globals.css:45  body font-family
src/app/globals.css:46  @apply font-pretendard
src/app/globals.css:159 .kakao-consult-button font-family
src/app/globals.css:205 .consult-cta-button font-family
src/app/globals.css:242 .mobile-touch-contact font-family
src/app/layout.tsx:49   body className="font-pretendard"
src/app/font.test.ts    Pretendard assertions
```

## Implementation Tasks

### Task 1: Update The Font Regression Test First

**Files:**
- Modify: `src/app/font.test.ts`

- [ ] **Step 1: Replace the test content with Noto Sans KR expectations**

Use this exact file content:

```ts
import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

const root = process.cwd();

function readProjectFile(path: string) {
  return readFileSync(join(root, path), "utf8");
}

describe("site font configuration", () => {
  it("uses Noto Sans KR globally without legacy font aliases or 900 weights", () => {
    const layout = readProjectFile("src/app/layout.tsx");
    const globals = readProjectFile("src/app/globals.css");
    const sourceFiles = [
      "src/app/layout.tsx",
      "src/app/globals.css",
      "src/app/components/layout/Header.tsx",
      "src/app/components/layout/PageHero.tsx",
      "src/app/components/section/HeroSectionClient.tsx",
      "src/app/components/section/CTASection.tsx",
      "src/app/components/section/FeatureSection.tsx",
      "src/app/components/section/ProgramSection.tsx",
      "src/app/components/section/Location.tsx",
      "src/app/contact/page.tsx",
    ]
      .map(readProjectFile)
      .join("\n");
    const legacyFont = ["na" + "num", "squ" + "are"].join("-");

    expect(layout).toContain("font-noto-sans-kr");
    expect(layout).not.toContain("font-pretendard");
    expect(globals).toContain(
      "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap",
    );
    expect(globals).toContain("--app-font-noto-sans-kr");
    expect(globals).toContain('"Noto Sans KR"');
    expect(globals).toContain(
      "--font-noto-sans-kr: var(--app-font-noto-sans-kr)",
    );
    expect(globals).toContain("@apply font-noto-sans-kr");
    expect(sourceFiles).not.toContain("Pretendard");
    expect(sourceFiles).not.toContain("pretendard");
    expect(sourceFiles.toLowerCase()).not.toContain(legacyFont);
    expect(sourceFiles).not.toContain("font-weight: " + "900");
    expect(sourceFiles).not.toContain("font-" + "black");
  });
});
```

- [ ] **Step 2: Run the focused test and verify it fails before implementation**

Run:

```bash
yarn vitest run src/app/font.test.ts
```

Expected result:

```txt
FAIL src/app/font.test.ts
AssertionError: expected ... to contain 'font-noto-sans-kr'
```

- [ ] **Step 3: Commit the failing test**

Run:

```bash
git add src/app/font.test.ts
git commit -m "test: expect noto sans kr global font"
```

Expected result:

```txt
[branch <sha>] test: expect noto sans kr global font
```

### Task 2: Replace The Global Font Token In CSS

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the font import and font variables**

Change the top of `src/app/globals.css` from:

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css");
@import "tailwindcss";
@plugin './hero.ts';
```

to:

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap");
@import "tailwindcss";
@plugin './hero.ts';
```

Change the root font variable from:

```css
  --app-font-pretendard: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, sans-serif;
```

to:

```css
  --app-font-noto-sans-kr: "Noto Sans KR", -apple-system, BlinkMacSystemFont,
    system-ui, sans-serif;
```

Change the Tailwind theme token from:

```css
  --font-pretendard: var(--app-font-pretendard);
```

to:

```css
  --font-noto-sans-kr: var(--app-font-noto-sans-kr);
```

- [ ] **Step 2: Replace all global CSS font-family references**

Change the body rule from:

```css
body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--app-font-pretendard);
  @apply font-pretendard;
}
```

to:

```css
body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--app-font-noto-sans-kr);
  @apply font-noto-sans-kr;
}
```

Replace every remaining custom CSS font-family reference:

```css
font-family: var(--app-font-pretendard);
```

with:

```css
font-family: var(--app-font-noto-sans-kr);
```

Expected remaining matches:

```bash
rg -n "Pretendard|pretendard|app-font-pretendard|font-pretendard" src/app/globals.css
```

Expected result:

```txt
no matches
```

- [ ] **Step 3: Run the focused test and verify CSS still needs layout update**

Run:

```bash
yarn vitest run src/app/font.test.ts
```

Expected result:

```txt
FAIL src/app/font.test.ts
AssertionError: expected ... to contain 'font-noto-sans-kr'
```

The remaining failure should come from `src/app/layout.tsx`.

### Task 3: Apply The Noto Sans KR Utility At The App Root

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update the body class**

Change:

```tsx
<body className="font-pretendard">
```

to:

```tsx
<body className="font-noto-sans-kr">
```

- [ ] **Step 2: Run the focused font test**

Run:

```bash
yarn vitest run src/app/font.test.ts
```

Expected result:

```txt
PASS src/app/font.test.ts
```

- [ ] **Step 3: Search for active source leftovers**

Run:

```bash
rg -n "Pretendard|pretendard|font-pretendard|app-font-pretendard" src
```

Expected result:

```txt
no matches
```

- [ ] **Step 4: Commit the implementation**

Run:

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "style: use noto sans kr globally"
```

Expected result:

```txt
[branch <sha>] style: use noto sans kr globally
```

### Task 4: Run Full Automated Verification

**Files:**
- No file changes expected.

- [ ] **Step 1: Run the lint suite**

Run:

```bash
yarn lint
```

Expected result:

```txt
No lint errors.
```

- [ ] **Step 2: Run all unit tests**

Run:

```bash
yarn test
```

Expected result:

```txt
Test Files  ... passed
Tests       ... passed
```

- [ ] **Step 3: Run the production build**

Run:

```bash
yarn build
```

Expected result:

```txt
Compiled successfully
```

Note: this build may require network access because the app CSS imports Google Fonts at runtime/build processing time. If the sandbox blocks the request, rerun only after approval for network access or verify locally outside the restricted sandbox.

### Task 5: Browser Visual Check

**Files:**
- No source file changes expected unless the visual check reveals overflow caused by the wider or heavier Noto Sans KR metrics.

- [ ] **Step 1: Start the dev server**

Run:

```bash
yarn dev
```

Expected result:

```txt
Local:        http://localhost:3000
```

If port `3000` is occupied, use the printed alternative port.

- [ ] **Step 2: Verify the home page computed font**

Open the home page and check the body computed style:

```js
getComputedStyle(document.body).fontFamily
```

Expected result includes:

```txt
Noto Sans KR
```

- [ ] **Step 3: Smoke-check pages with dense Korean text**

Visit these pages at desktop and mobile widths:

```txt
/
/about
/programs
/contact
/blog
```

Expected result:

```txt
No clipped buttons.
No hero title overlap.
No header nav wrapping into incoherent rows.
No CTA text overflow.
```

- [ ] **Step 4: Run Playwright smoke tests if the dev server is stable**

Run in a separate terminal while the dev server is active:

```bash
yarn e2e
```

Expected result:

```txt
2 passed
```

### Task 6: Final Cleanup

**Files:**
- Modify only if needed: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/font.test.ts`

- [ ] **Step 1: Check the working tree**

Run:

```bash
git status --short
```

Expected result includes only intended changes before the final commit, or a clean tree after commits:

```txt
M  src/app/font.test.ts
M  src/app/globals.css
M  src/app/layout.tsx
```

- [ ] **Step 2: If visual overflow appears, reduce weight at the specific component**

Only apply this if Task 5 finds text overflow from `font-extrabold`. Prefer the smallest local change. Example for a heading that overflows:

```tsx
<h1 className="break-keep text-[1.7rem] font-bold leading-[1.14] text-gray-950 sm:text-[2.25rem] lg:text-[2.35rem]">
```

Then add the exact component to `src/app/font.test.ts` sourceFiles if it is not already listed, and rerun:

```bash
yarn vitest run src/app/font.test.ts
```

Expected result:

```txt
PASS src/app/font.test.ts
```

- [ ] **Step 3: Final verification command**

Run:

```bash
yarn check
```

Expected result:

```txt
yarn lint && yarn test && yarn build
```

All three phases should pass.

## Self-Review

- Spec coverage: The request is to change the project-wide font to Noto Sans KR. Tasks 1-3 update the global font test, global CSS token, Tailwind utility, and root layout class. Task 5 verifies actual browser rendering.
- Placeholder scan: No implementation step depends on unspecified code. Optional overflow remediation includes a concrete example and is gated by visual evidence.
- Type consistency: The plan consistently uses `--app-font-noto-sans-kr`, `--font-noto-sans-kr`, and `font-noto-sans-kr`.

Plan complete and saved to `docs/superpowers/plans/2026-06-26-noto-sans-kr-font.md`.

Two execution options:

1. **Subagent-Driven (recommended)** - Dispatch a fresh subagent per task, review between tasks, fast iteration.
2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints.
