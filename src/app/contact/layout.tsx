import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Venus Crop Science experts. Reach out for seed inquiries, dealership opportunities, or agricultural support.",
  keywords: ["contact venus crop science", "seed inquiries", "dealership", "agricultural support", "address", "phone number"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
