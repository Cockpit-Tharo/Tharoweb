export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const statsData: StatItem[] = [
  { value: 98, suffix: "%", label: "WhatsApp open rate vs 20% email" },
  { value: 12, suffix: "+", label: "Custom industry playbooks built" },
  { value: 0, suffix: "%", label: "Hidden markup on Meta costs" },
  { value: 500, suffix: "+", label: "Automations deployed & running" },
];

export interface WhyUsItem {
  iconName: string;
  title: string;
  body: string;
}

export const whyUsData: WhyUsItem[] = [
  {
    iconName: "MessageSquare",
    title: "98% Open Rate",
    body: "Customers read and reply on WhatsApp within minutes instead of letting emails sit unread.",
  },
  {
    iconName: "Zap",
    title: "Live in 5 Days",
    body: "We configure ready workflows for your industry and test everything with your staff.",
  },
  {
    iconName: "FileSpreadsheet",
    title: "0% Message Markup",
    body: "Meta bills your card directly at official rates while we charge a simple flat fee.",
  },
];

export const marqueeItems = [
  "10M+ Messages Sent",
  "Trusted by 12+ Salons & Spas",
  "Official Meta WhatsApp Business",
  "Direct Enterprise ERP Sync",
  "Used by 50+ Logistics Companies",
  "100% Secure & Private",
  "Zero Message Markup",
];
