# FabrikTakt Redesign Specification
## "Industrial Pulse" Design System

**Version**: 1.0
**Date**: 2025-12-26
**Status**: Ready for Implementation

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Visual System](#2-visual-system)
3. [Hero Section](#3-hero-section)
4. [Navigation & Layout](#4-navigation--layout)
5. [Glassmorphism & Image Treatment](#5-glassmorphism--image-treatment)
6. [Page Structure & Sections](#6-page-structure--sections)
7. [Animation & Interaction](#7-animation--interaction)
8. [Internationalization & RTL](#8-internationalization--rtl)
9. [Technical Implementation](#9-technical-implementation)
10. [Asset Inventory](#10-asset-inventory)
11. [Success Criteria](#11-success-criteria)

---

## 1. Design Philosophy

### 1.1 The "Industrial Pulse" Concept

FabrikTakt's redesign centers on one visual metaphor: **the digital pulse running through traditional manufacturing**. This isn't decorative—it's the product promise made visible.

**Core Idea**: We visualize FabrikTakt's promise of bringing precision intelligence to traditional manufacturing floors.

### 1.2 Three-Level Impact

| Level | Timeframe | User Experience | Design Goal |
|-------|-----------|-----------------|-------------|
| **Instant** | 0-2s | Sees life, movement | Cyan pulse animates. Subconscious: "This is alive." |
| **Recognition** | 2-10s | Understanding | "They bring intelligence to manufacturing." |
| **Memory** | Post-visit | Brand recall | Pulse = FabrikTakt. Symbol becomes name becomes promise. |

### 1.3 Jony Ive Principles

- **Inevitable simplicity**: Every element earns its place. If it doesn't serve the pulse metaphor, remove it.
- **Negative space is sacred**: Factory images breathe. Text has room. The pulse has space to flow.
- **Depth through restraint**: One accent color (cyan), one typeface family. Confidence through limitation.
- **Honesty in materials**: Real factory photography, not stock. Real manufacturing context, not generic tech.

### 1.4 Strategic Positioning

**Manufacturing-First, Agency-Ready**

Primary audience: German Mittelstand manufacturers seeking AI/digital transformation.
Secondary audience: Enterprise clients in adjacent industries impressed by manufacturing expertise.

We show factory floors wrapped in premium glass. Technical depth presented with design sophistication.

### 1.5 Taglines

| Language | Tagline | Notes |
|----------|---------|-------|
| **German** | Der Puls Ihrer Produktion. | Primary market, formal "Ihrer" |
| **English** | The Pulse of Your Production. | Direct translation, maintains rhythm |
| **Persian** | نبض تولید شما. | RTL, maintains meaning |

---

## 2. Visual System

### 2.1 Color Palette

#### Primary Colors

```css
:root {
  /* Backgrounds - Deep industrial slate */
  --bg-primary: #0a0f1a;      /* Near-black, main background */
  --bg-secondary: #111827;    /* Slightly lighter, card backgrounds */
  --bg-tertiary: #1f2937;     /* Elevated surfaces */

  /* The Pulse - Cyan accent system */
  --pulse-primary: #00d4ff;   /* Main cyan - the pulse */
  --pulse-secondary: #0ea5e9; /* Deeper cyan for hover states */
  --pulse-glow: rgba(0, 212, 255, 0.15);  /* Ambient glow */
  --pulse-intense: rgba(0, 212, 255, 0.4); /* Active states */

  /* Text hierarchy */
  --text-primary: #ffffff;    /* Headlines, primary content */
  --text-secondary: #e2e8f0;  /* Body text */
  --text-muted: #94a3b8;      /* Captions, secondary info */
  --text-accent: #00d4ff;     /* Links, highlights */

  /* Glass effects */
  --glass-bg: rgba(17, 24, 39, 0.7);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-hover: rgba(0, 212, 255, 0.3);

  /* Utility */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
}
```

#### Color Usage Rules

| Element | Color | Notes |
|---------|-------|-------|
| Page background | `--bg-primary` | Always dark, never light mode |
| Card/section bg | `--bg-secondary` | Subtle elevation |
| Headlines | `--text-primary` | Pure white, high contrast |
| Body text | `--text-secondary` | Slightly muted for readability |
| Accent/CTA | `--pulse-primary` | Cyan pulse color |
| Hover states | `--pulse-secondary` | Deeper cyan |
| Glow effects | `--pulse-glow` | Subtle ambient |

#### Gradient Definitions

```css
/* Hero headline gradient */
.gradient-headline {
  background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Pulse accent gradient */
.gradient-pulse {
  background: linear-gradient(135deg, #00d4ff 0%, #0ea5e9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Card border gradient */
.gradient-border {
  background: linear-gradient(135deg,
    rgba(0, 212, 255, 0.3) 0%,
    rgba(0, 212, 255, 0.05) 100%
  );
}
```

### 2.2 Typography

#### Font Stack

```css
:root {
  /* Headlines - Orbitron for tech/industrial feel */
  --font-display: 'Orbitron', system-ui, sans-serif;

  /* Body - System fonts for performance & readability */
  --font-body: system-ui, -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;

  /* Mono - Code and technical labels */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

#### Type Scale

| Name | Size (Desktop) | Size (Mobile) | Weight | Use Case |
|------|----------------|---------------|--------|----------|
| `display-1` | 80px / 5rem | 48px / 3rem | 900 | Hero headline |
| `display-2` | 56px / 3.5rem | 36px / 2.25rem | 800 | Section headlines |
| `heading-1` | 40px / 2.5rem | 28px / 1.75rem | 700 | Card titles |
| `heading-2` | 28px / 1.75rem | 22px / 1.375rem | 600 | Subsections |
| `body-lg` | 20px / 1.25rem | 18px / 1.125rem | 400 | Lead paragraphs |
| `body` | 16px / 1rem | 16px / 1rem | 400 | Body text |
| `caption` | 14px / 0.875rem | 13px / 0.8125rem | 400 | Metadata |
| `overline` | 12px / 0.75rem | 11px / 0.6875rem | 500 | Labels, eyebrows |

#### Typography CSS

```css
.display-1 {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.display-2 {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.overline {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
```

### 2.3 Spacing System

8px grid system using Tailwind defaults:

| Token | Value | Use |
|-------|-------|-----|
| `space-1` | 4px | Tight internal padding |
| `space-2` | 8px | Icon gaps, small spacing |
| `space-3` | 12px | Button padding |
| `space-4` | 16px | Card padding (mobile) |
| `space-6` | 24px | Section gaps |
| `space-8` | 32px | Card padding (desktop) |
| `space-12` | 48px | Section padding |
| `space-16` | 64px | Large section gaps |
| `space-24` | 96px | Hero vertical padding |
| `space-32` | 128px | Major section breaks |

### 2.4 Border Radius

```css
:root {
  --radius-sm: 4px;   /* Buttons, small elements */
  --radius-md: 8px;   /* Cards, inputs */
  --radius-lg: 16px;  /* Large cards, modals */
  --radius-xl: 24px;  /* Hero elements */
  --radius-full: 9999px; /* Pills, avatars */
}
```

### 2.5 Shadows & Elevation

```css
:root {
  /* Subtle elevation */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);

  /* Card elevation */
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3),
               0 2px 4px -1px rgba(0, 0, 0, 0.2);

  /* Hover/focus elevation */
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4),
               0 4px 6px -2px rgba(0, 0, 0, 0.2);

  /* Modal/overlay elevation */
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.5),
               0 10px 10px -5px rgba(0, 0, 0, 0.3);

  /* Pulse glow effect */
  --shadow-glow: 0 0 20px var(--pulse-glow),
                 0 0 40px var(--pulse-glow);

  /* Intense glow (hover) */
  --shadow-glow-intense: 0 0 30px var(--pulse-intense),
                         0 0 60px var(--pulse-glow);
}
```

---

## 3. Hero Section

### 3.1 Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ [Glassy Navbar - fixed, blurred]                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │     // MANUFACTURING INTELLIGENCE                   │   │
│  │                                                     │   │
│  │     Der Puls                                        │   │
│  │     Ihrer Produktion.                               │   │
│  │              ─────── (cyan pulse animation)         │   │
│  │                                                     │   │
│  │     [Glassy text box over factory image]            │   │
│  │     AI-powered insights for manufacturing           │   │
│  │     excellence. Real-time. Reliable. German.        │   │
│  │                                                     │   │
│  │     [  Explore Solutions  →  ]  (cyan button)       │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─ Background: Factory-takt14.png or Factory-takt7.png ─┐ │
│  │  (aerial factory view with animated cyan pulse        │ │
│  │   flowing through the production lines)               │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Hero Component Spec

```tsx
// src/components/sections/HeroSection.tsx

interface HeroProps {
  // Translations handled via useLanguage()
}

// Structure:
// 1. Full-viewport section with factory background image
// 2. Animated pulse SVG overlay
// 3. Glassmorphism content card (left-aligned)
// 4. Headline + tagline + CTA
```

#### Background Treatment

- **Image**: `Factory-takt14.png` (aerial factory with pulse line) or `Factory-takt7.png` (smart factory)
- **Overlay**: `linear-gradient(to bottom, rgba(10,15,26,0.3) 0%, rgba(10,15,26,0.7) 100%)`
- **Position**: `object-position: center center`
- **Size**: `object-fit: cover`, full viewport

#### Pulse Animation

```css
/* The signature pulse line animation */
@keyframes pulse-flow {
  0% {
    stroke-dashoffset: 1000;
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
}

.pulse-line {
  stroke: var(--pulse-primary);
  stroke-width: 2;
  stroke-dasharray: 1000;
  animation: pulse-flow 4s ease-in-out infinite;
  filter: drop-shadow(0 0 8px var(--pulse-primary));
}
```

#### Content Card (Glassmorphism)

```css
.hero-content-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-12);
  max-width: 640px;
}
```

### 3.3 Hero Content

#### Eyebrow Text
```
// MANUFACTURING INTELLIGENCE
```
- Font: `--font-mono`, `overline` size
- Color: `--pulse-primary` at 60% opacity
- Spacing: `letter-spacing: 0.15em`

#### Headline
```
Der Puls
Ihrer Produktion.
```
- Font: `--font-display`, `display-1` size
- Color: `--text-primary` (white gradient)
- "Puls" can have subtle cyan glow

#### Subtitle (in glass card)
```
AI-powered insights for manufacturing excellence.
Real-time. Reliable. German-engineered.
```
- Font: `--font-body`, `body-lg` size
- Color: `--text-secondary`
- Max-width: 480px

#### CTA Button
```
[  Explore Solutions  →  ]
```
- Background: `--pulse-primary`
- Text: `--bg-primary` (dark)
- Hover: `--pulse-secondary` + glow effect
- Size: `px-8 py-4 text-lg font-semibold`
- Border-radius: `--radius-md`

### 3.4 Responsive Behavior

| Breakpoint | Layout Changes |
|------------|----------------|
| `< 640px` | Headline: 48px, card padding reduced, full-width card |
| `640-1024px` | Headline: 64px, card max-width 540px |
| `> 1024px` | Headline: 80px, card positioned left with 60% width |

### 3.5 Animation Choreography

| Element | Animation | Delay | Duration |
|---------|-----------|-------|----------|
| Background image | Fade in + subtle zoom | 0ms | 1200ms |
| Pulse SVG | Begin flow animation | 300ms | 4000ms (loop) |
| Eyebrow text | Fade in + slide up | 400ms | 600ms |
| Headline line 1 | Fade in + slide up | 500ms | 600ms |
| Headline line 2 | Fade in + slide up | 600ms | 600ms |
| Glass card | Fade in + blur in | 700ms | 800ms |
| Subtitle | Fade in | 900ms | 500ms |
| CTA button | Fade in + slide up | 1000ms | 500ms |

---

## 4. Navigation & Layout

### 4.1 Navbar (Glassy, AI-Build Inspired)

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]     Solutions   Work   About   Contact    [DE|EN]   │
└─────────────────────────────────────────────────────────────┘
```

#### Navbar Specs

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  /* Glass effect */
  background: rgba(10, 15, 26, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);

  /* Sizing */
  height: 72px;
  padding: 0 var(--space-6);
}

/* Scrolled state - more opaque */
.navbar.scrolled {
  background: rgba(10, 15, 26, 0.95);
  box-shadow: var(--shadow-md);
}
```

#### Logo Treatment

- FabrikTakt wordmark in `--font-display`
- "Fabrik" in `--text-primary`, "Takt" in `--pulse-primary`
- Or: Geometric mark + wordmark

#### Nav Links

```css
.nav-link {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover {
  color: var(--pulse-primary);
  background: var(--pulse-glow);
}

.nav-link.active {
  color: var(--pulse-primary);
}
```

#### Language Toggle

- Dropdown or toggle: DE | EN | فا
- Use Radix Select for accessibility
- Current language highlighted with `--pulse-primary`

### 4.2 Mobile Navigation

- Hamburger icon (3 lines, cyan on hover)
- Full-screen overlay with glass effect
- Links stacked vertically, large touch targets (48px min)
- Language toggle at bottom

### 4.3 Page Layout

```css
.page-container {
  min-height: 100vh;
  background: var(--bg-primary);
}

.section {
  padding: var(--space-24) var(--space-6);
}

.section-alt {
  background: var(--bg-secondary);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8);
  }
}
```

### 4.4 Footer

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  FabrikTakt                                                │
│  Der Puls Ihrer Produktion.                                │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  Solutions          Company           Legal                 │
│  • AI Integration   • About           • Privacy            │
│  • Analytics        • Careers         • Terms              │
│  • Consulting       • Contact         • Imprint            │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  © 2025 FabrikTakt        [LinkedIn] [GitHub]         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- Background: `--bg-secondary`
- Top border: 1px `--glass-border`
- Social icons: Minimal, cyan on hover

---

## 5. Glassmorphism & Image Treatment

### 5.1 Glass Card Component (James Cropper Inspired)

The signature visual element: glass cards that float over factory imagery.

```css
.glass-card {
  /* Glass background */
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  /* Border treatment */
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);

  /* Subtle top highlight */
  box-shadow:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.05),
    var(--shadow-lg);

  /* Padding */
  padding: var(--space-8);

  /* Transition for hover */
  transition: border-color 0.3s, box-shadow 0.3s;
}

.glass-card:hover {
  border-color: var(--glass-border-hover);
  box-shadow:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.08),
    var(--shadow-xl),
    var(--shadow-glow);
}
```

### 5.2 Image with Glass Overlay Pattern

Used for case studies, feature highlights, etc.

```
┌─────────────────────────────────────────┐
│                                         │
│    [Factory/Tech Image]                 │
│                                         │
│    ┌─────────────────────────────┐     │
│    │  Glass Card                 │     │
│    │  ───────────                │     │
│    │  Title text here            │     │
│    │  Description text           │     │
│    │  [Learn More →]             │     │
│    └─────────────────────────────┘     │
│                                         │
└─────────────────────────────────────────┘
```

```tsx
// Component structure
<div className="relative overflow-hidden rounded-xl">
  <img
    src={imagePath}
    alt={alt}
    className="w-full h-full object-cover"
  />
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />

  {/* Glass content card */}
  <div className="absolute bottom-6 left-6 right-6 glass-card">
    <span className="overline text-pulse-primary">{category}</span>
    <h3 className="heading-2 text-white mt-2">{title}</h3>
    <p className="body text-text-secondary mt-3">{description}</p>
    <Button variant="ghost" className="mt-4">
      Learn More <ArrowRight />
    </Button>
  </div>
</div>
```

### 5.3 Image Treatment Standards

#### Factory Photography

| Aspect | Specification |
|--------|---------------|
| Aspect ratio | 16:9 (hero), 4:3 (cards), 1:1 (thumbnails) |
| Color treatment | Slightly desaturated, enhanced contrast |
| Overlay | `--bg-primary` gradient, 30-60% opacity |
| Blur | None on main image, blur on glass elements only |

#### Recommended Images by Section

| Section | Recommended Image | Rationale |
|---------|-------------------|-----------|
| Hero | `Factory-takt14.png` | Aerial view with pulse line |
| About/Story | `Factory-takt13.png` | Human element, mentorship |
| Solutions | `Factory-takt15.png` | Analytics dashboard in factory |
| Tech | `Factory-takt7.png` | Digital overlay aesthetic |
| Services | `Fabrik-Icons0.png`, `Fabrik-Icons1.png` | Isometric illustrations |

### 5.4 Icon System

Use isometric illustrations (`Fabrik-Icons*.png`) as:
- Section dividers
- Feature illustrations
- Service icons (extract individual elements)

Style guide:
- Line weight: 2px
- Stroke color: `--text-muted` (default), `--pulse-primary` (hover/active)
- Fill: None or very subtle `--pulse-glow`

---

## 6. Page Structure & Sections

### 6.1 Information Architecture

```
/                     → Landing (Hero + Sections)
/solutions            → Solutions/Services page
/work                 → Portfolio/Case studies
/work/:id             → Individual case study
/about                → Company story
/contact              → Contact form
/imprint              → Legal (Impressum)
/privacy              → Privacy policy
```

### 6.2 Landing Page Sections

| Order | Section | Purpose | Key Elements |
|-------|---------|---------|--------------|
| 1 | Hero | First impression, value prop | Tagline, pulse animation, CTA |
| 2 | Problem | Pain point acknowledgment | "Manufacturing data chaos" |
| 3 | Solution | How FabrikTakt helps | 3 key capabilities |
| 4 | Services | What we offer | 4-6 service cards |
| 5 | Work | Proof of expertise | 3 featured case studies |
| 6 | Tech | Technical credibility | Tech stack, integrations |
| 7 | CTA | Conversion | Contact form or link |

### 6.3 Section Components

#### Problem Section (Optional - can be merged into hero)

```
"Manufacturing generates mountains of data.
Most of it dies in spreadsheets."

[Animated stat: 73% of industrial data goes unused]
```

- Background: `--bg-primary`
- Large quote typography
- Single animated statistic

#### Solutions Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  What We Build                                              │
│  ─────────────                                              │
│  AI-powered tools for manufacturing intelligence            │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ [Icon]  │  │ [Icon]  │  │ [Icon]  │  │ [Icon]  │        │
│  │ Title   │  │ Title   │  │ Title   │  │ Title   │        │
│  │ Desc    │  │ Desc    │  │ Desc    │  │ Desc    │        │
│  │ →       │  │ →       │  │ →       │  │ →       │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- Grid: 2 cols mobile, 4 cols desktop
- Cards: Glass style with icon, title, description
- Hover: Cyan border glow + arrow animation

**Service Cards:**
1. **AI Integration** - LLM/ML integration into existing systems
2. **Production Analytics** - Real-time dashboards and insights
3. **Knowledge Capture** - Preserve worker expertise digitally
4. **Process Optimization** - Data-driven efficiency improvements

#### Work/Portfolio Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Our Work                                                   │
│  ─────────                                                  │
│                                                             │
│  ┌───────────────────┐  ┌───────────────────┐              │
│  │ [Image]           │  │ [Image]           │              │
│  │ ┌───────────────┐ │  │ ┌───────────────┐ │              │
│  │ │ Glass Card    │ │  │ │ Glass Card    │ │              │
│  │ │ Case Study 1  │ │  │ │ Case Study 2  │ │              │
│  │ └───────────────┘ │  │ └───────────────┘ │              │
│  └───────────────────┘  └───────────────────┘              │
│                                                             │
│  ┌───────────────────┐                                      │
│  │ [Image]           │  [View All Work →]                  │
│  │ ┌───────────────┐ │                                      │
│  │ │ Case Study 3  │ │                                      │
│  │ └───────────────┘ │                                      │
│  └───────────────────┘                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- Masonry-style grid or standard 2-col
- Each card: Image + glass overlay with title/description
- "View All Work" link to full portfolio

#### Tech Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Technology                                                 │
│  ──────────                                                 │
│  Built with modern, proven technologies                     │
│                                                             │
│  [Python] [React] [TypeScript] [AWS] [Azure] [PostgreSQL]  │
│  [TensorFlow] [PyTorch] [Kubernetes] [Docker]               │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  "Seamlessly integrates with SAP, Oracle, Siemens..."       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- Logo cloud (grayscale, cyan on hover)
- Integration partners listed
- Credibility builders

#### CTA Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  Ready to feel the pulse?                           │   │
│  │  ─────────────────────────                          │   │
│  │                                                     │   │
│  │  Let's discuss how AI can transform                 │   │
│  │  your manufacturing operations.                     │   │
│  │                                                     │   │
│  │  [  Start a Conversation  →  ]                      │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  (Background: subtle pulse animation or gradient)           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- Full-width with centered glass card
- Compelling headline tied to pulse metaphor
- Single prominent CTA button

### 6.4 Files to Modify/Create

#### Modify
- `src/components/sections/HeroSection.tsx` - Complete rewrite
- `src/components/sections/SolutionSection.tsx` - Update to glass cards
- `src/components/sections/SocialProofSection.tsx` → Rename to `WorkSection.tsx`
- `src/components/sections/TechStackSection.tsx` - Simplify
- `src/components/sections/PilotCTASection.tsx` → Rename to `CTASection.tsx`
- `src/components/layout/Header.tsx` - Glassy navbar
- `src/components/layout/Footer.tsx` - Update styling
- `src/pages/Index.tsx` - Update section imports
- `src/styles/globals.css` - New color system

#### Create
- `src/components/ui/GlassCard.tsx` - Reusable glass card
- `src/components/ui/PulseAnimation.tsx` - SVG pulse component
- `src/components/sections/WorkSection.tsx` - Portfolio grid
- `src/pages/Work.tsx` - Portfolio page
- `src/pages/CaseStudy.tsx` - Case study detail

#### Delete
- `src/components/sections/ProblemSection.tsx` - Merge into hero
- `src/components/sections/FeaturesSection.tsx` - Redundant
- `src/components/sections/ExamplesSection.tsx` - Merge into Work
- `src/components/WebGLCircuitBackground.tsx` - Remove Three.js
- `src/pages/Features.tsx` - Not routed
- `src/pages/Technology.tsx` - Not routed

---

## 7. Animation & Interaction

### 7.1 Animation Principles

1. **Purposeful**: Animations support the "pulse" narrative
2. **Subtle**: 200-400ms durations, ease-out curves
3. **Performant**: CSS transforms/opacity only, no layout thrashing
4. **Respectful**: Honor `prefers-reduced-motion`

### 7.2 Timing Functions

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 7.3 Standard Animations

#### Fade In Up (Section entrance)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s var(--ease-out) forwards;
}
```

#### Glow Pulse (Accent elements)
```css
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px var(--pulse-glow);
  }
  50% {
    box-shadow: 0 0 40px var(--pulse-intense);
  }
}

.animate-glow-pulse {
  animation: glowPulse 3s ease-in-out infinite;
}
```

#### Line Draw (Pulse SVG)
```css
@keyframes lineDraw {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.animate-line-draw {
  stroke-dasharray: 1000;
  animation: lineDraw 2s var(--ease-out) forwards;
}
```

### 7.4 Interaction States

#### Buttons
```css
.btn-primary {
  transition: transform 0.2s var(--ease-out),
              box-shadow 0.2s var(--ease-out),
              background-color 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Cards
```css
.card {
  transition: transform 0.3s var(--ease-out),
              border-color 0.3s,
              box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--glass-border-hover);
  box-shadow: var(--shadow-xl), var(--shadow-glow);
}
```

#### Links
```css
.link {
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--pulse-primary);
  transition: width 0.3s var(--ease-out);
}

.link:hover::after {
  width: 100%;
}
```

### 7.5 Scroll Animations (Motion/Framer)

```tsx
// Use motion/react for scroll-triggered animations
import { motion } from 'motion/react';

// Section entrance
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  {/* content */}
</motion.section>

// Staggered children
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {/* card content */}
    </motion.div>
  ))}
