# FabrikTakt Website

Public website for FabrikTakt, a manufacturing AI systems practice based in Germany.

FabrikTakt helps manufacturers turn production knowledge, machine signals, and business data into practical decision tools. The site positions the work around four focused capabilities:

- production intelligence
- AI knowledge systems
- data and integration foundations
- operational applications

## Experience

The website is available in German, English, and Persian:

| Language | Home | Example route |
| --- | --- | --- |
| English (default) | `/` | `/capabilities/` |
| German | `/de/` | `/de/capabilities/` |
| Persian | `/fa/` | `/fa/capabilities/` |

All public pages are localized, including Capabilities, Approach, Contact, Legal Notice, Privacy, and Not Found. Persian uses an RTL layout and is covered by the browser test suite.

## Stack

- React 18 and TypeScript
- Vite 8 and Bun
- plain responsive CSS with logical RTL properties
- self-hosted Instrument Sans and Estedad variable fonts
- EmailJS for contact delivery
- React Helmet Async plus generated static route metadata
- Playwright and axe-core for browser and accessibility testing

The site intentionally uses a small internal History API router. The route set is deterministic and does not require a general application-routing dependency.

## Local development

```bash
bun install
bun run dev
```

The development server runs at `http://localhost:8080`.

## Quality commands

```bash
bun run lint
bun run typecheck
bun run build
bun run test:e2e
bun run check
bun audit
```

`bun run build` creates route-specific HTML entrypoints under `dist/` so language, title, description, canonical URL, Open Graph fields, and Twitter fields are available before JavaScript executes.

Install the Playwright browser once on a new machine:

```bash
bunx playwright install chromium
```

## Environment

Copy `.env.example` to `.env` and populate only the services you use.

The contact form requires:

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_ADMIN_TEMPLATE`
- `VITE_EMAILJS_USER_TEMPLATE` for the optional confirmation email

Self-hosted Umami is optional:

- `VITE_UMAMI_URL`
- `VITE_UMAMI_WEBSITE_ID`

Do not commit `.env` or print secrets in logs.

## Contact behavior

There is one contact implementation shared by all languages. It provides:

- native required-field and email validation
- explicit privacy consent
- an RTL-safe honeypot
- a minimum completion-time check
- client-side successful-submission throttling
- delivery success only after the admin notification succeeds
- optional user confirmation that cannot turn a delivered enquiry into a false failure
- a direct email fallback when configuration or delivery is unavailable

Client-side anti-spam controls are friction, not a security boundary. EmailJS template restrictions and provider-side protections must remain enabled.

## Content and legal status

The public story deliberately avoids invented customer logos, testimonials, or performance numbers. Case studies should only be added when evidence and publication permission exist.

The legal and privacy routes are implemented, but the legal notice still needs Sia's exact legal operator name and service address before commercial deployment. Do not invent these details.

See [docs/STATUS.md](docs/STATUS.md) for the exact release state and remaining production actions.

## Deployment

The live site is served through Cloudflare and Coolify. A push to `main` may trigger an automatic production deployment, so infrastructure state must be checked before publishing.

The build output directory is:

```text
dist/
```

The canonical hostname is:

```text
https://fabriktakt.com
```
