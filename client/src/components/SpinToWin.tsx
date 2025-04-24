import { FC } from "react";
import { Button } from "./Button";

interface Props {
  chance: number; // 0–100 percent
  onSpin: () => void;
}

export const SpinToWin: FC<Props> = ({ chance, onSpin }) => (
  <div className="space-y-4 bg-card p-6 rounded-2xl text-center">
    <div className="aspect-square w-40 mx-auto bg-background rounded-full border-4 border-accent flex items-center justify-center">
      <p className="text-2xl font-bold">{chance}%</p>
    </div>
    <Button onClick={onSpin} variant="primary" className="w-full">
      Spin to Win
    </Button>
  </div>
);
