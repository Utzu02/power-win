import { useState } from "react";
import Competition from "../types/competition";
import Participant from "../types/participant";
import { Header } from "../components/Header";
import { ImageCarousel } from "../components/ImageCarousel";
import { ProgressBar } from "../components/ProgressBar";
import { BrandQuestion } from "../components/BrandQuestion";
import { TicketPurchase } from "../components/TicketPurchase";
import { Button } from "../components/Button";
import { CompetitionInfo } from "../components/CompetitionInfo";
import RafflePage from "../components/rafflePage";
import Footer from "../components/footer";
import PowerWin from "../components/PowerWin";
import { InstantWinWinners } from "../components/InstantWinWinners";
import SpinWinModal from "../components/SpinWinModal";

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
  endsAt: new Date(Date.now() + 19 * 24 * 60 * 60 * 1000).toISOString(),
  images: [
    "https://images.pexels.com/photos/11546171/pexels-photo-11546171.jpeg?auto=compress",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress",
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress",
  ],
  description: [/* ... */],
};

export default function LandingPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number>();
  const [spinChance, setSpinChance] = useState(70);

  const handlePurchase = (qty: number) =>
    alert(`Ai cumpărat ${qty} bilete! Succes!`);

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] gap-8 text-white">
      <Header />

      <main className="flex">
        <section className="space-y-8 w-full">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Text + padding */}
            <div className="flex-1 px-6">
              <CompetitionInfo
                title={mockCompetition.title}
                alternativeCash={mockCompetition.alternativeCash}
                endsAt={mockCompetition.endsAt}
                totalTickets={mockCompetition.totalTickets}
                soldTickets={mockCompetition.soldTickets}
              />
            </div>

            {/* Carousel larger */}
            <div className="w-full md:w-3/5 lg:w-2/5">
              <ImageCarousel images={mockCompetition.images} />
            </div>
          </div>

          {/* Action Buttons - styled and spaced */}
          <div className="flex justify-between px-6">
            <Button
              variant="secondary"
              className="border border-white/50 bg-transparent text-white px-4 py-2 rounded-lg"
            >
              Intrare Poștală Gratis →
            </Button>
            <Button
              variant="secondary"
              className="border border-white/50 bg-transparent text-white px-4 py-2 rounded-lg"
            >
              Reguli Giveaway →
            </Button>
          </div>

          {/* Progress Bar with count below */}
          <div className="space-y-2 px-6">
            <ProgressBar
              percentage={(mockCompetition.soldTickets / mockCompetition.totalTickets) * 100}
            />
            <p className="text-center text-sm">{
              `${mockCompetition.soldTickets.toLocaleString()} / ${
                mockCompetition.totalTickets.toLocaleString()
              }`
            }</p>
          </div>

        </section>

       
      </main>

      <section className="mb-10">
          <RafflePage />
      </section>
      
      <div className="flex flex-wrap">
        <PowerWin />
        <SpinWinModal />
      </div>


      <Footer />
    </div>
  );
}
