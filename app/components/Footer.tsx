import PremiumSurface from "./ui/PremiumSurface";
import PremiumHeading from "./ui/PremiumHeading";
import PremiumButton from "./ui/PremiumButton";
import PremiumDivider from "./ui/PremiumDivider";

type FooterProps = {
  showCTA?: boolean;
};

export default function Footer({
  showCTA = true,
}: FooterProps) {
  return (
    <PremiumSurface
      className={
        showCTA
          ? "pt-10 pb-16 lg:pt-14 lg:pb-24"
          : "pt-10 pb-16 lg:pt-20 lg:pb-24"
      }
    >
      <div className="mx-auto max-w-[1300px] px-6 md:px-10 lg:px-20">

        {showCTA && (
          <>
            <PremiumHeading
              align="center"
              eyebrow="KONTAKT"
              title="Gute Entscheidungen beginnen mit einem Gespräch."
            />

            <p className="mx-auto mt-8 max-w-[760px] text-center text-[18px] leading-[1.8] text-slate-600 md:mt-10 md:text-[20px] lg:mt-12 lg:text-[22px] lg:leading-[1.9]">
              Wenn Sie Energieeffizienz,
              Unternehmensstrategie und technische
              Entscheidungen ganzheitlich betrachten möchten,
              freuen wir uns auf den Austausch.
            </p>

            <div className="mt-12 flex justify-center lg:mt-16">
              <PremiumButton href="mailto:info@neo.de">
                Gespräch vereinbaren
              </PremiumButton>
            </div>

            <div className="mx-auto mt-16 max-w-[1100px] lg:mt-28">
              <PremiumDivider />
            </div>
          </>
        )}

        {!showCTA && (
          <div className="mx-auto mb-10 max-w-[1100px]">
            <PremiumDivider />
          </div>
        )}

        <div className="mt-8 flex flex-col items-center justify-between gap-6 text-center text-[14px] text-slate-500 md:text-[15px] lg:mt-10 lg:flex-row lg:text-left">

          <p>
            © 2026 NEO · Nielsen Energy Operations
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a
              href="/impressum"
              className="transition-colors duration-300 hover:text-slate-900"
            >
              Impressum
            </a>

            <a
              href="/datenschutz"
              className="transition-colors duration-300 hover:text-slate-900"
            >
              Datenschutz
            </a>
          </div>

        </div>

      </div>
    </PremiumSurface>
  );
}