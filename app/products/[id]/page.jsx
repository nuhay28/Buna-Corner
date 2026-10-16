import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductById, products } from "@/data/products";
import { formatPrice } from "@/lib/format";

// Pre-build a page for every product at build time.
export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  return { title: product ? product.name : "Product not found" };
}

// Product detail (Server Component). The product is found using the id from the route.
export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  // Invalid id -> show the not-found page (see not-found.jsx in this folder).
  if (!product) notFound();

  return (
    <>
      <p>
        <Link href="/products">← Back to products</Link>
      </p>

      <article className="detail">
        <Image
          src={product.image}
          alt={`${product.name} product illustration`}
          width={800}
          height={800}
          priority
          sizes="(min-width: 800px) 50vw, 100vw"
          className="detail-image"
        />
        <div className="detail-info">
          <p className="card-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-price">{formatPrice(product.price)}</p>
          <p className={product.available ? "stock in-stock" : "stock out-of-stock"}>
            {product.available ? "In stock" : "Out of stock"}
          </p>
          <p>{product.description}</p>
          <div className="card-actions">
            <AddToCartButton
              productId={product.id}
              available={product.available}
              productName={product.name}
            />
            <Link href="/cart" className="button">
              View cart
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
