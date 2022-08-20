import React from 'react';
import { IProduct } from '../../../types/api';

type ProductProps = {
  product: IProduct;
};

function Product({ product }: ProductProps) {
  return (
    <div className="flex flex-col w-64 overflow-hidden gap-2">
      <div className="bg-white">
        <img src={product.images[0]} alt="product" className="w-4/6 mx-auto" />
      </div>
      <h2 className="font-semibold">
        {product.title}
        <span className="block line-clamp-2 font-normal text-xs w-44">{product.description}</span>
      </h2>
      <div className="w-full flex justify-between pr-8">
        <span>{product.price}</span>
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
