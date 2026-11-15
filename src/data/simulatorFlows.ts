export type SimulatorMessage = {
  from: "user" | "bot";
  text: string;
  delay: number;
  isButton?: boolean;
  buttons?: string[];
};

export type SimulatorFlow = {
  id: string;
  label: string;
  businessName: string;
  businessCategory: string;
  avatarBg: string;
  avatarText: string;
  messages: SimulatorMessage[];
};

export const simulatorFlows: Record<string, SimulatorFlow> = {
  realty: {
    id: "realty",
    label: "Real Estate Lead",
    businessName: "Tharo Realty Group",
    businessCategory: "Verified Business Account",
    avatarBg: "#0D3B2E",
    avatarText: "TR",
    messages: [
      {
        from: "bot",
        text: "Hello Vikram! Thank you for inquiring about The Grand Duplex, Indiranagar.\n\n3 & 4 BHK Luxury Duplexes starting at ₹2.4 Cr.\n\nWould you like our floor plan brochure or to book a private site visit?",
        delay: 0,
        buttons: ["Download Brochure", "Book Site Visit"],
      },
      { from: "user", text: "Book Site Visit", delay: 1400 },
      {
        from: "bot",
        text: "Our show villa is open daily from 10 AM to 6 PM. Which day works best for you and your family?",
        delay: 2200,
        buttons: ["Saturday (3 PM)", "Sunday (11 AM)"],
      },
      { from: "user", text: "Saturday (3 PM)", delay: 3500 },
      {
        from: "bot",
        text: "Confirmed! Your VIP site visit is scheduled for Saturday at 3:00 PM.\n\nSenior advisor Neha S. has been assigned. Attached is your digital visitor gate pass QR code.",
        delay: 4400,
        buttons: ["View Gate Pass", "Get Location Pin"],
      },
    ],
  },
  dental: {
    id: "dental",
    label: "Dental Clinic",
    businessName: "Dr. Mehta Dental Care",
    businessCategory: "Verified Business Account",
    avatarBg: "#0F766E",
    avatarText: "DM",
    messages: [
      { from: "user", text: "Hi, I have tooth pain on my lower molar. Any slots tomorrow?", delay: 0 },
      {
        from: "bot",
        text: "Hello! We have reserved consultation slots available with Dr. Arvind Mehta tomorrow:\n\n1. Morning: 10:30 AM\n2. Afternoon: 3:30 PM\n3. Evening: 6:00 PM\n\nPlease select your preferred time:",
        delay: 1000,
        buttons: ["10:30 AM", "3:30 PM", "6:00 PM"],
      },
      { from: "user", text: "10:30 AM", delay: 2100 },
      {
        from: "bot",
        text: "Confirmed! Your checkup is booked for tomorrow at 10:30 AM.\n\nDoctor: Dr. Arvind Mehta (Chair 2)\nAddress: 402 Indiranagar 100ft Road\n\nWe will send a reminder 2 hours prior with digital intake forms.",
        delay: 3100,
        buttons: ["Add to Calendar", "Clinic Directions"],
      },
    ],
  },
  salon: {
    id: "salon",
    label: "Salon Booking",
    businessName: "Glow Studio Salon",
    businessCategory: "Verified Business Account",
    avatarBg: "#008069",
    avatarText: "GS",
    messages: [
      { from: "user", text: "Hi, I want to book a haircut", delay: 0 },
      {
        from: "bot",
        text: "Welcome to Glow Studio. Please choose your stylist:\n\n1. Priya: Senior Stylist\n2. Rahul: Color Specialist\n3. Any Available",
        delay: 900,
        buttons: ["1. Priya", "2. Rahul", "3. Any Available"],
      },
      { from: "user", text: "1. Priya", delay: 2000 },
      {
        from: "bot",
        text: "Priya has these open slots:\n\nTue, Sep 3 at 11:00 AM\nTue, Sep 3 at 2:00 PM\nWed, Sep 4 at 10:00 AM\n\nReply with your preferred slot.",
        delay: 2900,
        buttons: ["Tue 11:00 AM", "Tue 2:00 PM", "Wed 10:00 AM"],
      },
      { from: "user", text: "Tue 11:00 AM", delay: 4200 },
      {
        from: "bot",
        text: "Confirmed. Your appointment details:\n\nStylist: Priya\nDate: Tue, Sep 3\nTime: 11:00 AM\nLocation: Glow Studio, MG Road\n\nWe will send a reminder 2 hours before. See you soon.",
        delay: 5000,
        buttons: ["Add to Calendar", "Get Directions"],
      },
    ],
  },
  events: {
    id: "events",
    label: "Events & RSVPs",
    businessName: "Founders Summit 2026",
    businessCategory: "Verified Business Account",
    avatarBg: "#1E293B",
    avatarText: "FS",
    messages: [
      {
        from: "bot",
        text: "Hi Ananya! You are invited to the Global Founders Summit 2026.\n\nDate: Saturday, Nov 22 at 9:30 AM\nVenue: Grand Ballroom, The Leela\n\nPlease confirm your attendance:",
        delay: 0,
        buttons: ["Accept Invitation", "Decline with Regrets"],
      },
      { from: "user", text: "Accept Invitation", delay: 1400 },
      {
        from: "bot",
        text: "Delighted to host you! Your seat has been reserved.\n\nAttached is your personalized VIP QR Entry Pass for expedited gate check-in and breakfast badge collection.",
        delay: 2400,
        buttons: ["Download QR Pass", "View Summit Agenda"],
      },
    ],
  },
  logistics: {
    id: "logistics",
    label: "Order & Logistics",
    businessName: "Apex Express Logistics",
    businessCategory: "Verified Business Account",
    avatarBg: "#128c7e",
    avatarText: "AE",
    messages: [
      {
        from: "bot",
        text: "Your shipment is out for delivery.\n\nOrder: #ORD-9921\nCourier: Ravi Kumar (Phone: 9876543210)\nEstimated arrival: Today between 2:00 PM and 4:00 PM\n\nLive route tracking ready.",
        delay: 0,
        buttons: ["Live Route Tracking"],
      },
      { from: "user", text: "Can you change the address?", delay: 1800 },
      {
        from: "bot",
        text: "The package is already on the courier vehicle for this delivery round.\n\nPlease pick an option:\n1. Reschedule for tomorrow\n2. Hold at local hub for self-pickup\n3. Connect with support agent",
        delay: 2600,
        buttons: ["1. Tomorrow", "2. Hold at Hub", "3. Human Agent"],
      },
      { from: "user", text: "2. Hold at Hub", delay: 3900 },
      {
        from: "bot",
        text: "Updated. Your package will be held at Koramangala Hub for 3 days.\nPickup verification code: 4821",
        delay: 4700,
        buttons: ["Hub Location & Hours"],
      },
    ],
  },
};
