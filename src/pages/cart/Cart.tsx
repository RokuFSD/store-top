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
    <>
      <section className="flex flex-col items-center p-10 gap-4">
        {cartState?.cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </section>
      <div>
        {cartState?.total}
        <button type="button" className="btn" disabled>
          CheckOut
        </button>
      </div>
    </>
  );
}

export default Cart;
