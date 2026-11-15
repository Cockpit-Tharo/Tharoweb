export interface ScreenshotItem {
  title: string;
  tabLabel: string;
  description: string;
  imageSrc?: string;
  badge?: string;
  highlights: string[];
}

export interface PipoRoleSpec {
  headline: string;
  overview: string;
  sampleQueries: { query: string; answerSummary: string }[];
  voiceCommands: { spokenText: string; executedAction: string; businessResult: string }[];
  autopilotFlow: { stage: string; action: string; outcome: string }[];
}

export interface LifecycleStage {
  stageNumber: string;
  stageTitle: string;
  trigger: string;
  erpAction: string;
  customerTouchpoint: string;
}

export interface DetailedCapability {
  title: string;
  category: string;
  description: string;
  specification: string;
}

export interface WhatsAppTemplateSpec {
  category: string;
  templateName: string;
  messagePreview: string;
  interactiveButtons: string[];
}

export interface SectorFaq {
  question: string;
  answer: string;
}

export interface Sector {
  id: string;
  name: string;
  iconName: string;
  shortDesc: string;
  title: string;
  titleItalic: string;
  subtitle: string;
  painPoints: string;
  whatWeBuild: string[];
  automationFlow: string[];
  copyBlock: string;
  featuredInNav?: boolean;
  badge?: string;
  pipoRole?: PipoRoleSpec;
  systemScreenshots?: ScreenshotItem[];
  operationalLifecycle?: LifecycleStage[];
  detailedCapabilities?: DetailedCapability[];
  whatsappTemplates?: WhatsAppTemplateSpec[];
  faqs?: SectorFaq[];
}

