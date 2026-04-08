import { ContactCard } from "../components/ContactCard";
import { HeroSection } from "../components/HeroSection";
import { ReviewCard } from "../components/ReviewCard";
import { SectionBlock } from "../components/SectionBlock";
import {
  aboutItems,
  comments,
  facilityItems,
  links,
  sectionImages,
  socialEventItems,
  sportsEventItems,
} from "../data/content";

export function Home() {
  return (
    <>
      <HeroSection />

      <section className="bg-[#3a5f7b] py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:gap-12">
          <SectionBlock
            id="instalaciones"
            title="INSTALACIONES Y SERVICIOS"
            items={facilityItems}
            images={sectionImages.instalaciones}
          />

          <SectionBlock
            id="eventos-deportivos"
            title="EVENTOS DEPORTIVOS"
            items={sportsEventItems}
            images={sectionImages.eventosDeportivos}
          />

          <SectionBlock
            id="eventos-sociales"
            title="EVENTOS SOCIALES"
            items={socialEventItems}
            images={sectionImages.eventosSociales}
          />

          <SectionBlock
            id="nosotros"
            title="SOBRE NOSOTROS"
            items={aboutItems}
            images={sectionImages.nosotros}
          />

          <section className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8 md:p-10">
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              COMENTARIOS
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {comments.map((comment) => (
                <ReviewCard key={comment} text={comment} />
              ))}
            </div>
          </section>

          <ContactCard />

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-sm sm:p-8">
            <h3 className="text-xl font-bold">
              Sacala x 4: El corazón del pádel
            </h3>
            <p className="mt-2 text-white/90">
              Reservá fácil desde nuestra App de Reservas o escribinos por
              WhatsApp para coordinar turnos y eventos.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={links.appReservas}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-slate-900"
              >
                Reservá online
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/70 px-5 py-2.5 text-sm font-bold text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
