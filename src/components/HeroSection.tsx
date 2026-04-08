import { links } from "../data/content";

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-24 sm:pt-28">
      <img
        src="/sacalapor4-images/horizontal-image-v2.webp"
        alt="Complejo Sacala x4"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/95 via-slate-950/75 to-[#102a43]/95" />

      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-4 py-16 sm:py-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200 sm:text-base">
            Complejo de pádel en Córdoba
          </p>
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
            Sacala x 4
          </h1>
          <p className="text-xl font-medium leading-relaxed text-slate-100 sm:text-2xl">
            El corazón del pádel
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#24b35e] px-6 py-3 text-base font-bold text-white shadow-lg shadow-[#24b35e]/40 transition hover:bg-[#1e9b50]"
            >
              Agenda tu turno
            </a>
            <a
              href="#instalaciones"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/60 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Ver instalaciones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
