import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowSvg from '../Svg/ArrowSvg';

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center bg-primary z-50 fixed rounded-full w-8 h-8 bottom-4 left-6 md:left-20 lg:hidden">
      <button
        type="button"
        onClick={() => navigate(-1)}
      >
        <div className="rotate-180 pr-2">
          <ArrowSvg />
        </div>
      </button>
    </div>
  );
}

export default GoBackButton;
