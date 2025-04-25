import React, { useState, useRef, useEffect } from 'react';
import EntryWidget from '../components/EntryWidget';
import DescriptionWidget from '../components/DescriptionWidget';
import SpinInstantWidget from '../components/SpinInstantWidget';

export default function RafflePage() {
  const [tickets, setTickets] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const entryRef = useRef<HTMLDivElement>(null);
  const [entryHeight, setEntryHeight] = useState<number>(0);

  useEffect(() => {
    if (entryRef.current) {
      setEntryHeight(entryRef.current.clientHeight);
    }
  }, [tickets]);

  return (
    <div className="mt-10 relative min-h-screen text-white space-y-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
        <div ref={entryRef}>
          <EntryWidget
            tickets={tickets}
            onTicketsChange={setTickets}
          />
        </div>
        <DescriptionWidget syncedHeight={entryHeight} />
      </div>

      {/* Al doilea rând: Spin + selectare produse + Instant Win */}
      <div className='flex flex-wrap justify-center align-middle'>
      <SpinInstantWidget
        tickets={tickets}
        selectedProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
      /></div>
    </div>
  );
}
