import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { categories, products } from "@/data/products";

export const metadata = { title: "Products" };

const sortOptions = [
  { value: "default", label: "Featured order" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name-asc", label: "Name: A to Z" },
];

// Catalogue (Server Component). Filtering and sorting use the URL
// (?category=...&sort=...) through a plain GET form, so no client JavaScript is needed.
export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const category = categories.includes(params?.category) ? params.category : "all";
  const sort = sortOptions.some((o) => o.value === params?.sort) ? params.sort : "default";

  let visible = category === "all" ? [...products] : products.filter((p) => p.category === category);

  if (sort === "price-asc") visible.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") visible.sort((a, b) => b.price - a.price);
  if (sort === "name-asc") visible.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <h1>Products</h1>

      <form method="get" className="filter-bar" aria-label="Filter and sort products">
        <div className="field-inline">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" defaultValue={category}>
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="field-inline">
          <label htmlFor="sort">Sort by</label>
          <select id="sort" name="sort" defaultValue={sort}>
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="button">
          Apply
        </button>
        <Link href="/products" className="link-button">
          Reset
        </Link>
      </form>

      <p className="muted" role="status">
        Showing {visible.length} {visible.length === 1 ? "product" : "products"}
        {category !== "all" ? ` in ${category}` : ""}.
      </p>

      {visible.length > 0 ? (
        <ProductGrid products={visible} />
      ) : (
        <p>No products match this filter.</p>
      )}
    </>
  );
}
