"use client";

import Image from "next/image";
import LineLogo from "../(assets)/line-logo";
import MailIcon from "../(assets)/mail-icon";
import LocationIcon from "../(assets)/location-icon";
import InstaLogo from "../(assets)/insta-logo";
import FacebookLogo from "../(assets)/facebook-logo";
import LinkedinLogo from "../(assets)/linkedin-logo";

export default function Footer() {
  const today: Date = new Date();
  const year: number = today.getFullYear();

  return (
    <>
      <section id="footer">
        <Image
          className="cloud-footer"
          alt="cloud"
          width={4320}
          height={1080}
          src={"/img/cloud-footer.png"}
        />

        <div className="top">
          <div className="left">
            <h2>THANK YOU FOR VISITING OUR WEBSITE!</h2>
            <ul className="nav-footer">
              <li>
                <a href="/">Home</a>
              </li>
              |
              <li>
                <a href="/about">About Us</a>
              </li>
              |
              <li>
                <a href="/event">Events</a>
              </li>
              |
              <li>
                <a href="/himfact">HIMFACT</a>
              </li>
              |
              <li>
                <a href="/bimsi">BIMSI</a>
              </li>
              |
              <li>
                <a href="/aspiration">Aspiration</a>
              </li>
            </ul>
            <h2>Follow Us</h2>
            <ul className="sosmed">
              <li>
                <FacebookLogo />
                <a href="https://www.facebook.com/himsi.umn/"> Facebook</a>
              </li>
              <li>
                <InstaLogo />
                <a href="https://www.instagram.com/umn_si/">Instagram</a>
              </li>
              <li>
                <LinkedinLogo />
                <a href="https://www.linkedin.com/in/himsiumn14/">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="mid">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <LocationIcon />
                <a href="https://maps.app.goo.gl/y248KY2KaYcB1Kgh8">
                  Jalan Scientia Boulevard Gading, Curug Sangereng,
                  <br /> Serpong, Kabupaten Tangerang, Banten 15810
                </a>
              </li>
              <div className="contact-footer">
                <li>
                  <LineLogo />
                  <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=886rxfyx">
                    @886rxfyx
                  </a>
                </li>
                <li>
                  <MailIcon />
                  <a href="mailto:himsi@umn.ac.id">himsi@umn.ac.id</a>
                </li>
              </div>
            </ul>
          </div>

          <div className="right">
            {/* <h2>Powered By:</h2> */}
            <div className="logo-wrapper">
              <Image
                alt="Logo UMN"
                id="logo-umn-footer"
                width={50}
                height={90}
                src={"/img/umn-putih.webp"}
                onClick={() => {
                  window.location.href = "https://umn.ac.id";
                }}
              />
              <Image
                alt="Logo IS"
                id="logo-is-footer"
                width={370}
                height={60}
                src={"/img/is-white.webp"}
                onClick={() => {
                  window.location.href = "https://si.umn.ac.id";
                }}
              />
            </div>
            <p>
              Designed & Developed by{" "}
              <span
                onClick={() => {
                  window.location.href =
                    "https://linkedin.com/in/samuelraindrwn";
                }}
              >
                @samuelraindrwn
              </span>
            </p>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © {year} HIMSI UMN. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
