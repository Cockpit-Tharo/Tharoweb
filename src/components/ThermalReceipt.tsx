"use client";

import React from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export interface ThermalReceiptItem {
  name: string;
  qty: number;
  price: number;
}

export interface ThermalReceiptProps {
  storeName?: string;
  storeAddress?: string;
  status?: string;
  orderNumber?: string;
  date?: string;
  customer?: string;
  paymentMethod?: string;
  items?: ThermalReceiptItem[];
  taxRate?: number;
  discount?: number;
  shipping?: number;
  showShipping?: boolean;
  currency?: string;
  locale?: string;
  footerMessage?: string;
  stampText?: string;
  accentColor?: string;
  printerColor?: string;
  paperColor?: string;
  inkColor?: string;
  maxWidth?: number;
  compact?: boolean;
  animated?: boolean;
  autoPrint?: boolean;
  printOnMount?: boolean;
  printDuration?: number;
  tilt?: boolean;
  sound?: boolean;
  showBarcode?: boolean;
  showStamp?: boolean;
  confetti?: boolean;
  showButton?: boolean;
  buttonLabel?: string;
}

const MONO_FONT =
  'ui-monospace, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", monospace';

// Thermal-printer feel: paper advances in discrete stepper pulses
function steppedEase(t: number): number {
  const steps = 24;
  const idx = Math.floor(t * steps);
  const frac = t * steps - idx;
  const eased = Math.min(1, frac / 0.35);
  return Math.min(1, (idx + eased * eased * (3 - 2 * eased)) / steps);
}

function playPrintSounds(duration: number) {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    // Stepper-motor pulse
    const osc = ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.value = 95;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 2200;
    bp.Q.value = 0.7;
    const amp = ctx.createGain();
    amp.gain.value = 0.025;
    const lfo = ctx.createOscillator();
    lfo.type = "square";
    lfo.frequency.value = 24 / duration;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.025;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0, now);
    master.gain.linearRampToValueAtTime(1, now + 0.03);
    master.gain.setValueAtTime(1, now + duration - 0.05);
    master.gain.linearRampToValueAtTime(0, now + duration);

    lfo.connect(lfoGain).connect(amp.gain);
    osc.connect(bp).connect(amp).connect(master).connect(ctx.destination);
    osc.start(now);
    lfo.start(now);
    osc.stop(now + duration + 0.05);
    lfo.stop(now + duration + 0.05);

    // Dual finish chime
    [1318.5, 1760].forEach((freq, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = freq;
      const t = now + duration + 0.02 + i * 0.09;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.06, t + 0.01);
      g.gain.exponentialRampToValueAtTime(1e-4, t + 0.55);
      o.connect(g).connect(ctx.destination);
      o.start(t);
      o.stop(t + 0.6);
    });

    // Stamp thud
    const th = ctx.createOscillator();
    const tg = ctx.createGain();
    th.type = "sine";
    const tt = now + duration + 0.28;
    th.frequency.setValueAtTime(160, tt);
    th.frequency.exponentialRampToValueAtTime(55, tt + 0.12);
    tg.gain.setValueAtTime(0, tt);
    tg.gain.linearRampToValueAtTime(0.18, tt + 0.005);
    tg.gain.exponentialRampToValueAtTime(1e-4, tt + 0.18);
    th.connect(tg).connect(ctx.destination);
    th.start(tt);
    th.stop(tt + 0.2);

    setTimeout(() => {
      ctx.close().catch(() => {});
    }, (duration + 1.2) * 1000);
  } catch {
    // Ignore blocked Web Audio contexts gracefully
  }
}

