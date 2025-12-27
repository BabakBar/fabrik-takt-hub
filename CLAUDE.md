# FabrikTakt - Project Context

AI-powered manufacturing intelligence platform. Marketing site with trilingual support (German/English/Persian with RTL).

## Stack

**Core**: React 18 • TypeScript 5 • Vite 5 • Bun  
**UI**: TailwindCSS 3 • Radix UI • shadcn/ui • Motion 12  
**Forms**: React Hook Form • Zod • EmailJS  
**State**: React Context • TanStack Query • React Router 6

## Structure

```txt
src/
├── components/ui/       # shadcn/ui primitives (40+ components)
├── components/sections/ # Landing page sections
├── pages/              # Routes (Index, Contact, Capabilities)
├── hooks/              # Custom hooks (validation, animations, forms)
├── contexts/           # LanguageContext (300+ translations)
└── services/           # EmailJS integration
```

## Key Patterns

- **Components**: Radix UI + CVA for variants, TypeScript interfaces
- **i18n**: Always use `t('key')` - test all DE/EN/FA with RTL
- **Forms**: React Hook Form + `useFormValidation` hook
- **Animations**: Motion via `useAnimations.ts` hooks
- **Styling**: Tailwind utilities + Industrial Pulse design tokens

## Commands

```bash
bun run dev              # Dev server (localhost:8080)
bun run build            # Production build
bun run lint             # ESLint
bunx tsc --noEmit        # TypeScript check
```

## Design System - "Industrial Pulse"

**Colors**: `--pulse-primary: #00d4ff` (cyan), `--bg-primary: #0a0f1a`, `--text-primary: #ffffff`
**Typography**: Orbitron (headlines), system fonts (body)
**Spacing**: 8px grid (Tailwind utilities)
**Effects**: Glassmorphism (`backdrop-blur-xl`), pulse animations
**Docs**: See `docs/REDESIGN_SPEC.md` for complete specifications

## Guidelines

### Do

- ✅ Support DE/EN/FA with LanguageContext (German primary)
- ✅ Use Industrial Pulse colors (cyan `#00d4ff`, not amber)
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
