import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/app/components/JsonLd";
import PageHero from "@/app/components/layout/PageHero";
import SiteFrame from "@/app/components/layout/SiteFrame";
import CTASection from "@/app/components/section/CTASection";
import { siteConfig, topicPages } from "@/config/site";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

type TopicParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return topicPages.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: TopicParams): Promise<Metadata> {
  const { slug } = await params;
  const topic = topicPages.find((item) => item.slug === slug);

  if (!topic) {
    return {};
  }

  return {
    title: topic.title,
    description: topic.description,
    keywords: topic.keywords,
    alternates: { canonical: `/topics/${topic.slug}` },
  };
}

export default async function TopicPage({ params }: TopicParams) {
  const { slug } = await params;
  const topic = topicPages.find((item) => item.slug === slug);

  if (!topic) {
    notFound();
  }

  return (
    <SiteFrame>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", href: "/" },
          { name: topic.title, href: `/topics/${topic.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: topic.title,
          description: topic.description,
          url: absoluteUrl(`/topics/${topic.slug}`),
          publisher: {
            "@type": "EducationalOrganization",
            name: siteConfig.name,
          },
        }}
      />
      <PageHero
        eyebrow="LOCAL GUIDE"
        title={topic.title}
        description={`${topic.description} ${siteConfig.name}은 레벨 진단 후 아이에게 맞는 단계와 반복량을 안내합니다.`}
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-950">
            아이에게 맞는 시작점을 찾는 것이 먼저입니다
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            {topic.keywords.join(", ")}를 찾는 학부모님께 가장 필요한 것은
            현재 수준을 정확히 보고 무리하지 않는 로드맵을 세우는 일입니다.
            아이린 석성은 파닉스, 청크 학습, 말하기 피드백, 중등 대비 루틴을
            아이의 단계에 맞춰 연결합니다.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["레벨 진단", "개별 진도", "피드백 관리"].map((item) => (
              <div key={item} className="rounded-xl bg-[#fcf9f8] p-6">
                <h3 className="text-xl font-extrabold text-gray-950">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  매일 확인할 수 있는 작은 단위로 학습 흐름을 설계합니다.
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
