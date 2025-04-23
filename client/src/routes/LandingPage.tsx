import { useState } from "react";
import Competition from "../types/competition";
import Participant from "../types/participant";
import { Header } from "../components/Header";
import { ImageCarousel } from "../components/ImageCarousel";
import { ProgressBar } from "../components/ProgressBar";
import { BrandQuestion } from "../components/BrandQuestion";
import { TicketPurchase } from "../components/TicketPurchase";
import { SpinToWin } from "../components/SpinToWin";
import { InstantWinWinners } from "../components/InstantWinWinners";

const mockCompetition: Competition = {
  id: "porsche-911-turbo-s-2022",
  title: "Porsche 911 Turbo S 2022",
  pricePerTicket: 2.5,
  alternativeCash: 80000,
  brandQuestion: {
    question: "Ce brand este această mașină?",
    answers: ["Audi", "Porsche", "BMW"],
    correctIndex: 1,
  },
  totalTickets: 45000,
  soldTickets: 30735,
  endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 19).toISOString(),
  images: [
    "https://images.pexels.com/photos/11546171/pexels-photo-11546171.jpeg?auto=compress",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress",
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress",
  ],
  description: [
    "Sport button",
    "Adecvă să scaune Sport incl. reglaj scaun 18‑cai și pachet Memory",
    "Airbag cortină față (Thoraxbag)",
    "Airbaguri pe partea pilotului / copilotului",
    "Airbag în cortină Porsche Side Impact Protection System (POSIP) pe partea spate",
    "Colanise 2+2",
    "Connect Plus (Bluetooth, Apple CarPlay, WLAN, VehicleTracking‑System – sistem localizare vehicul)",
    "Cutie automată pentru lumina de drum",
    "Viteze viteză 8 viteze – cutie viteză cu ambreiaj dublu (PDK)",
  ],
};

export default function LandingPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number>();
  const [spinChance, setSpinChance] = useState(70);
  const [winners, setWinners] = useState<Participant[]>([]);

  const handlePurchase = (qty: number) => {
    alert(`Ai cumpărat ${qty} bilete! Succes!`);
  };

  const handleSpin = () => {
    const win = Math.random() < spinChance / 100;
    if (win) alert("Ai câștigat! Felicitări!");
    setSpinChance(Math.max(5, spinChance - 10));
  };

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] gap-8 mx-auto p-6">
      <Header />

      <main className="grid lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <section className="space-y-6 lg:col-span-2">
          <ImageCarousel images={mockCompetition.images} />

          <div className="flex items-end justify-between">
            <h1 className="text-3xl font-bold">{mockCompetition.title}</h1>
            <span className="text-4xl font-semibold text-accent">
              £{mockCompetition.pricePerTicket.toFixed(2)}
            </span>
          </div>

          <ProgressBar
            percentage={
              (mockCompetition.soldTickets / mockCompetition.totalTickets) * 100
            }
          />

          <BrandQuestion
            {...mockCompetition.brandQuestion}
            selected={selectedAnswer}
            onAnswer={setSelectedAnswer}
          />

          <TicketPurchase
            price={mockCompetition.pricePerTicket}
            onPurchase={handlePurchase}
          />
        </section>

        {/* RIGHT COLUMN */}
        <aside className="space-y-6">
          <SpinToWin chance={spinChance} onSpin={handleSpin} />
          <InstantWinWinners winners={winners} />
        </aside>
      </main>
    </div>
  );
}