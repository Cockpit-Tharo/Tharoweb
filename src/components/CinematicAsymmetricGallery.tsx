"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquare,
  Mic,
  Calendar,
  Lock,
  Package,
  Star,
  Check,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import MobileScrollCardStack from "./MobileScrollCardStack";
import styles from "./CinematicAsymmetricGallery.module.css";

/* ══════════════════════════════════════════════════════════════════
   BESPOKE SKELETON MICRO-INTERFACES (AWWWARDS LEVEL)
   100% Vector SVG & Glassmorphism · Zero Reused Photos
   ══════════════════════════════════════════════════════════════════ */

// 1. WhatsApp Inbound Chat Skeleton (24/7 Smart Rescheduling)
function InboundChatSkeleton() {
  return (
    <div className={styles.skeletonBox}>
      <div className={styles.skeletonTopBar}>
        <div className={styles.livePulseGroup}>
          <MessageSquare size={13} className={styles.headerIconSage} />
          <span className={styles.livePulseText}>Smart Rescheduling</span>
        </div>
        <span className={styles.latencyTag}>Instant reply</span>
      </div>

      <div className={styles.chatBubbleInbound}>
        <div className={styles.bubbleSenderRow}>
          <span className={styles.senderName}>Rahul V.</span>
          <span className={styles.bubbleTime}>11:45 PM</span>
        </div>
        <p className={styles.bubbleText}>
          Can I move my appointment to Thursday afternoon?
        </p>
      </div>

      <div className={styles.pipoWaveRow}>
        <div className={styles.pipoWaveBar} style={{ height: "6px" }} />
        <div className={styles.pipoWaveBar} style={{ height: "14px" }} />
        <div className={styles.pipoWaveBar} style={{ height: "9px" }} />
        <div className={styles.pipoWaveBar} style={{ height: "18px" }} />
        <div className={styles.pipoWaveBar} style={{ height: "12px" }} />
        <div className={styles.pipoWaveBar} style={{ height: "5px" }} />
        <span className={styles.pipoWaveLabel}>Checking Thursday slots...</span>
      </div>

      <div className={styles.chatBubbleOutbound}>
        <div className={styles.bubbleHeaderRow}>
          <span className={styles.pipoTag}>Rescheduled</span>
          <span className={styles.verifiedCheck}>
            <Check size={11} />
          </span>
        </div>
        <p className={styles.bubbleOutboundText}>
          Moved to Thursday at 3:30 PM with Dr. Kapoor. Calendar updated!
        </p>
        <div className={styles.bubbleActionRow}>
          <span className={styles.actionChip}>Slot Updated</span>
          <span className={styles.actionChip}>Calendar Synced</span>
        </div>
      </div>
    </div>
  );
}

// 2. Clinic Multi-Chair Timetable Skeleton (Schedule Shield)
function LiveCalendarSkeleton() {
  return (
    <div className={styles.skeletonBox}>
      <div className={styles.skeletonTopBar}>
        <div className={styles.livePulseGroup}>
          <Calendar size={13} className={styles.calendarIcon} />
          <span className={styles.livePulseText}>Schedule Shield</span>
        </div>
        <span className={styles.safeTag}>Conflict-Free</span>
      </div>

      <div className={styles.timetableGrid}>
        <div className={styles.timeSlotRow}>
          <span className={styles.timeMarker}>10:00 AM</span>
          <div className={styles.slotPillSuccess}>
            <Lock size={10} />
            <span className={styles.slotPatient}>Dr. Kapoor · Room 1 [In Progress]</span>
          </div>
        </div>

        <div className={styles.timeSlotRow}>
          <span className={styles.timeMarker}>10:30 AM</span>
          <div className={styles.conflictBlock}>
            <span className={styles.conflictCrossOut}>Conflict detected</span>
            <div className={styles.conflictReroutePill}>
              <ArrowRight size={10} />
              <span>Shifted to Room 2</span>
            </div>
          </div>
        </div>

        <div className={styles.timeSlotRow}>
          <span className={styles.timeMarker}>11:00 AM</span>
          <div className={styles.slotPillReserved}>
            <span className={styles.slotDotPulse} />
            <span className={styles.slotPatient}>Kavita M. · Confirmed via WhatsApp</span>
          </div>
        </div>
      </div>

      <div className={styles.radarNeedle} aria-hidden="true" />
    </div>
  );
}

