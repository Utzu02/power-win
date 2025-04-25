// src/components/SpinInstantWidget.tsx

import React, { useEffect, useState } from 'react';
import SpinToWin from '../spinToWin';
import InstantWin from '../instantWin';
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
    <div className="p-[1px] rounded-[10px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-[93vw] h-auto mt-10 overflow-hidden">
    <div
      className="
        p-4 border border-gray-700 rounded-lg
        bg-gradient-to-b from-[#141414] to-[#1b1b1b]
        overflow-visible
      "
    >
      <div className="grid grid-cols-4 gap-6 items-start">
        {/* Col 1: Spin to Win */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Spin to Win</h4>
          <SpinToWin chance={chance} />
          <button className="mt-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
            Demo Spin
          </button>
        </div>

          {/* Col 2: product thumbnails (auto‐width) */}
          <div className="flex flex-col space-y-4">
            {products.map((p, idx) => (
              <div
                key={p}
                onClick={() => onSelectProduct(p)}
                className={`
                  p-[1px] rounded-[10px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))]
                  w-fit
                  max-h-[50vh]
                  mt-10 mx-auto
                  cursor-pointer transition
                  ${selectedProduct === p
                    ? 'bg-[linear-gradient(to_bottom,rgb(18,18,18),rgba(29,28,29))]'
                    : 'bg-[linear-gradient(to_bottom,rgb(18,18,18),rgba(29,28,29))]'
                  }
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
                    <span className="text-sm text-center">{p}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Col 3: selected product preview */}
          <div className="flex flex-col">
            {selectedProduct === products[0] ? (
              <img
                src={iphoneCard}
                alt="iPhone 16 Pro Max"
                className="w-77/100 h-auto object-contain"
              />
            ) : (
              <div className="rounded-lg border border-gray-600 flex items-center justify-center bg-gray-800 h-48">
                <span className="text-sm text-gray-300">
                  {selectedProduct ?? 'Niciun produs selectat'}
                </span>
              </div>
            )}
          </div>

          {/* Col 4: Instant Win */}
          <div className="flex flex-col">
            <InstantWin />
          </div>
        </div>
      </div>
    </div>
  );
}
