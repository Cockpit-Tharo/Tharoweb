"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { ChevronDown, MessageSquare } from "lucide-react";

const solutions = [
  { href: "/solutions/salons", label: "Salons & Spas", emoji: "✂️" },
  { href: "/solutions/tally", label: "Suppliers & Tally", emoji: "📋" },
  { href: "/solutions/logistics", label: "Logistics & Delivery", emoji: "🚚" },
  { href: "/solutions", label: "View All 12 Industries →", emoji: "" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.navbar}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Uncomplic<span>8</span>
        </Link>

        {/* Nav Links */}
        <nav className={styles.navLinks}>
          <div
            className={styles.dropdown}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className={styles.dropbtn}>
              Solutions <ChevronDown size={14} className={`${styles.chevron} ${solutionsOpen ? styles.chevronOpen : ""}`} />
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {solutions.map((s) => (
                    <Link key={s.href} href={s.href} className={styles.dropItem}>
                      {s.emoji && <span className={styles.dropEmoji}>{s.emoji}</span>}
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <Link href="/contact" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
            <MessageSquare size={15} />
            Book Demo
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
