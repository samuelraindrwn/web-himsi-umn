"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/templates/logo";
import { usePathname } from "next/navigation";
import Navigation from "../navigation";

export default function NavigationHeader() {
  const pathname = usePathname();
  const [isActive, setActive] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const checkScrollOnReload = () => {
    const scrolled = window.scrollY > 0;
    setScrolled(scrolled);
    setActive(scrolled);
  };

  useEffect(() => {
    checkScrollOnReload();
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("load", checkScrollOnReload);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/" && !isScrolled) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [pathname, isScrolled]);

  const handleOnClickReload = () => {
    window.location.reload();
    window.location.href = pathname;
  };

  return (
    <header id="nav-header" className={isActive ? "nav active" : "nav"}>
      <div onClick={handleOnClickReload} className="logo-wrapper">
        <Logo />
        <h1>
          Himpunan Mahasiswa <span>Sistem Informasi</span> <br />
          Universitas <span>Multimedia Nusantara</span>
        </h1>
      </div>
      <Navigation />
    </header>
  );
}
