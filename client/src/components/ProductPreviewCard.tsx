// src/components/ProductPreviewCard.tsx
import React from 'react';

interface ProductPreviewCardProps {
  product: string | null;
  attachment: string
}

export default function ProductPreviewCard({ product, attachment }: ProductPreviewCardProps) {
  if (product === 'iPhone 16') {
    return (
      <div className="p-[1px] rounded-xl bg-[linear-gradient(to_bottom,rgba(120,120,120,1),rgba(255,255,255,0.15))] w-full h-full">
        <div className="bg-gradient-to-b from-[#141414] to-[#1b1b1b] rounded-xl flex flex-col items-center justify-between p-6 h-full">
          
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white">
              iPhone 16 Pro Max 256GB
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Cash Alternative: £1000
            </p>
          </div>

          {/* Phone Illustration */}
          <div className="relative w-48 h-96">
            <img src={attachment} alt="iphone 16"></img>
          </div>

          {/* Footer note */}
          <p className="text-sm text-gray-400 text-center">
            You will receive the 256GB version, in the color of your choice.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-[1px] rounded-xl bg-[linear-gradient(to_bottom,rgba(120,120,120,1),rgba(255,255,255,0.15))] w-full h-full">
      <div className="bg-gradient-to-b from-[#141414] to-[#1b1b1b] rounded-xl flex items-center justify-center h-full">
        <span className="text-sm text-gray-300 px-4 text-center">
          {product ?? 'Niciun produs selectat'}
        </span>
      </div>
    </div>
  );
}
