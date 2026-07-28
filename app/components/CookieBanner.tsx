"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("neo-cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    localStorage.setItem(
      "neo-cookie-consent",
      "accepted"
    );

    setVisible(false);
  }

  function acceptNecessary() {
    localStorage.setItem(
      "neo-cookie-consent",
      "necessary"
    );

    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      className="
        fixed
        bottom-6
        left-6
        right-6
        z-[100]
        mx-auto
        max-w-[520px]

        rounded-[32px]

        border
        border-white/70

        bg-white/90

        p-7

        shadow-[0_35px_90px_rgba(15,23,42,0.18)]

        backdrop-blur-2xl

        md:left-auto
        md:right-8
      "
    >

      <div className="flex items-center gap-3">

        <span
          className="
            h-3
            w-3
            rounded-full
            bg-blue-600
            shadow-[0_0_18px_rgba(37,99,235,0.35)]
          "
        />

        <p
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.35em]
            text-blue-600
          "
        >
          NEO PRIVATSPHÄRE
        </p>

      </div>


      <h3
        className="
          mt-5
          text-[24px]
          font-extralight
          tracking-[-0.03em]
          text-slate-900
        "
      >
        Ihre Privatsphäre ist uns wichtig.
      </h3>


      <p
        className="
          mt-4
          text-[15px]
          leading-7
          text-slate-600
        "
      >
        Wir verwenden Cookies und ähnliche Technologien,
        um die Funktionalität unserer Website sicherzustellen
        und unser Angebot weiter zu verbessern.
      </p>


      <a
        href="/datenschutz"
        className="
          mt-4
          inline-block
          text-[14px]
          font-medium
          text-blue-600
          transition-colors
          hover:text-blue-800
        "
      >
        Mehr erfahren
      </a>


      <div
        className="
          mt-6
          flex
          flex-col
          gap-3

          sm:flex-row
        "
      >

        <button
          onClick={acceptAll}
          className="
            flex-1
            rounded-full
            bg-blue-600
            px-6
            py-3

            text-[14px]
            font-semibold
            text-white

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:bg-blue-700
          "
        >
          Alle akzeptieren
        </button>


        <button
          onClick={acceptNecessary}
          className="
            flex-1

            rounded-full

            border
            border-slate-300

            bg-white

            px-6
            py-3

            text-[14px]
            font-semibold
            text-slate-700

            transition-all
            duration-300

            hover:border-blue-600
            hover:text-blue-600
          "
        >
          Nur notwendige
        </button>

      </div>

    </div>
  );
}