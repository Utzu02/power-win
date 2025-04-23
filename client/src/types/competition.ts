export default interface Competition {
    id: string;
    title: string;
    pricePerTicket: number; // in £/$
    alternativeCash?: number; // e.g. 80_000 -> £80,000 cash alternative
    brandQuestion: {
      question: string;
      answers: string[];
      correctIndex: number;
    };
    totalTickets: number;
    soldTickets: number;
    endsAt: string; // ISO date string
    images: string[]; // array of image URLs
    description: string[]; // bullet‑points
}