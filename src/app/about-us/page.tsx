
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorentia | About",
};

const AboutUs = () => {
  return (
    <div className="text-white">
      <div className="position-relative" style={{ height: "24rem" }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://m.media-amazon.com/images/I/91phRvQBV-L.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        </div>
        <div className="position-relative d-flex align-items-center justify-content-center h-100">
          <h1 className="display-4 fw-bold text-warning">Our Story</h1>
        </div>
      </div>

      <div className="container py-5">
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <p className="fs-5 lh-lg mb-4">
            Founded in 2010, Lorentia has been at the forefront of luxury
            fragrance creation. Our passion for perfumery drives us to source
            the finest ingredients from around the world, creating scents that
            capture moments, emotions, and memories.
          </p>

          <h2 className="h3 fw-bold mb-4">Our Philosophy</h2>
          <p className="mb-4">
            We believe that a fragrance is more than just a scent - it&apos;s an
            expression of individuality, a mark of sophistication, and a
            personal signature. Each Perfumora creation is crafted with
            meticulous attention to detail, combining traditional perfumery
            techniques with modern innovation.
          </p>

          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <h3 className="h5 fw-bold mb-3">Craftsmanship</h3>
              <p>
                Our master perfumers bring decades of experience and artistry to
                every creation, ensuring each fragrance tells its own unique
                story.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="h5 fw-bold mb-3">Sustainability</h3>
              <p>
                We are committed to sustainable practices, from responsible
                sourcing of ingredients to eco-friendly packaging solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
