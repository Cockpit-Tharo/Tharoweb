export interface TransformationStep {
  label: string;
  detail: string;
  status: "done" | "active";
}

export interface TransformationScenario {
  id: string;
  tabLabel: string;
  sectorName: string;
  rawInput: {
    sender: string;
    timestamp: string;
    audioDuration?: string;
    messageText: string;
  };
  processingTags: string[];
  executionResult: {
    systemName: string;
    actionTitle: string;
    latency: string;
    lineItems: { key: string; value: string }[];
    autoNotification: string;
  };
}

export const transformationScenarios: TransformationScenario[] = [
  {
    id: "dental-clinic",
    tabLabel: "Dental Clinic",
    sectorName: "Patient",
    rawInput: {
      sender: "Kavita Roy",
      timestamp: "Today, 11:20 AM",
      audioDuration: "0:14 voice note",
      messageText:
        "Doctor, my lower tooth is hurting again. Is Dr. Mehta free tomorrow morning around 10:30 AM for a quick checkup?",
    },
    processingTags: [
      "Doctor: Dr. Mehta",
      "Concern: Tooth Pain",
      "Preferred Time: Tomorrow 10:30 AM",
    ],
    executionResult: {
      systemName: "Clinic Calendar & Patient File",
      actionTitle: "Appointment Confirmed & Doctor Notified",
      latency: "System Verified",
      lineItems: [
        { key: "Doctor Reserved", value: "Dr. Mehta locked for tomorrow at 10:30 AM" },
        { key: "History Pulled", value: "Previous digital X-ray retrieved for the doctor" },
        { key: "Directions Sent", value: "Google Maps location and prep advice sent to patient" },
      ],
      autoNotification:
        "Appointment booked on clinic calendar and confirmed with the patient immediately.",
    },
  },
  {
    id: "salon-booking",
    tabLabel: "Salon & Spa",
    sectorName: "Salon Client",
    rawInput: {
      sender: "Ananya Iyer",
      timestamp: "Today, 2:45 PM",
      messageText:
        "Hi! Do you have a haircut slot open with Priya tomorrow around 4 PM? Also want to add a keratin treatment if possible.",
    },
    processingTags: [
      "Stylist: Priya",
      "Services: Haircut + Keratin",
      "Requested Time: Tomorrow 4:00 PM",
    ],
    executionResult: {
      systemName: "Salon Schedule & Staff Ledger",
      actionTitle: "Stylist Booked & Slot Locked",
      latency: "System Verified",
      lineItems: [
        { key: "Stylist Assigned", value: "Priya reserved for 4:15 PM (90-min slot)" },
        { key: "No Double-Booking", value: "Stylist chair blocked on salon calendar automatically" },
        { key: "Confirmation Sent", value: "WhatsApp invite sent with one-tap reschedule button" },
      ],
      autoNotification:
        "Stylist booked, calendar blocked, and customer confirmed with zero front-desk phone calls.",
    },
  },
  {
    id: "event-rsvp",
    tabLabel: "Events & RSVPs",
    sectorName: "Event Attendee",
    rawInput: {
      sender: "Rohan Varma",
      timestamp: "Today, 4:15 PM",
      messageText:
        "Confirming attendance for 2 guests for the Global Tech Summit gala dinner on Friday. Dietary preference: Vegetarian.",
    },
    processingTags: [
      "Event: Global Tech Summit",
      "Headcount: 2 Guests",
      "Dietary: Vegetarian",
    ],
    executionResult: {
      systemName: "Guest Registry & Gate Control",
      actionTitle: "RSVP Confirmed & VIP Passes Generated",
      latency: "System Verified",
      lineItems: [
        { key: "Seats Reserved", value: "Table 14 locked for 2 guests" },
        { key: "Cryptographic QR", value: "2 unique QR gate entry passes generated" },
        { key: "Passes Delivered", value: "WhatsApp entry cards sent with venue valet map" },
      ],
      autoNotification:
        "Guest registered on event dashboard and secure entry passes delivered on WhatsApp.",
    },
  },
  {
    id: "real-estate",
    tabLabel: "Real Estate",
    sectorName: "Home Buyer",
    rawInput: {
      sender: "Vikram Malhotra",
      timestamp: "Today, 6:02 PM",
      messageText:
        "Hi! Saw your ad for the 3BHK duplex in Indiranagar. Can my wife and I visit this Saturday at 3 PM? Our budget is around 2.5 Cr.",
    },
    processingTags: [
      "Property: 3BHK Duplex",
      "Budget: ₹2.5 Cr",
      "Visit Time: Saturday 3:00 PM",
    ],
    executionResult: {
      systemName: "CRM & Instant Auto-Reply",
      actionTitle: "Site Visit Confirmed & Brochure Sent",
      latency: "System Verified",
      lineItems: [
        { key: "Visit Booked", value: "Saturday 3:00 PM locked with visitor gate pass" },
        { key: "Advisor Assigned", value: "Routed to consultant Neha with buyer preferences" },
        { key: "Brochure Dispatched", value: "Floor plan PDF and 3D video sent to buyer in chat" },
      ],
      autoNotification:
        "The buyer gets instant answers and a gate pass without your sales team lifting a finger.",
    },
  },
  {
    id: "logistics-erp",
    tabLabel: "Logistics & Wholesale",
    sectorName: "B2B Trade Client",
    rawInput: {
      sender: "Ramesh Sharma (Sharma Traders)",
      timestamp: "Today, 10:14 AM",
      audioDuration: "0:18 voice note",
      messageText:
        "Urgent: Please send 50 boxes of 10mm ceramic floor tiles to our Whitefield site tomorrow by 9 AM under our credit account.",
    },
    processingTags: [
      "Client: Sharma Traders",
      "Order: 50 Boxes 10mm Tiles",
      "Delivery: Tomorrow 9:00 AM",
    ],
    executionResult: {
      systemName: "Tally Prime & Warehouse Hub",
      actionTitle: "Order Created in Tally & Stock Held",
      latency: "System Verified",
      lineItems: [
        { key: "Tally Invoice", value: "Sales voucher auto-posted into Tally accounting" },
        { key: "Warehouse Stock", value: "50 boxes reserved at nearest dispatch center" },
        { key: "Dispatched to Client", value: "PDF bill and delivery confirmation sent on WhatsApp" },
      ],
      autoNotification:
        "Order posted directly into Tally and confirmed on WhatsApp with zero manual data entry.",
    },
  },
];
