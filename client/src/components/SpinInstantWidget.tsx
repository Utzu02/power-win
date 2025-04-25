// src/components/SpinInstantWidget.tsx

import React, { useEffect, useState } from 'react';
import SpinToWin from './spinToWin';
import InstantWin from './instantWin';
import iphoneThumb from '../assets/iphone16.png';
import iphoneCard from '../assets/iphone16selected.png';

const products = [
  'iPhone 16',
  'Samsung Galaxy S24',
  'Apple Laptop',
  'Samsung Smart TV'
];

interface SpinInstantWidgetProps {
  tickets: number;
  selectedProduct: string | null;
  onSelectProduct: (product: string) => void;
}

export default function SpinInstantWidget({
  tickets,
  selectedProduct,
  onSelectProduct,
}: SpinInstantWidgetProps) {
  const [chance, setChance] = useState<number>(0);

  useEffect(() => {
    const pct = (tickets / 500) * 100;
    setChance(Math.round(pct));
  }, [tickets]);

  return (
    <div className="p-[1px] rounded-[10px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-full mt-10">
      <div className="px-4 rounded-lg bg-gradient-to-b from-[#141414] to-[#1b1b1b] h-full">
        <div className="grid grid-cols-[1.9fr_0.7fr_1.3fr_2fr] items-stretch h-full">
          {/* Col 1: Spin to Win */}
          <div className="flex flex-col ml-4 w-[80%] justify-center items-center">
            <h4 className="mt-10 text-lg text-left w-full font-semibold mb-4">Spin to Win</h4>
            <SpinToWin chance={chance} />
          </div>

          {/* Col 2: Product Thumbnails */}
          <div className="flex flex-col justify-center gap-10 items-center h-full">
            {products.map((p, idx) => (
              <div
                key={p}
                onClick={() => onSelectProduct(p)}
                className={`
                  p-[1px] rounded-[10px]
                  bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))]
                  w-fit cursor-pointer transition
                  ${selectedProduct === p
                    ? 'bg-[linear-gradient(to_bottom,rgb(18,18,18),rgba(29,28,29))]'
                    : 'bg-[linear-gradient(to_bottom,rgb(18,18,18),rgba(29,28,29))]'}
                `}
              >
                <div className="h-24 w-32 flex items-center justify-center rounded-lg border-none bg-[linear-gradient(to_bottom,rgb(18,18,18),rgba(29,28,29))]">
                  {idx === 0 ? (
                    <img
                      src={iphoneThumb}
                      alt="iPhone 16"
                      className="max-h-full object-contain"
                    />
                  ) : (
                    <span className="text-sm text-center text-white px-2">{p}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Col 3: Selected Product Preview */}
          <div className="flex flex-col h-full w-full">
            {selectedProduct === products[0] ? (
              <img
                src={iphoneCard}
                alt="iPhone 16 Pro Max"
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <div className="p-[1px] rounded-lg bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-full h-full">
              <div className="h-full w-full bg-gradient-to-b from-[#141414] to-[#1b1b1b] rounded-lg flex items-center justify-center bg-gray-800">
                <span className="text-sm text-gray-300 px-4 text-center">
                  {selectedProduct ?? 'Niciun produs selectat'}
                </span>
              </div></div>
            )}
          </div>

          {/* Col 4: Instant Win */}
          <div className="flex flex-col h-full w-full">
              <InstantWin />
          </div>
        </div>
      </div>
    </div>
  );
}
