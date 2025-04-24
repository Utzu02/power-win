import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

interface Props {
  title: string;
  alternativeCash?: number;
  endsAt: string;           // ISO string
  totalTickets: number;
  soldTickets: number;
}

export const CompetitionInfo: FC<Props> = ({
  title,
  alternativeCash,
  endsAt,
  totalTickets,
  soldTickets,
}) => {
  const [left, setLeft] = useState(getLeft());

  function getLeft() {
    const diff = dayjs(endsAt).diff(dayjs());
    const d = dayjs.duration(diff);
    return {
      days: d.days(),
      hours: d.hours(),
      minutes: d.minutes(),
      seconds: d.seconds(),
    };
  }

  // tick once / sec.
  useEffect(() => {
    const id = setInterval(() => setLeft(getLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const percent = (soldTickets / totalTickets) * 100;

  return (
    <section className="space-y-6">
      {/* title & badge */}
      <div className="flex items-start gap-4">
        <h1 className="text-4xl font-bold underline decoration-accent/70">{title}</h1>
        <span className="px-4 py-1 rounded-full text-sm bg-green-600/80">
          🟢 În desfășurare
        </span>
      </div>

      {alternativeCash && (
        <p className="text-primary-dim">
          Alternativă&nbsp;Cash - ${alternativeCash.toLocaleString()}
        </p>
      )}

      {/* countdown */}
      <div>
        <p className="mb-1">Competiţia se termină în:</p>
        <div className="flex gap-4 text-3xl font-medium">
          <TimeBox value={left.days} label="Zile" />
          <TimeBox value={left.hours} label="Oră" />
          <TimeBox value={left.minutes} label="Minute" />
          <TimeBox value={left.seconds} label="Secunde" />
        </div>
      </div>

      {/* bullet-uri info */}
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <span>🎥</span>
          <span>
            Extragera va fi ținută în direct pe{' '}
            <a href="#" className="underline">Facebook</a> și{' '}
            <a href="#" className="underline">YouTube</a>
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span>🏆</span>
          <span>Această competiție are 1 câștigător</span>
        </li>
        <li className="flex items-center gap-2">
          <span>🎫</span>
          <span>{totalTickets.toLocaleString()} bilete</span>
        </li>
      </ul>

      {/* progress bar section */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            Reguli Giveaway
          </div>
          <div className="text-xl font-bold">
            {percent.toFixed(2).replace('.', ',')}%
          </div>
        </div>

        {/* thicker progress bar with gray start */}
        <div className="relative w-full h-4 border border-white/30 rounded-full bg-white/5 overflow-hidden">
          {/* tick marks */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, transparent, transparent 4px, rgba(255,255,255,0.2) 4px, rgba(255,255,255,0.2) 5px)',
            }}
          />
          {/* filled gradient - from gray to accent to red */}
          <div
            style={{ width: `${percent}%` }}
            className="h-full bg-gradient-to-r from-gray-400 via-accent to-red-500 transition-all duration-500"
          />
          
          {/* pin marker */}
          <div
            className="absolute inset-1 -top-1.5 left-0 w-0 h-0 
                      border-l-4 border-r-4 border-b-8
                      border-l-transparent border-r-transparent border-b-red-500"
            style={{ left: `calc(${Math.floor(percent)}% - 4px)` }}
          />
        </div>

        {/* ticket count below */}
        <div className="flex justify-between text-sm">
          <span>0</span>
          <span>{soldTickets.toLocaleString()}/{totalTickets.toLocaleString()}</span>
          <span>{totalTickets.toLocaleString()}</span>
        </div>
      </div>
    </section>
  );
};

const TimeBox: FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <div className="leading-none">{value.toString().padStart(2, '0')}</div>
    <div className="text-xs uppercase tracking-wide">{label}</div>
  </div>
);