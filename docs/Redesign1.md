Locked and good to ship. I trimmed lingering v2 items (Products/Solutions/MultiProductNav/i18n/Playwright/structured data) and prepared a v1-only starter set you can drop in now.

Out-of-scope removed for v1
- Products pages, Solutions pages, MultiProductNav
- i18n library, structured data, Playwright/e2e
- Customers/Company pages

Do now (focused)
- Simplified Hero on Home with single CTA to /capabilities
- Capabilities page with 6 cards (3 bullets each)
- Contact page with simple form (client-side submit for now)
- SEO basics: Helmet, robots.txt, sitemap.xml
- Vite 6 + 3 plugins, ESLint flat + jsx-a11y, size-limit 350kB

Files

```typescript name=src/components/SEO.tsx
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
};

export default function SEO({ title, description, canonical }: SEOProps) {
  return (
    <Helmet prioritizeSeoTags>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
```

```typescript name=src/components/CapabilityCard.tsx
import { ReactNode } from "react";

type Props = {
  title: string;
  bullets: string[];
  icon?: ReactNode;
};

export default function CapabilityCard({ title, bullets, icon }: Props) {
  return (
    <article
      aria-label={title}
      className="flex h-full flex-col rounded-xl border border-border/60 bg-background/60 p-5 transition-shadow hover:shadow-lg focus-within:shadow-lg"
    >
      <header className="mb-3 flex items-center gap-3">
        {icon && <div aria-hidden className="text-primary">{icon}</div>}
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
      </header>
      <ul className="mt-1 grid gap-2 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
```

```typescript name=src/pages/Home.tsx
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import CapabilityCard from "@/components/CapabilityCard";
import { Brain, Camera, Database, Cloud, Workflow, Code } from "lucide-react";

const capabilities = [
  { title: "AI/ML", bullets: ["Model design", "LLM orchestration", "MLOps pipelines"], icon: <Brain /> },
  { title: "Computer Vision", bullets: ["Visual inspection", "OCR/doc intelligence", "Edge/on‑prem options"], icon: <Camera /> },
  { title: "Data & Analytics", bullets: ["Pipelines & warehousing", "BI dashboards", "Governance & quality"], icon: <Database /> },
  { title: "Cloud & DevOps", bullets: ["Cloud architecture", "Containers & CI/CD", "Cost & reliability"], icon: <Cloud /> },
  { title: "ERP & Integration", bullets: ["Implementation & migration", "Workflow automation", "API & data sync"], icon: <Workflow /> },
  { title: "Custom Applications", bullets: ["Web/mobile apps", "Integrations & tooling", "Secure, scalable design"], icon: <Code /> }
];

export default function Home() {
  return (
    <>
      <SEO
        title="FabrikTakt — AI applications and modern engineering for operations"
        description="High‑tech partner for AI/ML, Computer Vision, Data, Cloud/DevOps, ERP integration, and modern apps."
        canonical="https://fabriktakt.com/"
      />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <section className="text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            AI applications and modern engineering for operations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            From AI/ML and Computer Vision to Data, Cloud, and ERP integration—built fast, built right.
          </p>
          <div className="mt-8">
            <Link
              to="/capabilities"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              Explore capabilities
            </Link>
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((c) => (
              <CapabilityCard key={c.title} title={c.title} bullets={c.bullets} icon={c.icon} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
```

```typescript name=src/pages/Capabilities.tsx
import SEO from "@/components/SEO";
import CapabilityCard from "@/components/CapabilityCard";
import { Brain, Camera, Database, Cloud, Workflow, Code } from "lucide-react";

const data = [
  { title: "AI/ML", bullets: ["Model design & evaluation", "LLM orchestration for ops", "MLOps pipelines"], icon: <Brain /> },
  { title: "Computer Vision", bullets: ["Visual inspection & detection", "OCR / doc intelligence", "Edge and on‑prem deployment"], icon: <Camera /> },
  { title: "Data & Analytics", bullets: ["Pipelines & warehousing", "BI dashboards & metrics", "Governance & data quality"], icon: <Database /> },
  { title: "Cloud & DevOps", bullets: ["Cloud architecture", "Containers, CI/CD", "Reliability & cost optimization"], icon: <Cloud /> },
  { title: "ERP & Integration", bullets: ["Implementation & migration", "Workflow automation", "API & data synchronization"], icon: <Workflow /> },
  { title: "Custom Applications", bullets: ["Web/mobile applications", "Integrations & tooling", "Secure, scalable design"], icon: <Code /> }
];

export default function Capabilities() {
  return (
    <>
      <SEO
        title="Capabilities — FabrikTakt"
        description="Six core capabilities: AI/ML, Computer Vision, Data & Analytics, Cloud & DevOps, ERP & Integration, and Custom Applications."
        canonical="https://fabriktakt.com/capabilities"
      />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">Capabilities</h1>
          <p className="mt-2 text-muted-foreground">High‑tech services that turn chaos into clarity.</p>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.map((c) => (
            <CapabilityCard key={c.title} title={c.title} bullets={c.bullets} icon={c.icon} />
          ))}
        </div>
      </main>
    </>
  );
}
```

