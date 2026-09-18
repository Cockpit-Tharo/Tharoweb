import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Uncomplic8 | WhatsApp-First Business Systems Studio",
  description:
    "We build custom CRM, bookings, and automation systems powered entirely by WhatsApp. Sector-specific solutions for salons, logistics, suppliers, restaurants, hospitals & more.",
  keywords: "WhatsApp CRM, business automation, WhatsApp API, salon booking, logistics automation, Tally WhatsApp",
  openGraph: {
    title: "Uncomplic8 | WhatsApp-First Business Systems",
    description: "Custom WhatsApp automation systems for 12+ industries. Book a live demo today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${hanken.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
