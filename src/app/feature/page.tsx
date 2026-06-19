import type { Metadata } from "next";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import CTASection from "@/app/components/section/CTASection";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "학원 특징 | 1:1 맞춤 · AI 셀레나 · 매일 루틴",
  description:
    "삼성영어 셀레나 아이린 석성의 1:1 개별 맞춤, 매일 영어 루틴, AI 셀레나와 선생님 관리, 지역 접근성을 안내합니다.",
  alternates: { canonical: "/feature" },
};

const features = [
  {
    title: "1:1 개별 맞춤",
    text: "같은 학년이어도 시작점은 다릅니다. 레벨 진단 후 아이에게 맞는 단계와 반복량을 조정합니다.",
  },
  {
    title: "매일 루틴과 학습 습관",
    text: "주 5회 수업 흐름 속에서 영어를 낯선 과목이 아니라 매일 확인하는 습관으로 만듭니다.",
  },
  {
    title: "AI 셀레나 + 선생님 관리",
    text: "AI 셀레나의 말하기 피드백과 교실 선생님의 진도 관리를 함께 운영합니다.",
  },
  {
    title: "학부모 커뮤니케이션",
    text: "수업 기록과 블로그 소식을 통해 학습 방향과 학원 소식을 꾸준히 공유합니다.",
  },
  {
    title: "지역 접근성",
    text: "석성초, 초당초, 동백역, 어은목마을 생활권에서 방문하기 쉬운 위치입니다.",
  },
];

export default function FeaturePage() {
  return (
    <SiteFrame>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", href: "/" },
          { name: "학원 특징", href: "/feature" },
        ])}
      />
      <PageHero
        eyebrow="FEATURE"
        title="아이린 석성만의 관리 방식"
        description="원장 직강 1:1 맞춤 수업, AI 셀레나 말하기 루틴, 영어도서관과 Creative Writing까지 균형 있게 연결합니다."
        descriptionClassName="max-w-4xl whitespace-pre-line text-base leading-7 sm:text-lg sm:leading-8"
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-pink-100 bg-surface-page p-7"
            >
              <h2 className="text-2xl font-extrabold text-gray-950">
                {feature.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </SiteFrame>
  );
}
