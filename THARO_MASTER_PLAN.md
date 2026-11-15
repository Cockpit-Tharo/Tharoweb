# THARO | Master Starter Manual & Company Roadmap

> **Company Name:** Tharo Technologies  
> **Primary Domain:** [tharo.tech](https://tharo.tech)  
> **System Architecture:** WhatsApp-First Vertical ERP Engine, Multi-Tenant Cloud Core, and Domain Adapters  
> **Team Structure:** 3 Co-Founders across 3 Dedicated Workstations  
> **Current Version:** v1.0.0-blueprint  

---

## 1. Executive Summary & Brand Identity

Tharo builds sector-specific business operating systems where WhatsApp is the native customer and employee interface. Instead of selling empty software dashboards or charging inflated per-message markups, Tharo delivers complete, turnkey vertical software (clinics, real estate, salons, supply distributors) paired with an autonomous voice and text system assistant named Pipo AI.

### 1.1 Brand Assets and Status
* **Company Domain:** `tharo.tech` (Domain purchased, DNS ready, team user email accounts active).
* **Logo Design:** Complete.
* **Aesthetic Direction:** Editorial warm luxury inspired by high-craft interfaces:
  * Creamy paper beige: `#F7F6EC` (Token: `--bg-beige`)
  * British racing forest green: `#0D3B2E` (Token: `--bg-forest`)
  * Deep matte charcoal: `#161616` (Token: `--bg-charcoal`)
  * Ethereal lilac interactive accents: `#E2D8FF` (Token: `--primary-lilac`)
* **Typography:**
  * Editorial Headings: `Playfair Display` serif with italic accent highlights.
  * System Interface and Body Text: `Hanken Grotesk` sans-serif.
* **Editorial Rules:**
  * Strict zero-emoji policy across all interfaces, data files, and documentation.
  * Strict zero-em-dash policy: use colons, parentheses, commas, or separate sentences.
  * Plain-language copy targeting business operators without developer jargon or corporate fluff.

---

## 2. Legal, Meta Business & Regulatory Setup (Parallel Track)

This track must run immediately because government documentation and Meta business verification require several days to process.

```
┌─────────────────────────────────┐      ┌─────────────────────────────────┐
│     PARTNERSHIP REGISTRATION    │      │      META BUSINESS MANAGER      │
├─────────────────────────────────┤      ├─────────────────────────────────┤
│ 1. Partnership Deed Draft       │─────▶│ 1. Create Business Portfolio    │
│ 2. PAN Card & GST Registration  │      │ 2. Upload GST / Deed Proof      │
│ 3. Current Bank Account         │      │ 3. Domain Verification on DNS   │
│ 4. Official Address Billing     │      │ 4. Official WhatsApp Cloud App  │
└─────────────────────────────────┘      └─────────────────────────────────┘
                                                           │
                                                           ▼
                                         ┌─────────────────────────────────┐
                                         │   META TECH PROVIDER APPROVAL   │
                                         ├─────────────────────────────────┤
                                         │ • Embedded Signup for Clients   │
                                         │ • 0% Markup Direct Client Card  │
                                         │ • Multi-WABA Account Access     │
                                         └─────────────────────────────────┘
```

### 2.1 Entity Registration
1. **Draft and Execute Partnership Deed:**
   * Clearly define partner equity, profit shares, capital contribution, and banking authority.
   * Notarize and register the deed with the Registrar of Firms.
2. **Obtain Permanent Account Number (PAN) and GSTIN:**
   * Apply for entity PAN.
   * Register for Goods and Services Tax (GST). The legal business name, address, and contact details on the GST certificate must match your domain records exactly.
3. **Open Current Bank Account:**
   * Required for accepting subscription payments and establishing commercial legitimacy.

### 2.2 Meta Business Manager Verification
* **Why Meta Verification Requires Prior Registration:** Meta requires government-issued proof of business legal name, official address, and phone number (GST Certificate, Utility Bill, or Bank Statement). You cannot pass business verification without legal registration documents.
* **Verification Steps:**
  1. Open [business.facebook.com](https://business.facebook.com) using your company admin account.
  2. Navigate to **Security Center** and click **Start Verification**.
  3. Upload the official GST certificate. Ensure the legal entity name and address match letter for letter.
  4. Complete DNS Domain Verification by adding a TXT record for `tharo.tech` in your DNS provider.

### 2.3 Social Presence Setup
Create unified, clean handles across major channels before launch:
* **Instagram:** `@tharo.tech` (Focus: 30-second silent screen demonstrations of automated workflows).
* **Facebook Page:** Linked directly to the Meta Business Manager for WhatsApp Business Account (WABA) verification.
* **LinkedIn Company Page:** Positioned as an enterprise WhatsApp systems studio.

### 2.4 Meta Tech Provider Program (Direct Billing Path)
* **The Model:** Tharo operates as a Meta Tech Provider.
* **Client Billing Mechanics:** Clients complete Embedded Signup and add their own credit card directly inside Meta Business Suite. Meta bills the client directly at official pass-through rates (~₹0.115 per utility message, ~₹0.86 per marketing message).
* **The Commercial Edge:** Tharo charges a flat, transparent monthly SaaS fee. Tharo never marks up message costs, eliminates prepaid credit confusion, and incurs zero financial liability for client messaging volume.

---

## 3. Product Architecture: Multi-Tenant Base WhatsApp Core

The product team will build the central WhatsApp engine (`tharo-core`) as a shared multi-tenant service. Domain products connect into this core using an adapter pattern.

```
                              ┌───────────────────────────┐
                              │  OFFICIAL META CLOUD API  │
                              └─────────────┬─────────────┘
                                            │
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        THARO BASE CORE (Multi-Tenant Engine)                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Webhook Gateway: Signature verification (HMAC-SHA256) & event routing               │
│ 2. Tenant Manager: Isolates credentials, phone numbers, and data per business           │
│ 3. Session Tracker: Tracks 24-hr service window and 72-hr free CTWA ad window          │
│ 4. Message Queue: Redis/BullMQ worker with rate limiting and exponential backoff        │
│ 5. Template Engine: Pre-approved HSM templates with dynamic variable interpolation     │
│ 6. Pipo AI Engine: Voice/Text intent classification and structured JSON execution      │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │
             ┌──────────────────────────────┼──────────────────────────────┐
             ▼                              ▼                              ▼
┌──────────────────────────┐   ┌──────────────────────────┐   ┌──────────────────────────┐
│      CLINIC ADAPTER      │   │      REALTY ADAPTER      │   │      SALON ADAPTER       │
│   (clinic.tharo.tech)    │   │   (realty.tharo.tech)    │   │    (salon.tharo.tech)    │
├──────────────────────────┤   ├──────────────────────────┤   ├──────────────────────────┤
│ • Doctor appointment slot│   │ • Property brochure bot  │   │ • Stylist slot booking   │
│ • Patient health records │   │ • Lead budget screening  │   │ • Commission ledger      │
│ • 6-Month recall alerts  │   │ • Site visit scheduling  │   │ • No-show reduction ping │
│ • Digital prescriptions  │   │ • Broker team assignment │   │ • Review link generator  │
└──────────────────────────┘   └──────────────────────────┘   └──────────────────────────┘
```

### 3.1 Multi-Tenant Database Schema
Every database record belongs to an isolated `tenant_id`:
* `tenants`: Organization name, status, plan tier, billing cycle.
* `whatsapp_accounts`: WABA ID, Phone Number ID, Access Token, Webhook Secret, verified display name.
* `contacts`: Phone number, name, sector tags, lifecycle stage, active session expiry.
* `messages`: Direction (inbound/outbound), message type (text, interactive, template, media), status (sent, delivered, read, failed), raw payload.
* `templates`: Name, category (Utility/Marketing), language, status, variable mappings.

### 3.2 Webhook Ingestion & Outbound Queue
* **Inbound:** Meta delivers webhook events to `https://api.tharo.tech/webhooks/whatsapp`. The server verifies `X-Hub-Signature-256`, responds with HTTP 200 within 2 seconds, and pushes the event to an asynchronous worker queue.
* **Outbound:** Messages pass through an asynchronous queue configured with Meta tier limits (e.g., Tier 1: 1,000 unique recipients per rolling 24 hours) to prevent WABA rate limiting.

---

## 4. Domain-Specific Products (Adapters & Connectors)

Each product is a specialized application deployed on its own subdomain, talking to `tharo-core`:

### 4.1 Product 1: Tharo Clinic (`clinic.tharo.tech`)
* **Primary Audience:** Dental clinics, polyclinics, aesthetic dermatology practices.
* **Core Capabilities:**
  * Two-way interactive WhatsApp appointment booking with real-time doctor calendar sync.
  * Automated 24-hour and 2-hour reminder sequences with interactive `Confirm` and `Reschedule` action pills, reducing no-shows from 30% to below 4%.
  * 6-Month routine dental checkup recall engine.
  * Instant post-consultation PDF prescription and invoice dispatch.
  * Overdue balance reminders with direct UPI payment links.

### 4.2 Product 2: Tharo Realty (`realty.tharo.tech`)
* **Primary Audience:** Real estate developers, channel partners, and boutique brokerages.
* **Core Capabilities:**
  * Click-to-WhatsApp Meta ad receiver capitalizing on the 72-hour free messaging window.
  * Automated 3-question qualification bot: Budget, Preferred Location, Timeline.
  * Interactive digital brochure and floor-plan distribution with download telemetry.
  * Site visit booking calendar with Google Maps directions.
  * Lead routing: Qualified high-intent buyers routed directly to broker phones with full dossiers.

### 4.3 Product 3: Tharo Salon (`salon.tharo.tech`)
* **Primary Audience:** Independent salons, spas, grooming lounges.
* **Core Capabilities:**
  * Stylist slot selection and booking confirmation.
  * Real-time automated staff commission calculations per service.
  * Post-service Google review request engine with click tracking.
  * Automated lapsed customer re-engagement (30-day and 60-day promotional win-backs).

### 4.4 Product 4: Tharo ERP Bridge (`bridge.tharo.tech`)
* **Primary Audience:** Wholesalers, distributors, and enterprises running modern ERP systems.
* **Core Capabilities:**
  * Plugs into enterprise ERP and CRM systems via secure cloud webhooks.
  * Automatically dispatches digital order confirmations, PDF invoices, and e-Way passes to customer WhatsApp accounts upon creation.
  * Scheduled payment reminders at 7, 15, and 30 days past due with direct payment links.

---

## 5. Proprietary Flagship: Pipo AI (The Silent Voice Copilot)

**Pipo AI** is Tharo Tech's proprietary, embedded in-app voice-to-action copilot.

It eliminates manual form typing and multi-dropdown data entry. Instead of navigating menus, clicking date-pickers, and typing notes after every customer interaction, staff members simply tap a floating microphone icon (or press Alt + V), speak naturally in English, Hindi, or Hinglish, and Pipo AI parses the domain intent in under 200 milliseconds, populates database schemas, holds calendar slots, and stages WhatsApp notifications.

```
┌──────────────────────────────────────┐
│           OPERATOR INPUT             │
│ • Floating In-App Mic or Alt + V     │
│ • Natural Spoken Voice (Hindi/Eng)   │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│        AUDIO & INTENT PIPELINE       │
│ 1. Groq Cloud Whisper (LPU < 150ms)  │
│ 2. OpenAI GPT-4o-mini (JSON Schema)  │
│ 3. Atomic Database & Calendar Lock   │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│       SILENT VISUAL MUTATION         │
│ • Screen updates with emerald glow   │
│ • 5-Second [Undo] token toast        │
│ • Patient WhatsApp confirmation      │
└──────────────────────────────────────┘
```

### 5.1 The Core Problem Pipo AI Solves: The "Typing CRM" Trap
* **The Industry Failure:** Conventional CRMs (Salesforce, HubSpot, TeleCRM, Sell.Do, WATI) fail because they are "Typing CRMs". A receptionist, doctor, sales agent, or stylist has to fill out 10 to 12 input fields, select dropdowns, and write summary notes after every customer interaction.
* **The Consequence:** In fast-paced offices, staff abandon manual typing within 30 days. Leads go un-updated, follow-ups fall through the cracks, and CRM data turns stale.
* **The Pipo AI Solution:** Zero-Typing Workflow. A 6-second spoken phrase replaces 2 minutes of clicking, menu navigation, and manual typing.

### 5.2 The 3 Non-Negotiable Architectural Rules
1. **Strictly SILENT (Zero Audio Out / No TTS):**
   * *Why:* The staff member is already sitting in front of their screen. Generating spoken audio replies (via ElevenLabs or TTS) adds 1.5s to 2.0s of latency, disturbs quiet workplaces (doctor clinics, quiet sales floors), and inflates software costs.
   * *How Pipo Responds:* Pipo replies purely through instant visual UI mutations: a non-blocking toast notification, an emerald green highlight on the updated record, and an instant 5-second `[Undo]` button.
2. **Strictly In-App (Pipo NEVER Dials or Calls Anyone):**
   * Pipo is an internal productivity copilot for your team, not an external robotic telemarketer.
   * External customer calling is decoupled and handled by the independent Telephony & Outbound Gateway (Twilio/Exotel), keeping Pipo focused purely on CRM speed.
3. **Sub-200ms Latency & 98% Gross Margins:**
   * *Speech-to-Text (STT):* Powered by Groq Cloud Whisper (`whisper-large-v3`) running on LPUs (Language Processing Units) to achieve sub-200ms transcription even with heavy regional Indian accents.
   * *Structured Reasoning:* OpenAI `gpt-4o-mini` with strict JSON schema mode.
   * *Unit Economics:* Costs only ~₹0.054 (5.4 paise) per command, yielding 98% software gross margins.

### 5.3 Capabilities: Small vs. Big Autonomous Tasks
* **Small Tasks (Single Schema Mutation):**
  * *Example Command:* "Add lead Rohit Sharma, 9876543210, looking for 3BHK in Whitefield under 1.5 Cr."
  * *Execution:* Normalizes phone number to +919876543210, resolves budget to 15,000,000, ingests into CRM collection, and spawns visual confirmation toast (~5.4 paise).
* **Scheduling Tasks (Atomic Slot Engine):**
  * *Example Command:* "Book hair spa for Priya with stylist Rahul tomorrow at 5 PM."
  * *Execution:* Resolves relative date/time (IST), locks calendar slot atomically, and triggers automated WhatsApp confirmation (~5.4 paise).
* **Autonomous Big Tasks (Multi-Step Agent Loop):**
  * *Example Command:* "Scan all uncontacted leads from yesterday's campaign and stage the discount template broadcast."
  * *Execution:* Queries database for uncontacted leads, selects approved Meta template, flags `requiresConfirmation: true`, and spawns an approval modal for staff confirmation (~18 to 35 paise).

### 5.4 Built-in Safety & UI Safeguards
1. **The 5-Second Undo Token (`[Undo]`):**
   * If Pipo mishears a name or phone number, every action returns a cryptographically signed `undoToken`.
   * A floating visual toast appears: `✓ Added Rohit Sharma (3BHK, Whitefield) • [Undo]`. Clicking Undo rolls back the database mutation immediately.
2. **Context-Aware Visual Glow:**
   * When Pipo updates a record, the affected row, patient card, or calendar slot flashes with an emerald outline (`ring-2 ring-emerald-400`), giving instant visual confirmation without page refreshes.
3. **Multi-Dialect & Hinglish Parsing:**
   * Understands natural mixed language: *"Dr. Sneha ke saath kal subah 11 baje ka root canal slot book kar do."* Pipo extracts the doctor, treatment, date, and time seamlessly.

### 5.5 Dual-Sided Operating Role: Internal Copilot & WhatsApp Agent
Pipo AI serves two vital sides of the business:
1. **Internal Voice Copilot & Business History Intelligence:** Staff tap `Alt + V` or speak via web microphone. Staff can query business history (*"What were our top 3 services this week?", "Has Sharma Traders cleared their invoice?"*) and execute voice-to-action commands with zero manual clicking or form typing.
2. **Autonomous Customer WhatsApp Agent:** On customer-facing WhatsApp channels, Pipo AI acts as a trained team agent: holding slots, answering inquiries, qualifying buyer budgets, and generating dynamic UPI QR codes 24/7.

---

## 6. Flagship Marketing Website (`tharo-web` on `tharo.tech`)

The current Next.js 16 codebase in this workspace will be rebranded and deployed as the public face of Tharo.

### 6.1 Rebranding Roadmap
1. Update [src/data/siteConfig.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/siteConfig.ts):
   * Company name: `Tharo`
   * Legal name: `Tharo Technologies`
   * Primary URL: `https://tharo.tech`
   * Contact email: `connect@tharo.tech`
2. Update [src/app/layout.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/app/layout.tsx):
   * Meta titles, OpenGraph tags, and structured business data.
3. Update [src/components/Navbar.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/Navbar.tsx) and [src/components/Footer.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/Footer.tsx):
   * Display `THARO` watermark and brand typography.
   * Direct CTAs toward subdomains (`https://clinic.tharo.tech/login`, `https://realty.tharo.tech/login`).
4. Update [src/data/sectors.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/sectors.ts) and [src/data/pricing.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/pricing.ts):
   * Highlight Pipo AI capabilities and transparent 0% markup Meta pricing.

---

## 7. Marketing Collateral & Customer Onboarding

High-touch SMB software requires proof and simple onboarding materials:

### 7.1 Video and Visual Production
* **60-Second No-Nonsense Product Videos:**
  * Screen capture showing a real booking from customer WhatsApp message to clinic calendar update in 5 seconds.
  * No corporate buzzwords or stock footage; purely software in action.
* **Interactive Website Simulator:**
  * The existing [WhatsAppSimulator.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/WhatsAppSimulator.tsx) provides an interactive phone on the homepage demonstrating real conversational flows.

### 7.2 Customer Onboarding Tutorial Series
* **Video 1: Adding Your Card to Meta (2 Minutes):**
  * Step-by-step walkthrough showing a new business owner how to open Meta Business Suite and add their billing method, ensuring their WhatsApp messages never stop sending.
* **Video 2: Using Pipo AI from WhatsApp (90 Seconds):**
  * Demonstrating how front-desk staff can send voice notes to manage bookings and invoices.
* **Video 3: Managing the Unified Team Inbox (2 Minutes):**
  * Showing staff how multiple team members can reply from a single official WhatsApp number.

---

## 8. Team Responsibilities & GitHub Governance

The 3-person team operates across separate machines and isolated repositories under one GitHub Organization.

```
                      ┌───────────────────────────────────────┐
                      │    GITHUB ORG: github.com/tharo-tech   │
                      └──────────────────┬────────────────────┘
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
  ┌─────────────────────────────┐                 ┌─────────────────────────────┐
  │     REPO 1: tharo-web       │                 │     REPO 2: tharo-core      │
  │     (Marketing Website)     │                 │   (WhatsApp Engine & Apps)  │
  ├─────────────────────────────┤                 ├─────────────────────────────┤
  │ Lead: Himank                │                 │ Member 2: Backend & Webhooks│
  │ Domain: tharo.tech          │                 │ Member 3: UI & Adapters     │
  │ Next.js 16 + CSS Modules    │                 │ Node / Supabase / Next Apps │
  └─────────────────────────────┘                 └─────────────────────────────┘
```

### 8.1 Work Split
* **Member 1 (Himank / Lead):**
  * Marketing platform engineering (`tharo-web`), editorial copy, and SEO.
  * Partnership deed execution, GST filing, and Meta Business Manager verification.
  * Inbound lead generation and enterprise sales demonstrations.
* **Member 2 (Backend & Infrastructure Engineer):**
  * Multi-tenant WhatsApp webhook ingestion engine and queue processing.
  * Database design (Supabase / PostgreSQL) and Meta Cloud API integration.
  * Pipo AI voice transcription and schema parsing backend.
* **Member 3 (Frontend & Product Engineer):**
  * Dashboard interfaces for `clinic.tharo.tech` and `realty.tharo.tech`.
  * Calendar components, patient record views, and staff commission ledgers.
  * WhatsApp template management and onboarding workflows.

### 8.2 GitHub Workflow Rules
* **No Direct Pushes to `main` or `develop`:** All product code must be developed on `feature/<feature-name>` branches.
* **Mandatory Pull Request Reviews:** Teammates review each other's code before merging to `develop`.
* **Zero Secrets in Git:** All API keys, database URLs, and Meta tokens remain strictly inside `.env.local` or Vercel Environment Variables.

---

## 9. Six-Week Execution Timeline

| Timeline | Business & Legal Milestones | Engineering & Product Milestones |
| :--- | :--- | :--- |
| **Week 1** | Finalize partnership deed; file for entity PAN and GSTIN; set up `@tharo.tech` email accounts. | Complete rebrand of `tharo-web`; initialize `tharo-core` repo; configure base Meta webhook receiver. |
| **Week 2** | Submit Meta Business Manager verification with GST certificate; verify `tharo.tech` DNS. | Build multi-tenant database tables; establish outbound message queue with rate-limit guards. |
| **Week 3** | Record 60-second product workflow videos; set up Instagram and LinkedIn pages. | Build Pipo AI voice parsing engine; complete Clinic Adapter calendar and automated reminder flows. |
| **Week 4** | Deploy `tharo.tech` live on Vercel; connect DNS records for `clinic.tharo.tech`. | Migrate existing dental clinic client to the new Tharo Clinic engine; test live reminder cron jobs. |
| **Week 5** | Collect video testimonial and case study metrics from the dental clinic; begin local clinic outreach. | Build Realty Adapter (Click-to-WhatsApp ad qualifier, brochure bot, visit scheduler). |
| **Week 6** | Launch commercial outreach across tier-2 and tier-3 dental clinics; initiate Meta Tech Provider Embedded Signup review. | Ship Pipo AI WhatsApp voice note receptionist interface for all clinic staff. |

---

*This document serves as the master operating reference for Tharo Technologies. All team members must adhere to the architectural patterns, brand aesthetics, and governance rules outlined herein.*
