---
name: Luminous Learning
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#584048'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8b7078'
  outline-variant: '#dfbec7'
  surface-tint: '#b51169'
  primary: '#b20b67'
  on-primary: '#ffffff'
  primary-container: '#d33080'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb0cb'
  secondary: '#934465'
  on-secondary: '#ffffff'
  secondary-container: '#fc9cc1'
  on-secondary-container: '#792f50'
  tertiary: '#712ae2'
  on-tertiary: '#ffffff'
  tertiary-container: '#8a4cfc'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e4'
  primary-fixed-dim: '#ffb0cb'
  on-primary-fixed: '#3e0020'
  on-primary-fixed-variant: '#8d0050'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#ffb0cc'
  on-secondary-fixed: '#3e0021'
  on-secondary-fixed-variant: '#762d4d'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#d2bbff'
  on-tertiary-fixed: '#25005a'
  on-tertiary-fixed-variant: '#5a00c6'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

This design system is built on a "Soft-Tech" aesthetic—a fusion of modern SaaS precision with a warm, approachable educational atmosphere. The personality is encouraging, high-energy, and premium. It targets lifelong learners and students who value clarity and a stress-free digital environment.

The visual style utilizes **Glassmorphism** and **Vibrant Minimalism**. It features soft background gradients, high-transparency layers, and "radiant" focal points. The interface should feel like a physical object made of frosted glass catching a warm light source. 

**Emotional Response:**
- Inspired and motivated.
- Calm yet focused.
- Technologically advanced but human-centric.

## Colors

The palette is dominated by a vibrant "Electric Pink" used for primary conversion points. This is balanced by a soft, airy background to prevent visual fatigue.

- **Primary (#E94391):** Reserved for primary buttons, active states, and critical progress indicators.
- **Secondary (#FF9EC3):** Used for soft accents, hover states, and decorative background blurs.
- **Neutral:** A deep charcoal (#1A1A1A) is used for typography to maintain high legibility against the light background, while lighter grays (#F4F4F5) define subtle borders.
- **Background:** Always utilize a very subtle radial or diagonal gradient from pure white to a faint pink tint to add depth without clutter.

## Typography

The design system utilizes **Plus Jakarta Sans** across all levels to maintain a friendly yet professional tone. The geometric nature of the font complements the rounded UI elements.

- **Headlines:** Use heavy weights (700-800) with tight letter spacing for a modern, "impactful" look.
- **Body:** Standardize on 16px or 18px to ensure accessibility in educational contexts.
- **Labels:** Use uppercase with increased letter spacing for small metadata or overlines to distinguish them from body copy.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium "magazine" feel, while transitioning to a fluid stack for mobile. 

- **Focus:** Centered containers with generous vertical white space (80px+) between major sections.
- **Rhythm:** An 8px linear scale drives all padding and margins. 
- **Containment:** Use wide margins on desktop (auto-centering) to keep the core educational content within a readable scanning line.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Glows** rather than traditional heavy shadows.

- **Level 0 (Base):** The soft gradient background.
- **Level 1 (Cards):** Pure white surfaces with a very soft, high-spread shadow (0px 10px 30px rgba(233, 67, 145, 0.05)).
- **Level 2 (Active/Floating):** Primary elements use a "Pink Glow"—a drop shadow with a higher opacity of the primary color (0px 8px 20px rgba(233, 67, 145, 0.3)).
- **Glass Effect:** Use `backdrop-filter: blur(12px)` with a `70%` white opacity for navigation bars or overlays.

## Shapes

The shape language is extremely soft and approachable. 
- **Large Cards:** Use a 32px (`2rem`) radius to create a friendly, "bubbled" container.
- **Buttons & Inputs:** Follow a "Pill-shape" (full rounding) to encourage clicking and interaction.
- **Icons:** Should be encased in circular or highly rounded containers.

## Components

### Primary Buttons
Large, pill-shaped buttons with `24px 48px` padding. Apply the "Primary Glow" elevation. 
- **Animation:** Primary buttons should feature a subtle breathing animation (scale 1.0 to 1.02) and a shimmering glow effect on hover.

### Content Cards
Feature a 32px border radius. Use a subtle 1px border (#F4F4F5) to define the edge against the white background. Inside, use a consistent 32px padding for content.

### Input Fields
Pill-shaped with a light gray background (#F8F9FA). On focus, the border transitions to Primary Pink with a soft outer glow.

### Chips & Badges
Small, fully rounded elements. Use Secondary Pink backgrounds with Primary Pink text for high-contrast legibility in a soft format.

### Progress Bars
Thick (12px+) pill-shaped tracks. The "filled" portion should use the Primary Pink color, potentially with a subtle horizontal gradient to indicate movement/progress.