import { InputHTMLAttributes } from "react";

type PremiumCheckboxProps = {
  children: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export default function PremiumCheckbox({
  children,
  className = "",
  ...props
}: PremiumCheckboxProps) {
  return (
    <label className="group flex cursor-pointer items-start gap-4">

      <input
        type="checkbox"
        {...props}
        className={`
          mt-1
          h-5
          w-5
          rounded-md
          border-slate-300
          text-blue-600
          accent-blue-600
          transition-all
          duration-300
          focus:ring-4
          focus:ring-blue-100
          ${className}
        `}
      />

      <span
        className="
          text-[15px]
          font-light
          leading-7
          text-slate-500
          transition-colors
          duration-300
          group-hover:text-slate-700
        "
      >
        {children}
      </span>

    </label>
  );
}