"use client";

import { PhoneCall, CalendarCheck, BellRing, Users, TrendingUp, Check } from "lucide-react";

const wins = [
  { icon: PhoneCall, title: "Every call, answered", body: "AI voice agent picks up in 2 rings, 24/7. Sounds human, books like a pro." },
  { icon: CalendarCheck, title: "Chairs stay full", body: "Smart waitlist auto-fills cancellations within minutes via SMS + WhatsApp." },
  { icon: BellRing, title: "Recalls run themselves", body: "Personalized recall sequences book hygiene patients while you sleep." },
  { icon: Users, title: "One calm front desk", body: "AI handles 80% of routine asks so your team only sees what matters." },
  { icon: TrendingUp, title: "Predictable growth", body: "Live revenue forecast, attribution, and patient lifetime value — built in." },
];

export function Solution() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Tilted floating image */}
      <div className="absolute -left-32 top-1/3 hidden lg:block">
        <div
          className="w-72 h-80 rounded-3xl shadow-2xl shadow-forest/30 overflow-hidden animate-float"
          style={{
            transform: "rotate(-3deg)",
          }}
        >
          <img
            src="/assets/dentist-patient.jpg"
            alt="Dentist with patient"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal">The NovaDent way</span>
          <h2 className="text-balance mt-4 font-serif text-5xl leading-[0.95] tracking-tight text-forest sm:text-6xl">
            One platform.<br /><span className="italic">Five problems gone.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We rebuilt the dental front office around AI — so the busywork disappears and the revenue shows up.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wins.map((w) => {
            const I = w.icon;
            return (
              <div
                key={w.title}
                className="group perspective"
                style={{
                  perspective: "1000px",
                }}
              >
                <div
                  className="glass relative rounded-3xl p-7 transition-all duration-350"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "perspective(1000px) rotateX(2deg) rotateY(0deg)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform =
                      "perspective(1000px) translateY(-12px) rotateX(-4deg) rotateY(4deg) scale(1.02)";
                    el.style.boxShadow = "0 24px 60px rgba(13,148,136,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "perspective(1000px) rotateX(2deg) rotateY(0deg)";
                    el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                  }}
                >
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/12 text-teal transition-all duration-300"
                    style={{
                      transform: "translateY(0px) rotate(0deg)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px) rotate(5deg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0px) rotate(0deg)";
                    }}
                  >
                    <I className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-forest">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-teal">
                    <Check className="h-3.5 w-3.5" /> Live in 24 hours
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
