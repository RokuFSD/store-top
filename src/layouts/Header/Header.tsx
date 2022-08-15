import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MobileNavbar from '../../components/Navbar/MobileNavbar';

type HeaderProps = {
  isSmallScreen: boolean;
};

function Header({ isSmallScreen }: HeaderProps) {
  return (
    <header className="flex w-full h-24 items-center justify-between px-24 bg-white font-display">
      <h2 className="text-2xl pointer-events-none">FakeStore</h2>
      {isSmallScreen ? <MobileNavbar/> : <Navbar />}
    </header>
  );
}

export default Header;
