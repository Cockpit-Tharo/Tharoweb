"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import styles from "./CinematicText.module.css";

interface CinematicLineMaskHeadingProps {
  lines: Array<{
    text: string;
    italic?: boolean;
    accent?: boolean;
  }>;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  dark?: boolean;
}

export function CinematicLineMaskHeading({
  lines,
  as = "h2",
  className = "",
  delay = 0,
  dark = false,
}: CinematicLineMaskHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -70px 0px" });
  const reduced = useReducedMotion();

  const Tag = as;

  return (
    <div
      ref={ref}
      className={`${styles.headingWrapper} ${dark ? styles.darkTheme : ""} ${className}`}
    >
      <Tag className={styles.headingEl}>
        {lines.map((line, idx) => (
          <span key={idx} className={styles.lineMask}>
            <motion.span
              className={`${styles.lineInner} ${line.accent ? styles.lineAccent : ""}`}
              initial={reduced ? { opacity: 1, y: 0 } : { y: "115%", opacity: 0.2, rotateX: 8 }}
              animate={
                reduced || isInView
                  ? { y: "0%", opacity: 1, rotateX: 0 }
                  : { y: "115%", opacity: 0.2, rotateX: 8 }
              }
              transition={{
                duration: 0.82,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + idx * 0.11,
              }}
            >
              {line.italic ? (
                <em className={`italic-serif ${styles.italicAccent}`}>{line.text}</em>
              ) : (
                line.text
              )}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}

interface CinematicSubheadProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dark?: boolean;
}

export function CinematicSubhead({
  children,
  className = "",
  delay = 0.24,
  dark = false,
}: CinematicSubheadProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduced = useReducedMotion();

  return (
    <motion.p
      ref={ref}
      className={`${styles.subheadEl} ${dark ? styles.darkTheme : ""} ${className}`}
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      animate={reduced || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.p>
  );
}

interface CinematicSectionHeaderProps {
  stampCode: string;
  stampLabel: string;
  stampNote?: string;
  dark?: boolean;
  titleLines: Array<{
    text: string;
    italic?: boolean;
    accent?: boolean;
  }>;
  subtitle?: string;
  centered?: boolean;
}

export function CinematicSectionHeader({
  stampCode,
  stampLabel,
  stampNote = "LIVE SYSTEM",
  dark = false,
  titleLines,
  subtitle,
  centered = true,
}: CinematicSectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -55px 0px" });
  const reduced = useReducedMotion();

  return (
    <div
      ref={ref}
      className={`${styles.sectionHeaderShell} ${centered ? styles.centered : ""} ${
        dark ? styles.darkTheme : ""
      }`}
    >
      {/* Top Subtle Draw-Line */}
      <div className={styles.stampRow}>
        <motion.div
          className={styles.hairlineRule}
          initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
          animate={reduced || isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        />
        <span className={styles.stampCode}>
          {stampLabel}
        </span>
        {stampNote && <span className={styles.stampNote}>{stampNote}</span>}
      </div>

      {/* Masked Heading Lines */}
      <CinematicLineMaskHeading lines={titleLines} delay={0.06} />

      {/* Subtitle */}
      {subtitle && <CinematicSubhead delay={0.22}>{subtitle}</CinematicSubhead>}
    </div>
  );
}

