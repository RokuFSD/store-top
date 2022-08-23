import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ICategory } from '../../types/api';

const URL = 'https://api.escuelajs.co/api/v1/categories';

function Sidebar() {
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  /* TODO: Render it only when its loaded */
  // const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    let ignore = false;

    function fetchProducts() {
      fetch(`${URL}`)
        .then((res) => res.json())
        .then((data: ICategory[]) => {
          if (!ignore) {
            if (!data.length) {
              throw new Error("Can't find any categories");
            }
            setCategories(data);
          }
          // setLoading(false);
        })
        .catch(() => {
          // setLoading(false);
        });
    }

    fetchProducts();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="flex flex-col px-4">
      <h1 className="text-2xl">Categories</h1>
      <NavLink to="/store">All Products</NavLink>
      {categories.map((category) => (
        <NavLink key={category.id} to={`category/${category.id}`}>
          {category.name}
        </NavLink>
      ))}
    </section>
  );
}

export default Sidebar;
