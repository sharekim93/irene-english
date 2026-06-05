import type { MetadataRoute } from "next";
import { navItems, programSummaries, siteConfig, topicPages } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    ...navItems.map((item) => item.href),
    ...programSummaries.map((program) => program.href),
    ...topicPages.map((topic) => `/topics/${topic.slug}`),
  ];

  return [...new Set(staticPaths)].map((path) => ({
    url: `${siteConfig.domain}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/blog" ? "daily" : "weekly",
    priority: path === "/" ? 1 : path.startsWith("/topics") ? 0.6 : 0.8,
  }));
}
