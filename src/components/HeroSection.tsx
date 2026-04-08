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
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-16 text-center sm:py-24">
        <h1 className="text-3xl font-black text-white sm:text-5xl">
          Sacala x 4: El corazon del padel
        </h1>
      </div>
    </section>
  );
}
