import React from "react";
import {
  Scissors,
  Stethoscope,
  FileSpreadsheet,
  Building2,
  ShoppingCart,
  Truck,
  Home,
  Car,
  Plane,
  Utensils,
  Headset,
  Briefcase,
  Calendar,
  LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Scissors,
  Stethoscope,
  FileSpreadsheet,
  Building2,
  ShoppingCart,
  Truck,
  Home,
  Car,
  Plane,
  Utensils,
  Headset,
  Calendar,
};

interface SectorIconProps extends LucideProps {
  name: string;
}

export default function SectorIcon({ name, ...props }: SectorIconProps) {
  const IconComponent = iconMap[name] || Briefcase;
  return <IconComponent {...props} />;
}
