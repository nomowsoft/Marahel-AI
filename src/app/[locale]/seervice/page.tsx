"use client";
import Service1 from "@/components/service/service1";
import Service2 from "@/components/service/service2";
import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Service() {
  const [section1Completed, setSection1Completed] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section>
      <Service1 onComplete={() => setSection1Completed(true)} />
      <Service2 enabled={section1Completed} />
    </section>
  );
}
