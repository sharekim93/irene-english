# 삼성영어 아이린 석성 프로젝트 리뉴얼 계획

확인일: 2026-06-05  
기준 문서: `DESIGN.md`, `/Users/sksya/Downloads/project_brief_irene_suksung_branch.md`  
참고 사이트: `https://samsungenglish-dbbh.kr/`, `https://www.samsungenglish.com/`

## 1. 리뉴얼 목표

현재 프로젝트를 단순 랜딩/소개 페이지에서 지역 검색에 강한 삼성영어 셀레나 아이린 석성 공식형 사이트로 재구성한다.

- 메뉴와 정보 구조는 `samsungenglish-dbbh.kr`를 기준으로 하되, 선생님 소개 메뉴는 제외한다.
- 프로그램 및 셀레나 소개는 삼성영어셀레나 공식 사이트의 커리큘럼/브랜드 메시지를 참고해 우리 문장으로 재작성한다.
- 기존 프로젝트의 로고, 연락처, 주소, 지도 자산을 유지한다.
- `동백 백현`, `동백백현학원`, `동백호수교실`, `세라 원장`, `백현초`, `동백중앙로 358-12` 등 타 지점 고유 키워드는 모두 `삼성영어 아이린 석성` 및 우리 지역/주소 정보로 치환한다.
- SEO 및 GEO 최적화를 통해 `석성초 영어학원`, `동백역 영어학원`, `초당초 영어학원`, `어은목마을 영어학원`, `삼성영어셀레나 아이린석성` 검색 노출을 강화한다.
- 기존 네이버 블로그 `https://blog.naver.com/da_num` 최신 글을 사이트 내 카드로 연동한다.

## 2. 현재 프로젝트 진단

### 기술 구조

- Next.js 15 App Router, React 19, Tailwind CSS 4, HeroUI, `react-naver-maps`, `react-slick`, `motion` 기반이다.
- 실제 라우트는 현재 `/` 한 개뿐이며, `src/app/page.tsx`가 클라이언트 컴포넌트로 초기 랜딩 선택 화면을 먼저 보여준다.
- 본문 구성은 `Header -> CarouselSection -> FeatureSection -> CTASection -> Location -> Footer`이며, `ProgramSection`, `HeroSection` 등 일부 컴포넌트는 존재하지만 미사용 상태다.

### 현재 유지할 자산

- 로고: `src/images/logo.png`, `src/images/logo.webp`
- OG 이미지: `public/og-image.webp`
- 블로그: `https://blog.naver.com/da_num`
- 주소: `경기도 용인시 기흥구 동백2로 9 어은목마을 벽산 블루밍 아파트 상가동 105호`
- 지도 좌표: `37.2674246, 127.154662`
- 지도 마커: `src/images/map_marker_selena.png`

### 확정 정보

- 대표 연락처는 `010-3421-4383`으로 통일한다.
- 지도 팝업, 헤더, 푸터, CTA, 구조화 데이터의 전화번호를 모두 같은 번호로 맞춘다.
- 수업 시간은 `13:00 ~ 18:00`으로 표기한다.

### SEO/GEO 리스크

- 현재 본문이 버튼 클릭 후 노출되어 크롤러가 주요 콘텐츠를 충분히 읽지 못할 수 있다.
- JSON-LD는 `WebSite`만 있고 `LocalBusiness`, `EducationalOrganization`, `PostalAddress`, `GeoCoordinates`, `openingHours`, `telephone`, `sameAs`가 없다.
- `https://www.irene-english.com`과 `https://irene-english.com`이 혼재되어 canonical 통일이 필요하다.
- sitemap은 루트 1개만 등록되어 있어 향후 상세 페이지/블로그/주제 페이지가 반영되지 않는다.

## 3. 정보 구조 및 메뉴

기준 사이트 메뉴를 따르되 선생님 소개를 제거한다.

### 1차 메뉴

1. 학원소개: `/about`
2. 프로그램: `/programs`
3. 학원 특징: `/feature`
4. FAQ: `/faq`
5. 블로그: `/blog`
6. 오시는 길: `/contact`

셀레나 소개는 독립 메뉴에서 제외하고, 홈과 프로그램 상세 페이지 안의 콘텐츠 섹션으로 통합한다.

### 프로그램 하위 페이지

1. Hey! Hazel: `/programs/hey-hazel`
2. 300만 문장 만들기: `/programs/300m-sentences`
3. PREP31: `/programs/prep31`

### SEO 주제 페이지

검색 유입을 위한 evergreen 페이지를 2차 단계에서 추가한다.

