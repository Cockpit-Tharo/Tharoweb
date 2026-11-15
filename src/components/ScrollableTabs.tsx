"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ScrollableTabs.module.css";

export type ScrollableTabsTone = "beige" | "surface" | "dark" | "forestDark";

interface ScrollableTabsProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  tone?: ScrollableTabsTone;
  role?: React.AriaRole;
  ariaLabel?: string;
}

const TONE_CLASS_MAP: Record<ScrollableTabsTone, string> = {
  beige: styles.toneBeige,
  surface: styles.toneSurface,
  dark: styles.toneDark,
  forestDark: styles.toneForestDark,
};

export function ScrollableTabs({
  children,
  className = "",
  trackClassName = "",
  tone = "beige",
  role,
  ariaLabel,
}: ScrollableTabsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const nextLeft = el.scrollLeft > 4;
    const nextRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 4;
    setCanScrollLeft(nextLeft);
    setCanScrollRight(nextRight);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateScrollState();
    const rafId = window.requestAnimationFrame(updateScrollState);

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    let observer: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(updateScrollState);
      observer.observe(el);
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      observer?.disconnect();
    };
  }, [children, updateScrollState]);

  const scrollByDirection = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.max(150, Math.round(el.clientWidth * 0.65));
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className={`${styles.shell} ${TONE_CLASS_MAP[tone]} ${className}`.trim()}>
      <div
        ref={trackRef}
        className={`${styles.track} ${trackClassName}`.trim()}
        role={role}
        aria-label={ariaLabel}
      >
        {children}
      </div>

      {canScrollLeft && (
        <>
          <div className={styles.fadeLeft} aria-hidden="true" />
          <button
            type="button"
            className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`}
            onClick={() => scrollByDirection(-1)}
            aria-label="Scroll options left"
          >
            <ChevronLeft size={14} strokeWidth={2.25} />
          </button>
        </>
      )}

      {canScrollRight && (
        <>
          <div className={styles.fadeRight} aria-hidden="true" />
          <button
            type="button"
            className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}
            onClick={() => scrollByDirection(1)}
            aria-label="Scroll options right"
          >
            <ChevronRight size={14} strokeWidth={2.25} />
          </button>
        </>
      )}
    </div>
  );
}

