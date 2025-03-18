import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Beat Seer",
  description: "Music's AI Intelligence: Artist Trends & Long-Range Media Placement Recommendations",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
