type ImageGridProps = {
  images: readonly string[];
  altPrefix: string;
};

export function ImageGrid({ images, altPrefix }: ImageGridProps) {
  return (
    <div className="columns-1 gap-3 space-y-3 sm:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <figure
          key={`${image}-${index}`}
          className="group mb-3 break-inside-avoid overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
        >
          <img
            src={image}
            alt={`${altPrefix} ${index + 1}`}
            loading="lazy"
            className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
          />
        </figure>
      ))}
    </div>
  );
}
