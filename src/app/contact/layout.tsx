import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Engineering & Book Live Demo | Tharo Technologies",
  description:
    "Connect directly with an engineer to audit your business flows, review operational requirements, and map your 5-day WhatsApp automation launch.",
  openGraph: {
    title: "Contact Tharo Technologies | Let's Talk Numbers and Flows",
    description:
      "Schedule a 20-minute live architecture demo with a senior engineer. Zero sales fluff, pure operational mapping.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
