import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Consulting } from "@/components/sections/Consulting";
import { Audience } from "@/components/sections/Audience";
import { Differentials } from "@/components/sections/Differentials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <About />
      <Services />
      <Consulting />
      <Audience />
      <Differentials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
