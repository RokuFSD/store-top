import React from 'react';
import { NavLink } from 'react-router-dom';

function CategoryLink({ name }: { name: string }) {
  return (
    <li>
      <NavLink to={`category/${name}`}>{name}</NavLink>
    </li>
  );
}

export default CategoryLink;
