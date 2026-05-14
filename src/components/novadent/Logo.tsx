import toothImg from "@/assets/tooth-3d.png";

export function Logo({ className = "h-9 w-9", animate = false }: { className?: string; animate?: boolean }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className} ${animate ? "animate-tooth-bounce" : ""}`}
      aria-hidden
    >
      <span className="absolute inset-x-1 -bottom-1 h-2 rounded-full bg-forest/25 blur-md" />
      <img
        src={toothImg}
        alt=""
        width={64}
        height={64}
        className="relative h-full w-full object-contain drop-shadow-[0_6px_12px_rgba(27,67,50,0.25)]"
      />
    </span>
  );
}
