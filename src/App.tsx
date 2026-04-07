const links = {
  appReservas: "https://alquilatucancha.com/sportclub/941",
  whatsapp: "https://wa.me/543515502961",
  instagram: "https://www.instagram.com/sacala_x4?igsh=MWgzaGJ4N3Yzb216cA==",
  maps: "https://www.google.com/maps/search/?api=1&query=Av+Pueyrredon+2660,+Cordoba+Capital",
  phone: "3515502961",
};

const sectionClass = "mx-auto max-w-6xl px-4 py-14 md:py-20";

function LinkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
}) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition md:text-base";

  const variantClass =
    variant === "primary"
      ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30 hover:bg-emerald-600"
      : "border border-emerald-500 bg-white text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${baseClass} ${variantClass}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
      <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">{title}</h2>
      <p className="mt-3 text-sm text-slate-600 md:text-base">{description}</p>
    </div>
  );
}

function App() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-30 border-b border-emerald-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/sacalapor4-images/logo-image.jpeg"
              alt="Sacala x4 logo"
              className="h-11 w-11 rounded-full border border-emerald-200 object-cover"
            />
            <span className="text-sm font-bold tracking-wide text-slate-800 md:text-base">
              Sacala x 4
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-700">
            <a href={links.appReservas} target="_blank" rel="noreferrer" className="hover:text-emerald-600">
              App de Reservas
            </a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer" className="hover:text-emerald-600">
              Turnos fijos
            </a>
            <a href="#ubicacion" className="hover:text-emerald-600">
              Ubicación
            </a>
            <a href={links.instagram} target="_blank" rel="noreferrer" className="hover:text-emerald-600">
              Instagram
            </a>
            <LinkButton href={links.whatsapp}>Agenda tu turno</LinkButton>
          </div>
        </nav>
      </header>

      <section id="inicio" className="relative min-h-[74vh] overflow-hidden">
        <img
          src="/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.47.21 AM.webp"
          alt="Complejo Sacala x4"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-slate-800/20 to-transparent" />
        <div className="relative mx-auto flex min-h-[74vh] max-w-6xl items-center px-4 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Complejo de pádel en Córdoba
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
              Sacala x 4: El corazón del pádel
            </h1>
            <p className="mt-5 text-base text-slate-100 md:text-lg">
              Cuatro canchas outdoor, eventos sociales y toda la energía del deporte en un espacio pensado para compartir.
            </p>
            <div className="mt-8">
              <LinkButton href={links.whatsapp}>Reservá por WhatsApp</LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-white`}>
        <SectionTitle
          title="Instalaciones y servicios"
          description="Todo lo que necesitás para jugar cómodo y quedarte después del partido."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "4 canchas outdoor",
            "Patio cervecero",
            "Asador",
            "Estacionamiento gratuito",
            "Quincho para eventos sociales",
          ].map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6"
            >
              <p className="text-lg font-semibold text-emerald-700">✓ {item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-emerald-200 bg-emerald-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="Eventos"
            description="Viví experiencias especiales en Sacala x 4, con formatos deportivos y sociales para cada ocasión."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Torneos y ligas",
              "Cumpleaños, bautismos, eventos corporativos",
              "Turno gratis en cumpleaños",
            ].map((event) => (
              <article
                key={event}
                className="rounded-2xl border border-emerald-200 bg-white p-6"
              >
                <h3 className="text-xl font-bold text-slate-800">{event}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Escribinos y organizamos cada detalle para tu fecha.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-white`}>
        <SectionTitle
          title="Emprendimiento familiar"
          description="Sacala x 4 es un proyecto familiar con atención personalizada. Cada jugador y cada grupo reciben un trato cercano para que se sientan como en casa."
        />
      </section>

      <section className="bg-slate-100 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="Comentarios de la comunidad"
            description="Lo que más nos gusta: ver a la gente volver por la experiencia."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              '"Excelente ambiente, canchas impecables y atención rápida por WhatsApp."',
              '"Organizamos un cumpleaños y salió perfecto, súper recomendables."',
              '"Muy cómodo el estacionamiento y el patio cervecero después de jugar."',
              '"Se nota que es un emprendimiento familiar, siempre te reciben de diez."',
            ].map((comment) => (
              <article key={comment} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm leading-relaxed text-slate-700">{comment}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="border-t border-slate-200 bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Contacto y ubicación</h2>
            <p className="mt-4 text-slate-600">Av. Pueyrredon 2660</p>
            <p className="mt-2 text-slate-600">Teléfono: {links.phone}</p>
            <div className="mt-7">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-md shadow-emerald-500/30 transition hover:bg-[#1ebe5d] sm:w-auto"
              >
                Escribinos por WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <img
              src="/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.59.21 AM.webp"
              alt="Ubicación de Sacala x 4"
              className="h-64 w-full object-cover"
            />
            <div className="p-5">
              <a
                href={links.maps}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-600"
              >
                Ver mapa en Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
