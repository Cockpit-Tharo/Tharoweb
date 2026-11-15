"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";
import RoiCalculator from "@/components/RoiCalculator";
import {
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Scissors,
  Calendar,
  Building2,
  Home,
  ChevronDown,
  ShieldCheck,
  Zap,
  Check,
} from "lucide-react";
import { pricingPlans, metaRateCards } from "@/data/pricing";

const verticalDeployments = [
  {
    title: "Dental Clinics & Healthcare",
    icon: Stethoscope,
    recommendedPlan: "Starter (Single Clinic) / Growth (Multi-Doctor)",
    description: "Includes 32-tooth odontogram charting, multi-doctor calendar locking, automated 6-month hygiene recalls, and post-op care PDF delivery.",
  },
  {
    title: "Salons & Luxury Spas",
    icon: Scissors,
    recommendedPlan: "Starter (Single Location) / Growth (Salon Chain)",
    description: "Includes stylist column schedule, automated WhatsApp reminder pings with deposit links to eliminate no-shows, register POS, and loyalty tiers.",
  },
  {
    title: "Events & Hospitality",
    icon: Calendar,
    recommendedPlan: "Growth / Enterprise Tier",
    description: "Dynamic 1-tap WhatsApp RSVPs, cryptographically signed digital QR entry passes, fast gate scanner app, and day-of-event schedule broadcasts.",
  },
  {
    title: "Real Estate Developers",
    icon: Building2,
    recommendedPlan: "Growth / Enterprise Tier",
    description: "Master project tower inventory ledger, automated site-visit slot booking with executive assignment, and RERA construction milestone demand notices.",
  },
  {
    title: "Real Estate Brokers & CPs",
    icon: Home,
    recommendedPlan: "Growth Tier",
    description: "Multi-developer inventory catalog search, 1-tap branded client WhatsApp proposal generation, and co-broking commission split tracking.",
  },
];

const setupDeliverables = [
  {
    day: "Day 01",
    phase: "Meta Infrastructure",
    items: [
      "Meta Business Manager official verification",
      "Green Tick eligibility audit & application",
      "Direct WhatsApp Cloud API provisioning",
    ],
  },
  {
    day: "Day 02",
    phase: "Database Architecture",
    items: [
      "Dedicated PostgreSQL schema configuration",
      "ACID transactional constraints setup",
      "Field-level customer phone number masking",
    ],
  },
  {
    day: "Day 03",
    phase: "Sector Workflows",
    items: [
      "Booking calendars & appointment locking",
      "Inventory decrement & dispatch registers",
      "Automated follow-ups & invoice links",
    ],
  },
  {
    day: "Day 04",
    phase: "Pipo AI & Integration",
    items: [
      "Spoken voice command parser training",
      "Bidirectional webhooks (Tally, Zoho, Shopify)",
      "Multi-agent collision lock configuration",
    ],
  },
  {
    day: "Day 05",
    phase: "Staging & Go-Live",
    items: [
      "Full simulated stress test on staging number",
      "15-minute staff voice onboarding session",
      "Production traffic switchboard launch",
    ],
  },
];

