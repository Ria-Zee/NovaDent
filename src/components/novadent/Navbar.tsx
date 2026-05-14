import { useState } from "react";
import { Bluetooth as Tooth, Menu, X } from "lucide-react";
// using a tooth-ish icon: lucide doesn't have tooth; use Sparkle replacement
import { Sparkles } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Demo", href: "#demo" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-navy-foreground">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-serif text-2xl font-semibold tracking-tight text-navy">NovaDent</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-foreground/70 transition hover:text-navy">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-navy">Sign in</a>
          <a href="#pricing" className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-navy-foreground transition hover:bg-navy-soft">
            Get started free
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary">
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium">Sign in</a>
              <a href="#pricing" className="rounded-lg bg-navy px-4 py-2 text-center text-sm font-semibold text-navy-foreground">Get started free</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
