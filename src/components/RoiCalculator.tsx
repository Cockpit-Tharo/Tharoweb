"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Minus,
  Plus,
  CheckCircle2,
  Calculator,
  MessageCircle,
} from "lucide-react";
import styles from "./RoiCalculator.module.css";
import { CinematicLineMaskHeading, CinematicSubhead } from "./CinematicText";
import { siteConfig } from "@/data/siteConfig";

type CurrencyCode = "INR" | "USD" | "EUR" | "AED";

interface TicketPreset {
  label: string;
  shortLabel: string;
  value: number;
}

interface CurrencyConfig {
  code: CurrencyCode;
  label: string;
  shortLabel: string;
  symbol: string;
  flag: string;
  metaRate: number; // Official WhatsApp business conversation cost in local currency
  rateDisplay: string;
  country: string;
  defaultTicket: number;
  minTicket: number;
  maxTicket: number;
  stepTicket: number;
  ticketPresets: TicketPreset[];
}

const currencyConfigs: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    code: "INR",
    label: "INR (₹)",
    shortLabel: "₹ INR",
    symbol: "₹",
    flag: "🇮🇳",
    metaRate: 1.0,
    rateDisplay: "~₹1.00",
    country: "India",
    defaultTicket: 2500,
    minTicket: 500,
    maxTicket: 30000,
    stepTicket: 500,
    ticketPresets: [
      { label: "₹1k Consult", shortLabel: "₹1k", value: 1000 },
      { label: "₹2.5k Standard", shortLabel: "₹2.5k", value: 2500 },
      { label: "₹5k Procedure", shortLabel: "₹5k", value: 5000 },
      { label: "₹15k Package", shortLabel: "₹15k", value: 15000 },
    ],
  },
  USD: {
    code: "USD",
    label: "USD ($)",
    shortLabel: "$ USD",
    symbol: "$",
    flag: "🇺🇸",
    metaRate: 0.025,
    rateDisplay: "~$0.025",
    country: "US / Global",
    defaultTicket: 75,
    minTicket: 10,
    maxTicket: 500,
    stepTicket: 5,
    ticketPresets: [
      { label: "$30 Consult", shortLabel: "$30", value: 30 },
      { label: "$75 Standard", shortLabel: "$75", value: 75 },
      { label: "$150 Procedure", shortLabel: "$150", value: 150 },
      { label: "$350 Package", shortLabel: "$350", value: 350 },
    ],
  },
  EUR: {
    code: "EUR",
    label: "EUR (€)",
    shortLabel: "€ EUR",
    symbol: "€",
    flag: "🇪🇺",
    metaRate: 0.065,
    rateDisplay: "~€0.065",
    country: "Europe (EU)",
    defaultTicket: 80,
    minTicket: 10,
    maxTicket: 600,
    stepTicket: 5,
    ticketPresets: [
      { label: "€35 Consult", shortLabel: "€35", value: 35 },
      { label: "€80 Standard", shortLabel: "€80", value: 80 },
      { label: "€180 Procedure", shortLabel: "€180", value: 180 },
      { label: "€400 Package", shortLabel: "€400", value: 400 },
    ],
  },
  AED: {
    code: "AED",
    label: "AED (د.إ)",
    shortLabel: "AED",
    symbol: "AED ",
    flag: "🇦🇪",
    metaRate: 0.21,
    rateDisplay: "~AED 0.21",
    country: "UAE",
    defaultTicket: 350,
    minTicket: 50,
    maxTicket: 3000,
    stepTicket: 25,
    ticketPresets: [
      { label: "150 AED Consult", shortLabel: "150", value: 150 },
      { label: "350 AED Standard", shortLabel: "350", value: 350 },
      { label: "750 AED Procedure", shortLabel: "750", value: 750 },
      { label: "1,800 AED Package", shortLabel: "1.8k", value: 1800 },
    ],
  },
};

const VOLUME_PRESETS = [
  { label: "20 / day", shortLabel: "20/d", value: 20, tag: "Boutique" },
  { label: "45 / day", shortLabel: "45/d", value: 45, tag: "Growing" },
  { label: "80 / day", shortLabel: "80/d", value: 80, tag: "High Volume" },
  { label: "120+ / day", shortLabel: "120+/d", value: 120, tag: "Multi-Branch" },
];

