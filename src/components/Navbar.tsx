import { useState } from "react";
import { links, navigationItems, routes, type PageType } from "../data/content";

type NavbarProps = {
  currentPage: PageType;
};

export function Navbar({ currentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);

  const navClass =
    "text-2xl font-bold tracking-wide text-white/90 transition duration-200 hover:text-white";

  const resolvedItems = navigationItems.map((item) => {
    if (currentPage !== "home" && item.href.startsWith("#")) {
      return { ...item, href: `/${item.href}` };
    }

    return item;
  });

  const eventOptions = [
    {
      label: "Deportivos",
      href: currentPage === "home" ? "#eventos-deportivos" : "/#eventos-deportivos",
    },
    {
      label: "Sociales",
      href: currentPage === "home" ? "#eventos-sociales" : "/#eventos-sociales",
    },
  ] as const;

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/15 bg-slate-950/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <a href={routes.home} className="flex items-center gap-3">
          <img
            src="/sacalapor4-images/logo-image.jpeg"
            alt="Sacala x4 logo"
            className="h-16 w-16 rounded-full border border-white/40 object-cover sm:h-20 sm:w-20"
            loading="eager"
          />
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 text-white min-[1100px]:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className="text-xl">☰</span>
        </button>

        <div className="hidden flex-1 items-center justify-evenly gap-6 text-center min-[1100px]:flex">
          {resolvedItems.slice(0, 2).map((item) => {
            const isActive = !item.external && item.href === routes[currentPage];

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={`${navClass} ${isActive ? "text-white" : ""}`}
              >
                {item.label}
              </a>
            );
          })}

          <div className="relative">
            <button
              type="button"
              className={navClass}
              onClick={() => setEventsOpen((prev) => !prev)}
              aria-expanded={eventsOpen}
              aria-haspopup="menu"
            >
              Eventos
            </button>
            {eventsOpen && (
              <div className="absolute left-1/2 top-full z-20 mt-2 w-44 -translate-x-1/2 rounded-2xl border border-white/20 bg-slate-900/95 p-2 shadow-xl">
                {eventOptions.map((option) => (
                  <a
                    key={option.label}
                    href={option.href}
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setEventsOpen(false)}
                  >
                    {option.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {resolvedItems.slice(2).map((item) => {
            const isActive = !item.external && item.href === routes[currentPage];

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={`${navClass} ${isActive ? "text-white" : ""}`}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-[#24b35e] px-5 py-2 text-base font-semibold text-white shadow-lg shadow-[#24b35e]/30 transition hover:bg-[#1e9b50]"
          >
            Agenda tu turno
          </a>
        </div>
      </nav>

      <div className="mx-auto flex w-full max-w-7xl justify-end px-4 pb-3">
        <div className="rounded-xl border border-white/20 bg-slate-900/60 px-3 py-2 text-right text-xs font-semibold tracking-wide text-white/90 sm:text-sm">
          <p>Av. Pueyrredón 2660 · Córdoba</p>
          <p>351 550 2961</p>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-4 mb-3 rounded-2xl border border-white/20 bg-slate-900/95 p-4 text-white min-[1100px]:hidden">
          <div className="flex flex-col gap-3">
            {resolvedItems.slice(0, 2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div>
              <button
                type="button"
                className={navClass}
                onClick={() => setMobileEventsOpen((prev) => !prev)}
                aria-expanded={mobileEventsOpen}
                aria-haspopup="menu"
              >
                Eventos
              </button>
              {mobileEventsOpen && (
                <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-white/20 bg-slate-900/70 p-2">
                  {eventOptions.map((option) => (
                    <a
                      key={option.label}
                      href={option.href}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                      onClick={() => {
                        setMobileEventsOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {resolvedItems.slice(2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex min-h-11 items-center justify-center rounded-2xl bg-[#24b35e] px-5 py-2 text-base font-semibold text-white"
            >
              Agenda tu turno
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
