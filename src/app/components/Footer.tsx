import Link from "next/link";
import React from "react";
import "./footer-styles.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container pt-5">
        <div className="row text-center text-md-start">
          {/* Brand Description */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h3 className="h5 font-serif mb-3">Lorentia</h3>
            <p>
              Luxury fragrances for the discerning individual. Experience the
              art of perfumery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h4 className="h6 mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <Link href="/about-us" className="text-decoration-none text-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-decoration-none text-light">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-decoration-none text-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h4 className="h6 mb-3">Contact Info</h4>
            <ul className="list-unstyled">
              <li>123 Luxury Lane</li>
              <li>New York, NY 10001</li>
              <li>Tel: (555) 123-4567</li>
              <li>Email: info@Lorentia.com</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h4 className="h6 mb-3">Follow Us</h4>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-top border-secondary py-2 mt-4"></div>
        {/* Footer Bottom */}
        <div className="text-center">
          <p className="mb-0">&copy; 2024 Lorentia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
