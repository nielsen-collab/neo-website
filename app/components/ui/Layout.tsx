import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function Layout({
  children,
  className = "",
}: LayoutProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1500px]
        px-6
        md:px-10
        lg:px-20
        ${className}
      `}
    >
      {children}
    </div>
  );
}