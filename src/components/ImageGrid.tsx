type ImageGridProps = {
  images: readonly string[];
  altPrefix: string;
};

export function ImageGrid({ images, altPrefix }: ImageGridProps) {
  return (
    <div className="masonry-gallery">
      {images.map((image, index) => (
        <figure key={`${image}-${index}`} className="masonry-item group">
          <img
            src={image}
            alt={`${altPrefix} ${index + 1}`}
            loading="lazy"
            className="masonry-image"
          />
        </figure>
      ))}
    </div>
  );
}