1. 파닉스 시작: `/topics/phonics`
2. 청크 학습: `/topics/chunk-learning`
3. 초등 첫 영어: `/topics/first-english`
4. 중등 내신/수능 대비: `/topics/middle-school`
5. 석성초/초당초/동백역 지역 영어학원 안내: `/topics/local-english`

## 4. 홈 화면 섹션 계획

### Hero

- H1: `삼성영어 아이린 석성`
- 보조 문구: `파닉스부터 중등 영어까지, 매일 말하고 확인하는 1:1 관리형 영어`
- CTA:
  - `레벨 진단 상담`
  - `블로그 보기`
  - `오시는 길`
- 첫 화면에 로고와 셀레나 캐릭터/현재 보유 이미지를 사용한다.
- 기존 `DESIGN.md`의 Luminous Learning 방향을 유지하되, 카드 남용 대신 실제 정보 밀도와 지역 신뢰를 높인다.

### 신뢰 지표

기준 사이트의 숫자형 신뢰 지표 패턴을 우리 정보로 재구성한다.

- `1:1` 개별 맞춤 수업
- `주 5회` 매일 영어 습관
- `AI 셀레나` 매일 말하기 루틴
- `13:00 ~ 18:00` 수업 시간
- `석성초/초당초/동백역` 생활권 접근성

개원 연도와 재원생 수는 신뢰 지표에서 제외한다.

### 프로그램 요약

3개 카드로 구성한다.

- Hey! Hazel: 유아/예비초/초등 저학년, Chant/Song/Game 기반 흥미와 기초 음가
- 300만 문장 만들기: 초등~중등 핵심 정규, 청크 학습, 4대 영역 반복 훈련
- PREP31: 중등 상위/내신/수능 대비, 원서·문법·어휘·평가 루틴

각 카드는 대상, 목표, 수업 방식, 상세 보기 CTA를 포함한다.

### 셀레나 소개

공식 사이트의 핵심 메시지를 우리 문장으로 재작성한다.

- AI 원어민 셀레나 선생님과 매일 말하기
- 발음/억양/말하기 피드백
- 교실 선생님 + T-BOX + AI 셀레나 3중 관리
- 녹음/학습 기록/리포트 기반 관리

성과 보장 문구보다 `루틴`, `피드백`, `관리 방식` 중심으로 표현한다.

### 아이린 석성만의 특징

선생님 소개 메뉴는 제외하지만, 홈/학원소개 안에 신뢰 요소는 짧게 반영한다.

- 원장 직강 1:1 개별 맞춤 수업
- 분당 영어유치원/어학원 10년 경력
- 영어도서관 운영
- Creative Writing 프로그램

### 블로그 최신 글

- 홈에는 최신 3개 글 카드 노출
- `/blog`에는 최신 10~20개 목록 노출
- 카드 구성: 날짜, 제목, 요약, 태그, 썸네일, 원문 보기
- 원문 링크는 `fromRss=true&trackingCode=rss`를 유지한다.

### CTA 및 위치

- CTA 문구는 `지금 시작하세요`보다 `레벨 진단 후 맞춤 로드맵을 안내해 드립니다`로 전환 중심 설계
- 전화, 네이버 블로그, 네이버 플레이스/지도, 주소, 운영시간, 주차/방문 안내를 함께 제공

## 5. 페이지별 콘텐츠 계획

### `/about` 학원소개

목표: 지역 학부모가 "어떤 철학으로 관리하는 곳인지" 빠르게 이해하도록 한다.

구성:

1. 삼성영어 아이린 석성 소개
2. 운영 철학: 매일 영어, 1:1 맞춤, 결과보다 루틴과 피드백
3. 대상 학생: 예비초, 석성초/초당초 초등, 초당중 등 중등
4. 수업 방식: 레벨 진단 -> 개별 진도 -> 매일 루틴 -> 피드백/상담
5. CTA: 상담 전화, 블로그, 오시는 길

### 셀레나 소개 콘텐츠

독립 페이지와 메뉴는 만들지 않고, 홈과 프로그램 페이지 안에서 AI 수업이 "태블릿만 보는 수업"이 아니라 선생님 관리와 결합된 말하기 루틴임을 설명한다.

구성:

1. AI 원어민 셀레나 선생님 소개
2. 하루 수업 흐름: 오늘 배운 표현 -> 말하기 -> 피드백 -> 기록
3. 3중 관리: 교실 선생님, T-BOX, AI 셀레나
4. 학부모 안심 포인트: 녹음, 리포트, 피드백, 반복 학습
5. FAQ 연결

### `/programs`

목표: 학년/수준별 프로그램 선택을 돕는다.

구성:

