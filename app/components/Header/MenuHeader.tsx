"use client";

import Image from "next/image";

type Props = {
  onClose: () => void;
};

export default function MenuHeader({
  onClose,
}: Props) {
  return (
    <header className="flex items-center justify-between">

      {/* Logo */}

      <a
        href="/"
        onClick={onClose}
        className="group relative flex-shrink-0"
      >
        <Image
          src="/neo-logo.png"
          alt="NEO"
          width={300}
          height={100}
          priority
          className="
            h-16
            w-auto

            transition-all
            duration-700

            group-hover:scale-[1.015]
          "
        />

        {/* ganz dezentes Markenlicht */}

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

      {/* Close */}

      <button
        onClick={onClose}
        aria-label="Menü schließen"
        className="
          group

          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full

          border
          border-slate-200/80

          bg-white/85
          backdrop-blur-xl

          shadow-[0_10px_24px_rgba(15,23,42,.05)]

          transition-all
          duration-500

          hover:-translate-y-[1px]
          hover:border-blue-200
          hover:shadow-[0_18px_40px_rgba(37,99,235,.10)]
        "
      >

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="
            h-5
            w-5

            text-slate-700

            transition-all
            duration-500

            group-hover:rotate-90
            group-hover:text-blue-600
          "
        >
          <path d="M6 6L18 18" />
          <path d="M18 6L6 18" />
        </svg>

      </button>

    </header>
  );
}