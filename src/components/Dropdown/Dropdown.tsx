import React, { useState } from 'react';

type DropdownProps = {
  label: string;
  options: string[];
};

interface DropdownMenuProps {
  options: string[];
}

function DropdownMenu({ options }: DropdownMenuProps) {
  return (
    <ul>
      {options.map((option) => (
        <li key={option}>{option}</li>
      ))}
    </ul>
  );
}

function Dropdown({ label, options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {label}
      </button>
      {isOpen && <DropdownMenu options={options} />}
    </>
  );
}

export default Dropdown;
