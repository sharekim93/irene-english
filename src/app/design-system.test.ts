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
