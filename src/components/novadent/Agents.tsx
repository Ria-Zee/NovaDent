import { Mic, Send, Phone } from "lucide-react";

export function Agents() {
  return (
    <section id="demo" className="bg-navy py-24 text-navy-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Meet the agents</span>
          <h2 className="mt-4 font-serif text-4xl text-navy-foreground sm:text-5xl">
            Two AI co-workers. Zero coffee breaks.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Webchat */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-teal" />
                <span className="text-sm font-semibold">Nova · Webchat agent</span>
              </div>
              <span className="text-xs text-navy-foreground/50">Online</span>
            </div>
            <div className="space-y-3">
              <Bubble side="them">Hi! 👋 I'm Nova. Looking to book a cleaning or something specific?</Bubble>
              <Bubble side="me">My tooth has been hurting on the right side</Bubble>
              <Bubble side="them">Sorry to hear that. I can fit you in tomorrow at 9:40am with Dr. Adeyemi or today at 4:15pm. Which works?</Bubble>
              <Bubble side="me">Today 4:15</Bubble>
              <Bubble side="them">Booked ✅ I'll text you the confirmation. Anything else?</Bubble>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-navy-soft/60 p-2">
              <input className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-navy-foreground/40 focus:outline-none" placeholder="Type a message…" />
              <button className="rounded-lg bg-teal p-2 text-teal-foreground"><Send className="h-4 w-4" /></button>
            </div>
          </div>

          {/* Voice */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-teal" />
                <span className="text-sm font-semibold">Nova · Voice agent</span>
              </div>
              <span className="text-xs text-navy-foreground/50">Call in progress · 00:42</span>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-teal/30" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-teal text-teal-foreground">
                  <Phone className="h-10 w-10" />
                </div>
              </div>
              <div className="mt-8 flex h-10 items-end gap-1">
                {[12, 28, 18, 36, 22, 40, 24, 30, 16, 34, 20].map((h, i) => (
                  <span key={i} className="w-1.5 animate-pulse rounded-full bg-teal/70" style={{ height: `${h}px`, animationDelay: `${i * 80}ms` }} />
                ))}
              </div>
              <p className="mt-6 max-w-xs text-center text-sm text-navy-foreground/70">
                "Of course, Mrs. Bello. I've moved your appointment to Friday at 11. You'll get a text confirmation now."
              </p>
            </div>
            <div className="mt-2 flex items-center justify-center gap-3">
              <button className="rounded-full bg-white/10 p-3"><Mic className="h-4 w-4" /></button>
              <button className="rounded-full bg-destructive p-3"><Phone className="h-4 w-4 rotate-[135deg]" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({ side, children }: { side: "me" | "them"; children: React.ReactNode }) {
  const me = side === "me";
  return (
    <div className={`flex ${me ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${me ? "bg-teal text-teal-foreground" : "bg-white/10 text-navy-foreground"}`}>
        {children}
      </div>
    </div>
  );
}
