import { galleryPreviewImages, links, routes } from "../data/content";

export function GalleryPreview() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        {galleryPreviewImages.map((image, index) => (
          <a
            key={image}
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl border border-slate-200"
          >
            <img
              src={image}
              alt={`Foto de Sacala x 4 ${index + 1}`}
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </a>
        ))}
      </div>

      <a
        href={routes.gallery}
        className="inline-flex rounded-2xl bg-[#24b35e] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#24b35e]/20 transition duration-300 hover:scale-[1.02] hover:bg-[#1e9b50]"
      >
        Ver todas las imágenes
      </a>
    </div>
  );
}
