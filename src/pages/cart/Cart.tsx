import React from 'react';
import { useCartContext } from '../../context/Cart/cartContext';
import MemoCartItem from '../../components/Cart/CartItem';
import CartEmpty from '../../components/Cart/CartEmpty';

function Cart() {
  const cartState = useCartContext();

  if (cartState?.cartItems.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className="grid grid-cols-12 relative p-2 max-w-7xl mx-auto md:p-10">
      <section className="flex flex-col gap-4 col-span-full place-items-center lg:col-start-3 lg:col-span-3">
        {cartState?.cartItems.map((item) => (
          <MemoCartItem key={item.id} item={item} />
        ))}
      </section>
      <div className="h-20 flex my-10 justify-center gap-4 flex-wrap col-span-full lg:col-start-8">
        <span className="basis-full text-center">Cart Total: ${cartState?.total.toFixed(2)}</span>
        <button type="button" className="btn" disabled>
          CheckOut
        </button>
      </div>
    </div>
  );
}

export default Cart;

