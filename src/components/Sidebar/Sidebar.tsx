import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarLink from './SidebarLink';

type SidebarProps = {
  title: string;
  options: string[];
};

function Sidebar({ title, options }: SidebarProps) {
  return (
    <section className="flex flex-col px-4 w-56">
      <h1 className="text-2xl">{title}</h1>
      <NavLink to="/store">All Products</NavLink>
      {options.map((option) => (
        <SidebarLink name={option} key={option} />
      ))}
    </section>
  );
}

export default Sidebar;
