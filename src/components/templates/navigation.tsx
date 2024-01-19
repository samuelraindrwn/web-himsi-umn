import Link from "next/link";
import BurgerBtn from "../(assets)/burgerBtn";
import XSymbol from "../(assets)/x-symbol";
import { useState, useEffect } from "react";

export default function Navigation({
  handleOnClick,
  isActive,
  pathname,
}: {
  handleOnClick: () => void;
  isActive: boolean;
  pathname: string;
}) {
  const [isPageActive, setPageActive] = useState(false);
  const [isHomePage, setHomePage] = useState(true);
  useEffect(() => {
    if (pathname !== "/") {
      setPageActive(true);
      setHomePage(false);
    } else {
      setHomePage(true);
    }
  }, [pathname]);

  const getLinkStyle = (page: any) => {
    const style =
      isPageActive && !isActive && pathname === `/${page}`
        ? { color: "var(--blue-himsi)" }
        : {};
    return style;
  };

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
        <Link
          title="About"
          href={isHomePage ? "/#about" : "/about"}
          style={getLinkStyle("about")}
        >
          About
        </Link>
        <Link
          title="HIMFACT"
          href={isHomePage ? "/#himfact" : "/himfact"}
          style={getLinkStyle("himfact")}
        >
          HIMFACT
        </Link>
        <Link
          title="Aspiration"
          href={isHomePage ? "/#aspiration" : "/aspiration"}
          style={getLinkStyle("aspiration")}
        >
          Aspiration
        </Link>
      </nav>
    </>
  );
}
