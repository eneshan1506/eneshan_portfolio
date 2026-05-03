import { Hero } from "@/app/components/Hero";
import { Skills } from "@/app/components/Skills";
import { Encryption } from "@/app/components/Encryption";
import { Projects } from "@/app/components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
