import Logo from "@/components/templates/logo";
import Navigation from "../navigation";
export default function NavigationHeader() {
  return (
    <header className="nav">
      <div className="logo-wrapper">
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
