import HomePage from "@/components/home/home";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Marahel Ai",
  description: "Marahel Ai",
  alternates:{
    canonical: `https://marahel.ai`
  }
}

export default function Home() {
  return (
    <section className="">
      <HomePage />
    </section>
  );
}
