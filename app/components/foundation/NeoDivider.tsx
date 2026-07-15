type NeoDividerProps = {
  center?: boolean;
};

export default function NeoDivider({
  center = false,
}: NeoDividerProps) {
  return (
    <div
      className={`mt-14 h-px w-24 bg-slate-200 ${
        center ? "mx-auto" : ""
      }`}
    />
  );
}