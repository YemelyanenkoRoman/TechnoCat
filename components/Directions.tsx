'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';

const NavItemsDirection = [
  { label: 'Программирование', href: '/' },
  { label: 'Робототехника', href: '/' },
  { label: 'Английский язык', href: '/' },
  { label: 'Подготовка к школе', href: '/' },
  { label: 'Помощь первокласснику', href: '/' },
];

const Directions = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const directionRef = useRef(null);

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== directionRef.current) {
      setOpen(false);
    }
  });

  return (
    <div onClick={() => setOpen(!open)} className="relative">
      <div
        ref={directionRef}
        className={open ? 'text-local-grey-act-t absolute cursor-pointer z-10' : 'absolute cursor-pointer z-10'}
        // className="absolute cursor-pointer z-10"
      >
        Направления
      </div>
      {open && (
        <ul className="bg-local-gray-act-2 shadow-lg absolute left-[-12px] top-[-8px] rounded-md pt-[51px]">
          {NavItemsDirection.map((link) => (
            <li className="py-2 px-3 cursor-pointer rounded hover:bg-blue-100" key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Directions;
