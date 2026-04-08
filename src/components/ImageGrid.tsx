type ImageGridProps = {
  images: readonly string[];
  altPrefix: string;
};

export function ImageGrid({ images, altPrefix }: ImageGridProps) {
  return (
    <div className="honeycomb-grid">
      {images.map((image, index) => (
        <figure key={`${image}-${index}`} className="honeycomb-cell group">
          <img
            src={image}
            alt={`${altPrefix} ${index + 1}`}
            loading="lazy"
            className="honeycomb-image"
          />
        </figure>
      ))}
    </div>
  );
}
