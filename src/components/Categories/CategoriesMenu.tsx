import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryLink from './CategoryLink';

type CategoriesMenuProps = {
  options: string[];
};

function CategoriesMenu({ options }: CategoriesMenuProps) {
  return (
    <ul>
      <li>
        <NavLink to="/store">All Products</NavLink>
      </li>
      {options.map((option) => (
        <CategoryLink name={option} key={option} />
      ))}
    </ul>
  );
}

export default CategoriesMenu;
