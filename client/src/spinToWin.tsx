import React from 'react';

interface SpinToWinProps {
  /** procent de câștig (0–100) */
  chance: number;
}

export default function SpinToWin({ chance }: SpinToWinProps) {
  const percentage = Math.max(0, Math.min(100, chance));
  return (
    <div className="p-4 rounded text-center">
      <div className="relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          {/* cerc de fundal */}
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#444"
            strokeWidth="2"
          />
          {/* cercul progres */}
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831"
            fill="none"
            stroke="#c53030"
            strokeWidth="2"
            strokeDasharray={`${percentage} ${100 - percentage}`}
            strokeLinecap="round"
          />
        </svg>
        {/* textul procent */}
        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
          {percentage}%
        </div>
      </div>
    
    </div>
  );
}
