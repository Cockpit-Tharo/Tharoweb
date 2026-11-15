# THARO TECHNOLOGIES | MASTER CONTEXT & DEPLOYMENT CHANGELOG
**Document Author:** Himank Lalani  
**Date:** November 15, 2026  
**Status:** Production Ready (`v1.0.0`)  
**Brand & Domain:** Tharo Technologies LLP · [Tharo.tech](https://tharo.tech)  
**Primary Email:** `cockpit@tharo.tech`  
**Repository:** `uncomplic8` / `tharo-web`  
**Target Environment:** Vercel (Edge Network) · Next.js 16 (App Router) · Node.js 20+

---

## 1. Executive Summary & Company Identity

### 1.1 The Company
**Tharo Technologies LLP** (`Tharo.tech`) is an enterprise-grade **Conversational Infrastructure & Vertical Operating System Studio** based in Mumbai, India, serving clinics, wellness practices, studios, and high-trust service businesses across India, the UAE, Europe, and the United States.

### 1.2 Core Mission & The Problem Solved
High-trust practices (dental clinics, dermatology centers, luxury salons, boutique fitness studios, IVF clinics) operate on disjointed legacy tools (paper records, desktop software like Tally, disparate appointment apps, personal staff WhatsApp). They suffer from:
1. **Severe Lead Leakage:** 42% of customer inquiries via Instagram and Google drop off if not answered within 5 minutes.
2. **High No-Show Rates:** 25% to 35% of booked consultations result in no-shows without automated deposit collection and smart WhatsApp confirmations.
3. **Exploitative SaaS Middleware:** Traditional chatbot vendors charge confusing message credit markups (20% to 35% surcharges on Meta conversation fees) and force non-technical clinic owners to build brittle webhook flows themselves.

### 1.3 The Tharo Turnkey Solution
Tharo designs, delivers, and runs custom vertical operating systems where WhatsApp is the native conversational interface for clients, patients, and staff:
- **Turnkey Deployment:** We deliver finished, tailored systems within 14 business days, eliminating DIY configuration.
- **Direct Meta Cloud API Infrastructure:** Clients hold direct ownership of their WhatsApp Business Accounts. Tharo charges a transparent flat SaaS subscription with 0% markup on Meta messages.
- **Two Architecture Tracks:**
  - **Track A (Turnkey Core OS):** For practices needing an end-to-end browser calendar, patient CRM, billing ledger, and two-way WhatsApp automation.
  - **Track B (The Smart Bridge):** Connects to existing desktop or cloud tools (Tally, Petpooja, Marg ERP, Shopify) to trigger automated invoices, appointment reminders, and UPI pay links.
- **Pipo AI Voice & Mic Engine:** Voice-activated transcription for doctors and receptionists to dictate notes that automatically populate structured clinic records.

---

## 2. Technical Stack & Infrastructure Architecture

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.0.7` | Hybrid SSR/SSG rendering, SEO metadata generation, edge routing |
| **Runtime** | React / React DOM | `19.0.0` | Modern React Server Components, concurrent hooks |
| **Language** | TypeScript | `5.6.3` | Strict type safety across all data schemas and props |
| **Styling** | Vanilla CSS Modules | Native | Zero runtime CSS overhead, strict class encapsulation, no Tailwind bloat |
| **Animation** | Framer Motion | `12.4.2` | Fluid physical spring motion, scroll-pinned depth stacking, and canvas transforms |
| **Smooth Scroll** | Lenis | `1.1.18` | Hardware-accelerated inertial wheel and touch scrolling |
| **Icons** | Lucide React | `0.460.0` | Minimal geometric vector iconography |
| **Deployment** | Vercel Platform | Edge Network | Automatic CI/CD, global CDN caching, zero-config Next.js optimizations |

---

## 3. Brand & Visual Design Language

Tharo's aesthetic is an **Awwwards-level blend of Warm Swiss Architectural Print and Tactile Luxury**:
- **Background Cream:** `#F7F6EC` (`var(--bg-beige)`) - warm, non-glare editorial paper texture.
- **Forest Pine Green:** `#0D3B2E` (`var(--bg-forest)`) - authoritative, high-trust deep architectural green.
- **Accent Emerald:** `#108A58` - vibrant operational indicators and confirmation highlights.
- **Primary Lilac:** `#E2D8FF` (`var(--primary-lilac)`) - soft physical pill CTA accents with tactile offset hover states.
- **Charcoal Text:** `#161616` (`var(--text-dark)`) / Muted `#5A5D5A` - high-contrast typographic hierarchy.
- **Typography:**
  - *Headlines & Hero Numerals:* **Playfair Display** (refined high-contrast serif).
  - *Body, Labels & Micro-UI:* **Hanken Grotesk** (geometric, highly legible Swiss sans-serif).
  - *Data, Codes & Pro-Forma Numerals:* **JetBrains Mono** (tabular alignment).
- **Physical Motion Physics:** Heavy inertial damping (`cubic-bezier(0.16, 1, 0.3, 1)`), zero bouncy cartoon easing.

---

## 4. Complete Sitemap & Route Directory

### 4.1 Static Pages
- `/` - **Homepage:** Interactive boot preloader, hero console with live WhatsApp audio demo, 3-step system anatomy, Flow Transformer, Integration Matrix, Stackflow cards, ROI Calculator, client testimonials docket, FAQ, and footer.
- `/platform` - **Architecture & Platform:** In-depth breakdown of the Core Engine, Smart Bridge, and Data Sovereignty.
- `/solutions` - **Sector Directory:** Overview of all 14 vertical playbooks.
- `/pipo-voice` - **Pipo AI Voice Simulator:** Interactive microphone simulator demonstrating clinical voice-to-record conversion.
- `/pricing` - **Investment & Plans:** Turnkey setup tiers, ROI calculator, and transparent pass-through costs.
- `/about` - **About Tharo Technologies:** Studio manifesto, founders, Mumbai headquarters, and craftsmanship philosophy.
- `/contact` - **Contact & Demo Booking:** Structured inquiry form, direct WhatsApp launcher, and office coordinate details.
- `/privacy` - **Privacy Policy:** Comprehensive compliance (Meta Business terms, DPDP Act 2023, GDPR, HIPAA-aligned data isolation).
- `/terms` - **Terms of Service:** Commercial SLA, intellectual property ownership, and cancellation terms.
- `not-found` (`404`) - **Custom Architectural 404:** Monospace error coordinates, live route directory, and instant home return.

### 4.2 Dynamic Sector Playbooks (`/solutions/[sector]`)
14 pre-rendered, highly targeted industry playbook landing pages with sector-specific KPI receipts, audio voice notes, and simulator flows:
1. `/solutions/dental-clinics` - Dental Practices
2. `/solutions/luxury-salons` - Salons & Spas
3. `/solutions/dermatology` - Dermatology & Aesthetic Clinics
4. `/solutions/fitness-studios` - Boutique Fitness & Pilates
5. `/solutions/ivf-centers` - Fertility & IVF Centers
6. `/solutions/physiotherapy` - Physical Therapy Practices
7. `/solutions/diagnostic-labs` - Pathology & Imaging Centers
8. `/solutions/pet-care` - Veterinary & Pet Spas
9. `/solutions/fine-dining` - Restaurants & Private Dining
10. `/solutions/real-estate` - Premium Property Agencies
11. `/solutions/b2b-distributors` - Wholesale & Distribution
12. `/solutions/logistics-courier` - Courier & NDR Escalation
13. `/solutions/educational-institutes` - Coaching & Academies
14. `/solutions/car-detailing` - Automotive Studios

### 4.3 SEO & Dynamic Metadata Endpoints
- `/sitemap.xml` generated via [src/app/sitemap.ts](file:///Users/himanklalani/Projects/uncomplic8/src/app/sitemap.ts) covering static and dynamic paths.
- `/robots.txt` generated via [src/app/robots.ts](file:///Users/himanklalani/Projects/uncomplic8/src/app/robots.ts).
- `/manifest.webmanifest` generated via [src/app/manifest.ts](file:///Users/himanklalani/Projects/uncomplic8/src/app/manifest.ts) for PWA installation.
- Structured JSON-LD Organization schema embedded in root layout [src/app/layout.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/app/layout.tsx).

---

## 5. Key Interactive Components & Engineering Highlights

1. **Cinematic Hardware Boot Preloader ([Preloader.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/Preloader.tsx))**
   - Simulates a sleek phone restarting after power-off.
   - Cinematic green Tharo emblem reveal with soft radial illumination.
   - Synchronized tabular progress counter (`00%` -> `100%`) with orbital alignment guides.
   - Seamless unlock transition into the hero phone mockup once page content is loaded.
2. **Interactive Hero Console ([InteractiveHeroConsole.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/InteractiveHeroConsole.tsx))**
   - iPhone hardware mockup displaying an authentic WhatsApp client conversation thread.
   - Interactive voice audio message simulation with scrubbable waveform and live playback.
   - Quick action pills for automated appointment confirmation and calendar integration.
3. **Architectural ROI & Spend Calculator ([RoiCalculator.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/RoiCalculator.tsx))**
   - Dual-axis interactive workbench: Daily customer chats (10 to 120+) and Average ticket value.
   - Segmented currency selector supporting `INR (₹)`, `USD ($)`, `EUR (€)`, and `AED`.
   - Real-time 30-day Financial Pro-Forma ledger with conservative recovery rates and net monthly profit projections.
   - Single-viewport optimized mobile layout with 2-step tabbed toggle.
4. **Flow Transformer ([FlowTransformer.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/FlowTransformer.tsx))**
   - Interactive slider demonstrating the contrast between chaotic manual operations and Tharo's automated WhatsApp infrastructure.
5. **Integration Matrix ([IntegrationMatrix.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/IntegrationMatrix.tsx))**
   - Live architectural connectivity tabs for Tally, Petpooja, Shopify, Marg ERP, and Custom Webhooks.
6. **Global WhatsApp Chat Widget ([WhatsAppChatWidget.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/WhatsAppChatWidget.tsx))**
   - Floating pill widget with authentic doodle wallpaper, live local clock, unread badge, and prefilled message launcher.

---

## 6. Comprehensive Deployment Guide (Vercel)

### 6.1 Prerequisites
- A GitHub repository connected to the codebase (`uncomplic8` / `tharo-web`).
- A [Vercel](https://vercel.com) account.
- Registered domain: `tharo.tech` with access to DNS records.

### 6.2 Vercel Project Configuration
When importing the repository into Vercel:
- **Framework Preset:** `Next.js`
- **Root Directory:** `./`
- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node.js Version:** `20.x` or `22.x`

### 6.3 Environment Variables
Configure the following in the Vercel Project Settings under **Environment Variables**:

| Variable Name | Environment | Example / Value | Description |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Production / Preview | `https://tharo.tech` | Canonical base URL for sitemap and metadata |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Production / Preview | `919876543210` | Destination business number for WhatsApp buttons |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Production / Preview | `cockpit@tharo.tech` | Primary inbound studio email |
| `META_CLOUD_API_KEY` | Production (Secret) | `EAA...` (Optional backend) | Token for future serverless webhook handling |

### 6.4 DNS Records for `tharo.tech`
Add the following DNS records in your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

| Record Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` | `76.76.21.21` | Automatic / 300s |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 300s |

### 6.5 Local Verification Commands
Before pushing to production, run the following verification checks:
```bash
# 1. Typecheck entire codebase (must exit 0)
npx tsc --noEmit

# 2. Production build verification
npm run build

# 3. Em-dash policy check (must return 0 occurrences)
grep -rn "—" src/
```

---

## 7. Changelog & Project Evolution

### `v1.0.0` (November 15, 2026) - Production Readiness & Architectural Polish
- **ROI Calculator Overhaul:** Redesigned into an architectural pro-forma ledger with dual tactile steppers, preset chips, dynamic gradient tracks, and clean `• ROI CALCULATOR` header.
- **Single-Viewport Mobile Experience:** Compacted mobile height to under 500px with 2-step segmented control (`Volume & Costs` $\leftrightarrow$ `Pro-Forma`).
- **Complete Removal of Technical Jargon:** Removed all references to "Meta Cloud API", "0% markup", and the "Live Audit" badge.
- **Preloader Perfected:** Hardware boot sequence with glowing green emblem, monospace counter (`00%` -> `100%`), and orbital guides; removed top filling progress line and "Mumbai" tag.
- **Legal & Compliance Infrastructure:** Created complete `/privacy` policy, `/terms` of service, `/not-found` page, dynamic XML sitemap, robots.txt, and web app manifest.
- **Contact Channels Unified:** Replaced all placeholder contact emails with `cockpit@tharo.tech`.

### `v0.9.0 - v0.19.0` (November 2026) - Studio Rebranding to Tharo Technologies LLP
- Migrated brand from *Uncomplic8* to **Tharo Technologies LLP** (`Tharo.tech`).
- Replaced dark SaaS aesthetic with Warm Editorial Swiss luxury palette (`#F7F6EC`, `#0D3B2E`, `#108A58`, `#E2D8FF`).
- Introduced 14 vertical sector playbooks, Flow Transformer, Integration Matrix, Pipo Voice engine, and global WhatsApp widget.

---

## 8. Codebase Audit: Dead Code & Files Recommended for Cleanup

A complete file audit of the workspace was conducted. Below is the categorized list of files that are **unnecessary for production** and can be safely deleted or archived:

### Category A: Unused Components in `src/components/` (5 Components + CSS)
These components have **zero imports** in any active page or component:
1. `src/components/AmbientParallaxField.tsx` & `src/components/AmbientParallaxField.module.css` (Old ambient parallax experiment).
2. `src/components/ScrubbedManifesto.tsx` & `src/components/ScrubbedManifesto.module.css` (Superseded by about page content).
3. `src/components/SectorDepthCarousel.tsx` & `src/components/SectorDepthCarousel.module.css` (Superseded by `LollipopCarousel` and `SectorPillShowcase`).
4. `src/components/StatsSection.tsx` & `src/components/StatsSection.module.css` (Stats are now embedded in `ResultsShowcase` and `SystemAnatomyStage`).
5. `src/components/WhatsAppSimulator.tsx` & `src/components/WhatsAppSimulator.module.css` (Superseded by `InteractiveHeroConsole` and `TabbedMockup`).

### Category B: Experimental Playground Route
- `src/app/hero-lab/` (Folder containing `page.tsx`)
- `src/components/hero-lab/` (Folder containing `HeroLabShowcase.tsx` and `HeroLabShowcase.module.css`)
*Note: This was a temporary hero testing route not accessible from any navigation.*

### Category C: Misplaced Root & Source Documents
1. `src/GitHub Team Setup Guide.docx` (A Microsoft Word file accidentally placed inside the `src/` source directory).
2. `startuoidea.md` (Raw unformatted notes from September 2026).
3. `uncomplic8.md` (Legacy initial brand brainstorm document).
4. `u8logo_withtext.png` (Old 649KB raster logo from the prior brand).
5. `competitive_analysis.md` (Static internal research document from project kickoff).
6. Root PDFs (`THARO_MANUAL.pdf` - 880KB, `THARO_MASTER_PLAN.pdf` - 694KB, `THARO_ROADMAP.pdf` - 1.0MB).
   *Total: ~2.6 MB of static PDFs in repository root. These can be stored externally in Google Drive or Notion rather than bloating the git clone size.*

### Category D: Temporary Puppeteer Scratch Scripts in `scratch/` (20 Scripts)
The entire `scratch/` directory contains one-off test and screenshot scripts that are not part of the Next.js build:
- `scratch/audit_homepage.mjs`
- `scratch/audit_mobile_sections.mjs`
- `scratch/audit_sections.mjs`
- `scratch/test_calculator_redesign.mjs`
- `scratch/test_cards_and_hotspots.mjs`
- `scratch/test_classy_hero.mjs`
- `scratch/test_gallery_and_rail.mjs`
- `scratch/test_hero_brackets.mjs`
- `scratch/test_minimal_mobile.mjs`
- `scratch/test_morphing_preloader.mjs`
- `scratch/test_preloader.mjs`
- `scratch/test_run_execution.mjs`
- `scratch/test_updated_hero_flow.mjs`
- `scratch/track_heron.mjs`
- `scratch/verify_airy_hero_and_arrow_cards.mjs`
- `scratch/verify_all_fixes.mjs`
- `scratch/verify_all_updates.mjs`
- `scratch/verify_rename.mjs`
*(The entire `scratch/` folder can be excluded or deleted without affecting the application).*

### Category E: Unused Default Starter SVGs in `public/`
Default files left over from `create-next-app` that are never referenced in code:
- `public/file.svg`
- `public/vercel.svg`
- `public/next.svg`
- `public/globe.svg`
- `public/window.svg`

### Category F: Redundant Backup Images in `public/images/`
- `public/images/hero-craft-desk.backup.jpg`
- `public/images/hero-pipo-orb.backup.jpg`
- `public/images/tharo-architecture-system.backup.jpg`
- `public/images/tharo-architecture-blueprint-previous.jpg`
- `public/images/tharo-footer-logo-original.png`

---

## 9. Sign-off & Maintenance Notes
This file serves as the definitive architecture snapshot and deployment guide for **Tharo Technologies LLP**. Future engineering contributors or AI agents should refer to this document for styling principles, data schemas, routing patterns, and deployment configurations.
