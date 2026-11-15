# THARO TECHNOLOGIES | MASTER CONTEXT & SYSTEM BLUEPRINT
> **Status:** Production Ready (`v1.0.0`)  
> **Brand / Domain:** [Tharo.tech](https://tharo.tech) (Tharo Technologies LLP)  
> **Primary Contact:** `cockpit@tharo.tech`  
> **Repository:** `uncomplic8` / `tharo-web`  
> **Framework:** Next.js 16 (App Router) · React 19 · TypeScript 5 · Vanilla CSS Modules · Framer Motion 13 · Lenis Smooth Scroll  
> **Author & Architect:** Himank Lalani  
> **Last Updated:** November 15, 2026

---

## 1. Executive Summary & Brand Foundation

### 1.1 The Identity
**Tharo Technologies LLP** (`Tharo.tech`) is an enterprise-grade **Conversational Infrastructure & Vertical Operating System Studio** headquartered in Mumbai, India. We design, build, and support tailored systems for clinics, high-end salons, wellness practices, and service businesses worldwide.

### 1.2 Core Mission & The Problem We Solve
High-trust practices suffer from severe operational friction:
1. **Disconnected Software Silos:** Operating on 5-8 fragmented tools (paper registers, Tally desktop, separate calendar apps, personal employee WhatsApp). Leads leak, no-shows reach 25-35%, payment collection lags, and customer communication is chaotic.
2. **Generic, Exploitative SaaS:** Chatbot tools (Wati, DoubleTick, AiSensy) sell blank inboxes, charge 20-35% message markups, enforce strict per-seat limits, and force non-technical clinic owners to configure complex webhook flows.

### 1.3 The Tharo Turnkey Solution
Tharo delivers finished, sector-specific operating systems where WhatsApp is the native client and staff interface:
- **Turnkey Systems, Not Empty Dashboards:** Built for the exact operational workflows of 14 distinct verticals (e.g. automated dental recalls, salon stylist commission calculation, Tally-connected debt escalation).
- **Dual-Track Deployment Architecture:**
  - **Track A (Turnkey Core OS):** For businesses with no existing software. A complete browser OS: scheduling calendar, patient/client CRM, POS, and integrated two-way WhatsApp.
  - **Track B (The Smart Bridge):** For businesses already running on legacy tools (Tally, Petpooja, Marg ERP, Shopify). They keep their existing software; our bridge plugs in via APIs/ODBC to trigger automated WhatsApp receipts, statements, and UPI pay links.
- **Direct WhatsApp Business Cloud API:** Clients retain direct ownership of their WhatsApp account. Tharo charges a flat SaaS subscription with 0% markup on messages.
- **Pipo AI Voice Engine:** Dictate voice notes via web microphone or WhatsApp; AI extracts structured clinical records and auto-populates calendar slots.

---

## 2. Technical Stack & Dependencies

```
Next.js 16.0.7 (App Router, Turbopack, React Server Components)
 ├── React 19.0.0 & React DOM 19.0.0
 ├── TypeScript 5.6.3 (Strict mode, noImplicitAny)
 ├── CSS Modules (Vanilla native CSS, no Tailwind, zero runtime)
 ├── Framer Motion 12.4.2 (Physical spring springs, scroll transforms)
 ├── Lenis 1.1.18 (Hardware-accelerated smooth scrolling)
 └── Lucide React 0.460.0 (Geometric SVG icon system)
```

---

## 3. Brand & Visual Design System

- **Palette:**
  - Background Cream: `#F7F6EC` (`var(--bg-beige)`)
  - Deep Forest Green: `#0D3B2E` (`var(--bg-forest)`)
  - Emerald Accent: `#108A58` (Status lights, verification pills)
  - Primary Lilac: `#E2D8FF` (`var(--primary-lilac)`)
  - Dark Charcoal: `#161616` (`var(--text-dark)`)
  - Muted Neutral: `#5A5D5A` (`var(--text-dark-muted)`)
- **Typography:**
  - Headlines: **Playfair Display** (refined high-contrast editorial serif)
  - Interface & Prose: **Hanken Grotesk** (Swiss geometric sans)
  - Financial & Code: **JetBrains Mono** (tabular monospace)
- **Constraint Policy:**
  - Zero em-dashes (`—`) across all code, comments, and copy.
  - Zero hacker jargon, brackets, or unnecessary badges.
  - Mobile-first single-viewport compact cards.

---

## 4. Complete Sitemap & Routing

- `/` - Homepage (Hardware boot preloader, WhatsApp hero console, system anatomy, Flow Transformer, Integration Matrix, Stackflow cards, ROI Calculator, testimonials docket, FAQ, footer).
- `/platform` - Core Engine, Smart Bridge, and Data Sovereignty.
- `/solutions` - Vertical solutions directory.
- `/solutions/[sector]` - 14 dynamic sector landing pages:
  - `dental-clinics`, `luxury-salons`, `dermatology`, `fitness-studios`, `ivf-centers`, `physiotherapy`, `diagnostic-labs`, `pet-care`, `fine-dining`, `real-estate`, `b2b-distributors`, `logistics-courier`, `educational-institutes`, `car-detailing`.
- `/pipo-voice` - Pipo AI Voice Simulator.
- `/pricing` - Transparent pricing tiers & ROI model.
- `/about` - Studio history, team, and Mumbai headquarters.
- `/contact` - Inbound contact form, WhatsApp launcher, and coordinates.
- `/privacy` - Comprehensive data isolation & privacy policy.
- `/terms` - Terms of service & commercial agreement.
- `/not-found` - Custom architectural 404 error page.
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`.

---

## 5. Deployment Guide (Vercel)

- **Platform:** Vercel (Edge Network)
- **Node Version:** `20.x` or higher
- **Build Command:** `next build`
- **Output:** `.next`
- **Environment Variables:**
  - `NEXT_PUBLIC_SITE_URL`: `https://tharo.tech`
  - `NEXT_PUBLIC_CONTACT_EMAIL`: `cockpit@tharo.tech`
  - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Destination WhatsApp number
- **DNS Configuration:**
  - A Record: `@` -> `76.76.21.21`
  - CNAME: `www` -> `cname.vercel-dns.com`
