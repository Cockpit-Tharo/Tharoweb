export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  brandName: string;
  brandTagline: string;
  description: string;
  domain: string;
  url: string;
  portfolioUrl: string;
  contact: {
    whatsappNumber: string;
    whatsappFormatted: string;
    whatsappDefaultMessage: string;
    whatsappDirectUrl: string;
    email: string;
    cockpitEmail: string;
  };
  navigation: {
    main: NavLink[];
    actions: {
      primaryCta: NavLink;
      portfolioCta: NavLink;
    };
  };
  footer: {
    tagline: string;
    copyright: string;
    subline: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "Tharo Technologies",
  brandTagline: "Business Automation via ERPs, WhatsApp & Pipo AI",
  description:
    "Sync orders, stock, and appointments across WhatsApp and your ERP, backed by 24/7 AI replies and voice commands.",
  domain: "tharo.tech",
  url: "https://tharo.tech",
  
  // External portfolio link (update once here, reflects in nav, hero, footer, and about)
  portfolioUrl: "http://uncomplic8-web.vercel.app/",

  contact: {
    whatsappNumber: "919999999999",
    whatsappFormatted: "+91 99999 99999",
    whatsappDefaultMessage: "Hi! I want to explore business automation and Pipo AI for my operations.",
    whatsappDirectUrl: "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20explore%20business%20automation%20and%20Pipo%20AI%20for%20my%20operations.",
    email: "connect@tharo.tech",
    cockpitEmail: "cockpit@tharo.tech",
  },

  navigation: {
    main: [
      { label: "Platform", href: "/platform" },
      { label: "Pipo AI", href: "/pipo-voice" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    actions: {
      primaryCta: { label: "Book Demo", href: "/contact" },
      portfolioCta: { label: "Our Creative Side", href: "http://uncomplic8-web.vercel.app/", external: true },
    },
  },

  footer: {
    tagline: "Bookings, billing, and shared WhatsApp inboxes in one place.",
    copyright: `Copyright ${new Date().getFullYear()} Tharo Technologies LLP. All rights reserved.`,
    subline: "Built on the official Meta WhatsApp Business API.",
  },
};
