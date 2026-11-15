"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import styles from "./SectionEntrance.module.css";

interface SectionStampProps {
  code?: string;
  label: string;
  note?: string;
  dark?: boolean;
}

export function SectionStamp({
  code,
  label,
  note = "",
  dark = false,
}: SectionStampProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 96%", "start 55%"],
  });

  const ruleScaleX = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [0.25, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <div ref={ref} className="container">
      <div className={`${styles.stampWrap} ${dark ? styles.stampWrapDark : ""}`}>
        <motion.div
          className={`${styles.hairlineRule} ${dark ? styles.hairlineDark : ""}`}
          style={{ scaleX: reduced ? 1 : ruleScaleX }}
        />
      </div>
      <motion.div
        className={`${styles.stampRow} ${dark ? styles.stampRowDark : ""}`}
        style={{
          opacity: reduced ? 1 : textOpacity,
          y: reduced ? 0 : textY,
        }}
      >
        <span className={styles.stampLeft}>
          <span>{label}</span>
        </span>
        {note && <span>{note}</span>}
      </motion.div>
    </div>
  );
}

interface ScrollParallaxRevealProps {
  children: React.ReactNode;
  id?: string;
  depth?: number;
}

export function ScrollParallaxReveal({
  children,
  id,
  depth = 22,
}: ScrollParallaxRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 0.34, 0.72, 1],
    [depth * 1.4, 0, -depth * 0.2, -depth * 0.7]
  );
  const scale = useTransform(scrollYProgress, [0, 0.28, 1], [0.955, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.22, 1], [0.22, 1, 1]);

  return (
    <div id={id} ref={ref} className={styles.entranceWrap}>
      <motion.div
        className={styles.parallaxSlot}
        style={reduced ? undefined : { y: parallaxY, scale, opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ApertureRevealProps {
  children: React.ReactNode;
  id?: string;
}

export function ApertureReveal({ children, id }: ApertureRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 96%", "start 42%"],
  });

  const insetTopBot = useTransform(scrollYProgress, [0, 1], [4.5, 0]);
  const insetSides = useTransform(scrollYProgress, [0, 1], [3.5, 0]);
  const radius = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0.32, 1]);
  const clipPath = useMotionTemplate`inset(${insetTopBot}% ${insetSides}% round ${radius}px)`;

  return (
    <div id={id} ref={ref} className={styles.apertureOuter}>
      <motion.div
        style={
          reduced
            ? undefined
            : {
                clipPath,
                scale,
                opacity,
              }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}

interface BlueprintRevealProps {
  children: React.ReactNode;
  id?: string;
  tag?: string;
}

export function BlueprintReveal({ children, id, tag }: BlueprintRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 94%", "start 45%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [38, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.965, 1]);
  const hatchOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [0.85, 0.3, 0]);
  const lineScale = useTransform(scrollYProgress, [0, 0.8], [0.1, 1]);

  return (
    <div id={id} ref={ref} className={styles.blueprintRevealWrap}>
      {tag && (
        <div className="container">
          <div className={styles.blueprintMetaRow}>
            <span className={styles.blueprintTag}>{tag}</span>
            <motion.div
              className={styles.blueprintRule}
              style={{ scaleX: reduced ? 1 : lineScale }}
            />
          </div>
        </div>
      )}
      <motion.div
        className={styles.blueprintSlot}
        style={reduced ? undefined : { y, scale }}
      >
        <motion.div
          className={styles.hatchOverlay}
          style={{ opacity: reduced ? 0 : hatchOpacity }}
          aria-hidden="true"
        />
        {children}
      </motion.div>
    </div>
  );
}

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export function FadeInSection({ children }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 96%", "start 50%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [34, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [0.25, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.975, 1]);

  return (
    <motion.div
      ref={ref}
      style={reduced ? undefined : { y, opacity, scale }}
    >
      {children}
    </motion.div>
  );
}
