export default function HasilKarya() {
  return (
    <>
      <section className="creation-container">
        <h1>
          HASIL KARYA <span className="font-clr-blue">MAHASISWA</span>{" "}
          <span className="font-clr-orange">SISTEM INFORMASI</span>
        </h1>
        <div className="creation-wrapper">
          <div id="uiux">
            <video autoPlay muted>
              <source src="/vids/uiux.mp4" type="video/mp4" />
            </video>
            <article className="desc">
              <h2>UI/UX</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                quis voluptatem est perferendis fuga sapiente natus saepe eos
                omnis atque maxime expedita reprehenderit aliquam dicta?
              </p>
            </article>
          </div>
          <div>DATA VISUALISASI</div>
          <div>WEBSITE</div>
          <div>Mobile Apps</div>
        </div>
      </section>
    </>
  );
}
