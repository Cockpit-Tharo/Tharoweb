import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP Engine & Multi-Tenant Core | Tharo Technologies",
  description:
    "Unify real-time warehouse inventory, multi-agent shared WhatsApp inboxes, visual workflow automation, and booking calendars into one enterprise business operating system.",
  openGraph: {
    title: "ERP Engine & Multi-Tenant Core | Tharo Technologies",
    description:
      "A centralized ERP engine engineered for modern Indian businesses. Zero double entry, real-time ledger sync, and complete operational transparency.",
  },
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
