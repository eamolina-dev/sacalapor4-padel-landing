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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/95 via-slate-950/75 to-[#102a43]/95" />
    </section>
  );
}
