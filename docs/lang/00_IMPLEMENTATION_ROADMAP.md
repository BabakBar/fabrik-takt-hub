# FabrikTakt Persian Implementation – Execution Plan

This is the authoritative playbook for launching production-ready Persian (fa) support. Work through the steps in order; each section assumes all previous work is complete. Update this document if reality diverges so it always matches the repository.

---

## 0. Baseline Verification

- **Install dependencies** with `bun install`.
- **Run the dev server** (`bun run dev`) and note any console warnings related to language handling.
- **Capture the current behaviour**:
  - Toggle languages via `src/components/ui/LanguageToggle.tsx` and confirm all surfaces affected by `LanguageContext`.
  - Inspect `<html>` in DevTools to confirm only `lang` is set—`dir` is still missing.
- **Document known entry points** that will be touched: `src/main.tsx`, `src/App.tsx`, `src/contexts/LanguageContext.tsx`, `src/components/SEO.tsx`, Tailwind config, and every component/page under `src/` with hardcoded copy.

Deliverable: short status note summarising current behaviour and any unexpected issues discovered.

---

## 1. Stabilise Language Foundation

### 1.1 Normalise document directionality
- Update `src/contexts/LanguageContext.tsx`:
  - Extend the existing `useEffect` to set `document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr'`.
  - Remove `dir={...}` from the wrapper `<div>` so `<html>` becomes the single source of truth.
- Verify the wrapper still swaps font families correctly (`font-persian` vs `font-sans`).

### 1.2 Connect SEO metadata to language state
- Modify `src/components/SEO.tsx`:
  - Import `useLanguage` and emit `<html lang={language} dir={language === 'fa' ? 'rtl' : 'ltr'} />` inside `Helmet`.
  - Ensure duplicate attribute updates do not trigger hydration warnings.
- In every page component that renders `<SEO />`, confirm the correct locale-specific metadata is passed once translations exist.

### 1.3 Harden persistence
- Confirm `LanguageProvider` initialises from `localStorage` only after the browser environment exists (guard for SSR if needed later).
- Add a TODO in this doc if additional guard logic is required when introducing server rendering.

Deliverable: `<html>` reflects the active locale without manual overrides, and SEO metadata reflects language state.

---

## 2. Typography & Global Styling

- Create `public/fonts/` and add `Vazirmatn-Variable.woff2` (subset if possible).
- Add `src/styles/fonts.css`:
  - Define an `@font-face` for `Vazirmatn`, restricting `unicode-range` to Persian/Arabic code points.
  - Import the file at the top of `src/index.css` before Tailwind directives.
- Extend `fontFamily` in `tailwind.config.ts` with `persian: ['Vazirmatn', '-apple-system', 'Segoe UI', 'Tahoma', 'sans-serif']`.
- Verify in DevTools that Persian copy uses Vazirmatn while English still uses the existing default.

Deliverable: screenshot or note confirming the font swap is effective for Persian copy.

---

## 3. Introduce Lingui Infrastructure

### 3.1 Dependencies & config
- Install runtime packages: `bun add @lingui/core @lingui/react`.
- Install tooling: `bun add -D @lingui/cli @lingui/macro @lingui/vite-plugin @lingui/swc-plugin`.
- Add `lingui.config.ts` in the repo root:
  ```ts
  export default {
    locales: ['en', 'fa'],
    sourceLocale: 'en',
    catalogs: [
      {
        path: 'src/locales/{locale}/messages',
        include: ['src'],
      },
    ],
    format: 'po',
  };
  ```

### 3.2 Wire Vite & TypeScript
- Update `vite.config.ts`:
  - Import `lingui` and add it before the React SWC plugin.
  - Pass `{ plugins: [['@lingui/swc-plugin', {}]] }` into `react()` to enable macro transforms.
- Add `"types": ["@lingui/react", "@lingui/core"]` to `compilerOptions` in `tsconfig.json`.

### 3.3 Bootstrap runtime
- Create `src/i18n/index.ts`:
  - Initialise `i18n` from `@lingui/core`.
  - Export helpers `activate(locale: Language)` and `loadCatalog(locale)`.
  - Defer catalog loading until needed (dynamic `import` of compiled catalogs).
