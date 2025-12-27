# Phase 1 — Deep Discovery (Codebase Audit)

Repo: `fabrik-takt-hub`

Scope: Read-only audit with emphasis on `src/` to support a rebrand into a premium AI/innovation agency site, while preserving bilingual EN/FA behavior (including RTL) and retaining the ability to use a Three.js background.

## 1) Executive Summary

This is a Vite + React + TypeScript single-page app with React Router, Tailwind, and a large shadcn/ui-style component library.

High-impact findings (actionable and verifiable in code):

1) **Several pages and feature paths exist but are not reachable from routing**.
   - Only `/`, `/capabilities`, `/contact`, and `*` are routed (see `src/App.tsx`).
   - `src/pages/Features.tsx`, `src/pages/Technology.tsx`, `src/pages/CaseStudies.tsx` exist but are **not routed**.

2) **The “contact form” on the routed `/contact` page does not submit anywhere**.
   - `src/pages/Contact.tsx` simulates submission via `setTimeout` (“Simulate form submission”).

3) **A real EmailJS submission pipeline exists, but is effectively unreachable**.
   - `src/services/emailService.ts` implements real submission (rate limiting + basic bot checks), but the components that would use it are not wired into routed pages.

4) **Theme/token plumbing is internally inconsistent**, and a large set of shadcn UI primitives likely render with broken or missing colors.
   - Tailwind is configured with `darkMode: ["class"]` (`tailwind.config.ts`) but global CSS uses `@media (prefers-color-scheme: dark)` (`src/styles/globals.css`).
   - Tailwind color tokens map `border: hsl(var(--border))`, etc., but `--border` is defined as `rgba(...)`, not HSL.
   - `src/components/ui/sonner.tsx` relies on `next-themes` `useTheme()`, but the app does not mount a `ThemeProvider`.

5) **Bilingual/RTL exists, but is applied on a wrapper div rather than on `<html>`**.
   - `src/contexts/LanguageContext.tsx` sets `document.documentElement.lang = language` but **does not set `document.documentElement.dir`**.

Net-net: the UI has strong “premium landing page” ingredients (section composition, Motion animations, a sizeable UI component kit), but key product paths (contact/lead capture, theme consistency, routed IA) need tightening to be credible as a premium agency site.

## 2) Architecture Map

### 2.1 Entry points

- `src/main.tsx`
  - Mounts `<BrowserRouter>` and `<App />`.
  - Injects Umami analytics script if `VITE_UMAMI_URL` + `VITE_UMAMI_WEBSITE_ID` exist.

- `src/App.tsx`
  - Wraps providers: React Query (`QueryClientProvider`), `HelmetProvider`, `TooltipProvider`, `LanguageProvider`.
  - Mounts **two toast systems**:
    - `Toaster` from `src/components/ui/toaster`
    - `Sonner` from `src/components/ui/sonner`
  - Defines routes:
    - `/` → `src/pages/Index.tsx`
    - `/capabilities` → `src/pages/Capabilities.tsx`
    - `/contact` → `src/pages/Contact.tsx`
    - `*` → `src/pages/NotFound.tsx`

### 2.2 UI composition style

Pages are mostly “section composers” (Hero/Problem/Solution/etc.) rather than dense pages.

This is a good fit for a rebrand: you can replace or rewire sections without changing routing or core app wiring.

## 3) Current Site Map (Actual, Routed)

| Route | Component | Notes |
| ------: | ----------- | ------ |
| `/` | `src/pages/Index.tsx` | Main landing. Sections live under `src/components/sections/*`. |
| `/capabilities` | `src/pages/Capabilities.tsx` | Capabilities listing (data-driven via `src/data/capabilities.tsx`). |
| `/contact` | `src/pages/Contact.tsx` | Has mailto CTA + a form UI; submission is simulated. |
| `*` | `src/pages/NotFound.tsx` | 404 page. Uses a raw `<a href="/">` (SPA inconsistency). |

### Orphan pages (present, not routed)

- `src/pages/Features.tsx`
- `src/pages/Technology.tsx`
- `src/pages/CaseStudies.tsx`

These pages likely represent the intended IA but currently do not ship to users.

## 4) Lead Capture & Form Submission

### 4.1 Routed `/contact` page is not wired

- File: `src/pages/Contact.tsx`
- `handleFormSubmit()` calls `setTimeout` and sets status to “success”.
- Inputs do not appear to be controlled/validated; there is no integration with `react-hook-form` on this page.

Impact: This is a “critical credibility bug” for a premium agency site. Visitors expect inquiries to reach you.

