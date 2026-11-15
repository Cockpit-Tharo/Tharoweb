"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import CollapsingStepsCards from "@/components/CollapsingStepsCards";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  ExternalLink,
  Database,
  Cpu,
  Server,
  Lock,
  GitCommit,
  Workflow,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/siteConfig";

const iconMap = [ShieldCheck, Layers, Zap];

const techStack = [
  {
    title: "Central Operational Database",
    icon: Database,
    desc: "When a clinic chair is reserved or a warehouse item is deducted, records update across all team screens instantly with zero conflict.",
  },
  {
    title: "Official Meta Cloud API",
    icon: Server,
    desc: "Direct connection to official WhatsApp Cloud APIs. Zero middleman aggregators, zero message markups, and reliable delivery.",
  },
  {
    title: "Pipo AI Operations Copilot",
    icon: Cpu,
    desc: "Built for Indian commerce. Understands natural spoken Hindi and Hinglish commands, updates schedules, and reads customer messages.",
  },
  {
    title: "Isolated Business Data Security",
    icon: Lock,
    desc: "Strict database separation. Your patient clinical notes, salon client lists, and pricing remain completely private and isolated.",
  },
];

const engineeringCommandments = [
  {
    number: "01",
    title: "WhatsApp is the Front-End, Verified Data is the Core",
    desc: "We never store critical operational state in conversational message logs. Every chat message maps directly to a verified customer record with zero data loss.",
  },
  {
    number: "02",
    title: "Zero Message Markups, Wholesale Direct",
    desc: "We refuse the industry standard of marking up WhatsApp conversations. Clients link their official Meta Business Manager directly and pay wholesale rates without hidden fees.",
  },
  {
    number: "03",
    title: "Deterministic State Over Brittle Prompts",
    desc: "Customer bookings, payment links, and inventory decrements are controlled by rigorous state machines. AI assists with parsing; code guarantees correctness.",
  },
  {
    number: "04",
    title: "Staff Ergonomics: Spoken Actions Over Forms",
    desc: "Frontline staff should never fight complex 10-step administrative menus. One voice note or WhatsApp command updates schedules, ledgers, and customer statuses.",
  },
  {
    number: "05",
    title: "Multi-Screen Collision Guard",
    desc: "When two staff members or automated triggers interact with the same customer chat, our collision lock prevents double replies and keeps communication synchronized.",
  },
  {
    number: "06",
    title: "5-Day Turnkey Delivery Guarantee",
    desc: "We do not sell 6-month consulting engagements. We configure, verify, connect, and launch sector-specific operational systems within five business days.",
  },
];

