import React from 'react';
import { NavLink } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const URL = 'https://fakestoreapi.com';

function Sidebar() {
  const { data: categories, error } = useFetch<string[]>(`${URL}/products/categories`);

  if (error) {
    return <div>There is an error</div>;
  }
  return (
    <section className="flex flex-col px-4 w-56">
      <h1 className="text-2xl">Categories</h1>
      <NavLink to="/store">All Products</NavLink>
      {!categories ? (
        <div>Loading...</div>
      ) : (
        categories.map((category) => (
          // eslint-disable-next-line no-underscore-dangle
          <NavLink key={category} to={`category/${category}`}>
            {category}
          </NavLink>
        ))
      )}
    </section>
  );
}

export default Sidebar;
