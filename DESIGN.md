---
name: Irene English Local Learning
source: Implemented Next.js project
colors:
  background: '#ffffff'
  foreground: '#171717'
  brand: '#e94391'
  brand-hover: '#d92d7f'
  brand-deep: '#b20b67'
  brand-soft: '#ffb0cb'
  brand-bright: '#ff89bc'
  surface-page: '#fcf9f8'
  surface-container-low: '#f6f3f2'
  surface-cream: '#fffdf7'
  surface-paper: '#fffefa'
  border-warm: '#eadfd3'
  text-muted-brand: '#8b7078'
  kakao: '#fee500'
  kakao-hover: '#f7dc00'
  kakao-text: '#191919'
  naver: '#03c75a'
  naver-hover: '#02b350'
typography:
  fontFamily: Noto Sans KR
  fallback: -apple-system, BlinkMacSystemFont, system-ui, sans-serif
  hero-home:
    fontSize: '1.7rem / 2.25rem / 2.35rem'
    fontWeight: '800'
    lineHeight: '1.14'
  hero-page:
    fontSize: '2rem / 3rem'
    fontWeight: '800'
    lineHeight: '1.18'
  section-title:
    fontSize: '1.875rem / 2.25rem'
    fontWeight: '800'
    lineHeight: '1.25'
  card-title:
    fontSize: '1.125rem / 1.25rem'
    fontWeight: '800'
    lineHeight: '1.35'
  body:
    fontSize: '1rem / 1.125rem'
    fontWeight: '400'
    lineHeight: '1.75rem / 2rem'
  eyebrow:
    fontSize: '0.875rem'
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.75rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  page-x-mobile: 20px
  page-x-tablet: 32px
  container-x-mobile: 16px
  container-x-tablet: 24px
  container-x-desktop: 32px
  section-padding-default: 80px
  section-padding-home: 96px
  card-gap: 24px
  feature-gap: 32px
motion:
  duration-fast: 160ms
  duration-standard: 300ms
  easing-standard: ease
---

## Brand & Style

This design system documents the implemented Irene English site: a local Korean English academy website for Samsung English Selena Irene Seokseong. The interface should feel trustworthy, bright, parent-friendly, and easy to act on. It is not a generic SaaS product page; it is a local education and consultation site where clarity, Korean readability, program credibility, and direct contact actions matter most.

The visual style combines warm educational surfaces, Electric Pink brand accents, Selena character imagery, local contact proof points, and restrained interactive polish. Glass and glow effects are allowed, but only as light support for headers, feature cards, and focal CTA moments.

**Emotional Response:**

- Confident that this is a real, nearby academy.
- Warmly guided rather than sold to.
- Clear about programs, location, contact methods, and next steps.
- Bright and motivating without becoming childish or visually noisy.

## Implementation Anchors

Use the implemented project as the source of truth.

- Global tokens live in `src/app/globals.css`.
- HeroUI is enabled through `src/app/hero.ts` and `CustomHeroUiProvider`.
- Layout rhythm is built with Tailwind utility classes and shared components.
- Main sections use `max-w-7xl`, `px-5 sm:px-8`, and inner `px-4 sm:px-6 lg:px-8`.
- Primary conversion actions are telephone consultation, Kakao consultation, and Naver booking.
- Korean UX copy should use the same concept names as `src/config/site.ts`.

## Colors

The palette is led by Electric Pink, supported by warm paper surfaces and a small set of branded third-party action colors.

- **Brand (`#e94391`):** Primary CTA backgrounds, active tags, focus accents, and key highlights.
- **Brand Hover (`#d92d7f`):** Hover state for primary pink actions.
- **Brand Deep (`#b20b67`):** Gradient starts, stronger icon color, and high-emphasis brand surfaces.
- **Brand Soft (`#ffb0cb`) and Brand Bright (`#ff89bc`):** Decorative washes, carousel backgrounds, and secondary warmth.
- **Background (`#ffffff`):** Default body background and clean content sections.
- **Surface Page (`#fcf9f8`):** Warm off-white section background for feature, FAQ, and local topic surfaces.
- **Surface Cream (`#fffdf7`):** Program and editorial sections that should feel like study paper.
- **Surface Paper (`#fffefa`):** Program cards and contained learning surfaces.
- **Border Warm (`#eadfd3`):** Warm card borders where gray would feel too cold.
- **Text:** Use `#171717`, Tailwind gray scales, and muted warm brand text. Avoid pure black for large bodies of UI.
- **Kakao (`#fee500`) and Naver (`#03c75a`):** Use only for their own branded actions and icons.

