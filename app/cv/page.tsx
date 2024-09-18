import { Metadata } from "next";
import CVClient from "./page.client";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Marcello Silvestri's online CV. Marcello is a T-shaped developer who has worked with several international organisations in Europe, US and Asia.",
  alternates: {
    canonical: process.env.SITE_URL + "/cv",
  },
};

export default function CV() {
  return <CVClient />;
}
