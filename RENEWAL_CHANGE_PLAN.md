# 삼성영어 아이린 석성 리뉴얼 변경계획

생성일: 2026-06-06 KST  
기준 문서: `RENEWAL_PLAN.md`  
리뷰 방식: `/plan-eng-review` 기반 구현 대비 점검  
검증 커맨드: `yarn build`, `yarn lint`

## 결론

리뉴얼의 큰 뼈대는 이미 구현됐다. `siteConfig`, 다중 라우트, 프로그램 상세, FAQ, 블로그 RSS, sitemap, robots, JSON-LD는 들어와 있고 `yarn build`와 `yarn lint`도 통과했다.

출시 전 미비점은 네 가지다.

1. 테스트 인프라가 없다. 빌드는 통과하지만 회귀를 잡을 시스템이 없다.
2. 네이버 지도는 실제 지도가 아니라 위치 안내 카드다.
3. 블로그 RSS 파서는 동작할 수 있지만 정규식 기반이라 실패 케이스가 테스트되지 않았다.
4. `next lint`가 deprecated라 Next 16 전에 lint 스크립트를 바꿔야 한다.

## Step 0. Scope Challenge

### What Already Exists

| 계획 항목 | 현재 상태 | 판정 |
| --- | --- | --- |
| 전역 학원 정보 상수화 | `src/config/site.ts`에 이름, 도메인, 전화, 주소, 좌표, 블로그, 키워드 정의 | 재사용 |
| IA 및 라우팅 | `/about`, `/programs`, `/programs/*`, `/feature`, `/faq`, `/blog`, `/contact`, `/topics/*` 생성 | 재사용 |
| 홈 콘텐츠화 | `src/app/page.tsx`가 실제 콘텐츠 섹션을 서버 페이지에서 렌더 | 재사용 |
| SEO/GEO | metadata, sitemap, robots, organization/FAQ/breadcrumb/blog JSON-LD 일부 구현 | 보강 필요 |
| 블로그 RSS | `src/lib/blog/rss.ts`, `/api/blog`, 홈 3개, 블로그 20개 구현 | 보강 필요 |
| CTA/위치 | 전화, 주소, 운영시간, 네이버 지도 링크 구현 | 보강 필요 |

### Minimum Change Set

1. 테스트 스택과 핵심 회귀 테스트를 추가한다.
2. 네이버 지도 SDK 사용 여부를 확정하고, 실제 지도 또는 명시적 정적 위치 카드로 결정한다.
3. RSS 파서를 안정화하고 실패/무썸네일/CDATA/잘못된 날짜 케이스를 테스트한다.
4. lint 스크립트를 `eslint .`로 전환한다.
5. 블로그 태그 필터와 검색 URL을 실제 동작하게 만들거나 계획에서 명시적으로 제외한다.

### Complexity Check

변경계획은 8개 이상 파일을 만질 수 있다. 다만 독립 레인으로 나눌 수 있다.

```txt
Core config/test   RSS/blog          Map/contact        UI cleanup
      |               |                  |                  |
      v               v                  v                  v
 package.json     rss.ts/tests       Location.tsx      Header/Footer
 test config       Blog page         siteConfig/env     legacy cleanup
      \               |                  |                  /
       \              v                  v                 /
        +-------- build/lint/playwright smoke -----------+
```

### Search Check

- [Layer 1] Next App Router의 `fetch(..., { next: { revalidate } })`는 공식 캐시 방식이다. 현재 RSS fetch는 이 방향을 따르고 있다.
- [Layer 1] Next Image 외부 이미지는 `remotePatterns` allowlist가 필요하다. 현재 pstatic/naver 계열이 허용되어 있지만 테스트가 없다.
- [Layer 1] `next lint`는 deprecated 경고가 실제 커맨드 출력에서 확인됐다. `eslint .`로 전환한다.

### TODO Cross Reference

`TODOS.md`는 없다. 이번 계획에서 TODO 후보는 문서 끝의 "TODO Candidates"에 보존한다.

## Architecture Review

### 1. [P1] 테스트 인프라 부재

