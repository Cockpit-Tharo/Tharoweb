import type { Metadata } from "next";
import { getSectorBySlug, getAllSectors } from "@/data/sectors";

interface Props {
  params: Promise<{ sector: string }>;
  children: React.ReactNode;
}

export async function generateStaticParams() {
  const sectors = getAllSectors();
  return sectors.map((s) => ({
    sector: s.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }): Promise<Metadata> {
  const resolved = await params;
  const sector = getSectorBySlug(resolved.sector);

  if (!sector) {
    return {
      title: "Industry Solution | Tharo Technologies",
      description: "Custom WhatsApp business automation and ERP systems.",
    };
  }

  const cleanTitle = `${sector.name} WhatsApp Operating System | Tharo Technologies`;
  const cleanDesc = sector.subtitle
    ? `${sector.subtitle} Custom WhatsApp CRM, automated bookings, and ERP workflows.`
    : sector.shortDesc;

  return {
    title: cleanTitle,
    description: cleanDesc,
    openGraph: {
      title: `${sector.title} ${sector.titleItalic} | Tharo Technologies`,
      description: cleanDesc,
      url: `https://tharo.tech/solutions/${sector.id}`,
      type: "website",
    },
  };
}

export default function SectorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
