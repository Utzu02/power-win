import React from 'react';

const DescriptionWidget = () => {
  return (
    <div className="p-[1px] rounded-[10px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] h-fit mt-10">
      <div className="p-6 w-[45vw] h-[70vh] overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#141414] to-[#1b1b1b] rounded-xl text-white">
        {/* Titlu */}
        <h2 className="text-3xl font-light mb-4">Descriere</h2>

        {/* Subtitlu */}
        <p className="mb-6 font-light text-2xl">
          Model: <strong>Porsche 911 (992) Turbo S</strong> | Sonderwunsch | Motor 3.8 | 650 CP
        </p>

        {/* Lista echipamente – fără bullets, doar liniuță */}
        <div className="space-y-1 font-light leading-relaxed text-xl">
          <p>"Sport" buton</p>
          <p>– Adaptiv scaune Sport incl. reglaj scaun 18-cai si pachet</p>
          <p>– Memory</p>
          <p>– Airbag cortina fata (Thoraxbag)</p>
          <p>– Airbag pe partea pilotului / copilotului</p>
          <p>– Airbag-uri cortina Porsche Side Impact Protection System</p>
          <p>– (POSIP)</p>
          <p>– Blocaj anti-pornire</p>
          <p>– Carlig haine spatar scaun piele</p>
          <p>– Caroserie: 2-usi</p>
          <p>– Connect Plus (Bluetooth, Apple CarPlay, WLAN, VehicleTracking-System – sistem localizare vehicul)</p>
          <p>– Cuplare automata pentru lumina de drum</p>
          <p>– Cutie viteze 8 viteze – cutie viteze cu ambreiaj dublu</p>
          <p>– (PDK)</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionWidget;
