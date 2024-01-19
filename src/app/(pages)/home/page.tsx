import HimfactSection from "@/components/(pages)/home/himfact-section";
import AboutSection from "../../../components/(pages)/home/about-section";
import Hero from "@/components/(pages)/home/hero-section";
import AspirationSection from "@/components/(pages)/home/aspiration-section";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <AboutSection />
        <HimfactSection />
        <AspirationSection />
      </main>
    </>
  );
}
