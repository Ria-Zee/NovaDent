"use client";

export function Logo({ className = "h-9 w-9", animate = false }: { className?: string; animate?: boolean }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className} cursor-pointer transition-transform hover:animate-tooth-spring`}
      aria-hidden
      style={{
        perspective: "1000px",
      }}
    >
      {/* SVG Noise Filter */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="tooth-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.5" />
          </filter>
        </defs>
      </svg>

      {/* 3D CSS Tooth */}
      <div
        className={`relative w-full h-full ${animate ? "animate-tooth-float" : ""}`}
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(0deg)",
        }}
      >
        {/* Main tooth shape */}
        <svg
          viewBox="0 0 64 80"
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 8px 16px rgba(27, 67, 50, 0.35))",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Glossy highlight using radial gradient */}
          <defs>
            <radialGradient id="tooth-gloss" cx="35%" cy="30%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>
            <linearGradient id="tooth-shade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8f7f4" />
              <stop offset="100%" stopColor="#e8e4df" />
            </linearGradient>
          </defs>

          {/* Tooth crown - main body */}
          <path
            d="M32 8 Q48 12 48 28 Q48 48 32 72 Q16 48 16 28 Q16 12 32 8 Z"
            fill="url(#tooth-shade)"
            stroke="#d4ccc4"
            strokeWidth="0.5"
          />

          {/* Left facet (3D effect) */}
          <path
            d="M32 8 L20 16 Q16 28 16 28 Q16 48 32 72 L32 8 Z"
            fill="rgba(200, 195, 185, 0.4)"
          />

          {/* Right facet (3D effect) */}
          <path
            d="M32 8 L44 16 Q48 28 48 28 Q48 48 32 72 L32 8 Z"
            fill="rgba(220, 210, 200, 0.3)"
          />

          {/* Gloss overlay */}
          <ellipse cx="32" cy="22" rx="12" ry="14" fill="url(#tooth-gloss)" />

          {/* Root shadow */}
          <ellipse cx="32" cy="68" rx="10" ry="4" fill="rgba(27, 67, 50, 0.15)" />
        </svg>
      </div>

      {/* Shadow that intensifies on hover */}
      <span className="absolute inset-x-1 -bottom-1 h-2 rounded-full bg-forest/25 blur-md transition-all duration-300 group-hover:h-3 group-hover:bg-forest/40 group-hover:blur-lg" />
    </span>
  );
}
