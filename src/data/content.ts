export type PageType = "home" | "gallery" | "location";

export const routes: Record<PageType, string> = {
  home: "/",
  gallery: "/imagenes",
  location: "/ubicacion",
};

export const links = {
  appReservas: "https://alquilatucancha.com/sportclub/941",
  whatsapp: "https://wa.me/543515502961",
  instagram: "https://www.instagram.com/sacala_x4?igsh=MWgzaGJ4N3Yzb216cA==",
  maps: "https://www.google.com/maps/search/?api=1&query=Av+Pueyrredon+2660,+Cordoba+Capital",
  phone: "3515502961",
} as const;

export const navigationItems = [
  { label: "App de Reservas", href: links.appReservas, external: true },
  { label: "Instalaciones", href: "#instalaciones", external: false },
  { label: "Ubicación", href: routes.location, external: false },
  { label: "Sobre Nosotros", href: "#nosotros", external: false },
  { label: "Instagram", href: links.instagram, external: true },
] as const;

export const facilityItems = [
  "4 canchas outdoor",
  "Patio cervecero",
  "Asador",
  "Estacionamiento gratuito",
  "Quincho para eventos sociales",
] as const;

export const sportsEventItems = ["Torneos", "Ligas", "Clases de pádel"] as const;

export const socialEventItems = [
  "Cumpleaños",
  "Bautismos",
  "Fiestas corporativas",
  "Turnos gratis por tu cumpleaños",
] as const;

export const aboutItems = [
  "Emprendimiento familiar",
  "Atención personalizada",
  "Sacala x 4: El corazón del pádel",
] as const;

export const galleryPreviewImages = [
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.32.42 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.48.29 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.59.21 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 9.00.32 AM.webp",
] as const;

export const sectionImages = {
  instalaciones: [
    "/instalaciones/canchas-dia.webp",
    "/instalaciones/canchas-y-gente-noche.webp",
    "/instalaciones/canchas-y-gente-cerveza-2.webp",
    "/instalaciones/gente-comiendo-5.webp",
    "/instalaciones/canchas-y-gente-cerveza.webp",
    "/instalaciones/asador.webp",
  ],
  eventosDeportivos: [
    "/eventos-deportivos/chicos-ganadores.webp",
    "/eventos-deportivos/gente-jugando.webp",
    "/eventos-deportivos/gente-jugando-5.webp",
    "/eventos-deportivos/gente-jugando-6.webp",
    "/eventos-deportivos/chicas-jugando.webp",
    "/eventos-deportivos/gente-jugando-3.webp",
  ],
  eventosSociales: [
    "/eventos-sociales/chicos-jugando-2.webp",
    "/eventos-sociales/gente-comiendo.webp",
    "/eventos-sociales/gente-comiendo-2.webp",
    "/eventos-sociales/pizarra-2.webp",
    "/eventos-sociales/mesa-de-ping-pong.webp",
    "/eventos-sociales/metegol.webp",
  ],
  nosotros: [
    "/sobre-nosotros/duenia-atendiendo.webp",
    "/sobre-nosotros/chicas-comiendo.webp",
    "/sobre-nosotros/gente-jugando-2.webp",
    "/sobre-nosotros/duenia-e-hijo.webp",
  ],
} as const;

export const fullGalleryImages = [
  "/sacalapor4-images/mother-and-son-image.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-24 at 4.09.03 PM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-24 at 4.09.03 PM (1).webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.32.42 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.33.09 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.34.13 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.34.53 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.36.08 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.37.19 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.38.04 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.39.26 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.40.23 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.47.21 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.48.29 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.48.54 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.49.50 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.50.40 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.51.16 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.51.43 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.52.07 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.52.30 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.54.50 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.55.27 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.56.06 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.57.01 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.58.34 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 8.59.21 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 9.00.32 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 9.02.34 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 9.03.03 AM.webp",
  "/sacalapor4-images/WhatsApp Image 2026-03-25 at 9.14.08 AM.webp",
] as const;

export const comments = [
  "Excelente ambiente, canchas impecables y atención rápida por WhatsApp.",
  "Organizamos un cumpleaños y salió perfecto, súper recomendables.",
  "Muy cómodo el estacionamiento y el patio cervecero después de jugar.",
  "Se nota que es un emprendimiento familiar, siempre te reciben de diez.",
] as const;

export const mapEmbedLinks = {
  centered:
    "https://maps.google.com/maps?q=Av.%20Pueyrredon%202660%20Cordoba&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;
