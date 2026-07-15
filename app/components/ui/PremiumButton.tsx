import Link from "next/link";
import { ReactNode } from "react";

type PremiumButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function PremiumButton({
  href,
  children,
  variant = "primary",
  className = "",
}: PremiumButtonProps) {
  const primary =
    "border border-blue-500/70 bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)]";

  const secondary =
    "border border-slate-200 bg-white/70 text-slate-700 backdrop-blur-xl shadow-[0_12px_35px_rgba(15,23,42,0.06)]";

  return (
    <Link
      href={href}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        px-9
        py-4
        text-sm
        font-semibold
        transition-all
        duration-500
        hover:-translate-y-[2px]
        hover:shadow-[0_26px_60px_rgba(15,23,42,0.14)]
        ${
          variant === "primary"
            ? primary
            : secondary
        }
        ${className}
      `}
    >
      {/* Lichtreflex */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />

      {/* obere Lichtkante */}

      <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-white/40" />

      <span className="relative inline-flex items-center gap-3">

        {children}

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>

      </span>
    </Link>
  );
}