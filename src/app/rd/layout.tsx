import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Development",
  description: "Learn about our commitment to agricultural innovation through scientific excellence, genomic selection, and climate resilience testing.",
  keywords: ["agriculture R&D", "seed research", "genomic selection", "climate resilience", "seed laboratory"],
};

export default function RDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
