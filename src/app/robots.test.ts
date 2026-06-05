import { describe, expect, it } from "vitest";
import { siteConfig } from "../config/site";
import robots from "./robots";

describe("robots", () => {
  it("points crawlers to the generated sitemap", () => {
    expect(robots().sitemap).toBe(`${siteConfig.domain}/sitemap.xml`);
  });
});
