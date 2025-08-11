import Contactus from "@/components/contactus/contacus";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Contact Us",
  description: "Contact Us for Marahel Ai",
  robots: {
    index: false,
    nocache: true,
  },
  alternates:{
    canonical: `/contact_us`,
    languages: {
      "en": `en/contact_us`,
      "ar": `ar/contact_us`
    }
  }
}
export default function ContactUs() {
  return (
    <section>
      <Contactus />
    </section>
  );
}
