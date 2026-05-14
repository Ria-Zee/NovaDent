import { ArrowRight, PlayCircle, CalendarCheck, Phone, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden hero-gradient">
      <div className="animated-mesh" />
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-forest backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-teal" /> AI Practice Platform · Now in 4 countries
          </span>
          <h1 className="text-balance mt-8 font-serif text-[56px] leading-[0.95] tracking-[-0.04em] text-forest sm:text-7xl lg:text-[96px]">
            The AI Front Desk<br />
            <span className="italic text-forest/90">Your Dental Clinic Deserves</span>
          </h1>
          <p className="text-balance mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/65 sm:text-xl">
            NovaDent answers calls, books appointments, follows up on recalls, and delights your patients — 24/7. So your team can focus on chairside care, not the phone.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-sm font-semibold text-forest-foreground shadow-xl shadow-forest/25 transition hover:bg-forest-soft hover:shadow-2xl hover:shadow-forest/30">
              Start free 14-day trial
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/15 bg-white/70 px-7 py-4 text-sm font-semibold text-forest backdrop-blur transition hover:border-teal hover:text-teal">
              <PlayCircle className="h-4 w-4" /> Watch 2-min demo
            </a>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">No credit card · Setup in 24 hours · HIPAA + GDPR ready</p>
        </div>

        {/* Floating cards composition */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="glass relative rounded-3xl p-3 shadow-2xl shadow-forest/15">
            <div className="rounded-[20px] bg-forest p-10 sm:p-14">
              <div className="grid gap-8 sm:grid-cols-3">
                {[
                  { k: "92%", v: "Calls answered after-hours" },
                  { k: "3.4×", v: "More booked appointments" },
                  { k: "$48k", v: "Avg. recovered revenue/yr" },
                ].map((s) => (
                  <div key={s.k} className="text-center">
                    <div className="font-serif text-5xl tracking-tight text-teal sm:text-6xl">{s.k}</div>
                    <div className="mt-3 text-sm text-forest-foreground/70">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating booking card */}
          <div className="glass animate-float absolute -left-4 -top-10 hidden w-[260px] rounded-2xl p-4 sm:block lg:-left-16">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/15 text-teal">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">New booking</p>
                <p className="text-sm font-semibold text-forest">Mrs. Bello · Cleaning</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-white/60 px-3 py-2 text-xs">
              <span className="text-muted-foreground">Fri 11:00 AM</span>
              <span className="rounded-full bg-teal/15 px-2 py-0.5 font-semibold text-teal">Confirmed</span>
            </div>
          </div>

          {/* Floating chat bubble */}
          <div className="glass animate-float-slow absolute -right-4 -bottom-10 hidden w-[280px] -rotate-2 rounded-2xl p-4 sm:block lg:-right-16">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-forest text-forest-foreground">
                <Phone className="h-3.5 w-3.5" />
              </span>
              Nova · Live
            </div>
            <p className="mt-3 rounded-2xl rounded-tl-sm bg-secondary px-3 py-2 text-sm text-forest">
              "Of course, I can fit you in tomorrow at 9:40am."
            </p>
            <p className="mt-2 text-right text-[11px] text-muted-foreground">just now</p>
          </div>
        </div>
      </div>
    </section>
  );
}
