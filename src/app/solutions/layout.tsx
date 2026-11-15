import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Solutions & Operational Blueprints | Tharo Technologies",
  description:
    "Tailored WhatsApp operating systems and relational ERP integrations engineered for clinics, salons, real estate developers, events, and logistics.",
  openGraph: {
    title: "Industry Solutions & Operational Blueprints | Tharo Technologies",
    description:
      "Explore ready operational workflows connecting front-desk WhatsApp chats, Pipo AI answers, and back-office ERP ledgers.",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
