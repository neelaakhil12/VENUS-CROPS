import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Premium Seeds",
  description: "Discover our high-quality paddy, maize, fodder, and vegetable seed varieties. Engineered for superior yield and resistance.",
  keywords: ["buy seeds India", "paddy seed varieties", "maize seeds", "fodder seeds", "vegetable seeds", "agricultural solutions"],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
