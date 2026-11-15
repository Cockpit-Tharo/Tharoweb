import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Service Level Agreement | Tharo Technologies",
  description:
    "Review enterprise service terms, 5-day turnkey delivery commitments, Meta official billing transparency, and intellectual property terms with Tharo Technologies.",
  openGraph: {
    title: "Terms of Service | Tharo Technologies",
    description:
      "Enterprise Service Level Agreements, Meta BSP operational rules, and turnkey deployment terms.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
