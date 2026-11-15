"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./LollipopCarousel.module.css";
import { automationCapsules } from "@/data/automationCapsules";
import {
  Scissors,
  FileSpreadsheet,
  Truck,
  Stethoscope,
  ShoppingBag,
  Target,
  Building2,
  Utensils,
  Calendar,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

function CapsuleIcon({ name, size = 18, color = "currentColor" }: IconProps) {
  switch (name) {
    case "Scissors":
      return <Scissors size={size} color={color} />;
    case "FileSpreadsheet":
      return <FileSpreadsheet size={size} color={color} />;
    case "Truck":
      return <Truck size={size} color={color} />;
    case "Stethoscope":
      return <Stethoscope size={size} color={color} />;
    case "ShoppingBag":
      return <ShoppingBag size={size} color={color} />;
    case "Target":
      return <Target size={size} color={color} />;
    case "Building2":
      return <Building2 size={size} color={color} />;
    case "Utensils":
      return <Utensils size={size} color={color} />;
    case "Calendar":
      return <Calendar size={size} color={color} />;
    default:
      return <Target size={size} color={color} />;
  }
}

export default function LollipopCarousel() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  // Triple the items for infinite continuous wrapping
  const tripleItems = [...automationCapsules, ...automationCapsules, ...automationCapsules];

  // Ambient Drift Engine
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Start centered in the middle copy
    const singleCopyWidth = scroller.scrollWidth / 3;
    if (scroller.scrollLeft === 0) {
      scroller.scrollLeft = singleCopyWidth;
    }

    const driftSpeed = 38; // pixels per second

    const step = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const deltaTime = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!isPaused && !isDraggingRef.current && scroller) {
        scroller.scrollLeft += driftSpeed * deltaTime;

        // Wrap seamlessly
        if (scroller.scrollLeft >= singleCopyWidth * 2) {
          scroller.scrollLeft -= singleCopyWidth;
        } else if (scroller.scrollLeft <= 0) {
          scroller.scrollLeft += singleCopyWidth;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused]);

  // Mouse Drag / Touch Swipe handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scroller.offsetLeft;
    scrollLeftRef.current = scroller.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const x = e.pageX - scroller.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scroller.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className={styles.wrapper}>
      {/* Drifting Horizontal Track */}
      <div
        ref={scrollerRef}
        className={styles.trackContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onMouseLeave={() => {
          handleMouseUp();
          setIsPaused(false);
          setActiveId(null);
        }}
      >
        <div className={styles.track}>
          {tripleItems.map((item, index) => {
            const isCardActive = activeId === `${item.id}-${index}`;
            const isAnyActive = activeId !== null;
            const isDimmed = isAnyActive && !isCardActive;

            return (
              <div
                key={`${item.id}-${index}`}
                className={`${styles.capsule} ${isCardActive ? styles.capsuleActive : ""} ${
                  isDimmed ? styles.capsuleDimmed : ""
                }`}
                onMouseEnter={() => {
                  setActiveId(`${item.id}-${index}`);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setActiveId(null);
                  setIsPaused(false);
                }}
                onClick={() => {
                  setActiveId((prev) => (prev === `${item.id}-${index}` ? null : `${item.id}-${index}`));
                  setIsPaused((prev) => !prev);
                }}
              >
                {/* Header Badge */}
                <div className={styles.cardHead}>
                  <span className={styles.sectorBadge}>
                    {item.sectorName}
                  </span>
                  <div
                    className={styles.iconWrapper}
                    style={{ color: item.accentColor }}
                  >
                    <CapsuleIcon name={item.iconName} size={16} color={item.accentColor} />
                  </div>
                </div>

                {/* Mini Wireframe Conversational Bubble Stack */}
                <div className={styles.wireframeBox}>
                  {item.flowPreview.map((bubble, bIdx) => (
                    <div
                      key={bIdx}
                      className={`${styles.previewBubble} ${
                        bubble.sender === "client"
                          ? styles.previewBubbleClient
                          : styles.previewBubbleSystem
                      }`}
                    >
                      {bubble.text}
                    </div>
                  ))}
                </div>

                {/* Card Title & Subtitle */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardSubtitle}>{item.subtitle}</p>
                </div>

                {/* Footer Metric */}
                <div className={styles.cardFooter}>
                  <div className={styles.metricRow}>
                    <span className={styles.metricLabelText}>{item.metricLabel}</span>
                    <span
                      className={styles.metricBadge}
                      style={{
                        color: item.accentColor,
                        backgroundColor: item.accentBg,
                      }}
                    >
                      {item.metric}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
