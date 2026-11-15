import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Studio & Engineering Principles | Tharo Technologies",
  description:
    "Learn why Tharo Technologies builds WhatsApp-first operational systems with PostgreSQL ACID guarantees, zero message markups, and 5-day turnkey delivery.",
  openGraph: {
    title: "About Tharo Technologies | Engineering Over Hype",
    description:
      "We build reliable business software that your frontline staff actually uses every day. Relational truth behind every WhatsApp chat.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
