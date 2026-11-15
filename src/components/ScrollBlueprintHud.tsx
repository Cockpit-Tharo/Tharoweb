"use client";

import React, { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import styles from "./ScrollBlueprintHud.module.css";

const NAV_SECTIONS = [
  { id: "sec-hero", code: "01", label: "HERO" },
  { id: "sec-system", code: "02", label: "SYSTEM" },
  { id: "sec-gallery", code: "03", label: "CLINIC" },
  { id: "sec-flow", code: "04", label: "FLOW" },
  { id: "sec-matrix", code: "05", label: "STACK" },
  { id: "sec-pricing", code: "06", label: "ROI" },
  { id: "sec-proof", code: "07", label: "PROOF" },
];

export default function ScrollBlueprintHud() {
  const { scrollYProgress } = useScroll();

  const [pct, setPct] = useState(0);
  const [activeId, setActiveId] = useState("sec-hero");
  const [inFooter, setInFooter] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPct(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const sec of NAV_SECTIONS) {
      const el = document.getElementById(sec.id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveId(sec.id);
            }
          }
        },
        { rootMargin: "-25% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    }

    // Observer for footer to fade out rail gracefully
    const footer = document.querySelector("footer");
    let footerObs: IntersectionObserver | null = null;
    if (footer) {
      footerObs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            setInFooter(entry.isIntersecting);
          }
        },
        { rootMargin: "0px 0px -5% 0px" }
      );
      footerObs.observe(footer);
    }

    return () => {
      observers.forEach((o) => o.disconnect());
      if (footerObs) footerObs.disconnect();
    };
  }, []);

  return (
    <>
      <aside
        className={styles.railHud}
        style={{
          opacity: inFooter ? 0 : 1,
          pointerEvents: inFooter ? "none" : "auto",
          transition: "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-label="Section index"
      >
        <div className={styles.railPercent}>
          <span>{String(pct).padStart(2, "0")}%</span>
          <span className={styles.railHoverText}>DEPTH</span>
        </div>
        {NAV_SECTIONS.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => {
                const el = document.getElementById(sec.id);
                if (!el) return;
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
              }}
              className={`${styles.railItem} ${isActive ? styles.railItemActive : ""}`}
            >
              <span className={styles.railDot} />
              <span>{sec.code}</span>
              <span className={styles.railHoverText}>{sec.label}</span>
            </button>
          );
        })}
      </aside>
    </>
  );
}

