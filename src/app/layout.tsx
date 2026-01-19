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
  creator: "Kevin Kipkorir",
  metadataBase: new URL("https://kevinkipkorir.dev"), // Update with your actual domain
  openGraph: {
    title: "Kevin Kipkorir | Telecommunications & AI Engineer",
    description:
      "Building intelligent systems at the intersection of 5G networks and AI",
    type: "website",
    locale: "en_AU",
    siteName: "Kevin Kipkorir Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kevin Kipkorir - Telecommunications & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Kipkorir | Telecommunications & AI Engineer",
    description:
      "Building intelligent systems at the intersection of 5G networks and AI",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
