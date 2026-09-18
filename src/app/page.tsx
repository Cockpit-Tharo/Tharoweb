"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Scissors, Truck, FileSpreadsheet, Building2, ShoppingCart,
  Stethoscope, Home as HomeIcon, Car, Plane, Utensils, Headset, ArrowRight,
  MessageSquare, Zap
} from "lucide-react";
import styles from "./page.module.css";
import SocialProofMarquee from "@/components/SocialProofMarquee";
import WhatsAppSimulator from "@/components/WhatsAppSimulator";
import StatsSection from "@/components/StatsSection";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const sectors = [
  { id: "salons", name: "Salons & Spas", icon: Scissors, desc: "Automate bookings, no-shows, commissions & inventory." },
  { id: "tally", name: "Suppliers & Tally", icon: FileSpreadsheet, desc: "Instant invoice delivery and automated payment reminders." },
  { id: "logistics", name: "Logistics", icon: Truck, desc: "Real-time tracking, NDR management, and slot confirmations." },
  { id: "lead-management", name: "Lead Management", icon: Building2, desc: "Capture Meta ad leads and convert them over WhatsApp." },
  { id: "ecommerce", name: "E-commerce", icon: ShoppingCart, desc: "Cart recovery, order tracking, and post-purchase follow-ups." },
  { id: "hospitals", name: "Hospitals & Clinics", icon: Stethoscope, desc: "Appointment reminders, post-op follow-ups, and lab reports." },
  { id: "real-estate", name: "Real Estate", icon: HomeIcon, desc: "Property catalogs, site-visit scheduling, and document flow." },
  { id: "automobile", name: "Automobile", icon: Car, desc: "Service reminders, test drives, and vehicle pickup alerts." },
  { id: "travel", name: "Travel & Hotels", icon: Plane, desc: "Booking confirmations, check-in reminders, and review requests." },
  { id: "restaurants", name: "Restaurants", icon: Utensils, desc: "WhatsApp ordering, table reservations, and delivery updates." },
  { id: "customer-support", name: "Customer Support", icon: Headset, desc: "Automated ticketing with intelligent agent routing." },
];

const whyUs = [
  { icon: MessageSquare, title: "98% Open Rate", body: "WhatsApp messages get read. Email doesn't even come close." },
  { icon: Zap, title: "Live in Days", body: "We pre-build sector-specific flows. No months-long implementations." },
  { icon: FileSpreadsheet, title: "0% Hidden Markup", body: "Meta bills you directly. We charge a flat platform fee, nothing else." },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <motion.div
          className={`container ${styles.heroInner}`}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="section-label">
            The New Standard
          </motion.div>

          <motion.h1 variants={fadeUp} className={styles.heroTitle}>
            The WhatsApp Operating System <br />
            <em className="italic-serif">for modern business.</em>
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.heroSubtitle}>
            We engineer sector-specific CRM, booking flows, and automations
            entirely on WhatsApp — the app your customers never close.
          </motion.p>

          <motion.div variants={fadeUp} className={styles.heroCtas}>
            <Link href="/contact" className="btn-primary">
              Book a Live Demo
            </Link>
            <a
              href="https://your-vercel-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Our Web Portfolio ↗
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── MARQUEE ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <SocialProofMarquee />
      </motion.div>

      {/* ─── LIVE WHATSAPP SIMULATOR ─── */}
      <section className={styles.simulatorSection}>
        <div className="container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className={styles.sectionHead}
          >
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              See it working. <em className="italic-serif">Right now.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionSubtitle}>
              Watch real automation flows play out across 3 industries — no login required.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <WhatsAppSimulator />
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <StatsSection />

      {/* ─── WHY UNCOMPLIC8 (DARK FOREST SECTION) ─── */}
      <section className="theme-forest rounded-top section-pad">
        <div className="container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={styles.sectionHead}
          >
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Built for results, <em className="italic-serif">not demos.</em>
            </motion.h2>
          </motion.div>

          <motion.div
            className={styles.whyGrid}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp} className={`${styles.whyCard} glass-panel glow-card`}>
                  <div className={styles.whyIcon}><Icon size={22} /></div>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyBody}>{item.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── ALL SECTORS (CHARCOAL SECTION) ─── */}
      <section className="theme-dark rounded-top section-pad" style={{ marginTop: "-32px", paddingBottom: "10rem" }}>
        <div className="container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={styles.sectionHead}
          >
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Engineered for <em className="italic-serif">your industry.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionSubtitle}>
              Not generic automation — sector-specific playbooks with pre-built flows for 11+ verticals.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.sectorsGrid}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {sectors.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.id} variants={fadeUp}>
                  <Link href={`/solutions/${s.id}`} className={`${styles.sectorCard} glow-card`}>
                    <div className={styles.sectorIcon}><Icon size={20} /></div>
                    <h3 className={styles.sectorName}>{s.name}</h3>
                    <p className={styles.sectorDesc}>{s.desc}</p>
                    <span className={styles.sectorLink}>Explore <ArrowRight size={14} /></span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className={styles.ctaBanner}>
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className={styles.ctaTitle}>
            Ready to <em className="italic-serif">uncomplicate</em> your business?
          </h2>
          <p className={styles.ctaBody}>
            No hidden credits. No long implementation timelines. Go live in days, not months.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className="btn-primary">Book a Free Demo</Link>
            <Link href="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
