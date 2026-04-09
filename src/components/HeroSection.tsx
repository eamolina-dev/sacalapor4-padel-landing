export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-24 sm:pt-28"
    >
      <img
        src="/sacalapor4-images/horizontal-image-v2.webp"
        alt="Complejo Sacala x4"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        loading="eager"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-[#102a43]/80" />

      <div className="relative mx-auto mb-12 flex w-full max-w-7xl flex-col items-center px-4 py-14 text-center sm:mb-16 sm:py-24">
        {/* TÍTULO */}
        <h1 className="text-3xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] sm:text-5xl md:text-7xl">
          Sacalax4: El corazón del padel
        </h1>

        {/* DIRECCIÓN + TELÉFONO */}
        <div className="mt-6 w-full max-w-xs self-center rounded-xl bg-slate-900/55 px-4 py-3 text-center text-xs font-semibold tracking-wide text-white/90 sm:absolute sm:bottom-6 sm:right-6 sm:mt-0 sm:w-auto sm:max-w-none sm:text-right sm:text-sm">
          <p>Av. Pueyrredón 2660 · Córdoba</p>
          <p>351 550 2961</p>
        </div>
      </div>
    </section>
  );
}