- Update `src/App.tsx`:
  - Wrap existing providers with `<I18nProvider i18n={i18n}>`.
  - Ensure the component waits for catalog loading before rendering (e.g., via suspense or a small state gate).
- Keep `LanguageContext` temporarily to bridge stored locale -> Lingui activation; plan for removal in Step 4.

Deliverable: `bun run i18n:extract` and `bun run i18n:compile` succeed, producing `src/locales/en/messages.po` and compiled catalogs.

---

## 4. Migrate Existing Translation Data

### 4.1 Export current dictionary
- Convert the giant `translations` object in `src/contexts/LanguageContext.tsx` into a temporary JSON file (`scripts/extract-translations.ts`) that writes the English strings to `src/locales/en/messages.json`.
- Preserve key names; they will become message IDs in Lingui.

### 4.2 Seed Lingui catalogs
- Use Lingui’s `format-json` helper or a custom script to transform the JSON into `.po` entries.
- Run `bun run i18n:compile` to create `src/locales/en/messages.js` (or `.ts`).
- Replace the `translations` object export with a lightweight shim that reads from Lingui (see next step).

### 4.3 Replace `LanguageContext.t`
- In `LanguageContext`, remove the dictionary and have `t` call `i18n._(key)` so existing components keep working while the migration completes.
- After all call sites move to Lingui hooks (Step 5), plan to delete `t` entirely and shrink the context to `{ language, setLanguage }` or drop it in favour of Lingui’s `useLingui`.

Deliverable: Lingui holds the source strings, and the app builds without the inline dictionary.

---

## 5. Eliminate Hardcoded Copy

### 5.1 Identify strings
- Use `rg` to find patterns:
  - `rg '"[^"]*[A-Za-z][^"]*"' src --glob '*.tsx' --line-number`
  - `rg '>\s*[A-Za-z].*<' src --line-number`
- Catalogue three buckets:
  1. Strings already using `t(key)`.
  2. Hardcoded copy within JSX.
  3. Data files under `src/data/` that surface UI text.

### 5.2 Migrate component-by-component
- For each component:
  - Replace `const { t } = useLanguage()` with `const { _ } = useLingui()` or `<Trans>` blocks.
  - Wrap complex JSX fragments with `<Trans id="component.section">` to retain markup.
  - When interpolating values, use `<Trans>` with components/values arrays.
- Remove the fallback `t` usage once all references in that component are updated.

### 5.3 Update forms & toasts
- Files to prioritise: `src/components/forms/ContactForm.tsx`, `src/hooks/useFormSubmission.ts`, `src/hooks/useFormValidation.ts`.
- Replace inline error strings with Lingui macros (`msgid`, `<Trans>`).
- Confirm EmailJS payloads still receive English (or decide on dual-language payloads).

Deliverable: `LanguageContext.t` has no remaining consumers and can be removed in Step 6.

---

## 6. Simplify Locale State Management

- Strip `LanguageContext` down to a tiny provider that only exposes `language` and `setLanguage`, or replace it entirely with a custom hook that proxies to Lingui.
- Update `src/components/ui/LanguageToggle.tsx` to call the new activation helper instead of toggling context state directly.
- Add locale persistence logic:
  - Use `localStorage` guard inside `activate` helper.
  - Sync `<html lang>` and `<html dir>` there rather than in a React effect.
- Remove redundant `LanguageProvider` wrapper if Lingui handles everything.

Deliverable: Locale changes propagate through Lingui alone; no duplicate state remains.

---

## 7. Locale-Aware Routing & Navigation

- Adopt locale prefixes:
  - Refactor `src/App.tsx` to use a `Routes` tree like `/:locale(en|fa)` with child routes for `/`, `/capabilities`, `/contact`.
  - Add a redirect so bare `/` sends the user to `/en/`.
- Update internal links (`<Link>` components, menu items) to prepend the active locale.
- Ensure the 404 page (`src/pages/NotFound.tsx`) points users back to the correct locale root.
- Update any `window.location` usage to respect the active locale.

