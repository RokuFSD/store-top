import React from 'react';
import { NavLink } from 'react-router-dom';
import { ICategory } from '../../types/api';
import useFetch from '../../hooks/useFetch';

const URL = 'https://api.storerestapi.com/categories';

function Sidebar() {
  const { data: categories, error } = useFetch<{ data: ICategory[] }>(URL);

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
        categories.data.map((category) => (
          // eslint-disable-next-line no-underscore-dangle
          <NavLink key={category._id} to={`category/${category.slug}`}>
            {category.name}
          </NavLink>
        ))
      )}
    </section>
  );
}

export default Sidebar;
