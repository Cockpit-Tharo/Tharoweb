"use client";

import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./DocketTestimonials.module.css";
import { CinematicLineMaskHeading, CinematicSubhead } from "./CinematicText";
import { docketTestimonials, DocketCardItem } from "@/data/testimonials";

const PALETTE = {
  ground: "#F4EFE4",
  ink: "#1E231D",
  inner: "#D8D0BE",
  front: "#E7E0D0",
  cards: ["#C9D8B6", "#F2C9A9", "#D7CBEA", "#F1DE9C", "#B9DCD4", "#E8B9B5"],
};

const DARK_TEXT = "#191C18";
const LIGHT_TEXT = "#FAF8F2";

function channels(c: string): [number, number, number] | null {
  if (!c || typeof c !== "string") return null;
  const hex = c.match(/#([0-9a-f]{3,8})/i);
  if (hex) {
    let h = hex[1];
    if (h.length === 3 || h.length === 4) {
      h = h
        .slice(0, 3)
        .split("")
        .map((x) => x + x)
        .join("");
    }
    const v = parseInt(h.slice(0, 6), 16);
    return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
  }
  const rgb = c.match(/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i);
  if (rgb) return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  return null;
}

function luma(c: string): number {
  const v = channels(c);
  if (!v) return 1;
  const [r, g, b] = v.map((x) => {
    const s = x / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function textFor(bg: string): string {
  const L = luma(bg);
  const vsDark = (L + 0.05) / (luma(DARK_TEXT) + 0.05);
  const vsLight = (luma(LIGHT_TEXT) + 0.05) / (L + 0.05);
  return vsDark >= vsLight ? DARK_TEXT : LIGHT_TEXT;
}

function blend(c: string, to: [number, number, number], t: number): string {
  const v = channels(c) || [200, 200, 200];
  const m = v.map((x, i) => Math.round(x + (to[i] - x) * t));
  return `rgb(${m[0]}, ${m[1]}, ${m[2]})`;
}

const lighter = (c: string, t: number) => blend(c, [255, 255, 255], t);
const deeper = (c: string, t: number) => blend(c, [0, 0, 0], t);

function tone(bg: string) {
  const text = textFor(bg);
  const darkCard = text === LIGHT_TEXT;
  return {
    bg,
    text,
    mark: darkCard ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.58)",
    avatarBg: text,
    avatarText: bg,
  };
}

const BRASS = ["#F4E2AE", "#C7A15A", "#86662C"] as const;
const metalFill = (m: readonly [string, string, string]) =>
  `linear-gradient(180deg, ${m[0]} 0%, ${m[1]} 55%, ${m[2]} 100%)`;
const rivetFill = (m: readonly [string, string, string]) =>
  `radial-gradient(circle at 35% 30%, ${m[0]} 0%, ${m[1]} 55%, ${m[2]} 100%)`;

const OAK_SKIN = {
  face: "#C9A37A",
  texture:
    "repeating-linear-gradient(90deg, rgba(110,70,30,0.07) 0 2px, transparent 2px 11px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 23px)",
  well: "#7A5A3C",
  wall: "#B48D63",
  metal: BRASS,
  paper: "#F8F3E7",
  paperInk: "#2A241E",
};

const faceFill = (s: typeof OAK_SKIN) =>
  `${s.texture}, linear-gradient(180deg, ${lighter(s.face, 0.14)} 0%, ${s.face} 38%, ${deeper(s.face, 0.14)} 100%)`;

function marks(text: string) {
  return String(text || "")
    .split(/\*\*(.+?)\*\*/g)
    .map((t, i) => ({ t, on: i % 2 === 1 }))
    .filter((x) => x.t.length > 0);
}

function initialsOf(name: string): string {
  const parts = String(name || "")
    .replace(/^(Dr|Mr|Ms|Mrs)\.\s+/i, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2);
  return parts.map((w) => w.charAt(0).toUpperCase()).join("") || "T";
}

const two = (k: number) => String(k).padStart(2, "0");

const TAB_H = 30;
const useSafeLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useStageSize(ref: React.RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState({ w: 0, h: 0 });
  useSafeLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const read = () =>
      setSize((prev) =>
        prev.w === el.clientWidth && prev.h === el.clientHeight
          ? prev
          : { w: el.clientWidth, h: el.clientHeight }
      );
    read();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return size;
}

function useOnScreen(ref: React.RefObject<HTMLDivElement | null>) {
  const [inView, setInView] = useState(false);
  const [tabShown, setTabShown] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (list) => setInView(list[0]?.isIntersecting ?? false),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const sync = () => setTabShown(document.visibilityState !== "hidden");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  return inView && tabShown;
}

function useCalmMotion() {
  const [calm, setCalm] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setCalm(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return calm;
}

function drawerPlan(S: number, W: number, n: number, pitchCap: number, cardWidthPct: number) {
  const isCompact = W > 0 && W < 480;
  const D = isCompact ? Math.min(108, Math.max(78, S * 0.18)) : Math.min(136, Math.max(84, S * 0.21));
  const front = S - D;
  const bottomPad = isCompact ? 18 : 26;
  const topReserve = isCompact ? 48 : 68;
  const room = front - bottomPad - topReserve - S * (isCompact ? 0.48 : 0.42);
  const pitch = n > 1 ? Math.max(4, Math.min(pitchCap, room / (n - 1))) : 0;
  const ch = Math.max(isCompact ? 225 : 210, front - bottomPad - (n - 1) * pitch - topReserve);
  const cw = (W * Math.min(100, Math.max(40, cardWidthPct))) / 100;
  return {
    D,
    front,
    ch,
    cw,
    left: (W - cw) / 2,
    raised: TAB_H,
    slot: (i: number) => front - bottomPad - (n - 1 - i) * pitch,
  };
}

interface DocketProps {
  cards?: DocketCardItem[];
}

export function DocketDrawer({ cards = docketTestimonials }: DocketProps) {
  const n = cards.length;
  const skin = OAK_SKIN;
  const metal = skin.metal;

  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const size = useStageSize(stageRef);
  const onScreen = useOnScreen(rootRef);
  const calm = useCalmMotion();

  const [pick, setPick] = useState(0);
  const current = n ? ((pick % n) + n) % n : 0;
  const [peek, setPeek] = useState(-1);
  const [hovering, setHovering] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [stage, setStage] = useState<"hold" | "intro" | "rest">("hold");

  const step = useCallback(
    (d: number) => {
      if (!n) return;
      setPick((v) => ((v + d) % n + n) % n);
    },
    [n]
  );

  // Intro starts only once the section is first on screen
  useEffect(() => {
    if (stage !== "hold" || !onScreen || size.h === 0) return;
    if (calm) {
      setStage("rest");
      return;
    }
    setStage("intro");
  }, [stage, onScreen, size.h, calm]);

  const STAGGER = 0.07;
  useEffect(() => {
    if (stage !== "intro") return;
    const t = setTimeout(() => setStage("rest"), (n * STAGGER + 1.0) * 1000);
    return () => clearTimeout(t);
  }, [stage, n]);

  // Autoplay while visible, active tab, not hovering, not dragging
  const permit = onScreen && !calm && stage === "rest" && !dragging && !hovering && n > 1;
  useEffect(() => {
    if (!permit) return;
    const t = setTimeout(() => step(1), 6500);
    return () => clearTimeout(t);
  }, [permit, current, step]);

  useEffect(() => {
    if (!onScreen) {
      setPeek(-1);
      setDragging(false);
    }
  }, [onScreen]);

  const S = size.h || 520;
  const W = size.w || 660;
  const isCompact = W < 480;
  const cardWidthPct = isCompact ? 91 : 86;
  const g = drawerPlan(S, W, n, isCompact ? 11 : 14, cardWidthPct);
  const cols = isCompact ? 2 : 3;
  const tw = isCompact ? 48 : 32;
  const r = isCompact ? 14 : 16;

  const wellLeft = g.left - W * 0.03;
  const wellWidth = g.cw + W * 0.06;
  const wellTop = g.slot(0) - (isCompact ? 34 : 42);
  const wallW = W * 0.026;
  const hidden = stage === "hold";
  const baseMove = calm ? { duration: 0 } : { type: "spring" as const, stiffness: 240, damping: 30, mass: 1 };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      step(-1);
    }
  };

  const active = cards[current];

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials drawer"
      onKeyDown={onKey}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setPeek(-1);
      }}
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        padding: isCompact ? 14 : 26,
        background: PALETTE.ground,
        color: PALETTE.ink,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        outlineOffset: -2,
        fontFamily: "var(--font-hanken), sans-serif",
      }}
    >
      <div
        ref={stageRef}
        style={{
          position: "relative",
          flex: 1,
          minHeight: 0,
          overflow: "hidden",
          opacity: size.h ? 1 : 0,
        }}
      >
        {/* Recessed Oak Well */}
        {n > 0 && (
          <motion.div
            aria-hidden="true"
            initial={false}
            animate={{ opacity: hidden ? 0 : 1, y: hidden ? 40 : 0 }}
            transition={{ duration: calm ? 0 : 0.6, ease: [0.22, 0.8, 0.3, 1] }}
            style={{
              position: "absolute",
              left: wellLeft,
              width: wellWidth,
              top: wellTop,
              height: g.front - wellTop + 24,
              borderRadius: `${Math.round(r * 0.5)}px ${Math.round(r * 0.5)}px 0 0`,
              background: `linear-gradient(180deg, ${deeper(skin.well, 0.3)} 0%, ${skin.well} 45%)`,
              boxShadow: "inset 0 16px 22px -8px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: 8,
                background: `linear-gradient(180deg, ${lighter(skin.wall, 0.2)}, ${skin.wall})`,
              }}
            />
          </motion.div>
        )}

        {/* Stacked Tabbed Cards */}
        {cards.map((c, i) => {
          const t = tone(PALETTE.cards[i % PALETTE.cards.length] || "#E8E8E3");
          const col = i % cols;
          const tabLeft = cols > 1 ? (col * (100 - tw)) / (cols - 1) : 0;
          const isUp = i === current;
          const lift = !isUp && peek === i ? -8 : 0;
          const restY = isUp ? g.raised : g.slot(i) + lift;
          const y = hidden ? S + 60 : restY;
          const move =
            stage === "intro"
              ? { ...baseMove, delay: isUp ? n * STAGGER + 0.18 : i * STAGGER }
              : baseMove;
          const canDrag = isUp && n > 1 && !calm;

          return (
            <motion.div
              key={c.id}
              initial={false}
              animate={{ y, opacity: hidden ? 0 : 1 }}
              transition={{
                y: move,
                opacity: { duration: calm ? 0 : 0.3, delay: stage === "intro" ? i * STAGGER : 0 },
              }}
              onClick={isUp ? undefined : () => setPick(i)}
              style={{
                position: "absolute",
                top: 0,
                left: g.left,
                width: g.cw,
                height: g.ch,
                zIndex: isUp ? 60 : i + 1,
                cursor: isUp ? "default" : "pointer",
              }}
            >
              <motion.div
                drag={canDrag ? "y" : false}
                dragSnapToOrigin
                dragElastic={0.45}
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragStart={() => setDragging(true)}
                onDragEnd={(_, info) => {
                  setDragging(false);
                  if (info.offset.y > 60 || info.velocity.y > 620) step(1);
                  else if (info.offset.y < -60 || info.velocity.y < -620) step(-1);
                }}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  boxSizing: "border-box",
                  padding: isCompact ? "12px 16px 14px" : "16px 24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  background: t.bg,
                  color: t.text,
                  borderTopLeftRadius: col === 0 ? 0 : r,
                  borderTopRightRadius: col === cols - 1 && cols > 1 ? 0 : r,
                  borderBottomLeftRadius: r,
                  borderBottomRightRadius: r,
                  boxShadow: isUp ? "0 26px 50px rgba(0,0,0,0.18)" : "0 -4px 14px rgba(0,0,0,0.10)",
                  transition: calm ? "none" : "box-shadow 0.45s ease",
                  cursor: canDrag ? (dragging ? "grabbing" : "grab") : undefined,
                  touchAction: canDrag ? "pan-x" : undefined,
                }}
              >
                {/* Index Card Folder Tab */}
                <button
                  type="button"
                  aria-label={`Show testimonial from ${c.name}`}
                  aria-pressed={isUp}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPick(i);
                  }}
                  onMouseEnter={() => setPeek(i)}
                  onMouseLeave={() => setPeek(-1)}
                  onFocus={() => setPeek(i)}
                  onBlur={() => setPeek(-1)}
                  style={{
                    position: "absolute",
                    top: -TAB_H,
                    left: `${tabLeft}%`,
                    width: `${tw}%`,
                    height: TAB_H,
                    boxSizing: "border-box",
                    padding: isCompact ? "0 10px" : "0 12px",
                    margin: 0,
                    border: 0,
                    cursor: "pointer",
                    background: t.bg,
                    color: t.text,
                    borderRadius: `${Math.round(r * 0.65)}px ${Math.round(r * 0.65)}px 0 0`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 6,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-hanken), sans-serif",
                      fontWeight: 600,
                      fontSize: isCompact ? 12 : 13,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {c.tab || c.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontStyle: "italic",
                      fontSize: 11,
                      fontWeight: 600,
                      opacity: 0.72,
                    }}
                  >
                    {two(i + 1)}
                  </span>
                </button>

                {/* Top Meta Row: No. 01 · Company + 5 Stars */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      opacity: 0.74,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {`No. ${two(i + 1)} \u00B7 ${c.company}`}
                  </span>
                  <span
                    style={{ display: "flex", gap: 2, flexShrink: 0 }}
                    aria-label={`${c.rating} out of 5 stars`}
                  >
                    {[0, 1, 2, 3, 4].map((s) => (
                      <svg
                        key={s}
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        style={{ opacity: s < c.rating ? 1 : 0.25 }}
                      >
                        <path
                          fill="currentColor"
                          d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.3 6.1 20.5l1.3-6.5L2.5 9.4l6.6-.8z"
                        />
                      </svg>
                    ))}
                  </span>
                </div>

                {/* Quote with Highlighter Span */}
                <p
                  style={{
                    margin: isCompact ? "10px 0 0" : "14px 0 0",
                    flex: 1,
                    minHeight: 0,
                    overflow: "hidden",
                    userSelect: canDrag ? "none" : undefined,
                    fontSize: isCompact ? 15 : 18,
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    lineHeight: isCompact ? "1.4em" : "1.42em",
                  }}
                >
                  &ldquo;
                  {marks(c.quote).map((m, k) =>
                    m.on ? (
                      <span
                        key={k}
                        style={{
                          background: t.mark,
                          borderRadius: "0.25em",
                          padding: "0 0.22em",
                          fontWeight: 600,
                          boxDecorationBreak: "clone",
                          WebkitBoxDecorationBreak: "clone",
                        }}
                      >
                        {m.t}
                      </span>
                    ) : (
                      <React.Fragment key={k}>{m.t}</React.Fragment>
                    )
                  )}
                  &rdquo;
                </p>

                {/* Hairline Divider */}
                <div
                  style={{
                    height: 1,
                    background: t.text,
                    opacity: 0.3,
                    margin: isCompact ? "10px 0" : "12px 0 14px",
                    flexShrink: 0,
                  }}
                />

                {/* Author Row */}
                <div style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0 }}>
                  <div
                    style={{
                      width: isCompact ? 34 : 40,
                      height: isCompact ? 34 : 40,
                      borderRadius: "50%",
                      background: t.avatarBg,
                      color: t.avatarText,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: isCompact ? 12 : 13,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {initialsOf(c.name)}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
                    <span style={{ fontSize: isCompact ? 13 : 14, fontWeight: 700 }}>
                      {c.name}
                    </span>
                    <span style={{ fontSize: isCompact ? 12 : 13, opacity: 0.76 }}>
                      {c.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Oak Side Walls */}
        {n > 0 &&
          [0, 1].map((side) => (
            <motion.div
              key={side}
              aria-hidden="true"
              initial={false}
              animate={{ opacity: hidden ? 0 : 1, y: hidden ? 40 : 0 }}
              transition={{ duration: calm ? 0 : 0.6, ease: [0.22, 0.8, 0.3, 1] }}
              style={{
                position: "absolute",
                left: side === 0 ? wellLeft : wellLeft + wellWidth - wallW,
                width: wallW,
                top: wellTop,
                height: g.front - wellTop + 6,
                zIndex: 70,
                borderRadius: side === 0 ? "4px 0 0 0" : "0 4px 0 0",
                background:
                  side === 0
                    ? `linear-gradient(90deg, ${lighter(skin.wall, 0.16)} 0%, ${skin.wall} 60%, ${deeper(skin.wall, 0.2)} 100%)`
                    : `linear-gradient(270deg, ${lighter(skin.wall, 0.08)} 0%, ${skin.wall} 50%, ${deeper(skin.wall, 0.24)} 100%)`,
                boxShadow:
                  side === 0 ? "3px 0 6px rgba(0,0,0,0.18)" : "-3px 0 6px rgba(0,0,0,0.18)",
              }}
            />
          ))}

        {/* Oak Drawer Front with Brass Label Plate & Clickable Pull Handle */}
        {n > 0 && (
          <motion.div
            initial={false}
            animate={{ y: hidden ? 40 : 0, opacity: hidden ? 0 : 1 }}
            transition={{ duration: calm ? 0 : 0.6, ease: [0.22, 0.8, 0.3, 1] }}
            style={{
              position: "absolute",
              left: g.left - W * 0.04,
              width: g.cw + W * 0.08,
              top: g.front,
              height: g.D,
              zIndex: 80,
              boxSizing: "border-box",
              background: faceFill(skin),
              borderRadius: `${Math.round(r * 0.6)}px ${Math.round(r * 0.6)}px ${r}px ${r}px`,
              boxShadow:
                "0 22px 30px -16px rgba(0,0,0,0.5), 0 -2px 0 rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -4px 0 rgba(0,0,0,0.14)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: isCompact ? 7 : 10,
                borderRadius: Math.max(4, Math.round(r * 0.45)),
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.24), 0 1px 0 rgba(255,255,255,0.28)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: isCompact ? 6 : 9,
                overflow: "hidden",
              }}
            >
              {/* Framed Brass Label Plate */}
              <div
                style={{
                  position: "relative",
                  padding: "4px 20px",
                  borderRadius: 4,
                  background: metalFill(metal),
                  boxShadow: "0 2px 3px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                {[0, 1].map((k) => (
                  <span
                    key={k}
                    style={{
                      position: "absolute",
                      top: "50%",
                      marginTop: -3,
                      left: k === 0 ? 7 : undefined,
                      right: k === 1 ? 7 : undefined,
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: rivetFill(metal),
                      boxShadow: "0 1px 1px rgba(0,0,0,0.35)",
                    }}
                  />
                ))}
                <div
                  style={{
                    minWidth: isCompact ? 104 : 122,
                    padding: isCompact ? "3px 10px" : "4px 14px",
                    borderRadius: 2,
                    background: skin.paper,
                    color: skin.paperInk,
                    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.25)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: isCompact ? 10.5 : 11.5,
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                      lineHeight: "1.15em",
                      textAlign: "center",
                    }}
                  >
                    Client Stories
                  </span>
                  <span
                    style={{
                      fontSize: isCompact ? 8 : 8.5,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      opacity: 0.7,
                      lineHeight: "1.1em",
                      textAlign: "center",
                    }}
                  >
                    Tharo Archive
                  </span>
                </div>
              </div>

              {/* Brass Pull Handle (Click to advance) */}
              <motion.button
                type="button"
                aria-label="Next testimonial"
                onClick={() => step(1)}
                whileTap={calm ? undefined : { y: 2 }}
                style={{
                  position: "relative",
                  width: "24%",
                  maxWidth: 140,
                  minWidth: 72,
                  height: isCompact ? 16 : 20,
                  flexShrink: 0,
                  padding: 0,
                  border: 0,
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                {[0, 1].map((k) => (
                  <span
                    key={k}
                    style={{
                      position: "absolute",
                      top: -3,
                      left: k === 0 ? -3 : undefined,
                      right: k === 1 ? -3 : undefined,
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: rivetFill(metal),
                      boxShadow: "0 2px 2px rgba(0,0,0,0.35)",
                    }}
                  />
                ))}
                <span
                  style={{
                    position: "absolute",
                    inset: "0 4px",
                    borderRadius: "3px 3px 999px 999px / 3px 3px 18px 18px",
                    background: `linear-gradient(180deg, ${metal[2]} 0%, ${metal[1]} 30%, ${metal[0]} 72%, ${metal[1]} 100%)`,
                    boxShadow: "0 6px 8px -3px rgba(0,0,0,0.45), inset 0 -2px 0 rgba(0,0,0,0.2)",
                  }}
                />
              </motion.button>
            </div>
          </motion.div>
        )}

        {active && (
          <span
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
              whiteSpace: "nowrap",
            }}
            aria-live="polite"
          >
            {`${active.name}: ${String(active.quote).replace(/\*\*/g, "")}`}
          </span>
        )}
      </div>
    </div>
  );
}

export default function DocketTestimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <CinematicLineMaskHeading
            lines={[
              { text: "Trusted by" },
              { text: "growing teams.", italic: true },
            ]}
          />
          <CinematicSubhead className={styles.subtitle}>
            Tap any folder tab, drag a card, or pull the brass handle to read client stories.
          </CinematicSubhead>
        </div>

        <div className={styles.docketFrame}>
          <DocketDrawer cards={docketTestimonials} />
        </div>

        <div className={styles.hintRow} aria-hidden="true">
          <span>Tap any tab</span>
          <span className={styles.hintDot} />
          <span>Drag card</span>
          <span className={styles.hintDot} />
          <span>Pull handle for next</span>
        </div>
      </div>
    </section>
  );
}
