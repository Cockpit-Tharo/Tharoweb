"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SectorPillShowcase.module.css";
import { getAllSectors, Sector } from "@/data/sectors";
import SectorIcon from "@/components/SectorIcon";
import { ScrollableTabs } from "./ScrollableTabs";
import { ArrowRight, Check } from "lucide-react";

export default function SectorPillShowcase() {
  const allSectors = getAllSectors();
  const [activeId, setActiveId] = useState(allSectors[0]?.id || "dental");

  const currentSector: Sector =
    allSectors.find((s) => s.id === activeId) || allSectors[0];

  return (
    <div className={styles.showcaseShell}>
      {/* ─── 1-Row Fast Sector Pill Switcher ─── */}
      <ScrollableTabs
        tone="dark"
        className={styles.pillsScrollContainer}
        trackClassName={styles.pillsTrack}
        role="tablist"
        ariaLabel="Industry solution sectors"
      >
        {allSectors.map((sector) => {
          const isActive = sector.id === activeId;
          return (
            <button
              key={sector.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(sector.id)}
              className={`${styles.pillBtn} ${isActive ? styles.pillBtnActive : ""}`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSectorPillIndicator"
                  className={styles.pillActiveBg}
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <SectorIcon
                name={sector.iconName}
                size={14}
                className={styles.pillIcon}
              />
              <span className={styles.pillLabel}>{sector.name}</span>
            </button>
          );
        })}
      </ScrollableTabs>

      {/* ─── Active Sector Detailed Surface ─── */}
      <div className={styles.stageWindow}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentSector.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className={styles.stageCard}
          >
            <div className={styles.stageGrid}>
              {/* Left Column: Sector Narrative */}
              <div className={styles.narrativeCol}>
                <h3 className={styles.sectorTitle}>
                  {currentSector.title}{" "}
                  <em className={styles.titleItalic}>
                    {currentSector.titleItalic}
                  </em>
                </h3>

                <p className={styles.sectorSubtitle}>
                  {currentSector.subtitle || currentSector.shortDesc}
                </p>

                <div className={styles.actionRow}>
                  <Link
                    href={`/solutions/${currentSector.id}`}
                    className={styles.exploreBtn}
                  >
                    <span>View {currentSector.name} Flow</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link href="/contact" className={styles.bookDemoBtn}>
                    Book Demo
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Automated Workflows */}
              <div className={styles.specsCol}>
                <div className={styles.specsList}>
                  {(currentSector.whatWeBuild || [])
                    .slice(0, 3)
                    .map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.16,
                          delay: 0.05 + idx * 0.03,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                        className={styles.specItem}
                      >
                        <div className={styles.specCheckWrap}>
                          <Check size={12} className={styles.specCheckIcon} />
                        </div>
                        <p className={styles.specText}>{item}</p>
                      </motion.div>
                    ))}
                </div>

                <div className={styles.specsFoot}>
                  <span className={styles.footLabel}>Connected Stack:</span>
                  <span className={styles.footTech}>
                    Meta Cloud API &middot; Tally &middot; Google Calendar &middot; UPI POS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
