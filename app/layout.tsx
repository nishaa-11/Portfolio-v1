import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Nisha - Software Engineer & Artist",
  description:
    "Software engineer and artist based in Toronto. Passionate about AI, AR/VR, full-stack development, and building products that blend creativity with technology.",
  keywords: ["portfolio", "software engineer", "artist", "toronto", "ai", "web development"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}`}
      >
        {children}
      </body>
    </html>
  );
}