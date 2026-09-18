import Link from "next/link";
import styles from "./page.module.css";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Transparent Pricing</h1>
          <p className={styles.subtitle}>
            No hidden markups on messages. Pay a flat platform fee, plus actual Meta WhatsApp costs.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.pricingGrid}>
          {/* Starter Plan */}
          <div className={styles.pricingCard}>
            <h3>Starter</h3>
            <div className={styles.price}>
              <span className={styles.currency}>₹</span>
              <span className={styles.amount}>1,999</span>
              <span className={styles.period}>/month</span>
            </div>
            <p className={styles.planDesc}>Perfect for small teams starting with WhatsApp automation.</p>
            
            <ul className={styles.featureList}>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> 3 Team Members</li>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> Standard CRM</li>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> Basic Broadcasts</li>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> Email Support</li>
            </ul>
            
            <Link href="/contact" className="btn-secondary" style={{ width: '100%' }}>
              Get Started
            </Link>
          </div>

          {/* Growth Plan */}
          <div className={`${styles.pricingCard} ${styles.popular}`}>
            <div className={styles.popularBadge}>Most Popular</div>
            <h3>Growth</h3>
            <div className={styles.price}>
              <span className={styles.currency}>₹</span>
              <span className={styles.amount}>4,999</span>
              <span className={styles.period}>/month</span>
            </div>
            <p className={styles.planDesc}>For growing businesses needing advanced automations and integrations.</p>
            
            <ul className={styles.featureList}>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> 10 Team Members</li>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> Sector-specific Automations</li>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> Tally/Shopify Integrations</li>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> Priority Support</li>
            </ul>
            
            <Link href="/contact" className="btn-primary" style={{ width: '100%' }}>
              Get Started
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className={styles.pricingCard}>
            <h3>Enterprise</h3>
            <div className={styles.price}>
              <span className={styles.amount}>Custom</span>
            </div>
            <p className={styles.planDesc}>For large operations requiring custom ERP integrations.</p>
            
            <ul className={styles.featureList}>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> Unlimited Members</li>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> Custom App Development</li>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> Dedicated Account Manager</li>
              <li><CheckCircle2 size={18} className={styles.checkIcon} /> SLA Guarantees</li>
            </ul>
            
            <Link href="/contact" className="btn-secondary" style={{ width: '100%' }}>
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.metaCosts}>
        <div className="container">
          <h2>Understanding Meta's Costs</h2>
          <p>
            We don't charge "credits". You connect your own Meta developer account, and Meta bills you directly for conversations. 
            <strong> Marketing messages:</strong> ~₹0.80/msg | <strong> Utility messages:</strong> ~₹0.11/msg.
          </p>
        </div>
      </section>
    </>
  );
}
