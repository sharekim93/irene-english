import type { Metadata } from "next";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import CTASection from "@/app/components/section/CTASection";
import { programSummaries } from "@/config/site";
import { breadcrumbJsonLd } from "@/lib/seo";

const program = programSummaries.find((item) => item.slug === "prep31")!;

export const metadata: Metadata = {
  title: "PREP31 | 중등 내신·수능형 영어 대비",
  description:
    "삼성영어 아이린 석성의 PREP31은 DK 원서, 문법, 어휘, 성취도 평가 루틴으로 중등 이후 영어를 준비합니다.",
  alternates: { canonical: "/programs/prep31" },
};

export default function Prep31Page() {
  return (
    <SiteFrame>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", href: "/" },
          { name: "프로그램", href: "/programs" },
          { name: "PREP31", href: program.href },
        ])}
      />
      <PageHero
        eyebrow="PREP31"
        title="중등 이후 영어를 위한 심화 루틴"
        description="PREP31은 원서 읽기, 문법, 어휘, 평가를 엮어 중등 내신과 수능형 영어의 기초 체력을 다지는 과정입니다."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-950">
            수능 1등급 수준을 목표로 한 훈련
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            특정 결과를 약속하기보다, 상위권 영어에 필요한 읽기 밀도와 언어
            구조 이해, 꾸준한 평가 루틴을 차근차근 쌓는 데 집중합니다.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {["DK 원서", "문법", "어휘", "성취도 평가"].map((item) => (
              <div key={item} className="rounded-xl bg-[#fcf9f8] p-6">
                <h3 className="text-xl font-black text-gray-950">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  읽고 이해한 내용을 다시 확인하며 중등 이후 학습 밀도에
                  적응합니다.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </SiteFrame>
  );
}
