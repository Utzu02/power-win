import React, { useState } from 'react';
import './../index.css';

interface EntryWidgetProps {
  tickets: number;
  onTicketsChange: (n: number) => void;
}

const brands = ['Audi', 'Porsche', 'BMW'];
const MAX_TICKETS = 500;

export default function EntryWidget({ tickets, onTicketsChange }: EntryWidgetProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  return (
    <div className="p-[1px] rounded-[10px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit mt-10 mx-auto overflow-hidden">
      <div className="p-6 bg-[#1f1f1f] border border-gray-700 rounded-xl w-fit mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light">Ce brand este această mașină?</h2>
          <button className="w-8 h-8 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center text-lg">
            ?
          </button>
        </div>

        {/* Brand buttons */}
        <div className="flex space-x-4 mb-8">
          {brands.map((b) => (

            <div className="p-[1px] flex-1 mb-6 rounded-md bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] h-full w-fit transition duration-200">
            <button 
              key={b} onClick={() => setSelectedBrand(b)} 
              className={
                selectedBrand === b ?
                  "bg-[rgb(58,58,58)] hover:bg-[rgb(68,68,68)] text-white w-full h-full text-lg font-light px-5 py-5 rounded-md transition duration-200 cursor-pointer" :
                  "bg-[rgb(58,58,58)] hover:bg-[rgb(68,68,68)] text-white w-full h-full text-lg font-light px-5 py-5 rounded-md transition duration-200 cursor-pointer"
              }
            >
                {b}
            </button>
            </div>
          ))}
        </div>

        {/* Ticket input group */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {/* Minus */}
          <button
            onClick={() => onTicketsChange(Math.max(1, tickets - 1))}
            className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white text-2xl"
          >
            −
          </button>

          {/* Number input */}
          <input
            type="number"
            min={1}
            value={tickets}
            onChange={(e) => onTicketsChange(Math.max(1, Number(e.target.value)))}
            placeholder="Introdu numărul de bilete"
            className="w-48 h-12 bg-gray-800 border border-gray-600 rounded-lg text-center placeholder-gray-400 focus:outline-none"
          />

          {/* Plus */}
          <button
            onClick={() => onTicketsChange(Math.min(MAX_TICKETS, tickets + 1))}
            className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white text-2xl"
          >
            +
          </button>
        </div>

        {/* Slider with bubble */}
        <div className="relative flex items-center space-x-4 mb-8 w-[600px]">
          {/* Minus icon */}
          <div className="text-white text-2xl">−</div>

          {/* Bubble */}
          <div
            className="absolute -top-8 bg-gray-700 text-xs text-white px-2 py-1 rounded pointer-events-none"
            style={{ left: `${(tickets / MAX_TICKETS) * 100}%`, transform: 'translateX(-50%)' }}
          >
            {tickets} de bilete
          </div>

          {/* Slider */}
          <input
            type="range"
            min={1}
            max={MAX_TICKETS}
            value={tickets}
            onChange={(e) => onTicketsChange(Number(e.target.value))}
            className="flex-1 h-3 rounded-full appearance-none bg-gradient-to-r from-gray-700 via-gray-600 to-red-600 accent-white"
          />

          {/* Plus icon */}
          <div className="text-white text-2xl">+</div>
        </div>

        {/* Participă acum button */}
        <button
          className="mt-6 w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-600 text-lg font-medium py-4 rounded-lg transition"
        >
          Participă acum – £{(tickets * 2.5).toFixed(2)}
        </button>
      </div>
    </div>
  );
}
