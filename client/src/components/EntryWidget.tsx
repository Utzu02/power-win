import React, { useState } from "react";
import "./../index.css";

interface EntryWidgetProps {
  tickets: number;
  onTicketsChange: (n: number) => void;
}

const brands = ["Audi", "Porsche", "BMW"];
const correctAnswer = 'Porsche';
const MAX_TICKETS_AVAILABLE = 500;
const MAX_TICKETS = 500 * 100 / 70;

const PRICE = 2.5;

export default function EntryWidget({
  tickets,
  onTicketsChange,
}: EntryWidgetProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  
  return (
    <div className="p-[1px] rounded-[10px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit m-0 mx-auto self-start">
      <div className="p-6 bg-gradient-to-b from-[#141414] to-[#1b1b1b] rounded-xl w-[45vw] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light">Ce brand este această mașină?</h2>
          <div className="p-[1px] rounded-lg bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] h-full w-fit transition duration-200">
            <button className="w-8 h-8 bg-[#3A3A3A] cursor-pointer rounded-lg flex items-center justify-center text-lg">
              ?
            </button>
          </div>
        </div>

        {/* Brand buttons */}
        <div className="flex space-x-4 mb-8">
          {brands.map((b) => (
            <div
              key={b}
              className="p-[1px] flex-1 mb-6 rounded-md bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] h-full w-fit transition duration-200"
            >
              <button
                onClick={() => setSelectedBrand(b)}
                className={`
    w-full h-full text-lg font-light px-5 py-5 rounded-md transition duration-200 cursor-pointer
    ${
      selectedBrand === b
        ? "bg-gradient-to-b from-[#141414] to-[#1b1b1b] text-white"
        : "bg-[rgb(58,58,58)] hover:bg-[rgb(68,68,68)] text-white"
    }
  `}
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
            className="w-12 h-12 flex items-center justify-center rounded-md text-2xl border border-gray-600 shadow-md bg-gradient-to-b from-black via-[#121212] to-[#161616] hover:via-[#1a1a1a] transition-all cursor-pointer"
          >
            −
          </button>

          {/* Number input */}
          <div className="p-[1px] rounded-lg bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] h-full w-fit">
            <input
              type="number"
              min={1}
              max={500}
              value={tickets}
              onChange={(e) =>
                onTicketsChange(
                  Math.min(500, Math.max(1, Number(e.target.value)))
                )
              }
              placeholder="Introdu numărul de bilete"
              className="w-48 h-12 bg-[#3A3A3A] rounded-lg text-center placeholder-gray-400 focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>

          {/* Plus */}
          <button
            onClick={() => onTicketsChange(Math.min(MAX_TICKETS_AVAILABLE, tickets + 1))}
            className="w-12 h-12 flex items-center justify-center rounded-md text-2xl border border-gray-600 shadow-md bg-gradient-to-b from-black via-[#121212] to-[#161616] hover:via-[#1a1a1a] transition-all cursor-pointer"
          >
            +
          </button>
        </div>
        <div className="flex flex-wrap w-full items-center justify-center gap-2 mt-16">
          {/* Minus */}
          <button
            onClick={() => onTicketsChange(Math.max(1, tickets - 1))}
            className="py-1 px-3 flex items-center justify-center rounded-full border border-gray-600 shadow-md bg-gradient-to-b from-black via-[#121212] to-[#161616] hover:via-[#1a1a1a] transition-all cursor-pointer"
          >
            −
          </button>

          {/* Slider with bubble */}
          <div className="relative flex items-center space-x-4 flex-1">
            {/* Container slider */}
            <div className="percentage-bar relative w-full h-7 overflow-visible">
              {/* Linii verticale (tick marks) */}
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, transparent, transparent 4px, rgba(255,255,255,0.5) 4px, rgba(255,255,255,0.7) 5px)",
                }}
              />

              {/* Bara colorată (valoare) */}
              <div
                className="absolute top-0 left-0 h-full rounded-md z-10 bg-gradient-to-r border border-gray-200 from-neutral-500 to-red-800"
                style={{ width: `${(tickets / MAX_TICKETS_AVAILABLE) * 100}%` }}
              />

              {/* Thumb (bulina albă) */}
              <div
                className="absolute w-4 h-12 rounded-full bg-white z-20"
                style={{
                  left: `calc(${(tickets / MAX_TICKETS_AVAILABLE) * 100}% - 8px)`,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />

              {/* Input slider invizibil dar funcțional */}
              <input
                type="range"
                min={1}
                max={MAX_TICKETS_AVAILABLE}
                value={tickets}
                onChange={(e) => onTicketsChange(Number(e.target.value))}
            
                className="absolute top-0 left-0 w-full h-4 opacity-0 z-30 cursor-pointer"
              />
            </div>

            {/* Indicator deasupra bulinei */}
            <div
              className="absolute -top-10 text-xs text-white bg-[linear-gradient(to_bottom,rgb(100,100,100),rgb(69,68,69))] px-2 py-1 rounded-sm z-30 transition"
              style={{
                left: `calc(${(tickets / MAX_TICKETS_AVAILABLE) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              <p className="text-nowrap">{tickets} de bilete</p>
            </div>
          </div>

          {/* Plus */}
          <button
            onClick={() => onTicketsChange(Math.min(500, tickets + 1))}
            className="py-1 px-3 flex items-center justify-center rounded-full border border-gray-600 shadow-md bg-gradient-to-b from-black via-[#121212] to-[#161616] hover:via-[#1a1a1a] transition-all cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Participă acum button */}
        <div className="flex align-middle justify-center">
          <button className="mt-6 w-[84%] flex align-middle justify-center cursor-pointer  bg-[linear-gradient(to_bottom,rgb(200,0,0,1),rgba(54,54,54,0.1))] hover:brightness-120 text-lg font-medium py-2 rounded-xl transition">
            Participă acum – £{(tickets * PRICE).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
