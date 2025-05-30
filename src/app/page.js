import Image from "next/image";
import Hero from '../components/Hero.js'
import HowItWorks from '../components/HowItWorks.js';
import Testimonial from "@/components/Testimonial.jsx";

export default function Home() {
  return (
    <>
   <Hero />
   <HowItWorks />
   <Testimonial />
   </>
  );
}
