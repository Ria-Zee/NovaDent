import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-navy py-24 text-navy-foreground sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Your next patient is calling right now.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-foreground/70">
          Stop sending them to voicemail. Spin up your NovaDent front desk in under 24 hours.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-6 py-3.5 text-sm font-semibold text-teal-foreground transition hover:opacity-90">
            Get started free
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href="#demo" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition hover:bg-white/10">
            Book a live demo
          </a>
        </div>
      </div>
    </section>
  );
}
