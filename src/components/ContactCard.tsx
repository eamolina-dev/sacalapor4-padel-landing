import { links } from "../data/content";

export function ContactCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center rounded-2xl bg-[#24b35e] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#24b35e]/25 transition duration-300 hover:scale-[1.01] hover:bg-[#1e9b50]"
      >
        Agenda tu turno por WhatsApp
      </a>
      <div className="mt-5 space-y-2 text-sm leading-relaxed text-slate-700">
        <p>
          <span className="font-semibold text-slate-900">Dirección:</span> Av.
          Pueyrredon 2660
        </p>
        <p>
          <span className="font-semibold text-slate-900">Teléfono:</span>{" "}
          {links.phone}
        </p>
      </div>
    </div>
  );
}