근거:
- `package.json:5-10`에는 `dev`, `build`, `start`, `lint`만 있고 `test`/`e2e`가 없다.
- repository scan 결과 `jest.config.*`, `vitest.config.*`, `playwright.config.*`, `tests/`, `__tests__/`가 없다.

영향: 블로그 RSS, JSON-LD, sitemap, 전화 CTA, 지도 링크, 모바일 메뉴 같은 출시 핵심 경로가 회귀돼도 빌드만으로는 잡히지 않는다.

추천 변경:
- `vitest` + `@testing-library/react` + `jsdom`을 추가한다.
- `playwright`는 전체 시각 QA가 아니라 핵심 smoke flow만 추가한다.
- `package.json`에 `test`, `test:watch`, `e2e`, `check`를 둔다.

### 2. [P1] 위치 섹션이 계획의 "네이버 지도"까지 구현하지 않음

근거:
- `src/app/components/section/Location.tsx:41-58`은 정적 배경과 마커 이미지, 좌표 텍스트만 보여준다.
- `package.json:18`에는 `react-naver-maps`가 있지만 현재 검색 결과상 실제 사용처가 없다.

영향: 사용자는 지도라고 기대하고 왔는데 실제 지도를 움직이거나 확대할 수 없다. 계획상 `/contact`의 "네이버 지도" 요구도 미완료다.

추천 변경:
- `NEXT_PUBLIC_NAVER_CLIENT_ID`가 있으면 실제 NaverMap을 렌더한다.
- 키가 없거나 SDK 실패 시 현재 정적 카드와 네이버 지도 외부 링크를 fallback으로 둔다.
- 지도 SDK 로딩 실패를 사용자에게 조용히 숨기지 말고 "네이버 지도에서 보기" CTA를 항상 제공한다.

### 3. [P1] RSS 파서가 정규식 기반이고 실패 경로가 검증되지 않음

근거:
- `src/lib/blog/rss.ts:39-69`는 XML decode, HTML strip, thumbnail 추출을 직접 정규식으로 처리한다.
- `src/lib/blog/rss.ts:87-109`는 `<item>`과 `<category>`를 정규식으로 파싱한다.
- `src/lib/blog/rss.ts:113-130`은 실패 시 fallback을 반환하지만 어떤 실패가 fallback으로 가는지 테스트가 없다.

영향: 네이버 RSS가 CDATA, 이미지 URL, 날짜 포맷, HTML 엔티티를 조금만 다르게 내보내도 홈/블로그 카드 품질이 조용히 떨어질 수 있다.

추천 변경:
- `parseRss`를 export하지 않고도 테스트 가능한 pure 함수로 분리한다.
- 가능하면 검증된 XML parser를 사용한다. 작은 프로젝트라면 정규식을 유지하되 fixture 테스트를 반드시 둔다.
- 실패 시 fallback 사용 여부를 구조적으로 드러내도록 `source: "rss" | "fallback"`을 반환하거나 로깅 가능한 결과 형태를 둔다.

### 4. [P2] SEO 구조화 데이터는 구현됐지만 검증 루틴이 없음

근거:
- `src/lib/seo.ts:11-43`은 `EducationalOrganization`/`LocalBusiness`를 반환한다.
- `src/lib/seo.ts:73-85`는 `FAQPage`, `src/app/blog/page.tsx:32-45`는 `Blog`를 반환한다.

영향: JSON-LD가 누락되거나 잘못된 schema 필드가 들어가도 타입/빌드가 잡지 못한다. SEO 리뉴얼 목표에 직접 닿는 영역이다.

추천 변경:
- JSON-LD 생성 함수 단위 테스트를 추가한다.
- `siteConfig.domain`, `telephone`, `address`, `geo`, `sameAs`, `openingHoursSpecification`이 포함되는지 assert한다.
- sitemap에 계획된 라우트가 모두 포함되는지 테스트한다.

## Code Quality Review

### 5. [P2] Footer와 전화 액션이 불필요하게 client 코드에 묶여 있음

근거:
- `src/app/components/layout/Footer.tsx:1`은 `"use client"`다.
- `src/app/components/layout/Footer.tsx:47-53`은 `li onClick`으로 전화 이동을 처리한다.
- `src/app/components/layout/Header.tsx:89-119`, `165-169`도 `location.href`를 사용한다.

