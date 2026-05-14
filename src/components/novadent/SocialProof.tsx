export function SocialProof() {
  const clinics = [
    { flag: "🇳🇬", name: "Smile Lagos Dental" },
    { flag: "🇬🇧", name: "Kensington Dental Care" },
    { flag: "🇦🇪", name: "Dubai Marina Dentistry" },
    { flag: "🇨🇦", name: "Northern Lights Dental" },
    { flag: "🇳🇬", name: "Abuja Family Dental" },
    { flag: "🇬🇧", name: "Manchester Smile Studio" },
  ];
  return (
    <section className="border-y border-border/60 bg-card/60 py-12 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by modern clinics across four continents
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {clinics.map((c) => (
            <div key={c.name} className="flex items-center gap-2.5 text-sm font-medium text-forest/70">
              <span className="text-xl" aria-hidden>{c.flag}</span>
              <span className="font-serif text-base">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
