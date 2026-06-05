import type { Metadata } from "next";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import CTASection from "@/app/components/section/CTASection";
import { programSummaries } from "@/config/site";
import { breadcrumbJsonLd } from "@/lib/seo";

const program = programSummaries.find((item) => item.slug === "hey-hazel")!;

export const metadata: Metadata = {
  title: "Hey! Hazel | 유아·예비초 첫 영어",
  description:
    "삼성영어 아이린 석성의 Hey! Hazel은 Chant, Song, Game으로 영어 흥미와 기초 음가를 준비하는 첫 영어 프로그램입니다.",
  alternates: { canonical: "/programs/hey-hazel" },
};

export default function HeyHazelPage() {
  return (
    <SiteFrame>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", href: "/" },
          { name: "프로그램", href: "/programs" },
          { name: "Hey! Hazel", href: program.href },
        ])}
      />
      <PageHero
        eyebrow="HEY! HAZEL"
        title="첫 영어는 흥미와 소리부터 시작합니다"
        description="Hey! Hazel은 유아, 예비초, 초등 저학년이 영어를 놀이처럼 만나고 기초 음가와 리듬에 익숙해지도록 돕는 시작 단계입니다."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["대상", program.target],
            ["목표", program.goal],
            ["수업 방식", program.method],
          ].map(([title, text]) => (
            <div key={title} className="rounded-xl border border-pink-100 p-6">
              <h2 className="text-sm font-bold text-pink-600">{title}</h2>
              <p className="mt-3 text-xl font-black leading-8 text-gray-950">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fcf9f8] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-950">
            Hazel 이후에는 Pre-level로 자연스럽게 이어집니다
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            영어를 처음 배우는 아이에게 중요한 것은 빠른 진도보다 긍정적인
            첫 경험입니다. 짧은 표현을 듣고 따라 말하고, 놀이 활동 속에서
            반복하며, 이후 삼성영어셀레나 정규 과정으로 넘어갈 수 있는 기초를
            만듭니다.
          </p>
        </div>
      </section>
      <CTASection />
    </SiteFrame>
  );
}
