import { Music2 } from "lucide-react";
import { growthIndicatorsData } from "../../sampleData.js";

export default function GrowthIndicators({growthIndicators}) {
  return (
    <section className="bg-white shadow-md p-6 rounded-lg border flex flex-col">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
        <Music2 className="text-purple-600" />
        Growth Indicators
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {growthIndicators.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
