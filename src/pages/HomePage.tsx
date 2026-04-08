import { eventItems, facilityItems, comments, links } from "../data/content";
import { GalleryPreview } from "../components/GalleryPreview";
import { HeroSection } from "../components/HeroSection";
import { ReviewCard } from "../components/ReviewCard";
import { SectionBlock } from "../components/SectionBlock";
import { Sidebar } from "../components/Sidebar";

function BadgeList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl border border-[#24b35e]/25 bg-[#24b35e]/10 px-4 py-2 text-sm font-semibold text-[#1d7d47]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="bg-slate-100 py-12 md:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-10 lg:gap-10">
          <div className="space-y-6 md:space-y-8 lg:col-span-7">
            <SectionBlock title="Fotos">
              <GalleryPreview />
            </SectionBlock>

            <SectionBlock title="Instalaciones y Servicios">
              <BadgeList items={facilityItems} />
            </SectionBlock>

            <SectionBlock title="Eventos deportivos y sociales">
              <BadgeList items={eventItems} />
            </SectionBlock>

            <SectionBlock title="Sobre nosotros">
              <p className="text-base leading-relaxed text-slate-700">
                Emprendimiento familiar - Atención personalizada
              </p>
            </SectionBlock>

            <SectionBlock title="Comentarios">
              <div className="grid gap-4 sm:grid-cols-2">
                {comments.map((comment) => (
                  <ReviewCard key={comment} text={comment} />
                ))}
              </div>
            </SectionBlock>

            <SectionBlock title="Información de contacto">
              <div id="ubicacion" className="space-y-2 leading-relaxed text-slate-700">
                <p className="font-semibold text-slate-900">
                  Sacala x 4: El corazón del pádel
                </p>
                <p>Dirección: Av. Pueyrredon 2660</p>
                <p>Teléfono: {links.phone}</p>
                <a
                  href={links.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex pt-2 text-sm font-semibold text-[#1d7d47] transition hover:text-[#24b35e]"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </SectionBlock>
          </div>

          <div className="lg:col-span-3">
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}
