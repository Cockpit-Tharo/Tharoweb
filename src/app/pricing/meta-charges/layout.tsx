import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Meta Cloud API Charges & 0% Markup Explained | Tharo Technologies",
  description:
    "How Meta charges for WhatsApp Business messages explained. Learn conversation categories (Utility vs Marketing), direct billing via Meta Business Suite, wholesale rates, and why Tharo takes 0% markup.",
  openGraph: {
    title: "Meta WhatsApp Charges & 0% Markup Explained | Tharo Technologies",
    description:
      "Demystifying WhatsApp conversation costs. Direct Meta billing, zero markups, pure wholesale pass-through, and permanent account ownership.",
    url: "https://tharo.tech/pricing/meta-charges",
  },
  alternates: {
    canonical: "https://tharo.tech/pricing/meta-charges",
  },
};

export default function MetaChargesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
