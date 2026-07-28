import PremiumCard from "../ui/PremiumCard";

type OfficeSectionProps = {
  title: string;
  description: string;
  contactTitle: string;
  email: string;
  phone: string;
};

export default function OfficeSection({
  title,
  description,
  contactTitle,
  email,
  phone,
}: OfficeSectionProps) {
  return (
    <div className="w-full">

      <PremiumCard className="h-full p-6 md:p-7 lg:p-8">

        <h2 className="text-[28px] font-extralight leading-[1.08] tracking-[-0.03em] text-slate-900 md:text-[30px] lg:text-[32px]">
          {title}
        </h2>

        <p className="mt-4 max-w-[600px] text-[16px] leading-[1.75] text-slate-600 md:text-[17px] lg:text-[18px] lg:leading-[1.8]">
          {description}
        </p>

        <div className="mt-6 h-px w-16 bg-gradient-to-r from-blue-500/70 to-transparent" />

        <div className="mt-6">

          <div className="text-[20px] font-medium tracking-[-0.02em] text-blue-600">
            {contactTitle}
          </div>

          <a
            href={`mailto:${email}`}
            className="
              mt-4
              inline-block
              text-[17px]
              font-light
              text-slate-600
              transition-colors
              duration-300
              hover:text-blue-600
            "
          >
            {email}
          </a>

          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="
              mt-2
              block
              w-fit
              text-[16px]
              font-light
              text-slate-500
              transition-colors
              duration-300
              hover:text-slate-900
            "
          >
            T&nbsp;&nbsp;{phone}
          </a>

        </div>

      </PremiumCard>

    </div>
  );
}