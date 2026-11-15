"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CinematicPictureComplete.module.css";

const MANIFESTO_WORDS = [
  { text: "The", accent: false },
  { text: "daily", accent: false },
  { text: "grind", accent: false },
  { text: "of", accent: false },
  { text: "manual", accent: false },
  { text: "WhatsApp", accent: true },
  { text: "replies,", accent: false },
  { text: "missed", accent: false },
  { text: "calls,", accent: false },
  { text: "and", accent: false },
  { text: "messy", accent: false },
  { text: "sheets", accent: false },
  { text: "shouldn't", accent: false },
  { text: "eat", accent: false },
  { text: "your", accent: false },
  { text: "day.", accent: false },
  { text: "Pipo", accent: true },
  { text: "handles", accent: false },
  { text: "the", accent: false },
  { text: "routine", accent: false },
  { text: "work", accent: false },
  { text: "straight", accent: false },
  { text: "inside", accent: false },
  { text: "your", accent: false },
  { text: "ERP.", accent: true },
];

interface FeaturePin {
  id: string;
  title: string;
  sub: string;
  x: string;
  y: string;
  placement?: "top" | "bottom";
}

const FEATURE_PINS: FeaturePin[] = [
  {
    id: "phone",
    title: "WhatsApp Ingest",
    sub: "Booking & lead inquiries",
    x: "28%",
    y: "35%",
    placement: "bottom",
  },
  {
    id: "puck",
    title: "Pipo Voice Hub",
    sub: "Hands-free voice memos",
    x: "50%",
    y: "52%",
    placement: "bottom",
  },
  {
    id: "docket",
    title: "Calendar & Bookings",
    sub: "Synchronous slot locking",
    x: "76%",
    y: "24%",
    placement: "bottom",
  },
  {
    id: "receipt",
    title: "Direct UPI & Bills",
    sub: "0% markup to bank",
    x: "66%",
    y: "75%",
    placement: "top",
  },
  {
    id: "shelf",
    title: "Live Inventory",
    sub: "Auto-deducted in ERP",
    x: "88%",
    y: "56%",
    placement: "bottom",
  },
];

