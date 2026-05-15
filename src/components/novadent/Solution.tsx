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
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <div key={w.title} className="group glass relative rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal/15">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/12 text-teal">
                  <I className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-forest">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-teal">
                  <Check className="h-3.5 w-3.5" /> Live in 24 hours
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
