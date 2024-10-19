import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <About />
      <Services />
    </main>
  );
}