export interface MetaCategoryInfo {
  id: string;
  name: string;
  tag: string;
  rateIndia: string;
  rateUs: string;
  rateEu: string;
  rateUae: string;
  whoInitiates: string;
  windowDuration: string;
  description: string;
  examples: string[];
}

export interface ComparisonRow {
  dimension: string;
  tharoModel: string;
  tharoAdvantage: boolean;
  resellerModel: string;
  notes: string;
}

export interface BillingStep {
  stepNumber: string;
  title: string;
  description: string;
  timeEstimate: string;
}

export interface CountryRate {
  country: string;
  code: string;
  flag: string;
  currency: string;
  symbol: string;
  utilityRate: string;
  marketingRate: string;
  serviceWindow: string;
  adWindow: string;
}

export const metaCategories: MetaCategoryInfo[] = [
  {
    id: "utility",
    name: "Utility Conversations",
    tag: "Operational Alerts",
    rateIndia: "₹0.115 / message",
    rateUs: "$0.015 / message",
    rateEu: "€0.020 / message",
    rateUae: "AED 0.08 / message",
    whoInitiates: "Business-initiated",
    windowDuration: "24-hour delivery window",
    description:
      "Critical transactional notifications, booking confirmations, payment links, and order updates requested by customer actions.",
    examples: [
      "Appointment reminders & calendar lock links",
      "Payment receipts, invoices, and booking confirmations",
      "Account security OTP codes and verification codes",
      "Courier dispatch and real-time delivery tracking alerts",
    ],
  },
  {
    id: "marketing",
    name: "Marketing Conversations",
    tag: "Promotions & Broadcasts",
    rateIndia: "₹0.86 / message",
    rateUs: "$0.025 / message",
    rateEu: "€0.065 / message",
    rateUae: "AED 0.21 / message",
    whoInitiates: "Business-initiated",
    windowDuration: "24-hour delivery window",
    description:
      "Outbound campaigns, promotional discounts, seasonal announcements, product launches, and automated re-engagement workflows.",
    examples: [
      "Festive discounts and limited-time treatment offers",
      "Back-in-stock notifications and new arrival catalogues",
      "Re-engagement broadcasts to dormant leads or past clients",
      "Upsell recommendations based on purchase history",
    ],
  },
  {
    id: "service",
    name: "Service Conversations",
    tag: "Customer Support",
    rateIndia: "Free (24h Window)",
    rateUs: "Free (24h Window)",
    rateEu: "Free (24h Window)",
    rateUae: "Free (24h Window)",
    whoInitiates: "Customer-initiated",
    windowDuration: "24 hours from last user message",
    description:
      "When a customer reaches out to your WhatsApp first, all bot and human agent replies within the next 24 hours are 100% free from Meta charges.",
    examples: [
      "Inbound patient or client questions about pricing or hours",
      "Bot triage qualification and symptom or requirement check",
      "Live support escalations to on-duty human staff",
      "Address lookups, working hour queries, and menu requests",
    ],
  },
  {
    id: "click-to-whatsapp",
    name: "Click-to-WhatsApp Ads",
    tag: "Paid Acquisition Bonus",
    rateIndia: "72 Hours Completely Free",
    rateUs: "72 Hours Completely Free",
    rateEu: "72 Hours Completely Free",
    rateUae: "72 Hours Completely Free",
    whoInitiates: "Lead clicks FB / IG Ad",
    windowDuration: "72 hours continuous free window",
    description:
      "When a prospect taps a Click-to-WhatsApp ad on Instagram or Facebook, Meta waives all conversation charges for a full 72 hours.",
    examples: [
      "Instagram story ad leads booking appointments immediately",
      "Facebook sponsored lead generation campaigns",
      "Instant lead capture with zero messaging cost for 3 full days",
      "Automated follow-up drip sequences during the 72-hour window",
    ],
  },
];

export const aggregatorComparison: ComparisonRow[] = [
  {
    dimension: "Markup on Meta Message Cost",
    tharoModel: "0% markup (pure wholesale pass-through)",
    tharoAdvantage: true,
    resellerModel: "+15% to +50% surcharge hidden in message rates",
    notes: "You pay Meta's exact published rates with zero platform cut.",
  },
  {
    dimension: "Billing Relationship & Invoicing",
    tharoModel: "Direct billing to your card by Meta Platforms",
    tharoAdvantage: true,
    resellerModel: "Prepaid wallet to intermediary aggregator company",
    notes: "Receive legitimate Meta tax invoices with valid GST input credit.",
  },
  {
    dimension: "Account & Number Ownership",
    tharoModel: "You permanently own your WABA and phone number",
    tharoAdvantage: true,
    resellerModel: "Tied to vendor BSP container; painful migration",
    notes: "If you ever leave Tharo, your number, verified badge, and data remain yours.",
  },
  {
    dimension: "Credit Expiry & Minimum Top-Ups",
    tharoModel: "Zero expiring tokens; pay strictly for what you send",
    tharoAdvantage: true,
    resellerModel: "Mandatory pre-funded wallets that expire periodically",
    notes: "Never lose unspent money on arbitrary expiration dates.",
  },
  {
    dimension: "API Architecture & Latency",
    tharoModel: "Direct Tier-1 Meta Cloud API (sub-second delivery)",
    tharoAdvantage: true,
    resellerModel: "Shared proxy servers prone to queue backlogs",
    notes: "Sub-4-second automated SLA response times for inbound customer leads.",
  },
  {
    dimension: "Green Verification Tick Support",
    tharoModel: "Official direct application via Meta Business Manager",
    tharoAdvantage: true,
    resellerModel: "Often charges extra recurring 'badge verification fees'",
    notes: "Meta grants green ticks at zero recurring cost once business credentials pass.",
  },
];

