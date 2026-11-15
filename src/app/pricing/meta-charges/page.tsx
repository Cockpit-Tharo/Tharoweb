"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Clock,
  Zap,
  Lock,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import styles from "./page.module.css";
import {
  metaCategories,
  aggregatorComparison,
  billingSteps,
  countryRates,
  metaChargesFaqs,
} from "@/data/metaPricing";

export default function MetaChargesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className="container">
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link href="/pricing" className={styles.breadcrumbLink}>
              Pricing
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>Meta Charges & 0% Markup</span>
          </nav>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            How Meta charges for WhatsApp, <br />
            <em className="italic-serif">and why Tharo takes 0% markup.</em>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            How pricing works: You pay a predictable platform fee for our software and automation engine. Rest, Meta charges you directly per message you send at published wholesale rates with 0% markup from us.
          </motion.p>

          {/* 4 Pillars Stat Grid */}
          <motion.div
            className={styles.heroStatsGrid}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.heroStatCard}>
              <div className={styles.heroStatHeader}>
                <div className={styles.heroStatIconWrap}>
                  <Zap size={18} />
                </div>
                <span className={styles.heroStatTag}>Pass-Through</span>
              </div>
              <div className={styles.heroStatValue}>0% Markup</div>
              <p className={styles.heroStatLabel}>
                Zero commission or per-message surcharge taken on your delivery volume.
              </p>
            </div>

            <div className={styles.heroStatCard}>
              <div className={styles.heroStatHeader}>
                <div className={styles.heroStatIconWrap}>
                  <CreditCard size={18} />
                </div>
                <span className={styles.heroStatTag}>Direct Billing</span>
              </div>
              <div className={styles.heroStatValue}>Direct Card</div>
              <p className={styles.heroStatLabel}>
                Meta bills your company card directly. Valid 18% GST tax invoice issued by Meta.
              </p>
            </div>

            <div className={styles.heroStatCard}>
              <div className={styles.heroStatHeader}>
                <div className={styles.heroStatIconWrap}>
                  <Lock size={18} />
                </div>
                <span className={styles.heroStatTag}>Ownership</span>
              </div>
              <div className={styles.heroStatValue}>100% Yours</div>
              <p className={styles.heroStatLabel}>
                You permanently own your WABA, phone number, green badge, and customer list.
              </p>
            </div>

            <div className={styles.heroStatCard}>
              <div className={styles.heroStatHeader}>
                <div className={styles.heroStatIconWrap}>
                  <Clock size={18} />
                </div>
                <span className={styles.heroStatTag}>Transparency</span>
              </div>
              <div className={styles.heroStatValue}>₹0 Expiry</div>
              <p className={styles.heroStatLabel}>
                No proprietary tokens, no credit top-ups that expire. Pay strictly for delivered chats.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4 OFFICIAL CONVERSATION CATEGORIES ─── */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              The 4 Meta WhatsApp <em className="italic-serif">Conversation Categories</em>
            </h2>
            <p className={styles.sectionDesc}>
              Meta categorizes WhatsApp Business Platform conversations into four distinct buckets.
              Charges apply per 24-hour conversation window, not per individual back-and-forth bubble.
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {metaCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                className={styles.categoryCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.categoryTop}>
                  <div>
                    <h3 className={styles.categoryTitle}>{cat.name}</h3>
                    <span className={styles.categoryTag}>{cat.tag}</span>
                  </div>
                  <div className={styles.categoryRateBadge}>{cat.rateIndia}</div>
                </div>

                <div className={styles.categoryMetaDetails}>
                  <span className={styles.categoryMetaPill}>
                    <MessageSquare size={12} />
                    <span>{cat.whoInitiates}</span>
                  </span>
                  <span className={styles.categoryMetaPill}>
                    <Clock size={12} />
                    <span>{cat.windowDuration}</span>
                  </span>
                </div>

                <p className={styles.categoryDesc}>{cat.description}</p>

                <div className={styles.examplesHeader}>Real-world examples:</div>
                <ul className={styles.examplesList}>
                  {cat.examples.map((ex, exIdx) => (
                    <li key={exIdx}>
                      <CheckCircle2 size={15} className={styles.exampleCheck} />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON MATRIX: THARO VS AGGREGATORS ─── */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              Tharo Direct Pass-Through vs. <em className="italic-serif">Traditional Resellers</em>
            </h2>
            <p className={styles.sectionDesc}>
              Most WhatsApp providers (Wati, AiSensy, Interakt, Gallabox) operate as resellers, charging substantial
              markups on top of Meta's rates or trapping your working capital in proprietary wallet tokens.
            </p>
          </div>

          <div className={styles.comparisonTableWrap}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.thDimension}>Feature / Dimension</th>
                  <th className={styles.thTharo}>Tharo Technologies (Direct Pass-Through)</th>
                  <th className={styles.thResellers}>Traditional Resellers & Aggregators</th>
                </tr>
              </thead>
              <tbody>
                {aggregatorComparison.map((row, rIdx) => (
                  <tr key={rIdx} className={styles.comparisonRow}>
                    <td className={styles.tdDimension}>{row.dimension}</td>
                    <td className={styles.tdTharo}>
                      <div className={styles.tharoBadgeCol}>
                        <CheckCircle2 size={16} className={styles.checkAdvantage} />
                        <div>
                          <div>{row.tharoModel}</div>
                          <div className={styles.tharoSubNotes}>{row.notes}</div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.tdResellers}>
                      <div className={styles.resellerBadgeCol}>
                        <XCircle size={16} className={styles.crossWarning} />
                        <div>{row.resellerModel}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 4-STEP DIRECT BILLING WORKFLOW ─── */}
      <section className={styles.billingSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} style={{ color: "#FFFFFF" }}>
              The Direct Meta Billing <em className="italic-serif">Workflow</em>
            </h2>
            <p className={styles.sectionDesc} style={{ color: "rgba(255, 255, 255, 0.75)" }}>
              You maintain total custody of your financial credentials. Tharo never acts as a middleman or charges
              convenience fees for conversation billing.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {billingSteps.map((step) => (
              <motion.div
                key={step.stepNumber}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.stepNum}>{step.stepNumber}</div>
                <h3 className={styles.stepHeading}>{step.title}</h3>
                <p className={styles.stepBody}>{step.description}</p>
                <div className={styles.stepTimeBadge}>{step.timeEstimate}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MULTI-COUNTRY OFFICIAL RATE CARD ─── */}
      <section className={styles.ratesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              Official Meta Cloud API <em className="italic-serif">Tariff Schedule</em>
            </h2>
            <p className={styles.sectionDesc}>
              Meta conversation charges are determined by the recipient country phone code.
              Below are official baseline tariffs across our primary customer markets.
            </p>
          </div>

          <div className={styles.ratesTableWrap}>
            <table className={styles.ratesTable}>
              <thead>
                <tr>
                  <th>Country / Market</th>
                  <th>Utility Conversations</th>
                  <th>Marketing Conversations</th>
                  <th>Inbound Service Chats</th>
                  <th>Click-to-WhatsApp Ads</th>
                </tr>
              </thead>
              <tbody>
                {countryRates.map((c) => (
                  <tr key={c.code}>
                    <td>
                      <div className={styles.countryCell}>
                        <span className={styles.countryFlag}>{c.flag}</span>
                        <span>{c.country} ({c.currency})</span>
                      </div>
                    </td>
                    <td>
                      <span className={styles.ratePillUtility}>{c.utilityRate} / msg</span>
                    </td>
                    <td>
                      <span className={styles.ratePillMarketing}>{c.marketingRate} / msg</span>
                    </td>
                    <td>
                      <span className={styles.ratePillFree}>{c.serviceWindow}</span>
                    </td>
                    <td>
                      <span className={styles.ratePillFree}>{c.adWindow}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── FREQUENTLY ASKED QUESTIONS ─── */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions About <em className="italic-serif">Meta Charges</em>
            </h2>
            <p className={styles.sectionDesc}>
              Everything you need to know about invoices, conversation windows, GST input tax credits, and account custody.
            </p>
          </div>

          <div className={styles.faqAccordionWrap}>
            {metaChargesFaqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className={styles.faqAccordionItem}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className={styles.faqAccordionTrigger}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
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

      {/* ─── CTA SECTION ─── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>
            Ready to deploy on <em className="italic-serif">official Meta Cloud API?</em>
          </h2>
          <p className={styles.ctaSubtitle}>
            Experience sub-second delivery latency, zero marked-up conversation credits, and full WABA account custody.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/pricing#calculator" className="btn-primary">
              Estimate Your ROI on the Calculator <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a 15-Minute Architecture Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
