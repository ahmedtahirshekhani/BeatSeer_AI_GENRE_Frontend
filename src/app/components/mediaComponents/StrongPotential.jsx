import { potentialGenres,placementStrategies } from "../../sampleData.js";
export default function StrongPotential({potentialGenres, placementStrategies}) {

  return (
    <section className="bg-gray-50 p-5 rounded-lg shadow-md border">
      <h2 className="text-lg font-semibold mb-3 text-gray-900">Strong Potential</h2>

      {/* Genre Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {potentialGenres.map((genre, index) => (
          <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm whitespace-nowrap">
            {genre}
          </span>
        ))}
      </div>

      {/* Placement Strategy */}
      <h3 className="text-md font-medium mb-2 text-gray-800">Placement Strategy</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {placementStrategies.map((strategy, index) => (
          <li key={index}>{strategy}</li>
        ))}
      </ul>
    </section>
  );
}
