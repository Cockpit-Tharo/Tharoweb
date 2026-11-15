"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import PipoVoiceSimulator from "@/components/PipoVoiceSimulator";
import { siteConfig } from "@/data/siteConfig";
import {
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Mic,
  MessageSquare,
  Sparkles,
  Volume2,
} from "lucide-react";

const commandExamples = [
  {
    sector: "Dental Clinic",
    id: "dental",
    voiceNote: "Book Dr. Mehta for Mrs. Kapoor tomorrow at 4 PM for root canal sitting.",
    parsedAction: "Appointment Locked",
    detail: "Operatory 2 reserved. Calendar sync sent to Dr. Mehta. WhatsApp confirmation sent to Mrs. Kapoor.",
    telemetry: "0.42s Execution",
  },
  {
    sector: "Salon & Spa",
    id: "salon",
    voiceNote: "Priya stylist ko Saturday 11 AM hair spa ke liye block karo, ₹500 advance link bhejo.",
    parsedAction: "Slot & Advance Link",
    detail: "Stylist chair blocked. Razorpay UPI deposit link dispatched on WhatsApp to eliminate no-show.",
    telemetry: "0.38s Execution",
  },
  {
    sector: "Real Estate",
    id: "realty",
    voiceNote: "Log site visit for Vikram Singh at Tower B Villa 402 Saturday 3 PM. Assign Neha.",
    parsedAction: "Lead & Advisor Alert",
    detail: "Tower B ledger updated. Senior advisor Neha S. notified. Branded digital visitor pass sent.",
    telemetry: "0.45s Execution",
  },
  {
    sector: "Order Logistics",
    id: "logistics",
    voiceNote: "Order 4821 ko 3 din ke liye hold pe dalo, customer ko pickup code bhejo.",
    parsedAction: "Inventory Hold Locked",
    detail: "Hub shelf slot reserved. Pickup pin 4821 and location map dispatched via WhatsApp.",
    telemetry: "0.34s Execution",
  },
];

