import Link from "next/link";
import BurgerBtn from "../(assets)/burgerBtn";
import XSymbol from "../(assets)/x-symbol";
import { useState, useEffect } from "react";

export default function Navigation({
  handleMoreOptionOnClick,
  handleNavClick,
  isActive,
  pathname,
}: {
  handleMoreOptionOnClick: () => void;
  handleNavClick: () => void;
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
        onClick={handleMoreOptionOnClick}
        className={isActive ? "active" : ""}
        title="More Option"
        id="nav-more-option"
      >
        <BurgerBtn />
        <XSymbol />
      </span>
      <nav>
        <Link title="Home" href="/" onClick={handleNavClick}>
          Home
        </Link>
        <Link
          title="About"
          href={isHomePage ? "/#about" : "/about"}
          style={getLinkStyle("about")}
          onClick={handleNavClick}
        >
          About
        </Link>
        <Link
          title="HIMFACT"
          href={isHomePage ? "/#himfact" : "/himfact"}
          style={getLinkStyle("himfact")}
          onClick={handleNavClick}
        >
          HIMFACT
        </Link>
        <Link
          title="Aspiration"
          href={isHomePage ? "/#aspiration" : "/aspiration"}
          style={getLinkStyle("aspiration")}
          onClick={handleNavClick}
        >
          Aspiration
        </Link>
      </nav>
    </>
  );
}
