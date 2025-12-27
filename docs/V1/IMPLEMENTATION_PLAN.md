# FabrikTakt Redesign - Implementation Plan

**Design Reference**: `docs/REDESIGN_SPEC.md` (all specs, colors, examples)

**Progress Tracker**: `docs/PROGRESS.md` (detailed status)

**Status**: Phases 0-8 ✅ Complete | Hardening ✅ Complete | Phase 9 ▶️ In Progress

---

## Quick Reference

**Run before committing**:

```bash
bun run lint && bunx tsc --noEmit && bun run build
```

**Design System Colors**:

- Pulse Primary: `#00d4ff` (cyan)
- Backgrounds: `#0a0f1a`, `#111827`, `#1f2937`
- See REDESIGN_SPEC.md for complete palette

**Branch**: `main` (feature/industrial-pulse-redesign merged)

---

## Phase 0: Setup & Preparation ✅

**Status**: Complete (2025-12-26)

### Completed (Phase 0)

- Feature branch created
- Dependencies verified
- Dev server running
- Optimized images folder structure created

### Deliverables (Phase 0)

- ✅ Branch: feature/industrial-pulse-redesign
- ✅ Dev environment working
- ⏸️ WebP conversion pending (user task)

---

## Phase 1: Color System & CSS Foundation ✅

**Status**: Complete (2025-12-26)

### Completed (Phase 1)

- Industrial Pulse color tokens in globals.css
- Tailwind config updated with new palette
- All amber/gold references removed
- Shadow and border tokens defined

### Files Modified (Phase 1)

- `src/styles/globals.css`
- `src/index.css`
- `tailwind.config.ts`

### Acceptance (Phase 1)

- ✅ No amber/gold colors remaining
- ✅ All CSS variables defined and used
- ✅ Tailwind utilities map to new colors

---

## Phase 2: Create Reusable Components ✅

**Status**: Complete (2025-12-26)

### Completed (Phase 2)

- GlassCard component with variants (default, elevated, interactive)
- PulseAnimation component with SVG path animations
- Both components using new design tokens

### Files Created (Phase 2)

- `src/components/ui/GlassCard.tsx`
- `src/components/ui/PulseAnimation.tsx`

### Acceptance (Phase 2)

- ✅ GlassCard renders with glassmorphism effect
- ✅ PulseAnimation shows animated pulse line
- ✅ Both components accept className prop

---

## Phase 3: Header/Navbar Redesign ✅

**Status**: Complete (2025-12-26)

### Completed (Phase 3)

- Glass morphism navbar with backdrop blur
- Scroll detection for background opacity
- Brand lockup: "Fabrik" (white) + "Takt" (cyan)
- Language switcher with glass effect
- Mobile menu with glass styling

### Files Modified (Phase 3)

- `src/components/layout/Header.tsx`

### Acceptance (Phase 3)

- ✅ Header has glass effect
- ✅ Scroll changes opacity
- ✅ Brand name styled correctly
- ✅ Mobile menu functional

---

## Phase 4: Hero Section Rewrite ✅

**Status**: Complete (2025-12-26)

### Completed (Phase 4)

- Factory background image with gradient overlay
- PulseAnimation overlay
- Staggered text animations (Motion.js)
- Glass card with CTA button
- RTL support for arrow icons

### Files Modified (Phase 4)

- `src/components/sections/HeroSection.tsx`

### Acceptance (Phase 4)

- ✅ Factory image visible with overlay
- ✅ Pulse animation runs
- ✅ Text animates on load
- ✅ CTA button styled with pulse colors
- ✅ Works in EN/DE/FA with RTL

---

## Phase 5: Fix RTL & Language Context ✅

**Status**: Complete (2025-12-26)

### Completed (Phase 5)

- German set as default language
- Document-level `dir` attribute for RTL
- German translations added (45+ keys)
- RTL CSS utilities verified

### Files Modified (Phase 5)

- `src/contexts/LanguageContext.tsx`

### Acceptance (Phase 5)

- ✅ Default language is 'de'
- ✅ RTL works via document.documentElement.dir
- ✅ German translations complete
- ✅ Language switcher functional

---

## Hardening Phase ✅

**Status**: Complete (2025-12-26)

### Completed (Hardening)

- Fixed 14 TypeScript/ESLint errors
- Converted empty interfaces to type aliases
- Replaced all `any` types with proper types
- Fixed React hooks dependencies
- Proper window.gtag typing

### Files Modified (Hardening)

- `src/components/ui/command.tsx`
- `src/components/ui/textarea.tsx`
- `src/hooks/useAnimations.ts`
- `src/hooks/useFormSubmission.ts`
- `src/hooks/useFormValidation.ts`
- `src/services/emailService.ts`
- `eslint.config.js`

### Results (Hardening)

- ✅ TypeScript: 0 errors
- ✅ Build: Success (497KB JS)
- ✅ ESLint: 0 errors (8 acceptable React Refresh warnings)

---

## Phase 6: Update Remaining Sections ✅

**Status**: Complete (2025-12-27)

### Completed (Phase 6)

- SolutionSection refreshed with GlassCard layout, Pulse styling, and i18n keys
- SocialProofSection rebuilt with glass cards, metrics, and translations
- TechStackSection updated with glass treatment, metrics, and localization
- PilotCTASection redesigned with glass form, Pulse accents, reveal animations, and full i18n

