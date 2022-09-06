import React from 'react';
import heroSvg from "../../../assets/thrift-shop-not-css.svg"

function HeroImg() {
  return (
    <img
      src={heroSvg}
      alt="thrift shop"
      className="w-full max-w-2xl order-1 lg:order-2 lg:max-w-lg 2xl:max-w-3xl"
    />
  );
}

export default HeroImg;
