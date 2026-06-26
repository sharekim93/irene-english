"use client";

import Image from "next/image";
import ConsultActions from "@/app/components/ui/ConsultActions";
import selenaMagic from "@/images/2021selena_magic.png";

export default function HeroSectionClient() {
  return (
    <section className="relative isolate overflow-hidden bg-surface-container-low px-5 pb-8 pt-12 sm:px-8 sm:py-10 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-8 right-0 hidden w-[38vw] rounded-l-[4rem] bg-brand-soft/50 lg:block"
      />
      <div className="relative mx-auto grid min-h-[420px] max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:px-8">
        <div className="relative z-10 max-w-[720px]">
          <h1 className="break-keep text-[1.7rem] font-extrabold leading-[1.14] text-gray-950 sm:text-[2.25rem] lg:text-[2.35rem]">
            영어를 잘 할 수밖에 없는 학습 시스템
          </h1>
          <p className="mt-6 max-w-3xl whitespace-pre-line break-keep text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {`학생중심 1:1 맞춤 수업에 최적화된 전문 선생님이 매일 확인하고
AI 셀레나 말하기 루틴으로 반복의 힘을 만듭니다`}
          </p>
          <ConsultActions align="start" className="mt-8" />
        </div>
        <div
          className="relative z-10 ml-auto h-[260px] w-[74%] max-w-[260px] overflow-hidden lg:h-[356px] lg:w-full lg:max-w-[340px]"
          aria-hidden="true"
        >
          <div
            data-testid="hero-character-backdrop"
            className="absolute right-[6%] top-[45%] h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-brand-soft bg-brand-soft/65 sm:h-[240px] sm:w-[240px] lg:h-[300px] lg:w-[300px]"
          />
          <Image
            src={selenaMagic}
            alt=""
            width={977}
            height={2762}
            className="relative h-full w-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
