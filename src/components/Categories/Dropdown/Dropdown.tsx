import React, { useState } from 'react';
import CategoriesMenu from '../CategoriesMenu';

type DropdownProps = {
  label: string;
  options: string[];
};

function Dropdown({ label, options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {label}
      </button>
      {isOpen && <CategoriesMenu options={options} />}
    </>
  );
}

export default Dropdown;
