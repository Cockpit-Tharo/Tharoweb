# THARO TECHNOLOGIES | Master Changelog & Engineering Evolution
> **Project:** Tharo Technologies Web Platform (`tharo-web`)  
> **Repository:** Git-tracked Next.js 16 (App Router) Application  
> **Current Version:** `v1.1.0` (Production Ready)  
> **Last Updated:** November 16, 2026 (Author: Himank Lalani)  
> **Purpose:** Comprehensive, granular record of all design decisions, architectural evolutions, code changes, competitive audits, and feature implementations for team members and AI pair-programming agents.

---

## Release Timeline Summary

```
v1.1.0 (Short Laptop Responsive Scaling, Zero Hover Lift & Custom Domain Mapping)
  └── Isolated short-laptop viewport scaling, phone mockup internal text proportional sizing with full chassis length, 4-card gallery Y-dampened scatter, Rule 9 zero z-axis hover lift, Hostinger DNS tharo.tech mapping
v1.0.0 (Production Release & Polish)
  └── Single-viewport ROI Calculator, Phone Restart Preloader, Privacy/Terms/404, sitemap.xml, zero jargon
v0.20.0 (Studio Rebrand to Tharo Technologies LLP)
  └── Complete migration to Tharo.tech, 14 sector playbooks, Warm Swiss luxury design system
v0.1.0 - v0.19.6 (Architecture & Component Evolution)
  └── Interactive WhatsApp Simulator, StackflowCards, DepthCarousel, Integration Matrix, Pipo Voice
```

---

## [v1.1.0] - 2026-11-16
### Short Laptop Responsive Scaling, Zero Hover Lift & Custom Domain Mapping

#### 1. Responsive Short-Laptop Viewport Architecture
- **Strict Viewport Isolation:**
  - Scoped all compact scaling strictly under `@media (min-width: 960px) and (max-height: 820px)` and `@media (min-width: 960px) and (max-height: 700px)`.
  - Guaranteed that mobile devices (`max-width: 768px`), tablets (`768px - 959px`), and standard/tall desktop viewports (`height >= 850px`, including MacBooks) remain 100% untouched.

#### 2. Hero WhatsApp Simulator: Seamless Preloader Docking & Preserved Outer Frame
- **Preserved Outer Frame Dimensions:** Retained the authentic full length (`height: clamp(720px, 80vh, 765px)`), width (`min(365px, calc(100vw - 2rem))`), 50px rounded corners, and 9px chassis padding in [`InteractiveHeroConsole.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/InteractiveHeroConsole.module.css). Outer phone length is never artificially reduced.
- **100% Preloader Synchronization:** Synchronized dimensions, border-radius, and padding between [`Preloader.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/Preloader.module.css) and [`InteractiveHeroConsole.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/InteractiveHeroConsole.module.css), completely eliminating the resizing jump during the preloader to hero phone transition on 13.6-inch MacBook and all viewports.
- **Proportional Internal Demo Sizing:**
  - Scaled message bubbles (`font-size: 0.72rem`, `line-height: 1.34`, `padding: 0.35rem 0.52rem`).
  - Scaled action buttons (`font-size: 0.68rem`, `padding: 0.36rem 0.55rem`), reducing button block height by over 50%.
  - Scaled avatar (32px), header contact typography, dynamic island (72px × 18px), and bottom input bar (30px mic button).
  - Ensured all messages, slot buttons ("10:30 AM", "3:30 PM", "6:00 PM"), confirmation card ("Add to Calendar", "Clinic Directions"), and the bottom input bar fit inside the phone screen simultaneously without clipping.

#### 3. 4-Card Asymmetric Gallery: Dampened Vertical Fan-Out
- **Separated Multipliers in Code:** In [`CinematicAsymmetricGallery.tsx`](file:///Users/himanklalani/Projects/uncomplic8/src/components/CinematicAsymmetricGallery.tsx), separated horizontal (`xMultiplier`) and vertical (`yMultiplier`) scatter logic. On viewports with `height <= 820px`, `yMultiplier` dampens vertically to prevent cards from overflowing top or bottom screen boundaries.
- **Compacted Card Dimensions:** In [`CinematicAsymmetricGallery.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/CinematicAsymmetricGallery.module.css), compacted card width (275px) and padding under the short-laptop media query.

#### 4. Rule 9: Zero Z-Axis Hover Lift or Popups on Cards & Images
- **Grounding Static Containers:** Enforced mandatory design rule across the codebase: static containers, cards, images, and artwork must stay grounded. Hover effects are restricted to background contrast, border illumination, or interactive controls.
- **Removed Lift Transforms:** Removed `calc(var(--ty) - 6px)` and `scale(1.04)` on hover in [`CinematicAsymmetricGallery.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/CinematicAsymmetricGallery.module.css) and `transform: translateY(-2px)` on focus in [`SystemAnatomyStage.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/SystemAnatomyStage.module.css).

