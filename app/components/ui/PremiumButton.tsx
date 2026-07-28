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
    `
      border border-blue-500/65

      bg-gradient-to-b
      from-blue-600
      via-blue-600
      to-blue-700

      text-white

      shadow-[0_10px_24px_rgba(37,99,235,0.14),0_24px_60px_rgba(37,99,235,0.16)]
    `;

  const secondary =
    `
      border border-slate-200/70

      bg-gradient-to-b
      from-white
      to-slate-50/80

      text-slate-700

      shadow-[0_8px_18px_rgba(15,23,42,0.04),0_20px_48px_rgba(15,23,42,0.05)]
    `;

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

        px-10
        py-[17px]

        text-[15px]
        font-semibold
        tracking-[0.01em]

        transition-all
        duration-700
        ease-[cubic-bezier(0.25,1,0.5,1)]

        hover:-translate-y-[2px]
        hover:scale-[1.015]

        hover:shadow-[0_14px_30px_rgba(37,99,235,0.16),0_34px_80px_rgba(15,23,42,0.10)]

        active:translate-y-0
        active:scale-[0.995]

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
          via-white/10
          to-transparent

          transition-transform
          duration-[1800ms]
          ease-[cubic-bezier(0.25,1,0.5,1)]

          group-hover:translate-x-full
        "
      />

      {/* obere Lichtkante */}

      <span
        className="
          pointer-events-none
          absolute
          inset-x-6
          top-0

          h-px

          bg-white/35
        "
      />

      {/* Inhalt */}

      <span className="relative inline-flex items-center gap-3">

        {children}

        <span
          className="
            transition-transform
            duration-700
            ease-[cubic-bezier(0.25,1,0.5,1)]
            group-hover:translate-x-1
          "
        >
          →
        </span>

      </span>

    </Link>
  );
}