Do not introduce unrelated accent families. Sky and violet may appear as quiet supporting colors for grids, program categories, and illustrations, but pink remains the only primary accent family.

## Typography

Use **Noto Sans KR** for all UI and page content. The site is Korean-first, and line height, wrapping, and emphasis should be tuned for Korean readability.

- **Home Hero:** `text-[1.7rem] sm:text-[2.25rem] lg:text-[2.35rem]`, `font-extrabold`, `leading-[1.14]`.
- **Page Hero:** `text-[2rem] sm:text-5xl`, `font-extrabold`, `leading-[1.18]`.
- **Section Titles:** `text-3xl sm:text-4xl`, `font-extrabold`.
- **Card Titles:** `text-lg sm:text-xl` or `text-2xl` for program cards, `font-extrabold`.
- **Body:** `text-base sm:text-lg`, `leading-7 sm:leading-8`.
- **Eyebrows:** `text-sm font-bold text-pink-600`, short uppercase English labels such as `FEATURE`, `PROGRAM`, `LOCATION`.

Use `break-keep` on Korean headlines and important descriptions so Korean phrases do not wrap awkwardly. Avoid viewport-scaled type. Keep letter spacing at the browser default unless a specific component has been visually checked.

## Layout & Spacing

The layout uses a generous but practical local-service site rhythm.

- **Containers:** Use `max-w-7xl` with `mx-auto`.
- **Outer Page Padding:** Use `px-5 sm:px-8` on sections.
- **Inner Container Padding:** Use `px-4 sm:px-6 lg:px-8`.
- **Standard Sections:** Use `py-20` for secondary pages and `py-24` for major home sections.
- **Hero:** Home hero uses a shorter top rhythm to account for the fixed 80px header; page heroes use `py-20`.
- **Grids:** Use `gap-6` for dense card grids and `gap-8` for feature cards or mixed text/media layouts.
- **Content Width:** Keep long descriptions around `max-w-2xl` to `max-w-4xl`.

Alternate section backgrounds between white, `surface-page`, and `surface-cream` to create scan rhythm. Avoid nesting page sections inside decorative cards; cards should represent individual repeated items, grouped details, forms, maps, and CTAs.

## Elevation & Depth

Depth should feel soft and local-service trustworthy rather than glossy.

- **Header:** `bg-white/80`, `border-white/60`, `shadow-sm`, `backdrop-blur-xl`.
- **Standard Cards:** Use light borders such as `border-pink-100`, `border-border-warm`, or `border-white/80`.
- **Soft Shadow:** Use `shadow-lg shadow-pink-900/5` or `shadow-pink-900/10`.
- **Program Card Shadow:** `0 16px 34px rgba(31,41,55,0.08)`.
- **Primary CTA Shadow:** Use `shadow-pink-500/20` to `shadow-pink-500/25`.
- **Naver/Kakao Shadows:** Only use their brand color at low opacity for related branded actions.

Avoid heavy drop shadows, high-opacity glows, and decorative depth that competes with content.

## Shapes

The implemented shape language is rounded and friendly, but not uniformly pill-shaped.

- **Buttons:** Use `rounded-xl` for most page CTAs and `rounded-full` for home hero CTAs or compact floating actions.
- **Feature Cards and Media:** Use `rounded-3xl` when the surface is visual, friendly, or highly promotional.
- **Grouped Surfaces:** Use `rounded-2xl` for maps, filter panels, FAQ groups, and local topic blocks.
- **Small Cards and Inputs:** Use `rounded-xl`.
- **Icons and Badges:** Use `rounded-full` for checks, chips, and circular icon containers.

Do not force all large cards to 32px radius. Match radius to component density and established local usage.

## Components

### Header

The header is fixed at the top with an 80px height, a translucent white surface, a subtle bottom border, and a strong logo presence. Desktop navigation uses bold text with pink hover states. Mobile navigation opens into a white menu with large touch targets.

The telephone consultation button is a primary conversion element. Keep it compact on desktop and touch-friendly on mobile.

### Hero Sections

Home hero should lead with the learning-system promise, direct consultation CTAs, and Selena character imagery. Use a calm warm background, not a marketing split-card hero. Page heroes use a soft white-to-pink/blue gradient and concise Korean copy.

### Primary Buttons

Primary actions should be easy to scan and at least 44px tall.

- Home primary CTA: `h-12 rounded-full bg-pink-600 px-7 text-base font-bold`.
- Page CTA: `h-12 rounded-xl bg-pink-600 px-5/6 text-sm or base font-bold`.
- Hover: darken to pink-700 or `brand-hover`.
- Focus: use a visible 4px ring with pink at low opacity.

Do not use breathing animations or shimmer effects by default. Motion should support feedback, not call attention to itself.