#### 5. Section Viewport Compactness
- **System Anatomy:** Compacted stage shell padding (`0.95rem 1.25rem`), step items (`0.6rem 0.85rem`), and schematic panels in [`SystemAnatomyStage.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/SystemAnatomyStage.module.css) so steps 01 through 04 fit on screen without vertical clipping.
- **ROI Calculator:** Compacted section padding (`3rem 0 3.5rem`), header spacing, control box padding, and results column in [`RoiCalculator.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/RoiCalculator.module.css).
- **Lollipop Carousel:** Scaled capsule height to `clamp(330px, 46vh, 380px)` in [`LollipopCarousel.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/LollipopCarousel.module.css).
- **Sector Showcase:** Compacted stage card padding in [`SectorPillShowcase.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/SectorPillShowcase.module.css).
- **Architecture Canvas:** Restored full natural 16:9 vertical height (`max-height: 560px`) in [`CinematicPictureComplete.module.css`](file:///Users/himanklalani/Projects/uncomplic8/src/components/CinematicPictureComplete.module.css).

#### 6. Custom Domain Mapping & Production Deployment
- **Custom Domain Configured:** Connected Hostinger DNS to Vercel for `tharo.tech`. Configured A Record pointing to `216.198.79.1` and CNAME for `www` pointing to `cname.vercel-dns.com`.
- **Wholesale Meta Billing Route:** Added dedicated transparent pricing guide at `/pricing/meta-charges` explaining direct Meta wholesale message billing with 0% markup.

---
v0.1.0 (Architecture & Blueprint)
  └── Brand Foundation, Competitive Research (Wati/DoubleTick), uncomplic8.md master plan
v0.2.0 (Core Engine & Interactivity)
  └── Interactive WhatsApp Simulator, Tabbed Mockup, Dynamic Sectors, Marquee, Pricing
v0.3.0 (Typography Exploration)
  └── Audit of modern 2025-2026 typefaces, Shortlisting Bricolage Grotesque + Hanken Grotesk
v0.4.0 (The Warm Editorial Luxury Aesthetic Pivot)
  └── Visual audit of tharoflow.ai, Creamy Beige + Forest Green + Charcoal palette, Playfair Display serif
v0.5.0 (Documentation & Agent Handover)
  └── Deep context.md, exhaustive changelog.md, verified production build
v0.6.0 (Modular Extensible Data Layer & Navbar Fix)
  └── Centralized src/data/ (siteConfig, sectors, pricing, flows, stats), SectorIcon resolver, navbar transform fix
v0.7.0 (Warm Editorial Luxury Transformation Engine, Grid Texture & Telemetry)
  └── Paper dot-grid pattern, FlowTransformer live bridge, button shimmer sweep, floating hero badges, zero emoji and dash enforcement
v0.8.0 (Atmospheric Hero Aura, Interactive Integration Matrix & Simulator Turbo)
  └── Radial hero spotlight aura, Micro-Telemetry HUD dock, 1x/2x Turbo speed controller, Dynamic Island, dual Visual/Payload console with copy button, dynamic ROI WhatsApp prefill
v0.9.0 (Authentic WhatsApp UI Engine Overhaul)
  └── Exact WhatsApp doodle wallpaper, SVG bubble tails, green verified checkmark badge, interactive action buttons, iOS input bar with mic and camera, end-to-end encryption banner
v0.10.0 (Clean Modern iPhone Mockup & UI Stabilization)
  └── Replaced garish metallic Framer bezel and protruding side buttons with a sleek, clean modern iPhone frame, integrated centered Dynamic Island, expanded screen width to prevent text truncation
v0.11.0 (Hero Simplification & Grid Width Expansion)
  └── Removed floating telemetry pills and micro-telemetry HUD dock; increased background grid pattern width from 28px to 56px and container max-width to 1280px
v0.12.0 (StackflowCards: 3D Depth-Parallax Stacking Engine)
  └── Added interactive scroll-pinned 3D stacking card deck inspired by Framer Stackflowcards, featuring 4 enterprise system layers with spring-driven translation, tilt, scaling, and darkening physics
v0.13.0 (SectorDepthCarousel: 3D Curved Industry Depth Carousel)
  └── Replaced static industry cards grid with interactive 3D cylindrical depth carousel inspired by Framer DepthCarousel; features smooth drag/swipe physics, horizontal wheel navigation, dynamic rotateY/translateZ depth curve, and direct playbook links
v0.14.0 (Floating WhatsApp Chat Widget Engine)
  └── Implemented global floating WhatsApp chat popup widget inspired by Framer WhatsApp chat widget; features unread badge notification, authentic doodle backdrop, live local clock, quick inquiry chips, and one-tap wa.me prefilled launcher
v0.15.0 (Apple Liquid Glass Navbar Overhaul)
  └── Implemented authentic Apple liquid glass styling for the floating navbar: deep 200% saturation filter, dual-rim specular inset highlights, convex lens reflection layer, translucent glass hover capsules for nav links, and frosted glass dropdown plate
v0.16.0 (Lollipop Carousel: Live Automation Capsules)
  └── Native port of Framer Lollipop Carousel: ambient auto-drifting strip of vertical capsule workflows, hover-to-lift card expansion, neighbor dimming, operational impact telemetry, and touch drag pan
v0.17.0 (CollapsingStepsCards: Horizontal Touch-Based Turnkey Deployment Deck)
  └── Native port and elevation of Framer CollapsingCards: 5 turnkey deployment stages, desktop horizontal flex accordion with hover/click expansion, mobile touch-swipe scroll-snap with pagination dots
v0.18.0 (Humanized Plain-Language Copy Overhaul)
  └── Complete copy review adhering to humanizer-zh principles: zero em dashes, zero emojis, zero dense developer jargon; replaced API/ODBC/TDL/SLA acronyms with natural, clear language for business owners
v0.18.1 (Universal Connectivity Removal & Integration Matrix Mobile Overhaul)
  └── Removed the Universal Connectivity technology strip completely; refined IntegrationMatrix phone experience with horizontal swipeable pill bar, 2-tier terminal header, compact 3-stat metric grid, and integrated sync conduit bridge
v0.19.0 (Site-Wide Mobile Negative Space & Decluttering Overhaul)
  └── Calibrated every section for smartphone screens down to 320px: swipeable horizontal pill bars, responsive typography clamps, proportional card heights, uncluttered grids, and elegant negative space
v0.19.1 (TabbedMockup Mobile Horizontal Clipping Fix & Global Viewport Lock)
  └── Resolved TabbedMockup text truncation by enforcing minmax(0, 1fr) grid columns, 4-column native segmented tab header, flex: 1 min-width: 0 on text bullets, and global html/body overflow-x guard
v0.19.2 (Phone Hero Elevation & Smooth Liquid-Glass Nav Menu Transition)
  └── Restructured mobile nav to eliminate pill deformation and height-auto layout jank; introduced dedicated floating liquid-glass card with backdrop dismisser and icon rotation; elevated phone hero with status chip, balanced typography, CTA icons, micro-trust strip, and viewport height framing
v0.19.3 (Mobile Blue Tap-Highlight Removal & Green Live Badges Decluttering)
  └── Eradicated native mobile blue tap/selection highlights via global -webkit-tap-highlight-color transparent and tabIndex removals; removed noisy telemetry HUD bar from Lollipop Carousel; purged artificial green 'Live' buttons/badges across sections for a quiet, minimal, editorial design
v0.19.4 (Creative Color Splash Button & Hero Secondary CTA Removal)
  └── Replaced secondary 'Our Web Portfolio' button in hero with an artistic 'Our Creative Side' chromatic splash button in the navbar linked to http://uncomplic8-web.vercel.app/; features floating organic paint droplets, iridescent gradient borders, mobile header integration, and mobile drawer banner
v0.19.5 (Awwwards Big Text Footer & Studio Telemetry Engine)
  └── Re-architected site footer into an Awwwards-style editorial masterwork: wall-to-wall giant UNCOMPLIC8 watermark typography with responsive clamp, editorial statement hero row, live Indian Standard Time clock, pulsing studio availability beacon, interactive email clipboard pill, 4-column nav grid, and smooth back-to-top controller
v0.19.6 (Framer Neubrutalism Button: Our Creative Side)
  └── Ported exact Framer Neubrutalism Button (WJb2Ge) for 'Our Creative Side': rgb(190, 242, 100) electric lime fill, 2px solid black border, 3.5px hard offset drop shadow, tactile mechanical click translation, and mobile header & drawer integration
v0.20.0 (Master System Context & Developer Handover Engine)
  └── Master architectural synchronization: updated context.md & changelog.md with complete Startup Business Blueprint (Dual-Track OS + Bridge, Direct Meta Tech Provider model, Zero-Click AI Voice/Prompt Agent); resolved standard CSS background-clip compatibility warnings; engineered comprehensive onboarding guide in README.md
```

---

## [v0.20.0] - 2026-10-12
### Master System Context, CSS Compatibility & Developer Handover Engine

#### 1. Master System Context Synchronization
- **Integrated Startup Architecture:** Formally documented Uncomplic8's Dual-Track business model in [`context.md`](file:///Users/siddharthpal/Desktop/uncomplic8/context.md) and [`startuoidea.md`](file:///Users/siddharthpal/Desktop/uncomplic8/startuoidea.md):
  - **Track A (All-in-One OS):** For businesses with zero existing software (dental clinics, salons). Delivers scheduling, patient/client CRM, POS, and two-way WhatsApp under one clean browser login.
  - **Track B (The Smart Bridge):** For businesses already reliant on legacy tools (Tally Prime, Petpooja). Plugs in via APIs/ODBC without asking them to switch accounting software.
- **Direct Meta Tech Provider Blueprint:** Documented the Embedded Signup architecture allowing clients to pay Meta directly with zero message markup from Uncomplic8, protecting margins and providing an honest pricing weapon against BSP resellers.
- **Zero-Click AI Voice & Prompt Agent:** Outlined the technical pipeline for front-desk voice entry (Web Mic / WhatsApp Voice Note → Whisper API / Groq → LLM Structured JSON Schema → auto-fills records and dispatches WhatsApp confirmations).

#### 2. Cross-Browser CSS Standard Compliance
- **Resolved `background-clip` Warnings:** Added standard `background-clip: text;` directly alongside `-webkit-background-clip: text;` in [`src/components/Footer.module.css`](file:///Users/siddharthpal/Desktop/uncomplic8/src/components/Footer.module.css) for `.giantText` and `.bigTextSection:hover .giantText`, clearing all IDE linter warnings.

#### 3. Developer & AI Agent Onboarding Guide
- **Rewrote `README.md`:** Replaced boilerplate Next.js template with a comprehensive developer onboarding manual detailing quick start steps, design tokens, typography rules, zero-emoji/zero-em-dash policies, and pointers to master context files.

## [v0.19.3] - 2026-09-23
### Mobile Blue Tap-Highlight Removal & Green Live Badges Decluttering

#### 1. Eradicated Mobile Blue Selection & Tap Highlight
- **Root Cause of Blue Selection Box:** On mobile devices (particularly Android Chromium and mobile WebKit), tapping an element with `tabIndex={0}` or `role="button"` triggers native tap highlights (`-webkit-tap-highlight-color`), focus outlines, and text selection. This caused the carousel capsule cards to turn into a solid light-blue selection rectangle upon touch.
- **Global Tap-Highlight Reset:** Added `-webkit-tap-highlight-color: transparent !important;` and `:focus:not(:focus-visible) { outline: none; }` to the global CSS reset in [`src/app/globals.css`](file:///Users/siddharthpal/Desktop/uncomplic8/src/app/globals.css).
- **Carousel Touch Hardening:** Enforced `user-select: none !important;`, `-webkit-user-select: none !important;`, and `-webkit-touch-callout: none !important;` on `.trackContainer`, `.track`, and `.capsule` in [`LollipopCarousel.module.css`](file:///Users/siddharthpal/Desktop/uncomplic8/src/components/LollipopCarousel.module.css). Removed `tabIndex={0}` and `role="button"` from cards in [`LollipopCarousel.tsx`](file:///Users/siddharthpal/Desktop/uncomplic8/src/components/LollipopCarousel.tsx) and [`CollapsingStepsCards.tsx`](file:///Users/siddharthpal/Desktop/uncomplic8/src/components/CollapsingStepsCards.tsx).

#### 2. Removed 'Live Now' Green Badges & Decluttered Content
- **Lollipop Carousel Top HUD Removal:** Removed the redundant `.hudBar` containing the pulsing green/amber dot, "Live Sector Flows (Auto-Drifting)", and play/pause controls. The carousel now breathes freely with clean card swiping.
- **Card Content Streamlined:** Removed the layout-cramping `expandedDetails` block that was forcing additional description text, tag pills, and buttons into fixed-height cards. Cards now feature a stable, minimal, high-impact layout: Sector Name + WhatsApp Conversation Bubbles + Serif Title + Clean Subtitle + Impact Metric.
- **IntegrationMatrix Terminal Cleaned:** Removed the neon green `.liveStatus` badge ("LIVE STREAMING", "LIVE SYNC", "LIVE AD DOCK") from the terminal header in [`IntegrationMatrix.tsx`](file:///Users/siddharthpal/Desktop/uncomplic8/src/components/IntegrationMatrix.tsx).
- **TabbedMockup Cleaned:** Removed the `.badgeSmall` ("LIVE") badge and converted "Live" connection text to a calm, minimal "Active" label in [`TabbedMockup.tsx`](file:///Users/siddharthpal/Desktop/uncomplic8/src/components/TabbedMockup.tsx).
- **CollapsingStepsCards Cleaned:** Removed `.statusPulse` pulsing green dots from both desktop and mobile footers in [`CollapsingStepsCards.tsx`](file:///Users/siddharthpal/Desktop/uncomplic8/src/components/CollapsingStepsCards.tsx).
- **Hero Cleaned:** Removed the `.eyebrowDot` pulsing green beacon from the hero eyebrow, and removed green checkmark badge circles from the trust strip, transforming it into refined, understated micro-typography in [`src/app/page.tsx`](file:///Users/siddharthpal/Desktop/uncomplic8/src/app/page.tsx).
- **Refined Section Headings:** Replaced "See it working. Right now." with "See the workflow. In action." and "Live Automations. In motion." with "Automations in motion." to eliminate repetitive "Live" hype.

---

## [v0.19.2] - 2026-09-23
### Phone Hero Elevation & Smooth Liquid-Glass Nav Menu Transition

#### 1. Mobile Nav Menu Architecture & Transition Overhaul
- **Root Cause of Transition Jank:** Previously, clicking the mobile menu toggled `.headerMenuOpen` directly on the fixed floating pill, simultaneously animating the height from 0 to auto and transitioning `border-radius: var(--radius-xl) !important`. This created severe layout recalculation and deformed the Apple liquid glass capsule into a warping, bulging shape. On menu close, border-radius snapped back before height collapsed, causing visual clipping.
- **Stable Floating Capsule Pill:** `<motion.header>` now remains an unmutating, anchored capsule pill at all times (`border-radius: var(--radius-full)`). The pill never deforms, expands, or shifts position.
- **Dedicated Floating Liquid-Glass Dropdown Sheet:** The mobile navigation menu is now decoupled into an independent floating card (`.mobileDropdown`) positioned right beneath the header pill (`top: calc(100% + 8px)`). It is styled with Apple liquid glass blur (32px), specular rim light, and rounded corners (`border-radius: 22px`).
- **Smooth 60fps/120fps GPU Transitions:** The sheet animates using hardware-accelerated transforms (`initial={{ opacity: 0, y: -12, scale: 0.97 }}`, `animate={{ opacity: 1, y: 0, scale: 1 }}`) in 240ms with `ease: [0.16, 1, 0.3, 1]`, with zero layout reflows.
- **Smooth Hamburger Icon Morph:** Added spring-driven 90-degree icon rotation and crossfade between the `Menu` and `X` icons (`rotate: -90 -> 0 -> 90`).
- **Soft Touch Backdrop Dismiss:** Rendered an independent fixed backdrop overlay (`.mobileBackdrop`) with subtle blur and tap-to-close behavior so tapping outside instantly dismisses the menu.

#### 2. Phone Hero Section Elevation
- **Ambient Eyebrow Status Chip:** Added a frosted pill badge above the hero title (`heroEyebrow`) featuring a pulsing emerald status beacon (`pulseDot`) and "WhatsApp Business Systems Studio" label.
- **Balanced Phone Headline Typography:** Wrapped the title into responsive leads and tails with `text-wrap: balance` and tailored mobile clamps (`clamp(2.15rem, 8.2vw, 2.85rem)`), ensuring zero orphan words or awkward line breaks.
- **Refined Subtitle & Action Duo:** Calibrated the subtitle to a comfortable 320px column (`line-height: 1.58`). Added directional indicators to both buttons (`ArrowRight` for demo booking, `ArrowUpRight` for portfolio).
- **Hero Micro-Trust Strip:** Positioned a delicate 3-pillar trust badge row directly beneath the CTAs (`Official Meta API` · `Zero Markup` · `5-Day Turnkey`) with soft emerald checkmarks, replacing dead space and grounding the mobile screen.
- **Initial Viewport Framing:** Calibrated mobile hero height (`min-height: calc(100svh - 1.5rem)`) with centered vertical alignment, eliminating awkward halfway cutoff of the subsequent `FlowTransformer` section.

---

## [v0.19.1] - 2026-09-22
### TabbedMockup Mobile Horizontal Clipping Fix & Global Viewport Lock
#### Elimination of Right-Edge Content Truncation on Mobile Devices
- **TabbedMockup Right-Edge Clipping Root Cause & Resolution**:
  - **Root Cause**: The nested card lacked `min-width: 0` constraints, allowing unconstrained monospace headings (`uncomplic8_os :: manage`), system logs, and bullet lists inside CSS Grid's default `minmax(auto, 1fr)` to blow the container width past 460px on phone screens, causing text like `with one tap`, `the same customer`, and `behind the scenes` to get truncated at the right viewport edge.
  - **Grid Deflation**: Enforced `grid-template-columns: minmax(0, 1fr)` on `.mockupContent`, allowing the card to shrink naturally to 100% of any phone screen width down to 320px.
  - **Flexible Text Wrapping**: Added `flex: 1; min-width: 0; word-break: break-word;` on `.featureList li span` and `.mockupText`, guaranteeing graceful multi-line wrapping with zero text clipping.
  - **4-Column Native Segmented Tab Bar**: Replaced the overflowing tab scroller on screens `<= 640px` with a clean 4-column grid (`grid-template-columns: repeat(4, 1fr)`). Displays `Manage`, `Broadcast`, `Automate`, and `Analyse` side-by-side with icon and label, ensuring all 4 capabilities are visible simultaneously without horizontal scroll or clipping.
  - **Global Viewport Overflow Guard**: Added `overflow-x: hidden; max-width: 100vw;` to `html` and `body` in `src/app/globals.css`.
#### Elegant, Awwwards-Level Mobile Experience
- **Section Headers & Negative Space**:
  - Calibrated `.sectionTitle` across all sections from oversized 40-48px down to an elegant editorial scale (`clamp(1.85rem, 6.5vw, 2.65rem)`), preventing awkward multi-line word wrapping on narrow displays.
  - Reduced excessive dead space (`margin-bottom: 4rem` down to `1.75rem-2.25rem`) for a fluid mobile reading cadence.
- **Horizontal Swipeable Pill Tabs**:
  - Upgraded all tabbed selectors (`TabbedMockup`, `FaqSection`, `WhatsAppSimulator`) to smooth edge-to-edge horizontal scrollbars with touch momentum (`-webkit-overflow-scrolling: touch`) and snap alignment, completely eliminating messy 2x2 and 3-line tab wrapping.
- **Component Proportions on Phone Displays**:
  - **WhatsApp Simulator**: Tuned phone frame to `min(355px, calc(100vw - 1.5rem))` with scaled status bar, dynamic island, and touch-friendly quick reply chips.
  - **Lollipop Carousel**: Scaled capsule cards to `235px` width and `345px` height with subtle 20px edge masks, allowing comfortable drag interaction on touch screens.
  - **3D Stacking Cards (`StackflowCards`)**: Optimized card face to `padding: 1.25rem 1rem`, hid the secondary stats sidebar, and sized card anchor height cleanly (`clamp(470px, 74vh, 530px)`) to prevent viewport clipping.
  - **ROI Calculator**: Transitioned to an uncluttered single-column card with 12px rounded result items and comfortable slider thumb hitboxes.
  - **Collapsing Steps Deck**: Added phone-optimized padding (`1.5rem 1.25rem`) and compact typography on mobile cards.
  - **Industry Carousel (`SectorDepthCarousel`)**: Reduced mobile stage height to `440px` and card height to `310px`, hiding redundant desktop drag hints to prioritize card content.
  - **Apple Liquid Glass Navbar & Footer**: Tightened navbar pill margins to `12px` on small phones and converted footer link groups into a clean 2-column mobile grid.

---

## [v0.18.1] - 2026-09-22
### Universal Connectivity Strip Removal & Integration Matrix Mobile Overhaul
#### Streamlined Layout & Mobile-First Touch Experience
- **Universal Connectivity Strip Removed**:
  - Completely deleted the redundant bottom ecosystem banner (`.ecosystemStrip`, `.stripLabel`, `.badgesGroup`, `.techChip`) from `IntegrationMatrix.tsx` and `IntegrationMatrix.module.css`.
  - Removed all unused icon imports (`ArrowRight`, `Terminal`).
  - Set `.canvasCard` bottom margin to `0` for clean, balanced spacing above the next section.
- **Mobile Responsiveness Overhaul for Phones**:
  - **Horizontal Scrollable Category Tabs**: Replaced awkward 3-line tab wrapping on mobile with a smooth horizontal scrollable pill strip (`overflow-x: auto`, `scroll-snap-type: x mandatory`, hidden scrollbars) featuring large touch targets.
  - **Two-Tier Terminal Window Bar**: Redesigned `.windowBar` on screens `<= 640px` with a neat grid: Row 1 displays macOS window dots, centered truncated host title, and live streaming status; Row 2 displays an edge-to-edge segmented toggle (`Visual` vs `Payload`).
  - **Compact 3-Column Stats Grid**: Replaced vertically stacked 100%-wide metric cards with a balanced 3-column metric row on phone viewports (and a one-line key-value format for ultra-small screens `< 380px`), keeping the auto-resolved ledger list visible above the fold.
  - **Clean Sync Conduit Bridge**: Adapted `.centerConduit` on mobile into an integrated horizontal connector bar with the `U8` emblem, HTTP method badge (`POST`), and latency tag (`28ms`) nestled between the light WhatsApp event card and the dark terminal dashboard.
  - **Refined Typography & Spacing**: Calibrated padding, chat bubble font sizes, and record item badges down to 320px screens.

---

## [v0.18.0] - 2026-09-22
### Humanized Plain-Language Copy Overhaul & Card Decluttering
#### Audience-First Language Alignment & Steps Card Streamlining
- **Complete Steps Card Decluttering**:
  - Eliminated the redundant nested dark preview card (`.previewCard`), which was repeating deliverables in a cramped 2-column micro-table inside the active card.
  - Replaced the dense 4-bullet list with **3 clean, spacious highlight cards** arranged horizontally across the expanded card.
  - Shortened collapsed card labels from 40-character sideways sentences to crisp 1-to-2 word indicators (`REVIEW`, `META SETUP`, `TALLY SYNC`, `SMART FLOWS`, `GO LIVE`).
  - Removed stacked `Day X` pills from collapsed cards to restore vertical breathing room.
  - Preserved a clean bottom action bar with status pulse (`Ready in 5 Days`) and `Book Launch ->` CTA.
  - Resolved bottom footer clipping bug: expanded `.desktopDeck` height to `480px`, optimized vertical margins, and tightened card padding to `2rem 2.5rem` to guarantee full visibility and ample breathing room.
- **FlowTransformer Mobile Experience Overhaul**:
  - Implemented smooth swipeable horizontal pill bar with touch snap for scenario tabs on phones, preventing jagged multi-line button wrapping.
  - Restored the transformation bridge on mobile: instead of hiding the U8 Engine node, styled it as a vertical connector bridge with animated beam pulses between the customer message and business execution cards.
  - Optimized typography, audio waveforms, entity tags, and line item paddings for small mobile displays down to 320px.
- **Removal of Dense Technical Jargon**:
  - Replaced developer-facing terms across all files:
    - "ODBC / TDL connector", "bi-directional REST/XML", and "telemetry conduits" replaced with "Direct Tally sync", "instant PDF invoices", and "billing connection".
    - "Official Meta Cloud API v20.0 provisioning" replaced with "Official WhatsApp Business setup directly with Meta at zero markup".
    - "Automated debt escalation sequence" replaced with "Polite automated payment reminders with direct UPI link".
    - "Multi-agent collision-free shared workspace" replaced with "One shared WhatsApp number for your whole team".
    - "Non-Delivery Report (NDR) Interactive Re-routing" replaced with "Missed delivery follow-up (reschedule or leave with a neighbor)".
- **Strict Humanizer-zh Principle Enforcement**:
  - Removed AI filler verbs, puffery, and exaggerated claims ("stands as a testament", "empowering", "revolutionizing", "beacon").
  - Eliminated rule-of-three cliches and formulaic contrasting patterns.
  - Strictly enforced **zero em dashes**, zero en dashes, and **zero emojis** across UI copy, data definitions, and documentation.
- **Files Humanized**:
  - `src/data/siteConfig.ts`: Plain-language brand tagline, description, and footer.
  - `src/data/steps.ts`: 5 clear stages (Review Workflow, WhatsApp Setup, Connect Tally, Build Smart Flows, Train Team & Go Live).
  - `src/data/automationCapsules.ts`: Replaced technical hashtags (`#DirectODBC`, `#DPDPCompliant`, `#CTWA`) with user-friendly tags (`#TallyPrime`, `#InstantInvoices`, `#UPIPayment`).
  - `src/data/stackflowCards.ts`: Replaced technical specs ("REST / XML", "Lighthouse 99") with understandable metrics ("Automatic", "Instant", "Top Search Results").
  - `src/data/stats.ts`: Simplified marquee items and why-us cards (removed DPDP jargon).
  - `src/data/faqs.ts`: Clear, reassuring answers removing API dossiers, webhooks, and rate-limiting jargon.
  - `src/data/pricing.ts`: Accessible plan descriptions, removed SLA/ERP puffery.
  - `src/data/about.ts`: Grounded mission, pillars, and business values.
  - `src/data/transformationFlows.ts`: Practical labels, real-world business items.
  - `src/data/integrations.ts`: Clean, accessible taglines.
  - `src/app/page.tsx`: Friendly section subtitles and hero copy.
  - `src/components/FlowTransformer.tsx`, `TabbedMockup.tsx`, `RoiCalculator.tsx`, `FaqSection.tsx`, `LollipopCarousel.tsx`: Humanized in-component copy and button text.

---
### CollapsingStepsCards: Horizontal Touch-Based Turnkey Deployment Deck
#### 5-Day Turnkey Deployment Architecture
- **Framer CollapsingCards Port & Multi-Step Expansion**:
  - Implemented `CollapsingStepsCards` (`src/components/CollapsingStepsCards.tsx` + `module.css`), mounted on the Homepage before the Forest Green "Why Uncomplic8" section.
  - Expanded from Framer's 3 dummy cards into 5 concrete operational deployment stages:
    1. `01` **Operational Audit & Blueprint** (Day 1)
    2. `02` **Official Meta Cloud API Provisioning** (Day 2)
    3. `03` **Tally Prime & ERP Conduit Integration** (Day 3)
    4. `04` **Turnkey Sector Workflows & Bot Tuning** (Day 4)
    5. `05` **Team Command Dock & Go-Live Launch** (Day 5)
- **Desktop Horizontal Flex Accordion**:
  - Horizontal flex layout with smooth cubic-bezier transitions (`0.45s`).
  - Active step card expands to `flex: 3.5` (`min-width: 480px`), revealing step number, Day badge, Playfair Display title, editorial headline, bulleted deliverables checklist, and structured preview card with live status badges.
  - Inactive step cards smoothly compress to `flex: 0.85`, displaying vertical rotated titles, step numbers, and sector icons.
- **Mobile Touch-Based Scroller**:
  - Dedicated mobile deck with horizontal touch scrolling, `scroll-snap-type: x mandatory`, touch swipe gestures, and active pagination indicator dots.
- **SSOT Data Layer (`src/data/steps.ts`)**:
  - Centralized definitions for all 5 implementation stages with deliverables, metrics, and preview cards.

---

## [v0.16.0] - 2026-09-22
### Lollipop Carousel: Live Automation Capsules
#### Ambient Drifting Workflow Showcase
- **Framer Lollipop Carousel Port**:
  - Implemented `LollipopCarousel` (`src/components/LollipopCarousel.tsx` + `module.css`), positioned between `IntegrationMatrix` and `StackflowCards` on the Homepage.
  - Seamless 60fps ambient horizontal drift driven by requestAnimationFrame accumulator with zero-seam copy wrapping.
- **Lollipop Capsule Morph & Lift Physics**:
  - Compact vertical pill cards (`border-radius: 40px`) with specular rim lighting and conversational wireframe bubble stacks.
  - Hovering or focusing any capsule pauses drift and smoothly scales the card (`scale: 1.06`, `translateY: -10px`) into an elevated focus layer.
  - Surrounding neighbor capsules gracefully dim (`opacity: 0.38`, `scale: 0.96`, `filter: blur(0.5px)`).
  - Expanded state unveils operational description, system tag pills (`#MetaCloudAPI`, `#TallyPrime`, `#NDRRecovery`), and a direct link to the sector playbook.
- **SSOT Data Layer (`src/data/automationCapsules.ts`)**:
  - Engineered 8 real-world workflow capsules across Salons, Tally ERP, Logistics NDR, Healthcare, D2C, Click-to-WhatsApp Ads, OPD Queues, and Restaurants.
- **Top HUD & Gesture Controls**:
  - Status indicator displaying drift telemetry ("Live Sector Flows" / "Flow Inspected"), play/pause toggle, and left/right nudge navigation buttons.

---

## [v0.15.0] - 2026-09-22
### Apple Liquid Glass Navbar Overhaul
#### Authentic Optical Glass Refraction & Elevation
- **Multi-Stop Liquid Gradient**:
  - Replaced flat translucent beige (`rgba(247, 246, 236, 0.85)`) with a multi-stop liquid glass gradient: `linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(247, 246, 236, 0.45) 50%, rgba(255, 255, 255, 0.62) 100%)`.
- **Deep Refraction & Optical Saturation**:
  - Upgraded filter stack to `backdrop-filter: blur(28px) saturate(200%) contrast(102%)`, allowing content scrolling beneath the bar to reflect with vibrant saturation and optical depth.
- **Specular Rim Lights & Convex Lens Sheen**:
  - Added micro-bevel specular inset highlights (`inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.95)`, `inset 0 0 20px 0 rgba(255, 255, 255, 0.35)`, `inset 0 -1px 1px 0 rgba(0, 0, 0, 0.04)`).
  - Integrated optical lens convex reflection layer (`.header::before`) across the upper hemisphere of the pill capsule.
- **Interactive Liquid Capsule Links & Dropdown**:
  - Converted desktop navigation items to fluid glass capsules that reveal specular translucent pills on hover.
  - Upgraded Solutions dropdown menu into a liquid frosted glass plate with `backdrop-filter: blur(32px) saturate(200%)`.
  - Added specular rim styling to the primary CTA button.

---

## [v0.14.0] - 2026-09-21
### Floating WhatsApp Chat Widget Engine
#### Global Persistent Floating Chat Dock
- **Framer WhatsApp Chat Widget Port**:
  - Implemented `WhatsAppChatWidget` (`src/components/WhatsAppChatWidget.tsx` + `module.css`), mounted site-wide in `RootLayout` (`src/app/layout.tsx`).
  - Circular floating launcher in WhatsApp emerald (`#25D366`) with unread badge counter (`1`) and icon transition.
  - Spring-animated chat popup card with Uncomplic8 avatar, official white/emerald verified badge, and online indicator.
- **Authentic Conversational Experience**:
  - Authentic SVG doodle wallpaper background on `#efeae2` with "TODAY" date divider.
  - Dynamic local timestamp matching user device clock.
  - Interactive quick inquiry chips ("Book a Live Demo", "Ask About Pricing & Tiers", "Tally & ERP Sync Details") that immediately launch WhatsApp with tailored message prefill.
  - Direct Meta Cloud API CTA button and ESC key dismissal support.

---

## [v0.13.0] - 2026-09-21
### SectorDepthCarousel: 3D Curved Industry Depth Carousel
#### Interactive 3D Depth Carousel for Sectors
- **Framer DepthCarousel Port & Custom Content**:
  - Implemented `SectorDepthCarousel` (`src/components/SectorDepthCarousel.tsx` + `module.css`), transforming the static 12-sector grid into a tactile, 3D cylindrical depth carousel.
  - Cards dynamically adjust position in 3D space based on distance offset from the center active card (`xFor`, `zFor`, `rotFor`, `scaleFor`, `opacityFor`, `blurFor`).
- **Rich Industry Content Instead of Plain Images**:
  - Replaced image placeholders with structured playbook content: sector icon pill, playbook index badge, sector title, short operational description, highlighted workflows, and direct CTA linking to `/solutions/[sector]`.
- **Gesture & Navigation Controls**:
  - Added pointer drag with inertial velocity snapping, horizontal trackpad/wheel support, previous/next chevron buttons, counter (`01 / 12`), and subtle edge gradient masks.

---

## [v0.12.0] - 2026-09-21
### StackflowCards: 3D Depth-Parallax Stacking Engine
#### Scroll-Pinned 3D Depth Deck
- **Framer Stackflowcards Port & Architecture**:
  - Implemented `StackflowCards` (`src/components/StackflowCards.tsx` + `module.css`), anchoring cards within a 1200px 3D perspective viewport stage during a sticky scroll progression.
  - As each card reaches its active threshold (`d = 0`), it rests flat in front. As the user continues scrolling, the card glides straight back into 3D space (`translateZ: -200px`, `rotateX: 8deg`, `scale: 0.85`), with progressive darkening and stacking offsets, while the subsequent card rises into focus.
- **Four Unified Operational Layers (`src/data/stackflowCards.ts`)**:
  - **Layer 01 (Conversational Engine)**: Autonomous WhatsApp flows with instant slot booking and Google Calendar sync.
  - **Layer 02 (Backoffice Ledger Bridge)**: Direct Tally Prime & ERP automated sales register voucher synchronization with GST computation.
  - **Layer 03 (Team Command Dock)**: Multi-agent unified collision-free inbox across Bangalore, Mumbai, and Delhi regional desks.
  - **Layer 04 (Traffic & Digital Footprint)**: 99 Lighthouse performance Next.js web application and Google Local 3-Pack rank #1 optimization.

---

## [v0.11.0] - 2026-09-21
### Hero Simplification & Grid Width Expansion
#### De-Cluttered Hero Section
- **Removed Floating Badges**:
  - Removed "Meta Cloud API: 12ms ping" and "Tally Prime: Auto-Voucher Synced" floating ambient pills.
- **Removed Micro-Telemetry HUD Dock**:
  - Removed the three bottom HUD pills: "Official Meta Cloud API v20.0", "Sub-2s Average Execution", and "Direct Bank & Tally Sync".
  - Hero now directs 100% of visitor attention to the core headline, value proposition, and conversion CTAs.
#### Grid Width Expansion
- **Background Texture Grid Size**:
  - Expanded `--bg-pattern-size` from `28px 28px` to `56px 56px`, doubling the width of background grid cells across all pages for a more spacious, architectural design.
- **Layout Container Expansion**:
  - Expanded `.container` `max-width` from `1180px` to `1280px`, giving all grid sections across the site (`whyGrid`, `sectorsGrid`, `pricingGrid`, etc.) broader layout width.

---

## [v0.10.0] - 2026-09-21
### Clean Modern iPhone Mockup & UI Stabilization
#### Smartphone Chassis Redesign
- **Clean Precision Frame (`.phoneFrame`)**:
  - Removed clumsy protruding side buttons and metallic gradient border that caused visual clutter.
  - Replaced with a sleek space black (`#18181b`) chassis featuring a uniform 9px bezel, 48px outer corner radius, 40px inner screen radius, and subtle multi-layered elevation shadows.
- **Integrated Dynamic Island**:
  - Centered a clean 96x24px pill with camera reflection directly within the status bar between the 9:41 time on the left and 5G cellular/battery indicators on the right.
- **Resolved Header Text Truncation**:
  - Expanded phone width to 365px (from 310px) with responsive flex distribution, allowing business titles ("Glow Studio Salon", "Sharma Traders B2B", "Apex Express Logistics") and "Verified Business Account" subtitles to display crisply without being truncated.
- **Clean WhatsApp UI Continuity**:
  - Maintained doodle wallpaper, SVG speech bubble tails, emerald interactive buttons, bottom input bar, and home indicator.

---

## [v0.9.0] - 2026-09-21
### Authentic WhatsApp Interface Engine Overhaul
#### Authentic WhatsApp Chat Anatomy
- **Authentic WhatsApp Doodle Wallpaper**:
  - Implemented seamless SVG doodle wallpaper pattern rendered over `#efeae2`, featuring coffee mugs, clocks, speech bubbles, cameras, headphones, and notes matching authentic WhatsApp background styling.
- **Official WhatsApp Verified Business Badge**:
  - Rendered official emerald `#008069` checkmark badge next to dynamic business names (Glow Studio Salon, Sharma Traders B2B, Apex Express Logistics).
- **Dynamic Typing State in Header**:
  - Header subtitle transitions dynamically to green `typing...` when the bot is preparing an answer.
- **WhatsApp Speech Bubble Caret Tails**:
  - Implemented authentic SVG curved tails for incoming white bubbles (top-left) and outgoing green bubbles (top-right).
- **End-to-End Encryption Banner & Date Divider**:
  - Added WhatsApp gold encryption notification with lock icon and center "TODAY" pill.
- **WhatsApp Business Interactive Action Buttons**:
  - Added interactive CTA button rows attached directly beneath bot messages with divider lines and touch-response feedback.
- **Authentic Bottom Input Bar**:
  - Added attachment button, pill input with paperclip and camera shortcuts, and circular green voice note microphone (`#00a884`).
- **Physical Smartphone Chassis Polish**:
  - Added volume and power button notches on the outer phone border, iOS status bar with wifi, 5G, and battery indicator, and bottom home bar.

---

## [v0.8.0] - 2026-09-21
### Atmospheric Hero Aura, Interactive Integration Matrix & Simulator Turbo
#### Hero Section Atmosphere & Micro-Telemetry HUD
- **Hero Spotlight Aura (`.heroAura`)**:
  - Implemented an ethereal radial gradient behind the hero headline and value proposition, adding luminous visual depth while preserving crisp typography contrast.
- **Micro-Telemetry HUD Dock (`.heroTelemetryHud`)**:
  - Anchored below primary hero CTAs with a frosted glass backdrop, pulsing emerald live dot, Meta Cloud API v20.0 badge, execution speed benchmark (<2s), and bank-grade encryption guarantee.

#### Interactive Smartphone Simulator Upgrades
- **1x / 2x Turbo Speed Controller**:
  - Added an interactive tactile speed switcher (`1x Normal` vs `2x Turbo`) allowing prospects to accelerate simulated customer conversations.
- **Flow Replay Trigger**:
  - Integrated a dedicated replay button with rotation feedback so visitors can restart any industry workflow instantly.
- **Dynamic Island & Authentic Polish**:
  - Rendered a live Dynamic Island pill with pulsing status dot (`U8 Engine`).
  - Added authentic WhatsApp doodle background pattern with custom dark tint, and verified double checkmarks on outgoing system messages.

#### Integration Hub Dual Viewer & Conduit Telemetry
- **Visual App vs API Payload Switcher**:
  - Right-hand console now features interactive tabs (`Visual` vs `Payload`).
  - In `Visual` mode, prospects view live ERP/CRM metrics, ledger cards, and operational status chips.
  - In `Payload` mode, prospects can inspect structured webhook payloads and database queries with a 1-click clipboard copy button.
- **Conduit Packet Particle**:
  - Added a luminous traveling packet particle along the central energy beam track connecting WhatsApp to the target backend database.

#### Dynamic ROI WhatsApp Pre-fill Link
- **Personalized Action URL**:
  - Updated the ROI calculator CTA to dynamically generate a WhatsApp message containing the exact calculated volume, average ticket value, and monthly efficiency dividends.

---

## [v0.7.0] - 2026-09-21
### Warm Editorial Luxury Transformation Engine, Paper Dot-Grid & Polish
#### Visual Engineering
- **Engineering Paper Dot-Grid Texture**:
  - Implemented `--bg-pattern-grid` and `--bg-pattern-size` (28px x 28px) combining subtle radial intersection dots with ultra-light millimeter lines across all beige background sections.
  - Deep dark sections (`.theme-forest`, `.theme-dark`) retain solid backgrounds without pattern bleed.
- **Button Shimmer Animation**:
  - Added `@keyframes btnShimmerSweep` with diagonal highlight sweep on primary action buttons.
- **Hero Floating Telemetry Badges**:
  - Added ambient glass telemetry badges for Meta Cloud API ping and Tally Prime sync status with smooth float animations.

#### Interactive Components & Branding
- **Official Brand Logo Integration**:
  - Processed `U8logo_notext.png` as official emblem and `u8logo_withtext.png` as studio wordmark in `public/images/` and `src/app/icon.png`.
  - Embedded emblem into the main desktop navbar and mobile drawer alongside editorial typography with micro-zoom hover states.
  - Added emblem to the dark charcoal footer for high-contrast brand recognition.
  - Replaced simulator avatar with the verified emblem profile badge in `WhatsAppSimulator.tsx`.
  - Embedded emblem into the central gateway parser node in `FlowTransformer.tsx`.
  - Added emblem to the simulated OS header in `TabbedMockup.tsx`.
  - Featured `u8logo_withtext.png` on the `/about` page hero inside a glassmorphic studio badge.
  - Embedded emblem into the `/contact` Direct WhatsApp Concierge header.
- **Live Transformation Engine (`FlowTransformer.tsx`)**:
  - Live side-by-side transformation widget mirroring Warm Editorial Luxury: unstructured WhatsApp customer voice/chat on the left, animated data conduit beam in the middle, and structured Tally Prime / CRM execution card on the right.
  - Modular SSOT dataset in `src/data/transformationFlows.ts` supporting B2B Tally Supply, Salon & Clinic Booking, and Real Estate Site Visits.
- **WhatsApp to Any Software & Custom Dashboard Integration Hub (`IntegrationMatrix.tsx`)**:
  - Built interactive dual-pane architecture showcase proving that Uncomplic8 connects WhatsApp to custom internal dashboards, Tally Prime, PostgreSQL, Supabase, Google Sheets, and Razorpay.
  - Dual-pane layout: WhatsApp event trigger on left, animated bidirectional sync conduit with U8 emblem in center, and real-time destination software / custom dashboard console on right.
  - Modular SSOT data layer in `src/data/integrations.ts` across 5 operational stacks.
  - Embedded on Homepage and Solutions overview.

#### Standards & Strict Compliance
- **Zero Emojis Hard Rule**: All emojis replaced with pure SVG icons across the entire site.
- **Zero Em Dashes Rule**: All em dashes and en dashes eliminated in favor of clean prepositions and colons.
- **Eyebrow Pills Removed**: Cleaned all eyebrow labels across headers for an editorial typography-led aesthetic.

---

## [v0.6.0] - 2026-09-21
### Modular Extensible Data Layer & Layout Polish
#### Architecture & Extensibility
- **Centralized Data Layer (`src/data/`)**:
  - Implemented a Single Source of Truth (SSOT) architecture so that adding, updating, or deleting content requires zero refactoring of JSX, layouts, or CSS.
  - `src/data/siteConfig.ts`: Brand configuration, portfolio URL, WhatsApp direct URLs, and navigation settings.
  - `src/data/sectors.ts`: Full data definitions for all 12 industry sectors (Salons, Dental Clinics, Tally Suppliers, Meta Lead Funnels, E-commerce, Hospitals, Logistics, Real Estate, Auto Showrooms, Travel & Hotels, Restaurants, Customer Support) including `whatWeBuild`, `automationFlow`, and `painPoints`.
  - `src/data/pricing.ts`: Dynamic plans (Starter, Growth, Enterprise), setup fees, features, and official Meta pass-through cost table.
  - `src/data/simulatorFlows.ts`: Multi-industry conversational scenarios for the WhatsApp smartphone simulator.
  - `src/data/stats.ts`: Animated counter metrics, why-us items, and marquee tape strings.
- **Dynamic Icon Resolver (`src/components/SectorIcon.tsx`)**:
  - Created an abstraction mapping string icon names to Lucide icons with fallback, enabling users to add new sectors without writing Lucide import statements in multiple files.
- **Dynamic Routing Expansion**:
  - Connected `/solutions/[sector]` to read directly from `getSectorBySlug()`, dynamically supporting all 12 sectors with zero 404s.
  - Connected `/solutions` index and `/` homepage sector grids to read from `getAllSectors()`.
  - Connected `Navbar` dropdown to automatically display sectors flagged with `featuredInNav: true`.

#### Layout & Interaction Bug Fixes
- **Navbar Centering Fix**:
  - Resolved Framer Motion inline `transform: translateY(0px)` conflict overriding CSS `transform: translateX(-50%)` by switching `.header` to CSS-native `left: 0; right: 0; margin: 0 auto;`.
  - Fixed `.dropdownMenu` centering using `x: "-50%"` in Framer Motion variants.
- **WhatsApp Simulator Scroll-Trigger**:
  - Added `useInView` from `framer-motion` to delay chat execution until the simulator enters the user's viewport, with an instant replay trigger on flow buttons.

---

## [v0.5.0] - 2026-09-18
### Documentation & Comprehensive Knowledge Handoff
#### Added
- **`context.md`**:
  - Authored a master 8-section technical and business reference document designed specifically so that any teammate downloading the repository can instruct their AI agent to ingest `context.md` and immediately have complete context on:
    - Company mission, brand rationale, and core problem statement.
    - The Three Operational Pillars (WhatsApp Systems, Custom Web Dev, Targeted SEO).
    - Detailed playbooks for all 12 target industry sectors (Salons, Clinics, Tally Suppliers, Meta CTWA Lead Funnels, E-commerce, Hospitals, Logistics, Real Estate, Auto DMS, Hospitality, Restaurants, Customer Support).
    - Transparent 3-component pricing model (Setup Fee + Monthly Platform Fee + 0% markup pass-through Meta rates).
    - In-depth competitor matrix (Wati vs. DoubleTick vs. AiSensy vs. Uncomplic8).
    - Warm Editorial Luxury design tokens, color variables, and typography rules.
    - Full project file map and directory breakdown.
    - Strict developer & agent rules to preserve aesthetic and architectural integrity.
- **`changelog.md`**:
  - Authored this comprehensive chronological evolution document tracking every sprint, feature, refactoring, and aesthetic shift.
- **Design Token Polish**:
  - Resolved lingering `--font-bricolage` references in `StatsSection.tsx` and `SocialProofMarquee.module.css` to properly utilize the `--font-playfair` and `--font-hanken` typography tokens.
  - Defined explicit `--primary` fallbacks in `globals.css` (`var(--bg-forest)` for light/beige ground, `var(--accent-emerald)` for charcoal, and `var(--primary-lilac)` for forest green) to ensure full backward compatibility across existing components.
- **Repository Hygiene**:
  - Hardened `.gitignore` with Next.js Turbopack cache (`.turbo`), Windows artifacts (`Thumbs.db`, `desktop.ini`), distribution directories (`dist/`), editor configurations, and explicit `.env.example` exception.
#### Validated
- Ran production build via Turbopack (`npm run build`). Confirmed all TypeScript types, React 19 server/client boundaries, and Next.js 16 dynamic routing generate cleanly with zero errors across all static (`/`, `/pricing`, `/solutions`) and dynamic (`/solutions/[sector]`) routes.

---

## [v0.4.0] - 2026-09-02
### The "Warm Editorial Luxury" Visual Identity & Aesthetic Pivot
#### Motivation & Audit
- The initial design leaned towards a standard dark SaaS aesthetic with high contrast. The founder requested a complete aesthetic pivot toward the luxury, warm, and highly crafted design language of [Warm Editorial Luxury (tharoflow.ai)](https://tharoflow.ai).
- Conducted an automated visual and DOM audit of Warm Editorial Luxury using headless browser inspection. Key design patterns extracted:
  1. *Palette:* Not harsh stark black or cold gray. Heavy use of warm creamy beige (`#F7F6EC`) as the canvas, dropping into deep forest green (`#0D3B2E`) and velvety charcoal (`#161616`) for authoritative contrast. Soft lilac pill buttons (`#E2D8FF`) for primary calls to action.
  2. *Typography:* High-fashion editorial serif headlines featuring mixed Roman and graceful italicized words, paired with clean geometric sans-serif for UI/body text.
  3. *Geometry:* Floating pill navigation bar, soft organic card radiuses, and massive rounded container top edges (`border-radius: 32px`) overlapping adjacent sections with negative margin (`margin-top: -32px`).

#### Changed & Refactored
- **`src/app/globals.css`**:
  - Completely rewrote CSS custom properties with the Warm Editorial Luxury palette:
    - `--bg-beige`: `#F7F6EC` (master background)
    - `--bg-beige-darker`: `#E6E4D5` (subtle containers)
    - `--bg-charcoal`: `#161616` (dark mode container)
    - `--bg-forest`: `#0D3B2E` (signature forest green container)
    - `--primary-lilac`: `#E2D8FF` / hover `#D3C3FB` (pill CTA buttons)
    - `--accent-amber`: `#EE9B39` / `--accent-emerald`: `#20B87C`
  - Added utility classes:
    - `.rounded-top`: Border-radius 32px on top corners with -32px negative margin for seamless overlapping card-deck transitions.
    - `.theme-dark` and `.theme-forest`: Scoped theme contexts that swap background, foreground, border, and surface variables seamlessly without CSS duplication.
    - `.italic-serif`: Graceful italic styling specifically for Playfair Display accent words.
    - `.btn-primary` & `.btn-secondary`: Refactored to pill-shaped (`border-radius: 9999px`) styling with refined hover lift (`transform: translateY(-2px)`).
- **`src/app/layout.tsx`**:
  - Replaced temporary display fonts with Google Fonts `Playfair_Display` (weights 400-900, normal & italic) mapped to CSS variable `--font-playfair`.
  - Configured `Hanken_Grotesk` (weights 400-700) mapped to `--font-hanken` for high-readability body text.
  - Removed restrictive inline layout padding so full-width section transitions bleed to viewport edges naturally.
- **`src/components/Navbar.tsx` & `Navbar.module.css`**:
  - Redesigned into a floating, centered pill container (`max-width: 900px`, `border-radius: 9999px`) suspended 1.5rem from top.
  - Implemented glassmorphism via `backdrop-filter: blur(20px)` and semi-transparent beige ground (`rgba(247, 246, 236, 0.75)`).
  - Added interactive desktop dropdown for quick access to key sector solution playbooks (Salons, Tally, Logistics, View All).
  - Preserved sticky scroll behavior with subtle border opacity and elevation transitions on scroll.
- **`src/app/page.tsx` & `page.module.css`**:
  - Rewrote the entire homepage content structure to alternate between warm and dark zones:
    - *Hero (Light Beige):* Editorial headline (*"The WhatsApp Operating System for modern business"*) with lilac pill CTA and secondary ghost link to the web dev portfolio.
    - *Live WhatsApp Simulator (Beige):* Interactive demo placed directly below hero.
    - *Stats Section:* Highlighting 98% open rate and 0% hidden markup.
    - *Why Uncomplic8 (Deep Forest Green Section):* Layered with `.rounded-top` and glassmorphic cards highlighting key differentiators.
    - *All Sectors (Matte Charcoal Section):* Layered with `.rounded-top` containing an interactive 11-sector grid with animated hover states.
    - *Closing CTA (Cream Beige):* Final conversion block driving toward demo booking.
- **`src/app/solutions/[sector]/page.tsx` & `page.module.css`**:
  - Updated dynamic sector playbook pages to mirror the new editorial aesthetic:
    - Warm beige hero with italic serif titles.
    - Rounded overlap transition into deep forest green container showcasing "What We Build" and detailed "Automation Flow" checklists.
    - Clear return navigation breadcrumbs and instant WhatsApp booking CTA.

---

## [v0.3.0] - 2026-08-28
### Typographic Exploration & Competitive Font Audit
#### Research
- Conducted an in-depth visual typography audit comparing three key market references:
  1. *Wati.io:* Bold, rounded geometric sans with playful highlighter accents. Approachable but feels generic and template-like.
  2. *DoubleTick.io:* Editorial serif paired with monospace code accents. Conveys high technical capability and enterprise security.
  3. *Warm Editorial Luxury:* Luxurious, high-fashion italic display serif against moody dark and creamy backgrounds. Creates an unmistakable "creative tool / premium software" impression.
- Shortlisted four typographic combinations:
  - *Option 1:* Bricolage Grotesque + Hanken Grotesk (Modern, punchy, neo-grotesque).
  - *Option 2:* Playfair Display + Inter / Hanken Grotesk (Classic editorial elegance).
  - *Option 3:* Instrument Serif + Geist (Technical editorial).
  - *Option 4:* Fraunces + Plus Jakarta Sans (Warm organic character).
- Outcome: Deployed Bricolage Grotesque in v0.3.0 before fully graduating to the refined Playfair Display + Hanken Grotesk system in v0.4.0 following the Warm Editorial Luxury pivot.

---

## [v0.2.0] - 2026-08-20
### Core Interactivity & Component Architecture
#### Added
- **`src/components/WhatsAppSimulator.tsx` & `WhatsAppSimulator.module.css`**:
  - Engineered a custom interactive smartphone chat simulator.
  - Implemented real-time multi-turn message pacing with simulated typing indicators (`...`) before bot replies.
  - Created 3 realistic pre-built sector scenarios:
    1. *Salon Booking:* Slot selection, stylist picking, automated confirmation with map links.
    2. *Tally Invoicing:* Instant PDF invoice delivery, due date inquiry, automated extension request to accounts team.
    3. *Logistics Order Tracking:* Out-for-delivery rider alert, address change handling, automatic hub-hold diversion with OTP.
  - Added tab switcher allowing prospective clients to preview different industry flows with zero signup required.
- **`src/components/TabbedMockup.tsx` & `TabbedMockup.module.css`**:
  - Built an interactive 4-tab product capability explorer (Manage, Reach, Automate, Analyse).
  - Used Framer Motion `layoutId="activeTabIndicator"` for smooth spring transitions on tab change.
- **`src/components/SocialProofMarquee.tsx` & `SocialProofMarquee.module.css`**:
  - Infinite CSS keyframe scrolling marquee showing social proof metrics (*"Trusted by 12+ Salons"*, *"Powered by Meta"*, *"Tally Gold Partner Integration"*, *"Used by 50+ Logistics Providers"*).
- **`src/components/StatsSection.tsx`**:
  - Animated counting numbers powered by `framer-motion`'s `useInView` hook, animating from 0 to target metrics upon scroll entry.
- **`src/app/solutions/` & `src/app/solutions/[sector]/`**:
  - Set up dynamic routing for industry sector playbooks.
  - Seeded initial sector dataset for `salons`, `tally`, and `logistics` featuring pain point breakdowns, built capabilities, step-by-step automation flows, and ready-to-use marketing copy blocks.
- **`src/app/pricing/page.tsx` & `page.module.css`**:
  - Created transparent 3-tier pricing matrix: Starter (₹1,999/mo), Growth (₹4,999/mo, highlighted as Most Popular), and Enterprise (Custom).
  - Included a dedicated section explaining Meta's pass-through conversation rates (~₹0.11 utility vs ~₹0.80 marketing) to build immediate trust against opaque competitors.

---

## [v0.1.0] - 2026-08-15
### Project Inception & Master Strategy Blueprint
#### Added
- **`uncomplic8.md`**:
  - Comprehensive 630+ line master strategic blueprint authored by the founder and product architect.
  - Detailed the core positioning of Uncomplic8.tech as a WhatsApp-First Business Systems Studio.
  - Formalized the 3 Core Pillars: WhatsApp-first Systems, High-End Web Development, and Local/B2B SEO.
  - Mapped out operational playbooks for 12 core industry sectors.
  - Drafted market analysis outlining Meta Cloud API pricing rules, 72-hour CTWA free windows, and competitive pricing gaps.
  - Established operational checklists for business registration, GST compliance, DPDP Act data privacy, and Meta Business verification.
- **`competitive_analysis.md`**:
  - Authored deep competitive analysis evaluating Wati.io vs. DoubleTick.io across content structuring, UI/UX aesthetics, animation choices, and target audiences.
- **Next.js 16 Base Scaffold**:
  - Initialized Next.js 16 with React 19, TypeScript, and Turbopack.
  - Configured project directory structure with App Router convention.

---

## Roadmap & Upcoming Sprints

### Sprint 6 (Immediate Next Steps)
- [ ] **Complete `/about` Page:** Implement the Uncomplic8 origin story, founder philosophy ("Why we killed the generic SaaS dashboard"), and tech stack transparency.
- [ ] **Complete `/contact` Page:** Build an interactive contact hub with direct WhatsApp click-to-chat integration, calendar booking embed (Cal.com or Calendly), and inquiry pre-qualification.
- [ ] **Expand All 12 Sectors in `[sector]/page.tsx`:** Expand `sectorData` dictionary to cover all 12 verticals from `uncomplic8.md` (currently has Salons, Tally, Logistics; add Dental, Lead Management, E-commerce, Hospitals, Real Estate, Automobile, Hospitality, Restaurants, and Support).
- [ ] **External Portfolio Link Config:** Replace placeholder `https://your-vercel-portfolio-link.com` in `Navbar.tsx`, `Footer.tsx`, and `page.tsx` with the live Vercel portfolio URL when provided by the user.
- [ ] **SEO Meta Tags & OpenGraph Enhancements:** Configure unique JSON-LD structured data and OpenGraph cards for each dynamic sector route.
