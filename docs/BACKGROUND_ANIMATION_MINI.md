# FabrikTakt Background Animation – Minimal Implementation Guide

> Component anchor: `src/components/IndustryBackground.tsx`

Concise, actionable reference for maintaining and evolving the Industry 4.0 background without re‑reading the full strategic report.

## 1. Purpose & Principles

* Communicate manufacturing intelligence pipeline (Sensors → Edge → AI → Cloud → Insights) subtly.
* Never compete with foreground content (strict opacity discipline, low saturation, slow tempos).
* Performance & accessibility first: 60fps target, instant reduced‑motion fallback.
* Progressive enhancement: SVG + Motion today; optional WebGL layer later (guarded + lazy).

## 2. Visual Language & Layering

Current conceptual layers (bottom→top): Floor/Conveyor, Sensors, Neural Net, Edge, Cloud, Analytics, Digital Twin, Robotics, Maintenance Alert.

Opacity bands (guideline): background 0.05–0.08, functional 0.08–0.14, focal / alert ≤0.16 peak.

## 3. Tech & Architecture

* React + `motion/react` for per‑layer animations.
* Tailwind for utility styling; inline SVG for precision & reuse.
* Container: `pointer-events:none`, `aria-hidden` to stay non-interactive.
* Hook `useReducedMotion()` to short‑circuit heavy timelines.
* Future (optional): Three.js / WebGL particle grid behind existing layers (mounted only when `motionLevel === 'full'` & device capability OK).

## 4. Performance Budget (per frame rough goals)

* Background DOM animation work: ≤ 4–6 ms
* React re-render cost from animations: near zero (use Motion values, avoid prop churn)
* JS main thread overhead: < 5% CPU on mid-tier laptop
* No layout thrash: animate only `transform`, `opacity`, `stroke-dashoffset`, or `pathLength`.

## 5. Animation Patterns Used

* Staggered node pulses (indexed delay arrays)
* Path drawing via `pathLength` tween
* Gentle scale + opacity telemetry rings
* Independent loop durations (desynchronization for organic feel)
* CSS utility keyframes for ultra‑light repeating strokes
* Reduced motion: render static baseline shapes (one frame of each loop)

## 6. Accessibility Rules

* Honor `prefers-reduced-motion`: disable continuous transforms; keep semantic narrative via static icons.
* No rapid flashes (< 3 Hz) or high contrast flicker.
* Maintain WCAG contrast for foreground unaffected by background opacity limits.

## 7. Extension Hooks (Proposed Props)

```ts
interface IndustryBackgroundProps {
  intensity?: number;                 // scales base opacity
  motionLevel?: 'full'|'lite'|'off';  // overrides internal granularity (respect user pref on prod)
  enabledLayers?: Partial<Record<string, boolean>>; // selective rendering
  colorMode?: 'auto'|'light'|'dark';
  seed?: string;                      // procedural variation (future)
}
```

## 8. Minimal Roadmap

| Phase | Aim | Key Actions |
|-------|-----|-------------|
| 1 | Solidify current SVG/Motion baseline | Extract optional props, add tests for reduced motion, measure frame cost |
| 2 | Performance tooling | Lightweight FPS + memory logging (dev only), intersection pause off-screen |
| 3 | Progressive enhancement | Optional WebGL mesh / particle backdrop behind existing layers |
| 4 | Data-reactive states | Inject live metrics (e.g. alert intensity) via props; throttle updates |

## 9. Success Metrics

* Steady 60fps on MacBook Air M-series & recent mid-tier Windows laptop.
* Adding component increases bundle < 10 KB gzipped (excluding shared deps).
* Reduced motion path: zero continuous transforms (audit via code flag / screenshot diff).
* Lighthouse: 0 layout shift attributable to background (CLS unaffected).

## 10. Dev Checklist (PR Gate)

* [ ] Opacity bands respected
* [ ] No uncontrolled re-renders (verify React Profiler)
* [ ] Reduced motion snapshot behaves (manual toggle / emulate)
* [ ] No console warnings / animation leaks after unmount
* [ ] CPU trace: no long tasks > 50 ms introduced

## 11. Quick Troubleshooting

| Issue | Check |
|-------|-------|
| Layer invisible | Opacity too low or gradient ID collision |
| Jitter / stutter | Too many concurrent transforms; lengthen durations |
| Motion persists w/ reduced pref | Verify `useReducedMotion()` branching |
| Foreground readability dip | Lower `intensity` or disable a focal layer |

## 12. Future Ideas (Short List)

* Master timeline trigger chain (sensor → network → inference → alert)
* Mobile simplification mode (subset layers + slower cadence)
* User preference toggle persisted in localStorage
* Adaptive quality scaler (reduce complexity under low FPS)

---

Single-source of truth for quick decisions; defer deep rationale to `INDUSTRY_BACKGROUND.md`.
