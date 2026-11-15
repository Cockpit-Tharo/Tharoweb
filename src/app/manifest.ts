import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tharo Technologies | WhatsApp-First Business Systems",
    short_name: "Tharo.tech",
    description: "Enterprise WhatsApp Business operating systems, relational ERP sync, and Pipo AI automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F6EC",
    theme_color: "#0D3B2E",
    icons: [
      {
        src: "/images/tharo-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/tharo-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