function withAlpha(input: string, alpha: number): string {
  let color = input;
  const cssVarMatch = color.match(/var\([^,]+,\s*(.+)\)$/);
  if (cssVarMatch) color = cssVarMatch[1].trim();

  if (color.startsWith("#") && (color.length === 7 || color.length === 4)) {
    const hex =
      color.length === 4
        ? color
            .slice(1)
            .split("")
            .map((c) => c + c)
            .join("")
        : color.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const rgbMatch = color.match(/rgba?\(([^)]+)\)/);
  if (rgbMatch) {
    const [r, g, b] = rgbMatch[1].split(",").map((s) => s.trim());
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return color;
}

export function ThermalReceipt({
  storeName = "THARO.TECH",
  storeAddress = "Zero Markup Billing · Verified Invoice",
  status = "Payment confirmed",
  orderNumber = "TH-4091",
  date = "12 Nov 2026",
  customer = "Aarav Clinic · Mumbai",
  paymentMethod = "UPI Direct",
  items = [
    { name: "Dental Checkup & Scan", qty: 1, price: 3200 },
    { name: "Follow-up Care Kit", qty: 2, price: 800 },
  ],
  taxRate = 0,
  discount = 0,
  shipping = 0,
  showShipping = false,
  currency = "INR",
  locale = "en-IN",
  footerMessage = "GST receipt sent automatically on WhatsApp",
  stampText = "PAID",
  accentColor = "#1F8A5B",
  printerColor = "#18231F",
  paperColor = "#FFFDF8",
  inkColor = "#161616",
  maxWidth = 360,
  compact = false,
  animated: animatedProp = true,
  autoPrint = true,
  printOnMount = false,
  printDuration = 1.9,
  tilt = true,
  sound = true,
  showBarcode = true,
  showStamp = true,
  confetti = true,
  showButton = true,
  buttonLabel = "Print receipt",
}: ThermalReceiptProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const animated = animatedProp && !reducedMotion;

  const rootRef = React.useRef<HTMLDivElement>(null);
  const busyRef = React.useRef(false);
  const mountedRef = React.useRef(true);
  const inView = useInView(rootRef, { once: true, amount: 0.08 });

  const [phase, setPhase] = React.useState<"hidden" | "printing" | "done">(
    animatedProp ? "hidden" : "done"
  );
  const phaseRef = React.useRef(phase);
  phaseRef.current = phase;

  const [justDone, setJustDone] = React.useState(false);
  const [burst, setBurst] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const [scanning, setScanning] = React.useState(false);

  const paperCtl = useAnimationControls();
  const printerCtl = useAnimationControls();
  const thudCtl = useAnimationControls();

  const fmt = React.useMemo(() => {
    try {
      const f = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: currency === "INR" ? 0 : 2,
        maximumFractionDigits: 2,
      });
      return (n: number) => f.format(n);
    } catch {
      return (n: number) => `${currency} ${n.toFixed(0)}`;
    }
  }, [currency, locale]);

  const safeItems = items ?? [];
  const subtotal = safeItems.reduce(
    (sum, item) => sum + (Number(item.qty) || 0) * (Number(item.price) || 0),
    0
  );
  const tax = Math.max(0, subtotal - discount) * (taxRate / 100);
  const total = Math.max(0, subtotal - discount + shipping + tax);

  const muted = withAlpha(inkColor, 0.56);
  const hl = withAlpha(accentColor, 0.09);
  const divider = `1px dashed ${withAlpha(inkColor, 0.28)}`;

  const runPrint = React.useCallback(
    async (withSound: boolean) => {
      if (busyRef.current || !mountedRef.current) return false;
      busyRef.current = true;
      try {
        setJustDone(false);

        if (phaseRef.current === "done") {
          setPhase("printing");
          await paperCtl.start({
            y: "100%",
            transition: { duration: 0.42, ease: [0.55, 0, 0.8, 0.2] },
          });
          if (!mountedRef.current) return false;
        }

        setPhase("printing");
        if (withSound && sound) playPrintSounds(printDuration);

        printerCtl.start({
          x: [0, -0.7, 0.7, -0.4, 0],
          transition: { duration: 0.16, repeat: Infinity },
        });

        await paperCtl.start({
          y: "0%",
          transition: { duration: printDuration, ease: steppedEase },
        });

        if (!mountedRef.current) return false;

        printerCtl.stop();
        printerCtl.set({ x: 0 });
        setPhase("done");
        setJustDone(true);
        setBurst((b) => b + 1);

        if (showStamp) {
          thudCtl.start({
            scale: [1, 0.982, 1.004, 1],
            transition: { duration: 0.35, delay: 0.28 },
          });
        }

        setTimeout(() => {
          if (mountedRef.current) setJustDone(false);
        }, 1800);
        return true;
      } finally {
        busyRef.current = false;
      }
    },
    [paperCtl, printerCtl, thudCtl, printDuration, sound, showStamp]
  );

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      busyRef.current = false;
      paperCtl.stop();
      printerCtl.stop();
      thudCtl.stop();
    };
  }, [paperCtl, printerCtl, thudCtl]);

  React.useEffect(() => {
    if (reducedMotion && phaseRef.current !== "done") {
      paperCtl.set({ y: "0%" });
      setPhase("done");
      return;
    }
    if (
      animated &&
      (printOnMount || (autoPrint && inView)) &&
      phaseRef.current === "hidden"
    ) {
      const timer = setTimeout(() => {
        if (mountedRef.current && phaseRef.current === "hidden") {
          runPrint(false);
        }
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [reducedMotion, animated, autoPrint, printOnMount, inView, runPrint, paperCtl]);

  const handleButton = async () => {
    if (!animated) {
      paperCtl.set({ y: "0%" });
      setPhase("done");
      setBurst((b) => b + 1);
      return;
    }
    await runPrint(true);
  };

  const copyOrder = async () => {
    try {
      await navigator.clipboard.writeText(orderNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // Clipboard API unavailable
    }
  };

  // Subtle 3D mouse hover tilt once printed
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const shadowX = useTransform(ry, (v) => -v * 1.2);
  const shadowY = useTransform(rx, (v) => 10 + v * 1.2);
  const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 18px rgba(0,0,0,0.14))`;
  const canTilt = animated && tilt && phase === "done";

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canTilt || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rx.set(-py * 7);
    ry.set(px * 9);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const teeth = compact ? 6 : 8;
  const zigzag = `conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) bottom / ${
    teeth * 2
  }px 51% repeat-x, conic-gradient(from 135deg at top, #0000, #000 1deg 89deg, #0000 90deg) top / ${
    teeth * 2
  }px 51% repeat-x`;

  const rowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 10,
  };
  const leftCell: React.CSSProperties = {
    minWidth: 0,
    overflowWrap: "anywhere",
  };
  const rightCell: React.CSSProperties = {
    flexShrink: 0,
    textAlign: "right",
    whiteSpace: "nowrap",
  };

  const activeLabel =
    phase === "printing"
      ? "Printing..."
      : justDone
        ? "Printed!"
        : buttonLabel;

  return (
    <div
      ref={rootRef}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontFamily: MONO_FONT,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth,
          containerType: "inline-size",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Paper feed slot clipping box */}
        <div
          style={{
            clipPath: "inset(-70px -70px 0 -70px)",
            padding: compact ? "0 clamp(8px, 3cqi, 12px)" : "0 clamp(10px, 4cqi, 16px)",
          }}
        >
          <motion.div
            initial={{ y: animatedProp ? "100%" : "0%" }}
            animate={paperCtl}
          >
            <motion.div
              animate={thudCtl}
              onPointerMove={onMove}
              onPointerLeave={onLeave}
              style={{
                rotateX: rx,
                rotateY: ry,
                transformPerspective: 900,
                filter: shadow,
              }}
            >
              <div
                data-receipt="true"
                style={{
                  position: "relative",
                  background: paperColor,
                  color: inkColor,
                  fontFamily: MONO_FONT,
                  fontSize: compact
                    ? "clamp(10.5px, 3.3cqi, 12.2px)"
                    : "clamp(11px, 3.45cqi, 13px)",
                  lineHeight: compact ? 1.4 : 1.48,
                  padding: compact
                    ? `calc(${teeth}px + clamp(10px, 3.6cqi, 14px)) clamp(12px, 4.8cqi, 18px) calc(${teeth}px + clamp(12px, 4cqi, 16px))`
                    : `calc(${teeth}px + clamp(14px, 4.8cqi, 18px)) clamp(14px, 5.5cqi, 22px) calc(${teeth}px + clamp(16px, 5.2cqi, 22px))`,
                  WebkitMask: zigzag,
                  mask: zigzag,
                }}
              >
                {/* Header */}
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: compact
                        ? "clamp(13.5px, 4.5cqi, 16px)"
                        : "clamp(15px, 4.8cqi, 18px)",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {storeName}
                  </div>
                  {storeAddress && (
                    <div
                      style={{
                        fontSize: "0.8em",
                        color: muted,
                        whiteSpace: "pre-line",
                        marginTop: 2,
                      }}
                    >
                      {storeAddress}
                    </div>
                  )}

                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginTop: compact ? 8 : 11,
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: compact ? "3px 9px" : "4px 10px",
                        border: `1.5px solid ${accentColor}`,
                        color: accentColor,
                        borderRadius: 999,
                        fontSize: "0.78em",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                        <motion.path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          stroke={accentColor}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: animatedProp ? 0 : 1 }}
                          animate={{ pathLength: phase === "done" ? 1 : 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      </svg>
                      <span>{status}</span>
                    </div>

                    {confetti && animated && (
                      <ReceiptConfetti
                        burst={burst}
                        colors={[accentColor, inkColor, "#F5B700", "#1F8A5B"]}
                      />
                    )}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: divider,
                    margin: compact ? "10px 0 8px" : "14px 0 10px",
                  }}
                />

                {/* Metadata */}
                <div style={{ display: "grid", gap: 2 }}>
                  <div style={rowStyle}>
                    <span style={{ color: muted }}>Receipt</span>
                    <span style={{ ...rightCell, position: "relative" }}>
                      <motion.button
                        type="button"
                        onClick={copyOrder}
                        title="Copy receipt number"
                        whileHover={{ backgroundColor: hl }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          cursor: "copy",
                          padding: "0 4px",
                          margin: "0 -4px",
                          borderRadius: 4,
                          border: "none",
                          font: "inherit",
                          color: "inherit",
                          backgroundColor: "rgba(0,0,0,0)",
                          display: "inline-block",
                        }}
                      >
                        #{orderNumber}
                      </motion.button>
                      <AnimatePresence>
                        {copied && (
                          <motion.span
                            initial={{ opacity: 0, y: 4, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -4 }}
                            style={{
                              position: "absolute",
                              right: 0,
                              bottom: "100%",
                              marginBottom: 4,
                              background: inkColor,
                              color: paperColor,
                              fontSize: "0.75em",
                              padding: "2px 8px",
                              borderRadius: 999,
                              pointerEvents: "none",
                            }}
                          >
                            Copied!
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </div>
                  <MetaRow label="Date" value={date} muted={muted} />
                  {customer && (
                    <MetaRow label="Account" value={customer} muted={muted} />
                  )}
                  {paymentMethod && (
                    <MetaRow label="Method" value={paymentMethod} muted={muted} />
                  )}
                </div>

                <div
                  style={{
                    borderTop: divider,
                    margin: compact ? "9px 0" : "12px 0",
                  }}
                />

                {/* Line items */}
                <div
                  style={{
                    ...rowStyle,
                    fontSize: "0.78em",
                    color: muted,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 3,
                  }}
                >
                  <span>Item</span>
                  <span>Amount</span>
                </div>

                <div style={{ display: "grid", gap: 2 }}>
                  {safeItems.map((item, i) => (
                    <motion.div
                      key={`${item.name}-${i}`}
                      whileHover={
                        animated ? { backgroundColor: hl, x: 2 } : undefined
                      }
                      style={{
                        padding: compact ? "2px 6px" : "4px 8px",
                        margin: compact ? "0 -6px" : "0 -8px",
                        borderRadius: 6,
                        backgroundColor: "rgba(0,0,0,0)",
                      }}
                    >
                      <div style={rowStyle}>
                        <span style={{ ...leftCell, fontWeight: 600 }}>
                          {item.name}
                        </span>
                        <span style={rightCell}>
                          {fmt((item.qty || 0) * (item.price || 0))}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.8em", color: muted }}>
                        {item.qty} x {fmt(item.price || 0)}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div
                  style={{
                    borderTop: divider,
                    margin: compact ? "9px 0" : "12px 0",
                  }}
                />

                {/* Totals + Stamp */}
                <div style={{ position: "relative" }}>
                  <div style={{ display: "grid", gap: 2 }}>
                    <div style={rowStyle}>
                      <span style={{ color: muted }}>Subtotal</span>
                      <span style={rightCell}>{fmt(subtotal)}</span>
                    </div>
                    {discount > 0 && (
                      <div style={rowStyle}>
                        <span style={{ color: muted }}>Discount</span>
                        <span style={rightCell}>-{fmt(discount)}</span>
                      </div>
                    )}
                    {showShipping && (
                      <div style={rowStyle}>
                        <span style={{ color: muted }}>Markup Fee</span>
                        <span style={rightCell}>
                          {shipping > 0 ? fmt(shipping) : "INR 0 (0%)"}
                        </span>
                      </div>
                    )}
                    {taxRate > 0 && (
                      <div style={rowStyle}>
                        <span style={{ color: muted }}>Tax ({taxRate}%)</span>
                        <span style={rightCell}>{fmt(tax)}</span>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      ...rowStyle,
                      marginTop: compact ? 6 : 8,
                      paddingTop: compact ? 6 : 8,
                      borderTop: `1.5px solid ${inkColor}`,
                      fontSize: compact
                        ? "clamp(13px, 4.2cqi, 15.5px)"
                        : "clamp(14px, 4.4cqi, 16.5px)",
                      fontWeight: 800,
                    }}
                  >
                    <span>TOTAL</span>
                    <span style={rightCell}>{fmt(total)}</span>
                  </div>

                  <AnimatePresence>
                    {showStamp && phase === "done" && (
                      <motion.div
                        initial={
                          animated
                            ? { opacity: 0, scale: 2.3, rotate: -26 }
                            : false
                        }
                        animate={{ opacity: 0.86, scale: 1, rotate: -12 }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        transition={{
                          type: "spring",
                          stiffness: 520,
                          damping: 22,
                          delay: 0.25,
                        }}
                        style={{
                          position: "absolute",
                          left: "26%",
                          top: "50%",
                          marginTop: "-1.3em",
                          padding: "2px 11px",
                          border: `3px double ${accentColor}`,
                          borderRadius: 6,
                          color: accentColor,
                          fontSize: compact
                            ? "clamp(15px, 5cqi, 20px)"
                            : "clamp(18px, 5.8cqi, 23px)",
                          fontWeight: 900,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          mixBlendMode: "multiply",
                          pointerEvents: "none",
                        }}
                      >
                        {stampText}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  style={{
                    borderTop: divider,
                    margin: compact ? "10px 0" : "13px 0",
                  }}
                />

                {showBarcode && (
                  <div
                    style={{ textAlign: "center", marginBottom: compact ? 6 : 10 }}
                    onPointerEnter={() => setScanning(true)}
                    onPointerLeave={() => setScanning(false)}
                  >
                    <div
                      style={{
                        position: "relative",
                        maxWidth: compact ? 190 : 220,
                        margin: "0 auto",
                      }}
                    >
                      <Barcode
                        value={orderNumber}
                        color={inkColor}
                        height={compact ? 30 : 40}
                      />
                      {scanning && animated && (
                        <motion.div
                          initial={{ left: "0%" }}
                          animate={{ left: ["0%", "100%", "0%"] }}
                          transition={{
                            duration: 1.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            position: "absolute",
                            top: -3,
                            bottom: -3,
                            width: 2,
                            background: "#FF3B30",
                            boxShadow: "0 0 8px 2px rgba(255,59,48,0.6)",
                            borderRadius: 2,
                          }}
                        />
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72em",
                        letterSpacing: "0.28em",
                        color: muted,
                        marginTop: 3,
                      }}
                    >
                      {orderNumber}
                    </div>
                  </div>
                )}

                {footerMessage && (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "0.85em",
                      color: muted,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {footerMessage}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Thermal printer hardware base */}
        <motion.div
          animate={printerCtl}
          style={{
            position: "relative",
            background: printerColor,
            borderRadius: "6px 6px 16px 16px",
            padding: compact
              ? "14px clamp(10px, 3.5cqi, 14px) 11px"
              : "17px clamp(12px, 4cqi, 18px) 13px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -3px 0 rgba(0,0,0,0.28)",
            zIndex: 1,
          }}
        >
          {/* Paper exit slot */}
          <div
            style={{
              position: "absolute",
              top: 4,
              left: 8,
              right: 8,
              height: 5,
              borderRadius: 4,
              background: "rgba(0,0,0,0.6)",
              boxShadow: "inset 0 2px 3px rgba(0,0,0,0.65)",
            }}
          />

          {/* Status LED */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flex: "1 1 110px",
              minWidth: 0,
            }}
          >
            <motion.span
              animate={
                phase === "printing"
                  ? { opacity: [1, 0.25, 1], scale: [1, 0.85, 1] }
                  : { opacity: 1, scale: 1 }
              }
              transition={
                phase === "printing"
                  ? { duration: 0.5, repeat: Infinity }
                  : { duration: 0.2 }
              }
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                flexShrink: 0,
                background:
                  phase === "hidden"
                    ? "#6B6B70"
                    : phase === "printing"
                      ? "#F5B700"
                      : "#34D27B",
                boxShadow:
                  phase === "hidden"
                    ? "none"
                    : `0 0 8px ${phase === "printing" ? "#F5B700" : "#34D27B"}`,
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.62)",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {phase === "printing"
                ? "Printing"
                : phase === "done"
                  ? "Ready"
                  : "Standby"}{" "}
              · 80mm
            </span>
          </div>

          {showButton && (
            <motion.button
              type="button"
              onClick={handleButton}
              disabled={phase === "printing"}
              whileHover={
                phase !== "printing"
                  ? { y: -1.5, boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }
                  : undefined
              }
              whileTap={
                phase !== "printing" ? { scale: 0.95, y: 1 } : undefined
              }
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 7,
                padding: compact ? "8px 13px" : "9px 15px",
                borderRadius: 9,
                border: "none",
                cursor: phase === "printing" ? "progress" : "pointer",
                background: accentColor,
                color: "#FFFFFF",
                fontFamily: MONO_FONT,
                fontSize: compact ? 12 : 12.5,
                fontWeight: 700,
                letterSpacing: "0.03em",
                boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
                opacity: phase === "printing" ? 0.85 : 1,
                flex: "0 0 auto",
                whiteSpace: "nowrap",
              }}
            >
              <motion.svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                animate={phase === "printing" ? { y: [0, 1.5, 0] } : { y: 0 }}
                transition={
                  phase === "printing"
                    ? { duration: 0.35, repeat: Infinity }
                    : undefined
                }
              >
                {justDone ? (
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    stroke="#FFFFFF"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M7 9V3h10v6M7 17H5a2 2 0 01-2-2v-4a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2h-2M7 14h10v7H7v-7z"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                )}
              </motion.svg>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={activeLabel}
                  initial={{ y: 7, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -7, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                >
                  {activeLabel}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function MetaRow({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 10,
      }}
    >
      <span style={{ color: muted, flexShrink: 0 }}>{label}</span>
      <span style={{ textAlign: "right", minWidth: 0, overflowWrap: "anywhere" }}>
        {value}
      </span>
    </div>
  );
}

function ReceiptConfetti({
  burst,
  colors,
}: {
  burst: number;
  colors: string[];
}) {
  const pieces = React.useMemo(() => {
    if (!burst) return [];
    return Array.from({ length: 20 }, (_, i) => {
      const seed = Math.sin(burst * 97 + i * 31) * 10000;
      const fracA = seed - Math.floor(seed);
      const seed2 = Math.cos(burst * 53 + i * 19) * 10000;
      const fracB = seed2 - Math.floor(seed2);
      const angle = ((-90 + (fracA * 170 - 85)) * Math.PI) / 180;
      const dist = 32 + fracB * 52;
      return {
        x: Math.cos(angle) * dist * 1.5,
        y: Math.sin(angle) * dist * 0.65,
        r: (fracA - 0.5) * 480,
        c: colors[i % colors.length],
        w: 4 + (i % 3),
        h: 6 + (i % 4),
        delay: (i % 5) * 0.02,
      };
    });
  }, [burst, colors]);

  if (!burst) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 0,
        height: 0,
        pointerEvents: "none",
      }}
    >
      {pieces.map((p, i) => (
        <motion.span
          key={`${burst}-${i}`}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.5 }}
          animate={{
            x: p.x,
            y: [0, p.y, p.y + 56],
            opacity: [1, 1, 0],
            rotate: p.r,
            scale: 1,
          }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.04 + p.delay }}
          style={{
            position: "absolute",
            left: -p.w / 2,
            top: -p.h / 2,
            width: p.w,
            height: p.h,
            background: p.c,
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  );
}

function Barcode({
  value,
  color,
  height = 40,
}: {
  value: string;
  color: string;
  height?: number;
}) {
  const bars = React.useMemo(() => {
    let h = 2166136261;
    for (let i = 0; i < value.length; i++) {
      h ^= value.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    const out: { x: number; w: number }[] = [];
    let x = 0;
    for (let i = 0; i < 44; i++) {
      h ^= h << 13;
      h ^= h >>> 17;
      h ^= h << 5;
      const w = (Math.abs(h) % 3) + 1;
      const gap = (Math.abs(h >> 4) % 2) + 1;
      out.push({ x, w });
      x += w + gap;
    }
    return { out, width: x };
  }, [value]);

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${bars.width} ${height}`}
      preserveAspectRatio="none"
      style={{ display: "block" }}
    >
      {bars.out.map((b, i) => (
        <rect key={i} x={b.x} y={0} width={b.w} height={height} fill={color} />
      ))}
    </svg>
  );
}

