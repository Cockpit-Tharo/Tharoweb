"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FaqSection.module.css";
import { CinematicLineMaskHeading, CinematicSubhead } from "./CinematicText";
import { Plus, Minus } from "lucide-react";
import { faqsData, FaqItem } from "@/data/faqs";

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["All", "Billing", "Setup", "Integration", "Compliance"];

  const filteredFaqs =
    activeCategory === "All"
      ? faqsData
      : faqsData.filter((item) => item.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <CinematicLineMaskHeading
            lines={[
              { text: "Clear answers," },
              { text: "zero confusion.", italic: true },
            ]}
          />
          <CinematicSubhead className={styles.subtitle}>
            Everything you need to know about pricing, setup, WhatsApp rules, and connecting your tools.
          </CinematicSubhead>
        </div>

        {/* Category Filter Pills */}
        <div className={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`${styles.catBtn} ${activeCategory === cat ? styles.catBtnActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className={styles.faqList}>
          {filteredFaqs.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: Math.min(idx * 0.05, 0.25) }}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={styles.iconCircle}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.faqAnswerWrapper}
                    >
                      <p className={styles.faqAnswer}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
