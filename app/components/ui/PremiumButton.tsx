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
  return (
    <a
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-10
        py-[17px]
        text-[15px]
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          variant === "primary"
            ? `
              bg-blue-600
              text-white
              shadow-[0_18px_40px_rgba(37,99,235,0.25)]
              hover:bg-blue-700
            `
            : `
              border
              border-slate-300
              bg-white
              text-slate-700
              hover:border-blue-600
              hover:text-blue-600
            `
        }

        ${className}
      `}
    >
      {children}
    </a>
  );
}