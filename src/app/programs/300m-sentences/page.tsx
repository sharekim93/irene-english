import type { Metadata } from "next";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import CTASection from "@/app/components/section/CTASection";
import { programSummaries } from "@/config/site";
import { breadcrumbJsonLd } from "@/lib/seo";

const program = programSummaries.find(
  (item) => item.slug === "300m-sentences",
)!;

export const metadata: Metadata = {
  title: "300만 문장 만들기 | 청크 학습 정규 과정",
  description:
    "삼성영어 아이린 석성의 300만 문장 만들기는 청크 단위로 문장을 이해하고 직접 만들어 보는 초등·중등 핵심 정규 과정입니다.",
  alternates: { canonical: "/programs/300m-sentences" },
};

export default function SentencesPage() {
  return (
    <SiteFrame>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", href: "/" },
          { name: "프로그램", href: "/programs" },
          { name: "300만 문장 만들기", href: program.href },
        ])}
      />
      <PageHero
        eyebrow="300M SENTENCES"
        title="단어를 넘어 문장을 직접 만드는 영어"
        description="청크 단위로 의미를 잡고, 듣기·읽기·말하기·쓰기·평가를 반복하며 초등부터 중등까지 이어지는 영어 체력을 만듭니다."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-950">
            정규 과정의 핵심 루틴
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {["단어", "듣기·읽기", "말하기·쓰기", "평가·피드백"].map(
              (item) => (
                <div key={item} className="rounded-xl bg-[#fcf9f8] p-6">
                  <h3 className="text-xl font-black text-gray-950">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    문장을 만드는 데 필요한 입력과 출력을 매일 짧게 반복합니다.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#fcf9f8] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {["Pre-level", "Basic", "Intermediate", "Advanced"].map((level) => (
            <div key={level} className="rounded-xl border border-sky-100 bg-white p-6">
              <p className="text-sm font-bold text-sky-600">LEVEL</p>
              <h3 className="mt-3 text-2xl font-black text-gray-950">
                {level}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                레벨 진단 후 현재 단계부터 시작하고 충분한 반복 뒤 다음 단계로
                이동합니다.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </SiteFrame>
  );
}
