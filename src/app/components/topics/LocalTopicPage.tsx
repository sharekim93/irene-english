import Link from "next/link";
import PageHero from "@/app/components/layout/PageHero";
import CTASection from "@/app/components/section/CTASection";
import { siteConfig, type LocalTopicPageData } from "@/config/site";

type LocalTopicPageProps = {
  topic: LocalTopicPageData;
};

export default function LocalTopicPage({ topic }: LocalTopicPageProps) {
  return (
    <>
      <PageHero
        eyebrow="LOCAL GUIDE"
        title={topic.heroTitle}
        description={topic.heroDescription}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={siteConfig.telHref}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-pink-600 px-5 text-sm font-bold text-white shadow-md shadow-pink-500/20"
          >
            전화상담하기
          </a>
          <a
            href={siteConfig.kakaoChannelChatUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-200 bg-white px-5 text-sm font-bold text-gray-950"
          >
            카카오 상담
          </a>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-bold text-emerald-700"
          >
            네이버 예약
          </a>
          <a
            href={siteConfig.placeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-sky-200 bg-white px-5 text-sm font-bold text-sky-700"
          >
            네이버 지도
          </a>
        </div>
      </PageHero>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div className="space-y-8">
            {topic.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-pink-100 bg-white p-7 shadow-sm shadow-pink-900/5"
              >
                <h2 className="break-keep text-2xl font-extrabold leading-8 text-gray-950">
                  {section.title}
                </h2>
                <p className="mt-4 break-keep text-base leading-7 text-gray-600">
                  {section.body}
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-xl bg-surface-page px-4 py-3 text-sm font-bold text-gray-700"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-pink-100 bg-surface-cream p-7">
              <p className="text-sm font-bold text-pink-600">PROGRAM FIT</p>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-950">
                아이 수준별 시작점
              </h2>
              <div className="mt-6 space-y-4">
                {topic.programFit.map((program) => (
                  <div key={program.href} className="rounded-xl bg-white p-5">
                    <h3 className="text-lg font-extrabold text-gray-950">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {program.description}
                    </p>
                    <Link
                      href={program.href}
                      className="mt-4 inline-flex text-sm font-bold text-pink-600"
                    >
                      {program.title} 자세히 보기
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-7">
              <p className="text-sm font-bold text-sky-600">LOCAL LINKS</p>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-950">
                함께 보면 좋은 지역 안내
              </h2>
              <div className="mt-5 flex flex-col gap-3">
                {topic.nearbyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl border border-sky-100 px-4 py-3 text-sm font-bold text-gray-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface-page px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-pink-600">LOCAL FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-950">
            자주 묻는 질문
          </h2>
          <div className="mt-8 grid gap-4">
            {topic.localFaqs.map((item) => (
              <article key={item.question} className="rounded-2xl bg-white p-6">
                <h3 className="text-lg font-extrabold text-gray-950">
                  {item.question}
                </h3>
                <p className="mt-3 break-keep text-sm leading-6 text-gray-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div aria-hidden="true">
        <CTASection />
      </div>
    </>
  );
}
