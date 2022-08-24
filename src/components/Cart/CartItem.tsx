import React from 'react';
import { ICartItem } from '../../context/Cart/cartReducer';
import CartItemController from './CartItemController';

type CartItemProps = {
  item: ICartItem;
};

function CartItem({ item }: CartItemProps) {
  return (
    <div>
      <img src={item.image} alt="product" />
      <div>
        <h2>{item.name}</h2>
        <div>
          <span>{item.price} x {item.quantity}</span>
          <CartItemController quantity={item.quantity} itemId={item.id}/>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