</motion.div>
```

### 7.6 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .pulse-line {
    animation: none;
    opacity: 0.6;
  }
}
```

---

## 8. Internationalization & RTL

### 8.1 Language Support

| Language | Code | Direction | Primary Market |
|----------|------|-----------|----------------|
| German | `de` | LTR | Primary |
| English | `en` | LTR | International |
| Persian | `fa` | RTL | Secondary |

### 8.2 Translation Structure

```typescript
// src/contexts/LanguageContext.tsx

interface Translations {
  // Navigation
  'nav.solutions': string;
  'nav.work': string;
  'nav.about': string;
  'nav.contact': string;

  // Hero
  'hero.eyebrow': string;
  'hero.title.line1': string;
  'hero.title.line2': string;
  'hero.subtitle': string;
  'hero.cta': string;

  // Solutions
  'solutions.title': string;
  'solutions.subtitle': string;
  'solutions.ai.title': string;
  'solutions.ai.description': string;
  // ... etc

  // Work
  'work.title': string;
  'work.viewAll': string;

  // CTA
  'cta.title': string;
  'cta.subtitle': string;
  'cta.button': string;

  // Footer
  'footer.tagline': string;
  'footer.rights': string;
  // ... etc
}
```

### 8.3 Key Translations

```typescript
const translations = {
  de: {
    // Hero
    'hero.eyebrow': '// FERTIGUNGSINTELLIGENZ',
    'hero.title.line1': 'Der Puls',
    'hero.title.line2': 'Ihrer Produktion.',
    'hero.subtitle': 'KI-gestützte Einblicke für Fertigungsexzellenz. Echtzeit. Zuverlässig. German-engineered.',
    'hero.cta': 'Lösungen entdecken',

    // Solutions
    'solutions.title': 'Was wir bauen',
    'solutions.subtitle': 'KI-gestützte Werkzeuge für Fertigungsintelligenz',

    // CTA
    'cta.title': 'Bereit, den Puls zu spüren?',
    'cta.subtitle': 'Lassen Sie uns besprechen, wie KI Ihre Fertigung transformieren kann.',
    'cta.button': 'Gespräch starten',
  },

  en: {
    'hero.eyebrow': '// MANUFACTURING INTELLIGENCE',
    'hero.title.line1': 'The Pulse',
    'hero.title.line2': 'of Your Production.',
    'hero.subtitle': 'AI-powered insights for manufacturing excellence. Real-time. Reliable. German-engineered.',
    'hero.cta': 'Explore Solutions',

    'solutions.title': 'What We Build',
    'solutions.subtitle': 'AI-powered tools for manufacturing intelligence',

    'cta.title': 'Ready to feel the pulse?',
    'cta.subtitle': "Let's discuss how AI can transform your manufacturing operations.",
    'cta.button': 'Start a Conversation',
  },

  fa: {
    'hero.eyebrow': '// هوش تولیدی',
    'hero.title.line1': 'نبض',
    'hero.title.line2': 'تولید شما.',
    'hero.subtitle': 'بینش‌های مبتنی بر هوش مصنوعی برای تعالی تولید. بلادرنگ. قابل اعتماد. مهندسی آلمانی.',
    'hero.cta': 'کشف راه‌حل‌ها',

    'solutions.title': 'آنچه می‌سازیم',
    'solutions.subtitle': 'ابزارهای مبتنی بر هوش مصنوعی برای هوش تولیدی',

    'cta.title': 'آماده‌اید نبض را احساس کنید؟',
    'cta.subtitle': 'بیایید در مورد چگونگی تحول عملیات تولید شما با هوش مصنوعی صحبت کنیم.',
    'cta.button': 'شروع گفتگو',
  }
};
```

