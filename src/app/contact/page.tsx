import type { Metadata } from "next";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import Location from "@/app/components/section/Location";
import ConsultActions from "@/app/components/ui/ConsultActions";
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
        <ConsultActions align="start" />
      </PageHero>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            ["주소", siteConfig.address],
            ["전화", siteConfig.phone],
            ["수업 시간", siteConfig.openingHoursText],
            ["주차 안내", "상가동 주차장 구비"],
          ].map(([term, description]) => (
            <div
              key={term}
              className="rounded-xl border border-border-warm bg-white p-5 shadow-sm shadow-pink-900/5"
            >
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
