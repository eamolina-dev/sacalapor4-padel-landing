import { type ReactNode, useState } from "react";

const links = {
  appReservas: "https://alquilatucancha.com/sportclub/941",
  whatsapp: "https://wa.me/543515502961",
  instagram: "https://www.instagram.com/sacala_x4?igsh=MWgzaGJ4N3Yzb216cA==",
  maps: "https://www.google.com/maps/search/?api=1&query=Av+Pueyrredon+2660,+Cordoba+Capital",
  phone: "3515502961",
};

const facilityItems = [
  "4 canchas outdoor",
  "Patio cervecero",
  "Asador",
  "Estacionamiento gratuito",
  "Quincho para eventos sociales",
];

const eventItems = [
  "Torneos y Ligas",
  "Cumples, bautismos, fiestas corporativas",
  "Turnos gratis por tu cumpleaños",
];

const comments = [
  "Excelente ambiente, canchas impecables y atención rápida por WhatsApp.",
  "Organizamos un cumpleaños y salió perfecto, súper recomendables.",
  "Muy cómodo el estacionamiento y el patio cervecero después de jugar.",
  "Se nota que es un emprendimiento familiar, siempre te reciben de diez.",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinkClass = "text-sm font-medium text-white/90 transition hover:text-white";

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-6">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/sacalapor4-images/logo-image.jpeg"
            alt="Sacala x4 logo"
            className="h-11 w-11 rounded-full border border-white/40 object-cover"
          />
          <span className="text-sm font-bold tracking-wide text-white md:text-base">Sacala x 4</span>
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className="text-lg">☰</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <a href={links.appReservas} target="_blank" rel="noreferrer" className={navLinkClass}>
            App de Reservas
          </a>
          <a href={links.whatsapp} target="_blank" rel="noreferrer" className={navLinkClass}>
            Turnos fijos
          </a>
          <a href="#ubicacion" className={navLinkClass}>
            Ubicación
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer" className={navLinkClass}>
            Instagram
          </a>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#24b35e] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#24b35e]/30 transition hover:bg-[#1e9b50]"
          >
            Agenda tu turno
          </a>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-4 rounded-2xl border border-white/20 bg-slate-900/95 p-4 text-white md:hidden">
          <div className="flex flex-col gap-3">
            <a href={links.appReservas} target="_blank" rel="noreferrer" className={navLinkClass}>
              App de Reservas
            </a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer" className={navLinkClass}>
              Turnos fijos
            </a>
            <a href="#ubicacion" className={navLinkClass}>
              Ubicación
            </a>
            <a href={links.instagram} target="_blank" rel="noreferrer" className={navLinkClass}>
              Instagram
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-[#24b35e] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Agenda tu turno
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[66vh] overflow-hidden">
      <img
        src="/sacalapor4-images/horizontal-image.webp"
        alt="Complejo Sacala x4"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-slate-900/35" />

      <div className="relative mx-auto flex min-h-[66vh] max-w-6xl items-end px-4 pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">Sacala x 4</h1>
          <p className="mt-3 text-lg font-medium text-slate-100 md:text-2xl">El corazón del pádel</p>
        </div>
      </div>
    </section>
  );
}

function SectionBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function BadgeList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-[#24b35e]/25 bg-[#24b35e]/10 px-4 py-2 text-sm font-semibold text-[#1d7d47]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ReviewCard({ text }: { text: string }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm leading-relaxed text-slate-700">“{text}”</p>
    </article>
  );
}

function ContactCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#24b35e] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#24b35e]/30 transition hover:bg-[#1e9b50]"
      >
        Agenda tu turno por WhatsApp
      </a>
      <div className="mt-5 space-y-2 text-sm text-slate-700">
        <p>
          <span className="font-semibold text-slate-900">Dirección:</span> Av. Pueyrredon 2660
        </p>
        <p>
          <span className="font-semibold text-slate-900">Teléfono:</span> {links.phone}
        </p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <img
          src="/sacalapor4-images/mother-and-son-image.webp"
          alt="Familia en Sacala x 4"
          className="h-auto w-full object-contain"
        />
      </div>
      <ContactCard />
    </aside>
  );
}

function MainLayout() {
  return (
    <section className="bg-slate-100 py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-10">
        <div className="space-y-6 lg:col-span-7">
          <SectionBlock title="Instalaciones y Servicios">
            <BadgeList items={facilityItems} />
          </SectionBlock>

          <SectionBlock title="Eventos deportivos y sociales">
            <BadgeList items={eventItems} />
          </SectionBlock>

          <SectionBlock title="Sobre nosotros">
            <p className="text-base text-slate-700">Emprendimiento familiar - Atención personalizada</p>
          </SectionBlock>

          <SectionBlock title="Comentarios">
            <div className="grid gap-3 sm:grid-cols-2">
              {comments.map((comment) => (
                <ReviewCard key={comment} text={comment} />
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title="Información de contacto">
            <div id="ubicacion" className="space-y-2 text-slate-700">
              <p className="font-semibold text-slate-900">Sacala x 4: El corazón del pádel</p>
              <p>Dirección: Av. Pueyrredon 2660</p>
              <p>Teléfono: {links.phone}</p>
              <a
                href={links.maps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex pt-2 text-sm font-semibold text-[#1d7d47] hover:text-[#24b35e]"
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
  );
}

function App() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <HeroSection />
      <MainLayout />
    </main>
  );
}

export default App;
