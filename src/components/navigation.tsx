import Link from "next/link";
import BurgerBtn from "./(assets)/burgerBtn";
import XSymbol from "./(assets)/x-symbol";
import { useState } from "react";

export default function Navigation({
  handleOnClick,
  isActive,
}: {
  handleOnClick: () => void;
  isActive: boolean;
}) {
  return (
    <>
      <span
        onClick={handleOnClick}
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
