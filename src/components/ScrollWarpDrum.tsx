"use client";

import React, { useRef, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ScrollWarpDrum.module.css";

export interface AnatomyStepData {
  id: string;
  stepNumber: string;
  category: string;
  title: string;
  body: string;
  summary: string;
  previewTitle: string;
  previewPayload: string;
  status: string;
}

interface ScrollWarpDrumProps {
  steps: AnatomyStepData[];
}

export default function ScrollWarpDrum({ steps }: ScrollWarpDrumProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Drum Cylinder Constants (matching Framer ScrollWarpLite 152% drum radius)
  const DRUM_RADIUS = 250;
  const STEP_ANGLE_DEG = 36;

  // Touch drag / pan navigation
  const handlePan = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(true);
    // Convert horizontal drag offset to fractional step displacement
    const fraction = -info.offset.x / 200;
    setDragOffset(fraction);
  };

  const handlePanEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const velocity = -info.velocity.x;
    let target = activeStep;

    // Threshold for snapping to previous or next card
    if (Math.abs(info.offset.x) > 35 || Math.abs(velocity) > 220) {
      if (info.offset.x < 0 || velocity > 220) {
        target = Math.min(steps.length - 1, activeStep + 1);
      } else if (info.offset.x > 0 || velocity < -220) {
        target = Math.max(0, activeStep - 1);
      }
    }

    setActiveStep(target);
    setDragOffset(0);
  };

  const handlePrev = () => {
    setActiveStep((curr) => Math.max(0, curr - 1));
    setDragOffset(0);
  };

  const handleNext = () => {
    setActiveStep((curr) => Math.min(steps.length - 1, curr + 1));
    setDragOffset(0);
  };

  const handleStepJump = (idx: number) => {
    setActiveStep(idx);
    setDragOffset(0);
  };

  // Continuous float position along the cylindrical drum
  const currentPos = activeStep + dragOffset;
  const currentStep = steps[activeStep] || steps[0];
  const progressPercent = Math.round(((activeStep + 1) / steps.length) * 100);

  return (
    <div ref={containerRef} className={styles.drumContainer}>
      <div className={styles.stageShell}>
        {/* Top Header Bar */}
        <div className={styles.drumHeader}>
          <div className={styles.stepCounterGroup}>
            <span className={styles.stepCounterLabel}>Step</span>
            <span className={styles.stepCounterCurrent}>
              {currentStep.stepNumber}
            </span>
            <span className={styles.stepCounterTotal}>
              of 0{steps.length}
            </span>
          </div>

          <div className={styles.drumProgressBar}>
            <div
              className={styles.drumProgressFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <span className={styles.drumCategoryPill}>
            {currentStep.summary}
          </span>
        </div>

        {/* 3D Cylindrical Drum Viewport */}
        <motion.div
          className={styles.drumViewport}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
        >
          {steps.map((step, idx) => {
            const delta = idx - currentPos;
            const angleDeg = delta * STEP_ANGLE_DEG;
            const angleRad = (angleDeg * Math.PI) / 180;

            // Cylindrical drum projection math
            const x = Math.sin(angleRad) * DRUM_RADIUS * 1.28;
            const z = (Math.cos(angleRad) - 1) * DRUM_RADIUS;
            const rotY = -angleDeg * 0.85;
            const scale = Math.max(0.72, 1 - Math.abs(delta) * 0.16);
            const opacity = Math.max(0, 1 - Math.abs(delta) * 0.48);
            const zIndex = Math.round(100 - Math.abs(delta) * 25);
            const isCenter = Math.abs(delta) < 0.42;

            return (
              <motion.div
                key={step.id}
                className={styles.drumCard}
                animate={{
                  x,
                  z,
                  rotateY: rotY,
                  scale,
                  opacity,
                }}
                transition={
                  isDragging
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 280, damping: 28, mass: 0.85 }
                }
                style={{
                  zIndex,
                  pointerEvents: isCenter ? "auto" : "none",
                }}
                onClick={() => !isCenter && handleStepJump(idx)}
              >
                <div className={styles.cardHead}>
                  <div className={styles.cardStepTag}>
                    <span className={styles.cardStepNumber}>
                      {step.stepNumber}
                    </span>
                    <span className={styles.cardCategory}>
                      {step.category}
                    </span>
                  </div>
                  <span className={styles.cardStatusPill}>
                    {step.status}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{step.title}</h3>

                <div className={styles.cardPayloadBox}>
                  <div className={styles.payloadHeader}>
                    {step.previewTitle}
                  </div>
                  <div className={styles.payloadBody}>
                    {step.previewPayload}
                  </div>
                </div>

                <p className={styles.cardBodyText}>{step.body}</p>

                <div className={styles.cardFooter}>
                  <span>{step.summary}</span>
                  <span className={styles.cardFooterMeta}>Instant sync</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Navigation Cluster matching Framer ScrollWarp reference */}
        <div className={styles.drumNavSection}>
          <div className={styles.drumNavCluster}>
            <button
              type="button"
              className={styles.drumArrowBtn}
              onClick={handlePrev}
              disabled={activeStep === 0}
              aria-label="Previous step"
            >
              <ChevronLeft size={16} />
            </button>

            <div className={styles.drumStepPill}>
              <span className={styles.drumCurrentNum}>
                {currentStep.stepNumber}
              </span>
              <span className={styles.drumDivider}>/</span>
              <span className={styles.drumTotalNum}>
                0{steps.length}
              </span>
            </div>

            <button
              type="button"
              className={styles.drumArrowBtn}
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
              aria-label="Next step"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
