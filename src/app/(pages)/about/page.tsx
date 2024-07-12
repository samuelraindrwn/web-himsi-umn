import HeroSectionAbout from "@/components/(pages)/about/hero-section";
import WhoAreWe from "@/components/(pages)/about/who-are-we";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};
export default function About() {
  return (
    <>
      <HeroSectionAbout />
      <WhoAreWe />
    </>
  );
}
