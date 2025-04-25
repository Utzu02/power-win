import React from "react";
import "./../index.css";

interface Winner {
    name: string;
    tickets: string;
    order: string;
}

// Funcție utilă pentru generare random
const getRandomNumber = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

// Generăm 20 de câștigători cu date random
const winners: Winner[] = Array.from({ length: 30 }, (_, __) => ({
    name: "Petru Mihaescu[Guest]",
    tickets: `${getRandomNumber(1, 10)}`,      // bilete între 1 și 10
    order: `#${getRandomNumber(1000, 9999)}`,  // comandă între #1000 și #9999
}));

const PowerWin: React.FC = () => {
    return (
        <div className="p-[1px] rounded-[10px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit mt-10 overflow-hidden">
            <div className="relative bg-gradient-to-b from-[#141414] to-[#1b1b1b] text-white px-4 sm:px-6 pt-6 pb-3 rounded-[10px] w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[45vw] max-h-[50vh] overflow-hidden">
                <h2 className="text-lg sm:text-xl font-semibold mb-6">Participanți PowerWin</h2>

                {/* Buton cu gradient top-down și colțuri mai drepte */}
                <div className="p-[1px] mb-6 rounded-md bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit transition duration-200">
                    <button className="bg-[rgb(58,58,58)] hover:bg-[rgb(68,68,68)] text-white text-sm font-light px-5 py-1.5 rounded-md w-full h-full transition duration-200 cursor-pointer">
                        Număr bilet / Nume participant
                    </button>
                </div>

                {/* Zona scrollabilă */}
                <div className="overflow-y-auto max-h-[30vh] custom-scrollbar pr-10 ">
                    <div className="bg-[#171717] z-10 sticky top-0 pb-3">
                        {/* Header fix */}
                        <div className="grid grid-cols-[2fr_1fr_1fr]  text-white text-xs sm:text-sm logomedium pb-2">
                            <div>Participanți</div>
                            <div className="">Nr. Bilete</div>
                            <div className="text-right">Nr. Comandă</div>
                        </div>

                        {/* Linie SVG */}
                        <div className="w-full top-8 mt-1">
                            <svg width="100%" height="2" viewBox="0 0 1110 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="1" x2="1110" y2="1" stroke="url(#paint0_linear_167_16)" strokeWidth="2" />
                                <defs>
                                    <linearGradient id="paint0_linear_167_16" x1="0" y1="2.5" x2="1110" y2="2.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0" />
                                        <stop offset="0.5" stopColor="white" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    {/* Lista participanților */}
                    <div className="">
                        {winners.map((winner, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-[2fr_1fr_1fr] py-2.5 text-xs font-small sm:text-sm hover:bg-[#1e1e1e] transition"
                            >
                                <div className="text-[10px] sm:text-xs md:text-sm">{winner.name}</div>
                                <div className="whitespace-nowrap text-[10px] sm:text-xs md:text-sm">{winner.tickets}</div>
                                <div className="whitespace-nowrap text-[10px] sm:text-xs md:text-sm text-right">{winner.order}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerWin;