const timelineMilestones = [
  {
    phase: "Phase 01 · Origin",
    title: "The Problem with WhatsApp Agencies",
    detail: "Observing Indian businesses lose 30%+ of revenue due to unanswered chats, messy personal phones, and disconnected desktop billing software.",
  },
  {
    phase: "Phase 02 · Core Engine",
    title: "Relational Ledger Architecture",
    detail: "Building a secure multi-tenant core that syncs directly with official WhatsApp messaging in real time.",
  },
  {
    phase: "Phase 03 · Sector Playbooks",
    title: "Vertical-Specific Operational Suites",
    detail: "Tailoring deterministic workflows for Dental Odontograms, Salon Chairs, Real Estate Tower Ledgers, and Gate QR Pass Scanners.",
  },
  {
    phase: "Phase 04 · Pipo Voice AI",
    title: "Spoken Commands for Busy Frontlines",
    detail: "Enabling doctors, stylists, and warehouse managers to run database workflows using natural voice notes in Hinglish and Hindi.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── ABOUT HERO ─── */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroBrandBadge}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/tharo-emblem-dark.png"
              alt="Tharo Technologies Official Studio Mark"
              width={110}
              height={110}
              className={styles.heroBrandImg}
              priority
            />
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {aboutData.hero.title} <br />
            <em className="italic-serif">{aboutData.hero.titleItalic}</em>
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {aboutData.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ─── THE 3 PILLARS (FOREST THEME) ─── */}
      <section className="theme-forest rounded-top section-pad">
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle}>
              Our Three <em className="italic-serif">Core Pillars</em>
            </h2>
            <p className={styles.sectionSubtitle}>
              The engineering principles that separate Tharo Technologies from marketing agencies and generic bot builders.
            </p>
          </motion.div>

          <div className={styles.pillarsGrid}>
            {aboutData.pillars.map((pillar, i) => {
              const Icon = iconMap[i] || Zap;
              return (
                <motion.div
                  key={pillar.number}
                  className={`${styles.pillarCard} glass-panel glow-card`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div className={styles.pillarHeader}>
                    <span className={styles.pillarNum}>{pillar.number}</span>
                    <div className={styles.pillarIcon}>
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <div className={styles.pillarSub}>{pillar.subtitle}</div>
                  <p className={styles.pillarDesc}>{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ARCHITECTURAL MANIFESTO & COMMANDMENTS ─── */}
      <section className={styles.manifestoSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.manifestoTag}>Studio Philosophy</span>
            <h2 className={styles.sectionTitle} style={{ color: "var(--text-dark, #161616)" }}>
              Six Studio <em className="italic-serif">Commandments</em>
            </h2>
            <p className={styles.sectionSubtitle} style={{ color: "var(--text-dark-muted, #555)" }}>
              The architectural rules that govern how we build, deploy, and safeguard business software.
            </p>
          </motion.div>

          <div className={styles.commandmentGrid}>
            {engineeringCommandments.map((cmd, idx) => (
              <motion.div
                key={cmd.number}
                className={styles.commandmentCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={styles.cmdNumRow}>
                  <span className={styles.cmdNumber}>{cmd.number}</span>
                  <div className={styles.cmdIndicator} />
                </div>
                <h3 className={styles.cmdTitle}>{cmd.title}</h3>
                <p className={styles.cmdDesc}>{cmd.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE ARCHITECTURE STACK ─── */}
      <section className="section-pad" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle} style={{ color: "var(--text-dark, #161616)" }}>
              The Engineering <em className="italic-serif">Stack</em>
            </h2>
            <p className={styles.sectionSubtitle} style={{ color: "var(--text-dark-muted, #555)" }}>
              Modern enterprise infrastructure designed specifically for high-concurrency Indian business operations.
            </p>
          </motion.div>

          <div className={styles.techGrid}>
            {techStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={idx}
                  className={styles.techCard}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.22 } }}
                >
                  <div className={styles.techTopRow}>
                    <div className={styles.techIconWrap}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className={styles.techTitle}>{tech.title}</h3>
                  <p className={styles.techDesc}>{tech.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── OPERATIONAL EVOLUTION TIMELINE ─── */}
      <section className={styles.timelineSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle} style={{ color: "var(--text-dark, #161616)" }}>
              Our <em className="italic-serif">Evolution</em>
            </h2>
            <p className={styles.sectionSubtitle} style={{ color: "var(--text-dark-muted, #555)" }}>
              How we transformed from an agency building manual bots into a high-concurrency software platform.
            </p>
          </motion.div>

          <div className={styles.milestoneGrid}>
            {timelineMilestones.map((m, idx) => (
              <motion.div
                key={m.phase}
                className={styles.milestoneCard}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.milestoneHead}>
                  <GitCommit size={18} className={styles.milestoneIcon} />
                  <span className={styles.milestonePhase}>{m.phase}</span>
                </div>
                <h3 className={styles.milestoneTitle}>{m.title}</h3>
                <p className={styles.milestoneDetail}>{m.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE 5-DAY TURNKEY ONBOARDING ─── */}
      <section id="turnkey" style={{ backgroundColor: "var(--bg-beige, #F7F6EC)", padding: "5rem 0 6.5rem", scrollMarginTop: "6rem" }}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle} style={{ color: "var(--text-dark, #161616)" }}>
              Go live <em className="italic-serif">in 5 days.</em>
            </h2>
            <p className={styles.sectionSubtitle} style={{ color: "var(--text-dark-muted, #555)" }}>
              Setup, Meta verification, and team training finished in a week.
            </p>
          </motion.div>
          <CollapsingStepsCards />
        </div>
      </section>

      {/* ─── ENGINEERING OVER HYPE ─── */}
      <section className="theme-dark rounded-top section-pad" style={{ marginTop: "-32px" }}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle}>
              Engineering <em className="italic-serif">over hype.</em>
            </h2>
            <p className={styles.sectionSubtitle}>
              How we build reliable business software that your team actually uses every day.
            </p>
          </motion.div>

          <div className={styles.valuesGrid}>
            {aboutData.values.map((val, idx) => (
              <motion.div
                key={val.title}
                className={`${styles.valueCard} glow-card`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.valueDesc}>{val.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Web Studio Portfolio Callout */}
          <motion.div
            className={styles.portfolioBanner}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                Need custom web development alongside WhatsApp?
              </h3>
              <p style={{ color: "var(--text-light-muted)", fontSize: "0.95rem" }}>
                We also build lightning-fast web applications, conversion-focused landing pages, and technical SEO architectures.
              </p>
            </div>
            <a
              href={siteConfig.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ whiteSpace: "nowrap" }}
            >
              Our Creative Side <ExternalLink size={15} />
            </a>
          </motion.div>
        </div>
      </section>

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
              Let's build your <em className="italic-serif">system.</em>
            </h2>
            <p className={styles.ctaSubtitle}>
              Schedule a conversation with our engineering team to design your sector flow.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn-primary">
                Book a Free Discovery Call
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Browse All Solutions <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
