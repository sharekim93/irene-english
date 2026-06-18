import type { Metadata } from "next";

import BlogCard from "@/app/components/blog/BlogCard";
import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import { siteConfig } from "@/config/site";
import { getBlogPosts } from "@/lib/blog/rss";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "블로그 | 아이린 석성 학원 소식과 영어 학습 가이드",
  description:
    "네이버 블로그 RSS로 연동한 삼성영어 셀레나 아이린 석성 최신 글, 학원 소식, 파닉스·초등·중등 영어 학습 가이드입니다.",
  alternates: { canonical: "/blog" },
};

type BlogPageProps = {
  searchParams?: Promise<{
    tag?: string | string[];
    q?: string | string[];
  }>;
};

function readQueryValue(value?: string | string[]) {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
}

function blogFilterHref(params: { tag?: string; q?: string }) {
  const query = new URLSearchParams();

  if (params.tag) {
    query.set("tag", params.tag);
  }

  if (params.q) {
    query.set("q", params.q);
  }

  const value = query.toString();
  return value ? `/blog?${value}` : "/blog";
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const selectedTag = readQueryValue(params?.tag).trim();
  const searchQuery = readQueryValue(params?.q).trim();
  const posts = await getBlogPosts(20);
  const tags = [...new Set(posts.flatMap((post) => post.tags))].slice(0, 12);
  const normalizedQuery = searchQuery.toLocaleLowerCase("ko-KR");
  const filteredPosts = posts.filter((post) => {
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    const matchesQuery = normalizedQuery
      ? [post.title, post.summary, ...post.tags]
          .join(" ")
          .toLocaleLowerCase("ko-KR")
          .includes(normalizedQuery)
      : true;

    return matchesTag && matchesQuery;
  });

  return (
    <SiteFrame>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", href: "/" },
          { name: "블로그", href: "/blog" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "아이린 석성 블로그 최신 글",
          url: absoluteUrl("/blog"),
          blogPost: filteredPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: post.link,
            datePublished: post.pubDate,
            description: post.summary,
            keywords: post.tags.join(", "),
            about: post.tags.map((tag) => ({
              "@type": "Thing",
              name: tag,
            })),
          })),
        }}
      />
      <PageHero
        eyebrow="BLOG"
        title="아이린 석성 학원 소식과 영어 학습 가이드"
        description="학원 소식, 파닉스와 초등 영어 루틴, 중등 대비 이야기 등 학원 소식을 살펴보세요"
      >
        <a
          href={siteConfig.blogUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-pink-600 px-6 font-bold text-white shadow-lg shadow-pink-500/20"
        >
          네이버 블로그 열기
        </a>
      </PageHero>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <form
            action="/blog"
            className="mb-6 flex flex-col gap-3 rounded-2xl border border-pink-100 bg-pink-50/50 p-4 sm:flex-row sm:items-center"
          >
            {selectedTag && (
              <input type="hidden" name="tag" value={selectedTag} />
            )}
            <label className="sr-only" htmlFor="blog-search">
              블로그 검색
            </label>
            <input
              id="blog-search"
              type="search"
              name="q"
              defaultValue={searchQuery}
              placeholder="제목, 내용, 태그 검색"
              className="min-h-12 flex-1 rounded-xl border border-pink-100 bg-white px-4 text-sm font-semibold text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-pink-400"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gray-950 px-5 text-sm font-bold text-white transition hover:bg-pink-600"
            >
              검색
            </button>
          </form>
          {(selectedTag || searchQuery) && (
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-bold text-gray-700">
              {selectedTag && (
                <a
                  href={blogFilterHref({ q: searchQuery })}
                  className="rounded-full bg-pink-600 px-3 py-1 text-white"
                >
                  #{selectedTag} ×
                </a>
              )}
              {searchQuery && (
                <a
                  href={blogFilterHref({ tag: selectedTag })}
                  className="rounded-full bg-gray-950 px-3 py-1 text-white"
                >
                  {searchQuery} ×
                </a>
              )}
              <a
                href="/blog"
                className="text-pink-700 underline underline-offset-4"
              >
                전체 보기
              </a>
              <span className="text-gray-500">{filteredPosts.length}개 글</span>
            </div>
          )}
          {tags.length > 0 && (
            <div className="mb-10 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <a
                  key={tag}
                  href={blogFilterHref({ tag, q: searchQuery })}
                  className={
                    tag === selectedTag
                      ? "rounded-full bg-pink-600 px-3 py-1 text-sm font-bold text-white"
                      : "rounded-full bg-pink-50 px-3 py-1 text-sm font-bold text-pink-700 transition hover:bg-pink-100"
                  }
                >
                  #{tag}
                </a>
              ))}
            </div>
          )}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.link} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-pink-100 bg-pink-50/60 px-6 py-12 text-center">
              <p className="text-lg font-black text-gray-950">
                조건에 맞는 블로그 글이 없습니다.
              </p>
              <a
                href="/blog"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-gray-950 px-5 text-sm font-bold text-white"
              >
                전체 글 보기
              </a>
            </div>
          )}
        </div>
      </section>
    </SiteFrame>
  );
}
