import React from 'react';
import { IProduct } from '../../../types/api';
import PlusSvg from '../../Svg/PlusSvg';

type ProductProps = {
  product: IProduct;
};

function Product({ product }: ProductProps) {
  return (
    <div className="flex flex-col w-11/12 overflow-hidden gap-3 card md:w-7:">
      <img src={product.images[0]} alt="product" />
      <h2 className="font-semibold px-1">
        {product.title}
        <span className="block line-clamp-2 font-normal text-xs w-44">{product.description}</span>
      </h2>
      <div className="w-full flex justify-between items-center px-1 my-1">
        <span className="text-md">$ {product.price}</span>
        <button
          type="button"
          className="flex items-center gap-2 bg-neutral-800 text-white rounded-lg p-1"
        >
          <PlusSvg />
          <span className="text-sm">Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default Product;
