import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="panel empty-state">
      <h1>Page not found</h1>
      <p>The page you were looking for does not exist.</p>
      <Link href="/" className="button button-primary">
        Go to the home page
      </Link>
    </div>
  );
}