1. 전체 로드맵: Hey! Hazel -> Pre-level -> Basic -> Intermediate -> Advanced -> PREP31
2. 프로그램 비교 카드
3. "우리 아이는 어디부터 시작할까?" Evaluation Test CTA
4. 상세 페이지 연결

### `/programs/hey-hazel`

핵심 메시지:

- 영어 시작은 흥미와 기초 음가부터
- Chant, Song, Game 등 놀이 활동
- Hazel 이후 삼성영어셀레나 Pre-level로 연결

주의:

- 공식 문구를 그대로 길게 복사하지 말고, 프로그램명과 구조만 참고해 우리 문장으로 작성한다.

### `/programs/300m-sentences`

핵심 메시지:

- 청크 단위로 문장을 이해하고 직접 만들어 보는 핵심 정규 과정
- 단어, 듣기, 읽기, 말하기, 쓰기, 평가가 반복되는 4대 영역 루틴
- Pre-level, Basic, Intermediate, Advanced 단계 설명

### `/programs/prep31`

핵심 메시지:

- 중등 최상위/내신/수능 대비
- DK 원서, 문법, 어휘, 성취도 평가 등 고급 루틴
- 결과 보장보다 `수능 1등급 수준을 목표로 한 훈련`으로 표현한다.

### `/feature`

목표: 기준 사이트의 `학원 특징`을 아이린 석성 버전으로 재구성한다.

구성:

1. 1:1 개별 맞춤
2. 매일 루틴과 학습 습관
3. AI 셀레나 + 선생님 관리
4. 학부모 커뮤니케이션/블로그 소식
5. 지역 접근성

### `/faq`

FAQ는 구조화 데이터까지 함께 설계한다.

분류:

- 등록/상담: 레벨테스트, 상담 예약, 시작 학년
- 수업 방식: 1:1 개별 진도, AI 수업, 태블릿 비중
- 숙제/관리: 숙제량, 리포트, 결석 보강
- 중등/내신: 내신 대비, 문법/독해/어휘
- 비용/운영: 수강료, 운영 시간, 주차

### `/blog`

네이버 블로그 최신 글을 내부 목록 페이지처럼 보여주되, 원문은 네이버 블로그로 보낸다.

구성:

1. 최신 글 목록
2. 카테고리/태그 필터
3. 글 제목/요약/썸네일
4. 원문 보기
5. SEO 보강용 내부 설명 문단: "아이린 석성 학원 소식과 영어 학습 가이드"

### `/contact`

구성:

1. 전화 상담 CTA
2. 주소
3. 수업 시간: `13:00 ~ 18:00`
4. 네이버 지도
5. 네이버 플레이스/블로그 외부 링크
6. 주차/방문 안내

## 6. 키워드 치환 규칙

외부 콘텐츠 참고 시 아래 치환 규칙을 적용한다.

| 원본 키워드 | 치환/처리 |
| --- | --- |
| 삼성영어셀레나 동백백현학원 | 삼성영어 아이린 석성 |
| 동백백현학원 | 아이린 석성 |
| 동백호수교실 | 삭제 또는 아이린 석성 운영 맥락으로 재작성 |
| 세라 원장 | 삭제. 선생님 소개 메뉴 제외 |
| 동백초, 백현초, 용인 백현초 | 석성초, 초당초, 초당중 등 우리 지역 키워드로 교체 |
| 경기 용인시 기흥구 동백중앙로 358-12 유타운상가 203호 | 경기도 용인시 기흥구 동백2로 9 어은목마을 벽산 블루밍 아파트 상가동 105호 |
| 010-6738-4654 | `010-3421-4383`으로 교체 |
| samsungenglish_hosoo | da_num |
| 네이버 플레이스/구글 지도 타 지점 링크 | 우리 지점 링크로 교체 또는 확인 전 미노출 |

`삼성영어셀레나`, `셀레나`, `Hey! Hazel`, `PREP31`, `T-BOX`, `TOECA`, `DK`는 브랜드/프로그램명으로 유지하되 임의 변형하지 않는다.

## 7. SEO 및 GEO 최적화 계획

### 기본 메타데이터

- 도메인을 `https://irene-english.com` 또는 `https://www.irene-english.com` 중 하나로 통일한다.
- `metadataBase`, `alternates.canonical`, OpenGraph URL, sitemap, robots를 같은 도메인으로 맞춘다.
- 페이지별 `title`, `description`, `openGraph`, `keywords`를 분리한다.

### 주요 검색 키워드

