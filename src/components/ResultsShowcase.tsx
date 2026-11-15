"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  CheckCheck,
  Zap,
  Send,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import styles from "./ResultsShowcase.module.css";
import { CinematicLineMaskHeading, CinematicSubhead } from "./CinematicText";

const tabs = [
  { id: 0, num: "01", label: "98% Read Rate" },
  { id: 1, num: "02", label: "5-Day Launch" },
  { id: 2, num: "03", label: "0% Markup" },
];

const roadmapDays = [
  {
    day: 1,
    title: "Workflow Mapping & Architecture",
    badge: "Day 1 Kickoff",
    desc: "We analyze your customer touchpoints, lead forms, and booking scripts, mapping the exact conversational automation flow for your sector.",
  },
  {
    day: 2,
    title: "Official Meta API Verification",
    badge: "Official Meta Tech",
    desc: "We configure your official WhatsApp Business account and Meta Cloud API credentials, establishing direct wholesale billing with zero middleman.",
  },
  {
    day: 3,
    title: "Database, POS & ERP Integration",
    badge: "Live Data Bridge",
    desc: "We connect your internal systems: Tally, Petpooja, Shopify, or Google Sheets. Invoices and appointments sync in real time without manual entry.",
  },
  {
    day: 4,
    title: "Edge-Case Stress Testing",
    badge: "500+ Scenarios",
    desc: "We simulate 500+ customer inputs (reschedules, cancellations, typos, payment retries) to verify fallback logic and smooth team handoffs.",
  },
  {
    day: 5,
    title: "Production Launch & Staff Handoff",
    badge: "Zero Downtime",
    desc: "Your system goes live. Your staff starts answering qualified conversations from one clean shared number with zero training required.",
  },
];

