import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, Server, Mail, ArrowRight } from "lucide-react";
import styles from "../privacy/page.module.css";
import { siteConfig } from "@/data/siteConfig";

export default function TermsPage() {
  return (
    <article className={styles.legalPage}>
      <div className={styles.ambientLilac} aria-hidden="true" />
      <div className={styles.ambientEmerald} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>ENTERPRISE SERVICE LEVEL AGREEMENT</span>
          </div>

          <h1 className={styles.title}>
            Terms of Service &amp; <br />
            <em className="italic-serif">Deployment Commitments.</em>
          </h1>

          <div className={styles.metaRow}>
            <span>Effective Date: January 1, 2026</span>
            <span>·</span>
            <span>Entity: Tharo Technologies LLP</span>
            <span>·</span>
            <span>Jurisdiction: Mumbai, India</span>
          </div>
        </header>

        <div className={styles.contentBody}>
          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>01</span>
              <span>Scope of Enterprise Services</span>
            </h2>
            <p className={styles.paragraph}>
              These Terms of Service govern the architecture, implementation, and ongoing software operation
              provided by Tharo Technologies LLP (&quot;Tharo&quot;) to your commercial entity (&quot;Client&quot;).
              Services include custom WhatsApp Business API setup, PostgreSQL database schema creation, multi-seat
              shared WhatsApp inboxes, sector workflows (e.g. odontogram charts, salon stylist schedules, RERA site visit passes),
              and Pipo AI voice parsing infrastructure.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>02</span>
              <span>5-Day Turnkey Delivery Commitment</span>
            </h2>
            <p className={styles.paragraph}>
              For standard vertical deployments (Dental, Salons, Events, Real Estate, and Logistics), Tharo commits
              to a 5-business-day go-live cycle starting upon receipt of client Meta Business Manager administrator access:
            </p>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                <CheckCircle2 size={16} className={styles.bulletIcon} />
                <span>
                  <strong>Days 1-2:</strong> Meta official verification, phone number porting/provisioning, and isolated
                  database schema initialization.
                </span>
              </li>
              <li className={styles.bulletItem}>
                <CheckCircle2 size={16} className={styles.bulletIcon} />
                <span>
                  <strong>Days 3-4:</strong> Vertical business logic configuration, interactive WhatsApp templates approval,
                  and Pipo AI voice intent training.
                </span>
              </li>
              <li className={styles.bulletItem}>
                <CheckCircle2 size={16} className={styles.bulletIcon} />
                <span>
                  <strong>Day 5:</strong> Staging stress verification, 15-minute staff training walkthrough, and production
                  traffic activation.
                </span>
              </li>
            </ul>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>03</span>
              <span>Transparent Billing &amp; Zero Markup Guarantee</span>
            </h2>
            <div className={styles.highlightBox}>
              <p className={styles.highlightText}>
                <strong>Direct Meta Wholesale Rates:</strong> Tharo charges a flat, predictable monthly software
                licensing and infrastructure fee. We strictly pass through Meta official conversation rates at wholesale
                cost without surcharge, artificial markup, or hidden platform fees.
              </p>
            </div>
            <p className={styles.paragraph}>
              Clients maintain their own official Meta Business Manager payment method for conversation charges, ensuring
              full financial transparency and zero middleman dependency.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>04</span>
              <span>Client Data Ownership &amp; Intellectual Property</span>
            </h2>
            <p className={styles.paragraph}>
              All customer records, patient clinical histories, property buyer contact profiles, and transactional
              ledgers generated through the platform remain the 100% exclusive property of the Client. Tharo claims
              zero ownership, license, or proprietary rights over client operational data. Upon service termination,
              Tharo provides a full raw PostgreSQL data export within 48 hours.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>05</span>
              <span>Acceptable Use &amp; WhatsApp Policy Compliance</span>
            </h2>
            <p className={styles.paragraph}>
              Clients agree to operate within the official Meta WhatsApp Business Terms of Service and Commerce Policy.
              The sending of unsolicited bulk spam, deceptive financial solicitations, or prohibited product promotions
              is strictly prohibited and may result in immediate number suspension by Meta.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>06</span>
              <span>Uptime SLA &amp; Support Availability</span>
            </h2>
            <p className={styles.paragraph}>
              Tharo maintains a 99.9% uptime Service Level Agreement on core webhook ingestion and database ledgers,
              excluding scheduled maintenance announced with 48 hours notice. Critical infrastructure alerts are monitored
              24/7 with a 30-minute target response time on enterprise tiers.
            </p>
          </section>

          <div className={styles.contactBox}>
            <div className={styles.contactInfo}>
              <h3>Enterprise Contracts &amp; SLA Briefing</h3>
              <p>To review custom enterprise MSAs or security compliance questionnaires, reach our desk.</p>
            </div>
            <Link href="/contact" className="btn-secondary">
              <span>Connect with Engineering</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
