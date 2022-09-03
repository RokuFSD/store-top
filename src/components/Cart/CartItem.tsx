import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { ICartItem } from '../../context/Cart/cartReducer';
import { useCartDispatch } from '../../context/Cart/cartContext';
import CartItemController from './CartItemController';
import CrossSvg from '../Svg/CrossSvg';
import fallbackImg from '../../assets/pngwing.com.png';

type CartItemProps = {
  item: ICartItem;
};

function CartItem ({ item }: CartItemProps) {
  const dispatch = useCartDispatch();
  const handleRemove = () => {
    dispatch?.({ type: 'REMOVE_FROM_CART', payload: item.id });
  };
  return (
    <div className="flex w-full h-32 bg-white p-4 gap-4 relative md:w-3/5 lg:w-128 lg:h-48">
      <button
        className="absolute right-2 top-2"
        type="button"
        title="Remove"
        onClick={() => handleRemove()}
      >
        <CrossSvg />
      </button>
      <img
        src={item.image ? item.image : fallbackImg}
        alt="product"
        className="object-contain w-1/3"
      />
      <div className="flex flex-col justify-between w-full">
        <Link to={`/products/${item.id}`} state={item} className="w-11/12 text-xs lg:text-base hover:underline">{item.name}</Link>
        <div className="flex justify-between">
          <span>
            ${item.price} x {item.quantity}
          </span>
          <CartItemController quantity={item.quantity} itemId={item.id} />
        </div>
      </div>
    </div>
  );
}

const MemoCartItem = memo(CartItem);

export default MemoCartItem;
