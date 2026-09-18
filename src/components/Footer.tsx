import Link from "next/link";
import styles from "./Footer.module.css";
import { MessageSquare } from "lucide-react";

const footerLinks = {
  Solutions: [
    { href: "/solutions/salons", label: "Salons & Spas" },
    { href: "/solutions/tally", label: "Suppliers & Tally" },
    { href: "/solutions/logistics", label: "Logistics" },
    { href: "/solutions", label: "All Industries" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    { href: "https://your-vercel-portfolio-link.com", label: "Web Portfolio ↗" },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="divider" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            uncomplic<span>8</span>.tech
          </Link>
          <p className={styles.tagline}>
            WhatsApp-first business systems for modern India. Bookings, CRM,
            automation — all on WhatsApp.
          </p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: "1.25rem", width: "fit-content" }}
          >
            <MessageSquare size={16} />
            Chat on WhatsApp
          </a>
        </div>

        <div className={styles.links}>
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section} className={styles.linkGroup}>
              <h4 className={styles.linkHeading}>{section}</h4>
              <ul className={styles.linkList}>
                {items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.linkItem}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Uncomplic8 Technologies. All rights reserved.</p>
        <p>Powered by Meta WhatsApp Business API.</p>
      </div>
    </footer>
  );
}