- 브랜드: `삼성영어 아이린 석성`, `삼성영어셀레나 아이린석성`, `아이린 석성 교습소`
- 지역: `석성초 영어학원`, `초당초 영어학원`, `초당중 영어`, `동백역 영어학원`, `어은목마을 영어학원`, `용인 동백 영어학원`
- 프로그램: `동백 파닉스`, `유아 영어`, `예비초 영어`, `초등 영어`, `중등 영어`, `청크 학습`, `PREP31`, `Hey Hazel`
- 문제 해결형: `알파벳만 아는 7세 영어`, `초등 첫 영어학원`, `고학년 영어 시작`, `중등 내신 영어`

### 구조화 데이터

루트와 주요 페이지에 JSON-LD를 추가한다.

- `EducationalOrganization` 또는 `LocalBusiness`
- `WebSite`
- `BreadcrumbList`
- `FAQPage`
- 블로그 목록에는 `Blog` 또는 `ItemList`

필수 필드:

- `name`: 삼성영어 아이린 석성
- `url`: canonical 도메인
- `telephone`: 최종 대표 연락처
- `address`: 실제 주소
- `geo`: 위도/경도
- `openingHoursSpecification`: `13:00 ~ 18:00`
- `sameAs`: 네이버 블로그, 네이버 플레이스

### 콘텐츠 SEO

- 각 페이지 H1은 하나만 사용한다.
- 지역명과 프로그램명을 자연스럽게 본문 상단 300자 안에 포함한다.
- 이미지 alt는 `삼성영어 아이린 석성 로고`, `AI 셀레나 선생님`, `석성초 영어학원 위치`처럼 검색 의도를 반영한다.
- FAQ는 실제 상담 질문 중심으로 작성한다.
- `/topics/*` 페이지는 블로그와 내부 링크를 연결해 검색 체류 시간을 늘린다.

### GEO 최적화

GEO는 생성형 검색/AI 요약에 잘 읽히는 구조로 설계한다.

- 페이지 상단에 학원명, 지역, 대상, 수업 방식, 연락처를 명확히 배치한다.
- `학원 기본 정보` 섹션을 표 형태로 제공한다.
- 프로그램별 대상/목표/방식을 명확한 bullet과 표로 정리한다.
- 출처가 있는 공식 수상/성과 문구는 확인일과 출처 링크를 함께 둔다.
- 블로그 최신 글과 FAQ를 정기 업데이트해 freshness 신호를 만든다.

## 8. 네이버 블로그 연동 계획

### 권장 방식

네이버 블로그 콘텐츠는 RSS만 사용한다.

- 현재 블로그 RSS 확인 URL: `https://rss.blog.naver.com/da_num.xml`
- RSS에서 최신 글, 제목, 링크, 작성일, 설명, 태그, 썸네일을 가져올 수 있다.
- 기준 사이트도 원문 링크에 `fromRss=true&trackingCode=rss`를 사용하므로 유사한 방식으로 보인다.
- 네이버 검색 API는 사용하지 않는다.

### 구현 설계

#### 환경 변수

```bash
NEXT_PUBLIC_NAVER_CLIENT_ID=
```

- `NEXT_PUBLIC_NAVER_CLIENT_ID`는 현재 지도 SDK용 공개 키로만 사용한다.
- 블로그 RSS 연동에는 별도 네이버 API 키가 필요 없다.

#### 파일 구조

```txt
src/app/api/blog/route.ts
src/lib/blog/rss.ts
src/lib/blog/normalize.ts
src/app/blog/page.tsx
src/app/components/section/BlogPreviewSection.tsx
src/app/components/blog/BlogCard.tsx
```

#### 데이터 흐름

1. 서버에서 RSS fetch
2. XML 파싱
3. HTML 제거 및 요약 정리
4. description 안 첫 이미지 추출
5. 태그 파싱
6. 10~20분 단위 캐시 또는 Next `revalidate`
7. RSS 실패 시 수동 fallback 데이터 3개 노출

#### 캐시 전략

- 홈: 최신 3개, `revalidate: 1800`
- 블로그 페이지: 최신 20개, `revalidate: 1800`
- API route 응답 헤더: `Cache-Control: public, s-maxage=1800, stale-while-revalidate=86400`

### 운영상 주의

- 블로그 RSS는 공개 피드이므로 특정 블로그 최신 글 연동에 적합하다.
- RSS 요청이 실패할 때도 홈 레이아웃이 깨지지 않도록 수동 fallback 콘텐츠를 준비한다.
- 본문 전체 복제는 피하고 제목/요약/썸네일/원문 링크 중심으로 보여준다.

## 9. 디자인 적용 계획

`DESIGN.md`의 Luminous Learning을 유지하되 교육기관 사이트에 맞게 정보 밀도를 높인다.

