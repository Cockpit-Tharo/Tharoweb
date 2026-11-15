# UNCOMPLIC8 | WhatsApp-First Business Systems Studio

> **Official Web Platform:** [Uncomplic8.tech](https://uncomplic8.tech)  
> **Repository:** `uncomplic8.web`  
> **Current Version:** `v0.20.0`  
> **Tech Stack:** Next.js 16 (App Router & Turbopack) · React 19 · TypeScript 5 · Vanilla CSS Modules · Framer Motion 13

---

## ⚡ Quick Start for New Laptop

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
# http://localhost:3000
```

> **Note on First Startup:** On initial load, Next.js (Turbopack) compiles routes on-demand when the first browser request arrives. Allow 15–20 seconds on the very first page load. Subsequent edits and hot-reloads will be instant.

---

## 🤖 Instructions for AI Agents & Pair Programmers

If you are an AI assistant opening this repository on a new machine, **read this first**:

1. **Master System Blueprint:** Read [`context.md`](./context.md). It is the single source of truth for all architectural decisions, design tokens, component mechanics, and market positioning.
2. **Evolution & History:** Read [`changelog.md`](./changelog.md) for a complete chronological record of all releases (`v0.1.0` through `v0.20.0`).
3. **Startup Strategy & Business Logic:** Read [`startuoidea.md`](./startuoidea.md) for the Dual-Track business model (Track A: All-in-One OS for clinics/salons; Track B: Smart Bridge for Tally/legacy ERPs), Meta Tech Provider 0% markup billing, and the AI Voice/Prompt Agent blueprint.
4. **12 Industry Playbooks:** Read [`uncomplic8.md`](./uncomplic8.md) for vertical workflows.
5. **Competitive Breakdown:** Read [`competitive_analysis.md`](./competitive_analysis.md) for audits of Wati, DoubleTick, Interakt, and Invoay.

---

## 🎨 Core Design & Code Rules (Mandatory)

1. **Aesthetic Direction:** Editorial warm luxury inspired by Warm Editorial Luxury:
   * Creamy paper beige (`--bg-beige: #F7F6EC`)
   * Deep racing forest green (`--bg-forest: #0D3B2E`)
   * Matte charcoal black (`--bg-charcoal: #161616`)
   * Ethereal lilac interactive accents (`--primary-lilac: #E2D8FF`)
2. **Typography Hierarchy:**
   * Headings: `Playfair Display` serif with graceful italicized highlights (`.italic-serif`).
   * Body & Navigation: `Hanken Grotesk` sans-serif.
3. **Strict Zero-Emoji Policy:** Never use emojis in UI copy, data files, comments, or documentation. Use Lucide SVG icons.
4. **Strict Zero-Em-Dash Policy:** Never use em dashes or spaced en dashes. Use commas, colons, parentheses, or clean sentence structure.
5. **Humanized Plain-Language Copy (humanizer-zh):** Target copy toward business owners (salons, clinics, distributors). Avoid developer acronyms (ODBC, TDL, SLA) and corporate fluff verbs ("empowering", "enhancing"). State tangible outcomes: automatic invoices, zero no-shows, instant booking confirmations.
6. **SSOT Data Architecture:** All copy, numbers, and lists must live in [`src/data/`](./src/data/). Components are purely presentation layers.
7. **No Tailwind / Pure CSS Modules:** Use Vanilla CSS Modules (`[Component].module.css`) and design tokens from [`src/app/globals.css`](./src/app/globals.css).

---

## 📂 Project Directory Structure

```
uncomplic8/
├── src/
│   ├── app/
│   │   ├── globals.css              # Design tokens, 56px paper grid pattern, resets
│   │   ├── layout.tsx               # Root layout, Google Fonts, Navbar, Footer, WhatsAppChatWidget
│   │   ├── page.tsx                 # Master landing page
│   │   ├── solutions/               # Solutions index and dynamic [sector] playbook routes
│   │   ├── pricing/page.tsx         # Transparent pricing matrix & Meta calculator
│   │   ├── about/page.tsx           # Studio story & founder philosophy
│   │   └── contact/page.tsx         # Discovery booking & WhatsApp routing
│   ├── components/
│   │   ├── Navbar.tsx               # Apple liquid-glass floating pill header
│   │   ├── Footer.tsx               # Awwwards big-text editorial footer with live IST clock
│   │   ├── NeubrutalismButton.tsx   # Tactile mechanical press button for "Our Creative Side"
│   │   ├── WhatsAppSimulator.tsx    # Clean modern iPhone WhatsApp chat simulation
│   │   ├── FlowTransformer.tsx      # Interactive before/after transformation engine
│   │   ├── IntegrationMatrix.tsx    # Software & dashboard integration hub
│   │   ├── LollipopCarousel.tsx     # Ambient drifting live automation capsules
│   │   ├── StackflowCards.tsx       # 3D depth-parallax scroll-pinned stacking cards
│   │   ├── CollapsingStepsCards.tsx # Horizontal touch-based 5-day deployment deck
│   │   ├── SectorDepthCarousel.tsx  # 3D curved industry playbook carousel
│   │   ├── TabbedMockup.tsx         # Interactive product capability switcher
│   │   ├── StatsSection.tsx         # Animated viewport counter metrics
│   │   ├── RoiCalculator.tsx        # Dynamic interactive ROI calculator
│   │   ├── FaqSection.tsx           # Accordion FAQ section
│   │   └── WhatsAppChatWidget.tsx   # Global floating WhatsApp chat dock
│   └── data/                        # Central data source (siteConfig, sectors, pricing, etc.)
├── context.md                       # Master architectural and system reference
├── changelog.md                     # Comprehensive chronological build history
├── startuoidea.md                   # Business model, Meta direct billing & AI Voice Agent
├── competitive_analysis.md          # UI/UX teardown of market incumbents
├── uncomplic8.md                    # 12 industry operational playbooks
└── package.json                     # Next.js 16 configuration
```
