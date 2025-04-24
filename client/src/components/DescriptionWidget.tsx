import React from 'react';

export default function DescriptionWidget() {
  return (
    <div className="p-4 border border-gray-700 bg-gradient-to-b from-[#141414] to-[#1b1b1b] rounded-[10px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit max-h-[50vh] mt-10 mx-auto overflow-hidden">
    <div className="p-4 border border-gray-700 rounded-lg bg-gradient-to-b from-[#141414] to-[#1b1b1b]">
      <h3 className="text-lg font-semibold mb-2">Descriere</h3>
      <p className="text-sm">Model: Porsche 911 (992) Turbo S | Sonderwunsch | Motor 3.8 | 650 CP</p>
      <ul className="list-disc list-inside text-xs text-gray-300 mt-2 space-y-1">
        <li>"Sport" button</li>
        <li>Adaptiv scaune Sport & pachet Memory</li>
        {/* ...restul specificațiilor... */}
      </ul>
    </div>
    </div>
  );
}