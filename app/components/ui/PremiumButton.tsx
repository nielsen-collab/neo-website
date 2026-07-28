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
    <a
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-blue-600
        px-10
        py-[17px]
        text-[15px]
        font-semibold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-blue-700
      "
    >
      {children}
    </a>
  );
}