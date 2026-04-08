import { useState, type ChangeEvent } from "react";
import { links, navigationItems, routes, type PageType } from "../data/content";

type NavbarProps = {
  currentPage: PageType;
};

export function Navbar({ currentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass =
    "text-lg font-semibold text-white/90 transition duration-200 hover:text-white";

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

  const handleEventChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const destination = event.target.value;
    if (destination) {
      window.location.href = destination;
      event.target.selectedIndex = 0;
    }
  };

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/15 bg-slate-950/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
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

        <div className="hidden items-center gap-6 min-[1100px]:flex">
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

          <select
            defaultValue=""
            onChange={handleEventChange}
            className="rounded-xl border border-white/35 bg-slate-900/70 px-3 py-2 text-lg font-semibold text-white/90 outline-none transition hover:text-white"
            aria-label="Eventos"
          >
            <option value="" disabled>
              Eventos
            </option>
            {eventOptions.map((option) => (
              <option key={option.label} value={option.href}>
                {option.label}
              </option>
            ))}
          </select>

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

            <select
              defaultValue=""
              onChange={(event) => {
                handleEventChange(event);
                setMenuOpen(false);
              }}
              className="rounded-xl border border-white/35 bg-slate-900/70 px-3 py-2 text-lg font-semibold text-white/90 outline-none"
              aria-label="Eventos"
            >
              <option value="" disabled>
                Eventos
              </option>
              {eventOptions.map((option) => (
                <option key={option.label} value={option.href}>
                  {option.label}
                </option>
              ))}
            </select>

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