export const billingSteps: BillingStep[] = [
  {
    stepNumber: "01",
    title: "Meta Business Manager Verification",
    description:
      "During day 1 of our 5-day turnkey setup, our engineering team assists you in verifying your legal entity in Meta Business Suite with your GST and business registration documents.",
    timeEstimate: "Completed in Day 1",
  },
  {
    stepNumber: "02",
    title: "Attach Corporate Card in Meta Settings",
    description:
      "In your official Meta Business Suite under Billing & Payments, you link your corporate credit card, debit card, or apply for monthly corporate credit invoicing.",
    timeEstimate: "Takes 2 minutes",
  },
  {
    stepNumber: "03",
    title: "Direct Wholesale Deductions",
    description:
      "As conversations take place, Meta charges your card directly according to your billing threshold (e.g. ₹2,000, ₹10,000, or month-end). Tharo never touches your payment credentials.",
    timeEstimate: "Automated by Meta",
  },
  {
    stepNumber: "04",
    title: "Download Official GST Invoices",
    description:
      "Every month, download official tax invoices directly from Meta Ireland / Meta India. Your finance team can claim the full 18% GST input tax credit on your corporate returns.",
    timeEstimate: "1-click PDF export",
  },
];

export const countryRates: CountryRate[] = [
  {
    country: "India",
    code: "IN",
    flag: "🇮🇳",
    currency: "INR",
    symbol: "₹",
    utilityRate: "₹0.115",
    marketingRate: "₹0.86",
    serviceWindow: "Free (24h)",
    adWindow: "Free (72h)",
  },
  {
    country: "United States / Canada",
    code: "US",
    flag: "🇺🇸",
    currency: "USD",
    symbol: "$",
    utilityRate: "$0.015",
    marketingRate: "$0.025",
    serviceWindow: "Free (24h)",
    adWindow: "Free (72h)",
  },
  {
    country: "European Union",
    code: "EU",
    flag: "🇪🇺",
    currency: "EUR",
    symbol: "€",
    utilityRate: "€0.020",
    marketingRate: "€0.065",
    serviceWindow: "Free (24h)",
    adWindow: "Free (72h)",
  },
  {
    country: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    currency: "AED",
    symbol: "AED ",
    utilityRate: "AED 0.08",
    marketingRate: "AED 0.21",
    serviceWindow: "Free (24h)",
    adWindow: "Free (72h)",
  },
  {
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    currency: "GBP",
    symbol: "£",
    utilityRate: "£0.016",
    marketingRate: "£0.048",
    serviceWindow: "Free (24h)",
    adWindow: "Free (72h)",
  },
];

export const metaChargesFaqs = [
  {
    q: "Why does Meta charge for WhatsApp messages in the first place?",
    a: "Meta charges per conversation to maintain server infrastructure and to protect the WhatsApp ecosystem against bulk unsolicited spam. Because each conversation window carries an official cost, businesses send thoughtful, high-value alerts instead of indiscriminate junk mail.",
  },
  {
    q: "What does '0% markup' mean for my monthly bill?",
    a: "It means Tharo Technologies charges you only for our software platform and AI workflow engine. We pass through Meta's exact wholesale messaging rates with zero commission, zero percentage fees, and zero hidden per-message surcharges. You pay Meta directly for messaging, and you pay us for software orchestration.",
  },
  {
    q: "How is a conversation window counted?",
    a: "A Meta conversation window lasts 24 hours from the delivery of the first message in that category. Within that 24-hour window, you can exchange messages with that user without triggering a second fee for that category. Once 24 hours expire, the next message sent opens a new 24-hour window.",
  },
  {
    q: "Are customer support replies really free?",
    a: "Yes. When a customer, patient, or lead messages your WhatsApp number first, a 24-hour customer service window opens. Within this window, all automated responses from Pipo AI or replies from your human staff are completely free from Meta charges.",
  },
  {
    q: "Can I claim GST input tax credit on Meta charges in India?",
    a: "Yes. When setting up your Meta Business Manager, our team enters your 15-digit GSTIN and legal trade name. Meta India issues valid tax invoices with GSTIN details so your accountant can claim 100% of the 18% GST input credit against your sales taxes.",
  },
  {
    q: "Do I need to maintain a high prepaid balance with Meta?",
    a: "No. Meta allows you to link a standard business credit card or international debit card. Meta initiates automatic payments only as you reach your billing threshold or at the end of your billing cycle. You never have to lock up large sums of idle capital in a vendor wallet.",
  },
  {
    q: "What happens if our company leaves Tharo in the future?",
    a: "Because your WhatsApp Business Account (WABA) is hosted inside your own Meta Business Manager, you retain full ownership of your phone number, message templates, customer records, and verified Green Tick. You are never held hostage or locked into our platform.",
  },
  {
    q: "Does Meta charge for inbound messages sent by customers?",
    a: "No. Inbound messages sent by customers to your business are always 100% free. You only pay when you initiate an outbound conversation with a customer outside an active service window.",
  },
];
