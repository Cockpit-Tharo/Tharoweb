# THARO | Master Execution Roadmap & Timeline

> **Company:** Tharo Technologies  
> **Domain:** [tharo.tech](https://tharo.tech)  
> **Document Type:** Step-by-Step Action Roadmap & Deliverable Checklist  
> **Horizon:** 10-Week Launch & Initial Revenue Timeline  
> **Status:** Active Execution  
> **Last Updated:** October 2026  

---

## 1. Team Responsibility Matrix

| Founder | Primary Ownership | Core Deliverables |
| :--- | :--- | :--- |
| **Founder 1 (Lead / Himank)** | Commercial, Marketing Website, Legal & Sales | `tharo-web` Next.js site, partnership registration, GST filing, Meta Business verification, social media, and client acquisition. |
| **Founder 2 (Backend Core)** | Multi-Tenant WhatsApp Engine, Infrastructure & Pipo AI | `tharo-core` backend, Meta webhook gateway, queue rate-limiting, multi-tenant database, session tracking, and Pipo AI voice pipeline. |
| **Founder 3 (Frontend & Product)** | Vertical Product Dashboards & Domain Adapters | `clinic.tharo.tech` and `realty.tharo.tech` UI, doctor calendar, patient CRM, lead pipeline, and adapter logic. |

---

## 2. Master Deliverable Checklist

### Track A: Legal, Entity & Regulatory

- [ ] **A1. Partnership Deed:** Draft with partner equity ratios, capital contributions, banking authority, and dissolution terms. Execute on non-judicial stamp paper and notarize.
- [ ] **A2. Entity PAN:** Apply for company Permanent Account Number via NSDL/UTIITSL portal.
- [ ] **A3. GSTIN Registration:** Register for GST once entity PAN is active. The legal entity name and address must match Meta Business Manager exactly.
- [ ] **A4. Current Bank Account:** Open official company current account using deed, PAN, and GST certificate.
- [ ] **A5. Business Email Setup:** Configure all `@tharo.tech` Google Workspace accounts (`connect@tharo.tech`, `himank@tharo.tech`, etc.).
- [ ] **A6. Privacy Policy & Terms:** Publish `tharo.tech/privacy` and `tharo.tech/terms` before collecting any user data. Required by DPDP Act 2023.

### Track B: Meta Business & Tech Provider Setup

- [ ] **B1. Meta Business Portfolio:** Create portfolio on [business.facebook.com](https://business.facebook.com) using the designated company admin account.
- [ ] **B2. Facebook Page:** Create official `Tharo Technologies` Facebook Page and link to Business Manager.
- [ ] **B3. Domain Verification:** Add the Meta DNS TXT record to `tharo.tech` in the domain registrar.
- [ ] **B4. Meta Business Verification:** Submit GST certificate PDF and utility bill to Meta Security Center. Wait 1 to 5 business days.
- [ ] **B5. WhatsApp Business Account (WABA):** Create official Tharo WABA linked to the verified Meta Business Portfolio.
- [ ] **B6. Official Phone Number:** Register and verify the official Tharo WhatsApp business phone number. This will be the number used for demos and internal Pipo AI access for clients.
- [ ] **B7. Embedded Signup Developer App:** Once Business Verification is approved, create the Meta App with `whatsapp_business_management` and `whatsapp_business_messaging` Advanced Access permissions.
- [ ] **B8. Submit for App Review:** Prepare screen-recorded video demonstrating message sending and template creation. Submit for Meta App Review.
- [ ] **B9. Test Embedded Signup Flow:** Verify that a new client can complete the Embedded Signup, connect their WABA, and that Tharo's system receives the resulting access token.

### Track C: Brand Identity & Website Building (`tharo-web` on `tharo.tech`)

- [ ] **C1. Color Palette Decision:** Team meeting to select between Option 1 (Warm Editorial Luxury Editorial), Option 2 (Obsidian Stealth), or Option 3 (Swiss Minimal). Decision must be final before any code is written.
- [ ] **C2. Design Tokens:** Apply finalized color tokens and paper grid textures in [src/app/globals.css](file:///Users/himanklalani/Projects/uncomplic8/src/app/globals.css). Update all `--bg-*` and `--primary-*` CSS custom properties.
- [ ] **C3. Central Data Layer Rebrand (SSOT):**
  - [ ] [src/data/siteConfig.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/siteConfig.ts): company name `Tharo`, URL `https://tharo.tech`, email `connect@tharo.tech`, WhatsApp number.
  - [ ] [src/data/sectors.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/sectors.ts): update all 12 sector playbooks with Tharo-specific flows and subdomain links.
  - [ ] [src/data/pricing.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/pricing.ts): Starter, Growth, and Enterprise tiers; highlight 0% markup Meta direct billing.
  - [ ] [src/data/faqs.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/faqs.ts): plain-language answers addressing WABA onboarding, pricing transparency, and Pipo AI.
  - [ ] [src/data/stats.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/stats.ts): update key metrics and trust indicators.
  - [ ] [src/data/steps.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/steps.ts): update 5-day turnkey deployment stages for Tharo.
  - [ ] [src/data/automationCapsules.ts](file:///Users/himanklalani/Projects/uncomplic8/src/data/automationCapsules.ts): update automation examples for clinic, realty, and salon verticals.
- [ ] **C4. Navbar Rebrand:**
  - [ ] [src/components/Navbar.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/Navbar.tsx): update `THARO` wordmark, update navigation links, add direct product subdomain links.
  - [ ] Ensure Apple liquid-glass floating pill styling is retained.
  - [ ] Verify mobile menu dropdown opens and closes with smooth GPU animation (no layout jank).
- [ ] **C5. Hero Section:**
  - [ ] Editorial serif headline combining Playfair Display Roman and `.italic-serif` accent.
  - [ ] Frosted status beacon chip above headline.
  - [ ] Dual CTAs: primary (Book Discovery Call) and secondary (See Live Demo), each with directional arrow icons.
  - [ ] Micro-trust strip beneath CTAs: `Official Meta API`, `Zero Markup`, `5-Day Turnkey`.
- [ ] **C6. Interactive Components Calibration:**
  - [ ] [src/components/WhatsAppSimulator.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/WhatsAppSimulator.tsx): update chat flows across Dental, Real Estate, and Salon industries.
  - [ ] [src/components/FlowTransformer.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/FlowTransformer.tsx): update before/after scenarios using Tharo vertical workflows.
  - [ ] [src/components/IntegrationMatrix.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/IntegrationMatrix.tsx): verify webhook payload and dashboard sync demo is accurate.
  - [ ] [src/components/LollipopCarousel.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/LollipopCarousel.tsx): update automation capsule copy with Tharo flows.
  - [ ] [src/components/StackflowCards.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/StackflowCards.tsx): verify 3D depth-parallax card layers are functioning on mobile.
  - [ ] [src/components/SectorDepthCarousel.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/SectorDepthCarousel.tsx): verify 3D cylindrical drag navigation for all 12 industry cards.
  - [ ] [src/components/RoiCalculator.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/RoiCalculator.tsx): verify ROI sliders and prefilled WhatsApp inquiry link generation.
  - [ ] [src/components/CollapsingStepsCards.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/CollapsingStepsCards.tsx): verify 5-day deployment deck horizontal scroll on mobile.
- [ ] **C7. Footer Rebrand:**
  - [ ] [src/components/Footer.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/Footer.tsx): wall-to-wall `THARO` giant watermark typography using `clamp` responsive sizing.
  - [ ] Live IST clock operational.
  - [ ] Studio availability beacon present.
  - [ ] One-click email copy pill functioning.
  - [ ] All nav links and social icons updated to Tharo handles.
- [ ] **C8. Global WhatsApp Widget:**
  - [ ] [src/components/WhatsAppChatWidget.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/components/WhatsAppChatWidget.tsx): update `wa.me` number, prefilled inquiry chips, and live clock.
- [ ] **C9. Solutions and Pricing Pages:**
  - [ ] [src/app/solutions/page.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/app/solutions): update sector index with Tharo branding and subdomain links.
  - [ ] [src/app/pricing/page.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/app/pricing): update plan tiers and Meta pass-through rate table.
  - [ ] [src/app/about/page.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/app/about): update studio story, team mission, and founder philosophy.
  - [ ] [src/app/contact/page.tsx](file:///Users/himanklalani/Projects/uncomplic8/src/app/contact): update booking and WhatsApp routing links.
- [ ] **C10. Mobile Audit (320px to 428px):**
  - [ ] Zero horizontal clipping on all components.
  - [ ] All swipeable horizontal pill bars working with touch momentum.
  - [ ] No native blue tap highlights (`-webkit-tap-highlight-color: transparent`).
  - [ ] All font sizes use `clamp()` for responsive scaling.
  - [ ] Strict zero-emoji and zero-em-dash compliance across every section.
- [ ] **C11. SEO & Metadata Audit:**
  - [ ] Each page has a unique `<title>` and `<meta name="description">`.
  - [ ] One `<h1>` per page.
  - [ ] `robots.txt` and `sitemap.xml` generated.
  - [ ] OpenGraph image generated for each primary route.
- [ ] **C12. Production Build Verification & Deployment:**
  - [ ] Run `npm run build` and confirm zero TypeScript errors and zero ESLint errors.
  - [ ] Test production build locally using `npm run start`.
  - [ ] Connect `tharo-tech/tharo-web` repository to Vercel.
  - [ ] Attach custom domain `tharo.tech` and `www.tharo.tech`.
  - [ ] Verify automatic SSL certificate is issued.
  - [ ] Confirm Lighthouse Performance score above 90 on production URL.

### Track D: Infrastructure & DevOps

- [ ] **D1. GitHub Organization:** Create `github.com/tharo-tech` organization. Invite all 3 founders as Members. Set Founder 1 as Owner.
- [ ] **D2. Repository Creation:**
  - [ ] Create `tharo-tech/tharo-web` and push current codebase.
  - [ ] Create `tharo-tech/tharo-core` for the backend engine.
- [ ] **D3. Branch Protection Rules (both repos):**
  - [ ] Protect `main`: require 1 approval, block force pushes, restrict deletions.
  - [ ] Protect `develop`: require 1 approval, block force pushes.
- [ ] **D4. `.env.example` files committed to `develop`:**
  - [ ] `tharo-web`: `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_WA_NUMBER`.
  - [ ] `tharo-core`: `DATABASE_URL`, `REDIS_URL`, `WHATSAPP_APP_SECRET`, `WHATSAPP_ACCESS_TOKEN`, `GROQ_API_KEY`.
- [ ] **D5. Supabase Project:** Create production Supabase project. Enable Row-Level Security on all tables from day one.
- [ ] **D6. Upstash Redis:** Create Redis instance for BullMQ job queues and session window tracking.
- [ ] **D7. Sentry Projects:** Create Sentry projects for `tharo-web` and `tharo-core`. Configure `beforeSend` to scrub PII.
- [ ] **D8. Uptime Monitor:** Configure BetterUptime or UptimeRobot on `https://api.tharo.tech/health`. Set WhatsApp alert on downtime.
- [ ] **D9. DNS Records:** Configure all A and CNAME records at domain registrar per the DNS table in [THARO_MANUAL.md](file:///Users/himanklalani/Projects/uncomplic8/THARO_MANUAL.md).
- [ ] **D10. Staging Environment:** Create a separate Vercel deployment of `tharo-core` and `clinic.tharo.tech` linked to `staging.tharo.tech` for pre-production testing.

### Track E: Base WhatsApp Multi-Tenant Core (`tharo-core`)

- [ ] **E1. Project Scaffold:** Initialize Node.js/Next.js App Router project with TypeScript, ESLint, and Prettier.
- [ ] **E2. Webhook Gateway:** Implement `POST /webhooks/whatsapp` with HMAC-SHA256 signature verification. Return HTTP 200 within 2 seconds.
- [ ] **E3. Multi-Tenant Database Schema:** Create Supabase migrations for `tenants`, `whatsapp_accounts`, `contacts`, `messages`, `templates`. Apply RLS policies.
- [ ] **E4. Outbound Message Queue:** Build BullMQ workers with per-tenant rate limiting (Tier 1: 1,000 unique recipients per 24 hours). Implement exponential backoff on failed sends.
- [ ] **E5. Session Tracker:** Write `session_expires_at` and `ctwa_expires_at` update logic on every inbound event.
- [ ] **E6. Template Engine:** Build template dispatch function accepting name, language, and variable map. Validate against stored template schema before sending.
- [ ] **E7. Adapter Interface:** Define and export the `TharoVerticalAdapter` TypeScript interface and base abstract class.
- [ ] **E8. Health Check Endpoint:** `GET /health` returns `{ status: "ok", timestamp, queue_depth }`.
- [ ] **E9. Internal API Key Authentication:** All endpoints except `/webhooks/whatsapp` and `/health` require a valid `X-Tharo-API-Key` header.

### Track F: Vertical Products & Domain Adapters

- [ ] **F1. Shared Adapter Base:** Build the abstract `TharoVerticalAdapter` base class in `tharo-core` that all sector adapters extend.
- [ ] **F2. Clinic Adapter (`clinic.tharo.tech`):**
  - [ ] Define `AutomationTriggerType` for clinic: `APPOINTMENT_CREATED`, `REMINDER_24H`, `REMINDER_2H`, `POST_VISIT_FOLLOWUP`, `RECALL_6MONTH`, `PAYMENT_OVERDUE`.
  - [ ] Build clinic calendar API (doctor availability, slot locking, booking creation).
  - [ ] Implement 24-hour and 2-hour cron-based reminder dispatch.
  - [ ] Implement 6-month recall engine (query contacts with `last_visit_date > 6 months ago`).
  - [ ] Build PDF generator for prescriptions and invoices.
  - [ ] Build doctor dashboard UI (appointment list, daily schedule, patient profiles).
  - [ ] Build receptionist booking UI.
- [ ] **F3. Realty Adapter (`realty.tharo.tech`):**
  - [ ] Define `AutomationTriggerType` for realty: `CTWA_AD_CLICK`, `LEAD_QUALIFIED`, `BROCHURE_REQUESTED`, `VISIT_SCHEDULED`, `VISIT_REMINDER`.
  - [ ] Build 3-question qualification bot flow.
  - [ ] Build property catalog and brochure delivery with signed URL generation.
  - [ ] Build broker assignment and lead routing engine.
  - [ ] Build broker CRM dashboard (lead pipeline stages, site visit calendar).
- [ ] **F4. Salon Adapter (`salon.tharo.tech`):**
  - [ ] Define salon automation triggers: `BOOKING_CREATED`, `POST_SERVICE_REVIEW`, `WINBACK_30D`, `WINBACK_60D`.
  - [ ] Build stylist calendar and slot management.
  - [ ] Build commission calculation engine per service.
  - [ ] Build post-service Google review link generator with UTM tracking.

### Track G: Pipo AI (Autonomous System Assistant)

- [ ] **G1. Internal WhatsApp Number:** Register and configure the internal staff WhatsApp number where operators can send voice notes to Pipo AI.
- [ ] **G2. Audio Ingestion:** Build audio download and conversion pipeline (WhatsApp OGG voice notes to WAV/MP3 for transcription APIs).
- [ ] **G3. Transcription Integration:** Connect Groq Whisper API for sub-400ms speech-to-text. Add fallback to OpenAI Whisper if Groq is unavailable.
- [ ] **G4. Intent Parsing:** Write structured LLM prompt with strict Zod JSON schema enforcement for all supported `PipoAction` types.
- [ ] **G5. Confidence Gate:** Reject intents with confidence below 0.85 and trigger a clarifying follow-up message to the operator.
- [ ] **G6. Execution Gateway:** Wire each `PipoAction` type to the corresponding internal adapter API call.
- [ ] **G7. High-Impact Confirmation Flow:** Implement interactive WhatsApp confirmation button for mass broadcasts and bulk cancellation actions.
- [ ] **G8. Audit Log:** Write every Pipo AI action to an `audit_log` table: timestamp, operator_id, action_type, transcript, resolved_payload, execution_result.
- [ ] **G9. Dashboard Microphone Button:** Add in-dashboard microphone button in `clinic.tharo.tech` that streams audio directly to the Pipo AI endpoint.

### Track H: Marketing Media & Customer Onboarding

- [ ] **H1. Screen Demo Videos:**
  - [ ] 60-second video: patient sends WhatsApp booking request; appointment confirmed in 5 seconds; calendar updated.
  - [ ] 60-second video: Pipo AI receives voice note from receptionist; appointment created; patient confirmation sent automatically.
  - [ ] 60-second video: realty ad click leads to WhatsApp qualification bot to broker notification in one flow.
- [ ] **H2. Client Onboarding Tutorial Series:**
  - [ ] Video 1: How to add your card to Meta Business Suite (2 minutes).
  - [ ] Video 2: How to send a voice note to Pipo AI to book an appointment (90 seconds).
  - [ ] Video 3: How to manage your team WhatsApp inbox from the dashboard (2 minutes).
- [ ] **H3. Case Study: Live Dental Clinic:**
  - [ ] Document before/after metrics: previous no-show rate vs current rate, manual booking time vs automated time, payment collection speed.
  - [ ] Record a short testimonial video from the clinic owner (2 minutes).
- [ ] **H4. Reusable WhatsApp Template Library:**
  - [ ] Submit and get approved: appointment confirmation, 24-hour reminder, 2-hour reminder, prescription delivered, invoice with UPI link, payment overdue (3 escalations), and Google review request templates.
  - [ ] Document each template's name, category, and variable list in [src/data/](file:///Users/himanklalani/Projects/uncomplic8/src/data/).

### Track I: Revenue, Client Acquisition & Partnership

- [ ] **I1. Pricing Page Live:** Verify pricing tiers and Meta pass-through rate table are accurate and published at `tharo.tech/pricing`.
- [ ] **I2. Discovery Call Booking:** Configure Calendly or similar booking tool at `tharo.tech/contact` for 30-minute discovery calls.
- [ ] **I3. First 5 Pilot Clients:** Identify 5 local dental clinics or salons for a paid pilot at ₹1,999/month Starter rate. Use the live dental clinic case study as proof.
- [ ] **I4. Referral Incentive:** Design a referral program where existing clients receive one month free for each business they refer that converts.
- [ ] **I5. Local Instagram Content Plan:** Post 3 pieces of content per week on `@tharo.tech`: 1 product demo clip, 1 educational post (e.g., "How much are no-shows costing your clinic?"), 1 client spotlight or before/after metric.

---

## 3. Ten-Week Execution Timeline

### Phase 1: Week 1 (Foundation, Legal Filing & GitHub Setup)
| Owner | Task | Deliverable |
| :--- | :--- | :--- |
| Himank | Finalize and sign partnership deed | Signed deed document |
| Himank | Apply for entity PAN and GSTIN | Application confirmation numbers |
| Himank | Team meeting: decide final brand color palette | Decision recorded in `THARO_MANUAL.md` |
| Himank | Set up all `@tharo.tech` Google Workspace accounts | Active email accounts for all 3 founders |
| Member 2 | Create GitHub Organization `tharo-tech`, invite all 3 founders | Organization URL live |
| Member 2 | Create `tharo-tech/tharo-core` with `main` + `develop` branches, branch protection rules, and `.env.example` | Repo with protection configured |
| Member 2 | Initialize project scaffold with TypeScript, ESLint, and `POST /webhooks/whatsapp` stub | Basic webhook endpoint returning 200 |
| Member 3 | Create `tharo-tech/tharo-web` and push current codebase | Website repo connected to Vercel |
| Member 3 | Set up Supabase project with initial schema migrations | Database ready |

**Phase 1 Milestone:** GitHub Organization live, GST application submitted, webhook endpoint responding to test pings, and Supabase database initialized.

---

### Phase 2: Week 2 (Website Build & HMAC Verification)
| Owner | Task | Deliverable |
| :--- | :--- | :--- |
| Himank | Apply finalized color tokens in `globals.css`; begin SSOT data layer rebrand (siteConfig, sectors, pricing, faqs) | Updated data files |
| Himank | Rebrand Navbar, Hero, Footer with `THARO` typography | Visual rebrand visible at `localhost:3000` |
| Himank | Set up Instagram and LinkedIn pages | Handles live |
| Member 2 | Implement full HMAC-SHA256 webhook signature verification | Webhook rejects invalid payloads |
| Member 2 | Create Supabase RLS policies on all tables | No row accessible without valid `tenant_id` |
| Member 3 | Build WhatsApp message simulator, integration matrix, and flow transformer with Tharo copy | Components updated |

**Phase 2 Milestone:** `tharo.tech` live in Vercel preview with full Tharo branding; webhook signature verification passing.

---

### Phase 3: Week 3 (Multi-Tenant Queue, Session Tracking & Clinic Calendar)
| Owner | Task | Deliverable |
| :--- | :--- | :--- |
| Himank | Run `npm run build`; deploy `tharo.tech` to Vercel production; configure DNS records | `tharo.tech` live and indexed |
| Himank | Receive GST certificate; open company bank account | Bank account number |
| Member 2 | Build BullMQ outbound queue with per-tenant rate limiting | Queue processing test messages reliably |
| Member 2 | Build session window tracker (`session_expires_at`, `ctwa_expires_at`) | Accurate session timestamps per contact |
| Member 3 | Build `clinic.tharo.tech` doctor calendar: slot availability API, booking creation, and appointment list UI | Calendar UI working end-to-end locally |

**Phase 3 Milestone:** `tharo.tech` publicly accessible; outbound queue processing test messages; doctor calendar booking flow working in `clinic.tharo.tech`.

---

### Phase 4: Week 4 (Meta Business Verification & Reminder Automation)
| Owner | Task | Deliverable |
| :--- | :--- | :--- |
| Himank | Upload GST certificate to Meta Security Center; add DNS TXT record | Meta verification submission confirmed |
| Himank | Create official Tharo WABA and verify business phone number | WABA active in Meta Business Manager |
| Member 2 | Build template dispatch function with variable interpolation | Template sends successfully via Cloud API |
| Member 2 | Implement 24-hour and 2-hour cron reminder automation | Cron job dispatching test reminders |
| Member 3 | Connect `clinic.tharo.tech` frontend to `tharo-core` backend API | End-to-end booking confirmation received on test phone |

**Phase 4 Milestone:** Clinic booking creation triggers a real WhatsApp confirmation message to a test phone number.

---

### Phase 5: Week 5 (Live Client Migration & Pipo AI v1)
| Owner | Task | Deliverable |
| :--- | :--- | :--- |
| Himank | Meta Business Verification approved; record 60-second clinic demo video | Demo video published on Instagram |
| Himank | Begin outbound calls to 10 local dental clinics | 5 discovery calls booked |
| Member 2 | Build Pipo AI audio ingestion and Groq Whisper transcription endpoint | Voice note transcribed to text in under 400ms |
| Member 2 | Build intent parsing with Zod schema validation and confidence gate | Intent JSON extracted from transcription |
| Member 3 | Add microphone button to clinic dashboard; migrate existing live dental clinic to Tharo | First real client running on the new platform |

**Phase 5 Milestone:** Existing dental clinic migrated to Tharo multi-tenant platform; Pipo AI transcribing voice notes correctly.

---

### Phase 6: Week 6 (Pipo AI Execution & First Paying Clients)
| Owner | Task | Deliverable |
| :--- | :--- | :--- |
| Himank | Convert 2 discovery calls to paid Starter plan clients (₹1,999/month + setup fee) | First recurring revenue |
| Himank | Record client onboarding video series | 3 tutorial videos uploaded |
| Member 2 | Wire Pipo AI intent execution to Clinic Adapter API calls | Pipo AI books appointments end-to-end via voice |
| Member 2 | Build audit log for all Pipo AI actions | Immutable action log persisted to database |
| Member 3 | Build 6-month dental recall automation and post-visit followup flow | Recall cron sending test recall messages |

**Phase 6 Milestone:** Pipo AI booking appointments via WhatsApp voice notes end-to-end on the live dental client.

---

### Phase 7: Weeks 7 to 8 (Realty Product & Meta Tech Provider App Review)
| Owner | Task | Deliverable |
| :--- | :--- | :--- |
| Himank | Submit Meta Embedded Signup App for App Review with screen-recorded evidence | App Review submitted |
| Himank | Reach 5 paying clients; document dental clinic case study metrics | Case study PDF and testimonial video |
| Member 2 | Build Realty Adapter: CTWA ad ingestion, lead scoring, brochure delivery with signed URLs | Realty adapter processing test ad click events |
| Member 3 | Build `realty.tharo.tech` dashboard: lead pipeline kanban, site visit calendar, broker assignment | Dashboard UI complete |

**Phase 7 Milestone:** `realty.tharo.tech` deployed and processing Click-to-WhatsApp test ad events.

---

### Phase 8: Weeks 9 to 10 (Scale, Salon Product & Revenue Milestone)
| Owner | Task | Deliverable |
| :--- | :--- | :--- |
| Himank | Meta App Review approved; Embedded Signup live for new client self-onboarding | Clients can self-onboard without manual intervention |
| Himank | Reach 10 paying clients across clinic and realty verticals | ₹20,000 to ₹50,000 monthly recurring revenue |
| Member 2 | Build Salon Adapter: booking engine, commission ledger, review link generator, 30-day and 60-day winback crons | Salon adapter feature-complete |
| Member 3 | Build `salon.tharo.tech` dashboard: stylist roster, booking calendar, commission ledger UI | Dashboard UI deployed |

**Phase 8 Milestone:** 3 vertical products live (clinic, realty, salon); self-service Embedded Signup onboarding operational; positive monthly recurring revenue.

---

## 4. Risk Log & Mitigations

| Risk | Likelihood | Impact | Mitigation |
| :--- | :--- | :--- | :--- |
| Meta Business Verification rejected (name mismatch) | Medium | High | Double-check GST name against Meta entry character by character before submission. |
| Meta App Review rejected | Medium | High | Use the live dental clinic system as screen-recorded evidence. Resubmit within 5 business days with corrections. |
| WABA account temporarily flagged due to user complaints | Low | Critical | Keep marketing message opt-out rates below 0.3%. Always include an opt-out option in broadcast messages. |
| Founding team bandwidth split too thin | High | High | Strict work-split by track. No founder context-switches to another track without resolving their current milestone. |
| Competitor (Invoay, AiSensy) undercuts on price | Medium | Medium | Tharo's moat is done-for-you implementation and Pipo AI. Compete on outcomes, not price. |
| WhatsApp template rejection (new category) | Medium | Medium | Pre-build templates per vertical and batch-submit. Maintain 2 weeks of buffer before launching a new vertical. |
| GST registration delayed beyond 2 weeks | Low | Medium | Begin Meta portfolio creation in parallel. Use GST ARN (acknowledgement number) as interim proof for some verification paths. |

---

## 5. Definition of Done for Each Track

A track is considered complete only when all of the following are true:

| Track | Definition of Done |
| :--- | :--- |
| **Track A (Legal)** | GST certificate in hand, bank account open, and all three `@tharo.tech` emails operational. |
| **Track B (Meta)** | Meta Business Verification approved, official WABA active, and at least one test message sent from the verified number. |
| **Track C (Website)** | `tharo.tech` live on Vercel, Lighthouse Performance above 90, zero TypeScript build errors, and all links and CTAs verified on a real mobile device. |
| **Track D (DevOps)** | Both repositories have branch protection active, staging environment deployed, Sentry receiving errors, and uptime monitor alerting. |
| **Track E (Core Engine)** | Webhook ingesting signed Meta events, outbound queue sending real messages, session tracker updating timestamps, and all RLS policies enforced. |
| **Track F (Adapters)** | Each adapter: end-to-end booking or lead flow completes successfully from customer WhatsApp message to dashboard record and WhatsApp confirmation reply. |
| **Track G (Pipo AI)** | Voice note from staff WhatsApp number results in a database record created and a WhatsApp confirmation sent to the customer in under 10 seconds. |
| **Track H (Media)** | 3 demo videos published, 3 onboarding videos published, and 1 case study document with real before/after metrics. |
| **Track I (Revenue)** | 5 paying clients on monthly subscriptions with recurring payments confirmed in the company bank account. |

---

## 6. Daily Operating Cadence

Three non-negotiable daily habits to maintain momentum and avoid code collisions:

1. **Morning Standup (10:00 AM, 10 Minutes):**
   * What did you ship yesterday?
   * What will you ship today?
   * What is blocking you? (If blocked, resolve together immediately. Do not carry a blocker into a second day.)
2. **Daily PR Cadence (5:00 PM):**
   * Open Pull Requests from `feature/*` branches into `develop` before 5 PM.
   * Teammates review and approve or request changes within 2 hours.
   * Never merge directly to `main`. All production merges go through staging first.
3. **Friday Product Demo (6:00 PM, 30 Minutes):**
   * Live demo of working software end-to-end: from a real WhatsApp message to a dashboard record update.
   * Review weekly revenue pipeline, legal progress, and Meta verification status.
   * Update this roadmap: check off completed items and note any timeline adjustments.
