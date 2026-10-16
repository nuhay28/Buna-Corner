import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <Link href={`/products/${product.id}`} className="card-image-link">
        <Image
          src={product.image}
          alt={`${product.name} product illustration`}
          width={600}
          height={600}
          sizes="(min-width: 960px) 25vw, (min-width: 600px) 33vw, 50vw"
          className="card-image"
        />
      </Link>
    </article>
  );
}