### 8.4 RTL Implementation

#### Document-Level Direction

```typescript
// src/contexts/LanguageContext.tsx

useEffect(() => {
  // Set both lang and dir on <html>
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
}, [language]);
```

#### RTL-Aware CSS

```css
/* Logical properties for automatic RTL */
.card {
  padding-inline-start: var(--space-6);
  padding-inline-end: var(--space-6);
  margin-inline-start: auto;
}

/* Icons that need flipping */
[dir="rtl"] .icon-arrow {
  transform: scaleX(-1);
}

/* Text alignment */
.text-start {
  text-align: start; /* left in LTR, right in RTL */
}
```

#### Tailwind RTL Classes

```html
<!-- Margin that respects direction -->
<div class="ms-4">  <!-- margin-inline-start -->
<div class="me-4">  <!-- margin-inline-end -->

<!-- Padding -->
<div class="ps-6">  <!-- padding-inline-start -->
<div class="pe-6">  <!-- padding-inline-end -->

<!-- Flexbox direction -->
<div class="flex flex-row rtl:flex-row-reverse">
```

### 8.5 Font Considerations for Persian

```css
/* Persian-specific font stack */
[lang="fa"] {
  font-family: 'Vazirmatn', 'Tahoma', system-ui, sans-serif;
}

/* Slightly increased line-height for Persian readability */
[lang="fa"] .body-text {
  line-height: 1.8;
}

/* Display font - Orbitron works for Latin characters in Persian context */
[lang="fa"] .display-1,
[lang="fa"] .display-2 {
  font-family: 'Vazirmatn', var(--font-display), sans-serif;
  /* Or keep Orbitron for brand consistency */
}
```

