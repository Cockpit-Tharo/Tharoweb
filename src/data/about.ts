export interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export const aboutData = {
  hero: {
    tagline: "Our Mission",
    title: "Turn daily WhatsApp chats into",
    titleItalic: "organized operations.",
    subtitle:
      "Most businesses manage customer chats on personal phones and spreadsheets. We connect official WhatsApp directly to your billing, inventory, and team workflows.",
  },
  pillars: [
    {
      number: "01",
      title: "Direct Meta Billing",
      subtitle: "No per-message markup",
      description:
        "You connect directly to Meta and pay official rates on your own card. We charge a simple monthly software fee.",
    },
    {
      number: "02",
      title: "Industry Workflows",
      subtitle: "Built around daily operations",
      description:
        "Start with ready-made flows for clinics, salons, retail stores, events, and real estate teams instead of building from zero.",
    },
    {
      number: "03",
      title: "Connected Systems",
      subtitle: "Synced with your back office",
      description:
        "Every booking or order on WhatsApp updates your appointments, warehouse stock, and accounting ledgers right away.",
    },
  ] as Pillar[],
  values: [
    {
      title: "Measured by Time Saved",
      description:
        "We track response times, fewer no-shows, and faster collections rather than vanity numbers.",
    },
    {
      title: "You Own Your Account",
      description:
        "Your verified WhatsApp number, customer contacts, and chat history stay yours at all times.",
    },
    {
      title: "Ready in 5 Days",
      description:
        "Our team handles verification, setup, and staff training so you launch in under a week.",
    },
  ] as ValueItem[],
};
