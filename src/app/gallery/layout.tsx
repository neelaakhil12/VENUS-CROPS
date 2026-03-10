import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Gallery",
  description: "Explore the visual world of Venus Crop Science. See images and videos of our high-quality paddy, maize, and fodder seed varieties in the field.",
  keywords: ["venus crop science gallery", "field research photos", "seed quality visual", "farming videos", "agricultural gallery"],
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
