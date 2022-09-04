import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';

const URL = 'https://fakestoreapi.com';

type DropdownProps = {
  label: string;
};

function DropdownMenu() {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

function Dropdown({ label }: DropdownProps) {
  const { data: categories, error } = useFetch<string[]>(`${URL}/products/categories`);
  const [isOpen, setIsOpen] = useState(false);

  if (error) {
    return <div>There is an error</div>;
  }

  if (!categories){
    return <Loader />;
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {label}
      </button>
      {isOpen && <DropdownMenu />}
    </>
  );
}

export default Dropdown;
