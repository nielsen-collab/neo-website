import { ReactNode } from "react";

type NeoSectionProps = {
  id?: string;
  children: ReactNode;
};

export default function NeoSection({
  id,
  children,
}: NeoSectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden py-44"
    >
      <div className="relative mx-auto max-w-[1400px] px-12">
        {children}
      </div>
    </section>
  );
}