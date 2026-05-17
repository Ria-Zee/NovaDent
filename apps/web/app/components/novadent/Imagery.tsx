export function Imagery() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 sm:grid-cols-2">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal">A new chapter for dentistry</span>
            <h2 className="text-balance mt-4 font-serif text-5xl leading-[0.95] tracking-tight text-forest sm:text-6xl lg:text-7xl">
              Built for the way<br />
              <span className="italic">modern clinics</span> work.
            </h2>
          </div>
          <p className="max-w-md justify-self-start text-lg leading-relaxed text-muted-foreground sm:justify-self-end">
            From the operatory to the front desk — NovaDent slips into the rhythm of your practice and quietly removes the friction.
          </p>
        </div>

        {/* Editorial overlapping grid */}
        <div className="relative mt-16 grid grid-cols-12 gap-4 sm:gap-6">
          <figure className="col-span-12 lg:col-span-7">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800"
              alt="Bright modern dental operatory bathed in morning light"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-[420px] w-full rounded-3xl object-cover shadow-2xl shadow-forest/15 sm:h-[520px]"
            />
          </figure>
          <figure className="col-span-12 lg:col-span-5 lg:-mt-16">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800"
              alt="Dentist in scrubs sharing a smile with a patient"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-[280px] w-full rounded-3xl object-cover shadow-xl shadow-forest/10 sm:h-[360px]"
            />
            <figcaption className="mt-4 max-w-sm font-serif text-2xl italic leading-snug text-forest">
              "We stopped losing 30 calls a week. The chairs just stay full."
              <span className="mt-2 block font-sans text-xs not-italic uppercase tracking-[0.2em] text-muted-foreground">
                Dr. Chen · Kensington Dental
              </span>
            </figcaption>
          </figure>

          <figure className="col-span-12 lg:col-span-5 lg:-mt-24">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffedaa5b8e2?w=800"
              alt="Modern handheld 3D dental intraoral scanner"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-[300px] w-full rounded-3xl object-cover shadow-xl shadow-forest/10 sm:h-[380px]"
            />
          </figure>
          <figure className="col-span-12 lg:col-span-7 lg:-mt-8">
            <img
              src="/assets/smile-macro.jpg"
              alt="Extreme close-up of a healthy bright smile"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-[420px] w-full rounded-3xl object-cover shadow-2xl shadow-forest/15 sm:h-[520px]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