---

## 9. Technical Implementation

### 9.1 Dependencies

#### Keep
- `react`, `react-dom` (18.x)
- `react-router-dom` (6.x)
- `motion` (formerly framer-motion)
- `@radix-ui/*` components
- `tailwindcss`
- `react-hook-form`, `zod`
- `lucide-react`
- `react-helmet-async`
- `@tanstack/react-query`

#### Remove
- `three`, `@react-three/fiber`, `@react-three/drei` - Replace with CSS/SVG animations

#### Add (if not present)
- `vazirmatn` font (Persian typography) - via Google Fonts or local

### 9.2 File Structure Changes

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Modify: glassy navbar
│   │   └── Footer.tsx          # Modify: updated styling
│   ├── sections/
│   │   ├── HeroSection.tsx     # Rewrite: pulse hero
│   │   ├── SolutionsSection.tsx # Rename from SolutionSection
│   │   ├── WorkSection.tsx     # New (was SocialProofSection)
│   │   ├── TechSection.tsx     # Simplify
│   │   └── CTASection.tsx      # Rename from PilotCTASection
│   └── ui/
│       ├── GlassCard.tsx       # New
│       ├── PulseAnimation.tsx  # New
│       └── ... (keep existing)
├── contexts/
│   └── LanguageContext.tsx     # Modify: add translations, fix RTL
├── pages/
│   ├── Index.tsx               # Modify: new sections
│   ├── Work.tsx                # New: portfolio page
│   ├── CaseStudy.tsx           # New: case study detail
│   └── Contact.tsx             # Keep: wire to EmailJS
├── styles/
│   ├── globals.css             # Rewrite: new color system
│   └── animations.css          # New: animation utilities
└── data/
    └── caseStudies.json        # New: portfolio content
