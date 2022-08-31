import React from 'react';
import { IProduct } from '../../types/api';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';


const URL = 'https://fakestoreapi.com/products/';

type ProductDetailsProps = {
  product: IProduct;
}

type WithFetchProductDetailsProps = {
  id: IProduct['id'];
}

function ProductDetails({product}: ProductDetailsProps) {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

function WithFetchProductDetails({id}: WithFetchProductDetailsProps) {
  const {data: fetchedProduct, error} = useFetch<IProduct>(`${URL}${id}`);

  /* TODO: Redirect to a 404 page */
  if(error){
    return <div>There is an error</div>;
  }

  if(!fetchedProduct){
    return <Loader/>
  }

  return <ProductDetails product={fetchedProduct}/>;
}

export {ProductDetails, WithFetchProductDetails};
