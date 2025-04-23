import React, { useState } from 'react';
export default function TicketInput() {
  const [count, setCount] = useState(1);
  return (
    <div className="flex items-center space-x-2">
      <button onClick={() => setCount(c => Math.max(1, c - 1))} className="px-3 py-1 bg-gray-700 rounded">-</button>
      <input
        type="number"
        min={1}
        value={count}
        onChange={e => setCount(Math.max(1, Number(e.target.value)))}
        className="w-16 text-center bg-gray-800 rounded"
      />
      <button onClick={() => setCount(c => c + 1)} className="px-3 py-1 bg-gray-700 rounded">+</button>
    </div>
  );
}