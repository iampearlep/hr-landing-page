import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <About />
    </main>
  );
}