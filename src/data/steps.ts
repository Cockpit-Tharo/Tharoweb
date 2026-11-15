export interface StepItem {
  id: string;
  stepNumber: string;
  dayTag: string;
  shortTitle: string;
  title: string;
  headline: string;
  highlights: string[];
  metricBadge: string;
  iconName: string;
  accentColor: string;
}

export const stepsData: StepItem[] = [
  {
    id: "step-1",
    stepNumber: "01",
    dayTag: "Day 1",
    shortTitle: "Audit",
    title: "Map Your Workflow",
    headline: "We review how your team handles inquiries and which daily steps to automate.",
    highlights: [
      "Audit current chat replies and bottlenecks",
      "Set up booking and support scripts",
      "Review billing and inventory software",
    ],
    metricBadge: "Custom Plan",
    iconName: "Search",
    accentColor: "#20B87C",
  },
  {
    id: "step-2",
    stepNumber: "02",
    dayTag: "Day 2",
    shortTitle: "Meta Setup",
    title: "Verify Your Number",
    headline: "We set up your official Meta business account with direct wholesale billing.",
    highlights: [
      "Verified account under your business name",
      "Green checkmark application",
      "Direct Meta card billing at 0% markup",
    ],
    metricBadge: "0% Markup",
    iconName: "ShieldCheck",
    accentColor: "#0D3B2E",
  },
  {
    id: "step-3",
    stepNumber: "03",
    dayTag: "Day 3",
    shortTitle: "ERP Sync",
    title: "Connect Billing & Stock",
    headline: "Link WhatsApp directly to your billing, warehouse stock, and calendars.",
    highlights: [
      "Direct ERP and CRM connection",
      "Automatic WhatsApp invoices and receipts",
      "One-tap UPI and card payment links",
    ],
    metricBadge: "Live Sync",
    iconName: "Database",
    accentColor: "#EE9B39",
  },
  {
    id: "step-4",
    stepNumber: "04",
    dayTag: "Day 4",
    shortTitle: "Chat Flows",
    title: "Build Interactive Flows",
    headline: "Add booking buttons, product catalogs, and instant handover rules.",
    highlights: [
      "Tap-to-book appointment slots",
      "Automated follow-ups and reminders",
      "Quick handover to human staff",
    ],
    metricBadge: "Custom Fit",
    iconName: "Workflow",
    accentColor: "#E2D8FF",
  },
  {
    id: "step-5",
    stepNumber: "05",
    dayTag: "Day 5",
    shortTitle: "Go Live",
    title: "Train & Launch",
    headline: "Your whole team replies from one shared WhatsApp number with live monitoring.",
    highlights: [
      "Staff walkthrough on their own devices",
      "Shared multi-agent inbox setup",
      "Direct onboarding engineer support",
    ],
    metricBadge: "Go Live",
    iconName: "Rocket",
    accentColor: "#20B87C",
  },
];
