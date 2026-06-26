import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Spenta Engineers, a manufacturer focused on precision engineering, quality-controlled manufacturing, and reliable drilling solutions.",
};

export default function AboutPage() {
    return <AboutContent />;
}