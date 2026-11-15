export interface StackflowCard {
  id: string;
  tag: string;
  title: string;
  italicWord: string;
  description: string;
  theme: "light" | "forest" | "dark" | "sand";
  stats: { label: string; value: string }[];
  visualType: "chat" | "erp" | "inbox" | "web" | "pipo";
}

export const stackflowCardsData: StackflowCard[] = [
  {
    id: "layer-01",
    tag: "ERP & BACK OFFICE",
    title: "Orders & Inventory.",
    italicWord: "Synced live.",
    description:
      "WhatsApp orders update stock counts, create invoices, and post accounting entries right away.",
    theme: "forest",
    stats: [
      { label: "Manual Data Entry", value: "0 hrs/week" },
      { label: "Stock Accuracy", value: "Live Sync" },
      { label: "ERP Accounting", value: "Automatic" },
    ],
    visualType: "erp",
  },
  {
    id: "layer-02",
    tag: "PIPO AI VOICE",
    title: "Voice & Business Q&A.",
    italicWord: "Ask and act.",
    description:
      "Press Alt + V to speak commands in Hindi, English, or Hinglish, or ask Pipo AI about sales and unpaid bills.",
    theme: "light",
    stats: [
      { label: "Voice Input", value: "Instant" },
      { label: "Audio Reply", value: "Silent" },
      { label: "Languages", value: "Hindi, English, Hinglish" },
    ],
    visualType: "pipo",
  },
  {
    id: "layer-03",
    tag: "24/7 WHATSAPP REPLIES",
    title: "Automated WhatsApp Chats.",
    italicWord: "Open 24/7.",
    description:
      "Pipo AI answers questions, holds calendar slots, and sends payment links on WhatsApp anytime.",
    theme: "sand",
    stats: [
      { label: "Customer Reply", value: "Under 5 sec" },
      { label: "Open Rate", value: "98%" },
      { label: "Availability", value: "24/7" },
    ],
    visualType: "chat",
  },
  {
    id: "layer-04",
    tag: "SHARED TEAM INBOX",
    title: "One Business Number.",
    italicWord: "Full team control.",
    description:
      "Sales, reception, and billing work from one verified WhatsApp number with private notes and role access.",
    theme: "dark",
    stats: [
      { label: "Reply Collisions", value: "Zero" },
      { label: "Chat Routing", value: "By Team" },
      { label: "Phone Masking", value: "Enabled" },
    ],
    visualType: "inbox",
  },
];
