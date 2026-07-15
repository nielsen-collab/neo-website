"use client";

import { navigation } from "./navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  return (
    <div
      className={`
        fixed
        inset-0
        z-40
        bg-white
        transition-all
        duration-500
        ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
    >
      <div className="flex h-full flex-col justify-center px-10">

        {navigation.map((item) => (

          <a
            key={item.id}
            href={item.href}
            onClick={onClose}
            className="
              border-b
              border-slate-200
              py-6
              text-[34px]
              font-extralight
              tracking-[-0.03em]
              text-slate-900
            "
          >
            {item.label}
          </a>

        ))}

        <a
          href="#kontakt"
          onClick={onClose}
          className="
            mt-12
            rounded-full
            bg-blue-600
            py-4
            text-center
            text-[18px]
            font-semibold
            text-white
          "
        >
          Gespräch vereinbaren
        </a>

      </div>
    </div>
  );
}