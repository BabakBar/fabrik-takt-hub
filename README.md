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

## Stack

- React 18 and TypeScript
- Vite 8 and Bun
- plain responsive CSS with logical RTL properties
- self-hosted Instrument Sans and Estedad variable fonts
- EmailJS for contact delivery
- React Helmet Async plus generated static route metadata
- Playwright and axe-core for browser and accessibility testing

The site intentionally uses a small internal History API router. The route set is deterministic and does not require a general application-routing dependency.
```
