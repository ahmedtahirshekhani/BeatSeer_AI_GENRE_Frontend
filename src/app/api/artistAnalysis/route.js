// import { connectToDatabase } from "../../utils/db";
import axios from "axios";

// This is the API route using App Router's 'route.js'
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const artist = searchParams.get('artist');

  if (!artist) {
    return new Response(JSON.stringify({ message: "Artist is required" }), {
      status: 400,
    });
  }

  console.log("Fetching analysis of artist:", artist, process.env.BACKEND);

  try {
    // const apiKey = await fetch('http://localhost:3000/admin/api/credentials');
    // const data = await apiKey.json();
    
    // console.log("Youtube API:", data?.YouTube?.YouTubeAPI);
    // console.log("spotify_CLIENT_ID:", data?.Spotify?.clientId);
    // console.log("spotify_CLIENT_SECRET:", data?.Spotify?.clientSecret);

    const apiRes = await axios.get(`${process.env.BACKEND}/artist-analysis`, {
      params: { 
        artist,
        // youTubeApiKey: data?.YouTube?.YouTubeAPI, // Replace with your actual API key
        spotify_CLIENT_ID: "6e7e4b94f2004db982218c63dd735a74", // Replace with your actual API key
        spotify_CLIENT_SECRET: "ed0ff44ae35e4f8ab1d8e8aa582dc983", // Replace with your actual API key
       },
    });
    // console.log("API RESONSE: ", apiRes.data);
    

    if (apiRes.data) {
      // If the API response is successful, connect to the database
      // const db = await connectToDatabase();
      // const collection = db.collection("genreAnalysis");

      // // Insert the fetched data into the database
      // await collection.insertOne({
      //   ...apiRes.data,
      //   createdAt: new Date(),
      // });

      // console.log("Data successfully inserted into the database.");

      // Return the processed data as JSON response
      return new Response(
        JSON.stringify({
          message: "Fetched data successfully",
          data: apiRes.data, // Include the API response in the returned data
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      console.error("Failed to fetch data or invalid response:", apiRes);
      return new Response(JSON.stringify({ message: "Failed to fetch data" }), {
        status: 500,
      });
    }
  } catch (apiError) {
    console.error("API Error:", apiError);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
