"use client";

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
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal">Features</span>
          <h2 className="text-balance mt-4 font-serif text-5xl leading-[0.95] tracking-tight text-forest sm:text-6xl">
            Everything you need.<br /><span className="italic">Nothing you don't.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const I = f.icon;
            return (
              <div
                key={f.title}
                className="group perspective"
                style={{
                  perspective: "1000px",
                }}
              >
                <div
                  className="glass rounded-3xl p-8 transition-all duration-350"
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
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-forest-foreground transition-all duration-300 group-hover:bg-teal"
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
                  <h3 className="mt-6 font-serif text-2xl text-forest">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
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
