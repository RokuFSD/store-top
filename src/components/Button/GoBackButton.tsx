import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowSvg from '../Svg/ArrowSvg';

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <div className="z-50 fixed bottom-4 left-6 md:left-20 lg:hidden">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-xs flex items-center gap-2"
      >
        <div className="rotate-180">
          <ArrowSvg />
        </div>
      </button>
    </div>
  );
}

export default GoBackButton;
