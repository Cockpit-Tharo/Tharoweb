"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import SectorIcon from "@/components/SectorIcon";
import LollipopCarousel from "@/components/LollipopCarousel";
import IntegrationMatrix from "@/components/IntegrationMatrix";
import { getAllSectors } from "@/data/sectors";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Clock, TrendingUp } from "lucide-react";

interface BenchmarkSector {
  id: string;
  name: string;
  setupDays: string;
  noShowDrop: string;
  hoursSaved: string;
  payback: string;
  primaryWorkflow: string;
  erpSync: string;
  badge: string;
}

const BENCHMARKS: BenchmarkSector[] = [
  {
    id: "dental",
    name: "Dental Clinics",
    setupDays: "5 Days",
    noShowDrop: "68% Drop",
    hoursSaved: "24 hrs/wk",
    payback: "18 Days",
    primaryWorkflow: "Multi-chair patient intake, token booking, and deposit settlement",
    erpSync: "Dentrix, Clinicea & Google Calendar",
    badge: "Healthcare Grade",
  },
  {
    id: "salons",
    name: "Luxury Salons & Spas",
    setupDays: "4 Days",
    noShowDrop: "74% Drop",
    hoursSaved: "28 hrs/wk",
    payback: "14 Days",
    primaryWorkflow: "Stylist calendar lock, auto reminders, and UPI advance collections",
    erpSync: "Zenoti, Salonist & POS Terminals",
    badge: "Multi-Chair Sync",
  },
  {
    id: "realty",
    name: "Real Estate Developers",
    setupDays: "5 Days",
    noShowDrop: "82% Lead SLA",
    hoursSaved: "35 hrs/wk",
    payback: "12 Days",
    primaryWorkflow: "Instant Meta ad lead capture, brochure dispatch, and site visit QR pass",
    erpSync: "Salesforce, HubSpot & Google Sheets",
    badge: "Enterprise Pipeline",
  },
  {
    id: "events",
    name: "Conferences & Summits",
    setupDays: "3 Days",
    noShowDrop: "94% Attendance",
    hoursSaved: "30 hrs/wk",
    payback: "Immediate",
    primaryWorkflow: "Instant WhatsApp RSVP, badge QR generation, and delegate check-in scan",
    erpSync: "Townscript, Eventbrite & PostgreSQL",
    badge: "High-Throughput",
  },
  {
    id: "logistics",
    name: "Logistics & Distribution",
    setupDays: "5 Days",
    noShowDrop: "54% NDR Drop",
    hoursSaved: "40 hrs/wk",
    payback: "21 Days",
    primaryWorkflow: "Automated address confirmation, live dispatch pin, and RTO avoidance",
    erpSync: "Shiprocket, Delhivery & SAP B1",
    badge: "Supply Chain",
  },
];

