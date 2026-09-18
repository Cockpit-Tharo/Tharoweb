"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WhatsAppSimulator.module.css";

type Message = {
  from: "user" | "bot";
  text: string;
  delay: number;
  isButton?: boolean;
};

const flows: Record<string, { label: string; emoji: string; messages: Message[] }> = {
  salon: {
    label: "Salon Booking",
    emoji: "✂️",
    messages: [
      { from: "user", text: "Hi, I want to book a haircut", delay: 0 },
      { from: "bot", text: "Welcome to Glow Studio! 💇\nPlease choose your stylist:\n\n1️⃣ Priya – Senior Stylist\n2️⃣ Rahul – Colour Expert\n3️⃣ Any Available", delay: 900 },
      { from: "user", text: "1", delay: 2000 },
      { from: "bot", text: "Great choice! Priya is available:\n\n📅 Tue, 3rd Sep – 11 AM\n📅 Tue, 3rd Sep – 2 PM\n📅 Wed, 4th Sep – 10 AM\n\nReply with your preferred slot.", delay: 2900 },
      { from: "user", text: "Tue 11 AM", delay: 4200 },
      { from: "bot", text: "✅ Confirmed! Your booking:\n\n*Priya | Tue, Sep 3rd | 11:00 AM*\n📍 Glow Studio, MG Road\n\nWe'll send a reminder 2 hrs before. See you soon! 🙌", delay: 5000 },
    ],
  },
  tally: {
    label: "Tally Invoice",
    emoji: "📋",
    messages: [
      { from: "bot", text: "📄 *Invoice from Sharma Traders*\n\nInvoice No: INV-2024-1891\nDue: ₹18,450\nDue Date: Sep 10, 2024\n\n[Download PDF]", delay: 0 },
      { from: "user", text: "When is the last date to pay?", delay: 1500 },
      { from: "bot", text: "Your due date is *10th September, 2024*.\n\nYou can pay instantly via:\n💳 UPI: sharma@paytm\n🏦 Account details on invoice\n\nNeed a payment extension? Reply EXT", delay: 2300 },
      { from: "user", text: "EXT", delay: 3600 },
      { from: "bot", text: "Your extension request has been sent to the accounts team. You'll hear back within 4 hours. ✅", delay: 4400 },
    ],
  },
  logistics: {
    label: "Order Tracking",
    emoji: "🚚",
    messages: [
      { from: "bot", text: "📦 *Your order is out for delivery!*\n\nOrder #ORD-9921\nRider: Ravi Kumar | 📞 9876543210\n\nEstimated arrival: *Today, 2–4 PM*\n\nTrack live → [Link]", delay: 0 },
      { from: "user", text: "Can you change the address?", delay: 1800 },
      { from: "bot", text: "I'm sorry, the rider has already picked up your order. 😕\n\nWould you like to:\n1️⃣ Schedule a re-delivery\n2️⃣ Hold at nearest hub\n3️⃣ Talk to support", delay: 2600 },
      { from: "user", text: "2", delay: 3900 },
      { from: "bot", text: "✅ Done! Your order will be held at *Koramangala Hub* for 3 days.\nPickup with OTP: *4821*", delay: 4700 },
    ],
  },
};

export default function WhatsAppSimulator() {
  const [activeFlow, setActiveFlow] = useState<string>("salon");
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setVisibleMessages([]);
    setIsTyping(false);
    const flow = flows[activeFlow];
    const timers: ReturnType<typeof setTimeout>[] = [];

    flow.messages.forEach((msg, i) => {
      // Show typing indicator before bot messages
      if (msg.from === "bot") {
        timers.push(setTimeout(() => setIsTyping(true), msg.delay - 400));
      }
      timers.push(
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => [...prev, msg]);
        }, msg.delay + 600)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [activeFlow]);

  const flow = flows[activeFlow];

  return (
    <div className={styles.wrapper}>
      {/* Flow Selector */}
      <div className={styles.selector}>
        {Object.entries(flows).map(([key, f]) => (
          <button
            key={key}
            className={`${styles.selectorBtn} ${activeFlow === key ? styles.selectorActive : ""}`}
            onClick={() => setActiveFlow(key)}
          >
            <span>{f.emoji}</span> {f.label}
          </button>
        ))}
      </div>

      {/* Phone Frame */}
      <div className={styles.phone}>
        {/* Status Bar */}
        <div className={styles.statusBar}>
          <span>9:41</span>
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <span>▌▌▌</span>
            <span>WiFi</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Chat Header */}
        <div className={styles.chatHeader}>
          <div className={styles.avatar}>U8</div>
          <div>
            <div className={styles.chatName}>uncomplic8 Auto</div>
            <div className={styles.chatStatus}>
              <span className={styles.onlineDot} /> online
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className={styles.messages}>
          <AnimatePresence>
            {visibleMessages.map((msg, i) => (
              <motion.div
                key={`${activeFlow}-${i}`}
                className={`${styles.bubble} ${msg.from === "bot" ? styles.bot : styles.userMsg}`}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {msg.text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line.replace(/\*(.*?)\*/g, "$1")}
                    {j < msg.text.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                key="typing"
                className={`${styles.bubble} ${styles.bot} ${styles.typingBubble}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Bar */}
        <div className={styles.inputBar}>
          <div className={styles.fakeInput}>Type a message...</div>
          <div className={styles.sendBtn}>➤</div>
        </div>
      </div>
    </div>
  );
}
