import { Metadata } from "next";
import PrinciplesClient from "./page.client";

export const metadata: Metadata = {
  title: "Principles",
  description: "Marcello Silvestri's ten principles he follows to achieve optimal balance between private and work life.",
  alternates: {
    canonical: process.env.SITE_URL + "/principles",
  },
};

export default function Principles() {
  return <PrinciplesClient />;
}
