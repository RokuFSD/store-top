import React from 'react';
import { useCartContext } from '../../context/Cart/cartContext';
import CartItem from '../../components/Cart/CartItem';

function Cart() {
  const cartState = useCartContext();

  if (cartState?.cartItems.length === 0) {
    return (
      <div
        className="flex flex-col justify-center items-center h-full absolute top-1/2 -translate-x-1/2 left-1/2
      -translate-y-1/2"
      >
        <h2 className="text-center text-gray-500">Your cart is empty</h2>
        <img
          src="https://media.giphy.com/media/3o7bu0ZDxrQZ9QSd3e/giphy.gif"
          alt="cart"
          className="w-64"
        />
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

