import React, { ReactNode, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import HamburgerSvg from '../Svg/HamburgerSvg';
import useUpdateEffect from '../../hooks/useUpdateEffect';

type Props = {
  comp: ReactNode;
};

function WithToggle({ comp }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleClose: (time: number) => Promise<void> = (time) =>
    new Promise<void>((resolve) => {
      menuRef.current?.classList.remove('animate-slide-from-top');
      menuRef.current?.classList.add('animate-slide-from-bottom');
      setTimeout(() => {
        resolve();
      }, time);
    });

  const handleClick = async () => {
    if (isOpen) {
      await handleClose(400);
    }
    setIsOpen(!isOpen);
  };

  useUpdateEffect(() => {
    handleClose(300).then(() => {
      setIsOpen(false);
    });
  }, [location]);

  return (
    <>
      <button title="hamburger" type="button" onClick={handleClick} aria-label="hamburger">
        <HamburgerSvg />
      </button>
      <section
        className={`${
          isOpen ? 'visible' : 'hidden'
        } animate-slide-from-top absolute w-full left-0 top-full z-0`}
        ref={menuRef}
        data-testid="toggable-section"
      >
        {comp}
      </section>
    </>
  );
}

export default WithToggle;
