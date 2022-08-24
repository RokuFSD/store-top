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
      <section>
        {cartState?.cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </section>
      <div>{cartState?.total}</div>
    </>
  );
}

export default Cart;
