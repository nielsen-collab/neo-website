type ConversationInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export default function ConversationInput({
  label,
  type = "text",
  placeholder,
  required = false,
  className = "",
}: ConversationInputProps) {
  return (
    <div className={className}>

      <label
        className="
          mb-3
          block
          text-[13px]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-slate-500
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-blue-600">*</span>
        )}

      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          h-14
          w-full

          rounded-[18px]

          border
          border-slate-200/80

          bg-gradient-to-b
          from-white
          to-slate-50/60

          px-5

          text-[16px]
          font-light
          text-slate-800

          outline-none

          transition-all
          duration-500

          placeholder:text-slate-400
          placeholder:font-light

          shadow-[0_1px_2px_rgba(15,23,42,0.03)]

          hover:border-slate-300
          hover:shadow-[0_8px_20px_rgba(15,23,42,0.04)]

          focus:border-blue-500
          focus:bg-white

          focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08),0_12px_30px_rgba(15,23,42,0.05)]
        "
      />

    </div>
  );
}