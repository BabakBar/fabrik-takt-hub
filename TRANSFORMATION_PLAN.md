# TRANSFORMATION_PLAN.md (generated artifact)

<!-- markdownlint-disable -->

This file was generated during a prior automated audit and is **not** part of the Phase 1 deliverable.

The authoritative Phase 1 Deep Discovery report is in `docs/DEEP_DISCOVERY.md`.

You can safely delete this file from the repository.

### 3.2 Section Restructure

**Transformation Matrix**:

| Current | Action | New Purpose |
|---------|--------|-------------|
| HeroSection.tsx | Rewrite | Agency value prop |
| ProblemSection.tsx | **Delete** | Not needed |
| SolutionSection.tsx | Rename → ServicesSection.tsx | 5 core services |
| SocialProofSection.tsx | Rename → PortfolioSection.tsx | Case studies grid |
| FeaturesSection.tsx | **Delete** | Redundant |
| TechStackSection.tsx | Update | Tech expertise |
| ExamplesSection.tsx | **Delete** | Merged into portfolio |
| PilotCTASection.tsx | Rename → ContactCTASection.tsx | "Start Your Project" |

**Net**: 8 sections → 5 sections (-3 files)

### 3.3 Hero Section Transformation
**File**: `src/components/sections/HeroSection.tsx`

