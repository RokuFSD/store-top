import React from 'react';
import PlusSvg from '../Svg/PlusSvg';
import CheckSvg from '../Svg/CheckSvg';

type ButtonProps = {
  onClick: () => void;
  disabled: boolean | undefined;
};

function ProductButton({ onClick, disabled }: ButtonProps) {
  const addClass = 'bg-transparent border-neutral-800 hover:bg-neutral-800 hover:text-white';
  const addedClass = 'bg-green-400 text-white';
  return (
    <button
      type="button"
      className={`border-2 rounded-lg p-1 transition-all flex items-center gap-2 ${
        disabled ? addedClass : addClass
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? <CheckSvg /> : <PlusSvg />}
      <span className="text-sm">{disabled ? 'Added to cart' : 'Add to cart'}</span>
    </button>
  );
}

export default ProductButton;
