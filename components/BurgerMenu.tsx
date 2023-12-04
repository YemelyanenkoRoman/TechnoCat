'use client';
import React, { useEffect, useState, useRef } from 'react';
import Directions from './directions/Directions';
import Navigation from './MainNavigation';
import { NavItems } from './TheHeader';
import { useColor } from './ColorNavigation';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const color = useColor();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClick);
    window.addEventListener('touchstart', handleClick);
    return () => {
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('touchstart', handleClick);
    };
  }, []);

  return (
    <div className="w-6">
      {/* Menu button */}
      <button className={`${color.textColor} block focus:outline-none`} onClick={handleClick}>
        {/* Animated burger icon */}
        <span
          aria-hidden={true}
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
            isOpen ? 'rotate-45' : '-translate-y-1.5'
          }`}
        ></span>
        <span
          aria-hidden={true}
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
            isOpen ? '-rotate-45' : 'translate-y-1.5'
          }`}
        ></span>
        <span
          aria-hidden={true}
          className={`block absolute h-0.5 w-5 bg-current ${
            isOpen ? 'opacity-0' : ''
          } transition duration-500 ease-in-out`}
        ></span>
      </button>

      {/* Menu content */}
      {isOpen && (
        <div className={`absolute w-screen h-screen top-[88px] right-0 pt-[30px] py-2 ${color.bgColor}  shadow-xl`}>
          {/* Menu items */}

          <Navigation navLinks={NavItems} />
          <Directions setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
