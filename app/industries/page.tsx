import type { Metadata } from "next";
import IndustriesContent from "./IndustriesContent";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Spenta Engineers serves multiple industries including mining, mineral exploration, geotechnical drilling, and infrastructure projects with precision drilling tools and equipment.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | Spenta Engineers",
    description:
      "Discover how Spenta Engineers supports mining, exploration, geotechnical, and infrastructure industries with reliable drilling solutions.",
    url: "https://www.spentaengineers.com/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}