import GenreEvolution from "../components/anylysisComponents/GenreEvolution";
import GrowthIndicators from "../components/anylysisComponents/GrowthIndicators";
import MarketPosition from "../components/anylysisComponents/MarketPosition";

export default function Analysis({data}) {
  
  const genreEvolution = data.data.analysis.genre_evolution;
  const growthIndicators = data.data.analysis.growth_indicators;
  const marketPosition = data.data.analysis.market_position;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-lg w-full max-w-4xl mx-auto">
      <GenreEvolution genreEvolution={genreEvolution}/>
      <GrowthIndicators growthIndicators={growthIndicators}/>
      <MarketPosition marketPosition={marketPosition}/>
    </section>
  );
}
