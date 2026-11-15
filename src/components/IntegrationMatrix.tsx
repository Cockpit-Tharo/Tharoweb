"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./IntegrationMatrix.module.css";
import { ScrollableTabs } from "./ScrollableTabs";
import { CinematicLineMaskHeading, CinematicSubhead } from "./CinematicText";
import {
  LayoutDashboard,
  Zap,
  Calendar,
  CreditCard,
  Star,
  ShieldCheck,
  Mic,
  Package,
  Users,
  Workflow,
  PhoneCall,
  Lock,
  CheckCheck,
  Monitor,
  HelpCircle,
  MessageSquare,
  Layers,
  Check,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Table,
  FileText,
  Volume2,
  Clock,
} from "lucide-react";
import { ThermalReceipt } from "@/components/ThermalReceipt";
import { integrationScenarios, IntegrationScenario } from "@/data/integrations";

const iconMap = {
  dashboard: LayoutDashboard,
  zap: Zap,
  calendar: Calendar,
  payments: CreditCard,
  star: Star,
  shield: ShieldCheck,
  mic: Mic,
  package: Package,
  users: Users,
  workflow: Workflow,
  phone: PhoneCall,
  lock: Lock,
};

function renderLeftArtifact(scenario: IntegrationScenario) {
  const card = scenario.contextCard;

  switch (card.kind) {
    case "whatsapp":
      return (
        <div className={styles.artifactWhatsapp}>
          <div className={styles.artifactHeaderWhatsapp}>
            <div className={styles.whatsappBrandRow}>
              <MessageSquare size={14} />
              <span>Customer WhatsApp</span>
            </div>
            <span className={styles.contextHighlightBadge}>Live Customer Chat</span>
          </div>

          <div className={styles.whatsappMessageBubble}>
            <span className={styles.bubbleSenderName}>{card.title} ({card.subtitle})</span>
            <p className={styles.bubbleText}>&ldquo;{card.quote}&rdquo;</p>
            <div className={styles.bubbleMetaRow}>
              <span>{card.timestamp}</span>
              <CheckCheck size={14} color="#53BDEB" />
            </div>
          </div>

          <div className={styles.whatsappBridgeLock}>
            <ShieldCheck size={13} color="#075E54" />
            <span>Assignment Lock: Neha S. (Collision Guard Active)</span>
          </div>
        </div>
      );

    case "ad-lead":
      return (
        <div className={styles.artifactMetaAd}>
          <div className={styles.metaAdGradientBar} />
          <div className={styles.metaAdBody}>
            <div className={styles.metaAdHeader}>
              <div className={styles.metaAdPlatformTag}>
                <Zap size={14} />
                <span>Instagram Lead Ad Webhook</span>
              </div>
            </div>

            <div className={styles.metaAdCardBox}>
              <div className={styles.metaAdCampTitle}>Luxury Villa Tour: Weekend Site Visit</div>
              <div className={styles.metaAdLeadDetails}>
                Lead: <strong>{card.title}</strong> &bull; Floor Plan PDF Requested
              </div>
            </div>

            <div className={styles.metaAdAutoSentStrip}>
              <Check size={14} color="#20B87C" strokeWidth={3} />
              <span>Personalized welcome packet dispatched before lead left Instagram</span>
            </div>
          </div>
        </div>
      );

    case "booking":
      return (
        <div className={styles.artifactBooking}>
          <div className={styles.artifactHeaderWhatsapp}>
            <div className={styles.whatsappBrandRow}>
              <Calendar size={14} />
              <span>WhatsApp Tap-to-Book Menu</span>
            </div>
            <span className={styles.contextHighlightBadge}>Operatory Chair 2</span>
          </div>

          <div className={styles.whatsappMessageBubble}>
            <span className={styles.bubbleSenderName}>Dr. Raman Clinic Bot</span>
            <p className={styles.bubbleText}>&ldquo;Hi {card.title}! Which slot suits you best for your check-up tomorrow?&rdquo;</p>
          </div>

          <div className={styles.bookingPillsGroup}>
            <div className={styles.bookingPillItem}>
              <span>11:30 AM Tomorrow</span>
              <span style={{ fontSize: "0.68rem" }}>Available</span>
            </div>
            <div className={`${styles.bookingPillItem} ${styles.bookingPillActive}`}>
              <span>03:30 PM Tomorrow (Selected)</span>
              <Check size={13} color="#FFFFFF" />
            </div>
            <div className={styles.bookingPillItem}>
              <span>05:00 PM Tomorrow</span>
              <span style={{ fontSize: "0.68rem" }}>Available</span>
            </div>
          </div>
        </div>
      );

    case "payment":
      return (
        <div className={styles.artifactUpi}>
          <div className={styles.upiBillHeader}>
            <div>
              <div style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "var(--text-dark-muted)" }}>Payment Request</div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700 }}>{card.title} &bull; Invoice #TH-4091</div>
            </div>
            <div className={styles.upiPaidStamp}>
              <Check size={11} strokeWidth={3} />
              <span>PAID VIA UPI</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <span className={styles.upiAmountLarge}>INR 4,800.00</span>
            <span style={{ fontSize: "0.72rem", color: "#059669", fontWeight: 600 }}>0% Gateway Markup</span>
          </div>

          <div style={{ fontSize: "0.74rem", color: "var(--text-dark-muted)", background: "#FAF9F5", padding: "0.5rem 0.65rem", borderRadius: 6 }}>
            Direct Current A/C settlement verified. GST tax receipt sent on WhatsApp.
          </div>
        </div>
      );

    case "review":
      return (
        <div className={styles.artifactReview}>
          <div className={styles.starRatingRow}>
            <div>
              <div style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "var(--text-dark-muted)" }}>Post-Visit Check-In</div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700 }}>{card.title} &bull; Stylist Pooja</div>
            </div>
            <div className={styles.fiveStarPill}>
              <Star size={12} fill="#F59E0B" color="#F59E0B" />
              <span>5 Stars</span>
            </div>
          </div>

          <div style={{ fontSize: "0.78rem", lineHeight: 1.45, color: "var(--text-dark)", background: "#FAF9F5", padding: "0.65rem", borderRadius: 8 }}>
            &ldquo;Automated 2-hour check-in routed happy feedback straight to Google Maps review box.&rdquo;
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.72rem", color: "var(--accent-emerald)", fontWeight: 600 }}>
            <Check size={13} strokeWidth={3} />
            <span>Complaint Shield Active: Low scores alert manager privately</span>
          </div>
        </div>
      );

    case "media":
      return (
        <div className={styles.artifactMedia}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "0.35rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-dark)" }}>Inbound Patient Vault</span>
            <span className={styles.contextHighlightBadge}>Permanent Cloud</span>
          </div>

          <div className={styles.mediaPacketList}>
            <div className={styles.mediaPacketItem}>
              <FileText size={15} color="#0284C7" />
              <span style={{ fontWeight: 600, flex: 1 }}>Blood_Report_11Nov.pdf</span>
              <span style={{ fontSize: "0.65rem", color: "var(--accent-emerald)" }}>Encrypted PDF</span>
            </div>
            <div className={styles.mediaPacketItem}>
              <FileText size={15} color="#20B87C" />
              <span style={{ fontWeight: 600, flex: 1 }}>Skin_Lesion_Photo.jpg</span>
              <span style={{ fontSize: "0.65rem", color: "var(--accent-emerald)" }}>Cloud Archived</span>
            </div>
            <div className={styles.mediaPacketItem}>
              <Volume2 size={15} color="#EE9B39" />
              <span style={{ fontWeight: 600, flex: 1 }}>Patient_Symptom_Audio.m4a</span>
              <span style={{ fontSize: "0.65rem", color: "var(--accent-emerald)" }}>30s Audio</span>
            </div>
          </div>
        </div>
      );

    case "voice":
      return (
        <div className={styles.artifactVoiceHud}>
          <div className={styles.hudHeader}>
            <div className={styles.hudPill}>
              <Mic size={12} />
              <span>In-App Mic (Alt + V Active)</span>
            </div>
          </div>

          <div className={styles.hudWaveRow}>
            {[8, 22, 14, 28, 18, 24, 10, 16].map((h, i) => (
              <div key={i} className={styles.hudBar} style={{ height: `${h}px` }} />
            ))}
          </div>

          <div className={styles.hudTranscript}>
            &ldquo;{card.quote}&rdquo;
          </div>

          <div className={styles.hudIntentRow}>
            <span className={styles.hudChip}>Dr. Mehta (Chair 2)</span>
            <span className={styles.hudChip}>Tomorrow 4:00 PM</span>
            <span className={styles.hudChip}>Mrs. Ananya Sen</span>
          </div>
        </div>
      );

    case "inventory":
      return (
        <div className={styles.artifactDocket}>
          <div className={styles.docketHeader}>
            <span className={styles.docketTitle}>WAREHOUSE DISPATCH DOCKET #DIS-9842</span>
            <span style={{ fontSize: "0.65rem", color: "var(--text-dark-muted)" }}>09:45 AM</span>
          </div>

          <div className={styles.docketBarcode}>
            ||| | ||||| || |||||| | ||| ||||
          </div>

          <div className={styles.docketItemGrid}>
            <div className={styles.docketItem}>
              <span className={styles.docketLabel}>FACILITY</span>
              <strong>Peenya Hub Bay-4</strong>
            </div>
            <div className={styles.docketItem}>
              <span className={styles.docketLabel}>QTY DEDUCTED</span>
              <strong style={{ color: "var(--bg-forest)" }}>50 Units (Model-A)</strong>
            </div>
            <div className={styles.docketItem}>
              <span className={styles.docketLabel}>SAFETY BUFFER</span>
              <strong>120 Units (Healthy)</strong>
            </div>
            <div className={styles.docketItem}>
              <span className={styles.docketLabel}>INVOICE LINK</span>
              <strong>GST #INV-8821</strong>
            </div>
          </div>

          <div className={styles.docketStamp}>
            <Check size={12} strokeWidth={3} />
            <span>Stock Deducted in Real-Time</span>
          </div>
        </div>
      );

    case "roster":
      return (
        <div className={styles.artifactStaffBadge}>
          <div className={styles.badgeTopInfo}>
            <div className={styles.badgeAvatarCircle}>PS</div>
            <div>
              <div style={{ fontSize: "0.86rem", fontWeight: 700 }}>Priya S. (Senior Consultant)</div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-dark-muted)" }}>ID #EMP-104 &bull; Shift Completed</div>
            </div>
          </div>

          <div className={styles.badgeShiftStats}>
            <div>
              <div style={{ fontSize: "0.62rem", color: "var(--text-dark-muted)", textTransform: "uppercase" }}>Shift Hours</div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700 }}>8.5h (10:00 - 18:30)</div>
            </div>
            <div>
              <div style={{ fontSize: "0.62rem", color: "var(--text-dark-muted)", textTransform: "uppercase" }}>Clients Serviced</div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700 }}>5 Completed (INR 18.5k)</div>
            </div>
          </div>

          <div className={styles.badgeClockInStamp}>
            <Check size={13} color="#20B87C" strokeWidth={3} />
            <span>Digital biometric clock-in verified &bull; Commission logged</span>
          </div>
        </div>
      );

    case "workflow":
      return (
        <div className={styles.artifactWorkflowNode}>
          <div style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "#94A3B8", letterSpacing: "0.04em" }}>
            AUTOMATION PIPELINE TRIGGER
          </div>

          <div className={styles.nodeCard}>
            <div className={styles.nodeTriggerDot} />
            <div>
              <div style={{ fontSize: "0.72rem", color: "#94A3B8" }}>TRIGGER</div>
              <div style={{ fontWeight: 700 }}>Client Inactive &gt; 45 Days (14 Found)</div>
            </div>
          </div>

          <div className={styles.nodeConnector} />

          <div className={styles.nodeCard}>
            <Clock size={12} color="#F59E0B" />
            <div>
              <div style={{ fontSize: "0.72rem", color: "#94A3B8" }}>SAFETY FILTER</div>
              <div style={{ fontWeight: 700 }}>Hold until 10:00 AM (Quiet Hours Protected)</div>
            </div>
          </div>

          <div className={styles.nodeConnector} />

          <div className={styles.nodeCard}>
            <Zap size={12} color="#20B87C" />
            <div>
              <div style={{ fontSize: "0.72rem", color: "#94A3B8" }}>ACTION</div>
              <div style={{ fontWeight: 700 }}>Dispatch WhatsApp 1-Tap Rebooking Offer</div>
            </div>
          </div>
        </div>
      );

    case "telephony":
      return (
        <div className={styles.artifactTelephony}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: "0.68rem", color: "var(--text-dark-muted)", textTransform: "uppercase" }}>Telephony Call Log</div>
              <div style={{ fontSize: "0.84rem", fontWeight: 700 }}>Deepak Patel (+91 98450 •••••)</div>
            </div>
            <span className={styles.contextHighlightBadge}>3m 12s HD</span>
          </div>

          <div className={styles.callWavePlayer}>
            <Volume2 size={16} color="var(--bg-forest)" />
            <div style={{ flex: 1, height: 4, background: "rgba(22,22,22,0.1)", borderRadius: 2 }}>
              <div style={{ width: "65%", height: "100%", background: "var(--bg-forest)", borderRadius: 2 }} />
            </div>
            <span style={{ fontSize: "0.7rem", fontFamily: "monospace" }}>01:42 / 03:12</span>
          </div>

          <div className={styles.dialogueBubbleStaff}>
            <strong>Staff:</strong> &ldquo;Can deliver 500 units by Friday under 30-day invoice terms.&rdquo;
          </div>
          <div className={styles.dialogueBubbleClient}>
            <strong>Deepak:</strong> &ldquo;Agreed, please send formal PO schedule.&rdquo;
          </div>
        </div>
      );

    case "security":
      return (
        <div className={styles.artifactSecurity}>
          <div className={styles.securityBanner}>
            <Lock size={14} color="#F87171" />
            <span>SECURITY SHIELD: POLICY ENFORCEMENT</span>
          </div>

          <div className={styles.securityBlockBox}>
            <div className={styles.blockTitle}>EXPORT BLOCKED: Customer Contact List</div>
            <div className={styles.blockDesc}>
              Front Desk staff login attempted to download customer phone directory as a CSV file.
            </div>
          </div>

          <div className={styles.securityAuditFooter}>
            <ShieldCheck size={12} color="#20B87C" />
            <span>Policy #SEC-104: Event timestamped &amp; alerted to Owner phone</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function IntegrationMatrix() {
  const [activeCategory, setActiveCategory] = useState<"whatsapp" | "platform">("whatsapp");
  const [activeScenarioId, setActiveScenarioId] = useState<string>("shared-inbox");
  const [viewMode, setViewMode] = useState<"visual" | "records" | "howItWorks">("visual");
  const [mobileTab, setMobileTab] = useState<"input" | "output">("input");
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const mobilePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleOutside = (event: MouseEvent | TouchEvent) => {
      if (mobilePickerRef.current && !mobilePickerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const categoryScenarios = integrationScenarios.filter((s) => s.category === activeCategory);

  const activeScenario =
    categoryScenarios.find((s) => s.id === activeScenarioId) ||
    categoryScenarios[0] ||
    integrationScenarios[0];

  const handleCategoryChange = (cat: "whatsapp" | "platform") => {
    setActiveCategory(cat);
    setMobileTab("input");
    setMobileMenuOpen(false);
    setViewMode("visual");
    setActiveScreenshotIndex(0);
    const firstOfCategory = integrationScenarios.find((s) => s.category === cat);
    if (firstOfCategory) {
      setActiveScenarioId(firstOfCategory.id);
    }
  };

  const handleScenarioSelect = (id: string) => {
    setActiveScenarioId(id);
    setMobileTab("input");
    setMobileMenuOpen(false);
    setViewMode("visual");
    setActiveScreenshotIndex(0);
  };

  const handleViewModeToggle = (mode: "visual" | "records" | "howItWorks") => {
    setViewMode(mode);
    setMobileTab("output");
  };

  const hasScreenshots = Boolean(activeScenario.screenshots && activeScenario.screenshots.length > 0);
  const currentScreenshot = hasScreenshots
    ? activeScenario.screenshots![activeScreenshotIndex] || activeScenario.screenshots![0]
    : null;

  const currentScenarioIndex = Math.max(
    0,
    categoryScenarios.findIndex((s) => s.id === activeScenario.id)
  );
  const goPrevScenario = () => {
    const prevIdx =
      (currentScenarioIndex - 1 + categoryScenarios.length) % categoryScenarios.length;
    handleScenarioSelect(categoryScenarios[prevIdx].id);
  };
  const goNextScenario = () => {
    const nextIdx = (currentScenarioIndex + 1) % categoryScenarios.length;
    handleScenarioSelect(categoryScenarios[nextIdx].id);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <CinematicLineMaskHeading
            lines={[
              { text: "How it all connects." },
              { text: "Every order and booking saved.", italic: true },
            ]}
          />
          <CinematicSubhead className={styles.subtitle}>
            Customer WhatsApp replies and staff updates show up in one shared dashboard. No double typing.
          </CinematicSubhead>
        </div>

        {/* Master Category Toggle */}
        <div className={styles.categorySwitchContainer}>
          <div className={styles.categorySwitch} role="tablist" aria-label="Select Feature Category">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "whatsapp"}
              className={`${styles.categoryBtn} ${activeCategory === "whatsapp" ? styles.categoryActive : ""}`}
              onClick={() => handleCategoryChange("whatsapp")}
            >
              {activeCategory === "whatsapp" && (
                <motion.div
                  layoutId="activeIntegrationCategory"
                  className={styles.categoryActiveBg}
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <MessageSquare size={16} className={styles.categoryIcon} />
              <span className={styles.categoryLabel}>WhatsApp Chats</span>
              <span className={styles.badgeCount}>6 Flows</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "platform"}
              className={`${styles.categoryBtn} ${activeCategory === "platform" ? styles.categoryActive : ""}`}
              onClick={() => handleCategoryChange("platform")}
            >
              {activeCategory === "platform" && (
                <motion.div
                  layoutId="activeIntegrationCategory"
                  className={styles.categoryActiveBg}
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <Layers size={16} className={styles.categoryIcon} />
              <span className={styles.categoryLabel}>Staff Dashboard</span>
              <span className={styles.badgeCount}>6 Tools</span>
            </button>
          </div>
          <p className={styles.categoryExplainer}>
            {activeCategory === "whatsapp"
              ? "Customer messages automatically assign staff, reply to ads, book slots, and send UPI payment links."
              : "Daily tools for your team: speak commands by voice, track stock, schedule shifts, and review calls."}
          </p>
        </div>

        {/* Sub-Tabs for Active Category */}
        <ScrollableTabs
          tone="beige"
          className={styles.tabsShell}
          trackClassName={styles.tabsWrapper}
          role="tablist"
          ariaLabel="Workflow integrations"
        >
          {categoryScenarios.map((scenario) => {
            const Icon = iconMap[scenario.iconName];
            const isActive = scenario.id === activeScenario.id;
            return (
              <button
                key={scenario.id}
                type="button"
                role="tab"
                onClick={() => handleScenarioSelect(scenario.id)}
                className={`${styles.tabBtn} ${isActive ? styles.tabActive : ""}`}
                aria-selected={isActive}
              >
                <Icon size={14} className={styles.tabIcon} />
                <span className={styles.tabText}>{scenario.tabLabel}</span>
                {isActive && (
                  <motion.div
                    layoutId={`activeIntegrationTab-${activeCategory}`}
                    className={styles.tabActiveIndicator}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </ScrollableTabs>

        {/* Clean Editorial Workstation Card - Stable Outer Frame */}
        <div className={styles.canvasCard}>
            {/* Phone-Only Unified Custom Liquid-Glass Feature Picker Header */}
            <div className={styles.mobilePickerBar}>
              <div className={styles.mobileSelectWrap} ref={mobilePickerRef}>
                {(() => {
                  const ActiveIcon = iconMap[activeScenario.iconName] || LayoutDashboard;
                  return (
                    <button
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={mobileMenuOpen}
                      aria-label="Select feature example"
                      onClick={() => setMobileMenuOpen((prev) => !prev)}
                      className={`${styles.mobileSelectTrigger} ${mobileMenuOpen ? styles.mobileSelectTriggerOpen : ""}`}
                    >
                      <span className={styles.mobileSelectLeft}>
                        <ActiveIcon size={14} className={styles.mobileSelectIcon} aria-hidden="true" />
                        <span className={styles.mobileSelectText}>{activeScenario.tabLabel}</span>
                      </span>
                      <ChevronDown
                        size={15}
                        className={`${styles.mobileSelectArrow} ${mobileMenuOpen ? styles.mobileSelectArrowOpen : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })()}

                <AnimatePresence>
                  {mobileMenuOpen && (
                    <motion.div
                      role="listbox"
                      aria-label="Available features"
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className={styles.mobileGlassMenu}
                    >
                      {categoryScenarios.map((sc) => {
                        const ItemIcon = iconMap[sc.iconName] || LayoutDashboard;
                        const isSelected = sc.id === activeScenario.id;
                        return (
                          <button
                            key={sc.id}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => handleScenarioSelect(sc.id)}
                            className={`${styles.mobileGlassOption} ${isSelected ? styles.mobileGlassOptionActive : ""}`}
                          >
                            <ItemIcon size={14} className={styles.mobileGlassIcon} aria-hidden="true" />
                            <span className={styles.mobileGlassLabel}>{sc.tabLabel}</span>
                            {isSelected && <Check size={14} strokeWidth={2.5} className={styles.mobileGlassCheck} />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className={styles.mobileStepper}>
                <button
                  type="button"
                  onClick={goPrevScenario}
                  className={styles.mobileStepBtn}
                  aria-label="Previous feature"
                >
                  <ChevronLeft size={15} />
                </button>
                <span className={styles.mobileStepCount}>
                  {currentScenarioIndex + 1}/{categoryScenarios.length}
                </span>
                <button
                  type="button"
                  onClick={goNextScenario}
                  className={styles.mobileStepBtn}
                  aria-label="Next feature"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* Clean Card Header (Desktop) */}
            <div className={styles.cardHeader}>
              <div className={styles.headerInfo}>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={activeScenario.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                    className={styles.headerInfoInner}
                  >
                    <h3 className={styles.headerTitle}>{activeScenario.tabLabel}</h3>
                    <span className={styles.categoryPill}>
                      {activeCategory === "whatsapp" ? "WhatsApp Chat" : "Staff Tools"}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Desktop View Mode Toggle */}
              <div className={styles.viewToggle} role="tablist" aria-label="Display View">
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === "visual"}
                  onClick={() => handleViewModeToggle("visual")}
                  className={`${styles.toggleBtn} ${viewMode === "visual" ? styles.toggleActive : ""}`}
                >
                  {viewMode === "visual" && (
                    <motion.div
                      layoutId="activeMatrixViewMode"
                      className={styles.toggleActiveBg}
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <Monitor size={14} className={styles.toggleIcon} />
                  <span className={styles.toggleText}>{hasScreenshots ? "Live Interface" : "Live Preview"}</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === "records"}
                  onClick={() => handleViewModeToggle("records")}
                  className={`${styles.toggleBtn} ${viewMode === "records" ? styles.toggleActive : ""}`}
                >
                  {viewMode === "records" && (
                    <motion.div
                      layoutId="activeMatrixViewMode"
                      className={styles.toggleActiveBg}
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <Zap size={14} className={styles.toggleIcon} />
                  <span className={styles.toggleText}>Sync Records</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === "howItWorks"}
                  onClick={() => handleViewModeToggle("howItWorks")}
                  className={`${styles.toggleBtn} ${viewMode === "howItWorks" ? styles.toggleActive : ""}`}
                >
                  {viewMode === "howItWorks" && (
                    <motion.div
                      layoutId="activeMatrixViewMode"
                      className={styles.toggleActiveBg}
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <HelpCircle size={14} className={styles.toggleIcon} />
                  <span className={styles.toggleText}>How It Works</span>
                </button>
              </div>

              {/* Mobile Header How-It-Works Button */}
              <button
                type="button"
                onClick={() => {
                  if (viewMode === "howItWorks") {
                    setViewMode("visual");
                  } else {
                    setViewMode("howItWorks");
                    setMobileTab("output");
                  }
                }}
                className={styles.mobileHeaderHelpBtn}
                aria-label="Toggle How It Works"
              >
                <HelpCircle size={12} />
                <span>{viewMode === "howItWorks" ? "Live Records" : "How It Works"}</span>
              </button>
            </div>

            {/* Mobile Viewport Sub-Navigation: Clean 2-Tab Switcher */}
            <div className={styles.mobileCardNav} role="tablist" aria-label="Mobile View Selection">
              <button
                type="button"
                role="tab"
                aria-selected={mobileTab === "input"}
                onClick={() => {
                  setMobileTab("input");
                  if (viewMode === "howItWorks") setViewMode("visual");
                }}
                className={`${styles.mobileNavBtn} ${mobileTab === "input" ? styles.mobileNavActive : ""}`}
              >
                <MessageSquare size={13} />
                <span>{activeCategory === "whatsapp" ? "Trigger Event" : "Staff Action"}</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mobileTab === "output"}
                onClick={() => {
                  setMobileTab("output");
                }}
                className={`${styles.mobileNavBtn} ${mobileTab === "output" ? styles.mobileNavActive : ""}`}
              >
                <Zap size={13} />
                <span>{hasScreenshots ? "Live App UI" : "Live Action"} ({activeScenario.destinationApp.records.length})</span>
              </button>
            </div>

            {/* Card Body: Bespoke Context Event (Left) + System Result (Right) */}
            <div className={styles.cardBodyContainer}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeScenario.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                  className={styles.cardBody}
                >
                  {/* Left Column: Bespoke Context Event & Operational Impact */}
                  <div
                    className={`${styles.leftColumn} ${
                      mobileTab === "input" ? styles.columnVisible : styles.columnHidden
                    }`}
                  >
                    <div className={styles.columnLabelRow}>
                      <span className={styles.columnLabel}>
                        {activeScenario.contextCard.headerLabel}
                      </span>
                      <span className={styles.timeLabel}>{activeScenario.contextCard.timestamp}</span>
                    </div>

                    {/* Bespoke Real-World Artifact for Each Scenario */}
                    {renderLeftArtifact(activeScenario)}

                    {/* Bespoke Operational Impact Card */}
                    <div className={styles.impactCard}>
                      <h4 className={styles.impactHeading}>{activeScenario.impact.heading}</h4>
                      <p className={styles.impactSummary}>{activeScenario.impact.summary}</p>
                      {activeScenario.impact.tags && activeScenario.impact.tags.length > 0 && (
                        <div className={styles.impactTags}>
                          {activeScenario.impact.tags.map((tag) => (
                            <span key={tag} className={styles.impactTag}>{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Mobile Quick-Advance Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setMobileTab("output");
                        setViewMode("visual");
                      }}
                      className={styles.mobileAdvanceBtn}
                      aria-label="View Automated System Action"
                    >
                      <span>View {hasScreenshots ? "Live App UI" : "Automated Action"} ({activeScenario.destinationApp.records.length})</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Mobile Flow Divider between Input & Output */}
                  <div className={styles.mobileFlowDivider} aria-hidden="true">
                    <span className={styles.mobileFlowPill}>
                      <ArrowDown size={12} />
                      <span>{activeCategory === "whatsapp" ? "Updates your dashboard" : "Runs across your tools"}</span>
                    </span>
                  </div>

                  {/* Right Column: Automated Business Action, Live UI Screenshot & Records */}
                  <div
                    className={`${styles.rightColumn} ${
                      mobileTab === "output" ? styles.columnVisible : styles.columnHidden
                    }`}
                  >
                    {viewMode === "visual" ? (
                      <>
                        {hasScreenshots && currentScreenshot ? (
                          /* ─── REAL APPLICATION SCREENSHOT SHOWCASE ─── */
                          <div className={styles.softwareStage}>
                            <div className={styles.browserChrome}>
                              <div className={styles.addressBar}>
                                <Lock size={11} className={styles.addressLock} />
                                <span>https://{activeScenario.previewUrl || "app.tharo.tech"}</span>
                                <motion.span
                                  key={activeScenario.id}
                                  initial={{ opacity: 0, scale: 0.94 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2, delay: 0.1 }}
                                  className={styles.syncPulsePill}
                                >
                                  <span className={styles.syncDot} />
                                  <span>Synced &lt;1.2s</span>
                                </motion.span>
                              </div>
                              <div className={styles.windowActions}>
                            <button
                              type="button"
                              onClick={() => {
                                setLightboxImage({
                                  src: currentScreenshot.src,
                                  alt: currentScreenshot.alt,
                                  title: `${activeScenario.tabLabel}: ${currentScreenshot.label}`,
                                });
                              }}
                              className={styles.zoomBtn}
                              aria-label="Expand full view"
                              title="Expand full view"
                            >
                              <Maximize2 size={13} />
                            </button>
                          </div>
                        </div>

                        {/* Multi-Screenshot Sub-Tabs (e.g. Bookings Table vs Master Calendar) */}
                        {activeScenario.screenshots!.length > 1 && (
                          <div className={styles.screenshotSwitcher} role="tablist" aria-label="Select View">
                            {activeScenario.screenshots!.map((shot, sIdx) => {
                              const isSelected = activeScreenshotIndex === sIdx;
                              return (
                                <button
                                  key={shot.label}
                                  type="button"
                                  role="tab"
                                  aria-selected={isSelected}
                                  onClick={() => setActiveScreenshotIndex(sIdx)}
                                  className={`${styles.switcherBtn} ${isSelected ? styles.switcherBtnActive : ""}`}
                                >
                                  {sIdx === 0 ? <Table size={12} /> : <Calendar size={12} />}
                                  <span>{shot.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Interactive High-Res Screen Viewport */}
                        <div
                          className={styles.screenViewport}
                          onClick={() => {
                            setLightboxImage({
                              src: currentScreenshot.src,
                              alt: currentScreenshot.alt,
                              title: `${activeScenario.tabLabel}: ${currentScreenshot.label}`,
                            });
                          }}
                        >
                          <Image
                            src={currentScreenshot.src}
                            alt={currentScreenshot.alt}
                            width={1200}
                            height={680}
                            className={styles.softwareImage}
                            priority
                          />
                          <div className={styles.zoomOverlay}>
                            <Maximize2 size={12} />
                            <span>Click to expand high-res</span>
                          </div>
                        </div>

                        {/* Live Telemetry Ribbon */}
                        <div className={styles.softwareTelemetryStrip}>
                          {activeScenario.destinationApp.metrics.map((metric) => (
                            <div key={metric.label} className={styles.softwareMetricChip}>
                              <span className={styles.chipLabel}>{metric.label}</span>
                              <span className={styles.chipValue}>{metric.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Quick link to detailed audit logs */}
                        <div className={styles.viewAuditRow}>
                          <button
                            type="button"
                            onClick={() => setViewMode("records")}
                            className={styles.viewRecordsBtn}
                          >
                            <span>View Sync Audit Trail ({activeScenario.destinationApp.records.length} records)</span>
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* ─── BESPOKE CAPABILITY VISUAL WIDGETS ─── */
                      <div className={styles.customWidgetStage}>
                        <div className={styles.browserChrome}>
                          <div className={styles.addressBar}>
                            <Lock size={11} className={styles.addressLock} />
                            <span>https://{activeScenario.previewUrl || "app.tharo.tech"}</span>
                            <motion.span
                              key={activeScenario.id}
                              initial={{ opacity: 0, scale: 0.94 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: 0.1 }}
                              className={styles.syncPulsePill}
                            >
                              <span className={styles.syncDot} />
                              <span>Synced &lt;1.2s</span>
                            </motion.span>
                          </div>
                          <div className={styles.windowActions}>
                          </div>
                        </div>

                        <div className={styles.customWidgetBody}>
                          {activeScenario.id === "upi-payments" && (
                            <div className={styles.upiReceiptWrap}>
                              <ThermalReceipt
                                key={activeScenario.id}
                                compact
                                printOnMount
                                printDuration={1.1}
                                showBarcode={false}
                                maxWidth={300}
                                storeName="DR. RAMAN CLINIC"
                                storeAddress="UPI Auto-Receipt · Zero Markup"
                                status="Paid via UPI"
                                orderNumber="TH-4091"
                                date="12 Nov 2026"
                                customer="Sneha Roy"
                                paymentMethod="UPI Direct"
                                items={[
                                  { name: "Dental Checkup", qty: 1, price: 3200 },
                                  { name: "Care Kit & Scan", qty: 2, price: 800 },
                                ]}
                                taxRate={0}
                                showShipping={false}
                                currency="INR"
                                locale="en-IN"
                                footerMessage="GST receipt sent on WhatsApp"
                                stampText="PAID"
                                buttonLabel="Re-print receipt"
                              />
                            </div>
                          )}

                          {activeScenario.id === "pipo-voice" && (
                            <div className={styles.voiceWaveBox}>
                              <div className={styles.voiceWaveform}>
                                {[12, 28, 16, 36, 22, 30, 14, 24].map((h, idx) => (
                                  <div
                                    key={idx}
                                    className={styles.waveBar}
                                    style={{ height: `${h}px` }}
                                  />
                                ))}
                              </div>
                              <div className={styles.voiceTranscript}>
                                Spoken: &ldquo;Book appointment for Mrs. Ananya with Dr. Mehta tomorrow at 4 PM for dental consultation.&rdquo;
                              </div>
                              <div className={styles.voiceIntentChips}>
                                <span className={styles.voiceChip}>Dr. Mehta (Chair 2)</span>
                                <span className={styles.voiceChip}>Tomorrow 4:00 PM</span>
                                <span className={styles.voiceChip}>Mrs. Ananya Sen</span>
                              </div>
                              <div className={styles.undoNotice} style={{ background: "rgba(255,255,255,0.12)", border: "none", color: "#FFFFFF" }}>
                                <span>Action confirmed. Need to adjust?</span>
                                <button type="button" className={styles.undoButton}>Undo (5s)</button>
                              </div>
                            </div>
                          )}

                          {activeScenario.id === "speed-to-lead" && (
                            <div className={styles.leadSpeedBox}>
                              <div className={styles.leadTimerBanner}>
                                <div>
                                  <div style={{ fontSize: "0.72rem", color: "var(--text-dark-muted)" }}>SPEED TO LEAD</div>
                                  <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>Instagram Ad Lead Form Webhook</div>
                                </div>
                                <div className={styles.leadTimerNum}>Instant</div>
                              </div>
                              <div className={styles.upiDetails}>
                                <div className={styles.upiDetailRow}>
                                  <Check size={14} color="#20B87C" strokeWidth={3} />
                                  <span>Customer greeted by name on WhatsApp with Floor Plan PDF</span>
                                </div>
                                <div className={styles.upiDetailRow}>
                                  <Check size={14} color="#20B87C" strokeWidth={3} />
                                  <span>Interactive slot options sent: Saturday 11 AM or Sunday 3 PM</span>
                                </div>
                                <div className={styles.upiDetailRow}>
                                  <Check size={14} color="#20B87C" strokeWidth={3} />
                                  <span>Property advisor Rohit notified on central desktop</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {activeScenario.id === "google-reviews" && (
                            <div className={styles.reviewBox}>
                              <div className={styles.googleStarsRow}>
                                <div className={styles.starsGroup}>
                                  {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={16} fill="#FBBC04" color="#FBBC04" />
                                  ))}
                                </div>
                                <span className={styles.googleScoreBadge}>4.9 Stars on Google Maps</span>
                              </div>
                              <div className={styles.upiDetails}>
                                <div className={styles.upiDetailRow}>
                                  <Check size={14} color="#20B87C" strokeWidth={3} />
                                  <span>Automated check-in sent 2 hours post-service</span>
                                </div>
                                <div className={styles.upiDetailRow}>
                                  <Check size={14} color="#20B87C" strokeWidth={3} />
                                  <span>5-Star replies open public Google Maps review box</span>
                                </div>
                                <div className={styles.upiDetailRow}>
                                  <Check size={14} color="#20B87C" strokeWidth={3} />
                                  <span>Low scores routed privately to manager without public damage</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {activeScenario.id === "media-vault" && (
                            <div className={styles.reviewBox}>
                              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--bg-forest)" }}>
                                Permanent Encrypted Media Vault (Zero Expired WhatsApp Links)
                              </div>
                              <div className={styles.vaultFilesGrid}>
                                <div className={styles.vaultFileCard}>
                                  <FileText size={20} color="#0284c7" />
                                  <span className={styles.vaultFileName}>Blood_Report_11Nov.pdf</span>
                                  <span className={styles.vaultFileMeta}>Encrypted PDF</span>
                                </div>
                                <div className={styles.vaultFileCard}>
                                  <FileText size={20} color="#20B87C" />
                                  <span className={styles.vaultFileName}>Dermal_Consult_Photo.jpg</span>
                                  <span className={styles.vaultFileMeta}>Cloud Archived</span>
                                </div>
                                <div className={styles.vaultFileCard}>
                                  <Volume2 size={20} color="#ee9b39" />
                                  <span className={styles.vaultFileName}>Patient_Voice_Note.m4a</span>
                                  <span className={styles.vaultFileMeta}>Audio 30s</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {activeScenario.id === "phone-calls" && (
                            <div className={styles.audioCallBox}>
                              <div className={styles.audioPlayerStrip}>
                                <Volume2 size={16} color="var(--bg-forest)" />
                                <div className={styles.audioTrack}>
                                  <div className={styles.audioProgress} />
                                </div>
                                <span className={styles.audioTime}>01:42 / 03:12</span>
                              </div>
                              <div className={styles.upiDetails}>
                                <div className={styles.upiDetailRow}>
                                  <Check size={14} color="#20B87C" strokeWidth={3} />
                                  <span>Deepak Patel: 500 units bulk order by Friday</span>
                                </div>
                                <div className={styles.upiDetailRow}>
                                  <Check size={14} color="#20B87C" strokeWidth={3} />
                                  <span>Agreed credit terms: 30-day payment schedule</span>
                                </div>
                                <div className={styles.upiDetailRow}>
                                  <Check size={14} color="#20B87C" strokeWidth={3} />
                                  <span>Logistics coordinator assigned to confirm dispatch</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Live Telemetry Ribbon */}
                          <div className={styles.softwareTelemetryStrip}>
                            {activeScenario.destinationApp.metrics.map((metric) => (
                              <div key={metric.label} className={styles.softwareMetricChip}>
                                <span className={styles.chipLabel}>{metric.label}</span>
                                <span className={styles.chipValue}>{metric.value}</span>
                              </div>
                            ))}
                          </div>

                          <div className={styles.viewAuditRow}>
                            <button
                              type="button"
                              onClick={() => setViewMode("records")}
                              className={styles.viewRecordsBtn}
                            >
                              <span>View Sync Audit Trail ({activeScenario.destinationApp.records.length} records)</span>
                              <ArrowRight size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className={styles.cardFooter}>
                      <span>Updates immediately across your team&apos;s laptops and phones.</span>
                    </div>

                    {/* Mobile Navigation Row */}
                    <div className={styles.mobileActionRow}>
                      <button
                        type="button"
                        onClick={() => setMobileTab("input")}
                        className={styles.mobileBackBtn}
                        aria-label="Back to Customer Input"
                      >
                        <ArrowLeft size={13} />
                        <span>Back to Input</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("howItWorks")}
                        className={styles.mobileSecondaryBtn}
                        aria-label="See How It Works"
                      >
                        <span>How It Works</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </>
                ) : viewMode === "records" ? (
                  /* ─── DETAILED DATABASE & TELEMETRY AUDIT TRAIL ─── */
                  <>
                    <div className={styles.columnLabelRow}>
                      <span className={styles.columnLabel}>Database Operations &amp; Audit Records</span>
                    </div>

                    {/* Metric Highlights */}
                    <div className={styles.metricsRow}>
                      {activeScenario.destinationApp.metrics.map((metric) => (
                        <div key={metric.label} className={styles.metricBox}>
                          <span className={styles.metricTitle}>{metric.label}</span>
                          <span className={styles.metricNumber}>{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Clean Records List */}
                    <div className={styles.recordsContainer}>
                      {activeScenario.destinationApp.records.map((rec, index) => (
                        <div key={rec.key} className={styles.recordRow}>
                          <div className={styles.recordLeft}>
                            <span className={styles.recordNumber}>0{index + 1}</span>
                            <div className={styles.recordText}>
                              <h4 className={styles.recordHeading}>{rec.primary}</h4>
                              <p className={styles.recordDetails}>{rec.secondary}</p>
                            </div>
                          </div>
                          <span className={`${styles.recordStatusBadge} ${styles[`status_${rec.status}`] || ""}`}>
                            {rec.tag}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.viewAuditRow}>
                      <button
                        type="button"
                        onClick={() => setViewMode("visual")}
                        className={styles.viewRecordsBtn}
                      >
                        <ArrowLeft size={12} />
                        <span>Back to {hasScreenshots ? "Live Interface" : "Live Preview"}</span>
                      </button>
                    </div>

                    <div className={styles.cardFooter}>
                      <span>Updates immediately across your team&apos;s laptops and phones.</span>
                    </div>

                    {/* Mobile Navigation Row */}
                    <div className={styles.mobileActionRow}>
                      <button
                        type="button"
                        onClick={() => setMobileTab("input")}
                        className={styles.mobileBackBtn}
                        aria-label="Back to Customer Input"
                      >
                        <ArrowLeft size={13} />
                        <span>Back to Input</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("visual")}
                        className={styles.mobileSecondaryBtn}
                        aria-label="Back to Live Interface"
                      >
                        <Monitor size={13} />
                        <span>Live UI</span>
                      </button>
                    </div>
                  </>
                ) : (
                  /* ─── HOW IT WORKS EXPLAINER PANEL ─── */
                  <div className={styles.howItWorksPanel}>
                    <h4 className={styles.howItWorksTitle}>How This Automation Runs</h4>
                    <div className={styles.stepsList}>
                      {activeScenario.destinationApp.howItWorks.map((step, idx) => (
                        <div key={idx} className={styles.stepItem}>
                          <span className={styles.stepNum}>{idx + 1}</span>
                          <p className={styles.stepText}>{step}</p>
                        </div>
                      ))}
                    </div>
                    <p className={styles.howItWorksFooterNote}>
                      Connects directly to your WhatsApp and internal ledger without manual copy-pasting.
                    </p>
                    {/* Mobile Navigation Row */}
                    <div className={styles.mobileActionRow}>
                      <button
                        type="button"
                        onClick={() => setMobileTab("input")}
                        className={styles.mobileBackBtn}
                        aria-label="Back to Customer Input"
                      >
                        <ArrowLeft size={13} />
                        <span>Back to Input</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("visual")}
                        className={styles.mobileSecondaryBtn}
                        aria-label="Back to Live Action"
                      >
                        <Monitor size={13} />
                        <span>Live Preview</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>

      {/* ─── HIGH-RES SCREENSHOT LIGHTBOX MODAL ─── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightboxOverlay}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles.lightboxModal}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.lightboxHeader}>
                <h4 className={styles.lightboxTitle}>{lightboxImage.title}</h4>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className={styles.lightboxCloseBtn}
                  aria-label="Close Preview"
                >
                  <X size={16} />
                </button>
              </div>
              <div className={styles.lightboxBody}>
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  width={2400}
                  height={1400}
                  className={styles.lightboxImg}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
