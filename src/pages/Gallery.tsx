import { fullGalleryImages } from "../data/content";

const featuredTileClasses = [
  "md:col-span-3 md:row-span-3",
  "md:col-span-3 md:row-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-3",
  "md:col-span-2 md:row-span-2",
  "md:col-span-3 md:row-span-2",
  "md:col-span-3 md:row-span-3",
  "md:col-span-2 md:row-span-2",
] as const;

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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[120px] md:grid-cols-6">
          {fullGalleryImages.map((image, index) => (
            <figure
              key={image}
              className={`group overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-1 ${
                featuredTileClasses[index % featuredTileClasses.length]
              }`}
            >
              <img
                src={image}
                alt={`Imagen de Sacala x 4 ${index + 1}`}
                className="h-full w-full rounded-xl object-contain transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
