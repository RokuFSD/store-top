import React from 'react';
import { NavLink } from 'react-router-dom';

function SidebarLink({ name }: { name: string }) {
  return <NavLink to={`category/${name}`}>{name}</NavLink>;
}

export default SidebarLink;
