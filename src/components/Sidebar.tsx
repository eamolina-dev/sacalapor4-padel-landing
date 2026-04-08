import { ContactCard } from "./ContactCard";
import { links, mapEmbedLinks } from "../data/content";

export function Sidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <img
          src="/sacalapor4-images/mother-and-son-image.webp"
          alt="Familia en Sacala x 4"
          className="h-auto w-full object-contain"
          loading="lazy"
        />
      </div>

      <a
        href={links.maps}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        <div className="aspect-square w-full">
          <iframe
            title="Mapa de Sacala x 4"
            src={mapEmbedLinks.sidebar}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="px-4 py-3 text-center text-sm font-semibold text-[#1d7d47] transition duration-200 group-hover:text-[#24b35e]">
          Ver ubicación en Google Maps
        </p>
      </a>

      <ContactCard />
    </aside>
  );
}
