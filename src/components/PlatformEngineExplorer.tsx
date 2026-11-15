"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./PlatformEngineExplorer.module.css";
import { ScrollableTabs } from "./ScrollableTabs";
import {
  Package,
  Inbox,
  GitBranch,
  Calendar,
  Users,
  ShieldCheck,
  Maximize2,
  X,
  CheckCircle2,
  Zap,
  ArrowRight,
  Database,
  ExternalLink,
} from "lucide-react";

interface EngineItem {
  id: string;
  name: string;
  badge: string;
  icon: any;
  headline: string;
  tagline: string;
  description: string;
  imageSrc: string;
  altImageSrc?: string;
  altImageLabel?: string;
  defaultImageLabel?: string;
  keyCapabilities: string[];
  whatsappIntegration: string;
}

const engines: EngineItem[] = [
  {
    id: "inventory",
    name: "Warehouse Inventory",
    badge: "Real-Time Stock Engine",
    icon: Package,
    headline: "Live stock balances across every branch.",
    tagline: "Every confirmed WhatsApp order or counter dispatch updates inventory automatically.",
    description:
      "WhatsApp orders and counter dispatches deduct stock across branches in real time. Built-in safety levels draft restock orders before items run out.",
    imageSrc: "/images/web content/inventorys.png",
    keyCapabilities: [
      "Multi-warehouse branch stock visibility from one dashboard",
      "Batch & serial number tracking for compliance and warranties",
      "Automated low-stock WhatsApp warnings to procurement leads",
      "One-click GST tax invoice & delivery challan generation",
    ],
    whatsappIntegration:
      "Customer messages 'Order 20 units of Model-A' -> System checks live stock -> Holds allocation -> Dispatches UPI payment link.",
  },
  {
    id: "inbox",
    name: "Shared Team Cockpit",
    badge: "Multi-Agent WhatsApp",
    icon: Inbox,
    headline: "One verified number for your whole team.",
    tagline: "Bring sales, support, and billing into one shared inbox.",
    description:
      "Stop passing phones around the office. Staff reply from your official number with individual logins, internal private notes, and collision guards.",
    imageSrc: "/images/web content/sharedinbox.png",
    keyCapabilities: [
      "Real-time collision prevention shows when a teammate is typing",
      "Internal private notes invisible to the customer for seamless handoffs",
      "Automated skill-based routing based on query intent (Sales vs Support)",
      "Standardized verified reply templates with dynamic customer fields",
    ],
    whatsappIntegration:
      "New customer inquiry lands -> Pipo AI qualifies budget -> Routes to Pooja (Sales) -> Pooja leaves private note for accounting.",
  },
  {
    id: "automates",
    name: "Visual Automation Studio",
    badge: "No-Code Workflow Builder",
    icon: GitBranch,
    headline: "Drag-and-drop business logic. Zero code needed.",
    tagline: "Connect WhatsApp events, database triggers, webhooks, and payment links.",
    description:
      "Visually design how your business responds to customer actions. Trigger automated follow-ups, payment reminders, staff assignments, and webhook dispatches to your external billing tools without writing a single line of backend code.",
    imageSrc: "/images/web content/automates.png",
    keyCapabilities: [
      "Visual flowchart canvas with conditional branching and time delays",
      "Webhook triggers for Tally, Zoho Books, Shopify, and custom databases",
      "Dynamic message personalization pulling customer history fields",
      "Instant rollback and revision history for enterprise governance",
    ],
    whatsappIntegration:
      "Payment received webhook -> Automation Studio emits GST invoice PDF -> Schedules 48-hour follow-up feedback ping.",
  },
  {
    id: "bookings",
    name: "Bookings & Calendar Hub",
    badge: "Slot Reservation Engine",
    icon: Calendar,
    headline: "Two-way calendar sync without double bookings.",
    tagline: "Slot grid and calendar views with automatic reminders.",
    description:
      "Clients pick available slots directly on WhatsApp while staff manage schedules from a compact slot grid or weekly calendar.",
    imageSrc: "/images/web content/booking.png",
    altImageSrc: "/images/web content/calendar.png",
    defaultImageLabel: "Slot Grid View",
    altImageLabel: "Full Calendar View",
    keyCapabilities: [
      "Dual-view switcher: Compact slot grid and full weekly calendar",
      "Automated WhatsApp confirmation with Google Calendar invite attachment",
      "Mandatory UPI advance deposits to eradicate expensive no-shows",
      "Two-way buffer time calculation between appointments",
    ],
    whatsappIntegration:
      "Patient books on WhatsApp -> Calendar slot reserved -> 24-hour and 2-hour automated reminder pings dispatched.",
  },
  {
    id: "staff",
    name: "Staff Shifts & Payroll",
    badge: "Team Operations",
    icon: Users,
    headline: "Shift schedules, attendance, and commissions.",
    tagline: "Staff view rosters right on WhatsApp.",
    description:
      "Plan monthly shifts, record clock-ins, and calculate commissions without asking staff to install another mobile app.",
    imageSrc: "/images/web content/staff.png",
    keyCapabilities: [
      "Visual shift scheduler with automated clash and overtime detection",
      "Geofenced check-in verification for store and field personnel",
      "Sales commission calculation linked directly to closed WhatsApp deals",
      "Export-ready salary registers compliant with Indian labor standards",
    ],
    whatsappIntegration:
      "Upcoming week's roster released -> Staff receive personalized shift timetable on WhatsApp with one-tap confirmation.",
  },
  {
    id: "security",
    name: "Role-Based Access Control",
    badge: "Enterprise Security Matrix",
    icon: ShieldCheck,
    headline: "Role permissions and masked client numbers.",
    tagline: "Control access by team role and log every export.",
    description:
      "Limit staff views by role, mask customer phone numbers on screen, enforce two-factor login, and log system changes.",
    imageSrc: "/images/web content/rolebased.png",
    keyCapabilities: [
      "Role tiers: Super Admin, Branch Manager, Billing Clerk, and Field Agent",
      "Client phone number masking on staff screens to prevent database theft",
      "Tamper-proof audit logs recording every message, view, and ledger export",
      "Instant one-click session revocation when an employee departs",
    ],
    whatsappIntegration:
      "Staff can chat with clients on WhatsApp, but customer phone numbers remain masked behind internal client IDs.",
  },
];

