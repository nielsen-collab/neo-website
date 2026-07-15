import { ReactNode } from "react";

type NeoHeadlineProps = {
  eyebrow?: string;
  title: ReactNode;
  center?: boolean;
};

import NeoDot from "../foundation/NeoDot";
import NeoDivider from "./NeoDivider";

export default function NeoHeadline({
  eyebrow,
  title,
  center = false,
}: NeoHeadlineProps) {
  return (
    <div className={center ? "text-center" : ""}>

      {eyebrow && (
        <div
          className={`mb-10 flex items-center gap-3 ${
            center ? "justify-center" : ""
          }`}
        >
          <NeoDot />

          <p className="text-[13px] font-semibold uppercase tracking-[0.45em] text-blue-600">
            {eyebrow}
          </p>
        </div>
      )}

      <h2 className="text-[60px] font-extralight leading-[1.08] tracking-[-0.045em] text-slate-900">
        {title}
      </h2>

      <NeoDivider center={center} />

    </div>
  );
}