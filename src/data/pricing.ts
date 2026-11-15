export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  currency?: string;
  popular?: boolean;
  setupFee: string;
  desc: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface MetaCostItem {
  category: string;
  rate: string;
  notes: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "1,999",
    currency: "₹",
    period: "/month",
    setupFee: "₹15,000 to ₹35,000 (one-time)",
    desc: "For clinics, salons, and local businesses starting WhatsApp automation.",
    features: [
      "Up to 3 team members",
      "2 core automation workflows",
      "WhatsApp CRM and contact list",
      "Official WhatsApp account setup",
      "Business-hours email & WhatsApp support",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/contact?plan=starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: "4,999",
    currency: "₹",
    period: "/month",
    popular: true,
    setupFee: "₹40,000 to ₹90,000 (one-time)",
    desc: "For multi-branch teams, distributors, and stores syncing daily operations.",
    features: [
      "Up to 10 team members",
      "Full booking, staff, and stock workflows",
      "Direct sync with ERP, CRM, or store POS",
      "Automated payment reminders",
      "Google review links with click tracking",
      "Priority WhatsApp and phone support",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/contact?plan=growth",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    setupFee: "₹1,50,000+ (custom scoped)",
    desc: "For hospital groups, developers, and multi-warehouse operations.",
    features: [
      "Unlimited team seats",
      "Custom ERP integrations and business rules",
      "Multi-branch rollout support",
      "Interactive WhatsApp booking forms",
      "Dedicated onboarding engineer",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/contact?plan=enterprise",
  },
];

export const metaRateCards: MetaCostItem[] = [
  {
    category: "Utility Messages",
    rate: "~₹0.115 / message",
    notes: "Order alerts, slot reminders, and payment receipts.",
  },
  {
    category: "Marketing Messages",
    rate: "~₹0.86 / message",
    notes: "Promotions, seasonal offers, and updates.",
  },
  {
    category: "Service Chats",
    rate: "Free (until Sept 2026)",
    notes: "Replies inside the 24-hour customer chat window.",
  },
  {
    category: "Click-to-WhatsApp Ads",
    rate: "72 Hours Free",
    notes: "Free replies for 72 hours on new Facebook or Instagram ad leads.",
  },
];
