import React, { useEffect, useState } from 'react';
import SpinToWin from '../spinToWin';
import InstantWin from '../instantWin';

const products = ['iPhone 16', 'Samsung Galaxy S24', 'Apple Laptop', 'Samsung Smart TV'];

interface SpinInstantWidgetProps {
  tickets: number;
  selectedProduct: string | null;
  onSelectProduct: (p: string) => void;
}

export default function SpinInstantWidget({
  tickets,
  selectedProduct,
  onSelectProduct,
}: SpinInstantWidgetProps) {
  const [chance, setChance] = useState<number>(0);

  // recalculăm % de șansă când tickets se schimbă
  useEffect(() => {
    const pct = Math.min(80, (tickets / 500) * 80);
    setChance(Math.round(pct));
  }, [tickets]);

  return (
    <div className="p-4 border border-gray-700 rounded-lg bg-gradient-to-b from-[#141414] to-[#1b1b1b] grid grid-cols-3 gap-4">
      {/* Col 1: Spin */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Spin to Win</h4>
        <SpinToWin chance={chance} />
        <button className="mt-2 px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">
          Demo Spin
        </button>
      </div>
      {/* Col 2: Selectare produs & afișare */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <h4 className="text-lg font-semibold">Produse</h4>
        <div className="flex flex-wrap gap-2">
          {products.map(p => (
            <button
              key={p}
              onClick={() => onSelectProduct(p)}
              className={`px-3 py-1 border rounded transition-colors
                ${selectedProduct === p
                  ? 'bg-red-600 text-white border-transparent'
                  : 'border-gray-600 hover:border-gray-400'
                }`}
            >
              {p}
            </button>
          ))}
        </div>
        {selectedProduct && (
          <div className="mt-4 p-2 bg-gray-800 rounded text-center">
            <p className="text-sm">Selectat:</p>
            <p className="font-semibold">{selectedProduct}</p>
          </div>
        )}
      </div>
      {/* Col 3: Instant Win */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Instant Win</h4>
        <InstantWin />
      </div>
    </div>
  );
}