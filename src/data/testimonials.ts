export interface DocketCardItem {
  id: string;
  tab: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const docketTestimonials: DocketCardItem[] = [
  {
    id: "apex-dental",
    tab: "Dr. Raman",
    name: "Dr. Raman Iyer",
    role: "Founder, Apex Dental Studio",
    company: "Apex Dental Studio",
    quote:
      "Patients used to call all morning just to move their visit. Now they tap a slot on WhatsApp, **confirm in ten seconds**, and our front desk finally gets quiet work done.",
    rating: 5,
  },
  {
    id: "lush-salon",
    tab: "Pooja Nair",
    name: "Pooja Nair",
    role: "Owner, Lush Hair & Spa",
    company: "Lush Hair & Spa",
    quote:
      "Before Tharo, two stylists would accidentally text the same regular client. Having one shared team inbox with **reply locks stopped double-messaging overnight**.",
    rating: 5,
  },
  {
    id: "skyline-realty",
    tab: "Rohan Mehta",
    name: "Rohan Mehta",
    role: "Director, Skyline Homes",
    company: "Skyline Homes",
    quote:
      "Weekend Instagram leads used to go cold while our sales team slept. Now everyone receives floor plans and **books their site visit automatically** in under a minute.",
    rating: 5,
  },
  {
    id: "peenya-valves",
    tab: "Suresh Gowda",
    name: "Suresh Gowda",
    role: "Partner, Bharat Precision Valves",
    company: "Bharat Precision",
    quote:
      "Dispatching fifty boxes from Peenya used to mean chasing warehouse counts on paper. Now **branch stock updates itself** the moment a bill is marked paid.",
    rating: 5,
  },
  {
    id: "arogya-clinics",
    tab: "Dr. Sneha",
    name: "Dr. Sneha Kulkarni",
    role: "Medical Head, Arogya Care",
    company: "Arogya Care",
    quote:
      "I am not technical at all, yet speaking a quick voice note to Pipo AI **creates the booking and sends the reminder** without typing across three apps.",
    rating: 5,
  },
  {
    id: "summit-events",
    tab: "Karan Gill",
    name: "Karan Gill",
    role: "Producer, Northstar Live",
    company: "Northstar Live",
    quote:
      "We moved three thousand guest RSVPs, paid passes, and QR gate entries into WhatsApp. Check-in lines vanished because **every ticket arrived on time**.",
    rating: 5,
  },
];

