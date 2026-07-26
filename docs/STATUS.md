# FabrikTakt Website Status

Updated: 2026-07-26

Branch: `feat/site-recovery-v2`

## Current state

The website has been rebuilt around a focused manufacturing AI systems position. English remains the canonical default at `/`, with shareable German under `/de/` and Persian under `/fa/`.

Implemented:

- unified Industrial Pulse visual system across every public route
- custom lightweight manufacturing-intelligence hero artwork
- Home, Capabilities, Approach, Contact, Legal Notice, Privacy, and Not Found pages
- complete German, English, and Persian content with RTL behavior
- self-hosted Instrument Sans for German and English, plus Estedad with Persian-specific display rhythm
- one real EmailJS-backed contact flow with validation, consent, spam friction, and direct-email fallback
- static route HTML with localized metadata, canonical URLs, hreflang, Open Graph, Twitter cards, and organization structured data
- permanent production redirects from legacy `/en/...` URLs to canonical unprefixed English routes
- responsive behavior from 320 px through desktop
- skip navigation, keyboard focus treatment, 44 px targets, reduced-motion support, and axe coverage
- CI for install, browser setup, lint, TypeScript, build, and Playwright
- removal of obsolete sections, broken audit scripts, unused UI primitives, and unused packages
- current versions of Vite and compatible development tooling
- deterministic Nginx production image with real 404 responses, health check, security headers, and cache policy

## Verified gates

Run on 2026-07-26:

- `bun run lint`: pass, zero warnings
- `bun run typecheck`: pass
- `bun run build`: pass
- `bun run test:e2e`: 10 passed
- `bunx knip --reporter compact`: no findings
- `bun audit`: no vulnerabilities
- Lighthouse: Performance 97, Accessibility 100, Best Practices 100, SEO 100
- Lighthouse transfer: 265 KiB
- Lighthouse LCP: 2.6 s under mobile throttling
- browser checks: no horizontal overflow or console errors in DE, EN, or FA

## Release blockers

### Legal operator details

The legal notice cannot be considered complete until Sia supplies:

- exact legal operator or entity name
- full service address
- any applicable register, registration, or VAT information
- responsible person wording if different from the operator

The page intentionally marks this limitation rather than publishing invented information. A qualified legal review is recommended.

### Production infrastructure

The code is ready for review, but these live changes require a separate, explicit infrastructure approval:

- redirect `www.fabriktakt.com` to the apex hostname
- move Cloudflare SSL from Full to Full (strict)
- raise minimum TLS to 1.2
- add HSTS only after confirming every relevant subdomain
- switch the Coolify application from Nixpacks to the repository Dockerfile
- enable and verify the `/healthz` Coolify application health check
- verify the Nginx security headers and immutable hashed-asset caching
- verify that unknown routes use the built `404.html` with a real HTTP 404 response

## Release sequence

1. Supply and review the missing legal operator details.
2. Mark draft pull request #6 ready for review.
3. Confirm the Coolify automatic-deploy state before merging.
4. Merge and verify the production deployment.
5. Apply the infrastructure hardening changes one by one with read-back verification.
