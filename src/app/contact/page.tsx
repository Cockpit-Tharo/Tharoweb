"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { ScrollableTabs } from "@/components/ScrollableTabs";
import {
  MessageSquare,
  Mail,
  Clock,
  CheckCircle2,
  Shield,
  Lock,
  Stethoscope,
  Scissors,
  Calendar,
  Building2,
  Home,
  Sparkles,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getAllSectors } from "@/data/sectors";

const quickSectors = [
  { name: "Dental Clinics", icon: Stethoscope },
  { name: "Salons & Luxury Spas", icon: Scissors },
  { name: "Events & RSVPs", icon: Calendar },
  { name: "Real Estate Developers", icon: Building2 },
  { name: "Real Estate Brokers", icon: Home },
];

export default function ContactPage() {
  const sectors = getAllSectors();
  const [businessName, setBusinessName] = useState("");
  const [selectedSector, setSelectedSector] = useState(sectors[0].name);
  const [customGoal, setCustomGoal] = useState("");

  const generatedMessage = encodeURIComponent(
    `Hi Tharo Technologies team! I am ${
      businessName.trim() ? `from ${businessName.trim()}` : "interested in your services"
    }. We are in the ${selectedSector} industry and want to explore WhatsApp automation for: ${
      customGoal.trim() || "lead qualification, bookings, and ERP operations"
    }.`
  );

  const directWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${generatedMessage}`;

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's talk <em className="italic-serif">numbers and flows.</em>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            Connect directly with an engineer to audit your customer journey, review system requirements,
            and design your custom WhatsApp automation.
          </motion.p>
        </div>
      </section>

      <section className={`container ${styles.contactMainSection}`}>
        {/* Quick Vertical Selector Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          <ScrollableTabs
            tone="beige"
            className={styles.quickSectorShell}
            trackClassName={styles.quickSectorBar}
            role="tablist"
            ariaLabel="Business verticals"
          >
            {quickSectors.map((qs) => {
              const Icon = qs.icon;
              const isSelected = selectedSector === qs.name;
              return (
                <button
                  key={qs.name}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedSector(qs.name)}
                  className={`${styles.quickSectorBtn} ${isSelected ? styles.quickSectorBtnActive : ""}`}
                >
                  <Icon size={14} />
                  <span>{qs.name}</span>
                </button>
              );
            })}
          </ScrollableTabs>
        </motion.div>

        <div className={styles.contactGrid}>
          {/* Left Column: Interactive WhatsApp Message Builder */}
          <motion.div
            className={styles.builderCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.builderHeader}>
              <div className={styles.builderIcon}>
                <Image
                  src="/images/tharo-emblem-light.png"
                  alt="Tharo Technologies Concierge"
                  width={36}
                  height={36}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <h3>Direct WhatsApp Concierge</h3>
                <p>Customize your inquiry message and initiate an immediate conversation.</p>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="businessName">Your Business Name</label>
              <input
                id="businessName"
                type="text"
                placeholder="e.g. Apex Living Real Estate, Dr. Mehta Dental Studio"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="sectorSelect">Your Industry Sector</label>
              <select
                id="sectorSelect"
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className={styles.select}
              >
                {sectors.map((sec) => (
                  <option key={sec.id} value={sec.name}>
                    {sec.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="customGoal">Primary Workflow Goal</label>
              <input
                id="customGoal"
                type="text"
                placeholder="e.g. Odontogram records, stylist bookings, dynamic QR passes, tower sales"
                value={customGoal}
                onChange={(e) => setCustomGoal(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.messagePreview}>
              <span className={styles.previewLabel}>Auto-generated message preview:</span>
              <p className={styles.previewText}>
                &ldquo;Hi Tharo Technologies team! I am {businessName.trim() ? `from ${businessName.trim()}` : "interested in your services"}. We are in the {selectedSector} industry and want to explore WhatsApp automation for: {customGoal.trim() || "lead qualification, bookings, and ERP operations"}.&rdquo;
              </p>
            </div>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <MessageSquare size={18} /> Launch WhatsApp Conversation
            </a>
          </motion.div>

          {/* Right Column: Information & Timeline */}
          <div className={styles.infoCol}>
            {/* Quick Contact Card */}
            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4>Direct Channels</h4>
              <div className={styles.channelList}>
                <a
                  href={siteConfig.contact.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItem}
                >
                  <div className={styles.channelIcon}>
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className={styles.channelLabel}>WhatsApp Direct</span>
                    <span className={styles.channelVal}>{siteConfig.contact.whatsappFormatted}</span>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.contact.cockpitEmail}`} className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className={styles.channelLabel}>Cockpit Direct</span>
                    <span className={styles.channelVal}>{siteConfig.contact.cockpitEmail}</span>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.contact.email}`} className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className={styles.channelLabel}>Engineering Email</span>
                    <span className={styles.channelVal}>{siteConfig.contact.email}</span>
                  </div>
                </a>

                <div className={styles.slaBadge}>
                  <Clock size={16} color="var(--accent-emerald)" />
                  <span>Direct engineering response during business hours</span>
                </div>
              </div>
            </motion.div>

            {/* Onboarding Steps */}
            <motion.div
              className={styles.timelineCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4>What happens next</h4>
              <div className={styles.timelineSteps}>
                <div className={styles.timelineStep}>
                  <div className={styles.stepBadge}>1</div>
                  <div>
                    <strong>15-Minute Technical Discovery</strong>
                    <p>We analyze your customer touchpoints, existing software, and volume bottlenecks.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepBadge}>2</div>
                  <div>
                    <strong>Interactive Flow Architecture</strong>
                    <p>We demo a tailor-made sandbox flow simulating your exact business scenario.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepBadge}>3</div>
                  <div>
                    <strong>Go-Live in 5 Days</strong>
                    <p>Meta API credentials configured, team trained, and live database routing operational.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Guarantees Bar */}
        <div className={styles.guaranteesGrid}>
          <motion.div
            className={styles.guaranteeCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.guaranteeHead}>
              <Shield size={18} />
              <span>Direct Engineering Access</span>
            </div>
            <p className={styles.guaranteeDesc}>
              You consult with real systems architects who configure the PostgreSQL schemas and API webhooks, not outsourced telemarketers.
            </p>
          </motion.div>

          <motion.div
            className={styles.guaranteeCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.guaranteeHead}>
              <Lock size={18} />
              <span>Data Sovereignty &amp; NDA</span>
            </div>
            <p className={styles.guaranteeDesc}>
              Your customer phone numbers, transactional catalogs, and internal ledger schemas remain isolated in your dedicated tenant instance.
            </p>
          </motion.div>

          <motion.div
            className={styles.guaranteeCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.guaranteeHead}>
              <Zap size={18} />
              <span>5-Day Delivery Guarantee</span>
            </div>
            <p className={styles.guaranteeDesc}>
              If your core WhatsApp automation workflows and official Meta credentials are not operational within 5 business days, we refund your setup fee.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
