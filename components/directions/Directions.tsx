'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { DirectionsNav } from './DirectionsNav';
import { v4 as uuidv4 } from 'uuid';
import { useColor } from '../ColorNavigation';
import { usePathname } from 'next/navigation';

type DirectionsNav = {
  href: string;
  label: string;
};

const Directions = () => {
  const ref = useRef<HTMLDivElement>(null);

  const color = useColor();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseOver = () => {
    setIsMenuOpen(true);
  };

  const handleMouseOut = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClick);
    window.addEventListener('touchstart', handleClick);
    return () => {
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('touchstart', handleClick);
    };
  }, []);

  const pathname = usePathname();

  return (
    <div
      ref={ref}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="relative md:font-poppins md:font-normal md:text-sexteen xs:text-twentyfive xs:font-gilroy xs:font-light"
    >
      <div
        onClick={() => setIsMenuOpen(true)}
        className={isMenuOpen ? `${color.textColor} absolute cursor-pointer z-10` : 'absolute cursor-pointer z-10'}
      >
        Направления
      </div>
      {isMenuOpen && (
        <ul
          className={`${color.directColor}  absolute md:shadow-lg  md:left-[-12px] md:top-[-8px] md:rounded-md md:pt-[51px] `}
        >
          {DirectionsNav.map((item) => {
            const isActive = pathname === `${item.href}`;
            return (
              <li className={`py-2 px-3 cursor-pointer rounded ${color.hoverColor}`} key={uuidv4()}>
                <Link
                  className={
                    isActive
                      ? `opacity-80 ${color.activeColor}`
                      : `ease-linear duration-100 hover:opacity-80 ${color.hoverColor}`
                  }
                  href={`${item.href}`}
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
