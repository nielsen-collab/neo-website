type NeoDotProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function NeoDot({
  size = "md",
  className = "",
}: NeoDotProps) {
  const sizes = {
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3.5 w-3.5",
  };

  return (
    <span
      className={`inline-block rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.30)] ${sizes[size]} ${className}`}
    />
  );
}