export interface ScenarioScreenshot {
  label: string;
  src: string;
  alt: string;
  sublabel?: string;
}

export interface ContextItem {
  label: string;
  value: string;
}

export interface ScenarioContextCard {
  kind:
    | "whatsapp"
    | "ad-lead"
    | "booking"
    | "payment"
    | "review"
    | "media"
    | "voice"
    | "inventory"
    | "roster"
    | "workflow"
    | "telephony"
    | "security";
  headerLabel: string;
  timestamp: string;
  title: string;
  subtitle: string;
  highlightBadge?: string;
  quote?: string;
  details?: ContextItem[];
  statusBadge: string;
}

export interface ScenarioImpact {
  badge: string;
  heading: string;
  summary: string;
  tags: string[];
}

export interface IntegrationScenario {
  id: string;
  category: "whatsapp" | "platform";
  tabLabel: string;
  iconName:
    | "dashboard"
    | "zap"
    | "calendar"
    | "payments"
    | "star"
    | "shield"
    | "mic"
    | "package"
    | "users"
    | "workflow"
    | "phone"
    | "lock";
  tagline: string;
  screenshots?: ScenarioScreenshot[];
  previewUrl?: string;
  previewType?: "screenshot" | "interactive";
  contextCard: ScenarioContextCard;
  impact: ScenarioImpact;
  trigger: {
    badge: string;
    sender: string;
    role: string;
    time: string;
    message: string;
    audioDuration?: string;
  };
  bridge: {
    label: string;
    latency: string;
  };
  destinationApp: {
    name: string;
    type: string;
    windowTitle: string;
    metrics: { label: string; value: string }[];
    records: {
      key: string;
      primary: string;
      secondary: string;
      tag: string;
      status: "synced" | "active" | "verified";
    }[];
    howItWorks: string[];
  };
}

