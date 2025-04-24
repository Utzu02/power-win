import { FC } from "react";
import { Button } from "./Button";

interface Props {
  question: string;
  answers: string[];
  onAnswer: (idx: number) => void;
  selected?: number;
}

export const BrandQuestion: FC<Props> = ({ question, answers, onAnswer, selected }) => (
  <div className="space-y-4 bg-card p-6 rounded-2xl">
    <p className="text-sm uppercase tracking-wide text-primary-dim">{question}</p>
    <div className="grid grid-cols-3 gap-4">
      {answers.map((ans, idx) => (
        <Button
          key={ans}
          variant={selected === idx ? "accent" : "secondary"}
          onClick={() => onAnswer(idx)}
        >
          {ans}
        </Button>
      ))}
    </div>
  </div>
);