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
    <div className="mt-[8vh] relative">
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
            <div className="p-[1px] ml-2 rounded-md bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit transition duration-200">
              <button
                onClick={() => setShowModal(true)}

                className="bg-[rgb(58,58,58)] flex justify-center items-center hover:bg-[rgb(68,68,68)] text-white text-sm font-light px-4 py-1.5 rounded-md w-full h-full transition duration-200 cursor-pointer"
              >
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25 7.5C4.91848 7.5 4.60054 7.6317 4.36612 7.86612C4.1317 8.10054 4 8.41848 4 8.75C4 9.08152 4.1317 9.39946 4.36612 9.63388C4.60054 9.8683 4.91848 10 5.25 10H5.26C5.59152 10 5.90946 9.8683 6.14388 9.63388C6.3783 9.39946 6.51 9.08152 6.51 8.75C6.51 8.41848 6.3783 8.10054 6.14388 7.86612C5.90946 7.6317 5.59152 7.5 5.26 7.5H5.25Z" fill="white" />
                  <path d="M4.75 2.5C4.75 1.90326 4.98705 1.33097 5.40901 0.90901C5.83097 0.487053 6.40326 0.25 7 0.25H16C16.5967 0.25 17.169 0.487053 17.591 0.90901C18.0129 1.33097 18.25 1.90326 18.25 2.5V11.5C18.25 12.0967 18.0129 12.669 17.591 13.091C17.169 13.5129 16.5967 13.75 16 13.75H14.25V15.5C14.25 16.0967 14.0129 16.669 13.591 17.091C13.169 17.5129 12.5967 17.75 12 17.75H3C2.40326 17.75 1.83097 17.5129 1.40901 17.091C0.987053 16.669 0.75 16.0967 0.75 15.5V6.5C0.75 5.90326 0.987053 5.33097 1.40901 4.90901C1.83097 4.48705 2.40326 4.25 3 4.25H4.75V2.5ZM12.75 6.5C12.75 6.30109 12.671 6.11032 12.5303 5.96967C12.3897 5.82902 12.1989 5.75 12 5.75H3C2.80109 5.75 2.61032 5.82902 2.46967 5.96967C2.32902 6.11032 2.25 6.30109 2.25 6.5V13.442L7.918 10.504C8.32959 10.2904 8.79711 10.2092 9.25661 10.2715C9.7161 10.3338 10.1451 10.5365 10.485 10.852L12.75 12.956V6.5ZM2.25 15.5C2.25 15.914 2.586 16.25 3 16.25H12C12.1989 16.25 12.3897 16.171 12.5303 16.0303C12.671 15.8897 12.75 15.6989 12.75 15.5V15.003L9.464 11.952C9.35088 11.8468 9.20805 11.7792 9.05501 11.7582C8.90198 11.7373 8.74622 11.7641 8.609 11.835L2.25 15.132V15.5ZM6.25 4.25H12C12.5967 4.25 13.169 4.48705 13.591 4.90901C14.0129 5.33097 14.25 5.90326 14.25 6.5V12.25H16C16.1989 12.25 16.3897 12.171 16.5303 12.0303C16.671 11.8897 16.75 11.6989 16.75 11.5V2.5C16.75 2.30109 16.671 2.11032 16.5303 1.96967C16.3897 1.82902 16.1989 1.75 16 1.75H7C6.80109 1.75 6.61032 1.82902 6.46967 1.96967C6.32902 2.11032 6.25 2.30109 6.25 2.5V4.25Z" fill="white" />
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
          className="absolute w-full top-40 pointer-events-none"
        />

        {/* Preț centrat */}
        <div className="absolute top-75 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-[1.5px] px-8 py-4 rounded-full shadow-md text-white text-5xl border-white/40">
          <p>£2.50</p>
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