### 4.2 EmailJS submission exists (but has risks)

- File: `src/services/emailService.ts`

What’s good:

- Client-side rate limiting (3 per 5 minutes) via localStorage key `fabriktakt_form_rate_limit`.
- Honeypot field support.
- Bot timing heuristic: rejects submission under 3 seconds.

What’s risky:

- `serviceId` is hardcoded (should be env-configured or server-side).
- Admin recipient email is hardcoded (should be env-configured or server-side).
- EmailJS keys/templates are read from `import.meta.env.*` and must exist at runtime, otherwise the constructor throws.

### 4.3 Unused/duplicated submission logic

- `src/components/forms/ContactForm.tsx` exists but is not referenced by routed pages.
- `src/hooks/useFormSubmission.ts` exists (POST to `/api/apply`) but is not used.

Recommendation direction:

- Pick one submission strategy:
  - Client EmailJS (fast to ship but exposes more client-side config), or
  - A backend endpoint (preferred for premium agency; keeps email infra private and enables better spam control).
- Ensure the routed `/contact` page uses the chosen strategy.

## 5) i18n/RTL Reality Check

### 5.1 Current approach

- File: `src/contexts/LanguageContext.tsx`
- `LanguageProvider` provides:
  - `language` state (stored in localStorage)
  - `t(key)` lookup into `translations[language]`
- RTL is applied via a wrapper `<div dir={language === 'fa' ? 'rtl' : 'ltr'} ...>`.
- `<html lang>` is set via `document.documentElement.lang = language`.

### 5.2 Gaps

- The document direction is not set on `<html>`. This can affect:
  - Portals (Radix/Sonner),
  - Browser-native controls,
  - Mixed-direction content, selection, and punctuation.

- Many UI strings are hardcoded in English outside `t(key)`.
  - Examples (not exhaustive):
    - `src/components/layout/Header.tsx`
    - `src/components/layout/Footer.tsx`
    - `src/pages/Contact.tsx`
    - likely several sections under `src/components/sections/*`

### 5.3 What to preserve in rebrand

- Keep `LanguageContext` (it’s already integrated and lightweight).
- Move hardcoded copy into translation keys incrementally (start with nav + global CTAs + form labels).
- Add `document.documentElement.dir` update alongside `.lang`.

## 6) Theming, Tokens, and UI Library Consistency

This is currently the highest “silent breakage” risk: the UI can look fine in custom sections but shadcn primitives may render incorrectly.

### 6.1 Dark mode mismatch

- `tailwind.config.ts` uses `darkMode: ["class"]`.
- `src/styles/globals.css` toggles dark variables via `@media (prefers-color-scheme: dark)`.

Outcome: unless some other code adds the `.dark` class (none is present in `src/App.tsx`), Tailwind dark variants won’t behave as expected.

### 6.2 shadcn token mismatch

- `src/components/ui/button.tsx` (and many other UI components) use shadcn token classnames like:
  - `bg-primary`, `text-primary-foreground`, `text-muted-foreground`, etc.

But in `tailwind.config.ts`:

- There is **no** `colors.primary.foreground` mapping.
- Several “shadcn” token mappings exist (e.g., `border: hsl(var(--border))`, `foreground: hsl(var(--foreground))`), but in `src/styles/globals.css` those vars are not defined as HSL channels.

Practical impact:

- Classes like `text-primary-foreground` may not generate any CSS (missing token), leading to accidental defaults.
- Classes like `border-border` may generate invalid CSS if `--border` is `rgba(...)`.

### 6.3 Toast system duplication + theme provider mismatch

- `src/App.tsx` mounts both shadcn/Radix Toaster and Sonner Toaster.
- `src/components/ui/sonner.tsx` uses `useTheme()` from `next-themes`, but no `ThemeProvider` is mounted.

Recommendation direction:

- Decide on one toast system.
- If keeping Sonner + Tailwind dark variants:
  - Add `ThemeProvider` with `attribute="class"`.
  - Define shadcn variables in `globals.css` with `.dark` overrides.

## 7) Three.js Backgrounds and Motion

### 7.1 Three.js capability exists but is unused

- File: `src/components/WebGLCircuitBackground.tsx`
- It’s currently not referenced anywhere, so it does not impact runtime unless reintroduced.

If the rebrand requires a Three.js background:

- Re-introduce it intentionally (likely on the hero) and gate it:
  - Disable or reduce quality on mobile.
  - Respect reduced motion.
  - Lazy-load via dynamic import to avoid penalizing initial load.

### 7.2 Current “hero background” is SVG/Motion

