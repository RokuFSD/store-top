import React from 'react';
import { Link } from 'react-router-dom';
import ArrowSvg from '../../Svg/ArrowSvg';

function HeroDescription() {
  return (
    <div className="flex w-11/12 max-w-md gap-y-12 flex-col order-2 lg:order-1 max-w-lg px-3">
      <div>
        <span className="tracking-widest text-2xl text-neutral-500">Wear the best</span>
        <h1 className="text-4xl font-bold">Make people fall in love with your clothes</h1>
      </div>
      <Link to="/store">
        <button
          type="button"
          className="flex items-center justify-center transition-all border-2 border-neutral-800 text-xl bg-neutral-800 text-neutral-200 rounded-full w-40 h-11 hover:bg-transparent hover:text-neutral-800 withArrow"
        >
          Shop Now
          <ArrowSvg />
        </button>
      </Link>
    </div>
  );
}

export default HeroDescription;