export const integrationScenarios: IntegrationScenario[] = [
  // ══════════════════════════════════════════════════════════════════
  // CATEGORY 1: FEATURES THAT USE WHATSAPP (CUSTOMER COMMUNICATION)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "shared-inbox",
    category: "whatsapp",
    tabLabel: "Shared Team Inbox",
    iconName: "dashboard",
    tagline: "Staff assign chats, add internal private notes, and reply from one official number without crossing wires.",
    contextCard: {
      "kind": "whatsapp",
      "headerLabel": "Incoming WhatsApp Chat",
      "timestamp": "10:14 AM",
      "title": "Aarav Mehta",
      "subtitle": "First-Time Inbound Inquiry",
      "highlightBadge": "Customer WhatsApp",
      "quote": "Hi, I saw your pricing for the annual maintenance package. Can someone share the full service checklist?",
      "statusBadge": "Received on WhatsApp",
      "details": [
            {
                  "label": "Channel",
                  "value": "Customer WhatsApp Channel"
            },
            {
                  "label": "Assigned To",
                  "value": "Neha S. (Locked to Prevent Collision)"
            }
      ]
},
    impact: {
      "badge": "Team Coordination",
      "heading": "Zero Conflicting Replies",
      "summary": "Staff assign chats, add internal private notes, and reply from one official number without crossing wires.",
      "tags": [
            "Collision Lock",
            "Private Notes",
            "One Official Number"
      ]
},
    previewUrl: "inbox.tharo.tech/active",
    screenshots: [
      {
        label: "Team Inbox Console",
        src: "/images/web content/sharedinbox.png",
        alt: "Shared Multi-Agent WhatsApp Inbox and Conversation Workspace",
        sublabel: "Multi-Agent Cockpit",
      },
    ],
    trigger: {
      badge: "Inbound Customer Message",
      sender: "Aarav Mehta",
      role: "First-Time Inquiry",
      time: "10:14 AM",
      message: "Hi, I saw your pricing for the annual maintenance package. Can someone share the full service checklist?",
    },
    bridge: {
      label: "Team Sync",
      latency: "Real-Time",
    },
    destinationApp: {
      name: "Team WhatsApp Inbox",
      type: "Multi-Agent Cockpit",
      windowTitle: "inbox.tharo.tech/unassigned",
      metrics: [
        { label: "Online Staff", value: "4 Reps Active" },
        { label: "Unassigned Queue", value: "0 In Queue" },
        { label: "Avg First Reply", value: "8 Seconds" },
      ],
      records: [
        {
          key: "inbox-1",
          primary: "Chat Assigned to Neha S.",
          secondary: "Locked to Neha so two reps never send conflicting replies",
          tag: "Assigned",
          status: "verified",
        },
        {
          key: "inbox-2",
          primary: "Customer History Located",
          secondary: "Linked to past notes and previous inquiries on file",
          tag: "History Loaded",
          status: "synced",
        },
        {
          key: "inbox-3",
          primary: "Checklist Dispatched",
          secondary: "Sent PDF brochure and package rate card directly in chat",
          tag: "Sent",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Every staff member logs into one shared business number from their own laptop or phone.",
        "2. Managers can assign chats, leave internal private notes, and see who replied to what.",
        "3. Collision detection blocks two team members from accidentally texting the same client at once.",
      ],
    },
  },
  {
    id: "speed-to-lead",
    category: "whatsapp",
    tabLabel: "Instant Ad Replies",
    iconName: "zap",
    tagline: "New leads get an immediate welcome brochure on WhatsApp before they can scroll to a competitor.",
    contextCard: {
      "kind": "ad-lead",
      "headerLabel": "Meta Lead Form Webhook",
      "timestamp": "06:02 PM",
      "title": "Tanvi Kapoor",
      "subtitle": "Instagram Ad: Luxury Villa Tour",
      "highlightBadge": "Immediate Reply",
      "quote": "Buyer submitted weekend site visit request and floor plan inquiry.",
      "statusBadge": "Delivered via Webhook",
      "details": [
            {
                  "label": "Campaign",
                  "value": "Weekend Villa Tour (Lead Ad)"
            },
            {
                  "label": "Asset Sent",
                  "value": "Brochure & Floor Plan PDF"
            }
      ]
},
    impact: {
      "badge": "Lead Response",
      "heading": "Reply Before Competitors Notice",
      "summary": "New leads get an immediate welcome brochure on WhatsApp before they can scroll to a competitor.",
      "tags": [
            "Instant Routing",
            "Automated PDF",
            "Zero Drop-off"
      ]
},
    previewUrl: "marketing.tharo.tech/meta-leads",
    trigger: {
      badge: "Meta Lead Form",
      sender: "Tanvi Kapoor",
      role: "Instagram Ad Lead",
      time: "06:02 PM",
      message: "Ad campaign: Luxury Villa Tour. Buyer requested weekend site visit slot and brochure.",
    },
    bridge: {
      label: "Ad Webhook",
      latency: "Automated",
    },
    destinationApp: {
      name: "Lead Ingestion Pipeline",
      type: "Speed-to-Lead Engine",
      windowTitle: "marketing.tharo.tech/meta-leads",
      metrics: [
        { label: "Lead Capture", value: "Instant Reply" },
        { label: "Delivery Status", value: "Delivered in Chat" },
        { label: "Brochure Attached", value: "Floor Plan PDF" },
      ],
      records: [
        {
          key: "ad-1",
          primary: "Personalized WhatsApp Greeting",
          secondary: "Welcomed Tanvi by name with property floor plans before she closed Instagram",
          tag: "Delivered",
          status: "verified",
        },
        {
          key: "ad-2",
          primary: "Consultant Alert Triggered",
          secondary: "Property advisor Rohit assigned with lead source and budget range",
          tag: "Rep Notified",
          status: "synced",
        },
        {
          key: "ad-3",
          primary: "Visit Slot Options Offered",
          secondary: "Sent interactive button options for Saturday 11 AM or Sunday 3 PM",
          tag: "Awaiting Pick",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Connects directly to your Facebook and Instagram lead ad forms via official webhooks.",
        "2. Greets new leads on WhatsApp right away while they are still holding their phones.",
        "3. Sends brochures, catalogs, and appointment links before competitors even open the lead list.",
      ],
    },
  },
  {
    id: "appointments",
    category: "whatsapp",
    tabLabel: "Bookings & Calendar",
    iconName: "calendar",
    tagline: "Automates booking requests and sends directions so staff spend zero time on phone tag.",
    contextCard: {
      "kind": "booking",
      "headerLabel": "Appointment Booking Intent",
      "timestamp": "11:20 AM",
      "title": "Sneha Roy",
      "subtitle": "Dental Consultation Request",
      "highlightBadge": "Calendar Sync",
      "quote": "Do you have an opening tomorrow afternoon around 3:30 PM for a dental check-up?",
      "statusBadge": "Slot Held on Operatory 2",
      "details": [
            {
                  "label": "Selected Slot",
                  "value": "Tomorrow at 3:30 PM"
            },
            {
                  "label": "Provider",
                  "value": "Dr. Raman (Chair 2)"
            }
      ]
},
    impact: {
      "badge": "Zero No-Shows",
      "heading": "Hands-Free Slot Locking",
      "summary": "Automates booking requests and sends directions so staff spend zero time on phone tag.",
      "tags": [
            "No Double Booking",
            "Google Maps Pin",
            "Timed Reminders"
      ]
},
    previewUrl: "calendar.tharo.tech/live-slots",
    screenshots: [
      {
        label: "Bookings Table",
        src: "/images/web content/booking.png",
        alt: "Customer Appointments and Reservation Management Table",
        sublabel: "Real-Time Bookings",
      },
      {
        label: "Master Calendar",
        src: "/images/web content/calendar.png",
        alt: "Weekly and Monthly Staff Slot Calendar Grid",
        sublabel: "Calendar Schedule",
      },
    ],
    trigger: {
      badge: "Booking Request",
      sender: "Dr. Raman Clinic / Sneha Roy",
      role: "Consultation Request",
      time: "11:20 AM",
      message: "Do you have an opening tomorrow afternoon around 3:30 PM for a dental check-up?",
    },
    bridge: {
      label: "Calendar Sync",
      latency: "Real-Time",
    },
    destinationApp: {
      name: "Live Appointment Desk",
      type: "Calendar & Room Ledger",
      windowTitle: "calendar.tharo.tech/operatory-2",
      metrics: [
        { label: "Selected Slot", value: "Tomorrow 3:30 PM" },
        { label: "Doctor Assigned", value: "Dr. Raman (Chair 2)" },
        { label: "No-Show Protection", value: "2 Auto-Reminders" },
      ],
      records: [
        {
          key: "appt-1",
          primary: "Slot Locked on Calendar",
          secondary: "Reserved tomorrow at 3:30 PM with zero risk of double booking",
          tag: "Slot Held",
          status: "verified",
        },
        {
          key: "appt-2",
          primary: "Clinic Pin & Prep Notes Sent",
          secondary: "Google Maps pin and pre-visit fasting instructions sent to patient chat",
          tag: "Dispatched",
          status: "synced",
        },
        {
          key: "appt-3",
          primary: "Morning Reminder Scheduled",
          secondary: "Automatic WhatsApp reminder queued for 3 hours before appointment time",
          tag: "Queued",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Customers choose open slots from an interactive menu inside WhatsApp.",
        "2. The booking locks into your central calendar instantly across all staff screens.",
        "3. Timed WhatsApp reminders with Google Maps pins reduce customer no-shows significantly.",
      ],
    },
  },
  {
    id: "upi-payments",
    category: "whatsapp",
    tabLabel: "Instant UPI Payments",
    iconName: "payments",
    tagline: "Direct bank settlement with dynamic QR codes. Invoices mark themselves paid the moment money hits your account.",
    contextCard: {
      "kind": "payment",
      "headerLabel": "Payment & Settlement Event",
      "timestamp": "02:15 PM",
      "title": "Rajesh Sharma",
      "subtitle": "Invoice #TH-4091 Settlement",
      "highlightBadge": "Direct Bank Sync",
      "quote": "Customer scanned dynamic UPI QR code for balance INR 4,800.00.",
      "statusBadge": "Settled Direct to Current A/C",
      "details": [
            {
                  "label": "Invoice Amount",
                  "value": "INR 4,800.00"
            },
            {
                  "label": "Gateway Fee",
                  "value": "0% Platform Markup"
            }
      ]
},
    impact: {
      "badge": "Instant Bank Recon",
      "heading": "Automated Ledger Clearing",
      "summary": "Direct bank settlement with dynamic QR codes. Invoices mark themselves paid the moment money hits your account.",
      "tags": [
            "Direct Settlement",
            "Auto-Tally Vouchers",
            "GST Tax Receipt"
      ]
},
    previewUrl: "billing.tharo.tech/invoices/verified",
    trigger: {
      badge: "Invoice Payment",
      sender: "Accounts Desk to Rajesh Sharma",
      role: "Balance Due: INR 4,800",
      time: "02:15 PM",
      message: "Your invoice #TH-4091 is ready. Scan the dynamic QR code or tap the link to pay with GPay, PhonePe, or Paytm.",
    },
    bridge: {
      label: "UPI Gateway",
      latency: "Bank Webhook",
    },
    destinationApp: {
      name: "Payment Reconciliation Desk",
      type: "Direct Bank Ingestion",
      windowTitle: "billing.tharo.tech/invoices/verified",
      metrics: [
        { label: "Payment Route", value: "Dynamic UPI QR" },
        { label: "Bank Settlement", value: "Direct to Account" },
        { label: "Receipt Status", value: "Auto-Sent PDF" },
      ],
      records: [
        {
          key: "pay-1",
          primary: "Payment Verified via Bank Webhook",
          secondary: "INR 4,800 credited directly to your current account with zero middleman hold",
          tag: "Paid & Cleared",
          status: "verified",
        },
        {
          key: "pay-2",
          primary: "Invoice Marked Paid in Ledger",
          secondary: "Account balance updated in billing books without staff matching bank SMS alerts",
          tag: "Book Updated",
          status: "synced",
        },
        {
          key: "pay-3",
          primary: "GST Receipt Dispatched",
          secondary: "Itemized tax invoice sent automatically to customer WhatsApp chat",
          tag: "Receipt Sent",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Generates unique dynamic UPI QR codes for each bill directly inside the WhatsApp conversation.",
        "2. Payments land directly in your own bank account with zero platform commission markups.",
        "3. Webhooks verify the transfer immediately and send an itemized PDF tax receipt to the customer.",
      ],
    },
  },
  {
    id: "google-reviews",
    category: "whatsapp",
    tabLabel: "Google Reviews",
    iconName: "star",
    tagline: "Prompts happy customers for Google reviews right after their appointment to build local search reputation.",
    contextCard: {
      "kind": "review",
      "headerLabel": "Post-Service Review Prompt",
      "timestamp": "2h Post-Visit",
      "title": "Nikhil Verma",
      "subtitle": "Service: Haircut & Grooming",
      "highlightBadge": "4.9 Map Pack",
      "quote": "Automated WhatsApp check-in sent: How was your experience with stylist Pooja today?",
      "statusBadge": "5-Star Feedback Routed to Google",
      "details": [
            {
                  "label": "Timing",
                  "value": "2 Hours After Appointment"
            },
            {
                  "label": "Sentiment Gate",
                  "value": "Complaints Routed Privately"
            }
      ]
},
    impact: {
      "badge": "Search Reputation",
      "heading": "Automated 5-Star Reviews",
      "summary": "Prompts happy customers for Google reviews right after their appointment to build local search reputation.",
      "tags": [
            "Top 3 Map Pack",
            "Private Issue Shield",
            "Zero Staff Prompting"
      ]
},
    previewUrl: "reviews.tharo.tech/dashboard",
    trigger: {
      badge: "Post-Service Follow-Up",
      sender: "Automated Feedback Flow to Nikhil Verma",
      role: "Visit Completed (Haircut & Spa)",
      time: "2 Hours Post-Visit",
      message: "Thanks for visiting us today, Nikhil! How was your experience with stylist Pooja? Tap below to let us know.",
    },
    bridge: {
      label: "Review Gate",
      latency: "Automated",
    },
    destinationApp: {
      name: "Google Review Growth Hub",
      type: "Local Search Optimization",
      windowTitle: "reviews.tharo.tech/dashboard",
      metrics: [
        { label: "Feedback Rate", value: "42% Response" },
        { label: "Average Rating", value: "4.9 Stars" },
        { label: "Local Map Rank", value: "Top 3 Search" },
      ],
      records: [
        {
          key: "rev-1",
          primary: "Happy Rating Routed to Google",
          secondary: "5-star feedback opens your public Google Maps review box with one tap",
          tag: "Google Opened",
          status: "verified",
        },
        {
          key: "rev-2",
          primary: "Quiet Customers Contacted",
          secondary: "Catches clients staff usually forget to ask in person during a busy checkout rush",
          tag: "100% Reach",
          status: "synced",
        },
        {
          key: "rev-3",
          primary: "Private Resolution for Low Scores",
          secondary: "Ratings under 4 stars alert the store manager privately before going public",
          tag: "Protected",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Sends a gentle check-in message two hours after a customer visit or delivery is completed.",
        "2. Directs satisfied clients straight into your Google Maps listing to leave public 5-star reviews.",
        "3. Catches complaints privately so managers can fix issues before anyone leaves a negative review.",
      ],
    },
  },
  {
    id: "media-vault",
    category: "whatsapp",
    tabLabel: "Cloud Media Backup",
    iconName: "shield",
    tagline: "Prescriptions, test reports, and audio notes stay permanently archived in your cloud, never expiring.",
    contextCard: {
      "kind": "media",
      "headerLabel": "Inbound Medical & Client Files",
      "timestamp": "03:15 PM",
      "title": "Meera Iyer",
      "subtitle": "Patient Record Inbound",
      "highlightBadge": "Encrypted Cloud",
      "quote": "Patient sent 2 blood test PDFs, skin lesion photo, and 30-second audio note.",
      "statusBadge": "Permanent Cloud Backup (Zero Expiration)",
      "details": [
            {
                  "label": "Files Received",
                  "value": "2 PDFs, 1 Photo, 1 Audio"
            },
            {
                  "label": "Retention",
                  "value": "Permanent Cloud (Never Expires)"
            }
      ]
},
    impact: {
      "badge": "Data Security",
      "heading": "Never Lose Patient Records",
      "summary": "Prescriptions, test reports, and audio notes stay permanently archived in your cloud, never expiring.",
      "tags": [
            "Zero Expiration",
            "HIPAA/GDPR Vault",
            "Cross-Branch Access"
      ]
},
    previewUrl: "vault.tharo.tech/documents",
    trigger: {
      badge: "Inbound Files",
      sender: "Patient Meera Iyer",
      role: "Records Inbound",
      time: "03:15 PM",
      message: "Customer sent 2 blood test PDFs, a skin photo, and a 30-second audio note describing symptoms.",
    },
    bridge: {
      label: "Encrypted Vault",
      latency: "Permanent Cloud",
    },
    destinationApp: {
      name: "Document Storage Hub",
      type: "Secure Customer Timeline",
      windowTitle: "vault.tharo.tech/patients/meera-iyer",
      metrics: [
        { label: "File Retention", value: "Never Expired" },
        { label: "WhatsApp 30-Day Blur", value: "Prevented" },
        { label: "Team Access", value: "Linked to Profile" },
      ],
      records: [
        {
          key: "vault-1",
          primary: "PDFs Saved in Private Storage",
          secondary: "Prescriptions and lab reports archived safely in your company cloud account",
          tag: "Archived",
          status: "verified",
        },
        {
          key: "vault-2",
          primary: "Audio Note Transcribed",
          secondary: "Voice note converted to readable text so doctors or reps scan it immediately",
          tag: "Transcribed",
          status: "synced",
        },
        {
          key: "vault-3",
          primary: "Attached to Customer History",
          secondary: "Any staff member opening Meera's profile sees the files from any office computer",
          tag: "Linked to File",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Intercepts incoming customer photos, documents, and voice notes as soon as they reach WhatsApp.",
        "2. Stores them permanently in your private cloud so WhatsApp never replaces them with blurry expired icons.",
        "3. Links every attachment to the customer profile for instant access by doctors, technicians, or staff.",
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // CATEGORY 2: BUILT-IN WEB APP & ERP (INDEPENDENT BUSINESS ENGINE)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "pipo-voice",
    category: "platform",
    tabLabel: "Pipo Voice Copilot",
    iconName: "mic",
    tagline: "Front desk staff log patient appointments using natural speech instead of clicking through dropdowns.",
    contextCard: {
      "kind": "voice",
      "headerLabel": "In-App Microphone Copilot (Alt + V)",
      "timestamp": "04:30 PM",
      "title": "Front Desk Staff (Pooja)",
      "subtitle": "Spoken Command via Alt + V",
      "highlightBadge": "Voice Command",
      "quote": "Book appointment for Mrs. Ananya with Dr. Mehta tomorrow at 4 PM for dental consultation.",
      "statusBadge": "Recorded in System",
      "details": [
            {
                  "label": "Input Mode",
                  "value": "Spoken Hinglish Speech"
            },
            {
                  "label": "Form Fields Replaced",
                  "value": "10 Dropdowns & Pickers"
            }
      ]
},
    impact: {
      "badge": "Reception Efficiency",
      "heading": "Voice-to-Calendar Action",
      "summary": "Front desk staff log patient appointments using natural speech instead of clicking through multiple dropdowns.",
      "tags": [
            "Natural Speech",
            "Speaks Hinglish",
            "Undo Action"
      ]
},
    previewUrl: "voice.tharo.tech/pipo-copilot",
    trigger: {
      badge: "Staff Voice Command",
      sender: "Front Desk Staff (Pooja)",
      role: "In-App Mic (Alt + V)",
      time: "04:30 PM",
      audioDuration: "Hinglish Audio",
      message: "Book appointment for Mrs. Ananya with Dr. Mehta tomorrow at 4 PM for dental consultation.",
    },
    bridge: {
      label: "Voice Engine",
      latency: "Voice-to-Action",
    },
    destinationApp: {
      name: "Pipo Staff Assistant",
      type: "In-App Voice Action",
      windowTitle: "app.tharo.tech/appointments",
      metrics: [
        { label: "Command State", value: "Completed" },
        { label: "Input Mode", value: "Microphone" },
        { label: "Keyboard Effort", value: "Zero Typing" },
      ],
      records: [
        {
          key: "pipo-1",
          primary: "Slot Locked on Calendar",
          secondary: "Dr. Mehta · Operatory Chair 2 · Tomorrow 4:00 PM reserved",
          tag: "Slot Locked",
          status: "verified",
        },
        {
          key: "pipo-2",
          primary: "Patient Profile Attached",
          secondary: "Linked to Mrs. Ananya Sen (+91-98201 •••••) existing treatment file",
          tag: "Profile Linked",
          status: "synced",
        },
        {
          key: "pipo-3",
          primary: "WhatsApp Confirmation Queued",
          secondary: "Appointment card and clinic directions queued to patient WhatsApp",
          tag: "Queued",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Front desk staff press Alt+V and speak naturally in Hindi, English, or Hinglish.",
        "2. Replaces 10 manual form fields, dropdowns, and date pickers with one 4-second spoken sentence.",
        "3. Provides an instant 5-second undo button on screen so staff can cancel or correct details if they misspoke.",
      ],
    },
  },
  {
    id: "inventory-stock",
    category: "platform",
    tabLabel: "Inventory & Stock",
    iconName: "package",
    tagline: "Deducts units as orders confirm and gives staff low-stock warnings before popular items run out.",
    contextCard: {
      "kind": "inventory",
      "headerLabel": "Warehouse Stock Movement",
      "timestamp": "09:45 AM",
      "title": "Peenya Hub Dispatch Desk",
      "subtitle": "Batch Inventory Movement",
      "highlightBadge": "Live Stock Sync",
      "quote": "Physical dispatch of 50 units of Model-A hydraulic valves to industrial client in Peenya.",
      "statusBadge": "Stock Deducted Across All Screens",
      "details": [
            {
                  "label": "Quantity Deducted",
                  "value": "50 Units (Model-A)"
            },
            {
                  "label": "Safety Stock Buffer",
                  "value": "120 Units (Healthy)"
            }
      ]
},
    impact: {
      "badge": "Stock Protection",
      "heading": "Prevent Accidental Overselling",
      "summary": "Deducts units as orders confirm and gives staff low-stock warnings before popular items run out.",
      "tags": [
            "Multi-Branch Ledger",
            "Low Stock Alerts",
            "Auto Tax Invoice"
      ]
},
    previewUrl: "erp.tharo.tech/stock/ledger",
    screenshots: [
      {
        label: "Warehouse Inventory",
        src: "/images/web content/inventorys.png",
        alt: "Real-Time Central Inventory, SKUs and Warehouse Stock Ledger",
        sublabel: "Stock & SKUs",
      },
    ],
    trigger: {
      badge: "Dispatched Order",
      sender: "Warehouse Dispatch Desk",
      role: "Stock Movement",
      time: "09:45 AM",
      message: "Dispatched 50 units of Model-A hydraulic valves to industrial client in Peenya.",
    },
    bridge: {
      label: "Stock Ledger",
      latency: "Real-Time",
    },
    destinationApp: {
      name: "Warehouse Stock Ledger",
      type: "Inventory Operations",
      windowTitle: "erp.tharo.tech/stock/ledger",
      metrics: [
        { label: "Active SKUs", value: "Catalog Synced" },
        { label: "Stock Balance", value: "Updated Live" },
        { label: "Reorder Alert", value: "Normal Level" },
      ],
      records: [
        {
          key: "inv-1",
          primary: "50 Units Deducted from Peenya Hub",
          secondary: "Physical batch inventory updated across all branch screens instantly",
          tag: "Stock Deducted",
          status: "verified",
        },
        {
          key: "inv-2",
          primary: "Safety Threshold Checked",
          secondary: "Remaining stock (120 units) verified above minimum safety buffer",
          tag: "Stock Healthy",
          status: "synced",
        },
        {
          key: "inv-3",
          primary: "Batch & Serial Recorded",
          secondary: "Dispatch tagged to customer GST invoice without manual ledger entries",
          tag: "Logged to Order",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Deducts physical inventory automatically whenever a WhatsApp order or counter invoice is approved.",
        "2. Stops accidental overselling by warning staff the moment an item drops below safety stock levels.",
        "3. Gives owners live visibility into stock counts across multiple stores, clinics, or warehouses.",
      ],
    },
  },
  {
    id: "staff-payroll",
    category: "platform",
    tabLabel: "Staff Shifts & Payroll",
    iconName: "users",
    tagline: "Logs daily shift check-ins and tallies service commissions automatically for painless end-of-month payroll.",
    contextCard: {
      "kind": "roster",
      "headerLabel": "Shift Completion & Commission Log",
      "timestamp": "06:30 PM",
      "title": "Priya S. (Senior Consultant)",
      "subtitle": "Digital Roster Check-Out",
      "highlightBadge": "Commission Added",
      "quote": "Shift completed: 5 client appointments completed, total service billing INR 18,500.",
      "statusBadge": "Daily Earnings Tallied to Staff Login",
      "details": [
            {
                  "label": "Shift Logged",
                  "value": "8.5 Hours (10:00 - 18:30)"
            },
            {
                  "label": "Commission Split",
                  "value": "Agreed % Credited Instantly"
            }
      ]
},
    impact: {
      "badge": "Fair Team Payroll",
      "heading": "Dispute-Free Month-End",
      "summary": "Logs daily shift check-ins and tallies service commissions automatically for painless end-of-month payroll.",
      "tags": [
            "Digital Clock-In",
            "Auto Commission Split",
            "Staff Login Access"
      ]
},
    previewUrl: "staff.tharo.tech/roster",
    screenshots: [
      {
        label: "Staff & Shifts",
        src: "/images/web content/staff.png",
        alt: "Staff Shifts, Attendance and Roster Management",
        sublabel: "Weekly Roster",
      },
    ],
    trigger: {
      badge: "Staff Shift Log",
      sender: "Senior Consultant Priya S.",
      role: "Shift Completed",
      time: "06:30 PM",
      message: "Shift completed: 5 client appointments completed, total service billing INR 18,500.",
    },
    bridge: {
      label: "Payroll Sync",
      latency: "Automated",
    },
    destinationApp: {
      name: "Roster & Payroll Desk",
      type: "Team Operations",
      windowTitle: "staff.tharo.tech/payroll/daily",
      metrics: [
        { label: "Present Staff", value: "Full Team Logged" },
        { label: "Services Today", value: "24 Completed" },
        { label: "Commission Split", value: "Calculated" },
      ],
      records: [
        {
          key: "staff-1",
          primary: "Shift Attendance Verified",
          secondary: "Check-in and check-out logged digitally without paper registers or disputes",
          tag: "Shift Closed",
          status: "verified",
        },
        {
          key: "staff-2",
          primary: "Commission Split Credited",
          secondary: "Agreed percentage credited to Priya's commission ledger upon bill settlement",
          tag: "Commission Added",
          status: "synced",
        },
        {
          key: "staff-3",
          primary: "Month-End Payout Ready",
          secondary: "Base salary, service commissions, and advance deductions tallied for 1-click pay",
          tag: "Ledger Ready",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Replaces messy paper sign-in registers with transparent digital attendance tracking.",
        "2. Splits commissions automatically after every completed service based on individual staff rates.",
        "3. Staff view their daily earnings on their own login, avoiding end-of-month payout disputes.",
      ],
    },
  },
  {
    id: "visual-automation",
    category: "platform",
    tabLabel: "Visual Workflows",
    iconName: "workflow",
    tagline: "Quietly runs custom business rules 24/7 to re-engage lapsed clients and follow up on overdue bills.",
    contextCard: {
      "kind": "workflow",
      "headerLabel": "Scheduled Background Rule Trigger",
      "timestamp": "10:00 AM",
      "title": "Lapsed Customer Re-Engagement",
      "subtitle": "Rule: 45 Days Inactive Client",
      "highlightBadge": "Autonomous Run",
      "quote": "Rule evaluated: Detected 14 clients who completed service 45 days ago with no follow-up booking.",
      "statusBadge": "14 Personalized Check-Ins Dispatched",
      "details": [
            {
                  "label": "Target Criteria",
                  "value": "Last Visit > 45 Days Ago"
            },
            {
                  "label": "Timing Guard",
                  "value": "Morning Hours (Quiet Hours Respected)"
            }
      ]
},
    impact: {
      "badge": "Autonomous Retention",
      "heading": "Recover Clients on Autopilot",
      "summary": "Quietly runs custom business rules 24/7 to re-engage lapsed clients and follow up on overdue bills.",
      "tags": [
            "24/7 Background Run",
            "Quiet Hours Safe",
            "Zero Engineering"
      ]
},
    previewUrl: "studio.tharo.tech/workflows",
    screenshots: [
      {
        label: "Visual Workflows",
        src: "/images/web content/automates.png",
        alt: "Visual Business Workflow Builder and Trigger Pipelines",
        sublabel: "Automation Canvas",
      },
    ],
    trigger: {
      badge: "Automation Trigger",
      sender: "Lapsed Customer Rule",
      role: "Rule: 45 Days Inactive",
      time: "10:00 AM (Scheduled)",
      message: "Detected 14 customers who completed service 45 days ago with no follow-up visit scheduled.",
    },
    bridge: {
      label: "Rule Engine",
      latency: "Automated Run",
    },
    destinationApp: {
      name: "Visual Studio Canvas",
      type: "Workflow Builder",
      windowTitle: "studio.tharo.tech/builder/re-engagement",
      metrics: [
        { label: "Trigger Condition", value: "45 Days Inactive" },
        { label: "Delay Logic", value: "10:00 AM Working Hours" },
        { label: "Code Required", value: "Zero Code" },
      ],
      records: [
        {
          key: "flow-1",
          primary: "14 Inactive Customers Filtered",
          secondary: "System isolates clients past the 45-day window who haven't rebooked",
          tag: "Target Found",
          status: "verified",
        },
        {
          key: "flow-2",
          primary: "Quiet Hours Protected",
          secondary: "Rule waits until morning so messages are never sent at night or on holidays",
          tag: "Timing Safe",
          status: "synced",
        },
        {
          key: "flow-3",
          primary: "Exclusive Follow-Up Dispatched",
          secondary: "Delivers friendly check-in with 1-tap rebooking link to WhatsApp",
          tag: "Nudges Sent",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Build custom rules by connecting simple triggers, delays, and actions on a visual board.",
        "2. Set conditions like re-engaging inactive clients, chasing unpaid bills, or sending birthday perks.",
        "3. Runs reliably in the background 24/7 without needing software engineers or manual oversight.",
      ],
    },
  },
  {
    id: "phone-calls",
    category: "platform",
    tabLabel: "Call Transcripts",
    iconName: "phone",
    tagline: "Records business calls, extracts clear action items, and pins summaries directly to customer timelines.",
    contextCard: {
      "kind": "telephony",
      "headerLabel": "Integrated Telephony Call",
      "timestamp": "03:45 PM",
      "title": "Deepak Patel",
      "subtitle": "Outbound Web App Call (3m 12s)",
      "highlightBadge": "AI Call Summary",
      "quote": "Spoke regarding 500-unit bulk hardware order. Customer requested delivery schedule and credit terms.",
      "statusBadge": "Commitments Extracted & Audio Archived",
      "details": [
            {
                  "label": "Duration",
                  "value": "3m 12s Recorded Audio"
            },
            {
                  "label": "Action Item",
                  "value": "Logistics to Confirm Friday Dispatch"
            }
      ]
},
    impact: {
      "badge": "Institutional Memory",
      "heading": "Never Forget What Was Promised",
      "summary": "Records business calls, extracts clear action items, and pins summaries directly to customer timelines.",
      "tags": [
            "AI Audio Summary",
            "Timeline History",
            "Team Handover"
      ]
},
    previewUrl: "telephony.tharo.tech/calls",
    trigger: {
      badge: "Client Phone Call",
      sender: "Consultant to Deepak Patel",
      role: "Outbound Call",
      time: "03:45 PM",
      audioDuration: "3m 12s Call",
      message: "Spoke with Deepak regarding 500-unit bulk hardware order. Customer requested delivery schedule and credit terms.",
    },
    bridge: {
      label: "Audio AI Sync",
      latency: "Instant Summary",
    },
    destinationApp: {
      name: "Call Intelligence Hub",
      type: "Telephony & Audio Ledger",
      windowTitle: "telephony.tharo.tech/calls/deepak-patel",
      metrics: [
        { label: "Call Audio", value: "Archived HD" },
        { label: "Summary Status", value: "AI Extracted" },
        { label: "Profile Link", value: "Attached to Client" },
      ],
      records: [
        {
          key: "call-1",
          primary: "Full Call Recording Archived",
          secondary: "Two-way call audio saved in customer timeline for quality and audit review",
          tag: "Audio Saved",
          status: "verified",
        },
        {
          key: "call-2",
          primary: "Key Commitments Summarized",
          secondary: "Customer requested 500 units by Friday with 30-day payment terms",
          tag: "AI Summary",
          status: "synced",
        },
        {
          key: "call-3",
          primary: "Follow-Up Action Assigned",
          secondary: "Task assigned to logistics coordinator to verify dispatch timeline",
          tag: "Task Assigned",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Staff place calls from the web app using integrated company telephony.",
        "2. AI generates clear bulleted takeaways and promises made right after hanging up.",
        "3. Anyone who speaks to that customer next reads previous conversation notes instantly.",
      ],
    },
  },
  {
    id: "role-security",
    category: "platform",
    tabLabel: "Roles & Security",
    iconName: "lock",
    tagline: "Locks down sensitive financial margins and prevents staff accounts from downloading client contact lists.",
    contextCard: {
      "kind": "security",
      "headerLabel": "Security & Permission Enforcement",
      "timestamp": "01:20 PM",
      "title": "Front Desk Staff Terminal",
      "subtitle": "Security Violation Prevented",
      "highlightBadge": "Export Blocked",
      "quote": "Staff account attempted to download entire customer phone contact list as a CSV file.",
      "statusBadge": "Data Download Denied & Flagged to Admin",
      "details": [
            {
                  "label": "Blocked Action",
                  "value": "CSV Customer List Download"
            },
            {
                  "label": "Audit Log",
                  "value": "Timestamped to Owner Console"
            }
      ]
},
    impact: {
      "badge": "Data Asset Protection",
      "heading": "Prevent Client List Theft",
      "summary": "Locks down sensitive financial margins and prevents staff accounts from downloading client contact lists.",
      "tags": [
            "Anti-Theft Protection",
            "Owners-Only Margins",
            "Full Audit Trail"
      ]
},
    previewUrl: "security.tharo.tech/roles",
    screenshots: [
      {
        label: "Roles & Permissions",
        src: "/images/web content/rolebased.png",
        alt: "Role-Based Access Control and Security Policies",
        sublabel: "Security Matrix",
      },
    ],
    trigger: {
      badge: "Access Control Gate",
      sender: "Front Desk Staff Login",
      role: "Security Check",
      time: "01:20 PM",
      message: "Staff account attempted to download entire customer phone contact list as a CSV file.",
    },
    bridge: {
      label: "Audit Gate",
      latency: "Protected",
    },
    destinationApp: {
      name: "Security & Audit Desk",
      type: "Role Permission Controls",
      windowTitle: "security.tharo.tech/audit/export-blocked",
      metrics: [
        { label: "Customer Contact List", value: "Download Blocked" },
        { label: "Financial Revenue Data", value: "Owners Only" },
        { label: "Audit Trail", value: "Timestamp Logged" },
      ],
      records: [
        {
          key: "sec-1",
          primary: "Customer List Export Denied",
          secondary: "Front desk accounts cannot export customer phone numbers or client directories",
          tag: "Export Blocked",
          status: "verified",
        },
        {
          key: "sec-2",
          primary: "Revenue & Margin Reports Hidden",
          secondary: "Bank details, profit totals, and margins stay visible exclusively to company owners",
          tag: "Owners Only",
          status: "synced",
        },
        {
          key: "sec-3",
          primary: "Audit Log Entry Recorded",
          secondary: "Every login, booking change, and export attempt recorded with employee name",
          tag: "Logged to Admin",
          status: "active",
        },
      ],
      howItWorks: [
        "1. Assign distinct roles (Reception, Stylist, Sales Rep, Manager, Owner) to every team member.",
        "2. Restricts customer database downloads so employees cannot walk away with client contact lists.",
        "3. Keeps daily profit margins, total turnover, and bank records strictly private to business owners.",
      ],
    },
  },
];