### Files Modified (Phase 6)

- `src/components/sections/SolutionSection.tsx`
- `src/components/sections/SocialProofSection.tsx`
- `src/components/sections/TechStackSection.tsx`
- `src/components/sections/PilotCTASection.tsx`

### Acceptance Criteria (Phase 6)

- ✅ All sections use GlassCard
- ✅ Industrial Pulse colors throughout
- ✅ Animations consistent (reveal/stagger)
- ✅ German/EN/FA translations for all text
- ✅ RTL layout works properly

---

## Phase 7: Footer Update ✅

**Status**: Complete (2025-12-27)

### Completed (Phase 7)

- Glass-styled footer with Pulse hover states
- 3-column layout (Solutions, Company, Legal) with responsive stacking
- Social icons (LinkedIn, GitHub, Email) with hover animation
- Dynamic year copyright with localized text

### Files Modified (Phase 7)

- `src/components/layout/Footer.tsx`

### Acceptance Criteria (Phase 7)

- ✅ Glass morphism background
- ✅ 3 columns on desktop, stack on mobile
- ✅ Links wired to sections/routes
- ✅ Social icons animate on hover

---

## Phase 8: Delete Unused Files & Cleanup ✅

**Status**: Complete (2025-12-27)

### Completed (Phase 8)

- Removed legacy sections/pages (ProblemSection, ExamplesSection, CaseStudies, Features, Technology), SectionCard, WebGLCircuitBackground
- Pruned old color references and commented code
- Resolved ESLint errors from deleted files

### Acceptance Criteria (Phase 8)

- ✅ No dead code remaining
- ✅ ESLint errors: 0 (warnings limited to react-refresh only-export-components)
- ✅ Imports resolve cleanly

---

## Phase 9: Performance & Optimization ✅

**Status**: Complete (2025-12-27)

### Completed (Phase 9)

- Converted hero/section imagery to WebP (desktop + mobile variants) with PNG fallback
- Added `<picture>` for hero background with eager load, async decoding, and high fetch priority
- Preloaded critical hero assets in `index.html`
- Lazy-loaded below-the-fold home sections via IntersectionObserver + Suspense
- Added route-level code splitting for Index/Capabilities/Contact/NotFound
- Build snapshot (2025-12-27): main bundle `index-BbO0w1N2.js` gzip 116.61 kB; home chunk `Index-np0l6dSR.js` gzip 40.08 kB
- Lighthouse audit completed: Performance 100, Accessibility 95, Best Practices 100, SEO 100

### Tasks (Phase 9)

- [x] Convert key images to WebP (hero/sections)
- [x] Implement lazy loading for sections
- [x] Code splitting for routes
- [x] Add preload hints for critical assets
- [x] Confirm bundle budget and run Lighthouse
- [x] WebP coverage complete for active assets (favicons excluded as planned)

### Metrics Targets (Phase 9)

- [x] First Contentful Paint < 1.5s (Lighthouse: 100 score without throttling)
- [x] Bundle size < 450KB gzipped (current: ~157KB total gzipped JS)
- [x] Lighthouse score > 90 (Performance: 100, Accessibility: 95, Best Practices: 100, SEO: 100)
- [x] All key imagery in WebP (hero/sections complete, PNG fallbacks in place)

---

## Phase 10: Final Testing & Polish ⏸️

**Status**: Ready for Manual Testing (2025-12-27)

### Completed (Phase 10)

- Fixed LanguageToggle: Added German option, updated colors from amber to pulse (cyan)
- Code-level verification: All 3 languages (DE/EN/FA) functional
- RTL support verified via `document.documentElement.dir`
- Lighthouse accessibility score: 95

### Tasks (Phase 10) - Manual Testing Required

- **Cross-browser testing** (Chrome, Firefox, Safari) - Best done by user
- **Mobile responsiveness check** - Best done by user with actual devices
- **RTL layout verification** (Persian) - Code verified, visual testing by user
- **Accessibility audit** (ARIA, keyboard nav) - Lighthouse: 95, manual verification recommended
- **German translations review** - Native speaker review recommended

### Acceptance Criteria (Phase 10)

- [x] RTL layout implemented in code
- [x] Lighthouse accessibility > 90
- [ ] Manual cross-browser verification (user task)
- [ ] Manual mobile testing (user task)
- [ ] Native speaker translation review (user task)

---

## Completion Checklist

**Automated Verification Complete**:

- [x] Phases 0-9 complete (Phase 10 ready for manual testing)
- [x] `bun run lint` passes (0 errors, 8 acceptable React Refresh warnings)
- [x] `bunx tsc --noEmit` passes (0 errors)
- [x] `bun run build` succeeds (Bundle: ~157KB gzipped)
- [x] Multilingual support verified (DE/EN/FA with RTL)
- [x] Lighthouse score > 90 (Performance: 100, Accessibility: 95, Best Practices: 100, SEO: 100)
- [x] LanguageToggle fixed (German added, colors updated to pulse)

**Manual Testing Recommended**:

- [ ] Cross-browser verification (Chrome, Firefox, Safari)
- [ ] Mobile device testing (actual devices)
- [ ] Visual RTL verification (Persian layout)
- [ ] Native speaker review (German translations)

---

**Last Updated**: 2025-12-27

**Current Status**: Phases 0-9 Complete | Phase 10 Ready for Manual Testing | Automated Verification Passed
