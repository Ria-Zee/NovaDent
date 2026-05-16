"use client";

import { PhoneOff, CalendarX, UserX, Clock4, TrendingDown } from "lucide-react";

const pains = [
  { icon: PhoneOff, title: "Missed calls = lost patients", body: "30%+ of calls go unanswered. Each missed call is a $600 patient walking to your competitor." },
  { icon: CalendarX, title: "Empty chairs, paid staff", body: "No-shows and last-minute cancellations bleed thousands every month." },
  { icon: UserX, title: "Recalls slip through", body: "Hygiene patients forget. No one has time to chase 200 reminders a week." },
  { icon: Clock4, title: "Front desk burnout", body: "Your receptionist can't be on the phone, in the chat, and at the counter at once." },
  { icon: TrendingDown, title: "Revenue stalls", body: "You're booked solid this week — and have no idea what next month looks like." },
];

export function Problem() {
  return (
    <section className="relative bg-navy py-24 text-navy-foreground sm:py-32 overflow-hidden">
      {/* Watermark image background */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 opacity-8 blur-2xl pointer-events-none">
        <img
          src="/assets/smile-macro.jpg"
          alt=""
          className="w-full h-full object-cover rounded-full"
          style={{
            filter: "blur(8px) brightness(0.3)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">The reality</span>
          <h2 className="mt-4 font-serif text-4xl text-navy-foreground sm:text-5xl">
            Running a dental clinic shouldn't feel like running a call center.
          </h2>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => {
            const I = p.icon;
            return (
              <div
                key={p.title}
                className="group perspective cursor-pointer"
                style={{
                  perspective: "1000px",
                }}
              >
                <div
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-350 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_24px_60px_rgba(15,65,86,0.2)]"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "perspective(1000px) rotateX(2deg) rotateY(0deg)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform =
                      "perspective(1000px) translateY(-12px) rotateX(-4deg) rotateY(4deg) scale(1.02)";
                    el.style.boxShadow = "0 24px 60px rgba(15,65,86,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "perspective(1000px) rotateX(2deg) rotateY(0deg)";
                    el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                  }}
                >
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 transition-all duration-300"
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
                    <I className="h-5 w-5 text-navy-foreground" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-navy-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">{p.body}</p>
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
