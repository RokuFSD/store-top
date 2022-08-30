import React from 'react';
import ShopButton from '../../Button/ShopButton';

function HeroDescription() {
  return (
    <div className="flex w-11/12 max-w-md gap-y-12 flex-col order-2 lg:order-1 max-w-lg px-3">
      <div>
        <span className="tracking-widest text-2xl text-neutral-500">Wear the best</span>
        <h1 className="text-4xl font-bold">Make people fall in love with your clothes</h1>
      </div>
      <ShopButton/>
    </div>
  );
}

export default HeroDescription;
