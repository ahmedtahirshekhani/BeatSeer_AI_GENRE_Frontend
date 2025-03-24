"use client";
import Header from "../components/Header";
import { Suspense } from "react";
import Analysis from "../components/analysis";
import FilmMediaCompatibility from "../components/FilmMediaCompatibility";
import SoundtrackConsiderations from "../components/SoundtrackConsiderations";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

function AnalysisContent() {
  const searchParams = useSearchParams();
  const artist = searchParams.get("artist");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (artist) {
      fetch(`/api/artistAnalysis?artist=${artist}`)
        .then((res) => res.json())
        .then((result) => {
          console.log("Result:", result);

          if (!result.data) {
            setAlertMessage("No data available for this artist. Please try another search.");
            setLoading(false);
            return;
          }

          const artistOrigin = result.data.analysis.artist_origin?.country;
          const restrictedMessage = result.data.analysis.artist_origin?.message;

          // Restrict results for certain countries
          if (artistOrigin === "RU" || artistOrigin === "CN") {
            setAlertMessage("We cannot provide analysis for artists from Russia and China due to data restrictions.");
            setLoading(false);
            return;
          }

          // Show restriction message if provided
          if (restrictedMessage) {
            setAlertMessage(restrictedMessage);
            setLoading(false);
            return;
          }

          setData(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setAlertMessage("An error occurred while fetching data. Please try again later.");
          setLoading(false);
        });
    }
  }, [artist]);

  if (loading) return <p>Loading analysis for {artist}...</p>;

  if (alertMessage) {
    return (
      <Modal
        message={alertMessage}
        onClose={() => window.history.back()}
      />
    );
  } else {
    const genreInfo = data.data.analysis.genre_info;
    const artist_name = data.data.artist_name;

    return (
      <main className="container mx-auto max-w-4xl p-4 space-y-4">

        <Header genreInfo={genreInfo} artistName={artist_name} />

        <Analysis data={data} />

        <section className="space-y-6">
          <FilmMediaCompatibility data={data} />
          <SoundtrackConsiderations data={data} />
        </section>
        <div>
        <a
          href="/"
          className="bg-gray-200 rounded-lg shadow hover:bg-gray-300 transition p-2 w-xs max-w-xs mx-auto sm:items-center"
        >
          ← Back
        </a>
        </div>
      </main>
    );
  }
}

export default function AnalysisPage() {
  return (
    <Suspense fallback={<div>Loading search params...</div>}>
      <AnalysisContent />
    </Suspense>
  );
}
