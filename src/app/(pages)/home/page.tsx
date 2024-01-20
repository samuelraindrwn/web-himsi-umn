"use client";

import HimfactSection from "@/components/(pages)/home/himfact-section";
import AboutSection from "../../../components/(pages)/home/about-section/container";
import AspirationSection from "@/components/(pages)/home/aspiration-section";
import Hero from "@/components/(pages)/home/hero-section";
import Animate from "../../_lib/animate";

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
