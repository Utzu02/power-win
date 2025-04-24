import React from 'react';

interface TicketInputProps {
  value: number;
  onChange: (n: number) => void;
}

export default function TicketInput({ value, onChange }: TicketInputProps) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onChange(Math.max(1, value - 1))}
        className="px-3 py-1 bg-gray-700 rounded"
      >
        -
      </button>
      <input
        type="number"
        min={1}
        value={value}
        onChange={e => onChange(Math.max(1, Number(e.target.value)))}
        className="w-16 text-center bg-gray-800 rounded"
      />
      <button
        onClick={() => onChange(value + 1)}
        className="px-3 py-1 bg-gray-700 rounded"
      >
        +
      </button>
    </div>
  );
}