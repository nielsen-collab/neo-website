import Link from "next/link";
import { ReactNode } from "react";

type PremiumButtonProps = {
  href: string;
  children: ReactNode;
};

export default function PremiumButton({
  href,
  children,
}: PremiumButtonProps) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-block",
        padding: "16px 28px",
        background: "#2563eb",
        color: "white",
        borderRadius: "9999px",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
}