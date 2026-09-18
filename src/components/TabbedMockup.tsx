"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TabbedMockup.module.css";
import { MessageSquare, Users, LineChart, Calendar } from "lucide-react";

const tabs = [
  { id: "manage", label: "Manage", icon: Users },
  { id: "reach", label: "Reach", icon: MessageSquare },
  { id: "automate", label: "Automate", icon: Calendar },
  { id: "analyse", label: "Analyse", icon: LineChart },
];

const mockups: Record<string, { title: string; desc: string; imgBg: string }> = {
  manage: {
    title: "Unified Inbox",
    desc: "Centralize every number, department, and conversation into one secure command center.",
    imgBg: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
  },
  reach: {
    title: "Bulk Broadcasting",
    desc: "Launch targeted marketing campaigns directly to WhatsApp with unparalleled open rates.",
    imgBg: "linear-gradient(135deg, #dcfce7 0%, #86efac 100%)",
  },
  automate: {
    title: "Smart Automations",
    desc: "Set up booking reminders, payment links, and review requests that fire automatically.",
    imgBg: "linear-gradient(135deg, #fef08a 0%, #fde047 100%)",
  },
  analyse: {
    title: "Real-time Analytics",
    desc: "Track agent performance, message delivery, and campaign ROI in real time.",
    imgBg: "linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)",
  },
};

export default function TabbedMockup() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={styles.container}>
      <div className={styles.tabHeader}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabBtn} ${isActive ? styles.active : ""}`}
            >
              <Icon size={20} />
              <span>{tab.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className={styles.activeIndicator}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className={styles.mockupWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={styles.mockupContent}
          >
            <div className={styles.mockupText}>
              <h3>{mockups[activeTab].title}</h3>
              <p>{mockups[activeTab].desc}</p>
            </div>
            
            {/* Animated DoubleTick-style Mockup Visual */}
            <motion.div 
              className={styles.mockupVisual}
              style={{ background: mockups[activeTab].imgBg }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`${styles.fakeWindow} glow-border`}>
                <div className={styles.fakeHeader}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className={styles.dot} style={{background:"#f87171"}}></span>
                    <span className={styles.dot} style={{background:"#fbbf24"}}></span>
                    <span className={styles.dot} style={{background:"#34d399"}}></span>
                  </div>
                  <div className={styles.fakeHeaderTitle}>uncomplic8_os_v2</div>
                </div>
                
                <div className={styles.fakeBody}>
                   {/* Animated Data Flow Lines */}
                   <motion.div 
                     className={styles.wireframeLine}
                     initial={{ width: '0%' }}
                     animate={{ width: '60%' }}
                     transition={{ duration: 0.8, ease: "easeOut" }}
                   />
                   <motion.div 
                     className={styles.wireframeLine}
                     initial={{ width: '0%' }}
                     animate={{ width: '80%' }}
                     transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                   />
                   
                   {/* Simulating chat/data processing block */}
                   <div className={styles.processingBlock}>
                     <motion.div 
                       className={styles.pulseDot}
                       animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                       transition={{ repeat: Infinity, duration: 2 }}
                     />
                     <span>Processing {activeTab} protocol...</span>
                   </div>

                   <motion.div 
                     className={styles.wireframeBlock}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5, duration: 0.5 }}
                   >
                     {/* Simulated UI elements inside the block */}
                     <div className={styles.innerBar} />
                     <div className={styles.innerBar} style={{ width: '40%' }} />
                   </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
