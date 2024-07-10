"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSectionAbout() {
  const [gens, setGens] = useState([
    { id: 0, name: "Gen 0", pict: "" },
    { id: 1, name: "Gen I", pict: "" },
    { id: 2, name: "Gen II", pict: "" },
    { id: 3, name: "Gen III", pict: "" },
    { id: 4, name: "Gen IV", pict: "/img/gen4.jpg" },
    { id: 5, name: "Gen V", pict: "" },
    { id: 6, name: "Gen VI", pict: "/img/gen6.jpg" },
    { id: 7, name: "Gen VII", pict: "/img/gen7.jpg" },
    { id: 8, name: "Gen VIII", pict: "/img/gen8.jpg" },
    { id: 9, name: "Gen IX", pict: "/img/gen9.jpg" },
    { id: 10, name: "Gen X", pict: "/img/gen10.jpg" },
    { id: 11, name: "Gen XI", pict: "/img/gen11.jpg" },
    { id: 12, name: "Gen XII", pict: "/img/gen12.jpg" },
    { id: 13, name: "Gen XIII", pict: "/img/gen13.webp" },
    { id: 14, name: "Gen XIV", pict: "/img/gen14.webp" },
  ]);

  const filteredGens = gens.filter((gen) => gen.pict !== "");
  const genLength = filteredGens.length - 1;
  const [carouselIndex, setCarouselIndex] = useState(genLength);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) =>
        prevIndex === 0 ? genLength : prevIndex - 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [genLength]);

  return (
    <>
      <section className="heroAbout">
        {filteredGens.map((gen, index) => (
          <Image
            key={gen.id}
            alt={gen.name}
            src={gen.pict}
            width={1980}
            height={1980}
            className={` ${
              index === carouselIndex
                ? "active"
                : index ===
                  (carouselIndex === 0 ? genLength : carouselIndex - 1)
                ? "next"
                : ""
            }`}
          />
        ))}
        <h1>
          EVERY FAMILY HAS A STORY <br />
          WELCOME TO OURS!
        </h1>
      </section>
    </>
  );
}
