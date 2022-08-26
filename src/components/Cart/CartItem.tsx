import React from 'react';
import { ICartItem } from '../../context/Cart/cartReducer';
import { useCartDispatch } from '../../context/Cart/cartContext';
import CartItemController from './CartItemController';
import CrossSvg from '../Svg/CrossSvg';
import fallbackImg from '../../assets/pngwing.com.png';

type CartItemProps = {
  item: ICartItem;
};

function CartItem({ item }: CartItemProps) {
  const dispatch = useCartDispatch();
  const handleRemove = () => {
    dispatch?.({ type: 'REMOVE_FROM_CART', payload: item.id });
  };
  return (
    <div className="flex w-128 bg-white p-4 gap-4 relative">
      <button
        className="absolute right-4"
        type="button"
        title="Remove"
        onClick={() => handleRemove()}
      >
        <CrossSvg />
      </button>
      <img src={item.image ? item.image : fallbackImg} alt="product" className="w-60" />
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
