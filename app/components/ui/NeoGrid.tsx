import { ReactNode } from "react";

type NeoGridProps = {
  children: ReactNode;
  className?: string;
};

export default function NeoGrid({
  children,
  className = "",
}: NeoGridProps) {
  return (
    <div
      className={`
        relative
        mx-auto
        w-full
        max-w-[1600px]
        px-6
        md:px-8
        lg:px-20
        ${className}
      `}
    >
      {children}
    </div>
  );
}