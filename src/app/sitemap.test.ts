import { describe, expect, it } from "vitest";
import { navItems, programSummaries, siteConfig, topicPages } from "../config/site";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("includes the home page and configured navigation, program, and topic routes", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    const expectedPaths = [
      "/",
      ...navItems.map((item) => item.href),
      ...programSummaries.map((program) => program.href),
      ...topicPages.map((topic) => `/topics/${topic.slug}`),
    ];

    expect(urls).toHaveLength(new Set(expectedPaths).size);
    expect(urls).toEqual(expect.arrayContaining([siteConfig.domain]));

    for (const path of expectedPaths) {
      const expectedUrl = `${siteConfig.domain}${path === "/" ? "" : path}`;
      expect(urls).toContain(expectedUrl);
    }
  });

  it("includes dedicated local SEO topic pages", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        `${siteConfig.domain}/topics/suksung-elementary-english`,
        `${siteConfig.domain}/topics/dongbaek-station-english`,
      ]),
    );
  });
});
