import Link from "next/link";

export default function AboutDetails() {
  return (
    <article className="right">
      <h1 id="tagline">
        #InHarmonia
        <span>AdMeliora</span>
      </h1>
      <p>
        We are dedicated to creating unforgettable experiences with both{" "}
        <span style={{ fontWeight: "600" }}>Familialism</span> and{" "}
        <span style={{ fontWeight: "600" }}>professionalism</span> in keeping
        through{" "}
        <span style={{ color: "var(--blue-himsi)", fontWeight: "600" }}>
          Kompas Gramedia&apos;s 5C
        </span>{" "}
        values. <br /> Our journey blends excellence, passion, and commitment,
        leading us to remarkable achievements.
      </p>
      <div className="btn-wrapper">
        <button className="btn-style-1">
          <Link href="/about">Explore Our Journey</Link>
        </button>
        <button className="btn-style-1">
          <Link href="/about">Check Our Events</Link>
        </button>
      </div>
    </article>
  );
}
