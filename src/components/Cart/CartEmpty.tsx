import React from 'react';
import { Link } from 'react-router-dom';

function CartEmpty() {
  return (
    <div
      className="flex flex-col justify-center items-center h-full absolute top-1/2 -translate-x-1/2 left-1/2
      -translate-y-1/2 max-w-md w-full "
    >
      <h2 className="text-center text-gray-500 text-2xl">Your cart is empty...</h2>
      <img src="src/assets/cat-astronaut-rafiki.svg" alt="cart" className="w-full" />
      <Link to="/store">
        <button
          type="button"
          className="flex items-center justify-center transition-all border-2 border-neutral-800 text-xl bg-neutral-800 text-neutral-200 rounded-full w-40 h-11 hover:bg-transparent hover:text-neutral-800 withArrow"
        >
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default CartEmpty;
