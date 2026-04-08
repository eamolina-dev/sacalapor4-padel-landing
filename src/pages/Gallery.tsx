import { fullGalleryImages } from "../data/content";

export function Gallery() {
  return (
    <section className="bg-[#102a43] pb-16 pt-14 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-8 rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/10 md:mb-10 md:p-8">
          <h1 className="text-3xl font-black text-slate-900 md:text-4xl">Galería completa</h1>
          <p className="mt-2 text-base text-slate-700">
            Todas las imágenes disponibles del complejo Sacala x 4.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {fullGalleryImages.map((image, index) => (
            <figure
              key={image}
              className="group overflow-hidden rounded-2xl border border-white/20 bg-white/10"
            >
              <img
                src={image}
                alt={`Imagen de Sacala x 4 ${index + 1}`}
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
