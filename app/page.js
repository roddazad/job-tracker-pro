import Image from "next/image";
import Hero from '../src/components/Hero.js'
import HowItWorks from '../src/components/HowItWorks.js';
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
