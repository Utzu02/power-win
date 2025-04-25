// src/pages/RafflePage.tsx

import React, { useState } from 'react';
import EntryWidget from '../components/EntryWidget';
import DescriptionWidget from '../components/DescriptionWidget';
import SpinInstantWidget from '../components/SpinInstantWidget';
import './../index.css';

export default function RafflePage() {
  // Stări comune
  const [tickets, setTickets] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen text-white space-y-6">
      {/* Primul rând: EntryWidget și DescriptionWidget, una lângă alta */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <EntryWidget
          tickets={tickets}
          onTicketsChange={setTickets}
        />
        <DescriptionWidget />
      </div>

      {/* Al doilea rând: Spin + selectare produse + Instant Win */}
      <div className='flex justify-center align-middle'>
      <SpinInstantWidget
        tickets={tickets}
        selectedProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
      /></div>
    </div>
  );
}
