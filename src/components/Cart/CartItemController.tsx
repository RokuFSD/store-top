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
    if(quantity === 1){
      dispatch?.({ type: 'REMOVE_FROM_CART', payload: itemId });
      return;
    }
    dispatch?.({ type: 'DECREMENT_CART_ITEM', payload: itemId });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(+e.currentTarget.value === 0) {
      return
    }
    dispatch?.({
      type: 'MODIFY_CART_ITEM',
      payload: { id: itemId, quantity: +e.currentTarget.value },
    });
  };
  return (
    <div className="flex gap-2">
      <button className="text-red-500 font-bold" type="button" onClick={() => handleDecrement()}>
        -
      </button>
      <input className="text-center w-8" type="text" value={quantity} onChange={(e) => handleChange(e)} />
      <button className="text-green-500 font-bold" type="button" onClick={() => handleIncrement()}>
        +
      </button>
    </div>
  );
}

export default CartItemController;
