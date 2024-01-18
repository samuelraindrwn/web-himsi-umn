import Wave from "./wave";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="text-wrapper">
            <h1>
              <span>HIMSI</span>
              <span>&nbsp;GEN</span> XIV
            </h1>
            <p>
              In the long book of life, every family has its own story. <br />
              This story is made up of shared memories, laughter, and even
              challenges. <br /> As we journey through life, piece by piece, our
              family narrative unfolds and reveals itself
            </p>
            <button>Explore Our Journey</button>
          </div>
        </div>
        <Wave />
      </section>
    </>
  );
}
