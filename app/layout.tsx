import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import Script from "next/script";
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
    "core drilling system",
    "drilling accessories",
    "mining equipment India",
    "exploration drilling tools",
  ],
  authors: [{ name: "Spenta Engineers" }],
  creator: "Spenta Engineers",
  publisher: "Spenta Engineers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.spentaengineers.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Spenta Engineers | Precision Drilling Tools Manufacturer",
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
  twitter: {
    card: "summary_large_image",
    title: "Spenta Engineers | Precision Drilling Tools Manufacturer",
    description:
      "Precision-engineered drilling tools designed for demanding mining and exploration applications.",
    images: ["/og-image.jpg"],
    creator: "@spentaengineers",
  },
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
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spenta Engineers",
    url: "https://www.spentaengineers.com",
    logo: "https://www.spentaengineers.com/logo.png",
    description:
      "Manufacturer of precision drilling tools including drill rods, core barrels, diamond tools, and accessories for mining, exploration, and geotechnical applications.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vadodara-390024",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390024",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9426753291",
      contactType: "Customer Service",
      email: "spentaeng@gmail.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    sameAs: [
      // Add social media links when available
    ],
  };

  const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spenta Engineers",
  url: "https://www.spentaengineers.com",
  logo: "https://www.spentaengineers.com/logo.png",
  image: "https://www.spentaengineers.com/logo.png",
  description:
    "Manufacturer of precision drilling tools including drill rods, core barrels, diamond tools, and accessories for mining, exploration, and geotechnical applications.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vadodara-390024",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390024",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9426753291",
    contactType: "Customer Service",
    email: "spentaeng@gmail.com",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
};

  return (
    <html lang="en">
      <body className={roboto.variable}>

        <Script
  id="localbusiness-structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
