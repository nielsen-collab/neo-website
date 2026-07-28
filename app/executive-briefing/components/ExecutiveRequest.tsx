"use client";

import { FormEvent, useState } from "react";

import PremiumPanel from "../../components/ui/PremiumPanel";
import PremiumDivider from "../../components/ui/PremiumDivider";

import PremiumInput from "../../components/ui/PremiumInput";
import PremiumTextarea from "../../components/ui/PremiumTextarea";
import PremiumCheckbox from "../../components/ui/PremiumCheckbox";

export default function ExecutiveRequest() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
    privacy: false,
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");


  function handleChange(
    field: string,
    value: string | boolean
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }


  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch(
        "/api/executive-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      if (!response.ok) {
        throw new Error("Sending failed");
      }


      setStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        message: "",
        privacy: false,
      });


    } catch (error) {

      console.error(error);

      setStatus("error");

    }
  }


  return (
    <PremiumPanel
      className="
        relative
        w-full
        max-w-[640px]
        rounded-[34px]
        p-8
        md:rounded-[40px]
        md:p-14
      "
    >

      {status === "success" ? (

        <div className="py-10 text-center">

          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            ✓
          </span>

          <h2 className="mt-8 text-[36px] font-extralight tracking-[-0.04em] text-slate-900">
            Vielen Dank.
          </h2>

          <p className="mx-auto mt-6 max-w-[420px] text-[18px] leading-[1.8] text-slate-600">
            Ihre Anfrage wurde erfolgreich übermittelt.
            <br />
            Ich melde mich persönlich bei Ihnen.
          </p>

        </div>

      ) : (

        <form onSubmit={handleSubmit}>

          <div className="flex items-center gap-3">

            <span className="h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.35)]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-600 md:text-[13px] md:tracking-[0.45em]">
              EXECUTIVE REQUEST
            </p>

          </div>


          <h2 className="mt-6 text-[42px] font-extralight leading-[0.95] tracking-[-0.055em] text-slate-900 md:mt-8 md:text-[50px]">

            Lassen Sie uns
            <br />
            sprechen.

          </h2>


          <div className="mt-6 w-20 md:mt-8 md:w-24">
            <PremiumDivider />
          </div>


          <p className="mt-6 max-w-[460px] text-[18px] font-light leading-[1.8] text-slate-600 md:mt-8 md:text-[20px] md:leading-[1.9]">

            Ein kurzer Überblick genügt.

            <br />
            <br />

            Ich melde mich persönlich bei Ihnen
            und wir vereinbaren gemeinsam den
            nächsten sinnvollen Schritt.

          </p>


          <div className="mt-10 space-y-5 md:mt-12 md:space-y-6">

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">

              <PremiumInput
                label="Vorname"
                placeholder="Max"
                value={formData.firstName}
                onChange={(e) =>
                  handleChange("firstName", e.target.value)
                }
                required
              />


              <PremiumInput
                label="Nachname"
                placeholder="Mustermann"
                value={formData.lastName}
                onChange={(e) =>
                  handleChange("lastName", e.target.value)
                }
                required
              />

            </div>


            <PremiumInput
              label="Unternehmen"
              placeholder="Unternehmen"
              value={formData.company}
              onChange={(e) =>
                handleChange("company", e.target.value)
              }
              required
            />


            <PremiumInput
              type="email"
              label="E-Mail"
              placeholder="name@unternehmen.de"
              value={formData.email}
              onChange={(e) =>
                handleChange("email", e.target.value)
              }
              required
            />


            <PremiumTextarea
              label="Nachricht"
              rows={5}
              placeholder="Beschreiben Sie Ihr Anliegen in wenigen Sätzen."
              value={formData.message}
              onChange={(e) =>
                handleChange("message", e.target.value)
              }
            />

          </div>


          <div className="mt-8 md:mt-10">

            <PremiumCheckbox
              checked={formData.privacy}
              onChange={(e) =>
                handleChange("privacy", e.target.checked)
              }
              required
            >

              Ich akzeptiere die Datenschutzerklärung und bin mit der Speicherung meiner Angaben zur Bearbeitung meiner Anfrage einverstanden.

            </PremiumCheckbox>

          </div>


          {status === "error" && (

            <p className="mt-6 text-center text-sm text-red-600">
              Die Anfrage konnte nicht gesendet werden.
              Bitte versuchen Sie es erneut.
            </p>

          )}


          <div className="mt-10 flex justify-center md:mt-14">

            <button
              type="submit"
              disabled={status === "loading"}
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-blue-600
                px-8
                py-[17px]
                text-[15px]
                font-semibold
                text-white
                shadow-[0_18px_40px_rgba(37,99,235,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-60
                md:px-12
              "
            >

              {status === "loading"
                ? "Wird gesendet..."
                : "Executive Briefing anfragen"}

            </button>

          </div>


        </form>

      )}

    </PremiumPanel>
  );
}