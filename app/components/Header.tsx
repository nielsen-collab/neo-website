"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import DesktopNavigation from "./Header/DesktopNavigation";
import MobileMenu from "./Header/MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-slate-200/70 backdrop-blur-3xl transition-all duration-500 ${
          scrolled
            ? "bg-white/90 shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
            : "bg-white/75"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1560px] items-center justify-between px-6 md:px-10 lg:px-20 transition-all duration-500 ${
            scrolled ? "h-[72px]" : "h-20"
          }`}
        >
          <a href="/" className="group relative flex-shrink-0">
            <Image
              src="/neo-logo.png"
              alt="NEO"
              width={300}
              height={100}
              priority
              className="h-14 w-auto transition-transform duration-500 group-hover:scale-[1.02] md:h-16"
            />
          </a>

          <DesktopNavigation activeSection="" />

          <div className="hidden md:block">
            <a
              href="/executive-briefing"
              className="rounded-full bg-gradient-to-b from-blue-600 to-blue-700 px-7 py-3 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-[2px]"
            >
              Gespräch vereinbaren
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white xl:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-[2px] w-5 bg-slate-900" />
              <span className="block h-[2px] w-5 bg-slate-900" />
              <span className="block h-[2px] w-5 bg-slate-900" />
            </div>
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}