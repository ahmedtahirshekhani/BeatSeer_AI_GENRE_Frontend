import BestMatchGenres from "./mediaComponents/BestMatchGenres";
import StrongPotential from "./mediaComponents/StrongPotential";

export default function FilmMediaCompatibility({data}) {

  const bestMatchGenres = data.data.analysis.genres;
  const sceneTypes = data.data.analysis.sceneTypes;
  const potentialGenres = data.data.analysis.potentialGenres;
  const placementStrategies = data.data.analysis.placementStrategies;
  // console.log("bestMatchGenres ", bestMatchGenres);
  // console.log("potentialGenres ", potentialGenres);
  return (
    <section className="bg-white shadow-md p-6 rounded-lg border w-full max-w-4xl mx-auto">
      <h1 className="text-xl font-semibold mb-4 text-gray-900 text-center md:text-left">
        Film & Media Compatibility
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        <BestMatchGenres bestMatchGenres={bestMatchGenres} sceneTypes={sceneTypes}/>
        <StrongPotential potentialGenres={potentialGenres} placementStrategies={placementStrategies}/>
      </div>
    </section>
  );
}
