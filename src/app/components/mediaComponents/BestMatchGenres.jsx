import { genres, sceneTypes } from "../../sampleData.js";
export default function BestMatchGenres({bestMatchGenres, sceneTypes}) {

  return (
    <section className="bg-gray-50 p-5 rounded-lg shadow-md border">
      <h2 className="text-lg font-semibold mb-3 text-gray-900">Best Match Genres</h2>

      {/* Genre Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {bestMatchGenres.map((genre, index) => (
          <span key={index} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm whitespace-nowrap">
            {genre}
          </span>
        ))}
      </div>

      {/* Scene Types */}
      <h3 className="text-md font-medium mb-2 text-gray-800">Scene Types</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {sceneTypes.map((scene, index) => (
          <li key={index}>{scene}</li>
        ))}
      </ul>
    </section>
  );
}
