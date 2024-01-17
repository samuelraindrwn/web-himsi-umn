import Link from "next/link";
import BurgerBtn from "./templates/burgerBtn";
import XSymbol from "./templates/x-symbol";
import { useState } from "react";

export default function Navigation() {
  const [isActive, setActive] = useState(false);
  function handleClick() {
    setActive(!isActive);
  }
  return (
    <>
      <span
        onClick={handleClick}
        className={isActive ? "active" : ""}
        title="More Option"
        id="nav-more-option"
      >
        <BurgerBtn />
        <XSymbol />
      </span>
      <nav>
        <Link title="Home" href="/">
          Home
        </Link>
        <Link title="About" href="/about">
          About
        </Link>
        <Link title="HIMFACT" href="/himfact">
          HIMFACT
        </Link>
        <Link title="Aspiration" href="/aspiration">
          Aspiration
        </Link>
      </nav>
    </>
  );
}
