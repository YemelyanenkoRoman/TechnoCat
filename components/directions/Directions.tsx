'use client';
import Link from 'next/link';
import { useState } from 'react';
import { DirectionsNav } from './DirectionsNav';
import { v4 as uuidv4 } from 'uuid';
import { useColor } from '../ColorNavigation';
import { usePathname } from 'next/navigation';

type DirectionsNav = {
  link: string;
  label: string;
};

const Directions = () => {
  const color = useColor();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseOver = () => {
    setIsMenuOpen(true);
  };

  const handleMouseOut = () => {
    setIsMenuOpen(false);
  };

  const pathname = usePathname();

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="relative ">
      <div className={isMenuOpen ? `${color.textColor} absolute cursor-pointer z-10` : 'absolute cursor-pointer z-10'}>
        Направления
      </div>
      {isMenuOpen && (
        <ul className={`${color.directColor} shadow-lg absolute left-[-12px] top-[-8px] rounded-md pt-[51px]`}>
          {DirectionsNav.map((item) => {
            const isActive = pathname === `/directions/${item.link}`;
            return (
              <li className={`py-2 px-3 cursor-pointer rounded ${color.hoverColor}`} key={uuidv4()}>
                <Link
                  className={
                    isActive
                      ? `opacity-80 ${color.activeColor}`
                      : `ease-linear duration-100 hover:opacity-80 ${color.hoverColor}`
                  }
                  href={`/directions/${item.link}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Directions;
