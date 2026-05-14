import { Sparkles } from "lucide-react";

export function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Pricing", "Demo", "Integrations", "Changelog"] },
    { title: "Company", links: ["About", "Customers", "Careers", "Contact", "Press"] },
    { title: "Resources", links: ["Help center", "Blog", "Security", "API docs", "Status"] },
    { title: "Legal", links: ["Privacy", "Terms", "HIPAA", "GDPR", "DPA"] },
  ];
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-serif text-2xl font-semibold tracking-tight text-navy">NovaDent</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The AI practice platform for modern dental clinics. Built for chairside humans.
            </p>
            <div className="mt-6 flex items-center gap-3 text-2xl" aria-label="Available in">
              <span title="Nigeria">🇳🇬</span>
              <span title="United Kingdom">🇬🇧</span>
              <span title="United Arab Emirates">🇦🇪</span>
              <span title="Canada">🇨🇦</span>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-serif text-base text-navy">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground transition hover:text-navy">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NovaDent, Inc. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Built with care for dental teams worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
