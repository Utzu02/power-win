import { FC } from "react";
import Participant from "../types/participant";

interface Props {
  winners: Participant[];
}

export const InstantWinWinners: FC<Props> = ({ winners }) => (
  <div className="bg-card p-6 rounded-2xl">
    <h3 className="text-lg font-semibold mb-4">Câștigători Instant Spin Win</h3>
    <table className="table-auto w-full text-sm">
      <thead className="text-primary-dim text-left">
        <tr>
          <th>Participant</th>
          <th className="text-right">Nr. Bilet</th>
          <th className="text-right">Nr. Comandă</th>
        </tr>
      </thead>
      <tbody>
        {winners.map((w) => (
          <tr key={w.ticketNumber} className="border-t border-card/50">
            <td>{w.name}</td>
            <td className="text-right">{w.ticketNumber}</td>
            <td className="text-right">{w.orderNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
