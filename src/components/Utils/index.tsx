import React, { ReactNode, useState, useRef } from 'react';
import HamburgerSvg from '../Svg/HamburgerSvg';

type Props = {
  comp: ReactNode;
};

function WithToggle({ comp }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClose: () => Promise<void> = () =>
    new Promise<void>((resolve) => {
      menuRef.current?.classList.add('animate-slide-from-bottom');
      setTimeout(() => {
        resolve();
      }, 400);
    });

  const handleClick = async () => {
    if (isOpen) {
      await handleClose();
    }
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button title="hamburger" type="button" onClick={handleClick} aria-label="hamburger">
        <HamburgerSvg />
      </button>
      <section
        className={`${
          isOpen ? 'block' : 'hidden'
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