export default function ResultsShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  // Tab 0 state: Simulated ping
  const [pingState, setPingState] = useState<"idle" | "sent" | "delivered" | "read">("read");

  const triggerPing = () => {
    setPingState("sent");
    setTimeout(() => {
      setPingState("delivered");
      setTimeout(() => {
        setPingState("read");
      }, 700);
    }, 450);
  };

  // Tab 1 state: Selected day
  const [selectedDay, setSelectedDay] = useState(1);

  // Tab 2 state: Message volume slider
  const [monthlyVolume, setMonthlyVolume] = useState(25000);

  // Calculation based on blended Meta utility/marketing rates:
  // Wholesale Meta pass-through: ~₹0.32 / msg (blended average)
  // Third-party aggregators: ~35% markup (~₹0.43 / msg) + per-seat platform fee
  const metaCost = Math.round(monthlyVolume * 0.32);
  const aggregatorCost = Math.round(monthlyVolume * 0.43 + 3999);
  const tharoTotalCost = metaCost + 2999;
  const netSavings = Math.max(0, aggregatorCost - tharoTotalCost);

  return (
    <section className={styles.section} id="results">
      <div className={`container ${styles.inner}`}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Why teams{" "}
            <em className={`italic-serif ${styles.italicAccent}`}>
              switch to Tharo.
            </em>
          </h2>
          <p className={styles.subtitle}>
            Direct Meta billing, fast setup, and high customer response rates.
          </p>
        </div>

        {/* Tactile Mode Selector */}
        <div className={styles.selectorWrapper}>
          <div className={styles.selectorBar} role="tablist">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.selectorBtn} ${isActive ? styles.selectorActive : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className={styles.tabPillBg}
                      transition={{ type: "spring", stiffness: 420, damping: 35 }}
                    />
                  )}
                  <span className={styles.tabNum}>{tab.num}</span>
                  <span className={styles.tabLabel}>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Expansive Living Proof Stage */}
        <div className={styles.stage}>
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="tab-0"
                className={styles.editorialCol}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className={styles.statSuper}>
                  98% <em>read</em>
                </div>

                <h3 className={styles.editorialHeadline}>
                  Messages Customers Open
                </h3>

                <p className={styles.editorialParagraph}>
                  Emails sit unread and unknown calls go to voicemail. Booking alerts, bills, and updates sent on WhatsApp get opened and answered in minutes.
                </p>

                <div className={styles.proofList}>
                  <div className={styles.proofItem}>
                    <span className={styles.proofCheck}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>High open and reply rates on bookings and bills</span>
                  </div>

                  <div className={styles.proofItem}>
                    <span className={styles.proofCheck}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Delivery status and read receipts inside your dashboard</span>
                  </div>

                  <div className={styles.proofItem}>
                    <span className={styles.proofCheck}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Reaches customers directly without landing in spam folders</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div
                key="tab-1"
                className={styles.editorialCol}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className={styles.statSuper}>
                  5 days <em>to launch</em>
                </div>

                <h3 className={styles.editorialHeadline}>
                  Configured for Your Workflow
                </h3>

                <p className={styles.editorialParagraph}>
                  Our engineers configure your WhatsApp number, connect your billing tools, and train your staff in five days.
                </p>

                <div className={styles.proofList}>
                  <div className={styles.proofItem}>
                    <span className={styles.proofCheck}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Full setup and custom flow design included</span>
                  </div>

                  <div className={styles.proofItem}>
                    <span className={styles.proofCheck}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Live sync with Tally, POS, or your existing ERP</span>
                  </div>

                  <div className={styles.proofItem}>
                    <span className={styles.proofCheck}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Minimal training: staff manage chats from one screen</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 2 && (
              <motion.div
                key="tab-2"
                className={styles.editorialCol}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className={styles.statSuper}>
                  0.0% <em>markup</em>
                </div>

                <h3 className={styles.editorialHeadline}>
                  Direct Meta Billing
                </h3>

                <p className={styles.editorialParagraph}>
                  Meta charges your own card at official conversation rates. You pay us only a flat monthly software fee with zero per-message markup.
                </p>

                <div className={styles.proofList}>
                  <div className={styles.proofItem}>
                    <span className={styles.proofCheck}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>0% markup on Meta utility and service messages</span>
                  </div>

                  <div className={styles.proofItem}>
                    <span className={styles.proofCheck}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Paid directly from your business card to Meta</span>
                  </div>

                  <div className={styles.proofItem}>
                    <span className={styles.proofCheck}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>72-hour free window for Click-to-WhatsApp ad leads</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right-Side Telemetry & Proof Console (Desktop) */}
          <div className={styles.consoleCard}>
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="console-0"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.consoleHeader}>
                    <div className={styles.consoleTitle}>
                      <span>Delivery Status</span>
                    </div>
                    <span className={styles.consoleTag}>Meta Cloud API</span>
                  </div>

                  <div className={styles.chatPreviewBubble}>
                    <div>
                      Hi Rahul, your appointment with Dr. Arvind is confirmed for tomorrow at 10:30 AM.
                      Reply 1 to confirm, or 2 to reschedule.
                    </div>
                    <div className={styles.chatPreviewMeta}>
                      <span>09:41 AM</span>
                      {pingState === "sent" && <Check size={13} color="rgba(247,246,236,0.6)" />}
                      {pingState === "delivered" && <CheckCheck size={13} color="rgba(247,246,236,0.6)" />}
                      {pingState === "read" && <CheckCheck size={13} color="#20B87C" />}
                    </div>
                  </div>

                  <div className={styles.telemetrySteps}>
                    <div className={`${styles.telemetryRow} ${styles.telemetryRowActive}`}>
                      <div className={styles.telemetryLabel}>
                        <Check size={12} color="#20B87C" />
                        <span>Dispatched to Cloud API</span>
                      </div>
                      <span className={styles.telemetryTime}>09:41:00 AM</span>
                    </div>

                    <div
                      className={`${styles.telemetryRow} ${
                        pingState === "delivered" || pingState === "read" ? styles.telemetryRowActive : ""
                      }`}
                    >
                      <div className={styles.telemetryLabel}>
                        <CheckCheck size={13} color={pingState === "sent" ? "gray" : "#20B87C"} />
                        <span>Delivered to Handset</span>
                      </div>
                      <span className={styles.telemetryTime}>Confirmed</span>
                    </div>

                    <div
                      className={`${styles.telemetryRow} ${
                        pingState === "read" ? styles.telemetryRowActive : ""
                      }`}
                    >
                      <div className={styles.telemetryLabel}>
                        <CheckCheck size={13} color={pingState === "read" ? "#20B87C" : "gray"} />
                        <span>Opened by Customer</span>
                      </div>
                      <span className={styles.telemetryTime}>
                        {pingState === "read" ? "Read" : "Pending"}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={styles.actionBtn}
                    onClick={triggerPing}
                    disabled={pingState === "sent" || pingState === "delivered"}
                  >
                    <RefreshCw size={14} />
                    <span>Send Test Message</span>
                  </button>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="console-1"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.consoleHeader}>
                    <div className={styles.consoleTitle}>
                      <span>5-Day Turnkey Sprint</span>
                    </div>
                    <span className={styles.consoleTag}>Milestones</span>
                  </div>

                  <div className={styles.daysRail}>
                    {roadmapDays.map((step) => {
                      const isSel = selectedDay === step.day;
                      return (
                        <button
                          key={step.day}
                          type="button"
                          className={`${styles.dayBtn} ${isSel ? styles.dayBtnActive : ""}`}
                          onClick={() => setSelectedDay(step.day)}
                        >
                          <span className={styles.dayNum}>Day {step.day}</span>
                        </button>
                      );
                    })}
                  </div>

                  {(() => {
                    const currentStep = roadmapDays.find((d) => d.day === selectedDay)!;
                    return (
                      <div className={styles.dayDetailCard}>
                        <div className={styles.dayDetailHeader}>
                          <h4 className={styles.dayDetailTitle}>{currentStep.title}</h4>
                          <span className={styles.dayBadge}>{currentStep.badge}</span>
                        </div>
                        <p className={styles.dayDetailDesc}>{currentStep.desc}</p>
                      </div>
                    );
                  })()}

                  <div
                    style={{
                      fontFamily: "var(--font-hanken), sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(247, 246, 236, 0.6)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
                    }}
                  >
                    <Zap size={14} color="#E2D8FF" />
                    <span>Select any day above to review engineering deliverables.</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="console-2"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.consoleHeader}>
                    <div className={styles.consoleTitle}>
                      <span>Direct Meta Rate Estimator</span>
                    </div>
                    <span className={styles.consoleTag}>Official Pricing</span>
                  </div>

                  <div className={styles.sliderBox}>
                    <div className={styles.sliderMeta}>
                      <span>Monthly Conversation Volume</span>
                      <span className={styles.sliderVal}>
                        {monthlyVolume.toLocaleString()} msgs / mo
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5000}
                      max={150000}
                      step={5000}
                      value={monthlyVolume}
                      onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                      className={styles.slider}
                    />
                  </div>

                  <div className={styles.calcComparison}>
                    <div className={styles.calcBox}>
                      <div className={styles.calcLabel}>Typical Aggregator</div>
                      <div className={styles.calcNum}>
                        ₹{aggregatorCost.toLocaleString()}
                      </div>
                      <div className={styles.calcSub}>40% Markup + seat tax</div>
                    </div>

                    <div className={`${styles.calcBox} ${styles.calcBoxHighlight}`}>
                      <div className={styles.calcLabel} style={{ color: "#20B87C" }}>
                        With Tharo Tech
                      </div>
                      <div className={`${styles.calcNum} ${styles.calcHighlightNum}`}>
                        ₹{tharoTotalCost.toLocaleString()}
                      </div>
                      <div className={styles.calcSub}>Meta at cost + flat SaaS</div>
                    </div>
                  </div>

                  <div className={styles.savingsCallout}>
                    <span>Estimated Monthly Savings</span>
                    <span style={{ fontSize: "1rem", color: "#FFFFFF" }}>
                      ₹{netSavings.toLocaleString()} / mo
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
