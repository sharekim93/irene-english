import type { Metadata } from "next";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import Location from "@/app/components/section/Location";
import KakaoConsultButton from "@/app/components/ui/KakaoConsultButton";
import NaverBookingIcon from "@/app/components/ui/NaverBookingIcon";
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
      >
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <a
            href={siteConfig.telHref}
            className="inline-flex h-14 items-center justify-center rounded-xl bg-pink-600 px-8 text-base font-nanum-square-bold font-bold text-white shadow-lg shadow-pink-500/25 transition-colors hover:bg-pink-700"
          >
            전화상담하기
          </a>
          <KakaoConsultButton />
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-[#03c75a] bg-[#03c75a] px-8 text-base font-nanum-square-bold font-bold text-white shadow-lg shadow-[#03c75a]/25 transition-colors hover:border-[#02b350] hover:bg-[#02b350]"
          >
            <NaverBookingIcon className="h-5 w-5 [&_path:first-of-type]:fill-[#03c75a] [&_path:last-of-type]:fill-none [&_path:last-of-type]:stroke-[#03c75a] [&_rect]:fill-white" />
            네이버 예약
          </a>
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
