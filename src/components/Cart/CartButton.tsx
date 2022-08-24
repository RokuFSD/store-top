import React from 'react';
import ShoppingCartSvg from '../Svg/ShoppingCartSvg';
import { useCartContext } from '../../context/Cart/cartContext';

function CartButton() {
  const cartState = useCartContext();
  return (
    <button type="button" className="relative">
      <ShoppingCartSvg />
      {cartState?.cartItems.length && cartState?.cartItems.length > 0 ? (
        <div className="inline-flex absolute -top-1 -right-1 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
          {cartState?.cartItems.length}
        </div>
      ) : (
        ''
      )}
    </button>
  );
}

export default CartButton;
