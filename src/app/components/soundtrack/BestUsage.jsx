import { bestUsages } from "../../sampleData.js";
export default function BestUsage({bestUsage}) {

    return (
      <section className="bg-blue-50 p-5 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibold mb-2 text-blue-700">Best Usage</h3>
        <ul className="list-disc pl-5 space-y-1 text-blue-600">
          {bestUsage.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }
  