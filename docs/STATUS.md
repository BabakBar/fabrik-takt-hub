# FabrikTakt Website Status

Updated: 2026-07-26

Branch: `main`

## Current state

The website has been rebuilt around a focused manufacturing AI systems position. English remains the canonical default at `/`, with shareable German under `/de/` and Persian under `/fa/`.

Production is live from merge commit `def7c384909884c7d36c60c5a32f30c5d8b265ad`.

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
- local production-image Lighthouse: Performance 97, Accessibility 100, Best Practices 100, SEO 100
- live production Lighthouse: Performance 95, Accessibility 100, Best Practices 100, SEO 100
- live Lighthouse transfer: 267 KiB
- live Lighthouse LCP: 2.8 s under mobile throttling
- browser checks: no horizontal overflow or console errors in DE, EN, or FA
- live HTTP checks: English, German, and Persian routes return 200; unknown routes return 404
- Coolify: Dockerfile build, port 80, `/healthz`, healthy, zero restarts
- Cloudflare: Full (strict), minimum TLS 1.2, HTTPS redirect, and six-month HSTS
- canonical host: `www.fabriktakt.com` redirects to `https://fabriktakt.com` with path and query preserved

## Open follow-up

### Legal operator details

The legal notice cannot be considered complete until Sia supplies:

- exact legal operator or entity name
- full service address
- any applicable register, registration, or VAT information
- responsible person wording if different from the operator

The deployed page intentionally marks this limitation rather than publishing invented information. A qualified legal review is recommended.

## Production rollout record

Completed on 2026-07-26:

- pull request #6 merged to `main`
- webhook deployment `l48ocswos4scggsos8o4w8wo` built the merged Dockerfile
- Coolify initially retained six generated ingress labels pointing to the old port 3000, causing a 502 while the new nginx container was healthy on port 80
- the six stale Traefik and Caddy upstream-port references were changed to port 80
- corrective deployment `lcksw8goksk8gok0ck4g0w08` completed from the same merge commit
- Coolify read-back confirmed `running:healthy`, port 80, `/healthz`, and zero restarts
- Cloudflare read-back confirmed Full (strict), minimum TLS 1.2, Always Use HTTPS, and HSTS for six months without subdomains or preload
- Cloudflare ruleset `cbf788a6b0884bbc8dce77355938c203` performs the permanent `www` to apex redirect
- live response checks confirmed CSP, frame protection, referrer and permissions policies, font caching, localized static metadata, legacy `/en/...` redirects, and real 404 responses

## Next action

Replace the legal-notice warning with the verified operator details and obtain a legal review.
