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
