"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { ChevronDown, MessageSquare, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getFeaturedNavSectors } from "@/data/sectors";
import NeubrutalismButton from "./NeubrutalismButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const featuredSectors = getFeaturedNavSectors();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Backdrop Touch Dismiss */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.navbar}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Tharo Technologies Home">
            <Image
              src="/images/tharo-emblem-dark.png"
              alt="Tharo Technologies Emblem"
              width={42}
              height={42}
              className={styles.logoImg}
              priority
            />
            <span className={styles.logoText}>
              Tharo<span className={styles.logoAccent}>.tech</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className={styles.navLinks}>
            <div
              className={styles.dropdown}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={styles.dropbtn}
                aria-expanded={solutionsOpen}
                aria-label="Toggle solutions menu"
              >
                Solutions{" "}
                <ChevronDown
                  size={14}
                  className={`${styles.chevron} ${solutionsOpen ? styles.chevronOpen : ""}`}
                />
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    className={styles.dropdownMenu}
                    initial={{ opacity: 0, y: 8, x: "-50%", scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 8, x: "-50%", scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {featuredSectors.map((s) => (
                      <Link key={s.id} href={`/solutions/${s.id}`} className={styles.dropItem}>
                        {s.name}
                      </Link>
                    ))}
                    <div style={{ height: "1px", background: "rgba(22, 22, 22, 0.08)", margin: "0.35rem 0" }} />
                    <Link
                      href="/solutions"
                      className={styles.dropItem}
                      style={{ fontWeight: 600, color: "var(--primary-dark, #0D3B2E)" }}
                    >
                      <span>View All Solutions</span>
                      <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {siteConfig.navigation.main.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.activeNavLink : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={styles.actions}>
            {/* Neubrutalism Button for Our Creative Side */}
            <NeubrutalismButton
              href={siteConfig.portfolioUrl}
              label="Our Creative Side"
              size="compact"
            />

            <Link
              href={siteConfig.navigation.actions.primaryCta.href}
              className={`btn-primary ${styles.ctaBtn}`}
              style={{ padding: "0.42rem 1.05rem", fontSize: "0.835rem", whiteSpace: "nowrap" }}
            >
              <MessageSquare size={14} />
              {siteConfig.navigation.actions.primaryCta.label}
            </Link>
          </div>

          {/* Mobile Right Controls: Tablet Creative Button / Phone Compact Book Demo + Concentric Hamburger */}
          <div className={styles.mobileRightGroup}>
            <NeubrutalismButton
              href={siteConfig.portfolioUrl}
              label="Our Creative Side"
              size="mobile"
            />

            <Link
              href={siteConfig.navigation.actions.primaryCta.href}
              className={styles.mobileHeaderCta}
            >
              <span>{siteConfig.navigation.actions.primaryCta.label}</span>
            </Link>

            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                key={mobileMenuOpen ? "close-icon" : "menu-icon"}
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={styles.toggleIconInner}
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </button>
          </div>
        </div>

        {/* Mobile Floating Liquid-Glass Dropdown Sheet */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className={styles.mobileDropdown}
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.mobileInner}>
                {/* Neubrutalism Creative Banner in Mobile Menu */}
                <a
                  href={siteConfig.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileNeubrutalismBanner}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={styles.mobileNeubrutalismLeft}>
                    <div className={styles.mobileNeubrutalismTag}>STUDIO LAB</div>
                    <div className={styles.mobileNeubrutalismTitle}>Our Creative Side</div>
                    <div className={styles.mobileNeubrutalismSub}>Web design & experimental builds</div>
                  </div>
                  <Sparkles size={18} className={styles.mobileNeubrutalismIcon} />
                </a>

                {/* Solutions Accordion in Mobile */}
                <div className={styles.mobileAccordion}>
                  <button
                    className={styles.mobileAccordionBtn}
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    aria-expanded={mobileSolutionsOpen}
                  >
                    <span className={styles.accordionTitle}>Solutions</span>
                    <ChevronDown
                      size={16}
                      className={`${styles.chevron} ${mobileSolutionsOpen ? styles.chevronOpen : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileSolutionsOpen && (
                      <motion.div
                        className={styles.mobileSubList}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {featuredSectors.map((s) => (
                          <Link
                            key={s.id}
                            href={`/solutions/${s.id}`}
                            className={styles.mobileSubItem}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span>{s.name}</span>
                          </Link>
                        ))}
                        <Link
                          href="/solutions"
                          className={styles.mobileSubItemAll}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>All Solutions &amp; Industries</span>
                          <ArrowRight size={14} />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Main Links */}
                {siteConfig.navigation.main.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.mobileNavLink} ${
                      pathname === link.href ? styles.mobileActiveLink : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className={styles.mobileDivider} />

                {/* Mobile CTA */}
                <Link
                  href={siteConfig.navigation.actions.primaryCta.href}
                  className={`btn-primary ${styles.mobileCtaBtn}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageSquare size={16} />
                  <span>{siteConfig.navigation.actions.primaryCta.label}</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
