type ImageGridProps = {
  images: readonly string[];
  altPrefix: string;
};

export function ImageGrid({ images, altPrefix }: ImageGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.slice(0, 4).map((image, index) => (
        <figure
          key={`${image}-${index}`}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
        >
          <img
            src={image}
            alt={`${altPrefix} ${index + 1}`}
            loading="lazy"
            className="h-auto w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </figure>
      ))}
    </div>
  );
}
