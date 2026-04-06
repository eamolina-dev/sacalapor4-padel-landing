const links = {
  reservas: "https://chat.whatsapp.com/ECksD7BEXk979SumJqgPMH?mode=r_c",
  turnos: "https://alquilatucancha.com/sportclub/941",
  instagram: "https://www.instagram.com/sacala_x4?igsh=MWgzaGJ4N3Yzb216cA==",
  maps: "https://www.google.com/maps/search/?api=1&query=Av+Pueyrredon+2660,+Cordoba+Capital",
  phone: "351 5502961",
};

const galleryImages = [
  "WhatsApp Image 2026-03-24 at 4.09.03 PM.webp",
  "WhatsApp Image 2026-03-24 at 4.09.03 PM (1).webp",
  "WhatsApp Image 2026-03-24 at 6.50.37 PM.webp",
  "WhatsApp Image 2026-03-25 at 8.32.42 AM.webp",
  "WhatsApp Image 2026-03-25 at 8.33.09 AM.webp",
  "WhatsApp Image 2026-03-25 at 8.34.13 AM.webp",
  "WhatsApp Image 2026-03-25 at 8.34.53 AM.webp",
  "WhatsApp Image 2026-03-25 at 8.36.08 AM.webp",
];

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-400">
        {label}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <p className="mt-3 text-sm text-slate-300 md:text-base">{description}</p>
    </div>
  );
}

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
      ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
      : "border border-slate-500 text-slate-100 hover:border-emerald-300 hover:text-emerald-300";

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

function App() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.25),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Club de Pádel Sacala x4
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
              Viví el pádel en Córdoba Capital
            </h1>
            <p className="mt-5 max-w-xl text-sm text-slate-300 md:text-base">
              Nos encontramos en Av Pueyrredón 2660 y abrimos también los
              domingos. Reservá rápido por WhatsApp y asegurá tu lugar.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton href={links.reservas}>
                Reservar por WhatsApp
              </LinkButton>
              <LinkButton href={links.turnos} variant="secondary">
                Turnos disponibles
              </LinkButton>
            </div>
          </div>

          <img
            src="/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.47.21 AM.webp"
            alt="Complejo de pádel Sacala x4"
            className="h-72 w-full rounded-2xl border border-slate-700 object-cover shadow-2xl md:h-[460px]"
            loading="eager"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle
          label="Sobre el complejo"
          title="Un espacio pensado para jugar"
          description="Sacala x4 combina canchas de pádel, ambiente deportivo y atención rápida para que disfrutes cada partido."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "WhatsApp Image 2026-03-25 at 8.39.26 AM.webp",
            "WhatsApp Image 2026-03-25 at 8.40.23 AM.webp",
            "WhatsApp Image 2026-03-25 at 8.41.42 AM.webp",
          ].map((image) => (
            <img
              key={image}
              src={`/sacalapor4-images/${image}`}
              alt="Instalaciones del complejo"
              className="h-60 w-full rounded-xl border border-slate-800 object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/30 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              title: "Canchas",
              detail: "Consultá por cantidad disponible según día y horario.",
            },
            {
              title: "Superficie y estructura",
              detail:
                "Canchas de pádel en un entorno moderno para entrenar y competir.",
            },
            {
              title: "Turnos fijos",
              detail: `Coordinación directa al ${links.phone}.`,
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <h3 className="text-lg font-semibold text-emerald-300">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle
          label="Eventos"
          title="Cumpleaños, torneos y encuentros privados"
          description="Organizá tu evento en el club y coordiná formato, fechas y disponibilidad por WhatsApp."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {["Cumpleaños", "Torneos", "Eventos privados"].map((eventType) => (
            <article
              key={eventType}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{eventType}</h3>
              <p className="mt-2 text-sm text-slate-300">
                Consultá opciones y armamos una propuesta para tu grupo.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <SectionTitle
          label="Galería"
          title="Así se vive Sacala x4"
          description="Fotos reales del complejo en jornadas de juego."
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {galleryImages.map((image) => (
            <img
              key={image}
              src={`/sacalapor4-images/${image}`}
              alt="Galería del complejo"
              className="h-44 w-full rounded-xl border border-slate-800 object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:items-start md:py-16">
          <div>
            <h2 className="text-3xl font-bold text-white">Ubicación</h2>
            <p className="mt-3 text-slate-300">
              Av Pueyrredón 2660, Córdoba Capital.
            </p>
            <p className="mt-2 text-sm text-slate-400">Abrimos los domingos.</p>
            <div className="mt-6">
              <LinkButton href={links.maps}>Ver mapa</LinkButton>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h3 className="text-xl font-semibold text-emerald-300">Contacto</h3>
            <p className="mt-3 text-sm text-slate-300">
              Respondemos rápido para reservas, turnos fijos y organización de
              eventos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href={links.reservas}>WhatsApp</LinkButton>
              <LinkButton href={links.instagram} variant="secondary">
                Instagram
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
