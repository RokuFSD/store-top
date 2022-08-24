import React from 'react';
import { useCartDispatch } from '../../context/Cart/cartContext';

type CartItemControllerProps = {
  quantity: number;
  itemId: number;
};

function CartItemController({ quantity, itemId }: CartItemControllerProps) {
  const dispatch = useCartDispatch();
  const handleIncrement = () => {
    dispatch?.({ type: 'INCREMENT_CART_ITEM', payload: itemId });
  };

  const handleDecrement = () => {
    dispatch?.({ type: 'DECREMENT_CART_ITEM', payload: itemId });
  };
  return (
    <div>
      <button type="button" onClick={() => handleDecrement()}>
        -
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => handleIncrement()}>
        +
      </button>
    </div>
  );
}

export default CartItemController;
