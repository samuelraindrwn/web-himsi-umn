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
            <h2>Contact Us</h2>
            <ul>
              <li>
                <LocationIcon />
                <p>
                  Jalan Scientia Boulevard Gading, Curug Sangereng,
                  <br /> Serpong, Kabupaten Tangerang, Banten 15810
                </p>
              </li>
              <li>
                <LineLogo />
                <p>@886rxfyx</p>
              </li>
              <li>
                <MailIcon />
                <p>himsi@umn.ac.id</p>
              </li>
            </ul>
          </div>
          <div className="right">
            <h2>THANK YOU FOR VISITING OUR WEBSITE!</h2>
            <ul>
              <li>Home</li>|<li>About Us</li>|<li>Events</li>|<li>Services</li>|
              <li>Terms and Condition</li>|<li>Terms of Service</li>|
              <li>Privacy Policy</li>|<li>FAQ</li>|<li>Career Opportunities</li>
              |<li>Blog</li>|<li>Support</li>
            </ul>
            <h2>Follow Us</h2>
            <ul>
              <li>
                <FacebookLogo />
                Facebook
              </li>
              <li>
                <InstaLogo />
                Instagram
              </li>
              <li>
                <LinkedinLogo />
                LinkedIn
              </li>
            </ul>
          </div>
          <div className="mid">
            <div className="powered">
              <div className="powered-wrapper">
                <h2>Powered By:</h2>
                <div className="logo-wrapper">
                  <Image
                    alt="Logo UMN"
                    width={45}
                    height={90}
                    src={"/img/umn-putih.webp"}
                  />
                  <Image
                    alt="Logo IS"
                    width={370}
                    height={60}
                    src={"/img/is-white.webp"}
                    onClick={() => {
                      window.location.href = "https://umn.ac.id";
                    }}
                  />
                </div>
                <p>
                  Designed by{" "}
                  <span className="web-designer">@samuelraindrwn</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © {year} HIMSI UMN. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
