import { HeroContent } from "@/app/components/HeroContent";

export function Hero() {
  return (
    <section className="relative flex flex-col h-full w-full scroll-mt-24" id="about-me">
      <div className="hero-glow absolute top-[-340px] left-0 w-full h-full -z-20" />

      <HeroContent />
    </section>
  );
}
