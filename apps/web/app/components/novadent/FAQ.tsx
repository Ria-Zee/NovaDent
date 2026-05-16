"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";

const faqs = [
  { q: "How quickly can NovaDent go live in my clinic?", a: "Most clinics are live within 24 hours. We import your providers, services, and hours, then connect your phone number and website." },
  { q: "Will the AI sound robotic on calls?", a: "No. Our voice agent uses the latest natural-speech models — patients consistently can't tell it's AI in blind tests." },
  { q: "Does it integrate with my existing PMS?", a: "Yes. We integrate with Dentrix, Eaglesoft, Open Dental, Curve, Carestack, and most modern systems via API." },
  { q: "What languages does it support?", a: "30+ languages including English, Yoruba, Igbo, Arabic, French, and Mandarin. The agent auto-detects the caller's language." },
  { q: "Is patient data secure?", a: "End-to-end encryption, HIPAA + GDPR + PHIPA compliant, SOC 2 Type II audited. Data never leaves your region." },
  { q: "What happens if the AI can't answer?", a: "It seamlessly transfers to a human staff member or takes a detailed message — you set the rules per scenario." },
  { q: "Can I customize the AI's voice and personality?", a: "Yes. Pick from 12 voices or clone your existing receptionist. Tone, scripts, and branding are fully editable." },
  { q: "How is pricing structured?", a: "Flat monthly per location — no per-call or per-minute fees. See the Pricing section below." },
  { q: "Do you offer onboarding support?", a: "Every plan includes white-glove onboarding. Growth and Pro get a dedicated success manager." },
  { q: "Is there a contract or can I cancel anytime?", a: "No contracts. Month-to-month. Cancel in two clicks if it's not for you — though 96% of clinics stay past year one." },
];

export function FAQ() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">FAQ</span>
          <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">Questions, answered.</h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-serif text-lg text-navy hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
