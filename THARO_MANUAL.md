# THARO | Master Starter Manual & System Blueprint

> **Company:** Tharo Technologies LLP  
> **Domain:** [tharo.tech](https://tharo.tech)  
> **Document Type:** Operational and Technical Starter Manual  
> **Team:** 3 Co-Founders across 3 Dedicated Workstations  
> **Current Version:** v1.0.0  
> **Last Updated:** October 2026  

---

## 1. Brand Identity & Visual Foundation

Tharo builds sector-specific business operating systems where WhatsApp serves as the native customer and employee interface. Instead of selling empty software dashboards or charging marked-up messaging fees, Tharo provides complete, done-for-you vertical software paired with an autonomous voice and text system assistant named Pipo AI.

### 1.1 Brand Assets Status

| Asset | Status |
| :--- | :--- |
| Domain `tharo.tech` | Purchased, DNS configured |
| Google Workspace Team Email | Active |
| Logo Design | Complete |
| Brand Color Palette | **To Be Decided (TBD)** |
| Typography | Confirmed (Playfair Display + Hanken Grotesk) |

### 1.2 Color Palette Options (Team Decision Required)
Choose one palette and apply it across all CSS tokens before any development begins:

| Token | Option 1: Warm Editorial Luxury Editorial | Option 2: Obsidian Stealth | Option 3: Swiss Minimal |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#F7F6EC` Creamy Paper Beige | `#0F1012` Deep Onyx | `#FAFAFA` Crisp Chalk |
| `--bg-secondary` | `#0D3B2E` Racing Forest Green | `#22252A` Slate Card | `#0B0F19` Indigo Black |
| `--bg-surface` | `#161616` Matte Charcoal | `#F5F5F0` Soft Alabaster | `#E4E4E7` Soft Zinc |
| `--accent-primary` | `#E2D8FF` Ethereal Lilac | `#F59E0B` Electric Amber | `#2563EB` Vivid Cobalt |

### 1.3 Typography System
* **Editorial Headings and Display Text:** `Playfair Display` serif (Google Fonts, weights 400 to 900). Key styling: pair Roman weight with `.italic-serif` class for graceful accent words.
* **System Dashboards, Interfaces, and Body Text:** `Hanken Grotesk` sans-serif (Google Fonts, weights 400, 500, 600, 700). High x-height for crisp readability on high-DPI screens.

### 1.4 Mandatory Editorial Rules
These rules apply to every file, every component, and every marketing asset:
* **Zero-Emoji Policy:** No emojis in any user interface, database record, documentation file, or marketing copy. Use Lucide SVG icons instead.
* **Zero-Em-Dash Policy:** Never use em-dashes or spaced en-dashes. Use colons, parentheses, commas, or separate sentences.
* **Plain-Language Copy:** Target all copy toward business operators (salon owners, clinic receptionists, logistics managers). Eliminate developer acronyms and corporate buzzwords. State concrete outcomes: automatic invoice delivery, zero no-shows, and faster payment collection.
* **Single Source of Truth (SSOT):** All copy, numbers, card data, and lists must live exclusively in `src/data/`. Components are purely presentation layers that consume data.

---

## 2. Legal, Regulatory & Meta Business Setup

This track runs in parallel with technical development. Government processing and Meta verification each take several days and cannot be rushed.

### 2.1 Partnership Firm Registration
1. **Partnership Deed:**
   * Draft specifying: partner names and addresses, profit and loss sharing ratio, capital contribution per partner, banking authority, dispute resolution, and dissolution terms.
   * Execute on non-judicial stamp paper of appropriate denomination (₹500 or higher depending on state).
   * Notarize and file with the local Registrar of Firms (optional but recommended for legal standing).
2. **PAN and GSTIN Registration:**
   * Apply for the entity Permanent Account Number (PAN) via the NSDL/UTIITSL portal.
   * Register for Goods and Services Tax (GST) once PAN is active (typically 3 to 7 business days).
   * **Critical Rule:** The exact legal entity name, official registered address, and phone number on the GST certificate must match the information entered in Meta Business Manager character for character. A mismatch is the most common reason Meta Business Verification fails.
3. **Current Bank Account:**
   * Open the official business current account using the registered partnership deed, PAN card, and GST certificate.
   * This account will receive client SaaS subscription payments.
4. **Business Email:** Configure official Google Workspace accounts (`connect@tharo.tech`, `himank@tharo.tech`, etc.) before any external communication or Meta verification.

### 2.2 Meta Business Manager Verification
* **Prerequisite:** Meta Business Verification cannot be completed without official government registration documents. Attempting verification before GST registration will result in rejection.
* **Step-by-Step Procedure:**
  1. Open [business.facebook.com](https://business.facebook.com) using the designated company admin account (never a personal account).
  2. Go to **Business Settings** -> **Security Center** -> click **Start Verification**.
  3. Enter the exact legal business name and registered address matching the GST certificate.
  4. Upload the official GST certificate PDF (or utility bill issued within 3 months).
  5. Add a DNS TXT record for `tharo.tech` in your domain registrar to complete domain ownership verification.
  6. Enter the one-time verification code sent to the official company email (`connect@tharo.tech`).
  7. Wait 1 to 5 business days for Meta's review team to confirm.

### 2.3 Meta Tech Provider Model (0% Markup Direct Client Billing)
* **What Tharo Is:** A Meta Tech Provider, not a Business Solution Provider (BSP) reseller.
* **Why the Distinction Matters:** BSPs buy messaging capacity wholesale from Meta and resell it to clients at a 10 to 30% markup. Tharo never touches client messaging funds.
* **Client Onboarding via Embedded Signup:**
  1. Client opens the Tharo onboarding page and clicks **Connect Your WhatsApp**.
  2. Meta Embedded Signup opens inside the Tharo dashboard. The client logs in with their own Facebook account.
  3. The client creates or links their WhatsApp Business Account (WABA) and phone number.
  4. The client adds their credit card directly inside Meta Business Suite.
  5. Meta bills the client directly at published pass-through rates (~₹0.115 per utility message, ~₹0.86 per marketing message).
  6. Tharo charges a separate flat monthly SaaS fee for software, automations, and support.
* **Pricing Weapon:** Tharo can publicly state "you pay Meta's exact published rate, zero markup." BSP-based competitors structurally cannot match this claim.

### 2.4 India DPDP Act 2023 Compliance
Tharo processes personal data (patient names, phone numbers, appointment records) across multiple business clients. Obligations include:
* Publish a clear privacy policy on `tharo.tech/privacy` before collecting any data.
* Obtain explicit consent from end customers before storing personal data.
* Provide data portability (clients can export their contact and conversation data on request).
* Implement data deletion workflows so clients can remove individual customer records.
* Appoint a designated Data Protection Officer (DPO) contact.

### 2.5 Social Footprint Setup
Establish unified handles before public launch:

| Platform | Handle | Content Focus |
| :--- | :--- | :--- |
| Instagram | `@tharo.tech` | Silent 30-second screen recordings of live WhatsApp automations |
| Facebook Page | `Tharo Technologies` | Linked to Meta Business Manager for WABA ownership |
| LinkedIn | `Tharo Technologies` | Engineering-first positioning, hiring, and B2B case studies |

---

## 3. Infrastructure & Hosting Architecture

### 3.1 Environment Tiers
All services run across three isolated environments:

| Environment | Purpose | URL Pattern |
| :--- | :--- | :--- |
| **Production** | Live client traffic | `tharo.tech`, `clinic.tharo.tech` |
| **Staging** | Pre-release testing | `staging.tharo.tech` |
| **Development** | Local machines | `localhost:3000` |

### 3.2 Hosting Stack

| Service | Provider | Purpose |
| :--- | :--- | :--- |
| Frontend Hosting | Vercel | `tharo-web`, `clinic.tharo.tech`, `realty.tharo.tech` |
| Backend API | Vercel Edge Functions or Railway | `api.tharo.tech` webhook gateway and REST endpoints |
| Database | Supabase (PostgreSQL) | Multi-tenant persistent data |
| Cache and Queue | Upstash Redis | Session tracking, BullMQ job queues |
| File Storage | Supabase Storage or Cloudflare R2 | PDF prescriptions, invoices, brochures |
| Email Transactional | Resend | System notifications and verification emails |
| Error Monitoring | Sentry | Runtime error tracking across all services |
| Uptime Monitoring | BetterUptime or UptimeRobot | Alert on webhook endpoint downtime within 60 seconds |

### 3.3 DNS Records Required

| Type | Host | Value | Purpose |
| :--- | :--- | :--- | :--- |
| `A` | `@` | `76.76.21.21` | Root domain to Vercel |
| `CNAME` | `www` | `cname.vercel-dns.com` | www redirect |
| `CNAME` | `clinic` | `cname.vercel-dns.com` | Clinic product subdomain |
| `CNAME` | `realty` | `cname.vercel-dns.com` | Realty product subdomain |
| `CNAME` | `api` | Railway or Vercel endpoint | Backend webhook gateway |
| `TXT` | `@` | Meta domain verification value | Meta Business Manager |

### 3.4 Environment Variable Management
* Never commit `.env` files to Git.
* Development: use `.env.local` on each local machine.
* Production and Staging: use Vercel Environment Variables with per-environment scoping.
* Sensitive values required across all services:
  ```
  WHATSAPP_APP_SECRET=
  WHATSAPP_PHONE_NUMBER_ID=
  WHATSAPP_ACCESS_TOKEN=
  WEBHOOK_VERIFY_TOKEN=
  DATABASE_URL=
  REDIS_URL=
  OPENAI_API_KEY=
  GROQ_API_KEY=
  NEXT_PUBLIC_APP_URL=
  ```

---

## 4. Base WhatsApp Multi-Tenant Core (`tharo-core`)

The product team builds `tharo-core` as a shared multi-tenant backend service. All vertical product subdomains plug into this engine using a standard adapter pattern.

### 4.1 Multi-Tenant Database Schema
Every database record is strictly scoped to a `tenant_id` with Row-Level Security (RLS) enforced at the Supabase level:

```
tenants
  id, name, slug, plan_tier, billing_status, created_at

whatsapp_accounts
  id, tenant_id, waba_id, phone_number_id, access_token,
  webhook_secret, display_name, quality_rating, tier_limit

contacts
  id, tenant_id, phone_e164, display_name, sector_tags,
  lifecycle_stage, session_expires_at, ctwa_expires_at, created_at

messages
  id, tenant_id, contact_id, direction, type, status,
  wamid, template_name, raw_payload, sent_at, delivered_at, read_at

templates
  id, tenant_id, name, category, language, status,
  variable_keys, approved_at
```

### 4.2 Webhook Ingestion Pipeline
1. Meta delivers webhook events to `POST https://api.tharo.tech/webhooks/whatsapp`.
2. Server extracts the `X-Hub-Signature-256` header and verifies it using the tenant's stored App Secret via HMAC-SHA256.
3. Server returns HTTP 200 within 2 seconds. Processing happens asynchronously.
4. The raw payload is pushed onto a Redis/BullMQ queue with the tenant context.
5. A worker processes the queue and emits normalized internal events:
   * `message.received`: Customer sent text, voice, image, or document.
   * `button.clicked`: Customer tapped a quick-reply or list-action pill.
   * `status.updated`: Message transitioned to sent, delivered, or read.
6. Each event is dispatched to the registered `VerticalAdapter` for that tenant.

### 4.3 Outbound Message Queue & Rate Limiting
* All outbound messages pass through a queue with per-tenant rate limiting.
* Meta Tier 1 (default for new WABA): 1,000 unique recipients per rolling 24-hour window.
* Messages that exceed the window are queued and released automatically in the next window.
* Failed sends (non-deliverable number, template rejected) trigger an alert to the tenant dashboard with the specific failure reason code.

### 4.4 Session Window Tracker
Every contact row tracks two expiry timestamps:
* `session_expires_at`: Set to `NOW() + 24 hours` on every inbound customer message. If this timestamp is in the future, free-form replies are allowed at service conversation rates.
* `ctwa_expires_at`: Set to `NOW() + 72 hours` when a Click-to-WhatsApp ad event is received. Free messaging during this window.

### 4.5 Adapter Interface Contract
Every vertical implements this TypeScript interface. This ensures vertical logic can be added, replaced, or tested in complete isolation from the core engine:
```typescript
interface TharoVerticalAdapter {
  readonly verticalId: string;
  onMessageReceived(event: IncomingMessageEvent): Promise<void>;
  onButtonClicked(event: ButtonClickEvent): Promise<void>;
  onStatusUpdated(event: StatusUpdateEvent): Promise<void>;
  triggerAutomation(
    type: AutomationTriggerType,
    payload: Record<string, unknown>
  ): Promise<AutomationResult>;
}
```

---

## 5. Vertical Products & Domain Adapters

### 5.1 Product 1: Tharo Clinic (`clinic.tharo.tech`)
* **Audience:** Dental practices, medical polyclinics, aesthetic dermatology centers.
* **Core Data Models:** Doctors, PatientProfiles, Appointments, Prescriptions, PaymentLinks.
* **Automation Triggers:** `APPOINTMENT_CREATED`, `REMINDER_24H`, `REMINDER_2H`, `POST_VISIT_FOLLOWUP`, `RECALL_6MONTH`, `PAYMENT_OVERDUE`.
* **Key Workflows:**
  * Patient sends "Book appointment" -> Pipo AI or bot presents available slots with doctor names -> patient selects -> instant WhatsApp confirmation dispatched.
  * Automated 24-hour and 2-hour reminder sequences with `Confirm` and `Reschedule` interactive buttons, reducing no-shows below 4%.
  * 6-month routine dental hygiene recall automation.
  * Post-consultation digital PDF prescription and invoice dispatch.
  * Overdue balance recovery with direct UPI payment links (7, 15, 30 days past due).

### 5.2 Product 2: Tharo Realty (`realty.tharo.tech`)
* **Audience:** Real estate developers, channel partners, and boutique brokerages.
* **Core Data Models:** Properties, Leads, Brokers, SiteVisits, Brochures.
* **Automation Triggers:** `CTWA_AD_CLICK`, `LEAD_QUALIFIED`, `BROCHURE_REQUESTED`, `VISIT_SCHEDULED`, `VISIT_REMINDER`, `LEAD_COLD`.
* **Key Workflows:**
  * Click-to-WhatsApp ad ingestion capturing the free 72-hour window.
  * Automated 3-question qualification bot (budget, preferred configuration, timeline).
  * Digital brochure and floor-plan delivery with Cloudflare R2 signed URL and download tracking.
  * Site visit scheduling with Google Maps pin dispatch and calendar sync.
  * Qualified lead dossier routed directly to assigned broker phone.

### 5.3 Product 3: Tharo Salon (`salon.tharo.tech`)
* **Audience:** Independent salons, spas, grooming lounges.
* **Core Data Models:** Stylists, Services, Bookings, CommissionLedger, Products.
* **Automation Triggers:** `BOOKING_CREATED`, `REMINDER_24H`, `POST_SERVICE_REVIEW`, `WINBACK_30D`, `WINBACK_60D`.
* **Key Workflows:**
  * Stylist slot selection and real-time booking confirmation.
  * Automated stylist commission calculation per service (percentage or fixed).
  * Post-service Google review request with tracked short link.
  * Automated lapsed customer re-engagement at 30 and 60 days.

### 5.4 Product 4: Tharo ERP Bridge (`bridge.tharo.tech`)
* **Audience:** Distributors, B2B enterprises, and wholesalers running on modern ERPs.
* **Architecture:** A lightweight cloud bridge that connects to enterprise ERP webhooks/APIs and pushes order and inventory events to the Tharo cloud engine.
* **Key Workflows:**
  * Sales order created in ERP -> Instant PDF confirmation and dispatch notifications dispatched to customer WhatsApp.
  * Automated escalating payment reminders at 7, 15, and 30 days past due with UPI payment links.
  * Month-end account statement broadcast with delivery telemetry.

---

## 6. Proprietary System Assistant: Pipo AI

**Pipo AI** is Tharo's built-in autonomous operating assistant. It eliminates manual software navigation for front-desk operators.

### 6.1 Technical Pipeline
```
OPERATOR INPUT
  WhatsApp Voice Note (internal staff number)
  OR Browser Microphone (dashboard mic button)
        |
        v
TRANSCRIPTION LAYER
  Whisper API or Groq (sub-400ms target latency)
  Output: raw transcript text
        |
        v
INTENT & ENTITY EXTRACTION
  Lightweight LLM call with strict JSON schema enforcement
  Output: { action, entities, confidence }
        |
        v
VALIDATION GATE
  Schema validation (Zod)
  Confidence threshold check (minimum 0.85)
  Ambiguity detection (missing required entities)
        |
        v
  AMBIGUOUS?  ──yes──>  Pipo asks 1 clarifying question
        |no
        v
HIGH-IMPACT ACTION?
  (mass broadcast, delete, bulk cancel)
        |yes──>  Human confirmation required
        |no
        v
DETERMINISTIC EXECUTION
  Internal adapter API call
  Immutable audit log entry created
        |
        v
OPERATOR CONFIRMATION
  WhatsApp reply or dashboard toast:
  "Appointment booked for Priya Sharma on 15 Oct at 4 PM."
```

### 6.2 Supported Action Schema (v1)
```typescript
type PipoAction =
  | "CREATE_APPOINTMENT"
  | "RESCHEDULE_APPOINTMENT"
  | "CANCEL_APPOINTMENT"
  | "SEND_INVOICE"
  | "SEND_PRESCRIPTION"
  | "TRIGGER_REMINDER"
  | "CREATE_LEAD"
  | "UPDATE_LEAD_STAGE";
```

### 6.3 Example Parsed Payload
**Input Voice Note:** *"Book a follow-up root canal for Priya Sharma tomorrow at 4 PM with Dr. Amit."*
```json
{
  "action": "CREATE_APPOINTMENT",
  "confidence": 0.97,
  "entities": {
    "patient_name": "Priya Sharma",
    "service": "Root Canal Follow-up",
    "doctor_name": "Dr. Amit",
    "start_time": "2026-10-15T16:00:00+05:30"
  }
}
```

### 6.4 Safety Guardrails
* Actions with `confidence < 0.85` are held and Pipo asks one clarifying follow-up question.
* High-impact actions (mass broadcast, appointment cancellations above 3 records) require explicit operator confirmation via an interactive WhatsApp button before execution.
* Every executed action creates an immutable `audit_log` row: timestamp, operator_id, action_type, input_transcript, resolved_payload.

---

## 7. Flagship Marketing Website (`tharo-web` on `tharo.tech`)

The current repository in this workspace (`uncomplic8/`) is being rebranded and deployed as the public face of Tharo.

### 7.1 Codebase Architecture
* **Framework:** Next.js 16.3.4 (App Router, Turbopack)
* **Styling:** Vanilla CSS Modules only. No Tailwind.
* **Animations:** Framer Motion 13
* **Icons:** Lucide React
* **SSOT Data Layer:** All copy and configuration lives in `src/data/`. Components never hardcode text.

### 7.2 Rebranding Execution Checklist
* Update [src/data/siteConfig.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/siteConfig.ts): company name `Tharo`, URL `https://tharo.tech`, contact email `connect@tharo.tech`.
* Update [src/app/layout.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/app/layout.tsx): meta titles, OpenGraph description, favicon, and structured business data (schema.org).
* Update [src/components/Navbar.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/Navbar.tsx): `THARO` brand typography, direct links to product subdomains.
* Update [src/components/Footer.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/Footer.tsx): giant `THARO` wall-to-wall watermark, live IST clock, and correct contact links.
* Update all sector playbooks in [src/data/sectors.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/sectors.ts), pricing in [src/data/pricing.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/pricing.ts), and FAQs in [src/data/faqs.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/faqs.ts).

### 7.3 SEO Requirements for Every Page
* One `<h1>` per page, no exceptions.
* Unique `<title>` and `<meta name="description">` per route.
* Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* `robots.txt` and `sitemap.xml` generated and verified in production.
* Lighthouse Performance score above 90 before each production deploy.

---

## 8. Security, Error Monitoring & Observability

### 8.1 Security Baselines
* All API routes validate `Content-Type` and enforce CORS origin allowlists.
* Webhook endpoints rate-limit by IP (100 requests per minute max).
* All database queries go through Supabase RLS policies; no queries bypass RLS.
* JWT tokens issued by Supabase Auth have a 1-hour expiry with secure refresh token rotation.
* All user-uploaded files (prescriptions, brochures) are served via signed, expiring Supabase Storage URLs (valid 15 minutes).

### 8.2 Error Monitoring
* Sentry is integrated in all Next.js applications (`tharo-web`, `clinic.tharo.tech`, `realty.tharo.tech`).
* Source maps are uploaded on every production build so stack traces resolve to original TypeScript lines.
* PII (patient names, phone numbers) is scrubbed from Sentry payloads using `beforeSend` hooks.

### 8.3 Uptime & Alerting
* BetterUptime monitors `https://api.tharo.tech/health` every 60 seconds.
* Downtime alerts are sent to the team WhatsApp group within 2 minutes of detection.
* A Vercel deployment webhook posts to the team Slack/WhatsApp channel on every production deploy.

---

## 9. Revenue Model & Client Pricing

### 9.1 Plan Tiers
| Dimension | Starter | Growth (Most Popular) | Enterprise |
| :--- | :--- | :--- | :--- |
| **Audience** | Single-location clinic or salon | Multi-branch SMBs | Hospital chains, logistics, custom ERP |
| **Setup Fee (One-time)** | ₹15,000 to ₹35,000 | ₹40,000 to ₹90,000 | ₹1,50,000+ (custom quote) |
| **Platform Fee (Monthly)** | ₹1,999 to ₹2,999 | ₹4,999 to ₹7,999 | ₹15,000 to ₹25,000+ |
| **Team Seats** | Up to 3 | Up to 10 | Unlimited |
| **Automation Flows** | 2 pre-built | Full sector suite | Fully custom |
| **Support** | Standard business hours | Priority WhatsApp and phone | Dedicated technical account manager |

### 9.2 Meta Messaging Cost (Pass-Through, 0% Markup)
| Message Category | Rate |
| :--- | :--- |
| Utility (confirmations, reminders, invoices) | ~₹0.115 per message |
| Marketing (promotions, re-engagement broadcasts) | ~₹0.86 per message |
| Service (user-initiated within 24-hour window) | Free until Sept 30, 2026; utility rate from Oct 2026 |
| Click-to-WhatsApp Ad Window | Free for 72 hours after ad click |

---

## 10. Team Collaboration & GitHub Governance

### 10.1 GitHub Organization
* **Organization URL:** `github.com/tharo-tech`
* **Repository 1:** `tharo-tech/tharo-web` (Marketing website, owner: Himank).
* **Repository 2:** `tharo-tech/tharo-core` (Backend engine, adapters, and Pipo AI, owners: Member 2 and Member 3).

### 10.2 Individual Laptop Setup (3 Separate Machines)
Each founder uses their own machine with their own personal GitHub account. No shared SSH keys or shared login sessions are needed:
```bash
git config --global user.name "Your Full Name"
git config --global user.email "yourname@tharo.tech"
```
On first `git push`, GitHub will open a browser window to authenticate. Sign in with your personal account only.

### 10.3 Branch Model
| Branch | Purpose | Who Can Merge |
| :--- | :--- | :--- |
| `main` | Production-ready code only | Lead (after staging verification) |
| `develop` | Integration and staging branch | Any founder (via approved PR) |
| `feature/<name>` | Individual feature work | Owner of that feature branch |
| `fix/<name>` | Bug fixes | Any founder |
| `hotfix/<name>` | Urgent production fixes | Lead only, branched from `main` |

### 10.4 Pull Request Rules
* Every Pull Request into `develop` requires at least 1 approval from a different teammate.
* PR description must use the template: What does this do, How to test, Checklist (runs locally, no secrets committed, linked issue).
* Auto-delete source branch on merge.

### 10.5 Commit Message Prefixes
```
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
refactor: Code cleanup without functional change
chore:    Config, dependencies, tooling
test:     Test additions or changes
```

### 10.6 Zero Secrets in Git (Non-Negotiable)
* Never commit `.env`, `.env.local`, or any file containing API keys.
* Add `.env*` to `.gitignore` before the first commit.
* All secrets go into Vercel Environment Variables scoped per environment (Development, Preview, Production).
* If a secret is accidentally committed: immediately rotate the secret in the provider dashboard, then remove it from Git history using `git filter-branch` or BFG Repo Cleaner.