```

### 9.3 CSS Custom Properties Update

Replace current `globals.css` `:root` with new color system (see Section 2.1).

### 9.4 Component Patterns

#### GlassCard Component

```tsx
// src/components/ui/GlassCard.tsx
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'elevated' | 'interactive';
  glow?: boolean;
}

export function GlassCard({
  className,
  variant = 'default',
  glow = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        // Base glass styles
        'bg-glass-bg backdrop-blur-xl border border-glass-border rounded-lg',
        'shadow-lg transition-all duration-300',

        // Variants
        variant === 'elevated' && 'bg-bg-tertiary/80',
        variant === 'interactive' && 'hover:border-glass-border-hover hover:shadow-xl cursor-pointer',

        // Glow
        glow && 'shadow-glow',

        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
```

#### PulseAnimation Component

```tsx
// src/components/ui/PulseAnimation.tsx
import { motion } from 'motion/react';

interface PulseAnimationProps {
  className?: string;
}

export function PulseAnimation({ className }: PulseAnimationProps) {
  return (
    <svg
      className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d="M0,540 Q480,400 960,540 T1920,540"
        fill="none"
        stroke="var(--pulse-primary)"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          pathLength: { duration: 2, ease: "easeInOut" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </svg>
  );
}
```

### 9.5 Performance Targets

| Metric | Target | Current | Notes |
|--------|--------|---------|-------|
| Bundle size (gzip) | < 150KB | ~500KB | Remove Three.js |
| Lighthouse Performance | 90+ | TBD | Lazy load images |
| Lighthouse Accessibility | 95+ | TBD | ARIA labels |
| FCP | < 1.5s | TBD | Optimize fonts |
| LCP | < 2.5s | TBD | Preload hero image |
| CLS | < 0.1 | TBD | Reserve image space |

### 9.6 Build Optimizations

```typescript
// vite.config.ts additions
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', /* etc */],
          'vendor-motion': ['motion'],
        }
      }
    }
  },
  // Image optimization
  assetsInclude: ['**/*.webp'],
});
```

### 9.7 Image Optimization

Convert factory images to WebP with responsive sizes:

```bash
# Generate responsive images
# Hero: 1920w, 1280w, 768w
# Cards: 800w, 400w
# Thumbnails: 200w