export default function PipoVoicePage() {
  const [activeCmdIdx, setActiveCmdIdx] = useState(0);

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
            Ask questions. Speak workflows. <br />
            <em className="italic-serif">Pipo AI runs your operations.</em>
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            Pipo AI is the central intelligence of your business. Ask it plain questions about system numbers
            to summarize what was weak or strong, run complex workflows through natural voice commands,
            and let it automatically read, pre-fill, and reply to customer WhatsApp messages.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="#interactive-simulator" className="btn-primary">
              <Zap size={16} />
              <span>Try Interactive Simulator</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>Book Architecture Walkthrough</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Voice Wave Visualizer Strip */}
          <motion.div
            className={styles.soundwaveWrap}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.soundwaveInner}>
              <div className={styles.micPulse}>
                <Mic size={18} />
              </div>
              <div className={styles.waveBars}>
                {[40, 70, 30, 90, 60, 100, 45, 80, 55, 95, 35, 75, 50, 85, 65].map((h, i) => (
                  <span
                    key={i}
                    className={styles.waveBar}
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                ))}
              </div>
              <span className={styles.waveStatus}>Listening for Hinglish, Hindi &amp; English</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4 SUPERPOWERS OF PIPO AI ─── */}
      <section className={styles.architectureSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle}>
              Four jobs handled by <em className="italic-serif">one assistant.</em>
            </h2>
            <p className={styles.sectionSubtitle}>
              Pipo AI connects team WhatsApp chats to your live database so owners, managers, and staff work faster.
            </p>
          </motion.div>

          <div className={styles.archGrid}>
            {/* 01: Business Q&A Analytics */}
            <motion.div
              className={styles.archCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className={styles.archIconBox}>
                <BarChart3 size={22} />
              </div>
              <span className={styles.archStep}>01 · Business Q&amp;A</span>
              <h3 className={styles.archCardTitle}>Ask About Daily Numbers</h3>
              <p className={styles.archCardDesc}>
                Ask &quot;What worked and what dropped this week?&quot; to get instant summaries of revenue, cancellations, and stock levels.
              </p>
              <div className={styles.archTag}>Live Reporting</div>
            </motion.div>

            {/* 02: Voice Command Workflows */}
            <motion.div
              className={styles.archCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className={styles.archIconBox}>
                <Mic size={22} />
              </div>
              <span className={styles.archStep}>02 · Voice Commands</span>
              <h3 className={styles.archCardTitle}>Speak Workflows Out Loud</h3>
              <p className={styles.archCardDesc}>
                Speak commands in Hindi, English, or Hinglish to update records or create reminders without opening menus.
              </p>
              <div className={styles.archTag}>Voice Input</div>
            </motion.div>

            {/* 03: WhatsApp Autopilot & Auto-Read */}
            <motion.div
              className={styles.archCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.23, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className={styles.archIconBox}>
                <MessageSquare size={22} />
              </div>
              <span className={styles.archStep}>03 · Auto-Read &amp; Draft</span>
              <h3 className={styles.archCardTitle}>Draft or Send Replies 24/7</h3>
              <p className={styles.archCardDesc}>
                Reads incoming WhatsApp messages, checks open slots or stock, and drafts a reply or answers right away.
              </p>
              <div className={styles.archTag}>WhatsApp Replies</div>
            </motion.div>

            {/* 04: 5-Second Fail-Safe Safeguard */}
            <motion.div
              className={styles.archCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className={styles.archIconBox}>
                <ShieldCheck size={22} />
              </div>
              <span className={styles.archStep}>04 · Undo Window</span>
              <h3 className={styles.archCardTitle}>5-Second Undo Safeguard</h3>
              <p className={styles.archCardDesc}>
                Every voice action shows on screen first so your team can press Escape or Undo before saving changes.
              </p>
              <div className={styles.archTag}>Staff Review</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SPOKEN COMMAND LIBRARY ─── */}
      <section className={styles.commandLibrarySection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle}>
              Real Spoken Commands <em className="italic-serif">in Natural Language</em>
            </h2>
            <p className={styles.sectionSubtitle}>
              Select a vertical to see how natural voice notes are transformed into verified database actions.
            </p>
          </motion.div>

          <div className={styles.cmdTabStrip}>
            {commandExamples.map((cmd, idx) => (
              <button
                key={cmd.id}
                type="button"
                onClick={() => setActiveCmdIdx(idx)}
                className={`${styles.cmdTabBtn} ${activeCmdIdx === idx ? styles.cmdTabBtnActive : ""}`}
              >
                {cmd.sector}
              </button>
            ))}
          </div>

          <motion.div
            key={commandExamples[activeCmdIdx].id}
            className={styles.cmdCardActive}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.cmdVoiceBubble}>
              <div className={styles.cmdVoiceIcon}>
                <Volume2 size={18} />
              </div>
              <div className={styles.cmdVoiceText}>
                <span className={styles.cmdVoiceLabel}>Spoken Voice Command:</span>
                <p>&ldquo;{commandExamples[activeCmdIdx].voiceNote}&rdquo;</p>
              </div>
            </div>

            <div className={styles.cmdExecutionRow}>
              <div className={styles.cmdActionBox}>
                <div className={styles.cmdActionTag}>{commandExamples[activeCmdIdx].parsedAction}</div>
                <p className={styles.cmdActionDetail}>{commandExamples[activeCmdIdx].detail}</p>
              </div>
              <div className={styles.cmdTelemetryPill}>
                {commandExamples[activeCmdIdx].telemetry}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── INTERACTIVE SIMULATOR SECTION ─── */}
      <section id="interactive-simulator" className={styles.simulatorSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle}>
              Experience Pipo Voice <em className="italic-serif">in action.</em>
            </h2>
            <p className={styles.sectionSubtitle}>
              Select an industry scenario below to see how spoken voice commands are parsed and committed directly to your business ledger.
            </p>
          </motion.div>

          <PipoVoiceSimulator />
        </div>
      </section>

      {/* ─── COMPARISON MATRIX: PIPO VS MANUAL FORMS ─── */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle}>
              Pipo AI <em className="italic-serif">vs. traditional desktop software.</em>
            </h2>
            <p className={styles.sectionSubtitle}>
              How speaking commands and asking questions replaces navigating through dozens of forms and menus.
            </p>
          </motion.div>

          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Operational Task</th>
                  <th>Traditional Form Process</th>
                  <th>Pipo AI Spoken Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Executive Business Analysis</strong>
                    <span className={styles.tableSub}>Weekly performance, weak spots, revenue</span>
                  </td>
                  <td data-label="Traditional Software">
                    Export 4 separate CSVs &rarr; combine in Excel &rarr; calculate chair utilization &rarr; manually inspect no-show rates.
                  </td>
                  <td data-label="Pipo AI Spoken Action">
                    Ask Pipo: <em>&quot;What was weak and strong in clinic numbers this week?&quot;</em>
                    <span className={styles.tableSub}>Clear summary: Operatory 1 at 91% capacity; Operatory 3 had 35% idle time; recall confirmation at 68%.</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>Booking Patient / Client Slot</strong>
                    <span className={styles.tableSub}>Date, doctor or stylist, procedure</span>
                  </td>
                  <td data-label="Traditional Software">
                    Open calendar &rarr; select staff member &rarr; find available slot &rarr; fill customer details &rarr; save &rarr; copy confirmation to WhatsApp.
                  </td>
                  <td data-label="Pipo AI Spoken Action">
                    Tap Alt + V: <em>&quot;Book appointment for Mrs. Ananya with Dr. Mehta tomorrow at 4 PM.&quot;</em>
                    <span className={styles.tableSub}>Slot reserved on calendar and confirmation dispatched to customer.</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>Warehouse Stock Dispatch</strong>
                    <span className={styles.tableSub}>SKU balance check, batch deduct, delivery docket</span>
                  </td>
                  <td data-label="Traditional Software">
                    Log into terminal &rarr; search SKU &rarr; open stock adjustment ledger &rarr; manually enter quantity &rarr; check threshold &rarr; print docket.
                  </td>
                  <td data-label="Pipo AI Spoken Action">
                    Tap Alt + V: <em>&quot;Dispatched 50 units of Model-A hydraulic valves to Peenya.&quot;</em>
                    <span className={styles.tableSub}>50 units deducted from live database; low-stock threshold alert triggered; dispatch log sent to manager.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.ctaTitle}>
              Test Pipo AI on your <em className="italic-serif">real business flows.</em>
            </h2>
            <p className={styles.ctaSubtitle}>
              Bring your messiest spreadsheets, common WhatsApp customer inquiries, and staff bottlenecks to a live 30-minute system test.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn-primary">
                Book Architecture Review <ArrowRight size={15} />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Explore Sector Playbooks
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
