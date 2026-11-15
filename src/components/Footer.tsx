"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowUp, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getFeaturedNavSectors } from "@/data/sectors";
import styles from "./Footer.module.css";

export default function Footer() {
  const featuredSectors = getFeaturedNavSectors();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* Ambient Radial Corner Glows */}
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        {/* ─── EDITORIAL NAVIGATION GRID ─── */}
        <div className={styles.navGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="Tharo Technologies Home">
              <Image
                src="/images/tharo-footer-logo.png"
                alt="Tharo Technologies LLP"
                width={260}
                height={102}
                className={styles.footerBrandLogo}
              />
            </Link>
            <p className={styles.brandBio}>
              The WhatsApp Operating System for modern businesses. Custom bookings, enterprise ERP
              workflows, customer CRM, and automated lead qualification under one unified engine.
            </p>
          </div>

          {/* Column 1: Systems */}
          <div className={styles.navCol}>
            <span className={styles.colTitle}>Solutions</span>
            <ul className={styles.linkList}>
              {featuredSectors.map((s) => (
                <li key={s.id}>
                  <Link href={`/solutions/${s.id}`} className={styles.navLink}>
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/solutions" className={`${styles.navLink} ${styles.navLinkAll}`}>
                  <span>All Solutions</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Architecture */}
          <div className={styles.navCol}>
            <span className={styles.colTitle}>Platform</span>
            <ul className={styles.linkList}>
              <li>
                <Link href="/platform" className={styles.navLink}>
                  ERP Platform
                </Link>
              </li>
              <li>
                <Link href="/pipo-voice" className={styles.navLink}>
                  Pipo AI Operations
                </Link>
              </li>
              <li>
                <Link href="/about#turnkey" className={styles.navLink}>
                  5-Day Turnkey Setup
                </Link>
              </li>
              <li>
                <Link href="/#integrations" className={styles.navLink}>
                  Software Hub
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={styles.navLink}>
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/pricing/meta-charges" className={styles.navLink}>
                  Meta Charges &amp; 0% Markup
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & Portfolio */}
          <div className={styles.navCol}>
            <span className={styles.colTitle}>Studio</span>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.navLink}>
                  About Studio
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.navLink} ${styles.creativeLink}`}
                >
                  <span>Our Creative Side</span>
                  <Sparkles size={13} className={styles.creativeSparkle} />
                </a>
              </li>
              <li>
                <Link href="/contact" className={styles.navLink}>
                  Contact &amp; Briefing
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  Direct WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.cockpitEmail}`}
                  className={styles.navLink}
                >
                  cockpit@tharo.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── MASSIVE TEXT WATERMARK ─── */}
        <div className={styles.bigTextSection}>
          <div className={styles.bigTextContainer} aria-label="THARO">
            <span className={styles.giantText}>THARO</span>
          </div>
        </div>

        {/* ─── BOTTOM LEGAL & SCROLL TO TOP ─── */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            Copyright {new Date().getFullYear()} Tharo Technologies LLP. All rights reserved.
          </p>

          <div className={styles.legalGroup}>
            <p className={styles.complianceNote}>
              Powered by Meta Official WhatsApp Business API · Pass-Through Pricing · Zero Markup
            </p>
            <div className={styles.legalLinks}>
              <Link href="/privacy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <span className={styles.legalDivider}>·</span>
              <Link href="/terms" className={styles.legalLink}>
                Terms of Service
              </Link>
            </div>
          </div>

          <button onClick={scrollToTop} className={styles.scrollTopBtn} aria-label="Scroll to top of page">
            <span>Back to top</span>
            <ArrowUp size={14} className={styles.scrollArrow} />
          </button>
        </div>
      </div>
    </footer>
  );
}
