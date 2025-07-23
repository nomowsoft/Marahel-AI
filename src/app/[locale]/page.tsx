"use client";
import { useEffect } from "react";
import Hero from "@/components/home/hero";
import AddValue from "@/components/home/add_value";
import Experience from "@/components/home/experience";
import Features from "@/components/home/features";
import Solutions from "@/components/home/solutions";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Products from "@/components/home/products";
import Difference from "@/components/home/difference";
import Policy from "@/components/home/policy";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="">
      <Hero />
      <AddValue />
      <Experience />
      <Features />
      <Solutions />
      <Products />
      <Difference />
      <Policy />
    </section>
  );
}
