"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSectionAbout() {
  const [gens, setGens] = useState([
    { id: 0, name: "Gen 0", pict: "", tagline: "", year: 2010 },
    { id: 1, name: "Gen I", pict: "", tagline: "", year: 2011 },
    { id: 2, name: "Gen II", pict: "", tagline: "", year: 2012 },
    { id: 3, name: "Gen III", pict: "", tagline: "", year: 2013 },
    {
      id: 4,
      name: "Gen IV",
      pict: "/img/gen4.webp",
      tagline: "",
      year: 2014,
      desc: "Gen IV consists of Kevin Witanto serves as the President, with Kevin Sungiardi as Vice President. Handy Sunjaya and Erika Setiawati manage the Treasurer roles. Inez Gavrilla Wahyudi handles the Secretary position. Daniel Subandi coordinates academic affairs, supported by Felix Adrianto and Elvyna Tunggawa. Ria Fajdrin and Wimbo Adimas manage student relations. Cynthia Chaerunnisa, Benedictus Himawan Kevin Martoyo, and Gina Akmalia oversee non-academic activities. Adiputra Wijaya leads the Student Welfare Coordinator team, supported by Alfian Lazuardi. Leo Rizky coordinates entrepreneurial activities, with Alvin Cindana involved in entrepreneurship initiatives.",
    },
    { id: 5, name: "Gen V", pict: "", tagline: "", year: 2015 },
    {
      id: 6,
      name: "Gen VI",
      pict: "/img/gen6.webp",
      tagline: "We Serve Together As One",
      year: 2016,
      desc: "Gen VI consists of Vegalitha Thesallonika Kambey serves as the President, with Michael Van Wis Lee as Vice President. Riko Saniar manages the Treasurer role, while Marius Hanan Santoso handles the Secretary position. Budianto Mahasin coordinates academic affairs, supported by Dian Pratama Diva and Elia Victor Santoso. Masdani Ikhsan Putranto Karmawan and Kelvin manage student relations. Kevin Golfik, Benedictus Himawan Sugiarto, and Hutomo Kevin Chindel oversee non-academic activities. Arie Valiant Rindengan leads the Student Welfare Coordinator team, supported by Albert Eranio.",
    },
    {
      id: 7,
      name: "Gen VII",
      pict: "/img/gen7.webp",
      tagline: "One Family One Mission",
      year: 2017,
      desc: "Gen VII consists of Kelvin serves as the President, with Olivia Olita Olga as Vice President. Ridwan Gunawan manages the Treasurer role, while Alvin Darmadi and Michael Isaac handle Secretary responsibilities. Marius Hanan coordinates academic affairs, supported by Fischela Thioanda and Wanaldi. Reyhanali Heiko Amier, Amelia Tiyadi, and Jordy Rio manage student relations. Willy Yunus oversees non-academic activities, alongside Adrian Hartanto and Felix. Julian Satya leads the Student Welfare Coordinator team, supported by Rico Saniar and Vanessa Wijaya.",
    },
    {
      id: 8,
      name: "Gen VIII",
      pict: "/img/gen8.webp",
      tagline: "One Big Family",
      year: 2018,
      desc: "Gen VIII consists of Adrian Hartanto serves as the President , with Ericson as Vice President. Mildia Aprilia manages both the Secretary and Treasurer roles. Albert coordinates academic affairs, supported by Steven Surya. Samrida Adeldytalia and Kevin Zefanya handle student relations. Michael Isaac S oversees non-academic activities, alongside Zanetta. Yeni Kusumaningrum leads the Student Welfare Coordinator team, supported by M. Hanif Triyana.",
    },
    {
      id: 9,
      name: "Gen IX",
      pict: "/img/gen9.webp",
      tagline: "Siram, Tanam, Tumbuh",
      year: 2019,
      desc: "Gen IX consists of Ericson serves as the President, with Angelia Chandra as Vice President. Nurlita handles the role of Secretary, while Felicia Nathania manages the Treasurer responsibilities. Peter Liuwandy coordinates academic affairs, supported by Hannatassja. Shareen Gozali and Savero Ramadhan manage student relations. Timothy Jonathan oversees non-academic activities, alongside Agga Pagunnata Panuntun. Samrida Adeldytalia leads the Student Welfare Coordinator team, supported by Arga Bagusatria.",
    },
    {
      id: 10,
      name: "Gen X",
      pict: "/img/gen10.webp",
      tagline: "Revolusi Demi Prestasi",
      year: 2020,
      desc: "Gen X consists of Angelia Chandra serves as the President, with Elroy Andrew as Vice President. I. Gusti Agung Ayu Made B.B.B and Isabella Donita Hasan share responsibilities as Secretary and Treasurer respectively. Adityo Panji Prasetyo and Nur Alief Maulana handle student relations. Edy Evandel leads the Student Welfare Coordinator team, supported by Deva Putra. Nurlita oversees academic matters, with Risanti Galuh, Sheyla Aurelia Azka, and Veronica Landrea D.O. contributing in academic roles. Luke Darmawan coordinates non-academic activities alongside Ahmad Rizqi Nugraha and Cinthiya",
    },
    {
      id: 11,
      name: "Gen XI",
      pict: "/img/gen11.webp",
      tagline: "Tampung Aspirasi, Buat Inovasi, Cetak Prestasi",
      year: 2021,
      desc: "Gen XI consists of Elroy Andrew Siswanto serves as the President, with Glenys Mae as Vice President. Adlin Belicia and Juan Richard Harmel share responsibilities as Secretary and Treasurer respectively. Gavrilla Claudia, Devita Sertivia Suprapto, and Fasya Al Afifah handle student relations. Mar Wandi Ale leads the Student Welfare Coordinator team, supported by Albert Putra Sakti Japinto and Fadillah Zulfitriansyah. T. Angel Caroyallita oversees academic matters, with Dave Cendra Wirawan, Muhammad Rafii Haditomo, and Philip Shane Hardhianto Budiono contributing in academic roles. Ahmad Rizqi Nugraha, Eric William, Marco Viriyatama Lim, and Stefen Christian coordinate non-academic activities.",
    },
    {
      id: 12,
      name: "Gen XII",
      pict: "/img/gen12.webp",
      tagline: "Merajut Solidaritas, Menuju Totalitas, dan Profesionalitas",
      year: 2022,
      desc: "Gen XII consists of Juan Richard Harmel serves as the President, with Rizky Putra Jofansa as Vice President, and Rieva Putri Safa handling both Secretary and Treasurer roles. Gladys Patricia takes on the role of Academic Coordinator, supported by Bill Kiki in academic matters. Mar Wandi coordinates non-academic activities alongside Fachri Rizki Baihaki. Hansen Thadeus Wijaya oversees student relations and welfare coordination, supported by Ryan Gunawan, Aulia Kharisma Putri, and Adellyn Shea Vondranov in the same role.",
    },
    {
      id: 13,
      name: "Gen XIII",
      pict: "/img/gen13.webp",
      tagline: "Baskara Wastu Bestari",
      year: 2023,
      desc: "Gen XIII consists of Jose Veinsenli as the President, with Valenzia Tanaka serving as Vice President, and Vincencius Christiano Tjokro handling both Secretary and Treasurer roles. Rendy Wirawan Tamrin takes charge as the Academic Coordinator, supported by Michael Owen Kohar in academic affairs. Jonathan Sutanto coordinates non-academic activities, alongside Jurgen Loa. Steven Marcelino Tandiono manages student relations, while Rifcki Dwiyansyah supports in this role. Stanley Jeven oversees public relations, and Decky Jaufari focuses on student welfare coordination, supported by Firdaus Nuzula.",
    },
    {
      id: 14,
      name: "Gen XIV",
      pict: "/img/gen14.webp",
      tagline: "In Harmonia Ad Meliora",
      year: 2024,
      desc: "Gen XIV consists of Kenny Budiarso Lawson as the President, Nabila Az Zahra Paramita as the Vice President, and Sabrina Nurul Azmi who serves as both Secretary and Treasurer. Karin Eldora is the Academic Coordinator, alongside Nicholas Soesilo handling academic affairs. Rafi Aldino oversees non-academic matters as the Non-Academic Coordinator, supported by Bintang Muhammad Ramdhan. Christopher Kenneth David takes charge of Student Relations and Welfare as the Coordinator, while Samuel Rai Indrawan also contributes to student welfare and relations.",
    },
  ]);

  const filteredGens = gens.filter((gen) => gen.pict !== "");
  const genLength = filteredGens.length - 1;
  const [carouselIndex, setCarouselIndex] = useState(genLength);
  const [isPaused, setIsPaused] = useState(false);

  const truncateText = (text: any, wordLimit: number) => {
    const words = text.split(" ");
    return (
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : "")
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) =>
        prevIndex === 0 ? genLength : prevIndex - 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [genLength, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  function handleOnClick() {
    window.location.href = "/home";
  }

  return (
    <>
      <section className="heroAbout">
        {filteredGens.map((gen, index) => (
          <div
            key={gen.id}
            className={`heroAbout-wrapper ${
              index === carouselIndex
                ? "active"
                : index ===
                  (carouselIndex === 0 ? genLength : carouselIndex - 1)
                ? "next"
                : ""
            }`}
          >
            <Image alt={gen.name} src={gen.pict} width={1980} height={1980} />
            <div
              className="desc-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="left">
                <div className="titleGen">
                  <h1>{gen.name}</h1>
                  <p>
                    <span>({gen.year})</span> - {gen.tagline}
                  </p>
                </div>
              </div>
              <div className="right">
                <div className="titleGen">
                  <h1>{gen.name}</h1>
                  <p>
                    <span>({gen.year})</span> - {gen.tagline}
                  </p>
                </div>
                <h2>Who are they?</h2>
                <p className="no-cut-desc">{gen.desc}</p>
                <p className="cut-desc">{truncateText(gen.desc, 30)}</p>
                <button className="btn-style-1" onClick={handleOnClick}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
