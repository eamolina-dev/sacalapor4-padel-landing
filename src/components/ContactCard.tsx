import { links } from "../data/content";

export function ContactCard() {
  return (
    <div className="relative rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8">
      <img
        src="/sacalapor4-images/logo-image.jpeg"
        alt="Logo Sacala x4"
        className="absolute right-5 top-5 h-12 w-12 rounded-full border border-slate-200 object-cover shadow sm:h-14 sm:w-14"
      />
      <h3 className="text-3xl font-black text-slate-900 sm:text-4xl">Información de contacto</h3>
      <p className="mt-4 text-lg text-slate-700 sm:text-xl">Dirección: Av. Pueyrredon 2660</p>
      <p className="mt-2 text-lg text-slate-700 sm:text-xl">Teléfono: {links.phone}</p>
      <a
        href={links.maps}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex text-base font-semibold text-[#176b3d] transition hover:text-[#24b35e] sm:text-lg"
      >
        Ver en Google Maps →
      </a>
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#24b35e] px-5 py-3 text-lg font-bold text-white shadow-lg shadow-[#24b35e]/30 transition hover:bg-[#1e9b50]"
      >
        Agenda tu turno por WhatsApp
      </a>
    </div>
  );
}
