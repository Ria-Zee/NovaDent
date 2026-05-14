import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_oklch(0.62_0.11_187/0.12),_transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-teal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" /> AI Practice Platform
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-navy sm:text-6xl lg:text-7xl">
            The AI Front Desk Your Dental Clinic Deserves
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            NovaDent answers calls, books appointments, follows up on recalls, and delights your patients — 24/7. So your team can focus on chairside care, not the phone.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground shadow-lg shadow-navy/20 transition hover:bg-navy-soft">
              Start free 14-day trial
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal">
              <PlayCircle className="h-4 w-4" /> Watch 2-min demo
            </a>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">No credit card required · Setup in 24 hours</p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-navy/10">
            <div className="rounded-xl bg-navy p-8 sm:p-12">
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { k: "92%", v: "Calls answered after-hours" },
                  { k: "3.4×", v: "More booked appointments" },
                  { k: "$48k", v: "Avg. recovered revenue/yr" },
                ].map((s) => (
                  <div key={s.k} className="text-center">
                    <div className="font-serif text-4xl text-teal sm:text-5xl">{s.k}</div>
                    <div className="mt-2 text-sm text-navy-foreground/70">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
