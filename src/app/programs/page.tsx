import type { Metadata } from "next";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import ProgramCard from "@/app/components/ui/ProgramCard";
import { programSummaries, siteConfig } from "@/config/site";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "프로그램 | Hey! Hazel · 300만 문장 만들기 · PREP31",
  description:
    "삼성영어 셀레나 아이린 석성의 Hey! Hazel, 300만 문장 만들기, PREP31 프로그램과 학년별 로드맵을 안내합니다.",
  alternates: { canonical: "/programs" },
};

const roadmap = [
  "Hey! Hazel",
  "Pre-level",
  "Basic",
  "Intermediate",
  "Advanced",
  "PREP31",
];

export default function ProgramsPage() {
  return (
    <SiteFrame>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", href: "/" },
          { name: "프로그램", href: "/programs" },
        ])}
      />
      <PageHero
        eyebrow="PROGRAMS"
        title="처음 영어부터 중등 심화까지 이어지는 로드맵"
        titleClassName="max-w-5xl text-[1.875rem] sm:text-5xl"
        description="아이의 현재 수준을 먼저 확인한 뒤 Hey! Hazel, 300만 문장 만들기, PREP31 중 필요한 단계부터 시작합니다."
        descriptionClassName="max-w-4xl whitespace-pre-line text-base leading-7 sm:text-lg sm:leading-8"
      >
        <a
          href={siteConfig.telHref}
          className="inline-flex h-12 items-center justify-center rounded-xl bg-pink-600 px-6 font-bold text-white shadow-lg shadow-pink-500/20"
        >
          레벨 테스트 상담
        </a>
      </PageHero>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-950">전체 로드맵</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-6">
            {roadmap.map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-pink-100 bg-[#fcf9f8] p-5 text-center"
              >
                <p className="text-xs font-extrabold text-pink-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 break-keep text-lg font-extrabold text-gray-950">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fcf9f8] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-bold text-pink-600">COMPARISON</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-950">
              프로그램 비교
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {programSummaries.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
