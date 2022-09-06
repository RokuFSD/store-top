import React from 'react';
import ShopButton from '../Button/ShopButton';
import emptyCartSvg from "../../assets/cat-astronaut-rafiki.svg"

function CartEmpty() {
  return (
    <div
      className="flex flex-col justify-center items-center h-full absolute top-1/2 -translate-x-1/2 left-1/2
      -translate-y-1/2 max-w-md w-full "
    >
      <h2 className="text-center text-gray-500 text-2xl">Your cart is empty...</h2>
      <img src={emptyCartSvg} alt="cart" className="w-full" />
      <ShopButton/>
    </div>
  );
}

export default CartEmpty;
