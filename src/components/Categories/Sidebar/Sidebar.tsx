import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryLink from '../CategoryLink';

type SidebarProps = {
  title: string;
  options: string[];
};

function Sidebar({ title, options }: SidebarProps) {
  return (
    <section className="flex flex-col px-4 w-56">
      <h1 className="text-2xl">{title}</h1>
      <ul>
        <NavLink to="/store">All Products</NavLink>
        {options.map((option) => (
          <CategoryLink name={option} key={option} />
        ))}
      </ul>
    </section>
  );
}

export default Sidebar;
