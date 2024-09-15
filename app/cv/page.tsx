import { Metadata } from "next";
import CVClient from "./page.client";

export const metadata: Metadata = {
  title: "CV",
};

export default function CV() {
  return <CVClient />;
}
