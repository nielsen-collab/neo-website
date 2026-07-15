"use client";

import { navigation } from "./navigation";

type Props = {
  activeSection: string;
};

export default function DesktopNavigation({ activeSection }: Props) {
  return (
    <nav className="hidden xl:flex items-center gap-12">
      {navigation.map((item) => {
        const active = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={item.href}
            className={`
              group
              relative
              py-2
              text-[15px]
              font-medium
              tracking-[0.02em]
              transition-all
              duration-300
              ${
                active
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }
            `}
          >
            {item.label}

            <span
              className={`
                absolute
                left-1/2
                -bottom-1
                h-[2px]
                -translate-x-1/2
                rounded-full
                bg-blue-600
                transition-all
                duration-300
                ${
                  active
                    ? "w-8"
                    : "w-0 group-hover:w-8"
                }
              `}
            />
          </a>
        );
      })}
    </nav>
  );
}