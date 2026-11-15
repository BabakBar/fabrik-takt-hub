# FabrikTakt - Project Context

AI-powered manufacturing intelligence platform. Marketing site with trilingual support (German/English/Persian with RTL).

## Stack

**Core**: React 18 • TypeScript • Vite • Bun  
**UI**: plain CSS in `src/index.css` (custom properties) • lucide-react • react-helmet-async  
**Forms**: EmailJS (`@emailjs/browser`)  
**State/routing**: React Context • local `src/router.tsx`  
**Tests**: Playwright + axe (`tests/site.spec.ts`)

## Structure

```txt
src/
├── components/layout/   # Header, Footer
├── components/sections/ # Landing page sections
├── pages/               # Index, Approach, Capabilities, Contact, Legal, NotFound
├── contexts/            # LanguageContext (DE/EN/FA translations)
├── services/            # emailService (EmailJS)
└── router.tsx
```

## Key Patterns

- **i18n**: Always use `t('key')` - test all DE/EN/FA with RTL
- **Styling**: CSS custom properties in `src/index.css`

## Commands

```bash
bun run dev              # Dev server (localhost:8080)
bun run build            # Production build
bun run lint             # ESLint
bun run typecheck        # TypeScript check
bun run test:e2e         # Playwright
bun run check            # lint + typecheck + build + e2e
```

## Design tokens

Tokens live in `src/index.css`: `--ink*` (dark), `--paper*` (light), `--cyan` (`#39d9ff`).
Fonts: Instrument Sans; Estedad.

## Guidelines

### Do

- ✅ Support DE/EN/FA with LanguageContext (English is the fallback)
- ✅ Use TypeScript interfaces (avoid `any`)
- ✅ Implement ARIA labels & keyboard nav
- ✅ Test responsive (mobile-first)
- ✅ Keep bundle optimized (target: <200KB gzipped)

### Don't

- ❌ Hardcode strings (use translations)
- ❌ Bypass validation system
- ❌ Modify lock files or `.env`
- ❌ Skip accessibility
- ❌ Use inline styles

## Security

- Rate limit: 3 submissions/5min (localStorage)
- Spam protection: Honeypot + timing validation
- Env vars for API keys
