import Image from "next/image";
export default function AspirationSection() {
  return (
    <section id="aspiration">
      <div className="left">
        <Image
          alt="Aspiration"
          width={1080}
          height={1080}
          src={"/img/Aspiration-img.png"}
        />
      </div>
      <div className="right">
        <div className="text-wrapper">
          <h1>
            <span>#Suarakan</span>
            <span>Aspirasi</span>
          </h1>
          <h2>Together We Speak, Together We Thrive</h2>
          <p>
            The KBM SI Aspiration Form is a dedicated platform for Information
            Systems students at Multimedia Nusantara University to voice their
            opinions, share concerns, and offer suggestions. This ensures their
            voices reach the Information Systems program department, fostering a
            collaborative environment where student feedback shapes the future
            of the program.
          </p>
          <button className="btn-style-1">SUBMIT FORM</button>
        </div>
      </div>
    </section>
  );
}
