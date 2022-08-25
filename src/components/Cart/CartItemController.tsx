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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch?.({
      type: 'MODIFY_CART_ITEM',
      payload: { id: itemId, quantity: +e.currentTarget.value },
    });
  };
  return (
    <div>
      <button type="button" onClick={() => handleDecrement()}>
        -
      </button>
      <input type="text" value={quantity} onChange={(e) => handleChange(e)} />
      <span>{quantity}</span>
      <button type="button" onClick={() => handleIncrement()}>
        +
      </button>
    </div>
  );
}

export default CartItemController;
