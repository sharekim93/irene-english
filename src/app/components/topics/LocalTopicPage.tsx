import Link from "next/link";
import PageHero from "@/app/components/layout/PageHero";
import CTASection from "@/app/components/section/CTASection";
import ConsultActions from "@/app/components/ui/ConsultActions";
import { type LocalTopicPageData } from "@/config/site";

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
        <ConsultActions includeMap align="start" />
      </PageHero>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div className="space-y-8">
            {topic.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-border-warm bg-white p-7 shadow-sm shadow-pink-900/5"
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

            <div className="rounded-2xl border border-border-warm bg-white p-7">
              <p className="text-sm font-bold text-pink-600">LOCAL LINKS</p>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-950">
                함께 보면 좋은 지역 안내
              </h2>
              <div className="mt-5 flex flex-col gap-3">
                {topic.nearbyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="brand-secondary-action brand-focus-ring justify-start px-4 py-3 text-sm"
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

      <CTASection />
    </>
  );
}