### 유지할 디자인 방향

- Selena Pink 계열 포인트
- 밝은 배경, 넉넉한 여백
- 부드러운 카드와 미세한 그림자
- 로고와 셀레나 캐릭터 중심
- CTA는 분명한 핑크 계열 버튼

### 조정할 부분

- 히어로를 단순 버튼 랜딩이 아니라 실제 홈 콘텐츠로 변경
- 카드 안에 카드가 중첩되지 않도록 섹션을 full-width band로 구성
- 메뉴, CTA, 전화 버튼은 고정 크기와 아이콘 기반으로 정리
- 모바일에서 긴 학교명/지역 키워드가 버튼 안에서 넘치지 않도록 줄바꿈과 max-width 관리
- 한 가지 핑크톤만 반복하지 않고 흰색, 차콜, 연한 민트/블루/라벤더 보조색을 제한적으로 사용

## 10. 구현 단계

### Phase 1. 기반 정리

- 대표 연락처 `010-3421-4383` 전역 상수화
- 도메인 canonical 결정
- `src/config/site.ts` 생성: 학원명, 전화, 주소, 좌표, 블로그 URL, 수업 시간, SEO 키워드
- `page.tsx`의 클릭 후 본문 노출 구조 제거
- 홈을 서버 렌더링 가능한 실제 콘텐츠 페이지로 변경

### Phase 2. IA 및 라우팅

- `/about`, `/programs`, `/programs/*`, `/feature`, `/faq`, `/blog`, `/contact` App Router 페이지 생성
- Header 메뉴 활성화
- Footer 메뉴/바로가기/연락처 정리
- Breadcrumb 적용

### Phase 3. 콘텐츠 구현

- 홈 섹션 구현
- 프로그램 카드 및 상세 페이지 구현
- 셀레나 소개 섹션 구현
- FAQ 작성 및 구조화 데이터 연결
- 치환 규칙에 따라 외부 참고 콘텐츠 재작성

### Phase 4. 블로그 연동

- RSS 파서 구현
- API route 또는 서버 fetch 구현
- 홈 최신 3개, `/blog` 최신 목록 구현
- RSS 실패 시 수동 fallback UI 구현

### Phase 5. SEO/GEO

- `layout.tsx` metadata 정리
- 페이지별 metadata 생성
- canonical, OpenGraph, Twitter, robots, sitemap 정비
- `LocalBusiness`/`EducationalOrganization`, `FAQPage`, `BreadcrumbList`, `Blog/ItemList` JSON-LD 추가
- 이미지 alt와 heading 계층 점검

### Phase 6. QA 및 배포

- `yarn build`
- `yarn lint` 또는 Next 15 환경에 맞는 lint script 정리
- 모바일/데스크톱 Playwright 확인
- 네이버 서치어드바이저 등록/재수집 요청
- Google Search Console sitemap 제출
- 네이버 블로그 RSS 연동 정상성 확인

## 11. 우선순위 작업 목록

1. `src/config/site.ts` 생성 및 연락처/주소/도메인 통일
2. 홈을 실제 콘텐츠 페이지로 개편
3. Header 메뉴 구성
4. 프로그램/셀레나/FAQ 핵심 콘텐츠 구현
5. 블로그 RSS 연동
6. SEO/GEO 구조화 데이터 추가
7. sitemap/robots/canonical 정리
8. 상세 페이지와 topics 페이지 확장

## 12. 참고 출처

- 삼성영어셀레나 동백백현학원: https://samsungenglish-dbbh.kr/
- 삼성영어셀레나 공식 커리큘럼: https://www.samsungenglish.com/s/program/curriculum
- 삼성영어셀레나 Hey! Hazel: https://www.samsungenglish.com/s/program/hazel
- 삼성영어셀레나 브랜드 소개: https://www.samsungenglish.com/s/brand/brand
- 네이버 지도 API Client ID 안내: https://navermaps.github.io/maps.js.en/docs/tutorial-1-Getting-Client-ID.html
- 아이린 석성 블로그 RSS: https://rss.blog.naver.com/da_num.xml

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | - | Not run |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | - | Not run |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 1 | ISSUES_OPEN | 8 issues, 1 critical gap. See `RENEWAL_CHANGE_PLAN.md` |
| Design Review | `/plan-design-review` | UI/UX gaps | 0 | - | Not run |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | - | Not run |

- **UNRESOLVED:** Test foundation, real Naver map, RSS parser hardening, lint migration, blog filtering, SEO assertions, client cleanup, stale component cleanup.
- **VERDICT:** ENG NOT CLEARED - implement `RENEWAL_CHANGE_PLAN.md` before launch.
