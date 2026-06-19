# Local SEO Pages Design

Date: 2026-06-20
Project: Samsung English Selena Irene Seokseong
Status: Design approved for implementation planning

## Goal

Increase organic search traffic from local, high-intent searches by adding dedicated topic landing pages for:

- `석성초 영어학원`
- `동백역 영어학원`

The pages should help nearby parents quickly decide whether Samsung English Selena Irene Seokseong is relevant for their child, then move naturally to phone, Kakao, Naver booking, or map actions.

## Background

The site already has a solid renewal foundation:

- Multi-page information architecture with `/about`, `/programs`, `/feature`, `/faq`, `/blog`, `/contact`, and `/topics/[slug]`.
- Centralized school/site data in `src/config/site.ts`.
- Dynamic topic pages powered by `topicPages`.
- Sitemap generation based on `topicPages`.
- Structured data helpers in `src/lib/seo.ts`.

The current topic page template is useful for general evergreen content, but all topic pages share almost the same body structure. Local SEO pages need more specific sections, FAQs, calls to action, and internal links so they do not read like duplicated generic content.

## Proposed Approach

Use the existing `/topics/[slug]` route and expand the topic data model to support local SEO pages.

Add two new pages:

1. `/topics/suksung-elementary-english`
   - Primary keyword: `석성초 영어학원`
   - Secondary keywords: `석성초 영어`, `석성초 근처 영어학원`, `석성초 초등 영어`
   - Purpose: Convert parents searching near Seokseong Elementary School.

2. `/topics/dongbaek-station-english`
   - Primary keyword: `동백역 영어학원`
   - Secondary keywords: `동백역 초등 영어`, `동백역 중등 영어`, `동백역 영어 교습소`
   - Purpose: Capture broader neighborhood searches around Dongbaek Station.

Keep `/topics/local-english` as a local guide hub. It should link to both dedicated pages instead of being removed.

## Content Design

### Seokseong Elementary Page

Target URL: `/topics/suksung-elementary-english`

Recommended title:

`석성초 영어학원 찾는 학부모님께`

Main message:

Samsung English Selena Irene Seokseong serves the Seokseong Elementary living area with 1:1 managed English lessons from phonics and sentence building through middle-school preparation.

Sections:

1. Hero
   - Search-intent headline around `석성초 영어학원`.
   - Short explanation of individualized English management near Seokseong Elementary.
   - CTA group: phone, Kakao, Naver booking, map.

2. Why Seokseong Elementary Parents Search
   - Separate concerns by stage:
     - Early elementary: first English, interest, phonics.
     - Upper elementary: sentence building, reading, speaking routine.
     - Pre-middle school: vocabulary, grammar, reading stamina.

3. Recommended Starting Points
   - Hey! Hazel for first English and phonics readiness.
   - 300M Sentences for elementary-to-middle regular learning.
   - PREP31 for advanced middle-school preparation.

4. Nearby Access
   - Address from `siteConfig`.
   - Operating hours from `siteConfig`.
   - Naver map/place CTA.
   - Avoid unverified walking-time claims.

5. Local FAQ
   - Can lower elementary students from Seokseong Elementary start?
   - Can my child begin from phonics?
   - When should middle-school preparation begin?
   - How does level diagnosis work?

### Dongbaek Station Page

Target URL: `/topics/dongbaek-station-english`

Recommended title:

`동백역 영어학원, 매일 관리되는 1:1 영어`

Main message:

For families searching around Dongbaek Station, the academy offers a managed curriculum that connects elementary English, AI Selena speaking routines, and middle-school preparation.

Sections:

1. Hero
   - Search-intent headline around `동백역 영어학원`.
   - Explain local accessibility and daily managed learning.
   - CTA group: phone, Kakao, Naver booking, map.

2. Choosing an English Academy Around Dongbaek Station
   - Access matters, but the more important criteria are level diagnosis, daily routine, teacher feedback, and long-term curriculum continuity.

3. Grade-Based Roadmap
   - Preschool/lower elementary: interest and phonics.
   - Elementary: chunk learning, sentence making, reading, speaking.
   - Middle school: grammar, vocabulary, reading, evaluation routine.

4. Access and Consultation
   - Address and operating hours.
   - Naver map/place CTA.
   - Link to Seokseong Elementary page for parents searching by school.

5. Local FAQ
   - Is it suitable for elementary students near Dongbaek Station?
   - Is middle-school English available?
   - How is AI Selena used with teacher management?
   - What are the class hours?

## Technical Design

### Data Model

Expand `topicPages` in `src/config/site.ts` so topic entries can support both general learning pages and local SEO pages.

Recommended fields:

```ts
type TopicPage = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  intent?: "learning" | "local";
  primaryKeyword?: string;
  heroTitle?: string;
  heroDescription?: string;
  sections?: {
    title: string;
    body: string;
    points?: string[];
  }[];
  programFit?: {
    title: string;
    description: string;
    href: string;
  }[];
  localFaqs?: {
    question: string;
    answer: string;
  }[];
  nearbyLinks?: {
    label: string;
    href: string;
  }[];
};
```

