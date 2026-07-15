type NeoButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function NeoButton({
  href,
  children,
}: NeoButtonProps) {
  return (
    <a
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-blue-600
        px-8
        py-4
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        shadow-[0_12px_35px_rgba(37,99,235,0.20)]
        hover:-translate-y-0.5
        hover:bg-blue-700
        hover:shadow-[0_20px_50px_rgba(37,99,235,0.30)]
      "
    >
      {children}
    </a>
  );
}