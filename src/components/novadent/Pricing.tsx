import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "/mo",
    desc: "For solo practitioners getting started.",
    features: ["AI Webchat agent", "Smart scheduling", "Up to 500 patients", "Email support", "Standard onboarding"],
    cta: "Start free trial",
    featured: false,
  },
  {
    name: "Growth",
    price: "$499",
    period: "/mo",
    desc: "Everything most clinics need to scale.",
    features: ["Everything in Starter", "AI Voice agent (24/7)", "Unlimited patients", "Recall automation", "Payments & plans", "Dedicated success manager"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Pro",
    price: "$999",
    period: "/mo",
    desc: "Multi-location groups and DSOs.",
    features: ["Everything in Growth", "Multi-location dashboard", "Custom voice cloning", "API access & webhooks", "SLA + priority support", "On-site training"],
    cta: "Talk to sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal">Pricing</span>
          <h2 className="text-balance mt-4 font-serif text-5xl leading-[0.95] tracking-tight text-forest sm:text-6xl">
            Simple pricing,<br /><span className="italic">per location.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">No per-call fees. No surprises. Cancel anytime.</p>
        </div>

        <div className="mt-20 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-8 transition ${
                p.featured
                  ? "glass border-2 border-teal/60 bg-white shadow-[0_30px_80px_-20px_rgba(13,148,136,0.45)] lg:-translate-y-6 lg:scale-[1.04]"
                  : "glass"
              }`}
            >
              {p.featured && (
                <>
                  <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-teal/40 via-teal/10 to-transparent blur-2xl" />
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-teal px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-foreground shadow-lg shadow-teal/30">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </span>
                </>
              )}
              <h3 className="font-serif text-3xl text-forest">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-6xl tracking-tight text-forest">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <a
                href="#"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-teal text-teal-foreground shadow-lg shadow-teal/30 hover:opacity-90"
                    : "bg-forest text-forest-foreground hover:bg-forest-soft"
                }`}
              >
                {p.cta}
              </a>
              <ul className="mt-8 space-y-3 border-t border-border/60 pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-teal" : "text-forest"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
