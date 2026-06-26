"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import selenaMagic from "@/images/2021selena_magic.png";

export default function HeroSectionClient() {
  return (
    <section className="relative isolate overflow-hidden bg-surface-container-low px-5 pb-8 pt-12 sm:px-8 sm:py-10 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-8 right-0 hidden w-[38vw] rounded-l-[4rem] bg-primary-fixed/65 lg:block"
      />
      <div className="relative mx-auto grid min-h-[420px] max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:px-8">
        <div className="relative z-10 max-w-[720px]">
          <h1 className="break-keep text-[1.7rem] font-extrabold leading-[1.14] text-gray-950 sm:text-[2.25rem] lg:text-[2.35rem]">
            영어를 잘 할 수밖에 없는 학습 시스템
          </h1>
          <p className="mt-6 max-w-3xl whitespace-pre-line break-keep text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {`학생중심 1:1 맞춤 수업에 최적화된 전문 선생님이 매일 확인하고
AI 셀레나 말하기 루틴으로 반복의 힘을 만듭니다.`}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.telHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-pink-600 px-7 text-base font-bold text-white shadow-lg shadow-pink-500/25 transition-colors hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300/35"
            >
              전화상담하기
            </a>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#dfbec7] bg-white px-7 text-base font-bold text-pink-700 shadow-[0_12px_28px_rgba(233,67,145,0.08)] transition-colors hover:border-pink-200 hover:bg-pink-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300/35"
            >
              네이버 예약
            </a>
          </div>
        </div>
        <div
          className="relative z-10 ml-auto h-[300px] w-[74%] max-w-[260px] overflow-hidden lg:h-[400px] lg:w-full lg:max-w-[340px]"
          aria-hidden="true"
        >
          <div
            data-testid="hero-character-backdrop"
            className="absolute right-[6%] top-[45%] h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-primary-fixed/75 sm:h-[240px] sm:w-[240px] lg:h-[300px] lg:w-[300px]"
          />
          <Image
            src={selenaMagic}
            alt=""
            width={977}
            height={2762}
            className="relative mx-auto -mt-1.5 h-auto w-[min(100%,286px)] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
