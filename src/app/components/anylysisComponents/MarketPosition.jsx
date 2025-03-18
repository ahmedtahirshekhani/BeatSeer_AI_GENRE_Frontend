import { BadgeDollarSign } from "lucide-react";
import { marketPositionData } from "../../sampleData.js";

export default function MarketPosition({marketPosition}) {
  return (
    <section className="bg-white shadow-md p-6 rounded-lg border flex flex-col">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
        <BadgeDollarSign className="text-green-600" />
        Market Position
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {marketPosition.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
