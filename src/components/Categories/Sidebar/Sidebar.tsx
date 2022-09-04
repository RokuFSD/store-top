import React from 'react';
import CategoriesMenu from '../CategoriesMenu';

type SidebarProps = {
  title: string;
  options: string[];
};

function Sidebar({ title, options }: SidebarProps) {
  return (
    <section className="flex flex-col px-4 w-56">
      <h1 className="text-2xl">{title}</h1>
      <CategoriesMenu options={options}/>
    </section>
  );
}

export default Sidebar;
