import { ReactNode } from "react";
import NeoDot from "../../foundation/NeoDot";

type NeoQuoteProps = {
  children: ReactNode;
};

export default function NeoQuote({
  children,
}: NeoQuoteProps) {
  return (
    <div className="mx-auto max-w-[900px] py-20 text-center">

      <div className="mb-8 flex justify-center">
        <NeoDot size="lg" />
      </div>

      <blockquote className="text-[42px] font-extralight leading-[1.4] tracking-[-0.03em] text-slate-900">
        {children}
      </blockquote>

    </div>
  );
}