const pricingFaqs = [
  {
    q: "How are Meta WhatsApp Cloud charges billed?",
    a: "Meta charges are billed directly to your corporate credit card in your official Meta Business Manager account with zero markup or hidden platform fees from us. We pass through wholesale rates directly.",
  },
  {
    q: "What is included in the one-time turnkey setup fee?",
    a: "Our engineering team handles full Meta Business verification, official Green Tick consultation, relational database setup, staff voice workflow configuration, and 5-day turnkey system deployment.",
  },
  {
    q: "Are customer-initiated support conversations free?",
    a: "Yes. Meta provides free messaging windows for customer service inquiries inside the standard 24-hour window, as well as a 72-hour completely free window for Click-to-WhatsApp ad leads.",
  },
  {
    q: "Can we upgrade our tier or add extra team seats later?",
    a: "Yes. You can scale from Starter to Growth or Enterprise instantly without service interruptions or database migrations.",
  },
  {
    q: "Do our team members need technical coding skills to manage workflows?",
    a: "No. Staff interact with Pipo AI using natural voice commands in Hinglish or English, and business managers can configure or update workflows without touching code.",
  },
  {
    q: "Can we connect our existing ERP, CRM, or billing software?",
    a: "Yes. We support direct bidirectional webhooks and API connections into Tally, Zoho, Shopify, Petpooja, Salesforce, and custom PostgreSQL/MySQL databases.",
  },
];

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className="container">
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            Transparent plans, <br />
            <em className="italic-serif">zero marked-up credits.</em>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Pay a predictable platform subscription to us, plus official wholesale Meta rates billed directly to your card.
            Zero proprietary credit tokens, zero hidden conversation markups.
          </motion.p>
        </div>
      </section>

      {/* ─── PRICING CARDS GRID ─── */}
      <section className={`container ${styles.pricingCardsSection}`}>
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ""}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className={styles.price}>
                {plan.currency && <span className={styles.currency}>{plan.currency}</span>}
                <span className={styles.amount}>{plan.price}</span>
                {plan.period && <span className={styles.period}>{plan.period}</span>}
              </div>
              <p className={styles.planDesc}>{plan.desc}</p>

              <div className={styles.setupFeeBadge}>
                Setup: {plan.setupFee}
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={plan.popular ? "btn-primary" : "btn-secondary"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {plan.ctaLabel}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── 5-DAY TURNKEY SETUP DELIVERABLES ROADMAP ─── */}
      <section className={styles.roadmapSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.roadmapTag}>Onboarding Guarantee</span>
            <h2 className={styles.forestTitle} style={{ color: "var(--text-dark, #161616)" }}>
              5-Day Turnkey <em className="italic-serif">Deployment Deliverables</em>
            </h2>
            <p className={styles.forestSubtitle} style={{ color: "var(--text-dark-muted, #555)" }}>
              What our engineering team builds and delivers during your first five business days.
            </p>
          </motion.div>

          <div className={styles.roadmapGrid}>
            {setupDeliverables.map((d, dIdx) => (
              <motion.div
                key={d.day}
                className={styles.roadmapCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: dIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.roadmapDay}>{d.day}</div>
                <h3 className={styles.roadmapPhase}>{d.phase}</h3>
                <ul className={styles.roadmapList}>
                  {d.items.map((item, iIdx) => (
                    <li key={iIdx}>
                      <Check size={14} className={styles.roadmapCheck} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VERTICAL DEPLOYMENT BREAKDOWN ─── */}
      <section className={styles.verticalMatrixSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.forestTitle} style={{ color: "var(--text-dark, #161616)" }}>
              Deployment tiers for <em className="italic-serif">your business model.</em>
            </h2>
            <p className={styles.forestSubtitle} style={{ color: "var(--text-dark-muted, #555)" }}>
              Recommended configurations tailored to the operational volume and multi-seat requirements of our primary sectors.
            </p>
          </motion.div>

          <div className={styles.matrixGrid}>
            {verticalDeployments.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  className={styles.matrixCard}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.22 } }}
                >
                  <div className={styles.matrixIconWrap}>
                    <Icon size={22} />
                  </div>
                  <h3 className={styles.matrixCardTitle}>{v.title}</h3>
                  <p className={styles.matrixCardDesc}>{v.description}</p>
                  <div className={styles.matrixTierBadge}>{v.recommendedPlan}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── OFFICIAL META RATE CARD (DARK FOREST SECTION) ─── */}
      <section className="theme-forest rounded-top section-pad" style={{ marginTop: "-32px" }}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.forestTitle}>
              Official Meta <em className="italic-serif">Wholesale Rates</em>
            </h2>
            <p className={styles.forestSubtitle}>
              We never charge artificial markups or lock you into proprietary credit systems.
              You connect your Meta Business Manager, and Meta bills you directly:
            </p>
          </motion.div>

          <div className={styles.rateGrid}>
            {metaRateCards.map((item, i) => (
              <motion.div
                key={i}
                className={`${styles.rateCard} glass-panel glow-card`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.rateCategory}>{item.category}</div>
                <div className={styles.rateAmount}>{item.rate}</div>
                <div className={styles.rateNotes}>{item.notes}</div>
              </motion.div>
            ))}
          </div>

          <div className={styles.metaNotice}>
            <span>Rates reflect official Meta Cloud API India pricing. International destination tariffs apply when messaging non-Indian phone numbers.</span>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE ROI ESTIMATOR ─── */}
      <RoiCalculator />

      {/* ─── PRICING & ONBOARDING FAQ ACCORDION ─── */}
      <section className={styles.faqSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.forestTitle} style={{ color: "var(--text-dark, #161616)" }}>
              Frequently Asked <em className="italic-serif">Pricing Questions</em>
            </h2>
            <p className={styles.forestSubtitle} style={{ color: "var(--text-dark-muted, #555)" }}>
              Transparent answers regarding billing cycles, setup timelines, and Meta Cloud API costs.
            </p>
          </motion.div>

          <div className={styles.faqAccordionWrap}>
            {pricingFaqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className={styles.faqAccordionItem}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className={styles.faqAccordionTrigger}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqAccordionQuestion}>{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <ChevronDown size={18} className={styles.faqAccordionChevron} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.faqAccordionContent}
                      >
                        <p className={styles.faqAccordionAnswer}>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PRICING CTA ─── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.ctaTitle}>
              Need a custom <em className="italic-serif">enterprise rollout?</em>
            </h2>
            <p className={styles.ctaSubtitle}>
              We build custom webhook architectures, private VPC data pipelines, and ERP integrations for high-volume enterprises.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn-primary">
                Book Architecture Review <ArrowRight size={15} />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Browse Sector Playbooks
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
