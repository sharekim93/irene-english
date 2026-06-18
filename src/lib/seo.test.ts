import { describe, expect, it } from "vitest";
import { faqItems, navItems, siteConfig } from "../config/site";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  navigationJsonLd,
  organizationJsonLd,
} from "./seo";

describe("seo JSON-LD helpers", () => {
  it("builds organization JSON-LD with required local business fields", () => {
    const jsonLd = organizationJsonLd();

    expect(jsonLd).toMatchObject({
      "@context": "https://schema.org",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.domain,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "경기도",
        addressLocality: "용인시 기흥구",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.coordinates.latitude,
        longitude: siteConfig.coordinates.longitude,
      },
      openingHours: siteConfig.openingHoursSchema,
      sameAs: [
        siteConfig.blogUrl,
        siteConfig.placeUrl,
        siteConfig.kakaoChannelUrl,
        siteConfig.instagramUrl,
        siteConfig.youtubeUrl,
      ],
    });
    expect(jsonLd["@type"]).toEqual(
      expect.arrayContaining(["EducationalOrganization", "LocalBusiness"]),
    );
    expect(jsonLd.address.streetAddress).toContain("동백2로 9");
    expect(jsonLd.openingHoursSpecification).toEqual([
      expect.objectContaining({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:00",
        closes: "18:00",
      }),
    ]);
  });

  it("builds FAQ JSON-LD from configured questions and answers", () => {
    const jsonLd = faqJsonLd();

    expect(jsonLd).toMatchObject({
      "@context": "https://schema.org",
      "@type": "FAQPage",
    });
    expect(jsonLd.mainEntity).toHaveLength(faqItems.length);
    expect(jsonLd.mainEntity).toEqual(
      faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    );
  });

  it("builds breadcrumb JSON-LD with absolute URLs", () => {
    const jsonLd = breadcrumbJsonLd([
      { name: "홈", href: "/" },
      { name: "프로그램", href: "/programs" },
      { name: "외부", href: "https://example.com/page" },
    ]);

    expect(jsonLd).toMatchObject({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
    });
    expect(jsonLd.itemListElement).toEqual([
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: `${siteConfig.domain}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "프로그램",
        item: `${siteConfig.domain}/programs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "외부",
        item: "https://example.com/page",
      },
    ]);
  });

  it("builds navigation JSON-LD with configured routes", () => {
    const jsonLd = navigationJsonLd();

    expect(jsonLd).toMatchObject({
      "@context": "https://schema.org",
      "@type": "ItemList",
    });
    expect(jsonLd.itemListElement).toHaveLength(navItems.length);
    expect(jsonLd.itemListElement).toEqual(
      navItems.map((item, index) => ({
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: item.name,
        url: `${siteConfig.domain}${item.href}`,
      })),
    );
  });
});