export default function SolutionsIndex() {
  const allSectors = getAllSectors();
  const [activeBenchmark, setActiveBenchmark] = useState(0);

  // Primary Flagship Verticals
  const flagshipIds = ["dental", "salons", "events", "real-estate-developers", "real-estate-brokers"];
  const flagshipSectors = allSectors.filter((s) => flagshipIds.includes(s.id));
  const standardSectors = allSectors.filter((s) => !flagshipIds.includes(s.id) && s.id !== "real-estate");

  const activeData = BENCHMARKS[activeBenchmark];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className={styles.title}>
              Industry Playbooks Built for <br />
              <em className="italic-serif">Daily Operations</em>
            </h1>
            <p className={styles.subtitle}>
              Ready workflows connecting front-desk WhatsApp chats, Pipo AI answers, and your back-office ERP ledgers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CROSS-SECTOR OPERATIONAL BENCHMARK MATRIX ─── */}
      <section className="container" style={{ marginBottom: "4.5rem" }}>
        <motion.div
          className={styles.benchmarkWrapper}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.benchmarkHeader}>
            <div className={styles.benchmarkHeaderLeft}>
              <span className={styles.sectionEyebrow}>Turnkey Performance</span>
              <h2 className={styles.benchmarkMainTitle}>
                Operational Benchmark Matrix
              </h2>
              <p className={styles.benchmarkSubtitle}>
                Measured metrics across deployed client environments within 30 days of launch.
              </p>
            </div>

            {/* Benchmark Sector Tabs */}
            <div className={styles.benchmarkTabs} role="tablist" aria-label="Select sector benchmark">
              {BENCHMARKS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeBenchmark === idx}
                  onClick={() => setActiveBenchmark(idx)}
                  className={`${styles.benchmarkTabBtn} ${
                    activeBenchmark === idx ? styles.benchmarkTabBtnActive : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Sector Scorecard */}
          <div className={styles.benchmarkCard}>
            <div className={styles.benchmarkGrid}>
              <div className={styles.benchmarkMetric}>
                <div className={styles.metricIconBox}>
                  <Zap size={18} />
                </div>
                <div className={styles.metricContent}>
                  <span className={styles.metricLabel}>Turnkey Setup Time</span>
                  <span className={styles.metricValue}>{activeData.setupDays}</span>
                  <span className={styles.metricSub}>Zero-code migration</span>
                </div>
              </div>

              <div className={styles.benchmarkMetric}>
                <div className={styles.metricIconBox}>
                  <TrendingUp size={18} />
                </div>
                <div className={styles.metricContent}>
                  <span className={styles.metricLabel}>Efficiency Lift</span>
                  <span className={styles.metricValue}>{activeData.noShowDrop}</span>
                  <span className={styles.metricSub}>Automated WhatsApp loop</span>
                </div>
              </div>

              <div className={styles.benchmarkMetric}>
                <div className={styles.metricIconBox}>
                  <Clock size={18} />
                </div>
                <div className={styles.metricContent}>
                  <span className={styles.metricLabel}>Staff Hours Saved</span>
                  <span className={styles.metricValue}>{activeData.hoursSaved}</span>
                  <span className={styles.metricSub}>Eliminating manual phone calls</span>
                </div>
              </div>

              <div className={styles.benchmarkMetric}>
                <div className={styles.metricIconBox}>
                  <ShieldCheck size={18} />
                </div>
                <div className={styles.metricContent}>
                  <span className={styles.metricLabel}>Full Payback Window</span>
                  <span className={styles.metricValue}>{activeData.payback}</span>
                  <span className={styles.metricSub}>Recovered booking revenue</span>
                </div>
              </div>
            </div>

            <div className={styles.benchmarkFooter}>
              <div className={styles.benchmarkWorkflowMeta}>
                <span className={styles.benchmarkTag}>{activeData.badge}</span>
                <span className={styles.workflowText}>{activeData.primaryWorkflow}</span>
              </div>
              <div className={styles.erpBadge}>
                <span className={styles.erpLabel}>Live Ledger Sync:</span>
                <span className={styles.erpVal}>{activeData.erpSync}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── FLAGSHIP SUITES ─── */}
      <section className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Primary Verticals</span>
          <h2 className={styles.sectionTitle}>
            Core Industry Suites <em className="italic-serif">with Pipo AI</em>
          </h2>
          <p className={styles.sectionSubtitle}>
            Live scheduling, stock tracking, and automated WhatsApp follow-ups ready for your team.
          </p>
        </div>

        <div className={styles.flagshipGrid}>
          {flagshipSectors.map((sector, i) => {
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                style={{ display: "flex", flex: 1 }}
              >
                <Link href={`/solutions/${sector.id}`} className={styles.flagshipCard}>
                  <div className={styles.flagshipHeader}>
                    <div className={styles.iconWrapper}>
                      <SectorIcon name={sector.iconName} size={22} />
                    </div>
                  </div>

                  <div className={styles.flagshipBody}>
                    <h3 className={styles.flagshipTitle}>{sector.name}</h3>
                    <p className={styles.flagshipDesc}>{sector.shortDesc}</p>

                    <ul className={styles.flagshipBulletList}>
                      {sector.whatWeBuild.slice(0, 3).map((item, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={15} className={styles.bulletCheck} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.flagshipFooter}>
                    <span>Explore Playbook &amp; Architecture</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── STANDARD INDUSTRY SUITES ─── */}
      <section className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Specialized Engines</span>
          <h2 className={styles.sectionTitle}>
            Tailored Automation for <em className="italic-serif">Targeted Sectors</em>
          </h2>
          <p className={styles.sectionSubtitle}>
            Pre-configured WhatsApp workflows and database integrations for specialized business models.
          </p>
        </div>

        <div className={styles.standardGrid}>
          {standardSectors.map((sector, i) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              style={{ display: "flex", flex: 1 }}
            >
              <Link href={`/solutions/${sector.id}`} className={styles.standardCard}>
                <div className={styles.iconWrapper}>
                  <SectorIcon name={sector.iconName} size={20} />
                </div>
                <h3 className={styles.standardTitle}>{sector.name}</h3>
                <p className={styles.standardDesc}>{sector.shortDesc}</p>
                <div className={styles.exploreLink}>
                  <span>View Sector Flow</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── AUTOMATION CAPSULES (LOLLIPOP CAROUSEL) ─── */}
      <section style={{ padding: "2rem 0 1rem" }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Interactive Demos</span>
            <h2 className={styles.sectionTitle}>
              Automations <em className="italic-serif">in motion.</em>
            </h2>
            <p className={styles.sectionSubtitle}>
              Swipe through automated workflows running for active businesses.
            </p>
          </div>
        </div>
        <LollipopCarousel />
      </section>

      {/* ─── UNIVERSAL SOFTWARE & CUSTOM DASHBOARD INTEGRATION HUB ─── */}
      <IntegrationMatrix />
    </>
  );
}
