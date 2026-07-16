import { InputHTMLAttributes } from "react";

type PremiumInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function PremiumInput({
  label,
  className = "",
  ...props
}: PremiumInputProps) {
  return (
    <div className="group">

      {/* Label */}

      <label
        className="
          mb-3
          block
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.28em]
          text-slate-500
          transition-colors
          duration-300
          group-focus-within:text-blue-600
        "
      >
        {label}
      </label>

      {/* Input */}

      <input
        {...props}
        className={`
          h-14
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white/80
          px-6
          text-[16px]
          font-light
          text-slate-800
          placeholder:text-slate-300
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:bg-white
          focus:shadow-[0_0_0_5px_rgba(37,99,235,0.08)]
          ${className}
        `}
      />

    </div>
  );
}