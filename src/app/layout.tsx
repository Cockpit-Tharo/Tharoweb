import type { Metadata, Viewport } from "next";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6EC" },
    { media: "(prefers-color-scheme: dark)", color: "#062419" },
  ],
};

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
  metadataBase: new URL("https://tharo.tech"),
  title: "Tharo Technologies | WhatsApp-First Business Systems Studio",
  description:
    "We build custom CRM, bookings, and automation systems powered entirely by WhatsApp. Sector-specific solutions for salons, logistics, suppliers, restaurants, hospitals & more.",
  alternates: {
    canonical: "https://tharo.tech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/tharo-icon.png",
    shortcut: "/images/tharo-icon.png",
    apple: "/images/tharo-apple-icon.png",
  },
  openGraph: {
    title: "Tharo Technologies | WhatsApp-First Business Systems",
    description: "Custom WhatsApp automation systems for 12+ industries. Book a live demo today.",
    url: "https://tharo.tech",
    siteName: "Tharo Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/tharo-og-image.png",
        width: 1084,
        height: 1080,
        alt: "Tharo Technologies WhatsApp-First Business Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharo Technologies | WhatsApp-First Business Systems",
    description: "Custom WhatsApp automation systems for 12+ industries. Book a live demo today.",
    images: ["/images/tharo-og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tharo Technologies LLP",
  alternateName: "Tharo.tech",
  url: "https://tharo.tech",
  logo: "https://tharo.tech/images/tharo-emblem-dark.png",
  description: "Enterprise WhatsApp Business operating systems, relational ERP integrations, and Pipo AI automation.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "connect@tharo.tech",
    url: "https://tharo.tech/contact",
  },
  sameAs: [
    "https://wa.me/919999999999",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${hanken.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppChatWidget />
      </body>
    </html>
  );
}
