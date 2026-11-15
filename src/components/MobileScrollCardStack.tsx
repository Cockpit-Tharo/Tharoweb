"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import {
  MessageSquare,
  Calendar,
  Lock,
  Package,
  Mic,
  Star,
  Check,
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import styles from "./MobileScrollCardStack.module.css";

const clamp = (val: number, min: number, max: number) =>
  Math.min(max, Math.max(min, val));

/* ─── 4 Clinic Cards Definition ─── */
interface CardData {
  id: string;
  title: string;
  badge: string;
  badgeClass: string;
  icon: React.ComponentType<{ size?: number; className?: string; color?: string; style?: React.CSSProperties }>;
  iconColor: string;
  benefit: string;
  solutionLabel: string;
  renderBody: () => React.ReactNode;
}

const CARDS: CardData[] = [
  {
    id: "inbound",
    title: "Smart Rescheduling",
    badge: "Instant reply",
    badgeClass: styles.badgeSage,
    icon: MessageSquare,
    iconColor: "#20B87C",
    benefit: "Late-night appointment changes handled automatically",
    solutionLabel: "24/7 Smart Rescheduling",
    renderBody: () => (
      <div>
        <div className={styles.chatInbound}>
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

        <div className={styles.chatOutbound}>
          <div className={styles.outboundHeaderRow}>
            <span className={styles.pipoTag}>Rescheduled</span>
            <span className={styles.verifiedCheck}>
              <Check size={10} />
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
    ),
  },
  {
    id: "schedules",
    title: "Schedule Shield",
    badge: "Conflict-Free",
    badgeClass: styles.badgeViolet,
    icon: Calendar,
    iconColor: "#A78BFA",
    benefit: "Stops double-booked doctors and overlapping patient chairs",
    solutionLabel: "Live Calendar Protection",
    renderBody: () => (
      <div className={styles.timetableList}>
        <div className={styles.timeSlotRow}>
          <span className={styles.timeMarker}>10:00 AM</span>
          <div className={styles.slotPillSuccess}>
            <Lock size={10} />
            <span>Dr. Kapoor · Room 1 [In Progress]</span>
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
            <span>Kavita M. · Confirmed via WhatsApp</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "inventory",
    title: "Voice Stock Tracking",
    badge: "Voice-logged",
    badgeClass: styles.badgeAmber,
    icon: Package,
    iconColor: "#FDE68A",
    benefit: "Supplies deducted the moment treatments finish via spoken memo",
    solutionLabel: "Voice Inventory Sync",
    renderBody: () => (
      <div className={styles.stockBlock}>
        <div className={styles.skuRow}>
          <div className={styles.skuInfo}>
            <span className={styles.skuBadge}>Supply Item</span>
            <span className={styles.skuName}>Ceramic Crown Kit</span>
          </div>
          <span className={styles.deductPill}>-2 Units</span>
        </div>

        <div className={styles.voiceQuoteRow}>
          <Mic size={12} className={styles.micIcon} />
          <span className={styles.voiceQuoteText}>
            Dr. Roy: &quot;Used 2 ceramic crowns in Room 3&quot;
          </span>
        </div>

        <div className={styles.meterBlock}>
          <div className={styles.meterLabels}>
            <span>Available Stock</span>
            <span className={styles.meterDigits}>28 / 30 Kits (93%)</span>
          </div>
          <div className={styles.meterTrack}>
            <div className={styles.meterFill} style={{ width: "93%" }} />
          </div>
        </div>

        <div className={styles.ledgerRow}>
          <span>Logged directly to ERP</span>
          <span className={styles.ledgerStatus}>In Stock · Safe</span>
        </div>
      </div>
    ),
  },
  {
    id: "followups",
    title: "Patient Retention",
    badge: "Automated",
    badgeClass: styles.badgeEmerald,
    icon: Sparkles,
    iconColor: "#34D399",
    benefit: "Brings past patients back automatically with zero phone calls",
    solutionLabel: "Automated Patient Recall",
    renderBody: () => (
      <div className={styles.retentionBlock}>
        <div className={styles.patientRow}>
          <div className={styles.avatar}>PS</div>
          <div className={styles.patientMeta}>
            <span className={styles.patientName}>Pooja S.</span>
            <span className={styles.patientStage}>6-Month Checkup Due</span>
          </div>
        </div>

        <div className={styles.nudgeBox}>
          Hi Pooja! Time for your 6-month cleaning. Tap below to pick a slot.
        </div>

        <div className={styles.reviewRow}>
          <div className={styles.starsRow}>
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} size={11} fill="#F59E0B" color="#F59E0B" />
            ))}
          </div>
          <span className={styles.reviewScore}>5.0 Google Review Collected</span>
        </div>

        <div className={styles.growthRow}>
          <TrendingUp size={12} />
          <span>Patient auto-rebooked for Saturday 10:00 AM</span>
        </div>
      </div>
    ),
  },
];

/* ─── Individual Moving Stack Card (Framer ScrollCardStack Physics) ─── */
interface MovingCardProps {
  card: CardData;
  index: number;
  count: number;
  progress: any;
  depth?: number;
  rotation?: number;
  intro?: number;
  onClick?: () => void;
}

