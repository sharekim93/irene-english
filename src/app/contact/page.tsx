import type { Metadata } from "next";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import Location from "@/app/components/section/Location";
import KakaoConsultButton from "@/app/components/ui/KakaoConsultButton";
import NaverBookingButton from "@/app/components/ui/NaverBookingButton";
import { siteConfig } from "@/config/site";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "오시는 길",
  description:
    "삼성영어 셀레나 아이린 석성 주소, 전화 상담, 수업 시간, 네이버 지도, 블로그 링크와 방문 안내입니다.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", href: "/" },
          { name: "오시는 길", href: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="CONTACT"
        title="상담과 방문 안내"
        description="석성초, 초당초, 동백역 생활권에서 방문하기 좋은 어은목마을 벽산 블루밍 아파트 상가동 105호에 있습니다."
        descriptionClassName="max-w-4xl whitespace-pre-line text-base leading-7 sm:text-lg sm:leading-8"
      >
        <div className="consult-cta-group sm:justify-start">
          <a
            href={siteConfig.telHref}
            className="consult-cta-button inline-flex items-center justify-center rounded-xl bg-pink-600 px-8 text-base font-bold text-white shadow-lg shadow-pink-500/25 transition-colors hover:bg-pink-700"
          >
            전화상담하기
          </a>
          <KakaoConsultButton className="consult-cta-button" />
          <NaverBookingButton
            tone="solid"
            className="consult-cta-button rounded-xl px-8 text-base shadow-md shadow-[#03c75a]/20"
            iconClassName="h-5 w-5"
          />
        </div>
      </PageHero>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            ["주소", siteConfig.address],
            ["전화", siteConfig.phone],
            ["수업 시간", siteConfig.openingHoursText],
            ["주차 안내", "상가동 주차장 구비"],
          ].map(([term, description]) => (
            <div key={term} className="rounded-xl border border-gray-100 p-5">
              <dt className="text-sm font-bold text-pink-600">{term}</dt>
              <dd className="mt-2 text-base font-bold leading-7 text-gray-900">
                {description}
              </dd>
            </div>
          ))}
        </div>
      </section>
      <Location />
    </SiteFrame>
  );
}
