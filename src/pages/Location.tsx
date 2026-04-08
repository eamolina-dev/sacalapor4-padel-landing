import { links, mapEmbedLinks } from "../data/content";

export function Location() {
  return (
    <section className="bg-[#102a43] pb-16 pt-14 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-white p-6 text-center shadow-xl shadow-slate-900/10 md:p-10">
          <h1 className="text-3xl font-black text-slate-900 md:text-4xl">Ubicación</h1>
          <p className="mt-4 text-lg text-slate-700">Av. Pueyrredon 2660, Córdoba Capital</p>
          <a
            href={links.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-2xl bg-[#24b35e] px-6 py-2.5 text-base font-semibold text-white shadow-lg shadow-[#24b35e]/30 transition hover:bg-[#1e9b50]"
          >
            Abrir en Google Maps
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/20 bg-white shadow-xl shadow-slate-900/10">
          <div className="aspect-[16/10] w-full">
            <iframe
              title="Mapa centrado de Sacala x 4"
              src={mapEmbedLinks.centered}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
