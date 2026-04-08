export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src="/sacalapor4-images/horizontal-image-v2.webp"
        alt="Complejo Sacala x4"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/70" />

      <div className="mx-auto flex min-h-[56vh] max-w-6xl items-end px-4 pb-12 pt-28 sm:min-h-[62vh] sm:pb-16 sm:pt-32 md:pt-36">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/90">
            Complejo de pádel en Córdoba
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Sacala x 4
          </h1>
          <p className="text-lg font-medium text-slate-100 sm:text-xl md:text-2xl">
            El corazón del pádel
          </p>
        </div>
      </div>
    </section>
  );
}
