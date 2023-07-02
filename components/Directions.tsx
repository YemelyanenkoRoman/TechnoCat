'use client';

import { useRef, useState } from 'react';

const LinksNamesDirection = [
  'Программирование',
  'Робототехника',
  'Английский язык',
  'Подготовка к школе',
  'Помощь первокласснику',
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
      <div ref={directionRef} className="cursor-pointer">
        Направления
      </div>
      {open && (
        <div className="bg-local-gray-act shadow-lg absolute left-[-12px] top-22">
          <ul>
            {LinksNamesDirection.map((linkNameDirection) => (
              <li className="py-2 px-3 cursor-pointer rounded hover:bg-blue-100" key={linkNameDirection}>
                {linkNameDirection}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Directions;
