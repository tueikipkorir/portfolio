import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Kevin Kipkorir | Telecommunications & AI Engineer",
  description:
    "Master of Professional Engineering candidate at UTS specializing in 5G networks, AI/ML, and computer vision. Building intelligent systems at the intersection of telecommunications and artificial intelligence.",
  keywords: [
    "Kevin Kipkorir",
    "Telecommunications Engineer",
    "5G",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "UTS",
    "Nokia",
    "YOLO",
    "RF Engineering",
  ],
  authors: [{ name: "Kevin Kipkorir" }],
  openGraph: {
    title: "Kevin Kipkorir | Telecommunications & AI Engineer",
    description:
      "Building intelligent systems at the intersection of 5G networks and AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
