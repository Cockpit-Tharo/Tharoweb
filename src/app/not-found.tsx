import Link from "next/link";
import { ArrowUpRight, Home, MessageSquare, Compass } from "lucide-react";
import styles from "./not-found.module.css";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "404 Route Not Found | Tharo Technologies",
  description: "The requested business automation flow or page could not be located.",
};

export default function NotFound() {
  const directHelpUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi Tharo team, I encountered an unrouted endpoint on tharo.tech and need guidance."
  )}`;

  return (
    <section className={styles.notFoundSection} aria-label="Page not found">
      <div className={styles.ambientLilac} aria-hidden="true" />
      <div className={styles.ambientEmerald} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.statusCodeBadge}>
          <span className={styles.statusDot} />
          <span>STATUS 404 // UNMAPPED FLOW</span>
        </div>

        <h1 className={styles.title}>
          Flow not found. <br />
          <em className="italic-serif">Let us get you back on track.</em>
        </h1>

        <p className={styles.subtitle}>
          The operational endpoint or sector route you requested has moved, expired,
          or has not been mapped to an active webhook stream yet.
        </p>

        <div className={styles.quickNavGrid}>
          <Link href="/" className={styles.navCard}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>Home Stage</span>
              <ArrowUpRight size={14} className={styles.cardArrow} />
            </div>
            <span className={styles.cardDesc}>
              Return to the central interactive simulator and system overview.
            </span>
          </Link>

          <Link href="/solutions" className={styles.navCard}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>Industry Solutions</span>
              <ArrowUpRight size={14} className={styles.cardArrow} />
            </div>
            <span className={styles.cardDesc}>
              Browse ready WhatsApp workflows for 14+ Indian business sectors.
            </span>
          </Link>

          <Link href="/platform" className={styles.navCard}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>ERP Engine Core</span>
              <ArrowUpRight size={14} className={styles.cardArrow} />
            </div>
            <span className={styles.cardDesc}>
              Explore operational architecture and real-time business ledgers.
            </span>
          </Link>

          <Link href="/pipo-voice" className={styles.navCard}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>Pipo AI Operations</span>
              <ArrowUpRight size={14} className={styles.cardArrow} />
            </div>
            <span className={styles.cardDesc}>
              Test voice commands, Hinglish parsing, and automated chat copilot.
            </span>
          </Link>

          <Link href="/pricing" className={styles.navCard}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>Transparent Pricing</span>
              <ArrowUpRight size={14} className={styles.cardArrow} />
            </div>
            <span className={styles.cardDesc}>
              Review zero markup Meta rates and 5-day turnkey setup pricing.
            </span>
          </Link>

          <Link href="/contact" className={styles.navCard}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>Contact Engineering</span>
              <ArrowUpRight size={14} className={styles.cardArrow} />
            </div>
            <span className={styles.cardDesc}>
              Book a live 20-minute architecture session with our engineering team.
            </span>
          </Link>
        </div>

        <div className={styles.ctaRow}>
          <Link href="/" className="btn-primary">
            <Home size={15} />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={directHelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MessageSquare size={15} />
            <span>Ask Support on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
