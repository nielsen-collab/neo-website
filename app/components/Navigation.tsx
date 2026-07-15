"use client";

import Link from "next/link";

const items = [
  {
    label: "Prinzip",
    href: "#prinzip",
  },
  {
    label: "Leistungen",
    href: "#leistungen",
  },
  {
    label: "Prozess",
    href: "#prozess",
  },
  {
    label: "Gründer",
    href: "#gruender",
  },
  {
    label: "Kontakt",
    href: "#kontakt",
  },
];

export default function Navigation() {
  return (
    <header className="sticky top-6 z-50 px-6">

      <div
        className="
          mx-auto
          flex
          max-w-[1180px]
          items-center
          justify-between

          rounded-full

          border
          border-white/40

          bg-white/70

          backdrop-blur-2xl

          shadow-[0_18px_60px_rgba(15,23,42,.08)]

          ring-1
          ring-white/60

          px-8
          py-4
        "
      >

        {/* Logo */}

        <Link
          href="/"
          className="
            flex
            items-center
            gap-3
          "
        >

          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

          <span
            className="
              text-[22px]
              font-light
              tracking-[-0.03em]
              text-slate-900
            "
          >
            NEO
          </span>

        </Link>

        {/* Navigation */}

        <nav className="flex items-center gap-10">

          {items.map((item) => (

            <a
              key={item.href}
              href={item.href}
              className="
                relative
                text-[15px]
                font-medium
                text-slate-600

                transition-all
                duration-300

                hover:text-slate-900
              "
            >

              {item.label}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0

                  h-px
                  w-0

                  bg-blue-600

                  transition-all
                  duration-300

                  group-hover:w-full
                "
              />

            </a>

          ))}

        </nav>

      </div>

    </header>
  );
}