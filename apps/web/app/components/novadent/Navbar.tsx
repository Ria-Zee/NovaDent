"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Demo", href: "#demo" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <Logo className="h-10 w-10" animate />
          <span className="font-serif text-2xl font-semibold tracking-tight text-forest">NovaDent</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-foreground/70 transition hover:text-forest">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-forest">Sign in</a>
          <a href="#pricing" className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-forest-foreground shadow-lg shadow-forest/20 transition hover:bg-forest-soft hover:shadow-xl hover:shadow-forest/30">
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
              <a href="#pricing" className="rounded-full bg-forest px-4 py-2.5 text-center text-sm font-semibold text-forest-foreground">Get started free</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
