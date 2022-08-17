import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerSvg from '../Svg/HamburgerSvg';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        <HamburgerSvg />
      </button>
      <nav className={`${isOpen ? 'visible' : 'hidden'}`}>
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
