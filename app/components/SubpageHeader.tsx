"use client";

import Image from "next/image";
import Link from "next/link";

export default function SubpageHeader() {
  return (
    <header className="relative z-40">

      <div className="mx-auto flex max-w-[1560px] items-center justify-between px-6 md:px-10 lg:px-20 h-[84px]">

        {/* Logo */}

        <Link
          href="/"
          className="group flex-shrink-0"
        >

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

        </Link>

        {/* Startseite */}

        <Link
          href="/"
          className="
            group
            flex
            items-center
            gap-2

            text-[15px]
            font-medium
            text-slate-500

            transition-colors
            duration-300

            hover:text-slate-900
          "
        >

          <span>Startseite</span>

          <span
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>

        </Link>

      </div>

    </header>
  );
}