영향: 전화 링크는 단순 anchor로 충분하다. client hydration이 늘고, 접근성도 `a href="tel:..."`보다 약하다.

추천 변경:
- Footer는 서버 컴포넌트로 바꾸고 전화는 `<a href={siteConfig.telHref}>`로 표현한다.
- Header는 HeroUI Navbar 때문에 client 유지가 가능하지만 전화 영역은 anchor로 바꾼다.

### 6. [P2] 레거시 컴포넌트와 의존성이 정리되지 않음

근거:
- `src/app/components/section/LandingPage.tsx`, `ComingSoon.tsx`는 현재 라우트에서 사용되지 않는다.
- `react-naver-maps`는 의존성에 있지만 실제 지도 구현에 사용되지 않는다.

영향: 이후 변경자가 "랜딩 자동 이동" 같은 이전 설계를 다시 만질 수 있고, 의존성의 의도가 흐려진다.

추천 변경:
- 실제 지도 구현을 하면 `react-naver-maps`를 사용한다.
- 지도 구현을 미루면 의존성과 레거시 컴포넌트를 제거한다.

### 7. [P2] 블로그 태그는 표시만 되고 필터가 없음

근거:
- `src/app/blog/page.tsx:21-22`에서 태그 목록을 만든다.
- `src/app/blog/page.tsx:64-74`에서 태그 chip을 표시하지만 클릭/필터 상태는 없다.

영향: 계획의 "카테고리/태그 필터"는 아직 사용자 기능이 아니다. SEO 보조 텍스트는 있지만 탐색 UX는 덜 완성됐다.

추천 변경:
- URL query 기반 서버 필터를 추가한다. 예: `/blog?tag=파닉스`.
- 검색 액션을 유지하려면 `/blog?q=`도 실제 필터로 연결한다.
- 필터를 이번 릴리스에서 뺄 거면 `RENEWAL_PLAN.md`의 범위를 수정한다.

## Test Review

현재 테스트 파일은 0개다. `yarn build`와 `yarn lint`는 통과했지만, 이는 smoke 검증이지 회귀 테스트가 아니다.

```txt
CODE PATHS                                             USER FLOWS
[+] src/config/site.ts                                 [+] Home visitor flow
  ├── [GAP] phone/domain/address constants               ├── [GAP] tel CTA opens phone link
  ├── [GAP] nav/program/topic route lists                ├── [GAP] blog CTA reaches /blog
  └── [GAP] FAQ/topic data used by pages                 └── [GAP] contact CTA reaches /contact

[+] src/lib/blog/rss.ts                                [+] Blog page flow
  ├── [GAP] [->UNIT] valid RSS item parse                ├── [GAP] [->E2E] latest posts render
  ├── [GAP] [->UNIT] CDATA + HTML stripping              ├── [GAP] fallback posts render on RSS fail
  ├── [GAP] [->UNIT] thumbnail extraction                └── [GAP] tag/search filter behavior
  ├── [GAP] [->UNIT] invalid date fallback
  └── [GAP] [->UNIT] network failure fallback

[+] src/lib/seo.ts                                     [+] Local search/SEO flow
  ├── [GAP] [->UNIT] organization JSON-LD                ├── [GAP] sitemap includes all planned routes
  ├── [GAP] [->UNIT] FAQ JSON-LD                         └── [GAP] robots points to canonical sitemap
  ├── [GAP] [->UNIT] breadcrumb JSON-LD
  └── [GAP] [->UNIT] navigation JSON-LD

[+] src/app/components/section/Location.tsx            [+] Contact/map flow
  ├── [GAP] [->UNIT] env key present: real map           ├── [GAP] [->E2E] map/link visible on /contact
  └── [GAP] [->UNIT] env key missing: fallback link      └── [GAP] SDK failure still gives Naver link

COVERAGE: 0/24 paths tested (0%)
QUALITY: build/lint smoke only
GAPS: 24 (2 E2E, 22 unit/integration)
```

### Required Tests

