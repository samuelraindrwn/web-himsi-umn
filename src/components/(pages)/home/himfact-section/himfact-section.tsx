import Link from "next/link";
import ProductDisplay from "./product-display";

export default function HimfactSection() {
  return (
    <section id="himfact">
      <div className="left">
        <h1>
          <span>HIM</span>
          <span>FACT</span>
        </h1>
        <h2>Student Elegance, Fashion Excellence: A Creative Fusion</h2>
        <p>
          Discover a world where <span>Student Elegance</span> meets{" "}
          <span>Fashion Excellence!</span> Our Creative Fusion delivers
          cutting-edge designs, showcasing the brilliance of young minds.
          Embrace style redefined, where <span>innovation</span> meets fashion
          charm!
        </p>
        <button className="btn-style-1">
          <Link href="/himfact">View More Product</Link>
        </button>
      </div>
      <div className="right">
        <ProductDisplay />
      </div>
    </section>
  );
}
