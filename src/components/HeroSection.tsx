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
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-16 text-center sm:py-24">
        <h1 className="text-3xl font-black text-white sm:text-5xl">
          Sacalax4: El corazón del padel
        </h1>
        <div className="mt-6 self-end rounded-xl border border-white/20 bg-slate-900/60 px-3 py-2 text-right text-xs font-semibold tracking-wide text-white/90 sm:text-sm">
          <p>Av. Pueyrredón 2660 · Córdoba</p>
          <p>351 550 2961</p>
        </div>
      </div>
    </section>
  );
}
