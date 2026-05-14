import { Check } from "lucide-react";

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
    <section id="pricing" className="border-y border-border bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Pricing</span>
          <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">Simple pricing per location.</h2>
          <p className="mt-4 text-lg text-muted-foreground">No per-call fees. No surprises. Cancel anytime.</p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                p.featured
                  ? "border-teal bg-card shadow-2xl shadow-teal/15 lg:-translate-y-4 lg:scale-[1.02]"
                  : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-serif text-2xl text-navy">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-5xl text-navy">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <a
                href="#"
                className={`mt-6 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-teal text-teal-foreground hover:opacity-90"
                    : "bg-navy text-navy-foreground hover:bg-navy-soft"
                }`}
              >
                {p.cta}
              </a>
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-teal" : "text-navy"}`} />
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
