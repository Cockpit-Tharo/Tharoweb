"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WhatsAppChatWidget.module.css";
import { siteConfig } from "@/data/siteConfig";
import { MessageSquare, X, ArrowUpRight, CheckCheck, Send } from "lucide-react";

export default function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [currentTime, setCurrentTime] = useState("10:30 AM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    if (!hasOpened) setHasOpened(true);
  };

  const chips = [
    {
      label: "Book a Live Demo",
      text: "Hi Tharo Technologies team, I would like to book a live demo of your WhatsApp operating system.",
    },
    {
      label: "Ask About Pricing & Tiers",
      text: "Hi Tharo Technologies team, I want to understand pricing and implementation timelines for my business.",
    },
    {
      label: "ERP & Workflow Automation",
      text: "Hi Tharo Technologies team, can you explain how your custom ERP and WhatsApp automation works?",
    },
  ];

  const handleChipClick = (msgText: string) => {
    const targetUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msgText)}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.widgetContainer}>
      {/* Chat Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            {/* Header */}
            <div className={styles.windowHeader}>
              <div className={styles.headerProfile}>
                <div className={styles.avatar}>
                  <MessageSquare size={20} color="#008069" />
                  <span className={styles.onlineIndicator} />
                </div>
                <div className={styles.profileInfo}>
                  <div className={styles.profileNameRow}>
                    <span className={styles.profileName}>{siteConfig.brandName} Systems</span>
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ffffff" />
                      <path
                        d="M4.5 8.2L6.8 10.5L11.5 5.8"
                        stroke="#008069"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className={styles.profileStatus}>Typically replies in 2 minutes</span>
                </div>
              </div>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className={styles.chatBody}>
              <div className={styles.datePill}>TODAY</div>

              <div className={styles.bubbleContainer}>
                <svg viewBox="0 0 8 13" className={styles.bubbleTail}>
                  <path fill="#ffffff" d="M1.533 3.568L8 12.193V0H2.812C1.042 0 .474 1.769 1.533 3.568z" />
                </svg>
                <div className={styles.messageBubble}>
                  <p className={styles.messageText}>
                    Hello. We build and maintain custom WhatsApp operating systems for Indian businesses. How can we help automate your workflow today?
                  </p>
                  <div className={styles.messageMeta}>
                    <span>{currentTime}</span>
                  </div>
                </div>
              </div>

              {/* Quick Inquiry Chips */}
              <div className={styles.chipsContainer}>
                <span className={styles.chipsLabel}>Suggested inquiries:</span>
                {chips.map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={styles.chipBtn}
                    onClick={() => handleChipClick(chip.text)}
                  >
                    <span>{chip.label}</span>
                    <ArrowUpRight size={13} />
                  </button>
                ))}
              </div>
            </div>

            {/* Action Footer */}
            <div className={styles.windowFooter}>
              <a
                href={siteConfig.contact.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.startChatCta}
              >
                <Send size={15} />
                <span>Start WhatsApp Chat</span>
              </a>
              <span className={styles.footerNote}>
                Official Meta Cloud API Infrastructure
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        type="button"
        className={`${styles.triggerBtn} ${isOpen ? styles.triggerActive : ""}`}
        onClick={toggleOpen}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={26} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.71 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z"
                  fill="white"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread dot when unopened */}
        {!isOpen && !hasOpened && (
          <span className={styles.notificationBadge}>1</span>
        )}
      </button>
    </div>
  );
}
