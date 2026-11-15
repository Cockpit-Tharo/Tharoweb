"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import styles from "./StackflowCards.module.css";
import { stackflowCardsData, StackflowCard } from "@/data/stackflowCards";
import { CheckCircle2, Shield, Mic, ChevronLeft, ChevronRight } from "lucide-react";

interface CardProps {
  card: StackflowCard;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

function CardInnerFace({ card, index }: { card: StackflowCard; index: number }) {
  const themeClass =
    card.theme === "forest"
      ? styles.themeForest
      : card.theme === "dark"
      ? styles.themeDark
      : card.theme === "sand"
      ? styles.themeSand
      : styles.themeLight;

  return (
    <div className={`${styles.cardFace} ${themeClass}`}>
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <div className={styles.cardTopRow}>
          <span className={styles.cardTag}>{card.tag}</span>
          <span className={styles.stepPill}>{index + 1}</span>
        </div>
        <h3 className={styles.cardTitle}>
          {card.title} {card.italicWord}
        </h3>
        <p className={styles.cardDesc}>{card.description}</p>
      </div>

      {/* Card Body: Interactive Visual */}
      <div className={styles.cardBody}>
        {/* Visual Preview Box */}
        <div className={styles.visualBox}>
          {card.visualType === "chat" && (
            <div className={styles.chatMock}>
              <div className={styles.chatBubbleBot}>
                <span>
                  Hello Rahul! We have your preferred time slots available. Which one suits you best?
                </span>
                <div className={styles.chatActionPills}>
                  <span className={styles.chatActionPill}>11:00 AM Today</span>
                  <span className={styles.chatActionPill}>02:30 PM Today</span>
                  <span className={styles.chatActionPill}>05:00 PM Tomorrow</span>
                </div>
              </div>
              <div className={styles.chatBubbleUser}>
                <span>11:00 AM Today please</span>
              </div>
              <div className={styles.chatBubbleBot}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <CheckCircle2 size={14} color="#008069" />
                  Confirmed for 11:00 AM. Slot locked on calendar and reminder set.
                </span>
              </div>
            </div>
          )}

          {card.visualType === "erp" && (
            <div className={styles.erpMock}>
              <div className={styles.erpHeader}>
                <span className={styles.erpHeaderTitle}>Central Business Ledger</span>
              </div>
              <div className={styles.erpRow}>
                <div className={styles.erpStep}>
                  <span>WhatsApp Order Received</span>
                </div>
                <span className={styles.erpTag}>Synced</span>
              </div>
              <div className={styles.erpRow}>
                <div className={styles.erpStep}>
                  <span>Inventory &amp; Stock Deducted</span>
                </div>
                <span className={styles.erpTag}>In Sync</span>
              </div>
              <div className={styles.erpRow}>
                <div className={styles.erpStep}>
                  <span>Tax Invoice Generated</span>
                </div>
                <span className={styles.erpTag}>Posted to ERP</span>
              </div>
              <div className={`${styles.erpRow} ${styles.erpRowHighlight}`}>
                <div className={styles.erpStep}>
                  <CheckCircle2 size={14} color="#20B87C" />
                  <span>Receipt Sent to Customer on WhatsApp</span>
                </div>
                <span className={styles.erpTagSuccess}>Delivered</span>
              </div>
            </div>
          )}

          {card.visualType === "inbox" && (
            <div className={styles.inboxMock}>
              <div className={styles.inboxItem}>
                <div className={styles.inboxAgent}>
                  <span>Pooja S. (Sales Desk)</span>
                </div>
                <span className={styles.inboxBadge}>Replying to New Lead</span>
              </div>
              <div className={styles.inboxItem}>
                <div className={styles.inboxAgent}>
                  <span>Kunal M. (Support Desk)</span>
                </div>
                <span className={styles.inboxBadge}>Assisting Order Delivery</span>
              </div>
              <div className={styles.inboxItem}>
                <div className={styles.inboxAgent}>
                  <Shield size={13} color="#20B87C" />
                  <span>Collision Guard</span>
                </div>
                <span className={styles.inboxBadge}>Prevents Double Replies</span>
              </div>
            </div>
          )}

          {card.visualType === "pipo" && (
            <div className={styles.pipoMock}>
              <div className={styles.pipoHeader}>
                <div className={styles.pipoMicBadge}>
                  <Mic size={14} color="#20B87C" />
                  <span>Pipo AI: Spoken Voice &amp; Business Answers</span>
                </div>
              </div>
              <div className={styles.pipoQueryRow}>
                <span className={styles.pipoPrompt}>&ldquo;How much sales did we do this week, and are any client invoices pending?&rdquo;</span>
              </div>
              <div className={styles.pipoAnswerRow}>
                <div className={styles.pipoAnswerBadge}>Instant Business Insight</div>
                <p>Total sales this week: ₹1,42,800. Two client invoices are due tomorrow. Follow-up list prepared.</p>
              </div>
              <div className={styles.pipoCommandRow}>
                <span>Spoken Command: &ldquo;Send payment reminders on WhatsApp&rdquo;</span>
                <span className={styles.pipoStatusPill}>Done</span>
              </div>
            </div>
          )}

          {card.visualType === "web" && (
            <div className={styles.webMock}>
              <div className={styles.scoreRow}>
                <div className={styles.scorePill}>
                  <div className={styles.scoreNum}>99</div>
                  <div className={styles.scoreText}>Performance</div>
                </div>
                <div className={styles.scorePill}>
                  <div className={styles.scoreNum}>100</div>
                  <div className={styles.scoreText}>Best Practices</div>
                </div>
                <div className={styles.scorePill}>
                  <div className={styles.scoreNum}>100</div>
                  <div className={styles.scoreText}>Local SEO</div>
                </div>
              </div>
              <div className={styles.searchSnippet}>
                <div className={styles.searchUrl}>tharo.tech/salon-bangalore</div>
                <div className={styles.searchTitle}>
                  #1 Ranked Salon Booking & Management in Bengaluru
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StackCard({ card, index, totalCards, progress }: CardProps) {
  // Discrete scroll-linked transforms for the 3D stacking deck
  // Each subsequent card slides in from below and seats at y: 0, scale: 1.
  // Preceding cards scale down and shift up into the background stack.
  let yTransform: MotionValue<number>;
  let scaleTransform: MotionValue<number>;
  let darkenOpacity: MotionValue<number>;

  if (index === 0) {
    yTransform = useTransform(
      progress,
      [0, 0.20, 0.32, 0.46, 0.58, 0.72, 0.84, 1.0],
      [0, 0, -14, -14, -28, -28, -42, -42]
    );
    scaleTransform = useTransform(
      progress,
      [0, 0.20, 0.32, 0.46, 0.58, 0.72, 0.84, 1.0],
      [1, 1, 0.97, 0.97, 0.94, 0.94, 0.91, 0.91]
    );
    darkenOpacity = useTransform(
      progress,
      [0, 0.20, 0.32, 0.46, 0.58, 0.72, 0.84, 1.0],
      [0, 0, 0.08, 0.08, 0.16, 0.16, 0.24, 0.24]
    );
  } else if (index === 1) {
    yTransform = useTransform(
      progress,
      [0, 0.16, 0.30, 0.46, 0.58, 0.72, 0.84, 1.0],
      [560, 560, 0, 0, -14, -14, -28, -28]
    );
    scaleTransform = useTransform(
      progress,
      [0, 0.16, 0.30, 0.46, 0.58, 0.72, 0.84, 1.0],
      [0.97, 0.97, 1, 1, 0.97, 0.97, 0.94, 0.94]
    );
    darkenOpacity = useTransform(
      progress,
      [0, 0.30, 0.46, 0.58, 0.72, 0.84, 1.0],
      [0, 0, 0, 0.08, 0.08, 0.16, 0.16]
    );
  } else if (index === 2) {
    yTransform = useTransform(
      progress,
      [0, 0.42, 0.56, 0.72, 0.84, 1.0],
      [560, 560, 0, 0, -14, -14]
    );
    scaleTransform = useTransform(
      progress,
      [0, 0.42, 0.56, 0.72, 0.84, 1.0],
      [0.97, 0.97, 1, 1, 0.97, 0.97]
    );
    darkenOpacity = useTransform(
      progress,
      [0, 0.56, 0.72, 0.84, 1.0],
      [0, 0, 0, 0.08, 0.08]
    );
  } else {
    // index === 3 (Last Card)
    yTransform = useTransform(
      progress,
      [0, 0.68, 0.82, 1.0],
      [560, 560, 0, 0]
    );
    scaleTransform = useTransform(
      progress,
      [0, 0.68, 0.82, 1.0],
      [0.97, 0.97, 1, 1]
    );
    darkenOpacity = useTransform(progress, [0, 1], [0, 0]);
  }

  return (
    <motion.div
      className={styles.cardAnchor}
      style={{
        y: yTransform,
        scale: scaleTransform,
        zIndex: 10 + index,
      }}
    >
      {/* Subtle Depth Shadow Overlay when pushed back into stack */}
      <motion.div
        className={styles.depthDimmer}
        style={{ opacity: darkenOpacity }}
      />
      <CardInnerFace card={card} index={index} />
    </motion.div>
  );
}

const systemTabs = [
  { id: 0, label: "ERP Sync", num: "1" },
  { id: 1, label: "Pipo AI", num: "2" },
  { id: 2, label: "WhatsApp", num: "3" },
  { id: 3, label: "Team Inbox", num: "4" },
];

export default function StackflowCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = stackflowCardsData.length;
  const activeCard = stackflowCardsData[activeMobileIndex];

  return (
    <section ref={containerRef} className={styles.scrollTrack}>
      <div className={styles.stage}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>
            WhatsApp, AI, and ERP <br />
            in one workflow.
          </h2>
          <p className={styles.sectionSubtitle}>
            Four connected layers linking ledgers, voice commands, and customer chats.
          </p>
        </div>

        {/* ─── DESKTOP: 3D STACKING DECK (Hidden on mobile) ─── */}
        <div className={styles.desktopDeck}>
          <div className={styles.deckViewport}>
            {stackflowCardsData.map((card, idx) => (
              <StackCard
                key={card.id}
                card={card}
                index={idx}
                totalCards={totalCards}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* ─── MOBILE: ZERO-OVERLAP CARD CAROUSEL (Visible only on mobile <= 768px) ─── */}
        <div className={styles.mobileDeck}>
          {/* Top System Switcher Tabs */}
          <div className={styles.mobileTabs} role="tablist" aria-label="Select System">
            {systemTabs.map((tab) => {
              const isActive = activeMobileIndex === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.mobileTabBtn} ${isActive ? styles.mobileTabActive : ""}`}
                  onClick={() => setActiveMobileIndex(tab.id)}
                >
                  <span className={styles.mobileTabNum}>{tab.num}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Card View (100% visible, Zero Overlap) */}
          <div className={styles.mobileCardContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className={styles.mobileCardWrapper}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40 && activeMobileIndex < totalCards - 1) {
                    setActiveMobileIndex(activeMobileIndex + 1);
                  } else if (info.offset.x > 40 && activeMobileIndex > 0) {
                    setActiveMobileIndex(activeMobileIndex - 1);
                  }
                }}
              >
                <CardInnerFace card={activeCard} index={activeMobileIndex} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls: Previous Arrow + Dots + Next Arrow */}
          <div className={styles.mobileNavRow}>
            <button
              type="button"
              className={`${styles.navArrowBtn} ${activeMobileIndex === 0 ? styles.navArrowDisabled : ""}`}
              onClick={() => setActiveMobileIndex(Math.max(0, activeMobileIndex - 1))}
              disabled={activeMobileIndex === 0}
              aria-label="Previous system"
            >
              <ChevronLeft size={16} />
            </button>

            <div className={styles.mobileDots}>
              {stackflowCardsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.mobileDot} ${activeMobileIndex === idx ? styles.mobileDotActive : ""}`}
                  onClick={() => setActiveMobileIndex(idx)}
                  aria-label={`Go to system ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className={`${styles.navArrowBtn} ${activeMobileIndex === totalCards - 1 ? styles.navArrowDisabled : ""}`}
              onClick={() => setActiveMobileIndex(Math.min(totalCards - 1, activeMobileIndex + 1))}
              disabled={activeMobileIndex === totalCards - 1}
              aria-label="Next system"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
