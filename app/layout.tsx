import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import GaretBook from "next/font/local";
import GaretHeavy from "next/font/local";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasneue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const garetbook = GaretBook({
  src: "../public/fonts/Garet-Book.otf",
  variable: "--font-garetbook",
});

const garetheavy = GaretHeavy({
  src: "../public/fonts/Garet-Heavy.otf",
  variable: "--font-garetheavy",
});

export const metadata: Metadata = {
  title: "TravlAbhi - Travel More with TravlAbhi",
  description:
    "Discover amazing travel destinations and book your next adventure with TravlAbhi. Explore the world with confidence and create unforgettable memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${bebasneue.variable} ${garetbook.variable} ${garetheavy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
