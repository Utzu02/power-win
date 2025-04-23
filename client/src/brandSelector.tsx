import React, { useState } from 'react';
const brands = ['Audi', 'Porsche', 'BMW'];

export default function BrandSelector() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div>
        <h1 className='mb-2'>Masina</h1>
        <div className="flex space-x-4">
        {brands.map(b => (
            <button
            key={b}
            onClick={() => setSelected(b)}
            className={`flex-1 py-2 rounded border transition-colors ${
                selected === b ? 'bg-red-600 text-white border-transparent' : 'border-gray-600 hover:border-gray-400'
            }`}
            >
            {b}
            </button>
        ))}
        </div>
    </div>
  );
}