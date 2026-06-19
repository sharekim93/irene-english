"use client";

import { Button } from "@heroui/react";
import { useEffect, useMemo, useState } from "react";
import KakaoConsultButton from "@/app/components/ui/KakaoConsultButton";
import NaverBookingButton from "@/app/components/ui/NaverBookingButton";
import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/lib/blog/rss";

const cardStates = [
  {
    className:
      "z-30 translate-x-0 translate-y-0 scale-100 rotate-0 opacity-100 shadow-lg shadow-pink-900/10",
    pointerClassName: "pointer-events-auto",
  },
  {
    className:
      "z-20 translate-x-9 translate-y-3 scale-[0.94] rotate-6 opacity-80 shadow-lg shadow-pink-900/10",
    pointerClassName: "pointer-events-none sm:pointer-events-auto",
  },
  {
    className:
      "z-10 -translate-x-9 translate-y-6 scale-[0.9] -rotate-6 opacity-65 shadow-lg shadow-pink-900/5",
    pointerClassName: "pointer-events-none sm:pointer-events-auto",
  },
];

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

function getPrimaryTag(post: BlogPost, index: number) {
  return (
    post.tags[0] ??
    ["최근 교실노트", "뉴스레터", "성장 이야기"][index] ??
    "블로그"
  );
}

function getRelativeCardPosition(
  index: number,
  activeIndex: number,
  total: number,
) {
  return (index - activeIndex + total) % total;
}

type HeroSectionClientProps = {
  posts: BlogPost[];
};

export default function HeroSectionClient({ posts }: HeroSectionClientProps) {
  const heroPosts = useMemo(() => posts.slice(0, 3), [posts]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroPosts.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroPosts.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [heroPosts.length]);

  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_82%_18%,rgba(233,67,145,0.13),transparent_34%),linear-gradient(135deg,#fff,var(--surface-page)_52%,#fff2f8)] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="flex flex-col items-start">
          <h1 className="max-w-2xl break-keep font-extrabold leading-tight text-gray-950">
            <span className="block text-[1.55rem] leading-[1.16] text-pink-600 text-balance sm:text-[2.1rem] lg:text-[2.35rem]">
              영어를 잘 할 수밖에 없는 학습 시스템
            </span>
            <span className="mt-2 block text-[1.35rem] leading-[1.24] text-gray-800 text-balance sm:text-[1.85rem] lg:text-[2rem]">
              원장 직강 1:1 개별 맞춤 수업
            </span>
          </h1>
          <p className="mt-5 max-w-2xl break-keep text-[0.95rem] leading-7 text-gray-600 sm:text-lg sm:leading-8">
            <span className="block sm:inline">
              파닉스부터 수능 1등급 완성까지
            </span>{" "}
            <span className="block sm:inline">
              아이의 현재 실력을 정확하게 진단하고
            </span>
            <br className="hidden sm:block" />
            <span className="block">
              매일 하루 한 시간 영어 실력을 확실하게 쌓아갑니다
            </span>
          </p>
          <div className="consult-cta-group mt-7 sm:justify-start">
            <Button
              as="a"
              href={siteConfig.telHref}
              size="lg"
              className="consult-cta-button bg-pink-600 px-8 text-base font-bold text-white shadow-lg shadow-pink-500/25"
            >
              전화상담하기
            </Button>
            <KakaoConsultButton className="consult-cta-button" />
            <NaverBookingButton className="consult-cta-button px-8 text-base shadow-md shadow-[#03c75a]/15" />
          </div>
        </div>

        <div className="relative mx-auto min-h-[430px] w-full max-w-[560px] py-4 sm:min-h-[470px]">
          <div className="absolute inset-x-6 top-11 h-72 rounded-[2rem] bg-pink-200/40 blur-3xl" />
          <div className="absolute inset-x-14 bottom-9 h-40 rounded-[2rem] bg-violet-200/30 blur-3xl" />

          {heroPosts.map((post, index) => {
            const position = getRelativeCardPosition(
              index,
              activeIndex,
              heroPosts.length,
            );
            const state =
              cardStates[position] ?? cardStates[cardStates.length - 1];
            const tag = getPrimaryTag(post, index);

            return (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${post.title} 자세히 보기`}
                className={`group absolute inset-x-0 top-6 flex min-h-[280px] origin-bottom flex-col rounded-[1.75rem] border border-pink-100/90 bg-white/95 p-5 text-left no-underline backdrop-blur-xl transition-[background-color,border-color,box-shadow,opacity,transform] duration-500 ease-out hover:border-pink-200 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300/35 sm:min-h-[310px] sm:p-7 ${state.className} ${state.pointerClassName}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-8 max-w-[62%] items-center rounded-full border border-pink-200 bg-pink-50 px-3 text-xs font-extrabold text-pink-700">
                    <span className="truncate">#{tag}</span>
                  </span>
                  <time
                    dateTime={post.pubDate}
                    className="shrink-0 text-xs font-extrabold text-gray-400"
                  >
                    {formatDate(post.pubDate)}
                  </time>
                </div>

                <div className="mt-7 flex flex-1 gap-4 sm:gap-5">
                  <p className="w-11 shrink-0 pt-1 text-2xl font-extrabold leading-none text-pink-300 sm:w-12 sm:text-3xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="min-w-0 flex-1">
                    <h2 className="line-clamp-2 break-keep text-xl font-extrabold leading-snug text-gray-950 sm:text-[1.45rem]">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 break-keep text-sm font-semibold leading-6 text-gray-600">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <span className="inline-flex h-11 w-fit items-center justify-center rounded-full bg-pink-600 px-5 text-sm font-bold text-white shadow-md shadow-pink-500/15 transition-colors group-hover:bg-pink-700">
                    글 자세히 보기
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
