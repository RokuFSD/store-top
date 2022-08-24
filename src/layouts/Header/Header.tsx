import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import WithToggle from '../../components/Utils';
import CartButton from '../../components/Cart/CartButton';

type HeaderProps = {
  isSmallScreen: boolean;
};

function Header({ isSmallScreen }: HeaderProps) {
  return (
    <header className="z-10 relative flex w-full h-24 items-center justify-between px-5 bg-white font-display md:px-24">
      <h2 className="text-2xl pointer-events-none">FakeStore</h2>
      <div className="flex items-center gap-10">
        <CartButton />
        {isSmallScreen ? <WithToggle comp={<Navbar />} /> : <Navbar />}
      </div>
    </header>
  );
}

export default Header;