export const sectors: Sector[] = [
  {
    id: "dental",
    name: "Dental Clinics",
    iconName: "Stethoscope",
    shortDesc: "Odontogram charting, multi-doctor operatory schedules, WhatsApp treatment plans, and hygiene recall automation.",
    title: "Dental Clinics",
    titleItalic: "chair scheduling and recalls.",
    subtitle: "Turn chair bookings, patient records, and 6-month hygiene checkups into one synchronized workflow.",
    painPoints: "Patients skipping routine 6-month cleanings, uncollected balances across multi-stage procedures, missed surgical preparation guidelines, and front desk staff spending hours on manual phone calls.",
    whatWeBuild: [
      "Visual 32-tooth odontogram charting with tooth-level diagnosis and procedure logs",
      "Multi-doctor operatory chair scheduling with conflict guards",
      "Six-month hygiene and cleaning recall engine with automated WhatsApp booking prompts",
      "Digital delivery of pre-procedure fasting instructions and post-op care guidelines via PDF",
      "Itemized clinical billing, procedure POS, and GST invoice generation on WhatsApp",
      "Pipo AI copilot for natural language clinic queries and voice appointment booking"
    ],
    automationFlow: [
      "Patient booking: Immediate WhatsApp confirmation with doctor name, clinic map pin, and pre-visit guidelines PDF.",
      "Automated appointment reminders sent at 72 hours and 24 hours with one-tap confirm and reschedule buttons.",
      "Post-procedure checkout: Digital itemized invoice delivered to patient WhatsApp with post-op care instructions.",
      "Automated 6-month recall: Proactive message sent to re-engage patients for routine checkups and scaling.",
      "Payment balance reminders: Transparent installment notifications sent via official Meta utility templates."
    ],
    copyBlock: "A structured clinic operating system connecting 32-tooth odontogram records, doctor chairs, and patient WhatsApp chats to eliminate missed appointments and front-desk phone tag.",
    featuredInNav: true,
    systemScreenshots: [
      {
        title: "Visual Odontogram Clinical Chart",
        tabLabel: "Odontogram",
        description: "Interactive 32-tooth graphical chart. Record tooth-level conditions, planned treatments, completed crowns, and root canals with instant ledger sync.",
        imageSrc: "/images/system/dental/dental-odontogram.png",
        badge: "Live System View",
        highlights: [
          "FDI tooth notation with visual tooth surface mapping",
          "Color-coded procedure markers for decay, fillings, and implants",
          "One-click sync to patient billing ledger and treatment estimates"
        ]
      },
      {
        title: "Multi-Doctor Operatory Schedule",
        tabLabel: "Doctor Calendar",
        description: "Multi-chair daily time grid. View doctor schedules, procedure durations, and patient queue status across all operatory chairs.",
        imageSrc: "/images/system/dental/dental-appointments.png",
        badge: "Live System View",
        highlights: [
          "Chair allocation guard preventing double bookings",
          "Procedure duration buffers for complex surgeries",
          "Live patient arrival status synced from reception desk"
        ]
      },
      {
        title: "Patient Clinical History & Dossier",
        tabLabel: "Patient Records",
        description: "Comprehensive patient profile containing past clinical notes, radiographic files, WhatsApp conversation history, and outstanding invoices.",
        imageSrc: "/images/system/dental/dental-patient-chart.png",
        badge: "Live System View",
        highlights: [
          "Centralized treatment history across visits",
          "WhatsApp chat timeline logged directly inside the chart",
          "Secure diagnostic PDF attachments and consent records"
        ]
      },
      {
        title: "Clinical POS Checkout & GST Invoicing",
        tabLabel: "Billing & POS",
        description: "Itemized clinical billing terminal. Add procedures, apply insurance co-pays, calculate GST, and dispatch tax invoices to WhatsApp.",
        imageSrc: "/images/system/dental/dental-pos-billing.png",
        badge: "Live System View",
        highlights: [
          "Procedure code catalog with standard clinic rates",
          "Split payment support (cash, card, UPI, insurance)",
          "Automated WhatsApp digital invoice delivery upon checkout"
        ]
      },
      {
        title: "Clinic Operations & Performance Dashboard",
        tabLabel: "Clinic Dashboard",
        description: "Real-time overview of clinic daily revenue, patient footfall, active operatory chairs, and recall confirmation metrics.",
        imageSrc: "/images/system/dental/dental-dashboard.png",
        badge: "Live System View",
        highlights: [
          "Daily collection summary and pending treatment balances",
          "Chair utilization rate across consulting doctors",
          "Hygiene recall conversion metrics updated live"
        ]
      }
    ],
    pipoRole: {
      headline: "Pipo AI: The Dental Clinic Operations All-Rounder",
      overview: "Pipo AI handles front-desk chat reading, doctor voice commands, appointment booking, and clinic data analysis without requiring staff to navigate complex software menus.",
      sampleQueries: [
        {
          query: "What was weak and strong in our clinic operations this week?",
          answerSummary: "Hygiene recalls achieved a 68% confirmation rate across 42 patients. Operatory 1 ran at 91% capacity, while Operatory 3 had 35% idle time due to 3 last-minute cancellations on Wednesday."
        },
        {
          query: "Summarize pending treatment balances for orthodontic cases.",
          answerSummary: "Found ₹1,85,000 outstanding across 8 active multi-stage aligner cases. Next scheduled payment milestone falls due between the 15th and 20th of this month."
        }
      ],
      voiceCommands: [
        {
          spokenText: "Book Mrs. Sharma for root canal with Dr. Verma tomorrow at 4 PM in Chair 2.",
          executedAction: "Locks Operatory 2 calendar slot, tags Dr. Verma, updates patient record.",
          businessResult: "Saves reception staff 3 minutes of form typing; sends confirmation to patient instantly."
        },
        {
          spokenText: "Send post-op extraction care sheet to patient Amit Patel.",
          executedAction: "Pulls Meta-approved post-op template and dispatches clinical PDF on WhatsApp.",
          businessResult: "Delivers recovery guidelines right after chair checkout."
        }
      ],
      autopilotFlow: [
        {
          stage: "Auto-Read Inbound Chat",
          action: "Patient sends: 'Doctor, my lower tooth is hurting since yesterday, can I come tomorrow afternoon?'",
          outcome: "Pipo parses symptom (lower tooth pain), identifies Dr. Verma's open afternoon slots, and drafts reply."
        },
        {
          stage: "Ledger Verification",
          action: "Pipo checks Operatory 1 schedule for 45-minute consultation buffer.",
          outcome: "Confirms Chair 1 is available at 3:30 PM with zero doctor overlap."
        },
        {
          stage: "Pre-Filled Confirmation",
          action: "Pre-fills message for front-desk tap or sends automatically if autopilot is active.",
          outcome: "Patient receives booking confirmation with clinic location pin and parking guide."
        }
      ]
    },
    operationalLifecycle: [
      {
        stageNumber: "01",
        stageTitle: "Inbound Request or Ad Click",
        trigger: "Patient clicks website button or messages clinic WhatsApp directly.",
        erpAction: "Pipo AI checks patient mobile number against clinic database and surfaces past treatment history.",
        customerTouchpoint: "Patient receives instant greeting with doctor availability and procedure menu."
      },
      {
        stageNumber: "02",
        stageTitle: "Slot Reservation & Chair Lock",
        trigger: "Patient selects preferred slot or front-desk confirms consultation.",
        erpAction: "Operatory chair and doctor calendar lock in PostgreSQL database; calendar conflict guard prevents overlaps.",
        customerTouchpoint: "WhatsApp confirmation sent with Google Maps pin, calendar invite, and pre-visit fasting instructions."
      },
      {
        stageNumber: "03",
        stageTitle: "Clinical Procedure & Billing",
        trigger: "Doctor updates 32-tooth odontogram chart during chair consultation.",
        erpAction: "Procedure codes map to clinical ledger; POS terminal calculates GST and payment splits.",
        customerTouchpoint: "Itemized tax invoice and doctor post-op recovery notes delivered to patient WhatsApp."
      },
      {
        stageNumber: "04",
        stageTitle: "Automated 6-Month Hygiene Recall",
        trigger: "180 days elapse following completed treatment or routine cleaning.",
        erpAction: "System queries recall registry and flags eligible patients for preventive care.",
        customerTouchpoint: "Gentle WhatsApp reminder sent with 1-tap slot selection to book preventive scaling."
      }
    ],
    detailedCapabilities: [
      {
        title: "32-Tooth Visual Odontogram",
        category: "Clinical Charting",
        description: "Interactive tooth-level visual chart using FDI international notation. Mark restorative treatments, endodontics, prosthodontics, and periodontics directly.",
        specification: "Real-time sync to billing ledger; supports multi-visit procedure history."
      },
      {
        title: "Operatory Conflict Protection",
        category: "Scheduling",
        description: "Multi-chair doctor calendar with automated buffers for sterilization, anesthesia onset, and surgical clean-down.",
        specification: "Prevents double-booking across visiting specialists and consulting rooms."
      },
      {
        title: "Prescription & Lab PDF Delivery",
        category: "Patient Communication",
        description: "Generate digitally signed prescription sheets, diagnostic x-ray files, and lab work summaries delivered directly to WhatsApp.",
        specification: "Secure HTTPS delivery using official Meta utility message templates."
      },
      {
        title: "Preventive Hygiene Recalls",
        category: "Retention Engine",
        description: "Automated recall engine targeting patients 6 months post-cleaning to maintain dental wellness and steady clinic footfall.",
        specification: "Custom recall cadences for routine scaling, ortho reviews, and implant checks."
      },
      {
        title: "Multi-Stage Treatment Tracking",
        category: "Financial Control",
        description: "Manage complex multi-appointment treatments (implants, full-mouth rehabilitation, aligners) with stage-by-stage billing balances.",
        specification: "Automated installment reminders sent prior to next procedure phase."
      },
      {
        title: "Clinic Inventory & Consumables",
        category: "Back-Office ERP",
        description: "Track clinic stock of composites, burs, anesthetics, and implants. Low-stock notifications alert staff before items deplete.",
        specification: "Auto-deduct consumables based on completed odontogram procedure codes."
      }
    ],
    whatsappTemplates: [
      {
        category: "Appointment Confirmation",
        templateName: "dental_booking_confirm_v2",
        messagePreview: "Hello {{patient_name}}, your dental consultation with {{doctor_name}} is confirmed for {{date_time}} at {{clinic_branch}}. Please find your pre-visit guidelines attached.",
        interactiveButtons: ["View Clinic Location", "Reschedule Slot"]
      },
      {
        category: "Post-Op Care & Invoice",
        templateName: "dental_post_care_receipt",
        messagePreview: "Dear {{patient_name}}, thank you for visiting today. Your itemized receipt #{{invoice_id}} is ready. Please review the attached post-op recovery care sheet.",
        interactiveButtons: ["Download Bill PDF", "Contact Doctor Desk"]
      },
      {
        category: "6-Month Hygiene Recall",
        templateName: "dental_routine_recall_v1",
        messagePreview: "Hello {{patient_name}}, it has been 6 months since your last dental cleaning. Regular scaling protects your enamel and gums. Would you like to schedule your routine checkup this week?",
        interactiveButtons: ["Book Checkup", "Remind Me Next Week"]
      }
    ],
    faqs: [
      {
        question: "Can we migrate our existing patient records into the system?",
        answer: "Yes. We provide CSV and database migration tools to import patient demographics, past appointment histories, and outstanding ledger balances from your current dental software."
      },
      {
        question: "How does the system prevent doctor double-booking across chairs?",
        answer: "Every doctor and operatory chair is modeled as a distinct resource in the PostgreSQL database. When a slot is confirmed via WhatsApp or reception desk, both the doctor and chair are locked simultaneously."
      },
      {
        question: "Are WhatsApp messages sent using official Meta APIs?",
        answer: "Yes. All communication runs via official Meta Cloud APIs using pre-approved utility and service templates, ensuring high delivery rates and zero risk of phone number blocking."
      },
      {
        question: "Can Pipo AI understand doctor voice notes in Hinglish?",
        answer: "Yes. Pipo AI is tuned for Indian healthcare environments and reliably transcribes voice commands spoken in Hinglish, Hindi, and English."
      }
    ]
  },
  {
    id: "salons",
    name: "Salons & Luxury Spas",
    iconName: "Scissors",
    shortDesc: "Stylist chair allocation, service duration buffers, automated reminder pings with deposit links, and retail POS.",
    title: "Salons & Luxury Spas",
    titleItalic: "stylist schedules and deposits.",
    subtitle: "Fill stylist chairs, eliminate costly no-shows with advance deposits, and sync retail product stock.",
    painPoints: "Last-minute no-shows costing 20% to 30% of daily revenue, stylist scheduling overlaps during peak weekends, chaotic commission calculations, and manual phone reminder calls.",
    whatWeBuild: [
      "Stylist column schedule grid with color-coded service duration blocks",
      "Automated 24-hour and 2-hour WhatsApp reminder pings with deposit links",
      "Point-of-sale checkout terminal with automated stylist commission splits",
      "Multi-tier VIP loyalty points ledger and automated win-back broadcasts",
      "Backbar consumable tracking and retail product shelf management",
      "Pipo AI operations copilot for quick spoken bookings and daily revenue summaries"
    ],
    automationFlow: [
      "Client books via WhatsApp or online link: Instant confirmation with stylist name, slot time, and salon location pin.",
      "Automated reminder pings sent at 24 hours and 2 hours with Confirm and Reschedule buttons.",
      "Post-service digital checkout: Itemized bill and Google review prompt delivered via WhatsApp.",
      "Automated win-back sequence sent at 30 and 60 days of client inactivity with personalized loyalty perks.",
      "Birthday and anniversary celebration messages with customized styling offers."
    ],
    copyBlock: "Stylist calendars, appointment confirmations, commission calculations, and retail inventory managed under one unified operating system.",
    featuredInNav: true,
    systemScreenshots: [
      {
        title: "Stylist Column Roster & Daily Schedule",
        tabLabel: "Stylist Grid",
        description: "Multi-column schedule grid. View stylist availability, in-progress treatments, service duration buffers, and chair occupancy in real time.",
        imageSrc: "/images/system/salon/salon-schedule-grid.png",
        badge: "Live System View",
        highlights: [
          "Drag-and-drop appointment slot adjustment",
          "Automated buffer times for chemical hair treatments and spa rituals",
          "Visual status tags for Confirmed, In Chair, and Completed"
        ]
      },
      {
        title: "Point-of-Sale Register & Checkout",
        tabLabel: "POS Checkout",
        description: "Fast register checkout terminal. Add haircut services, retail product add-ons, calculate stylist commissions, and dispatch digital WhatsApp receipts.",
        imageSrc: "/images/system/salon/salon-pos-checkout.png",
        badge: "Live System View",
        highlights: [
          "Split tender payment processing (cash, card, UPI, points)",
          "Automated stylist commission split calculation per line item",
          "Digital invoice dispatch to customer WhatsApp upon payment"
        ]
      },
      {
        title: "Service Catalog & Treatment Pricing",
        tabLabel: "Service Menu",
        description: "Master service menu. Configure hair styling, skin therapies, nail art, and bridal packages with exact duration buffers and pricing tiers.",
        imageSrc: "/images/system/salon/salon-service-menu.png",
        badge: "Live System View",
        highlights: [
          "Category breakdown: Hair, Skin, Spa, Nails, Grooming",
          "Stylist skill level tiering (Senior Stylist vs. Master Director)",
          "Pre-requisite backbar consumable tags per treatment"
        ]
      },
      {
        title: "VIP Loyalty Program & Retention Ledger",
        tabLabel: "Loyalty Tiers",
        description: "Customer loyalty program manager. Track client visit frequency, reward point balances, and automated re-engagement triggers.",
        imageSrc: "/images/system/salon/salon-loyalty-tiers.png",
        badge: "Live System View",
        highlights: [
          "Tiered client profiles: Silver, Gold, Platinum, VIP",
          "Automated points redemption during POS checkout",
          "Scheduled win-back triggers for inactive clients at 45 days"
        ]
      },
      {
        title: "Salon Daily Operations & Revenue Hub",
        tabLabel: "Salon Dashboard",
        description: "Executive metrics dashboard. Monitor daily turnover, occupied chairs, retail product sales, and stylist utilization rates.",
        imageSrc: "/images/system/salon/salon-dashboard.png",
        badge: "Live System View",
        highlights: [
          "Real-time revenue counter split by services and retail products",
          "Stylist commission accrual ledger for daily closing",
          "Walk-in waitlist queue monitor with estimated chair wait times"
        ]
      }
    ],
    pipoRole: {
      headline: "Pipo AI: The Salon Operations All-Rounder",
      overview: "Pipo AI acts as your front-desk manager and operational analyst, letting staff speak bookings, answering business questions, and auto-replying to WhatsApp inquiries.",
      sampleQueries: [
        {
          query: "What was weak and strong in our salon numbers this weekend?",
          answerSummary: "Weekend service revenue reached ₹1,94,000 led by bridal packages and hair spa. Retail product sales were weak at only ₹12,000 across 3 items. Stylist Kabir had 34% idle chair time on Sunday."
        },
        {
          query: "Which clients haven't visited in 45 days and are due for hair color touch-ups?",
          answerSummary: "Identified 28 VIP clients with root touch-up intervals exceeding 45 days. Automated win-back draft messages are ready for dispatch."
        }
      ],
      voiceCommands: [
        {
          spokenText: "Book balayage and blow dry for Riya with Pooja on Saturday at 2 PM with 30-minute buffer.",
          executedAction: "Reserves Pooja's column from 2:00 PM to 4:30 PM; locks wash basin and styling chair.",
          businessResult: "Eliminates overlapping bookings; triggers WhatsApp confirmation link with advance deposit option."
        },
        {
          spokenText: "Apply 20% loyalty discount on invoice for Mrs. Kapoor.",
          executedAction: "Validates VIP tier in database, deducts loyalty points, updates checkout total.",
          businessResult: "Instant point lookup and GST invoice generation at the register."
        }
      ],
      autopilotFlow: [
        {
          stage: "Auto-Read Inbound Chat",
          action: "Client texts: 'Hey, does Rahul have an open slot for a haircut this evening around 6?'",
          outcome: "Pipo parses stylist preference (Rahul), service (haircut), and desired time window."
        },
        {
          stage: "Schedule Check",
          action: "Pipo checks Rahul's column in the schedule database for an open 45-minute block.",
          outcome: "Finds Rahul is free from 6:15 PM to 7:00 PM."
        },
        {
          stage: "Smart Reply or Hold",
          action: "Sends instant WhatsApp response: 'Rahul has a 6:15 PM slot available today. Shall I lock this chair for you?'",
          outcome: "Client taps 'Confirm Slot'; calendar updates and appointment card appears green on salon screen."
        }
      ]
    },
    operationalLifecycle: [
      {
        stageNumber: "01",
        stageTitle: "Inbound Booking Request",
        trigger: "Client messages salon WhatsApp or clicks Instagram booking link.",
        erpAction: "Pipo AI checks stylist roster and chair availability in real time.",
        customerTouchpoint: "Client receives interactive WhatsApp menu to pick stylist, service, and time."
      },
      {
        stageNumber: "02",
        stageTitle: "Slot Reservation & Deposit Ping",
        trigger: "Client confirms preferred slot and stylist.",
        erpAction: "Stylist column is locked; calendar buffer is appended for sanitization and consultation.",
        customerTouchpoint: "Confirmation sent with salon location pin, styling preparation notes, and deposit link."
      },
      {
        stageNumber: "03",
        stageTitle: "Automated Reminder Cadence",
        trigger: "Countdown reaches 24 hours and 2 hours before scheduled slot.",
        erpAction: "System checks appointment status; flags unconfirmed slots for reception review.",
        customerTouchpoint: "WhatsApp reminder with 1-tap 'Confirm' and 'Reschedule' interactive buttons."
      },
      {
        stageNumber: "04",
        stageTitle: "Checkout, Review & Win-Back",
        trigger: "Stylist finishes service; register completes checkout.",
        erpAction: "Commission split logs to stylist ledger; retail inventory decrements automatically.",
        customerTouchpoint: "Itemized WhatsApp receipt arrives with tracked Google review link and loyalty point update."
      }
    ],
    detailedCapabilities: [
      {
        title: "Stylist Column Roster",
        category: "Scheduling",
        description: "Visual multi-column schedule grid showing real-time chair allocations, stylist breaks, and appointment status.",
        specification: "Supports multi-service chain bookings with automatic duration buffers."
      },
      {
        title: "Deposit & No-Show Shield",
        category: "Revenue Protection",
        description: "Automated advance deposit links sent for high-ticket services (bridal, keratin, balayage) to eliminate no-shows.",
        specification: "Direct UPI payment gateway integration inside WhatsApp."
      },
      {
        title: "Automated Stylist Commissions",
        category: "Payroll & HR",
        description: "Automatically calculate stylist commission percentages based on service category and retail product upsells.",
        specification: "Daily, weekly, and monthly closing reports generated with one click."
      },
      {
        title: "Backbar & Retail Inventory",
        category: "Stock Control",
        description: "Track separate ledgers for professional backbar supplies (developers, shampoos, spa oils) and retail shelf stock.",
        specification: "Automated reorder alerts when inventory dips below safety thresholds."
      },
      {
        title: "Tiered VIP Loyalty Engine",
        category: "Retention Engine",
        description: "Award loyalty points per rupee spent; configure automated tier upgrades and VIP birthday celebration broadcasts.",
        specification: "Seamless points redemption at the register without coupons or paper cards."
      },
      {
        title: "45-Day Win-Back Workflows",
        category: "Marketing Automation",
        description: "Identify clients who have not booked within their expected revisit frequency and trigger personalized WhatsApp invites.",
        specification: "Dynamic variable replacement with preferred stylist name and past services."
      }
    ],
    whatsappTemplates: [
      {
        category: "Booking Confirmation",
        templateName: "salon_booking_confirm_v2",
        messagePreview: "Hi {{client_name}}, your appointment with {{stylist_name}} is confirmed for {{service_name}} on {{date_time}} at {{salon_location}}. We have reserved your chair.",
        interactiveButtons: ["View Salon Location", "Reschedule Slot"]
      },
      {
        category: "2-Hour Reminder",
        templateName: "salon_2hr_reminder_v1",
        messagePreview: "Hello {{client_name}}, your styling session with {{stylist_name}} begins in 2 hours at {{salon_branch}}. Please tap below to confirm your arrival.",
        interactiveButtons: ["Confirm Arrival", "Running 10 Mins Late"]
      },
      {
        category: "Post-Service Receipt & Review",
        templateName: "salon_digital_receipt_v1",
        messagePreview: "Thank you for visiting {{salon_name}}! Your digital receipt #{{invoice_id}} for {{total_amount}} is attached. You earned {{points_earned}} loyalty points today. We would love your feedback!",
        interactiveButtons: ["View Invoice PDF", "Rate Your Stylist"]
      }
    ],
    faqs: [
      {
        question: "Can clients book appointments directly through WhatsApp?",
        answer: "Yes. Clients can browse the service menu, select their preferred stylist, and pick an available time slot directly inside WhatsApp without downloading third-party apps."
      },
      {
        question: "How are stylist commissions calculated?",
        answer: "You can configure individual commission tiers for each stylist, specifying different percentages for hair services, skin treatments, and retail product sales. The system computes payouts automatically upon POS checkout."
      },
      {
        question: "Does the system handle walk-in customers and waitlists?",
        answer: "Yes. The salon dashboard includes a real-time waitlist manager that tracks estimated wait times, chair turnover, and automatically pings walk-in clients on WhatsApp when their chair is ready."
      },
      {
        question: "Can we manage multiple salon branches under one account?",
        answer: "Yes. The multi-tenant architecture lets business owners oversee multiple branch locations, compare revenue metrics, and maintain unified customer profiles across all outlets."
      }
    ]
  },
  {
    id: "events",
    name: "Events & RSVPs",
    iconName: "Calendar",
    badge: "Enterprise Platform",
    shortDesc: "Automated guest invitations, 1-tap WhatsApp RSVPs, cryptographically signed QR entry passes, and live gate scanning.",
    title: "Events & RSVPs",
    titleItalic: "1-tap guest confirmations.",
    subtitle: "Send branded invites, collect 1-tap WhatsApp RSVPs, and issue signed QR passes for fast gate entry.",
    painPoints: "Unopened email invitations, delayed headcount confirmations, fraudulent forwarded passes, chaotic check-in lines at the gate, and manual spreadsheet reconciliations.",
    whatWeBuild: [
      "Dynamic WhatsApp invitations with interactive 1-tap RSVP confirmation buttons",
      "Cryptographically signed digital QR code entry passes delivered instantly to confirmed attendees",
      "Real-time guest headcount dashboard synchronized with mobile gate scanner apps",
      "Automated event-day reminders with venue navigation pins, parking instructions, and dress code notes",
      "Post-event thank-you broadcasts with exclusive photo gallery access links",
      "Pipo AI operational copilot for live attendee queries and instantaneous headcount status"
    ],
    automationFlow: [
      "Invitation dispatch: Interactive WhatsApp invitation sent to guest list with 'Attending' and 'Decline' buttons.",
      "Instant pass generation: Guest confirms attendance; system creates a personalized VIP entry pass with secure QR code.",
      "Event eve reminder: Automated reminder sent 24 hours prior with venue access directions and event schedule.",
      "Gate check-in: Security staff scan QR pass using mobile camera; check-in validates immediately with live screen update.",
      "Post-event wrap-up: Thank-you message sent with links to photo highlights and speaker presentation decks."
    ],
    copyBlock: "Eliminate low turnout and check-in bottlenecks with automated WhatsApp RSVPs, secure digital QR passes, and live attendance tracking.",
    featuredInNav: true,
    systemScreenshots: [
      {
        title: "Live Guest Roster & Headcount Console",
        tabLabel: "Guest Console",
        description: "Real-time attendee control center. Monitor confirmed RSVPs, VIP table allocations, gate arrival velocity, and check-in percentages.",
        imageSrc: "/images/web content/booking.png",
        badge: "Live System View",
        highlights: [
          "Real-time headcount tracker by ticket tier (VIP, Speaker, Delegate)",
          "Live gate arrival feed showing attendee names as they cross security",
          "One-click broadcast trigger for schedule updates or emergency alerts"
        ]
      },
      {
        title: "Cryptographic QR Pass & Ticket Engine",
        tabLabel: "QR Pass Engine",
        description: "Dynamic QR pass delivery system. Generate unique, tamper-proof entry passes delivered directly to attendee WhatsApp.",
        imageSrc: "/images/web content/automates.png",
        badge: "Live System View",
        highlights: [
          "Unique digital token per pass preventing ticket forwarding fraud",
          "Pass details show seat assignment, food preferences, and gate entry number",
          "Instant offline-capable verification on staff mobile scanning devices"
        ]
      },
      {
        title: "Event Calendar & Session Scheduler",
        tabLabel: "Session Schedule",
        description: "Multi-track agenda and speaker session schedule. Synchronize time blocks and push real-time notifications to registered guests.",
        imageSrc: "/images/web content/calendar.png",
        badge: "Live System View",
        highlights: [
          "Multi-stage track coordination with speaker profiles",
          "Push notifications sent 15 minutes before high-priority sessions",
          "Audience Q&A submission channel directly through WhatsApp"
        ]
      }
    ],
    pipoRole: {
      headline: "Pipo AI: The Event Operations All-Rounder",
      overview: "Pipo AI manages guest list communications, delivers real-time attendance analytics to event directors, and answers attendee logistical questions automatically.",
      sampleQueries: [
        {
          query: "What is our current RSVP confirmation ratio across ticket categories?",
          answerSummary: "VIP Gold passes have a 92% confirmation rate (184/200). General Delegate passes stand at 76% (380/500). 136 invited contacts have not yet tapped an RSVP response."
        },
        {
          query: "Summarize gate check-in pace during the opening hour.",
          answerSummary: "412 guests checked in between 6:00 PM and 7:00 PM across 4 gates. Gate 2 processed the highest share with rapid QR verification."
        }
      ],
      voiceCommands: [
        {
          spokenText: "Generate 25 VIP passes for keynote speakers and send via WhatsApp with gala dinner invite.",
          executedAction: "Generates cryptographic VIP tokens, formats personalized passes, and triggers dispatch.",
          businessResult: "Generated and delivered to every speaker without manual badge exports."
        },
        {
          spokenText: "Broadcast parking area update to all confirmed attendees.",
          executedAction: "Pushes emergency parking annex directions to confirmed guest list.",
          businessResult: "Reaches all confirmed attendees directly inside WhatsApp."
        }
      ],
      autopilotFlow: [
        {
          stage: "Inbound Guest Inquiry",
          action: "Attendee asks on WhatsApp: 'Where do I park for the summit, and what time does the keynote start?'",
          outcome: "Pipo identifies attendee record, pulls the venue parking PDF, and replies automatically."
        },
        {
          stage: "Guest Headcount Sync",
          action: "Attendee taps 'Attending +1' in chat.",
          outcome: "System reserves 2 seats in the database and dispatches two distinct QR passes instantly."
        }
      ]
    },
    operationalLifecycle: [
      {
        stageNumber: "01",
        stageTitle: "Invitation & RSVP Ingestion",
        trigger: "Guest list imported into system or attendee registers on event landing page.",
        erpAction: "System creates unique attendee token and queues personalized WhatsApp invitation.",
        customerTouchpoint: "Guest receives official invitation with interactive 'Attending' and 'Decline' buttons."
      },
      {
        stageNumber: "02",
        stageTitle: "Pass Generation & Token Lock",
        trigger: "Guest taps 'Attending' on WhatsApp.",
        erpAction: "PostgreSQL assigns seat/table number and generates cryptographically signed QR pass.",
        customerTouchpoint: "Personalized VIP digital pass delivered to WhatsApp with calendar invite and itinerary."
      },
      {
        stageNumber: "03",
        stageTitle: "Live Gate Check-In & Scanner Sync",
        trigger: "Attendee presents QR pass at venue security checkpoint.",
        erpAction: "Scanner app validates token against database immediately and marks attendee Checked-In.",
        customerTouchpoint: "Gate screen turns green; attendee receives welcome note with Wi-Fi credentials."
      },
      {
        stageNumber: "04",
        stageTitle: "Post-Event Content & Feedback",
        trigger: "Event schedule concludes.",
        erpAction: "System aggregates attendance metrics and triggers post-event communication flow.",
        customerTouchpoint: "Attendee receives thank-you message with private photo gallery link and feedback survey."
      }
    ],
    detailedCapabilities: [
      {
        title: "1-Tap Interactive RSVPs",
        category: "Guest Management",
        description: "Official Meta interactive buttons allowing recipients to confirm or decline attendance in a single tap without filling web forms.",
        specification: "Real-time webhook updates the event database synchronously."
      },
      {
        title: "Signed Dynamic QR Passes",
        category: "Security & Access",
        description: "Cryptographically signed QR tokens generated per attendee. Prevents unauthorized screenshot sharing and duplicate entries.",
        specification: "Offline scanning support with local database caching on staff devices."
      },
      {
        title: "Fast Gate Scanner App",
        category: "Venue Operations",
        description: "Dedicated mobile scanning interface turning any smartphone camera into an enterprise access control scanner.",
        specification: "Supports multi-gate synchronization across cellular and local Wi-Fi networks."
      },
      {
        title: "Automated Itinerary Broadcasts",
        category: "Event Logistics",
        description: "Scheduled WhatsApp notifications sharing venue location pins, parking updates, keynote alerts, and networking schedules.",
        specification: "Audience segmentation by ticket tier (VIP, Speaker, General Delegate)."
      },
      {
        title: "Multi-Track Agenda Coordination",
        category: "Session Management",
        description: "Manage multiple halls, breakout rooms, and speaker sessions with automated reminders sent to registered participants.",
        specification: "Dynamic session capacity enforcement preventing hall overcrowding."
      },
      {
        title: "Post-Event Gallery & Survey Hub",
        category: "Audience Engagement",
        description: "Deliver event photos, presentation slide downloads, and Net Promoter Score surveys directly to attendees on WhatsApp.",
        specification: "High 60%+ response rates compared to standard email surveys."
      }
    ],
    whatsappTemplates: [
      {
        category: "Event Invitation",
        templateName: "event_vip_invitation_v2",
        messagePreview: "Dear {{guest_name}}, you are cordially invited to {{event_name}} on {{event_date}} at {{venue_name}}. Please confirm your attendance below.",
        interactiveButtons: ["Attending", "Decline Invitation"]
      },
      {
        category: "Entry Pass Delivery",
        templateName: "event_qr_pass_v1",
        messagePreview: "Welcome, {{guest_name}}! Here is your official VIP entry pass for {{event_name}}. Please present this QR code at Gate {{gate_number}} for seamless entry.",
        interactiveButtons: ["View Venue Directions", "Event Schedule"]
      },
      {
        category: "Day-of-Event Reminder",
        templateName: "event_day_reminder_v1",
        messagePreview: "Good morning {{guest_name}}, doors for {{event_name}} open at {{door_time}}. Valet parking is available at the main porch. We look forward to welcoming you.",
        interactiveButtons: ["Open Venue Map", "Contact Helpdesk"]
      }
    ],
    faqs: [
      {
        question: "Can guests forward their QR pass to other people?",
        answer: "Every QR code is cryptographically signed and tied to a unique guest token in the central database. Once scanned at the gate, the pass is invalidated for subsequent entries, preventing fraud."
      },
      {
        question: "What happens if there is poor mobile internet at the venue?",
        answer: "The staff scanner application features an offline sync mode that caches the guest database locally on scanning devices, allowing instant check-in even during total network outages."
      },
      {
        question: "How do we handle plus-ones and group bookings?",
        answer: "The RSVP flow supports dynamic plus-one prompts, collecting the secondary guest's name and generating a distinct companion pass sent to the primary contact."
      },
      {
        question: "Can we send urgent schedule announcements to attendees during the event?",
        answer: "Yes. The event console allows organizers to broadcast real-time WhatsApp notifications to all checked-in attendees immediately."
      }
    ]
  },
  {
    id: "real-estate-developers",
    name: "Real Estate Developers",
    iconName: "Building2",
    badge: "Enterprise Master Suite",
    shortDesc: "Master project tower inventory, automated site-visit slot booking, floor plan delivery, and escrow milestone demand notices.",
    title: "Real Estate Developers",
    titleItalic: "lead to site visit.",
    subtitle: "Send brochures on WhatsApp, book site visits with sales managers, and track tower inventory live.",
    painPoints: "High lead drop-off between portal inquiry and site visit, sales managers losing track of prospect follow-ups, delayed payment collections across construction milestones, and untracked brochure downloads.",
    whatWeBuild: [
      "Tower inventory ledger tracking unit availability across towers and phases",
      "Site-visit booking linked directly to sales manager calendars",
      "Instant WhatsApp delivery of floor plans, brochures, and price sheets",
      "Construction milestone demand notices sent with bank escrow details",
      "Direct portal and ad lead ingestion within the 72-hour free messaging window",
      "Pipo voice copilot for quick unit availability lookups and sales updates"
    ],
    automationFlow: [
      "Inbound buyer inquiry: Immediate WhatsApp delivery of project brochure, video walkthrough, and 2BHK/3BHK floor plans.",
      "Site-visit scheduling: Buyer selects preferred date and time; system assigns dedicated sales manager and sends location pin.",
      "Visit confirmation & reminder: Automated 24-hour and 2-hour reminders sent with site directions and sales executive contact.",
      "Post-visit feedback & token follow-up: Automated survey captures buyer interest; flags hot prospects for leadership attention.",
      "Construction milestone notice: Demand letter with bank escrow details and progress photos sent on WhatsApp upon slab completion."
    ],
    copyBlock: "Tower inventory, site-visit calendar locks, interactive brochure delivery, and milestone payment notices managed in one unified operational core.",
    featuredInNav: true,
    systemScreenshots: [
      {
        title: "Master Project & Tower Inventory Ledger",
        tabLabel: "Tower Inventory",
        description: "Multi-tower unit grid. Track unit availability (Available, Blocked, Booked, Registered), carpet areas, floor rise pricing, and facing directions in real time.",
        imageSrc: "/images/web content/inventorys.png",
        badge: "Live System View",
        highlights: [
          "Real-time unit availability grid across all project towers",
          "One-click unit hold with automated token payment timer",
          "Automated pricing calculation including floor rise and club charges"
        ]
      },
      {
        title: "Site-Visit Scheduling & Sales Allocation",
        tabLabel: "Site Visits",
        description: "Site-visit management console. Coordinate executive assignments, site vehicle pickups, and visitor reception queues.",
        imageSrc: "/images/web content/booking.png",
        badge: "Live System View",
        highlights: [
          "Automated sales executive round-robin assignment",
          "Live site visit calendar with turn-up confirmation tags",
          "Integrated WhatsApp visit reminder and navigation pin dispatch"
        ]
      },
      {
        title: "Construction Milestone & Demand Dispatcher",
        tabLabel: "Milestone Billing",
        description: "RERA-compliant construction milestone tracker. Trigger automated payment demand notices with bank escrow details and engineer progress certificates.",
        imageSrc: "/images/web content/automates.png",
        badge: "Live System View",
        highlights: [
          "Slab completion milestones synced to buyer payment schedules",
          "Automated WhatsApp demand notice delivery with PDF attachments",
          "Bank escrow payment tracking and receipt generation"
        ]
      }
    ],
    pipoRole: {
      headline: "Pipo AI: The Real Estate Developer Operations All-Rounder",
      overview: "Pipo AI handles buyer inquiries, checks real-time unit availability, coordinates site visits, and analyzes sales pipeline health for developer leadership.",
      sampleQueries: [
        {
          query: "Summarize site visit conversions for Tower C this month.",
          answerSummary: "84 site visits were completed for Tower C this month. 22 token deposits were collected (26.2% conversion rate). 3BHK corner units accounted for 64% of total bookings."
        },
        {
          query: "What was weak in our sales pipeline this week?",
          answerSummary: "Weekend site-visit show-up rate dipped to 58% for Tower B leads originating from general digital channels. In contrast, WhatsApp-nurtured leads maintained an 84% show-up rate."
        }
      ],
      voiceCommands: [
        {
          spokenText: "Lock site visit for Tower B 3BHK unit 1402 with sales manager Vikram this Sunday at 11 AM.",
          executedAction: "Reserves sales executive Vikram's calendar, registers prospect, dispatches site visit pass.",
          businessResult: "Eliminates manual CRM typing; buyer receives Google Maps directions immediately."
        },
        {
          spokenText: "Trigger 12th floor slab completion demand notice to all Tower A Phase 1 buyers.",
          executedAction: "Filters Tower A Phase 1 customer ledger and queues formal RERA demand notices.",
          businessResult: "Dispatches personalized milestone notices with attached architect certificates across all Phase 1 buyers."
        }
      ],
      autopilotFlow: [
        {
          stage: "Inbound Buyer Message",
          action: "Buyer asks: 'Can you share the price list and floor plan for 3BHK units in Tower A?'",
          outcome: "Pipo parses configuration (3BHK) and project (Tower A), verifies current pricing sheet, and replies."
        },
        {
          stage: "Automated Collateral Dispatch",
          action: "Pipo sends high-res 3BHK floor plan PDF and current payment schedule via WhatsApp.",
          outcome: "Buyer reviews materials; Pipo surfaces interactive 'Book Site Visit' button."
        }
      ]
    },
    operationalLifecycle: [
      {
        stageNumber: "01",
        stageTitle: "Inbound Lead Ingestion & Qualification",
        trigger: "Buyer clicks website brochure link or reaches out via WhatsApp.",
        erpAction: "System creates buyer profile; Pipo AI checks budget, preferred configuration, and timeline.",
        customerTouchpoint: "Buyer receives interactive WhatsApp greeting with downloadable project brochure and video tour."
      },
      {
        stageNumber: "02",
        stageTitle: "Site-Visit Slot Reservation",
        trigger: "Buyer taps 'Book Site Visit' and selects convenient weekend slot.",
        erpAction: "Sales executive assigned via round-robin; calendar lock logged in developer CRM.",
        customerTouchpoint: "Confirmation sent with venue Google Maps pin, executive direct phone, and gate pass."
      },
      {
        stageNumber: "03",
        stageTitle: "Unit Selection & Token Hold",
        trigger: "Buyer chooses specific unit during site visit.",
        erpAction: "Unit status marked as 'Hold' in inventory ledger; token payment link generated.",
        customerTouchpoint: "Buyer receives formal unit reservation summary with provisional cost sheet on WhatsApp."
      },
      {
        stageNumber: "04",
        stageTitle: "Construction Milestone & Escrow Demands",
        trigger: "Project engineering team updates construction progress (e.g., 8th floor slab cast).",
        erpAction: "System queries buyer installment ledger and compiles demand notices with escrow details.",
        customerTouchpoint: "Buyer receives personalized milestone notice with progress photos and bank payment instructions."
      }
    ],
    detailedCapabilities: [
      {
        title: "Master Tower Inventory Grid",
        category: "Inventory Control",
        description: "Visual floor-by-floor unit matrix displaying live status (Available, Hold, Booked, Registered) with unit specs and pricing.",
        specification: "Real-time synchronization across on-site sales lounges and corporate offices."
      },
      {
        title: "Automated Site-Visit Booking",
        category: "Sales Coordination",
        description: "Coordinate buyer site visits with automated executive allocation, vehicle scheduling, and automated WhatsApp reminder pings.",
        specification: "Interactive calendar selector with real-time sales desk capacity checks."
      },
      {
        title: "Interactive Digital Collateral",
        category: "Collateral Delivery",
        description: "Deliver high-resolution brochures, floor plans, and drone construction videos directly inside WhatsApp without landing page friction.",
        specification: "Tracked PDF links measure reader engagement and page-by-page drop-offs."
      },
      {
        title: "RERA Milestone Demand Notices",
        category: "Financial Operations",
        description: "Automate formal construction milestone demand notices complete with engineer certificates, payment schedules, and escrow bank details.",
        specification: "Delivery receipts logged with audit-ready timestamps for regulatory compliance."
      },
      {
        title: "Sales Executive Collision Guard",
        category: "Team Coordination",
        description: "Enforce lead ownership rules across sales managers and channel partner teams, eliminating commission disputes and double contacting.",
        specification: "Automated lead lock tied to primary mobile phone number and national ID."
      },
      {
        title: "Light Ad & Channel Ingestion",
        category: "Lead Ingestion",
        description: "Seamlessly ingest inbound leads from Click-to-WhatsApp ads inside Meta's 72-hour free window into the qualification flow.",
        specification: "Real-time webhook integration passing UTM parameters directly to CRM."
      }
    ],
    whatsappTemplates: [
      {
        category: "Project Brochure Delivery",
        templateName: "re_brochure_delivery_v2",
        messagePreview: "Hello {{buyer_name}}, thank you for your interest in {{project_name}}. Please find attached our comprehensive brochure, master plan, and 3BHK unit layouts.",
        interactiveButtons: ["Book Site Visit", "Schedule Sales Call"]
      },
      {
        category: "Site-Visit Confirmation",
        templateName: "re_visit_confirm_v1",
        messagePreview: "Dear {{buyer_name}}, your site visit to {{project_name}} is confirmed for {{visit_date_time}}. Your relationship manager {{sales_manager}} will welcome you at the experience centre.",
        interactiveButtons: ["Open Site Location", "Reschedule Visit"]
      },
      {
        category: "Milestone Demand Notice",
        templateName: "re_milestone_demand_v1",
        messagePreview: "Dear {{buyer_name}}, we are pleased to inform you that the {{milestone_name}} for Tower {{tower_number}}, Unit {{unit_number}} has been successfully completed. Please find your demand notice attached.",
        interactiveButtons: ["Download Notice PDF", "View Escrow Account"]
      }
    ],
    faqs: [
      {
        question: "How does the system prevent two sales reps from promising the same unit?",
        answer: "The central inventory ledger uses database row-level locking. When a rep initiates a unit hold, the unit is temporarily locked across all sales terminals and channel partner portals until the token window expires."
      },
      {
        question: "Can we integrate the platform with Salesforce or LeadSquared?",
        answer: "Yes. Our platform provides native bidirectional webhooks that sync leads, site-visit notes, and booking statuses directly with Salesforce, LeadSquared, or custom ERP systems."
      },
      {
        question: "How are construction milestone demand notices delivered?",
        answer: "When your engineering team marks a milestone complete, the system generates itemized demand PDFs with attached architect certificates and sends them via official Meta utility templates to buyer WhatsApp numbers."
      },
      {
        question: "Can buyers schedule site visits without speaking to a call centre?",
        answer: "Yes. Buyers can pick their preferred date and morning or afternoon slot directly via interactive WhatsApp buttons, automatically booking the on-site sales manager."
      }
    ]
  },
  {
    id: "real-estate-brokers",
    name: "Real Estate Brokers",
    iconName: "Home",
    badge: "Broker & CP Network",
    shortDesc: "Multi-developer inventory catalog search, 1-tap WhatsApp brochure forwarding with custom branding, and co-broking commission split tracking.",
    title: "Real Estate Brokers",
    titleItalic: "inventory search and proposals.",
    subtitle: "Search multi-developer inventory, generate branded client proposals on WhatsApp, and track co-broking splits.",
    painPoints: "Scattered WhatsApp group listings, delayed responses to high-intent buyers, disputes over co-broking commission splits, and lost deals caused by outdated pricing sheets.",
    whatWeBuild: [
      "Multi-developer inventory search engine filtering by location, budget, and possession timeline",
      "One-tap WhatsApp property proposal builder with customized brokerage branding and contact details",
      "Co-broking deal collaboration workspace with automated commission split agreements",
      "Automated client requirement matching engine alerting brokers to matching new listings",
      "Shared brokerage team inbox preventing multiple agents from pitching the same prospect",
      "Pipo AI copilot for natural language inventory queries and instantaneous proposal drafting"
    ],
    automationFlow: [
      "Client inquiry: Buyer shares requirements on WhatsApp; Pipo AI extracts budget, location, and configuration.",
      "Inventory search: System queries available developer inventory and surfaces matching verified listings.",
      "Proposal delivery: Broker taps one button to dispatch a branded multi-property proposal with brochures on WhatsApp.",
      "Joint walkthrough: Broker schedules property walkthrough with developer sales desk directly through the portal.",
      "Deal closing: Commission split agreement executed between co-brokers; milestone disbursements tracked in system."
    ],
    copyBlock: "Multi-developer listings, client proposal generation, and co-broking commission split tracking unified in one modern brokerage platform.",
    featuredInNav: true,
    systemScreenshots: [
      {
        title: "Multi-Developer Inventory Search Engine",
        tabLabel: "Inventory Search",
        description: "Centralized property database. Search verified apartments, villas, and commercial spaces across approved developer projects with real-time pricing.",
        imageSrc: "/images/web content/inventorys.png",
        badge: "Live System View",
        highlights: [
          "Filter by locality, carpet area, budget tier, and RERA status",
          "Direct access to developer-approved broker commission percentages",
          "Instant availability status verifying unsold units before pitching"
        ]
      },
      {
        title: "Shared Brokerage Team Inbox & Collision Guard",
        tabLabel: "Team Inbox",
        description: "Multi-agent WhatsApp inbox. Assign buyer inquiries to brokerage consultants, leave private internal notes, and prevent double pitching.",
        imageSrc: "/images/web content/sharedinbox.png",
        badge: "Live System View",
        highlights: [
          "Single official brokerage WhatsApp number shared across all agents",
          "Private team notes and client requirement tagging",
          "Collision guard warning agents if a colleague is already in conversation"
        ]
      },
      {
        title: "Client Requirement Matching & Workflows",
        tabLabel: "Requirement Matching",
        description: "Automated buyer requirement engine. Match prospective buyers with new developer inventory drops and trigger curated WhatsApp proposals.",
        imageSrc: "/images/web content/automates.png",
        badge: "Live System View",
        highlights: [
          "Dynamic tag matching (e.g., 'Whitefield 3BHK 2Cr-2.5Cr')",
          "One-click proposal batching with branded cover sheets",
          "Client interaction timeline tracking brochure views and queries"
        ]
      }
    ],
    pipoRole: {
      headline: "Pipo AI: The Brokerage Operations All-Rounder",
      overview: "Pipo AI acts as your senior research analyst and client proposal creator, finding matching properties and drafting WhatsApp pitches automatically.",
      sampleQueries: [
        {
          query: "Find available 3BHK units under ₹2.5 Crore in Whitefield with ready possession.",
          answerSummary: "Found 8 available units across 3 verified developer projects with valid CP brokerage agreements. Highest commission tier is 2.5% at Prestige Park Grove."
        },
        {
          query: "What was weak and strong in our deal closures this quarter?",
          answerSummary: "Luxury residential closures were strong, averaging 21 days from inquiry to token. Commercial leasing was weak, with 4 deals stalled on security deposit terms."
        }
      ],
      voiceCommands: [
        {
          spokenText: "Forward Prestige Sanctuary villa brochure with our agency branding to client Rajiv on WhatsApp.",
          executedAction: "Generates custom co-branded cover sheet and delivers verified brochure to Rajiv.",
          businessResult: "Proposal lands on the client's WhatsApp while your broker is still on the phone."
        },
        {
          spokenText: "Log co-broking commission split of 50-50 with Skyline Realty for Villa 12.",
          executedAction: "Records formal co-broking split agreement in brokerage accounting ledger.",
          businessResult: "Prevents commission disputes at deal closure."
        }
      ],
      autopilotFlow: [
        {
          stage: "Inbound Buyer Message",
          action: "Client texts: 'Looking for a 4BHK penthouse near Indiranagar, budget around 6 Crores.'",
          outcome: "Pipo parses location (Indiranagar), typology (4BHK Penthouse), and budget (₹6 Cr)."
        },
        {
          stage: "Database Match",
          action: "Pipo scans brokerage inventory database for matching verified listings.",
          outcome: "Identifies 2 matching developer listings with valid CP tie-ups."
        },
        {
          stage: "Proposal Draft",
          action: "Pipo pre-fills proposal message with floor plans, pricing summary, and inspection booking link.",
          outcome: "Broker reviews and taps 'Send'; client receives structured property deck on WhatsApp."
        }
      ]
    },
    operationalLifecycle: [
      {
        stageNumber: "01",
        stageTitle: "Buyer Requirement Capture",
        trigger: "Prospective buyer contacts agency via WhatsApp or referral link.",
        erpAction: "Pipo AI logs client profile and parses budget, locality, and timeline preferences.",
        customerTouchpoint: "Client receives friendly welcome message confirming their property search criteria."
      },
      {
        stageNumber: "02",
        stageTitle: "Curated Proposal Generation",
        trigger: "Broker reviews matched listings and selects top recommendations.",
        erpAction: "System compiles co-branded PDF decks with unit specs, layout plans, and pricing.",
        customerTouchpoint: "Client receives high-polish property proposal directly on WhatsApp."
      },
      {
        stageNumber: "03",
        stageTitle: "Site Inspection Coordination",
        trigger: "Client selects properties of interest for a physical walkthrough.",
        erpAction: "System schedules site visit with developer sales lounge; logs assigned co-broker.",
        customerTouchpoint: "Client receives unified itinerary with Google Maps pins and meeting point details."
      },
      {
        stageNumber: "04",
        stageTitle: "Closing & Commission Split Tracking",
        trigger: "Token deposit paid and sale agreement signed.",
        erpAction: "Commission split calculated; invoice generated for developer finance team.",
        customerTouchpoint: "Client receives warm congratulatory message with registry preparation checklist."
      }
    ],
    detailedCapabilities: [
      {
        title: "Multi-Developer Inventory Search",
        category: "Listing Management",
        description: "Access verified project inventories across top tier developers with live pricing, floor plans, and RERA registration details.",
        specification: "Instant search by location, price bracket, possession date, and unit facing."
      },
      {
        title: "Custom Branded Proposal Builder",
        category: "Client Engagement",
        description: "Generate professional WhatsApp property proposals with your brokerage logo, agent contact info, and curated layout sheets in 1 tap.",
        specification: "Dynamic PDF generator with zero manual design or Photoshop needed."
      },
      {
        title: "Co-Broking Split Tracker",
        category: "Commission Management",
        description: "Manage joint brokerage deals with automated 50-50 or custom percentage commission split tracking and contract logging.",
        specification: "Digital milestone audit trail preventing disputes upon developer disbursement."
      },
      {
        title: "Shared Multi-Agent WhatsApp Inbox",
        category: "Team Coordination",
        description: "A centralized WhatsApp number accessible by your entire brokerage team with collision protection and private agent notes.",
        specification: "Role-based permissions for junior agents, senior consultants, and team leads."
      },
      {
        title: "Automated Requirement Matching",
        category: "Deal Discovery",
        description: "Automatically match client property requirements with newly onboarded developer inventory and trigger instant proposal drafts.",
        specification: "Smart semantic matching across property configurations and budget tiers."
      },
      {
        title: "Channel Partner Lead Ingestion",
        category: "Inbound Pipeline",
        description: "Ingest buyer inquiries from web forms, referral links, and ad channels directly into the shared brokerage inbox.",
        specification: "Full attribution tracking preserving original inquiry source and campaign ID."
      }
    ],
    whatsappTemplates: [
      {
        category: "Curated Proposal",
        templateName: "broker_property_proposal_v2",
        messagePreview: "Hello {{client_name}}, based on your preferences, we have curated 2 verified properties in {{locality_name}} matching your budget. Please find the detailed proposals attached.",
        interactiveButtons: ["View Proposal PDF", "Schedule Walkthrough"]
      },
      {
        category: "Walkthrough Itinerary",
        templateName: "broker_walkthrough_itinerary_v1",
        messagePreview: "Dear {{client_name}}, your property walkthrough for {{project_name}} is confirmed for {{date_time}}. Our senior consultant {{agent_name}} will meet you at the site entrance.",
        interactiveButtons: ["Open Map Location", "Call Consultant"]
      },
      {
        category: "New Inventory Drop",
        templateName: "broker_new_listing_alert_v1",
        messagePreview: "Hi {{client_name}}, a newly released 3BHK unit in {{project_name}} just became available within your specified budget. Would you like us to share the exclusive layout plan?",
        interactiveButtons: ["Yes, Share Details", "Not Looking Right Now"]
      }
    ],
    faqs: [
      {
        question: "How does the system ensure agents don't pitch the same client?",
        answer: "The shared team inbox features an active collision guard. When an agent opens a client conversation, other agents see a live indicator and cannot send conflicting messages."
      },
      {
        question: "Can our brokerage customize the proposals with our own brand?",
        answer: "Yes. Every proposal, floor plan package, and price estimate generated by the system automatically incorporates your brokerage logo, color palette, and agent contact details."
      },
      {
        question: "How does co-broking commission tracking work?",
        answer: "When a deal involves an external partner, you can log a co-broking agreement specifying the agreed split percentage. The system tracks the developer disbursement milestone and calculates each partner's payout."
      },
      {
        question: "Can agents use Pipo AI from their phones while on the road?",
        answer: "Yes. Pipo AI is accessible via mobile browser and WhatsApp, allowing agents to run inventory searches and send client proposals between site visits."
      }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate (All Sectors)",
    iconName: "Building2",
    badge: "Master Real Estate Hub",
    shortDesc: "Master real estate operating hub spanning both Developer project management and Brokerage channel partner networks.",
    title: "Real Estate",
    titleItalic: "Unified Ground.",
    subtitle: "Whether you develop township towers or broker high-ticket luxury deals, unify inventory, site visits, and client communication.",
    painPoints: "Fragmented spreadsheets, untracked site visits, slow milestone collections for developers, and lost co-broking commissions for brokerage firms.",
    whatWeBuild: [
      "Dedicated developer tower inventory ledger and RERA construction milestone dispatcher",
      "Brokerage multi-developer inventory search and co-branded client proposal builder",
      "Automated site-visit booking calendar with executive and consultant allocation",
      "Shared multi-agent WhatsApp team inbox with collision protection",
      "Pipo AI operational copilot for inventory queries, voice commands, and business analytics"
    ],
    automationFlow: [
      "Inbound inquiry: Delivered directly to developer sales lounge or brokerage shared inbox.",
      "Collateral sharing: Branded brochure, floor plan, and price sheet dispatched instantly on WhatsApp.",
      "Site-visit coordination: Date and time confirmed with automated Google Maps pin delivery.",
      "Milestone tracking: Demand notices and commission splits logged and executed seamlessly."
    ],
    copyBlock: "Comprehensive operating systems purpose-built for the operational realities of Indian real estate developers and brokerage agencies.",
    featuredInNav: false,
    detailedCapabilities: [
      {
        title: "Developer Master Suite",
        category: "Developers",
        description: "Tower inventory control, site visit allocations, and RERA construction milestone demand notices.",
        specification: "Purpose-built for property developers and project marketing firms."
      },
      {
        title: "Brokerage Network Suite",
        category: "Brokers",
        description: "Multi-developer inventory catalog search, custom branded client proposals, and co-broking commission tracking.",
        specification: "Purpose-built for channel partner firms, brokerages, and property consultants."
      }
    ]
  },
  {
    id: "lead-management",
    name: "Inbound Lead Routing",
    iconName: "Building2",
    shortDesc: "Capture inbound inquiries and Click-to-WhatsApp ad leads inside Meta's 72-hour window.",
    title: "Inbound Lead Routing",
    titleItalic: "Instant Response.",
    subtitle: "Turn inbound inquiries into qualified conversations instead of lost website form visitors.",
    painPoints: "Landing page forms losing potential buyers, and sales follow-ups occurring hours after an inquiry went cold.",
    whatWeBuild: [
      "Click-to-WhatsApp ad lead ingestion utilizing Meta's official 72-hour free messaging window",
      "Automated three-question qualification bot checking budget, requirements, and timeline",
      "Immediate sales alert routing hot prospects to on-duty team members",
      "Informative follow-up sequence keeping undecided buyers engaged",
      "Conversion tracking dashboard showing campaign response performance"
    ],
    automationFlow: [
      "Inbound inquiry or ad click opens WhatsApp with a pre-filled greeting message.",
      "Qualification flow asks 3 essential questions directly in chat.",
      "Qualified buyers route to on-duty sales representatives immediately.",
      "Undecided prospects receive educational follow-up notes over the following week."
    ],
    copyBlock: "Inbound inquiries route directly into WhatsApp for instant qualification, connecting reps with buyers while intent is highest.",
    featuredInNav: false
  },
  {
    id: "ecommerce",
    name: "E-commerce & D2C",
    iconName: "ShoppingCart",
    shortDesc: "Recover abandoned checkouts, confirm cash-on-delivery orders, and reduce returns.",
    title: "E-commerce & D2C",
    titleItalic: "Retention-Led.",
    subtitle: "Recover carts and reduce courier return-to-origin losses.",
    painPoints: "High checkout abandonment, unconfirmed cash-on-delivery orders, and high support volume asking for parcel status.",
    whatWeBuild: [
      "Direct Shopify and WooCommerce webhook integrations",
      "30-minute cart recovery reminders with one-click checkout links",
      "Cash-on-delivery order verification before packing and dispatch",
      "Real-time courier transit and delivery alerts",
      "Post-delivery product feedback and reorder prompts"
    ],
    automationFlow: [
      "Cart abandoned: WhatsApp reminder shows items with checkout link.",
      "Cash-on-delivery order placed: Confirmation message sent requiring quick tap before packing.",
      "Fulfillment updates: Dispatched with tracking link, Out for Delivery, and Delivered.",
      "Post-delivery: Product review request sent with tracked link."
    ],
    copyBlock: "Order tracking, checkout recovery, and review collection automated on WhatsApp, connected directly to your store.",
    featuredInNav: false
  },
  {
    id: "hospitals",
    name: "Hospitals & Multispecialty",
    iconName: "Stethoscope",
    shortDesc: "OPD token queue management, secure diagnostic lab reports, and refill alerts.",
    title: "Hospitals & Clinics",
    titleItalic: "Streamlined.",
    subtitle: "Fewer missed consultations, faster report delivery, and reduced waiting room crowd.",
    painPoints: "Crowded outpatient waiting rooms, delayed lab test results, and missed routine specialist consultations.",
    whatWeBuild: [
      "Doctor appointment scheduling and token queue notifications",
      "Password-protected PDF diagnostic report distribution via WhatsApp",
      "Chronic prescription refill reminder schedules",
      "Post-discharge recovery check-ins and satisfaction feedback"
    ],
    automationFlow: [
      "Appointment booked: Details sent with doctor name, room number, and time slot.",
      "24-hour reminder sent with Confirm and Reschedule buttons.",
      "Lab report ready: Delivered directly to patient on WhatsApp with secure PDF access.",
      "Prescription refill alerts sent based on doctor treatment timeline."
    ],
    copyBlock: "A patient messaging workflow covering consultations, test reports, and routine reminders without requiring patients to download another app.",
    featuredInNav: false
  },
  {
    id: "logistics",
    name: "Logistics & Delivery",
    iconName: "Truck",
    shortDesc: "Live driver assignment alerts, tracking links, and failed delivery resolution.",
    title: "Logistics & Delivery",
    titleItalic: "Streamlined.",
    subtitle: "Reduce parcel location support calls and resolve first-attempt delivery failures.",
    painPoints: "Support phones tied up with tracking inquiries, high cost of returned shipments, and lack of digital delivery proofs.",
    whatWeBuild: [
      "Real-time status milestones from pickup to final drop-off",
      "Driver contact information and live tracking link dispatch",
      "Interactive failed-delivery resolution bot for customer rescheduling",
      "Instant digital proof of delivery notifications"
    ],
    automationFlow: [
      "Parcel picked up: Tracking link and expected delivery date sent to customer.",
      "Out for delivery: Driver details and live tracking link shared on morning of delivery.",
      "Failed delivery attempt: Customer receives rescheduling options to pick a new date.",
      "Delivered: Confirmation sent with digital proof of delivery receipt."
    ],
    copyBlock: "Milestone alerts and automated re-routing for missed shipments so your operations team does not spend all day handling delivery inquiries.",
    featuredInNav: false
  },
  {
    id: "automobile",
    name: "Automobile Showrooms",
    iconName: "Car",
    shortDesc: "Service due alerts, test drive scheduling, and digital workshop job cards.",
    title: "Automobile Showrooms",
    titleItalic: "Accelerated.",
    subtitle: "Automate service reminders and test drive bookings for your dealership.",
    painPoints: "Dealership phones overwhelmed by routine status calls, vehicle owners missing scheduled services, and unorganized test drive leads.",
    whatWeBuild: [
      "Dealer management system sync calculating service due dates based on mileage and timeline",
      "Test drive scheduling with vehicle model selection and assigned consultant details",
      "Live vehicle workshop status alerts from inspection to ready for pickup",
      "Itemized digital job card and invoice summary PDF delivery"
    ],
    automationFlow: [
      "Periodic service approaching: Automated reminder sent with one-tap slot selection.",
      "Test drive booked: Confirmation sent with sales executive contact and vehicle details.",
      "Vehicle ready: Customer receives bill summary, payment link, and pickup alert.",
      "Post-service feedback survey sent within 24 hours."
    ],
    copyBlock: "Handle service reminders, workshop updates, and test drive bookings automatically so service advisors focus on customers at the desk.",
    featuredInNav: false
  },
  {
    id: "travel",
    name: "Travel & Hotels",
    iconName: "Plane",
    shortDesc: "Guest concierge, pre-arrival details, room upgrades, and review capture.",
    title: "Travel & Hospitality",
    titleItalic: "Memorable.",
    subtitle: "Follow up with every guest before, during, and after their stay.",
    painPoints: "Disjointed pre-arrival communication, missed upgrade opportunities, and low post-stay review collection.",
    whatWeBuild: [
      "WhatsApp guest concierge answering room questions and amenities FAQs",
      "Pre-arrival messages offering check-in options and airport transfers",
      "Automated Wi-Fi details, check-in instructions, and property guides",
      "Post-checkout review prompts with direct review platform links"
    ],
    automationFlow: [
      "Reservation confirmed: Booking summary and property location link delivered instantly.",
      "48 hours before check-in: Pre-arrival note sent with early arrival and upgrade options.",
      "During stay: Digital concierge answers common questions about dining and pool hours.",
      "After checkout: Review request sent with direct feedback link."
    ],
    copyBlock: "Send check-in instructions, answer amenity questions, and collect reviews through WhatsApp without adding work for reception.",
    featuredInNav: false
  },
  {
    id: "restaurants",
    name: "Restaurants & Cafes",
    iconName: "Utensils",
    shortDesc: "Digital QR menus, direct WhatsApp ordering, and kitchen POS integration.",
    title: "Restaurants & Kitchens",
    titleItalic: "Direct.",
    subtitle: "Take orders directly from customers without paying third-party aggregator commissions.",
    painPoints: "High 25% to 35% commission fees from food aggregators, lost customer data, and manual telephone order mix-ups.",
    whatWeBuild: [
      "Interactive digital menu with direct in-chat cart ordering",
      "Kitchen POS integration compatible with Petpooja and standard POS webhooks",
      "Live order updates from preparation to dispatch",
      "Table reservations with automatic confirmations"
    ],
    automationFlow: [
      "Customer scans table QR code: Interactive WhatsApp menu opens.",
      "Customer selects dishes, adds instructions, and confirms order in chat.",
      "Order prints in kitchen via POS webhook integration.",
      "Customer receives live updates: Order accepted, preparing, ready for pickup or delivery."
    ],
    copyBlock: "Digital menus, table reservations, and order status updates on WhatsApp, connected directly to your kitchen POS with zero aggregator fees.",
    featuredInNav: false
  },
  {
    id: "customer-support",
    name: "Customer Support",
    iconName: "Headset",
    shortDesc: "Multi-agent team inbox, automated FAQ deflection, and supervisor escalations.",
    title: "Customer Support",
    titleItalic: "Responsive.",
    subtitle: "Every customer chat becomes an organized ticket with clear accountability.",
    painPoints: "Inquiries scattered across personal phone numbers with no response time tracking, ticket history, or resolution metrics.",
    whatWeBuild: [
      "Centralized multi-agent shared WhatsApp inbox",
      "FAQ deflection flow answering common inquiries instantly",
      "Response time escalations alerting supervisors to delayed replies",
      "Automated post-resolution customer satisfaction surveys"
    ],
    automationFlow: [
      "Customer sends message: Common questions answered automatically, or ticket created.",
      "Ticket assigned to available agent based on department tag.",
      "Response time timer begins: overdue chats flag notifications to supervisors.",
      "Agent marks issue resolved: Satisfaction rating survey sent immediately."
    ],
    copyBlock: "Shared inbox, automatic escalations, and satisfaction ratings built around the WhatsApp conversations your customers already start.",
    featuredInNav: false
  }
];

export function getAllSectors(): Sector[] {
  return sectors;
}

export function getAllSectorSlugs(): string[] {
  return sectors.map((s) => s.id);
}

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.id === slug);
}

export function getFeaturedNavSectors(): Sector[] {
  return sectors.filter((s) => s.featuredInNav);
}
