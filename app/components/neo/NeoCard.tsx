import { ReactNode } from "react";

type NeoCardProps = {
  children: ReactNode;
};

export default function NeoCard({
  children,
}: NeoCardProps) {
  return (
    <div className="rounded-[34px] border border-slate-200/70 bg-white/70 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
      {children}
    </div>
  );
}