// 3. Inventory Stock Deduction Ledger Skeleton (Voice Stock Tracking)
function InventoryLedgerSkeleton() {
  return (
    <div className={styles.skeletonBox}>
      <div className={styles.skeletonTopBar}>
        <div className={styles.livePulseGroup}>
          <Package size={13} className={styles.packageIcon} />
          <span className={styles.livePulseText}>Voice Stock Tracking</span>
        </div>
        <span className={styles.syncedTag}>Voice-logged</span>
      </div>

      <div className={styles.skuCard}>
        <div className={styles.skuHeaderRow}>
          <div className={styles.skuTitleWrap}>
            <span className={styles.skuBadge}>Supply Item</span>
            <span className={styles.skuName}>Ceramic Crown Kit</span>
          </div>
          <span className={styles.stockDeductPill}>-2 Units</span>
        </div>

        <div className={styles.voiceCitationRow}>
          <Mic size={11} className={styles.micIcon} />
          <span className={styles.voiceQuote}>
            Dr. Roy: &quot;Used 2 ceramic crowns in Room 3&quot;
          </span>
        </div>

        <div className={styles.stockMeterBlock}>
          <div className={styles.stockMeterLabels}>
            <span>Available Stock</span>
            <span className={styles.stockDigits}>28 / 30 Kits (93%)</span>
          </div>
          <div className={styles.meterTrack}>
            <div className={styles.meterFill} style={{ width: "93%" }} />
          </div>
        </div>

        <div className={styles.ledgerHashRow}>
          <span>Logged directly to ERP</span>
          <span className={styles.ledgerStatus}>In Stock · Safe</span>
        </div>
      </div>
    </div>
  );
}

// 4. Automated 6-Month Client Retention Skeleton (Patient Retention)
function ClientRetentionSkeleton() {
  return (
    <div className={styles.skeletonBox}>
      <div className={styles.skeletonTopBar}>
        <div className={styles.livePulseGroup}>
          <Sparkles size={13} className={styles.sparkleIcon} />
          <span className={styles.livePulseText}>Patient Retention</span>
        </div>
        <span className={styles.growthTag}>Automated</span>
      </div>

      <div className={styles.retentionCard}>
        <div className={styles.retentionPatientRow}>
          <div className={styles.patientAvatar}>PS</div>
          <div className={styles.patientInfo}>
            <span className={styles.patientName}>Pooja S.</span>
            <span className={styles.patientStage}>6-Month Checkup Due</span>
          </div>
        </div>

        <div className={styles.autoNudgeMessage}>
          <span>
            Hi Pooja! Time for your 6-month cleaning. Tap below to pick a slot.
          </span>
        </div>

        <div className={styles.reviewSnippet}>
          <div className={styles.starsRow}>
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} size={11} fill="#F59E0B" color="#F59E0B" />
            ))}
          </div>
          <span className={styles.reviewScore}>5.0 Google Review Collected</span>
        </div>

        <div className={styles.conversionGrowthRow}>
          <TrendingUp size={12} className={styles.trendIcon} />
          <span>Patient auto-rebooked for Saturday 10:00 AM</span>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SCATTER DATA & CONTENT DEFINITION
   ══════════════════════════════════════════════════════════════════ */

const SCATTER_ITEMS = [
  {
    id: "inbox",
    title: "Smart Rescheduling",
    renderSkeleton: () => <InboundChatSkeleton />,
    frictionLabel: "Patients calling to move slots during busy hours",
    solutionLabel: "24/7 Smart Rescheduling",
    start: { x: -35, y: -25, scale: 0.94, rotate: -2.5 },
    target: { x: -440, y: -185, scale: 0.98, rotate: -3.5 },
    zIndex: 1,
  },
  {
    id: "calendar",
    title: "Schedule Shield",
    renderSkeleton: () => <LiveCalendarSkeleton />,
    frictionLabel: "Double-booked rooms and overlapping patient slots",
    solutionLabel: "Real-Time Conflict Shield",
    start: { x: 30, y: -30, scale: 0.92, rotate: 2.5 },
    target: { x: 440, y: -175, scale: 0.98, rotate: 2.8 },
    zIndex: 2,
  },
  {
    id: "inventory",
    title: "Voice Stock Tracking",
    renderSkeleton: () => <InventoryLedgerSkeleton />,
    frictionLabel: "Supplies used in treatment rooms without updating records",
    solutionLabel: "Voice Inventory Sync",
    start: { x: -25, y: 30, scale: 0.90, rotate: -1.5 },
    target: { x: -420, y: 195, scale: 0.98, rotate: 2.2 },
    zIndex: 3,
  },
  {
    id: "booking",
    title: "Patient Retention",
    renderSkeleton: () => <ClientRetentionSkeleton />,
    frictionLabel: "Patients forget routine checkups without front-desk calls",
    solutionLabel: "Automated 6-Month Recall",
    start: { x: 35, y: 25, scale: 0.88, rotate: 3.0 },
    target: { x: 430, y: 205, scale: 0.98, rotate: -2.8 },
    zIndex: 4,
  },
];

