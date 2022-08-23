import React from 'react';
import { NavLink } from 'react-router-dom';
import { ICategory } from '../../types/api';
import useFetch from '../../hooks/useFetch';

const URL = 'https://api.escuelajs.co/api/v1/categories';

function Sidebar() {
  const { data: categories, error } = useFetch<ICategory[]>(URL);

  if (error) {
    return <div>There is an error</div>;
  }
  return (
    <section className="flex flex-col px-4">
      <h1 className="text-2xl">Categories</h1>
      <NavLink to="/store">All Products</NavLink>
      {!categories ? (
        <div>Loading...</div>
      ) : (
        categories.map((category) => (
          <NavLink key={category.id} to={`category/${category.id}`}>
            {category.name}
          </NavLink>
        ))
      )}
    </section>
  );
}

export default Sidebar;