function MovingCard({
  card,
  index,
  count,
  progress,
  depth = 6.5,
  rotation = 3.5,
  intro = 0.25,
  onClick,
}: MovingCardProps) {
  // Step calculates which card is active based on scroll progress:
  const step = useTransform(
    progress,
    (v: number) => v * (Math.max(0, count - 1) + intro) - intro
  );

  // y: Card 0 starts at 0% (base of deck). Subsequent cards fly in from below (155% -> 0%).
  // Landed cards shift upwards by -depth% as subsequent cards land on top.
  const y = useTransform(step, (s: number) => {
    if (index === 0) {
      return s > 0 ? `${-Math.min(s, 3) * depth}%` : "0%";
    }
    return index > s
      ? `${clamp(index - s, 0, 1) * 155}%`
      : `${-Math.min(s - index, 3) * depth}%`;
  });

  // scale: landed cards slightly scale down as subsequent cards land
  const scale = useTransform(step, (s: number) =>
    1 - Math.min(Math.max(s - index, 0), 3) * 0.032
  );

  // rotate: subtle alternating rotation
  const rotate = useTransform(step, (s: number) => {
    if (index === 0) {
      return (s > 0 ? -1 : 0) * (rotation * 0.4) * Math.min(1, Math.max(0, s));
    }
    return (index % 2 ? -1 : 1) * rotation * clamp(index - s, -1, 1);
  });

  // opacity: Card 0 is always opaque; others enter smoothly
  const opacity = useTransform(step, (s: number) => {
    if (index === 0) return 1;
    return clamp((1 - (index - s)) * 4, 0, 1);
  });

  const HeaderIcon = card.icon;

  return (
    <motion.article
      className={styles.stackCard}
      style={{
        zIndex: index + 1,
        y,
        scale,
        rotate,
        opacity,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={card.title}
    >
      {/* Card Header Tab */}
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.headerIconWrap}>
            <HeaderIcon size={13} style={{ color: card.iconColor }} />
          </div>
          <span className={styles.cardTitle}>{card.title}</span>
        </div>
        <span className={`${styles.cardBadge} ${card.badgeClass}`}>
          {card.badge}
        </span>
      </div>

      {/* Card Body */}
      <div className={styles.cardBody}>{card.renderBody()}</div>

      {/* Card Footer Solution Pill */}
      <div className={styles.cardFooter}>
        <span className={styles.footerNote}>{card.benefit}</span>
        <span className={styles.footerPill}>{card.solutionLabel}</span>
      </div>
    </motion.article>
  );
}

/* ─── Exported Mobile Scroll Card Stack ─── */
export default function MobileScrollCardStack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const count = CARDS.length;
  const intro = 0.25;
  const distance = 360; // px of scroll runway per card
  const runway = (Math.max(0, count - 1) + intro) * distance;

  const [activeIdx, setActiveIdx] = useState(0);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const stepVal = v * (Math.max(0, count - 1) + intro) - intro;
    const current = Math.max(0, Math.min(count - 1, Math.floor(Math.max(0, stepVal + 0.35))));
    setActiveIdx(current);
  });

  const handleSelectCard = (index: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const trackTop = window.scrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    if (totalScrollable <= 0) return;

    const targetProgress = (index + intro) / (count - 1 + intro);
    const targetScrollY = trackTop + targetProgress * totalScrollable;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  return (
    <section
      ref={trackRef}
      className={styles.mobileTrack}
      style={{
        height: reduced ? "auto" : `calc(100svh + ${runway}px)`,
        paddingBottom: reduced ? "2rem" : 0,
        marginBottom: "2.5rem",
      }}
    >
      <div className={styles.stickyStage}>
        <div className={styles.ambientGlow} aria-hidden="true" />

        {/* Top Headline */}
        <div className={styles.headerWrap}>
          <h2 className={styles.headline}>
            WhatsApp is where your clients are,{" "}
            <em className={styles.headlineAccent}>
              but manual memory should not run your clinic.
            </em>
          </h2>
        </div>

        {/* Centered Stacking Cards Grid */}
        <div className={styles.cardsGridStage}>
          {CARDS.map((card, idx) => (
            <MovingCard
              key={card.id}
              card={card}
              index={idx}
              count={count}
              progress={scrollYProgress}
              depth={6.5}
              rotation={3.5}
              intro={intro}
              onClick={() => handleSelectCard(idx)}
            />
          ))}
        </div>

        {/* Bottom HUD Pagination Indicator */}
        <div className={styles.bottomHud}>
          <div className={styles.hudPills}>
            {CARDS.map((_, i) => (
              <span
                key={i}
                className={`${styles.hudPill} ${
                  activeIdx === i ? styles.hudPillActive : ""
                }`}
                onClick={() => handleSelectCard(i)}
                role="button"
                tabIndex={0}
                aria-label={`Jump to ${CARDS[i].title}`}
              />
            ))}
          </div>

          <span className={styles.hudLabel}>
            {CARDS[activeIdx]?.solutionLabel}
          </span>

          <span className={styles.hudCounter}>
            0{activeIdx + 1} / 0{count}
          </span>
        </div>
      </div>
    </section>
  );
}