### Secondary Buttons

Secondary actions usually use a white surface, pink border, and pink or charcoal text. Branded secondary actions may use Kakao yellow or Naver green only when the action opens that channel.

### Content Cards

Cards use warm borders, white or paper surfaces, and light pink shadows.

- Feature cards: `rounded-3xl border border-white/80 bg-white/75 p-5 sm:p-6 shadow-lg shadow-pink-900/5 backdrop-blur`.
- Program cards: paper surface, warm border, notebook-line background, and clear feature checklist.
- Blog cards: `rounded-2xl border border-pink-100 bg-white shadow-lg shadow-pink-900/5`.
- Local topic cards: `rounded-2xl` grouped containers with `rounded-xl` internal chips or rows.

### Inputs & Filters

Inputs should use `rounded-xl`, a white background, light pink border, and clear focus border. Search/filter surfaces may use a soft pink background at low opacity.

### Chips & Badges

Use `rounded-full` or HeroUI `Chip`. Pink chips are for site-owned states and content tags. Kakao/Naver colors are reserved for their respective brands.

### Location

The map section is a contained `rounded-2xl` grid with a real Naver map when available and a designed static fallback when not. The address panel should prioritize exact location, nearby landmarks, and the Naver map action.

### Blog & Local SEO Pages

Blog and topic pages should keep Korean text easy to scan. Use cards, tags, topic sections, and local proof points rather than decorative effects. Local pages should keep nearby school/station terms consistent with `siteConfig.keywords`.

## Motion

Motion uses `motion/react` and should be subtle.

- Hover lifts may use `y: -6` or `y: -8` on cards.
- Button hover may use a color change and occasional `translateY(-1px)`.
- Decorative background blobs may move slowly over 6-7 seconds.
- Respect `prefers-reduced-motion` through the global CSS reduction rule.

Avoid generic fade-only decoration, shimmer loops, and animation that delays task completion.

## Accessibility & Interaction

- Every interactive target should be at least 44x44px.
- Use clear `focus-visible` rings for keyboard users.
- Keep Korean text from overflowing using `break-keep`, stable widths, and responsive wrapping.
- Do not place important text over busy imagery.
- Buttons should name the action directly: `전화상담하기`, `네이버 예약`, `카카오톡 상담`, `블로그 더 보기`.
- Empty, loading, error, success, disabled, hover, focus, and mobile states should be designed when a component can enter those states.

## StyleSeed Operating Rules for Future UI Work

Source: https://styleseed-demo.vercel.app/llms.txt and the linked full context at https://styleseed-demo.vercel.app/llms-full.txt.

Apply these rules whenever Codex creates or changes UI in this project. They should refine the implemented Irene English direction, not replace it.

- Use one primary accent family. Irene English's accent is Electric Pink; violet and sky may stay as quiet supporting tones, and Kakao/Naver colors are allowed only for their branded actions.
- Prefer semantic project tokens, shared classes, and HeroUI variants over one-off component styling. Avoid hardcoded hex values in React components except for required third-party brand colors.
- Avoid pure black and heavy elevation. Text should use the existing charcoal/foreground scale, and shadows should stay soft enough to feel like ambient depth rather than decoration.
- Keep typography explicit and context-driven. Use stable text sizes for headings, body, labels, buttons, dates, and metrics; avoid viewport-scaled text unless a responsive hero lockup truly needs it and has been visually checked.
- Keep spacing rhythmic. Use the project 8px scale, 24px gutters, and generous section spacing; do not introduce arbitrary near-miss values for page padding or card gaps.
- Use cards and contained surfaces for grouped information, repeated items, forms, maps, and CTAs. Do not turn whole page sections into nested decorative cards; section rhythm should come from layout, contrast, and content hierarchy.
- Do not repeat the same section composition back-to-back. Alternate dense lists, editorial text, proof points, CTAs, media, and location/contact surfaces to create scan rhythm.
- Make every interactive target at least 44x44px. Buttons must have clear hover/focus states, and focus-visible treatment must be obvious enough for keyboard users.
- Use calm, human Korean UX writing. Button labels should name the action, errors should explain the fix, empty states should invite the next step, and one concept should keep one name across the site.
- Every UI state needs a designed state: loading, empty, error, success, disabled, hover, focus, and mobile wrapping where relevant.
- Use motion intentionally and consistently. Prefer subtle lift, color, and slow decorative motion; avoid overactive glow effects or motion that slows the user's task.
- Before calling UI work done, review against StyleSeed's visual/verbal judgment: accent discipline, hierarchy, spacing, radius/shadow coherence, text fit, accessibility, and Korean copy quality.
