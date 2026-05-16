"use client";

import { useState, useEffect } from "react";
import { Mic, Send, Phone } from "lucide-react";

type Message = {
  id: string;
  side: "nova" | "patient";
  text: string;
  timestamp: string;
};

export function Agents() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSide, setTypingSide] = useState<"nova" | "patient" | null>(null);

  const conversationFlow = [
    { delay: 0, side: "nova" as const, text: "Hi 👋 Welcome to Bright Smile Dental. How can I help you today?", duration: 1500 },
    { delay: 1000, side: "patient" as const, text: "", typing: true },
    { delay: 2500, side: "patient" as const, text: "I have a sharp pain in my lower right tooth, it started last night", duration: 1500 },
    { delay: 4000, side: "nova" as const, text: "", typing: true },
    { delay: 5000, side: "nova" as const, text: "I'm sorry to hear that 😟 Sounds urgent. I can book you with Dr. Adeyemi today at 2:15pm or 4:30pm — both slots are open. Which works?", duration: 2000 },
    { delay: 7500, side: "patient" as const, text: "", typing: true },
    { delay: 8500, side: "patient" as const, text: "2:15pm works perfectly", duration: 1000 },
    { delay: 9500, side: "nova" as const, text: "Done ✅ You're booked for 2:15pm today. Confirmation going to your phone now. Is there anything else I can help with?", duration: 1500 },
    { delay: 11000, side: "patient" as const, text: "No that's brilliant, thank you!", duration: 1000 },
    { delay: 11800, side: "nova" as const, text: "You're welcome 😊 See you at 2:15. Feel better soon!", duration: 1200 },
    { delay: 13000, side: null as any, text: "FADE_OUT" },
  ];

  useEffect(() => {
    const loop = () => {
      setMessages([]);
      setIsTyping(false);
      setTypingSide(null);

      conversationFlow.forEach((item) => {
        setTimeout(() => {
          if (item.text === "FADE_OUT") {
            setTimeout(() => {
              loop();
            }, 1000);
            return;
          }

          if (item.typing) {
            setIsTyping(true);
            setTypingSide(item.side);
          } else {
            setIsTyping(false);
            setTypingSide(null);
            const now = new Date();
            const timestamp = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
            setMessages((prev) => [...prev, { id: `${item.delay}`, side: item.side, text: item.text, timestamp }]);
          }
        }, item.delay);
      });
    };

    loop();
  }, []);

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
          {/* Animated Webchat */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-lg shadow-teal/20">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative h-2.5 w-2.5 rounded-full bg-teal">
                  <span className="absolute inset-0 animate-pulse rounded-full bg-teal" />
                </span>
                <span className="text-sm font-semibold">Nova · Webchat agent</span>
              </div>
              <span className="text-xs text-navy-foreground/50">Online</span>
            </div>

            <div className="space-y-3 h-64 overflow-y-auto pr-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.side === "nova" ? "justify-start" : "justify-end"} animate-slide-in-${msg.side === "nova" ? "left" : "right"}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${msg.side === "nova" ? "bg-white/10 text-navy-foreground" : "bg-teal text-teal-foreground"}`}>
                    <p>{msg.text}</p>
                    <span className="text-[10px] opacity-60 mt-1 block">{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className={`flex ${typingSide === "nova" ? "justify-start" : "justify-end"}`}>
                  <div className={`rounded-2xl px-4 py-2.5 flex gap-1.5 ${typingSide === "nova" ? "bg-white/10" : "bg-teal"}`}>
                    <span className="h-2 w-2 rounded-full bg-current animate-bounce-dots-1" />
                    <span className="h-2 w-2 rounded-full bg-current animate-bounce-dots-2" />
                    <span className="h-2 w-2 rounded-full bg-current animate-bounce-dots-3" />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-navy-soft/60 p-2">
              <input className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-navy-foreground/40 focus:outline-none" placeholder="Type a message…" disabled />
              <button className="rounded-lg bg-teal p-2 text-teal-foreground">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Voice Agent */}
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
                "I'm sorry to hear that. I can fit you in tomorrow at 9:40am with Dr. Adeyemi or today at 4:15pm. Which works?"
              </p>
            </div>
            <div className="mt-2 flex items-center justify-center gap-3">
              <button className="rounded-full bg-white/10 p-3">
                <Mic className="h-4 w-4" />
              </button>
              <button className="rounded-full bg-destructive p-3">
                <Phone className="h-4 w-4 rotate-[135deg]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left { animation: slide-in-left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .animate-slide-in-right { animation: slide-in-right 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
      `}</style>
    </section>
  );
}
