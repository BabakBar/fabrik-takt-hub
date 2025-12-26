# 🏭 FabrikTakt - Frontend

Welcome! This is the public frontend repository for **FabrikTakt**, an AI-powered intelligence hub designed to help manufacturing teams work smarter, not harder.

🌐 **Visit us**: [fabriktakt.com](https://fabriktakt.com/)

---

## What is FabrikTakt?

FabrikTakt is like having a smart assistant on the factory floor. I'm building technology that helps small and medium manufacturers capture knowledge, solve problems faster, and make better decisions - all through simple, conversational interfaces.

Think of it as the "Factory Brain" 🧠 that:

- Remembers solutions to problems so we don't have to solve them twice
- Helps operators get quick answers to their questions
- Keeps track of what's happening across our production
- Speaks our language (literally - we support multiple languages!)

---

## About This Repo

This repo contains the **frontend interface** for FabrikTakt - the part you see and interact with. It's built with modern web technologies to be fast, responsive, and easy to use on any device.

### 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Runtime**: Bun (for fast development)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation
- **Animations**: Motion (Framer Motion successor)
- **3D Graphics**: Three.js for background effects
- **i18n**: Custom language context (English/Persian support)
- **Email**: EmailJS for contact form submissions

## The Story Behind FabrikTakt

I've been, seen and worked in manufacturing industries from my childhood because of our family business. Manufacturing is incredibly complex, but the tools available to most small and medium manufacturers are either too simple or overwhelmingly complicated. Now it's time to build something different - technology that's powerful enough to make a real difference, but simple enough that anyone can use it.

My goal is to help every manufacturing team capture their hard-earned knowledge, solve problems more efficiently, and ultimately build better products.

---

## Status

🚀 The product is in **early access** - actively building and iterating based on feedback from 3 factories.

### Key Features

- ✅ **Bilingual Interface** - Full Persian and English language support
- ✅ **Modern UI** - Built with shadcn/ui component library
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Contact Forms** - Integrated with EmailJS for submissions
- ✅ **Analytics Ready** - Optional Umami analytics integration
- ✅ **Accessibility** - ARIA-compliant components
- ✅ **3D Backgrounds** - WebGL circuit animations using Three.js
- ✅ **SEO Optimized** - Meta tags and structured data

### Project Structure

```txt
src/
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui base components
│   ├── sections/      # Page sections (Hero, Features, etc.)
│   ├── layout/        # Header, Footer
│   └── forms/         # Contact form components
├── pages/             # Route pages (Index, Contact, etc.)
├── contexts/          # React contexts (Language)
├── hooks/             # Custom React hooks
├── services/          # API services (EmailJS)
├── lib/               # Utility functions
└── styles/            # Global styles
```

## Development Setup

### Prerequisites

- [Bun](https://bun.sh/) - Fast JavaScript runtime & package manager
- Node.js 22.x (specified in package.json engines)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/BabakBar/fabrik-takt-hub.git
   cd fabrik-takt-hub
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your configuration:
   
   **Required:**
   - `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key
   - `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID
   - `VITE_EMAILJS_USER_TEMPLATE` - Template ID for user confirmation emails
   - `VITE_EMAILJS_ADMIN_TEMPLATE` - Template ID for admin notification emails

   **Optional:**
   - `VITE_UMAMI_URL` - Umami analytics script URL
   - `VITE_UMAMI_WEBSITE_ID` - Umami website identifier

4. **Start development server**

   ```bash
   bun run dev
   ```

   The app will be available at `http://localhost:8080`

### Available Scripts

- `bun run dev` - Start development server with HMR
- `bun run build` - Build for production
- `bun run build:dev` - Build in development mode
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint

## Analytics & Privacy

This project optionally uses Umami Analytics for website usage tracking. Analytics are:

- **Completely optional** - controlled by environment variables
- **Privacy-focused** - no personal data collection
- **Configurable** - easy to disable or replace with your own tracking

To disable analytics, simply remove or leave empty the `VITE_UMAMI_*` variables in your `.env` file.

## Deployment

The project is configured for deployment on platforms that support Vite applications:

- **Railway** - nixpacks.toml included for configuration
- **Vercel** - Works out of the box
- **Netlify** - Compatible with standard Vite setup

Build command: `bun run build`  
Output directory: `dist`

## Contributing

This is currently a solo project, but feedback and suggestions are welcome! Feel free to:

- Open issues for bugs or feature requests
- Submit PRs for improvements
- Share your experience if you're in manufacturing

---

Made with ❤️ by Sia, for the people who make the world's products
