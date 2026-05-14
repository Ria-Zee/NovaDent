import { Bot, MessageSquare, CalendarDays, CreditCard, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  { icon: Bot, title: "AI Voice Receptionist", body: "Natural-sounding agent books, reschedules, and answers FAQs in 30+ languages." },
  { icon: MessageSquare, title: "AI Webchat", body: "Converts website visitors into booked appointments — even at 2am." },
  { icon: CalendarDays, title: "Smart Scheduling", body: "Optimizes provider chairs, blocks, and rooms automatically." },
  { icon: CreditCard, title: "Payments & Plans", body: "Take deposits, run installment plans, send invoices in one click." },
  { icon: BarChart3, title: "Practice Analytics", body: "Real-time dashboards for revenue, recalls, no-shows, and attribution." },
  { icon: ShieldCheck, title: "HIPAA + GDPR Ready", body: "End-to-end encrypted. SOC 2 Type II. PHIPA compliant in Canada." },
];

export function Features() {
  return (
    <section id="features" className="border-y border-border bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Features</span>
          <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
            Everything you need. Nothing you don't.
          </h2>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const I = f.icon;
            return (
              <div key={f.title} className="group bg-card p-8 transition hover:bg-secondary/60">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground transition group-hover:bg-teal">
                  <I className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
