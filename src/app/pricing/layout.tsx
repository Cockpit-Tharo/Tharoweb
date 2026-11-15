import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Pricing & Meta Pass-Through | Tharo Technologies",
  description:
    "Predictable enterprise software tiers, zero message markups, official Meta wholesale rate pass-through, and transparent 5-day turnkey setup pricing.",
  openGraph: {
    title: "Transparent Pricing & Wholesale Meta Rates | Tharo Technologies",
    description:
      "Explore transparent business automation pricing. No hidden fees, wholesale conversation costs, and verified ROI models.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
