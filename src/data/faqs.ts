export interface FaqItem {
  question: string;
  answer: string;
  category: "Billing" | "Setup" | "Integration" | "Compliance";
}

export const faqsData: FaqItem[] = [
  {
    category: "Billing",
    question: "How do WhatsApp message charges work?",
    answer:
      "You pay a flat monthly software fee to us, and Meta bills your card directly per message with 0% markup.",
  },
  {
    category: "Billing",
    question: "Are there any setup fees or lock-in contracts?",
    answer:
      "A one-time setup fee covers WhatsApp Business verification, ERP connections, and team training. Plans run month to month.",
  },
  {
    category: "Setup",
    question: "How quickly can we go live?",
    answer:
      "Standard setups launch in 2 to 3 days. Custom ERP or POS integrations take 5 days including live testing.",
  },
  {
    category: "Integration",
    question: "Can Tharo Technologies connect to our existing ERP or CRM?",
    answer:
      "Yes. We connect with Tally, Shopify, WooCommerce, Zoho, and custom REST or SQL systems so bookings and orders sync automatically.",
  },
  {
    category: "Integration",
    question: "How does WhatsApp connect directly to inventory and accounts?",
    answer:
      "When a customer confirms a slot or order on WhatsApp, your ERP stock updates and the invoice posts right away with no double entry.",
  },
  {
    category: "Integration",
    question: "What does Pipo AI do?",
    answer:
      "Pipo AI answers customer WhatsApp chats 24/7, checks slots, and lets your team run voice commands (Alt + V) or ask plain questions about revenue and pending bills.",
  },
  {
    category: "Compliance",
    question: "Can our phone number get banned by WhatsApp?",
    answer:
      "No. We run on the official Meta WhatsApp Business API using pre-approved templates and built-in customer opt-out controls.",
  },
  {
    category: "Compliance",
    question: "How do we get the official green checkmark?",
    answer:
      "We submit your business documents and manage Meta verification for you at no extra charge.",
  },
];
