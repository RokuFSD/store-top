import React from 'react';
import { Link } from 'react-router-dom';

function MobileNavbar() {
  return (
    <>
      <div className="mobile-navbar">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <nav className="hidden">
        <ul className="flex gap-12">
          <Link to="/" className="navlink">
            home
          </Link>
          <Link to="/store" className="navlink">
            store
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default MobileNavbar;
