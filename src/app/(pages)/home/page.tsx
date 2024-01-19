import HimfactSection from "@/components/(pages)/home/himfact-section";
import AboutSection from "../../../components/(pages)/home/about-section";
import AspirationSection from "@/components/(pages)/home/aspiration-section";
import dynamic from "next/dynamic";
import Hero from "@/components/(pages)/home/hero-section";
// const Hero = dynamic(() => import("@/components/(pages)/home/hero-section"), {
//   loading: () => <p style={{ fontSize: "100px" }}>Loading...</p>,
// });
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
