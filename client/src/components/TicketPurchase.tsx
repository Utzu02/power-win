import { FC, useState } from "react";
import { Button } from "./Button";

interface Props {
  price: number;
  onPurchase: (qty: number) => void;
}

export const TicketPurchase: FC<Props> = ({ price, onPurchase }) => {
  const [qty, setQty] = useState(1);
  return (
    <div className="space-y-4 bg-card p-6 rounded-2xl">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setQty(Math.max(1, qty - 1))}
          className="w-8 h-8 bg-card rounded-full border border-primary-dim flex items-center justify-center hover:bg-card/80"
        >
          –
        </button>
        <input
          type="number"
          value={qty}
          min={1}
          onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
          className="w-16 text-center bg-background border border-card rounded-md" />
        <button
          onClick={() => setQty(qty + 1)}
          className="w-8 h-8 bg-card rounded-full border border-primary-dim flex items-center justify-center hover:bg-card/80"
        >
          +
        </button>
      </div>
      <Button
        variant="accent"
        className="w-full"
        onClick={() => onPurchase(qty)}
      >
        Participă acum – £{(price * qty).toFixed(2)}
      </Button>
    </div>
  );
};