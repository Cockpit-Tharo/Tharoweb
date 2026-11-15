"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollWarpDrum, { AnatomyStepData } from "./ScrollWarpDrum";
import styles from "./SystemAnatomyStage.module.css";

const ANATOMY_STEPS: AnatomyStepData[] = [
  {
    id: "ingest",
    stepNumber: "01",
    category: "Inbound Capture",
    title: "Capture every customer ping and staff voice note",
    body: "Whether a client messages on WhatsApp or a technician drops a quick audio memo into Pipo, the message is received immediately.",
    summary: "WhatsApp & voice capture",
    previewTitle: "Customer WhatsApp Message",
    previewPayload: '"Book Priya tomorrow 11 AM and reserve 2 facial kits"',
    status: "Captured",
  },
  {
    id: "extraction",
    stepNumber: "02",
    category: "Smart Extraction",
    title: "Structure intent, client, time, and items cleanly",
    body: "Instead of lost chat threads, Pipo parses names, requested service slots, and inventory items against live availability.",
    summary: "Instant intent parsing",
    previewTitle: "Structured Operations Intent",
    previewPayload: "Client: Priya · Time: 11:00 AM · Item: 2x Facial Kit",
    status: "Structured",
  },
  {
    id: "commit",
    stepNumber: "03",
    category: "Operations Sync",
    title: "Lock calendar slots, deduct stock, and log GST entry",
    body: "Your booking calendar, chair availability, and inventory balance update synchronously across your entire team.",
    summary: "Live ERP update",
    previewTitle: "Clinic Calendar & Inventory",
    previewPayload: "Chair #2 Reserved · Stock balance updated (-2 kits)",
    status: "Synced",
  },
  {
    id: "dispatch",
    stepNumber: "04",
    category: "Direct Billing",
    title: "Send branded confirmation and direct UPI bill",
    body: "Clients receive an official WhatsApp confirmation card with a direct UPI link that settles straight to your bank account.",
    summary: "0% markup dispatch",
    previewTitle: "WhatsApp Confirmation & UPI",
    previewPayload: "INR 2,400 settled straight to your bank at 0% Meta markup",
    status: "Confirmed",
  },
];

export default function SystemAnatomyStage() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrubProgress, setScrubProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapRef.current || !pinRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setScrubProgress(1);
      setActiveIdx(3);
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 960px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: wrapRef.current,
        pin: pinRef.current,
        start: "top 12%",
        end: "+=1450",
        scrub: 0.35,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          setScrubProgress(p);
          const idx = Math.min(ANATOMY_STEPS.length - 1, Math.floor(p * ANATOMY_STEPS.length));
          setActiveIdx(idx);
        },
      });
      return () => trigger.kill();
    });

    return () => mm.revert();
  }, []);

  const current = ANATOMY_STEPS[activeIdx];
  const traceDashOffset = Math.max(0, 480 * (1 - Math.min(1, scrubProgress * 1.15)));

  return (
    <>
      {/* ─── DESKTOP PINNED VIEW (>= 960px) ─── */}
      <div className={styles.desktopStage}>
        <div ref={wrapRef} className={styles.stageOuter}>
          <div ref={pinRef} className={styles.pinInner}>
            <div className="container">
              <div className={styles.stageShell}>
                {/* Top Header Bar */}
                <div className={styles.instrumentBar}>
                  <div className={styles.odometerGroup}>
                    <span className={styles.odoLabel}>Step</span>
                    <span className={styles.odoNumber}>{current.stepNumber}</span>
                    <span className={styles.odoTotal}>of 04</span>
                  </div>

                  <div className={styles.hatchedTrack}>
                    <div
                      className={styles.hatchedFill}
                      style={{ width: `${Math.max(8, Math.round(scrubProgress * 100))}%` }}
                    />
                  </div>

                  <span className={styles.instrumentMeta}>{current.summary}</span>
                </div>

                <div className={styles.stageGrid}>
                  {/* Left Column: Interactive Chapters */}
                  <div className={styles.stepsColumn}>
                    {ANATOMY_STEPS.map((step, i) => {
                      const isActive = i === activeIdx;
                      const isDone = i < activeIdx;
                      return (
                        <button
                          key={step.id}
                          type="button"
                          onClick={() => {
                            setActiveIdx(i);
                            setScrubProgress((i + 0.5) / ANATOMY_STEPS.length);
                          }}
                          className={`${styles.stepItem} ${
                            isActive ? styles.stepItemActive : isDone ? styles.stepItemDone : ""
                          }`}
                        >
                          <div className={styles.stepTop}>
                            <span className={styles.stepNumberBadge}>{step.stepNumber}</span>
                            <span className={styles.stepCategory}>{step.category}</span>
                          </div>
                          <h3 className={styles.stepTitle}>{step.title}</h3>
                          {isActive && <p className={styles.stepBody}>{step.body}</p>}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column: Visual Stage Cards */}
                  <div className={styles.schematicPanel}>
                    <svg
                      viewBox="0 0 560 110"
                      className={styles.busSvg}
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M44 55 L516 55"
                        stroke="rgba(13, 59, 46, 0.12)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M44 55 L516 55"
                        stroke="#1F8A5B"
                        strokeWidth="2.5"
                        strokeDasharray="480"
                        strokeDashoffset={traceDashOffset}
                      />
                      {[0, 1, 2, 3].map((nodeIdx) => {
                        const cx = 64 + nodeIdx * 144;
                        const active = nodeIdx <= activeIdx;
                        return (
                          <g key={nodeIdx}>
                            <circle
                              cx={cx}
                              cy={55}
                              r={active ? 10 : 7}
                              fill={active ? "#0D3B2E" : "#F7F6EC"}
                              stroke={active ? "#1F8A5B" : "rgba(13, 59, 46, 0.3)"}
                              strokeWidth="2"
                            />
                          </g>
                        );
                      })}
                    </svg>

                    {/* 4 Clean Step Cards */}
                    <div className={styles.moduleGrid}>
                      {ANATOMY_STEPS.map((mod, idx) => {
                        const unlocked = idx <= activeIdx;
                        const currentFocus = idx === activeIdx;
                        return (
                          <div
                            key={mod.id}
                            className={`${styles.moduleCard} ${
                              unlocked ? styles.moduleCardUnlocked : styles.moduleCardMuted
                            } ${currentFocus ? styles.moduleCardFocus : ""}`}
                          >
                            <div className={styles.moduleHead}>
                              <span className={styles.stepTag}>Step {mod.stepNumber}</span>
                              <span className={`${styles.statusPill} ${unlocked ? styles.statusActive : ""}`}>
                                {unlocked ? mod.status : "Waiting"}
                              </span>
                            </div>
                            <div className={styles.moduleTitle}>{mod.previewTitle}</div>
                            <div className={styles.modulePayload}>{mod.previewPayload}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE 3D DRUM VIEW (< 960px) ─── */}
      <div className={styles.mobileStage}>
        <div className="container">
          <ScrollWarpDrum steps={ANATOMY_STEPS} />
        </div>
      </div>
    </>
  );
}
