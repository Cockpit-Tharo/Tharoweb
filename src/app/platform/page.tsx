"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import PlatformEngineExplorer from "@/components/PlatformEngineExplorer";
import TabbedMockup from "@/components/TabbedMockup";
import StackflowCards from "@/components/StackflowCards";
import FlowTransformer from "@/components/FlowTransformer";
import KineticParadigmShift from "@/components/KineticParadigmShift";
import { siteConfig } from "@/data/siteConfig";
import {
  Layers,
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  GitBranch,
  CheckCircle2,
  Lock,
  Server,
  Cpu,
  Clock,
  Sparkles,
  Smartphone,
  Workflow,
} from "lucide-react";

export default function PlatformPage() {
  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            The unified engine behind <br />
            <em className="italic-serif">every order, booking &amp; chat.</em>
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            A centralized multi-tenant ERP platform engineered specifically for modern Indian operations.
            Replaces fragmented spreadsheets, disconnected billing software, and siloed personal WhatsApp chats
            with one real-time operational core.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="#modules-explorer" className="btn-primary">
              <Zap size={16} />
              <span>Explore 6 Core Modules</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>Book Architecture Walkthrough</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── INTERACTIVE MODULES EXPLORER ─── */}
      <section id="modules-explorer" className={styles.explorerSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle}>
              Six unified engines, <em className="italic-serif">one dashboard.</em>
            </h2>
            <p className={styles.sectionSubtitle}>
              Explore the real software interfaces powering thousands of daily warehouse dispatches,
              staff shifts, appointment locks, and automated customer conversations.
            </p>
          </motion.div>

          <PlatformEngineExplorer />
        </div>
      </section>

      {/* ─── INTERACTIVE WORKSPACE MODULES ─── */}
      <TabbedMockup />

      {/* ─── DATA PIPELINE ARCHITECTURE ─── */}
      <section className={styles.pipelineSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle}>
              How data travels <em className="italic-serif">across your operations.</em>
            </h2>
            <p className={styles.sectionSubtitle}>
              From an incoming customer voice note on WhatsApp to inventory decrement and tax invoice dispatch,
              every step is executed with strict transaction guarantees.
            </p>
          </motion.div>

          <div className={styles.pipelineGrid}>
            <motion.div
              className={styles.pipelineCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className={styles.stepNum}>01</div>
              <div className={styles.pipelineIconBox}>
                <Smartphone size={22} />
              </div>
              <h3 className={styles.pipelineTitle}>Omnichannel Ingestion</h3>
              <p className={styles.pipelineDesc}>
                Inbound messages, staff voice commands, and webhooks enter through Meta Cloud API or the in-app microphone.
              </p>
              <div className={styles.pipelineFoot}>Webhook &middot; Voice Stream &middot; API</div>
            </motion.div>

            <motion.div
              className={styles.pipelineCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className={styles.stepNum}>02</div>
              <div className={styles.pipelineIconBox}>
                <Cpu size={22} />
              </div>
              <h3 className={styles.pipelineTitle}>Pipo AI Parser &amp; Gateway</h3>
              <p className={styles.pipelineDesc}>
                Processes natural language, validates catalog entities, checks agent collision guard, and enforces rate limiters.
              </p>
              <div className={styles.pipelineFoot}>Intent &amp; Entity Parsing</div>
            </motion.div>

            <motion.div
              className={styles.pipelineCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className={styles.stepNum}>03</div>
              <div className={styles.pipelineIconBox}>
                <Database size={22} />
              </div>
              <h3 className={styles.pipelineTitle}>Automated Operations Core</h3>
              <p className={styles.pipelineDesc}>
                Locks calendar slots, updates inventory records, and generates verified invoice vouchers instantly.
              </p>
              <div className={styles.pipelineFoot}>Central Database &middot; Zero Conflict</div>
            </motion.div>

            <motion.div
              className={styles.pipelineCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className={styles.stepNum}>04</div>
              <div className={styles.pipelineIconBox}>
                <Server size={22} />
              </div>
              <h3 className={styles.pipelineTitle}>Automated Outbound Sync</h3>
              <p className={styles.pipelineDesc}>
                Dispatches WhatsApp customer receipts with payment links, updates staff rosters, and exports to accounting ledgers.
              </p>
              <div className={styles.pipelineFoot}>Meta Cloud &middot; Tally &middot; Razorpay</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE WORKFLOW TRANSFORMER ─── */}
      <FlowTransformer />

      {/* ─── KINETIC HORIZONTAL PARADIGM SHIFT ─── */}
      <KineticParadigmShift />

      {/* ─── ENTERPRISE BENCHMARKS & SPECIFICATIONS ─── */}
      <section className={styles.specsSection}>
        <div className="container">
          <motion.div
            className={styles.specsCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.specsLeft}>
              <h2 className={styles.specsTitle}>
                Engineered for <em className="italic-serif">zero data loss.</em>
              </h2>
              <p className={styles.specsSubtitle}>
                Unlike hobbyist bot builders that break under high concurrency, Tharo Technologies provides
                enterprise-grade reliability and security standards for mission-critical Indian businesses.
              </p>

              <div className={styles.specsCheckList}>
                <div className={styles.specsCheckItem}>
                  <CheckCircle2 size={16} className={styles.specsCheckIcon} />
                  <div>
                    <strong>Direct Meta WhatsApp Cloud API</strong>
                    <p>Zero third-party reseller markups. Pass-through wholesale pricing directly to Meta.</p>
                  </div>
                </div>

                <div className={styles.specsCheckItem}>
                  <CheckCircle2 size={16} className={styles.specsCheckIcon} />
                  <div>
                    <strong>Tenant Schema Isolation</strong>
                    <p>Every business operates within its own encrypted database schema with hourly automated backups.</p>
                  </div>
                </div>

                <div className={styles.specsCheckItem}>
                  <CheckCircle2 size={16} className={styles.specsCheckIcon} />
                  <div>
                    <strong>Field-Level Customer Phone Masking</strong>
                    <p>Prevent rogue employees from copying customer phone lists or taking clients elsewhere.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.specsRight}>
              <div className={styles.metricCard}>
                <span className={styles.metricVal}>99.98%</span>
                <span className={styles.metricLabel}>Platform Availability SLA</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricVal}>Instant</span>
                <span className={styles.metricLabel}>Real-Time Data Sync</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricVal}>0%</span>
                <span className={styles.metricLabel}>WhatsApp Message Markup</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricVal}>5 Days</span>
                <span className={styles.metricLabel}>Turnkey Deployment Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STACKFLOW HORIZONTAL CARDS ─── */}
      <StackflowCards />

      {/* ─── FINAL CTA ─── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.ctaTitle}>
              Upgrade your business to an <em className="italic-serif">integrated operational core.</em>
            </h2>
            <p className={styles.ctaSubtitle}>
              Schedule a 30-minute system consultation with an engineer to design your custom database architecture.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn-primary">
                Book Architecture Walkthrough <ArrowRight size={15} />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Explore Industry Playbooks
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
