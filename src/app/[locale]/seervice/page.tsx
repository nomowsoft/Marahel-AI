"use client";
import Service1 from "@/components/service/service1";
import Service2 from "@/components/service/service2";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Service() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section>
      <Service1 />
      <Service2 />
    </section>
  );
}
