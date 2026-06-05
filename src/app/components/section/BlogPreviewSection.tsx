import BlogCard from "@/app/components/blog/BlogCard";
import JsonLd from "@/app/components/JsonLd";
import { getBlogPosts } from "@/lib/blog/rss";

export default async function BlogPreviewSection() {
  const posts = await getBlogPosts(3);

  return (
    <section className="bg-white px-5 py-24 sm:px-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "아이린 석성 블로그 최신 글",
          itemListElement: posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
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
            },
          })),
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold text-pink-600">BLOG</p>
            <h2 className="text-3xl font-black text-gray-950 sm:text-4xl">
              블로그 미리보기
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600"></p>
          </div>
          <a
            href="/blog"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-200 px-5 text-sm font-bold text-pink-700 transition hover:bg-pink-50"
          >
            블로그 더 보기
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.link} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
