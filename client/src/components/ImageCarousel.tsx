import { FC, useState } from "react";
import { cn } from "../utils/cn";

interface Props {
  images: string[];
}
export const ImageCarousel: FC<Props> = ({ images }) => {
  const [idx, setIdx] = useState(0);
  return (
    <div className="space-y-2">
      <img
        src={images[idx]}
        alt="Main"
        className="w-full rounded-2xl object-cover aspect-video"
      />
      <div className="flex gap-2 justify-center">
        {images.map((url, i) => (
          <button
            key={url}
            onClick={() => setIdx(i)}
            className={cn(
              "w-16 h-12 rounded-lg overflow-hidden",
              idx === i && "ring-2 ring-accent"
            )}
          >
            <img src={url} alt={`thumb-${i}`} className="object-cover w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  );
};