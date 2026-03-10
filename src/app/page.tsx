import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Superior Seeds for Better Yield | Venus Crop Science",
  description: "Venus Crop Science provides high-quality agricultural seeds including paddy, maize, fodder, and vegetables. Empowing farmers with innovation and quality.",
};

export default function Home() {
  return <HomeClient />;
}
