import { TrendingUp } from "lucide-react";
import { genreEvolutionData } from "../../sampleData.js";

export default function GenreEvolution({genreEvolution}) {
  return (
    <section className="bg-white shadow-md p-6 rounded-lg border flex flex-col">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
        <TrendingUp className="text-purple-600" />
        Genre Evolution
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {genreEvolution.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
