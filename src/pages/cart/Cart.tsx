import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/Cart/cartContext';
import CartItem from '../../components/Cart/CartItem';

function Cart() {
  const cartState = useCartContext();

  if (cartState?.cartItems.length === 0) {
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

  return (
    <div className="grid grid-cols-12 relative md:p-10">
      <section className="flex flex-col p-2 gap-4 col-span-full place-items-center lg:col-start-3 lg:col-span-3">
        {cartState?.cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </section>
      <div className="lg:col-start-8">
        {cartState?.total}
        <button type="button" className="btn" disabled>
          CheckOut
        </button>
      </div>
    </div>
  );
}

export default Cart;
