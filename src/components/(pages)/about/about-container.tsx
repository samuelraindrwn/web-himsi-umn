"use client";

import { useState } from "react";
import HeroSectionAbout from "./hero-section";
import WhoAreWe from "./who-are-we";
import Timeline from "./timeline/timeline";

export default function AboutContainer() {
  const [gens, setGens] = useState([
    {
      id: 0,
      name: "Gen 0",
      pict: "",
      tagline: "",
      year: "2007 - 2009",
      desc: "",
      legacy:
        "D’information System Community was established along with DISC Gathering (SI Night) Event",
      shortLegacy: "Birth Of Disc",
    },
    {
      id: 1,
      name: "Gen I",
      pict: "",
      tagline: "",
      year: 2010,
      desc: "",
      legacy:
        "First D’Information System Community Outbond (DISCO 1) are being held.",
      shortLegacy: "DISCO",
    },
    {
      id: 2,
      name: "Gen II",
      pict: "",
      tagline: "",
      year: 2011,
      desc: "",
      legacy:
        "DISC Officialy rebrand into HIMSI. At this generation academic purposes events such as studi banding, Seminar, and tutoring (Bimbel) were first held.",
      shortLegacy: "DISC to HIMSI",
    },
    {
      id: 3,
      name: "Gen III",
      pict: "",
      tagline: "",
      year: 2012,
      desc: "",
      legacy: "AD/ART and GBHO are being official promulgated.",
      shortLegacy: "Promulgation of AD/ART & GBHO",
    },
    {
      id: 4,
      name: "Gen IV",
      pict: "/img/gen4.webp",
      tagline: "",
      year: 2013,
      desc: "Gen IV consists of Kevin Witanto serves as the President, with Kevin Sungiardi as Vice President. Handy Sunjaya and Erika Setiawati manage the Treasurer roles. Inez Gavrilla Wahyudi handles the Secretary position. Daniel Subandi coordinates academic affairs, supported by Felix Adrianto and Elvyna Tunggawa. Ria Fajdrin and Wimbo Adimas manage student relations. Cynthia Chaerunnisa, Benedictus Himawan Kevin Martoyo, and Gina Akmalia oversee non-academic activities. Adiputra Wijaya leads the Student Welfare Coordinator team, supported by Alfian Lazuardi. Leo Rizky coordinates entrepreneurial activities, with Alvin Cindana involved in entrepreneurship initiatives.",
      legacy:
        "Social Is Me (SIM) as a social event and Funsport as a competitive sport competition among KBM SI are first time being held in this year.",
      shortLegacy: "Social and Sport Events",
    },
    {
      id: 5,
      name: "Gen V",
      pict: "",
      tagline: "",
      year: 2015,
      desc: "",
      legacy: "Minor revision of AD/ART are being done.",
      shortLegacy: "AD/ART First Amandment",
    },
    {
      id: 6,
      name: "Gen VI",
      pict: "/img/gen6.webp",
      tagline: "We Serve Together As One",
      year: 2016,
      desc: "Gen VI consists of Vegalitha Thesallonika Kambey serves as the President, with Michael Van Wis Lee as Vice President. Riko Saniar manages the Treasurer role, while Marius Hanan Santoso handles the Secretary position. Budianto Mahasin coordinates academic affairs, supported by Dian Pratama Diva and Elia Victor Santoso. Masdani Ikhsan Putranto Karmawan and Kelvin manage student relations. Kevin Golfik, Benedictus Himawan Sugiarto, and Hutomo Kevin Chindel oversee non-academic activities. Arie Valiant Rindengan leads the Student Welfare Coordinator team, supported by Albert Eranio.",
      legacy:
        "Technofest a collaboration event between HIMSI, HIMTI, and HIMASIKOM (ACES)",
      shortLegacy: "Technofest",
    },
    {
      id: 7,
      name: "Gen VII",
      pict: "/img/gen7.webp",
      tagline: "One Family One Mission",
      year: 2017,
      desc: "Gen VII consists of Kelvin serves as the President, with Olivia Olita Olga as Vice President. Ridwan Gunawan manages the Treasurer role, while Alvin Darmadi and Michael Isaac handle Secretary responsibilities. Marius Hanan coordinates academic affairs, supported by Fischela Thioanda and Wanaldi. Reyhanali Heiko Amier, Amelia Tiyadi, and Jordy Rio manage student relations. Willy Yunus oversees non-academic activities, alongside Adrian Hartanto and Felix. Julian Satya leads the Student Welfare Coordinator team, supported by Rico Saniar and Vanessa Wijaya.",
      legacy:
        "HIMSI Factory as an official merchandise store of HIMSI are being launched.",
      shortLegacy: "HIMSI Official Merchandise",
    },
    {
      id: 8,
      name: "Gen VIII",
      pict: "/img/gen8.webp",
      tagline: "One Big Family",
      year: 2018,
      desc: "Gen VIII consists of Adrian Hartanto serves as the President , with Ericson as Vice President. Mildia Aprilia manages both the Secretary and Treasurer roles. Albert coordinates academic affairs, supported by Steven Surya. Samrida Adeldytalia and Kevin Zefanya handle student relations. Michael Isaac S oversees non-academic activities, alongside Zanetta. Yeni Kusumaningrum leads the Student Welfare Coordinator team, supported by M. Hanif Triyana.",
      legacy:
        "First version of ISFEST (Information System Festival) are being held this year as the combination of Funsport and Social Is Me.",
      shortLegacy: "Funsport + SIM = ISFEST",
    },
    {
      id: 9,
      name: "Gen IX",
      pict: "/img/gen9.webp",
      tagline: "Siram, Tanam, Tumbuh",
      year: 2019,
      desc: "Gen IX consists of Ericson serves as the President, with Angelia Chandra as Vice President. Nurlita handles the role of Secretary, while Felicia Nathania manages the Treasurer responsibilities. Peter Liuwandy coordinates academic affairs, supported by Hannatassja. Shareen Gozali and Savero Ramadhan manage student relations. Timothy Jonathan oversees non-academic activities, alongside Agga Pagunnata Panuntun. Samrida Adeldytalia leads the Student Welfare Coordinator team, supported by Arga Bagusatria.",
      legacy:
        "This year DISCO IX were the last outbonding event for the next 4 years (2019-2022).",
      shortLegacy: "Year Before Pandemic",
    },
    {
      id: 10,
      name: "Gen X",
      pict: "/img/gen10.webp",
      tagline: "Revolusi Demi Prestasi",
      year: 2020,
      desc: "Gen X consists of Angelia Chandra serves as the President, with Elroy Andrew as Vice President. I. Gusti Agung Ayu Made B.B.B and Isabella Donita Hasan share responsibilities as Secretary and Treasurer respectively. Adityo Panji Prasetyo and Nur Alief Maulana handle student relations. Edy Evandel leads the Student Welfare Coordinator team, supported by Deva Putra. Nurlita oversees academic matters, with Risanti Galuh, Sheyla Aurelia Azka, and Veronica Landrea D.O. contributing in academic roles. Luke Darmawan coordinates non-academic activities alongside Ahmad Rizqi Nugraha and Cinthiya",
      legacy:
        "Due to COVID-19 several online events are being held such as Siberian week, ISFEST (Information System Festival), etc.",
      shortLegacy: "Rise of Online Events",
    },
    {
      id: 11,
      name: "Gen XI",
      pict: "/img/gen11.webp",
      tagline: "Tampung Aspirasi, Buat Inovasi, Cetak Prestasi",
      year: 2021,
      desc: "Gen XI consists of Elroy Andrew Siswanto serves as the President, with Glenys Mae as Vice President. Adlin Belicia and Juan Richard Harmel share responsibilities as Secretary and Treasurer respectively. Gavrilla Claudia, Devita Sertivia Suprapto, and Fasya Al Afifah handle student relations. Mar Wandi Ale leads the Student Welfare Coordinator team, supported by Albert Putra Sakti Japinto and Fadillah Zulfitriansyah. T. Angel Caroyallita oversees academic matters, with Dave Cendra Wirawan, Muhammad Rafii Haditomo, and Philip Shane Hardhianto Budiono contributing in academic roles. Ahmad Rizqi Nugraha, Eric William, Marco Viriyatama Lim, and Stefen Christian coordinate non-academic activities.",
      legacy:
        "Second amendment of AD/ART are being held through conferences this year, along with the birth of regeneration program HIMSI Leadership Program",
      shortLegacy: "Second Amendment of AD/ART",
    },
    {
      id: 12,
      name: "Gen XII",
      pict: "/img/gen12.webp",
      tagline: "Merajut Solidaritas, Menuju Totalitas, dan Profesionalitas",
      year: 2022,
      desc: "Gen XII consists of Juan Richard Harmel serves as the President, with Rizky Putra Jofansa as Vice President, and Rieva Putri Safa handling both Secretary and Treasurer roles. Gladys Patricia takes on the role of Academic Coordinator, supported by Bill Kiki in academic matters. Mar Wandi coordinates non-academic activities alongside Fachri Rizki Baihaki. Hansen Thadeus Wijaya oversees student relations and welfare coordination, supported by Ryan Gunawan, Aulia Kharisma Putri, and Adellyn Shea Vondranov in the same role.",
      legacy:
        "2 Years after pandemic several of offline program are risen in this year such as Social Is Me, Funsport, Company Visit, and DISNIGHT.",
      shortLegacy: "Half Online, Half Offline",
    },
    {
      id: 13,
      name: "Gen XIII",
      pict: "/img/gen13.webp",
      tagline: "Baskara Wastu Bestari",
      year: 2023,
      desc: "Gen XIII consists of Jose Veinsenli as the President, with Valenzia Tanaka serving as Vice President, and Vincencius Christiano Tjokro handling both Secretary and Treasurer roles. Rendy Wirawan Tamrin takes charge as the Academic Coordinator, supported by Michael Owen Kohar in academic affairs. Jonathan Sutanto coordinates non-academic activities, alongside Jurgen Loa. Steven Marcelino Tandiono manages student relations, while Rifcki Dwiyansyah supports in this role. Stanley Jeven oversees public relations, and Decky Jaufari focuses on student welfare coordination, supported by Firdaus Nuzula.",
      legacy:
        "After the COVID-19 pandemic has ended, all activities are being held full offline, and DISCO is being held again after being paused for three generations, now under the name DISCO X (DISCO 10)",
      shortLegacy: "After the Pandemic",
    },
    {
      id: 14,
      name: "Gen XIV",
      pict: "/img/gen14.webp",
      tagline: "In Harmonia Ad Meliora",
      year: 2024,
      desc: "Gen XIV consists of Kenny Budiarso Lawson as the President, Nabila Az Zahra Paramita as the Vice President, and Sabrina Nurul Azmi who serves as both Secretary and Treasurer. Karin Eldora is the Academic Coordinator, alongside Nicholas Soesilo handling academic affairs. Rafi Aldino oversees non-academic matters as the Non-Academic Coordinator, supported by Bintang Muhammad Ramdhan. Christopher Kenneth David takes charge of Student Relations and Welfare as the Coordinator, while Samuel Rai Indrawan also contributes to student welfare and relations.",
      legacy: "Legacy are currently being written",
      shortLegacy: "Upcoming Legacy",
    },
  ]);
  return (
    <>
      <HeroSectionAbout gens={gens} />
      <WhoAreWe />
      <Timeline gens={gens} />
    </>
  );
}
