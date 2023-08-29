'use client';
import React, { useState } from 'react';
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

  return (
    <div className="w-6">
      {/* Menu button */}
      <button
        className="block text-gray-500 hover:text-gray-300 focus:text-gray-300 focus:outline-none"
        onClick={handleClick}
      >
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
          <Directions />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
