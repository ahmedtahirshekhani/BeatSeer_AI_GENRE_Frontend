import { FaBullseye } from "react-icons/fa";
// import { genre } from "../sampleData.js";

export default function Header({ genreInfo, artistName }) {
  // console.log("Header Genre Info:", genreInfo);
  // console.log("Artist Name: ", artistName);
  
  return (
    <header className="bg-orange-50 shadow-md rounded-xl p-4 w-full max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
      {/* Left Section */}
      <div className="flex flex-col space-y-2 sm:space-y-1">
        {/* Title with Icon */}
        <div className="flex items-center space-x-2">
          <FaBullseye className="text-red-500 text-xl" aria-hidden="true" />
          <h1 className="text-lg font-bold text-gray-900">What BeatseerAI Is Watching</h1>
        </div>

        {/* Artist Name */}
        <p className="text-sm text-gray-700 font-semibold">
          Artist Name: {artistName}
        </p>

        {/* Genre & Compatibility */}
        <p className="text-sm text-gray-700 font-semibold">
        {(genreInfo?.genre || "General")}{" "}
<span className="text-purple-600">
  Genre Compatibility: {genreInfo?.compatibility || "Unknown"}
</span>
        </p>
      </div>

      {/* Right Section - Score */}
      <div className="flex items-center">
        <p className="text-xl font-bold text-purple-600">{genreInfo.score}/100</p>
      </div>
    </header>
  );
}
