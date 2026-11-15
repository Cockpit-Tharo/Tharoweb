"use client";

import { useState, useEffect } from "react";
import styles from "./PipoVoiceSimulator.module.css";
import { ScrollableTabs } from "./ScrollableTabs";
import { Mic, Volume2, CheckCircle2, RotateCcw, Sparkles, ArrowRight, Clock, Database, ShieldAlert, Play, Pause, CheckCheck } from "lucide-react";

interface VoiceScenario {
  id: string;
  category: string;
  speaker: string;
  role: string;
  duration: string;
  language: string;
  spokenAudioText: string;
  intent: string;
  extractedEntities: { label: string; value: string }[];
  ledgerActions: {
    status: string;
    description: string;
    system: string;
  }[];
  safeguardNote: string;
  customerWhatsAppResult: string;
}

const scenarios: VoiceScenario[] = [
  {
    id: "clinic",
    category: "Healthcare & Clinics",
    speaker: "Pooja Sharma",
    role: "Front Desk Staff",
    duration: "3.8s",
    language: "Hinglish (Hindi + English)",
    spokenAudioText:
      '"Book appointment for Mrs. Ananya with Dr. Mehta tomorrow at 4 PM for dental consultation."',
    intent: "SCHEDULE_CALENDAR_SLOT",
    extractedEntities: [
      { label: "Patient", value: "Mrs. Ananya Sen" },
      { label: "Doctor", value: "Dr. Mehta (Endodontics)" },
      { label: "Time Slot", value: "Tomorrow, 04:00 PM - 04:45 PM" },
      { label: "Procedure", value: "Dental Consultation & OPG" },
    ],
    ledgerActions: [
      {
        status: "Slot Reserved",
        description: "Op-Room 2 calendar slot locked with zero collision",
        system: "Calendar Hub",
      },
      {
        status: "Patient Card Fetched",
        description: "Past history #MED-4089 linked automatically",
        system: "Central Ledger",
      },
      {
        status: "WhatsApp Dispatched",
        description: "Confirmation message and directions sent to customer",
        system: "Meta API",
      },
    ],
    safeguardNote: "Held in 5s buffer: Staff can press Esc or tap Undo to adjust room or doctor.",
    customerWhatsAppResult:
      "Hi Ananya, your dental consultation with Dr. Mehta is confirmed for tomorrow at 4:00 PM. Tap below for directions or to reschedule.",
  },
  {
    id: "warehouse",
    category: "Industrial & Logistics",
    speaker: "Vikram Rajput",
    role: "Warehouse Operations Lead",
    duration: "4.1s",
    language: "Indian English + Hindi",
    spokenAudioText:
      '"Dispatched 50 units of Model-A hydraulic valves to industrial client in Peenya."',
    intent: "INVENTORY_BATCH_DISPATCH",
    extractedEntities: [
      { label: "Item SKU", value: "VALVE-HYD-MOD-A" },
      { label: "Quantity", value: "50 Units (Deducted)" },
      { label: "Destination", value: "Peenya Industrial Area, Hub 4" },
      { label: "Remaining Stock", value: "120 Units (Healthy Buffer)" },
    ],
    ledgerActions: [
      {
        status: "Inventory Adjusted",
        description: "50 units decremented from Peenya central rack",
        system: "Stock Engine",
      },
      {
        status: "Safety Threshold Checked",
        description: "Remaining stock (120 units) exceeds 30-unit safety floor",
        system: "Inventory Watcher",
      },
      {
        status: "GST Voucher Drafted",
        description: "E-way bill and delivery docket created with zero typos",
        system: "ERP Accounting",
      },
    ],
    safeguardNote: "Safety check passed: Automated reorder trigger remains idle as buffer is green.",
    customerWhatsAppResult:
      "Dispatch Notice: 50 units of Model-A Hydraulic Valves have been cleared from Peenya Hub. Tracking docket #VAL-9921 attached.",
  },
  {
    id: "wholesale",
    category: "Wholesale & Distribution",
    speaker: "Ramesh Singhania",
    role: "Managing Director",
    duration: "3.2s",
    language: "Hinglish Business Query",
    spokenAudioText:
      '"Has Sharma Traders cleared their last bill of 1.4 lakhs?"',
    intent: "QUERY_ACCOUNT_LEDGER",
    extractedEntities: [
      { label: "Account Name", value: "Sharma Traders & Sons" },
      { label: "Target Amount", value: "INR 1,40,000 (Invoice #INV-8820)" },
      { label: "Voucher Status", value: "Settled via NEFT / RTGS" },
      { label: "Clearing Time", value: "Today at 11:24 AM (Settled)" },
    ],
    ledgerActions: [
      {
        status: "Account Retrieved",
        description: "Retrieved client ledger and settlement voucher",
        system: "Central Ledger",
      },
      {
        status: "Bank Reconciliation",
        description: "Payment verified against HDFC Current Account sync",
        system: "Banking Bridge",
      },
      {
        status: "Credit Limit Restored",
        description: "Sharma Traders active credit ceiling restored to INR 5,00,000",
        system: "Credit Manager",
      },
    ],
    safeguardNote: "Read-only ledger probe: Audio response generated for voice playback to director.",
    customerWhatsAppResult:
      "Payment Received: We acknowledge receipt of INR 1,40,000 against Invoice #INV-8820. Your credit ceiling is active. Thank you!",
  },
  {
    id: "salon",
    category: "Salons & Luxury Spas",
    speaker: "Neha Kapoor",
    role: "Salon Receptionist",
    duration: "4.5s",
    language: "Hinglish + English",
    spokenAudioText:
      '"Block Priya for Swedish massage and hair spa on Sunday 11 AM, apply 15 percent member discount."',
    intent: "BOOKING_WITH_PROMO_VOUCHER",
    extractedEntities: [
      { label: "Therapist", value: "Priya (Senior Therapist)" },
      { label: "Services", value: "Swedish Massage + Deep Conditioning Hair Spa" },
      { label: "Date & Time", value: "Upcoming Sunday, 11:00 AM" },
      { label: "Discount Applied", value: "15% Royal Tier Member Coupon" },
    ],
    ledgerActions: [
      {
        status: "Therapist Roster Blocked",
        description: "Priya's Sunday 11:00 AM slot marked busy with buffer",
        system: "Staff Roster",
      },
      {
        status: "Pricing & Tax Calculated",
        description: "Base INR 3,800 - 15% discount + GST = INR 3,811",
        system: "POS Engine",
      },
      {
        status: "WhatsApp UPI Link Sent",
        description: "Advance deposit link generated and sent to client",
        system: "Payment Gateway",
      },
    ],
    safeguardNote: "Double-booking guard active: Priya is free with no conflicting appointments.",
    customerWhatsAppResult:
      "Hi! Your Sunday appointment with Priya (Swedish Massage & Hair Spa) is reserved for 11:00 AM. Tap to complete your INR 500 advance deposit via UPI.",
  },
];

