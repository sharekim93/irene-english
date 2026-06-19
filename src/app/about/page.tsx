import type { Metadata } from "next";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import CTASection from "@/app/components/section/CTASection";
import { siteConfig } from "@/config/site";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "학원소개",
  description:
    "석성초, 초당초, 동백역 생활권의 삼성영어 셀레나 아이린 석성 운영 철학과 1:1 맞춤 수업 방식을 소개합니다.",
  alternates: { canonical: "/about" },
};

const philosophy = [
  "매일 영어를 만나고 바로 말해 보는 루틴",
  "레벨 진단 후 아이에게 맞춘 개별 진도",
  "결과보다 과정, 반복, 피드백을 놓치지 않는 관리",
  "영어도서관과 Creative Writing으로 읽기와 쓰기 확장",
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", href: "/" },
          { name: "학원소개", href: "/about" },
        ])}
      />
      <PageHero
        eyebrow="INTRODUCE"
        title="영어를 잘 할 수밖에 없는 학습 시스템"
        description={`학생중심 1:1 맞춤 수업에 최적화된 전문 선생님이
학생의 학습 목표와 플랜에 맞게 꼼꼼히 지도합니다`}
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold text-pink-600">PHILOSOPHY</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-950">
              루틴과 피드백이 쌓여야 영어가 오래 갑니다
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              아이린 석성은 한 번의 설명보다 매일의 확인을 중요하게 봅니다. 오늘
              배운 표현을 말해 보고, 필요한 만큼 반복하고, 기록을 통해 다음
              수업을 조정합니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {philosophy.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-pink-100 bg-[#fcf9f8] p-6"
              >
                <p className="text-lg font-extrabold leading-7 text-gray-900">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fcf9f8] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-950">수업 흐름</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {["레벨 진단", "개별 진도", "매일 루틴", "피드백/상담"].map(
              (step, index) => (
                <div key={step} className="rounded-xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-extrabold text-pink-600">
                    STEP {index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold text-gray-950">
                    {step}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {index === 0 &&
                      "현재 읽기, 듣기, 말하기 수준과 학습 경험을 확인합니다."}
                    {index === 1 &&
                      "학생에게 필요한 단계부터 시작해 반복량을 조정합니다."}
                    {index === 2 &&
                      "AI 셀레나 말하기와 교실 선생님 확인을 함께 진행합니다."}
                    {index === 3 &&
                      "학습 기록을 바탕으로 가정과 다음 학습 방향을 공유합니다."}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-950">학원 기본 정보</h2>
          <dl className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["학원명", siteConfig.legalName],
              ["대상", "예비초, 석성초·초당초 초등, 초당중 등 중등"],
              ["주소", siteConfig.address],
              ["전화", siteConfig.phone],
              ["수업 시간", siteConfig.openingHoursText],
              ["수업 방식", "레벨 진단 기반 1:1 개별 맞춤"],
            ].map(([term, description]) => (
              <div key={term} className="rounded-xl border border-gray-100 p-5">
                <dt className="text-sm font-bold text-pink-600">{term}</dt>
                <dd className="mt-2 font-bold leading-7 text-gray-900">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CTASection />
    </SiteFrame>
  );
}
