import React, {useId} from 'react';
import { NavLink } from 'react-router-dom';
import CategoryLink from './CategoryLink';

type CategoriesMenuProps = {
  options: string[];
};

function CategoriesMenu({ options }: CategoriesMenuProps) {
  const prefix = useId();
  return (
    <ul>
      <li>
        <NavLink to="/store">all products</NavLink>
      </li>
      {options.map((option) => (
        <CategoryLink name={option} key={prefix + option} />
      ))}
    </ul>
  );
}

export default CategoriesMenu;