Local pages should use `intent: "local"`. Existing topic pages can omit the new fields or use `intent: "learning"`.

### Rendering

Update `src/app/topics/[slug]/page.tsx` to render based on topic intent.

- Existing learning pages keep the current simple guide layout.
- Local pages use a dedicated local SEO layout.

Recommended component split:

- `src/app/components/topics/LocalTopicPage.tsx`
- Optional later split: `LearningTopicPage.tsx` if the dynamic page becomes too long.

The local component should receive a single topic object and render:

- `PageHero`
- content sections
- program fit cards
- local FAQ
- related local links
- CTA section

### Metadata

For local pages, generate metadata with the primary keyword near the front.

Examples:

- `석성초 영어학원 | 삼성영어 셀레나 아이린 석성`
- `동백역 영어학원 | 삼성영어 셀레나 아이린 석성`

Descriptions should include the local search phrase, program range, and 1:1 managed learning message without keyword stuffing.

### Structured Data

Keep current breadcrumb and article JSON-LD.

For local pages, also include:

- `FAQPage` JSON-LD from `localFaqs`.
- `organizationJsonLd()` on local topic pages, reusing the existing helper rather than duplicating business literals.

### Sitemap

No custom sitemap logic is required if the new pages are added to `topicPages`, because `src/app/sitemap.ts` already maps topic slugs to `/topics/${slug}`.

Tests should verify the two new URLs appear in sitemap output.

## Error Handling

- Unknown slugs continue to use `notFound()`.
- Local pages with missing required fields should fail tests before deployment.
- External services are not required to render these pages.
- CTA links use existing `siteConfig` fields:
  - `telHref`
  - `kakaoChannelChatUrl`
  - `bookingUrl`
  - `placeUrl`

## Testing Plan

Add focused tests for SEO-critical behavior:

1. `topicPages` data validation
   - Local pages have `primaryKeyword`.
   - Local pages have at least one section.
   - Local pages have at least two local FAQs.
   - Local pages have CTA-compatible site config links available.

2. Sitemap test
   - `/topics/suksung-elementary-english` is included.
   - `/topics/dongbaek-station-english` is included.

3. Page rendering test
   - Seokseong page renders `석성초 영어학원`.
   - Dongbaek page renders `동백역 영어학원`.
   - Local FAQ text appears.
   - Consultation/map CTAs appear.
   - If testing the async route component directly is awkward, test `LocalTopicPage` with fixture data.

4. Metadata test
   - Local metadata title contains the primary keyword.
   - Keywords include the local search terms.

## Naver Search Advisor Checklist

Naver Search Advisor automatic submission is not part of the product implementation. The public guidance describes submitting sitemap/RSS through Search Advisor UI, while collection request API access is described as a partnership path for qualifying content sites. For this site, the reliable path is to prepare the code correctly and complete a manual post-deploy checklist.

Post-deploy checklist:

1. Confirm `/sitemap.xml` is reachable on the production domain.
2. Confirm `/robots.txt` points to the canonical sitemap.
3. Confirm the new topic URLs are present in `/sitemap.xml`.
4. Open Naver Search Advisor with the site owner account.
5. Confirm site ownership for `https://irene-english.com` if it has not already been verified.
6. Submit or refresh the sitemap URL in Search Advisor.
7. Optionally request collection for:
   - `https://irene-english.com/topics/suksung-elementary-english`
   - `https://irene-english.com/topics/dongbaek-station-english`
8. Monitor collection/indexing status after deployment.

References:

- Naver sitemap submission guide: https://help.naver.com/service/30010/contents/17629?lang=ko
- Naver new page collection guide: https://help.naver.com/service/30010/contents/17620?osType=PC
- Naver Search Advisor support/API partnership page: https://searchadvisor.naver.com/support

## Out Of Scope

- Automated Naver Search Advisor submission.
- Browser automation for owner-account submission.
- Search ranking dashboard.
- Naver Search Advisor API partnership integration.
- Copying Naver blog article bodies into this site.
- Generating many near-duplicate local pages.
- Unverified walking-time, distance, or ranking claims.

## Implementation Decisions

1. Rewrite `/topics/local-english` lightly as a local hub in the same implementation pass.
2. Keep local FAQs page-specific for the first pass. Do not merge them into the global `/faq` page unless the copy proves broadly useful.
3. Do not include blog preview cards on the local pages. Keep the pages evergreen and conversion-focused.

## Approval Notes

The user selected:

- Primary goal: search traffic growth.
- SEO focus: local search landing pages.
- Keyword priority: `석성초 영어학원`, then `동백역 영어학원`.
- Approach: separate pages for each local search intent.
- Addition: include Naver Search Advisor as an operational checklist, not an automated product feature.
