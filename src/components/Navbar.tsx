import { useState } from "react";
import { links, navigationItems, routes, type PageType } from "../data/content";

type NavbarProps = {
  compact?: boolean;
  currentPage: PageType;
};

export function Navbar({ compact = false, currentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navBaseClass =
    "text-sm font-medium text-white/85 transition duration-200 hover:text-white";

  return (
    <header
      className={
        compact
          ? "sticky inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/95 backdrop-blur"
          : "absolute inset-x-0 top-0 z-40"
      }
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 ${compact ? "py-3 md:py-4" : "py-4 md:py-6"}`}
      >
        <a href={routes.home} className="flex items-center gap-3">
          <img
            src="/sacalapor4-images/logo-image.jpeg"
            alt="Sacala x4 logo"
            className="h-11 w-11 rounded-full border border-white/40 object-cover"
            loading="eager"
          />
          <span className="text-sm font-bold tracking-wide text-white md:text-base">
            Sacala x 4
          </span>
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/30 text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className="text-lg">☰</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => {
            const isActive = !item.external && item.href === routes[currentPage];

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={`${navBaseClass} ${isActive ? "text-white" : ""}`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-[#24b35e] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#24b35e]/30 transition duration-300 hover:scale-[1.02] hover:bg-[#1e9b50]"
          >
            Agenda tu turno
          </a>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-4 mb-3 rounded-2xl border border-white/20 bg-slate-900/95 p-4 text-white md:hidden">
          <div className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={navBaseClass}
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center justify-center rounded-2xl bg-[#24b35e] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Agenda tu turno
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
