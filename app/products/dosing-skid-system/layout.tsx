import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dosing Skid System",
  description:
    "Pre-assembled chemical dosing skid systems with duty/standby pump configuration, PE/FRP storage tanks, and complete instrumentation for water treatment, oil & gas, and chemical industries.",
  alternates: {
    canonical: "/products/dosing-skid-system",
  },
  openGraph: {
    title: "Dosing Skid System | Spenta Engineers",
    description:
      "Turnkey chemical injection skids engineered for precise, safe, and continuous dosing in demanding industrial applications.",
    url: "https://www.spentaengineers.com/products/dosing-skid-system",
  },
};

export default function DosingSkidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
