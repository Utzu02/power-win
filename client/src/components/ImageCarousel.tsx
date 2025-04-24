import { FC, useState, useEffect } from "react";
import { cn } from "../utils/cn";
import elipsa from "/assets/images/elipsa.png";
import ImageGalleryModal from "./ImageGalleryModal";

interface Props {
  images: string[];
}

export const ImageCarousel: FC<Props> = ({ images }) => {
  const [idx, setIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
  
    if (showModal) {
      html.classList.add("overflow-hidden");
      body.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
    }
  
    return () => {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
    };
  }, [showModal]);
  
  
  const thumbnails = showAll ? images : images.slice(0, 3);

  return (
    <div className="mt-[10vh] relative">
      {/* Galerie thumbnails */}
      <div className="flex justify-center items-center gap-3">
        {thumbnails.map((url, i) => (
          <button
            key={url}
            onClick={() => setIdx(i)}
            className={cn(
              "w-20 h-14 rounded-lg overflow-hidden backdrop-blur-md border border-white/10 transition ring-offset-2",
              idx === i ? "ring-2 ring-white" : "opacity-70 hover:opacity-100"
            )}
          >
            <img
              src={url}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}

        {/* Buton See All dacă sunt >3 imagini */}
        {!showAll && images.length > 3 && (
          <div>
            <div className="p-[1px] mb-6 rounded-md bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit transition duration-200">
              <button
                onClick={() => setShowModal(true)}

                className="bg-[rgb(58,58,58)] flex justify-center items-center hover:bg-[rgb(68,68,68)] text-white text-sm font-light px-5 py-1.5 rounded-md w-full h-full transition duration-200 cursor-pointer"
              >
                <svg width="19" height="16" viewBox="0 0 19 18" fill="none">
                  <path d="M5.25 7.5C4.91848..." fill="white" />
                  {/* ... rest of your SVG path ... */}
                </svg>
                <p className="ml-3">See all Photos</p>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* imagine mare */}
      <div className="relative">
        <img
          src={images[idx]}
          alt="Main"
          className="w-full rounded-2xl object-contain aspect-video"
        />
        <img
          src={elipsa}
          alt="elipsa"
          className="absolute w-full top-35 pointer-events-none"
        />

        {/* Preț centrat */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-[1.5px] px-8 py-4 rounded-full shadow-md text-white text-5xl font-light border border-white/40">
          £2.50
        </div>
      </div>
      {showModal && (
        <ImageGalleryModal
          images={images}
          onClose={() => setShowModal(false)}
          onSelect={(i) => setIdx(i)}
        />
      )}

    </div>
  );
};
