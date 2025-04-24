import React from 'react';

interface TicketSliderProps {
  value: number;
  max?: number;
  onChange: (n: number) => void;
}

export default function TicketSlider({
  value,
  max = 500,
  onChange,
}: TicketSliderProps) {
  return (
    <div className="space-y-2 flex-1">
      <div className="flex justify-between text-sm">
        <button onClick={() => onChange(Math.max(0, value - 1))}>-</button>
        <span>{value} bilete</span>
        <button onClick={() => onChange(Math.min(max, value + 1))}>+</button>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}