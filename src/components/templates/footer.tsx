import Image from "next/image";

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
          </div>
          <div className="right">
            <h2>Follow Us</h2>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © {year} HIMSI UMN. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
