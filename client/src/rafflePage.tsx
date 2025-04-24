import React from 'react'
import BrandSelector from './brandSelector';
import TicketInput from './ticketInput';
import TicketSlider from './ticketSlider';
import SpinToWin from './spinToWin';
import InstantWin from './instantWin';
import { useState } from 'react';

export default function RafflePage() {
  const [chance, setChange] = useState<number>(0);
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column: Entry Controls */}
        <div className="space-y-6">
          <BrandSelector />
          <div className="flex items-center space-x-4">
            <TicketInput />
            <TicketSlider
              onChange = {(tickets)  => {
                const pct = Math.min(80, (tickets / 500) * 80);
                setChange(Math.round(pct));
              }}
            />
          </div>
          <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded">
            Participă acum - £312,5
          </button>
          <SpinToWin chance={chance} />
        </div>

        {/* Right Column: Details & Instant Win */}
        <div className="space-y-6">
          <div className="border border-gray-700 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Descriere</h2>
            <p>Model: Porsche 911 (992) Turbo S | Sonderwunsch | Motor 3.8 | 650 CP</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-gray-300">
              <li>"Sport" button</li>
              <li>Adaptiv scaune Sport incl. reglaj și pachet Memory</li>
              {/* ...alte specificații... */}
            </ul>
          </div>
          <InstantWin />
        </div>
      </div>
    </div>
  );
}