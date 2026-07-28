"use client";

import { navigation } from "./navigation";

type Props = {
  onNavigate: () => void;
};

export default function MenuNavigation({
  onNavigate,
}: Props) {
  return (
    <nav className="flex flex-col">

      {navigation.map((item, index) => (

        <a
          key={item.id}
          href={item.href}
          onClick={onNavigate}
          className="
            group

            flex
            items-center
            justify-between

            py-9

            border-b
            border-slate-100

            transition-all
            duration-700
            ease-[cubic-bezier(0.25,1,0.5,1)]
          "
        >

          <div className="flex items-center gap-6">

            <span
              className="
                text-[13px]
                font-semibold
                tracking-[0.32em]

                text-blue-600

                opacity-60

                transition-all
                duration-500

                group-hover:opacity-100
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3
              className="
                text-[42px]
                md:text-[46px]

                font-extralight

                leading-none

                tracking-[-0.055em]

                text-slate-900

                transition-all
                duration-500

                group-hover:text-blue-600
                group-hover:translate-x-1
              "
            >
              {item.label}
            </h3>

          </div>

          <span
            className="
              text-[24px]

              text-slate-300

              transition-all
              duration-500

              opacity-0
              -translate-x-3

              group-hover:opacity-100
              group-hover:translate-x-0
              group-hover:text-blue-600
            "
          >
            →
          </span>

        </a>

      ))}

    </nav>
  );
}