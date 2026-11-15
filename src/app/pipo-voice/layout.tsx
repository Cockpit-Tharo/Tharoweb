import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipo AI Operations Copilot | Voice Workflows | Tharo Technologies",
  description:
    "Ask plain questions about operational numbers and speak natural voice commands to run bookings, locks, and ledgers automatically on WhatsApp with Pipo AI.",
  openGraph: {
    title: "Pipo AI Operations Copilot | Tharo Technologies",
    description:
      "Neural voice command parsing, Hinglish understanding, and automated 24/7 WhatsApp chat management for modern businesses.",
  },
};

export default function PipoVoiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
