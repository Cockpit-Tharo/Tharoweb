"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Check,
  CheckCheck,
  ChevronLeft,
  Video,
  Phone,
  MoreVertical,
  Lock,
  Plus,
  Paperclip,
  Camera,
  Mic,
  Wifi,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { simulatorFlows, SimulatorMessage } from "@/data/simulatorFlows";
import styles from "./InteractiveHeroConsole.module.css";

function playMechanicalClick(freq = 340, endFreq = 130) {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.055);
    g.gain.setValueAtTime(0.08, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);
    osc.connect(g).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
    setTimeout(() => ctx.close().catch(() => {}), 200);
  } catch {
    // Ignore audio policies
  }
}

interface ERPStep {
  id: string;
  step: string;
  label: string;
  detail: string;
}

interface DomainConfig {
  id: string;
  flowKey: string;
  label: string;
  shortLabel: string;
  angle: number;
  erpSteps: ERPStep[];
}

const HERO_DOMAINS: DomainConfig[] = [
  {
    id: "dental",
    flowKey: "dental",
    label: "Dental Clinic",
    shortLabel: "Clinic",
    angle: -60,
    erpSteps: [
      { id: "e1", step: "01", label: "Consultation Booked", detail: "Tomorrow at 10:30 AM reserved" },
      { id: "e2", step: "02", label: "Doctor Notified", detail: "Dr. Mehta calendar updated" },
      { id: "e3", step: "03", label: "Intake Form Sent", detail: "Delivered directly on WhatsApp" },
      { id: "e4", step: "04", label: "Clinic Schedule Locked", detail: "Zero double-booking conflicts" },
    ],
  },
  {
    id: "salon",
    flowKey: "salon",
    label: "Salon Booking",
    shortLabel: "Salon",
    angle: -30,
    erpSteps: [
      { id: "e1", step: "01", label: "Appointment Confirmed", detail: "Tue 11:00 AM slot locked" },
      { id: "e2", step: "02", label: "Stylist Priya Assigned", detail: "Chair reserved automatically" },
      { id: "e3", step: "03", label: "Reminder Scheduled", detail: "Sent 2 hours before visit" },
      { id: "e4", step: "04", label: "Salon Calendar Synced", detail: "No phone tag or missed slots" },
    ],
  },
  {
    id: "realty",
    flowKey: "realty",
    label: "Real Estate Lead",
    shortLabel: "Realty",
    angle: 0,
    erpSteps: [
      { id: "e1", step: "01", label: "Site Visit Confirmed", detail: "Saturday 3:00 PM villa tour" },
      { id: "e2", step: "02", label: "Advisor Assigned", detail: "Senior advisor Neha S. alerted" },
      { id: "e3", step: "03", label: "Visitor Pass Sent", detail: "Digital QR code delivered" },
      { id: "e4", step: "04", label: "Buyer Profile Saved", detail: "Logged instantly to team list" },
    ],
  },
  {
    id: "events",
    flowKey: "events",
    label: "Events & RSVPs",
    shortLabel: "Events",
    angle: 30,
    erpSteps: [
      { id: "e1", step: "01", label: "RSVP Confirmed", detail: "Summit seat reserved" },
      { id: "e2", step: "02", label: "Entry Pass Issued", detail: "Digital QR sent on WhatsApp" },
      { id: "e3", step: "03", label: "Guest List Synced", detail: "Check-in desk notified" },
      { id: "e4", step: "04", label: "Event Agenda Shared", detail: "Full schedule sent to attendee" },
    ],
  },
  {
    id: "logistics",
    flowKey: "logistics",
    label: "Order & Logistics",
    shortLabel: "Logistics",
    angle: 60,
    erpSteps: [
      { id: "e1", step: "01", label: "Hold Confirmed", detail: "Held at local hub for 3 days" },
      { id: "e2", step: "02", label: "Pickup Code Issued", detail: "Code 4821 sent to customer" },
      { id: "e3", step: "03", label: "Location Pin Shared", detail: "Hub address and hours sent" },
      { id: "e4", step: "04", label: "Route Updated", detail: "Driver delivery list cleared" },
    ],
  },
];

