import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Spenta Engineers | Precision Drilling Tools Manufacturer",
    template: "%s | Spenta Engineers",
  },
  description:
    "Spenta Engineers is a manufacturer of precision drilling tools including drill rods, core barrels, diamond tools, and accessories for mining, exploration, and geotechnical applications.",
  keywords: [
    "drilling tools manufacturer",
    "drill rods",
    "core barrels",
    "diamond drilling tools",
    "mining drilling equipment",
    "geotechnical drilling tools",
  ],
  metadataBase: new URL("https://www.spentaengineers.com"), // update domain later
  openGraph: {
    title: "Spenta Engineers",
    description:
      "Precision-engineered drilling tools designed for demanding mining and exploration applications.",
    url: "https://www.spentaengineers.com",
    siteName: "Spenta Engineers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spenta Engineers – Drilling Tools Manufacturer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.variable}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
