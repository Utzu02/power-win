
export default function InstantWin() {
  return (
    <div className="h-full ml-4 w-full p-4 mt-4 rounded bg-gradient-to-b from-[#141414] to-[#1b1b1b] space-y-2">
      <h3 className="text-xl font-semibold">Instant Win</h3>
      <p className="text-sm">
        At PowerWin, you don’t have to wait for the final draw to win! With our Instant Win system, you have the chance to walk away RIGHT NOW with a top-tier prize.
      </p>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>Choose one of the 4 available prizes:</li>
        <ul className="list-inside list-circle ml-4">
          <li>iPhone 16</li>
          <li>Samsung Galaxy S24</li>
          <li>Apple Laptop</li>
          <li>Samsung Smart TV</li>
        </ul>
        <li>
          Select the number of tickets (maximum 500) – the more you buy, the higher your win chance (up to 80%).
        </li>
        <li>Pay for your tickets and return to this page.</li>
        <li>
          You’ll get one single Spin for the selected prize. If luck is on your side, you win it instantly!
        </li>
      </ul>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>You only get one Spin per purchase.</li>
        <li>You can select only one prize from the 4 for each attempt.</li>
        <li>Your win chance is clearly displayed before payment.</li>
      </ul>
      <p className="text-xs text-gray-400">
        Total prizes available in this round: £10,000<br />
        (2x iPhone 16, 2x Samsung S24, 1x Apple Laptop, 2x Samsung Smart TV)
      </p>
    </div>
  );
}
