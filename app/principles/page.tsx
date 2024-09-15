import { Metadata } from "next";
import PrinciplesClient from "./page.client";

export const metadata: Metadata = {
  title: "Principles",
};

export default function Principles() {
  return <PrinciplesClient />;
}
