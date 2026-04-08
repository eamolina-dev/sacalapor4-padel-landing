import { links, mapEmbedLinks } from "../data/content";

export function LocationPage() {
  return (
    <section className="bg-slate-100 pb-12 pt-24 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm md:p-8">
          <h1 className="text-2xl font-black text-slate-900 md:text-3xl">
            Ubicación
          </h1>
          <p className="mt-3 text-base text-slate-700">
            Av. Pueyrredon 2660, Córdoba Capital
          </p>
          <a
            href={links.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-2xl bg-[#24b35e] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#24b35e]/20 transition duration-300 hover:scale-[1.02] hover:bg-[#1e9b50]"
          >
            Abrir en Google Maps
          </a>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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
