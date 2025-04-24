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
const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
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
  totalTickets: getRandomNumber(50000,100000),
  soldTickets: getRandomNumber(10000,50000),
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

      <section className="">
          <RafflePage />
      </section>
      
      <div className="flex flex-wrap mb-[15vh]">
        <PowerWin />
        <SpinWinModal />
      </div>


      <Footer />
    </div>
  );
}
