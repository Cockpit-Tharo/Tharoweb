import Link from "next/link";
import styles from "./page.module.css";
import { 
  Scissors, Truck, FileSpreadsheet, Building2, ShoppingCart, 
  Stethoscope, Home, Car, Plane, Utensils, Headset
} from "lucide-react";

const allSectors = [
  { id: "salons", name: "Salons & Spas", icon: Scissors, desc: "Automate bookings, manage staff commissions, and track inventory." },
  { id: "tally", name: "Suppliers & Tally", icon: FileSpreadsheet, desc: "Connect Tally ledgers for automated invoice delivery and payments." },
  { id: "logistics", name: "Logistics", icon: Truck, desc: "Real-time shipment updates, NDR flows, and slot confirmations." },
  { id: "lead-management", name: "Lead Management", icon: Building2, desc: "Connect Meta ads funnel for instant lead engagement." },
  { id: "ecommerce", name: "E-commerce", icon: ShoppingCart, desc: "Solve cart abandonment and send order tracking updates." },
  { id: "hospitals", name: "Hospitals & Clinics", icon: Stethoscope, desc: "Automate appointment reminders and post-op follow-ups." },
  { id: "real-estate", name: "Real Estate", icon: Home, desc: "Send property catalogs, site-visit reminders, and document checklists." },
  { id: "automobile", name: "Automobile Showrooms", icon: Car, desc: "Service due reminders, test drive bookings, and pickup alerts." },
  { id: "travel", name: "Travel & Hotels", icon: Plane, desc: "Hotel review follow-ups, booking confirmations, and promo broadcasts." },
  { id: "restaurants", name: "Restaurants", icon: Utensils, desc: "Digital QR menus, direct ordering via WhatsApp, and table reservations." },
  { id: "customer-support", name: "Customer Support", icon: Headset, desc: "Ticketing system over WhatsApp with agent routing and analytics." }
];

export default function SolutionsIndex() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Solutions for Every Industry</h1>
          <p className={styles.subtitle}>
            We don't just sell software. We build sector-specific WhatsApp systems 
            tailored to the unique workflows of your business.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.grid}>
          {allSectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link href={`/solutions/${sector.id}`} key={sector.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={24} />
                </div>
                <h3>{sector.name}</h3>
                <p>{sector.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
