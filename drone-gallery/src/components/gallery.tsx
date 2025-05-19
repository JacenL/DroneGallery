type GalleryProps = {
    images: string[];
  };
  
  export default function Gallery({ images }: GalleryProps) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={`/${img}`}
            alt={`Image ${idx + 1}`}
            className="w-full h-auto rounded-lg shadow"
          />
        ))}
      </div>
    );
  }
  