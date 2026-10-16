import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="panel empty-state">
      <h1>Product not found</h1>
      <p>We could not find that product. It may have been removed or the link may be wrong.</p>
      <Link href="/products" className="button button-primary">
        Back to all products
      </Link>
    </div>
  );
}
