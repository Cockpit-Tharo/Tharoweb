import Link from "next/link";
import { CheckCircle2, ShieldCheck, Lock, Database, Server, Mail } from "lucide-react";
import styles from "./page.module.css";
import { siteConfig } from "@/data/siteConfig";

export default function PrivacyPage() {
  return (
    <article className={styles.legalPage}>
      <div className={styles.ambientLilac} aria-hidden="true" />
      <div className={styles.ambientEmerald} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Privacy Policy &amp; <br />
            <em className="italic-serif">Data Protection Standard.</em>
          </h1>

          <div className={styles.metaRow}>
            <span>Effective Date: January 1, 2026</span>
            <span>·</span>
            <span>Entity: Tharo Technologies LLP</span>
            <span>·</span>
            <span>Compliance: DPDP Act 2023 &amp; Meta BSP Standards</span>
          </div>
        </header>

        <div className={styles.contentBody}>
          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>01</span>
              <span>Overview &amp; Architecture Philosophy</span>
            </h2>
            <p className={styles.paragraph}>
              Tharo Technologies LLP (&quot;Tharo&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides
              custom WhatsApp Business operating systems, relational ERP sync engines, and Pipo AI automation
              for commercial enterprises. We operate on a fundamental architectural principle:
              <strong> your customer data, messages, patient clinical charts, and billing ledgers belong
              strictly to you.</strong> We do not monetize, aggregate, profile, or sell commercial business data.
            </p>
            <div className={styles.highlightBox}>
              <p className={styles.highlightText}>
                <strong>Direct Meta Cloud API Link:</strong> We configure systems to connect directly to the
                official Meta WhatsApp Business Cloud API. Messages flow over TLS 1.3 encrypted pipelines.
                We never route conversational payloads through third-party marketing aggregators.
              </p>
            </div>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>02</span>
              <span>Data Collected &amp; Processed</span>
            </h2>
            <p className={styles.paragraph}>
              Depending on the customized modules deployed for your business, our systems process:
            </p>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                <CheckCircle2 size={16} className={styles.bulletIcon} />
                <span>
                  <strong>WhatsApp Messaging Metadata:</strong> Phone numbers, delivery status webhooks (sent,
                  delivered, read), message timestamps, and interactive button payload IDs necessary to execute
                  state machine transitions.
                </span>
              </li>
              <li className={styles.bulletItem}>
                <CheckCircle2 size={16} className={styles.bulletIcon} />
                <span>
                  <strong>Operational Ledger Data:</strong> Appointment slot reservations, patient/client intake
                  responses, inventory SKU counts, order addresses, and dispatch statuses stored in your isolated
                  PostgreSQL database schema.
                </span>
              </li>
              <li className={styles.bulletItem}>
                <CheckCircle2 size={16} className={styles.bulletIcon} />
                <span>
                  <strong>Voice Note Transcripts:</strong> Audio recordings submitted by authorized staff via WhatsApp
                  for Pipo AI voice parsing are processed transiently into structured SQL operations and are not
                  retained for public model training.
                </span>
              </li>
            </ul>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>03</span>
              <span>Multi-Tenant Database Isolation &amp; Security</span>
            </h2>
            <p className={styles.paragraph}>
              All operational records are hosted in high-availability relational databases configured with strict
              Row-Level Security (RLS). Each enterprise tenant operates within isolated schemas with cryptographically
              separated access credentials. Data at rest is encrypted using AES-256 standards, and all webhooks
              and API traffic require valid SHA-256 HMAC signature verification.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>04</span>
              <span>Customer Consent &amp; Opt-Out Processing</span>
            </h2>
            <p className={styles.paragraph}>
              All WhatsApp messaging flows deployed by Tharo adhere strictly to Meta WhatsApp Business Policy:
            </p>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                <CheckCircle2 size={16} className={styles.bulletIcon} />
                <span>
                  <strong>Explicit Customer Opt-In:</strong> Proactive notification templates (e.g. appointment reminders,
                  shipping updates, site visit passes) require verified customer consent prior to dispatch.
                </span>
              </li>
              <li className={styles.bulletItem}>
                <CheckCircle2 size={16} className={styles.bulletIcon} />
                <span>
                  <strong>Immediate 1-Tap Opt-Out:</strong> Promotional broadcasts include standardized STOP keywords
                  that instantly mark the recipient as unsubscribed in your PostgreSQL database, halting further automated pings.
                </span>
              </li>
            </ul>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>05</span>
              <span>Payment Credentials &amp; Financial Security</span>
            </h2>
            <p className={styles.paragraph}>
              When payment links (e.g., Razorpay, Stripe, Cashfree) are generated on WhatsApp for appointment deposits
              or order settlement, Tharo systems only pass transaction IDs and settlement verification webhooks.
              <strong> Tharo never accesses, stores, or handles customer credit card numbers, UPI PINs, or bank account credentials.</strong>
              Settlements deposit directly into your verified merchant banking account.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>06</span>
              <span>Data Retention &amp; Deletion Rights</span>
            </h2>
            <p className={styles.paragraph}>
              Under the Indian Digital Personal Data Protection (DPDP) Act 2023 and GDPR, enterprise clients and their end
              customers maintain the right to review, export, or permanently erase their personal records. Data purge
              requests submitted to our compliance desk are executed across primary databases and automated backups
              within 7 business days.
            </p>
          </section>

          <div className={styles.contactBox}>
            <div className={styles.contactInfo}>
              <h3>Data Protection Officer &amp; Compliance Desk</h3>
              <p>For inquiries, audits, or data deletion requests, contact our engineering desk.</p>
            </div>
            <a href={`mailto:${siteConfig.contact.cockpitEmail}`} className="btn-secondary">
              <Mail size={15} />
              <span>cockpit@tharo.tech</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
