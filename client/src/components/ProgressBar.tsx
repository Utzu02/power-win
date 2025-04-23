import { FC } from "react";
interface Props {
  percentage: number; // 0 – 100
}
export const ProgressBar: FC<Props> = ({ percentage }) => (
  <div className="w-full h-2 bg-card rounded-full overflow-hidden">
    <div
      style={{ width: `${percentage}%` }}
      className="h-full bg-accent transition-all duration-500"
    />
  </div>
);