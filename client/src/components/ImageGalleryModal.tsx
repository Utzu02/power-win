import { FC, MouseEvent } from "react";
import { cn } from "../utils/cn";

interface Props {
  images: string[];
  onClose: () => void;
  onSelect: (index: number) => void;
}

const ImageGalleryModal: FC<Props> = ({ images, onClose, onSelect }) => {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    // închide doar dacă se apasă direct pe overlay, nu pe conținut
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 overflow-auto"
    >
      <button
        onClick={onClose}
        className="self-end mr-20 mb-20 text-white text-2xl font-bold hover:text-red-500 transition"
      >
        ✕
      </button>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl">
        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt={`preview-${i}`}
            onClick={() => {
              onSelect(i);
              onClose();
            }}
            className="w-full h-auto rounded-xl cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryModal;
