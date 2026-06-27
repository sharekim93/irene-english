# Footer Hero Background Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Change the site footer from the current dark treatment to the same warm surface tone used by the home hero, while preserving readable contrast and footer navigation behavior.

**Architecture:** Keep the existing `Footer` component and data sources. Add a focused component test that locks the footer landmark to `bg-surface-container-low`, verifies the old dark treatment is gone, and confirms the phone link remains intact. Update only footer presentation classes so the change stays visual and low-risk.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, Vitest, Testing Library.

---

## Scope Check

This is one focused UI styling change. It does not change footer content, navigation data, SEO, external channel URLs, or layout structure.

## File Structure

- Create `src/app/components/layout/Footer.test.tsx`: tests the footer landmark background, text treatment, and phone link.
- Modify `src/app/components/layout/Footer.tsx`: swaps the dark footer surface for `bg-surface-container-low`, updates text/link/border classes for light-surface contrast, and keeps all existing content/data intact.

---

### Task 1: Footer Hero-Surface Styling

**Files:**
- Create: `src/app/components/layout/Footer.test.tsx`
- Modify: `src/app/components/layout/Footer.tsx`

- [ ] **Step 1: Write the failing footer style test**

Create `src/app/components/layout/Footer.test.tsx` with:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Footer from "./Footer";

describe("Footer", () => {
  it("uses the same warm surface family as the home hero", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");

    expect(footer).toHaveClass(
      "bg-surface-container-low",
      "text-gray-700",
      "border-border-warm",
    );
    expect(footer).not.toHaveClass("bg-gray-900", "text-white");
  });

  it("keeps the phone consultation link available", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "전화 010-3421-4383" })).toHaveAttribute(
      "href",
      "tel:010-3421-4383",
    );
  });
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run:

```bash
PATH=/Users/sksya/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH yarn vitest run src/app/components/layout/Footer.test.tsx
```

Expected: FAIL because `Footer` still uses `bg-gray-900 text-white` and does not include `bg-surface-container-low`, `text-gray-700`, or `border-border-warm`.

- [ ] **Step 3: Update the footer classes**

In `src/app/components/layout/Footer.tsx`, change:

```tsx
<footer className="bg-gray-900 text-white py-12">
```

to:

```tsx
<footer className="border-t border-border-warm bg-surface-container-low py-12 text-gray-700">
```

Change the brand heading:

```tsx
<h3 className="text-xl  mb-4">{siteConfig.name}</h3>
```

to:

```tsx
<h3 className="mb-4 text-xl font-extrabold text-gray-950">{siteConfig.name}</h3>
```

Change the first footer list:

```tsx
<ul className="mt-5 space-y-2 text-sm leading-6 text-gray-400">
```

to:

```tsx
<ul className="mt-5 space-y-2 text-sm leading-6 text-gray-600">
```

Change the phone link:

```tsx
<a href={siteConfig.telHref} className="hover:text-white">
```

to:

```tsx
<a href={siteConfig.telHref} className="font-bold text-gray-700 transition hover:text-pink-600">
```

Change both footer section headings:

```tsx
<h4 className="font-semibold mb-4">프로그램</h4>
<h4 className="font-semibold mb-4">학원정보</h4>
```

to:

```tsx
<h4 className="mb-4 font-extrabold text-gray-950">프로그램</h4>
<h4 className="mb-4 font-extrabold text-gray-950">학원정보</h4>
```

Change both internal navigation lists:

```tsx
<ul className="space-y-2 text-gray-400">
```

to:

```tsx
<ul className="space-y-2 text-gray-600">
```

Change both internal navigation links:

```tsx
<a href={program.href} className="hover:text-white">
<a href={item.href} className="hover:text-white">
```

to:

```tsx
<a href={program.href} className="transition hover:text-pink-600">
<a href={item.href} className="transition hover:text-pink-600">
```

Change the quick-links heading:

```tsx
<h4 className="font-semibold mb-4 font-gothic">바로가기</h4>
```

to:

```tsx
<h4 className="mb-4 font-gothic font-extrabold text-gray-950">바로가기</h4>
```

Change the social link class:

```tsx
className="group flex items-center gap-3 text-sm font-semibold text-gray-400 transition hover:text-white"
```

to:

```tsx
className="group flex items-center gap-3 text-sm font-bold text-gray-600 transition hover:text-pink-600"
```

Change the copyright divider:

```tsx
<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-gothic">
```

to:

```tsx
<div className="mt-8 border-t border-border-warm pt-8 text-center font-gothic text-gray-500">
```

- [ ] **Step 4: Run the focused test and lint**

Run:

```bash
PATH=/Users/sksya/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH yarn vitest run src/app/components/layout/Footer.test.tsx
PATH=/Users/sksya/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH yarn lint
```

Expected: both commands PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/layout/Footer.tsx src/app/components/layout/Footer.test.tsx docs/superpowers/plans/2026-06-27-footer-hero-background.md
git commit -m "style: align footer background with hero surface"
```

---

## Self-Review

**Spec coverage:** The plan changes the footer background to the hero surface token, updates foreground/link colors for contrast, preserves all footer content, and adds a focused test.

**Placeholder scan:** The plan contains no unresolved placeholder markers and no references to undefined functions or components.

**Type consistency:** The only new test imports `Footer` from `./Footer`; no new runtime types or props are introduced.
