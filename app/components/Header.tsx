"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navigation = [
  { label: "Lösungen", href: "#services" },
  { label: "Arbeitsweise", href: "#process" },
  { label: "Gründer", href: "#founder" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`
          sticky
          top-0
          z-50
          border-b
          border-slate-200/70
          backdrop-blur-3xl
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-white/90 shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
              : "bg-white/75"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            max-w-[1560px]
            items-center
            justify-between
            px-6
            md:px-10
            lg:px-20
            transition-all
            duration-500
            ${scrolled ? "h-18" : "h-20"}
          `}
        >
          {/* Logo */}

          <a href="/" className="group relative flex-shrink-0">

            <Image
              src="/neo-logo.png"
              alt="NEO"
              width={300}
              height={100}
              priority
              className="
                h-14
                md:h-16
                w-auto
                transition-transform
                duration-500
                group-hover:scale-[1.02]
              "
            />

            <span
              className="
                absolute
                inset-0
                -z-10
                rounded-full
                bg-blue-500/10
                blur-3xl
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
            />

          </a>

          {/* Desktop Navigation */}

          <nav className="hidden xl:flex items-center gap-12">

            {navigation.map((item) => (

              <a
                key={item.label}
                href={item.href}
                className="
                  group
                  relative
                  py-2
                  text-[15px]
                  font-medium
                  tracking-[0.02em]
                  text-slate-600
                  transition-colors
                  duration-300
                  hover:text-slate-900
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    left-1/2
                    -bottom-1
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-blue-600
                    transition-all
                    duration-300
                    group-hover:w-8
                  "
                />
              </a>

            ))}

          </nav>

          {/* Desktop CTA */}

          <div className="hidden md:block">

            <a
              href="#kontakt"
              className="
                group
                relative
                overflow-hidden
                rounded-full
                bg-gradient-to-b
                from-blue-600
                to-blue-700
                px-7
                py-3
                text-[15px]
                font-semibold
                text-white
                shadow-[0_18px_40px_rgba(37,99,235,0.25)]
                transition-all
                duration-500
                hover:-translate-y-[2px]
                hover:shadow-[0_28px_60px_rgba(37,99,235,0.35)]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-full
                "
              />

              <span className="relative">
                Gespräch vereinbaren
              </span>

            </a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              xl:hidden
            "
          >
            <div className="space-y-1.5">

              <span className="block h-[2px] w-5 bg-slate-900" />
              <span className="block h-[2px] w-5 bg-slate-900" />
              <span className="block h-[2px] w-5 bg-slate-900" />

            </div>

          </button>

        </div>

      </header>

      {/* Mobile Menu */}

      <div
        className={`
          fixed
          inset-0
          z-40
          bg-white
          transition-all
          duration-500
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <div className="flex h-full flex-col justify-center px-10">

          {navigation.map((item) => (

            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
            className="
              mt-12
              rounded-full
              bg-blue-600
              py-4
              text-center
              text-white
              text-[18px]
              font-semibold
            "
          >
            Gespräch vereinbaren
          </a>

        </div>
      </div>
    </>
  );
}