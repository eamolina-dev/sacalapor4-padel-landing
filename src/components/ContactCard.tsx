import { links } from "../data/content";

export function ContactCard() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8">
      <h3 className="text-2xl font-black text-slate-900">Información de contacto</h3>
      <p className="mt-4 text-base text-slate-700">Dirección: Av. Pueyrredon 2660</p>
      <p className="mt-2 text-base text-slate-700">Teléfono: {links.phone}</p>
      <a
        href={links.maps}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex text-sm font-semibold text-[#176b3d] transition hover:text-[#24b35e]"
      >
        Ver en Google Maps →
      </a>
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#24b35e] px-5 py-3 text-base font-bold text-white shadow-lg shadow-[#24b35e]/30 transition hover:bg-[#1e9b50]"
      >
        Agenda tu turno por WhatsApp
      </a>
    </div>
  );
}
