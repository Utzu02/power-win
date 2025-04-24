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
    const pct = Math.min(80, (tickets / 500) * 80);
    setChance(Math.round(pct));
  }, [tickets]);

  return (
    <div className=" ml-8 mr-23 p-[1px] rounded-[10px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit h-auto mt-10 mx-auto overflow-hidden">
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

        {/* Col 2: 4 chenare verticale */}
        <div className="flex flex-col space-y-4">
          {products.map((p, idx) => (
            <div
              key={p}
              onClick={() => onSelectProduct(p)}
              className={`
                h-24 w-32 border-2 rounded-lg flex items-center justify-center
                cursor-pointer transition
                ${selectedProduct === p
                  ? 'border-red-600 bg-red-600/20'
                  : 'border-gray-600 hover:border-gray-500'}
              `}
            >
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
          ))}
        </div>

        {/* Col 3: Rezultat selectat (imagine scaled down) */}
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
