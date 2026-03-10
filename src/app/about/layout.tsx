import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Venus Crop Science, our mission, vision, and the team dedicated to empowering farmers with superior seeds.",
  keywords: ["about venus crop science", "agricultural seed company", "Praneeth Lakkaram", "seed innovation", "farming mission"],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
