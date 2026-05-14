import { Logo } from "./Logo";

export function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Pricing", "Demo", "Integrations", "Changelog"] },
    { title: "Company", links: ["About", "Customers", "Careers", "Contact", "Press"] },
    { title: "Resources", links: ["Help center", "Blog", "Security", "API docs", "Status"] },
    { title: "Legal", links: ["Privacy", "Terms", "HIPAA", "GDPR", "DPA"] },
  ];
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <Logo className="h-10 w-10" />
              <span className="font-serif text-2xl font-semibold tracking-tight text-forest">NovaDent</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI practice platform for modern dental clinics. Built for chairside humans.
            </p>
            <div className="mt-6 flex items-center gap-3 text-2xl" aria-label="Available in">
              <span title="Nigeria">🇳🇬</span>
              <span title="United Kingdom">🇬🇧</span>
              <span title="United Arab Emirates">🇦🇪</span>
              <span title="Canada">🇨🇦</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-forest">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground transition hover:text-forest">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NovaDent, Inc. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Built with care for dental teams worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
