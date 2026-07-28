import { TextareaHTMLAttributes } from "react";

type PremiumTextareaProps = {
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function PremiumTextarea({
  label,
  className = "",
  ...props
}: PremiumTextareaProps) {
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
          duration-500
          group-focus-within:text-blue-600
        "
      >
        {label}
      </label>

      {/* Textarea */}

      <textarea
        {...props}
        className={`
          min-h-[190px]
          w-full
          resize-none

          rounded-[20px]

          border
          border-slate-200/80

          bg-gradient-to-b
          from-white
          to-slate-50/60

          p-6

          text-[16px]
          font-light
          leading-8
          text-slate-800

          placeholder:text-slate-400
          placeholder:font-light

          outline-none

          shadow-[0_1px_2px_rgba(15,23,42,0.03)]

          transition-all
          duration-500

          hover:border-slate-300
          hover:shadow-[0_8px_20px_rgba(15,23,42,0.04)]

          focus:border-blue-500
          focus:bg-white
          focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08),0_12px_30px_rgba(15,23,42,0.05)]

          ${className}
        `}
      />

    </div>
  );
}