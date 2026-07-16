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
          duration-300
          group-focus-within:text-blue-600
        "
      >
        {label}
      </label>

      {/* Textarea */}

      <textarea
        {...props}
        className={`
          min-h-[180px]
          w-full
          resize-none
          rounded-2xl
          border
          border-slate-200
          bg-white/80
          p-6
          text-[16px]
          font-light
          leading-8
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