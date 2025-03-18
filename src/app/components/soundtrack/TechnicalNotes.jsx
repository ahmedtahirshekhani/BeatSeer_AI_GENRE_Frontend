import { techDetails } from "../../sampleData.js";

export default function TechnicalNotes({technicalDetails}) {
  
    return (
      <section className="bg-orange-50 p-5 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibold mb-2 text-orange-700">Technical Notes</h3>
        <ul className="list-disc pl-5 space-y-1 text-orange-600">
          {technicalDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </section>
    );
  }  