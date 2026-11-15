import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Meta Data Handling | Tharo Technologies",
  description:
    "Review how Tharo Technologies handles official WhatsApp Cloud API data transmission, multi-tenant row-level database security, zero data resale, and DPDP compliance.",
  openGraph: {
    title: "Privacy Policy | Tharo Technologies",
    description:
      "Enterprise WhatsApp Business data protection, end-to-end encryption, and dedicated database isolation commitments.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
