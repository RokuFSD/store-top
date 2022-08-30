import React from 'react';
import { Link } from 'react-router-dom';
import ArrowSvg from '../Svg/ArrowSvg';

function ShopButton() {
  return (
    <Link to="/store">
      <button
        type="button"
        className="flex items-center justify-center transition-all border-2 border-neutral-800 text-xl bg-neutral-800 text-neutral-200 rounded-full w-40 h-11 hover:bg-transparent hover:text-neutral-800 withArrow"
      >
        Shop Now
        <ArrowSvg />
      </button>
    </Link>
  );
}


export default ShopButton;