1. `src/lib/blog/rss.test.ts`: RSS fixture parse, CDATA, HTML strip, thumbnail, invalid date, empty item list, fetch failure fallback.
2. `src/lib/seo.test.ts`: organization, FAQ, breadcrumb, navigation JSON-LD contain required values.
3. `src/app/sitemap.test.ts`: `/`, nav routes, program routes, topic routes all included.
4. `src/app/components/section/Location.test.tsx`: Naver map enabled/fallback states.
5. `e2e/renewal-smoke.spec.ts`: home, blog, contact, mobile menu, tel/blog/map links.

## Performance Review

### 8. [P2] client component 비중이 높아 초기 JS가 커질 수 있음

근거:
- 빌드 결과 `/` First Load JS가 217 kB다.
- Header, Hero, Programs, Feature, CTA, Location, Carousel 등 주요 홈 섹션이 client component다.

영향: SEO 콘텐츠는 prerender되지만, 모바일 첫 인터랙션과 hydration 비용이 커진다.

추천 변경:
- 정적 섹션은 서버 컴포넌트로 바꾸고 motion이 필요한 wrapper만 client island로 분리한다.
- Footer는 즉시 서버화한다.
- Carousel은 이미지가 꼭 필요하면 유지하되, 홈에서 below-the-fold lazy loading을 확인한다.

## Failure Modes

| Codepath | Production failure | Test exists | Error handling | User sees |
| --- | --- | --- | --- | --- |
| Blog RSS fetch | 네이버 RSS timeout/500 | No | fallback 있음 | fallback 카드, 원인 모름 |
| RSS parse | CDATA/이미지/날짜 포맷 변경 | No | 부분 fallback | 카드 품질 저하 |
| Blog thumbnail | 외부 이미지 host 불일치 | No | fallback block 있음 | 썸네일 누락 |
| JSON-LD | 필수 LocalBusiness 필드 누락 | No | 없음 | 검색 노출 저하 |
| Sitemap | 신규 라우트 누락 | No | 없음 | 수집 지연 |
| Phone CTA | click handler hydration 전 클릭 | No | anchor 아님 | 전화 연결 실패 가능 |
| Naver map | SDK 키 없음 또는 로딩 실패 | No | 정적 카드만 있음 | 지도 UX 미완성 |
| Blog filter | 태그 클릭 기대 | No | 없음 | 탐색 불가 |

Critical gap: 테스트 인프라 부재 때문에 RSS/SEO/CTA/지도 실패가 출시 전 자동으로 잡히지 않는다.

## NOT In Scope

- CMS 도입: 현재는 네이버 RSS와 정적 콘텐츠로 충분하다.
- 자체 블로그 본문 복제: 저작권/운영 부담이 커서 원문 링크 중심을 유지한다.
- 비용/수강료 공개: 학원 운영 정책 확인이 필요하므로 이번 변경계획에서 제외한다.
- 네이버 서치어드바이저 제출 자동화: 구현 완료 후 수동 운영 작업으로 둔다.
- 전체 디자인 재작업: 현재 리뉴얼 방향은 유지하고 출시 안정성 보강에 집중한다.

## Worktree Parallelization Strategy

| Step | Modules touched | Depends on |
| --- | --- | --- |
| Test foundation | package scripts, test config | - |
| RSS hardening | lib/blog, blog components | Test foundation |
| SEO assertions | lib/seo, sitemap, robots | Test foundation |
| Map/contact | config, location/contact components | Test foundation |
| Blog filtering | blog page/components | RSS hardening |
| Client cleanup | layout/header/footer/sections | Test foundation |
| QA smoke | e2e, app routes | all above |

Parallel lanes:

- Lane A: Test foundation -> RSS hardening -> Blog filtering
- Lane B: Test foundation -> SEO assertions
- Lane C: Test foundation -> Map/contact
- Lane D: Test foundation -> Client cleanup
- Final Lane: QA smoke after A+B+C+D merge

Conflict flags:
- Lane A and Lane D may both touch blog card/layout styling. Coordinate before merging.
- Lane C and Lane D may both touch `Location.tsx`. Prefer C first if actual map is added.

