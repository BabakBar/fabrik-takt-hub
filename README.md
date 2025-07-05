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

## The Story Behind FabrikTakt

I've been, seen and worked in manufacturing industries from my childhood because of our family business. Manufacturing is incredibly complex, but the tools available to most small and medium manufacturers are either too simple or overwhelmingly complicated. Now it's time to build something different - technology that's powerful enough to make a real difference, but simple enough that anyone can use it.

My goal is to help every manufacturing team capture their hard-earned knowledge, solve problems more efficiently, and ultimately build better products.

---

## Status

- The product is in **early access** - I'm actively building and iterating based on feedback in 3 factories.

## Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/fabrik-takt-hub.git
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
   - EmailJS credentials for contact forms
   - Umami analytics (optional - leave empty to disable)

4. **Start development server**

   ```bash
   bun run dev
   ```

## Analytics & Privacy

This project optionally uses Umami Analytics for website usage tracking. Analytics are:

- **Completely optional** - controlled by environment variables
- **Privacy-focused** - no personal data collection
- **Configurable** - easy to disable or replace with your own tracking

To disable analytics, simply remove or leave empty the `VITE_UMAMI_*` variables in your `.env` file.

---

*Made with ❤️ by Sia, for the people who make the world's products*
