import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-forest py-28 text-forest-foreground sm:py-32">
      <div className="absolute inset-0 -z-0 opacity-50">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cream/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Your next patient<br /><span className="italic text-teal">is calling right now.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-forest-foreground/70">
          Stop sending them to voicemail. Spin up your NovaDent front desk in under 24 hours.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-4 text-sm font-semibold text-teal-foreground shadow-xl shadow-teal/30 transition hover:opacity-90">
            Get started free
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href="#demo" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-forest-foreground transition hover:bg-white/10">
            Book a live demo
          </a>
        </div>
      </div>
    </section>
  );
}
