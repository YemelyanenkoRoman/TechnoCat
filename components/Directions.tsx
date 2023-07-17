'use client';
import Link from 'next/link';
import { useState } from 'react';

export const NavItemsDirection = [
  { label: 'Программирование', id: 'programming', name: 'programming' },
  { label: 'Робототехника', id: 'robotics', name: 'robotics' },
  { label: 'Английский язык', id: 'english', name: 'english' },
  { label: 'Подготовка к школе', id: 'english', name: 'english' },
  { label: 'Помощь первокласснику', id: 'firstgradestudent', name: 'First grade student' },
];

const Directions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseOver = () => {
    setIsMenuOpen(true);
  };

  const handleMouseOut = () => {
    setIsMenuOpen(false);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="relative">
      <div className={isMenuOpen ? 'text-gray-700 absolute cursor-pointer z-10' : 'absolute cursor-pointer z-10'}>
        Направления
      </div>
      {isMenuOpen && (
        <ul className="bg-local-gray-act-2 shadow-lg absolute left-[-12px] top-[-8px] rounded-md pt-[51px]">
          {NavItemsDirection.map((link) => (
            <li className="py-2 px-3 cursor-pointer rounded hover:text-gray-700" key={link.label}>
              <Link href={`/directions/${link.id}`}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Directions;
