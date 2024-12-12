"use client";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import "./navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="glass-effect fixed-top">
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <div className="fs-3 fw-bold text-light">Lorentia</div>

          {/* Desktop Menu */}
          <div className="d-none d-md-flex gap-3">
            <a href="/" className="text-light text-decoration-none">
              Home
            </a>
            <a href="/collections" className="text-light text-decoration-none">
              Collections
            </a>
            <a href="/about-us" className="text-light text-decoration-none">
              About
            </a>
            <a href="/contact-us" className="text-light text-decoration-none">
              Contact
            </a>
          </div>

          {/* Action Icons and Mobile Menu */}
          <div className="d-flex align-items-center gap-3">
            {/* Search Icon */}
            <div className="d-none d-sm-block">
              <i className="bi bi-search fs-5 text-light cursor-pointer"></i>
            </div>
            {/* User Icon */}
            <i className="bi bi-person fs-5 text-light cursor-pointer"></i>
            {/* Shopping Bag Icon */}
            <div className="position-relative">
              <i className="bi bi-bag fs-5 text-light cursor-pointer"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </div>
            {/* Mobile Menu Toggle */}
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
