import React, { useState } from 'react';
import CategoriesMenu from '../CategoriesMenu';

type DropdownProps = {
  label: string;
  options: string[];
};

function Dropdown({ label, options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col w-full px-20">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-start">
        <span>Filter by {label}:</span>
      </button>
      {isOpen && <CategoriesMenu options={options} />}
    </section>
  );
}

export default Dropdown;
