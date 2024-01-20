"use client";

import { useEffect } from "react";

export default function Animate() {
  useEffect(() => {
    const element = document.getElementById("about");
    if (element) {
      window.addEventListener("scroll", function () {
        let posisiScroll = this.scrollY;

        console.log("Posisi Scroll: " + posisiScroll);
      });
    }
  }, []);
}
