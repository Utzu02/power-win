import { FC } from "react";
interface Props {
  percentage: number; // 0 – 100
}
export const ProgressBar: FC<Props> = ({ percentage }) => (
  <div className="w-full h-3 border border-white/50 rounded-full bg-white/10 overflow-hidden">
    <div
      style={{ width: `${percentage}%` }}
      className="h-full bg-gradient-to-r from-accent to-accent-light transition-all duration-500"
    />
  </div>
);
