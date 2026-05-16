"use client";

import { useState } from "react";

export function SocialProof() {
  const [paused, setPaused] = useState(false);

  const clinics = [
    { flag: "🇳🇬", name: "Smile Lagos Dental" },
    { flag: "🇬🇧", name: "Kensington Dental Care" },
    { flag: "🇦🇪", name: "Dubai Marina Dentistry" },
    { flag: "🇨🇦", name: "Northern Lights Dental" },
    { flag: "🇳🇬", name: "Abuja Family Dental" },
    { flag: "🇬🇧", name: "Manchester Smile Studio" },
  ];

  return (
    <section className="border-y border-border/60 bg-card/60 py-12 backdrop-blur overflow-hidden">
      <div className="mx-auto w-full">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by modern clinics across four continents
        </p>

        {/* Marquee Container */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Row 1 - Left */}
          <div className={`flex gap-6 mb-6 ${paused ? "animate-marquee-left paused" : "animate-marquee-left"}`}>
            {[...clinics, ...clinics].map((c, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/60 border border-forest/10 hover:border-teal hover:bg-white/80 transition-all duration-300 whitespace-nowrap flex-shrink-0 shadow-sm"
              >
                <span className="text-lg" aria-hidden>
                  {c.flag}
                </span>
                <span className="font-serif text-sm text-forest">{c.name}</span>
                <span className="ml-1.5 h-2 w-2 rounded-full bg-teal animate-pulse" />
              </div>
            ))}
          </div>

          {/* Row 2 - Right */}
          <div className={`flex gap-6 ${paused ? "animate-marquee-right paused" : "animate-marquee-right"}`}>
            {[...clinics.slice().reverse(), ...clinics.slice().reverse()].map((c, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/60 border border-forest/10 hover:border-teal hover:bg-white/80 transition-all duration-300 whitespace-nowrap flex-shrink-0 shadow-sm"
              >
                <span className="text-lg" aria-hidden>
                  {c.flag}
                </span>
                <span className="font-serif text-sm text-forest">{c.name}</span>
                <span className="ml-1.5 h-2 w-2 rounded-full bg-teal animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient masks on sides */}
        <style>{`
          @supports (mask-image: linear-gradient(to right, black, transparent)) {
            [onMouseEnter] {
              mask-image: linear-gradient(to right,
                transparent,
                transparent 2rem,
                black 10%,
                black 90%,
                transparent 98%,
                transparent
              );
            }
          }
        `}</style>
      </div>
    </section>
  );
}
