import { impacts } from "../../sampleData.js";

export default function EmotionalImpact({emotionalImpact}) {
  
    return (
      <section className="bg-gray-50 p-5 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Emotional Impact</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {emotionalImpact.map((impact, index) => (
            <li key={index}>{impact}</li>
          ))}
        </ul>
      </section>
    );
  }
  