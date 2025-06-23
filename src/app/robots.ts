import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
      {
        userAgent: "Yeti",
        allow: "/",
      },
    ],
    sitemap: "https://irene-english.com/sitemap.xml",
  };
}
