import styles from "./SocialProofMarquee.module.css";

const logos = [
  "Trusted by 12+ Salons",
  "Powered by Meta",
  "Tally Gold Partner Integration",
  "Used by 50+ Logistics Providers",
  "99.9% Uptime",
  "10M+ Messages Sent"
];

export default function SocialProofMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {/* Render twice for infinite loop effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.marqueeItem}>
            <span className={styles.dot}></span>
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
