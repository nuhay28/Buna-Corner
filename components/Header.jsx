import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
