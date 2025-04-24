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
import Footer from "../components/footer";
import PowerWin from "../components/PowerWin";
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

  // 🔽 PATHURI RELATIVE către public/assets/images
  images: [
    "/assets/images/side.png",
    "/assets/images/preview1.png",
    "/assets/images/preview2.png",
    "/assets/images/preview3.png",
    "/assets/images/preview4.png",
  ],

  description: [/* ... */],
};


export default function LandingPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number>();
  const [spinChance, setSpinChance] = useState(70);

  const handlePurchase = (qty: number) =>
    alert(`Ai cumpărat ${qty} bilete! Succes!`);

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] text-white">
      <Header />

      <main className="flex max-w-[100vw]">
        <section className="space-y-8 w-full px-12">
          <div className="flex flex-col md:flex-row items-start">
            {/* Text + padding */}
            <div className="flex-1 w-[45vw]">
              <CompetitionInfo
                title={mockCompetition.title}
                alternativeCash={mockCompetition.alternativeCash}
                endsAt={mockCompetition.endsAt}
                totalTickets={mockCompetition.totalTickets}
                soldTickets={mockCompetition.soldTickets}
              />
            </div>

            {/* Carousel larger */}
            <div className="w-[45vw]">
              <ImageCarousel images={mockCompetition.images} />
            </div>
          </div>

          
        </section>
      </main>
      <div className="flex flex-wrap">
        <SpinWinModal />
        <PowerWin />
      </div>
      <Footer />
    </div>
  );
}
