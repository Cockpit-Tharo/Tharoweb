"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CollapsingStepsCards.module.css";
import { stepsData, StepItem } from "@/data/steps";
import {
  Search,
  ShieldCheck,
  Database,
  Workflow,
  Rocket,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface StepIconProps {
  name: string;
  size?: number;
  color?: string;
}

function StepIcon({ name, size = 18, color = "currentColor" }: StepIconProps) {
  switch (name) {
    case "Search":
      return <Search size={size} color={color} />;
    case "ShieldCheck":
      return <ShieldCheck size={size} color={color} />;
    case "Database":
      return <Database size={size} color={color} />;
    case "Workflow":
      return <Workflow size={size} color={color} />;
    case "Rocket":
      return <Rocket size={size} color={color} />;
    default:
      return <Workflow size={size} color={color} />;
  }
}

export default function CollapsingStepsCards() {
  const [activeId, setActiveId] = useState<string>(stepsData[0].id);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const mobileScrollerRef = useRef<HTMLDivElement | null>(null);

  // Sync mobile scroll indicator
  const handleMobileScroll = () => {
    const scroller = mobileScrollerRef.current;
    if (!scroller) return;
    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
    let closestIndex = 0;
    let closestDist = Infinity;

    Array.from(scroller.children).forEach((child, idx) => {
      const card = child as HTMLElement;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const dist = Math.abs(scrollerCenter - cardCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = idx;
      }
    });

    setMobileIndex(closestIndex);
  };

  const scrollToStep = (index: number) => {
    const scroller = mobileScrollerRef.current;
    if (!scroller) return;
    const targetCard = scroller.children[index] as HTMLElement;
    if (targetCard) {
      scroller.scrollTo({
        left: targetCard.offsetLeft - (scroller.clientWidth - targetCard.clientWidth) / 2,
        behavior: "smooth",
      });
      setMobileIndex(index);
    }
  };

  return (
    <div className={styles.container}>
      {/* ─── DESKTOP HORIZONTAL ACCORDION ─── */}
      <div className={styles.desktopDeck}>
        {stepsData.map((step) => {
          const isActive = activeId === step.id;

          return (
            <div
              key={step.id}
              className={`${styles.stepCard} ${
                isActive ? styles.stepCardActive : styles.stepCardCollapsed
              }`}
              onClick={() => setActiveId(step.id)}
              aria-expanded={isActive}
            >
              {/* COLLAPSED VIEW (Always in DOM, smoothly fades out when active) */}
              <div className={styles.collapsedView}>
                <span className={styles.collapsedNumber}>{step.stepNumber}</span>
                <span className={styles.collapsedTitleVertical}>{step.shortTitle}</span>
                <div className={styles.collapsedIconWrapper}>
                  <StepIcon name={step.iconName} size={16} />
                </div>
              </div>

              {/* EXPANDED ACTIVE CONTENT (Always in DOM at fixed width, smoothly un-masked) */}
              <div className={styles.expandedContent}>
                {/* Top Meta Bar */}
                <div className={styles.metaHeader}>
                  <div className={styles.metaLeft}>
                    <span className={styles.stepNumberBadge}>{step.stepNumber}</span>
                    <span className={styles.dayBadge}>{step.dayTag}</span>
                  </div>
                  <span className={styles.metricBadgeTag}>{step.metricBadge}</span>
                </div>

                {/* Core Value Proposition */}
                <div className={styles.stepMain}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepHeadline}>{step.headline}</p>
                </div>

                {/* 3 Clean Highlights (What You Get) */}
                <div className={styles.highlightsGrid}>
                  {step.highlights.map((item, idx) => (
                    <div key={idx} className={styles.highlightItem}>
                      <div className={styles.checkIcon}>
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span className={styles.highlightText}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Peaceful Bottom Bar */}
                <div className={styles.stepFooter}>
                  <div className={styles.statusIndicator}>
                    <span>Ready in 5 Days</span>
                  </div>
                  <Link href="/contact" className={styles.stepCta}>
                    <span>Book Launch</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── MOBILE TOUCH SCROLLER ─── */}
      <div className={styles.mobileDeck}>
        <div
          ref={mobileScrollerRef}
          className={styles.mobileScroller}
          onScroll={handleMobileScroll}
        >
          {stepsData.map((step) => (
            <div key={step.id} className={styles.mobileCard}>
              <div className={styles.metaHeader}>
                <div className={styles.metaLeft}>
                  <span className={styles.stepNumberBadge}>{step.stepNumber}</span>
                  <span className={styles.dayBadge}>{step.dayTag}</span>
                </div>
              </div>

              <div>
                <h3 className={`${styles.stepTitle} ${styles.mobileStepTitle}`}>
                  {step.title}
                </h3>
                <p className={`${styles.stepHeadline} ${styles.mobileStepHeadline}`}>
                  {step.headline}
                </p>
              </div>

              <div className={styles.highlightsGrid}>
                {step.highlights.map((item, idx) => (
                  <div key={idx} className={styles.highlightItem}>
                    <div className={styles.checkIcon}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={styles.highlightText}>{item}</span>
                  </div>
                ))}
              </div>

              <div className={`${styles.stepFooter} ${styles.mobileStepFooter}`}>
                <div className={styles.statusIndicator}>
                  <span>5-Day Turnkey</span>
                </div>
                <Link href="/contact" className={styles.stepCta}>
                  <span>Book Launch</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Controls: Left Arrow + Pagination Dots + Right Arrow */}
        <div className={styles.mobileControls}>
          <button
            type="button"
            className={`${styles.navArrowBtn} ${mobileIndex === 0 ? styles.navArrowDisabled : ""}`}
            onClick={() => scrollToStep(Math.max(0, mobileIndex - 1))}
            aria-label="Previous step"
            disabled={mobileIndex === 0}
          >
            <ChevronLeft size={16} />
          </button>

          <div className={styles.mobilePagination}>
            {stepsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.paginationDot} ${
                  mobileIndex === idx ? styles.paginationDotActive : ""
                }`}
                onClick={() => scrollToStep(idx)}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className={`${styles.navArrowBtn} ${
              mobileIndex === stepsData.length - 1 ? styles.navArrowDisabled : ""
            }`}
            onClick={() => scrollToStep(Math.min(stepsData.length - 1, mobileIndex + 1))}
            aria-label="Next step"
            disabled={mobileIndex === stepsData.length - 1}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
