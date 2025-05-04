"use client";

import { useState } from "react";
import AnalysisPage from "../analysis/page";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

function Button({ onClick, children, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-md ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
      }`}
    >
      {children}
    </button>
  );
}

function Input({ type, placeholder, value, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`flex-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}

export default function HomePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [artist, setArtist] = useState("");
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [data, setData] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async () => {
        router.push(`/analysis?artist=${artist}`);
  };

  
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 bg-gradient-to-br from-blue-50 to-gray-100 pt-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-gray-800 mb-6 text-center"
      >
        SoundMatch Profiler
      </motion.h1>
  
      {/* Adjust the paragraph text position here */}
      <p className="text-lg text-gray-700 mb-4 text-center max-w-3xl">
        Unveil an artist's musical identity, market positioning, media placement compatibility, and soundtrack consideration. 
        SoundMatch is a proprietary AI solution for music supervisors, music producers, labels, artists, and fans alike.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-lg"
      >
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3">
          <Input
            type="text"
            placeholder="Enter artist name..."
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSubmit} disabled={!artist.trim()}>
            Search
          </Button>
        </div>
      </motion.div>

      {alertMessage && (
        <Modal
          message={alertMessage}
          onClose={() => setAlertMessage("")}
        />
      )}
    </div>
  );
}