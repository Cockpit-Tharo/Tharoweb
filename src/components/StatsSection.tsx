"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 98, suffix: "%", label: "WhatsApp open rate vs 20% email" },
  { value: 12, suffix: "+", label: "Custom industry playbooks built" },
  { value: 0, suffix: "%", label: "Hidden markup on Meta costs" },
  { value: 500, suffix: "+", label: "Automations deployed & running" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <div className="container" style={{ padding: "5rem 1.5rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
            style={{
              textAlign: "center",
              padding: "2rem 1rem",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              background: "var(--surface)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "3.25rem",
                fontWeight: 700,
                color: "var(--primary)",
                lineHeight: 1,
                marginBottom: "0.75rem",
                letterSpacing: "-0.04em",
              }}
            >
              <Counter target={stat.value} suffix={stat.suffix} />
            </div>
            <div
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.4,
              }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
