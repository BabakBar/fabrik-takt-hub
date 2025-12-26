---
applyTo: '__never__'
---

<!-- markdownlint-disable -->

# User Memory

## User Preferences

- Programming languages: TypeScript (React)
- Development environment: VS Code on macOS
- Communication style: structured technical reports; concise but thorough

## Project Context

- Current project type: marketing/landing frontend site
- Tech stack: Vite + React + TypeScript + Tailwind CSS + shadcn/ui-style component library
- Routing: react-router-dom (client-side)
- i18n/RTL: custom `LanguageContext` with `t(key)` + many inline `language === 'fa' ? ... : ...`; current RTL is applied via a wrapper `dir`, not on `<html>`.
- Backgrounds: Motion/SVG `IndustryBackground` is used on the live hero; Three.js `WebGLCircuitBackground` exists but is currently unused.
- Forms: EmailJS `EmailService` exists but is currently only referenced by components/pages that are not routed; the `/contact` page form is simulated.

## Coding Patterns

- Component-driven sections (Hero/Features/etc) composed into page components
- UI primitives wrappers live in `src/components/ui/*`

## Context7 Research History

- 2025-12-26: Context7 web search endpoints returned "No Libraries Found" via `/search`; docs indicate API-based access requires API key and library IDs. Without an API key in this workspace, Context7 library doc retrieval via API cannot be performed.
  - Sources: [Context7 Overview](https://context7.com/docs/overview), [Context7 Usage](https://context7.com/docs/usage), [Context7 API Guide](https://context7.com/docs/api-guide)

## Web Research Sources

- shadcn/ui theming conventions and required CSS variables (e.g., `bg-primary` + `text-primary-foreground`) and `.dark` class approach:
  - <https://ui.shadcn.com/docs/theming>
  - <https://ui.shadcn.com/docs/dark-mode>
  - <https://ui.shadcn.com/docs/components-json>
- next-themes `ThemeProvider` required for `useTheme()` and Tailwind `dark` selector/class integration:
  - <https://github.com/pacocoursey/next-themes>
- Sonner usage: mount a single `<Toaster />` at app root:
  - <https://sonner.emilkowal.ski/>
  - <https://sonner.emilkowal.ski/getting-started>
- Radix styling patterns (data attributes, unstyled primitives):
  - <https://www.radix-ui.com/primitives/docs/guides/styling>

## Conversation History

- 2025-12-26: Requested comprehensive repo scan for architecture, routing, composition patterns, state/i18n/RTL/styling/animation/Three.js/analytics/email paths; produce structured report with diagram + risks + reusable assets.
- 2025-12-26: Discovery findings highlight: orphan pages not routed (`Features`, `Technology`, `CaseStudies`), contact form does not submit (simulated), EmailJS submission components not referenced by routed pages, and theming/toast system conflicts.
- 2025-12-26: Produced Phase 1 Deep Discovery report: `docs/DEEP_DISCOVERY.md`.

## Notes

- Avoid storing secrets in memory.
- Workspace has an ignored `.env` for local environment configuration; do not copy values into reports or memory.