**Current state** (lines 1-71):
- Factory brain messaging: "Turn Chaos into Clarity"
- Amber/gold gradient accent (#ffc107, #ffb300)
- Link to `/capabilities` with "Explore Capabilities" CTA
- Uses `IndustryBackground` component

**Changes**:

1. **Update translations** in `LanguageContext.tsx`:
```typescript
// English
'hero.title': 'We Build',
'hero.titleAccent': 'AI-Powered Solutions',
'hero.subtitle': 'Premium engineering for web, mobile, ML, and cloud infrastructure',
'hero.ctaPrimary': 'View Our Work',

// German
'hero.title': 'Wir entwickeln',
'hero.titleAccent': 'KI-gestützte Lösungen',
'hero.subtitle': 'Premium Engineering für Web, Mobile, ML und Cloud-Infrastruktur',
'hero.ctaPrimary': 'Unsere Arbeit ansehen',

// Persian (update from factory messaging)
'hero.title': 'ما می‌سازیم',
'hero.titleAccent': 'راه‌حل‌های مبتنی بر هوش مصنوعی',
'hero.subtitle': 'مهندسی حرفه‌ای برای وب، موبایل، یادگیری ماشین و زیرساخت ابری',
'hero.ctaPrimary': 'مشاهده نمونه کارها',
```

2. **Update component** (replace lines 29-41):
```tsx
<h1 className="text-3xl md:text-7xl lg:text-8xl font-black leading-none mb-6" style={{
  background: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: `
    0 1px 0 rgba(255,255,255,0.1),
    0 4px 8px rgba(0,0,0,0.3),
    0 8px 16px rgba(0,0,0,0.2),
    0 0 40px rgba(255,255,255,0.05)
  `
}}>
  {t('hero.title')}<br />
  <span style={{
    background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)', // Red gradient (was gold)
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: `
      0 1px 0 rgba(220,38,38,0.1),
      0 4px 8px rgba(0,0,0,0.3),
      0 8px 16px rgba(0,0,0,0.2),
      0 0 40px rgba(220,38,38,0.15)
    `
  }}>{t('hero.titleAccent')}</span>
</h1>
```

3. **Update CTA button** (line 52-62):
```tsx
<Link to="/portfolio"> {/* Changed from /capabilities */}
  <Button
    size="lg"
    className="inline-flex items-center rounded-md bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 text-lg transition-colors" // Red (was amber-400)
  >
    {t('hero.ctaPrimary')}
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</Link>
```

4. **Update eyebrow text** (line 14-16):
```tsx
<div className="text-xs font-mono uppercase tracking-widest text-red-400/60 mb-3">
  {"// Premium Engineering Solutions"} {/* Changed from AI Applications for Industries */}
</div>
```

5. **Replace background** (line 10):
```tsx
<PremiumBackground /> {/* Will be created in Phase 2.1, replaces IndustryBackground */}
```

**Visual result**:
- White gradient headline "We Build"
- Red gradient accent "AI-Powered Solutions"
- Simplified subtitle (tech agency positioning)
- Single red CTA button
- Links to portfolio instead of capabilities
- Clean, minimal, high-contrast design

### 3.4 Services Section
**File**: `src/components/sections/SolutionSection.tsx` → `ServicesSection.tsx`

**Content Source**: `src/data/capabilities.tsx` (already has 6 services)

**Design**: Grid (2 cols mobile, 3 desktop)
- Icon (lucide-react, red on hover)
- Title (bold white)
- 2 bullet points (gray-300)
- Red glow on hover

**Translation Keys**: ~30 keys × 3 languages = 90 entries

### 3.5 Portfolio Section
**File**: `src/components/sections/SocialProofSection.tsx` → `PortfolioSection.tsx`

**Current state**: Shows 2 testimonials with stats (80% reduction, 1K+ entries)

**New structure**: Portfolio grid with case studies

**1. Create data file** `src/data/caseStudies.json`:
```json
{
  "caseStudies": [
    {
      "id": "manufacturing-ai-assistant",
      "title": {
        "en": "Manufacturing AI Assistant",
        "de": "KI-Assistent für die Fertigung",
        "fa": "دستیار هوش مصنوعی تولید"
      },
      "client": {
        "en": "Industrial Manufacturing Client",
        "de": "Industrieller Fertigungskunde",
        "fa": "مشتری تولید صنعتی"
      },
      "category": {
        "en": "AI/ML · Web Application",
        "de": "AI/ML · Webanwendung",
        "fa": "هوش مصنوعی · اپلیکیشن وب"
      },
      "thumbnail": "/images/portfolio/manufacturing-ai.webp",
      "description": {
        "en": "AI-powered knowledge management system that captures worker expertise and makes it searchable",
        "de": "KI-gestütztes Wissensmanagementsystem zur Erfassung und Suche von Fachwissen",
        "fa": "سیستم مدیریت دانش مبتنی بر هوش مصنوعی برای ذخیره و جستجوی تخصص کارگران"
      },
      "tags": ["Python", "React", "AI/ML", "PostgreSQL"],
      "featured": true,
      "link": "/case-studies/manufacturing-ai-assistant"
    },
    {
      "id": "enterprise-ml-pipeline",
      "title": {
        "en": "Enterprise ML Pipeline",
        "de": "Enterprise ML-Pipeline",
        "fa": "پایپلاین یادگیری ماشین سازمانی"
      },
      "client": {
        "en": "Fortune 500 Analytics Company",
        "de": "Fortune-500-Analyseunternehmen",
        "fa": "شرکت تحلیل داده Fortune 500"
      },
      "category": {
        "en": "Data & Analytics · Cloud",
        "de": "Daten & Analytik · Cloud",
        "fa": "داده و تحلیل · ابر"
      },
      "thumbnail": "/images/portfolio/ml-pipeline.webp",
      "description": {
        "en": "Scalable ML pipeline processing 10M+ records daily with automated model retraining",
        "de": "Skalierbare ML-Pipeline verarbeitet täglich 10M+ Datensätze mit automatischem Modelltraining",
        "fa": "پایپلاین یادگیری ماشین مقیاس‌پذیر با پردازش +10 میلیون رکورد روزانه"
      },
      "tags": ["Python", "AWS", "Kubernetes", "MLflow"],
      "featured": true,
      "link": "/case-studies/enterprise-ml-pipeline"
    },
    {
      "id": "mobile-field-app",
      "title": {
        "en": "Mobile Field Operations App",
        "de": "Mobile Außendienst-App",
        "fa": "اپلیکیشن موبایل عملیات میدانی"
      },
      "client": {
        "en": "Logistics & Supply Chain",
        "de": "Logistik & Supply Chain",
        "fa": "لجستیک و زنجیره تامین"
      },
      "category": {
        "en": "Mobile · Custom Applications",
        "de": "Mobile · Individuelle Anwendungen",
        "fa": "موبایل · اپلیکیشن سفارشی"
      },
      "thumbnail": "/images/portfolio/mobile-field.webp",
      "description": {
        "en": "Cross-platform mobile app for field technicians with offline-first architecture",
        "de": "Plattformübergreifende Mobile-App für Außendiensttechniker mit Offline-First-Architektur",
        "fa": "اپلیکیشن موبایل چند پلتفرمه برای تکنسین‌های میدانی با معماری آفلاین"
      },
      "tags": ["React Native", "TypeScript", "SQLite", "GraphQL"],
      "featured": false
    },
    {
      "id": "computer-vision-qa",
      "title": {
        "en": "Computer Vision QA System",
        "de": "Computer-Vision-QS-System",
        "fa": "سیستم کنترل کیفیت بینایی کامپیوتر"
      },
      "client": {
        "en": "Automotive Manufacturing",
        "de": "Automobilherstellung",
        "fa": "تولید خودرو"
      },
      "category": {
        "en": "Computer Vision · AI/ML",
        "de": "Computer Vision · AI/ML",
        "fa": "بینایی کامپیوتر · هوش مصنوعی"
      },
      "thumbnail": "/images/portfolio/cv-qa.webp",
      "description": {
        "en": "Real-time defect detection system achieving 99.2% accuracy with automated quality reporting",
        "de": "Echtzeit-Fehlererkennung mit 99,2% Genauigkeit und automatischer Qualitätsberichterstattung",
        "fa": "سیستم تشخیص عیب real-time با دقت 99.2٪ و گزارش خودکار کیفیت"
      },
      "tags": ["Python", "OpenCV", "TensorFlow", "Azure"],
      "featured": true
    }
  ]
}
```

**2. Update component** `src/components/sections/PortfolioSection.tsx`:
```tsx
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { PoweredBySignature } from '@/components/ui/PoweredBySignature';
import caseStudiesData from '@/data/caseStudies.json';

export const PortfolioSection = () => {
  const { language, t } = useLanguage();
  const featuredCases = caseStudiesData.caseStudies.filter(c => c.featured);

  return (
    <section className="py-24 bg-slate-secondary">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCases.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={study.link} className="group block">
                <div className="relative overflow-hidden rounded-lg bg-slate-primary border-t-2 border-red-600 hover:border-red-500 transition-all">
                  {/* Thumbnail */}
                  <div className="aspect-video bg-slate-tertiary overflow-hidden">
                    <img
                      src={study.thumbnail}
                      alt={study.title[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-red-400 mb-2">
                      {study.category[language]}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {study.title[language]}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {study.description[language]}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs bg-slate-tertiary text-gray-300 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* "Powered by FabrikTakt" signature */}
                    <PoweredBySignature />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white">
              {t('portfolio.viewAll')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
```

**3. Add translations**:
```typescript
'portfolio.title': 'Our Work',
'portfolio.subtitle': 'Selected projects showcasing our engineering expertise',
'portfolio.viewAll': 'View All Projects',
```

**4. Create placeholder images**: Use temporary placeholders until real screenshots:
- `/public/images/portfolio/manufacturing-ai.webp` (1200×675, ~50KB)
- `/public/images/portfolio/ml-pipeline.webp`
- `/public/images/portfolio/mobile-field.webp`
- `/public/images/portfolio/cv-qa.webp`

**Visual design**:
- Dark cards on slightly lighter background
- Red top border (2px)
- Image 16:9 aspect ratio
- Hover: scale image + red overlay + title color change
- Tags as small pills
- "Powered by FabrikTakt" signature at bottom
- Responsive: 1 col mobile, 2 tablet, 3 desktop

### 3.6 "Powered by FabrikTakt" Signature
**New Component**: `src/components/ui/PoweredBySignature.tsx`

```tsx
<div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
  Powered by <span className="text-red-600 font-semibold">FabrikTakt</span>
</div>
```

---

## Phase 4: Routing & Pages (2-3h)

### 4.1 New Page Structure

| Route | File | Action |
|-------|------|--------|
| `/` | Index.tsx | Rewrite sections |
| `/capabilities` | Capabilities.tsx | Update copy |
| `/portfolio` | Portfolio.tsx | **NEW** - case studies grid |
| `/case-studies/:id` | CaseStudy.tsx | **NEW** - detail template |
| `/contact` | Contact.tsx | Keep (update form fields) |
| `/404` | NotFound.tsx | Keep |

**Delete**: Features.tsx, Technology.tsx (merged into capabilities)

### 4.2 Case Study Detail Page
**New File**: `src/pages/CaseStudy.tsx`

**Structure**:
- Hero (title + client + category)
- Challenge section
- Solution section (approach + tech stack)
- Results section (metrics/outcomes)
- Gallery (2-3 images)
- "Powered by FabrikTakt" signature
- CTA: "Start Your Project"

**Data Source**: `src/data/caseStudies.json` (NEW)

### 4.3 Navigation
**File**: `src/components/layout/Header.tsx`

**New Links**:
```tsx
<Link to="/capabilities">Capabilities</Link>
<Link to="/portfolio">Portfolio</Link>
<Link to="/contact">Contact</Link>
```

**Translations**: Add nav.portfolio keys (× 3 languages)

---

## Phase 5: Polish & Performance (2-3h)

### 5.1 SEO Updates
**Files**: `index.html` + page meta tags (react-helmet-async)

- Title: "FabrikTakt - AI & Cloud Engineering Agency"
- Description: "Premium engineering for AI/ML, web/mobile apps, and cloud infrastructure"
- Update Open Graph tags
- Add JSON-LD Organization schema

### 5.2 Accessibility Audit
- ARIA labels on new components
- Color contrast check (red #DC2626 on dark = WCAG AA ✓)
- Keyboard nav for portfolio grid
- Focus indicators

**Tool**: Lighthouse (target: 95+ accessibility)

### 5.3 Performance Targets
- Bundle: <200KB (down from 503KB)
- Lighthouse Performance: 90+
- FCP: <1.5s
- TTI: <3.5s

**Optimizations**:
- Three.js removed (-500KB)
- Lazy load portfolio images
- Minimize translation object

### 5.4 EmailJS Updates
**File**: `src/services/emailService.ts`

- Update template text ("Project Inquiry" not "Pilot Request")
- Add "Project Type" dropdown (AI/ML, Web, Mobile, Cloud, Other)
- Keep spam protection (honeypot, timing, rate limiting)

---

## Phase 6: German Translation (3-4h)

### Workflow
1. Export `en` keys to JSON
2. Machine translate EN→DE (Claude/DeepL)
3. Manual review critical keys
4. Import to LanguageContext
5. Test DE toggle

### Quality Guidelines
- Technical terms often stay English (AI, ML, Cloud)
- Use formal "Sie" (B2B agency)
- German compounds: "Softwareentwicklung" not "Software Entwicklung"

### LanguageToggle Update
**File**: `src/components/ui/LanguageToggle.tsx`

**Change**: 2-state (EN/FA) → 3-state dropdown (EN/DE/FA)

Use Radix Select component (already installed)

---

## Phase 7: Deployment & Verification (1-2h)

### Pre-Deployment Checklist
- [ ] `bun run build` succeeds
- [ ] Bundle <200KB
- [ ] All 3 languages render (EN/DE/FA)
- [ ] RTL works for Persian
- [ ] Portfolio images lazy load
- [ ] Contact form submits
- [ ] All nav links work
- [ ] Mobile responsive (320px → 1920px)

### Lighthouse Audit
**Targets**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Git Strategy
1. Branch: `feature/agency-rebrand`
2. Commit after each phase
3. Tag milestones: `v2.0-foundation`, `v2.0-content`, etc.
4. Merge to main after verification

---

## File Changes Summary

### Modify (21 files)

**Core**:
- `src/contexts/LanguageContext.tsx` - Add German (150+ keys × 3)
- `src/styles/globals.css` - Color palette
- `src/index.css` - Animation colors
- `package.json` - Remove Three.js

**Background**:
- `src/components/IndustryBackground.tsx` → `PremiumBackground.tsx`

**Sections**:
- `src/components/sections/HeroSection.tsx` - Agency value prop
- `src/components/sections/SolutionSection.tsx` → `ServicesSection.tsx`
- `src/components/sections/SocialProofSection.tsx` → `PortfolioSection.tsx`
- `src/components/sections/TechStackSection.tsx` - Update copy
- `src/components/sections/PilotCTASection.tsx` → `ContactCTASection.tsx`

**Pages**:
- `src/pages/Index.tsx` - Update section imports
- `src/pages/Capabilities.tsx` - Update descriptions
- `src/pages/Contact.tsx` - Update form

**Layout**:
- `src/components/layout/Header.tsx` - Add portfolio link
- `src/components/layout/Footer.tsx` - Update copy

**UI**:
- `src/components/ui/LanguageToggle.tsx` - 3-state selector

**Data**:
- `src/data/capabilities.tsx` - Update descriptions

**Services**:
- `src/services/emailService.ts` - Update template

**Config**:
- `index.html` - SEO meta

### Create (4 files)
- `src/pages/Portfolio.tsx` - Case studies grid
- `src/pages/CaseStudy.tsx` - Detail template
- `src/components/ui/PoweredBySignature.tsx` - Brand watermark
- `src/data/caseStudies.json` - Portfolio content

### Delete (6 files)
- `src/components/WebGLCircuitBackground.tsx`
- `src/components/sections/ProblemSection.tsx`
- `src/components/sections/FeaturesSection.tsx`
- `src/components/sections/ExamplesSection.tsx`
- `src/pages/Features.tsx`
- `src/pages/Technology.tsx`

### Keep Unchanged
- All 40+ shadcn/ui components
- All hooks (validation, animations, toast)
- Router setup, Vite config, TypeScript config

---

## Critical Files (Top 5)

1. **`src/contexts/LanguageContext.tsx`** - i18n system, highest LOC change
2. **`src/components/IndustryBackground.tsx`** - Visual brand overhaul
3. **`src/styles/globals.css`** - Color system foundation
4. **`src/components/sections/HeroSection.tsx`** - First impression
5. **`src/data/caseStudies.json`** - Portfolio content foundation

---

## Risk Mitigation

### Avoid Breaking Changes
- Don't touch shadcn/ui components (55 files)
- Preserve LanguageContext structure (LanguageProvider, `t()` signature)
- Keep form validation logic (React Hook Form + Zod)
- Maintain React Router structure (add routes, don't refactor)

### Testing Per Phase
- Phase 1: Visual regression (screenshot comparison)
- Phase 2: Animation performance (60fps check)
- Phase 3: i18n completeness (verify all keys in all languages)
- Phase 4: Route testing (click all links)

### Rollback Points
- After Phase 1: Color system works
- After Phase 3: Content rewritten, translations added
- After Phase 7: Production ready

---

## Success Criteria

### Must-Have
- [x] All sections in EN/DE/FA
- [x] Portfolio shows 4+ case studies
- [x] Contact form works
- [x] Dark + red theme consistent
- [x] Bundle <250KB
- [x] Mobile responsive

### Should-Have
- [x] Lighthouse Performance: 90+
- [x] Lighthouse Accessibility: 95+
- [x] No console errors
- [x] RTL perfect for Persian
- [x] 60fps animations

### Nice-to-Have
- [x] "Powered by FabrikTakt" signatures
- [x] Red accent hover states
- [x] High-contrast typography
- [x] Generous whitespace

---

## Execution Notes

**YAGNI Principles**:
- Reuse 55 shadcn/ui components as-is
- CSS backgrounds first, no premature 3D optimization
- Simple portfolio grid, no filters/search initially

**Pragmatic Choices**:
- Keep Orbitron (already premium)
- Machine translate German + manual review
- Placeholder case studies (ship fast, replace later)

**Start Here**: Phase 1 (Foundation) - lowest risk, highest visual impact, unblocks Phase 3 work

**Total Time**: 18-25 hours (3-4 days at 6-8h/day)

---

## Appendix A: Complete German Translation Sample

Sample of critical translation keys for German (formal "Sie" form):

```typescript
de: {
  // Navigation
  'nav.capabilities': 'Fähigkeiten',
  'nav.portfolio': 'Portfolio',
  'nav.contact': 'Kontakt',

  // Hero Section
  'hero.title': 'Wir entwickeln',
  'hero.titleAccent': 'KI-gestützte Lösungen',
  'hero.subtitle': 'Premium Engineering für Web, Mobile, ML und Cloud-Infrastruktur',
  'hero.ctaPrimary': 'Unsere Arbeit ansehen',

  // Services
  'services.title': 'Was wir entwickeln',
  'services.subtitle': 'End-to-End Engineering über den modernen Tech-Stack',
  'services.ai.title': 'AI & Machine Learning',
  'services.ai.bullet1': 'Modelldesign & Evaluierung',
  'services.ai.bullet2': 'LLM-Orchestrierung für Betrieb',
  'services.cloud.title': 'Cloud & DevOps',
  'services.cloud.bullet1': 'Cloud-Architektur',
  'services.cloud.bullet2': 'Container, CI/CD',

  // Portfolio
  'portfolio.title': 'Unsere Arbeit',
  'portfolio.subtitle': 'Ausgewählte Projekte, die unsere Engineering-Expertise zeigen',
  'portfolio.viewAll': 'Alle Projekte ansehen',

  // Contact
  'contact.title': 'Projekt starten',
  'contact.subtitle': 'Lassen Sie uns über Ihre Anforderungen sprechen',
  'contact.name': 'Name',
  'contact.email': 'E-Mail',
  'contact.message': 'Nachricht',
  'contact.send': 'Nachricht senden',

  // Footer
  'footer.rights': 'Alle Rechte vorbehalten',
  'footer.privacy': 'Datenschutz',
  'footer.terms': 'Nutzungsbedingungen',
}
```

**Translation guidelines**:
- Keep English for: AI, ML, API, DevOps, Cloud, CI/CD (standard in German tech)
- Compound nouns: "Softwareentwicklung", "Webanwendung", "Datenschutz"
- Formal address: "Sie" not "du", "Ihre" not "deine"
- Article usage: "die Cloud", "das API", "der Service"

---

## Appendix B: Detailed Timeline Breakdown

### Week 1: Foundation & Core (Days 1-2)

**Day 1** (8h):
- [ ] Phase 1.1: Color system update (1h)
- [ ] Phase 1.3: Remove Three.js (30min)
- [ ] Phase 2.1: Create PremiumBackground (3h)
- [ ] Phase 2.2: Update animations (1h)
- [ ] Phase 3.1: German translation structure setup (1h)
- [ ] Phase 3.3: Hero section transformation (1.5h)

**Day 2** (8h):
- [ ] Phase 3.2: Section restructure (delete 3 files) (1h)
- [ ] Phase 3.4: Services section update (2h)
- [ ] Phase 3.5: Portfolio section creation (3h)
- [ ] Phase 3.6: PoweredBySignature component (30min)
- [ ] Phase 4.1: Page structure updates (1.5h)

### Week 2: Content & Polish (Days 3-4)

**Day 3** (6h):
- [ ] Phase 4.2: Case study detail page (2h)
- [ ] Phase 4.3: Navigation updates (1h)
- [ ] Phase 6: German translation (machine + review) (3h)

**Day 4** (6h):
- [ ] Phase 5.1: SEO updates (1h)
- [ ] Phase 5.2: Accessibility audit (1.5h)
- [ ] Phase 5.3: Performance optimization (1.5h)
- [ ] Phase 5.4: EmailJS reconfiguration (1h)
- [ ] Phase 7: Testing & deployment (1h)

**Total**: 28 hours (can compress to 18-25h with efficiency)

---

## Appendix C: Quick Start Commands

```bash
# Clone current state (backup)
git checkout -b feature/agency-rebrand
git commit -m "Checkpoint: Before agency transformation"

# Development workflow
bun run dev          # Start dev server (localhost:8080)
bun run build        # Production build
bun run lint         # ESLint check
bunx tsc --noEmit    # TypeScript check

# Bundle analysis (after Phase 1.3)
bun run build
ls -lh dist/assets/*.js  # Should see ~200KB total (down from 503KB)

# Translation helpers (Phase 6)
# Extract English keys to JSON:
node -e "const t = require('./src/contexts/LanguageContext.tsx').translations.en; console.log(JSON.stringify(t, null, 2))" > translations-en.json

# Test all languages
# Manually toggle through EN → DE → FA in browser language selector

# Lighthouse audit (Phase 7)
npx lighthouse http://localhost:8080 --view
```

---

## Appendix D: Rollback Procedures

If transformation needs to be reverted:

```bash
# Rollback to specific phase
git log --oneline  # Find phase commit hash
git checkout <commit-hash>

# Or reset to before transformation
git checkout main
git branch -D feature/agency-rebrand
```

**Phase-specific rollback safety**:
- **After Phase 1**: Colors changed, no functional breaks - safe to continue
- **After Phase 3**: Content rewritten, translations added - verify i18n completeness before proceeding
- **After Phase 7**: Production-ready or rollback to last working commit

**Files to backup before transformation**:
- `src/contexts/LanguageContext.tsx` (large changes)
- `src/components/IndustryBackground.tsx` (complete rewrite)
- `src/styles/globals.css` (color system)

---

## Appendix E: Post-Launch Tasks

After successful deployment:

**Content Updates**:
- [ ] Replace 4 placeholder case studies with real project screenshots
- [ ] Get native German speaker to review all ~150 translation keys
- [ ] Add 2-3 more real portfolio items as projects complete

**Performance Monitoring**:
- [ ] Set up Lighthouse CI for ongoing performance tracking
- [ ] Monitor bundle size on each deploy (target: <250KB)
- [ ] Track Core Web Vitals (LCP, FID, CLS)

**SEO**:
- [ ] Submit new sitemap to Google Search Console
- [ ] Update social media Open Graph images
- [ ] Add structured data for Organization + Portfolio items

**Analytics**:
- [ ] Configure Umami for new agency positioning tracking
- [ ] Track portfolio page views and case study clicks
- [ ] Monitor language usage (EN/DE/FA distribution)

**Future Enhancements** (Phase 2 features - YAGNI for MVP):
- [ ] Portfolio filters (by service type, technology)
- [ ] Case study search functionality
- [ ] Blog/insights section
- [ ] Client testimonials video embeds
- [ ] Interactive tech stack showcase

---

**Ready for execution.** Start with Phase 1.1 (color system) for immediate visual impact and low risk.
