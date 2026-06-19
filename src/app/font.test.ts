import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

const root = process.cwd();

function readProjectFile(path: string) {
  return readFileSync(join(root, path), "utf8");
}

describe("site font configuration", () => {
  it("uses Pretendard globally without legacy font aliases or 900 weights", () => {
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

    expect(layout).toContain("font-pretendard");
    expect(globals).toContain("pretendardvariable-dynamic-subset.css");
    expect(globals).toContain("--app-font-pretendard");
    expect(globals).toContain('"Pretendard Variable", Pretendard');
    expect(globals).toContain("--font-pretendard: var(--app-font-pretendard)");
    expect(globals).toContain("@apply font-pretendard");
    expect(sourceFiles.toLowerCase()).not.toContain(legacyFont);
    expect(sourceFiles).not.toContain("font-weight: " + "900");
    expect(sourceFiles).not.toContain("font-" + "black");
  });
});
