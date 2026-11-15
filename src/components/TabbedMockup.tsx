"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TabbedMockup.module.css";
import { ScrollableTabs } from "./ScrollableTabs";
import { MessageSquare, Users, Cpu, Check, Mic, Package, ArrowRight, Sparkles, Bell } from "lucide-react";

interface TabItem {
  id: "voice" | "manage" | "automate" | "inventory" | "reach";
  label: string;
  icon: typeof Users;
  title: string;
  cardHeader: string;
  cardBadge: string;
  desc: string;
  features: string[];
  image?: string;
}

const tabs: TabItem[] = [
  {
    id: "voice",
    label: "Pipo AI",
    icon: Mic,
    title: "Your Built-In Business Assistant",
    cardHeader: "Pipo Assistant",
    cardBadge: "Voice & Chat",
    desc: "Ask simple questions about your sales, speak quick voice notes to book visits, and get suggested replies for incoming WhatsApp chats.",
    features: [
      "Ask in plain English or Hinglish: 'How were sales this week?'",
      "Speak a voice note to book appointments or update stock",
      "Reads customer chats and drafts replies for your team",
    ],
  },
  {
    id: "manage",
    label: "Shared Inbox",
    icon: Users,
    title: "One WhatsApp Number for Your Whole Team",
    cardHeader: "Team Inbox",
    cardBadge: "Live Routing",
    desc: "Your whole team shares one WhatsApp number for sales, reception, and billing without replying over each other.",
    image: "/images/web content/sharedinbox.png",
    features: [
      "Send chats straight to sales, front desk, or billing",
      "Locks active chats so two staff never double-reply",
      "Leave private team notes right inside the chat",
    ],
  },
  {
    id: "automate",
    label: "ERP & Flows",
    icon: Cpu,
    title: "Auto Rules That Do Busywork",
    cardHeader: "Auto Rules",
    cardBadge: "Runs 24/7",
    desc: "Turn customer WhatsApp messages directly into updated stock, paid bills, and booking passes.",
    image: "/images/web content/automates.png",
    features: [
      "Updates stock and sends a bill as soon as an order comes in",
      "Sends instant QR entry passes for events and site visits",
      "Shares visit reminders and care guides automatically",
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    title: "Live Stock Across Every Branch",
    cardHeader: "Branch Stock",
    cardBadge: "Auto Sync",
    desc: "Track item counts across all your stores and warehouses in real time as orders confirm.",
    image: "/images/web content/inventorys.png",
    features: [
      "See live stock counts across every branch at once",
      "Drafts supplier reorder notes before items run low",
      "Creates ready-to-send GST bills and dispatch slips in 1 tap",
    ],
  },
  {
    id: "reach",
    label: "Broadcasts",
    icon: MessageSquare,
    title: "Direct Customer Announcements",
    cardHeader: "Updates & Offers",
    cardBadge: "0% Markup",
    desc: "Send holiday hours, reminders, and offers to your customers directly at official WhatsApp rates.",
    features: [
      "Pay official WhatsApp rates directly with zero extra fee",
      "High open rates on bookings, reminders, and offers",
      "Handles unsubscribe requests safely on autopilot",
    ],
  },
];

function renderCardStage(tab: TabItem) {
  switch (tab.id) {
    case "voice":
      return (
        <div className={styles.stageBody}>
          <div className={styles.voicePromptBox}>
            <div className={styles.voiceWaveStrip} aria-hidden="true">
              {[10, 22, 14, 26, 18, 24, 12, 20, 14].map((h, i) => (
                <span key={i} className={styles.voiceBar} style={{ height: `${h}px` }} />
              ))}
              <span className={styles.voiceHint}>Staff Voice Note</span>
            </div>
            <p className={styles.voiceQuote}>
              &ldquo;Book Mrs. Ananya tomorrow at 4 PM with Dr. Mehta.&rdquo;
            </p>
          </div>

          <div className={styles.voiceOutcomeList}>
            <div className={styles.voiceOutcomeItem}>
              <Check size={13} strokeWidth={3} className={styles.outcomeTick} />
              <span>Visit booked for Tomorrow, 4:00 PM</span>
            </div>
            <div className={styles.voiceOutcomeItem}>
              <Check size={13} strokeWidth={3} className={styles.outcomeTick} />
              <span>WhatsApp confirmation ready to send</span>
            </div>
          </div>

          <div className={styles.voiceInsightBar}>
            <Sparkles size={13} className={styles.insightSpark} />
            <span>Today&apos;s snapshot: Rs. 24,800 collected · 3 follow-ups due</span>
          </div>
        </div>
      );

    case "manage":
      return (
        <div className={styles.stageBody}>
          <div className={styles.inboxOwnerStrip}>
            <div className={styles.ownerIdentity}>
              <span className={styles.ownerAvatar}>P</span>
              <div className={styles.ownerMeta}>
                <span className={styles.ownerName}>Priya (Front Desk)</span>
                <span className={styles.ownerSub}>Handling Aarav Mehta&apos;s chat</span>
              </div>
            </div>
            <span className={styles.lockChip}>Reply Lock On</span>
          </div>

          {tab.image && (
            <div className={styles.screenshotFrame}>
              <Image
                src={tab.image}
                alt={tab.title}
                width={900}
                height={520}
                className={styles.tabbedImage}
                priority
              />
            </div>
          )}
        </div>
      );

    case "automate":
      return (
        <div className={styles.stageBody}>
          <div className={styles.ruleFlowRow}>
            <div className={styles.ruleStep}>
              <span className={styles.ruleTag}>When</span>
              <span className={styles.ruleName}>New Order</span>
            </div>
            <ArrowRight size={13} className={styles.ruleArrow} />
            <div className={styles.ruleStep}>
              <span className={styles.ruleTag}>Then</span>
              <span className={styles.ruleName}>Stock Cut</span>
            </div>
            <ArrowRight size={13} className={styles.ruleArrow} />
            <div className={`${styles.ruleStep} ${styles.ruleStepDone}`}>
              <span className={styles.ruleTag}>Sent</span>
              <span className={styles.ruleName}>Bill Sent</span>
            </div>
          </div>

          {tab.image && (
            <div className={styles.screenshotFrame}>
              <Image
                src={tab.image}
                alt={tab.title}
                width={900}
                height={520}
                className={styles.tabbedImage}
                priority
              />
            </div>
          )}
        </div>
      );

    case "inventory":
      return (
        <div className={styles.stageBody}>
          <div className={styles.stockMeters}>
            <div className={styles.stockRow}>
              <div className={styles.stockTop}>
                <span>Main Store</span>
                <strong className={styles.stockGood}>120 units ready</strong>
              </div>
              <div className={styles.stockTrack}>
                <div className={styles.stockFillGood} style={{ width: "82%" }} />
              </div>
            </div>
            <div className={styles.stockRow}>
              <div className={styles.stockTop}>
                <span>City Warehouse</span>
                <strong className={styles.stockWarn}>18 left · Reorder drafted</strong>
              </div>
              <div className={styles.stockTrack}>
                <div className={styles.stockFillWarn} style={{ width: "26%" }} />
              </div>
            </div>
          </div>

          {tab.image && (
            <div className={styles.screenshotFrame}>
              <Image
                src={tab.image}
                alt={tab.title}
                width={900}
                height={520}
                className={styles.tabbedImage}
                priority
              />
            </div>
          )}
        </div>
      );

    case "reach":
      return (
        <div className={styles.stageBody}>
          <div className={styles.broadcastPreview}>
            <div className={styles.broadcastTop}>
              <Bell size={13} />
              <span>Customer Announcement</span>
            </div>
            <p className={styles.broadcastMsg}>
              &ldquo;Sunday Hours: Our Indiranagar clinic is open 10 AM to 6 PM this weekend. Reply YES to grab a slot.&rdquo;
            </p>
          </div>

          <div className={styles.broadcastStats}>
            <div className={styles.statTile}>
              <span className={styles.statVal}>1,240</span>
              <span className={styles.statLbl}>Messages Sent</span>
            </div>
            <div className={styles.statTile}>
              <span className={styles.statValGreen}>98%</span>
              <span className={styles.statLbl}>Opened</span>
            </div>
            <div className={styles.statTile}>
              <span className={styles.statVal}>Rs. 0</span>
              <span className={styles.statLbl}>Extra Fee</span>
            </div>
          </div>
        </div>
      );
  }
}

export default function TabbedMockup() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>
            Run bookings, stock, <br />
            <em className="italic-serif">and WhatsApp in one place.</em>
          </h2>
          <p className={styles.sectionSubtitle}>
            One place for customer WhatsApp chats, team handoffs, and daily business updates.
          </p>
        </div>

        <div className={styles.container}>
          {/* Tabs Navigation */}
          <ScrollableTabs
            tone="beige"
            trackClassName={styles.tabHeader}
            role="tablist"
            ariaLabel="Platform capabilities"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.tabBtn} ${isActive ? styles.active : ""}`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className={styles.activeIndicator}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </ScrollableTabs>

          {/* Tab Content Display */}
          <div className={styles.mockupWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className={styles.mockupContent}
              >
                {/* Left: Explanatory Copy & Feature List */}
                <div className={styles.mockupText}>
                  <h3>{currentTab.title}</h3>
                  <p>{currentTab.desc}</p>

                  <ul className={styles.featureList}>
                    {currentTab.features.map((feat, idx) => (
                      <li key={idx}>
                        <div className={styles.checkIcon}><Check size={12} strokeWidth={3} /></div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Bespoke Dark Card for Each Tab */}
                <div className={styles.mockupVisual}>
                  <div className={styles.fakeWindow}>
                    <div className={styles.appCardHeader}>
                      <div className={styles.appCardBrand}>
                        <Image
                          src="/images/tharo-emblem-light.png"
                          alt="Tharo Technologies"
                          width={22}
                          height={22}
                          style={{ objectFit: "contain" }}
                        />
                        <span className={styles.appCardTitle}>{currentTab.cardHeader}</span>
                      </div>
                      <span className={styles.badgeSmall}>{currentTab.cardBadge}</span>
                    </div>

                    {renderCardStage(currentTab)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
