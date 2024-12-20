import type { Metadata } from "next";
import FeaturedProducts from "./components/FeaturedProducts";
import "./home_page.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lorentia | Home",
};

export default function Home() {
  return (
    <>
      <div className="position-relative vh-100 d-flex align-items-center justify-content-center">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/54379dc9e4b02667fff75285/1561633336862-V2BKSRBT8XZRAZIGHT6I/GQ-Creed-Still-Life-Photography-Josh-Caudwell-Shot-3.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        </div>

        <div className="position-relative text-center text-white px-3">
          <h1 className="display-4 display-md-3 display-lg-1 font-serif mb-4 fw-bold">
            Lorentia
          </h1>
          <p className="lead mb-5">
            Where luxury meets artistry. Experience the finest fragrances
            crafted for the extraordinary.
          </p>
          <Link href="/collections" className="button-link">
            Discover Our Collection
          </Link>
        </div>
      </div>
      <FeaturedProducts />
    </>
  );
}