export default function CinematicPictureComplete() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const wordsWrapRef = useRef<HTMLHeadingElement>(null);
  const realArtRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);
  const botLineRef = useRef<HTMLDivElement>(null);
  const odoNumberRef = useRef<HTMLSpanElement>(null);
  const pinsWrapRef = useRef<HTMLDivElement>(null);

  const [activePinId, setActivePinId] = useState<string | null>("puck");

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      if (odoNumberRef.current) odoNumberRef.current.textContent = "100%";
      if (realArtRef.current) {
        realArtRef.current.style.clipPath = "inset(0% 0% 0% 0%)";
      }
      if (topLineRef.current) topLineRef.current.style.opacity = "0";
      if (botLineRef.current) botLineRef.current.style.opacity = "0";
      if (pinsWrapRef.current) pinsWrapRef.current.classList.add(styles.pinsVisible);
      return;
    }

    const wordEls = wordsWrapRef.current
      ? (Array.from(wordsWrapRef.current.children) as HTMLElement[])
      : [];

    const totalWords = wordEls.length;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 72px",
      end: "bottom bottom",
      scrub: 0.2,
      onUpdate: (self) => {
        const progress = self.progress;

        // 1. Text ignite scrub: 0% -> 42%
        const textPhase = Math.min(1, progress / 0.42);
        const ignitedCount = Math.floor(textPhase * totalWords);
        wordEls.forEach((el, i) => {
          if (i < ignitedCount) {
            el.style.color = "#0D3B2E";
          } else {
            el.style.color = "rgba(13, 59, 46, 0.22)";
          }
        });

        // 2. Picture completion scrub: begins smoothly at 6% and completes at 92%
        // Provides a huge 86% span of continuous scroll for smooth aperture expansion
        const picturePhase = Math.max(0, Math.min(1, (progress - 0.06) / 0.86));
        const pct = Math.round(picturePhase * 100);

        // Direct DOM text updates for 60/120fps performance without React re-render overhead
        if (odoNumberRef.current) {
          odoNumberRef.current.textContent = `${pct}%`;
        }

        const halfSpan = picturePhase * 50;
        const topPercent = Math.max(0, 50 - halfSpan);
        const botPercent = Math.min(100, 50 + halfSpan);

        if (realArtRef.current) {
          realArtRef.current.style.clipPath = `inset(${topPercent}% 0% ${100 - botPercent}% 0%)`;
        }
        if (topLineRef.current) {
          topLineRef.current.style.top = `${topPercent}%`;
          topLineRef.current.style.opacity = pct >= 96 ? "0" : "1";
        }
        if (botLineRef.current) {
          botLineRef.current.style.top = `${botPercent}%`;
          botLineRef.current.style.opacity = pct >= 96 ? "0" : "1";
        }

        if (pinsWrapRef.current) {
          if (pct >= 94) {
            pinsWrapRef.current.classList.add(styles.pinsVisible);
          } else {
            pinsWrapRef.current.classList.remove(styles.pinsVisible);
          }
        }
      },
    });

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      trigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.scrollTrack}>
      <div ref={stickyRef} className={styles.stickyViewport}>
        <div className="container">
          {/* Calm Top Header Strip */}
          <div className={styles.instrumentStrip}>
            <div className={styles.instrumentLeft}>
              <span className={styles.telemetryTag}>
                Architecture Overview
              </span>
              <span className={styles.unitMeta}>
                From customer message to automated ERP
              </span>
            </div>

            <div className={styles.odometerWrap}>
              <span className={styles.odoLabel}>Assembly</span>
              <span ref={odoNumberRef} className={styles.odoNumber}>
                0%
              </span>
            </div>
          </div>

          {/* Kinetic Word-by-Word Statement */}
          <h2 ref={wordsWrapRef} className={styles.manifestoHeading}>
            {MANIFESTO_WORDS.map((w, idx) => (
              <span
                key={idx}
                data-accent={w.accent ? "true" : "false"}
                className={`${styles.wordSpan} ${w.accent ? styles.wordAccent : ""}`}
              >
                {w.text}{" "}
              </span>
            ))}
          </h2>

          {/* Master Canvas: Skeleton -> Real Artwork */}
          <div className={styles.canvasFrame}>
            <div className={styles.viewportStage}>
              {/* LAYER 1: MASTER ARCHITECTURAL CAD BLUEPRINT */}
              <div className={styles.skeletonLayer}>
                <Image
                  src="/images/tharo-architecture-blueprint.jpg"
                  alt="Tharo business automation technical blueprint"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className={styles.realArtImg}
                />
              </div>

              {/* LAYER 2: SHADED REALISTIC WORKBENCH */}
              <div
                ref={realArtRef}
                className={styles.realArtLayer}
                style={{ clipPath: "inset(50% 0% 50% 0%)" }}
              >
                <Image
                  src="/images/tharo-architecture-system.jpg"
                  alt="Tharo business automation architecture workbench"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className={styles.realArtImg}
                />
              </div>

              {/* TOP ACCENT SCANLINE */}
              <div
                ref={topLineRef}
                className={`${styles.scanLine} ${styles.scanLineTop}`}
                style={{ top: "50%" }}
                aria-hidden="true"
              >
                <div className={styles.scanLineGlow} />
              </div>

              {/* BOTTOM ACCENT SCANLINE */}
              <div
                ref={botLineRef}
                className={`${styles.scanLine} ${styles.scanLineBot}`}
                style={{ top: "50%" }}
                aria-hidden="true"
              >
                <div className={styles.scanLineGlow} />
              </div>

              {/* INTERACTIVE ARCHITECTURAL HOTSPOT DOTS */}
              <div ref={pinsWrapRef} className={styles.pinsWrap}>
                {FEATURE_PINS.map((pin) => {
                  const isActive = activePinId === pin.id;
                  const isTop = pin.placement === "top";
                  return (
                    <div
                      key={pin.id}
                      className={`${styles.hotspotAnchor} ${isActive ? styles.hotspotAnchorActive : ""}`}
                      style={{ left: pin.x, top: pin.y }}
                      onMouseEnter={() => setActivePinId(pin.id)}
                    >
                      {/* Small tactile square dot with no numbering */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePinId(isActive ? null : pin.id);
                        }}
                        className={`${styles.hotspotDot} ${isActive ? styles.hotspotDotActive : ""}`}
                        aria-expanded={isActive}
                        aria-label={`${pin.title} hotspot`}
                      >
                        <span className={styles.hotspotInnerCore} />
                        <span className={styles.hotspotPulse} aria-hidden="true" />
                      </button>

                      {/* Smaller liquid glass callout box */}
                      {isActive && (
                        <div
                          className={`${styles.liquidGlassBox} ${isTop ? styles.liquidGlassBoxTop : styles.liquidGlassBoxBottom}`}
                          role="tooltip"
                        >
                          <div className={styles.calloutTitle}>{pin.title}</div>
                          <div className={styles.calloutSub}>{pin.sub}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
