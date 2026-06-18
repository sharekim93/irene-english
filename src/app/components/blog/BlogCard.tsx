import type { BlogPost } from "@/lib/blog/rss";
import Image from "next/image";

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function BlogImageFallback() {
  return (
    <div className="absolute inset-0 flex items-end overflow-hidden bg-[linear-gradient(135deg,#fff7fb_0%,#ffe3f0_46%,#eaf8ff_100%)] px-6 pb-6">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/70 bg-white/45" />
      <div className="absolute -bottom-14 left-6 h-28 w-28 rounded-full border border-pink-200/60 bg-white/40" />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-pink-600">
          Irene English Note
        </p>
        <p className="mt-2 max-w-48 text-lg font-black leading-snug text-gray-950">
          아이린 석성 학습 이야기
        </p>
      </div>
    </div>
  );
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const tagKeywords = post.tags.join(", ");
  const displayTags = post.tags.slice(0, 8);

  return (
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-lg shadow-pink-900/5"
    >
      <meta itemProp="mainEntityOfPage" content={post.link} />
      {tagKeywords && <meta itemProp="keywords" content={tagKeywords} />}
      {post.thumbnail ? (
        <div className="relative h-44 w-full">
          <BlogImageFallback />
          <Image
            src={post.thumbnail}
            alt={`${post.title} 썸네일`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            itemProp="image"
          />
        </div>
      ) : (
        <div className="relative h-44 w-full">
          <BlogImageFallback />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <time
          itemProp="datePublished"
          dateTime={post.pubDate}
          className="text-sm font-bold text-pink-600"
        >
          {formatDate(post.pubDate)}
        </time>
        <h3
          itemProp="headline"
          className="mt-3 text-xl font-black leading-snug text-gray-950"
        >
          {post.title}
        </h3>
        <p
          itemProp="description"
          className="mt-3 flex-1 text-sm leading-6 text-gray-600"
        >
          {post.summary}
        </p>
        {displayTags.length > 0 && (
          <div
            aria-label={`블로그 태그: ${tagKeywords}`}
            className="mt-5 flex max-h-14 flex-wrap gap-2 overflow-hidden"
          >
            {displayTags.map((tag) => (
              <a
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="whitespace-nowrap rounded-full bg-pink-50 px-3 py-1 text-xs font-bold leading-4 text-pink-700"
              >
                #{tag}
              </a>
            ))}
          </div>
        )}
        <a
          href={post.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-gray-950 px-4 text-sm font-bold text-white transition hover:bg-pink-600"
        >
          원문 보기
        </a>
      </div>
    </article>
  );
}
