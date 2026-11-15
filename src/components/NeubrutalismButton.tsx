import Link from "next/link";
import styles from "./NeubrutalismButton.module.css";

interface NeubrutalismButtonProps {
  href: string;
  label?: string;
  fill?: string;
  textColor?: string;
  className?: string;
  target?: string;
  rel?: string;
  showIcon?: boolean;
  size?: "default" | "compact" | "mobile";
}

export default function NeubrutalismButton({
  href,
  label = "Our Creative Side",
  fill = "#EDE8DD",
  textColor = "#0D3B2E",
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
  showIcon = false,
  size = "default",
}: NeubrutalismButtonProps) {
  const sizeClass =
    size === "mobile"
      ? styles.mobile
      : size === "compact"
      ? styles.compact
      : styles.default;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${styles.neubrutalismBtn} ${sizeClass} ${className}`}
      style={{
        backgroundColor: fill,
        color: textColor,
      }}
      aria-label={label}
    >
      <span className={styles.label}>{label}</span>
    </a>
  );
}
