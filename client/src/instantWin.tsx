import React from 'react';
export default function InstantWin() {
  return (
    <div className="border border-gray-700 p-4 rounded space-y-2">
      <h3 className="text-xl font-semibold">Instant Win</h3>
      <p className="text-sm">At PowerWin, you don’t have to wait for the final draw to win!</p>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>Choose one of the 4 available prizes:</li>
        <ul className="list-inside list-circle ml-4">
          <li>iPhone 16</li>
          <li>Samsung Galaxy S24</li>
          <li>Apple Laptop</li>
          <li>Samsung Smart TV</li>
        </ul>
        <li>Select the number of tickets (max 500)</li>
        <li>Pay for your tickets and return to this page</li>
        <li>If luck is on your side, you win it instantly!</li>
      </ul>
      <p className="text-xs text-gray-400">Total prizes available this round: £10,000</p>
    </div>
  );
}