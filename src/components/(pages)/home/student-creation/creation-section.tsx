import Uiux from "./creation/creation1";

export default function HasilKarya() {
  return (
    <>
      <section className="creation-container">
        <h1>
          HASIL KARYA <span className="font-clr-blue">MAHASISWA</span>{" "}
          <span className="font-clr-orange">SISTEM INFORMASI</span>
        </h1>
        <div className="creation-wrapper">
          <Uiux />
          <div>DATA VISUALISASI</div>
        </div>
      </section>
    </>
  );
}