const HEADLINE_WORDS = [
  { text: "WhatsApp", accent: true, breakAfter: false },
  { text: "is", accent: false, breakAfter: false },
  { text: "where", accent: false, breakAfter: false },
  { text: "your", accent: false, breakAfter: false },
  { text: "clients", accent: false, breakAfter: false },
  { text: "are,", accent: false, breakAfter: true },
  { text: "but", accent: false, breakAfter: false },
  { text: "manual", accent: false, breakAfter: false },
  { text: "memory", accent: false, breakAfter: false },
  { text: "should", accent: false, breakAfter: false },
  { text: "not", accent: false, breakAfter: false },
  { text: "run", accent: false, breakAfter: false },
  { text: "your", accent: false, breakAfter: false },
  { text: "clinic.", accent: true, breakAfter: false },
];

/* ══════════════════════════════════════════════════════════════════
   CINEMATIC ASYMMETRIC GALLERY (DESKTOP SCATTER & MOBILE STACKED CARDS)
   ══════════════════════════════════════════════════════════════════ */

export default function CinematicAsymmetricGallery({
  manualProgress,
}: {
  manualProgress?: number;
} = {}) {
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const centerStageRef = useRef<HTMLDivElement>(null);
  const wordsWrapRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const getMultipliers = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      let xM = 1.0;
      if (w >= 1440) xM = 1.0;
      else if (w >= 1200) xM = 0.92;
      else if (w >= 1024) xM = 0.82;
      else xM = 0.72;

      let yM = xM;
      if (w >= 901 && h <= 820) {
        // Shorter laptop screens: dampen vertical scatter so cards do not collide or overflow top/bottom
        const heightFactor = Math.max(0.55, Math.min(1.0, (h - 220) / 600));
        yM = Math.min(xM, heightFactor);
      }
      return { xMultiplier: xM, yMultiplier: yM };
    };

    const wordEls = wordsWrapRef.current
      ? (Array.from(wordsWrapRef.current.children) as HTMLElement[])
      : [];
    const totalWords = wordEls.length;

    let { xMultiplier, yMultiplier } = getMultipliers();

    const applyDesktopProgress = (progress: number) => {
      // Reveal the central editorial statement only as cards scatter outward
      // Keeps the entire background text 100% covered while cards are clustered in the center
      if (centerStageRef.current) {
        const revealPhase = Math.max(0, Math.min(1, (progress - 0.08) / 0.28));
        centerStageRef.current.style.opacity = `${revealPhase.toFixed(3)}`;
        centerStageRef.current.style.transform = `scale(${(0.95 + 0.05 * revealPhase).toFixed(3)})`;
      }

      const textPhase = Math.max(0, Math.min(1, (progress - 0.12) / 0.45));
      const ignitedCount = Math.round(textPhase * totalWords);

      wordEls.forEach((el, idx) => {
        const isAccent = el.dataset.accent === "true";
        if (idx < ignitedCount) {
          el.style.color = isAccent ? "#0D3B2E" : "#161616";
          el.style.opacity = "1";
        } else {
          el.style.color = "rgba(13, 59, 46, 0.22)";
          el.style.opacity = "0.42";
        }
      });

      if (subtextRef.current) {
        const subPhase = Math.max(0, Math.min(1, (progress - 0.24) / 0.34));
        subtextRef.current.style.opacity = `${(0.25 + 0.75 * subPhase).toFixed(2)}`;
      }

      desktopCardRefs.current.forEach((cardEl, idx) => {
        if (!cardEl) return;
        const config = SCATTER_ITEMS[idx];

        const staggerDelay = idx * 0.05;
        const staggerAmount = staggerDelay * 0.15;
        const cardStart = 0.04 + staggerAmount;
        const cardEnd = Math.min(0.68 + staggerAmount, 0.88);

        const cardPhase = Math.max(0, Math.min(1, (progress - cardStart) / (cardEnd - cardStart)));
        const easePhase = 1 - Math.pow(1 - cardPhase, 2.4);

        const curX = config.start.x + (config.target.x * xMultiplier - config.start.x) * easePhase;
        const curY = config.start.y + (config.target.y * yMultiplier - config.start.y) * easePhase;
        const curRot = config.start.rotate + (config.target.rotate - config.start.rotate) * easePhase;
        const curScale = config.start.scale + (config.target.scale - config.start.scale) * easePhase;

        cardEl.style.setProperty("--tx", `${curX.toFixed(1)}px`);
        cardEl.style.setProperty("--ty", `${curY.toFixed(1)}px`);
        cardEl.style.setProperty("--rot", `${curRot.toFixed(2)}deg`);
        cardEl.style.setProperty("--scale", `${curScale.toFixed(3)}`);
      });
    };

    if (reduced) {
      applyDesktopProgress(1.0);
      return;
    }

    if (typeof manualProgress === "number") {
      applyDesktopProgress(manualProgress);
      return;
    }

    const handleResize = () => {
      const mults = getMultipliers();
      xMultiplier = mults.xMultiplier;
      yMultiplier = mults.yMultiplier;
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    let desktopTrigger: ScrollTrigger | null = null;
    if (desktopContainerRef.current) {
      desktopTrigger = ScrollTrigger.create({
        trigger: desktopContainerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.18,
        onUpdate: (self) => {
          applyDesktopProgress(self.progress);
        },
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (desktopTrigger) desktopTrigger.kill();
    };
  }, [manualProgress]);

  const getInitialDesktopStyle = (item: (typeof SCATTER_ITEMS)[0]) => {
    if (typeof manualProgress === "number") {
      const easePhase = 1 - Math.pow(1 - Math.max(0, Math.min(1, manualProgress)), 2.4);
      const curX = item.start.x + (item.target.x - item.start.x) * easePhase;
      const curY = item.start.y + (item.target.y - item.start.y) * easePhase;
      const curRot = item.start.rotate + (item.target.rotate - item.start.rotate) * easePhase;
      const curScale = item.start.scale + (item.target.scale - item.start.scale) * easePhase;
      return {
        "--tx": `${curX.toFixed(1)}px`,
        "--ty": `${curY.toFixed(1)}px`,
        "--rot": `${curRot.toFixed(2)}deg`,
        "--scale": `${curScale.toFixed(3)}`,
        zIndex: item.zIndex,
      } as React.CSSProperties;
    }
    return {
      "--tx": `${item.start.x}px`,
      "--ty": `${item.start.y}px`,
      "--rot": `${item.start.rotate}deg`,
      "--scale": `${item.start.scale}`,
      zIndex: item.zIndex,
    } as React.CSSProperties;
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP SCATTER & SCROLLFADETEXT STAGE (> 900px)
          ══════════════════════════════════════════════════════════════════ */}
      <section
        ref={desktopContainerRef}
        className={`${styles.scrollTrack} ${styles.desktopOnlyTrack}`}
      >
        <div className={styles.stickyViewport}>
          <div className={styles.ambientGlow} aria-hidden="true" />

          <div className={`container ${styles.stageContainer}`}>
            {/* Central Editorial Statement with ScrollFadeText */}
            <div
              ref={centerStageRef}
              className={styles.centerStage}
              style={
                typeof manualProgress === "number"
                  ? {
                      opacity: manualProgress >= 0.15 ? 1 : 0,
                      transform: manualProgress >= 0.15 ? "scale(1)" : "scale(0.95)",
                    }
                  : undefined
              }
            >
              <h2 ref={wordsWrapRef} className={styles.headline}>
                {HEADLINE_WORDS.map((w, idx) => (
                  <span
                    key={idx}
                    data-accent={w.accent ? "true" : "false"}
                    className={`${styles.headlineWord} ${
                      w.accent ? styles.headlineWordAccent : ""
                    }`}
                    style={
                      typeof manualProgress === "number" && manualProgress >= 0.5
                        ? {
                            color: w.accent ? "#0D3B2E" : "#161616",
                            opacity: 1,
                          }
                        : undefined
                    }
                  >
                    {w.text}
                    {w.breakAfter ? <br className={styles.headlineBr} /> : " "}
                  </span>
                ))}
              </h2>

              <p
                ref={subtextRef}
                className={styles.subtext}
                style={
                  typeof manualProgress === "number" && manualProgress >= 0.5
                    ? { opacity: 1 }
                    : undefined
                }
              >
                When bookings, chair allocations, and inventory depend on rushed chat threads,
                daily revenue leaks through the cracks.
              </p>
            </div>

            {/* Scattered Micro-Interface Cards (Framer ScrollScatter Style) */}
            <div className={styles.scatterStage}>
              {SCATTER_ITEMS.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    desktopCardRefs.current[idx] = el;
                  }}
                  className={styles.scatterCard}
                  style={getInitialDesktopStyle(item)}
                >
                  <div
                    className={`${styles.frameWindow} ${
                      item.id === "inbox" ? styles.frameWindowWhatsApp : ""
                    }`}
                  >
                    {item.renderSkeleton()}
                  </div>
                  <div className={styles.cardCaption}>
                    <span className={styles.frictionText}>{item.frictionLabel}</span>
                    <div className={styles.solutionPill}>
                      <span className={styles.solutionText}>{item.solutionLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE FRAMER SCROLL CARD STACK (<= 900px)
          Port of Framer ScrollCardStack with 100% Native Physics
          ══════════════════════════════════════════════════════════════════ */}
      <div className={styles.mobileOnlyTrack}>
        <MobileScrollCardStack />
      </div>
    </>
  );
}
