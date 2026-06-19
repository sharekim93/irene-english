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
