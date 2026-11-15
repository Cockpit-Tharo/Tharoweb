"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Lock,
  ChevronLeft,
  RotateCcw,
  Video,
  Phone,
  MoreVertical,
  Plus,
  Paperclip,
  Camera,
  Mic,
} from "lucide-react";
import styles from "./Preloader.module.css";

interface PreloaderProps {
  onStartReveal?: () => void;
  onFinish?: () => void;
}

interface TargetRect {
  left: number;
  top: number;
  width: number;
  height: number;
  borderRadius: number;
}

const CRITICAL_HOMEPAGE_IMAGES = [
  "/images/tharo-emblem-light.png",
  "/images/tharo-emblem-dark.png",
  "/images/tharo-architecture-system.jpg",
  "/images/tharo-architecture-blueprint-aligned.jpg",
  "/images/hero-craft-desk.jpg",
  "/images/hero-pipo-orb.jpg",
  "/images/web content/calendar.png",
  "/images/web content/booking.png",
  "/images/web content/sharedinbox.png",
];

export default function Preloader({ onStartReveal, onFinish }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [logoEntered, setLogoEntered] = useState(false);
  const [barVisible, setBarVisible] = useState(false);
  const [isOpenIntoWhatsApp, setIsOpenIntoWhatsApp] = useState(false);
  const [isMorphing, setIsMorphing] = useState(false);
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null);
  const [morphComplete, setMorphComplete] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setProgress(100);
      setIsOpenIntoWhatsApp(true);
      onStartReveal?.();
      onFinish?.();
      setMorphComplete(true);
      return;
    }

    // Lock body scrolling during preloader phase
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // Step 1: Cinematic logo & brand entrance immediately upon mount
    const logoTimer = setTimeout(() => {
      setLogoEntered(true);
    }, 50);

    // Step 2: Minimalist Apple progress bar reveals
    const barTimer = setTimeout(() => {
      setBarVisible(true);
    }, 320);

    // Senior Web Developer Loading Controller:
    // Tracks real page load, font rasterization, and critical asset caching
    let isWindowLoaded = typeof document !== "undefined" && document.readyState === "complete";
    let isFontsLoaded = false;
    let isImagesLoaded = false;
    let resourcesReady = false;

    // 1. Window load listener
    if (!isWindowLoaded) {
      const handleLoad = () => {
        isWindowLoaded = true;
      };
      window.addEventListener("load", handleLoad, { once: true });
    }

    // 2. Font readiness listener (ensures Playfair & Hanken Grotesk are rasterized)
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        isFontsLoaded = true;
      });
    } else {
      isFontsLoaded = true;
    }

    // 3. Preload all critical homepage images
    let loadedCount = 0;
    const totalImages = CRITICAL_HOMEPAGE_IMAGES.length;
    CRITICAL_HOMEPAGE_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      const onDone = () => {
        loadedCount++;
        if (loadedCount >= totalImages) {
          isImagesLoaded = true;
        }
      };
      if (img.complete) {
        onDone();
      } else {
        img.onload = onDone;
        img.onerror = onDone;
      }
    });

    const startTime = performance.now();
    // Minimum duration so cinematic Apple restart animation is fully appreciated
    const MIN_DURATION = 2600;
    // Hard ceiling to guarantee user is never permanently blocked
    const MAX_DURATION = 5500;

    let rafId = 0;
    let finishTriggered = false;

    const tick = (now: number) => {
      const elapsed = Math.max(0, now - startTime);

      // Check if all real resources are ready
      if (!resourcesReady && isWindowLoaded && isFontsLoaded && isImagesLoaded) {
        resourcesReady = true;
      }

      let currentPct = 0;

      if (elapsed < MIN_DURATION) {
        // Smoothly advance from 0% to 88% over MIN_DURATION
        const factor = elapsed / MIN_DURATION;
        const eased = 1 - Math.pow(1 - factor, 2.4);
        currentPct = Math.min(88, Math.floor(eased * 88));
      } else if (!resourcesReady && elapsed < MAX_DURATION) {
        // Holding gently at 88% to 92% if high-res assets are still downloading
        const waitFactor = Math.min(1, (elapsed - MIN_DURATION) / (MAX_DURATION - MIN_DURATION));
        currentPct = Math.min(92, Math.floor(88 + waitFactor * 4));
      } else {
        // Assets are fully confirmed (and MIN_DURATION has elapsed) -> glide smoothly to 100%
        const postElapsed = elapsed - MIN_DURATION;
        const finishDuration = 450;
        const finishFactor = Math.min(1, postElapsed / finishDuration);
        const finishEased = 1 - Math.pow(1 - finishFactor, 2.5);
        currentPct = Math.min(100, Math.floor(88 + finishEased * 12));
      }

      // Ensure progress is strictly monotonic
      setProgress((prev) => Math.max(prev, currentPct));

      if (currentPct < 100) {
        rafId = requestAnimationFrame(tick);
      } else if (!finishTriggered) {
        finishTriggered = true;
        setProgress(100);

        // Apple-style brief settling pause at 100% before starting WhatsApp
        setTimeout(() => {
          setIsOpenIntoWhatsApp(true);

          // Allow screen unlock to initiate visually before physical dock into hero
          setTimeout(() => {
            const targetEl = document.querySelector<HTMLElement>(
              "[data-hero-phone-frame]"
            );
            let measuredRect: TargetRect | null = null;

            if (targetEl) {
              const r = targetEl.getBoundingClientRect();
              const isMob = window.innerWidth <= 768;
              const computedRadius =
                parseFloat(window.getComputedStyle(targetEl).borderRadius) || (isMob ? 18 : 50);
              measuredRect = {
                left: r.left,
                top: r.top,
                width: r.width,
                height: r.height,
                borderRadius: computedRadius,
              };
            } else {
              // Precise geometric fallback if ref is still mounting
              const w = window.innerWidth;
              const isMob = w <= 768;
              const targetW = isMob ? Math.min(385, w - 32) : 365;
              measuredRect = {
                left: (w - targetW) / 2,
                top: isMob ? 245 : 295,
                width: targetW,
                height: isMob ? 500 : 720,
                borderRadius: isMob ? 18 : 50,
              };
            }

            setTargetRect(measuredRect);
            setIsMorphing(true);
            onStartReveal?.();

            // Morph animation duration is 800ms
            setTimeout(() => {
              setMorphComplete(true);
              document.body.style.overflow = originalOverflow;
              onFinish?.();
            }, 820);
          }, 180);
        }, 140);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(barTimer);
      cancelAnimationFrame(rafId);
      document.body.style.overflow = originalOverflow;
    };
  }, [onStartReveal, onFinish]);

  if (morphComplete) return null;

  return (
    <div
      className={styles.canvasOverlay}
      aria-label="Starting Phone"
      role="status"
    >
      {/* Background canvas that fades out smoothly to reveal the hero beneath */}
      <div
        className={`${styles.canvasBackdrop} ${
          isMorphing ? styles.backdropFading : ""
        }`}
      >
        <div className={styles.ambientLilac} aria-hidden="true" />
        <div className={styles.ambientEmerald} aria-hidden="true" />

        {/* Architectural Center Watermark & Concentric Alignment Guides */}
        <div className={styles.watermarkContainer} aria-hidden="true">
          <span className={styles.watermarkText}>THARO</span>
        </div>
        <div className={styles.orbitRingOuter} aria-hidden="true" />
        <div className={styles.orbitRingInner} aria-hidden="true" />
        <div className={styles.axisLineHorizontal} aria-hidden="true" />

        {/* ─── ARCHITECTURAL PERIMETER REGISTRATION MARKS ─── */}
        {/* Top Left: Studio Anchor */}
        <div className={styles.cornerMarkTopLeft}>
          <span className={styles.crosshair} aria-hidden="true" />
          <span className={styles.cornerLabel}>Tharo Technologies</span>
        </div>

        {/* Top Right: Crisp Tabular Progress Counter */}
        <div className={styles.cornerMarkTopRight}>
          <div className={styles.counterWrap}>
            <span className={styles.counterVal}>
              {progress < 10 ? `0${progress}` : progress}
            </span>
            <span className={styles.counterUnit}>%</span>
          </div>
          <span className={styles.crosshair} aria-hidden="true" />
        </div>

        {/* Bottom Left: Edition Anchor */}
        <div className={styles.cornerMarkBottomLeft}>
          <span className={styles.crosshair} aria-hidden="true" />
          <span className={styles.cornerLabel}>Studio Edition</span>
        </div>

        {/* Bottom Right: Discipline Anchor */}
        <div className={styles.cornerMarkBottomRight}>
          <span className={styles.cornerLabel}>Systems &amp; Architecture</span>
          <span className={styles.crosshair} aria-hidden="true" />
        </div>
      </div>

      {/* ─── PHYSICAL MORPHING HERO CONSOLE ANCHOR (ORIGINAL PHONE DIMENSIONS) ─── */}
      <div
        className={`${styles.morphingCard} ${
          isMorphing ? styles.cardMorphing : ""
        }`}
        style={
          isMorphing && targetRect
            ? {
                left: `${targetRect.left + targetRect.width / 2}px`,
                top: `${targetRect.top + targetRect.height / 2}px`,
                width: `${targetRect.width}px`,
                height: `${targetRect.height}px`,
                borderRadius: `${targetRect.borderRadius}px`,
              }
            : undefined
        }
      >
        {/* PHYSICAL PHONE SCREEN */}
        <div className={styles.consoleScreen}>
          {/* ─── LAYER 1: AUTHENTIC WHATSAPP PHONE INTERFACE (Revealed at 100%) ─── */}
          <div
            className={`${styles.whatsappLayer} ${
              isOpenIntoWhatsApp ? styles.whatsappLayerVisible : ""
            }`}
          >
            {/* Status Bar with Dynamic Island */}
            <div className={styles.statusBar}>
              <span className={styles.statusTime}>9:41</span>
              <div className={styles.dynamicIsland}>
                <span className={styles.islandCamera} />
              </div>
              <div className={styles.statusIcons}>
                <span className={styles.networkType}>5G</span>
                <div className={styles.batteryPill}>
                  <div className={styles.batteryFill} />
                </div>
              </div>
            </div>

            {/* Authentic WhatsApp Chat Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerLeft}>
                <button type="button" className={styles.backBtn} aria-label="Back">
                  <ChevronLeft size={22} />
                </button>
                <div
                  className={styles.avatar}
                  style={{ backgroundColor: "#008069" }}
                >
                  <span>DM</span>
                </div>
                <div className={styles.contactInfo}>
                  <div className={styles.chatNameRow}>
                    <span className={styles.chatName}>
                      Dr. Mehta Dental Clinic
                    </span>
                    <span
                      className={styles.verifiedBadge}
                      title="Verified WhatsApp Business"
                    >
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
                  <span className={styles.chatStatus}>Healthcare & Clinic</span>
                </div>
              </div>

              <div className={styles.headerActions}>
                <button
                  type="button"
                  className={styles.replayHeaderBtn}
                  aria-label="Restart flow"
                >
                  <RotateCcw size={13} />
                </button>
                <button
                  type="button"
                  className={`${styles.iconBtn} ${styles.headerVideoBtn}`}
                  aria-label="Video Call"
                >
                  <Video size={18} />
                </button>
                <button
                  type="button"
                  className={`${styles.iconBtn} ${styles.headerCallBtn}`}
                  aria-label="Audio Call"
                >
                  <Phone size={17} />
                </button>
                <button
                  type="button"
                  className={styles.iconBtn}
                  aria-label="More Options"
                >
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>

            {/* Authentic WhatsApp Messages Canvas (Clean and Pristine to Match Hero Handover 1:1) */}
            <div className={styles.messagesCanvas}>
              <div className={styles.encryptionNotice}>
                <Lock size={11} className={styles.lockIcon} />
                <span>
                  Messages and calls are end-to-end encrypted. No one outside of
                  this chat can read them.
                </span>
              </div>

              <div className={styles.dateDivider}>
                <span>TODAY</span>
              </div>
            </div>

            {/* WhatsApp Bottom Input Bar */}
            <div className={styles.inputBar}>
              <button
                type="button"
                className={styles.attachBtn}
                aria-label="Add attachment"
              >
                <Plus size={20} />
              </button>
              <div className={styles.inputPill}>
                <span className={styles.fakeInput}>Type a message...</span>
                <div className={styles.pillIcons}>
                  <button
                    type="button"
                    className={styles.pillIconBtn}
                    aria-label="Attach Document"
                  >
                    <Paperclip size={16} />
                  </button>
                  <button
                    type="button"
                    className={styles.pillIconBtn}
                    aria-label="Camera"
                  >
                    <Camera size={16} />
                  </button>
                </div>
              </div>
              <button
                type="button"
                className={styles.micBtn}
                aria-label="Voice Message"
              >
                <Mic size={17} />
              </button>
            </div>

            {/* Home Bar Indicator */}
            <div className={styles.homeBarWrapper}>
              <div className={styles.homeIndicator} />
            </div>
          </div>

          {/* ─── LAYER 2: IPHONE RESTART SCREEN (Black Screen + Green Logo + Tharo Technologies LLP + Minimalist Bar) ─── */}
          <div
            className={`${styles.bootScreenLayer} ${
              isOpenIntoWhatsApp ? styles.bootScreenDismissed : ""
            }`}
          >
            {/* Minimalist Top Dynamic Island (Hardware Bezel Silhouette) */}
            <div className={styles.bootDynamicIsland}>
              <span className={styles.bootIslandLens} />
            </div>

            {/* Centered Restart Cluster: Green 3D Logo + Tharo Technologies LLP + Rounded White Bar */}
            <div className={styles.bootCenterCluster}>
              {/* Cinematic Logo & Brand Entrance */}
              <div
                className={`${styles.bootLogoWrap} ${
                  logoEntered ? styles.bootLogoEntered : ""
                }`}
              >
                <div className={styles.bootEmblemHalo} />
                <Image
                  src="/images/tharo-emblem-light.png"
                  alt="Tharo Technologies LLP"
                  width={72}
                  height={72}
                  priority
                  className={styles.bootLogoImg}
                />
                <span className={styles.bootBrandText}>
                  Tharo Technologies LLP
                </span>
              </div>

              {/* Minimalist Apple-Style Progress Bar */}
              <div
                className={`${styles.bootBarContainer} ${
                  barVisible ? styles.bootBarVisible : ""
                }`}
              >
                <div className={styles.bootBarTrack}>
                  <div
                    className={styles.bootBarFill}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Empty base spacer to ensure perfect optical center like iOS */}
            <div className={styles.bootBaseSpacer} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
