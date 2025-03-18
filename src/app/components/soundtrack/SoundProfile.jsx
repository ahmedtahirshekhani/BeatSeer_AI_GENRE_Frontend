import { soundElements } from "../../sampleData.js";

export default function SoundProfile({soundElements}) {
  
    return (
      <section className="bg-green-50 p-5 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibold mb-2 text-green-700">Sound Profile</h3>
        <ul className="list-disc pl-5 space-y-1 text-green-600">
          {soundElements.map((sound, index) => (
            <li key={index}>{sound}</li>
          ))}
        </ul>
      </section>
    );
  }
  