```typescript name=src/pages/Contact.tsx
import SEO from "@/components/SEO";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Tell us a bit more (10+ chars)")
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } =
    useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    // v1: client-side only — replace with your backend later
    console.log("Contact submission", values);
    await new Promise((r) => setTimeout(r, 600));
    return true;
  };

  return (
    <>
      <SEO
        title="Contact — FabrikTakt"
        description="Get in touch for AI/ML, Computer Vision, Data, Cloud/DevOps, ERP integration, or custom applications."
        canonical="https://fabriktakt.com/contact"
      />
      <main className="mx-auto max-w-xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-muted-foreground">Tell us about your project. We’ll get back to you shortly.</p>

        <form className="mt-8 grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className="grid gap-1">
            <span className="text-sm font-medium">Name</span>
            <input
              {...register("name")}
              className="rounded-md border border-border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              placeholder="Your name"
            />
            {errors.name && <span className="text-sm text-red-600">{errors.name.message}</span>}
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Email</span>
            <input
              {...register("email")}
              type="email"
              className="rounded-md border border-border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              placeholder="name@company.com"
            />
            {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Message</span>
            <textarea
              {...register("message")}
              rows={5}
              className="rounded-md border border-border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              placeholder="What are you building?"
            />
            {errors.message && <span className="text-sm text-red-600">{errors.message.message}</span>}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Send"}
          </button>

          {isSubmitSuccessful && (
            <p className="text-sm text-green-700">Thanks! We received your message.</p>
          )}
        </form>
      </main>
    </>
  );
}
```

```typescript name=src/App.tsx
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "@/pages/Home";
import Capabilities from "@/pages/Capabilities";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-border/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-lg font-semibold">FabrikTakt</Link>
          <ul className="flex items-center gap-4 text-sm">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "font-medium" : ""}>Home</NavLink></li>
            <li><NavLink to="/capabilities" className={({ isActive }) => isActive ? "font-medium" : ""}>Capabilities</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "font-medium" : ""}>Contact</NavLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="mt-16 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} FabrikTakt
        </div>
      </footer>
    </div>
  );
}
```

```typescript name=src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
```

```txt name=public/robots.txt
User-agent: *
Allow: /

Sitemap: https://fabriktakt.com/sitemap.xml
```

```xml name=public/sitemap.xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://fabriktakt.com/</loc></url>
  <url><loc>https://fabriktakt.com/capabilities</loc></url>
  <url><loc>https://fabriktakt.com/contact</loc></url>
</urlset>
```

```typescript name=vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import checker from "vite-plugin-checker";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true, eslint: { lintCommand: "eslint ." } }),
    visualizer({ filename: "dist/bundle-analysis.html", gzipSize: true, brotliSize: true }),
    compression({ algorithm: "brotliCompress" })
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"]
        }
      }
    }
  },
  resolve: { alias: { "@": "/src" } }
});
```

```javascript name=eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { ecmaVersion: 2023, sourceType: "module", globals: globals.browser },
    plugins: { "jsx-a11y": jsxA11y },
    extends: [js.configs.recommended, ...tseslint.configs.recommended, jsxA11y.flatConfigs.recommended],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }]
    }
  }
);
```

```json name=.size-limit.json
[
  { "name": "App bundle", "path": "dist/assets/*.js", "limit": "350 kB" }
]
```

```json name=package.json
{
  "scripts": {
    "dev": "bunx vite",
    "prebuild": "bunx tsc --noEmit && bunx eslint .",
    "build": "bunx vite build && bunx size-limit",
    "preview": "bunx vite preview",
    "lint": "bunx eslint ."
  }
}
```

Launch checklist (v1-only)
- Replace Home, add Capabilities and Contact routes, wire HelmetProvider.
- Add robots.txt and sitemap.xml.
- Upgrade to Vite 6 and add the three plugins.
- Enable ESLint flat + jsx-a11y; set size-limit to 350 kB.
- Ship. Run Lighthouse and tweak if any low-hanging perf/a11y issues pop up.