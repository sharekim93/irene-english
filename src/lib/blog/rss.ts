import { siteConfig } from "../../config/site";

export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  summary: string;
  tags: string[];
  thumbnail?: string;
};

const fallbackPosts: BlogPost[] = [
  {
    title: "아이린 석성 학원 소식과 영어 학습 가이드",
    link: `${siteConfig.blogUrl}?fromRss=true&trackingCode=rss`,
    pubDate: "2026-06-05",
    summary:
      "삼성영어 셀레나 아이린 석성의 수업 소식, 파닉스와 초등 영어 루틴, 중등 대비 이야기를 블로그에서 확인해 보세요.",
    tags: ["학원소식", "초등영어", "동백영어"],
  },
  {
    title: "처음 영어를 시작하는 아이에게 필요한 루틴",
    link: `${siteConfig.blogUrl}?fromRss=true&trackingCode=rss`,
    pubDate: "2026-06-05",
    summary:
      "흥미, 소리, 짧은 말하기, 반복 피드백이 함께 있을 때 첫 영어가 오래 이어집니다.",
    tags: ["예비초", "파닉스", "HeyHazel"],
  },
  {
    title: "청크 학습으로 문장을 만드는 연습",
    link: `${siteConfig.blogUrl}?fromRss=true&trackingCode=rss`,
    pubDate: "2026-06-05",
    summary:
      "단어만 외우는 방식에서 벗어나 의미 덩어리로 문장을 이해하고 말하는 힘을 기릅니다.",
    tags: ["청크학습", "초등영어", "300만문장"],
  },
];

type ParseBlogRssOptions = {
  now?: Date;
};

type RssFetcher = (
  input: string,
  init: RequestInit & {
    next?: {
      revalidate: number;
    };
  },
) => Promise<Response>;

type GetBlogPostsOptions = ParseBlogRssOptions & {
  fetcher?: RssFetcher;
  fallback?: BlogPost[];
  rssUrl?: string;
};

export function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export function stripHtml(value: string) {
  return decodeXml(value)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readTag(item: string, tag: string) {
  const match = item.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"),
  );
  return match ? decodeXml(match[1]).trim() : "";
}

function readTagValues(item: string, tag: string) {
  return [
    ...item.matchAll(
      new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi"),
    ),
  ]
    .map((match) => stripHtml(match[1]))
    .filter(Boolean);
}

function splitHashtagValues(values: string[]) {
  const seen = new Set<string>();

  return values
    .flatMap((value) => value.split(/[,，#]/))
    .map((value) => value.trim())
    .filter((value) => {
      if (!value || seen.has(value)) {
        return false;
      }

      seen.add(value);
      return true;
    });
}

export function extractThumbnail(description: string, item = "") {
  const decoded = decodeXml(description);
  const itemThumbnail =
    item.match(/<media:thumbnail[^>]+url=["']([^"']+)["'][^>]*\/?>/i) ||
    item.match(
      /<enclosure[^>]+url=["']([^"']+)["'][^>]*type=["']image\/[^"']+["'][^>]*\/?>/i,
    ) ||
    item.match(
      /<enclosure[^>]+type=["']image\/[^"']+["'][^>]*url=["']([^"']+)["'][^>]*\/?>/i,
    );
  const match =
    decoded.match(/<img[^>]+src=["']([^"']+)["']/i) ||
    decoded.match(/https?:\/\/[^\s"']+\.(?:jpg|jpeg|png|webp|gif)/i);

  return itemThumbnail?.[1] ?? match?.[1] ?? match?.[0];
}

export function normalizeRssLink(link: string) {
  if (!link) {
    return `${siteConfig.blogUrl}?fromRss=true&trackingCode=rss`;
  }

  try {
    const url = new URL(link);
    url.searchParams.set("fromRss", "true");
    url.searchParams.set("trackingCode", "rss");
    return url.toString();
  } catch {
    return `${siteConfig.blogUrl}?fromRss=true&trackingCode=rss`;
  }
}

export function parseBlogRss(
  xml: string,
  { now = new Date() }: ParseBlogRssOptions = {},
): BlogPost[] {
  const itemMatches = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)];

  return itemMatches.map((match) => {
    const item = match[1];
    const description = readTag(item, "description");
    const categories = readTagValues(item, "category");
    const hashtags = splitHashtagValues(readTagValues(item, "tag"));

    const pubDate = readTag(item, "pubDate");
    const date = pubDate ? new Date(pubDate) : now;

    return {
      title: stripHtml(readTag(item, "title")),
      link: normalizeRssLink(readTag(item, "link")),
      pubDate: Number.isNaN(date.getTime())
        ? now.toISOString()
        : date.toISOString(),
      summary: stripHtml(description).slice(0, 140),
      tags: (hashtags.length > 0 ? hashtags : categories).slice(0, 12),
      thumbnail: extractThumbnail(description, item),
    };
  });
}

export async function getBlogPosts(
  limit = 20,
  {
    fetcher = fetch,
    fallback = fallbackPosts,
    now,
    rssUrl = siteConfig.blogRssUrl,
  }: GetBlogPostsOptions = {},
): Promise<BlogPost[]> {
  try {
    const response = await fetcher(rssUrl, {
      next: { revalidate: 1800 },
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!response.ok) {
      return fallback.slice(0, limit);
    }

    const xml = await response.text();
    const posts = parseBlogRss(xml, { now }).filter(
      (post) => post.title && post.link,
    );
    return (posts.length ? posts : fallback).slice(0, limit);
  } catch {
    return fallback.slice(0, limit);
  }
}

export { fallbackPosts };
