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
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by modern clinics across
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clinics.map((c) => (
            <div key={c.name} className="flex items-center gap-2 text-sm font-medium text-navy/70">
              <span className="text-xl" aria-hidden>{c.flag}</span>
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
