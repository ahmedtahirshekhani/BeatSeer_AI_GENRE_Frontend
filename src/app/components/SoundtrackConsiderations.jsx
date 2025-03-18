// components/SoundtrackConsiderations.tsx
import EmotionalImpact from "./soundtrack/EmotionalImpact";
import BestUsage from "./soundtrack/BestUsage";
import SoundProfile from "./soundtrack/SoundProfile";
import TechnicalNotes from "./soundtrack/TechnicalNotes";

export default function SoundtrackConsiderations({data}) {

  const emotionalImpact = data.data.analysis.impact;
  const bestUsage = data.data.analysis.best_uses;
  const soundElements = data.data.analysis.sound_elements;
  const technicalDetails = data.data.analysis.technical_details;
  // console.log("EmotionalImpact ", emotionalImpact);
  // console.log("BestUsage ", bestUsage);
  // console.log("SoundProfile ", soundElements);
  // console.log("TechnicalNotes ", technicalDetails);

  return (
    <section className="bg-white shadow-md p-6 rounded-lg border w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-900 text-center md:text-left">
        Soundtrack Considerations
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        <EmotionalImpact emotionalImpact={emotionalImpact}/>
        <BestUsage bestUsage={bestUsage}/>
        <SoundProfile soundElements={soundElements}/>
        <TechnicalNotes technicalDetails={technicalDetails}/>
      </div>
    </section>
  );
}
