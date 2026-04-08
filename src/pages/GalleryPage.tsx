import { fullGalleryImages } from "../data/content";

export function GalleryPage() {
  return (
    <section className="bg-slate-100 pb-12 pt-24 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:mb-10 md:p-8">
          <h1 className="text-2xl font-black text-slate-900 md:text-3xl">
            Galería completa
          </h1>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Todas las imágenes disponibles del complejo Sacala x 4.
          </p>
        </header>

        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {fullGalleryImages.map((image, index) => (
            <figure
              key={image}
              className="break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <img
                src={image}
                alt={`Imagen de Sacala x 4 ${index + 1}`}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
