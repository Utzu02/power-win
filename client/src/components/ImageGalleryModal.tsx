import { FC, MouseEvent } from "react";
import { cn } from "../utils/cn";

interface Props {
  images: string[];
  onClose: () => void;
  onSelect: (index: number) => void;
}

const ImageGalleryModal: FC<Props> = ({ images, onClose, onSelect }) => {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 top-0 bg-black/80 backdrop-blur-sm z-50 w-full flex items-start justify-center p-4"
    >
      <div className="relative w-full max-w-7xl mt-8">
        {/* buton în colț */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-0 right-0 mt-2 mr-2 sm:mt-4 sm:mr-4 text-white text-3xl font-bold hover:text-red-500 transition z-10"
        >
          ✕
        </button>

        {/* galerie responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </div>
  );
};

export default ImageGalleryModal;
