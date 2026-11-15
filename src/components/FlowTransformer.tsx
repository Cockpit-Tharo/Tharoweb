"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FlowTransformer.module.css";
import { ScrollableTabs } from "./ScrollableTabs";
import { CinematicLineMaskHeading, CinematicSubhead } from "./CinematicText";
import { Check, MessageSquare, Database, Volume2 } from "lucide-react";
import { transformationScenarios } from "@/data/transformationFlows";

export default function FlowTransformer() {
  const [activeScenarioId, setActiveScenarioId] = useState(transformationScenarios[0].id);
  const activeScenario =
    transformationScenarios.find((s) => s.id === activeScenarioId) || transformationScenarios[0];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <CinematicLineMaskHeading
            lines={[
              { text: "Turn WhatsApp chats into" },
              { text: "live orders & bookings.", italic: true },
            ]}
          />
          <CinematicSubhead className={styles.subtitle}>
            Customer messages and voice notes update inventory, calendars, and bills right away.
          </CinematicSubhead>
        </div>

        {/* Interactive Scenario Tabs */}
        <ScrollableTabs
          tone="beige"
          className={styles.tabsShell}
          trackClassName={styles.tabsWrapper}
          role="tablist"
          ariaLabel="Workflow transformation scenarios"
        >
          {transformationScenarios.map((scenario) => {
            const isActive = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`${styles.scenarioTab} ${isActive ? styles.tabActive : ""}`}
              >
                <span>{scenario.tabLabel}</span>
                {isActive && (
                  <motion.div
                    layoutId="transformerActiveTab"
                    className={styles.activeTabIndicator}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </ScrollableTabs>

        {/* Transformation Showcase Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={styles.transformerCard}
          >
            {/* Left: Raw Inbound Message */}
            <div className={styles.inboundCol}>
              <div className={styles.colHeader}>
                <span className={styles.colBadgeMuted}>1. Customer Message</span>
                <span className={styles.timestamp}>{activeScenario.rawInput.timestamp}</span>
              </div>

              <div className={styles.chatCard}>
                <div className={styles.senderRow}>
                  <div className={styles.senderAvatar}>
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <div className={styles.senderName}>{activeScenario.rawInput.sender}</div>
                    <div className={styles.sectorTag}>{activeScenario.sectorName}</div>
                  </div>
                </div>

                {activeScenario.rawInput.audioDuration && (
                  <div className={styles.audioNotePreview}>
                    <div className={styles.audioPlayIcon}>
                      <Volume2 size={14} />
                    </div>
                    <div className={styles.waveformContainer}>
                      {[14, 24, 18, 30, 22, 16, 28, 20, 12, 26, 18, 22, 16, 10].map((h, i) => (
                        <motion.div
                          key={i}
                          className={styles.waveBar}
                          animate={{ height: [h, Math.max(6, (h * 1.5) % 32), h] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.2,
                            delay: i * 0.08,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                    <span className={styles.audioDuration}>{activeScenario.rawInput.audioDuration}</span>
                  </div>
                )}

                <p className={styles.messageContent}>"{activeScenario.rawInput.messageText}"</p>
              </div>

              {/* Extracted Entity Tags */}
              <div className={styles.tagsBlock}>
                <div className={styles.tagsLabel}>Details Detected:</div>
                <div className={styles.tagsList}>
                  {activeScenario.processingTags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + idx * 0.07 }}
                      className={styles.entityTag}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Center: Transformation Conduit with Single Line and Emblem Node */}
            <div className={styles.conduitCol}>
              <div className={styles.beamTrack}>
                <div className={styles.beamPulse} />
              </div>

              <div className={styles.nodeWrapper}>
                <div className={styles.gatewayNode} title="Tharo Technologies Real-Time Parser">
                  <Image
                    src="/images/tharo-emblem-dark.png"
                    alt="Tharo Technologies Engine"
                    width={34}
                    height={34}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className={styles.nodeLabel}>Automated</span>
              </div>
            </div>

            {/* Right: Instant Business Action */}
            <div className={styles.executionCol}>
              <div className={styles.colHeader}>
                <div className={styles.systemBadge}>
                  <Database size={13} style={{ marginRight: 5 }} />
                  {activeScenario.executionResult.systemName}
                </div>
              </div>

              <div className={styles.actionHeader}>
                <h3>{activeScenario.executionResult.actionTitle}</h3>
              </div>

              <ul className={styles.lineItemList}>
                {activeScenario.executionResult.lineItems.map((item, idx) => (
                  <motion.li
                    key={item.key}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                    className={styles.lineItem}
                  >
                    <div className={styles.checkCircle}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <div>
                      <span className={styles.itemKey}>{item.key}: </span>
                      <span className={styles.itemVal}>{item.value}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className={styles.notificationCard}>
                <p className={styles.notifText}>{activeScenario.executionResult.autoNotification}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
