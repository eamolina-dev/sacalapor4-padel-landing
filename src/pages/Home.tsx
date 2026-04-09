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

          <section className="relative rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8 md:p-10">
            <img
              src="/sacalapor4-images/logo-image.jpeg"
              alt="Logo Sacala x4"
              className="absolute right-5 top-5 h-12 w-12 rounded-full border border-slate-200 object-cover shadow sm:h-14 sm:w-14"
            />
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
              COMENTARIOS
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {comments.map((comment, index) => (
                <ReviewCard
                  key={index}
                  text={comment.text}
                  name={comment.name}
                  date={comment.date}
                />
              ))}
            </div>
          </section>

          <ContactCard />

          <div className="relative rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-sm sm:p-8">
            <img
              src="/sacalapor4-images/logo-image.jpeg"
              alt="Logo Sacala x4"
              className="absolute right-5 top-5 h-12 w-12 rounded-full border border-white/40 object-cover shadow sm:h-14 sm:w-14"
            />
            <h3 className="text-3xl font-black sm:text-4xl">
              Sacalax4: El corazón del padel
            </h3>
            <p className="mt-2 text-lg text-white/90 sm:text-xl">
              Reservá fácil desde nuestra App de Reservas o escribinos por
              WhatsApp para coordinar turnos y eventos.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={links.appReservas}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-base font-bold text-slate-900"
              >
                Reservá online
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/70 px-5 py-2.5 text-base font-bold text-white"
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
