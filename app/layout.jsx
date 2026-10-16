import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  description:
    "Ethiopian coffee beans, brewing gear and handmade crafts for people who love a proper coffee ceremony.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
          <Header />
          <main id="main-content" className="container main">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