export default function RoiCalculator() {
  const [currency, setCurrency] = useState<CurrencyCode>("INR");
  const [dailyChats, setDailyChats] = useState<number>(45);
  const [ticketValue, setTicketValue] = useState<number>(2500);
  const [mobileTab, setMobileTab] = useState<"inputs" | "results">("inputs");

  const curr = currencyConfigs[currency];

  const handleCurrencyChange = (newCurrency: CurrencyCode) => {
    setCurrency(newCurrency);
    setTicketValue(currencyConfigs[newCurrency].defaultTicket);
  };

  const formatNumberOnly = (val: number) => {
    const rounded = Math.round(val);
    return rounded.toLocaleString(currency === "INR" ? "en-IN" : "en-US");
  };

  const formatMoney = (val: number) => {
    const formatted = formatNumberOnly(val);
    const space = currency === "AED" ? "" : "\u00A0";
    return `${curr.symbol}${space}${formatted}`;
  };

  // Stepper handlers
  const decChats = () => setDailyChats((prev) => Math.max(10, prev - 5));
  const incChats = () => setDailyChats((prev) => Math.min(120, prev + 5));

  const decTicket = () =>
    setTicketValue((prev) => Math.max(curr.minTicket, prev - curr.stepTicket));
  const incTicket = () =>
    setTicketValue((prev) => Math.min(curr.maxTicket, prev + curr.stepTicket));

  // Math:
  // Monthly volume = daily chats * 30 days
  const monthlyInquiries = dailyChats * 30;

  // 1. WhatsApp Spend (Official conversation rate in selected currency):
  const whatsAppSpend = monthlyInquiries * curr.metaRate;

  // 2. Extra Recovered Bookings (From instant 4-second SLA reply vs 42% drop-off):
  // Conservative recovery factor: 10% of chats are high-intent inquiries; 3.5% additional conversions retained
  const recoveredBookings = Math.max(1, Math.round(monthlyInquiries * 0.1 * 0.035));
  const recoveredRevenue = recoveredBookings * ticketValue;

  // 3. Net Monthly Gain:
  const netMonthlyGain = Math.max(0, recoveredRevenue - whatsAppSpend);

  // 4. Annualized Gain:
  const annualizedGain = netMonthlyGain * 12;

  // 5. Estimated Multiplier / ROI:
  const roiMultiplier =
    whatsAppSpend > 0 ? (recoveredRevenue / whatsAppSpend).toFixed(1) : "10+";

  // Spend visual percentage for progress bar
  const chatsProgressPct = Math.min(
    100,
    Math.max(0, Math.round(((dailyChats - 10) / (120 - 10)) * 100))
  );

  const ticketProgressPct = Math.min(
    100,
    Math.max(
      0,
      Math.round(((ticketValue - curr.minTicket) / (curr.maxTicket - curr.minTicket)) * 100)
    )
  );

  // WhatsApp prefilled message
  const whatsappPrefill = encodeURIComponent(
    `Hi Tharo Technologies, I modeled our economics: ~${dailyChats} customer chats a day with ~${formatMoney(ticketValue)} average ticket. Estimated ~${formatMoney(whatsAppSpend)}/mo WhatsApp spend (${curr.code}) and ~+${formatMoney(netMonthlyGain)}/mo net return. I would like to explore this turnkey workflow for our practice.`
  );
  const roiWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${whatsappPrefill}`;

  return (
    <section className={styles.section} id="calculator" aria-label="Interactive ROI and Spend Calculator">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerPill}>
            <Calculator size={13} className={styles.headerPillIcon} />
            <span>Interactive Financial Model</span>
          </div>

          <CinematicLineMaskHeading
            lines={[
              { text: "Calculate your spend" },
              { text: "and monthly profit.", italic: true },
            ]}
          />
          <CinematicSubhead className={styles.subtitle}>
            Adjust your inbound customer chat volume and average booking value. See your official
            WhatsApp message costs, recovered consultations, and estimated net monthly gain.
          </CinematicSubhead>
        </div>

        {/* Master Workbench Card */}
        <div className={styles.calcCard}>
          {/* Top Overarching Ledger Bar */}
          <div className={styles.topBar}>
            <div className={styles.currencyTitleGroup}>
              <span className={styles.currencyLabel}>ROI Calculator</span>
            </div>

            <div className={styles.currencyPills} role="group" aria-label="Select Currency">
              {(["INR", "USD", "EUR", "AED"] as CurrencyCode[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => handleCurrencyChange(c)}
                  className={`${styles.currencyBtn} ${currency === c ? styles.currencyBtnActive : ""}`}
                  aria-pressed={currency === c}
                >
                  <span className={styles.currencyFlag}>{currencyConfigs[c].flag}</span>
                  <span className={styles.currencyBtnFull}>{currencyConfigs[c].label}</span>
                  <span className={styles.currencyBtnShort}>{currencyConfigs[c].shortLabel}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile In-Card Segmented Switcher (Visible only <= 768px) */}
          <div className={styles.mobileNav} role="tablist" aria-label="Calculator View Mode">
            <button
              type="button"
              role="tab"
              aria-selected={mobileTab === "inputs"}
              onClick={() => setMobileTab("inputs")}
              className={`${styles.mobileNavBtn} ${mobileTab === "inputs" ? styles.mobileNavActive : ""}`}
            >
              <span>1. Volume &amp; Costs</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mobileTab === "results"}
              onClick={() => setMobileTab("results")}
              className={`${styles.mobileNavBtn} ${mobileTab === "results" ? styles.mobileNavActive : ""}`}
            >
              <span>2. Profit (+{formatMoney(netMonthlyGain)})</span>
            </button>
          </div>

          {/* Main Grid: Workbench Left + Pro-Forma Right */}
          <div className={styles.gridContainer}>
            {/* ─── LEFT COLUMN: SLIDERS, STEPPERS & SPEND ─── */}
            <div
              className={`${styles.inputsCol} ${
                mobileTab === "inputs" ? styles.columnVisible : styles.columnHidden
              }`}
            >
              {/* SLIDER 1: DAILY CONVERSATIONS */}
              <div className={styles.controlBox}>
                <div className={styles.controlHeader}>
                  <div className={styles.controlTitleGroup}>
                    <div className={styles.controlIndexBadge}>01</div>
                    <div>
                      <h3 className={styles.controlTitle}>Daily Inbound Conversations</h3>
                      <p className={styles.controlSubtitle}>
                        Patients, prospective clients, or buyers messaging your WhatsApp daily
                      </p>
                    </div>
                  </div>

                  <div className={styles.stepperWrap}>
                    <button
                      type="button"
                      onClick={decChats}
                      disabled={dailyChats <= 10}
                      className={styles.stepperBtn}
                      aria-label="Decrease daily chats by 5"
                    >
                      <Minus size={13} />
                    </button>
                    <div className={styles.numericValueDisplay}>
                      <span className={styles.numericLarge}>{dailyChats}</span>
                      <span className={styles.numericUnit}>chats / day</span>
                    </div>
                    <button
                      type="button"
                      onClick={incChats}
                      disabled={dailyChats >= 120}
                      className={styles.stepperBtn}
                      aria-label="Increase daily chats by 5"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                </div>

                {/* Range Slider */}
                <div className={styles.sliderTrackContainer}>
                  <input
                    type="range"
                    min="10"
                    max="120"
                    step="5"
                    value={dailyChats}
                    onChange={(e) => setDailyChats(Number(e.target.value))}
                    className={styles.customRange}
                    style={{
                      background: `linear-gradient(to right, #0D3B2E 0%, #108A58 ${chatsProgressPct}%, #E7E4D8 ${chatsProgressPct}%, #E7E4D8 100%)`,
                    }}
                    aria-label={`Daily conversations: ${dailyChats} per day`}
                  />
                  <div className={styles.rangeBounds}>
                    <span>10 / day</span>
                    <span>65 / day</span>
                    <span>120+ / day</span>
                  </div>
                </div>

                {/* Quick Presets Chips */}
                <div className={styles.presetsRow}>
                  <span className={styles.presetsLabel}>Presets:</span>
                  <div className={styles.presetChips}>
                    {VOLUME_PRESETS.map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        onClick={() => setDailyChats(p.value)}
                        className={`${styles.presetChip} ${dailyChats === p.value ? styles.presetChipActive : ""}`}
                      >
                        <span className={styles.presetChipFull}>{p.label}</span>
                        <span className={styles.presetChipShort}>{p.shortLabel}</span>
                        <span className={styles.presetChipTag}>{p.tag}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* DEDICATED WHATSAPP SPEND CARD */}
              <div className={styles.metaSpendCard}>
                <div className={styles.metaSpendHeader}>
                  <div className={styles.metaSpendBadgeRow}>
                    <MessageCircle size={15} className={styles.metaShieldIcon} />
                    <span className={styles.metaSpendLabel}>Estimated WhatsApp Message Spend</span>
                  </div>
                  <div className={styles.metaRateBadge}>
                    <span>Rate: {curr.rateDisplay}</span>
                    <span className={styles.metaRateUnit}>/ msg</span>
                  </div>
                </div>

                <div className={styles.metaSpendBody}>
                  <div className={styles.metaSpendRow}>
                    <div>
                      <div className={styles.metaSpendMonthlyAmount}>
                        ~ <span className={styles.currencyPrefix}>{curr.symbol}</span>
                        <span>{formatNumberOnly(whatsAppSpend)}</span>
                        <span className={styles.metaSpendMonthlyUnit}> / mo</span>
                      </div>
                      <div className={styles.metaSpendSub}>
                        ~{monthlyInquiries.toLocaleString()} monthly customer conversations in {curr.country}
                      </div>
                    </div>
                  </div>

                  <div className={styles.metaProgressTrack}>
                    <div
                      className={styles.metaProgressFill}
                      style={{ width: `${chatsProgressPct}%` }}
                    />
                  </div>

                  <div className={styles.metaFooterNote}>
                    Direct official WhatsApp business billing based on conversation volume.
                  </div>
                </div>
              </div>

              {/* SLIDER 2: AVERAGE ORDER / TICKET VALUE */}
              <div className={styles.controlBox}>
                <div className={styles.controlHeader}>
                  <div className={styles.controlTitleGroup}>
                    <div className={styles.controlIndexBadge}>02</div>
                    <div>
                      <h3 className={styles.controlTitle}>Average Order or Booking Value</h3>
                      <p className={styles.controlSubtitle}>
                        Gross revenue generated per consultation, procedure, or completed booking
                      </p>
                    </div>
                  </div>

                  <div className={styles.stepperWrap}>
                    <button
                      type="button"
                      onClick={decTicket}
                      disabled={ticketValue <= curr.minTicket}
                      className={styles.stepperBtn}
                      aria-label="Decrease ticket value"
                    >
                      <Minus size={13} />
                    </button>
                    <div className={styles.numericValueDisplay}>
                      <span className={styles.numericLarge}>
                        <span className={styles.currencyPrefix}>{curr.symbol}</span>
                        <span>{formatNumberOnly(ticketValue)}</span>
                      </span>
                      <span className={styles.numericUnit}>avg ticket</span>
                    </div>
                    <button
                      type="button"
                      onClick={incTicket}
                      disabled={ticketValue >= curr.maxTicket}
                      className={styles.stepperBtn}
                      aria-label="Increase ticket value"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                </div>

                {/* Range Slider */}
                <div className={styles.sliderTrackContainer}>
                  <input
                    type="range"
                    min={curr.minTicket}
                    max={curr.maxTicket}
                    step={curr.stepTicket}
                    value={ticketValue}
                    onChange={(e) => setTicketValue(Number(e.target.value))}
                    className={styles.customRange}
                    style={{
                      background: `linear-gradient(to right, #0D3B2E 0%, #108A58 ${ticketProgressPct}%, #E7E4D8 ${ticketProgressPct}%, #E7E4D8 100%)`,
                    }}
                    aria-label={`Average ticket value: ${formatMoney(ticketValue)}`}
                  />
                  <div className={styles.rangeBounds}>
                    <span>{formatMoney(curr.minTicket)}</span>
                    <span>{formatMoney(Math.round((curr.minTicket + curr.maxTicket) / 2))}</span>
                    <span>{formatMoney(curr.maxTicket)}+</span>
                  </div>
                </div>

                {/* Quick Presets Chips */}
                <div className={styles.presetsRow}>
                  <span className={styles.presetsLabel}>Presets:</span>
                  <div className={styles.presetChips}>
                    {curr.ticketPresets.map((tp) => (
                      <button
                        key={tp.value}
                        type="button"
                        onClick={() => setTicketValue(tp.value)}
                        className={`${styles.presetChip} ${ticketValue === tp.value ? styles.presetChipActive : ""}`}
                      >
                        <span className={styles.presetChipFull}>{tp.label}</span>
                        <span className={styles.presetChipShort}>{tp.shortLabel}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Advance Button */}
              <button
                type="button"
                onClick={() => setMobileTab("results")}
                className={styles.mobileAdvanceBtn}
                aria-label="View Net Profit Return"
              >
                <span>View Estimated Profit (+{formatMoney(netMonthlyGain)}/mo)</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* ─── RIGHT COLUMN: THE LIVE FINANCIAL PRO-FORMA & YIELD LEDGER ─── */}
            <div
              className={`${styles.resultsCol} ${
                mobileTab === "results" ? styles.columnVisible : styles.columnHidden
              }`}
            >
              <div className={styles.proFormaCard}>
                {/* Pro-Forma Header */}
                <div className={styles.proFormaHeader}>
                  <div>
                    <div className={styles.proFormaSuper}>FINANCIAL PRO-FORMA</div>
                    <div className={styles.proFormaTitle}>30-Day Automated Yield</div>
                  </div>
                </div>

                {/* Itemized Audit Table */}
                <div className={styles.auditTable}>
                  <div className={styles.auditRow}>
                    <div className={styles.auditLabelCol}>
                      <span className={styles.auditLabel}>Monthly Inquiries Handled</span>
                      <span className={styles.auditSub}>At {dailyChats} inbound chats/day</span>
                    </div>
                    <span className={styles.auditValue}>
                      {monthlyInquiries.toLocaleString()} chats
                    </span>
                  </div>

                  <div className={styles.auditRow}>
                    <div className={styles.auditLabelCol}>
                      <span className={styles.auditLabel}>Instant SLA Advantage</span>
                      <span className={styles.auditSub}>Under 4s replies vs 42% lead drop-off</span>
                    </div>
                    <span className={styles.auditValueHighlight}>100% captured</span>
                  </div>

                  <div className={styles.auditRow}>
                    <div className={styles.auditLabelCol}>
                      <span className={styles.auditLabel}>Recovered Bookings</span>
                      <span className={styles.auditSub}>From automated follow-ups &amp; reminders</span>
                    </div>
                    <span className={styles.auditValueGreen}>
                      +{recoveredBookings} bookings / mo
                    </span>
                  </div>

                  <div className={styles.auditRow}>
                    <div className={styles.auditLabelCol}>
                      <span className={styles.auditLabel}>Gross Recovered Revenue</span>
                      <span className={styles.auditSub}>
                        {recoveredBookings} bookings × {formatMoney(ticketValue)}
                      </span>
                    </div>
                    <span className={styles.auditValueGreen}>
                      +{formatMoney(recoveredRevenue)}
                    </span>
                  </div>

                  <div className={styles.auditRow}>
                    <div className={styles.auditLabelCol}>
                      <span className={styles.auditLabel}>Estimated WhatsApp Spend</span>
                      <span className={styles.auditSub}>Official business conversation messaging rate</span>
                    </div>
                    <span className={styles.auditValueSpend}>
                      -{formatMoney(whatsAppSpend)}
                    </span>
                  </div>
                </div>

                {/* THE BOTTOM-LINE YIELD CARD */}
                <div className={styles.netYieldCard}>
                  <div className={styles.netYieldHeader}>
                    <div className={styles.netYieldLabel}>ESTIMATED NET MONTHLY GAIN</div>
                    <div className={styles.netYieldMultiplierBadge}>
                      <TrendingUp size={11} />
                      <span>{roiMultiplier}x Yield</span>
                    </div>
                  </div>

                  <div className={styles.netYieldValue}>
                    <span className={styles.netYieldSign}>+</span>
                    <span className={styles.netYieldCurrency}>{curr.symbol}</span>
                    <span className={styles.netYieldNumber}>
                      {formatNumberOnly(netMonthlyGain)}
                    </span>
                    <span className={styles.netYieldPeriod}>/ mo</span>
                  </div>

                  <div className={styles.netYieldAnnual}>
                    ≈ {formatMoney(annualizedGain)} projected net profit return per year
                  </div>
                </div>

                {/* CALL TO ACTION GROUP */}
                <div className={styles.ctaGroup}>
                  <a
                    href={roiWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryCtaBtn}
                  >
                    <MessageCircle size={17} />
                    <span>Deploy This Flow on WhatsApp</span>
                    <ArrowRight size={15} />
                  </a>

                  <Link href="/contact" className={styles.secondaryLink}>
                    <span>Schedule a 15-minute live architecture demo</span>
                  </Link>

                  <div className={styles.guaranteeFootnote}>
                    <CheckCircle2 size={11} className={styles.footnoteCheck} />
                    <span>14-day turnkey deployment · Direct account ownership · Zero lock-in</span>
                  </div>
                </div>

                {/* Mobile Back Button to Sliders */}
                <button
                  type="button"
                  onClick={() => setMobileTab("inputs")}
                  className={styles.mobileBackBtn}
                  aria-label="Adjust Volume and Spend"
                >
                  <ArrowLeft size={13} />
                  <span>Adjust Volume &amp; Economics</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
