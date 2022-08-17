import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerSvg from '../Svg/HamburgerSvg';

function MobileNavbar() {
  return (
    <>
      <HamburgerSvg />
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
