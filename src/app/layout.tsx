import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venuscropscience.in"),
  title: {
    default: "Venus Crop Science | Superior Seeds for Better Yield",
    template: "%s | Venus Crop Science"
  },
  description: "Venus Crop Science is a leading agricultural seeds company in India, providing high-quality paddy, maize, fodder, and vegetable seeds for superior yields.",
  keywords: ["agricultural seeds", "paddy seeds India", "maize seeds", "fodder seeds", "vegetable seeds", "Venus Crop Science", "Telangana agriculture", "high yield seeds"],
  authors: [{ name: "Venus Crop Science" }],
  creator: "Venus Crop Science",
  publisher: "Venus Crop Science",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Venus Crop Science | Superior Seeds for Better Yield",
    description: "Dedicated agricultural seeds company providing high-quality paddy, fodder, maize, and vegetable seeds to farmers.",
    url: "https://venuscropscience.com",
    siteName: "Venus Crop Science",
    images: [
      {
        url: "/img/paddy-field.png",
        width: 1200,
        height: 630,
        alt: "Venus Crop Science Seeds",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus Crop Science | Superior Seeds for Better Yield",
    description: "Providing high-quality seeds to farmers for better productivity and higher yield.",
    images: ["/img/paddy-field.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