# Example using sharp or squoosh
```

Implement lazy loading:
```tsx
<img
  src={thumbnail}
  srcSet={`${img400} 400w, ${img800} 800w`}
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
  decoding="async"
  alt={alt}
/>
```

---

## 10. Asset Inventory

### 10.1 Factory Images

| File | Description | Recommended Use | Dimensions |
|------|-------------|-----------------|------------|
| `Factory-takt7.png` | Aerial smart factory, cyan digital overlay | Hero alt, Tech section | High-res |
| `Factory-takt13.png` | Workers at machine, mentorship scene | About section, human element | High-res |
| `Factory-takt14.png` | Aerial factory with pulse line overlay | **Hero primary** | High-res |
| `Factory-takt15.png` | Workstation with analytics monitor | Solutions, analytics | High-res |
| `Factory-takt0-6.jpg` | Various factory photography | Case studies, backgrounds | Mixed |
| `Factory-takt8-12.png` | Additional factory scenes | Supplementary | Mixed |
| `Factory-takt16.png` | Additional factory scene | Supplementary | High-res |

### 10.2 Illustrations

| File | Description | Recommended Use |
|------|-------------|-----------------|
| `Fabrik-Icons0.png` | Isometric: robot arm, conveyor, dashboard, gears, mobile | Services section icons |
| `Fabrik-Icons1.png` | Isometric: error→processing→optimized flow | Problem/Solution visual |
| `Fabrik-Icons2.png` | Additional isometric illustration | Supplementary |
| `Fabrik-Icons3.png` | Additional isometric illustration | Supplementary |

### 10.3 Image Processing Tasks

1. Convert all PNG/JPG to WebP
2. Generate responsive sizes (400w, 800w, 1280w, 1920w)
3. Create placeholder blur data URLs for lazy loading
4. Extract individual icons from `Fabrik-Icons*.png` as SVG if needed

### 10.4 Required New Assets

| Asset | Description | Priority |
|-------|-------------|----------|
| FabrikTakt logo (SVG) | Wordmark or mark + wordmark | High |
| Favicon set | 16, 32, 180, 512 px | High |
| OG image | 1200x630 for social sharing | Medium |
| Service icons | 4-6 simple line icons | Medium |
| Tech logos | Python, React, AWS, etc. (grayscale) | Low |

---

## 11. Success Criteria

### 11.1 Must Have (MVP)

- [ ] Hero section with pulse animation on factory image
- [ ] Glassy navbar with language toggle (DE/EN/FA)
- [ ] Solutions section with glass cards
- [ ] Work section with 3 case studies (can use placeholders)
- [ ] CTA section with contact link
- [ ] Footer with basic info
- [ ] Full RTL support for Persian
- [ ] Mobile responsive (320px → 1920px)
- [ ] Contact form functional (EmailJS)
- [ ] Lighthouse Performance: 85+
- [ ] Lighthouse Accessibility: 90+
- [ ] Bundle size < 200KB (gzip)

### 11.2 Should Have

- [ ] Smooth scroll animations (Motion)
- [ ] All translations complete (150+ keys × 3 languages)
- [ ] Case study detail pages
- [ ] Tech section with logo cloud
- [ ] Lighthouse scores: 90+ across all categories
- [ ] Preloaded hero image for fast LCP
- [ ] Animated pulse SVG (not just static)

### 11.3 Nice to Have

- [ ] Portfolio page with filters
- [ ] Blog/insights section
- [ ] Video backgrounds (performance-gated)
- [ ] Advanced scroll-triggered animations
- [ ] Dark mode toggle (currently always dark)

### 11.4 Quality Checklist

#### Visual
- [ ] Cyan accent consistent across all elements
- [ ] Glass effects render correctly on all browsers
- [ ] Images crisp at all viewport sizes
- [ ] Typography hierarchy clear
- [ ] Sufficient contrast (WCAG AA)

#### Functional
- [ ] All nav links work
- [ ] Language toggle persists choice
- [ ] Contact form submits successfully
- [ ] No console errors
- [ ] 404 page handles unknown routes

#### Performance
- [ ] Images lazy load below fold
- [ ] Fonts don't cause FOUT/FOIT
- [ ] Animations respect reduced motion
- [ ] No layout shifts on load

#### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Focus indicators visible
- [ ] Keyboard navigation complete
- [ ] Screen reader tested

---

## Appendix A: Quick Reference

### Color Tokens
```
--bg-primary: #0a0f1a
--bg-secondary: #111827
--pulse-primary: #00d4ff
--text-primary: #ffffff
--text-secondary: #e2e8f0
--glass-bg: rgba(17, 24, 39, 0.7)
```

### Key Files
```
globals.css          → Color system
HeroSection.tsx      → First impression
Header.tsx           → Navigation
LanguageContext.tsx  → i18n + RTL
```

### Commands
```bash
bun run dev          # Start dev server
bun run build        # Production build
bun run lint         # ESLint check
bunx tsc --noEmit    # Type check
```

---

## Appendix B: Implementation Order

**Phase 1: Foundation (4-6h)**
1. Update `globals.css` with new color system
2. Create `GlassCard` component
3. Update `Header.tsx` with glassy navbar
4. Fix RTL in `LanguageContext.tsx`

**Phase 2: Hero (4-6h)**
1. Rewrite `HeroSection.tsx`
2. Create `PulseAnimation.tsx`
3. Optimize hero image (WebP, responsive)
4. Add entrance animations

**Phase 3: Sections (6-8h)**
1. Update `SolutionSection.tsx` → `SolutionsSection.tsx`
2. Create `WorkSection.tsx` with case study cards
3. Simplify `TechStackSection.tsx`
4. Update `PilotCTASection.tsx` → `CTASection.tsx`

**Phase 4: Content & i18n (4-6h)**
1. Add all German translations
2. Review/update English translations
3. Add/verify Persian translations
4. Test RTL thoroughly

**Phase 5: Polish (4-6h)**
1. Footer update
2. Mobile navigation
3. Performance optimization
4. Accessibility audit
5. Cross-browser testing

**Phase 6: Pages (4-6h)**
1. Create portfolio page (`/work`)
2. Create case study template
3. Wire contact form to EmailJS
4. Update routing

**Total Estimate: 26-38 hours**

---

*Document ready for implementation. Start with Phase 1: Foundation.*