Deliverable: Navigating via the URL preserves locale, and deep links under `/fa/` render correctly.

---

## 8. RTL-Safe Layout & Components

### 8.1 Tailwind configuration
- Install `tailwindcss-vanilla-rtl` (`bun add -D tailwindcss-vanilla-rtl`).
- In `tailwind.config.ts`, import `rtl` and add it as the first plugin.

### 8.2 Audit class usage
- Search for direction-specific utilities (`rg '-left|-right|ml-|mr-|pl-|pr-' src`).
- Replace with logical counterparts (`ps-`, `pe-`, `ms-`, `me-`) provided by the RTL plugin.
- Review inline styles and third-party components (e.g., Embla carousel, Radix primitives) for direction-specific assumptions.

### 8.3 Component verification
- Check hero sections, cards, and grids in `src/components/sections/` to ensure alignment flips properly.
- For SVG icons or animations that should mirror, implement conditional transforms based on `language`.

Deliverable: Visual QA screenshots showing major sections in both LTR and RTL with correct spacing and flow.

---

## 9. Content, Data & Assets

- Localise structured data under `src/data/` (benefits, FAQs, timeline entries).
- Store copy that belongs to CMS-like data in Lingui catalogs; only keep non-user-facing constants in TypeScript modules.
- Review images/illustrations for embedded text; provide Persian variants if needed.
- For downloadable assets or PDFs, confirm whether a Persian version is required and document the decision.

Deliverable: No English-only content remains visible when Persian is active.

---

## 10. Forms, Numbers & Dates

- Introduce utilities under `src/utils/`:
  - `persianNumbers.ts` for digit conversion.
  - `persianNormalization.ts` for Kaf/Yeh/ZWNJ handling.
  - `persianDate.ts` using `jalaali-js`.
- Integrate utilities:
  - Apply `normalizePersianObject` before form submission in `useFormSubmission.ts`.
  - Format dates/numbers via Lingui pluralisation or helper functions wherever they appear (charts, stats, etc.).
- Update validation messages in `useFormValidation.ts` to surface Persian copy and convert digits where appropriate.

Deliverable: Forms accept Persian input gracefully, and any displayed numbers/dates respect locale conventions.

---

## 11. Metadata, Analytics & SEO

- Extend `<SEO />` to accept structured data for `hreflang`, canonical URLs, and OpenGraph locales.
- Generate `<link rel="alternate" hreflang="...">` tags per page via Lingui message IDs or a small helper.
- Update the sitemap generator (or add one) so both `/en/...` and `/fa/...` routes are indexed.
- Confirm Umami tracking differentiates locales (e.g., append locale to custom events or page names).

Deliverable: Google’s rich results tester and Search Console validations succeed for both locales.

---

## 12. Testing & Quality Gates

- **Unit tests**: add coverage for locale utilities and any logic-heavy components using Vitest (if configured) or create a new setup.
- **Integration tests**: introduce Playwright or Cypress scripts that load pages in both locales, switch languages, and assert critical UI text.
- **Visual regression**: configure Chromatic, Loki, or Playwright snapshots to capture `/en/` and `/fa/` states.
- **Accessibility**: run axe (manual or automated) in both directions to ensure no new violations appear.

Deliverable: CI pipeline (or a documented manual process) that executes the above checks for each release.

---

## 13. Translation Workflow & Release

- Select and configure a Translation Management System (Lokalise, Phrase, etc.):
  - Connect Lingui PO files to the platform.
  - Set up branching or environments for staging vs production locales.
- Document contributor workflow:
  - How to run `bun run i18n:extract` before pushing.
  - How to review translations locally (`bun run i18n:compile`).
- Prepare release notes covering:
  - Updated routes and any backend/API ramifications.
  - New build steps (i18n extraction/compile).
  - Outstanding follow-up items (e.g., additional locales, CMS integration).
- Perform final manual QA with native Persian speakers before deploying.

Deliverable: Signed-off release checklist and updated team handbook entry describing the ongoing localisation process.

---

**Keep this document evergreen**: whenever implementation decisions change, update the relevant step so future contributors always have a trustworthy, code-aligned plan.
