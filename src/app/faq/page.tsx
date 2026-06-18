import type { Metadata } from "next";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import CTASection from "@/app/components/section/CTASection";
import { faqItems } from "@/config/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ | 상담·수업 방식·관리·중등 대비",
  description:
    "삼성영어 셀레나 아이린 석성 등록 상담, AI 셀레나 수업 방식, 숙제와 리포트, 중등 내신 대비, 운영 시간 FAQ입니다.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const categories = [...new Set(faqItems.map((item) => item.category))];

  return (
    <SiteFrame>
      <JsonLd data={faqJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", href: "/" },
          { name: "FAQ", href: "/faq" },
        ])}
      />
      <PageHero
        eyebrow="FAQ"
        title="상담 전에 자주 묻는 질문"
        description="등록 상담, 1:1 개별 진도, AI 셀레나 수업, 숙제와 리포트, 중등 내신 대비, 운영 시간에 대한 질문을 정리했습니다."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-black text-gray-950">{category}</h2>
              <div className="mt-5 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-[#fcf9f8]">
                {faqItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <details key={item.question} className="group p-6">
                      <summary className="cursor-pointer list-none text-lg font-black text-gray-950">
                        {item.question}
                        <span className="float-right text-pink-600 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-base leading-7 text-gray-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </SiteFrame>
  );
}