export default function PipoVoiceSimulator() {
  const [activeScenarioId, setActiveScenarioId] = useState("clinic");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [undoActive, setUndoActive] = useState(false);
  const [undoTimer, setUndoTimer] = useState(5);

  const scenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  // Simulated audio playback effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            setUndoActive(true);
            setUndoTimer(5);
            return 100;
          }
          return prev + 10;
        });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // 5-second countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (undoActive && undoTimer > 0) {
      timer = setTimeout(() => {
        setUndoTimer((t) => t - 1);
      }, 1000);
    } else if (undoTimer === 0) {
      setUndoActive(false);
    }
    return () => clearTimeout(timer);
  }, [undoActive, undoTimer]);

  const handleSimulateAudio = () => {
    setIsPlaying(true);
    setUndoActive(false);
  };

  const handleUndo = () => {
    setUndoActive(false);
    setUndoTimer(5);
  };

  return (
    <div className={styles.simulatorWrapper}>
      {/* Simulator Bar */}
      <div className={styles.telemetryBar}>
        <div className={styles.telemetryLeft}>
          <span className={styles.simulatorTitle}>Voice Input Simulator</span>
        </div>
        <div className={styles.telemetryRight}>
          <div className={styles.hotkeyChip}>
            <Mic size={13} />
            <span>Shortcut: Alt + V</span>
          </div>
        </div>
      </div>

      {/* Scenario Selector Pills */}
      <ScrollableTabs
        tone="dark"
        className={styles.scenarioTabsShell}
        trackClassName={styles.scenarioTabs}
        role="tablist"
        ariaLabel="Voice command scenarios"
      >
        {scenarios.map((sc) => {
          const isActive = sc.id === activeScenarioId;
          return (
            <button
              key={sc.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.scenarioTab} ${isActive ? styles.scenarioTabActive : ""}`}
              onClick={() => {
                setActiveScenarioId(sc.id);
                setIsPlaying(false);
                setProgress(0);
                setUndoActive(false);
              }}
            >
              <span className={styles.scenarioCategory}>{sc.category}</span>
            </button>
          );
        })}
      </ScrollableTabs>

      {/* Main Cockpit Layout */}
      <div className={styles.cockpitGrid}>
        {/* Left Column: Spoken Audio Capture Card */}
        <div className={styles.audioColumn}>
          <div className={styles.audioCard}>
            <div className={styles.audioCardHeader}>
              <div className={styles.speakerMeta}>
                <div className={styles.speakerAvatar}>
                  <Mic size={18} />
                </div>
                <div>
                  <div className={styles.speakerName}>{scenario.speaker}</div>
                  <div className={styles.speakerRole}>
                    {scenario.role} · {scenario.language}
                  </div>
                </div>
              </div>

              <div className={styles.durationBadge}>
                <Clock size={12} />
                <span>{scenario.duration}</span>
              </div>
            </div>

            {/* Audio Waveform Visualizer */}
            <div className={styles.waveformBox}>
              <div className={styles.waveformBars}>
                {[42, 75, 90, 60, 35, 88, 100, 72, 45, 65, 82, 55, 95, 78, 48, 62, 85, 30].map(
                  (height, i) => (
                    <span
                      key={i}
                      className={`${styles.waveBar} ${isPlaying ? styles.waveBarPlaying : ""}`}
                      style={{
                        height: isPlaying ? `${Math.max(20, (height * (progress + 20)) / 100)}%` : `${height * 0.45}%`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  )
                )}
              </div>

              <button
                className={styles.playSimulationBtn}
                onClick={handleSimulateAudio}
                disabled={isPlaying}
                aria-label={isPlaying ? "Playing simulation" : "Simulate spoken command"}
              >
                {isPlaying ? (
                  <>
                    <Pause size={14} />
                    <span>Processing Audio...</span>
                  </>
                ) : (
                  <>
                    <Play size={14} />
                    <span>Play Spoken Sample</span>
                  </>
                )}
              </button>
            </div>

            {/* Spoken Transcript Bubble */}
            <div className={styles.transcriptBox}>
              <span className={styles.transcriptLabel}>Spoken Audio Transcript (Natural Speech)</span>
              <p className={styles.transcriptText}>{scenario.spokenAudioText}</p>
            </div>

            {/* 5-Second Fail-Safe Safeguard HUD */}
            <div className={styles.safeguardHud}>
              <div className={styles.safeguardTop}>
                <div className={styles.safeguardTitle}>
                  <ShieldAlert size={15} />
                  <span>5-Second Human Safeguard</span>
                </div>
                {undoActive && (
                  <button className={styles.undoBtn} onClick={handleUndo}>
                    <RotateCcw size={13} />
                    <span>Undo ({undoTimer}s)</span>
                  </button>
                )}
              </div>
              <p className={styles.safeguardDesc}>{scenario.safeguardNote}</p>
              {undoActive && (
                <div className={styles.safeguardProgressTrack}>
                  <div
                    className={styles.safeguardProgressBar}
                    style={{ width: `${(undoTimer / 5) * 100}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Entity Extraction & Real-time Ledger Actions */}
        <div className={styles.actionColumn}>
          {/* Intent & Entity Extraction Panel */}
          <div className={styles.entitiesCard}>
            <div className={styles.cardHeaderSmall}>
              <div className={styles.intentBadge}>
                <Database size={13} />
                <span>Intent: {scenario.intent}</span>
              </div>
            </div>

            <div className={styles.entityGrid}>
              {scenario.extractedEntities.map((entity, i) => (
                <div key={i} className={styles.entityItem}>
                  <span className={styles.entityKey}>{entity.label}</span>
                  <span className={styles.entityVal}>{entity.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time System Actions Executed */}
          <div className={styles.actionsCard}>
            <div className={styles.cardTitleLine}>
              <span className={styles.cardTitle}>Ledger Actions Executed</span>
            </div>

            <div className={styles.actionList}>
              {scenario.ledgerActions.map((action, i) => (
                <div key={i} className={styles.actionRow}>
                  <div className={styles.actionStatusIcon}>
                    <CheckCircle2 size={15} />
                  </div>
                  <div className={styles.actionBody}>
                    <div className={styles.actionTopRow}>
                      <span className={styles.actionStatus}>{action.status}</span>
                      <span className={styles.actionSystem}>{action.system}</span>
                    </div>
                    <div className={styles.actionDesc}>{action.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Autonomous WhatsApp Client Outbox */}
          <div className={styles.whatsAppOutboxCard}>
            <div className={styles.outboxHeader}>
              <span className={styles.outboxTag}>Automated WhatsApp Customer Dispatch</span>
            </div>
            <div className={styles.whatsAppBubble}>
              <p className={styles.whatsAppText}>{scenario.customerWhatsAppResult}</p>
              <div className={styles.bubbleFooter}>
                <span className={styles.bubbleTime}>Just now</span>
                <span className={styles.doubleCheck}>
                  <CheckCheck size={13} /> Delivered
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