const CYCLE_WORDS = ["booked.", "billed.", "synced.", "settled."];

interface InteractiveHeroConsoleProps {
  revealReady?: boolean;
  heroRevealed?: boolean;
}

export default function InteractiveHeroConsole({
  revealReady = true,
  heroRevealed = true,
}: InteractiveHeroConsoleProps) {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  // Cycling headline word
  const [cycleIndex, setCycleIndex] = useState(0);

  // Active domain selector (index 0..4)
  const [domainIdx, setDomainIdx] = useState(0);
  const activeDomain = HERO_DOMAINS[domainIdx] || HERO_DOMAINS[0];
  const activeFlowData = simulatorFlows[activeDomain.flowKey] || simulatorFlows.dental;

  // Simulator playback state
  const [visibleMessages, setVisibleMessages] = useState<SimulatorMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeStepCount, setActiveStepCount] = useState(0);
  const [replayKey, setReplayKey] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Cycle headline word periodically
  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % CYCLE_WORDS.length);
    }, 2800);
    return () => clearInterval(cycleTimer);
  }, []);

  // Reset scroll to top when flow switches
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = 0;
    }
  }, [domainIdx, replayKey]);

  // Auto-scroll messages area to bottom on new message or typing
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  // Main simulation lifecycle with 2-second initial pause
  useEffect(() => {
    if (!revealReady) return;

    setVisibleMessages([]);
    setIsTyping(false);
    setActiveStepCount(0);
    setIsRunning(true);

    const flow = simulatorFlows[activeDomain.flowKey];
    if (!flow) {
      setIsRunning(false);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Exact 2-second pause after preloader has clearly gone away before simulation starts
    const INITIAL_PAUSE = 2000;

    flow.messages.forEach((msg, idx) => {
      const scheduledTime = INITIAL_PAUSE + msg.delay;

      if (msg.from === "bot") {
        timers.push(
          setTimeout(() => {
            setIsTyping(true);
          }, Math.max(0, scheduledTime - 420))
        );
      }

      timers.push(
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => [...prev, msg]);
          setActiveStepCount((prev) => Math.min(prev + 1, activeDomain.erpSteps.length));

          if (idx === flow.messages.length - 1) {
            setIsRunning(false);
            setActiveStepCount(activeDomain.erpSteps.length);
          }
        }, scheduledTime)
      );
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [revealReady, domainIdx, replayKey, activeDomain.flowKey, activeDomain.erpSteps.length]);

  const handleSelectDomain = (index: number) => {
    if (domainIdx === index) {
      setReplayKey((k) => k + 1);
    } else {
      setDomainIdx(index);
    }
    playMechanicalClick(380, 160);
  };

  const handleRotateDial = () => {
    const nextIdx = (domainIdx + 1) % HERO_DOMAINS.length;
    setDomainIdx(nextIdx);
    playMechanicalClick(420, 180);
  };

  const handleRestart = () => {
    setReplayKey((k) => k + 1);
    playMechanicalClick(320, 140);
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgWordY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.15]);

  return (
    <section ref={sectionRef} id="sec-hero" className={styles.heroSection}>
      {/* Static ambient background glows */}
      <div className={styles.ambientLilac} aria-hidden="true" />
      <div className={styles.ambientEmerald} aria-hidden="true" />

      {/* Large background editorial watermark */}
      <motion.div
        className={styles.bgWord}
        style={reduced ? undefined : { y: bgWordY }}
        aria-hidden="true"
      >
        Automate
      </motion.div>

      {/* Scroll veil */}
      <motion.div
        className={styles.scrollVeil}
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      <div className={`container ${styles.heroInner}`}>
        {/* CENTERED HERO HEADER: HANGING HEADLINE WITH 3RD-ROW CYCLING WORD */}
        <motion.div
          className={styles.heroHeader}
          initial={false}
          animate={{
            opacity: heroRevealed ? 1 : 0,
            y: heroRevealed ? 0 : -22,
          }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.heroTitle}>
            <span className={styles.titleRowOne}>
              Automate your business.
            </span>
            <span className={styles.titleRowTwo}>
              Let every chat get
            </span>
            <span className={styles.titleRowThree}>
              <span className={styles.cycleContainer} aria-live="polite">
                {CYCLE_WORDS.map((w, idx) => (
                  <span
                    key={w}
                    className={`${styles.cycleWord} ${
                      idx === cycleIndex ? styles.cycleWordActive : ""
                    }`}
                    aria-hidden={idx !== cycleIndex}
                  >
                    {w}
                  </span>
                ))}
              </span>
            </span>
          </h1>
        </motion.div>

        {/* MOBILE REGULATOR STRIP */}
        <motion.div
          className={styles.mobileRegulatorBar}
          initial={false}
          animate={{
            opacity: heroRevealed ? 1 : 0,
            y: heroRevealed ? 0 : -14,
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={styles.mobileDialKnobWrap}
            onClick={handleRotateDial}
            title="Tap to turn dial"
            role="button"
            tabIndex={0}
            aria-label="Rotate sector dial"
          >
            <motion.div
              className={styles.mobileDialKnob}
              animate={{ rotate: activeDomain.angle }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            >
              <div className={styles.mobileDialNotch} />
            </motion.div>
          </div>

          <div className={styles.mobileSectorPills} role="tablist" aria-label="Select industry domain">
            {HERO_DOMAINS.map((domain, idx) => (
              <button
                key={domain.id}
                type="button"
                role="tab"
                aria-selected={domainIdx === idx}
                onClick={() => handleSelectDomain(idx)}
                className={`${styles.mobileSectorBtn} ${
                  domainIdx === idx ? styles.mobileSectorBtnActive : ""
                }`}
              >
                {domain.shortLabel}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3D CINEMATIC STAGE: REGULATOR + PHONE MOCKUP + ERP TELEMETRY DOCKET */}
        <div className={styles.heroStageWrapper}>
          {/* ─── MODULE 1: TACTILE REGULATOR DIAL MENU ─── */}
          <motion.div
            className={styles.regulatorModule}
            initial={false}
            animate={{
              opacity: heroRevealed ? 1 : 0,
              x: heroRevealed ? 0 : -24,
            }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.monoTagRow}>
              <span className={styles.monoTag}>System Regulator</span>
            </div>

            {/* All 5 Domain Selector List */}
            <div className={styles.domainList}>
              {HERO_DOMAINS.map((domain, idx) => {
                const isActive = domainIdx === idx;
                return (
                  <button
                    key={domain.id}
                    type="button"
                    onClick={() => handleSelectDomain(idx)}
                    className={`${styles.domainBtn} ${isActive ? styles.domainBtnActive : ""}`}
                  >
                    <span className={styles.domainIndex}>0{idx + 1}</span>
                    <span className={styles.domainLabel}>{domain.label}</span>
                    {isActive && <span className={styles.domainDot} />}
                  </button>
                );
              })}
            </div>

            {/* Tactile Rotary Dial Knob */}
            <div className={styles.dialCluster}>
              <div
                className={styles.dialOuter}
                onClick={handleRotateDial}
                title="Click knob or turn to switch domain"
                role="button"
                tabIndex={0}
                aria-label="Turn sector dial"
              >
                <motion.div
                  className={styles.dialKnob}
                  animate={{ rotate: activeDomain.angle }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                >
                  <div className={styles.dialNotch} />
                </motion.div>
              </div>

              <span className={styles.dialHint}>
                Turn dial or select domain
              </span>
            </div>
          </motion.div>

          {/* ─── MODULE 2: AUTHENTIC WHATSAPP PHONE MOCKUP (WITH EXACT DOODLE BG) ─── */}
          <div className={styles.phoneMockupContainer}>
            <div
              className={styles.phoneFrame}
              data-hero-phone-frame="true"
              style={{
                opacity: revealReady ? 1 : 0,
              }}
            >
              {/* iPhone Screen Container */}
              <div className={styles.phoneScreen}>
                {/* Status Bar with Dynamic Island */}
                <div className={styles.statusBar}>
                  <span className={styles.statusTime}>9:41</span>
                  <div className={styles.dynamicIsland}>
                    <span className={styles.islandCamera} />
                  </div>
                  <div className={styles.statusIcons}>
                    <Wifi size={12} />
                    <span className={styles.networkType}>5G</span>
                    <div className={styles.batteryPill}>
                      <div className={styles.batteryFill} />
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat Header */}
                <div className={styles.chatHeader}>
                  <div className={styles.headerLeft}>
                    <button type="button" className={styles.backBtn} aria-label="Back">
                      <ChevronLeft size={22} />
                    </button>
                    <div
                      className={styles.avatar}
                      style={{ backgroundColor: activeFlowData.avatarBg }}
                    >
                      <span>{activeFlowData.avatarText}</span>
                    </div>
                    <div className={styles.contactInfo}>
                      <div className={styles.chatNameRow}>
                        <span className={styles.chatName}>{activeFlowData.businessName}</span>
                        <span className={styles.verifiedBadge} title="Verified WhatsApp Business">
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#008069" />
                            <path
                              d="M4.5 8.2L6.8 10.5L11.5 5.8"
                              stroke="white"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className={styles.chatStatus}>
                        {isTyping ? (
                          <span className={styles.typingStatus}>typing...</span>
                        ) : (
                          <span>{activeFlowData.businessCategory}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.headerActions}>
                    <button
                      type="button"
                      className={styles.replayHeaderBtn}
                      onClick={handleRestart}
                      title="Restart conversation"
                      aria-label="Restart flow"
                    >
                      <RotateCcw size={13} className={isRunning ? styles.spinIcon : ""} />
                    </button>
                    <button type="button" className={`${styles.iconBtn} ${styles.headerVideoBtn}`} aria-label="Video Call">
                      <Video size={18} />
                    </button>
                    <button type="button" className={`${styles.iconBtn} ${styles.headerCallBtn}`} aria-label="Audio Call">
                      <Phone size={17} />
                    </button>
                    <button type="button" className={styles.iconBtn} aria-label="More Options">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>

                {/* Authentic WhatsApp Messages Canvas with Original Doodle Pattern */}
                <div ref={messagesRef} className={styles.messagesCanvas}>
                  {/* WhatsApp End-to-End Encryption Banner */}
                  <div className={styles.encryptionNotice}>
                    <Lock size={11} className={styles.lockIcon} />
                    <span>
                      Messages and calls are end-to-end encrypted. No one outside of this chat can read them.
                    </span>
                  </div>

                  {/* Date Divider */}
                  <div className={styles.dateDivider}>
                    <span>TODAY</span>
                  </div>

                  <AnimatePresence>
                    {visibleMessages.map((msg, i) => {
                      const isBot = msg.from === "bot";
                      return (
                        <motion.div
                          key={`${activeDomain.flowKey}-${i}`}
                          className={`${styles.bubble} ${isBot ? styles.bot : styles.userMsg}`}
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                          {isBot ? (
                            <svg viewBox="0 0 8 13" height="13" width="8" className={styles.tailIn}>
                              <path fill="#ffffff" d="M1.533 3.568L8 12.193V0H2.812C1.042 0 .474 1.769 1.533 3.568z" />
                            </svg>
                          ) : (
                            <svg viewBox="0 0 8 13" height="13" width="8" className={styles.tailOut}>
                              <path fill="#d9fdd3" d="M5.188 0H0v12.193l6.467-8.625C7.526 1.769 6.958 0 5.188 0z" />
                            </svg>
                          )}

                          <div className={styles.bubbleText}>
                            {msg.text.split("\n").map((line, j) => (
                              <span key={j}>
                                {line.replace(/\*(.*?)\*/g, "$1")}
                                {j < msg.text.split("\n").length - 1 && <br />}
                              </span>
                            ))}
                          </div>

                          {/* WhatsApp Business Edge-to-Edge Action Buttons */}
                          {isBot && msg.buttons && msg.buttons.length > 0 && (
                            <div className={styles.actionRow}>
                              {msg.buttons.map((btnText, bIdx) => (
                                <button key={bIdx} type="button" className={styles.actionBtn}>
                                  <span>{btnText}</span>
                                </button>
                              ))}
                            </div>
                          )}

                          <div className={styles.msgMeta}>
                            <span>9:{41 + i} AM</span>
                            {!isBot && <CheckCheck size={14} color="#53bdeb" />}
                          </div>
                        </motion.div>
                      );
                    })}

                    {isTyping && (
                      <motion.div
                        key="typing"
                        className={`${styles.bubble} ${styles.bot} ${styles.typingBubble}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <svg viewBox="0 0 8 13" height="13" width="8" className={styles.tailIn}>
                          <path fill="#ffffff" d="M1.533 3.568L8 12.193V0H2.812C1.042 0 .474 1.769 1.533 3.568z" />
                        </svg>
                        <div className={styles.typingDots}>
                          <span className={styles.dot} />
                          <span className={styles.dot} />
                          <span className={styles.dot} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div style={{ height: 12, flexShrink: 0 }} />
                </div>

                {/* Authentic WhatsApp Bottom Input Bar */}
                <div className={styles.inputBar}>
                  <button type="button" className={styles.attachBtn} aria-label="Add attachment">
                    <Plus size={20} />
                  </button>
                  <div className={styles.inputPill}>
                    <span className={styles.fakeInput}>Type a message...</span>
                    <div className={styles.pillIcons}>
                      <button type="button" className={styles.pillIconBtn} aria-label="Attach Document">
                        <Paperclip size={16} />
                      </button>
                      <button type="button" className={styles.pillIconBtn} aria-label="Camera">
                        <Camera size={16} />
                      </button>
                    </div>
                  </div>
                  <button type="button" className={styles.micBtn} aria-label="Voice Message">
                    <Mic size={17} />
                  </button>
                </div>

                {/* Home Indicator */}
                <div className={styles.homeBarWrapper}>
                  <div className={styles.homeIndicator} />
                </div>
              </div>
            </div>
          </div>

          {/* ─── MODULE 3: AUTOMATED BACKSTAGE ACTIONS (MINIMAL & JARGON-FREE) ─── */}
          <motion.div
            className={styles.automationDocket}
            initial={false}
            animate={{
              opacity: heroRevealed ? 1 : 0,
              x: heroRevealed ? 0 : 24,
            }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.docketHeader}>
              <div className={styles.docketTitleRow}>
                <span className={styles.docketTitle}>Updated Automatically</span>
              </div>
              <p className={styles.docketSubhead}>
                Every step completed without human staff
              </p>
            </div>

            {/* Clean, minimal action steps */}
            <div className={styles.actionStepList}>
              {activeDomain.erpSteps.map((item, sIdx) => {
                const isDone = sIdx < activeStepCount;
                const isCurrent = sIdx === activeStepCount && isRunning;
                return (
                  <div
                    key={item.id}
                    className={`${styles.actionStepRow} ${
                      isDone ? styles.actionStepDone : isCurrent ? styles.actionStepCurrent : ""
                    }`}
                  >
                    <div className={styles.checkCol}>
                      {isDone ? (
                        <div className={styles.checkCircleDone}>
                          <Check size={11} strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div className={styles.checkCirclePending} />
                      )}
                    </div>
                    <div className={styles.actionContent}>
                      <span className={styles.actionName}>{item.label}</span>
                      <span className={styles.actionDesc}>{item.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtle, jargon-free summary */}
            <div className={styles.docketFooter}>
              <div className={styles.footerSummaryItem}>
                <span className={styles.footerBullet} />
                <span>Instant confirmation</span>
              </div>
              <div className={styles.footerSummaryItem}>
                <span className={styles.footerBullet} />
                <span>Zero manual entry</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HERO CTA BUTTONS */}
        <motion.div
          className={styles.heroCtaRow}
          initial={false}
          animate={{
            opacity: heroRevealed ? 1 : 0,
            y: heroRevealed ? 0 : 16,
          }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/contact" className="btn-primary">
            <span>Book a Free Demo</span>
            <ArrowRight size={14} />
          </Link>
          <Link href="/pricing" className="btn-secondary">
            <span>View Pricing</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
