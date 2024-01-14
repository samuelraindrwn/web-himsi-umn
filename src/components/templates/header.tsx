import Logo from "@/components/templates/logo";
import Navigation from "../navigation";
export default function NavigationHeader() {
  return (
    <header className="nav">
      <div className="logo-wrapper">
        <Logo />
        <h1>HIMSI</h1>
      </div>
      <Navigation />
    </header>
  );
}
