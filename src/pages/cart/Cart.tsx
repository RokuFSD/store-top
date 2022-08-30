import React from 'react';
import { useCartContext } from '../../context/Cart/cartContext';
import CartItem from '../../components/Cart/CartItem';
import CartEmpty from '../../components/Cart/CartEmpty';

function Cart() {
  const cartState = useCartContext();

  if (cartState?.cartItems.length === 0) {
    return <CartEmpty />;
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
