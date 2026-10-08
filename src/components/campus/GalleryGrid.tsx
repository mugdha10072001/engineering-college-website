import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function GalleryGrid({
  images,
  columns = 3,
}: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null
  );

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  const gridColumns = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null || images.length === 0) {
      return;
    }

    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null || images.length === 0) {
      return;
    }

    setSelectedIndex(
      selectedIndex === images.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <>
      {/* Gallery */}
      <div className={`grid gap-5 ${gridColumns[columns]}`}>
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => openImage(index)}
            className="group relative overflow-hidden rounded-2xl bg-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            aria-label={`View ${image.alt}`}
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Category */}
            {image.category && (
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-900 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                {image.category}
              </span>
            )}

            {/* Bottom information */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {image.title && (
                <h3 className="font-bold text-white">
                  {image.title}
                </h3>
              )}

              <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
                <Maximize2 size={14} />
                Click to enlarge
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeImage}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeImage}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close image preview"
          >
            <X size={24} />
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft size={25} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative flex max-h-[90vh] max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            {/* Caption */}
            {(selectedImage.title || selectedImage.category) && (
              <div className="mt-4 text-center">
                {selectedImage.title && (
                  <h3 className="text-lg font-bold text-white">
                    {selectedImage.title}
                  </h3>
                )}

                {selectedImage.category && (
                  <p className="mt-1 text-sm text-white/60">
                    {selectedImage.category}
                  </p>
                )}

                <p className="mt-2 text-xs text-white/40">
                  {selectedIndex + 1} / {images.length}
                </p>
              </div>
            )}
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight size={25} />
            </button>
          )}
        </div>
      )}
    </>
  );
}