import React from 'react';
import { ICartItem } from '../../context/Cart/cartReducer';
import CartItemController from './CartItemController';

type CartItemProps = {
  item: ICartItem;
};

function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex w-128 bg-white p-4 gap-4">
      <img src={item.image} alt="product" className="w-60" />
      <div className="flex flex-col justify-between w-full">
        <h2>{item.name}</h2>
        <div className="flex justify-between">
          <span>
            {item.price} x {item.quantity}
          </span>
          <CartItemController quantity={item.quantity} itemId={item.id} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
