type FooterProps = {
  brand?: string;
  email?: string;
  whatsappUrl?: string;
  className?: string;
};

export const Footer = ({
  brand = "Desarrollado por",
  email = "eamolina.dev@gmail.com",
  whatsappUrl = "https://wa.me/5493584382061",
  className = "",
}: FooterProps) => {
  return (
    <footer
      className={`w-full border-t border-white/10 px-4 py-5 text-xs text-white/70 ${className}`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        {/* Marca */}
        <p className="text-center sm:text-left">
          {brand} <span className="font-medium text-white/90">Moli Devs</span>
        </p>

        {/* Contactos */}
        <div className="flex items-center gap-3">
          <a href={`mailto:${email}`} className="transition hover:text-white">
            Email
          </a>
          <span className="opacity-40">|</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
