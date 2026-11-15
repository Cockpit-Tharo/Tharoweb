"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MessageSquare, Mic, Calendar, CreditCard, ArrowRight, RotateCcw, TrendingUp } from "lucide-react";
import styles from "./KineticParadigmShift.module.css";

interface ShiftNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  detail: string;
  badge: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const SHIFT_NODES: ShiftNode[] = [
  {
    id: "inbound",
    step: "01",
    title: "Customer Inbound Ping",
    subtitle: "WhatsApp inquiries at any hour",
    detail: "Direct message received and parsed in 0.4 seconds.",
    badge: "Instant Ingest",
    icon: MessageSquare,
  },
  {
    id: "voice",
    step: "02",
    title: "Pipo Voice Capture",
    subtitle: "Hands-free clinic voice memos",
    detail: "Turns spoken instructions into structured operational tasks.",
    badge: "120ms Latency",
    icon: Mic,
  },
  {
    id: "erp",
    step: "03",
    title: "Synchronous ERP Ledger",
    subtitle: "Calendar & inventory lock",
    detail: "Doctor chair reserved and two product kits deducted live.",
    badge: "Zero Conflict",
    icon: Calendar,
  },
  {
    id: "upi",
    step: "04",
    title: "Direct UPI Settlement",
    subtitle: "Automated GST receipts",
    detail: "Payment settles straight to your bank at 0% Meta fee markup.",
    badge: "Direct Settle",
    icon: CreditCard,
  },
  {
    id: "retention",
    step: "05",
    title: "Autonomous Review & Retention",
    subtitle: "Post-visit care & feedback loop",
    detail: "Timed WhatsApp follow-up triggers 5-star Google review and 30-day recall.",
    badge: "5.0 Star Guard",
    icon: RotateCcw,
  },
  {
    id: "reconciliation",
    step: "06",
    title: "Nightly Owner Ledger",
    subtitle: "End-of-day financial briefing",
    detail: "Closing revenue, chair utilization, and stock balance sent to your phone at 9 PM.",
    badge: "Daily Pulse",
    icon: TrendingUp,
  },
];

export default function KineticParadigmShift() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overflowRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const [maxShift, setMaxShift] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const updateShift = () => {
      if (!ribbonRef.current || !overflowRef.current) return;
      const ribbonWidth = ribbonRef.current.scrollWidth;
      const viewWidth = window.innerWidth;
      const cs = window.getComputedStyle(overflowRef.current);
      const leftPad = parseFloat(cs.paddingLeft) || 20;
      const rightPad = parseFloat(cs.paddingRight) || 20;
      const shift = Math.max(0, ribbonWidth + leftPad + rightPad - viewWidth);
      setMaxShift(shift);
    };

    updateShift();

    const ro = new ResizeObserver(() => updateShift());
    if (ribbonRef.current) ro.observe(ribbonRef.current);
    window.addEventListener("resize", updateShift);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateShift);
    };
  }, [reduced]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hold at start (0 to 0.06) for Card 01 to be read
  // Smoothly glide across all nodes (0.06 to 0.92)
  // Hold at end (0.92 to 1.0) for Card 06 to settle before unpinning
  const xGlide = useTransform(scrollYProgress, (v) => {
    if (reduced || maxShift <= 0) return 0;
    if (v <= 0.06) return 0;
    if (v >= 0.92) return -maxShift;
    const t = (v - 0.06) / (0.92 - 0.06);
    // Smoothstep easing for physical fluidity
    const eased = t * t * (3 - 2 * t);
    return -eased * maxShift;
  });

  const textScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);

  return (
    <section ref={containerRef} className={styles.shiftSectionTrack}>
      <div className={styles.stickyStage}>
        <div className="container">
          {/* Kinetic Header */}
          <div className={styles.headerBlock}>
            <motion.h2
              className={styles.title}
              style={reduced ? undefined : { scale: textScale }}
            >
              Shifting daily business from
              <br />
              <em className={`italic-serif ${styles.titleAccent}`}>
                scattered friction to autonomous flow.
              </em>
            </motion.h2>
          </div>
        </div>

        {/* Horizontal Traveling Operational Pipeline Ribbon */}
        <div ref={overflowRef} className={styles.ribbonOverflow}>
          <motion.div
            ref={ribbonRef}
            className={styles.ribbonTrack}
            style={reduced ? undefined : { x: xGlide }}
          >
            {SHIFT_NODES.map((node, i) => {
              const Icon = node.icon;
              return (
                <div key={node.id} className={styles.nodeBlock}>
                  <div className={styles.stationCard}>
                    <div className={styles.cardTop}>
                      <div className={styles.stationBadge}>
                        <span className={styles.stationNum}>{node.step}</span>
                        <Icon size={15} />
                      </div>
                      <span className={styles.badgePill}>{node.badge}</span>
                    </div>

                    <h3 className={styles.cardHeading}>{node.title}</h3>
                    <div className={styles.cardSub}>{node.subtitle}</div>
                    <p className={styles.cardDetail}>{node.detail}</p>
                  </div>

                  {i < SHIFT_NODES.length - 1 && (
                    <div className={styles.connectorSpan}>
                      <div className={styles.dashedConduit} />
                      <div className={styles.arrowCircle}>
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
