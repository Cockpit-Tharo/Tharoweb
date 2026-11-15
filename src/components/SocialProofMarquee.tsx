import styles from "./SocialProofMarquee.module.css";

const logos = [
  "Built for Real Estate & Clinics",
  "Trusted by 12+ Salons",
  "Powered by Official Meta Cloud API",
  "Enterprise ERP Integration",
  "Used by 50+ Logistics Providers",
  "99.9% Production Uptime",
  "10M+ Messages Delivered",
];

export default function SocialProofMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {/* Render twice for infinite loop effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.marqueeItem}>
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
