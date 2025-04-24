import React, { useState, useEffect } from 'react';

interface TicketSliderProps {
  max?: number;
  onChange: (value: number) => void;
}

export default function TicketSlider({
  max = 500,
  onChange,
}: TicketSliderProps) {
  const [value, setValue] = useState<number>(0);

  // 🚀 Notificăm părinte de fiecare dată când se schimbă „value”
  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <button onClick={() => setValue(v => Math.max(0, v - 1))}>-</button>
        <span>{value} bilete</span>
        <button onClick={() => setValue(v => Math.min(max, v + 1))}>+</button>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={e => setValue(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