export default function PlatformEngineExplorer() {
  const [activeEngineId, setActiveEngineId] = useState("inventory");
  const [showAltImage, setShowAltImage] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeEngine = engines.find((e) => e.id === activeEngineId) || engines[0];
  const currentImage =
    showAltImage && activeEngine.altImageSrc ? activeEngine.altImageSrc : activeEngine.imageSrc;

  return (
    <div className={styles.explorerWrapper}>
      {/* ─── ENGINE SELECTOR TABS ─── */}
      <ScrollableTabs
        tone="surface"
        className={styles.engineTabsShell}
        trackClassName={styles.engineTabs}
        role="tablist"
        ariaLabel="Core platform engines"
      >
        {engines.map((eng) => {
          const Icon = eng.icon;
          const isActive = eng.id === activeEngineId;
          return (
            <button
              key={eng.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
              onClick={() => {
                setActiveEngineId(eng.id);
                setShowAltImage(false);
              }}
            >
              <Icon size={16} className={styles.tabIcon} />
              <span className={styles.tabName}>{eng.name}</span>
            </button>
          );
        })}
      </ScrollableTabs>

      {/* ─── ENGINE CONTENT SHOWCASE ─── */}
      <div className={styles.showcaseGrid}>
        {/* Left Column: Technical Details & Capabilities */}
        <div className={styles.infoCol}>
          <h3 className={styles.engineHeadline}>{activeEngine.headline}</h3>
          <p className={styles.engineTagline}>{activeEngine.tagline}</p>
          <p className={styles.engineDesc}>{activeEngine.description}</p>

          {/* Key Capabilities List */}
          <div className={styles.capabilitiesBox}>
            <span className={styles.capTitle}>System Capabilities</span>
            <ul className={styles.capList}>
              {activeEngine.keyCapabilities.map((cap, i) => (
                <li key={i} className={styles.capItem}>
                  <CheckCircle2 size={15} className={styles.capCheck} />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp Bridge Banner */}
          <div className={styles.whatsappBridge}>
            <div className={styles.bridgeHead}>
              <Zap size={14} />
              <span>WhatsApp Native Bridge</span>
            </div>
            <p className={styles.bridgeText}>{activeEngine.whatsappIntegration}</p>
          </div>
        </div>

        {/* Right Column: High-Res UI Screenshot Preview */}
        <div className={styles.previewCol}>
          <div className={styles.previewCard}>
            {/* Window Chrome */}
            <div className={styles.windowChrome}>
              <div className={styles.chromeTitle}>
                tharo.tech/app/{activeEngine.id}
              </div>

              {/* Dual View Switcher (if available) */}
              {activeEngine.altImageSrc && (
                <div className={styles.dualViewSwitcher}>
                  <button
                    className={`${styles.viewBtn} ${!showAltImage ? styles.viewBtnActive : ""}`}
                    onClick={() => setShowAltImage(false)}
                  >
                    {activeEngine.defaultImageLabel || "View 1"}
                  </button>
                  <button
                    className={`${styles.viewBtn} ${showAltImage ? styles.viewBtnActive : ""}`}
                    onClick={() => setShowAltImage(true)}
                  >
                    {activeEngine.altImageLabel || "View 2"}
                  </button>
                </div>
              )}
            </div>

            {/* Screenshot Frame */}
            <div
              className={styles.imageFrame}
              onClick={() => setLightboxOpen(true)}
              title="Click to view high-resolution preview"
            >
              <Image
                src={currentImage}
                alt={`${activeEngine.name} Production Interface`}
                width={1200}
                height={750}
                className={styles.screenshotImg}
                priority
              />
              <div className={styles.imageOverlay}>
                <span className={styles.overlayPill}>
                  <Maximize2 size={13} /> Click for Full Resolution
                </span>
              </div>
            </div>

            {/* Screenshot Footer Tag */}
            <div className={styles.previewFooter}>
              <span className={styles.footerBrand}>Tharo Multi-Tenant ERP v3.8</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── LIGHTBOX MODAL ─── */}
      {lightboxOpen && (
        <div
          className={styles.lightboxModal}
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxHeader}>
              <span className={styles.lightboxTitle}>
                {activeEngine.name} Production Software Preview
              </span>
              <button
                className={styles.lightboxCloseBtn}
                onClick={() => setLightboxOpen(false)}
                aria-label="Close high-resolution preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className={styles.lightboxImgWrapper}>
              <Image
                src={currentImage}
                alt={`${activeEngine.name} High Resolution Preview`}
                width={1920}
                height={1080}
                className={styles.lightboxImg}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

