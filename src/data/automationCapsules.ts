export interface AutomationCapsule {
  id: string;
  sector: string;
  sectorName: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  iconName: string;
  accentColor: string;
  accentBg: string;
  flowPreview: {
    sender: "client" | "system" | "bot";
    text: string;
  }[];
}

export const automationCapsules: AutomationCapsule[] = [
  {
    id: "salon-booking",
    sector: "salons-spas",
    sectorName: "Salons & Spas",
    title: "Instant Appointments & Reminders",
    subtitle: "Calendar booking and automated reminders",
    metric: "34% Fewer No-Shows",
    metricLabel: "Customer Attendance",
    description: "Customers pick a stylist and time slot in WhatsApp. The system sends an automatic reminder two hours before the visit with an option to reschedule in one tap.",
    tags: ["#SalonBookings", "#GoogleCalendar", "#ZeroNoShows"],
    iconName: "Scissors",
    accentColor: "#20B87C",
    accentBg: "rgba(32, 184, 124, 0.12)",
    flowPreview: [
      { sender: "client", text: "Book haircut with Priya tomorrow at 4 PM" },
      { sender: "system", text: "Slot reserved with Priya for tomorrow at 4:00 PM. Tap below to confirm or pick another time." },
    ],
  },
  {
    id: "events-rsvp",
    sector: "events-management",
    sectorName: "Events & RSVPs",
    title: "1-Tap Guest RSVPs & QR Gate Passes",
    subtitle: "Automate invitations, headcounts, and check-in passes",
    metric: "94% Response",
    metricLabel: "Guest RSVP Rate",
    description: "Send personalized event invites on WhatsApp. Guests confirm attendance with one tap, receiving instant dynamic QR entry passes and live venue pins.",
    tags: ["#EventTech", "#InstantRSVP", "#QRPasses"],
    iconName: "Calendar",
    accentColor: "#0D3B2E",
    accentBg: "rgba(13, 59, 46, 0.14)",
    flowPreview: [
      { sender: "system", text: "Hi Rohan! You're invited to the Founders Summit 2026. Please confirm attendance:" },
      { sender: "client", text: "Attending (with +1)" },
    ],
  },
  {
    id: "logistics-ndr",
    sector: "logistics-courier",
    sectorName: "Logistics & 3PL",
    title: "Missed Delivery Follow-Up",
    subtitle: "Quick reschedule or leave with a neighbor",
    metric: "28% Fewer Returns",
    metricLabel: "Delivery Success",
    description: "If a customer is not at home when the parcel arrives, WhatsApp asks them right away if they want delivery tomorrow or if the rider should leave it with a neighbor.",
    tags: ["#DeliveryHelp", "#CourierTracking", "#HappyCustomers"],
    iconName: "Truck",
    accentColor: "#EE9B39",
    accentBg: "rgba(238, 155, 57, 0.12)",
    flowPreview: [
      { sender: "system", text: "Delivery attempt missed: Door was locked. What works best for you? [Tomorrow 10 AM] [Leave with Neighbor]" },
      { sender: "client", text: "Leave with Neighbor (Flat 402)" },
    ],
  },
  {
    id: "dental-recalls",
    sector: "dental-clinics",
    sectorName: "Dental & Healthcare",
    title: "6-Month Dental Checkup Reminder",
    subtitle: "Gentle reminders for regular patient care",
    metric: "4x More Return Visits",
    metricLabel: "Patient Loyalty",
    description: "The system remembers when a patient is due for their routine cleaning and sends a friendly WhatsApp message with available slots to confirm right in chat.",
    tags: ["#ClinicAppointments", "#PatientCare", "#AutoReminders"],
    iconName: "Stethoscope",
    accentColor: "#0D3B2E",
    accentBg: "rgba(13, 59, 46, 0.14)",
    flowPreview: [
      { sender: "system", text: "Hi Rohan, your 6-month cleaning is due with Dr. Mehta. Tap below to pick a morning slot." },
      { sender: "client", text: "Confirmed for Saturday at 11:30 AM" },
    ],
  },
  {
    id: "d2c-cart",
    sector: "ecommerce-d2c",
    sectorName: "D2C Brands",
    title: "Cart Reminders & Order Verification",
    subtitle: "Recover shoppers and confirm delivery address",
    metric: "24% Recovered",
    metricLabel: "Recovered Orders",
    description: "Shoppers who leave items behind receive a polite WhatsApp reminder with photos of their cart and a discount code. Cash-on-delivery orders get verified with one tap.",
    tags: ["#OnlineStore", "#OrderRecovery", "#QuickCheckout"],
    iconName: "ShoppingBag",
    accentColor: "#E2D8FF",
    accentBg: "rgba(226, 216, 255, 0.28)",
    flowPreview: [
      { sender: "system", text: "You left 2 items in your cart. Finish your order now and enjoy 10% off: [Checkout Now]" },
      { sender: "client", text: "Order placed. Paid via UPI." },
    ],
  },
  {
    id: "ad-qualification",
    sector: "meta-ads-leads",
    sectorName: "Click-to-WhatsApp Ads",
    title: "Instant Replies for Ad Inquiries",
    subtitle: "Turn ad clicks into customers right away",
    metric: "Instant Reply",
    metricLabel: "First Response",
    description: "When people tap your Instagram or Facebook ads, they open WhatsApp directly. A friendly automated message asks a couple of questions and connects them to the right person.",
    tags: ["#AdFollowUp", "#InstantReplies", "#FastLeadRouting"],
    iconName: "Target",
    accentColor: "#20B87C",
    accentBg: "rgba(32, 184, 124, 0.12)",
    flowPreview: [
      { sender: "client", text: "Hi, I saw your ad and want more details about your pricing." },
      { sender: "system", text: "Thanks for reaching out! We have packages for small teams and growing companies. How many team members do you have?" },
    ],
  },
  {
    id: "hospital-queue",
    sector: "hospitals-polyclinics",
    sectorName: "Hospitals & OPD",
    title: "Live Doctor Queue & Lab Reports",
    subtitle: "Live token updates and test results on phone",
    metric: "Zero Waiting Room Crowds",
    metricLabel: "Patient Experience",
    description: "Patients see their live token number on WhatsApp so they do not have to wait in crowded lobbies. Blood test and scan reports arrive as secure PDFs the moment they are signed.",
    tags: ["#DoctorQueue", "#DigitalReports", "#ClinicCare"],
    iconName: "Building2",
    accentColor: "#0D3B2E",
    accentBg: "rgba(13, 59, 46, 0.14)",
    flowPreview: [
      { sender: "system", text: "Token #14: Dr. Sharma is currently seeing Token #12. Estimated wait time is 12 minutes." },
      { sender: "system", text: "Your blood test report is ready. Download the PDF below." },
    ],
  },
  {
    id: "restaurant-ordering",
    sector: "restaurants-cafes",
    sectorName: "Restaurants & Dining",
    title: "QR Table Orders & Digital Menus",
    subtitle: "Orders go straight to the kitchen counter",
    metric: "Zero Commission",
    metricLabel: "Direct Orders",
    description: "Guests scan the table QR code on their phone to browse the menu, place orders, and pay via UPI on WhatsApp. Orders print straight to the kitchen.",
    tags: ["#TableOrdering", "#ZeroCommission", "#QuickPay"],
    iconName: "Utensils",
    accentColor: "#EE9B39",
    accentBg: "rgba(238, 155, 57, 0.12)",
    flowPreview: [
      { sender: "client", text: "Table 4: 1x Truffle Pasta, 2x Sparkling Cooler" },
      { sender: "system", text: "Order received and sent to the kitchen. Bill: ₹1,240 [Pay via UPI] [Order More]" },
    ],
  },
];
