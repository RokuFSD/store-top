import { useState, useEffect } from 'react';
import { IProduct } from '../types/api';

const URL = 'https://api.escuelajs.co/api/v1/products';

function useProducts(query = ''): {
  products: IProduct[];
  loading: boolean;
  error: string;
} {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    let ignore = false;

    function fetchProducts() {
      fetch(`${URL}${query}`)
        .then((res) => res.json())
        .then((data: IProduct[]) => {
          if (!ignore) {
            if (!data.length) {
              throw new Error('Can not find products');
            }
            setProducts(data);
          }
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }

    fetchProducts();
    return () => {
      ignore = true;
    };
  }, [query]);
  return { products, loading, error };
}

export default useProducts;
