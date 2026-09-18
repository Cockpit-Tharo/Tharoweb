"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";
import { CheckCircle2, ArrowLeft, MessageSquare } from "lucide-react";

type SectorData = {
  title: string;
  titleItalic: string;
  subtitle: string;
  painPoints: string;
  whatWeBuild: string[];
  automationFlow: string[];
  copyBlock: string;
};

const sectorData: Record<string, SectorData> = {
  salons: {
    title: "Salons & Spas",
    titleItalic: "Automated.",
    subtitle: "Run your salon from WhatsApp, not from ten different apps.",
    painPoints: "No-shows, no visibility into staff performance or commission, manual follow-ups, offers that never reach the right customer at the right time.",
    whatWeBuild: [
      "Custom CRM (customer history, preferences, visit frequency)",
      "Inventory management (retail + backbar stock)",
      "Staff management, salary processing, commission calculation",
      "Booking management with staff/slot allocation",
      "Offers & package builder"
    ],
    automationFlow: [
      "Customer books via WhatsApp chat → instant confirmation with stylist name and map link.",
      "24-hr and 2-hr reminder with reschedule/cancel buttons.",
      "Post-visit: automatic invoice + review request with a tracked link.",
      "30/45-day no-visit trigger → automated win-back message.",
      "Birthday/anniversary auto-broadcast with a personalized offer."
    ],
    copyBlock: "Booking, reminders, staff commissions, inventory, and review requests — one system, one WhatsApp number, zero no-shows you didn't see coming."
  },
  tally: {
    title: "Suppliers & Tally",
    titleItalic: "Connected.",
    subtitle: "Your Tally data, working on WhatsApp.",
    painPoints: "Manual invoice sharing, slow payment collection, no marketing channel to an existing customer base sitting inside Tally.",
    whatWeBuild: [
      "Tally ↔ WhatsApp bridge reading sales vouchers, ledgers, and balances",
      "Automated invoice + e-way bill delivery",
      "Escalating payment reminder sequence (7/15/30 days overdue)",
      "Monthly outstanding-statement broadcast"
    ],
    automationFlow: [
      "Voucher saved in Tally → invoice PDF pushed to customer instantly.",
      "Due-date crossed → Day 7 reminder → Day 15 firmer reminder → Day 30 escalation.",
      "Month-end → full outstanding ledger statement sent.",
      "Optional new stock/price-list broadcast to active customers."
    ],
    copyBlock: "Stop manually exporting invoices and chasing payments by phone. Connect your existing Tally ledgers and let automated reminders do the collection work."
  },
  logistics: {
    title: "Logistics",
    titleItalic: "Streamlined.",
    subtitle: "Cut 'where's my order' calls. Cut failed deliveries.",
    painPoints: "High support-call volume, non-delivery (NDR) losses, poor address confirmation leading to failed first-attempt deliveries.",
    whatWeBuild: [
      "Real-time shipment status updates",
      "Pre-delivery slot confirmation to reduce RTO",
      "COD collection confirmation",
      "Proof-of-delivery (POD) message with invoice attached",
      "NDR automated re-attempt scheduling via WhatsApp"
    ],
    automationFlow: [
      "Shipment booked → tracking link + expected delivery window.",
      "Out for delivery → rider name/number + live status.",
      "Delivery failed → NDR flow asks customer to confirm new slot on WhatsApp.",
      "Delivered → POD confirmation + invoice."
    ],
    copyBlock: "Real-time WhatsApp updates — from booked to delivered — plus automated re-scheduling when a delivery attempt fails."
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

export default function SectorPage({ params }: { params: { sector: string } }) {
  const data = sectorData[params.sector];

  if (!data) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <motion.div 
          className="container"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <Link href="/" className={styles.backLink}>
              <ArrowLeft size={16} /> Back to all industries
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="section-label" style={{ marginTop: '3rem' }}>
            Industry Playbook
          </motion.div>
          <motion.h1 variants={fadeUp} className={styles.title}>
            {data.title} <br />
            <em className="italic-serif">{data.titleItalic}</em>
          </motion.h1>
          <motion.p variants={fadeUp} className={styles.subtitle}>{data.subtitle}</motion.p>
          <motion.div variants={fadeUp} className={styles.heroCopy}>
            <p>{data.copyBlock}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── CONTENT GRID (DARK FOREST) ─── */}
      <section className="theme-forest rounded-top section-pad" style={{ paddingBottom: "10rem" }}>
        <motion.div 
          className={`container ${styles.contentGrid}`}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          <motion.div variants={fadeUp} className={`${styles.card} glass-panel glow-card`}>
            <h3>What We Build</h3>
            <p className={styles.painPoints}><strong>Solving:</strong> {data.painPoints}</p>
            <ul className={styles.featureList}>
              {data.whatWeBuild.map((feature, i) => (
                <li key={i}>
                  <div className={styles.checkIcon}><CheckCircle2 size={18} /></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className={`${styles.card} glass-panel glow-card`}>
            <h3>The WhatsApp Flow</h3>
            <div className={styles.flowList}>
              {data.automationFlow.map((step, i) => (
                <div key={i} className={styles.flowStep}>
                  <div className={styles.stepNumber}>{i + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* ─── CTA (LIGHT BEIGE) ─── */}
      <section className={styles.ctaSection}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>Ready to upgrade your <em className="italic-serif">{data.title}</em> business?</h2>
          <Link href="/contact" className="btn-primary" style={{ marginTop: '2.5rem' }}>
            <MessageSquare size={16} /> Book a Live Demo
          </Link>
        </motion.div>
      </section>
    </>
  );
}
