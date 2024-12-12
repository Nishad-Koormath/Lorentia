import React from 'react';
import Button from './ui/Button';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  return (
    <div className="d-md-none position-relative">
      <Button variant="ghost" onClick={onToggle} className="btn p-2">
        {isOpen ? (
          <i className="bi bi-x-lg fs-4"></i>
        ) : (
          <i className="bi bi-list fs-4"></i>
        )}
      </Button>

      {isOpen && (
        <div className="position-absolute top-100 start-0 end-0  bg-opacity-95  w-100">
          <div className="py-2">
            <Link
              href="/"
              className="d-block px-3 py-2 text-light text-decoration-none hover-opacity"
            >
              Home
            </Link>
            <Link
              href="/collections"
              className="d-block px-3 py-2 text-light text-decoration-none hover-opacity"
            >
              Collections
            </Link>
            <Link
              href="/about-us"
              className="d-block px-3 py-2 text-light text-decoration-none hover-opacity"
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="d-block px-3 py-2 text-light text-decoration-none hover-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
