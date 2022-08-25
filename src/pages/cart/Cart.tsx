import React from 'react';
import { useCartContext } from '../../context/Cart/cartContext';
import CartItem from '../../components/Cart/CartItem';

function Cart() {
  const cartState = useCartContext();

  if (cartState?.cartItems.length === 0) {
    return <div>There is no items in the cart.</div>;
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
