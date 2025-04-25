import React, { useState } from 'react';

interface SpinToWinProps {
  chance: number;
}

export default function SpinToWin({ chance }: SpinToWinProps) {
  const percentage = Math.max(0, Math.min(100, chance));
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [transition, setTransition] = useState('transform 2s ease-in');

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    const fastPart = 1080; // 3 ture
    const slowPart = 180 + Math.floor(Math.random() * 90); // încetinire finală

    setTransition('transform 2s ease-in');
    const firstAngle = angle - fastPart;
    setAngle(firstAngle);

    setTimeout(() => {
      setTransition('transform 1s ease-out');
      setAngle(firstAngle - slowPart);
    }, 2000);

    setTimeout(() => {
      const win = Math.random() * 100 < chance;
      setResult(win ? '🎉 Ai câștigat!' : 'N-ai avut noroc.');
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="p-4 rounded flex flex-col text-center w-full">
      <div className="relative aspect-square w-full max-w-[16rem] mx-auto">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#444"
            strokeWidth="2.5"
          />
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831"
            fill="none"
            stroke="#9f0712"
            strokeWidth="2.5"
            strokeDasharray={`${percentage} ${100 - percentage}`}
            strokeLinecap="round"
          />
        </svg>

        {/* Punct rotativ */}
        <div
          className="absolute w-3 h-3 bg-red-800 rounded-full"
          style={{
            top: '50px',
            left: '50%',
            transform: `rotate(${angle}deg) translateX(-50%) translateY(-76px)`,
            transformOrigin: 'center 76px',
            transition: transition
          }}
        />

        {/* Text procent */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-xl font-semibold">
          <p className="text-2xl">{percentage}%</p>
          <p className="text-[16px] text-gray-400">Șansă de câștig</p>
        </div>
      </div>

      <button
        onClick={spin}
        disabled={spinning}
        className="bg-[rgb(58,58,58)] mt-10 flex justify-center items-center hover:bg-[rgb(68,68,68)] text-white text-sm font-light px-8 py-2 rounded-md h-full transition duration-200 cursor-pointer"
      >
        <svg width="22" height="20" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="..." fill="white" />
        </svg>
        <p className="ml-3">{spinning ? 'Se învârte...' : 'Demo Spin'}</p>
      </button>

      {result && (
        <p className="mt-4 text-center text-lg font-semibold">
          {result}
        </p>
      )}
    </div>
  );
}