## Implementation Tasks

Synthesized from this review's findings. Each task derives from a specific finding above.

- [ ] **T1 (P1, human: ~2h / CC: ~20min)** - Test foundation - Add Vitest/RTL/Playwright smoke test setup
  - Surfaced by: Architecture/Test Review - no test scripts or test files exist
  - Files: `package.json`, test config, `e2e/`
  - Verify: `yarn test`, `yarn e2e`, `yarn build`

- [ ] **T2 (P1, human: ~2h / CC: ~20min)** - Blog RSS - Harden RSS parsing and fallback behavior
  - Surfaced by: Architecture Review - regex parser has no failure coverage
  - Files: `src/lib/blog/rss.ts`, `src/lib/blog/rss.test.ts`
  - Verify: RSS fixture tests cover valid feed, CDATA, thumbnail, invalid date, empty feed, network failure

- [ ] **T3 (P1, human: ~3h / CC: ~30min)** - Contact map - Implement real Naver map with fallback
  - Surfaced by: Architecture Review - location card is not actual map
  - Files: `src/app/components/section/Location.tsx`, `src/config/site.ts`, map component/tests
  - Verify: with and without `NEXT_PUBLIC_NAVER_CLIENT_ID`, user always sees usable map/link

- [ ] **T4 (P2, human: ~1h / CC: ~10min)** - Lint DX - Replace deprecated `next lint`
  - Surfaced by: Verification - `yarn lint` warns `next lint` is deprecated
  - Files: `package.json`, `eslint.config.mjs`
  - Verify: `yarn lint` runs `eslint .` without deprecated warning

- [ ] **T5 (P2, human: ~1.5h / CC: ~15min)** - SEO - Add JSON-LD and sitemap assertions
  - Surfaced by: Architecture Review - SEO helpers exist but are untested
  - Files: `src/lib/seo.ts`, `src/app/sitemap.ts`, tests
  - Verify: tests assert LocalBusiness, FAQ, BreadcrumbList, Blog, sitemap routes

- [ ] **T6 (P2, human: ~1.5h / CC: ~15min)** - Blog UX - Make tags/search filter real or remove from scope
  - Surfaced by: Code Quality Review - tag chips are display-only
  - Files: `src/app/blog/page.tsx`, blog components/tests
  - Verify: `/blog?tag=...` and `/blog?q=...` filter posts, or plan explicitly defers filters

- [ ] **T7 (P2, human: ~1h / CC: ~10min)** - Client cleanup - Convert simple phone/footer flows to anchors/server components
  - Surfaced by: Code Quality/Performance Review - simple links use `location.href`
  - Files: `Header.tsx`, `Footer.tsx`
  - Verify: tel links work before hydration and Footer no longer needs `"use client"`

- [ ] **T8 (P3, human: ~45min / CC: ~8min)** - Cleanup - Remove stale legacy components or reconnect intentionally
  - Surfaced by: Code Quality Review - old landing/coming soon components remain unused
  - Files: `src/app/components/section/LandingPage.tsx`, `ComingSoon.tsx`, dependency list
  - Verify: `rg` shows no stale references, `yarn build` passes

## TODO Candidates

1. Add `TODOS.md` entry for Search Console/Naver Search Advisor submission.
   - Why: code cannot complete external indexing registration.
   - Recommendation: add as operational TODO after implementation lands.

2. Add `TODOS.md` entry for verifying the canonical Naver Place URL.
   - Why: current `placeUrl` is a search URL, not a confirmed place detail URL.
   - Recommendation: verify manually and replace before launch.

## Completion Summary

- Step 0: Scope Challenge - scope accepted as incremental hardening, no rewrite
- Architecture Review: 4 issues found
- Code Quality Review: 3 issues found
- Test Review: diagram produced, 24 gaps identified
- Performance Review: 1 issue found
- NOT in scope: written
- What already exists: written
- TODOS.md updates: 2 items proposed, not written automatically
- Failure modes: 1 critical gap flagged
- Outside voice: skipped
- Parallelization: 4 parallel lanes, 1 final sequential lane
- Lake Score: 5/8 recommendations choose complete option

