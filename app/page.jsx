import Image from "next/image";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { getFeaturedProducts } from "@/data/products";


export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        {/* The hero is the largest image above the fold, so it is loaded with priority (good for LCP). */}
        <Image
          src="/images/hero.png"
          alt=""
          width={1600}
          height={700}
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 id="hero-heading">
            Buna Corner
          </h1>
          <p>Our store helps coffee lovers in Ethiopia find and buy fresh beans, brewing gear and handmade coffee-ceremony crafts.</p>
          <Link href="/products" className="button button-primary">
            Browse products
          </Link>
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="section">
        <h2 id="featured-heading">Featured products</h2>
        <ProductGrid products={featured} />
        <p className="section-link">
          <Link href="/products">See all products →</Link>
        </p>
      </section>
    </>
  );
}
