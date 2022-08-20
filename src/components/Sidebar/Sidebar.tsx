import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <section className="fixed left-0 top-2/4 w-52 h-80 flex flex-col border-r-2 border-black -translate-y-2/4">
      <Link to="/store">All Products</Link>
      {categories.map((category) => (
        <Link key={category.id} to={`category/${category.id}`}>
          {category.name}
        </Link>
      ))}
    </section>
  );
}

export default Sidebar;