- `src/components/IndustryBackground.tsx` is motion-driven SVG and is currently the active visual background.

This is generally safer than always-on WebGL, but it should be reviewed for:

- DOM size / animation cost on low-end devices.
- Consistency with the new premium agency brand language.

## 8) Performance, UX, and Accessibility Notes

### 8.1 Analytics

- Umami injection in `src/main.tsx` is cleanly gated behind env vars.

### 8.2 SPA consistency

- `src/pages/NotFound.tsx` uses `<a href="/">` instead of `<Link to="/">`.

### 8.3 Form UX and a11y

- `/contact` includes icons and status symbols in text (e.g. “✓”, clipboard glyph) with no `aria-label`.
- Clipboard API errors are logged but not surfaced to the user.

## 9) Risk Register (Prioritized)

| Severity | Issue | Evidence | Why it matters |
| ---: | ------ | ---------- | ---------------- |
| Critical | Routed contact form does not submit | `src/pages/Contact.tsx` uses simulated `setTimeout` | Lost leads, credibility loss |
| Critical | Theme token mismatch (shadcn classes may be broken) | `tailwind.config.ts` + `src/styles/globals.css` + `src/components/ui/*` | Visual regressions, unreadable text |
| High | Dark mode strategy mismatch | `darkMode: ["class"]` vs `prefers-color-scheme` | Inconsistent theming |
| High | Dual toast systems + missing ThemeProvider for Sonner | `src/App.tsx`, `src/components/ui/sonner.tsx` | Duplicate notifications, wrong styling |
| Medium | Orphan pages and unused code paths | `src/pages/Features.tsx` etc. not routed | Confusing IA, wasted maintenance |
| Medium | RTL applied via wrapper instead of `<html dir>` | `src/contexts/LanguageContext.tsx` | Portals/components may not respect RTL |

## 10) Quick Wins (1–2 days)

These are targeted fixes that improve “premium site credibility” fast.

1) Wire `/contact` to real submission (EmailJS or backend)
   - Update `src/pages/Contact.tsx` to use the existing `EmailService` OR render the existing `ContactForm` component.

2) Pick and standardize on one toast system
   - Remove either `Toaster` or `Sonner` from `src/App.tsx`.

3) Fix theme foundation (choose one approach)
   - Option A: Use `next-themes` + `.dark` class (aligns with Tailwind config).
   - Option B: Use media-based dark mode and switch Tailwind to `darkMode: 'media'`.

4) Make shadcn token variables real
   - Define required CSS variables (`--background`, `--foreground`, `--primary`, `--primary-foreground`, etc.) in `src/styles/globals.css` and ensure they are in the expected format.

5) Apply document-level RTL
   - In `src/contexts/LanguageContext.tsx`, set `document.documentElement.dir` alongside `.lang`.

6) Route or remove orphan pages
   - Either add routes for `Features/Technology/CaseStudies` in `src/App.tsx` or delete them and their unused sections.

## 11) Refactor Tracks (1–2 weeks)

1) Information architecture aligned to agency rebrand
   - Introduce routes like `/work`, `/services`, `/capabilities`, `/about`, `/contact`.

2) Content system for bilingual copy
   - Consolidate copy into translation dictionaries (or structured content files) and pass into sections.

3) Design system normalization
   - Unify on a single token model: either shadcn-style variables or the custom `--primary-text/--accent` system.
   - Remove ambiguous “compatibility” mappings that cause silent failures.

4) Performance hardening
   - Lazy-load heavy visuals (Three.js) and non-critical routes.
   - Add bundle analysis and performance budgets.

5) Lead pipeline hardening
   - Move submissions server-side if possible.
   - Add spam protections beyond localStorage (rate limiting at the edge, captcha alternatives, logging).

## 12) Reusable Assets Worth Keeping

- Section-based page composition under `src/components/sections/*` (easy to rebrand).
- `LanguageContext` structure (simple and effective for EN/FA).
- Motion animation infrastructure (`motion/react`) with reduced-motion considerations.
- UI primitives library under `src/components/ui/*` (once tokens are corrected).

## Appendix A — Environment Variables (do not commit values)

The project expects some `VITE_*` variables at build/runtime.

- Umami:
  - `VITE_UMAMI_URL`
  - `VITE_UMAMI_WEBSITE_ID`

- EmailJS:
  - `VITE_EMAILJS_PUBLIC_KEY`
  - `VITE_EMAILJS_USER_TEMPLATE`
  - `VITE_EMAILJS_ADMIN_TEMPLATE`

(Values should remain in `.env` locally and injected via your deployment platform.)
